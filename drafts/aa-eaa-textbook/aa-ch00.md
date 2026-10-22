# 第 0 章　AA（Agentic Agile）とは

> 人の判断の置き場所を選び、書いて渡す

<!-- 扉の絵（@ope-ultp1635 msg f0419ae4）: 章全体の主張 1 つ。本文の絵の使い回しはしない -->
```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <rect x="40" y="40" width="90" height="56" rx="6" class="h"/><text x="85" y="76" class="t on" text-anchor="middle">人</text>
  <rect x="180" y="26" width="76" height="92" rx="3" fill="#fff" class="hl"/>
  <path d="M192,50 H244 M192,68 H244 M192,86 H232" stroke="#d9822b" stroke-width="2"/>
  <path d="M130,68 H174" class="ln" marker-end="url(#arr)"/>
  <text x="270" y="78" class="ts hc">書いて渡す</text>
  <path d="M218,118 V186" class="ln" marker-end="url(#arr)"/>
  <rect x="40" y="192" width="770" height="50" rx="25" class="a"/>
  <path d="M810,206 L840,217 L810,228 Z" class="a"/>
  <text x="70" y="223" class="ts on">AI が回す</text>
  <g><use href="#i-ok" x="300" y="152" width="26" height="26"/><use href="#i-ok" x="380" y="152" width="26" height="26"/><use href="#i-ok" x="460" y="152" width="26" height="26"/><use href="#i-ok" x="640" y="152" width="26" height="26"/><use href="#i-ok" x="720" y="152" width="26" height="26"/></g>
  <path d="M313,180 V190 M393,180 V190 M473,180 V190 M653,180 V190 M733,180 V190" class="lt"/>
  <rect x="534" y="132" width="52" height="56" rx="6" class="h"/><text x="560" y="168" class="t on" text-anchor="middle">人</text>
  <text x="560" y="120" class="ts hc" text-anchor="middle">選んだ所だけ</text>
  <text x="440" y="280" class="ts sub" text-anchor="middle">ほかの所は、人を待たずに通る</text>
</svg>
```

<!--
第 17 版（plan 冒頭, @ope-ultp1635 msg ad92916c、kishibashi3「むしろ、０章かなにかで AA とは、をやってから説明に入ったほうがいいんじゃない？」）で足した。
設計: 10/14 の「AA とは」段落（11 人中 1 人しか使わなかった）は、条文の抽象を読み手の問題より先に置いていた。p.19（旧 p.17）が 5/6 で使われたのは、p.13 の板挟みへの答えとして読めたから（木村）。
ゆえに 0 章は、第 1 章の証拠を先取りせず、読み手が自分の現場で知っている両端（全部人が見る／人を外す）を絵に置き、その間の 3 つ目として AA を言う。条文の逐語は持たない（p.19 に残す）。
いちばん AA を言っている 1 文「人の判断の置き場所を選ぶ」を見出しと絵の大きい字にした（p.19 では灰色の小さい字だった。@ope-ultp1635 の観測）。
第 21 版（plan 冒頭, @ope-ultp1635 msg b8512927、kishibashi3「たんに選ぶだけなら AI 駆動開発と変わらん」「選んだあと、人の判断を AI 側に映していくのが AA じゃん？」）で後半を足した。
理由: 「選ぶ」だけだと、解説 D1 が「それだけなら心構えで終わる」と言う側になる。実測でも、第 0 章を読んだ 6 人中 3 人が p.15「大事な PR だけ人が見る」を p.2 と同じと読んだ（第 19 版）。「選ぶ」だけでは、ふつうの AI 駆動開発の工夫と区別がつかない。
先取りにはならない: 第 1 章 p.7「10 周回しても、人が見る所は同じ」が問題を出しており、後半はその答えの行き先。中身（同じ質問が 2 度来たら書く・床で止まる）は第 9 章に残す。
絵: AA の列に「人の答えは書いて、次から AI が判定」の戻り矢印。大きい字を 3 行にした（対比の 1 行は残す）。文の章の行き先は 80 字に入らないので注へ。
第 22 版（@reader msg b90cae94、v21 判定）: 注に「書いて渡しても人が残る所は第 3 章」を足した。B の 1/6 が p.2 の矢印＋p.22 から「最後は人がほとんど要らなくなる」と読んだため（決め方の「外れ読み 1 人でも」）。床の語は第 3 章まで出さない（未導入の語を前に出さない）。90 字に入れるため「第 2 章から」→「第 2 章」、「スクラム等の型ではなく、」→「型ではなく」。
-->

先に、この本が何を勧めるのかを 1 ページで言います。理由は第 1 章で見ます。

## 人の判断の置き場所を選び、書いて渡す

```svg
<svg viewBox="0 0 880 420" width="880" height="420">
  <path d="M295,20 V270 M585,20 V270" class="lt dash"/>
  <g class="t" text-anchor="middle" font-weight="700"><text x="150" y="36">全部を人が見る</text><text x="440" y="36">人を外す</text><text x="730" y="36" class="hc">AA：選び、書いて渡す</text></g>
  <g><use href="#i-pr" x="56" y="58" width="22" height="28"/><use href="#i-pr" x="86" y="58" width="22" height="28"/><use href="#i-pr" x="116" y="58" width="22" height="28"/><use href="#i-pr" x="146" y="58" width="22" height="28"/><use href="#i-pr" x="176" y="58" width="22" height="28"/><use href="#i-pr" x="206" y="58" width="22" height="28"/></g>
  <path d="M150,92 V118" class="ln" marker-end="url(#arr)"/>
  <rect x="60" y="122" width="180" height="48" rx="6" class="h"/><text x="150" y="152" class="ts on" text-anchor="middle">人が 1 本ずつ approve</text>
  <use href="#i-wait" x="74" y="190" width="22" height="30"/><use href="#i-wait" x="104" y="190" width="22" height="30"/><use href="#i-wait" x="134" y="190" width="22" height="30"/><use href="#i-wait" x="164" y="190" width="22" height="30"/><use href="#i-wait" x="194" y="190" width="22" height="30"/>
  <text x="150" y="250" class="ts sub" text-anchor="middle">AI が速くなっても、待ちが残る</text>
  <g><use href="#i-pr" x="346" y="58" width="22" height="28"/><use href="#i-pr" x="376" y="58" width="22" height="28"/><use href="#i-pr" x="406" y="58" width="22" height="28"/><use href="#i-pr" x="436" y="58" width="22" height="28"/><use href="#i-pr" x="466" y="58" width="22" height="28"/><use href="#i-pr" x="496" y="58" width="22" height="28"/></g>
  <path d="M440,92 V118" class="ln" marker-end="url(#arr)"/>
  <rect x="350" y="122" width="180" height="48" rx="6" class="a"/><text x="440" y="152" class="ts on" text-anchor="middle">AI が作って auto-merge</text>
  <use href="#i-pile" x="396" y="186" width="34" height="34"/><use href="#i-pile" x="436" y="186" width="34" height="34"/><use href="#i-pile" x="476" y="186" width="20" height="20"/>
  <text x="440" y="250" class="ts sub" text-anchor="middle">速いが、間違いも速く積もる</text>
  <g><use href="#i-pr" x="636" y="58" width="22" height="28"/><use href="#i-pr" x="666" y="58" width="22" height="28"/><use href="#i-pr" x="696" y="58" width="22" height="28"/><use href="#i-pr" x="726" y="58" width="22" height="28"/><use href="#i-pr" x="756" y="58" width="22" height="28"/><use href="#i-pr" x="786" y="58" width="22" height="28"/></g>
  <path d="M700,92 L660,118" class="ln" marker-end="url(#arr)"/><path d="M780,92 L800,118" class="hl" marker-end="url(#arr)"/>
  <rect x="600" y="122" width="150" height="48" rx="6" class="a"/><text x="675" y="146" class="ts on" text-anchor="middle">多くは AI が判定</text><text x="675" y="164" class="tx on" text-anchor="middle" style="fill:#fff">人を待たない</text>
  <rect x="760" y="122" width="96" height="48" rx="6" class="h"/><text x="808" y="146" class="ts on" text-anchor="middle">選んだ所</text><text x="808" y="164" class="tx" text-anchor="middle" style="fill:#fff">だけ人</text>
  <path d="M808,172 V200 H675 V176" class="hl" marker-end="url(#arr)"/>
  <text x="741" y="224" class="tx hc" text-anchor="middle">人の答えは書いて、次から AI が判定</text>
  <text x="730" y="250" class="ts hc" text-anchor="middle">待ちも、積もる間違いも減らす</text>
  <rect x="40" y="286" width="800" height="118" rx="10" fill="#fff" class="hl"/>
  <text x="440" y="320" class="tl hc" text-anchor="middle">全部見るのでも、外すのでもない。</text>
  <text x="440" y="354" class="tl hc" text-anchor="middle">人の判断の置き場所を選び、</text>
  <text x="440" y="388" class="tl hc" text-anchor="middle">下した判断は書いて、AI に渡していく</text>
</svg>
```

AA（Agentic Agile）は、AI エージェントが作る開発で、人の判断の置き場所を選び、下した判断を書いて AI に渡していくやり方です。

※ 置き場所は第 2 章、書いて渡すのは第 8 章。書いて渡しても人が残る所は第 3 章。Agentic は AI エージェントが作ること。Agile は型ではなく素早さそのもの。条文の定義は p.20。

<!--
第 18 版（plan 冒頭, @ope-ultp1635 msg c3a2ee25、kishibashi3「D1 とか D2 とかが何かはどこかに書いてあるの？」「最初がいいんじゃないの」）で第 1 章の最後から移した。
置き方: 第 0 章は p.2（読み手の両端 → AA）で始め、地図はその次に「戻ってくる所」として置く。読ませる説明ではなく引く索引なので、文は「番号に出会ったら、ここへ戻って」で終える。中身の説明は従来どおり出す所で行う。
第 1 章側には参照を残していない（地図は 1 か所。複製は drift を生む）。
-->

## 条文の一覧：原則 P・指針 D

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="14" width="800" height="40" rx="6" class="soft"/>
  <text x="60" y="40" class="ts" font-weight="700">前提</text><text x="112" y="40" class="ts">3 文</text><a href="#p21"><text x="820" y="40" class="tx" text-anchor="end">第 1 章 p.21</text></a>
  <path d="M440,54 V74" class="ln" marker-end="url(#arr)"/>
  <text x="40" y="96" class="ts" font-weight="700">原則 P1〜P3　条文の土台</text>
  <g class="box"><rect x="40" y="106" width="260" height="50" rx="6"/><rect x="310" y="106" width="260" height="50" rx="6"/><rect x="580" y="106" width="260" height="50" rx="6"/></g>
  <g class="ts"><text x="52" y="126">P1 書かれていないものは、</text><text x="322" y="126">P2 どの層も、決まりに従って</text><text x="592" y="126">P3 決まりは、</text></g>
  <g class="ts"><text x="74" y="147">無いものとして扱う</text><text x="344" y="147">働き、下の決まりを書く</text><text x="614" y="147">記録を見て直す</text></g>
  <g class="tx" text-anchor="end"><a href="#ch4"><text x="290" y="147">第 4 章</text></a><a href="#ch8"><text x="560" y="147">第 8 章</text></a><a href="#ch8"><text x="830" y="147">第 8 章</text></a></g>
  <path d="M440,156 V176" class="ln" marker-end="url(#arr)"/>
  <text x="40" y="198" class="ts" font-weight="700">指針 D1〜D8　原則と前提から導いた、やり方の決まり</text>
  <g class="box"><rect x="40" y="208" width="195" height="50" rx="6"/><rect x="242" y="208" width="195" height="50" rx="6"/><rect x="444" y="208" width="195" height="50" rx="6"/><rect x="646" y="208" width="195" height="50" rx="6"/><rect x="40" y="266" width="195" height="50" rx="6"/><rect x="242" y="266" width="195" height="50" rx="6"/><rect x="444" y="266" width="195" height="50" rx="6"/><rect x="646" y="266" width="195" height="50" rx="6"/></g>
  <g class="al"><rect x="40" y="208" width="195" height="50" rx="6"/><rect x="444" y="208" width="195" height="50" rx="6"/><rect x="646" y="208" width="195" height="50" rx="6"/><rect x="646" y="266" width="195" height="50" rx="6"/></g>
  <g class="ts"><text x="50" y="230">D1 判断の配分</text><text x="252" y="230">D2 意味の一意性</text><text x="454" y="230">D3 生成と判定の分離</text><text x="656" y="230">D4 委任の尺度</text><text x="50" y="288">D5 確率的品質</text><text x="252" y="288">D6 境界</text><text x="454" y="288">D7 可逆性は設計で買える</text><text x="656" y="288">D8 自己権限の固定</text></g>
  <g class="tx"><a href="#ch3"><text x="50" y="250">第 3 章</text></a><a href="#ch4"><text x="252" y="250">第 4 章</text></a><a href="#ch2"><text x="454" y="250">第 2 章</text></a><a href="#ch3"><text x="656" y="250">第 3 章</text></a><a href="#ch5"><text x="50" y="308">第 5 章</text></a><a href="#ch6"><text x="252" y="308">第 6 章</text></a><a href="#ch7"><text x="454" y="308">第 7 章</text></a><text x="656" y="308"><a href="#ch3"><tspan>第 3 章</tspan></a><tspan>・</tspan><a href="#ch9"><tspan>第 9 章</tspan></a></text></g>
  <rect x="40" y="336" width="18" height="18" rx="3" class="al"/><text x="66" y="351" class="ts">第 2・3 章で扱う 4 つ</text>
  <text x="840" y="351" class="tx" text-anchor="end">名前は条文のまま。中身は各章で</text>
</svg>
```

本文の P1〜P3・D1〜D8 は、AA の条文の番号です。合わせて 11 行、各章が 1〜3 行ずつ受け持ちます。番号に出会ったら、ここへ戻ってください。

<!-- 2026-10-19（@ope-ultp1635 msg be924e53 GO）: p.62 の測定で注の「解説 P1」が「解説の 1 ページ目」と読まれた（@reader 2026-10-19 p62）。注の 22 か所を「P1 の解説」「解説の §3」に変え、「解説」が何かをここで 1 回言う -->

※ 各章の終わりに、条文を現場でどう組むかの「実装イメージ」を置いた。通しの形は巻末 p.163 に 1 枚で。

---
@writer-ja [bridge-claude2] (operator-supervised · k-ishibashi-ntv/agent-hub)
