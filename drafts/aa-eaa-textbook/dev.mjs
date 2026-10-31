// AA・EAA 教科書の dev: 開くたびに組み直して返す。md が変わったらブラウザを自動で読み直す
// build.mjs 自体を直したときも拾う（立ち上げ直しは要らない）
// 127.0.0.1 のみ。PORT で変更可（既定 8766）。build/ には書かない
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const PORT = +(process.env.PORT || 8766);
const args = process.argv.slice(2);
const BUILD = path.join(ROOT, 'build.mjs');

// build.mjs が書き換わったら読み直す。ESM は一度読んだ版を抱えるので、?v= を付けて別物として読ませる
let mod = null, modAt = 0;
async function build() {
  const t = fs.statSync(BUILD).mtimeMs;
  if (!mod || t !== modAt) {
    mod = await import(`./build.mjs?v=${t}`);
    modAt = t;
    await mod.loadGraphviz();
    console.log(`build.mjs を読み直しました（${new Date(t).toLocaleTimeString('ja-JP')} の版）`);
  }
  return mod;
}

// md と build.mjs の両方を見る。どちらが変わってもブラウザが読み直す
const stamp = () => [
  ...fs.readdirSync(ROOT).filter(f => f.endsWith('.md')).map(f => fs.statSync(path.join(ROOT, f)).mtimeMs),
  fs.statSync(BUILD).mtimeMs,
].join(',');
const RELOAD = `<script>(()=>{let s=null;setInterval(async()=>{try{const t=await (await fetch('/stamp')).text();if(s&&t!==s)location.reload();s=t;}catch{}},800);})();</script>`;

await build();
http.createServer(async (req, res) => {
  if (req.url === '/stamp') { res.end(stamp()); return; }
  try {
    const b = await build();
    const { html, chs } = b.render(b.sources(args), RELOAD);
    b.report(chs);
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }).end(html);
  } catch (e) {
    const msg = e?.name === 'BuildError' || e instanceof (mod?.BuildError ?? Error) ? e.message : String(e.stack || e);
    console.error(`build 失敗: ${msg}`);
    res.writeHead(500, { 'content-type': 'text/html; charset=utf-8' })
      .end(`<!doctype html><meta charset="utf-8"><pre style="font-size:16px;color:#7f1d1d;padding:20px">build 失敗:\n${msg.replace(/</g, '&lt;')}</pre>${RELOAD}`);
  }
}).listen(PORT, '127.0.0.1', () => console.log(`dev: http://127.0.0.1:${PORT}/`));
