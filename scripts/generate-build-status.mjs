// Regenerates the collapsed build status table at the bottom of profile/README.md.
// Usage: node scripts/generate-build-status.mjs   (needs the gh CLI, authenticated)
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const ORG = 'RiktigRefactor';
const FILE = 'profile/README.md';
const START = '<!-- build-status:start -->';
const END = '<!-- build-status:end -->';

const gh = (...args) => execFileSync('gh', args, { encoding: 'utf8' });

const repos = JSON.parse(gh('repo', 'list', ORG, '--limit', '200', '--no-archived', '--json', 'name,url'))
  .sort((a, b) => a.name.localeCompare(b.name));

const rows = [];
for (const r of repos) {
  let wfs = [];
  try {
    wfs = JSON.parse(gh('api', `repos/${ORG}/${r.name}/actions/workflows`, '-q', '.workflows')).filter(w => w.state === 'active' && w.path.startsWith('.github/workflows/'));
  } catch {}
  if (!wfs.length) { rows.push(`| [${r.name}](${r.url}) | | |`); continue; }
  for (const w of wfs) {
    const file = w.path.split('/').pop();
    const base = `${r.url}/actions/workflows/${file}`;
    rows.push(`| [${r.name}](${r.url}) | ${w.name.replace(/\|/g, '\\|')} | [![${w.name.replace(/[\[\]]/g, '')}](${base}/badge.svg)](${base}) |`);
  }
}

const block = [START, '<details>', '<summary>Build status</summary>', '', '| Repo | Workflow | Status |', '|---|---|---|', ...rows, '', '</details>', END].join('\n');
let src = readFileSync(FILE, 'utf8');
const re = new RegExp(`${START}[\\s\\S]*?${END}`);
src = re.test(src) ? src.replace(re, () => block) : src.trimEnd() + '\n\n' + block + '\n';
writeFileSync(FILE, src);
