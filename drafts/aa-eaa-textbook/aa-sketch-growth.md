# 第 9 章　輪が育つ（試作の絵 2 枚）

<!--
試作。未 commit。build の対象外（aa-ch*.md ではない）。見るとき: node build.mjs aa-sketch-growth.md → build/aa-sketch-growth.html
依頼元 @ope-ultp1635 msg 44915d03（kishibashi3「結局 ai 駆動開発は、コードを成長させることを考えていて、コードを作る仕組みを成長させることは考えていないように思う」）。
第 1 章 p.6「10 周目も、同じ輪」と同じ置き方（列＝周、行＝コード／条件／やり方）で描き、並べて比べられるようにした。plan §C。
-->

第 1 章 p.6 の絵を、AA で描き直します。

## AA：回すほど、人を待たなくなる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="t" text-anchor="middle"><text x="300" y="34">1 周目</text><text x="520" y="34">5 周目</text><text x="740" y="34">10 周目</text></g>
  <g class="ts" text-anchor="end"><text x="170" y="150">コード</text><text x="170" y="240">書かれた条件</text><text x="170" y="304">やり方</text><text x="170" y="346">人を待つ所</text></g>
  <path d="M190,198 H850" class="lt"/><path d="M190,272 H850" class="lt"/>
  <rect x="265" y="178" width="70" height="16" class="a"/>
  <rect x="292" y="222" width="16" height="26" rx="2" class="box"/><circle cx="300" cy="216" r="4" class="h"/><rect x="220" y="284" width="34" height="30" rx="4" class="h"/><rect x="262" y="284" width="34" height="30" rx="4" class="a"/><rect x="304" y="284" width="34" height="30" rx="4" class="box"/><rect x="346" y="284" width="34" height="30" rx="4" class="a"/><path d="M254,299 H262 M296,299 H304 M338,299 H346" class="ln"/>
  <circle cx="245.0" cy="340" r="8" class="h"/><circle cx="267.0" cy="340" r="8" class="h"/><circle cx="289.0" cy="340" r="8" class="h"/><circle cx="311.0" cy="340" r="8" class="h"/><circle cx="333.0" cy="340" r="8" class="h"/><circle cx="355.0" cy="340" r="8" class="h"/>
  <rect x="485" y="178" width="70" height="16" class="a"/>
  <rect x="485" y="160" width="70" height="16" class="a"/>
  <rect x="485" y="142" width="70" height="16" class="a"/>
  <rect x="485" y="124" width="70" height="16" class="a"/>
  
  
  <rect x="482" y="222" width="16" height="26" rx="2" class="box"/><circle cx="490" cy="216" r="4" class="h"/><rect x="502" y="222" width="16" height="26" rx="2" class="box"/><circle cx="510" cy="216" r="4" class="h"/><rect x="522" y="222" width="16" height="26" rx="2" class="box"/><circle cx="530" cy="216" r="4" class="h"/><rect x="542" y="222" width="16" height="26" rx="2" class="box"/><circle cx="550" cy="216" r="4" class="h"/><rect x="440" y="284" width="34" height="30" rx="4" class="h"/><rect x="482" y="284" width="34" height="30" rx="4" class="a"/><rect x="524" y="284" width="34" height="30" rx="4" class="box"/><rect x="566" y="284" width="34" height="30" rx="4" class="a"/><path d="M474,299 H482 M516,299 H524 M558,299 H566" class="ln"/>
  <circle cx="498.0" cy="340" r="8" class="h"/><circle cx="520.0" cy="340" r="8" class="h"/><circle cx="542.0" cy="340" r="8" class="h"/>
  <rect x="705" y="178" width="70" height="16" class="a"/>
  <rect x="705" y="160" width="70" height="16" class="a"/>
  <rect x="705" y="142" width="70" height="16" class="a"/>
  <rect x="705" y="124" width="70" height="16" class="a"/>
  <rect x="705" y="106" width="70" height="16" class="a"/>
  <rect x="705" y="88" width="70" height="16" class="a"/>
  <rect x="705" y="70" width="70" height="16" class="a"/>
  <rect x="705" y="52" width="70" height="16" class="a"/>
  
  
  
  <rect x="672" y="222" width="16" height="26" rx="2" class="box"/><circle cx="680" cy="216" r="4" class="h"/><rect x="692" y="222" width="16" height="26" rx="2" class="box"/><circle cx="700" cy="216" r="4" class="h"/><rect x="712" y="222" width="16" height="26" rx="2" class="box"/><circle cx="720" cy="216" r="4" class="h"/><rect x="732" y="222" width="16" height="26" rx="2" class="box"/><circle cx="740" cy="216" r="4" class="h"/><rect x="752" y="222" width="16" height="26" rx="2" class="box"/><circle cx="760" cy="216" r="4" class="h"/><rect x="772" y="222" width="16" height="26" rx="2" class="box"/><circle cx="780" cy="216" r="4" class="h"/><rect x="792" y="222" width="16" height="26" rx="2" class="box"/><circle cx="800" cy="216" r="4" class="h"/><rect x="660" y="284" width="34" height="30" rx="4" class="h"/><rect x="702" y="284" width="34" height="30" rx="4" class="a"/><rect x="744" y="284" width="34" height="30" rx="4" class="box"/><rect x="786" y="284" width="34" height="30" rx="4" class="a"/><path d="M694,299 H702 M736,299 H744 M778,299 H786" class="ln"/>
  <circle cx="740.0" cy="340" r="8" class="h"/>
  <path d="M640,356 H850" class="hl dash"/><text x="850" y="372" class="tx" text-anchor="end">床（第 3 章）より下には減らない</text>
</svg>
```

同じ問いが 2 度来たら、条件に書き足す。次の周から、その問いで人を待たない。

※ 説明のために作った絵です。条件の札の橙の点は、書き足しを通した人（書いた者とは別）。

## 並べると

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="t" text-anchor="middle"><text x="300" y="40">1 周目</text><text x="520" y="40">5 周目</text><text x="740" y="40">10 周目</text></g>
  <g class="t" text-anchor="end"><text x="170" y="126">いまの形</text><text x="170" y="266">AA</text></g>
  <text x="170" y="148" class="tx" text-anchor="end">決まりを書いても</text><text x="170" y="288" class="tx" text-anchor="end">条件を書くたび</text>
  <path d="M190,190 H850" class="lt"/>
  <rect x="220" y="90" width="34" height="30" rx="4" class="h"/><rect x="262" y="90" width="34" height="30" rx="4" class="a"/><rect x="304" y="90" width="34" height="30" rx="4" class="box"/><rect x="346" y="90" width="34" height="30" rx="4" class="h"/><path d="M254,105 H262 M296,105 H304 M338,105 H346" class="ln"/>
  <circle cx="267.0" cy="150" r="8" class="h"/><circle cx="289.0" cy="150" r="8" class="h"/><circle cx="311.0" cy="150" r="8" class="h"/><circle cx="333.0" cy="150" r="8" class="h"/>
  <rect x="440" y="90" width="34" height="30" rx="4" class="h"/><rect x="482" y="90" width="34" height="30" rx="4" class="a"/><rect x="524" y="90" width="34" height="30" rx="4" class="box"/><rect x="566" y="90" width="34" height="30" rx="4" class="h"/><path d="M474,105 H482 M516,105 H524 M558,105 H566" class="ln"/>
  <circle cx="487.0" cy="150" r="8" class="h"/><circle cx="509.0" cy="150" r="8" class="h"/><circle cx="531.0" cy="150" r="8" class="h"/><circle cx="553.0" cy="150" r="8" class="h"/>
  <rect x="660" y="90" width="34" height="30" rx="4" class="h"/><rect x="702" y="90" width="34" height="30" rx="4" class="a"/><rect x="744" y="90" width="34" height="30" rx="4" class="box"/><rect x="786" y="90" width="34" height="30" rx="4" class="h"/><path d="M694,105 H702 M736,105 H744 M778,105 H786" class="ln"/>
  <circle cx="707.0" cy="150" r="8" class="h"/><circle cx="729.0" cy="150" r="8" class="h"/><circle cx="751.0" cy="150" r="8" class="h"/><circle cx="773.0" cy="150" r="8" class="h"/>
  <rect x="220" y="230" width="34" height="30" rx="4" class="h"/><rect x="262" y="230" width="34" height="30" rx="4" class="a"/><rect x="304" y="230" width="34" height="30" rx="4" class="box"/><rect x="346" y="230" width="34" height="30" rx="4" class="a"/><path d="M254,245 H262 M296,245 H304 M338,245 H346" class="ln"/>
  <circle cx="245.0" cy="290" r="8" class="h"/><circle cx="267.0" cy="290" r="8" class="h"/><circle cx="289.0" cy="290" r="8" class="h"/><circle cx="311.0" cy="290" r="8" class="h"/><circle cx="333.0" cy="290" r="8" class="h"/><circle cx="355.0" cy="290" r="8" class="h"/>
  <rect x="440" y="230" width="34" height="30" rx="4" class="h"/><rect x="482" y="230" width="34" height="30" rx="4" class="a"/><rect x="524" y="230" width="34" height="30" rx="4" class="box"/><rect x="566" y="230" width="34" height="30" rx="4" class="a"/><path d="M474,245 H482 M516,245 H524 M558,245 H566" class="ln"/>
  <circle cx="498.0" cy="290" r="8" class="h"/><circle cx="520.0" cy="290" r="8" class="h"/><circle cx="542.0" cy="290" r="8" class="h"/>
  <rect x="660" y="230" width="34" height="30" rx="4" class="h"/><rect x="702" y="230" width="34" height="30" rx="4" class="a"/><rect x="744" y="230" width="34" height="30" rx="4" class="box"/><rect x="786" y="230" width="34" height="30" rx="4" class="a"/><path d="M694,245 H702 M736,245 H744 M778,245 H786" class="ln"/>
  <circle cx="740.0" cy="290" r="8" class="h"/>
  <path d="M640,312 H850" class="hl dash"/><text x="850" y="332" class="tx" text-anchor="end">床</text>
  <text x="520" y="352" class="ts sub" text-anchor="middle">橙の点＝人を待つ所。1 周目は AA の方が多いこともある</text>
  <text x="520" y="372" class="ts sub" text-anchor="middle">（点の数は測っていません。実例が取れたら差し替えます）</text>
</svg>
```

違うのは、1 周目の点の数ではなく、周ごとに減るかどうかです。

※ 説明のために作った絵です。
