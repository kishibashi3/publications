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

※ 主体は、仕事を進めながら判断する Agent や人。判定は一人ずつに当て、中の全員が切り替えずに済む範囲を一つの Cell にする。書き手の読み。

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

第 0 章の、一つのループを回す Agent が決済と推薦を扱い、判断のたびに止めないことと速く変えることを切り替える状態は、この判定に通りません。

## 例：価値で切る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="180" y="20" width="520" height="60" rx="10" class="box"/>
  <text x="440" y="57" class="t" text-anchor="middle" font-weight="700">障害が出た日に、予定の変更を出すか</text>
  <path d="M330,84 L240,120 M550,84 L640,120" class="ln" marker-end="url(#arr)"/>
  <rect x="60" y="126" width="360" height="190" rx="10" class="hl" style="fill:#fff"/>
  <text x="240" y="160" class="ts hc" text-anchor="middle" font-weight="700">止めないことを優先する Cell</text>
  <g class="ts" text-anchor="middle"><rect x="100" y="180" width="120" height="40" rx="4" class="soft"/><text x="160" y="206">決済</text><rect x="260" y="180" width="120" height="40" rx="4" class="soft"/><text x="320" y="206">請求</text></g>
  <use href="#i-no" x="200" y="248" width="24" height="24"/><text x="232" y="266" class="ts">見送る</text>
  <rect x="460" y="126" width="360" height="190" rx="10" class="hl" style="fill:#fff"/>
  <text x="640" y="160" class="ts hc" text-anchor="middle" font-weight="700">速く変えることを優先する Cell</text>
  <g class="ts" text-anchor="middle"><rect x="500" y="180" width="120" height="40" rx="4" class="soft"/><text x="560" y="206">推薦</text><rect x="660" y="180" width="120" height="40" rx="4" class="soft"/><text x="720" y="206">検索</text></g>
  <use href="#i-ok" x="608" y="248" width="24" height="24"/><text x="640" y="266" class="ts">出す</text>
  <text x="440" y="356" class="ts sub" text-anchor="middle">一つの Cell の中では、優先順位は一つ</text>
</svg>
```

障害が出た日に予定の変更を出すか。決済は止めないことを優先して見送り、推薦は速く変えることを優先して出します。優先が同じ仕事を一つの Cell に集めます。

※ 価値は、判断が割れたときに何を優先するか。SAFe の value stream（顧客に届ける価値の流れ）とは別の語。例は説明のために作った。

## 例：ドメインで切る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="320" y="20" width="240" height="56" rx="8" class="xl" style="fill:#fff"/><text x="440" y="56" class="t xc" text-anchor="middle" font-weight="700">「出荷日」</text>
  <path d="M380,80 L240,120 M500,80 L640,120" class="ln" marker-end="url(#arr)"/>
  <rect x="60" y="126" width="340" height="180" rx="10" class="hl" style="fill:#fff"/><text x="230" y="162" class="t hc" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="230" y="214" class="ts" text-anchor="middle">引当を確定した日</text><text x="230" y="250" class="tx" text-anchor="middle">語：引当・欠品・棚卸</text>
  <rect x="480" y="126" width="340" height="180" rx="10" class="hl" style="fill:#fff"/><text x="650" y="162" class="t hc" text-anchor="middle" font-weight="700">物流の Cell</text>
  <text x="650" y="214" class="ts" text-anchor="middle">便に積んだ日</text><text x="650" y="250" class="tx" text-anchor="middle">語：集荷・配車・締め時刻</text>
  <path d="M440,110 V320" class="xl dash"/>
  <text x="440" y="356" class="ts sub" text-anchor="middle">自分の仕事の中では、語の意味を切り替えずに済む</text>
</svg>
```

「出荷日」は、在庫では引当を確定した日、物流では便に積んだ日を指すことがあります。両方を読む主体は語のたびに意味を切り替えるので、扱う対象の境界で切ります。

※ ドメインは、仕事が扱う対象の範囲。境界で相手の記録を読むときは、共有する Ontology の対応で読む（第 7 章）。例は説明のために作った。

## 例：権限で切る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M440,30 V300" class="lt dash"/>
  <text x="220" y="40" class="t xc" text-anchor="middle" font-weight="700">判断のたびに問い合わせる</text>
  <rect x="40" y="70" width="140" height="44" rx="22" class="a"/><text x="110" y="98" class="ts on" text-anchor="middle">主体</text>
  <rect x="260" y="60" width="160" height="70" rx="8" class="box"/><text x="340" y="90" class="tx" text-anchor="middle">決めてよいかを</text><text x="340" y="112" class="tx" text-anchor="middle">持つ主体</text>
  <path d="M180,84 H256" class="xl" marker-end="url(#arr-x)"/>
  <path d="M258,112 H184" class="xl" marker-end="url(#arr-x)"/>
  <text x="220" y="180" class="ts" text-anchor="middle">相手の事情を読んでから戻る</text>
  <use href="#i-no" x="208" y="200" width="24" height="24"/>
  <text x="660" y="40" class="t hc" text-anchor="middle" font-weight="700">判断の権限ごと渡す</text>
  <rect x="520" y="60" width="280" height="170" rx="10" class="hl" style="fill:#fff"/><text x="660" y="94" class="ts hc" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="610" y="110" width="100" height="40" rx="6" class="h"/><text x="660" y="136" class="ts on" text-anchor="middle">責任者</text>
  <text x="660" y="190" class="ts" text-anchor="middle">自分の範囲は自分で判断</text>
  <use href="#i-ok" x="648" y="244" width="24" height="24"/>
  <text x="440" y="346" class="ts sub" text-anchor="middle">問い合わせも、相手の文脈へのコンテキストスイッチ</text>
</svg>
```

判断のたびに、決めてよいかを他の主体に問い合わせると、相手の事情を読んでから自分の仕事に戻ります。これもコンテキストスイッチなので、権限ごと渡して切ります。

※ 書き手の読み。責務と判断の権限を渡すこと（分割）は第 3 章で見る。

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

## 職能でも Agent の数でも決まらない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="160" y="40" width="560" height="250" rx="10" class="hl" style="fill:#fff"/>
  <text x="440" y="76" class="t hc" text-anchor="middle" font-weight="700">一つの Cell（文脈は一つ）</text>
  <g class="ts" text-anchor="middle">
    <rect x="200" y="100" width="100" height="40" rx="6" class="soft"/><text x="250" y="126">設計</text>
    <rect x="320" y="100" width="100" height="40" rx="6" class="soft"/><text x="370" y="126">実装</text>
    <rect x="440" y="100" width="100" height="40" rx="6" class="soft"/><text x="490" y="126">テスト</text>
    <rect x="560" y="100" width="120" height="40" rx="6" class="soft"/><text x="620" y="126">レビュー</text>
  </g>
  <g class="tx" text-anchor="middle">
    <rect x="200" y="170" width="100" height="36" rx="18" class="a"/><text x="250" y="193" class="on">Agent</text>
    <rect x="320" y="170" width="100" height="36" rx="18" class="a"/><text x="370" y="193" class="on">Agent</text>
    <rect x="440" y="170" width="100" height="36" rx="18" class="a"/><text x="490" y="193" class="on">Agent</text>
    <rect x="560" y="170" width="120" height="36" rx="18" class="a"/><text x="620" y="193" class="on">Agent</text>
  </g>
  <text x="440" y="252" class="ts" text-anchor="middle">どの職能の作業も、何体の Agent も、この中</text>
  <text x="440" y="340" class="t" text-anchor="middle" font-weight="700">境界は目的・責任・権限・実行能力で決まる</text>
</svg>
```

Cell は目的・責任・権限・実行能力で決まります。設計もテストも一つの Cell の中で行い、Agent をいくつ置いても、文脈が一つなら Cell は一つです。

※ 確かめを作った文脈から切り離すのは職務分離で（第 1 章）、Core はそれを保つことを求める。Task の配り方は Cell が決める（概念表「Task」）。

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

判定は、中の作り方を問いません。中が人のチームでも、チームの人が判断のたびに優先する価値を切り替えているなら、同じ判定に通りません。

※ 書き手の読み。Core が支えるのは、中が人のチームでもつながれることまで（第 4 章）。人の職能はチームの中に残してよく（第 1 章）、境界はこの判定で引く。

## 次章へ：責務を Profile に書く

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="70" width="300" height="200" rx="10" class="hl" style="fill:#fff"/>
  <text x="210" y="106" class="t hc" text-anchor="middle" font-weight="700">切った Cell</text>
  <text x="210" y="170" class="ts" text-anchor="middle">引き受ける責務</text>
  <path d="M370,170 H508" class="ln" marker-end="url(#arr)"/><text x="440" y="160" class="tx" text-anchor="middle">書いて渡す</text>
  <rect x="520" y="70" width="300" height="200" rx="3" class="box"/>
  <text x="670" y="116" class="t" text-anchor="middle" font-weight="700">Profile（版 1）</text>
  <text x="670" y="166" class="ts" text-anchor="middle">責務を定める版付きの仕様</text>
  <text x="440" y="330" class="ts" text-anchor="middle">第 3 章</text>
</svg>
```

どの軸で切っても、Cell が引き受ける責務は書いてから渡します。第 3 章では、Cell が引き受ける責務を定める版付きの仕様（Profile）を見ます。
