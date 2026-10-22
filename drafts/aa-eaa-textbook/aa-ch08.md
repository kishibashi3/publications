# 第 8 章　条件の成長

> 同じ質問が 2 度来たら書く：回すほど人を待たない

<!-- 扉の絵（@ope-ultp1635 msg f0419ae4）: 章全体の主張 1 つ。本文の絵の使い回しはしない -->
```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <path d="M314.0,150.0 L314.3,150.9 L314.6,151.8 L314.9,152.7 L315.0,153.7 L315.1,154.7 L315.1,155.7 L315.0,156.7 L314.9,157.8 L314.7,158.8 L314.3,159.9 L314.0,161.0 L313.5,162.0 L312.9,163.1 L312.3,164.1 L311.5,165.1 L310.7,166.0 L309.8,166.9 L308.8,167.8 L307.8,168.6 L306.6,169.4 L305.4,170.1 L304.2,170.7 L302.8,171.3 L301.4,171.8 L300.0,172.2 L298.5,172.5 L297.0,172.7 L295.4,172.8 L293.8,172.8 L292.2,172.8 L290.6,172.6 L289.0,172.3 L287.3,171.9 L285.7,171.4 L284.1,170.8 L282.5,170.1 L281.0,169.3 L279.5,168.3 L278.0,167.3 L276.6,166.2 L275.3,164.9 L274.0,163.6 L272.8,162.2 L271.7,160.6 L270.7,159.0 L269.8,157.4 L269.0,155.6 L268.3,153.8 L267.8,151.9 L267.3,150.0 L267.0,148.0 L266.9,146.0 L266.8,144.0 L266.9,141.9 L267.2,139.9 L267.5,137.8 L268.1,135.7 L268.8,133.7 L269.6,131.7 L270.6,129.7 L271.7,127.7 L272.9,125.8 L274.3,124.0 L275.8,122.3 L277.5,120.6 L279.3,119.0 L281.2,117.5 L283.2,116.1 L285.4,114.9 L287.6,113.7 L289.9,112.7 L292.3,111.9 L294.8,111.1 L297.4,110.5 L300.0,110.1 L302.7,109.8 L305.4,109.7 L308.1,109.8 L310.8,110.0 L313.6,110.4 L316.3,110.9 L319.0,111.7 L321.7,112.5 L324.3,113.6 L326.9,114.9 L329.4,116.3 L331.8,117.8 L334.2,119.5 L336.4,121.4 L338.5,123.4 L340.5,125.6 L342.4,127.9 L344.1,130.3 L345.6,132.8 L347.0,135.5 L348.3,138.2 L349.3,141.1 L350.2,144.0 L350.9,147.0 L351.3,150.0 L351.6,153.1 L351.7,156.2 L351.5,159.3 L351.2,162.5 L350.6,165.6 L349.8,168.7 L348.8,171.8 L347.6,174.9 L346.2,177.8 L344.5,180.7 L342.7,183.6 L340.7,186.3 L338.5,188.9 L336.1,191.4 L333.5,193.8 L330.7,196.0 L327.8,198.0 L324.7,199.9 L321.5,201.6 L318.2,203.1 L314.7,204.4 L311.2,205.6 L307.5,206.5 L303.8,207.2 L300.0,207.6 L296.2,207.9 L292.3,207.9 L288.4,207.7 L284.5,207.2 L280.7,206.5 L276.8,205.6 L273.1,204.4 L269.3,203.0 L265.7,201.4 L262.1,199.5 L258.7,197.4 L255.4,195.1 L252.2,192.6 L249.2,189.9 L246.4,187.0 L243.7,183.9 L241.3,180.7 L239.0,177.3 L237.0,173.7 L235.2,170.0 L233.6,166.2 L232.3,162.3 L231.3,158.2 L230.5,154.2 L230.0,150.0 L229.8,145.8 L229.8,141.6 L230.1,137.3 L230.8,133.1 L231.7,128.9 L232.8,124.7 L234.3,120.6 L236.0,116.6 L238.1,112.7 L240.3,108.8 L242.9,105.1 L245.7,101.6 L248.8,98.2 L252.0,94.9 L255.6,91.9 L259.3,89.1 L263.2,86.4 L267.3,84.1 L271.6,81.9 L276.1,80.0 L280.6,78.4 L285.3,77.0 L290.2,75.9 L295.0,75.1 L300.0,74.6 L305.0,74.4 L310.0,74.5 L315.1,74.9 L320.1,75.6 L325.1,76.6 L330.0,77.9 L334.9,79.6 L339.7,81.5 L344.3,83.7 L348.8,86.2 L353.2,88.9 L357.4,92.0 L361.4,95.3 L365.2,98.8 L368.7,102.6 L372.0,106.6 L375.1,110.8 L377.9,115.2 L380.4,119.8 L382.6,124.5 L384.4,129.4 L386.0,134.4 L387.2,139.5 L388.1,144.7 L388.7,150.0 L388.9,155.3 L388.7,160.6 L388.2,166.0 L387.3,171.3 L386.1,176.6 L384.5,181.8 L382.6,186.9 L380.3,191.9 L377.7,196.8 L374.8,201.6 L371.5,206.2 L367.9,210.6 L364.0,214.8 L359.8,218.7 L355.4,222.5 L350.7,225.9 L345.8,229.1 L340.6,232.0 L335.3,234.6 L329.7,236.9 L324.0,238.8 L318.2,240.4 L312.2,241.7 L306.1,242.6 L300.0,243.1 L293.8,243.3 L287.6,243.1 L281.4,242.5 L275.3,241.5 L269.1,240.2 L263.1,238.5 L257.2,236.5 L251.3,234.1 L245.7,231.3 L240.2,228.2 L234.9,224.7 L229.8,221.0 L225.0,216.9 L220.5,212.5 L216.2,207.8 L212.2,202.9 L208.6,197.8 L205.2,192.4 L202.3,186.8 L199.7,181.0 L197.5,175.0 L195.7,168.9 L194.3,162.7 L193.3,156.4 L192.7,150.0 L192.5,143.6 L192.8,137.1 L193.5,130.7 L194.6,124.3 L196.1,117.9 L198.1,111.7 L200.5,105.5 L203.3,99.5 L206.5,93.7 L210.1,88.0 L214.1,82.5 L218.5,77.3 L223.2,72.3 L228.3,67.6 L233.6,63.2 L239.3,59.1 L245.2,55.4 L251.4,52.0 L257.9,48.9 L264.5,46.3 L271.4,44.0 L278.3,42.2 L285.5,40.7 L292.7,39.7 L300.0,39.2 L307.3,39.0 L314.7,39.3 L322.1,40.1 L329.4,41.3 L336.6,42.9 L343.8,45.0 L350.8,47.5 L357.6,50.4 L364.3,53.7 L370.8,57.5 L377.0,61.6 L382.9,66.1 L388.6,71.0 L393.9,76.2 L398.9,81.7 L403.5,87.6 L407.8,93.7 L411.6,100.1 L415.1,106.7 L418.1,113.6 L420.6,120.6 L422.7,127.8 L424.3,135.1 L425.4,142.5 L426.0,150.0" class="ln"/>
  <path d="M424.3,135.1 L426.0,150.0" class="ln" marker-end="url(#arr)"/>
  <circle cx="292.2" cy="172.8" r="9" class="h"/>
  <circle cx="270.6" cy="129.7" r="9" class="h"/>
  <circle cx="338.5" cy="123.4" r="9" class="h"/>
  <circle cx="318.2" cy="203.1" r="9" class="h"/>
  <circle cx="243.7" cy="183.9" r="9" class="h"/>
  <circle cx="255.6" cy="91.9" r="9" class="h"/>
  <circle cx="387.2" cy="139.5" r="9" class="h"/>
  <rect x="221.8" y="116.7" width="22" height="16" rx="2" fill="#fff" stroke="#2f6fb3" stroke-width="2.5"/>
  <rect x="342.2" y="80.9" width="22" height="16" rx="2" fill="#fff" stroke="#2f6fb3" stroke-width="2.5"/>
  <rect x="339.7" y="217.9" width="22" height="16" rx="2" fill="#fff" stroke="#2f6fb3" stroke-width="2.5"/>
  <rect x="205.2" y="199.8" width="22" height="16" rx="2" fill="#fff" stroke="#2f6fb3" stroke-width="2.5"/>
  <rect x="217.3" y="59.6" width="22" height="16" rx="2" fill="#fff" stroke="#2f6fb3" stroke-width="2.5"/>
  <rect x="377.6" y="63.0" width="22" height="16" rx="2" fill="#fff" stroke="#2f6fb3" stroke-width="2.5"/>
  <circle cx="490" cy="80" r="9" class="h"/><text x="510" y="86" class="ts">人を待つ（AI の質問に人が答える）</text>
  <rect x="479" y="134" width="22" height="16" rx="2" fill="#fff" stroke="#2f6fb3" stroke-width="2.5"/><text x="510" y="148" class="ts">札（同じ質問が 2 度来たら書く）</text>
  <text x="510" y="210" class="ts">外の周ほど、札が増え、</text><text x="510" y="234" class="ts">人を待つ所が減る</text>
</svg>
```

<!--
骨格から本物にした（plan §G.1 の 2 番目）。依頼元 @ope-ultp1635 msg 477ac5f1（第 9 章に進む）・msg 066b5609（進め方の承認）・msg 06ecaa03（第 4〜10 章を本物に）。
中心の絵 2 枚は aa-sketch-growth.md の 1・2 枚目をそのまま使った。
ページ番号は build/aa.html の右上の数字（第 8 章の扉＝112。2026-10-19 に第 5・6 章が 1 ページずつ増え、本文と絵の p.110 以上を +2 した。書き手のメモの番号は直していない）。
2026-10-19 第 8 章を畳み、旧第 9 章を第 8 章にした（plan 第 24 版、@ope-ultp1635 msg 682c5acc）。旧第 8 章の前提 2 つを、p.113「書くのは、働いている側」と p.116「どの層にも、同じ形が出る理由」に置いた。旧第 8 章の骨格は aa-old-ch08-folded.md（build しない）。判断の記録: agent-hub-roles-kaz/writer-ja/drafts/aa-toc-retitle/ch08-fold-judgment.md。呼び戻す前の章: 第 1 章 p.7（10 周目）・p.11（31 日）・p.14（板挟み）、第 2 章 p.34、第 3 章 p.40（物差し）・p.51〜53、第 4 章 p.64・67・70。
例は 1 つに通した: AI の質問「31 日は含める？」（第 1 章 p.11・第 3 章 p.52 と同じ）→ 札「期間の終わりの日は含める」。作り物。
-->

第 7 章までで、作った者が自分で通さない形が何度も出ました。この章では、書いた決まりで輪がどう変わるかを見ます。

## 第 1 章の図：10 周目も人を待つ所は同じ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="t" text-anchor="middle"><text x="300" y="34">1 周目</text><text x="520" y="34">5 周目</text><text x="740" y="34">10 周目</text></g>
  <g class="ts" text-anchor="end"><text x="170" y="150">コード</text><text x="170" y="240">指示ファイル</text><text x="170" y="304">やり方</text><text x="170" y="350">人を待つ所</text></g>
  <path d="M190,198 H850" class="lt"/><path d="M190,272 H850" class="lt"/><path d="M190,324 H850" class="lt"/>
  <rect x="265" y="178" width="70" height="16" class="a"/>
  <rect x="270" y="212" width="60" height="44" rx="3" class="box"/><path d="M278,224 H322" stroke="#555" stroke-width="2"/>
  <rect x="220" y="284" width="34" height="30" rx="4" class="h"/><rect x="262" y="284" width="34" height="30" rx="4" class="a"/><rect x="304" y="284" width="34" height="30" rx="4" class="box"/><rect x="346" y="284" width="34" height="30" rx="4" class="h"/>
  <path d="M254,299 H262 M296,299 H304 M338,299 H346" class="ln"/>
  <g class="h"><circle cx="267" cy="346" r="8"/><circle cx="289" cy="346" r="8"/><circle cx="311" cy="346" r="8"/><circle cx="333" cy="346" r="8"/></g>
  <g class="a"><rect x="485" y="178" width="70" height="16"/><rect x="485" y="160" width="70" height="16"/><rect x="485" y="142" width="70" height="16"/><rect x="485" y="124" width="70" height="16"/></g>
  <rect x="490" y="212" width="60" height="44" rx="3" class="box"/><path d="M498,224 H542 M498,233 H542" stroke="#555" stroke-width="2"/>
  <rect x="440" y="284" width="34" height="30" rx="4" class="h"/><rect x="482" y="284" width="34" height="30" rx="4" class="a"/><rect x="524" y="284" width="34" height="30" rx="4" class="box"/><rect x="566" y="284" width="34" height="30" rx="4" class="h"/>
  <path d="M474,299 H482 M516,299 H524 M558,299 H566" class="ln"/>
  <g class="h"><circle cx="487" cy="346" r="8"/><circle cx="509" cy="346" r="8"/><circle cx="531" cy="346" r="8"/><circle cx="553" cy="346" r="8"/></g>
  <g class="a"><rect x="705" y="178" width="70" height="16"/><rect x="705" y="160" width="70" height="16"/><rect x="705" y="142" width="70" height="16"/><rect x="705" y="124" width="70" height="16"/><rect x="705" y="106" width="70" height="16"/><rect x="705" y="88" width="70" height="16"/><rect x="705" y="70" width="70" height="16"/><rect x="705" y="52" width="70" height="16"/></g>
  <rect x="710" y="212" width="60" height="44" rx="3" class="box"/><path d="M718,224 H762 M718,233 H762 M718,242 H762" stroke="#555" stroke-width="2"/>
  <rect x="660" y="284" width="34" height="30" rx="4" class="h"/><rect x="702" y="284" width="34" height="30" rx="4" class="a"/><rect x="744" y="284" width="34" height="30" rx="4" class="box"/><rect x="786" y="284" width="34" height="30" rx="4" class="h"/>
  <path d="M694,299 H702 M736,299 H744 M778,299 H786" class="ln"/>
  <g class="h"><circle cx="707" cy="346" r="8"/><circle cx="729" cy="346" r="8"/><circle cx="751" cy="346" r="8"/><circle cx="773" cy="346" r="8"/></g>
</svg>
```

第 1 章 p.7 の絵に、人を待つ所の行を足しました。コードも指示ファイルも育ちます。点の数は、10 周目も 1 周目と同じです。

※ 橙の点 1 つが、人を待つ 1 回。説明のために作った絵で、点の数は測った値ではない。

## AA でも 1 周目は人を待つ：AI の質問

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g fill="#fff" class="al"><rect x="300" y="30" width="330" height="40" rx="18"/><rect x="300" y="84" width="330" height="40" rx="18"/><rect x="300" y="138" width="330" height="40" rx="18"/></g>
  <g class="ts ac"><text x="322" y="56">「31 日は含める？」</text><text x="322" y="110">「日付は、どこの時刻で数える？」</text><text x="322" y="164">「本番の古いデータも消してよい？」</text></g>
  <path d="M250,228 L298,50 M250,228 L298,104 M250,228 L298,158" class="lt dash"/>
  <g class="h"><circle cx="664" cy="50" r="11"/><circle cx="664" cy="104" r="11"/><circle cx="664" cy="158" r="11"/></g>
  <text x="690" y="98" class="ts hc">人が答えるまで</text><text x="690" y="120" class="ts hc">AI は待つ</text>
  <rect x="30" y="230" width="120" height="60" rx="6" class="h"/><text x="90" y="266" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="230" width="120" height="60" rx="6" class="a"/><text x="250" y="266" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="230" width="120" height="60" rx="6" class="box"/><text x="398" y="266" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="248" width="24" height="24"/>
  <rect x="510" y="230" width="140" height="60" rx="6" fill="#fff" class="al"/><text x="580" y="256" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="580" y="278" class="ts ac" text-anchor="middle">がレビュー</text>
  <rect x="690" y="230" width="120" height="60" rx="6" class="box"/><text x="750" y="266" class="t" text-anchor="middle">次へ</text>
  <path d="M150,260 H186" class="ln" marker-end="url(#arr)"/><path d="M310,260 H346" class="ln" marker-end="url(#arr)"/><path d="M470,260 H506" class="ln" marker-end="url(#arr)"/><path d="M650,260 H686" class="ln" marker-end="url(#arr)"/>
  <path d="M750,290 V336 H90 V294" class="ln" marker-end="url(#arr)"/>
  <text x="580" y="216" class="tx ac" text-anchor="middle">ここでは待たない（第 2 章）</text>
  <text x="420" y="364" class="ts sub" text-anchor="middle">AA の 1 周目。条件がまだ少ないので、質問が多い</text>
</svg>
```

AA でも、1 周目は人を待ちます。待つのはレビューではありません。書かれていない意味や権限に出会った AI の質問です。

※ 書かれていない意味や、権限の外の判断に出会ったら、AI は判断できる人へ戻す。質問は作り物。

## 書くのは、働いている側

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="20" width="820" height="300" rx="10" fill="#fff" class="hl"/>
  <text x="50" y="48" class="ts hc" font-weight="700">チーム（人）</text>
  <text x="50" y="72" class="tx">チームの決まりに従って働く</text>
  <rect x="100" y="96" width="680" height="208" rx="10" fill="#fff" class="al"/>
  <text x="120" y="124" class="ts ac" font-weight="700">今の周（AI）</text>
  <text x="120" y="148" class="tx">条件の文書に従って働く</text>
  <rect x="170" y="176" width="540" height="112" rx="10" fill="#fff" class="al dash"/>
  <text x="190" y="204" class="ts ac" font-weight="700">次の周（AI）</text>
  <text x="190" y="228" class="tx">札の足された条件に従って働く</text>
  <rect x="560" y="76" width="150" height="40" rx="4" class="box"/><text x="635" y="101" class="ts" text-anchor="middle">条件の文書</text>
  <text x="550" y="88" class="tx hc" text-anchor="end">人が書く</text>
  <rect x="560" y="156" width="150" height="40" rx="4" class="box"/><text x="635" y="181" class="ts" text-anchor="middle">条件の札</text>
  <text x="550" y="168" class="tx ac" text-anchor="end">質問を受けた AI が書く</text>
  <text x="440" y="356" class="ts" text-anchor="middle">どの箱も、外の決まりに従って働き、内の決まりを書く</text>
</svg>
```

札を書くのは、周を回して同じ質問を 2 度受けた AI です。どの層も、決まりに従って働き、下の決まりを書きます。働かない者には、書く根拠がありません。

※ P2「各層は、自らの憲法に従って執行し、下位の憲法を書く」。働かずに下を書くだけの層には、書く根拠が無い。

## 同じ質問が 2 周続いたら、条件に書く

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="end"><text x="110" y="86">1 周目</text><text x="110" y="166">2 周目</text><text x="110" y="246">3 周目</text></g>
  <g class="soft"><rect x="130" y="60" width="470" height="40"/><rect x="130" y="140" width="470" height="40"/><rect x="130" y="220" width="470" height="40"/></g>
  <g fill="#fff" stroke="#d9822b" stroke-width="3" stroke-dasharray="5 4"><circle cx="160" cy="80" r="13"/><circle cx="160" cy="160" r="13"/><circle cx="400" cy="80" r="13"/></g>
  <g class="tx"><text x="182" y="85">「31 日は含める？」</text><text x="182" y="165">「31 日は含める？」</text><text x="422" y="85">「ボタンの文言は？」</text></g>
  <path d="M146,94 Q120,120 146,146" class="hl"/><text x="40" y="126" class="tx hc">同じ質問</text>
  <g class="tx sub"><text x="182" y="245">来ない</text><text x="422" y="245">来ない</text></g>
  <path d="M330,160 H640" class="ln" marker-end="url(#arr)"/>
  <rect x="650" y="110" width="200" height="100" rx="6" class="box"/>
  <text x="750" y="138" class="ts" text-anchor="middle" font-weight="700">条件の札</text>
  <text x="750" y="168" class="ts" text-anchor="middle">期間の終わりの日は</text><text x="750" y="190" class="ts" text-anchor="middle">含める</text>
  <path d="M750,210 V240 H604" class="ln dash" marker-end="url(#arr)"/>
  <text x="440" y="320" class="ts" text-anchor="middle">2 度来た質問は札にする。1 度きりの質問は書かない</text>
</svg>
```

第 3 章 p.56 の形を、周に分けて見ます。同じ質問が 2 周続いたら、答えを条件に書き足します。この 1 枚を「条件の札」と呼びます。

※ 例えば、時刻をどう読むかの問い合わせが繰り返されるなら、札にする。1 度きりの質問まで札にすると、札ごとに人の点が付く（次のページ）。

## 書き足した条件には、人の点が 1 つ付く

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="120" width="160" height="60" rx="6" class="a"/><text x="120" y="156" class="ts on" text-anchor="middle">AI が札を書く</text>
  <path d="M200,150 H266" class="ln" marker-end="url(#arr)"/>
  <rect x="272" y="96" width="200" height="108" rx="6" class="box"/>
  <text x="372" y="124" class="tx" text-anchor="middle">条件の札（案）</text>
  <text x="372" y="156" class="ts" text-anchor="middle">期間の終わりの日は</text><text x="372" y="178" class="ts" text-anchor="middle">含める</text>
  <circle cx="472" cy="96" r="13" class="h"/>
  <path d="M472,150 H630" class="ln" marker-end="url(#arr)"/>
  <rect x="636" y="120" width="200" height="60" rx="6" class="h"/><text x="736" y="148" class="ts on" text-anchor="middle">条件の持ち主の人</text><text x="736" y="170" class="ts on" text-anchor="middle">が通す</text>
  <path d="M120,180 V290 H590" class="al"/>
  <use href="#i-no" x="594" y="276" width="28" height="28"/>
  <text x="360" y="320" class="ts ac" text-anchor="middle">書いた AI は、自分の札を通さない</text>
  <text x="530" y="80" class="tx hc">通した人の点が 1 つ</text>
  <text x="440" y="362" class="ts sub" text-anchor="middle">なぜ書いた者が通さないのかは、第 9 章</text>
</svg>
```

札は AI が書いてかまいません。通すのは、書いた者でない人です。札には、通した人の点が 1 つ付きます。

※ 決まりの持ち主は人。決まりの変更を言い出した者は、その変更を通さない。

## どの層にも、同じ形が出る理由

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="tx" text-anchor="middle"><text x="250" y="36">書く</text><text x="470" y="36">書いた物</text><text x="730" y="36">通す</text></g>
  <g class="ts" text-anchor="end"><text x="130" y="86">第 2 章</text><text x="130" y="176">第 3 章</text><text x="130" y="266">この章</text></g>
  <g class="a"><rect x="170" y="60" width="160" height="44" rx="6"/><rect x="170" y="150" width="160" height="44" rx="6"/><rect x="170" y="240" width="160" height="44" rx="6"/></g>
  <g class="ts on" text-anchor="middle"><text x="250" y="88">作った AI</text><text x="250" y="178">AI</text><text x="250" y="268">質問を受けた AI</text></g>
  <g class="box"><rect x="390" y="60" width="160" height="44" rx="4"/><rect x="390" y="150" width="160" height="44" rx="4"/><rect x="390" y="240" width="160" height="44" rx="4"/></g>
  <g class="ts" text-anchor="middle"><text x="470" y="88">成果の PR</text><text x="470" y="178">権限を緩める変更</text><text x="470" y="268">条件の札</text></g>
  <rect x="650" y="60" width="160" height="44" rx="6" fill="#fff" class="al"/><text x="730" y="88" class="ts ac" text-anchor="middle">別の AI が判定</text>
  <rect x="650" y="150" width="160" height="44" rx="6" class="h"/><text x="730" y="178" class="ts on" text-anchor="middle">人が通す</text>
  <rect x="650" y="240" width="160" height="44" rx="6" class="h"/><text x="730" y="268" class="ts on" text-anchor="middle">人が通す</text>
  <g class="ln"><path d="M330,82 H386" marker-end="url(#arr)"/><path d="M550,82 H646" marker-end="url(#arr)"/><path d="M330,172 H386" marker-end="url(#arr)"/><path d="M550,172 H646" marker-end="url(#arr)"/><path d="M330,262 H386" marker-end="url(#arr)"/><path d="M550,262 H646" marker-end="url(#arr)"/></g>
  <path d="M250,104 V122 H600 M250,194 V212 H600 M250,284 V302 H600" class="al"/>
  <g><use href="#i-no" x="600" y="110" width="24" height="24"/><use href="#i-no" x="600" y="200" width="24" height="24"/><use href="#i-no" x="600" y="290" width="24" height="24"/></g>
  <text x="440" y="356" class="ts" text-anchor="middle">どの層も書く。だから「書いた者は通さない」も、どの層にも出る</text>
</svg>
```

成果でも、権限でも、札でも、書いた者は自分で通しませんでした。どの層も下の決まりを書くので、この形はどの層にも出ます。第 7 章の問いの答えです。

※ 第 2 章 p.28・第 3 章 p.54。働きながら下を書くのはよい。自分が出した改訂を自分で通すのはいけない。

## 1 回の approve で同じ質問が消える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="tx" text-anchor="middle"><text x="230" y="44">1 周</text><text x="310" y="44">2</text><text x="390" y="44">3</text><text x="470" y="44">4</text><text x="550" y="44">5</text><text x="630" y="44">6</text><text x="710" y="44">7</text><text x="790" y="44">8</text></g>
  <g class="ts" text-anchor="end"><text x="180" y="110">札がない</text><text x="180" y="230">札がある</text></g>
  <path d="M190,160 H840" class="lt"/>
  <g fill="#fff" stroke="#d9822b" stroke-width="3" stroke-dasharray="5 4"><circle cx="230" cy="105" r="13"/><circle cx="310" cy="105" r="13"/><circle cx="390" cy="105" r="13"/><circle cx="470" cy="105" r="13"/><circle cx="550" cy="105" r="13"/><circle cx="630" cy="105" r="13"/><circle cx="710" cy="105" r="13"/><circle cx="790" cy="105" r="13"/></g>
  <g fill="#fff" stroke="#d9822b" stroke-width="3" stroke-dasharray="5 4"><circle cx="230" cy="225" r="13"/><circle cx="310" cy="225" r="13"/></g>
  <rect x="330" y="248" width="120" height="44" rx="5" class="box"/><text x="390" y="275" class="tx" text-anchor="middle">条件の札</text>
  <circle cx="450" cy="248" r="11" class="h"/>
  <path d="M450,270 H830" class="ln dash" marker-end="url(#arr)"/>
  <g class="tx sub" text-anchor="middle"><text x="470" y="230">来ない</text><text x="630" y="230">来ない</text><text x="790" y="230">来ない</text></g>
  <text x="840" y="140" class="ts hc" text-anchor="end">質問の点 8 つ</text>
  <text x="840" y="320" class="ts hc" text-anchor="end">質問の点 2 つ ＋ 札の点 1 つ</text>
  <text x="440" y="362" class="tx" text-anchor="middle">周を重ねるほど、差は開く</text>
</svg>
```

札がなければ、同じ質問の点は毎周出ます。札の点は 1 回きりです。1 回の approve が、以後の同じ質問を全部引き受けます。

※ 第 4 章 p.70 の「書かれていない良い慣行」も、この形で戻る。困った所で質問になり、札になった時点で効く。

## 回すほど札が増え、人を待つ所が減る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="t" text-anchor="middle"><text x="300" y="34">1 周目</text><text x="520" y="34">5 周目</text><text x="740" y="34">10 周目</text></g>
  <g class="ts" text-anchor="end"><text x="170" y="150">コード</text><text x="170" y="240">条件の札</text><text x="170" y="304">やり方</text><text x="170" y="346">人を待つ所</text></g>
  <path d="M190,198 H850" class="lt"/><path d="M190,272 H850" class="lt"/>
  <rect x="265" y="178" width="70" height="16" class="a"/>
  <rect x="292" y="222" width="16" height="26" rx="2" class="box"/><circle cx="300" cy="216" r="4" class="h"/>
  <rect x="220" y="284" width="34" height="30" rx="4" class="h"/><rect x="262" y="284" width="34" height="30" rx="4" class="a"/><rect x="304" y="284" width="34" height="30" rx="4" class="box"/><rect x="346" y="284" width="34" height="30" rx="4" class="a"/><path d="M254,299 H262 M296,299 H304 M338,299 H346" class="ln"/>
  <g class="h"><circle cx="245" cy="340" r="8"/><circle cx="267" cy="340" r="8"/><circle cx="289" cy="340" r="8"/><circle cx="311" cy="340" r="8"/><circle cx="333" cy="340" r="8"/><circle cx="355" cy="340" r="8"/></g>
  <g class="a"><rect x="485" y="178" width="70" height="16"/><rect x="485" y="160" width="70" height="16"/><rect x="485" y="142" width="70" height="16"/><rect x="485" y="124" width="70" height="16"/></g>
  <rect x="482" y="222" width="16" height="26" rx="2" class="box"/><circle cx="490" cy="216" r="4" class="h"/><rect x="502" y="222" width="16" height="26" rx="2" class="box"/><circle cx="510" cy="216" r="4" class="h"/><rect x="522" y="222" width="16" height="26" rx="2" class="box"/><circle cx="530" cy="216" r="4" class="h"/><rect x="542" y="222" width="16" height="26" rx="2" class="box"/><circle cx="550" cy="216" r="4" class="h"/>
  <rect x="440" y="284" width="34" height="30" rx="4" class="h"/><rect x="482" y="284" width="34" height="30" rx="4" class="a"/><rect x="524" y="284" width="34" height="30" rx="4" class="box"/><rect x="566" y="284" width="34" height="30" rx="4" class="a"/><path d="M474,299 H482 M516,299 H524 M558,299 H566" class="ln"/>
  <g class="h"><circle cx="498" cy="340" r="8"/><circle cx="520" cy="340" r="8"/><circle cx="542" cy="340" r="8"/></g>
  <g class="a"><rect x="705" y="178" width="70" height="16"/><rect x="705" y="160" width="70" height="16"/><rect x="705" y="142" width="70" height="16"/><rect x="705" y="124" width="70" height="16"/><rect x="705" y="106" width="70" height="16"/><rect x="705" y="88" width="70" height="16"/><rect x="705" y="70" width="70" height="16"/><rect x="705" y="52" width="70" height="16"/></g>
  <rect x="672" y="222" width="16" height="26" rx="2" class="box"/><circle cx="680" cy="216" r="4" class="h"/><rect x="692" y="222" width="16" height="26" rx="2" class="box"/><circle cx="700" cy="216" r="4" class="h"/><rect x="712" y="222" width="16" height="26" rx="2" class="box"/><circle cx="720" cy="216" r="4" class="h"/><rect x="732" y="222" width="16" height="26" rx="2" class="box"/><circle cx="740" cy="216" r="4" class="h"/><rect x="752" y="222" width="16" height="26" rx="2" class="box"/><circle cx="760" cy="216" r="4" class="h"/><rect x="772" y="222" width="16" height="26" rx="2" class="box"/><circle cx="780" cy="216" r="4" class="h"/><rect x="792" y="222" width="16" height="26" rx="2" class="box"/><circle cx="800" cy="216" r="4" class="h"/>
  <rect x="660" y="284" width="34" height="30" rx="4" class="h"/><rect x="702" y="284" width="34" height="30" rx="4" class="a"/><rect x="744" y="284" width="34" height="30" rx="4" class="box"/><rect x="786" y="284" width="34" height="30" rx="4" class="a"/><path d="M694,299 H702 M736,299 H744 M778,299 H786" class="ln"/>
  <circle cx="729" cy="340" r="8" class="h"/><circle cx="751" cy="340" r="8" class="h"/>
  <path d="M640,356 H850" class="hl dash"/><text x="850" y="372" class="tx" text-anchor="end">床（第 3 章）より下には減らない</text>
</svg>
```

札が増えるほど、人を待つ所が減ります。人が見るのを我慢したのではありません。答えを札が持っているので、聞かなくなったのです。

※ 点の数は測った値ではありません。実例が取れたら差し替えます。札の上の小さな点は、通した人。

## 点は床で止まる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M60,70 H820" class="ln" marker-end="url(#arr)"/>
  <text x="60" y="100" class="tx">revert できる</text><text x="820" y="100" class="tx" text-anchor="end">revert できない</text>
  <path d="M520,40 V100" stroke="#d9822b" stroke-width="5"/><rect x="490" y="20" width="60" height="26" rx="5" class="h"/><text x="520" y="39" class="tx on" text-anchor="middle">人</text>
  <text x="440" y="134" class="tx" text-anchor="middle">第 3 章の物差し（p.44）</text>
  <g class="ts" text-anchor="middle"><text x="190" y="176">1 周目</text><text x="390" y="176">5 周目</text><text x="590" y="176">10 周目</text><text x="770" y="176">20 周目</text></g>
  <g fill="#fff" stroke="#d9822b" stroke-width="3" stroke-dasharray="5 4"><circle cx="130" cy="212" r="11"/><circle cx="160" cy="212" r="11"/><circle cx="190" cy="212" r="11"/><circle cx="220" cy="212" r="11"/><circle cx="390" cy="212" r="11"/></g>
  <g class="h"><circle cx="160" cy="262" r="11"/><circle cx="220" cy="262" r="11"/><circle cx="360" cy="262" r="11"/><circle cx="420" cy="262" r="11"/><circle cx="560" cy="262" r="11"/><circle cx="620" cy="262" r="11"/><circle cx="740" cy="262" r="11"/><circle cx="800" cy="262" r="11"/></g>
  <path d="M60,286 H840" class="hl dash"/>
  <g class="tx"><text x="70" y="316">点線の点：札で消える質問</text><text x="70" y="340" class="hc">塗った点：revert できない操作の手前と、AI が自分の権限を緩める変更</text></g>
  <text x="840" y="316" class="ts hc" text-anchor="end">ここより下には減らない</text>
</svg>
```

札を何枚足しても、残る点があります。revert できない操作の手前と、AI が自分の権限を緩める変更です。第 3 章で人を残した 2 か所です。

※ 第 3 章 p.57。この 2 か所は、何度来ても「聞かなくてよい」と札に書かない。

<!--
2026-10-18 足した（@ope-ultp1635 msg b4b1749a、kishibashi3「人間の関わり率が半分になった結果、ai が 2 倍走ったら、人間の関わる量は変わらんよね」）。
v21 判定の B5 小川が p.2 の戻り矢印＋p.22 から「最後は人がほとんど要らなくなる」と読み、「第 9 章で分かるのだろう」と先へ進んだ。床（前のページ）は「ほとんど」と両立するので、床だけではこの読みは直らない。床の点も件数に比例して増える。
本の約束（p.2「人を待たない」・p.22・本章の題）は全部 1 件あたりの率か待ち時間で、総量が減るとはどこにも言っていない。前提「希少なのは人間の判断」（p.21）を呼び戻して、率と総量を分ける。新しい語は出さない。
※ 著者の場の実測は次のページ「著者の場で数えた」に置いた（2026-10-18）。
2026-10-18 本物にした: 絵の値は 1 件あたり 6 → 3 → 2、件数 2 → 4 → 6、積は 12 のまま。1 件あたりの 2 は床の点（前のページの 2 種）なので、積のうち床の分は 4 → 8 → 12 と件数に比例して増える。
-->

## 人を待たない、は人が要らない、ではない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="t" text-anchor="middle"><text x="330" y="34">1 周目</text><text x="530" y="34">5 周目</text><text x="730" y="34">10 周目</text></g>
  <g class="ts" text-anchor="end"><text x="200" y="94">1 件あたり</text><text x="200" y="116">人を待つ所</text><text x="200" y="188">流れる件数</text><text x="200" y="268">人の判断の量</text></g>
  <text x="120" y="146" class="t" text-anchor="middle">×</text><text x="120" y="226" class="t" text-anchor="middle">＝</text>
  <g class="h"><circle cx="280" cy="104" r="8"/><circle cx="300" cy="104" r="8"/><circle cx="320" cy="104" r="8"/><circle cx="340" cy="104" r="8"/><circle cx="360" cy="104" r="8"/><circle cx="380" cy="104" r="8"/><circle cx="510" cy="104" r="8"/><circle cx="530" cy="104" r="8"/><circle cx="550" cy="104" r="8"/><circle cx="720" cy="104" r="8"/><circle cx="740" cy="104" r="8"/></g>
  <g><use href="#i-pr" x="310" y="166" width="18" height="24"/><use href="#i-pr" x="332" y="166" width="18" height="24"/>
  <use href="#i-pr" x="488" y="166" width="18" height="24"/><use href="#i-pr" x="510" y="166" width="18" height="24"/><use href="#i-pr" x="532" y="166" width="18" height="24"/><use href="#i-pr" x="554" y="166" width="18" height="24"/>
  <use href="#i-pr" x="664" y="166" width="18" height="24"/><use href="#i-pr" x="686" y="166" width="18" height="24"/><use href="#i-pr" x="708" y="166" width="18" height="24"/><use href="#i-pr" x="730" y="166" width="18" height="24"/><use href="#i-pr" x="752" y="166" width="18" height="24"/><use href="#i-pr" x="774" y="166" width="18" height="24"/></g>
  <path d="M220,140 H840" class="lt"/><path d="M220,220 H840" class="lt"/>
  <g fill="#fff" stroke="#d9822b" stroke-width="2"><rect x="270" y="250" width="120" height="28"/><rect x="470" y="250" width="120" height="28"/><rect x="670" y="250" width="120" height="28"/></g>
  <g class="h"><rect x="270" y="250" width="40" height="28"/><rect x="470" y="250" width="80" height="28"/><rect x="670" y="250" width="120" height="28"/></g>
  <g class="tx" text-anchor="middle"><text x="330" y="300">6 × 2 ＝ 12</text><text x="530" y="300">3 × 4 ＝ 12</text><text x="730" y="300">2 × 6 ＝ 12</text></g>
  <text x="440" y="350" class="ts sub" text-anchor="middle">塗った所＝床の点。件数と一緒に増える</text>
</svg>
```

1 件あたり人を待つ所は減ります。でも待たなくなった分、流せる件数が増えます。人の判断の量が減るとは限りません。

※ p.21 の前提「希少なのは人間の判断」は、AA でも変わりません。変わるのは、1 回の判断で流せる量です。床の点も、件数に比例して増えます。

## 著者の場で数えた：減ったのは率だけ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="225" y="34" class="ts ac" text-anchor="middle" font-weight="700">AI 同士の便</text>
  <text x="655" y="34" class="ts hc" text-anchor="middle" font-weight="700">人の判断を運ぶ便</text>
  <path d="M440,20 V300" class="lt dash"/>
  <path d="M60,270 H400" class="ln"/><path d="M490,270 H830" class="ln"/>
  <g class="a"><rect x="90" y="262" width="70" height="8"/><rect x="190" y="50" width="70" height="220"/><rect x="290" y="161" width="70" height="109"/></g>
  <g class="h"><rect x="520" y="218" width="70" height="52"/><rect x="620" y="50" width="70" height="220"/><rect x="720" y="161" width="70" height="109"/></g>
  <g class="ts" text-anchor="middle"><text x="125" y="254">139</text><text x="225" y="72" fill="#fff">3,768</text><text x="325" y="152">1,865</text><text x="555" y="210">40</text><text x="655" y="72" fill="#fff">168</text><text x="755" y="152">83</text></g>
  <g class="tx" text-anchor="middle"><text x="125" y="290">9/07 の週</text><text x="225" y="290">9/14</text><text x="325" y="290">9/21</text><text x="555" y="290">9/07 の週</text><text x="655" y="290">9/14</text><text x="755" y="290">9/21</text></g>
  <text x="440" y="326" class="ts" text-anchor="middle">比（右 ÷ 左）　0.29 → 0.04 → 0.04</text>
  <text x="440" y="358" class="tx" text-anchor="middle">左右で目盛りが違う。どちらも一番高い週を同じ高さにした</text>
</svg>
```

AI 同士の便が 27 倍になった週も、人の判断を運ぶ便は減りませんでした。下がったのは比で、便の数は 4 倍でした。

※ 著者の場の hub の記録（非公開案件の便は除く）。AI 同士の便には空回りの往復も入る。同じ時期に仕事も増えたので、増えた理由は分けられない。

<!--
数字は週の表の _non 列（非公開案件の便を除いた値）。「人の判断を運ぶ便」= O（@ope-ultp1635 の送信、@scheduler 宛を除く）、「AI 同士の便」= P。
言えるのは観測まで（因果は言わない）: O・P・送り手の数はどれも仕事の量と一緒に動く。O は P より送り手の数と相関（週の順位相関 0.90 / 0.77）。P の急増には飽和期の空回りが入る（「AI が 20 倍走った」とは読まない）。
O は人の判断そのものではない（operator は AI）。だから文は「人の判断」ではなく「人の判断を運ぶ便」。
「回すほど札が増え…」の「点の数は測った値ではありません」の注は差し替えない: 測ったのは便の総量で、周ごとの点の数ではない。
2026-10-18 本物にした: 棒の高さは左右それぞれの最大週（3,768 / 168）を 220px にした比例。左 139→8・1,865→109、右 40→52・83→109。比は 40/139＝0.288、168/3,768＝0.045、83/1,865＝0.045。
-->

## 育ったかは、版の差分と質問の数で数える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="200" y="36" class="ts" text-anchor="middle" font-weight="700">条件の文書の版</text>
  <g class="box"><rect x="40" y="60" width="100" height="130" rx="4"/><rect x="150" y="60" width="100" height="130" rx="4"/><rect x="260" y="60" width="100" height="130" rx="4"/></g>
  <g class="ts" text-anchor="middle"><text x="90" y="86">v1</text><text x="200" y="86">v2</text><text x="310" y="86">v3</text></g>
  <path d="M56,104 H124 M56,120 H124 M166,104 H234 M166,120 H234 M276,104 H344 M276,120 H344" class="lt"/>
  <path d="M166,140 H234 M276,140 H344" class="al"/><path d="M276,160 H344" class="al"/>
  <rect x="40" y="214" width="320" height="70" rx="6" class="soft"/>
  <g class="tx ac"><text x="54" y="242">v2 ＋ 期間の終わりの日は含める</text><text x="54" y="268">v3 ＋ 日付は日本時間で数える</text></g>
  <text x="200" y="320" class="tx" text-anchor="middle">差分が、育った分</text>
  <text x="640" y="36" class="ts" text-anchor="middle" font-weight="700">周ごとの質問の数</text>
  <path d="M440,290 H840" class="ln"/>
  <g fill="#fff" stroke="#d9822b" stroke-width="2"><rect x="460" y="110" width="36" height="180"/><rect x="506" y="140" width="36" height="150"/><rect x="552" y="170" width="36" height="120"/><rect x="598" y="200" width="36" height="90"/><rect x="644" y="230" width="36" height="60"/><rect x="690" y="230" width="36" height="60"/><rect x="736" y="230" width="36" height="60"/><rect x="782" y="230" width="36" height="60"/></g>
  <g class="tx" text-anchor="middle"><text x="478" y="310">1</text><text x="524" y="310">2</text><text x="570" y="310">3</text><text x="616" y="310">4</text><text x="662" y="310">5</text><text x="708" y="310">6</text><text x="754" y="310">7</text><text x="800" y="310">8 周</text></g>
  <path d="M640,230 H840" class="hl dash"/><text x="840" y="222" class="tx hc" text-anchor="end">床</text>
  <text x="640" y="350" class="tx" text-anchor="middle">減って、床で横ばいになる</text>
</svg>
```

育ったかどうかは、気持ちではなく数えられます。条件の文書の版ごとの差分と、周ごとの質問の数です。

※ 版は直すたびに 1 つ増える番号。棒は説明のための値。

## 「毎回確かめよ」の札は点を増やす

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="tx" text-anchor="middle"><text x="530" y="40">1 周</text><text x="610" y="40">2</text><text x="690" y="40">3</text><text x="770" y="40">4</text></g>
  <rect x="40" y="70" width="380" height="80" rx="6" class="box"/>
  <text x="60" y="102" class="ts">期間の終わりの日は含める</text>
  <text x="60" y="130" class="tx">→ 聞かなくてよい</text>
  <g class="tx sub" text-anchor="middle"><text x="530" y="115">来ない</text><text x="610" y="115">来ない</text><text x="690" y="115">来ない</text><text x="770" y="115">来ない</text></g>
  <rect x="40" y="200" width="380" height="80" rx="6" class="box"/>
  <text x="60" y="232" class="ts">毎回、期間を人に確かめる</text>
  <text x="60" y="260" class="tx">→ 毎周、人を待つ</text>
  <g class="h"><circle cx="530" cy="240" r="13"/><circle cx="610" cy="240" r="13"/><circle cx="690" cy="240" r="13"/><circle cx="770" cy="240" r="13"/></g>
  <path d="M460,110 H500" class="ln" marker-end="url(#arr)"/><path d="M460,240 H500" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="340" class="ts" text-anchor="middle">同じ「書き足し」でも、人を待つ所が減る札と増える札がある</text>
</svg>
```

札が引き受けるのは、判断を要らなくする書き方だけです。「毎回確かめる」と書き足すと、人を待つ所はかえって増えます。

※ 説明のために作った札です。

## いまの形と並べる：違うのは減り方

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="t" text-anchor="middle"><text x="300" y="40">1 周目</text><text x="520" y="40">5 周目</text><text x="740" y="40">10 周目</text></g>
  <g class="t" text-anchor="end"><text x="170" y="126">いまの形</text><text x="170" y="266">AA</text></g>
  <text x="170" y="148" class="tx" text-anchor="end">決まりを書いても</text><text x="170" y="288" class="tx" text-anchor="end">条件を書くたび</text>
  <path d="M190,190 H850" class="lt"/>
  <rect x="220" y="90" width="34" height="30" rx="4" class="h"/><rect x="262" y="90" width="34" height="30" rx="4" class="a"/><rect x="304" y="90" width="34" height="30" rx="4" class="box"/><rect x="346" y="90" width="34" height="30" rx="4" class="h"/><path d="M254,105 H262 M296,105 H304 M338,105 H346" class="ln"/>
  <g class="h"><circle cx="267" cy="150" r="8"/><circle cx="289" cy="150" r="8"/><circle cx="311" cy="150" r="8"/><circle cx="333" cy="150" r="8"/></g>
  <rect x="440" y="90" width="34" height="30" rx="4" class="h"/><rect x="482" y="90" width="34" height="30" rx="4" class="a"/><rect x="524" y="90" width="34" height="30" rx="4" class="box"/><rect x="566" y="90" width="34" height="30" rx="4" class="h"/><path d="M474,105 H482 M516,105 H524 M558,105 H566" class="ln"/>
  <g class="h"><circle cx="487" cy="150" r="8"/><circle cx="509" cy="150" r="8"/><circle cx="531" cy="150" r="8"/><circle cx="553" cy="150" r="8"/></g>
  <rect x="660" y="90" width="34" height="30" rx="4" class="h"/><rect x="702" y="90" width="34" height="30" rx="4" class="a"/><rect x="744" y="90" width="34" height="30" rx="4" class="box"/><rect x="786" y="90" width="34" height="30" rx="4" class="h"/><path d="M694,105 H702 M736,105 H744 M778,105 H786" class="ln"/>
  <g class="h"><circle cx="707" cy="150" r="8"/><circle cx="729" cy="150" r="8"/><circle cx="751" cy="150" r="8"/><circle cx="773" cy="150" r="8"/></g>
  <rect x="220" y="230" width="34" height="30" rx="4" class="h"/><rect x="262" y="230" width="34" height="30" rx="4" class="a"/><rect x="304" y="230" width="34" height="30" rx="4" class="box"/><rect x="346" y="230" width="34" height="30" rx="4" class="a"/><path d="M254,245 H262 M296,245 H304 M338,245 H346" class="ln"/>
  <g class="h"><circle cx="245" cy="290" r="8"/><circle cx="267" cy="290" r="8"/><circle cx="289" cy="290" r="8"/><circle cx="311" cy="290" r="8"/><circle cx="333" cy="290" r="8"/><circle cx="355" cy="290" r="8"/></g>
  <rect x="440" y="230" width="34" height="30" rx="4" class="h"/><rect x="482" y="230" width="34" height="30" rx="4" class="a"/><rect x="524" y="230" width="34" height="30" rx="4" class="box"/><rect x="566" y="230" width="34" height="30" rx="4" class="a"/><path d="M474,245 H482 M516,245 H524 M558,245 H566" class="ln"/>
  <g class="h"><circle cx="498" cy="290" r="8"/><circle cx="520" cy="290" r="8"/><circle cx="542" cy="290" r="8"/></g>
  <rect x="660" y="230" width="34" height="30" rx="4" class="h"/><rect x="702" y="230" width="34" height="30" rx="4" class="a"/><rect x="744" y="230" width="34" height="30" rx="4" class="box"/><rect x="786" y="230" width="34" height="30" rx="4" class="a"/><path d="M694,245 H702 M736,245 H744 M778,245 H786" class="ln"/>
  <circle cx="729" cy="290" r="8" class="h"/><circle cx="751" cy="290" r="8" class="h"/>
  <path d="M640,312 H850" class="hl dash"/><text x="850" y="332" class="tx" text-anchor="end">床</text>
  <text x="520" y="352" class="ts sub" text-anchor="middle">橙の点＝人を待つ所。1 周目は AA の方が多いこともある</text>
  <text x="520" y="372" class="ts sub" text-anchor="middle">（点の数は測っていません。実例が取れたら差し替えます）</text>
</svg>
```

1 周目は、AA の方が人を待つことがあります。条件がまだ少ないからです。違うのは 1 周目の数ではなく、周ごとに減るかどうかです。

※ 上は p.124、下は p.131 の点の行だけを並べた。

## 第 4 章の工程の話も、書き直しだった

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="200" y="40" class="ts" text-anchor="middle" font-weight="700">前提：実装が高い</text>
  <path d="M150,250 L190,170 L230,250 Z" fill="#555"/>
  <path d="M60,190 L330,150" stroke="#555" stroke-width="4"/>
  <rect x="40" y="190" width="110" height="56" rx="4" class="a"/><text x="95" y="216" class="ts on" text-anchor="middle">作り直し</text><text x="95" y="236" class="tx on" text-anchor="middle">高い</text>
  <rect x="260" y="112" width="110" height="36" rx="4" class="h"/><text x="315" y="136" class="tx on" text-anchor="middle">紙で先に決める</text>
  <path d="M30,250 H380" class="ln"/>
  <rect x="80" y="276" width="240" height="40" rx="6" class="box"/><text x="200" y="302" class="ts" text-anchor="middle">答え：工程で区切る</text>
  <path d="M410,200 H470" class="ln" marker-end="url(#arr)"/><text x="440" y="186" class="tx" text-anchor="middle">変わった</text>
  <text x="670" y="40" class="ts" text-anchor="middle" font-weight="700">前提：実装が安い</text>
  <path d="M620,250 L660,170 L700,250 Z" fill="#555"/>
  <path d="M530,150 L800,190" stroke="#555" stroke-width="4"/>
  <rect x="510" y="118" width="90" height="30" rx="4" class="a"/><text x="555" y="138" class="tx on" text-anchor="middle">作り直し 安い</text>
  <rect x="720" y="190" width="120" height="56" rx="4" class="w"/><text x="780" y="216" class="ts" text-anchor="middle">境目で</text><text x="780" y="236" class="ts" text-anchor="middle">人を待つ</text>
  <path d="M500,250 H850" class="ln"/>
  <rect x="550" y="276" width="240" height="40" rx="6" class="box"/><text x="670" y="302" class="ts" text-anchor="middle">答え：一部から一筋通す</text>
  <text x="440" y="356" class="tx" text-anchor="middle">第 4 章 p.73・p.76・p.78 の絵を、1 枚に並べた</text>
</svg>
```

第 4 章の工程の区切り方も、前提（実装が高い）が変わって、答えが変わりました。札の書き直しと同じ形です。これが P3 です。

※ P3「憲法は観測を根拠に改訂される」。決まりが固定だと、前提が変わったとき、従って失敗するか黙って外すかしかない。

## 板挟みは、回すほど緩む

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="t" text-anchor="middle"><text x="160" y="40">1 周目</text><text x="440" y="40">5 周目</text><text x="720" y="40">10 周目</text></g>
  <g fill="#fbe9d7" class="hl"><rect x="40" y="70" width="90" height="200" rx="8"/><rect x="320" y="110" width="70" height="120" rx="8"/><rect x="600" y="140" width="50" height="60" rx="8"/></g>
  <use href="#i-wait" x="65" y="135" width="40" height="56"/><use href="#i-wait" x="341" y="148" width="28" height="40"/><use href="#i-wait" x="616" y="156" width="18" height="26"/>
  <g class="box"><rect x="140" y="140" width="80" height="60" rx="6"/><rect x="400" y="140" width="80" height="60" rx="6"/><rect x="660" y="140" width="80" height="60" rx="6"/></g>
  <g class="tx" text-anchor="middle"><text x="180" y="176">チーム</text><text x="440" y="176">チーム</text><text x="700" y="176">チーム</text></g>
  <g fill="#fff" stroke="#bbb" stroke-width="2" class="dash"><rect x="230" y="70" width="60" height="200" rx="8"/><rect x="490" y="70" width="60" height="200" rx="8"/><rect x="750" y="70" width="60" height="200" rx="8"/></g>
  <text x="85" y="296" class="tx hc" text-anchor="middle">人の速さで止まる</text>
  <text x="625" y="226" class="tx hc" text-anchor="middle">床の分</text>
  <text x="260" y="296" class="tx sub" text-anchor="middle">外れた壁</text>
  <text x="440" y="346" class="ts sub" text-anchor="middle">右の壁は第 2 章で外れた。左の壁は、周ごとに薄くなる</text>
</svg>
```

第 2 章で、右の壁が外れました。左の壁も、回すほど薄くなります。人を待つ所が周ごとに減るからです。床の分は残ります。

※ 第 1 章 p.14・第 2 章 p.35 の図の描き直し。測った結果ではない。

## 練習問題：この質問を札にするか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="60" y="44" class="ts sub">AI の質問の記録（3 周ぶん）</text>
  <g class="ts" text-anchor="middle"><text x="530" y="44">1 周</text><text x="600" y="44">2 周</text><text x="670" y="44">3 周</text><text x="780" y="44">札にする？</text></g>
  <g class="soft"><rect x="40" y="70" width="680" height="60"/><rect x="40" y="150" width="680" height="60"/><rect x="40" y="230" width="680" height="60"/></g>
  <g class="t"><text x="60" y="108">A「31 日は含める？」</text><text x="60" y="188">B「ボタンの文言は？」</text><text x="60" y="268">C「本番の古いデータを消してよい？」</text></g>
  <g fill="#fff" stroke="#d9822b" stroke-width="3" stroke-dasharray="5 4"><circle cx="530" cy="100" r="12"/><circle cx="600" cy="100" r="12"/><circle cx="670" cy="100" r="12"/><circle cx="530" cy="180" r="12"/><circle cx="530" cy="260" r="12"/><circle cx="600" cy="260" r="12"/><circle cx="670" cy="260" r="12"/></g>
  <g class="tx sub" text-anchor="middle"><text x="600" y="185">—</text><text x="670" y="185">—</text></g>
  <g fill="#fff" class="lt dash"><rect x="740" y="80" width="80" height="40" rx="4"/><rect x="740" y="160" width="80" height="40" rx="4"/><rect x="740" y="240" width="80" height="40" rx="4"/></g>
  <text x="440" y="340" class="ts sub" text-anchor="middle">何度来たか、と、どこに当たるか</text>
</svg>
```

3 周ぶんの AI の質問です。札にしてよいのはどれでしょう。札にしてはいけないのはどれでしょう。

※ 答え：A は札にする。B は 1 度きりなので書かない。C は「消してよい」と札に書かない。revert できない操作の手前で、床に当たる（p.132）。

## まとめ：2 度来た質問を、次から札で通す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="800" height="210" rx="10" class="soft"/>
  <text x="64" y="62" class="ts sub">AA の条文（全文）</text>
  <text x="64" y="100" style="font-size:19px">P3 憲法は観測を根拠に改訂される。改訂の手続きは準拠先に従う</text>
  <path d="M100,108 H360" class="hl"/>
  <text x="100" y="126" class="tx">p.138 前提が変わって、答えが変わる</text>
  <text x="64" y="170" style="font-size:19px">D1 希少な判断を、最も価値のある判断に配分する。</text>
  <text x="64" y="200" style="font-size:19px">　　不要な判断をなくすことも成果である（P1・前提）</text>
  <path d="M100,208 H446" class="hl"/>
  <text x="100" y="226" class="tx">p.127〜128 2 度来た質問を札にして、人を待つ所を消す</text>
  <rect x="200" y="270" width="16" height="26" rx="2" class="box"/><circle cx="208" cy="264" r="4" class="h"/>
  <rect x="236" y="270" width="16" height="26" rx="2" class="box"/><circle cx="244" cy="264" r="4" class="h"/><rect x="256" y="270" width="16" height="26" rx="2" class="box"/><circle cx="264" cy="264" r="4" class="h"/>
  <rect x="292" y="270" width="16" height="26" rx="2" class="box"/><circle cx="300" cy="264" r="4" class="h"/><rect x="312" y="270" width="16" height="26" rx="2" class="box"/><circle cx="320" cy="264" r="4" class="h"/><rect x="332" y="270" width="16" height="26" rx="2" class="box"/><circle cx="340" cy="264" r="4" class="h"/>
  <g class="h"><circle cx="460" cy="284" r="7"/><circle cx="478" cy="284" r="7"/><circle cx="496" cy="284" r="7"/><circle cx="530" cy="284" r="7"/><circle cx="548" cy="284" r="7"/><circle cx="582" cy="284" r="7"/></g>
  <g class="tx"><text x="200" y="322">札が増える</text><text x="460" y="322">人を待つ所が減る（床で止まる）</text></g>
</svg>
```

この章を条文で書くと、P3 と D1 の後半です。2 度来た質問を札にする仕組みは、条文には書いてありません。作り方の取り決めです。

※ 同じ判断が繰り返されるなら、その条件を決まりと環境に移し、次から AI が自分で進められるようにする。守らなくても条文には反しない。

## 実装イメージ：2 回目の質問で PR

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="20" y="6" width="840" height="46" rx="8" class="soft"/>
  <text x="36" y="35" class="ts sub">この章の約束</text>
  <text x="150" y="35" class="ts">作る AI → 人：同じ質問が 2 回目なら、答えを決まりに足す PR を出す</text>
  <rect x="30" y="72" width="260" height="130" rx="6" fill="#fff" class="lt"/>
  <text x="46" y="98" class="tx">tasks/012-retry.md の末尾</text>
  <g style="font-family:monospace;font-size:13.5px"><text x="46" y="128">## 質問と答え</text><text x="46" y="154" class="ac">Q 時刻は日本時間？</text><text x="46" y="178" class="hc">A UTC で保存する</text></g>
  <rect x="30" y="220" width="260" height="130" rx="6" fill="#fff" class="lt"/>
  <text x="46" y="246" class="tx">tasks/015-report.md の末尾</text>
  <g style="font-family:monospace;font-size:13.5px"><text x="46" y="276">## 質問と答え</text><text x="46" y="302" class="ac">Q 時刻は日本時間？</text></g>
  <text x="46" y="330" class="ts" font-weight="700">2 回目</text>
  <path d="M292,300 H366" class="al" marker-end="url(#arr)"/>
  <rect x="370" y="240" width="250" height="100" rx="6" fill="#fff" class="al"/>
  <use href="#i-pr" x="386" y="256" width="26" height="33"/><text x="422" y="276" class="ts ac">決まりの PR</text>
  <text x="386" y="312" style="font-family:monospace;font-size:13px">+ 時刻は UTC で保存する</text><text x="386" y="330" class="tx">CLAUDE.md に 1 行</text>
  <path d="M620,290 H690" class="hl" marker-end="url(#arr)"/>
  <rect x="694" y="262" width="166" height="56" rx="6" class="h"/><text x="777" y="296" class="ts on" text-anchor="middle">人が merge</text>
  <rect x="370" y="72" width="490" height="130" rx="6" fill="#fff" class="lt"/>
  <text x="386" y="98" class="tx">roles/maker.md に書いておく 2 行</text>
  <g class="ts"><text x="386" y="132">・質問と答えは、依頼ファイルの末尾に残す</text><text x="386" y="164">・前の依頼ファイルに同じ質問があれば、</text><text x="404" y="188">答えを決まりに足す PR を出す</text></g>
</svg>
```

この条文を守るとは：2 回目に来た質問で、答えを決まりのファイルに足す PR を出させることです。質問と答えは、依頼ファイルの末尾に残しておきます。

※ 床の質問（revert できない操作の手前・権限を緩める）は、2 回来ても「聞かなくてよい」と書かない（p.132）。質問は作り物。

## 実装イメージ：育ったかを数える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="20" width="400" height="300" rx="8" fill="#fff" class="lt"/>
  <text x="50" y="50" class="ts" font-weight="700">決まりの版の数</text>
  <text x="50" y="76" style="font-family:monospace;font-size:13px">git log --oneline -- CLAUDE.md roles/</text>
  <g class="h"><rect x="80" y="250" width="40" height="40"/><rect x="150" y="210" width="40" height="80"/><rect x="220" y="170" width="40" height="120"/><rect x="290" y="150" width="40" height="140"/><rect x="360" y="140" width="40" height="150"/></g>
  <path d="M60,290 H410" class="ln"/>
  <g class="tx" text-anchor="middle"><text x="100" y="308">1 週</text><text x="170" y="308">2</text><text x="240" y="308">3</text><text x="310" y="308">4</text><text x="380" y="308">5</text></g>
  <rect x="460" y="20" width="400" height="300" rx="8" fill="#fff" class="lt"/>
  <text x="480" y="50" class="ts" font-weight="700">依頼 1 件あたりの質問の数</text>
  <text x="480" y="76" style="font-family:monospace;font-size:13px">grep -c '^Q ' tasks/*.md</text>
  <g class="a"><rect x="510" y="130" width="40" height="160"/><rect x="580" y="170" width="40" height="120"/><rect x="650" y="210" width="40" height="80"/><rect x="720" y="230" width="40" height="60"/><rect x="790" y="240" width="40" height="50"/></g>
  <path d="M490,290 H840" class="ln"/>
  <g class="tx" text-anchor="middle"><text x="530" y="308">1 週</text><text x="600" y="308">2</text><text x="670" y="308">3</text><text x="740" y="308">4</text><text x="810" y="308">5</text></g>
  <text x="440" y="358" class="ts sub" text-anchor="middle">左が増え、右が減っていれば育っている。棒は説明のための値</text>
</svg>
```

育ったかは、決まりのファイルの変更の数と、依頼ごとの質問の数で数えます。左が増えても右が減らないなら、札の書き方を見直します。

※ 右が減らないときは、「毎回確かめる」型の札を足していないかを見る（p.136）。床の点は、件数に比例して残る（p.133）。

## 次章へ：札 1 枚を足すのは軽くてよいか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="tx" text-anchor="middle"><text x="360" y="40">次の周</text><text x="460" y="40">その次</text><text x="560" y="40">…</text><text x="660" y="40">…</text><text x="760" y="40">…</text></g>
  <rect x="60" y="80" width="180" height="70" rx="6" class="box"/><text x="150" y="112" class="ts" text-anchor="middle">期間の終わりの日は</text><text x="150" y="134" class="ts" text-anchor="middle">含める</text>
  <path d="M240,115 H820" class="ln" marker-end="url(#arr)"/>
  <g fill="#555"><circle cx="360" cy="115" r="6"/><circle cx="460" cy="115" r="6"/><circle cx="560" cy="115" r="6"/><circle cx="660" cy="115" r="6"/><circle cx="760" cy="115" r="6"/></g>
  <rect x="60" y="200" width="180" height="70" rx="6" fill="#fff" class="xl"/><text x="150" y="232" class="ts xc" text-anchor="middle">期間の終わりの日は</text><text x="150" y="254" class="ts xc" text-anchor="middle">含めない（誤り）</text>
  <path d="M240,235 H820" class="xl" marker-end="url(#arr-x)"/>
  <g class="x"><circle cx="360" cy="235" r="6"/><circle cx="460" cy="235" r="6"/><circle cx="560" cy="235" r="6"/><circle cx="660" cy="235" r="6"/><circle cx="760" cy="235" r="6"/></g>
  <text x="440" y="320" class="tl" text-anchor="middle">?</text>
  <text x="440" y="356" class="ts sub" text-anchor="middle">札 1 枚を足す手続きは、軽くてよいか</text>
</svg>
```

札 1 枚は、以後の周すべてに効きます。間違った札も同じです。だから、札を足す手続きは重くしてあります。それが第 9 章です。

---
@writer-ja [bridge-claude2] (operator-supervised · k-ishibashi-ntv/agent-hub)
