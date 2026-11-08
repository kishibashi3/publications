# 第 4 章　Constitution と Federation

群: Cell の境界と責務
副題: 中は規範と Contract の範囲で決め、相手の中は指定しない

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v6.md（87be3308）の第 4 章。着手: @ope-ultp1635 msg df6c27d8（v6 の 3 便目）。本文 GO: @ope-ultp1635 msg 8c181d1b、kishibashi3「うん」。
このファイルは 1adcc30 までの第 4 章（ドメインによる分割）を置き換えた。旧第 4 章のページの行き先は v6 の表のとおり（ドメインの例は 1 便目で第 2 章へ、Profile のページは 2 便目で第 3 章へ、Ontology のページはこの便で第 7 章へ）。旧第 5 章（権限による分割）のファイルは消した。旧本文は 1adcc30 の eaa-ch04.md・eaa-ch05.md、旧第 3 章（価値による分割）は 62b9aa0 の eaa-ch03.md にある。
出典の中心: EAA Core 版 6「0. 目的と範囲」（core.md:16〜18）・概念表「Constitution」「Federation」（core.md:37・29）・「2. 自治と権限」（core.md:62・63・70）・「3. 意味と合意」（core.md:78・79）・「4. 提案と変更」（core.md:84・85・94）。
移したページ（v6 の表のとおり）:
- p.「Constitution は Cell の規範」← 62b9aa0 第 3 章 p.「価値は Constitution に書く」。題を Constitution の定義の側にした。本文・注・絵はそのまま
- p.「規範の範囲で中を決める」← 62b9aa0 第 3 章 同題（そのまま）
- p.「親も横断も上書きしない」← 1adcc30 第 5 章 同題 ＋ 62b9aa0 第 3 章 p.「違う価値で上書きしない」。絵に推薦の Cell を足し、本文に「速さの側へ書き換えない」を入れた。理由を付けた提案は次の p.「変えるときは提案で」が持つ
- p.「上書きを許すと文脈が戻る」「変えるときは提案で」「断ることと義務を捨てることは別」← 1adcc30 第 5 章 同題（そのまま）
- p.「Federation は中を指定しない」← 62b9aa0 第 2 章 p.「中は人のチームでもよい」（絵はそのまま）＋ 概念表「Federation」。題は build の上限 20 字に収めるため v6 の表（Federation は中の方式を指定しない、21 字）から短くした
新しく書いたページと出典:
- p.「例：決済と推薦の Constitution」— 書き手の例。欄は概念表「Constitution」（core.md:37）の目的・価値・制約・権限・禁止事項。決済・推薦・「障害の日に予定の変更を出すか」は第 2 章 p.「例：価値で切る」と同じ例
- p.「Constitution の版を特定する」— core.md:78・79。v6 の表の題（依存する Constitution の版を特定する、23 字）を上限 20 字に収めた。Mission の欄は第 6 章 p.「依存する版で、前提が動かない」が持つ
- p.「Cell どうしは共有する文書でつなぐ」— 概念表「Federation」（core.md:29）と core.md:94（共有する文書の範囲と、所有者・観測・準拠先）。v6 の表の題（Federation は共有する文書でつなぐ、21 字）を上限 20 字に収めるため主語を Cell にした。Federation の語はこのページの本文と前のページの題に出る
- p.「次章へ：切っても残る結合」← 1adcc30 第 5 章 同題を書き直した
落としたページ: v6 の表の p.「AA は 1 Cell の EAA」。v6 の条件（第 0 章 p.「AA と Cell」と言うことが重なるなら、落として第 0 章の注に回す）に当たる: 第 0 章 p.「素直に大きくすると一つの Cell」の注が既に「1 Cell の EAA」を書いている。core.md:17・18 の残り（AA は単独で成立する・分割後の Cell を担う AA も同じ AA）は p.「Federation は中を指定しない」の注に置いた。このため章は 13 ページではなく 12 ページ。
上書きしない・提案で変えるをこの章に置いたのは v6 の判断のとおり（core.md:63 は「2. 自治と権限」で Constitution の範囲で中を決める行 core.md:62 と同じ節。第 6 章 p.「目的を変えるなら、提案する」、第 7 章 p.「上書きしないので、届いた側が確かめる」、第 8 章 p.「変えたい側は、提案する」が先に使う）。
章番号: この章の本文・注・絵は v6 の章番号で書いた。
p.「上書きを許すと文脈が戻る」は書き手の読み（注のまま）。p.「例：決済と推薦の Constitution」の欄の中身は書き手が作った（注に書いた）。
絵の Cell の枠は入れ子にしない（core.md:43）。
082ceb2 の検算 3 便目を受けて直した（@ope-ultp1635 msg 468b4a37、判定の正本 @reviewer 2026-11-09-eaa-textbook-082ceb2-ch04-constitution-federation 97306492）: p.「Constitution の版を特定する」の絵の「採用するまで」を「移行が成り立つまで」にし（Contract は結ぶ Cell の全部が採用して移る、core.md:80）、絵に Contract の移り方（core.md:80）を 1 行足した。p.「Constitution は Cell の規範」に core.md:37 の「採用した」を戻し、誰が書いた Constitution をどの Cell が採用するかは Core に無いこと（core.md:94 の列挙にも無い）を版のページの注に、採用の判断主体（core.md:91）を同じページの絵に書いた。この本の読み（Cell が採用した Constitution をその Cell の規範と読む）は p.「Constitution は Cell の規範」の注のまま。p.「規範の範囲で中を決める」に core.md:62 の Contract を戻し（題・本文・絵。題は p.「規範と Contract の範囲で中を決める」）、章の概要・副題も同じにした。p.「Federation は中を指定しない」の名付けを概念表 core.md:29 の全体（中を指定しない＋共有する文書を通してつながる）にし、Contract が縛るのは合意した欄（core.md:38）でその範囲の中は各 Cell が決める、を絵に足した（core.md:62 と core.md:18 が両立すること）。「委託先の工程」→「委託先」（core.md:18「AA以外の開発主体」。工程は中の方式に当たる）、絵の「同じ形で」→「共有する文書で」。p.「断ることと義務を捨てることは別」の「合意した義務」→「すでに負っている義務」（core.md:70「既存義務」）。最後のページの送りを第 5 章の副題に揃えて「Contract に書いて明示する」にした。
-->

```svg
<svg viewBox="0 0 880 340" width="880" height="340">
  <rect x="40" y="40" width="250" height="220" rx="10" class="hl" style="fill:#fff"/>
  <text x="165" y="76" class="t hc" text-anchor="middle" font-weight="700">決済の Cell</text>
  <rect x="70" y="100" width="190" height="44" rx="6" class="soft"/><text x="165" y="128" class="ts" text-anchor="middle">Constitution</text>
  <path d="M165,148 V176" class="ln" marker-end="url(#arr)"/><text x="165" y="206" class="ts" text-anchor="middle">中を決める</text>
  <rect x="590" y="40" width="250" height="220" rx="10" class="hl" style="fill:#fff"/>
  <text x="715" y="76" class="t hc" text-anchor="middle" font-weight="700">推薦の Cell</text>
  <rect x="620" y="100" width="190" height="44" rx="6" class="soft"/><text x="715" y="128" class="ts" text-anchor="middle">Constitution</text>
  <path d="M715,148 V176" class="ln" marker-end="url(#arr)"/><text x="715" y="206" class="ts" text-anchor="middle">中を決める</text>
  <rect x="320" y="90" width="240" height="110" rx="3" class="box"/>
  <text x="440" y="130" class="ts" text-anchor="middle" font-weight="700">共有する文書</text>
  <text x="440" y="164" class="tx" text-anchor="middle">Contract・Ontology など</text>
  <path d="M290,145 H320 M560,145 H590" class="ln"/>
  <text x="440" y="234" class="tx" text-anchor="middle">相手の中の方式は指定しない</text>
  <text x="440" y="310" class="t" text-anchor="middle" font-weight="700">中は規範と Contract の範囲で決め、あいだは共有する文書でつなぐ</text>
</svg>
```

各 Cell は採用した規範（Constitution）と結んだ Contract の範囲で中を決め、ほかの Cell は上書きせずに提案します。Cell どうしは中の方式を指定せず、共有する文書でつながります。

## Constitution は Cell の規範

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

価値は一つのループに置かず、各 Cell の規範に書きます。Core は、採用した目的・価値・制約・権限・禁止事項を定める規範を Constitution と呼びます。

出典: EAA Core 版 6 の概念表「Constitution」。※ 採用した規範をその Cell の Constitution と読むのは書き手の読み。定義に「Cell ごと」の字は無い。

## 例：決済と推薦の Constitution

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="20" width="400" height="290" rx="10" class="hl" style="fill:#fff"/>
  <text x="230" y="54" class="t hc" text-anchor="middle" font-weight="700">決済の Constitution</text>
  <g class="ts">
    <text x="50" y="100" font-weight="700">目的</text><text x="140" y="100">注文の支払いを受ける</text>
    <text x="50" y="146" font-weight="700">価値</text><text x="140" y="146" class="hc">止めないことを優先する</text>
    <text x="50" y="192" font-weight="700">制約</text><text x="140" y="192">障害の日は変更を出さない</text>
    <text x="50" y="238" font-weight="700">権限</text><text x="140" y="238">決済の手順と設定を決める</text>
    <text x="50" y="284" font-weight="700">禁止</text><text x="140" y="284">確定した支払いを書き換えない</text>
  </g>
  <rect x="450" y="20" width="400" height="290" rx="10" class="hl" style="fill:#fff"/>
  <text x="650" y="54" class="t hc" text-anchor="middle" font-weight="700">推薦の Constitution</text>
  <g class="ts">
    <text x="470" y="100" font-weight="700">目的</text><text x="560" y="100">買いたい商品を見つけやすく</text>
    <text x="470" y="146" font-weight="700">価値</text><text x="560" y="146" class="hc">速く変えることを優先する</text>
    <text x="470" y="192" font-weight="700">制約</text><text x="560" y="192">試す変更は一部の利用者から</text>
    <text x="470" y="238" font-weight="700">権限</text><text x="560" y="238">推薦の並べ方を決める</text>
    <text x="470" y="284" font-weight="700">禁止</text><text x="560" y="284">同意の無い履歴は使わない</text>
  </g>
  <text x="440" y="352" class="ts sub" text-anchor="middle">障害の日に変更を出すかで答えが逆になる理由が、規範の字で読める</text>
</svg>
```

第 2 章で価値で切った、決済と推薦がそれぞれ採用した Constitution です。障害が出た日に変更を出すかで答えが逆になる理由を、それぞれの規範の字で読めます。

※ 例は説明のために作った。欄は概念表「Constitution」の目的・価値・制約・権限・禁止事項（絵では「禁止」）。欄の書き方は Core に無い。

## 規範と Contract の範囲で中を決める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="200" y="40" width="480" height="250" rx="10" class="hl" style="fill:#fff"/>
  <text x="440" y="74" class="t hc" text-anchor="middle" font-weight="700">決済の Cell</text>
  <rect x="230" y="100" width="200" height="44" rx="6" class="soft"/><text x="330" y="128" class="ts" text-anchor="middle">Constitution</text>
  <rect x="450" y="100" width="200" height="44" rx="6" class="soft"/><text x="550" y="128" class="ts" text-anchor="middle">結んだ Contract</text>
  <path d="M440,148 V180" class="ln" marker-end="url(#arr)"/>
  <rect x="300" y="190" width="280" height="60" rx="30" class="a"/><text x="440" y="226" class="ts on" text-anchor="middle">中の方式と実行を決める</text>
  <text x="440" y="340" class="t" text-anchor="middle" font-weight="700">判断のたびに価値を選び直さない</text>
</svg>
```

各 Cell は、合意して採用した規範と結んだ Contract の範囲で、中の方式と実行を決めます。決済の Cell は、止めないことを優先する規範の下で判断します。

出典: EAA Core 版 6「2. 自治と権限」。

## 親も横断も上書きしない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="20" width="240" height="80" rx="10" class="hl" style="fill:#fff"/><text x="160" y="66" class="ts hc" text-anchor="middle" font-weight="700">親 Cell</text>
  <rect x="40" y="120" width="240" height="90" rx="10" class="hl" style="fill:#fff"/><text x="160" y="158" class="ts hc" text-anchor="middle" font-weight="700">横断の Cell</text><text x="160" y="184" class="tx" text-anchor="middle">複数の Cell にまたがる責務</text>
  <rect x="40" y="230" width="240" height="80" rx="10" class="hl" style="fill:#fff"/><text x="160" y="266" class="ts hc" text-anchor="middle" font-weight="700">推薦の Cell</text><text x="160" y="290" class="tx" text-anchor="middle">速く変えることを優先する</text>
  <rect x="580" y="95" width="260" height="140" rx="10" class="hl" style="fill:#fff"/><text x="710" y="150" class="t hc" text-anchor="middle" font-weight="700">決済の Cell</text><text x="710" y="184" class="tx" text-anchor="middle">自分の判断</text>
  <g opacity=".7"><path d="M280,60 L576,130 M280,165 H576 M280,270 L576,200" class="xl dash" marker-end="url(#arr-x)"/></g>
  <use href="#i-no" x="420" y="72" width="24" height="24"/><use href="#i-no" x="420" y="134" width="24" height="24"/><use href="#i-no" x="420" y="238" width="24" height="24"/>
  <text x="440" y="356" class="ts sub" text-anchor="middle">どれも、一方的に上書きしない</text>
</svg>
```

親の Cell も、横断の Cell も、推薦の Cell も、決済の Cell の判断を一方的に上書きしません。速さの側へ書き換えることもしません。

出典: EAA Core 版 6「2. 自治と権限」、同 概念表「横断責務」。例は説明のために作った。

## 上書きを許すと文脈が戻る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="60" width="300" height="200" rx="10" class="hl" style="fill:#fff"/><text x="210" y="96" class="t hc" text-anchor="middle" font-weight="700">分けた Cell</text>
  <text x="210" y="160" class="ts" text-anchor="middle">いつ書き換えられるか</text><text x="210" y="186" class="ts" text-anchor="middle">を知るために</text>
  <path d="M360,160 H518" class="xl" marker-end="url(#arr-x)"/><text x="440" y="150" class="tx xc" text-anchor="middle">読みに行く</text>
  <rect x="520" y="60" width="300" height="200" rx="10" class="box"/><text x="670" y="96" class="t" text-anchor="middle" font-weight="700">上書きできる Cell</text>
  <text x="670" y="170" class="ts" text-anchor="middle">相手の事情・相手の価値</text>
  <text x="440" y="330" class="t xc" text-anchor="middle" font-weight="700">分けても、文脈は一つに戻る</text>
</svg>
```

上書きを許すと、分けた Cell は、いつ書き換えられるかを知るために相手の文脈まで読みます。分けても、文脈は一つに戻ります。

※ 書き手の読み。Core が上書きしない理由として書いた行ではない。

## 変えるときは提案で

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="70" width="260" height="180" rx="10" class="hl" style="fill:#fff"/><text x="170" y="106" class="t hc" text-anchor="middle" font-weight="700">変えたい側</text>
  <g class="tx"><text x="70" y="150">内容</text><text x="70" y="176">理由</text><text x="70" y="202">根拠</text></g>
  <path d="M300,160 H448" class="ln" marker-end="url(#arr)"/><text x="374" y="150" class="tx" text-anchor="middle">提案</text>
  <rect x="450" y="70" width="390" height="180" rx="10" class="hl" style="fill:#fff"/><text x="645" y="106" class="t hc" text-anchor="middle" font-weight="700">受けた Cell が確かめて決める</text>
  <g class="ts" text-anchor="middle"><text x="530" y="180">受け入れる</text><text x="645" y="180">直しを求める</text><text x="770" y="180">受け入れない</text></g>
  <text x="440" y="320" class="ts sub" text-anchor="middle">親子・兄弟・横断に、同じ原則を当てる</text>
</svg>
```

変えたい側は、内容・理由・根拠を示して提案します。受けた Cell が確かめて、受け入れるか、直しを求めるか、受け入れないかを決めます。

出典: EAA Core 版 6「4. 提案と変更」。

## 断ることと義務を捨てることは別

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="380" height="220" rx="10" class="box"/><text x="230" y="96" class="t" text-anchor="middle" font-weight="700">新しい提案を受け入れない</text>
  <use href="#i-ok" x="218" y="140" width="24" height="24"/><text x="230" y="200" class="ts" text-anchor="middle">受けた Cell が決めてよい</text>
  <rect x="460" y="60" width="380" height="220" rx="10" class="xl" style="fill:#fff"/><text x="650" y="96" class="t xc" text-anchor="middle" font-weight="700">すでに負っている義務を捨てる</text>
  <use href="#i-no" x="638" y="140" width="24" height="24"/><text x="650" y="200" class="ts" text-anchor="middle">一方的にはしない</text>
  <text x="440" y="336" class="ts sub" text-anchor="middle">果たせない・自分の権限で判断できないときは示して、正当な判断主体との調整に戻す</text>
</svg>
```

提案を受け入れないことと、すでに負っている義務を一方的に捨てることは別です。果たせない・自分の権限で判断できないときは、示して正当な判断主体との調整に戻します。

出典: EAA Core 版 6「2. 自治と権限」。

## Constitution の版を特定する

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="340" height="230" rx="10" class="box"/>
  <text x="210" y="76" class="t" text-anchor="middle" font-weight="700">版を特定する場面</text>
  <g class="ts"><text x="80" y="124">Profile を引き受ける</text><text x="80" y="164">Mission を渡す</text><text x="80" y="204">提案する</text></g>
  <path d="M384,155 H476" class="ln" marker-end="url(#arr)"/>
  <rect x="480" y="40" width="360" height="100" rx="6" class="soft"/>
  <text x="660" y="84" class="ts" text-anchor="middle">依存する版：Constitution 版 1</text><text x="660" y="114" class="tx" text-anchor="middle">Ontology・Contract の版も同じ</text>
  <rect x="480" y="170" width="360" height="100" rx="6" class="box"/>
  <text x="660" y="202" class="ts" text-anchor="middle">版 2 を公開した</text><text x="660" y="230" class="tx" text-anchor="middle">移行が成り立つまで、版 1 の合意が効く</text><text x="660" y="256" class="tx" text-anchor="middle">Contract は結ぶ Cell の全部が採用して移る</text>
  <text x="440" y="334" class="t" text-anchor="middle" font-weight="700">新しい版の公開と、各 Cell の採用は別</text>
  <text x="440" y="366" class="ts sub" text-anchor="middle">採用するかは、採用する側の規範の正当な所有者が決める（第 8 章）</text>
</svg>
```

Profile の引受、Mission、提案では、依存する Constitution の版を特定します。新しい版を公開しても、採用中の合意は移るまで効きます。

出典: EAA Core 版 6「3.」「4.」。Mission の版は第 6 章、採用の手続きは第 8 章。※ 誰が書いた Constitution をどの Cell が採用するかは Core に無い。

## Federation は中を指定しない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g>
    <rect x="40" y="60" width="240" height="200" rx="10" class="hl" style="fill:#fff"/><text x="160" y="96" class="ts hc" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="90" y="140" width="140" height="40" rx="20" class="a"/><text x="160" y="166" class="ts on" text-anchor="middle">Agent（AA）</text>
    <rect x="320" y="60" width="240" height="200" rx="10" class="hl" style="fill:#fff"/><text x="440" y="96" class="ts hc" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="370" y="140" width="140" height="40" rx="6" class="h"/><text x="440" y="166" class="ts on" text-anchor="middle">人のチーム</text>
    <rect x="600" y="60" width="240" height="200" rx="10" class="hl" style="fill:#fff"/><text x="720" y="96" class="ts hc" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="640" y="140" width="160" height="40" rx="6" class="soft"/><text x="720" y="166" class="ts" text-anchor="middle">委託先</text>
  </g>
  <path d="M280,220 H320 M560,220 H600" class="ln"/>
  <text x="440" y="320" class="t" text-anchor="middle" font-weight="700">中の作り方は問わず、共有する文書でつながる</text>
  <text x="440" y="356" class="ts sub" text-anchor="middle">Contract が縛るのは合意した欄だけ。その範囲の中は各 Cell が決める</text>
</svg>
```

Cell どうしが互いの中の方式を指定せず、共有する文書を通してつながる関係を Federation と呼びます。中が人のチームや委託先でも構いません。

出典: EAA Core 版 6「0.」「2.」、概念表「Federation」「Contract」。AA は単独でも成り立ち、分けた後の Cell を担う AA も同じ AA（同「0.」）。

## Cell どうしは共有する文書でつなぐ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="70" width="200" height="200" rx="10" class="hl" style="fill:#fff"/><text x="140" y="176" class="t hc" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="640" y="70" width="200" height="200" rx="10" class="hl" style="fill:#fff"/><text x="740" y="176" class="t hc" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="280" y="40" width="320" height="260" rx="3" class="box"/>
  <text x="440" y="76" class="t" text-anchor="middle" font-weight="700">Cell のあいだで共有する文書</text>
  <g class="ts"><text x="310" y="122">Contract</text><text x="310" y="158">共有する Profile</text><text x="310" y="194">共有する Ontology</text><text x="310" y="230">Evidence の様式</text></g>
  <text x="440" y="276" class="tx" text-anchor="middle">所有者・観測・準拠先を持つ</text>
  <path d="M240,170 H280 M600,170 H640" class="ln"/>
  <text x="440" y="346" class="ts sub" text-anchor="middle">これを通して、責任・権限・合意・Evidence をつなぐ</text>
</svg>
```

Federation は、共有する文書を通して Cell どうしの責任・権限・合意・Evidence をつなぎます。文書はどれも、所有者・観測・準拠先を持ちます。

出典: EAA Core 版 6 の概念表「Federation」、同「4. 提案と変更」（共有する文書の種類と、所有者・観測・準拠先）。

## 次章へ：切っても残る結合

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="80" width="260" height="160" rx="10" class="hl" style="fill:#fff"/><text x="190" y="166" class="t hc" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="560" y="80" width="260" height="160" rx="10" class="hl" style="fill:#fff"/><text x="690" y="166" class="t hc" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="350" y="130" width="180" height="60" rx="6" class="box"/><text x="440" y="166" class="ts" text-anchor="middle">渡すもの</text>
  <path d="M320,160 H350 M530,160 H560" class="ln"/>
  <text x="440" y="300" class="ts" text-anchor="middle">第 5 章</text>
</svg>
```

責務と規範を書いて切っても、Cell のあいだで渡すものは残ります。第 5 章から、その結合を Contract に書いて明示するやり方を見ます。
