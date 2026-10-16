// AA・EAA 教科書の dev: 開くたびに組み直して返す。md が変わったらブラウザを自動で読み直す
// 127.0.0.1 のみ。PORT で変更可（既定 8766）。build/ には書かない
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { loadGraphviz, render, sources, report, BuildError } from './build.mjs';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const PORT = +(process.env.PORT || 8766);
const args = process.argv.slice(2);
const stamp = () => fs.readdirSync(ROOT).filter(f => f.endsWith('.md')).map(f => fs.statSync(path.join(ROOT, f)).mtimeMs).join(',');
const RELOAD = `<script>(()=>{let s=null;setInterval(async()=>{try{const t=await (await fetch('/stamp')).text();if(s&&t!==s)location.reload();s=t;}catch{}},800);})();</script>`;

await loadGraphviz();
http.createServer((req, res) => {
  if (req.url === '/stamp') { res.end(stamp()); return; }
  try {
    const { html, chs } = render(sources(args), RELOAD);
    report(chs);
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }).end(html);
  } catch (e) {
    const msg = e instanceof BuildError ? e.message : String(e.stack || e);
    console.error(`build 失敗: ${msg}`);
    res.writeHead(500, { 'content-type': 'text/html; charset=utf-8' })
      .end(`<!doctype html><meta charset="utf-8"><pre style="font-size:16px;color:#7f1d1d;padding:20px">build 失敗:\n${msg.replace(/</g, '&lt;')}</pre>${RELOAD}`);
  }
}).listen(PORT, '127.0.0.1', () => console.log(`dev: http://127.0.0.1:${PORT}/`));
