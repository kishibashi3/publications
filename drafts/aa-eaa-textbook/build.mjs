// AA・EAA 教科書の build: 章の md → 1 ファイルの HTML（1 ページ = 絵 1 枚 + 短い文）
// 使い方: ./build.sh            … AA の本。aa-ch*.md を番号順にまとめて build/aa.html
//         ./build.sh eaa        … EAA の本。eaa-ch*.md を番号順にまとめて build/eaa.html
//         ./build.sh <x.md> …    … 指定した md だけを build/<最初の md の名前>.html
//         ./build.sh --check    … 公開の漏れ止めだけを走らせる
// 本は 1 つの build で組む。本ごとに変わるのはファイル名の頭（aa- / eaa-）だけで、検査・上限・組み方は同じ。
// 本の名前を足すときは BOOKS に足す。以下「<本>」は aa か eaa
// 作りは、別の資料の build の「md の ```dot を build 時に SVG にする」を借りた。コードは新しく書いた。
//
// md の書き方
//   # 第 N 章　章の題 … 章の概要のページ。題の下に「群: 群の名前」1 行（必須）、「副題: …」1 行（任意）、
//                       「> リード」1 行（任意。題と副題に無い事を足すときだけ）、章の主張を描いた絵ちょうど 1 枚（無い・2 枚以上は build が止まる。
//                       骨格の章だけは、無ければ build がモックの枠を出す。「絵: …」の行があれば枠に予定として出す）
//                       同じ群の章は続けて並べる（飛び飛びなら build が止まる）。目次は群 → 章 → ページの順に出す
//                       章題は名詞句、章の主張は副題に 1 文で置く（root CLAUDE.md「成果物の文章の作法」二、2026-11-08）。
//                       目次の章題の下には副題を出す（副題が無ければリードを出す）
//   ## ページの見出し  … ここから次の ## までが 1 ページ
//   ```svg / ```dot   … 絵。1 ページにちょうど 1 枚（無い・2 枚以上は build が止まる）
//   ふつうの段落       … 文。1 ページ BODY_MAX 字まで（超えたら build が止まる）
//   「出典:」「※」で始まる段落 … 注。小さく出す。NOTE_MAX 字まで
//   <!-- … -->        … 書き手のメモ。HTML には出さない
// 読み方（<本>-yomikata.md）… 本の頭の 1 枚。ページ番号を持たない（本文の p.N をずらさない）。
//   ## 題、「| 第 N 章 | 読み終えると、できること |」の表、文、注。表の絵は build が組む（章名は章の概要へのリンク。群の名前の行も build が挟む）
//   「読み方は」で始まる段落 … 読み方のコース。文と同じ大きさで出すが、文の BODY_MAX には数えず COURSE_MAX 字まで（前提の段落が上限ちょうどのため）
//   3 列目（執筆者のおすすめ ★）は 2026-11-07 に外した。目次は話の順 1 本にし、効き目は「読み方は」の段落の「急ぐなら」で言う
// 巻末（<本>-kanmatsu.md）… 章の後ろに置く。題は「# 巻末　…」。章の概要・群・リードは持たず、## のページだけ。ページ番号は章から続ける。読み方の表には出さない
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
const TITLE_MAX = 30;         // 章題と副題の上限（章題は「第 N 章　」を除く）。副題は一つの主張で止め、理由・帰結・限定は章の概要に書く（2026-11-08、@ope-ultp1635 msg 12bf66b5・23aba03d・8b20f53a）

export class BuildError extends Error {}
const fail = msg => { throw new BuildError(msg); };
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// 数え方は計画の旧版（「空白を除く」）とそろえる。md の記号（** ` # > |）と空白だけ除き、句読点は数える
export const countChars = s => [...s.replace(/<[^>]+>/g, '').replace(/[*`#>|\s]/g, '')].length;

// ---------- 絵 ----------
// md の絵に直書きされた色の旧い値 → 案 A の値。md は変えず、絵を出すときに置き換える（CSS と矢印・記号の定義は新しい値で書いてある）
const PALETTE = {"#d9822b":"#c56a1c","#2f6fb3":"#285b98","#c62828":"#b0261d","#2e7d32":"#2a6b31","#b5b5b5":"#b2ada3","#222":"#1e1c19"};
const recolor = svg => Object.entries(PALETTE).reduce((t, [from, to]) => t.replace(new RegExp(from + '(?![0-9a-fA-F])', 'gi'), to), svg);
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
  return `<figure>${recolor(svg)}</figure>`;
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
  const titleBody = h1[1].trim().replace(/^(第 \d+ 章|巻末)　/, '');
  if (countChars(titleBody) > TITLE_MAX) fail(`${name}: 章題が ${countChars(titleBody)} 字（上限 ${TITLE_MAX}）。理由・帰結・限定は章の概要に移す`);
  // 章題は名詞句、「副題:」1 行が章の主張（任意）。「群:」1 行で群に入れる（巻末以外は必須）。「> 」1 行のリードは任意で、題と副題に無い事を足すときだけ書く
  let cover = parts.shift().replace(/^# .+$/m, '');
  const sub = ((cover.match(/^副題[:：]\s*(.+)$/m) || [])[1] || '').trim();
  cover = cover.replace(/^副題[:：].*$/m, '');
  if (countChars(sub) > TITLE_MAX) fail(`${name}: 副題が ${countChars(sub)} 字（上限 ${TITLE_MAX}）。理由・帰結・限定は章の概要に移す`);
  const group = appendix ? '' : (cover.match(/^群[:：]\s*(.+)$/m) || fail(`${name}: 章題の下に「群: …」が無い`))[1].trim();
  cover = cover.replace(/^群[:：].*$/m, '');
  const lead = appendix ? '' : ((cover.match(/^> (.+)$/m) || [])[1] || '').trim();
  cover = cover.replace(/^> .+$/m, '');
  const pages = appendix ? [] : [{ cover: true, title: h1[1].trim(), sub, lead, ...body(cover, `${name} の章の概要`, true, skeleton) }];
  parts.forEach((p, i) => {
    const nl = p.indexOf('\n');
    const title = (nl < 0 ? p : p.slice(0, nl)).trim();
    const where = `${name} p.${i + 1}「${title}」`;
    if (countChars(title) > HEAD_MAX) fail(`${where}: 見出しが ${countChars(title)} 字（上限 ${HEAD_MAX}）`);
    pages.push({ title, skeleton, ...body(nl < 0 ? '' : p.slice(nl + 1), where, false, skeleton) });
  });
  return { name, title: h1[1].trim(), sub, group, lead, skeleton, appendix, pages };
}
function body(text, where, cover, skeleton = false) {
  const figs = [];
  text = text.replace(/^```(svg|dot)[^\n]*\n([\s\S]*?)^```[ \t]*$/gm, (_, k, src) => { figs.push(figure(k, src, where)); return ''; });
  if (figs.length > 1) fail(`${where}: 絵が ${figs.length} 枚（1 ページにちょうど 1 枚）`);
  // 章の概要の絵は省けない。骨格の章に限り、まだ描いていなければ build がモックの絵を出す（2026-11-07、@ope-ultp1635 msg d693542d）。
  // モックは書き手が描かない。build が組む枠だけにして、本物の絵と取り違えられないようにする（手で描いた仮の絵は本物と見分けが付かない）
  if (cover && !figs.length && !skeleton) fail(`${where}: 章の概要に絵が無い（章の主張を描いた絵をちょうど 1 枚。まだなら書き手のメモに build: skeleton）`);
  const paras = text.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
  const notes = paras.filter(s => /^(出典[:：]|※)/.test(s));
  const plan = paras.filter(s => /^絵[:：]/.test(s));
  const main = paras.filter(s => !notes.includes(s) && !plan.includes(s));
  let mock = false;
  if (cover && skeleton && figs.length === 0) {
    const t = esc(plan.map(s => s.replace(/^絵[:：]\s*/, '')).join(' / ') || '章の主張の絵は未定');
    figs.push(`<figure class="todo mock"><div class="todo-box"><span class="todo-tag">モック — 章の主張の絵はまだ描いていない</span><p>${t}</p></div></figure>`);
    mock = true;
  } else if (!cover && skeleton && figs.length === 0) {
    const t = esc(plan.map(s => s.replace(/^絵[:：]\s*/, '')).join(' / ') || '絵は未定');
    figs.push(`<figure class="todo"><div class="todo-box"><span class="todo-tag">絵</span><p>${t}</p></div></figure>`);
  } else if (plan.length) {
    fail(`${where}: 「絵:」の行は骨格の章（build: skeleton）でだけ使えます`);
  }
  const nBody = countChars(main.join('')), nNote = countChars(notes.join(''));
  if (!cover && nBody > BODY_MAX) fail(`${where}: 文が ${nBody} 字（上限 ${BODY_MAX}）。絵に持たせるか、ページを分ける`);
  if (nNote > NOTE_MAX) fail(`${where}: 注が ${nNote} 字（上限 ${NOTE_MAX}）`);
  if (!cover && !figs.length) fail(`${where}: 絵が 0 枚（1 ページにちょうど 1 枚。骨格なら書き手のメモに build: skeleton）`);
  return { fig: figs[0] || '', mock, text: pandoc(main.join('\n\n')), note: pandoc(notes.join('\n\n')), nBody, nNote };
}

// ---------- HTML ----------
const DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#555"/></marker>
<marker id="arr-x" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#b0261d"/></marker>
<pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#eee"/><line x1="0" y1="0" x2="0" y2="8" stroke="#cfcfcf" stroke-width="3"/></pattern>
<pattern id="hatch-x" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#fbe3e3"/><line x1="0" y1="0" x2="0" y2="8" stroke="#e8a3a3" stroke-width="3"/></pattern>
<symbol id="i-wait" viewBox="0 0 20 28"><path d="M2,1 H18 V5 L11.5,14 L18,23 V27 H2 V23 L8.5,14 L2,5 Z" fill="#c56a1c"/><path d="M5,6 H15 L10,12 Z M5,25 L10,19 L15,25 Z" fill="#fff"/></symbol>
<symbol id="i-pile" viewBox="0 0 28 28"><rect x="2" y="19" width="24" height="7" fill="#b0261d"/><rect x="5" y="11" width="18" height="7" fill="#b0261d"/><rect x="8" y="3" width="12" height="7" fill="#b0261d"/></symbol>
<symbol id="i-pr" viewBox="0 0 24 30"><rect x="1" y="1" width="22" height="28" rx="2" fill="#fff" stroke="#285b98" stroke-width="2"/><path d="M5,8 H19 M5,13 H19 M5,18 H15" stroke="#285b98" stroke-width="2"/></symbol>
<symbol id="i-ok" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#2a6b31"/><path d="M6,12.5 L10.5,17 L18,8" fill="none" stroke="#fff" stroke-width="3"/></symbol>
<symbol id="i-no" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#b0261d"/><path d="M7,7 L17,17 M17,7 L7,17" stroke="#fff" stroke-width="3"/></symbol>
</defs></svg>`;

// 絵の色は本 1 冊で固定する（plan §B.4）。人 = 橙、AI = 青、待ち = 灰、間違い = 赤、通った = 緑
// 見た目は案 A「本」（2026-11-08、@ope-ultp1635 msg 8f3b887c）。色は役のまま値を落ち着かせた。md の絵に直書きされた旧い値は figure() が PALETTE で置き換える
// 案 B・C と比べる道具は agent-hub-roles-kaz の writer-ja/drafts/textbook-css/
const CSS = `
:root { --h:#c56a1c; --a:#285b98; --w:#b2ada3; --x:#b0261d; --ok:#2a6b31; --ink:#1e1c19; --sub:#7b766c;
  /* 明朝は Hiragino Mincho → Noto Serif JP → Yu Mincho の順。Noto を Yu Mincho より先に置くのは、検査と画像を Noto で通したため（Yu Mincho は字面が細く、まだ誰も見ていない） */
  --serif: "Hiragino Mincho ProN","Noto Serif JP","Noto Serif CJK JP","Yu Mincho","YuMincho",serif;
  --sans: "Hiragino Sans","Noto Sans JP","Noto Sans CJK JP","Yu Gothic",sans-serif; }
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
section.cover h1 { font-size: 36px; margin: 0 0 6px; line-height: 1.35; }   /* 章の題が主張の 1 文になり長いので 44 → 36px */
section.cover p.sub { font-size: 26px; font-weight: 700; color: var(--h); margin: 0 0 8px; line-height: 1.4; }
section.cover p.lead { font-size: 24px; font-weight: 700; color: var(--ink); margin: 0 0 6px; line-height: 1.45; }
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
/* モックの絵（骨格の章の概要で、章の主張の絵がまだ無い）。本物と取り違えないよう、枠も札も赤系にして「モック」と書く */
figure.mock .todo-box { min-height: 260px; border-color: #e0a3a3; background: repeating-linear-gradient(45deg, #fdf6f6, #fdf6f6 10px, #f8eaea 10px, #f8eaea 20px); }
figure.mock .todo-tag { background: #b0261d; font-size: 14px; }
#toc a.mock span:last-child::after { content: "（モック）"; color: #b0261d; font-size: 11px; margin-left: 4px; }
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
#toc .grp { font-size: 13px; font-weight: 700; color: #555; letter-spacing: .04em; margin: 24px 0 0; padding: 10px 18px 0; border-top: 2px solid #ccc; }
#toc .ch { font-size: 16px; font-weight: 700; margin: 14px 0 4px; padding: 6px 18px; background: #f4f4f2; }
#toc .ch { line-height: 1.45; }
#toc .ch .lead { display: block; font-size: 13px; font-weight: 400; color: #444; line-height: 1.45; margin-top: 3px; }
#toc a { display: flex; gap: 9px; text-decoration: none; color: var(--ink); font-size: 14px; line-height: 1.45; padding: 4px 18px 4px 24px; }
#toc a:hover { background: #f7f7f5; }
#toc a .n { color: var(--sub); font-size: 12px; min-width: 20px; text-align: right; padding-top: 2px; font-variant-numeric: tabular-nums; }
#toc a.here { background: #fdf2e6; box-shadow: inset 3px 0 0 var(--h); }
#toc a.here .n { color: var(--h); }

/* 案 A「本」: 紙の白と明朝。見出し・本文・目次を明朝にし、柱と注は細い罫で区切る */
body { background: #d6d2c8; }
section.page { background: #fffdf7; box-shadow: 0 1px 0 rgba(60,45,20,.08), 0 14px 28px -14px rgba(60,45,20,.45); padding: 20px 56px 16px; }
section.page figure { font-family: var(--sans); }           /* 絵の字は今のゴシックのまま（枠の寸法を変えない） */
section.page h1, section.page h2, section.cover p.sub, section.cover p.lead, section.page .txt { font-family: var(--serif); }
.run { font-size: 11px; letter-spacing: .14em; color: var(--sub); border-bottom: 1px solid #ddd6c8; padding-bottom: 5px; }
.run span:last-child { letter-spacing: .04em; }
section.page h2 { font-size: 28px; font-weight: 700; letter-spacing: .05em; margin: 12px 0 2px; }
.txt { font-size: 19.5px; line-height: 1.72; letter-spacing: .03em; }
.note { font-size: 11.5px; border-top: 1px solid #e3ddd0; padding-top: 4px; margin-top: 2px; letter-spacing: .02em; }
.note:empty { display: none; }
section.cover { padding: 50px 88px 28px; }
section.cover .run { left: 56px; right: 56px; }
section.cover h1 { font-size: 40px; font-weight: 700; letter-spacing: .07em; margin: 4px 0 8px; padding-bottom: 10px; border-bottom: 2px solid var(--ink); }
section.cover p.sub { font-size: 23px; font-weight: 700; letter-spacing: .04em; margin: 0 0 8px; }
section.cover p.lead { font-size: 18.5px; font-weight: 600; line-height: 1.6; letter-spacing: .02em; }
section.cover .txt { font-size: 18px; color: #4a463f; line-height: 1.65; }
#toc { background: #fbf9f3; border-right: 1px solid #e0dacd; font-family: var(--serif); }
#toc .grp { color: #6e695f; border-top: 1px solid #cfc8b9; letter-spacing: .12em; font-size: 12px; }
#toc .ch { background: none; border-left: 3px solid var(--ink); margin-left: 12px; padding-left: 12px; font-size: 16px; letter-spacing: .04em; }
#toc .ch .lead { color: #5e594f; }
#toc a { font-family: var(--serif); }
#toc a:hover { background: #f2eee4; }
#toc a.here { background: #f5ebdc; }
#toc-btn { background: #fffdf7; border-color: #d6cfbf; font-family: var(--serif); }
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
// 絵の中のリンク: href="#chN" は第 N 章の概要、href="#pN" はそのページ。字は残し、リンクを被せるだけ。
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
const frontFile = book => path.join(ROOT, `${book}-yomikata.md`);
const chNo = ch => Number((ch.title.match(/^第 (\d+) 章/) || fail(`${ch.name}: 章題が「第 N 章」で始まらない`))[1]);
function readFront(chs, FRONT) {
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
  // 群の名前の行を、群の頭の章の前に挟む。章名は章の主張の 1 文なので幅を広く取る（3 列目の「執筆者のおすすめ」は 2026-11-07 に外し、効き目は文の「急ぐなら」の 1 行へ）
  const Y0 = 34, H = 31, G = 27, W = 880;
  const col = { ch: 8, can: 528 };
  const head = `<g class="tx"><text x="${col.ch}" y="20">章（押すと章の概要へ）</text><text x="${col.can}" y="20">読み終えると、できること</text></g><path d="M0,${Y0 - 6} H${W}" class="lt"/>`;
  let y = Y0, prev = null, odd = 0;
  const body = chs.map(ch => {
    const n = chNo(ch), r = rows.get(n);
    let g = '';
    if (ch.group !== prev) { prev = ch.group; g = `<text x="${col.ch}" y="${y + 19}" class="ts sub" font-weight="700">${esc(ch.group)}</text>`; y += G; odd = 0; }
    const ty = y + 21;
    const name = ch.title.replace(/^第 \d+ 章\s*/, '');
    const row = (odd++ % 2 ? '' : `<rect x="0" y="${y}" width="${W}" height="${H}" class="soft"/>`)
      + `<a href="#ch${n}"><text x="${col.ch}" y="${ty}" class="yk">第 ${n} 章　${esc(name)}</text></a>`
      + `<text x="${col.can}" y="${ty}" class="yk">${esc(r.can)}</text>`
      + (r.pick ? fail(`${where}: 第 ${n} 章の 3 列目は使わない（効き目は文の「急ぐなら」の 1 行に書く）`) : '');
    y += H;
    return g + row;
  }).join('');
  const h = y + 4;
  const fig = `<figure><svg viewBox="0 0 ${W} ${h}" width="${W}" height="${h}">${head}${body}</svg></figure>`;
  return { title, fig, text: pandoc(main.join('\n\n')), note: pandoc(notes.join('\n\n')), nBody, nNote, nCourse };
}

export function render(files, extraHead = '', full = false, book = 'aa') {
  const FRONT = frontFile(book);
  const chs = files.map(readChapter);
  // 章番号 → 章の概要のページ id、条文の一覧のページ id を先に数える
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
  const front = fs.existsSync(FRONT) && files.length === sources([], book).length ? readFront(chs, FRONT) : null;
  let n = 0;
  const toc = [];
  const frontSec = [];
  if (front) {
    front.fig = linkFigure(front.fig, path.basename(FRONT), covers, k, full);
    toc.push(`<a href="#yomikata"><span class="n"></span><span>${esc(front.title)}</span></a>`);
    frontSec.push(`<section class="page front" id="yomikata"><div class="run"><span>${esc(front.title)}</span><span></span></div><h2>${esc(front.title)}</h2>${front.fig}<div class="txt">${front.text}</div><div class="note">${front.note}</div></section>`);
  }
  // 同じ群の章は続けて並べる（目次で群を 1 回だけ出すため）。巻末は群を持たない
  const seen = new Set();
  const grouped = chs.filter(ch => !ch.appendix);
  grouped.forEach((ch, i) => { if (i && grouped[i - 1].group !== ch.group) { if (seen.has(ch.group)) fail(`${ch.name}: 群「${ch.group}」の章が続いていない`); } seen.add(ch.group); });
  let prevGroup = null;
  const secs = chs.flatMap(ch => ch.pages.map((p, i) => {
    n++;
    if (ch.appendix && i === 0) toc.push(`<div class="ch">${esc(ch.title)}</div>`);
    const id = `p${n}`;
    p.fig = linkFigure(p.fig, `${ch.name} ${id}`, covers, k, full);
    const sk = p.skeleton ? ' sk' : '';
    if (p.cover && ch.group !== prevGroup) { prevGroup = ch.group; toc.push(`<div class="grp">${esc(ch.group)}</div>`); }
    toc.push(p.cover
      ? `<div class="ch">${esc(p.title)}${ch.skeleton ? ' <span style="font-weight:400;font-size:12px;color:#8a8a82">骨格</span>' : ''}${(p.sub || p.lead) ? `<span class="lead">${esc(p.sub || p.lead)}</span>` : ''}</div><a href="#${id}" class="${(sk + (p.mock ? ' mock' : '')).trim()}"><span class="n">${n}</span><span>この章の概要</span></a>`
      : `<a href="#${id}" class="${sk.trim()}"><span class="n">${n}</span><span>${esc(p.title)}</span></a>`);
    const back = listId && id !== listId && ARTICLE_RE.test(plain(p.fig + p.text + p.note))
      ? `<a href="#${listId}" class="xref back">条文の一覧 p.${listNo} へ戻る</a>` : '';
    const run = `<div class="run"><span>${esc(p.cover ? ch.group : ch.title)}</span>${back}<span>${n}</span></div>`;
    if (p.cover) return `<section class="page cover" id="${id}">${run}<h1>${esc(p.title)}</h1>${p.sub ? `<p class="sub">${esc(p.sub)}</p>` : ''}${p.lead ? `<p class="lead">${esc(p.lead)}</p>` : ''}${p.fig}<div class="txt">${p.text}</div></section>`;
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
// build のたびに、このディレクトリの全ファイル（node_modules・build・package-lock.json・ドットで始まる .md を除く）を引き、当たれば止まる。
// 飛ばすのは .gitignore で外れる .*.md だけ。.env.note のようなドットで始まる .md 以外のファイルは git に載りうるので引く。
// 読み手に出さない作業用の文書（計画・控え・試作など）は名前をドットで始める（.plan.md など）。.gitignore の .*.md で git に載らない。
// ドットで始まらない名前は、本文と build の道具として決まった名前（PUBLIC_NAMES）だけを置ける。それ以外が 1 つでもあれば止まる。
// 2026-11-07 に plan.md ちょうどだけを止める形から改めた。eaa-plan.md・memo.md・ch01-old.md・notes.txt のような名前は語を並べても漏れるので、
// 止める名前を並べるのではなく、置いてよい名前を並べる（迷ったら止まる側）。本文のファイルを足すときは、名前をこの形に合わせる
// ドットで始まる名前が git から外れていなければ止まる（.md 以外も）。
const PUBLIC_NAMES = [
  /^[a-z]+-ch\d+\.md$/, /^[a-z]+-(yomikata|kanmatsu)\.md$/,
  /^(build|dev)\.(mjs|sh)$/, /^package(-lock)?\.json$/, /^(node_modules|build)$/,
];
export function checkPrivate() {
  for (const n of fs.readdirSync(ROOT).filter(n => !n.startsWith('.'))) {
    if (!PUBLIC_NAMES.some(re => re.test(n))) fail(`本文でも build の道具でもない名前がある: ${n}（作業用なら、ドットで始まる .md にする。例 .${n.replace(/\.[^.]*$/, '')}.md）`);
    const book = n.match(/^([a-z]+)-(ch\d+|yomikata|kanmatsu)\.md$/);
    if (book && !BOOKS.includes(book[1])) fail(`本の名前が ${book[1]}: ${n}（${BOOKS.join(' / ')} のどれか）`);
  }
  // ドットで始まる名前は .md に限らず全部、git から外れていることを確かめる（.notes.txt は .*.md に当たらず git に載る）
  for (const n of fs.readdirSync(ROOT).filter(n => n.startsWith('.'))) {
    try { execFileSync('git', ['check-ignore', '-q', n], { cwd: ROOT }); }
    catch { fail(`${n} が git から外れていない（作業用の文書はドットで始まる .md にする。.gitignore の .*.md で外れる）`); }
  }
  const list = process.env.AA_PRIVATE_WORDS || path.join(os.homedir(), 'app', 'aa-eaa-textbook', 'private-words.txt');
  if (!fs.existsSync(list)) fail(`出さない語の一覧が無い: ${path.basename(list)}（AA_PRIVATE_WORDS で場所を指定）`);
  const res = fs.readFileSync(list, 'utf8').split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#')).map(l => new RegExp(l, 'i'));
  const walk = d => fs.readdirSync(d).filter(n => !['node_modules', 'build'].includes(n) && !(n.startsWith('.') && n.endsWith('.md'))).flatMap(n =>
    fs.statSync(path.join(d, n)).isDirectory() ? walk(path.join(d, n)) : [path.join(d, n)]);
  for (const f of walk(ROOT).filter(f => path.basename(f) !== 'package-lock.json')) {
    fs.readFileSync(f, 'utf8').split('\n').forEach((l, i) => {
      for (const re of res) { const m = l.match(re); if (m) fail(`出さない語がある: ${path.relative(ROOT, f)}:${i + 1}「${m[0]}」`); }
    });
  }
}

// 本の名前。引数の 1 つめが本の名前ならそれを使い、無ければ aa
export const BOOKS = ['aa', 'eaa'];
export function parseArgs(args) {
  return BOOKS.includes(args[0]) ? { book: args[0], rest: args.slice(1) } : { book: 'aa', rest: args };
}

export function sources(args, book = 'aa') {
  if (!BOOKS.includes(book)) fail(`本の名前が ${book}（${BOOKS.join(' / ')} のどれか）`);
  if (args.length) return args.map(a => path.resolve(a));
  const re = new RegExp(`^${book}-ch\\d+\\.md$`);
  const fs_ = fs.readdirSync(ROOT).filter(f => re.test(f)).sort();
  if (!fs_.length) fail(`${book}-ch*.md が 1 本も無い`);
  if (fs.existsSync(path.join(ROOT, `${book}-kanmatsu.md`))) fs_.push(`${book}-kanmatsu.md`);
  return fs_.map(f => path.join(ROOT, f));
}

export function report(chs) {
  // モックの絵のままの章は毎回名前を出す（描いたつもりで描いていない章を残さない）
  const mocks = chs.filter(ch => ch.pages.some(p => p.cover && p.mock)).map(ch => ch.name);
  if (mocks.length) console.log(`  モックの絵（章の主張の絵がまだ無い）: ${mocks.length} 章 — ${mocks.join(' ')}`);
  for (const ch of chs) {
    const ps = ch.pages.filter(p => !p.cover);
    const sum = ps.reduce((a, p) => a + p.nBody, 0);
    console.log(`  ${ch.name}: ${ps.length} ページ${ch.appendix ? "" : " + 章の概要"} / 文 ${sum} 字（1 ページ平均 ${Math.round(sum / (ps.length || 1))} 字・最大 ${Math.max(0, ...ps.map(p => p.nBody))} 字）`);
    ps.forEach((p, i) => console.log(`    p.${String(i + 1).padStart(2)} ${String(p.nBody).padStart(3)} 字${p.nNote ? ` + 注 ${p.nNote}` : ''}  ${p.title}`));
  }
}

async function main() {
  try {
    checkPrivate();
    if (process.argv[2] === '--check') { console.log('  出さない語: なし'); return; }
    await loadGraphviz();
    const { book, rest } = parseArgs(process.argv.slice(2));
    const files = sources(rest, book);
    const { html, chs, front } = render(files, '', !rest.length, book);
    fs.mkdirSync(OUT, { recursive: true });
    const out = path.join(OUT, rest.length ? path.basename(files[0], '.md') + '.html' : `${book}.html`);
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
