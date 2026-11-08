# 第 6 章　Contract

群: 切っても残る結合の持ち方
副題: 残る結合は、書いた取り決め（Contract）に集める

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（7a7f5737）の第 6 章。着手: @ope-ultp1635 msg 6ad8d3f2（群三）。
この章が拠る本の考え: 各主体の文脈を疎結合にする（structure-v5.md「イデア」第 2 文。逐語は roles-kaz 側）。
2d0ca30 までの第 8 章（Contract は、結ぶ Cell のすべてが同じ版を採用して成立する）の中身を、この章に移した: Contract の定義と「どの Evidence を渡すか」（core.md:24・38）、欄と問い、所有者・観測・準拠先（core.md:94）、例の版 1、埋まらない欄、全部が採用して成立（core.md:80）、所有者は結ぶ Cell の中の 1 人（core.md:98）、片側だけでは変わらない（素材 3 の読み）、契約書との関係は Core に書かれていない。旧本文は 2d0ca30 の eaa-ch08.md にある。
②の直し（1d62eef、@ope-ultp1635 msg 95d31f1b、@reviewer 2026-11-08 ch06-09 三）を落とさずに持ってきた: 必要な Evidence の問いは core.md:22（受け取った側が作った側を介さずに確かめられる）と core.md:39（成果や判断の成立）の字のまま。所有者・観測・準拠先のページは欄のページの次に置き、例の版 1 にも 3 行を残した。準拠先の行の絵の説明「改訂の承認と版を定めた文書。Core も従う」（2 周目の直し）もそのまま。さらに p.「Contract に書く欄と問い」の文の「右の問いに答えれば欄が埋まります」に「欄のほかに持つものは次のページ」を足した。@reviewer 3-2（問いで欄を埋めた読み手は core.md:94 の要件を欠いた Contract を書く）の形を、文の側でも閉じるため。
持ってこなかったもの（群四の第 10 章へ移す）: 結んでいない者は所有者にならない・所有者が離れたら改訂は止まる・後任も結ぶ Cell の合意で決める・所有者がいない間も止めることはできる（core.md:98-102）、最後のページの「後任の合意が成り立たないときは合意不成立」（core.md:101・11）。どれも共有する文書の所有者と承認の話で、v5 の第 10 章（共有する文書の改訂を人間の所有者が承認する）の中身。第 10 章を書くまで、旧本文は 2d0ca30 の eaa-ch08.md にある。
2d0ca30 の第 2 章 p.「揃えるのは外とのつながり方」（delivery-guide.md「3.」、適用例）の中身は p.「中の作り方は書かない」に持ってきた。第 2 章の注（「群三の第 6 章で Contract と一緒に扱う」）のとおり。
2d0ca30 の第 0 章 p.「つなぐのは版の付いた共有文書」のうち、どの Evidence を渡すかを Contract に書く（core.md:24）は p.「結合は Contract に集める」へ。各 Cell が採用を決め、全部が同じ版を採用したときに成り立つ（⑥ の直し: 成り立つ版まで各 Cell が決めるとは読ませない）は p.「結ぶ Cell が全部採用して、成立する」へ。
p.「切っても渡すものは残る」「疎結合は、少なく明示された結合」「暗黙の結合は相手を読ませる」は書き手の読み。Core は疎結合の語を使っていない（core.md を grep で確認、0 件）。注に書いた。
p.「結ぶ Cell が全部採用して、成立する」の 2 文目は、目次の通読で @reader の読者が第 6 章（全員が同じ版）と第 9 章（各自の版）の関係を組み立てられなかった所（@reader 349c4d63）への答え。core.md:79-80（新版の公開と採用は別、採用中の合意は移行が成立するまで有効）の字による。
在庫と物流の例は、第 4 章の組と同じ。例の版 1 の入出力・Evidence に「指示番号」を足し、欠品を「物流がそう判断した理由」とした。第 8 章で、在庫が物流に聞かずに突き合わせられること（core.md:22）と、判断の成立（core.md:39）を例で見せるため。第 9 章の例（出荷指示に希望時間帯を足す）とは食い違わない。中が Scrum・委託先の標準工程という設定は素材 3 と 2d0ca30 の第 6 章のまま。第 7・8 章でも使う。
Core 版 6 は「契約」「検収」の語を使っていない（core.md を grep で確認）。Contract に「契約」の字を当てない（2 周目に Contract＝契約書の取り違えが強まった。@reader r2 cea29c1f）。
絵: 在庫と物流の Cell は横に並べ、Contract は二つの Cell のあいだに置き、どちらの枠の中にも入れない。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff。判定の正本 @reviewer 2026-11-08-eaa-textbook-77a7fc9-ch00-04 / ch05-08 / ch09-12-furoku、@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）: 「EAA 紹介 3」の説明が本に無かった（@reader の読者 3 体）。最初に出る p.「例：在庫と物流のあいだ」の注に書いた。付録 p.「引用の確かめ方」の注にも置いた。
-->

> Contract には、渡すもの・条件・確かめ方を書き、結ぶ Cell のすべてが同じ版を採用して成り立たせる。暗黙の結合は、相手の文脈を読みに行かせる。

```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <rect x="30" y="30" width="250" height="180" rx="10" class="box"/><text x="155" y="66" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <rect x="600" y="30" width="250" height="180" rx="10" class="box"/><text x="725" y="66" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="330" y="40" width="220" height="80" rx="3" class="hl" style="fill:#fff"/><text x="440" y="74" class="ts hc" text-anchor="middle" font-weight="700">Contract　版 1</text><text x="440" y="100" class="tx" text-anchor="middle">渡すもの・条件・確かめ方</text>
  <path d="M280,80 H326 M554,80 H596" class="ln"/>
  <use href="#i-ok" x="141" y="140" width="28" height="28"/><text x="155" y="190" class="ts okc" text-anchor="middle">版 1 を採用</text>
  <use href="#i-ok" x="711" y="140" width="28" height="28"/><text x="725" y="190" class="ts okc" text-anchor="middle">版 1 を採用</text>
  <text x="440" y="170" class="ts" text-anchor="middle">相手の中は書かない</text>
  <text x="440" y="264" class="t" text-anchor="middle" font-weight="700">結合を一か所に集め、少なく、明示して持つ</text>
</svg>
```

価値・ドメイン・権限で切っても、Cell のあいだで渡すものは残ります。その結合を、あいだの取り決めである Contract に集め、少なく、明示して持ちます。

## 切っても渡すものは残る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="260" height="210" rx="10" class="box"/><text x="170" y="96" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text><text x="170" y="124" class="tx" text-anchor="middle">在庫の語と記録</text>
  <rect x="580" y="60" width="260" height="210" rx="10" class="box"/><text x="710" y="96" class="t" text-anchor="middle" font-weight="700">物流の Cell</text><text x="710" y="124" class="tx" text-anchor="middle">物流の語と記録</text>
  <path d="M300,170 H576" class="ln" marker-end="url(#arr)"/><text x="440" y="160" class="ts" text-anchor="middle">出荷指示</text>
  <path d="M576,226 H304" class="ln" marker-end="url(#arr)"/><text x="440" y="216" class="ts" text-anchor="middle">出荷結果</text>
  <text x="440" y="330" class="t" text-anchor="middle" font-weight="700">ドメインで切っても、出荷指示と結果は行き来する</text>
</svg>
```

第 4 章で在庫と物流をドメインの境界で切りました。それでも在庫は出荷を指示し、物流は結果を返します。切っても、あいだで渡すものは残ります。

## 疎結合は、少なく明示された結合

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M440,30 V300" class="lt dash"/>
  <text x="220" y="56" class="t xc" text-anchor="middle" font-weight="700">結合が無い</text>
  <rect x="60" y="90" width="120" height="120" rx="10" class="box"/><rect x="260" y="90" width="120" height="120" rx="10" class="box"/>
  <use href="#i-no" x="208" y="138" width="24" height="24"/><text x="220" y="250" class="ts" text-anchor="middle">何も渡らないなら、</text><text x="220" y="276" class="ts" text-anchor="middle">分業にならない</text>
  <text x="660" y="56" class="t hc" text-anchor="middle" font-weight="700">少なく、明示してある</text>
  <rect x="480" y="90" width="120" height="120" rx="10" class="box"/><rect x="720" y="90" width="120" height="120" rx="10" class="box"/>
  <rect x="610" y="126" width="100" height="48" rx="3" class="hl" style="fill:#fff"/><text x="660" y="156" class="ts hc" text-anchor="middle">Contract</text>
  <path d="M600,150 H610 M710,150 H720" class="ln"/>
  <use href="#i-ok" x="648" y="226" width="24" height="24"/><text x="660" y="276" class="ts" text-anchor="middle">渡すものだけが、ここを通る</text>
  <text x="440" y="346" class="ts sub" text-anchor="middle">疎結合は、結合が無いことではない</text>
</svg>
```

疎結合は、結合が無いことではありません。結合が少なく、明示されていることです。何も渡らない Cell どうしは、分業していません。

※ 書き手の読み。疎結合はこの本の考えの語（第 0 章）。Core は疎結合の語を使わない。

## 暗黙の結合は相手を読ませる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="300" height="200" rx="10" class="box"/><text x="190" y="96" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="190" y="156" class="ts" text-anchor="middle">何時までに出せば、</text><text x="190" y="182" class="ts" text-anchor="middle">今日出荷されるか</text>
  <path d="M340,140 H536" class="xl" marker-end="url(#arr-x)"/><text x="440" y="130" class="tx xc" text-anchor="middle">毎回聞く</text>
  <path d="M536,200 H344" class="xl" marker-end="url(#arr-x)"/><text x="440" y="226" class="tx xc" text-anchor="middle">物流の事情で返る</text>
  <rect x="540" y="60" width="300" height="200" rx="10" class="box"/><text x="690" y="96" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <text x="690" y="170" class="ts" text-anchor="middle">便の都合・人の手配</text>
  <text x="440" y="330" class="t xc" text-anchor="middle" font-weight="700">暗黙の結合は、そのたびに相手の文脈へ入る</text>
</svg>
```

締め時刻が書いていなければ、在庫は指示のたびに物流の事情を聞きに行きます。暗黙の結合は、相手の文脈を読みに行かせます。

※ 書き手の読み。毎回聞きに行くことは、第 2 章のコンテキストスイッチに当たる。例は説明のために作った。

## 結合は Contract に集める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="240" height="200" rx="10" class="box"/><text x="160" y="96" class="t" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="600" y="60" width="240" height="200" rx="10" class="box"/><text x="720" y="96" class="t" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="320" y="40" width="240" height="110" rx="3" class="hl" style="fill:#fff"/><text x="440" y="76" class="ts hc" text-anchor="middle" font-weight="700">Contract</text><text x="440" y="104" class="ts" text-anchor="middle">どの Evidence を渡すか</text><text x="440" y="128" class="ts" text-anchor="middle">を定める</text>
  <path d="M280,220 H596" class="ln" marker-end="url(#arr)"/><use href="#i-pr" x="425" y="180" width="30" height="38"/><text x="440" y="242" class="ts" text-anchor="middle">Evidence</text>
  <text x="440" y="320" class="t" text-anchor="middle" font-weight="700">あいだの約束と、渡す Evidence を一つの文書に書く</text>
</svg>
```

Contract は、相互の責任、提供条件、入出力、必要な Evidence を定める、Cell のあいだの合意です。どの Evidence を渡すかも、ここで決めます。

出典: EAA Core 版 6 の概念表「Contract」と「0. 目的と範囲」。Evidence は第 8 章で見る。

## 例：在庫と物流のあいだ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="260" height="210" rx="10" class="box"/><text x="170" y="86" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text><text x="170" y="114" class="tx" text-anchor="middle">中は Scrum（自社のチーム）</text>
  <rect x="580" y="50" width="260" height="210" rx="10" class="box"/><text x="710" y="86" class="t" text-anchor="middle" font-weight="700">物流の Cell</text><text x="710" y="114" class="tx" text-anchor="middle">中は委託先の標準工程</text>
  <path d="M300,150 H576" class="ln" marker-end="url(#arr)"/><text x="440" y="140" class="ts" text-anchor="middle">出荷指示</text>
  <path d="M576,214 H304" class="ln" marker-end="url(#arr)"/><text x="440" y="204" class="ts" text-anchor="middle">出荷結果</text>
  <text x="440" y="320" class="ts sub" text-anchor="middle">第 7・8 章でも、この組を使う</text>
</svg>
```

この群では一つの例を使い続けます。在庫の Cell が物流の Cell に出荷を指示し、物流は出荷して結果を返します。二つの Cell の中の作り方は違います。

※ 在庫・物流の例と中の作り方は、EAA 紹介 3（この本の前に書いた紹介資料。先に読まなくてよい）の、説明のための仮定。第 9〜12 章でも使う。

## Contract に書く欄と問い

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="20" width="800" height="300" rx="3" class="hl" style="fill:#fff"/>
  <g class="ts">
    <text x="70" y="64" font-weight="700">相互の責任</text><text x="280" y="64">相手に何を約束し、相手から何を約束してもらうか</text>
    <text x="70" y="134" font-weight="700">提供条件</text><text x="280" y="134">どんな条件の下でなら、その約束を守れるか</text>
    <text x="70" y="204" font-weight="700">入出力</text><text x="280" y="204">何を渡し、何を受け取るか。その形は</text>
    <text x="70" y="264" font-weight="700">必要な Evidence</text><text x="280" y="264">何が残っていたら、成果と判断が成り立ったと、</text><text x="280" y="290" font-weight="700">受け取った側が、作った側を介さずに確かめられるか</text>
  </g>
  <path d="M60,96 H820 M60,166 H820 M60,236 H820" class="lt"/>
  <text x="440" y="356" class="ts sub" text-anchor="middle">左が Core の欄。右は、自分の案件で欄を埋めるときの問い</text>
</svg>
```

Contract には、相互の責任、提供条件、入出力、必要な Evidence を書きます。右の問いに相手と答えれば欄が埋まります。欄のほかに持つものは次に見ます。

出典: EAA Core 版 6 の概念表「Contract」「Evidence」と「0.」。※ 問いは EAA 紹介 3 のもの。Evidence の問いだけ、Core の字に合わせて直した。

## 欄のほかに、所有者・観測・準拠先を持つ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="70" width="200" height="180" rx="10" class="box"/><text x="140" y="166" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <rect x="640" y="70" width="200" height="180" rx="10" class="box"/><text x="740" y="166" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="290" y="40" width="300" height="250" rx="3" class="hl" style="fill:#fff"/>
  <text x="440" y="76" class="t hc" text-anchor="middle" font-weight="700">Contract</text>
  <g class="ts" text-anchor="middle"><text x="440" y="112">相互の責任・提供条件</text><text x="440" y="138">入出力・必要な Evidence</text></g>
  <path d="M310,162 H570" class="lt"/>
  <g class="ts" text-anchor="middle"><text x="440" y="192" font-weight="700">所有者（人間）</text><text x="440" y="220" font-weight="700">観測</text><text x="440" y="248" font-weight="700">準拠先</text></g>
  <g class="tx" text-anchor="middle"><text x="440" y="274">欄だけでは、Contract は揃わない</text></g>
  <path d="M240,160 H286 M594,160 H636" class="ln"/>
  <text x="440" y="330" class="ts sub" text-anchor="middle">Evidence の様式・共有する Profile・共有する Ontology と同じ扱い</text>
</svg>
```

Contract は Cell のあいだで共有する文書なので、欄のほかに所有者・観測・準拠先を持ちます。所有者は人間です。第 8 章の Evidence の様式も同じです。

出典: EAA Core 版 6「4. 提案と変更」。観測・準拠先の意味は第 10 章で見る。

## 例：在庫と物流の Contract

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="14" width="800" height="352" rx="3" class="hl" style="fill:#fff"/>
  <text x="60" y="42" class="ts hc" font-weight="700">在庫と物流のあいだの Contract　版 1</text>
  <g class="ts">
    <text x="60" y="76" font-weight="700">相互の責任</text><text x="230" y="76">在庫は、引き当て済みの品目だけを指示に載せる</text><text x="230" y="98">物流は、受けた指示を出荷し、結果を返す</text>
    <text x="60" y="134" font-weight="700">提供条件</text><text x="230" y="134">平日 15 時までに受けた指示は、その日のうちに出荷する</text>
    <text x="60" y="170" font-weight="700">入出力</text><text x="230" y="170">渡す：出荷指示（指示番号・品目・数量・届け先）</text><text x="230" y="192">受け取る：出荷結果（指示番号・出荷番号・出荷日時・欠品の有無と理由）</text>
    <text x="60" y="228" font-weight="700">必要な Evidence</text><text x="230" y="228">指示と結果を指示番号で 1 件ずつ突き合わせた記録</text><text x="230" y="250">欠品は、物流がそう判断した理由とともに残す</text>
    <text x="60" y="292" font-weight="700">所有者</text><text x="230" y="292">物流の窓口の責任者</text>
    <text x="60" y="320" font-weight="700">観測</text><text x="230" y="320">受け入れられなかった出荷結果と、その理由</text>
    <text x="60" y="348" font-weight="700">準拠先</text><text x="230" y="348">自己改訂規範アーキテクチャ v1・最小構成</text><text x="560" y="348" class="tx">改訂の承認と版を定めた文書。Core も従う</text>
  </g>
  <path d="M60,112 H820 M60,148 H820 M60,206 H820" class="lt"/><path d="M60,266 H820" class="ln"/>
</svg>
```

在庫と物流の例で欄を埋めた Contract です。相手の中の作り方には触れず、あいだの約束だけを書きます。下の 3 行が所有者・観測・準拠先です。

※ 欄の中身・所有者・観測・版の番号は、EAA 紹介 3 と第 10 章の、説明のための仮定。準拠先は仮定ではなく、Core「4. 提案と変更」が決めた文書。

## 埋まらない欄は、まだ合意していない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="440" height="260" rx="3" class="hl" style="fill:#fff"/>
  <g class="ts"><text x="60" y="84" font-weight="700">相互の責任</text><use href="#i-ok" x="430" y="68" width="22" height="22"/>
  <text x="60" y="144" font-weight="700">提供条件</text>
  <rect x="200" y="122" width="260" height="34" rx="3" fill="url(#hatch-x)"/><text x="330" y="144" class="xc" text-anchor="middle">休日の扱いが決まらない</text>
  <text x="60" y="204" font-weight="700">入出力</text><use href="#i-ok" x="430" y="188" width="22" height="22"/>
  <text x="60" y="264" font-weight="700">必要な Evidence</text><use href="#i-ok" x="430" y="248" width="22" height="22"/></g>
  <path d="M480,140 H556" class="ln" marker-end="url(#arr)"/>
  <rect x="560" y="80" width="280" height="130" rx="10" class="soft"/>
  <text x="700" y="120" class="ts" text-anchor="middle" font-weight="700">まだ合意していないこと</text>
  <text x="700" y="152" class="ts" text-anchor="middle">版 1 を出す前に、</text><text x="700" y="178" class="ts" text-anchor="middle">相手と決める</text>
</svg>
```

埋まらない欄があれば、それは両側でまだ合意していないことです。版を出して採用する前に、相手の Cell と決めます。

※ この読みは EAA 紹介 3 のもので、Core の規定ではない。休日の扱いは説明のための例。

## 中の作り方は書かない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="230" height="250" rx="10" class="box"/><text x="155" y="96" class="t" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="70" y="120" width="170" height="160" rx="6" fill="url(#hatch)"/><text x="155" y="206" class="ts sub" text-anchor="middle">中は揃えない</text>
  <path d="M270,185 H326" class="ln" marker-end="url(#arr)"/>
  <rect x="330" y="40" width="510" height="290" rx="6" class="hl" style="fill:#fff"/>
  <text x="360" y="74" class="ts hc" font-weight="700">どの Cell も最低限できること</text>
  <g class="t"><text x="380" y="118">Mission を受け取る</text><text x="380" y="160">Ontology と Contract を読む</text><text x="380" y="202">与えられた権限を越えない</text><text x="380" y="244" font-weight="700">Evidence を返す</text><text x="380" y="286">判断できない問題を示し、調整に戻せる</text></g>
  <g><use href="#i-ok" x="346" y="100" width="22" height="22"/><use href="#i-ok" x="346" y="142" width="22" height="22"/><use href="#i-ok" x="346" y="184" width="22" height="22"/><use href="#i-ok" x="346" y="226" width="22" height="22"/><use href="#i-ok" x="346" y="268" width="22" height="22"/></g>
</svg>
```

Contract に書くのは外とのつながり方で、中の作り方ではありません。在庫が Scrum で、物流が委託先の工程でも、絵のことができればつながれます。

出典: EAA Delivery Guide「3.」（適用例）、EAA Core 版 6「0.」（Federation は内部方式を指定しない）。

## 結ぶ Cell が全部採用して、成立する

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M120,300 H820" class="ln" marker-end="url(#arr)"/><text x="830" y="326" class="tx" text-anchor="end">時間</text>
  <text x="70" y="110" class="ts" text-anchor="middle" font-weight="700">在庫</text><text x="70" y="190" class="ts" text-anchor="middle" font-weight="700">物流</text>
  <rect x="300" y="86" width="520" height="40" rx="3" class="hl" style="fill:#fff"/><text x="560" y="112" class="ts hc" text-anchor="middle">版 1 を採用中</text>
  <rect x="500" y="166" width="320" height="40" rx="3" class="hl" style="fill:#fff"/><text x="660" y="192" class="ts hc" text-anchor="middle">版 1 を採用中</text>
  <path d="M300,60 V280" class="lt dash"/><text x="300" y="50" class="tx" text-anchor="middle">在庫が採用</text>
  <path d="M500,60 V280" class="ln"/><use href="#i-ok" x="488" y="228" width="24" height="24"/><text x="500" y="274" class="ts okc" text-anchor="middle">ここで成立</text>
  <text x="400" y="150" class="tx" text-anchor="middle">片側だけでは、まだ成り立たない</text>
</svg>
```

採用するかは各 Cell が決め、全部が同じ版を採用したときに、その版で成り立ちます。新しい版を片側だけが採用している間は、前の版が効き続けます。

出典: EAA Core 版 6「3. 意味と合意」。採用を決めるのは各 Cell の規範の所有者（同「4.」）。版の移り方は第 9 章で見る。

## 所有者は、結ぶ Cell の中の 1 人

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="260" height="210" rx="10" class="box"/><text x="170" y="86" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <rect x="580" y="50" width="260" height="210" rx="10" class="box"/><text x="710" y="86" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="630" y="110" width="160" height="56" rx="6" class="h"/><text x="710" y="134" class="ts on" text-anchor="middle">所有者</text><text x="710" y="156" class="tx on" text-anchor="middle" style="fill:#fff">窓口の責任者</text>
  <rect x="330" y="110" width="220" height="56" rx="3" class="hl" style="fill:#fff"/><text x="440" y="144" class="ts hc" text-anchor="middle">Contract</text>
  <path d="M300,138 H326 M554,138 H576" class="ln"/>
  <rect x="140" y="290" width="600" height="60" rx="10" class="soft"/>
  <text x="440" y="326" class="ts" text-anchor="middle">誰にするかは、作るときに、結ぶ Cell が合意して決める</text>
</svg>
```

Contract の所有者は、Contract を結ぶ Cell に属する人間 1 人です。誰にするかは、Contract を作るときに、それらの Cell が合意して決めます。

出典: EAA Core 版 6「4. 提案と変更」。※ 物流の窓口の責任者を所有者にしたのは EAA 紹介 3 の例。所有者が離れたときは第 10 章で見る。

## 所有者が片側でも、片側だけでは変わらない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="360" height="140" rx="10" class="box"/><text x="220" y="76" class="t" text-anchor="middle" font-weight="700">所有者が決められること</text>
  <text x="220" y="116" class="ts" text-anchor="middle">Contract の本文と版</text><text x="220" y="144" class="ts" text-anchor="middle">（改訂の承認）</text>
  <rect x="480" y="40" width="360" height="140" rx="10" class="box"/><text x="660" y="76" class="t" text-anchor="middle" font-weight="700">各 Cell が決めること</text>
  <text x="660" y="116" class="ts" text-anchor="middle">その版を採用するか</text>
  <path d="M400,110 H476" class="ln" marker-end="url(#arr)"/>
  <rect x="40" y="220" width="800" height="110" rx="10" class="soft"/>
  <text x="440" y="258" class="ts" text-anchor="middle">在庫が新しい版を採用しなければ、前の版のまま</text>
  <text x="440" y="292" class="t" text-anchor="middle" font-weight="700">片側の都合では、結合の形は動かない</text>
</svg>
```

所有者が決められるのは本文と版までで、版が相手を縛るのは、相手がその版を採用したときだけです。所有者の Cell の都合だけでは、取り決めは変わりません。

※ EAA 紹介 3 の読みで、Core の「3. 意味と合意」「4. 提案と変更」の行から導いたもの。Core が書いた理由ではない。

## Core はここまでしか決めていない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="380" height="290" rx="10" class="soft"/>
  <text x="60" y="64" class="t" font-weight="700">Core が決めていること</text>
  <g class="ts"><use href="#i-ok" x="60" y="88" width="22" height="22"/><text x="92" y="105">Contract に書く欄</text>
  <use href="#i-ok" x="60" y="128" width="22" height="22"/><text x="92" y="145">所有者・観測・準拠先を持つ</text>
  <use href="#i-ok" x="60" y="168" width="22" height="22"/><text x="92" y="185">全部が同じ版を採用して成立</text>
  <use href="#i-ok" x="60" y="208" width="22" height="22"/><text x="92" y="225">所有者は結ぶ Cell の中の 1 人</text></g>
  <rect x="460" y="30" width="380" height="290" rx="10" fill="url(#hatch)"/>
  <text x="480" y="64" class="t" font-weight="700">決めていないこと</text>
  <g class="ts"><text x="480" y="102" class="ts" font-weight="700">Core に書かれていない</text><text x="480" y="126" class="tx">既知の不足にも挙がっていない</text><text x="480" y="166" class="ts">商取引上の契約書との関係</text></g>
  <text x="440" y="356" class="ts sub" text-anchor="middle">結合を Contract に集めることは、この本の考えからの読み</text>
</svg>
```

欄・成立・所有者は Core が決めています。結合を Contract に集めるのはこの本の読みで、商取引上の契約書との関係は Core に書かれていません。

出典: EAA Core 版 6「3.」「4.」、冒頭の観測欄。契約主体をまたぐ責任と受入は EAA Profiles「6.」の Supplier の責務。

## 次章へ：仕事の渡し方

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="80" width="260" height="160" rx="10" class="box"/><text x="190" y="166" class="t" text-anchor="middle" font-weight="700">頼む Cell</text>
  <rect x="560" y="80" width="260" height="160" rx="10" class="box"/><text x="690" y="166" class="t" text-anchor="middle" font-weight="700">受ける Cell</text>
  <path d="M320,160 H556" class="ln" marker-end="url(#arr)"/><text x="440" y="150" class="ts" text-anchor="middle">一回の仕事</text>
  <text x="440" y="300" class="ts" text-anchor="middle">第 7 章</text>
</svg>
```

Contract は、変えるまで効き続ける取り決めです。第 7 章では、その上で一回ずつ頼む仕事を、受ける Cell が自分の文脈だけで進められる形で渡します。
