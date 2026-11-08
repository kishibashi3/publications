# 第 3 章　価値による分割

群: 文脈が疎結合になる切り方
副題: 価値で分けると、Cell の優先順位が一つに揃う

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（dd08b888）の第 3 章。着手: @ope-ultp1635 msg 83d1e0ea（群二）。
この章に当たる章は 2d0ca30 までの本に無い。新しく書いた。
この本の問いと考えは structure-v5.md の「イデア」「AA がスケールしない理由」。本文には口語の原文を載せず、第 0 章 p.「一つのループへの問い」・第 1 章の本の言葉に揃える（@ope-ultp1635 msg 62a8ef68）。
「価値」の語: structure-v5.md の字は「価値観」で、判断が割れたときに何を優先するかを指す。SAFe の value stream（顧客に届ける価値の流れ）とは別の語。目次の通読で読者が第 3 章の「価値ごとに Cell を分け」を ART を value stream で切るのと同じ向きと読んだ（@reader 349c4d63）。同じ向きと読まれても主張は崩れないが、語の取り違えは群三・群四で効くので、p.「価値は何を優先するか」の注で分けた。
「価値は一つのループに置かず、各 Cell の規範（Constitution）に書く」は structure-v5.md 判定の記録 4 番目の (b) の読み。Constitution の定義は core.md:37。各 Cell が規範の範囲で中を決めるのは core.md:62、上書きしないのは core.md:63、提案は core.md:84。
決済・推薦・請求の例と「障害が出た日に予定の変更を出すか」は書き手が作った（注に書いた）。第 0 章の決済・推薦と同じ例を使った。
p.「切り替えは外から見えない」は、第 0 章の問い「人間が管理し切れるか」と価値の問いをつなぐ書き手の導出。注に書いた。
p.「価値で切るのも Core の外」: Core は Constitution を価値を定める規範として置くが、価値ごとに Cell を分けることは書かない（core.md:52 は分割を定義するだけ）。第 0 章 p.「切り方は、Core の外の提案」と同じ扱い。
絵の Cell の枠は入れ子にしない（core.md:43）。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff。判定の正本 @reviewer 2026-11-08-eaa-textbook-77a7fc9-ch00-04 / ch05-08 / ch09-12-furoku、@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）: p.「価値は Constitution に書く」で、各 Cell の規範を Constitution と読むのは推論なので、注で断った（core.md:37 に「Cell ごと」が無い）。p.「サービスの数とは揃わない」の注の「（Profile）」を外した（Profile の定義は第 4 章。@reader p.43）。p.「価値で切るのも Core の外」を外した（第 0 章の注にまとめた）。
-->

```svg
<svg viewBox="0 0 880 340" width="880" height="340">
  <text x="200" y="30" class="t" text-anchor="middle" font-weight="700">一つの Cell に二つの価値</text>
  <rect x="40" y="50" width="320" height="220" rx="10" class="box"/>
  <rect x="140" y="80" width="120" height="40" rx="6" class="h"/><text x="200" y="106" class="ts on" text-anchor="middle">判断</text>
  <g class="ts" text-anchor="middle">
    <rect x="60" y="170" width="130" height="40" rx="4" class="xl" style="fill:#fff"/><text x="125" y="196">止めない</text>
    <rect x="210" y="170" width="130" height="40" rx="4" class="xl" style="fill:#fff"/><text x="275" y="196">速く変える</text>
  </g>
  <text x="200" y="250" class="tx xc" text-anchor="middle">判断のたびにどちらで答えるか切り替える</text>
  <path d="M390,160 H440" class="ln" marker-end="url(#arr)"/>
  <text x="665" y="30" class="t hc" text-anchor="middle" font-weight="700">価値ごとに Cell を分ける</text>
  <rect x="460" y="50" width="190" height="220" rx="10" class="hl" style="fill:#fff"/><text x="555" y="90" class="ts" text-anchor="middle" font-weight="700">決済の Cell</text>
  <rect x="490" y="170" width="130" height="40" rx="4" class="soft"/><text x="555" y="196" class="ts" text-anchor="middle">止めない</text>
  <rect x="680" y="50" width="190" height="220" rx="10" class="hl" style="fill:#fff"/><text x="775" y="90" class="ts" text-anchor="middle" font-weight="700">推薦の Cell</text>
  <rect x="710" y="170" width="130" height="40" rx="4" class="soft"/><text x="775" y="196" class="ts" text-anchor="middle">速く変える</text>
  <text x="665" y="306" class="ts sub" text-anchor="middle">価値は各 Cell の規範（Constitution）に書く</text>
</svg>
```

価値で分けると、一つの Cell が判断に使う優先順位が一つに揃います。何を優先するかが同じ仕事を一つの Cell に集め、その価値は一つのループではなく、各 Cell の規範に書きます。

## 価値は何を優先するか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="220" y="40" width="440" height="80" rx="10" class="box"/>
  <text x="440" y="88" class="t" text-anchor="middle" font-weight="700">判断が割れたとき、何を優先するか</text>
  <path d="M360,124 L250,180 M520,124 L630,180" class="ln" marker-end="url(#arr)"/>
  <g class="t" text-anchor="middle" font-weight="700">
    <rect x="120" y="190" width="240" height="60" rx="8" class="hl" style="fill:#fff"/><text x="240" y="228" class="hc">止めないこと</text>
    <rect x="520" y="190" width="240" height="60" rx="8" class="hl" style="fill:#fff"/><text x="640" y="228" class="hc">速く変えること</text>
  </g>
  <text x="440" y="320" class="ts sub" text-anchor="middle">顧客に届ける価値の流れ（value stream）とは別の語</text>
</svg>
```

この章の価値は、判断が割れたときに何を優先するかです。例えば、止めないことを優先するか、速く変えることを優先するか、です。

※ この本の価値は、優先するもの（価値観）を指す。SAFe の value stream（顧客に届ける価値の流れ）とは別の語。

## 同じ問いで答えが逆になる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="180" y="30" width="520" height="70" rx="10" class="box"/>
  <text x="440" y="72" class="t" text-anchor="middle" font-weight="700">障害が出た日に、予定の変更を出すか</text>
  <path d="M330,104 L230,160 M550,104 L650,160" class="ln" marker-end="url(#arr)"/>
  <rect x="80" y="170" width="300" height="130" rx="10" class="box"/>
  <text x="230" y="204" class="ts" text-anchor="middle" font-weight="700">決済：止めないことを優先する</text>
  <use href="#i-no" x="218" y="226" width="24" height="24"/><text x="230" y="280" class="ts" text-anchor="middle">見送る</text>
  <rect x="500" y="170" width="300" height="130" rx="10" class="box"/>
  <text x="650" y="204" class="ts" text-anchor="middle" font-weight="700">推薦：速く変えることを優先する</text>
  <use href="#i-ok" x="638" y="226" width="24" height="24"/><text x="650" y="280" class="ts" text-anchor="middle">出す</text>
  <text x="440" y="350" class="ts sub" text-anchor="middle">どちらの答えも、その仕事の価値からは正しい</text>
</svg>
```

障害が出た日に、予定の変更を出すか。決済は止めないことを優先して見送り、推薦は速く変えることを優先して出します。同じ問いで答えが逆です。

※ 例は説明のために作った（第 0 章の決済・推薦と同じ）。

## 一つの主体は切り替える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="200" y="40" width="480" height="250" rx="10" class="box"/>
  <text x="440" y="74" class="t" text-anchor="middle" font-weight="700">決済と推薦を持つ一つの主体</text>
  <rect x="380" y="100" width="120" height="44" rx="22" class="a"/><text x="440" y="128" class="ts on" text-anchor="middle">主体</text>
  <g class="tx" text-anchor="middle">
    <rect x="240" y="190" width="160" height="34" rx="4" class="soft"/><text x="320" y="212">決済の判断 → 止めない</text>
    <rect x="480" y="190" width="160" height="34" rx="4" class="soft"/><text x="560" y="212">推薦の判断 → 速く</text>
  </g>
  <path d="M400,207 H478" class="xl" marker-end="url(#arr-x)"/>
  <text x="440" y="264" class="ts xc" text-anchor="middle">判断のたびに優先順位を入れ替える</text>
  <text x="440" y="340" class="t" text-anchor="middle" font-weight="700">第 2 章の判定に通らない</text>
</svg>
```

二つの仕事を一つの主体に持たせると、判断のたびに、どちらの優先順位で答えるかを切り替えます。このコンテキストスイッチは、第 2 章の判定に通りません。

## 切り替えは外から見えない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="60" width="380" height="220" rx="10" class="box"/>
  <text x="250" y="96" class="t" text-anchor="middle" font-weight="700">一つの主体の中</text>
  <circle cx="250" cy="180" r="68" class="ln" stroke-dasharray="6 5"/>
  <text x="250" y="186" class="tx" text-anchor="middle">どちらで答えたか</text>
  <rect x="500" y="80" width="90" height="44" rx="6" class="h"/><text x="545" y="108" class="ts on" text-anchor="middle">人間</text>
  <g class="ts"><text x="610" y="108">答えだけが見える</text></g>
  <use href="#i-no" x="500" y="170" width="24" height="24"/>
  <g class="ts"><text x="534" y="188">なぜその答えかを</text><text x="534" y="214">追えない</text></g>
  <text x="440" y="336" class="t" text-anchor="middle" font-weight="700">第 0 章の問い「人間が管理し切れるか」と同じ所</text>
</svg>
```

切り替えを主体の中に置くと、どちらの優先順位で答えたかが外から見えません。同じ問いに日によって違う答えが出ても、責任を負う人間はなぜかを追えません。

※ 第 0 章の二つの問い（人間が管理し切れるか、一つのループで価値を切り替えられるか）を、書き手がつないだ。

## 優先が同じ仕事を集める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="60" width="360" height="220" rx="10" class="hl" style="fill:#fff"/>
  <text x="240" y="96" class="t hc" text-anchor="middle" font-weight="700">止めないことを優先する Cell</text>
  <g class="ts" text-anchor="middle"><rect x="100" y="140" width="120" height="40" rx="4" class="soft"/><text x="160" y="166">決済</text><rect x="260" y="140" width="120" height="40" rx="4" class="soft"/><text x="320" y="166">請求</text></g>
  <rect x="460" y="60" width="360" height="220" rx="10" class="hl" style="fill:#fff"/>
  <text x="640" y="96" class="t hc" text-anchor="middle" font-weight="700">速く変えることを優先する Cell</text>
  <g class="ts" text-anchor="middle"><rect x="500" y="140" width="120" height="40" rx="4" class="soft"/><text x="560" y="166">推薦</text><rect x="660" y="140" width="120" height="40" rx="4" class="soft"/><text x="720" y="166">検索</text></g>
  <text x="440" y="336" class="t" text-anchor="middle" font-weight="700">一つの Cell の中では、優先順位は一つ</text>
</svg>
```

マイクロサービスごとに価値が違うなら、価値ごとに Cell を分けます。何を優先するかが同じ仕事は、一つの Cell に集めます。

※ 第 0 章の問い「マイクロサービスごとに優先する価値が違うのに、一つのループでそれを切り替えられるか」への答え。

## サービスの数とは揃わない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="middle">
    <rect x="60" y="60" width="150" height="44" rx="6" class="soft"/><text x="135" y="88">決済サービス</text>
    <rect x="250" y="60" width="150" height="44" rx="6" class="soft"/><text x="325" y="88">請求サービス</text>
    <rect x="480" y="60" width="150" height="44" rx="6" class="soft"/><text x="555" y="88">推薦サービス</text>
    <rect x="670" y="60" width="150" height="44" rx="6" class="soft"/><text x="745" y="88">検索サービス</text>
  </g>
  <path d="M135,108 L220,170 M325,108 L240,170 M555,108 L640,170 M745,108 L660,170" class="ln"/>
  <rect x="120" y="175" width="220" height="80" rx="10" class="hl" style="fill:#fff"/><text x="230" y="222" class="ts hc" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="540" y="175" width="220" height="80" rx="10" class="hl" style="fill:#fff"/><text x="650" y="222" class="ts hc" text-anchor="middle" font-weight="700">Cell</text>
  <text x="440" y="320" class="t" text-anchor="middle" font-weight="700">決済と請求は止めないことを優先し、推薦と検索は速く変えることを優先する</text>
</svg>
```

価値の数とサービスの数は揃いません。止めないことを優先する決済と請求は、一つの Cell に集めてかまいません。

※ Core は、一つの Cell が複数の責務を担ってよいとする。出典: EAA Core 版 6「1. 責務と分割」。例は説明のために作った。

## 価値は Constitution に書く

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="200" y="40" width="480" height="260" rx="10" class="hl" style="fill:#fff"/>
  <text x="440" y="76" class="t hc" text-anchor="middle" font-weight="700">決済の Cell の Constitution</text>
  <g class="ts">
    <text x="240" y="120">目的</text><text x="240" y="152" font-weight="700" class="hc">価値：止めないことを優先する</text>
    <text x="240" y="184">制約</text><text x="240" y="216">権限</text><text x="240" y="248">禁止事項</text>
  </g>
  <text x="440" y="346" class="ts sub" text-anchor="middle">一つのループにではなく、各 Cell の規範に置く</text>
</svg>
```

価値は一つのループに置かず、各 Cell の規範に書きます。Core は、目的・価値・制約・権限・禁止事項を定める規範を Constitution と呼びます。

出典: EAA Core 版 6 の概念表「Constitution」。※ 各 Cell の規範を Constitution と読むのは書き手の読み。Core の定義に「Cell ごと」の字は無い。

## 規範の範囲で中を決める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="200" y="40" width="480" height="250" rx="10" class="hl" style="fill:#fff"/>
  <text x="440" y="74" class="t hc" text-anchor="middle" font-weight="700">決済の Cell</text>
  <rect x="240" y="100" width="400" height="44" rx="6" class="soft"/><text x="440" y="128" class="ts" text-anchor="middle">Constitution：止めないことを優先する</text>
  <path d="M440,148 V180" class="ln" marker-end="url(#arr)"/>
  <rect x="300" y="190" width="280" height="60" rx="30" class="a"/><text x="440" y="226" class="ts on" text-anchor="middle">中の方式と実行を決める</text>
  <text x="440" y="340" class="t" text-anchor="middle" font-weight="700">判断のたびに価値を選び直さない</text>
</svg>
```

各 Cell は、採用した規範の範囲で中の方式と実行を決めます。決済の Cell は、止めないことを優先する規範の下で、自分の判断を下します。

出典: EAA Core 版 6「2. 自治と権限」。

## 違う価値で上書きしない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="60" width="320" height="200" rx="10" class="hl" style="fill:#fff"/><text x="220" y="96" class="t hc" text-anchor="middle" font-weight="700">推薦の Cell</text>
  <text x="220" y="150" class="ts" text-anchor="middle">速く変えることを優先する</text>
  <rect x="500" y="60" width="320" height="200" rx="10" class="hl" style="fill:#fff"/><text x="660" y="96" class="t hc" text-anchor="middle" font-weight="700">決済の Cell</text>
  <text x="660" y="150" class="ts" text-anchor="middle">止めないことを優先する</text>
  <path d="M380,120 H498" class="xl dash" marker-end="url(#arr-x)"/><use href="#i-no" x="428" y="88" width="24" height="24"/><text x="440" y="146" class="tx xc" text-anchor="middle">書き換え</text>
  <path d="M380,210 H498" class="ln" marker-end="url(#arr)"/><text x="440" y="236" class="tx" text-anchor="middle">理由を付けた提案</text>
  <text x="440" y="320" class="t" text-anchor="middle" font-weight="700">受け入れるかは、決済の Cell が決める</text>
</svg>
```

推薦の Cell が、決済の Cell の判断を速さの側へ書き換えることはしません。変えたいときは、内容と理由を付けて提案します。

出典: EAA Core 版 6「2. 自治と権限」「4. 提案と変更」。権限で切った境界は第 5 章で見る。

## あいだで渡すものは書く

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="80" width="260" height="180" rx="10" class="hl" style="fill:#fff"/><text x="190" y="120" class="t hc" text-anchor="middle" font-weight="700">推薦の Cell</text>
  <rect x="560" y="80" width="260" height="180" rx="10" class="hl" style="fill:#fff"/><text x="690" y="120" class="t hc" text-anchor="middle" font-weight="700">決済の Cell</text>
  <rect x="340" y="130" width="200" height="80" rx="6" class="box"/><text x="440" y="164" class="ts" text-anchor="middle">渡すもの・条件</text><text x="440" y="190" class="ts" text-anchor="middle">確かめ方</text>
  <path d="M320,170 H338 M542,170 H558" class="ln"/>
  <text x="440" y="320" class="ts sub" text-anchor="middle">あいだの取り決め（Contract）は第 6 章</text>
</svg>
```

価値の違う Cell どうしにも、渡すものはあります。推薦が決済に何を渡し、どの条件で受け取るかは、両者のあいだの取り決めに書きます。

※ Cell のあいだの取り決めを、Core は Contract と呼ぶ。第 6 章で見る。

## 価値だけでは混ざる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="200" y="40" width="480" height="240" rx="10" class="box"/>
  <text x="440" y="74" class="t" text-anchor="middle" font-weight="700">止めないことを優先する Cell</text>
  <g class="ts" text-anchor="middle">
    <rect x="240" y="120" width="180" height="90" rx="6" class="soft"/><text x="330" y="156">在庫</text><text x="330" y="184" class="tx">在庫の語と記録</text>
    <rect x="460" y="120" width="180" height="90" rx="6" class="soft"/><text x="550" y="156">物流</text><text x="550" y="184" class="tx">物流の語と記録</text>
  </g>
  <path d="M420,165 H458" class="xl" marker-end="url(#arr-x)"/>
  <text x="440" y="250" class="ts xc" text-anchor="middle">語と記録を切り替える</text>
  <text x="440" y="336" class="t" text-anchor="middle" font-weight="700">価値で切った後も、第 2 章の判定に通す</text>
</svg>
```

止めないことを優先する仕事どうしでも、在庫と物流では読む語と記録が違います。価値で切った後もまだ文脈が混ざるなら、ドメインでも切ります。

## 次章へ：ドメインで切る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g>
    <rect x="80" y="70" width="220" height="160" rx="10" class="box"/><text x="190" y="140" class="t" text-anchor="middle" font-weight="700">価値</text><text x="190" y="180" class="ts" text-anchor="middle">第 3 章</text>
    <rect x="330" y="70" width="220" height="160" rx="10" class="hl" style="fill:#fff"/><text x="440" y="140" class="t hc" text-anchor="middle" font-weight="700">ドメイン</text><text x="440" y="180" class="ts" text-anchor="middle">第 4 章</text>
    <rect x="580" y="70" width="220" height="160" rx="10" class="box"/><text x="690" y="140" class="t" text-anchor="middle" font-weight="700">権限</text><text x="690" y="180" class="ts" text-anchor="middle">第 5 章</text>
  </g>
  <text x="440" y="300" class="ts sub" text-anchor="middle">次は、読む語と記録で切る</text>
</svg>
```

第 4 章では、在庫と物流のように扱う対象が違う仕事を、ドメインの境界で切ります。一つの Cell が読む語と記録を、一つの範囲に閉じます。
