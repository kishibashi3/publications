# 巻末　この本の全体

<!--
2026-11-09（@ope-ultp1635 msg 41fb85e0 の「四」）で作り直した。kishibashi3「これ、全体構成の絵はどこかにあるの？」。AA の巻末「通しの 1 枚：役・ファイル・承認・約束」と同じ役（全章を 1 枚の絵に）。形は EAA に合わせ、本文の例（在庫と物流。第 2・5〜7 章）の上に、Cell が持つ文書・あいだの文書・流れるもの・手続きを置いた。各語に説明する章を付け、章の概要へ飛べるようにした。
流れの向き: Mission は頼む側（在庫）から受ける側（物流）へ、Evidence は受けた側から頼んだ側へ（第 6 章の例「追跡番号を出荷結果に載せる」）。Ontology は流れない（core.md:16）ので、矢印にせず両側の Cell の中に置いた。
前の巻末「この本の読み手」（@philosopher の構造案の逐語、@ope-ultp1635 msg d407be50）は、読み方の 1 枚（eaa-yomikata.md）の「この本の読み手」の段落へ移した。注に「読み方の 1 枚を書く段で移すかを決める」と書いていた段。字は縮めていない。
-->

## 通しの 1 枚：Cell・文書・手続き

```svg
<svg viewBox="0 0 880 420" width="880" height="420">
  <text x="10" y="18" class="tx">なぜ分けるか：一つの Cell では判断を追い切れず、価値を取り違える（<a href="#ch0"><tspan>第 0 章</tspan></a>）。職能では切らない（<a href="#ch1"><tspan>第 1 章</tspan></a>）</text>
  <rect x="10" y="30" width="270" height="250" rx="10" fill="#fff" class="al"/>
  <text x="26" y="58" class="t ac" font-weight="700">在庫の Cell</text>
  <rect x="26" y="72" width="238" height="44" rx="5" class="soft"/>
  <text x="38" y="99" class="ts"><tspan font-weight="700">Profile</tspan>　引き受ける責務</text><a href="#ch3"><text x="256" y="99" class="tx" text-anchor="end">第 3 章</text></a>
  <rect x="26" y="124" width="238" height="44" rx="5" class="soft"/>
  <text x="38" y="151" class="ts"><tspan font-weight="700">Constitution</tspan>　規範</text><a href="#ch4"><text x="256" y="151" class="tx" text-anchor="end">第 4 章</text></a>
  <rect x="26" y="176" width="238" height="44" rx="5" class="soft"/>
  <text x="38" y="203" class="ts"><tspan font-weight="700">Ontology</tspan>　共有する語の定義</text><a href="#ch7"><text x="256" y="203" class="tx" text-anchor="end">第 7 章</text></a>
  <text x="26" y="244" class="tx">中は Agent でも人のチームでも。</text><text x="26" y="264" class="tx">作り方はこの Cell が決める</text>
  <rect x="600" y="30" width="270" height="250" rx="10" fill="#fff" class="al"/>
  <text x="616" y="58" class="t ac" font-weight="700">物流の Cell</text>
  <rect x="616" y="72" width="238" height="44" rx="5" class="soft"/>
  <text x="628" y="99" class="ts"><tspan font-weight="700">Profile</tspan>　引き受ける責務</text>
  <rect x="616" y="124" width="238" height="44" rx="5" class="soft"/>
  <text x="628" y="151" class="ts"><tspan font-weight="700">Constitution</tspan>　規範</text>
  <rect x="616" y="176" width="238" height="44" rx="5" class="soft"/>
  <text x="628" y="203" class="ts"><tspan font-weight="700">Ontology</tspan>　共有する語の定義</text>
  <text x="616" y="244" class="tx">境界は、中の主体が文脈を</text><text x="616" y="264" class="tx">切り替えずに済む範囲（<a href="#ch2"><tspan>第 2 章</tspan></a>）</text>
  <rect x="318" y="40" width="244" height="84" rx="4" fill="#fff" class="hl"/>
  <text x="440" y="68" class="ts hc" text-anchor="middle" font-weight="700">Contract（版付き）</text>
  <text x="440" y="90" class="tx" text-anchor="middle">渡すもの・条件・確かめ方</text>
  <text x="440" y="110" class="tx" text-anchor="middle">両側が同じ版を採用して成り立つ <a href="#ch5"><tspan>第 5 章</tspan></a></text>
  <path d="M280,82 H316 M564,82 H600" class="lt"/>
  <path d="M286,164 H594" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="156" class="ts" text-anchor="middle"><tspan font-weight="700">Mission</tspan>　今回の仕事を頼む <a href="#ch6"><tspan class="tx">第 6 章</tspan></a></text>
  <path d="M594,218 H286" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="210" class="ts" text-anchor="middle"><tspan font-weight="700">Evidence</tspan>　成果の記録を返す <a href="#ch7"><tspan class="tx">第 7 章</tspan></a></text>
  <text x="440" y="240" class="tx" text-anchor="middle">受けた側は、作った側に聞かずに</text>
  <text x="440" y="258" class="tx" text-anchor="middle">共有する語の定義で読んで確かめる</text>
  <text x="440" y="290" class="tx" text-anchor="middle">互いの中は指定しない（Federation <a href="#ch4"><tspan>第 4 章</tspan></a>）</text>
  <text x="10" y="322" class="ts" font-weight="700">変えるとき・増えるとき・始めるとき</text>
  <g class="box"><rect x="10" y="332" width="208" height="70" rx="6"/><rect x="230" y="332" width="208" height="70" rx="6"/><rect x="450" y="332" width="208" height="70" rx="6"/><rect x="670" y="332" width="200" height="70" rx="6"/></g>
  <g class="ts"><text x="22" y="356">版の公開と採用</text><text x="242" y="356">改訂の承認</text><text x="462" y="356">Cell の分け直し</text><text x="682" y="356">導入</text></g>
  <g class="tx"><text x="22" y="376">採用が揃うまで今の版で</text><text x="242" y="376">提起者でない所有者が承認</text><text x="462" y="376">切り替えが始まったら分ける</text><text x="682" y="376">行き来の多いあいだから</text></g>
  <g class="tx"><a href="#ch8"><text x="22" y="394">第 8 章</text></a><a href="#ch9"><text x="242" y="394">第 9 章</text></a><a href="#ch10"><text x="462" y="394">第 10 章</text></a><a href="#ch11"><text x="682" y="394">第 11 章</text></a></g>
</svg>
```

在庫と物流の例で全章を 1 枚にしました。Cell は責務・規範・語の定義を持ち、あいだを Contract に書き、Mission で頼み、Evidence で確かめます。

※ 例の在庫と物流は第 2・5〜7 章のもの。下の段は、取り決めを変えるとき・Cell が増えるとき・始めるときの手続き。語は第 0 章の用語の一覧へ。
