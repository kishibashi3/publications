# 第 3 章　Constitution と Federation

群: Cell の責務と規範
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
v7 で畳んだ（構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v7.md 863f5176。本文 GO: @ope-ultp1635 msg d9ab1757、kishibashi3「うん」）: 12 → 4 ページ。p.「Constitution は Cell の規範」に p.「例：決済と推薦の Constitution」（絵）p.「規範と Contract の範囲で中を決める」（本文 2 文目。「採用した」と「規範と Contract」は残した）。p.「上書きせず、提案で変える」に p.「親も横断も上書きしない」p.「変えるときは提案で」p.「上書きを許すと文脈が戻る」（書き手の読みとして注）p.「断ることと義務を捨てることは別」。p.「Federation は中を指定しない」に p.「Cell どうしは共有する文書でつなぐ」（文書の一覧と所有者・観測・準拠先を絵に。第 7 章 p.「Evidence の様式も共有する文書」の受け皿もこの絵の一覧）。移した: p.「Constitution の版を特定する」は第 7 章 p.「公開と採用は、別の行為」の注へ（3 便目で書く。字は ledger に逐語で控えた）。落とした: p.「次章へ：切っても残る結合」。落とした字と行き先: writer-ja/drafts/eaa-toc/fold-v7-ledger.md。
第 1 章（職能による分業の限界）を Cell の境界の章に畳み、章番号を 1 つ詰めた（@ope-ultp1635 msg 352dee1a）。群の名前を「Cell の責務と規範」にした（境界はいまの第 1 章の群一へ移った。Profile が責務、Constitution が規範、Federation は Cell どうしの規範として読む）。上のメモの章番号は書いた時点のまま。
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
  <rect x="30" y="20" width="400" height="260" rx="10" class="hl" style="fill:#fff"/>
  <text x="230" y="52" class="t hc" text-anchor="middle" font-weight="700">決済が採用した Constitution</text>
  <g class="ts">
    <text x="50" y="94" font-weight="700">目的</text><text x="140" y="94">注文の支払いを受ける</text>
    <text x="50" y="136" font-weight="700">価値</text><text x="140" y="136" class="hc">止めないことを優先する</text>
    <text x="50" y="178" font-weight="700">制約</text><text x="140" y="178">障害の日は変更を出さない</text>
    <text x="50" y="220" font-weight="700">権限</text><text x="140" y="220">決済の手順と設定を決める</text>
    <text x="50" y="262" font-weight="700">禁止</text><text x="140" y="262">確定した支払いを書き換えない</text>
  </g>
  <rect x="450" y="20" width="400" height="260" rx="10" class="hl" style="fill:#fff"/>
  <text x="650" y="52" class="t hc" text-anchor="middle" font-weight="700">推薦が採用した Constitution</text>
  <g class="ts">
    <text x="470" y="94" font-weight="700">目的</text><text x="560" y="94">買いたい商品を見つけやすく</text>
    <text x="470" y="136" font-weight="700">価値</text><text x="560" y="136" class="hc">速く変えることを優先する</text>
    <text x="470" y="178" font-weight="700">制約</text><text x="560" y="178">試す変更は一部の利用者から</text>
    <text x="470" y="220" font-weight="700">権限</text><text x="560" y="220">推薦の並べ方を決める</text>
    <text x="470" y="262" font-weight="700">禁止</text><text x="560" y="262">同意の無い履歴は使わない</text>
  </g>
  <text x="440" y="316" class="ts" text-anchor="middle">価値は一つのループに置かず、各 Cell が採用した規範に書く。中の方式と実行はその範囲で決める</text>
  <text x="440" y="356" class="ts sub" text-anchor="middle">障害の日に変更を出すかで答えが逆になる理由が、規範の字で読める</text>
</svg>
```

Core は、採用した目的・価値・制約・権限・禁止事項の規範を Constitution と呼びます。Cell はこの規範と結んだ Contract の範囲で中を決めます。

出典: EAA Core 版 6 の概念表「Constitution」、「2.」。※ 採用した規範をその Cell の Constitution と読むのは書き手の読み。例は説明のために作った。

## 上書きせず、提案で変える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="middle">
    <rect x="30" y="20" width="200" height="56" rx="10" class="hl" style="fill:#fff"/><text x="130" y="54" class="hc" font-weight="700">親 Cell</text>
    <rect x="30" y="92" width="200" height="56" rx="10" class="hl" style="fill:#fff"/><text x="130" y="126" class="hc" font-weight="700">横断の Cell</text>
    <rect x="30" y="164" width="200" height="56" rx="10" class="hl" style="fill:#fff"/><text x="130" y="198" class="hc" font-weight="700">推薦の Cell</text>
  </g>
  <g opacity=".6"><path d="M230,48 L330,96 M230,120 H330 M230,192 L330,144" class="xl dash"/></g>
  <use href="#i-no" x="334" y="108" width="24" height="24"/><text x="294" y="244" class="tx xc" text-anchor="middle">一方的に上書きしない</text>
  <path d="M370,120 H430" class="ln" marker-end="url(#arr)"/><text x="400" y="110" class="tx" text-anchor="middle">提案</text>
  <rect x="436" y="20" width="414" height="200" rx="10" class="hl" style="fill:#fff"/>
  <text x="643" y="52" class="t hc" text-anchor="middle" font-weight="700">決済の Cell が確かめて決める</text>
  <text x="643" y="86" class="tx" text-anchor="middle">提案には、内容・理由・根拠を示す</text>
  <g class="ts" text-anchor="middle"><text x="520" y="130">受け入れる</text><text x="643" y="130">直しを求める</text><text x="770" y="130">受け入れない</text></g>
  <rect x="456" y="152" width="374" height="52" rx="6" class="xl" style="fill:#fff"/>
  <text x="643" y="174" class="tx" text-anchor="middle">すでに負っている義務は、一方的に捨てない</text>
  <text x="643" y="194" class="tx" text-anchor="middle">果たせないときは示して、正当な判断主体との調整に戻す</text>
  <rect x="30" y="268" width="820" height="56" rx="8" class="soft"/>
  <text x="440" y="302" class="ts" text-anchor="middle">上書きを許すと、分けた Cell は書き換えられる時を知るために相手の文脈まで読み、文脈は一つに戻る</text>
  <text x="440" y="356" class="ts sub" text-anchor="middle">親子・兄弟・横断に、同じ原則を当てる</text>
</svg>
```

親も横断の Cell も、相手の判断を一方的に上書きせず、内容・理由・根拠を示して提案します。受け入れないことと、すでに負っている義務を捨てることは別です。

出典: EAA Core 版 6「2. 自治と権限」「4. 提案と変更」、概念表「横断責務」。※ 上書きを許すと文脈が戻る、は書き手の読み。例は説明のために作った。

## Federation は中を指定しない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g>
    <rect x="30" y="20" width="200" height="120" rx="10" class="hl" style="fill:#fff"/><text x="130" y="52" class="ts hc" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="60" y="80" width="140" height="36" rx="18" class="a"/><text x="130" y="104" class="ts on" text-anchor="middle">Agent（AA）</text>
    <rect x="30" y="152" width="200" height="120" rx="10" class="hl" style="fill:#fff"/><text x="130" y="184" class="ts hc" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="60" y="212" width="140" height="36" rx="6" class="h"/><text x="130" y="236" class="ts on" text-anchor="middle">人のチーム</text>
    <rect x="650" y="20" width="200" height="120" rx="10" class="hl" style="fill:#fff"/><text x="750" y="52" class="ts hc" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="680" y="80" width="140" height="36" rx="6" class="soft"/><text x="750" y="104" class="ts" text-anchor="middle">委託先</text>
  </g>
  <rect x="280" y="20" width="320" height="252" rx="3" class="box"/>
  <text x="440" y="54" class="t" text-anchor="middle" font-weight="700">Cell のあいだで共有する文書</text>
  <g class="ts"><text x="310" y="96">Contract</text><text x="310" y="128">共有する Profile</text><text x="310" y="160">共有する Ontology</text><text x="310" y="192">Evidence の様式</text></g>
  <text x="440" y="226" class="tx" text-anchor="middle">どれも、所有者・観測・準拠先を持つ</text><text x="440" y="252" class="tx" text-anchor="middle">これを通して、責任・権限・合意・Evidence をつなぐ</text>
  <path d="M230,80 H280 M230,212 H280 M600,80 H650" class="ln"/>
  <text x="750" y="190" class="tx" text-anchor="middle">相手の中の方式は</text><text x="750" y="210" class="tx" text-anchor="middle">指定しない</text>
  <text x="440" y="316" class="t" text-anchor="middle" font-weight="700">中の作り方は問わず、共有する文書でつながる</text>
  <text x="440" y="356" class="ts sub" text-anchor="middle">Contract が縛るのは合意した欄だけ。その範囲の中は各 Cell が決める</text>
</svg>
```

Cell どうしが互いの中の方式を指定せず、共有する文書を通してつながる関係を Federation と呼びます。中が人のチームや委託先でも構いません。

出典: EAA Core 版 6「0.」「2.」「4.」、概念表「Federation」「Contract」。AA は単独でも成り立ち、分けた後の Cell を担う AA も同じ AA（「0.」）。
