# 第 2 章　Cell の境界

群: 文脈が疎結合になる切り方
副題: 分ける単位は、コンテキストスイッチが起きない範囲にする

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
  <text x="665" y="306" class="ts sub" text-anchor="middle">中に Agent がいくついても、文脈が一つなら Cell は一つ</text>
</svg>
```

分ける単位は、一つの主体が自分の仕事を進めるあいだに、別の文脈へ切り替えずに済む範囲にします。その範囲の境界を、Cell の境界にします。中に Agent をいくつ置いても、文脈が一つなら Cell は一つです。

## 判定は一つ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="120" y="60" width="640" height="200" rx="10" class="hl" style="fill:#fff"/>
  <text x="440" y="110" class="t hc" text-anchor="middle" font-weight="700">切り方の判定</text>
  <text x="440" y="160" class="t" text-anchor="middle">その主体は、自分の仕事を進めるあいだに</text>
  <text x="440" y="196" class="t" text-anchor="middle">別の文脈へ切り替えずに済むか</text>
  <g class="ts"><use href="#i-ok" x="250" y="292" width="24" height="24"/><text x="282" y="310">済む → その範囲で切る</text>
  <use href="#i-no" x="500" y="292" width="24" height="24"/><text x="532" y="310">済まない → まだ切る</text></g>
</svg>
```

切り方の判定は一つです。その主体が、自分の仕事を進めるあいだに、別の文脈へ切り替えずに済むか。済むなら、その範囲で切ります。

※ この本の切り方（主体の中でコンテキストスイッチが起きないように切る）による。Core の規定ではない（第 0 章）。

## 主体は、判断する Agent と人

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="160" y="50" width="560" height="230" rx="10" class="hl" style="fill:#fff"/>
  <text x="440" y="86" class="t hc" text-anchor="middle" font-weight="700">一つの Cell</text>
  <g class="ts" text-anchor="middle">
    <rect x="200" y="130" width="130" height="44" rx="22" class="a"/><text x="265" y="158" class="on">Agent</text>
    <rect x="375" y="130" width="130" height="44" rx="22" class="a"/><text x="440" y="158" class="on">Agent</text>
    <rect x="550" y="130" width="130" height="44" rx="6" class="h"/><text x="615" y="158" class="on">人</text>
  </g>
  <use href="#i-ok" x="253" y="196" width="24" height="24"/><use href="#i-ok" x="428" y="196" width="24" height="24"/><use href="#i-ok" x="603" y="196" width="24" height="24"/>
  <text x="440" y="252" class="tx" text-anchor="middle">一人ずつ、切り替えずに済むか</text>
  <text x="440" y="336" class="t" text-anchor="middle" font-weight="700">全員が済む範囲を、一つの Cell にする</text>
</svg>
```

主体は、仕事を進めながら判断する Agent や人です。判定は一人ずつに当て、中の全員が切り替えずに済む範囲を、一つの Cell にします。

※ 書き手の読み。Cell は主体の数ではなく、文脈の数で決まる。一人が切り替え始めたら、その Cell の範囲を見直す（第 11 章）。

## 文脈は語・価値・権限

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="50" width="340" height="230" rx="10" class="box"/>
  <text x="230" y="84" class="t" text-anchor="middle" font-weight="700">主体が判断に使う文脈</text>
  <g class="ts" text-anchor="middle">
    <rect x="90" y="110" width="280" height="40" rx="4" class="soft"/><text x="230" y="136">語と記録</text>
    <rect x="90" y="160" width="280" height="40" rx="4" class="soft"/><text x="230" y="186">優先する価値</text>
    <rect x="90" y="210" width="280" height="40" rx="4" class="soft"/><text x="230" y="236">判断の権限</text>
  </g>
  <path d="M410,165 H470" class="xl" marker-end="url(#arr-x)"/>
  <rect x="480" y="50" width="340" height="230" rx="10" class="xl" style="fill:#fff"/>
  <text x="650" y="84" class="t xc" text-anchor="middle" font-weight="700">別の組に替わる</text>
  <text x="650" y="170" class="ts" text-anchor="middle">判断の途中で、語・価値・権限の組が</text>
  <text x="650" y="196" class="ts" text-anchor="middle">別の仕事のものに入れ替わる</text>
  <text x="440" y="336" class="t" text-anchor="middle" font-weight="700">これをコンテキストスイッチと呼ぶ</text>
</svg>
```

文脈は、その主体が判断に使う語と記録、優先する価値、判断の権限を指します。判断の途中でこの組が別の仕事のものに替わることを、コンテキストスイッチと呼びます。

## 一つのループは通らない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="200" y="40" width="480" height="250" rx="10" class="box"/>
  <text x="440" y="74" class="t" text-anchor="middle" font-weight="700">一つのループ（第 0 章）</text>
  <circle cx="440" cy="180" r="70" class="ln" stroke-dasharray="6 5"/>
  <g class="ts" text-anchor="middle">
    <rect x="240" y="150" width="110" height="36" rx="4" class="xl" style="fill:#fff"/><text x="295" y="174">決済：止めない</text>
    <rect x="530" y="150" width="120" height="36" rx="4" class="xl" style="fill:#fff"/><text x="590" y="174">推薦：速く変える</text>
  </g>
  <text x="440" y="186" class="tx xc" text-anchor="middle">判断のたびに切り替える</text>
  <use href="#i-no" x="428" y="300" width="24" height="24"/>
  <text x="440" y="352" class="ts xc" text-anchor="middle">判定に通らない</text>
</svg>
```

第 0 章の、一つのループが決済と推薦を扱い、判断のたびに止めないことと速く変えることを切り替える状態は、この判定に通りません。

## 境界を Cell の境界にする

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="80" y="60" width="300" height="220" rx="10" class="hl" style="fill:#fff"/>
  <text x="230" y="96" class="t hc" text-anchor="middle" font-weight="700">Cell</text>
  <g class="tx" text-anchor="middle"><text x="230" y="140">目的</text><text x="230" y="168">責任</text><text x="230" y="196">権限</text><text x="230" y="224">実行能力</text></g>
  <rect x="500" y="60" width="300" height="220" rx="10" class="hl" style="fill:#fff"/>
  <text x="650" y="96" class="t hc" text-anchor="middle" font-weight="700">Cell</text>
  <g class="tx" text-anchor="middle"><text x="650" y="140">目的</text><text x="650" y="168">責任</text><text x="650" y="196">権限</text><text x="650" y="224">実行能力</text></g>
  <path d="M440,40 V300" class="xl dash"/>
  <text x="440" y="336" class="t" text-anchor="middle" font-weight="700">文脈が切り替わる所に、Cell の境界を引く</text>
</svg>
```

判定に通る範囲の境界を、Cell の境界にします。Cell は第 0 章で見た、目的に対する責任・権限・実行能力を持つ単位です。

出典: EAA Core 版 6 の概念表「Cell」。Core は Cell を定めるが、どこを境界にするかは書いていない。

## 職能では決まらない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="220" y="50" width="440" height="230" rx="10" class="hl" style="fill:#fff"/>
  <text x="440" y="86" class="t hc" text-anchor="middle" font-weight="700">一つの Cell</text>
  <g class="ts" text-anchor="middle">
    <rect x="250" y="130" width="80" height="40" rx="6" class="soft"/><text x="290" y="156">設計</text>
    <rect x="345" y="130" width="80" height="40" rx="6" class="soft"/><text x="385" y="156">実装</text>
    <rect x="440" y="130" width="80" height="40" rx="6" class="soft"/><text x="480" y="156">テスト</text>
    <rect x="535" y="130" width="100" height="40" rx="6" class="soft"/><text x="585" y="156">レビュー</text>
  </g>
  <text x="440" y="230" class="ts" text-anchor="middle">どの職能の作業も、この中で行う</text>
  <text x="440" y="336" class="t" text-anchor="middle" font-weight="700">境界は目的・責任・権限・実行能力で決まる</text>
</svg>
```

Cell は目的・責任・権限・実行能力で決まり、職能では決まりません。一つの Cell の中で、設計も実装もテストもレビューも行います。

※ 確かめを作った文脈から切り離すのは、職能の分業ではなく職務分離（第 1 章）。Core は、必要な職務分離を保つことを求める。

## Agent の数では増えない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="200" y="50" width="480" height="230" rx="10" class="hl" style="fill:#fff"/>
  <text x="440" y="86" class="t hc" text-anchor="middle" font-weight="700">一つの Cell（文脈は一つ）</text>
  <g class="tx" text-anchor="middle">
    <rect x="240" y="130" width="90" height="36" rx="18" class="a"/><text x="285" y="153" class="on">Agent</text>
    <rect x="345" y="130" width="90" height="36" rx="18" class="a"/><text x="390" y="153" class="on">Agent</text>
    <rect x="450" y="130" width="90" height="36" rx="18" class="a"/><text x="495" y="153" class="on">Agent</text>
    <rect x="555" y="130" width="90" height="36" rx="18" class="a"/><text x="600" y="153" class="on">Agent</text>
  </g>
  <text x="440" y="226" class="ts" text-anchor="middle">Task をどう配るかは、この Cell が決める</text>
  <text x="440" y="336" class="t" text-anchor="middle" font-weight="700">Agent を足しても、Cell は一つのまま</text>
</svg>
```

中に Agent をいくつ置いても、文脈が一つなら Cell は一つです。Task を何体の Agent に配っても、Cell は増えません。

出典: EAA Core 版 6 の概念表「Task」（Mission を引き受けた Cell が分けた作業の単位。分け方はその Cell が決める）。

## 増えるのは判断を渡すとき

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="80" width="300" height="180" rx="10" class="hl" style="fill:#fff"/>
  <text x="210" y="120" class="t hc" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="520" y="80" width="300" height="180" rx="10" class="hl" style="fill:#fff"/>
  <text x="670" y="120" class="t hc" text-anchor="middle" font-weight="700">Cell</text>
  <path d="M370,170 H510" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="150" class="ts" text-anchor="middle">責務と判断の権限</text>
  <g class="tx" text-anchor="middle"><text x="670" y="180">受け取った側が</text><text x="670" y="204">自分で判断する</text></g>
  <text x="440" y="330" class="ts sub" text-anchor="middle">渡す先は責任主体。人に限らない</text>
</svg>
```

Cell が増えるのは、責務と自分で判断する権限を、別の責任主体に渡したときです。権限で分けることは第 5 章で見ます。

出典: EAA Core 版 6「1. 責務と分割」。一つの Cell の責任を複数の人で負ってもかまわない（同 概念表「Cell に属する」）。

## 中は人のチームでもよい

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g>
    <rect x="40" y="60" width="240" height="200" rx="10" class="hl" style="fill:#fff"/><text x="160" y="96" class="ts hc" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="90" y="140" width="140" height="40" rx="20" class="a"/><text x="160" y="166" class="ts on" text-anchor="middle">Agent（AA）</text>
    <rect x="320" y="60" width="240" height="200" rx="10" class="hl" style="fill:#fff"/><text x="440" y="96" class="ts hc" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="370" y="140" width="140" height="40" rx="6" class="h"/><text x="440" y="166" class="ts on" text-anchor="middle">人のチーム</text>
    <rect x="600" y="60" width="240" height="200" rx="10" class="hl" style="fill:#fff"/><text x="720" y="96" class="ts hc" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="640" y="140" width="160" height="40" rx="6" class="soft"/><text x="720" y="166" class="ts" text-anchor="middle">委託先の工程</text>
  </g>
  <path d="M280,220 H320 M560,220 H600" class="ln"/>
  <text x="440" y="320" class="t" text-anchor="middle" font-weight="700">中の作り方は問わず、同じ形でつながる</text>
</svg>
```

Cell の中の作り方は、Cell ごとに選びます。中が Agent でも、人のチームでも、委託先の従来の工程でも、Cell としてつながれます。

出典: EAA Core 版 6「0. 目的と範囲」（Federation は内部方式を指定せず、AA 以外の開発主体も接続できる）。

## 人のチームにも同じ判定

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="220" y="50" width="440" height="230" rx="10" class="box"/>
  <text x="440" y="86" class="t" text-anchor="middle" font-weight="700">人のチーム</text>
  <rect x="380" y="120" width="120" height="44" rx="6" class="h"/><text x="440" y="148" class="ts on" text-anchor="middle">担当者</text>
  <g class="tx" text-anchor="middle">
    <rect x="250" y="200" width="150" height="32" rx="4" class="xl" style="fill:#fff"/><text x="325" y="221">止めない仕事</text>
    <rect x="480" y="200" width="150" height="32" rx="4" class="xl" style="fill:#fff"/><text x="555" y="221">速く変える仕事</text>
  </g>
  <text x="440" y="336" class="t" text-anchor="middle" font-weight="700">主体が人でも、判定は同じ</text>
</svg>
```

判定は、中の作り方を問いません。人のチームでも、判断のたびに優先する価値を切り替えているなら、同じ判定に通りません。

※ 書き手の読み。Core が支えるのは、中が人のチームでもつながれることまで。人の職能はチームの中に残してよく（第 1 章）、境界はこの判定で引く。

## 次章へ：価値で切る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g>
    <rect x="80" y="70" width="220" height="160" rx="10" class="hl" style="fill:#fff"/><text x="190" y="140" class="t hc" text-anchor="middle" font-weight="700">価値</text><text x="190" y="180" class="ts" text-anchor="middle">第 3 章</text>
    <rect x="330" y="70" width="220" height="160" rx="10" class="box"/><text x="440" y="140" class="t" text-anchor="middle" font-weight="700">ドメイン</text><text x="440" y="180" class="ts" text-anchor="middle">第 4 章</text>
    <rect x="580" y="70" width="220" height="160" rx="10" class="box"/><text x="690" y="140" class="t" text-anchor="middle" font-weight="700">権限</text><text x="690" y="180" class="ts" text-anchor="middle">第 5 章</text>
  </g>
  <text x="440" y="300" class="ts sub" text-anchor="middle">どの切り方も、この章の判定に通す</text>
</svg>
```

第 3〜5 章で、この判定に通る切り方を、価値・ドメイン・権限の順に見ます。最初は、第 0 章の問いに直接つながる価値です。
