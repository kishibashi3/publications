# 第 5 章　品質の分布

> 1 回通った頼み方を信じない：品質は分布で見る

<!-- 扉の絵（@ope-ultp1635 msg f0419ae4）: 章全体の主張 1 つ。本文の絵の使い回しはしない -->
```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <defs><clipPath id="c5-left"><rect x="0" y="0" width="330" height="300"/></clipPath></defs>
  <text x="60" y="288" class="ts sub">同じ頼み方を何度も回したときの、出来の分かれ方</text>
  <path d="M90,240 C 260,240 380,60 540,60 C 680,60 760,240 820,240 Z" fill="#dbe7f4" stroke="#2f6fb3" stroke-width="3"/>
  <path d="M90,240 C 260,240 380,60 540,60 C 680,60 760,240 820,240 Z" class="xw" clip-path="url(#c5-left)"/>
  <path d="M330,46 V246" class="ln dash"/><text x="330" y="40" class="ts" text-anchor="middle">合格線</text>
  <text x="250" y="226" class="ts xc" text-anchor="middle">落ちる回</text>
  <path d="M60,240 H840" class="ln"/>
  <path d="M640,240 V128" stroke="#2e7d32" stroke-width="3"/><use href="#i-ok" x="624" y="96" width="32" height="32"/>
  <text x="666" y="118" class="ts okc">1 回目の ✓</text>
  <text x="840" y="270" class="tx" text-anchor="end">出来が良い →</text>
</svg>
```

<!--
骨格から本物にした（plan §G.1 の 5 番目）。依頼元 @ope-ultp1635 msg 241ea18b（第 5〜7 章の着手便）・msg 06ecaa03（第 4〜10 章を本物に）。
ページ番号は build/aa.html の右上の数字（第 5 章の扉＝81）。
p.82 は第 5〜7 章の入口（3 章で 1 枚）。operator msg 241ea18b「4 枚なのに 3 つで引っかからないか」への答えを絵に持たせた: 3 つは 4 枚と 1 対 1 ではない。2 の条件は 4 の判定で確かめる（第 4 章 p.65 の例のとおり）、1 の目的は第 6 章で絞らない側に置く、7 の大きさは 4 枚の外（一筋の大きさ、第 4 章 p.72）。
骨格から: 「1 回の ✓ は次の ✓ を約束しない」は 20 回の並びのページに畳んだ。p.86「頼み方を直した効き目も回数で比べる」を足した。
毎回の判定は別の会話の AI（第 2 章）なので、人の点は増えない。第 8 章 p.125「『毎回確かめよ』の札は点を増やす」と食い違わないよう、p.85 の注に書いた。
例の数（20 回のうち 17 回など）は作り物。
-->

第 4 章で、4 枚を書いて渡した頼み方が 1 回通りました。この章から 3 章かけて、人が毎回は見ない輪で、渡した 4 枚が守られ続けるかを見ます。

## 書いて渡しても、まだ壊れる所が 3 つ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g fill="#fff" class="hl"><rect x="40" y="16" width="180" height="80" rx="6"/><rect x="250" y="16" width="180" height="80" rx="6"/><rect x="460" y="16" width="180" height="80" rx="6"/><rect x="670" y="16" width="180" height="80" rx="6"/></g>
  <g class="ts hc" font-weight="700"><text x="54" y="46">1 目的</text><text x="264" y="46">2 守る条件</text><text x="474" y="46">3 使える権限</text><text x="684" y="46">4 判定の条件</text></g>
  <g class="tx"><text x="54" y="76">何を達成したいか</text><text x="264" y="76">何を守るか</text><text x="474" y="76">どこまで任せるか</text><text x="684" y="76">何をもって成果とするか</text></g>
  <path d="M550,98 V122" class="ln" marker-end="url(#arr)"/><path d="M760,98 V122" class="ln" marker-end="url(#arr)"/>
  <rect x="460" y="126" width="180" height="76" rx="6" fill="#fff" stroke="#222" stroke-width="3"/>
  <text x="550" y="152" class="ts" text-anchor="middle" font-weight="700">第 6 章　権限</text>
  <text x="550" y="174" class="ts" text-anchor="middle">書いた範囲より、</text><text x="550" y="194" class="ts" text-anchor="middle">届く範囲が広い</text>
  <rect x="670" y="126" width="180" height="76" rx="6" fill="#fff" stroke="#222" stroke-width="3"/>
  <text x="760" y="152" class="ts" text-anchor="middle" font-weight="700">第 5 章　判定</text>
  <text x="760" y="174" class="ts" text-anchor="middle">1 回の ✓ を、</text><text x="760" y="194" class="ts" text-anchor="middle">次も通ると扱う</text>
  <path d="M340,98 V214 H760 V206" class="ln dash" marker-end="url(#arr)"/>
  <text x="352" y="140" class="tx">守れたかは、</text><text x="352" y="158" class="tx">4 の判定で見る</text>
  <path d="M130,98 V122" class="ln" marker-end="url(#arr)"/>
  <text x="130" y="144" class="tx" text-anchor="middle">絞らずに渡す</text><text x="130" y="162" class="tx" text-anchor="middle">（第 6 章）</text>
  <path d="M40,230 V240 H850 V230" class="ln"/>
  <path d="M445,240 V254" class="ln" marker-end="url(#arr)"/>
  <rect x="40" y="258" width="810" height="70" rx="6" fill="#fff" stroke="#222" stroke-width="3"/>
  <text x="64" y="288" class="ts" font-weight="700">第 7 章　大きさ</text>
  <text x="64" y="314" class="ts">4 枚が覆う一筋が大きいと、revert できない側に寄る。大きさは 4 枚のどれにも無い</text>
  <text x="445" y="362" class="ts sub" text-anchor="middle">3 つは、4 枚と 1 対 1 ではない</text>
</svg>
```

人が毎回は見ない輪で、4 枚を書いて渡しても、まだ壊れる所が 3 つあります。1 は第 6 章、2 は第 5 章で扱い、第 7 章は 4 枚の外の大きさを見ます。

※ 4 枚は第 4 章 p.71、一筋は p.78。p.71 の例では、4 の「注文が 1 件だけ残る」が 2 の「二重に課金しない」を確かめている。

## 同じ頼み方を 20 回：✓ と ✗ の並び

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="60" y="70" class="t">同じ 4 枚で、同じ AI に 20 回頼む</text>
  <g fill="#fff" class="lt">
    <rect x="98" y="150" width="32" height="40" rx="3"/><rect x="136" y="150" width="32" height="40" rx="3"/><rect x="174" y="150" width="32" height="40" rx="3"/><rect x="212" y="150" width="32" height="40" rx="3"/><rect x="250" y="150" width="32" height="40" rx="3"/><rect x="288" y="150" width="32" height="40" rx="3"/><rect x="326" y="150" width="32" height="40" rx="3"/><rect x="364" y="150" width="32" height="40" rx="3"/><rect x="402" y="150" width="32" height="40" rx="3"/><rect x="440" y="150" width="32" height="40" rx="3"/>
    <rect x="478" y="150" width="32" height="40" rx="3"/><rect x="516" y="150" width="32" height="40" rx="3"/><rect x="554" y="150" width="32" height="40" rx="3"/><rect x="592" y="150" width="32" height="40" rx="3"/><rect x="630" y="150" width="32" height="40" rx="3"/><rect x="668" y="150" width="32" height="40" rx="3"/><rect x="706" y="150" width="32" height="40" rx="3"/><rect x="744" y="150" width="32" height="40" rx="3"/><rect x="782" y="150" width="32" height="40" rx="3"/>
  </g>
  <rect x="60" y="150" width="32" height="40" rx="3" fill="#fff" stroke="#d9822b" stroke-width="4"/>
  <use href="#i-ok" x="64" y="158" width="24" height="24"/><use href="#i-ok" x="102" y="158" width="24" height="24"/><use href="#i-ok" x="140" y="158" width="24" height="24"/><use href="#i-ok" x="178" y="158" width="24" height="24"/><use href="#i-ok" x="216" y="158" width="24" height="24"/><use href="#i-ok" x="254" y="158" width="24" height="24"/><use href="#i-no" x="292" y="158" width="24" height="24"/><use href="#i-ok" x="330" y="158" width="24" height="24"/><use href="#i-ok" x="368" y="158" width="24" height="24"/><use href="#i-ok" x="406" y="158" width="24" height="24"/>
  <use href="#i-ok" x="444" y="158" width="24" height="24"/><use href="#i-ok" x="482" y="158" width="24" height="24"/><use href="#i-no" x="520" y="158" width="24" height="24"/><use href="#i-ok" x="558" y="158" width="24" height="24"/><use href="#i-ok" x="596" y="158" width="24" height="24"/><use href="#i-ok" x="634" y="158" width="24" height="24"/><use href="#i-ok" x="672" y="158" width="24" height="24"/><use href="#i-no" x="710" y="158" width="24" height="24"/><use href="#i-ok" x="748" y="158" width="24" height="24"/><use href="#i-ok" x="786" y="158" width="24" height="24"/>
  <text x="76" y="132" class="ts hc" text-anchor="middle">1 回目</text>
  <path d="M98,212 V222 H814 V212" class="lt"/>
  <text x="456" y="246" class="ts sub" text-anchor="middle">見えていなかった 19 回</text>
  <text x="440" y="310" class="t" text-anchor="middle">通った 17 回・通らなかった 3 回</text>
  <text x="440" y="350" class="ts sub" text-anchor="middle">1 回目の ✓ は、2 回目の ✓ を約束しない</text>
</svg>
```

AI の出力は、同じ 4 枚で頼んでも毎回ばらつきます。1 回目に ✓ を見た人に見えていたのは、20 升のうち左端の 1 升だけです。

※ 前提「出力は確率的にばらつき、同じ生成元は同じ誤りを共有する」（p.21）。並びは説明のための作り物。

## 品質は点でなく、分布で見る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="24" width="340" height="220" rx="10" fill="#fff" class="lt"/>
  <text x="210" y="62" class="t" text-anchor="middle" font-weight="700">点</text>
  <use href="#i-ok" x="186" y="96" width="48" height="48"/>
  <text x="210" y="190" class="ts" text-anchor="middle">通ったか、通らなかったか</text>
  <text x="210" y="216" class="tx" text-anchor="middle">1 回の結果</text>
  <rect x="440" y="24" width="400" height="220" rx="10" fill="#fff" stroke="#222" stroke-width="3"/>
  <text x="640" y="62" class="t" text-anchor="middle" font-weight="700">分布</text>
  <g class="ok"><rect x="470" y="104" width="16" height="44"/><rect x="487" y="104" width="16" height="44"/><rect x="504" y="104" width="16" height="44"/><rect x="521" y="104" width="16" height="44"/><rect x="538" y="104" width="16" height="44"/><rect x="555" y="104" width="16" height="44"/><rect x="572" y="104" width="16" height="44"/><rect x="589" y="104" width="16" height="44"/><rect x="606" y="104" width="16" height="44"/><rect x="623" y="104" width="16" height="44"/><rect x="640" y="104" width="16" height="44"/><rect x="657" y="104" width="16" height="44"/><rect x="674" y="104" width="16" height="44"/><rect x="691" y="104" width="16" height="44"/><rect x="708" y="104" width="16" height="44"/><rect x="725" y="104" width="16" height="44"/><rect x="742" y="104" width="16" height="44"/></g>
  <g class="x"><rect x="759" y="104" width="16" height="44"/><rect x="776" y="104" width="16" height="44"/><rect x="793" y="104" width="16" height="44"/></g>
  <text x="640" y="190" class="ts" text-anchor="middle">20 回のうち 17 回通る</text>
  <text x="640" y="216" class="tx" text-anchor="middle">何回のうち何回か</text>
  <rect x="40" y="280" width="800" height="70" rx="10" class="soft"/>
  <text x="64" y="324" style="font-size:19px">D5 品質は点ではなく分布として扱う（前提）</text>
  <path d="M100,332 H420" class="hl"/>
</svg>
```

条文 D5 です。品質を、1 回通ったかではなく、何回のうち何回通るかで見ます。

※ 条文の一覧は p.3。

## 「前回通った」を merge の理由にしない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="170" width="110" height="60" rx="6" class="h"/><text x="85" y="206" class="t on" text-anchor="middle">頼む</text>
  <rect x="180" y="170" width="120" height="60" rx="6" class="a"/><text x="240" y="206" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="340" y="170" width="110" height="60" rx="6" class="box"/><text x="395" y="206" class="t" text-anchor="middle">テスト</text>
  <rect x="490" y="170" width="150" height="60" rx="6" fill="#fff" class="al"/><text x="565" y="196" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="565" y="218" class="ts ac" text-anchor="middle">がレビュー</text>
  <rect x="680" y="170" width="120" height="60" rx="6" class="box"/><text x="740" y="206" class="t" text-anchor="middle">merge</text>
  <path d="M140,200 H176" class="ln" marker-end="url(#arr)"/><path d="M300,200 H336" class="ln" marker-end="url(#arr)"/><path d="M450,200 H486" class="ln" marker-end="url(#arr)"/><path d="M640,200 H676" class="ln" marker-end="url(#arr)"/>
  <path d="M240,166 C300,60 660,60 728,164" class="xl dash" marker-end="url(#arr-x)"/>
  <rect x="404" y="58" width="120" height="34" rx="4" fill="#fff" class="lt"/><text x="464" y="81" class="ts" text-anchor="middle">前回 ✓ の札</text>
  <use href="#i-no" x="452" y="98" width="26" height="26"/>
  <path d="M340,246 V262 H640 V246" class="al"/>
  <text x="490" y="290" class="ts ac" text-anchor="middle">4 の判定の条件で、今回の出力を見る</text>
  <text x="490" y="314" class="tx" text-anchor="middle">2 の守る条件も、ここで確かめる</text>
  <text x="440" y="360" class="ts sub" text-anchor="middle">同じ 4 枚でも、出力は毎回ちがう</text>
</svg>
```

前回と同じ 4 枚でも、今回の出力は今回の判定に通します。4 枚目の判定の条件は、1 回目のためでなく、毎回のためにあります。

※ 毎回の判定は別の会話の AI（第 2 章 p.26）で、人の点は増えない。人が立つのは、これまでどおり第 3 章の 2 か所。

## 頼み方を直した効き目も回数で比べる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="40" width="270" height="250" rx="10" fill="#fff" class="lt"/>
  <text x="165" y="74" class="ts sub" text-anchor="middle">1 回ずつ比べる</text>
  <text x="70" y="134" class="t">v1</text><use href="#i-ok" x="130" y="112" width="30" height="30"/>
  <text x="70" y="194" class="t">v2</text><use href="#i-no" x="130" y="172" width="30" height="30"/>
  <text x="165" y="256" class="ts xc" text-anchor="middle">「v1 の方が良い」？</text>
  <rect x="330" y="40" width="520" height="250" rx="10" fill="#fff" stroke="#222" stroke-width="3"/>
  <text x="590" y="74" class="ts sub" text-anchor="middle">同じ 20 回ずつ流して比べる</text>
  <text x="350" y="134" class="t">v1</text>
  <g class="ok"><rect x="390" y="112" width="18" height="30"/><rect x="412" y="112" width="18" height="30"/><rect x="434" y="112" width="18" height="30"/><rect x="456" y="112" width="18" height="30"/><rect x="478" y="112" width="18" height="30"/><rect x="500" y="112" width="18" height="30"/><rect x="522" y="112" width="18" height="30"/><rect x="544" y="112" width="18" height="30"/><rect x="566" y="112" width="18" height="30"/><rect x="588" y="112" width="18" height="30"/><rect x="610" y="112" width="18" height="30"/><rect x="632" y="112" width="18" height="30"/><rect x="654" y="112" width="18" height="30"/><rect x="676" y="112" width="18" height="30"/><rect x="698" y="112" width="18" height="30"/></g>
  <g class="x"><rect x="720" y="112" width="18" height="30"/><rect x="742" y="112" width="18" height="30"/><rect x="764" y="112" width="18" height="30"/><rect x="786" y="112" width="18" height="30"/><rect x="808" y="112" width="18" height="30"/></g>
  <text x="350" y="194" class="t">v2</text>
  <g class="ok"><rect x="390" y="172" width="18" height="30"/><rect x="412" y="172" width="18" height="30"/><rect x="434" y="172" width="18" height="30"/><rect x="456" y="172" width="18" height="30"/><rect x="478" y="172" width="18" height="30"/><rect x="500" y="172" width="18" height="30"/><rect x="522" y="172" width="18" height="30"/><rect x="544" y="172" width="18" height="30"/><rect x="566" y="172" width="18" height="30"/><rect x="588" y="172" width="18" height="30"/><rect x="610" y="172" width="18" height="30"/><rect x="632" y="172" width="18" height="30"/><rect x="654" y="172" width="18" height="30"/><rect x="676" y="172" width="18" height="30"/><rect x="698" y="172" width="18" height="30"/><rect x="720" y="172" width="18" height="30"/><rect x="742" y="172" width="18" height="30"/><rect x="764" y="172" width="18" height="30"/></g>
  <g class="x"><rect x="786" y="172" width="18" height="30"/><rect x="808" y="172" width="18" height="30"/></g>
  <text x="590" y="250" class="ts" text-anchor="middle">v1 は 15 回、v2 は 18 回通る</text>
  <text x="440" y="340" class="ts sub" text-anchor="middle">v1・v2 は、書き直す前と後の 4 枚</text>
</svg>
```

4 枚を書き直した効き目も、1 回ずつ比べると逆に見えることがあります。同じ回数ずつ流し、通った数で比べます。

※ 数は説明のための作り物。何回流すかは、この本では決めない。流すほど実行の総量を使う（p.21 の前提）。

## 回数で見る決まりだけ、前提から直に出る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="20" width="800" height="64" rx="8" class="soft"/>
  <text x="60" y="46" class="ts sub">前提（p.21）</text>
  <text x="60" y="72" class="ts">実行は安いが総量に上限 ／ 希少なのは人の判断 ／ <tspan font-weight="700">出力はばらつく</tspan></text>
  <g class="box"><rect x="150" y="140" width="120" height="44" rx="6"/><rect x="300" y="140" width="120" height="44" rx="6"/><rect x="600" y="140" width="120" height="44" rx="6"/></g>
  <g class="ts" text-anchor="middle"><text x="210" y="168">P1</text><text x="360" y="168">P2</text><text x="660" y="168">P3</text></g>
  <text x="60" y="168" class="tx">原則</text>
  <g class="lt"><path d="M210,184 L85,262 M210,184 L187,262 M210,184 L289,262 M210,184 L799,262 M360,184 L289,262 M360,184 L391,262 M360,184 L595,262 M360,184 L799,262"/></g>
  <path d="M391,312 Q545,350 697,312 M799,312 Q750,340 697,312" class="lt dash"/>
  <g fill="#fff" class="lt"><rect x="40" y="264" width="90" height="46" rx="6"/><rect x="142" y="264" width="90" height="46" rx="6"/><rect x="244" y="264" width="90" height="46" rx="6"/><rect x="346" y="264" width="90" height="46" rx="6"/><rect x="550" y="264" width="90" height="46" rx="6"/><rect x="652" y="264" width="90" height="46" rx="6"/><rect x="754" y="264" width="90" height="46" rx="6"/></g>
  <rect x="448" y="264" width="90" height="46" rx="6" fill="#fff" stroke="#222" stroke-width="3"/>
  <g class="ts" text-anchor="middle"><text x="85" y="293">D1</text><text x="187" y="293">D2</text><text x="289" y="293">D3</text><text x="391" y="293">D4</text><text x="493" y="293" font-weight="700">D5</text><text x="595" y="293">D6</text><text x="697" y="293">D7</text><text x="799" y="293">D8</text></g>
  <path d="M493,86 V250" stroke="#222" stroke-width="4"/><path d="M482,248 L493,262 L504,248 Z" fill="#222"/>
  <text x="504" y="128" class="ts">原則を通らない</text>
  <text x="440" y="366" class="tx" text-anchor="middle">ほかの 7 つは、原則を通る（D7 はほかの指針を通る。点線は D4・D8 → D7）</text>
</svg>
```

D5 は、出力がばらつくという前提から直に出ます。前提が覆れば最初に落ち、原則が全部変わっても残ります。

※ 指針 8 つのうち、原則を通らないのは D5 だけ。条文の一覧は p.3。

## 練習問題：この報告で merge してよいか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="80" y="40" width="560" height="280" rx="10" fill="#fff" class="al"/>
  <text x="104" y="76" class="ts sub">AI からの報告</text>
  <text x="104" y="124" class="t">頼み方を直して試したら、通りました。</text>
  <text x="104" y="156" class="t">merge してください。</text>
  <use href="#i-ok" x="560" y="100" width="40" height="40"/>
  <path d="M104,186 H616" class="lt"/>
  <text x="104" y="226" class="ts">試した回数：</text><rect x="260" y="204" width="200" height="32" rx="4" fill="#fff" class="lt dash"/>
  <text x="104" y="282" class="ts">今回の出力の判定：</text><rect x="260" y="260" width="200" height="32" rx="4" fill="#fff" class="lt dash"/>
  <text x="740" y="200" class="tl" text-anchor="middle" style="font-size:64px">?</text>
</svg>
```

AI からの報告です。この報告だけで merge してよいでしょうか。足りないのは何でしょう。

※ 答え：よくない。今回の出力が今回の判定に通った記録が要る（p.93）。直した頼み方を採るなら、何回中何回かも要る（p.94）。

## まとめ：1 回の ✓ は 1 点、判定は毎回

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="800" height="150" rx="10" class="soft"/>
  <text x="64" y="62" class="ts sub">AA の条文（抜き書き）</text>
  <text x="64" y="112" style="font-size:20px">D5 品質は点ではなく分布として扱う（前提）</text>
  <path d="M100,120 H420" class="hl"/>
  <text x="100" y="146" class="tx">p.91・89 1 回の ✓ は、分布の 1 点</text>
  <text x="440" y="146" class="tx">p.95 前提から直に出る</text>
  <g fill="#fff" class="lt"><rect x="40" y="214" width="250" height="110" rx="8"/><rect x="315" y="214" width="250" height="110" rx="8"/><rect x="590" y="214" width="250" height="110" rx="8"/></g>
  <use href="#i-ok" x="70" y="236" width="24" height="24"/><text x="104" y="254" class="ts">点と分布</text><text x="70" y="296" class="tx">20 回のうち何回</text>
  <text x="345" y="254" class="ts">判定は毎回</text><text x="345" y="296" class="tx">p.93 前回の ✓ で素通りしない</text>
  <text x="620" y="254" class="ts">比べるのは回数で</text><text x="620" y="296" class="tx">p.94 直した 4 枚も同じ回数ずつ</text>
  <text x="440" y="360" class="ts sub" text-anchor="middle">壊れる所 3 つのうち、1 つめ：判定</text>
</svg>
```

この章を条文で書くと、D5 の 1 行です。1 回の ✓ は分布の 1 点で、判定は毎回、比べるときは回数で見ます。

※ 条文の一覧は p.3。

## 実装イメージ：判定を毎回かける

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="20" y="6" width="840" height="46" rx="8" class="soft"/>
  <text x="36" y="35" class="ts sub">この章の約束</text>
  <text x="150" y="35" class="ts">判定する AI → merge：今の commit を見た判定だけを渡す。前回の ✓ は渡さない</text>
  <use href="#i-pr" x="40" y="96" width="30" height="38"/><text x="84" y="122" class="ts">PR（push のたびに）</text>
  <path d="M250,116 H296" class="ln" marker-end="url(#arr)"/>
  <rect x="300" y="82" width="250" height="70" rx="6" fill="#fff" class="al"/>
  <text x="425" y="110" class="ts ac" text-anchor="middle">判定の AI を新しく起こす</text><text x="425" y="136" class="tx" text-anchor="middle">渡すのは差分と 4 枚目だけ</text>
  <path d="M550,116 H596" class="ln" marker-end="url(#arr)"/>
  <rect x="600" y="82" width="260" height="70" rx="6" fill="#fff" class="lt"/>
  <text x="616" y="110" class="ts">PR へのコメント</text><text x="616" y="136" style="font-family:monospace;font-size:14px">LGTM ✅ 見た commit: 3f2a9c1</text>
  <path d="M730,152 V186" class="ln" marker-end="url(#arr)"/>
  <rect x="560" y="190" width="300" height="56" rx="6" class="box"/>
  <text x="710" y="214" class="ts" text-anchor="middle">merge の前に、見た commit が</text><text x="710" y="236" class="ts" text-anchor="middle">今の先頭と同じか照らす</text>
  <rect x="40" y="190" width="470" height="150" rx="8" fill="#fff" class="lt"/>
  <text x="60" y="218" class="ts" font-weight="700">頼み方（役ファイル・依頼ファイル）を直したら</text>
  <text x="60" y="250" class="ts">同じ依頼を、直す前と後で 5 回ずつ流す</text>
  <text x="60" y="284" class="tx">直す前</text><use href="#i-ok" x="120" y="268" width="22" height="22"/><use href="#i-ok" x="146" y="268" width="22" height="22"/><use href="#i-no" x="172" y="268" width="22" height="22"/><use href="#i-ok" x="198" y="268" width="22" height="22"/><use href="#i-no" x="224" y="268" width="22" height="22"/><text x="262" y="285" class="ts">3 / 5</text>
  <text x="60" y="320" class="tx">直した後</text><use href="#i-ok" x="120" y="304" width="22" height="22"/><use href="#i-ok" x="146" y="304" width="22" height="22"/><use href="#i-ok" x="172" y="304" width="22" height="22"/><use href="#i-ok" x="198" y="304" width="22" height="22"/><use href="#i-no" x="224" y="304" width="22" height="22"/><text x="262" y="321" class="ts">4 / 5</text>
  <text x="440" y="370" class="tx" text-anchor="middle">commit の番号と数は作り物。5 回は例で、回すほど実行の総量を使う（p.94）</text>
</svg>
```

この条文を守るとは：判定を全部の PR に毎回かけ、今の commit を見た判定だけで merge することです。判定の記録には、見た commit を書かせます。

※ 「前回通った」は、commit が 1 つ増えた時点で使えない（p.93）。判定する AI の決まり（roles/judge.md）に、コメントの書式を書いておく。

## 次章へ：判定が見るのは出来た物だけ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g fill="#fff" class="lt"><rect x="520" y="10" width="110" height="30" rx="4"/><rect x="760" y="10" width="110" height="30" rx="4"/></g>
  <rect x="640" y="10" width="110" height="30" rx="4" fill="#fff" stroke="#222" stroke-width="3"/>
  <g class="tx" text-anchor="middle"><text x="575" y="30">5 判定</text><text x="695" y="30" style="fill:#222;font-weight:700">6 権限</text><text x="815" y="30">7 大きさ</text></g>
  <rect x="60" y="200" width="140" height="60" rx="6" class="a"/><text x="130" y="236" class="t on" text-anchor="middle">AI が作る</text>
  <path d="M200,230 H316" class="ln" marker-end="url(#arr)"/>
  <use href="#i-pr" x="322" y="212" width="30" height="38"/><text x="337" y="282" class="ts" text-anchor="middle">出来た物</text>
  <path d="M358,230 H446" class="ln" marker-end="url(#arr)"/>
  <rect x="450" y="200" width="150" height="60" rx="6" fill="#fff" class="al"/><text x="525" y="226" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="525" y="248" class="ts ac" text-anchor="middle">が判定</text>
  <rect x="300" y="190" width="70" height="110" rx="8" fill="none" class="al dash"/><text x="335" y="320" class="tx ac" text-anchor="middle">判定が見る所</text>
  <path d="M110,196 L90,110" class="ln" marker-end="url(#arr)"/><path d="M150,196 L210,110" class="ln" marker-end="url(#arr)"/>
  <rect x="20" y="66" width="130" height="40" rx="6" fill="#fff" class="lt"/><text x="85" y="92" class="ts" text-anchor="middle">読んだ物</text>
  <rect x="170" y="66" width="130" height="40" rx="6" fill="#fff" class="lt"/><text x="235" y="92" class="ts" text-anchor="middle">送った先</text>
  <text x="160" y="146" class="tl" text-anchor="middle">?</text>
  <text x="440" y="362" class="ts sub" text-anchor="middle">作る途中で読んだ物・送った先は、出来た物に残るとは限らない</text>
</svg>
```

判定が見るのは、出来上がった物だけです。作る途中で AI が何を読み、どこへ送ったかは、残るとは限りません。それが第 6 章です。
