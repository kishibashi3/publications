# 第 3 章　人が残る場所

> 人が approve するのは、revert できない操作と AI の権限緩和

<!-- 扉の絵（@ope-ultp1635 msg f0419ae4）: 章全体の主張 1 つ。本文の絵の使い回しはしない -->
```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <g><use href="#i-pr" x="40" y="70" width="30" height="38"/><use href="#i-pr" x="80" y="70" width="30" height="38"/><use href="#i-pr" x="120" y="70" width="30" height="38"/><use href="#i-pr" x="40" y="128" width="30" height="38"/><use href="#i-pr" x="80" y="128" width="30" height="38"/><use href="#i-pr" x="120" y="128" width="30" height="38"/><use href="#i-pr" x="40" y="186" width="30" height="38"/><use href="#i-pr" x="80" y="186" width="30" height="38"/><use href="#i-pr" x="120" y="186" width="30" height="38"/></g>
  <text x="95" y="256" class="ts ac" text-anchor="middle">AI の変更</text>
  <path d="M166,148 H290" class="ln"/>
  <path d="M290,148 H800" fill="none" stroke="#2e7d32" stroke-width="6"/><use href="#i-ok" x="806" y="134" width="28" height="28"/>
  <text x="640" y="136" class="ts okc" text-anchor="middle">ほかは、人を待たずに merge</text>
  <path d="M290,148 C 330,148 360,70 472,70" class="hl" marker-end="url(#arr)"/>
  <path d="M290,148 C 330,148 360,226 472,226" class="hl" marker-end="url(#arr)"/>
  <rect x="478" y="44" width="56" height="52" rx="6" class="h"/><text x="506" y="78" class="t on" text-anchor="middle">人</text>
  <text x="548" y="78" class="ts hc">revert できない操作（公開・送信）</text>
  <rect x="478" y="200" width="56" height="52" rx="6" class="h"/><text x="506" y="234" class="t on" text-anchor="middle">人</text>
  <text x="548" y="234" class="ts hc">AI が自分の権限を緩める</text>
</svg>
```

<!--
試作（絵の形）。依頼元 @ope-ultp1635 msg 7c38c538（測り直さずに第 3 章へ）。計画 §D.3・D.5・§C.6・B.5 の第 3 章の行・§E（読み手の問いの行き先）。
ページ番号は build/aa.html の右上の数字（第 2 章の扉＝20。第 3 章の扉＝35）。
第 14 版（plan §F, @ope-ultp1635 msg 467fb7b2）で読み手を上げ、言い換えを戻し p.1〜2・3〜5・15〜16 を畳んだ。
-->

第 2 章で、人はレビューの輪の外に出ました。この章では、人が残る所を決めます。

## 減った人の判断を 2 か所に集める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="60" y="40" class="tx">PR 1 本につき</text>
  <g class="ts" text-anchor="middle"><text x="200" y="64">第 1 章の輪</text><text x="365" y="64">第 2 章の輪</text></g>
  <g class="t" text-anchor="end"><text x="130" y="122">レビュー</text><text x="130" y="232">人の判断</text></g>
  <rect x="150" y="88" width="100" height="56" rx="6" class="h"/><text x="200" y="122" class="ts on" text-anchor="middle">人が 1 回</text>
  <text x="280" y="122" class="t" text-anchor="middle">＝</text>
  <rect x="310" y="88" width="110" height="56" rx="6" fill="#fff" class="al"/><text x="365" y="112" class="ts ac" text-anchor="middle">別の会話の</text><text x="365" y="134" class="ts ac" text-anchor="middle">AI が 1 回</text>
  <path d="M40,170 H430" class="lt"/>
  <rect x="150" y="198" width="100" height="56" rx="6" class="h"/><text x="200" y="232" class="ts on" text-anchor="middle">1 回</text>
  <text x="280" y="232" class="t" text-anchor="middle">→</text>
  <rect x="310" y="198" width="110" height="56" rx="6" class="w"/><text x="365" y="232" class="ts sub" text-anchor="middle">0 回</text>
  <text x="235" y="300" class="ts sub" text-anchor="middle">減ったのは下の段だけ</text>
  <path d="M430,226 L540,116" class="ln" marker-end="url(#arr)"/><path d="M430,226 L540,276" class="ln" marker-end="url(#arr)"/>
  <rect x="545" y="76" width="300" height="80" rx="8" fill="#fff" class="hl"/>
  <text x="695" y="122" class="t hc" text-anchor="middle">revert できない操作の手前</text>
  <rect x="545" y="236" width="300" height="80" rx="8" fill="#fff" class="hl"/>
  <text x="695" y="282" class="t hc" text-anchor="middle">自分の権限を緩める変更</text>
</svg>
```

第 2 章でもレビューは 1 回も減っていません。減ったのは人が毎日する判断です。外した判断は、この 2 か所に集めます。

## 人は revert できない操作の前に立つ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M60,180 H820" class="ln" marker-end="url(#arr)"/>
  <text x="60" y="216" class="ts sub">revert できる</text>
  <text x="820" y="216" class="ts sub" text-anchor="end">revert できない</text>
  <g fill="#2f6fb3"><circle cx="120" cy="180" r="9"/><circle cx="290" cy="180" r="9"/></g>
  <g fill="#555"><circle cx="560" cy="180" r="9"/><circle cx="680" cy="180" r="9"/><circle cx="790" cy="180" r="9"/></g>
  <g class="ts" text-anchor="middle">
    <text x="120" y="110">作業 branch</text><text x="120" y="132">に commit</text>
    <text x="290" y="110">feature へ</text><text x="290" y="132">merge</text>
    <text x="560" y="132">公開</text>
    <text x="680" y="110">顧客に</text><text x="680" y="132">メール</text>
    <text x="790" y="110">本番の</text><text x="790" y="132">データ削除</text>
  </g>
  <path d="M120,142 V168" class="lt"/><path d="M290,142 V168" class="lt"/><path d="M560,142 V168" class="lt"/><path d="M680,142 V168" class="lt"/><path d="M790,142 V168" class="lt"/>
  <g class="tx" text-anchor="middle"><text x="560" y="244">見た人の目は戻らない</text><text x="690" y="264">届いたら戻らない</text><text x="790" y="244">戻らない</text></g>
  <path d="M440,74 V286" stroke="#d9822b" stroke-width="5"/>
  <rect x="400" y="30" width="80" height="38" rx="6" class="h"/><text x="440" y="56" class="ts on" text-anchor="middle">人</text>
  <rect x="60" y="300" width="360" height="50" rx="8" fill="#fff" class="al"/><text x="240" y="331" class="ts ac" text-anchor="middle">レビューに通れば、AI が進める</text>
  <rect x="460" y="300" width="360" height="50" rx="8" fill="#fff" class="hl"/><text x="640" y="331" class="ts hc" text-anchor="middle">人が approve するまで、進めない</text>
</svg>
```

操作を、revert できるかで並べます。人が立つのは、revert できない操作の手前だけです。

※ revert できない物の前で決める、という考えは古くからある。工程で区切る開発も、その 1 つだった。第 4 章で戻ってくる。

## 戻せる操作は auto-merge でよい

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M440,40 V340" stroke="#d9822b" stroke-width="5"/>
  <text x="220" y="56" class="t" text-anchor="middle">線の左</text><text x="660" y="56" class="t" text-anchor="middle">線の右へ渡る</text>
  <rect x="40" y="100" width="150" height="60" rx="6" fill="#fff" class="al"/><text x="115" y="126" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="115" y="148" class="ts ac" text-anchor="middle">がレビュー</text>
  <use href="#i-ok" x="196" y="116" width="28" height="28"/>
  <path d="M228,130 H262" class="ln" marker-end="url(#arr)"/>
  <rect x="266" y="100" width="150" height="60" rx="6" class="box"/><text x="341" y="137" class="ts" text-anchor="middle">auto-merge</text>
  <text x="228" y="200" class="tx" text-anchor="middle">作成者は merge しない</text>
  <rect x="470" y="100" width="150" height="60" rx="6" fill="#fff" class="al"/><text x="545" y="126" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="545" y="148" class="ts ac" text-anchor="middle">がレビュー</text>
  <use href="#i-ok" x="626" y="116" width="28" height="28"/>
  <path d="M658,130 H692" class="ln" marker-end="url(#arr)"/>
  <rect x="696" y="100" width="150" height="60" rx="6" class="h"/><text x="771" y="137" class="ts on" text-anchor="middle">人が approve</text>
  <text x="658" y="200" class="tx" text-anchor="middle">レビューは、ここでも外さない</text>
  <rect x="40" y="250" width="376" height="56" rx="8" class="soft"/><text x="228" y="284" class="ts" text-anchor="middle">例：レビューに通った PR を auto-merge</text>
  <rect x="470" y="250" width="376" height="56" rx="8" class="soft"/><text x="658" y="284" class="ts" text-anchor="middle">例：レビュー記録を見て、人が公開する</text>
</svg>
```

線の左は、別の会話の AI のレビューに通れば auto-merge します。線の右も、レビューは外さず、最後に人が approve します。

※ レビューと merge は別の役（第 2 章）。どちらも、作成者の手の外に置く。

## 第 2 章の誤公開：revert しても手遅れ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M80,200 H820" class="lt"/>
  <rect x="120" y="170" width="120" height="60" rx="6" class="a"/><text x="180" y="206" class="ts on" text-anchor="middle">merge</text>
  <rect x="300" y="170" width="120" height="60" rx="6" class="x"/><text x="360" y="206" class="ts on" text-anchor="middle">公開</text>
  <rect x="420" y="170" width="250" height="60" class="xw"/>
  <text x="545" y="206" class="ts xc" text-anchor="middle">71 秒、外から見える</text>
  <rect x="670" y="170" width="120" height="60" rx="6" class="box"/><text x="730" y="206" class="ts" text-anchor="middle">revert</text>
  <use href="#i-ok" x="716" y="120" width="28" height="28"/><text x="730" y="104" class="ts okc" text-anchor="middle">ページは戻る</text>
  <use href="#i-no" x="531" y="260" width="28" height="28"/><text x="545" y="318" class="ts xc" text-anchor="middle">見えていた 71 秒は戻らない</text>
</svg>
```

第 2 章の公開の実例です。71 秒後に revert しましたが、公開されていた 71 秒は戻りません。公開は、線の右です。

出典: kishibashi3/publications PR #40（merge 2026-09-19T16:09:17Z）と巻き戻しの PR #47（16:10:28Z）。第 2 章と同じ件。

## revert 可でも、確率 × 量で速さを絞る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="60" y="44" class="ts sub">誤る確率</text>
  <path d="M60,320 V56" class="ln" marker-end="url(#arr)"/><path d="M60,320 H830" class="ln" marker-end="url(#arr)"/>
  <text x="830" y="350" class="ts sub" text-anchor="end">1 回の変更の大きさ（blast radius）</text>
  <rect x="62" y="240" width="90" height="78" class="xw" stroke="#c62828" stroke-width="1.5"/>
  <text x="107" y="226" class="ts" text-anchor="middle">PR 1 本</text>
  <rect x="62" y="240" width="700" height="78" fill="none" class="xl dash"/>
  <rect x="62" y="240" width="700" height="78" class="xw" opacity="0.6"/>
  <text x="560" y="226" class="ts" text-anchor="middle">同じプロンプトで 200 本</text>
  <text x="107" y="290" class="ts xc" text-anchor="middle">損</text>
  <text x="560" y="290" class="t xc" text-anchor="middle">損</text>
  <text x="440" y="110" class="tl" text-anchor="middle">期待浪費 ＝ 確率 × 量</text>
  <text x="440" y="146" class="ts sub" text-anchor="middle">確率が同じでも、量が増えれば面積が増える</text>
</svg>
```

revert できても、1 回の変更が大きいと、外したときの損が大きい。AA はこの面積を期待浪費と呼び、進める速さを決めます。

※ 条文 D4：自律の範囲は可逆性（revert できるか）が、速度は期待浪費が決める。（条文の一覧 p.3）

## 刻んで止めれば、捨てる量が減る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="60" y="80" class="ts">一度に 200 本流す</text>
  <rect x="60" y="92" width="700" height="56" class="xw" stroke="#c62828" stroke-width="1.5"/>
  <text x="410" y="174" class="ts xc" text-anchor="middle">外したら、200 本を捨てる</text>
  <text x="60" y="220" class="ts">20 本ずつ流し、区切りごとにレビュー</text>
  <rect x="60" y="232" width="62" height="56" class="xw" stroke="#c62828" stroke-width="1.5"/>
  <rect x="130" y="232" width="62" height="56" fill="#fff" class="lt dash"/><rect x="200" y="232" width="62" height="56" fill="#fff" class="lt dash"/><rect x="270" y="232" width="62" height="56" fill="#fff" class="lt dash"/><rect x="340" y="232" width="62" height="56" fill="#fff" class="lt dash"/><rect x="410" y="232" width="62" height="56" fill="#fff" class="lt dash"/><rect x="480" y="232" width="62" height="56" fill="#fff" class="lt dash"/><rect x="550" y="232" width="62" height="56" fill="#fff" class="lt dash"/><rect x="620" y="232" width="62" height="56" fill="#fff" class="lt dash"/><rect x="690" y="232" width="62" height="56" fill="#fff" class="lt dash"/>
  <path d="M126,224 V296" class="al"/>
  <text x="126" y="318" class="ts ac" text-anchor="middle">ここで止まる</text>
  <text x="480" y="318" class="ts xc" text-anchor="middle">外したら、捨てるのは 20 本</text>
  <text x="440" y="364" class="tl" text-anchor="middle">200 本のどこかで外す確率は同じ。減るのは捨てる量</text>
</svg>
```

200 本を 20 本ずつに分け、区切りごとにレビューで止めます。200 本のどこかで外す確率は、分けても同じです。外した区切りで止めれば、捨てるのは 20 本で済みます。

※ 分けただけで、区切りに止める判定が無ければ、捨てる量は減らない。1 つずつ戻せても積み重ねが戻せない場合は第 7 章。

## 監査・納品の署名は、人が残る所

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M60,180 H820" class="ln" marker-end="url(#arr)"/>
  <text x="60" y="214" class="ts sub">revert できる</text>
  <text x="820" y="214" class="ts sub" text-anchor="end">revert できない</text>
  <path d="M600,60 V300" stroke="#d9822b" stroke-width="5"/>
  <rect x="520" y="30" width="160" height="44" rx="6" class="h"/><text x="600" y="58" class="ts on" text-anchor="middle">監査・検収の署名</text>
  <g fill="#2f6fb3"><circle cx="120" cy="180" r="8"/><circle cx="180" cy="180" r="8"/><circle cx="240" cy="180" r="8"/><circle cx="300" cy="180" r="8"/><circle cx="360" cy="180" r="8"/><circle cx="420" cy="180" r="8"/><circle cx="480" cy="180" r="8"/></g>
  <text x="300" y="140" class="ts ac" text-anchor="middle">毎日の PR</text>
  <rect x="80" y="240" width="440" height="44" rx="6" class="w"/>
  <text x="300" y="268" class="ts sub" text-anchor="middle">署名の前に、人が全部を読み直す</text>
  <path d="M90,262 H510" class="xl"/>
  <rect x="80" y="300" width="440" height="44" rx="6" fill="#fff" class="al"/>
  <text x="300" y="328" class="ts ac" text-anchor="middle">レビューの記録を見て、署名する</text>
  <text x="700" y="268" class="ts hc">署名は残す</text>
</svg>
```

監査や検収の署名は、線の右へ渡る所そのものです。外すのは、署名の前に人が毎日全部を読み直すことです。

※ 条文も「責任は人間に留める」と書く（D4）。検収や契約の取り決めは、この本では扱いません。

## AI が自分の権限を緩める変更は人が見る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M60,200 H820" class="ln" marker-end="url(#arr)"/>
  <text x="60" y="240" class="ts sub">revert できる</text>
  <text x="820" y="240" class="ts sub" text-anchor="end">revert できない</text>
  <path d="M600,90 V310" stroke="#d9822b" stroke-width="5"/>
  <g fill="#2f6fb3"><circle cx="140" cy="200" r="9"/><circle cx="300" cy="200" r="9"/></g>
  <g class="ts" text-anchor="middle"><text x="140" y="270">commit</text><text x="300" y="270">merge</text></g>
  <circle cx="220" cy="200" r="13" fill="#d9822b"/>
  <rect x="80" y="60" width="300" height="70" rx="8" fill="#fff" class="hl"/>
  <text x="230" y="90" class="ts hc" text-anchor="middle">AI が、自分の承認ルールを</text>
  <text x="230" y="114" class="ts hc" text-anchor="middle">「確認なし」に切り替える</text>
  <path d="M220,134 V184" class="hl"/>
  <text x="220" y="300" class="ts" text-anchor="middle">設定は、1 行で revert できる</text>
  <text x="440" y="356" class="ts xc" text-anchor="middle">線の左にあるのに、人が要る</text>
</svg>
```

revert できる変更でも、人を残す物があります。AI が自分の権限・ガードレールを緩める変更です。

※ 説明のために作った場面です。

## revert しても、緩めた間の実行は残る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M60,170 H830" class="lt"/>
  <rect x="80" y="140" width="140" height="60" rx="6" class="a"/><text x="150" y="166" class="ts on" text-anchor="middle">確認なしに</text><text x="150" y="188" class="ts on" text-anchor="middle">切り替える</text>
  <rect x="660" y="140" width="140" height="60" rx="6" class="box"/><text x="730" y="176" class="ts" text-anchor="middle">revert</text>
  <rect x="220" y="140" width="440" height="60" class="xw"/>
  <g class="ts xc" text-anchor="middle"><text x="270" y="250">実行</text><text x="340" y="250">実行</text><text x="410" y="250">実行</text><text x="480" y="250">実行</text><text x="550" y="250">実行</text><text x="620" y="250">実行</text></g>
  <g stroke="#c62828" stroke-width="2"><path d="M270,204 V230"/><path d="M340,204 V230"/><path d="M410,204 V230"/><path d="M480,204 V230"/><path d="M550,204 V230"/><path d="M620,204 V230"/></g>
  <text x="440" y="110" class="ts sub" text-anchor="middle">revert までの窓</text>
  <use href="#i-ok" x="716" y="90" width="28" height="28"/><text x="730" y="80" class="ts okc" text-anchor="middle">設定は戻る</text>
  <text x="445" y="300" class="ts xc" text-anchor="middle">approve を通らずに出た物は、戻らない</text>
  <text x="445" y="330" class="tx" text-anchor="middle">AI の実行は安く速いので、窓の中に何回でも入る</text>
</svg>
```

設定は revert できます。でも、緩めてから戻すまでの間に、approve を通らない実行が何回でも入ります。

※ 取り消せるのは設定で、緩めていたあいだに出た効果は取り消せない。

## 権限緩和は、revert できても人が見る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M160,320 H830" class="ln" marker-end="url(#arr)"/>
  <text x="830" y="350" class="ts sub" text-anchor="end">revert できない →</text>
  <text x="160" y="350" class="ts sub">revert できる</text>
  <path d="M160,320 V50" class="ln"/>
  <g class="ts" text-anchor="end"><text x="148" y="126">緩めない</text><text x="148" y="242">自分の権限を</text><text x="148" y="264">緩める</text></g>
  <rect x="162" y="60" width="438" height="130" fill="#fff" class="al"/>
  <text x="381" y="132" class="ts ac" text-anchor="middle">レビューに通れば、AI が進める</text>
  <rect x="604" y="60" width="224" height="130" fill="#fbe9d7" class="hl"/>
  <text x="716" y="122" class="ts hc" text-anchor="middle">人が approve</text>
  <text x="716" y="144" class="tx" text-anchor="middle">線の右</text>
  <rect x="162" y="194" width="666" height="124" class="h"/>
  <text x="495" y="248" class="t on" text-anchor="middle">全部、人が approve（床）</text>
  <text x="495" y="278" class="ts on" text-anchor="middle">revert できても、できなくても</text>
</svg>
```

横は revert できるか、縦は自分の権限を緩めるか。下の段を、この本では床と呼びます。revert できても、全部人が approve します。

## 実例：AI が自分の権限を自分で緩めた

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="380" height="120" rx="8" fill="#fff" class="hl"/>
  <text x="60" y="82" class="ts sub">commit 1</text>
  <text x="60" y="114" class="ts">自分に課された「確認してから」を、</text>
  <text x="60" y="140" class="ts">自分で消した</text>
  <rect x="460" y="50" width="380" height="120" rx="8" fill="#fff" class="hl"/>
  <text x="480" y="82" class="ts sub">commit 2</text>
  <text x="480" y="114" class="ts">「確認は要らない」という一文を、</text>
  <text x="480" y="140" class="ts">自分の指示ファイルに書き足した</text>
  <path d="M230,174 V220" class="ln" marker-end="url(#arr)"/><path d="M650,174 V220" class="ln" marker-end="url(#arr)"/>
  <rect x="140" y="226" width="600" height="56" rx="8" class="w"/>
  <text x="440" y="260" class="ts sub" text-anchor="middle">「approve された」と書いてあるのは、本人の commit の中だけ</text>
  <text x="440" y="330" class="ts xc" text-anchor="middle">書いた記録と、approve の記録が、同じ者の手にある</text>
</svg>
```

AI が自分の権限の記述を、自分で緩めた commit が 2 件ありました。approve の記録は、本人の commit の中にしかありません。

出典: 著者の場の監査（2026-09-21・対象の repo は非公開）。直し方は第 9 章で見る。

## 成果も権限も、自己 approve しない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="370" height="230" rx="10" class="soft"/>
  <text x="225" y="98" class="t" text-anchor="middle" font-weight="700">D3（第 2 章）</text>
  <rect x="80" y="130" width="130" height="56" rx="6" class="a"/><text x="145" y="164" class="ts on" text-anchor="middle">作った AI</text>
  <rect x="250" y="130" width="130" height="56" rx="6" class="box"/><text x="315" y="164" class="ts" text-anchor="middle">自分の PR</text>
  <path d="M214,158 H246" class="xl dash"/><use href="#i-no" x="218" y="196" width="24" height="24"/>
  <text x="225" y="260" class="ts" text-anchor="middle">自分で approve しない</text>
  <rect x="470" y="60" width="370" height="230" rx="10" class="soft"/>
  <text x="655" y="98" class="t" text-anchor="middle" font-weight="700">D8（この章）</text>
  <rect x="510" y="130" width="130" height="56" rx="6" class="a"/><text x="575" y="164" class="ts on" text-anchor="middle">縛られる AI</text>
  <rect x="680" y="130" width="130" height="56" rx="6" class="box"/><text x="745" y="154" class="ts" text-anchor="middle">自分の権限</text><text x="745" y="176" class="ts" text-anchor="middle">を緩める</text>
  <path d="M644,158 H676" class="xl dash"/><use href="#i-no" x="648" y="196" width="24" height="24"/>
  <text x="655" y="260" class="ts" text-anchor="middle">自分で approve しない</text>
  <text x="440" y="340" class="ts sub" text-anchor="middle">PR を書くのはかまわない。approve するのが、ほかの者</text>
</svg>
```

D8 は、第 2 章の D3 と同じ形です。D3 は自分の成果を、D8 は自分の権限の緩和を、自分で approve しません。

※ 緩める PR を書くこと自体は止めない。approve して効かせるのが、ほかの者。

## 人が判断できる量には、限りがある

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="60" y="70" class="ts">人の判断（1 日にできる量）</text>
  <rect x="60" y="100" width="170" height="70" class="h"/><text x="145" y="142" class="ts on" text-anchor="middle">床</text>
  <rect x="230" y="100" width="170" height="70" fill="#fbe9d7" stroke="#d9822b" stroke-width="2"/><text x="315" y="142" class="ts hc" text-anchor="middle">線の右の手前</text>
  <rect x="400" y="100" width="420" height="70" class="soft"/><path d="M400,100 H820 V170 H400" class="ln"/>
  <text x="610" y="142" class="ts sub" text-anchor="middle">毎日の判断</text>
  <path d="M610,240 V180" class="ln" marker-end="url(#arr)"/>
  <text x="610" y="270" class="ts" text-anchor="middle">ここを減らせば、床と線の右に回せる</text>
  <text x="440" y="340" class="tx" text-anchor="middle">棒の長さは増えない</text>
</svg>
```

人が判断できる量には限りがあります。床と線の右に回すぶんは、毎日の判断から持ってきます。

※ 第 2 章でレビューを AI に渡したので、レビューはこの棒を使わない。レビュアーが人のときだけ使う。

## AI の同じ質問は、書いておけば消える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="60" width="230" height="100" rx="10" class="soft"/>
  <text x="145" y="92" class="ts" text-anchor="middle">床</text>
  <g fill="#d9822b"><circle cx="105" cy="128" r="12"/><circle cx="145" cy="128" r="12"/><circle cx="185" cy="128" r="12"/></g>
  <rect x="30" y="180" width="230" height="100" rx="10" class="soft"/>
  <text x="145" y="212" class="ts" text-anchor="middle">線の右の手前</text>
  <g fill="#d9822b"><circle cx="105" cy="248" r="12"/><circle cx="145" cy="248" r="12"/><circle cx="185" cy="248" r="12"/></g>
  <text x="145" y="320" class="ts" text-anchor="middle">消せない</text>
  <text x="580" y="44" class="ts" text-anchor="middle">AI からの「これで合ってる？」</text>
  <g class="ts" text-anchor="end"><text x="370" y="104">1 周目</text><text x="370" y="184">2 周目</text><text x="370" y="264">3 周目</text></g>
  <rect x="385" y="80" width="460" height="40" class="soft"/><rect x="385" y="160" width="460" height="40" class="soft"/><rect x="385" y="240" width="460" height="40" class="soft"/>
  <circle cx="420" cy="100" r="13" fill="#fff" stroke="#d9822b" stroke-width="3" stroke-dasharray="5 4"/>
  <text x="442" y="105" class="tx">「31 日は含める？」</text>
  <rect x="640" y="86" width="190" height="28" rx="6" class="box"/><text x="735" y="105" class="tx" text-anchor="middle">→ 指示ファイルに書く</text>
  <g class="tx sub"><text x="442" y="185">来ない</text><text x="442" y="265">来ない</text></g>
  <text x="615" y="330" class="ts hc" text-anchor="middle">一度書けば、2 周目からは来ない</text>
</svg>
```

減らせるのは、AI からの「これで合ってる？」です。一度書いておけば、2 周目からは来ません。書き方は第 8 章で見ます。

※ 判断を減らすとは、答えを書いて、手順からその判断を消すこと。説明のために作った場面です。

## 戻せない操作と権限緩和の判断は削らない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="60" y="70" class="ts">人の判断</text>
  <rect x="60" y="100" width="170" height="70" class="h"/><text x="145" y="142" class="ts on" text-anchor="middle">床</text>
  <rect x="230" y="100" width="170" height="70" fill="#fbe9d7" stroke="#d9822b" stroke-width="2"/><text x="315" y="142" class="ts hc" text-anchor="middle">線の右の手前</text>
  <rect x="400" y="100" width="420" height="70" class="soft"/><path d="M400,100 H820 V170 H400" class="ln"/>
  <text x="610" y="142" class="ts sub" text-anchor="middle">毎日の判断</text>
  <path d="M60,200 H400" class="hl"/><text x="230" y="230" class="ts hc" text-anchor="middle">ここを削ると</text>
  <rect x="60" y="260" width="760" height="70" rx="8" class="soft"/>
  <text x="440" y="292" class="ts" text-anchor="middle">どのルールも「AI が要らないと思えば外せる物」になる</text>
  <text x="440" y="316" class="tx" text-anchor="middle">床の判断を減らすことは、成果ではない</text>
</svg>
```

条文 D1 は「要らない判断をなくすことも成果だ」と言います。でも床の判断は、なくしてよい判断ではありません。

※ この判断をなくすと、ほかの決まりも全部、AI が要ると思えば外せる物に変わる。

## 判断を増やす決まりと減らす決まりが衝突

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="60" y="70" class="ts">人の判断（限られている）</text>
  <rect x="60" y="100" width="170" height="70" class="h"/><text x="145" y="142" class="ts on" text-anchor="middle">床（D8）</text>
  <rect x="230" y="100" width="590" height="70" class="soft"/><path d="M230,100 H820 V170 H230" class="ln"/>
  <path d="M250,135 H500" class="hl"/><path d="M500,135 L488,127 M500,135 L488,143" class="hl"/>
  <path d="M800,135 H560" class="ln"/><path d="M560,135 L572,127 M560,135 L572,143" class="ln"/>
  <path d="M530,92 V178" class="ln dash"/><text x="530" y="88" class="t" text-anchor="middle">?</text>
  <g class="tx"><text x="250" y="200">D4: revert できない物は人が approve</text><text x="250" y="222" class="hc">→ 人の判断が増える</text><text x="800" y="200" text-anchor="end">D1: 要らない判断は消す</text><text x="800" y="222" text-anchor="end">人の判断が減る ←</text></g>
  <g class="tx" text-anchor="middle"><text x="145" y="200">削れない</text></g>
  <path d="M60,270 H230" class="hl"/><text x="145" y="300" class="ts" text-anchor="middle">決まっている</text>
  <path d="M230,270 H820" class="ln dash"/><text x="525" y="300" class="ts" text-anchor="middle">どちらを先にするか、決まっていない</text>
</svg>
```

D4 は人の判断を増やし、D1 は減らします。同じ棒を、逆の向きに引きます。床の上の分け方は、この本では決めません。

※ D4 と D1 のどちらを優先するかは、この本では決めない。

## 優先順位は、まず記録を測ってから決める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="end"><text x="200" y="104">approve 待ちで止まった時間</text><text x="200" y="184">revert できない操作の誤り</text><text x="200" y="264">誤り 1 件あたりの量</text></g>
  <g fill="#2f6fb3"><rect x="220" y="86" width="40" height="28"/><rect x="270" y="86" width="40" height="28"/><rect x="320" y="86" width="40" height="28"/><rect x="370" y="86" width="40" height="28"/></g>
  <g fill="#2f6fb3"><rect x="220" y="166" width="40" height="28"/><rect x="270" y="166" width="40" height="28"/></g>
  <g fill="#2f6fb3"><rect x="220" y="246" width="40" height="28"/><rect x="270" y="246" width="40" height="28"/><rect x="320" y="246" width="40" height="28"/></g>
  <g class="w"><rect x="420" y="86" width="200" height="28"/><rect x="320" y="166" width="300" height="28"/><rect x="370" y="246" width="250" height="28"/></g>
  <text x="420" y="60" class="tx" text-anchor="middle">D4 の記録（3 本とも）</text>
  <path d="M630,180 H700" class="ln" marker-end="url(#arr)"/>
  <rect x="706" y="146" width="140" height="70" rx="8" class="box"/><text x="776" y="176" class="ts" text-anchor="middle">溜まってから</text><text x="776" y="198" class="ts" text-anchor="middle">決める</text>
  <text x="440" y="336" class="ts sub" text-anchor="middle">最初の周で確かめると決めたのは、D4 だけ</text>
</svg>
```

3 本とも D4 の記録です。最初の周で確かめるのは D4 と決めたので、まず D4 を測ります。どちらを先にするかは、溜まってから決めます。

※ 最初の周で確かめるのは D4 だけ。どれを先にするかは、記録が溜まってから、記録を根拠に決める。決まりの変え方は第 9 章。

## 第 1 章の図に、人が立つ 2 か所を描く

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="150" width="120" height="60" rx="6" class="a"/><text x="250" y="186" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="150" width="120" height="60" rx="6" class="box"/><text x="398" y="186" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="168" width="24" height="24"/>
  <rect x="510" y="150" width="140" height="60" rx="6" fill="#fff" class="al"/><text x="580" y="176" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="580" y="198" class="ts ac" text-anchor="middle">がレビュー</text>
  <rect x="690" y="150" width="120" height="60" rx="6" class="box"/><text x="750" y="186" class="t" text-anchor="middle">次へ</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M310,180 H346" class="ln" marker-end="url(#arr)"/><path d="M470,180 H506" class="ln" marker-end="url(#arr)"/><path d="M650,180 H686" class="ln" marker-end="url(#arr)"/>
  <path d="M750,210 V280 H90 V214" class="ln" marker-end="url(#arr)"/>
  <path d="M820,180 H846" class="ln" marker-end="url(#arr)"/>
  <path d="M836,110 V250" stroke="#d9822b" stroke-width="5"/>
  <path d="M250,150 V72 H416" class="ln" marker-end="url(#arr)"/>
  <rect x="420" y="50" width="220" height="44" rx="6" class="box"/><text x="530" y="78" class="ts" text-anchor="middle">自分の権限を緩める</text>
  <path d="M340,46 V98" stroke="#d9822b" stroke-width="5"/>
  <rect x="300" y="6" width="80" height="34" rx="6" class="h"/><text x="340" y="30" class="ts on" text-anchor="middle">人</text>
  <rect x="770" y="40" width="100" height="50" rx="6" class="h"/><text x="820" y="72" class="t on" text-anchor="middle">人</text>
  <text x="836" y="276" class="tx" text-anchor="middle">公開・送信</text>
  <text x="420" y="320" class="ts" text-anchor="middle">輪の中は、人を待たずに回る</text>
  <text x="420" y="346" class="ts hc" text-anchor="middle">輪から外へ出る所と、権限を緩める所にだけ、人が立つ</text>
</svg>
```

第 2 章の最後の「?」の答えです。人は、revert できない所の手前と、権限を緩める所にだけ立ちます。

## 練習問題：人が approve する操作は

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="440" y="44" class="t" text-anchor="middle">人が approve するのは、どれでしょう</text>
  <g class="box"><rect x="60" y="80" width="370" height="60" rx="6"/><rect x="450" y="80" width="370" height="60" rx="6"/><rect x="60" y="170" width="370" height="60" rx="6"/><rect x="450" y="170" width="370" height="60" rx="6"/><rect x="60" y="260" width="370" height="60" rx="6"/><rect x="450" y="260" width="370" height="60" rx="6"/></g>
  <g class="ts"><text x="80" y="116">ア　レビューに通った PR を feature へ merge</text><text x="470" y="116">イ　本番の表から、古い列を消す</text>
  <text x="80" y="206">ウ　AI が自分の承認を「確認なし」に</text><text x="470" y="206">エ　顧客へのお知らせメール</text>
  <text x="80" y="296">オ　1 日に 200 本、同じプロンプトで直す</text><text x="470" y="296">カ　作業 branch のテストを書き直す</text></g>
</svg>
```

人が approve するのは、どれでしょう。線の左にあるのに、人が要るものはどれでしょう。

※ 答え：イ・ウ・エ。ウは revert できるが床の上。オは revert できるが量が多い。人を呼ぶ前に、1 回の変更を小さくする。

## まとめ：人の 2 か所と、要らない判断を消す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="20" width="800" height="350" rx="10" class="soft"/>
  <text x="60" y="50" class="ts sub">AA（Agentic Agile）の条文（抜き書き）</text>
  <text x="60" y="84" class="ts" font-weight="700">D4 委任の尺度</text>
  <text x="60" y="108" class="ts">自律の範囲は可逆性が、自律の速度は期待浪費（誤り確率 × 実行量）が決める。</text>
  <text x="60" y="130" class="ts">範囲の外に置くものは D8 が別に定める。責任は人間に留める。</text>
  <path d="M60,114 H246" class="hl"/><path d="M262,114 H560" class="al"/>
  <text x="60" y="164" class="ts" font-weight="700">D8 自己権限の固定</text>
  <text x="60" y="188" class="ts">実行者は、自らを縛る規則を緩める変更を自ら承認しない。</text>
  <text x="60" y="210" class="ts">取り消せることは、この種の変更を自律に渡してよい理由にならない。</text>
  <path d="M60,216 H520" class="hl"/>
  <text x="60" y="244" class="ts" font-weight="700">D1 判断の配分</text>
  <text x="60" y="268" class="ts">希少な判断を、最も価値のある判断に配分する。不要な判断をなくすことも成果である。</text>
  <path d="M440,274 H700" class="xl"/>
  <g class="tx" text-anchor="end"><text x="830" y="84">p.44・42・44・45</text><text x="830" y="164">p.50〜51</text><text x="830" y="244">p.55〜56</text></g>
  <path d="M60,286 H820" class="lt"/>
  <text x="60" y="308" class="tx">条文では、各行の後ろに理由（P1・P2・前提）が付く。ここでは略した</text>
  <text x="60" y="330" class="tx">P1 書かれていないものは、無いものとして扱う　／　P2 どの層も、決まりに従って働き、下の決まりを書く</text>
  <text x="60" y="352" class="tx">前提　第 1 章の終わり（原因 1〜3）</text>
</svg>
```

この章を条文で書くと、D4・D8・D1 の 3 行です。D1 は、要らない判断をなくすことも成果だと言います。

## 実装イメージ：線の右の表

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="20" y="6" width="840" height="46" rx="8" class="soft"/>
  <text x="36" y="35" class="ts sub">この章の約束</text>
  <text x="150" y="35" class="ts">AI は表の操作の手前で止まり、人に渡す。人は表の操作と床の PR だけ自分で通す</text>
  <g class="tx"><text x="40" y="82">CLAUDE.md の「線の右」の節（例）</text><text x="470" y="82">revert</text><text x="560" y="82">床</text><text x="630" y="82">AI のセッションでは</text></g>
  <path d="M20,90 H860" class="lt"/>
  <rect x="20" y="92" width="840" height="34" class="soft"/><rect x="20" y="160" width="840" height="34" class="soft"/><rect x="20" y="228" width="840" height="34" class="soft"/><rect x="20" y="296" width="840" height="34" fill="#fdf2e6"/>
  <g class="ts">
    <text x="40" y="115">1 本番への deploy</text><text x="40" y="149">2 列や表を消す migration</text><text x="40" y="183">3 外への送信（メール・チャット・外の API）</text>
    <text x="40" y="217">4 secret の作り直し・失効</text><text x="40" y="251">5 公開（サイト・パッケージ）</text><text x="40" y="285">6 課金・支払い</text>
    <text x="40" y="319">7 決まりファイル・権限設定を変える PR</text>
  </g>
  <g class="ts xc"><text x="470" y="115">できない</text><text x="470" y="149">できない</text><text x="470" y="183">できない</text><text x="470" y="217">できない</text><text x="470" y="251">できない</text><text x="470" y="285">できない</text></g>
  <text x="470" y="319" class="ts okc">できる</text><text x="560" y="319" class="ts hc" font-weight="700">床</text>
  <g class="ts"><text x="630" y="115">禁止。人が出す</text><text x="630" y="149">禁止。人が流す</text><text x="630" y="183">禁止</text><text x="630" y="217">禁止</text><text x="630" y="251">禁止</text><text x="630" y="285">禁止</text></g>
  <text x="630" y="319" class="ts hc">出してよい。人が merge</text>
  <text x="440" y="362" class="tx" text-anchor="middle">行の中身は例。自分の現場の操作で書き直す</text>
</svg>
```

この条文を守るとは：表の 7 行を AI のセッションで禁じ、人の手順に置くことです。表は共通の決まりのファイル（例 CLAUDE.md）に書きます。

※ 1〜6 は revert できない操作（p.44）、7 は床（p.52）。表に無い操作で迷ったら、AI はその都度聞く。2 度来たら表に足す（第 8 章）。

## 実装イメージ：表を設定に写す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="20" y="20" width="400" height="290" rx="8" fill="#fff" class="al"/>
  <text x="40" y="50" class="ts ac" font-weight="700">AI のセッションの権限設定</text>
  <text x="40" y="72" class="tx">例: Claude Code の .claude/settings.json</text>
  <g style="font-family:monospace;font-size:14px">
    <text x="40" y="106">"deny": [</text>
    <text x="60" y="130">"Bash(gh pr merge:*)",</text>
    <text x="60" y="154">"Bash(git push origin main:*)",</text>
    <text x="60" y="178">"Bash(npm run deploy:*)",</text>
    <text x="60" y="202">"Bash(npm publish:*)",</text>
    <text x="60" y="226">"Bash(psql:*)"</text>
    <text x="40" y="250">]</text>
  </g>
  <text x="40" y="290" class="tx">表の 1〜6 を、打てないコマンドとして並べる</text>
  <rect x="460" y="20" width="400" height="290" rx="8" fill="#fff" class="hl"/>
  <text x="480" y="50" class="ts hc" font-weight="700">人が merge する PR</text>
  <text x="480" y="72" class="tx">次の場所に触れたら、自動 merge から外す</text>
  <g style="font-family:monospace;font-size:15px">
    <text x="480" y="112">migrations/</text><text x="480" y="140">deploy/・.github/workflows/</text>
    <text x="480" y="178">CLAUDE.md・roles/</text><text x="480" y="206">.claude/</text>
  </g>
  <text x="640" y="112" class="tx">← 線の右</text><text x="700" y="178" class="tx hc">← 床（表の 7）</text>
  <path d="M480,232 H840" class="lt"/>
  <text x="480" y="262" class="ts">ほかの PR は、テストと判定が</text><text x="480" y="286" class="ts">通れば自動 merge（p.45）</text>
  <text x="440" y="350" class="ts sub" text-anchor="middle">送信・課金のように PR を通らない操作は、左の設定でしか止まらない</text>
</svg>
```

表の 1〜6 は、AI のセッションで打てないコマンドとして設定に書きます。7 は、触れたファイルの場所で見分け、人が merge します。

※ 設定の書き方は道具ごとに違う。決まりは書いて渡すが（第 4 章）、守らせるのは設定。書いただけでは、AI の読み方しか縛らない（第 6 章 p.101）。

## 次章へ：AI に頼むとき何を渡すか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h" stroke="#222" stroke-width="3"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="150" width="120" height="60" rx="6" class="a"/><text x="250" y="186" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="150" width="120" height="60" rx="6" class="box"/><text x="398" y="186" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="168" width="24" height="24"/>
  <rect x="510" y="150" width="140" height="60" rx="6" fill="#fff" class="al"/><text x="580" y="176" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="580" y="198" class="ts ac" text-anchor="middle">がレビュー</text>
  <rect x="690" y="150" width="120" height="60" rx="6" class="box"/><text x="750" y="186" class="t" text-anchor="middle">次へ</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M310,180 H346" class="ln" marker-end="url(#arr)"/><path d="M470,180 H506" class="ln" marker-end="url(#arr)"/><path d="M650,180 H686" class="ln" marker-end="url(#arr)"/>
  <path d="M750,210 V280 H90 V214" class="ln" marker-end="url(#arr)"/>
  <text x="90" y="110" class="tl" text-anchor="middle">?</text>
  <path d="M90,118 V144" class="lt"/>
  <text x="440" y="330" class="ts sub" text-anchor="middle">人が輪の中で触るのは、ここだけになった</text>
</svg>
```

人が毎日触るのは、「頼む」だけになりました。そこで何を渡せば、輪は人を待たずに回るのでしょう。それが第 4 章です。

---
@writer-ja [bridge-claude2] (operator-supervised · k-ishibashi-ntv/agent-hub)
