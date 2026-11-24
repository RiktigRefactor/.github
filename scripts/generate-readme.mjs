// Regenerates the repositories table in profile/README.md from the org's repos.
// Usage: node scripts/generate-readme.mjs   (needs the gh CLI, authenticated)
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const ORG = 'RiktigRefactor';
const FILE = 'profile/README.md';
const START = '<!-- repos-table:start -->';
const END = '<!-- repos-table:end -->';

const gh = (...args) => execFileSync('gh', args, { encoding: 'utf8' });

const repos = JSON.parse(gh('repo', 'list', ORG, '--limit', '200', '--no-archived',
  '--json', 'name,description,url')).filter(r => r.name !== '.github')
  .sort((a, b) => a.name.localeCompare(b.name));

function readme(name) {
  try { return Buffer.from(gh('api', `repos/${ORG}/${name}/readme`, '-q', '.content'), 'base64').toString('utf8'); }
  catch { return ''; }
}

// Finds the first badge (optionally wrapped in a link) whose alt text starts with the label.
function badge(text, label) {
  const linked = new RegExp(`\\[!\\[${label}[^\\]]*\\]\\([^)]*\\)\\]\\([^)]*\\)`, 'i').exec(text);
  if (linked) return linked[0];
  const plain = new RegExp(`!\\[${label}[^\\]]*\\]\\([^)]*\\)`, 'i').exec(text);
  return plain ? plain[0] : '';
}

const esc = s => (s || '').replace(/\|/g, '\\|');
// Sort by status (badge alt text; repos without a status badge last), then by name.
const rows = repos.map(r => ({ r, status: badge(readme(r.name), 'Status') }))
  .sort((a, b) => (a.status ? 0 : 1) - (b.status ? 0 : 1) || a.status.localeCompare(b.status) || a.r.name.localeCompare(b.r.name))
  .map(({ r, status }) => `| [${r.name}](${r.url}) | ${esc(r.description)} | ${status} |`);

const table = [START, '| Repo | What it is | Status |', '|---|---|---|', ...rows, END].join('\n');
const src = readFileSync(FILE, 'utf8');
const re = new RegExp(`${START}[\\s\\S]*?${END}`);
if (!re.test(src)) throw new Error('markers not found in ' + FILE);
writeFileSync(FILE, src.replace(re, () => table));
