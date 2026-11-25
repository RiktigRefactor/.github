// Regenerates profile/build-status.include.md, which mdsnippets pulls into profile/README.md.
// Usage: node scripts/generate-build-status.mjs   (needs the gh CLI, authenticated)
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const ORG = 'RiktigRefactor';
const FILE = 'profile/build-status.include.md';

const gh = (...args) => execFileSync('gh', args, { encoding: 'utf8' });

const repos = JSON.parse(gh('repo', 'list', ORG, '--limit', '200', '--no-archived', '--json', 'name,url'))
  .filter(r => r.name !== '.github')
  .sort((a, b) => a.name.localeCompare(b.name));

const data = [];
const cols = new Set();
for (const r of repos) {
  let wfs = [];
  try {
    wfs = JSON.parse(gh('api', `repos/${ORG}/${r.name}/actions/workflows`, '-q', '.workflows')).filter(w => w.state === 'active' && w.path.startsWith('.github/workflows/'));
  } catch {}
  wfs.forEach(w => cols.add(w.name));
  data.push({ r, wfs });
}
const names = [...cols].sort((x, y) => x.localeCompare(y));
const rows = data.map(({ r, wfs }) => {
  const cells = names.map(n => {
    const w = wfs.find(w => w.name === n);
    if (!w) return '';
    const base = `${r.url}/actions/workflows/${w.path.split('/').pop()}`;
    return `[![${n.replace(/[\[\]]/g, '')}](${base}/badge.svg)](${base})`;
  });
  return `| [${r.name}](${r.url}) | ${cells.join(' | ')} |`;
});

const block = [`| Repo | ${names.map(n => n.replace(/\|/g, '\\|')).join(' | ')} |`, `|---|${names.map(() => '---').join('|')}|`, ...rows].join('\n');
writeFileSync(FILE, block + '\n');
