// AA・EAA 教科書の build: 章の md → 1 ファイルの HTML（1 ページ = 絵 1 枚 + 短い文）
// 使い方: ./build.sh            … aa-ch*.md を番号順にまとめて build/aa.html
//         ./build.sh <x.md> …    … 指定した md だけを build/<最初の md の名前>.html
// 作りは、別の資料の build の「md の ```dot を build 時に SVG にする」を借りた。コードは新しく書いた。
//
// md の書き方
//   # 章の題          … 扉のページ（絵は無くてよい）
//   ## ページの見出し  … ここから次の ## までが 1 ページ
//   ```svg / ```dot   … 絵。1 ページにちょうど 1 枚（無い・2 枚以上は build が止まる）
//   ふつうの段落       … 文。1 ページ BODY_MAX 字まで（超えたら build が止まる）
//   「出典:」「※」で始まる段落 … 注。小さく出す。NOTE_MAX 字まで
//   <!-- … -->        … 書き手のメモ。HTML には出さない
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const OUT = path.join(ROOT, 'build');
export const BODY_MAX = 80;   // 1 ページの文の上限（字。空白と md の記号を除く）。plan §B.3
export const NOTE_MAX = 90;   // 注の上限
const HEAD_MAX = 20;          // 見出しの上限
const SIGNATURE = '@writer-ja [bridge-claude2] (operator-supervised · k-ishibashi-ntv/agent-hub)';

export class BuildError extends Error {}
const fail = msg => { throw new BuildError(msg); };
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// 数え方は計画の旧版（「空白を除く」）とそろえる。md の記号（** ` # > |）と空白だけ除き、句読点は数える
export const countChars = s => [...s.replace(/<[^>]+>/g, '').replace(/[*`#>|\s]/g, '')].length;

// ---------- 絵 ----------
let GV = null;
export async function loadGraphviz() {
  if (!GV) { const { Graphviz } = await import('@hpcc-js/wasm-graphviz'); GV = await Graphviz.load(); }
  return GV;
}
function figure(kind, src, where) {
  let svg;
  if (kind === 'dot') {
    if (!GV) fail('graphviz を読み込めていない');
    svg = GV.dot(src).replace(/<\?xml[\s\S]*?\?>/g, '').replace(/<!DOCTYPE[\s\S]*?>/gi, '').replace(/<!--[\s\S]*?-->/g, '');
  } else {
    svg = src.trim();
    if (!/^<svg[\s>]/.test(svg)) fail(`${where}: svg の塊が <svg で始まっていない`);
  }
  if (/<script|on\w+\s*=/i.test(svg)) fail(`${where}: 絵に script / イベント属性がある`);
  return `<figure>${svg}</figure>`;
}

// ---------- md → ページ ----------
function dropSignature(md) {
  const lines = md.replace(/\s+$/, '').split('\n');
  if (lines.at(-1) !== SIGNATURE) return md;
  lines.pop();
  while (lines.length && lines.at(-1).trim() === '') lines.pop();
  if (lines.at(-1) === '---') lines.pop();
  return lines.join('\n') + '\n';
}
const pandoc = md => md.trim() ? execFileSync('pandoc', ['-f', 'gfm', '-t', 'html5', '--wrap=none'], { input: md, encoding: 'utf8' }) : '';

export function readChapter(file) {
  let md = dropSignature(fs.readFileSync(file, 'utf8')).replace(/<!--[\s\S]*?-->/g, '');
  const name = path.basename(file);
  const h1 = md.match(/^# (.+)$/m) || fail(`${name}: 章の題（# …）が無い`);
  const parts = md.split(/^## /m);
  const cover = parts.shift().replace(/^# .+$/m, '');
  const pages = [{ cover: true, title: h1[1].trim(), ...body(cover, `${name} の扉`, true) }];
  parts.forEach((p, i) => {
    const nl = p.indexOf('\n');
    const title = (nl < 0 ? p : p.slice(0, nl)).trim();
    const where = `${name} p.${i + 1}「${title}」`;
    if (countChars(title) > HEAD_MAX) fail(`${where}: 見出しが ${countChars(title)} 字（上限 ${HEAD_MAX}）`);
    pages.push({ title, ...body(nl < 0 ? '' : p.slice(nl + 1), where, false) });
  });
  return { name, title: h1[1].trim(), pages };
}
function body(text, where, cover) {
  const figs = [];
  text = text.replace(/^```(svg|dot)[^\n]*\n([\s\S]*?)^```[ \t]*$/gm, (_, k, src) => { figs.push(figure(k, src, where)); return ''; });
  if (!cover && figs.length !== 1) fail(`${where}: 絵が ${figs.length} 枚（1 ページにちょうど 1 枚）`);
  const paras = text.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
  const notes = paras.filter(s => /^(出典[:：]|※)/.test(s));
  const main = paras.filter(s => !notes.includes(s));
  const nBody = countChars(main.join('')), nNote = countChars(notes.join(''));
  if (!cover && nBody > BODY_MAX) fail(`${where}: 文が ${nBody} 字（上限 ${BODY_MAX}）。絵に持たせるか、ページを分ける`);
  if (nNote > NOTE_MAX) fail(`${where}: 注が ${nNote} 字（上限 ${NOTE_MAX}）`);
  return { fig: figs[0] || '', text: pandoc(main.join('\n\n')), note: pandoc(notes.join('\n\n')), nBody, nNote };
}

// ---------- HTML ----------
const DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#555"/></marker>
<marker id="arr-x" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#c62828"/></marker>
<pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#eee"/><line x1="0" y1="0" x2="0" y2="8" stroke="#cfcfcf" stroke-width="3"/></pattern>
<pattern id="hatch-x" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#fbe3e3"/><line x1="0" y1="0" x2="0" y2="8" stroke="#e8a3a3" stroke-width="3"/></pattern>
<symbol id="i-wait" viewBox="0 0 20 28"><path d="M2,1 H18 V5 L11.5,14 L18,23 V27 H2 V23 L8.5,14 L2,5 Z" fill="#d9822b"/><path d="M5,6 H15 L10,12 Z M5,25 L10,19 L15,25 Z" fill="#fff"/></symbol>
<symbol id="i-pile" viewBox="0 0 28 28"><rect x="2" y="19" width="24" height="7" fill="#c62828"/><rect x="5" y="11" width="18" height="7" fill="#c62828"/><rect x="8" y="3" width="12" height="7" fill="#c62828"/></symbol>
<symbol id="i-pr" viewBox="0 0 24 30"><rect x="1" y="1" width="22" height="28" rx="2" fill="#fff" stroke="#2f6fb3" stroke-width="2"/><path d="M5,8 H19 M5,13 H19 M5,18 H15" stroke="#2f6fb3" stroke-width="2"/></symbol>
<symbol id="i-ok" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#2e7d32"/><path d="M6,12.5 L10.5,17 L18,8" fill="none" stroke="#fff" stroke-width="3"/></symbol>
<symbol id="i-no" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#c62828"/><path d="M7,7 L17,17 M17,7 L7,17" stroke="#fff" stroke-width="3"/></symbol>
</defs></svg>`;

// 絵の色は本 1 冊で固定する（plan §B.4）。人 = 橙、AI = 青、待ち = 灰、間違い = 赤、通った = 緑
const CSS = `
:root { --h:#d9822b; --a:#2f6fb3; --w:#b5b5b5; --x:#c62828; --ok:#2e7d32; --ink:#222; --sub:#777; }
* { box-sizing: border-box; }
body { margin: 0; background: #e9e9e6; color: var(--ink); font-family: "Hiragino Sans","Noto Sans JP","Noto Sans CJK JP","Yu Gothic",sans-serif; }
section.page { width: 960px; height: 600px; margin: 24px auto; background: #fff; box-shadow: 0 1px 4px rgba(0,0,0,.18); padding: 18px 40px 16px; display: flex; flex-direction: column; position: relative; overflow: hidden; }
.run { font-size: 12px; color: var(--sub); display: flex; justify-content: space-between; }
section.page h2 { font-size: 27px; margin: 6px 0 4px; letter-spacing: .02em; }
section.page figure { flex: 1; min-height: 0; margin: 4px 0; display: flex; align-items: center; justify-content: center; }
section.page figure svg { max-width: 100%; max-height: 100%; height: auto; }
.txt { font-size: 20px; line-height: 1.6; }
.txt p { margin: 0 0 .2em; }
.note { font-size: 12px; color: var(--sub); line-height: 1.5; }
.note p { margin: 0; }
section.cover { justify-content: center; padding: 60px 90px; }
section.cover .run { position: absolute; top: 18px; left: 40px; right: 40px; }
section.cover h1 { font-size: 46px; margin: 0 0 24px; }
section.cover .txt { font-size: 22px; color: #444; }
svg text { font-family: inherit; fill: var(--ink); }
svg .t { font-size: 20px; } svg .ts { font-size: 15px; } svg .tl { font-size: 26px; font-weight: 700; } svg .tx { font-size: 13px; fill: var(--sub); }
svg .h { fill: var(--h); } svg .a { fill: var(--a); } svg .w { fill: url(#hatch); } svg .x { fill: var(--x); } svg .ok { fill: var(--ok); } svg .xw { fill: url(#hatch-x); }
svg .hl { fill: none; stroke: var(--h); stroke-width: 3; } svg .al { fill: none; stroke: var(--a); stroke-width: 3; } svg .xl { fill: none; stroke: var(--x); stroke-width: 3; }
svg .ln { fill: none; stroke: #555; stroke-width: 2; } svg .lt { fill: none; stroke: #bbb; stroke-width: 1.5; } svg .dash { stroke-dasharray: 6 5; }
svg .box { fill: #fff; stroke: #555; stroke-width: 2; } svg .soft { fill: #f4f4f2; }
svg text.on { fill: #fff; } svg text.hc { fill: var(--h); } svg text.ac { fill: var(--a); } svg text.xc { fill: var(--x); } svg text.okc { fill: var(--ok); } svg text.sub { fill: var(--sub); }
@page { size: 960px 600px; margin: 0; }
@media print { body { background: #fff; } section.page { margin: 0; box-shadow: none; break-after: page; } }
`;
const NAV = `<script>
// ←/→ でページを送る（外部には出ない）
document.addEventListener('keydown', e => {
  const ps = [...document.querySelectorAll('section.page')];
  const y = window.scrollY + 40, i = ps.findIndex(p => p.offsetTop + p.offsetHeight > y);
  const go = j => { if (ps[j]) { ps[j].scrollIntoView({ block: 'center' }); e.preventDefault(); } };
  if (e.key === 'ArrowRight' || e.key === 'PageDown') go(i + 1);
  if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(i - 1);
});
</script>`;

export function render(files, extraHead = '') {
  const chs = files.map(readChapter);
  let n = 0;
  const secs = chs.flatMap(ch => ch.pages.map(p => {
    n++;
    const run = `<div class="run"><span>${esc(ch.title)}</span><span>${n}</span></div>`;
    if (p.cover) return `<section class="page cover">${run}<h1>${esc(p.title)}</h1><div class="txt">${p.text}</div>${p.fig}</section>`;
    return `<section class="page">${run}<h2>${esc(p.title)}</h2>${p.fig}<div class="txt">${p.text}</div><div class="note">${p.note}</div></section>`;
  }));
  const title = chs.map(c => c.title).join(' / ');
  const html = `<!doctype html>\n<html lang="ja"><head><meta charset="utf-8"><title>${esc(title)}</title><style>${CSS}</style>${extraHead}</head><body>\n${DEFS}\n${secs.join('\n')}\n${NAV}</body></html>\n`;
  const ext = html.match(/(?:src|href)\s*=\s*"(?:https?:)?\/\/[^"]*"|url\(\s*['"]?(?:https?:)?\/\//i);
  if (ext) fail(`外部参照がある: ${ext[0]}`);
  return { html, chs };
}

export function sources(args) {
  if (args.length) return args.map(a => path.resolve(a));
  const fs_ = fs.readdirSync(ROOT).filter(f => /^aa-ch\d+\.md$/.test(f)).sort();
  if (!fs_.length) fail('aa-ch*.md が 1 本も無い');
  return fs_.map(f => path.join(ROOT, f));
}

export function report(chs) {
  for (const ch of chs) {
    const ps = ch.pages.filter(p => !p.cover);
    const sum = ps.reduce((a, p) => a + p.nBody, 0);
    console.log(`  ${ch.name}: ${ps.length} ページ + 扉 / 文 ${sum} 字（1 ページ平均 ${Math.round(sum / (ps.length || 1))} 字・最大 ${Math.max(0, ...ps.map(p => p.nBody))} 字）`);
    ps.forEach((p, i) => console.log(`    p.${String(i + 1).padStart(2)} ${String(p.nBody).padStart(3)} 字${p.nNote ? ` + 注 ${p.nNote}` : ''}  ${p.title}`));
  }
}

async function main() {
  try {
    await loadGraphviz();
    const files = sources(process.argv.slice(2));
    const { html, chs } = render(files);
    fs.mkdirSync(OUT, { recursive: true });
    const out = path.join(OUT, process.argv.length > 2 ? path.basename(files[0], '.md') + '.html' : 'aa.html');
    fs.writeFileSync(out, html);
    report(chs);
    console.log(`  出力: ${path.relative(ROOT, out)}（${(html.length / 1024).toFixed(0)} KB・外部参照なし）`);
  } catch (e) {
    console.error(e instanceof BuildError ? `build 失敗: ${e.message}` : e);
    process.exit(1);
  }
}
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) main();
