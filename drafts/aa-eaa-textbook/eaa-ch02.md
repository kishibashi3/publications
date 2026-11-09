# 第 2 章　Cell の境界

群: Cell の境界と責務
副題: Cell の境界は、コンテキストスイッチの無い範囲に引く

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（dd08b888）の第 2 章。着手: @ope-ultp1635 msg 83d1e0ea（群二）。
2d0ca30 までの第 2 章（Cell は判断の責任と権限で数え、作り方では数えない）から、この章に持ってきたもの: Cell の定義（core.md:28）、Agent に配っても Cell は増えない（core.md:35・52）、渡す先は責任主体で人に限らない・責任を複数の人で負ってよい（core.md:42・52。@reviewer 2-1 の直しのまま）、中の作り方は Cell ごとに選ぶ（core.md:18・29）。持ってこなかったもの: Delivery Guide の Local Delivery Model の表・揃えるのは外とのつながり方（群三の第 6 章で Contract と一緒に扱う）。旧本文は 2d0ca30 の eaa-ch02.md にある。
目次の「この単位を Cell と呼ぶ」は「この範囲の境界を Cell の境界にする」に変えた。Cell の名前は第 0 章 p.「AA と Cell」で付けている。目次では第 0 章の題で Cell が先に出て、@reader の読者が止まった（@reader 349c4d63）。第 0 章の題は「一つの開発単位」に直した。この章は名前を付ける章ではなく、Cell の境界をどこに引くかを決める章にした。
判定（コンテキストスイッチが起きないか）は Core に無い。core.md:52 は分割を定義するだけで、どこで分けるかを書かない（@reviewer 2-2、第 0 章 p.「切り方は、Core の外の提案」と同じ所）。p.「判定は一つ」の注に書いた。
「文脈」の中身（判断に使う語と記録・優先する価値・判断の権限）は第 0 章 p.「答え：文脈を疎結合に分ける」の注と同じ字。
p.「人のチームにも同じ判定」は書き手の読み。structure-v5.md「イデア」第 2 文は「主体」の語で書いていて、主体を Agent に限っていない。
p.「中は人のチームでもよい」は、目次の通読で @reader の読者（Agent を入れていない会社が読む本か）が止まったことへの答えを、この章の中身として置いた。core.md:18 の字による。
絵の Cell の枠は入れ子にしない（core.md:43）。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff。判定の正本 @reviewer 2026-11-08-eaa-textbook-77a7fc9-ch00-04 / ch05-08 / ch09-12-furoku、@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）: 「主体」の単位が 4 通り（第 2 章 Agent 側は Cell、人側は担当者一人、第 5・11 章は Cell、第 11 章はチーム・ART）に分かれていた。p.「主体は、判断する Agent と人」を足し、主体は判断する Agent・人、判定は一人ずつ、全員が済む範囲を一つの Cell にする、と定めた。第 5 章の「主体」（Cell のこと）は本文の字のまま読めることを確かめた。第 11 章の絵は「チーム・ART の中で、人が」に直した。p.「職能では決まらない」の注を core.md:107「必要な職務分離」の強さに戻した。p.「人のチームにも同じ判定」の注に、core.md:18 が支える範囲と、人の職能はチームの中に残る（第 1 章）を書いた（判定の文脈に職能が無いことと第 1 章の関係）。
v6 で畳んだ（構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v6.md 87be3308。本文 GO: @ope-ultp1635 msg 8c181d1b、kishibashi3「うん」）: 価値・ドメイン・権限は切る軸の例なので、いまの第 3〜5 章を章にせず、この章に「例：」のページを 1 本ずつ置いた。持ってきたもの: 第 3 章 p.「同じ問いで答えが逆になる」「優先が同じ仕事を集める」と value stream の注（p.「価値は何を優先するか」）→ p.「例：価値で切る」。第 4 章 p.「ドメインは扱う対象の範囲」「同じ語が違う意味になる」「境界で切ると語が閉じる」→ p.「例：ドメインで切る」。第 5 章 p.「問い合わせも切り替え」→ p.「例：権限で切る」。第 3 章 p.「価値だけでは混ざる」「サービスの数とは揃わない」と第 4 章 p.「数から決めない」→ p.「軸は重ねて使い、数からは決めない」。第 5 章 p.「責任者が追える大きさ」はそのまま（第 0 章の「追い切れない」への答え）。
この章で畳んだもの: p.「主体は、判断する Agent と人」は p.「文脈は語・価値・権限」の注へ。p.「職能では決まらない」「Agent の数では増えない」は 1 ページに。
この章から出したもの: p.「増えるのは判断を渡すとき」は第 3 章 Profile の p.「分割は、責務と判断権限を渡すこと」へ、p.「中は人のチームでもよい」は第 4 章の p.「Federation は中の方式を指定しない」へ（v6 の 2・3 便目で書く）。旧本文は 62b9aa0 の eaa-ch02〜05.md にある。
副題: v6 の案「価値・ドメイン・権限のどれで切っても、主体の中でコンテキストスイッチが起きない範囲を Cell にする」は 49 字で、build の上限 30 字を超える。軸の例と判定の両方を残す 30 字にした。「例」の字は目次のページの題（例：価値で切る 等）に持たせる。
章番号: この章の本文・注・絵は v6 の章番号で書いた（第 3 章 Profile、第 4 章 Constitution と Federation、第 5 章 Contract、第 7 章 Evidence と Ontology、第 10 章 Cell の分け直し）。3 便目の章番号の直しで、この章はずらさない。
「出荷日」・決済・推薦・請求・検索の例は書き手が作った（注に書いた）。
082ceb2 の検算 3 便目を受けて直した（@ope-ultp1635 msg 468b4a37、判定の正本 @reviewer 2026-11-09-eaa-textbook-082ceb2-ch04-constitution-federation 97306492）: 副題を「Cell の境界は、コンテキストスイッチの無い範囲に引く」にした。前の副題は価値・ドメイン・権限を手段として言い切り、本文の「軸の例」と食い違っていた（@reader の指摘）。軸はページの題（例：）に任せ、副題は判定だけにした。上の「副題:」の記録はそのときのまま。「主体」の単位: p.「一つのループは通らない」の主語をループから「ループを回す Agent」に、p.「軸は重ねて使い、数からは決めない」の「語と記録が違えば」を「中の主体が切り替えるなら」に（主体は Agent や人、文の上限 80 字に収めた）、p.「人のチームにも同じ判定」を「チームの人が」にした（判定は一人ずつ、p.「文脈は語・価値・権限」の注）。
v7 で畳んだ（構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v7.md 863f5176。本文 GO: @ope-ultp1635 msg d9ab1757、kishibashi3「うん」）: 13 → 6 ページ。p.「判定は一つ」に p.「文脈は語・価値・権限」（文脈の定義を本文、主体の注はそのまま）p.「一つのループは通らない」（絵の下の段）。p.「例：価値で切る」「例：ドメインで切る」「例：権限で切る」を p.「切る軸：価値・ドメイン・権限」の 1 枚に 3 列（題から「例：」を外した）。p.「職能でも Agent の数でも決まらない」に p.「境界を Cell の境界にする」p.「人のチームにも同じ判定」。v7 の題「職能でも Agent の数でも、中の作り方でも決まらない」は 26 字で見出しの上限 20 字を超えるので、題はいまのままにし、中の作り方は本文と絵で言う。落とした: p.「次章へ：責務を Profile に書く」。落とした字と行き先: writer-ja/drafts/eaa-toc/fold-v7-ledger.md。
章番号: v7 の章番号（第 6 章 Evidence と Ontology）で書いた。
-->

```svg
<svg viewBox="0 0 880 340" width="880" height="340">
  <text x="200" y="30" class="t" text-anchor="middle" font-weight="700">一つの主体が切り替える</text>
  <rect x="40" y="50" width="320" height="220" rx="10" class="box"/>
  <rect x="140" y="130" width="120" height="44" rx="22" class="a"/><text x="200" y="158" class="ts on" text-anchor="middle">主体</text>
  <g class="tx" text-anchor="middle">
    <rect x="60" y="70" width="90" height="30" rx="4" class="xl" style="fill:#fff"/><text x="105" y="90">文脈 A</text>
    <rect x="250" y="70" width="90" height="30" rx="4" class="xl" style="fill:#fff"/><text x="295" y="90">文脈 B</text>
    <rect x="155" y="220" width="90" height="30" rx="4" class="xl" style="fill:#fff"/><text x="200" y="240">文脈 C</text>
  </g>
  <use href="#i-no" x="320" y="230" width="26" height="26"/>
  <path d="M390,160 H440" class="ln" marker-end="url(#arr)"/>
  <text x="665" y="30" class="t hc" text-anchor="middle" font-weight="700">切り替えずに済む範囲で切る</text>
  <g>
    <rect x="460" y="50" width="120" height="220" rx="10" class="hl" style="fill:#fff"/><text x="520" y="90" class="ts" text-anchor="middle" font-weight="700">Cell</text><rect x="480" y="130" width="80" height="30" rx="4" class="soft"/><text x="520" y="150" class="tx" text-anchor="middle">文脈 A</text>
    <rect x="605" y="50" width="120" height="220" rx="10" class="hl" style="fill:#fff"/><text x="665" y="90" class="ts" text-anchor="middle" font-weight="700">Cell</text><rect x="625" y="130" width="80" height="30" rx="4" class="soft"/><text x="665" y="150" class="tx" text-anchor="middle">文脈 B</text>
    <rect x="750" y="50" width="120" height="220" rx="10" class="hl" style="fill:#fff"/><text x="810" y="90" class="ts" text-anchor="middle" font-weight="700">Cell</text><rect x="770" y="130" width="80" height="30" rx="4" class="soft"/><text x="810" y="150" class="tx" text-anchor="middle">文脈 C</text>
  </g>
  <text x="665" y="306" class="ts sub" text-anchor="middle">価値・ドメイン・権限は、この範囲を見つける軸の例</text>
</svg>
```

分ける単位は、一つの主体が自分の仕事を進めるあいだに、別の文脈へ切り替えずに済む範囲にします。価値・ドメイン・権限は、その範囲を見つける軸の例です。どの軸で切っても判定は一つで、通った範囲の境界を Cell の境界にします。

## 判定は一つ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="20" width="800" height="96" rx="10" class="hl" style="fill:#fff"/>
  <text x="440" y="56" class="t hc" text-anchor="middle" font-weight="700">切り方の判定</text>
  <text x="440" y="94" class="t" text-anchor="middle">その主体は、自分の仕事を進めるあいだに、別の文脈へ切り替えずに済むか</text>
  <rect x="40" y="136" width="380" height="160" rx="10" class="box"/>
  <text x="230" y="166" class="ts" text-anchor="middle" font-weight="700">主体が判断に使う文脈</text>
  <g class="tx" text-anchor="middle">
    <rect x="70" y="180" width="320" height="30" rx="4" class="soft"/><text x="230" y="200">語と記録</text>
    <rect x="70" y="216" width="320" height="30" rx="4" class="soft"/><text x="230" y="236">優先する価値</text>
    <rect x="70" y="252" width="320" height="30" rx="4" class="soft"/><text x="230" y="272">判断の権限</text>
  </g>
  <rect x="460" y="136" width="380" height="160" rx="10" class="xl" style="fill:#fff"/>
  <text x="650" y="166" class="ts xc" text-anchor="middle" font-weight="700">通らない例：第 0 章のループを回す Agent</text>
  <g class="tx" text-anchor="middle">
    <rect x="480" y="190" width="160" height="32" rx="4" class="soft"/><text x="560" y="211">決済：止めない</text>
    <rect x="660" y="190" width="160" height="32" rx="4" class="soft"/><text x="740" y="211">推薦：速く変える</text>
  </g>
  <text x="650" y="252" class="tx xc" text-anchor="middle">ループを回す Agent が判断のたびに切り替える</text>
  <use href="#i-no" x="638" y="262" width="24" height="24"/>
  <g class="ts"><use href="#i-ok" x="200" y="318" width="24" height="24"/><text x="232" y="336">済む → その範囲で切る</text>
  <use href="#i-no" x="480" y="318" width="24" height="24"/><text x="512" y="336">済まない → まだ切る</text></g>
</svg>
```

判定は一つです。主体が仕事を進めるあいだに、別の文脈へ切り替えずに済むか。文脈は判断に使う語と記録・価値・権限で、その組が替わるのがコンテキストスイッチです。

※ 主体は、仕事を進めながら判断する Agent や人。判定は一人ずつに当て、中の全員が済む範囲を一つの Cell にする（書き手の読み）。Core の規定ではない（第 0 章）。

## 切る軸：価値・ドメイン・権限

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="t" text-anchor="middle" font-weight="700"><text x="150" y="30" class="hc">価値</text><text x="440" y="30" class="hc">ドメイン</text><text x="730" y="30" class="hc">権限</text></g>
  <g class="tx" text-anchor="middle"><text x="150" y="52">何を優先するか</text><text x="440" y="52">何を扱うか</text><text x="730" y="52">何を決められるか</text></g>
  <rect x="20" y="64" width="260" height="250" rx="10" class="box"/>
  <text x="150" y="92" class="ts" text-anchor="middle">障害の日に、変更を出すか</text>
  <rect x="36" y="110" width="228" height="80" rx="8" class="hl" style="fill:#fff"/>
  <text x="150" y="138" class="ts hc" text-anchor="middle">止めない：決済・請求</text>
  <use href="#i-no" x="96" y="154" width="22" height="22"/><text x="126" y="171" class="ts">見送る</text>
  <rect x="36" y="206" width="228" height="80" rx="8" class="hl" style="fill:#fff"/>
  <text x="150" y="234" class="ts hc" text-anchor="middle">速く変える：推薦・検索</text>
  <use href="#i-ok" x="106" y="250" width="22" height="22"/><text x="136" y="267" class="ts">出す</text>
  <rect x="310" y="64" width="260" height="250" rx="10" class="box"/>
  <text x="440" y="92" class="ts xc" text-anchor="middle">「出荷日」</text>
  <rect x="326" y="110" width="228" height="80" rx="8" class="hl" style="fill:#fff"/>
  <text x="440" y="138" class="ts hc" text-anchor="middle">在庫の Cell</text><text x="440" y="168" class="tx" text-anchor="middle">引当を確定した日</text>
  <rect x="326" y="206" width="228" height="80" rx="8" class="hl" style="fill:#fff"/>
  <text x="440" y="234" class="ts hc" text-anchor="middle">物流の Cell</text><text x="440" y="264" class="tx" text-anchor="middle">便に積んだ日</text>
  <rect x="600" y="64" width="260" height="250" rx="10" class="box"/>
  <text x="730" y="92" class="ts" text-anchor="middle">決めてよいかを</text>
  <rect x="616" y="110" width="228" height="80" rx="8" class="xl" style="fill:#fff"/>
  <text x="730" y="138" class="ts xc" text-anchor="middle">判断のたびに問い合わせる</text>
  <use href="#i-no" x="660" y="154" width="22" height="22"/><text x="690" y="171" class="tx">相手の事情を読んで戻る</text>
  <rect x="616" y="206" width="228" height="80" rx="8" class="hl" style="fill:#fff"/>
  <text x="730" y="234" class="ts hc" text-anchor="middle">判断の権限ごと渡す</text>
  <use href="#i-ok" x="660" y="250" width="22" height="22"/><text x="690" y="267" class="tx">自分の範囲は自分で</text>
  <text x="440" y="352" class="ts sub" text-anchor="middle">どれも、主体の中で切り替えずに済む範囲を見つける例</text>
</svg>
```

価値で切ると、障害の日に決済は変更を見送り、推薦は出せます。ドメインで切ると「出荷日」の意味が切り替わらず、権限ごと渡すと問い合わせという切り替えが消えます。

※ 価値は判断が割れたときに何を優先するかで、SAFe の value stream とは別の語。境界で読む Ontology は第 6 章、権限を渡す分割は第 3 章。例と権限の読みは書き手による。

## 軸は重ねて使い、数からは決めない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="360" height="230" rx="10" class="box"/>
  <text x="220" y="74" class="ts" text-anchor="middle" font-weight="700">止めないことを優先する Cell</text>
  <g class="ts" text-anchor="middle">
    <rect x="70" y="110" width="130" height="80" rx="6" class="soft"/><text x="135" y="146">在庫</text><text x="135" y="172" class="tx">在庫の語と記録</text>
    <rect x="240" y="110" width="130" height="80" rx="6" class="soft"/><text x="305" y="146">物流</text><text x="305" y="172" class="tx">物流の語と記録</text>
  </g>
  <path d="M200,150 H238" class="xl" marker-end="url(#arr-x)"/>
  <text x="220" y="236" class="ts xc" text-anchor="middle">価値は一つでも、語と記録を切り替える</text>
  <path d="M410,155 H460" class="ln" marker-end="url(#arr)"/>
  <rect x="470" y="40" width="180" height="230" rx="10" class="hl" style="fill:#fff"/><text x="560" y="74" class="ts hc" text-anchor="middle" font-weight="700">在庫の Cell</text><text x="560" y="156" class="tx" text-anchor="middle">止めない</text>
  <rect x="670" y="40" width="180" height="230" rx="10" class="hl" style="fill:#fff"/><text x="760" y="74" class="ts hc" text-anchor="middle" font-weight="700">物流の Cell</text><text x="760" y="156" class="tx" text-anchor="middle">止めない</text>
  <text x="440" y="330" class="t" text-anchor="middle" font-weight="700">Cell の数は、軸の数でもサービスの数でもなく判定で決まる</text>
</svg>
```

価値で切っても、中の主体が在庫と物流の語と記録を切り替えるなら、ドメインでも切ります。Cell の数は、軸の数でもサービスの数でもなく判定で決めます。

※ 語と記録が混ざらないなら、一つの Cell が複数の責務を担ってよい（Core「1.」）。Working Notes「2.」も、Profile 数やサービス数から組織の数を決めない。

## 責任者が追える大きさ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="380" height="240" rx="10" class="box"/>
  <rect x="190" y="70" width="80" height="40" rx="6" class="h"/><text x="230" y="96" class="ts on" text-anchor="middle">責任者</text>
  <g class="tx" text-anchor="middle" opacity=".8"><text x="100" y="160">判断</text><text x="170" y="150">判断</text><text x="240" y="170">判断</text><text x="310" y="150">判断</text><text x="370" y="170">判断</text><text x="120" y="220">判断</text><text x="200" y="240">判断</text><text x="280" y="220">判断</text><text x="360" y="240">判断</text></g>
  <use href="#i-no" x="380" y="70" width="24" height="24"/><text x="230" y="276" class="ts xc" text-anchor="middle">追い切れない</text>
  <path d="M430,170 H470" class="ln" marker-end="url(#arr)"/>
  <rect x="480" y="50" width="170" height="240" rx="10" class="hl" style="fill:#fff"/><rect x="525" y="70" width="80" height="40" rx="6" class="h"/><text x="565" y="96" class="ts on" text-anchor="middle">責任者</text><g class="tx" text-anchor="middle"><text x="565" y="170">判断</text><text x="565" y="210">判断</text></g>
  <rect x="670" y="50" width="170" height="240" rx="10" class="hl" style="fill:#fff"/><rect x="715" y="70" width="80" height="40" rx="6" class="h"/><text x="755" y="96" class="ts on" text-anchor="middle">責任者</text><g class="tx" text-anchor="middle"><text x="755" y="170">判断</text><text x="755" y="210">判断</text></g>
  <text x="440" y="340" class="t" text-anchor="middle" font-weight="700">追えないなら、文脈の境界で権限を渡して分ける</text>
</svg>
```

Cell の範囲は、判断の責任者が中の判断を追える大きさに収めます。追えないとき、文脈で切れる所があれば分け、無ければ責務ごとに責任者を置きます。

※ 第 0 章の問いから書き手が導いた。Core は大きさを書かず、正当な判断責任者を責務（Profile）ごとに明らかにするとする（「1.」。第 3 章）。

## 職能でも Agent の数でも決まらない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="40" width="500" height="230" rx="10" class="hl" style="fill:#fff"/>
  <text x="280" y="74" class="t hc" text-anchor="middle" font-weight="700">一つの Cell（文脈は一つ）</text>
  <g class="tx" text-anchor="middle">
    <rect x="50" y="96" width="100" height="36" rx="6" class="soft"/><text x="100" y="119">設計</text>
    <rect x="165" y="96" width="100" height="36" rx="6" class="soft"/><text x="215" y="119">実装</text>
    <rect x="280" y="96" width="100" height="36" rx="6" class="soft"/><text x="330" y="119">テスト</text>
    <rect x="395" y="96" width="115" height="36" rx="6" class="soft"/><text x="452" y="119">レビュー</text>
    <rect x="50" y="150" width="100" height="34" rx="17" class="a"/><text x="100" y="172" class="on">Agent</text>
    <rect x="165" y="150" width="100" height="34" rx="17" class="a"/><text x="215" y="172" class="on">Agent</text>
    <rect x="280" y="150" width="100" height="34" rx="17" class="a"/><text x="330" y="172" class="on">Agent</text>
    <rect x="395" y="150" width="115" height="34" rx="17" class="a"/><text x="452" y="172" class="on">Agent</text>
  </g>
  <text x="280" y="232" class="ts" text-anchor="middle">どの職能の作業も、何体の Agent も、この中</text>
  <rect x="560" y="40" width="290" height="230" rx="10" class="box"/>
  <text x="705" y="74" class="t" text-anchor="middle" font-weight="700">人のチーム</text>
  <rect x="655" y="92" width="100" height="40" rx="6" class="h"/><text x="705" y="118" class="ts on" text-anchor="middle">担当者</text>
  <g class="tx" text-anchor="middle">
    <rect x="575" y="152" width="125" height="32" rx="4" class="xl" style="fill:#fff"/><text x="637" y="173">止めない仕事</text>
    <rect x="710" y="152" width="125" height="32" rx="4" class="xl" style="fill:#fff"/><text x="772" y="173">速く変える仕事</text>
  </g>
  <use href="#i-no" x="693" y="198" width="24" height="24"/>
  <text x="705" y="248" class="tx" text-anchor="middle">主体が人でも、判定は同じ</text>
  <text x="440" y="316" class="t" text-anchor="middle" font-weight="700">文脈が切り替わる所に、Cell の境界を引く</text>
  <text x="440" y="352" class="ts sub" text-anchor="middle">Cell は目的・責任・権限・実行能力で決まる。中の作り方は問わない</text>
</svg>
```

判定に通る範囲の境界を、Cell の境界にします。Agent をいくつ置いても文脈が一つなら Cell は一つで、中が人のチームでも同じ判定に通します。

※ 境界の位置と、中が人のチームでも同じ判定を当てるのは、この本の読み。Core が支えるのは中が人でもつながれることまで（第 4 章）。確かめの切り離しは職務分離（第 1 章）。
