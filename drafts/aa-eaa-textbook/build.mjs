// AA・EAA 教科書の build: 章の md → 1 ファイルの HTML（1 ページ = 絵 1 枚 + 短い文）
// 使い方: ./build.sh            … aa-ch*.md を番号順にまとめて build/aa.html
//         ./build.sh <x.md> …    … 指定した md だけを build/<最初の md の名前>.html
// 作りは、別の資料の build の「md の ```dot を build 時に SVG にする」を借りた。コードは新しく書いた。
//
// md の書き方
//   # 章の題          … 扉のページ。題の下に「> リード」1 行と、章の主張を描いた絵ちょうど 1 枚（無い・2 枚以上は build が止まる）
//   ## ページの見出し  … ここから次の ## までが 1 ページ
//   ```svg / ```dot   … 絵。1 ページにちょうど 1 枚（無い・2 枚以上は build が止まる）
//   ふつうの段落       … 文。1 ページ BODY_MAX 字まで（超えたら build が止まる）
//   「出典:」「※」で始まる段落 … 注。小さく出す。NOTE_MAX 字まで
//   <!-- … -->        … 書き手のメモ。HTML には出さない
// 読み方（aa-yomikata.md）… 本の頭の 1 枚。ページ番号を持たない（本文の p.N をずらさない）。
//   ## 題、「| 第 N 章 | 読み終えると、できること | 執筆者のおすすめ |」の表、文、注。表の絵は build が組む（章名は扉へのリンク）
//   「読み方は」で始まる段落 … 読み方のコース。文と同じ大きさで出すが、文の BODY_MAX には数えず COURSE_MAX 字まで（前提の段落が上限ちょうどのため）
//   3 列目は空でよい。到達点（事実）と出どころが違う列なので、灰色の字で組み、見出しに「執筆者の意見」と出す
// 巻末（aa-kanmatsu.md）… 章の後ろに置く。題は「# 巻末　…」。扉とリードは持たず、## のページだけ。ページ番号は章から続ける。読み方の表には出さない
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const OUT = path.join(ROOT, 'build');
export const BODY_MAX = 80;   // 1 ページの文の上限（字。空白と md の記号を除く）。plan §B.3
export const NOTE_MAX = 90;   // 注の上限
const COURSE_MAX = 40;        // 読み方の 1 枚のコースの上限
const HEAD_MAX = 20;          // 見出しの上限

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
const pandoc = md => md.trim() ? execFileSync('pandoc', ['-f', 'gfm', '-t', 'html5', '--wrap=none'], { input: md, encoding: 'utf8' }) : '';

export function readChapter(file) {
  const raw = fs.readFileSync(file, 'utf8');
  // 骨格の章: 書き手のメモに「build: skeleton」と書くと、絵がまだ無くてよい（代わりに枠を出す）。
  // 本物の絵を 1 枚入れたページは、その絵を出す。文の上限は本物と同じ（骨格のうちから守る）
  const skeleton = /<!--[\s\S]*?build:\s*skeleton[\s\S]*?-->/.test(raw);
  let md = raw.replace(/<!--[\s\S]*?-->/g, '');
  const name = path.basename(file);
  const h1 = md.match(/^# (.+)$/m) || fail(`${name}: 章の題（# …）が無い`);
  const parts = md.split(/^## /m);
  const appendix = /^巻末/.test(h1[1].trim());
  // 章題は短い名前、その下の「> 」1 行がリード（章が何を言うかの 1 文）。目次と扉に両方出す。全章で必須
  let cover = parts.shift().replace(/^# .+$/m, '');
  const lead = appendix ? '' : (cover.match(/^> (.+)$/m) || fail(`${name}: 章題の下にリード（> …）が無い`))[1].trim();
  cover = cover.replace(/^> .+$/m, '');
  const pages = appendix ? [] : [{ cover: true, title: h1[1].trim(), lead, ...body(cover, `${name} の扉`, true, skeleton) }];
  parts.forEach((p, i) => {
    const nl = p.indexOf('\n');
    const title = (nl < 0 ? p : p.slice(0, nl)).trim();
    const where = `${name} p.${i + 1}「${title}」`;
    if (countChars(title) > HEAD_MAX) fail(`${where}: 見出しが ${countChars(title)} 字（上限 ${HEAD_MAX}）`);
    pages.push({ title, skeleton, ...body(nl < 0 ? '' : p.slice(nl + 1), where, false, skeleton) });
  });
  return { name, title: h1[1].trim(), lead, skeleton, appendix, pages };
}
function body(text, where, cover, skeleton = false) {
  const figs = [];
  text = text.replace(/^```(svg|dot)[^\n]*\n([\s\S]*?)^```[ \t]*$/gm, (_, k, src) => { figs.push(figure(k, src, where)); return ''; });
  if (figs.length > 1) fail(`${where}: 絵が ${figs.length} 枚（1 ページにちょうど 1 枚）`);
  // 扉の絵は骨格の章でも省けない（10 章で揃うのを build で守る。リードと同じ考え方）
  if (cover && !figs.length) fail(`${where}: 扉に絵が無い（章の主張を描いた絵をちょうど 1 枚）`);
  const paras = text.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
  const notes = paras.filter(s => /^(出典[:：]|※)/.test(s));
  const plan = paras.filter(s => /^絵[:：]/.test(s));
  const main = paras.filter(s => !notes.includes(s) && !plan.includes(s));
  // 骨格の章で絵がまだ無いページは、枠と「絵: …」の予定を出す
  if (!cover && skeleton && figs.length === 0) {
    const t = esc(plan.map(s => s.replace(/^絵[:：]\s*/, '')).join(' / ') || '絵は未定');
    figs.push(`<figure class="todo"><div class="todo-box"><span class="todo-tag">絵</span><p>${t}</p></div></figure>`);
  } else if (plan.length) {
    fail(`${where}: 「絵:」の行は骨格の章（build: skeleton）でだけ使えます`);
  }
  const nBody = countChars(main.join('')), nNote = countChars(notes.join(''));
  if (!cover && nBody > BODY_MAX) fail(`${where}: 文が ${nBody} 字（上限 ${BODY_MAX}）。絵に持たせるか、ページを分ける`);
  if (nNote > NOTE_MAX) fail(`${where}: 注が ${nNote} 字（上限 ${NOTE_MAX}）`);
  if (!cover && !figs.length) fail(`${where}: 絵が 0 枚（1 ページにちょうど 1 枚。骨格なら書き手のメモに build: skeleton）`);
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
section.cover { padding: 46px 80px 30px; }
section.cover .run { position: absolute; top: 18px; left: 40px; right: 40px; }
section.cover h1 { font-size: 44px; margin: 0 0 6px; }
section.cover .lead { font-size: 24px; font-weight: 700; color: var(--ink); margin: 0 0 6px; line-height: 1.45; }
section.cover figure { margin: 6px 0 10px; }
section.cover .txt { font-size: 19px; color: #444; line-height: 1.55; }
svg text { font-family: inherit; fill: var(--ink); }
svg .t { font-size: 20px; } svg .ts { font-size: 15px; } svg .tl { font-size: 26px; font-weight: 700; } svg .tx { font-size: 13px; fill: var(--sub); }
svg .h { fill: var(--h); } svg .a { fill: var(--a); } svg .w { fill: url(#hatch); } svg .x { fill: var(--x); } svg .ok { fill: var(--ok); } svg .xw { fill: url(#hatch-x); }
svg .hl { fill: none; stroke: var(--h); stroke-width: 3; } svg .al { fill: none; stroke: var(--a); stroke-width: 3; } svg .xl { fill: none; stroke: var(--x); stroke-width: 3; }
svg .ln { fill: none; stroke: #555; stroke-width: 2; } svg .lt { fill: none; stroke: #bbb; stroke-width: 1.5; } svg .dash { stroke-dasharray: 6 5; }
/* リンク: 色は足さない（本の 5 色は意味を持つので、6 色目は作らない）。下線だけで見せ、字の色はそのまま */
a.xref { color: inherit; text-decoration: underline; text-decoration-color: #aaa; text-underline-offset: 2px; }
a.xref:hover, a.xref:hover text { color: var(--ink); fill: var(--ink); }
svg a.xref text { text-decoration: underline; }
.run a.back { margin: 0 auto; }
svg .yk { font-size: 14.5px; }
svg .box { fill: #fff; stroke: #555; stroke-width: 2; } svg .soft { fill: #f4f4f2; }
svg text.on { fill: #fff; } svg text.hc { fill: var(--h); } svg text.ac { fill: var(--a); } svg text.xc { fill: var(--x); } svg text.okc { fill: var(--ok); } svg text.sub { fill: var(--sub); }
@page { size: 960px 600px; margin: 0; }
@media print { body { background: #fff; padding-left: 0; } section.page { margin: 0; box-shadow: none; break-after: page; } #toc-btn, #toc { display: none !important; } }

/* 骨格のページ（絵がまだ無い） */
figure.todo { width: 100%; }
.todo-box { width: 100%; height: 100%; min-height: 220px; border: 2px dashed #cfcfc9; border-radius: 6px; background: repeating-linear-gradient(45deg, #fafaf8, #fafaf8 10px, #f3f3f0 10px, #f3f3f0 20px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; padding: 20px 40px; }
.todo-tag { font-size: 12px; letter-spacing: .1em; color: #fff; background: #b9b9b2; padding: 2px 10px; border-radius: 3px; }
.todo-box p { margin: 0; font-size: 17px; color: #6f6f68; text-align: center; line-height: 1.6; }
section.page.skeleton h2 { color: #55554f; }
section.page.skeleton::after { content: "骨格"; position: absolute; top: 14px; right: 40px; font-size: 11px; letter-spacing: .1em; color: #fff; background: #c3c3bb; padding: 2px 8px; border-radius: 3px; }
#toc a.sk span:last-child { color: #8a8a82; }
#toc a.sk .n::after { content: "·"; margin-left: 3px; color: #c3c3bb; }

/* 目次。長いので、左に出したままにする（閉じれば本文が広がる） */
body { padding-left: 332px; transition: padding-left .16s ease-out; }
body.toc-closed { padding-left: 0; }
#toc-btn { position: fixed; top: 14px; left: 346px; z-index: 22; font: inherit; font-size: 14px; padding: 7px 13px; border: 1px solid #c9c9c4; border-radius: 4px; background: #fff; color: var(--ink); cursor: pointer; box-shadow: 0 1px 3px rgba(0,0,0,.14); transition: left .16s ease-out; }
body.toc-closed #toc-btn { left: 14px; }
#toc-btn:hover { background: #f4f4f2; }
#toc { position: fixed; top: 0; left: 0; bottom: 0; width: 332px; z-index: 21; background: #fff; border-right: 1px solid #ddd; overflow-y: auto; padding: 14px 0 28px; transition: transform .16s ease-out; }
body.toc-closed #toc { transform: translateX(-100%); }
#toc h2 { font-size: 13px; color: var(--sub); font-weight: 400; margin: 0; padding: 4px 18px 10px; letter-spacing: .08em; }
#toc .ch { font-size: 16px; font-weight: 700; margin: 14px 0 4px; padding: 6px 18px; background: #f4f4f2; }
#toc .ch .lead { display: block; font-size: 13px; font-weight: 400; color: #444; line-height: 1.45; margin-top: 3px; }
#toc a { display: flex; gap: 9px; text-decoration: none; color: var(--ink); font-size: 14px; line-height: 1.45; padding: 4px 18px 4px 24px; }
#toc a:hover { background: #f7f7f5; }
#toc a .n { color: var(--sub); font-size: 12px; min-width: 20px; text-align: right; padding-top: 2px; font-variant-numeric: tabular-nums; }
#toc a.here { background: #fdf2e6; box-shadow: inset 3px 0 0 var(--h); }
#toc a.here .n { color: var(--h); }
`;
const NAV = `<script>
// ←/→ でページを送る。m または目次ボタンで目次。いま見ているページに印をつける（外部には出ない）
(() => {
  const ps = () => [...document.querySelectorAll('section.page')];
  const cur = () => { const y = window.scrollY + 40; const i = ps().findIndex(p => p.offsetTop + p.offsetHeight > y); return i < 0 ? ps().length - 1 : i; };
  const toc = document.getElementById('toc'), btn = document.getElementById('toc-btn');
  const isOpen = () => !document.body.classList.contains('toc-closed');
  const open = v => { document.body.classList.toggle('toc-closed', !v); btn.textContent = v ? '✕ 目次' : '☰ 目次'; };
  open(innerWidth >= 1340);   // 狭い画面では畳んでおく。広ければ出したまま
  btn.addEventListener('click', () => open(!isOpen()));
  document.addEventListener('keydown', e => {
    if (e.target.closest('input,textarea')) return;
    const go = j => { const p = ps()[j]; if (p) { p.scrollIntoView({ block: 'center' }); e.preventDefault(); } };
    if (e.key === 'ArrowRight' || e.key === 'PageDown') go(cur() + 1);
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(cur() - 1);
    if (e.key === 'm') open(!isOpen());
    if (e.key === 'Escape') open(false);
  });
  let last = -1;
  const mark = () => {
    const i = cur(); if (i === last) return; last = i;
    const a = toc.querySelectorAll('a');
    a.forEach((el, j) => el.classList.toggle('here', j === i));
    if (isOpen() && a[i]) a[i].scrollIntoView({ block: 'nearest' });
  };
  addEventListener('scroll', mark, { passive: true }); mark();
})();
</script>`;

// 条文の番号（P1〜P3・D1〜D8）が出てくるページには、柱に条文の一覧へ戻るリンクを出す
const ARTICLE_RE = /(?<![A-Za-z0-9])(?:P[1-3]|D[1-8])(?![0-9])/;
const plain = s => s.replace(/<[^>]+>/g, ' ');
// 絵の中のリンク: href="#chN" は第 N 章の扉、href="#pN" はそのページ。字は残し、リンクを被せるだけ。
// 字とリンクがずれないように、リンクの字の「第 N 章」「p.N」が飛び先と合わなければ build を止める
function linkFigure(fig, where, covers, total, full) {
  return fig.replace(/<a href="#(ch(\d+)|p(\d+))">([\s\S]*?)<\/a>/g, (all, ref, ch, pg, inner) => {
    const label = plain(inner).replace(/\s+/g, ' ');
    let id;
    if (ch !== undefined) {
      if (!new RegExp(`第 ${ch} 章`).test(label)) fail(`${where}: リンク #${ref} の字「${label.trim()}」に「第 ${ch} 章」が無い`);
      id = covers.get(Number(ch));
      if (!id) { if (full) fail(`${where}: リンク #${ref} の第 ${ch} 章が本に無い`); console.warn(`  注意: ${where} のリンク #${ref} は、この build に第 ${ch} 章が無いので飛ばない`); return all; }
    } else {
      if (!new RegExp(`p\\.${pg}(?![0-9])`).test(label)) fail(`${where}: リンク #${ref} の字「${label.trim()}」に「p.${pg}」が無い`);
      if (Number(pg) > total) { if (full) fail(`${where}: リンク #${ref} のページが無い（全 ${total} ページ）`); return all; }
      id = `p${pg}`;
    }
    return `<a href="#${id}" class="xref">${inner}</a>`;
  });
}

// ---------- 読み方 ----------
const FRONT = path.join(ROOT, 'aa-yomikata.md');
const chNo = ch => Number((ch.title.match(/^第 (\d+) 章/) || fail(`${ch.name}: 章題が「第 N 章」で始まらない`))[1]);
function readFront(chs) {
  chs = chs.filter(ch => !ch.appendix);
  const md = fs.readFileSync(FRONT, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  const where = path.basename(FRONT);
  const title = (md.match(/^## (.+)$/m) || fail(`${where}: 題（## …）が無い`))[1].trim();
  if (countChars(title) > HEAD_MAX) fail(`${where}: 見出しが ${countChars(title)} 字（上限 ${HEAD_MAX}）`);
  const rows = new Map();
  for (const m of md.matchAll(/^\|\s*第 (\d+) 章\s*\|([^|]*)\|(?:([^|]*)\|)?\s*$/gm)) rows.set(Number(m[1]), { can: m[2].trim(), pick: (m[3] || '').trim() });
  for (const ch of chs) if (!rows.has(chNo(ch))) fail(`${where}: 第 ${chNo(ch)} 章の行が無い`);
  for (const n of rows.keys()) if (!chs.some(ch => chNo(ch) === n)) fail(`${where}: 第 ${n} 章が本に無い`);
  const rest = md.replace(/^## .+$/m, '').replace(/^\|.*\|\s*$/gm, '');
  const paras = rest.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
  const notes = paras.filter(s => /^(出典[:：]|※)/.test(s)), main = paras.filter(s => !notes.includes(s));
  const course = main.filter(s => /^読み方は/.test(s));
  const nCourse = countChars(course.join(''));
  const nBody = countChars(main.join('')) - nCourse, nNote = countChars(notes.join(''));
  if (nCourse > COURSE_MAX) fail(`${where}: コースが ${nCourse} 字（上限 ${COURSE_MAX}）`);
  if (nBody > BODY_MAX) fail(`${where}: 文が ${nBody} 字（上限 ${BODY_MAX}）`);
  if (nNote > NOTE_MAX) fail(`${where}: 注が ${nNote} 字（上限 ${NOTE_MAX}）`);
  const Y0 = 34, H = 35, W = 880;
  const col = { ch: 8, can: 236, pick: 640 };
  const head = `<g class="tx"><text x="${col.ch}" y="20">章（押すと扉へ）</text><text x="${col.can}" y="20">読み終えると、できること</text><text x="${col.pick}" y="20">執筆者のおすすめ</text></g><path d="M0,${Y0 - 6} H${W}" class="lt"/>`;
  const body = chs.map((ch, i) => {
    const n = chNo(ch), r = rows.get(n), y = Y0 + i * H, ty = y + 23;
    const name = ch.title.replace(/^第 \d+ 章\s*/, '').replace(/（[^）]*）/g, ' ').replace(/\s+/g, ' ').trim();   // 表に入る長さにする（「AA（Agentic Agile）とは」→「AA とは」）
    return (i % 2 ? '' : `<rect x="0" y="${y}" width="${W}" height="${H}" class="soft"/>`)
      + `<a href="#ch${n}"><text x="${col.ch}" y="${ty}" class="yk">第 ${n} 章　${esc(name)}</text></a>`
      + `<text x="${col.can}" y="${ty}" class="yk">${esc(r.can)}</text>`
      + (r.pick ? `<text x="${col.pick}" y="${ty}" class="yk sub">${esc(r.pick)}</text>` : '');
  }).join('');
  const h = Y0 + chs.length * H + 4;
  const fig = `<figure><svg viewBox="0 0 ${W} ${h}" width="${W}" height="${h}">${head}${body}</svg></figure>`;
  return { title, fig, text: pandoc(main.join('\n\n')), note: pandoc(notes.join('\n\n')), nBody, nNote, nCourse };
}

export function render(files, extraHead = '', full = false) {
  const chs = files.map(readChapter);
  // 章番号 → 扉のページ id、条文の一覧のページ id を先に数える
  const covers = new Map();
  let listId = null, k = 0;
  for (const ch of chs) for (const p of ch.pages) {
    k++;
    const m = p.cover && p.title.match(/^第 (\d+) 章/);
    if (m) covers.set(Number(m[1]), `p${k}`);
    if (!p.cover && /^条文の一覧/.test(p.title)) listId = `p${k}`;
  }
  const listNo = listId && listId.slice(1);
  // 読み方は本の全章を組むときだけ出す（一部の章だけでは頁数も引用も数えられない）
  const front = fs.existsSync(FRONT) && files.length === sources([]).length ? readFront(chs) : null;
  let n = 0;
  const toc = [];
  const frontSec = [];
  if (front) {
    front.fig = linkFigure(front.fig, path.basename(FRONT), covers, k, full);
    toc.push(`<a href="#yomikata"><span class="n"></span><span>${esc(front.title)}</span></a>`);
    frontSec.push(`<section class="page front" id="yomikata"><div class="run"><span>${esc(front.title)}</span><span></span></div><h2>${esc(front.title)}</h2>${front.fig}<div class="txt">${front.text}</div><div class="note">${front.note}</div></section>`);
  }
  const secs = chs.flatMap(ch => ch.pages.map((p, i) => {
    n++;
    if (ch.appendix && i === 0) toc.push(`<div class="ch">${esc(ch.title)}</div>`);
    const id = `p${n}`;
    p.fig = linkFigure(p.fig, `${ch.name} ${id}`, covers, k, full);
    const sk = p.skeleton ? ' sk' : '';
    toc.push(p.cover
      ? `<div class="ch">${esc(p.title)}${ch.skeleton ? ' <span style="font-weight:400;font-size:12px;color:#8a8a82">骨格</span>' : ''}<span class="lead">${esc(p.lead)}</span></div><a href="#${id}" class="${sk.trim()}"><span class="n">${n}</span><span>扉</span></a>`
      : `<a href="#${id}" class="${sk.trim()}"><span class="n">${n}</span><span>${esc(p.title)}</span></a>`);
    const back = listId && id !== listId && ARTICLE_RE.test(plain(p.fig + p.text + p.note))
      ? `<a href="#${listId}" class="xref back">条文の一覧 p.${listNo} へ戻る</a>` : '';
    const run = `<div class="run"><span>${esc(ch.title)}</span>${back}<span>${n}</span></div>`;
    if (p.cover) return `<section class="page cover" id="${id}">${run}<h1>${esc(p.title)}</h1><p class="lead">${esc(p.lead)}</p>${p.fig}<div class="txt">${p.text}</div></section>`;
    return `<section class="page${p.skeleton ? ' skeleton' : ''}" id="${id}">${run}<h2>${esc(p.title)}</h2>${p.fig}<div class="txt">${p.text}</div><div class="note">${p.note}</div></section>`;
  }));
  const title = chs.map(c => c.title).join(' / ');
  const menu = `<button id="toc-btn" type="button">☰ 目次</button>\n<nav id="toc"><h2>目次（全 ${n} ページ・m キーで開閉）</h2>${toc.join('')}</nav>`;
  const html = `<!doctype html>\n<html lang="ja"><head><meta charset="utf-8"><title>${esc(title)}</title><style>${CSS}</style>${extraHead}</head><body>\n${DEFS}\n${menu}\n${[...frontSec, ...secs].join('\n')}\n${NAV}</body></html>\n`;
  const ext = html.match(/(?:src|href)\s*=\s*"(?:https?:)?\/\/[^"]*"|url\(\s*['"]?(?:https?:)?\/\//i);
  if (ext) fail(`外部参照がある: ${ext[0]}`);
  return { html, chs, front };
}

// 公開 repo に出さない語の検査。語の一覧は repo の外に置く（一覧そのものが出してはいけない語のため）。
// 一覧: 環境変数 AA_PRIVATE_WORDS のファイル、無ければ ホーム/app/aa-eaa-textbook/private-words.txt。1 行 1 個の正規表現（大文字小文字は区別しない）、# で始まる行は無視。
// build のたびに、このディレクトリの全ファイル（node_modules・build・package-lock.json・ドットで始まるファイルを除く）を引き、当たれば止まる。
// 読み手に出さない作業用の文書（計画・控え・試作など）は名前をドットで始める（.plan.md など）。.gitignore の .*.md で git に載らない。
// ドット無しの plan.md が在れば止まる。ドットで始まる文書が git から外れていなければ止まる。
export function checkPrivate() {
  if (fs.existsSync(path.join(ROOT, 'plan.md'))) fail('plan.md がある（.plan.md にする）');
  for (const n of fs.readdirSync(ROOT).filter(n => n.startsWith('.') && n.endsWith('.md'))) {
    try { execFileSync('git', ['check-ignore', '-q', n], { cwd: ROOT }); }
    catch { fail(`${n} が git から外れていない（.gitignore の .*.md を確かめる）`); }
  }
  const list = process.env.AA_PRIVATE_WORDS || path.join(os.homedir(), 'app', 'aa-eaa-textbook', 'private-words.txt');
  if (!fs.existsSync(list)) fail(`出さない語の一覧が無い: ${path.basename(list)}（AA_PRIVATE_WORDS で場所を指定）`);
  const res = fs.readFileSync(list, 'utf8').split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#')).map(l => new RegExp(l, 'i'));
  const walk = d => fs.readdirSync(d).filter(n => !['node_modules', 'build'].includes(n) && !n.startsWith('.')).flatMap(n =>
    fs.statSync(path.join(d, n)).isDirectory() ? walk(path.join(d, n)) : [path.join(d, n)]);
  for (const f of walk(ROOT).filter(f => path.basename(f) !== 'package-lock.json')) {
    fs.readFileSync(f, 'utf8').split('\n').forEach((l, i) => {
      for (const re of res) { const m = l.match(re); if (m) fail(`出さない語がある: ${path.relative(ROOT, f)}:${i + 1}「${m[0]}」`); }
    });
  }
}

export function sources(args) {
  if (args.length) return args.map(a => path.resolve(a));
  const fs_ = fs.readdirSync(ROOT).filter(f => /^aa-ch\d+\.md$/.test(f)).sort();
  if (!fs_.length) fail('aa-ch*.md が 1 本も無い');
  if (fs.existsSync(path.join(ROOT, 'aa-kanmatsu.md'))) fs_.push('aa-kanmatsu.md');
  return fs_.map(f => path.join(ROOT, f));
}

export function report(chs) {
  for (const ch of chs) {
    const ps = ch.pages.filter(p => !p.cover);
    const sum = ps.reduce((a, p) => a + p.nBody, 0);
    console.log(`  ${ch.name}: ${ps.length} ページ${ch.appendix ? "" : " + 扉"} / 文 ${sum} 字（1 ページ平均 ${Math.round(sum / (ps.length || 1))} 字・最大 ${Math.max(0, ...ps.map(p => p.nBody))} 字）`);
    ps.forEach((p, i) => console.log(`    p.${String(i + 1).padStart(2)} ${String(p.nBody).padStart(3)} 字${p.nNote ? ` + 注 ${p.nNote}` : ''}  ${p.title}`));
  }
}

async function main() {
  try {
    checkPrivate();
    if (process.argv[2] === '--check') { console.log('  出さない語: なし'); return; }
    await loadGraphviz();
    const files = sources(process.argv.slice(2));
    const { html, chs, front } = render(files, '', !process.argv.slice(2).length);
    fs.mkdirSync(OUT, { recursive: true });
    const out = path.join(OUT, process.argv.length > 2 ? path.basename(files[0], '.md') + '.html' : 'aa.html');
    fs.writeFileSync(out, html);
    if (front) console.log(`  読み方: 文 ${front.nBody} 字 + コース ${front.nCourse} + 注 ${front.nNote}`);
    report(chs);
    console.log(`  出力: ${path.relative(ROOT, out)}（${(html.length / 1024).toFixed(0)} KB・外部参照なし）`);
  } catch (e) {
    console.error(e instanceof BuildError ? `build 失敗: ${e.message}` : e);
    process.exit(1);
  }
}
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) main();
