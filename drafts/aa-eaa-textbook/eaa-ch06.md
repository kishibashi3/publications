# 第 6 章　版の改訂と採用

群: 取り決めの改訂と Cell の分け直し
副題: 取り決めの版は、所有者が承認し、各 Cell が採用して移る

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v7.md（863f5176）の第 7 章。着手: @ope-ultp1635 msg 58cbdf2b（便 3）。本文 GO: @ope-ultp1635 msg d9ab1757、kishibashi3「うん」。
v7 で畳んだ: 5b5aea2 の eaa-ch07.md（版の公開と採用、18 ページ）と eaa-ch08.md（改訂の承認と権限、18 ページ）を 1 章 8 ページにした。前の字は `git show 5b5aea2:drafts/aa-eaa-textbook/eaa-ch0{7,8}.md`。ページごとの行き先と落とした字: writer-ja/drafts/eaa-toc/fold-v7-ledger.md の便 3。
p.「公開と採用は、別の行為」の絵の下の行に、第 4 章から移した p.「Constitution の版を特定する」の字（Profile の引受・Mission・提案では依存する版を特定する、core.md:78）を置いた。誰が書いた Constitution をどの Cell が採用するかは Core に無い（core.md:94 の列挙にも無い）は注に。
p.「改訂は提起者でない人間の所有者が承認する」は、便 2 の判定（@ope-ultp1635 msg 58cbdf2b の判定 2）を受けて、共有する文書の所有者が人間であること（core.md:94）を Evidence の様式を含む文書の一覧と一緒に絵の上の段に置いた。題は v7 の表の字（22 字）を build の上限 20 字に収めた。
v7 の残す字: 提起した者は、文書を提供する側に属していても承認しない（core.md「4.」）は p.「改訂は…」の本文。対象は Cell の境界（どの軸で切った境界も、core.md:24）は p.「実行者は、自分の権限を広げない」の絵の下の行。
章番号: この章の本文・注・絵は v7 の章番号（10 章）で書いた。
検算 1 便目と v7 の通読を受けて直した（@ope-ultp1635 msg 9628f0a9。判定の正本 roles-kaz reviewer/feedback-archive/2026-11-09-eaa-textbook-d0dd000-fold-v7-1-core.md、reader/feedback-archive/2026-11-09-eaa-textbook-v7-68p-6readers.md）: p.「相手の切り替えを強いると、文脈が戻る」を 454f55d の eaa-ch08.md:41-57 から戻した（便 3 の「落としたままでよい」の判定の誤り。旧ページは @reviewer 3 便 1. の判定を既に取り込んでいた）。p.「公開と採用は、別の行為」の絵の行「物流は在庫に合わせて切り替えずに済む」は第 2 章の判定の字と同じで限定が無かったので、「物流は事情を、自分の採用を決めるときに読む」にした。p.「所有者は、結ぶ Cell が合意して決める」の注「冒頭の観測欄」を「Core が冒頭に挙げた既知の不足」に（@reader 長谷川・片山）。p.「正本の改訂と、採用版の変更を分ける」の注に、提供する側は発注元か委託先かの区別ではないと足した。
-->

> 変えたい側は内容・理由・根拠を付けて提案し、提起していない人間の所有者が承認して新しい版を公開する。採用は各 Cell の規範の所有者が決め、Contract は結ぶ Cell が全部同じ版を採用するまで、いま成り立っている版で効く。実行者は自分の権限を自分で広げない。

```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <path d="M120,236 H840" class="ln" marker-end="url(#arr)"/><text x="840" y="260" class="tx" text-anchor="end">時間</text>
  <text x="70" y="96" class="ts" text-anchor="middle" font-weight="700">在庫</text><text x="70" y="176" class="ts" text-anchor="middle" font-weight="700">物流</text>
  <rect x="120" y="74" width="300" height="40" rx="3" class="lt" style="fill:#fff"/><text x="270" y="100" class="ts" text-anchor="middle">版 1</text>
  <rect x="420" y="74" width="420" height="40" rx="3" class="hl" style="fill:#fff"/><text x="630" y="100" class="ts hc" text-anchor="middle">版 2 を採用</text>
  <rect x="120" y="154" width="520" height="40" rx="3" class="lt" style="fill:#fff"/><text x="380" y="180" class="ts" text-anchor="middle">版 1</text>
  <rect x="640" y="154" width="200" height="40" rx="3" class="hl" style="fill:#fff"/><text x="740" y="180" class="ts hc" text-anchor="middle">版 2 を採用</text>
  <path d="M260,40 V220" class="lt dash"/><text x="260" y="32" class="tx" text-anchor="middle">所有者が承認して版 2 を公開</text>
  <path d="M640,40 V220" class="ln"/><text x="640" y="32" class="ts okc" text-anchor="middle">ここで版 2 に移る</text>
  <text x="450" y="284" class="t" text-anchor="middle" font-weight="700">移るまで、在庫も物流も版 1 の上で仕事を続ける</text>
</svg>
```

取り決めを変えるあいだも、各 Cell は相手の変更に引きずられずに仕事を続けます。改訂は一人の都合では通らず、新しい版は結ぶ Cell が全部採用して初めて移ります。

## 公開と採用は、別の行為

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="10" width="360" height="96" rx="10" class="soft"/>
  <text x="220" y="40" class="ts" text-anchor="middle" font-weight="700">公開する</text>
  <text x="220" y="66" class="tx" text-anchor="middle">規範の所有者が、新しい版を出す</text>
  <text x="220" y="90" class="tx" text-anchor="middle">これだけでは、どの Cell の義務も変わらない</text>
  <rect x="480" y="10" width="360" height="96" rx="10" class="soft"/>
  <text x="660" y="40" class="ts" text-anchor="middle" font-weight="700">採用する</text>
  <text x="660" y="66" class="tx" text-anchor="middle">各 Cell の規範の所有者が、従うと決める</text>
  <text x="660" y="90" class="tx" text-anchor="middle">自動では追随しない</text>
  <path d="M400,58 H476" class="ln" marker-end="url(#arr)"/><text x="440" y="50" class="tx" text-anchor="middle">別の時点</text>
  <g class="tx">
    <text x="60" y="140" font-weight="700">できごと</text><text x="500" y="140" font-weight="700" text-anchor="middle">在庫が採用中</text><text x="630" y="140" font-weight="700" text-anchor="middle">物流が採用中</text><text x="770" y="140" font-weight="700" text-anchor="middle">成り立っている版</text>
    <text x="60" y="172">両方が版 1 を採用する</text><text x="500" y="172" text-anchor="middle">1</text><text x="630" y="172" text-anchor="middle">1</text><text x="770" y="172" text-anchor="middle">1（成立）</text>
    <text x="60" y="204">所有者が版 2 を公開する</text><text x="500" y="204" text-anchor="middle">1</text><text x="630" y="204" text-anchor="middle">1</text><text x="770" y="204" text-anchor="middle">1</text>
    <text x="60" y="236">在庫が版 2 を採用する</text><text x="500" y="236" text-anchor="middle" class="hc" font-weight="700">2</text><text x="630" y="236" text-anchor="middle">1</text><text x="770" y="236" text-anchor="middle" font-weight="700">1</text>
    <text x="60" y="268">物流が版 2 を採用する</text><text x="500" y="268" text-anchor="middle" class="hc" font-weight="700">2</text><text x="630" y="268" text-anchor="middle" class="hc" font-weight="700">2</text><text x="770" y="268" text-anchor="middle" class="okc" font-weight="700">2（移行）</text>
  </g>
  <path d="M40,150 H840 M40,182 H840 M40,214 H840 M40,246 H840" class="lt"/>
  <text x="440" y="306" class="ts" text-anchor="middle">在庫が先に採用しても版 1 の上で続く。物流は事情を、自分の採用を決めるときに読む</text>
  <text x="440" y="340" class="tx" text-anchor="middle">Profile の引受・Mission・提案では、依存する Ontology・Constitution・Contract の版を特定する</text>
  <text x="440" y="364" class="tx" text-anchor="middle">新しい版を公開しても、採用中の合意は移行が成り立つまで効く</text>
</svg>
```

新しい版の公開と、各 Cell の採用は別の行為です。Contract は結ぶ Cell が全部同じ版を採用して移り、それまではいま成り立っている版が効きます。

出典: EAA Core 版 6「3.」。※ 表の版の番号は EAA 紹介 3 の仮定。誰が書いた Constitution をどの Cell が採用するかは Core に無い。

## 相手の切り替えを強いると、文脈が戻る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M440,30 V300" class="lt dash"/>
  <text x="220" y="56" class="t" text-anchor="middle" font-weight="700">変えた時点で、相手も切り替える</text>
  <rect x="40" y="80" width="360" height="190" rx="10" class="box"/><text x="220" y="116" class="ts" text-anchor="middle" font-weight="700">物流の Cell</text>
  <text x="220" y="160" class="ts" text-anchor="middle">自分の仕事を止めて、</text><text x="220" y="186" class="ts" text-anchor="middle">変えた事情をすぐ読む</text>
  <use href="#i-no" x="206" y="212" width="28" height="28"/>
  <text x="660" y="56" class="t hc" text-anchor="middle" font-weight="700">採用するまで、前の版のまま</text>
  <rect x="480" y="80" width="360" height="190" rx="10" class="hl" style="fill:#fff"/><text x="660" y="116" class="ts hc" text-anchor="middle" font-weight="700">物流の Cell</text>
  <text x="660" y="160" class="ts" text-anchor="middle">版 1 の上で仕事を続け、事情は</text><text x="660" y="186" class="ts" text-anchor="middle">採用を決めるときに読む</text>
  <use href="#i-ok" x="646" y="212" width="28" height="28"/>
  <text x="440" y="340" class="ts sub" text-anchor="middle">第 1 章の判定（自分の仕事のあいだに別の文脈へ切り替えずに済むか）を、時間の上に当てる</text>
</svg>
```

一方の変更が即時の切り替えを強いると、相手は仕事を止めて事情を読みます。公開と採用を分けても事情は読みますが、いつ読むかを相手が決められます。

※ 書き手の読み（第 1 章の判定を時間の上に当てた）。Core が定めるのは、公開と採用を分けること、全部が採用して移ること、提案すること。

## 例：出荷指示に希望時間帯を足したい

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="middle">
    <rect x="20" y="20" width="190" height="150" rx="10" class="box"/><text x="115" y="48" font-weight="700">提案する</text>
    <rect x="240" y="20" width="190" height="150" rx="10" class="box"/><text x="335" y="48" font-weight="700">承認する</text>
    <rect x="460" y="20" width="190" height="150" rx="10" class="box"/><text x="555" y="48" font-weight="700">公開する</text>
    <rect x="680" y="20" width="180" height="150" rx="10" class="hl" style="fill:#fff"/><text x="770" y="48" class="hc" font-weight="700">採用する</text>
  </g>
  <g class="tx" text-anchor="middle">
    <text x="115" y="80">在庫の Cell が</text><text x="115" y="102">内容・理由・根拠を付けて</text><text x="115" y="124">所有者に出す</text>
    <text x="335" y="80">Contract の所有者</text><text x="335" y="102">（物流の側にいる）が</text><text x="335" y="124">検証して承認する</text>
    <text x="555" y="80">欄を足した版 2 を</text><text x="555" y="102">公開する</text>
    <text x="770" y="80">在庫も物流も、</text><text x="770" y="102">それぞれの規範の</text><text x="770" y="124">所有者が決める</text>
  </g>
  <path d="M212,95 H236 M432,95 H456 M652,95 H676" class="ln" marker-end="url(#arr)"/>
  <rect x="20" y="192" width="840" height="58" rx="8" class="soft"/>
  <g class="tx"><text x="40" y="216">内容：出荷指示に、配送の希望時間帯の欄を足したい</text><text x="40" y="238">理由・根拠：店舗からの要望が増えている</text></g>
  <text x="840" y="227" class="tx" text-anchor="end">所有者のいる物流も、自動では従わない</text>
  <rect x="20" y="268" width="840" height="64" rx="8" class="box"/>
  <text x="40" y="294" class="ts" font-weight="700">逆向きも同じ順序</text><text x="200" y="294" class="tx">物流が締めを 15 時から 14 時に早めた版 3 を、所有者が承認して公開する</text>
  <text x="200" y="318" class="tx xc">在庫が採用しなければ、15 時のまま。物流は、すでに負っている義務を一方的に捨てない</text>
  <text x="440" y="366" class="ts sub" text-anchor="middle">承認するのは Contract の所有者で、物流の側にいる。在庫の側に所有者はいない</text>
</svg>
```

在庫が欄を足したいと所有者に提案し、所有者が検証して承認し、版 2 を公開します。採用するかは在庫も物流もそれぞれ決め、逆向きの変更も同じ順序です。

※ 例は EAA 紹介 3 の、説明のための仮定。出典: EAA Core 版 6「2.」「3.」「4.」。この例では、提起した人と所有者が別の人。

## どの向きでも、同じ手続き

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="middle">
    <rect x="20" y="10" width="110" height="64" rx="10" class="box"/><text x="75" y="38">Cell</text><text x="75" y="60" class="tx">親（由来）</text>
    <rect x="170" y="10" width="110" height="64" rx="10" class="box"/><text x="225" y="38">Cell</text><text x="225" y="60" class="tx">子（由来）</text>
    <rect x="310" y="10" width="110" height="64" rx="10" class="box"/><text x="365" y="38">Cell</text><text x="365" y="60" class="tx">兄弟</text>
    <rect x="460" y="10" width="110" height="64" rx="10" class="box"/><text x="515" y="38">Cell</text><text x="515" y="60" class="tx">兄弟</text>
    <rect x="600" y="10" width="110" height="64" rx="10" class="box"/><text x="655" y="38">Cell</text><text x="655" y="60" class="tx">横断の責務</text>
    <rect x="750" y="10" width="110" height="64" rx="10" class="box"/><text x="805" y="38">Cell</text><text x="805" y="60" class="tx">ほか</text>
  </g>
  <path d="M132,42 H168" class="ln" marker-start="url(#arr)" marker-end="url(#arr)"/><path d="M422,42 H458" class="ln" marker-start="url(#arr)" marker-end="url(#arr)"/><path d="M712,42 H748" class="ln" marker-start="url(#arr)" marker-end="url(#arr)"/>
  <text x="440" y="100" class="ts" text-anchor="middle">どの組み合わせも提案と受入。相手の中を直接変える権限は作らない</text>
  <g class="tx">
    <text x="60" y="138" font-weight="700">対象</text><text x="330" y="138" font-weight="700">判断する者</text>
    <text x="60" y="166">実装・設定の変更</text><text x="330" y="166">対象の Cell の規範と権限で定めた受入の担当</text>
    <text x="60" y="194">規範の改訂</text><text x="330" y="194">その規範の正当な所有者</text>
    <text x="60" y="222">規範の新しい版の採用</text><text x="330" y="222" class="hc" font-weight="700">採用する側の規範の正当な所有者（ふつうの変更の受入権限では決められない）</text>
  </g>
  <path d="M40,146 H840 M40,174 H840 M40,202 H840 M310,122 V232" class="lt"/>
  <rect x="40" y="250" width="390" height="104" rx="10" class="soft"/>
  <use href="#i-pr" x="112" y="262" width="18" height="22"/><text x="247" y="278" class="ts" text-anchor="middle" font-weight="700">基盤の Cell も、PR で提案する</text>
  <text x="235" y="304" class="tx" text-anchor="middle">Platform を担う Cell の CI/CD の変更も PR で出す</text>
  <text x="235" y="328" class="tx" text-anchor="middle">受け取った Cell が、規範と Contract に合うかを確かめる</text>
  <rect x="450" y="250" width="390" height="104" rx="10" class="soft"/>
  <text x="645" y="278" class="ts" text-anchor="middle" font-weight="700">導入の完了は Evidence で</text>
  <text x="645" y="304" class="tx" text-anchor="middle">ほかの Cell への導入を目的とする Mission は、</text>
  <text x="645" y="328" class="tx" text-anchor="middle">PR を出しても、受け入れられても完了しない</text>
  <text x="645" y="346" class="tx" text-anchor="middle">導入後に成り立ったことを Evidence で確かめる</text>
</svg>
```

提案と受入は、親子・兄弟・横断のどの向きにも同じように当てます。判断する者は対象で違い、新しい版の採用はふつうの変更の受入権限では決められません。

出典: EAA Core 版 6「4.」の表と本文、EAA Profiles「7. 横断責務の実行」（基盤の Cell の PR、導入の完了）。上書きしない原則は第 3 章。

## 正本の改訂と、採用版の変更を分ける

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="tx">
    <text x="60" y="34" font-weight="700">起点</text><text x="250" y="34" font-weight="700">正本の改訂</text><text x="560" y="34" font-weight="700">採用している版の変更</text>
    <text x="60" y="70">提供する側が変えたい</text>
    <text x="250" y="62">提起した者以外の正本の所有者が</text><text x="250" y="82">承認し、新しい版を公開する</text>
    <text x="560" y="62">引き受けた側へ採用を提案し、</text><text x="560" y="82">引き受けた側が決める</text>
    <text x="60" y="124">引き受けた側が変えたい</text>
    <text x="250" y="116">提供する側へ提案し、提供する側が</text><text x="250" y="136">承認して新しい版を公開する</text>
    <text x="560" y="116">引き受けた側が中身を確かめ、</text><text x="560" y="136">採用するかを決める</text>
  </g>
  <path d="M40,44 H840 M40,98 H840 M230,16 V152 M540,16 V152" class="lt"/>
  <rect x="40" y="176" width="370" height="110" rx="10" class="box"/>
  <text x="225" y="204" class="ts" text-anchor="middle" font-weight="700">提供する側の repo</text>
  <rect x="80" y="220" width="290" height="50" rx="6" class="soft"/><text x="225" y="242" class="tx" text-anchor="middle">正本を改訂する PR</text><text x="225" y="262" class="tx hc" text-anchor="middle" font-weight="700">Profile　版 2（固定）</text>
  <rect x="470" y="176" width="370" height="110" rx="10" class="box"/>
  <text x="655" y="204" class="ts" text-anchor="middle" font-weight="700">引き受けた側の repo</text>
  <rect x="510" y="220" width="290" height="50" rx="6" class="soft"/><text x="655" y="242" class="tx" text-anchor="middle">採用版を更新する PR</text><text x="655" y="262" class="tx" text-anchor="middle">CLAUDE.md から版 2 を参照する</text>
  <path d="M410,245 H466" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="318" class="ts sub" text-anchor="middle">参照は latest ではなく、承認済みの中身を特定できる固定版。古い版は上書きしない</text>
  <text x="440" y="350" class="tx" text-anchor="middle">二つの PR と採用の結果を関連づけ、実際の採用版を追えるようにする</text>
</svg>
```

Profile の正本は提供する側が持ち、引き受けた側は採用した版を特定します。どちらが変えたい場合も、正本の改訂と採用版の変更を別にし、PR も分けます。

出典: EAA Profiles「4.」、Delivery Guide「20.」（PR の分け方は適用例）。※ 提供する側は Profile を出した側で、発注元か委託先かの区別ではない。

## 改訂は提起者でない人間の所有者が承認する

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="10" width="800" height="100" rx="10" class="box"/>
  <text x="60" y="38" class="ts" font-weight="700">Cell のあいだで共有する文書</text><text x="290" y="38" class="tx">Contract・共有する Profile・共有する Ontology・Evidence の様式、と EAA Core</text>
  <g class="tx">
    <text x="60" y="68" font-weight="700">所有者</text><text x="130" y="68">変更を承認する人。人間</text>
    <text x="320" y="68" font-weight="700">観測</text><text x="370" y="68">見直しの根拠に残す記録</text>
    <text x="580" y="68" font-weight="700">準拠先</text><text x="640" y="68">改訂の承認と版を定めた文書</text>
  </g>
  <text x="440" y="96" class="tx" text-anchor="middle">どれも、所有者・観測・準拠先を持つ。Cell の中の規範の改訂の手続きは、各 Cell が決める</text>
  <rect x="40" y="134" width="230" height="120" rx="10" class="soft"/>
  <text x="155" y="164" class="ts" text-anchor="middle" font-weight="700">改訂を提起した者</text>
  <text x="155" y="192" class="tx xc" text-anchor="middle">その改訂は承認しない</text>
  <text x="155" y="220" class="tx" text-anchor="middle">提供する側に属していても</text>
  <path d="M272,194 H340" class="ln" marker-end="url(#arr)"/>
  <rect x="344" y="160" width="160" height="68" rx="3" class="hl" style="fill:#fff"/><text x="424" y="200" class="ts hc" text-anchor="middle">改訂の案</text>
  <path d="M506,194 H574" class="ln" marker-end="url(#arr)"/>
  <rect x="578" y="134" width="262" height="120" rx="10" class="h"/>
  <text x="709" y="168" class="ts on" text-anchor="middle" font-weight="700">提起していない所有者</text>
  <text x="709" y="196" class="tx on" text-anchor="middle">人間。Agent は所有者にならない</text>
  <text x="709" y="224" class="ts on" text-anchor="middle">承認する</text>
  <text x="440" y="292" class="ts" text-anchor="middle">同じ判断を、行う者と承認・検証する者に分ける（職務分離）。Mission の完了も同じ</text>
  <text x="440" y="330" class="tx" text-anchor="middle">提起した者が自分で承認できると、一人の都合の版が相手に届き、相手は採用のたびにそれを読み解く</text>
  <text x="440" y="356" class="tx" text-anchor="middle">承認を提起と別の人にすると、その版は届く前に止まる</text>
</svg>
```

共有する文書の所有者は人間で、改訂はその所有者が承認します。提起した者は、文書を提供する側に属していても、その改訂を承認しません。

出典: EAA Core 版 6「4.」、概念表「職務分離」、EAA Profiles「4.」。※ 届く前に止まる、は書き手の読み。準拠先は自己改訂規範アーキテクチャ v1・最小構成。

## 所有者は、結ぶ Cell が合意して決める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="10" width="390" height="130" rx="10" class="hl" style="fill:#fff"/>
  <text x="235" y="38" class="ts hc" text-anchor="middle" font-weight="700">決め方</text>
  <text x="235" y="66" class="tx" text-anchor="middle">結ぶ Cell に属する人から 1 人を、</text>
  <text x="235" y="88" class="tx" text-anchor="middle">結ぶ Cell が合意して決める。後任も同じ</text>
  <text x="235" y="118" class="tx" text-anchor="middle">結んでいない部門は、あいだの取り決めを持たない</text>
  <rect x="450" y="10" width="390" height="130" rx="10" class="xl" style="fill:#fff"/>
  <text x="645" y="38" class="ts xc" text-anchor="middle" font-weight="700">それだけでは後任の根拠にならない</text>
  <g class="tx" text-anchor="middle"><text x="645" y="66">離れた所有者の指名</text><text x="645" y="88">所有者が属していた Cell だけの決定</text><text x="645" y="110">Cell の親子関係・Agent の申告</text></g>
  <path d="M60,214 H820" class="ln" marker-end="url(#arr)"/><text x="830" y="240" class="tx" text-anchor="end">時間</text>
  <rect x="60" y="176" width="190" height="30" rx="3" class="lt" style="fill:#fff"/><text x="155" y="196" class="tx" text-anchor="middle">所有者がいる</text>
  <rect x="250" y="176" width="350" height="30" rx="3" class="xl" style="fill:#fff"/><text x="425" y="196" class="tx xc" text-anchor="middle">改訂は承認されない（成り立っている版は効く）</text>
  <rect x="600" y="176" width="220" height="30" rx="3" class="hl" style="fill:#fff"/><text x="710" y="196" class="tx hc" text-anchor="middle">後任が決まった</text>
  <text x="250" y="164" class="tx" text-anchor="middle">結ぶ Cell のどれにも属さなくなった</text>
  <rect x="40" y="262" width="800" height="90" rx="10" class="soft"/>
  <text x="440" y="290" class="ts" text-anchor="middle">所有者がいない間も、すでに認められている停止・取消は使える</text>
  <text x="440" y="316" class="tx" text-anchor="middle">緊急であることや元に戻せることを、改訂の承認や新しい権限の理由にしない</text>
  <text x="440" y="338" class="tx" text-anchor="middle">後任が決まっても、承認されていなかった改訂が承認されたことにはならない</text>
</svg>
```

Contract の所有者は、結ぶ Cell に属する 1 人を結ぶ Cell が合意して決めます。離れたら後任が決まるまで改訂は承認されず、後任も同じ合意で決めます。

出典: EAA Core 版 6「4. 提案と変更」。※ 後任の合意が成り立たないときは、合意不成立（Core が冒頭に挙げた既知の不足）として扱う。

## 実行者は、自分の権限を広げない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="10" width="800" height="54" rx="10" class="box"/>
  <text x="440" y="44" class="ts" text-anchor="middle" font-weight="700">物流の Cell で出荷を担う Agent</text>
  <g class="tx" text-anchor="middle">
    <rect x="40" y="84" width="250" height="170" rx="10" class="soft"/>
    <text x="165" y="112" class="ts" font-weight="700">規範を緩めたい</text>
    <text x="165" y="140">「欠品の理由を残す手順を外したい」</text>
    <use href="#i-no" x="88" y="162" width="18" height="18"/><text x="176" y="176" class="xc">自分では承認しない</text>
    <text x="165" y="206">緩めるかは、</text><text x="165" y="228">正当な所有者が承認して決める</text>
    <rect x="315" y="84" width="250" height="170" rx="10" class="soft"/>
    <text x="440" y="112" class="ts" font-weight="700">権限が足りない</text>
    <text x="440" y="140">「在庫の引き当てを直接書き換えたい」</text>
    <use href="#i-no" x="356" y="162" width="18" height="18"/><text x="451" y="176" class="xc">自分で権限を足さない</text>
    <text x="440" y="206">足りないと示して、</text><text x="440" y="228">正当な判断主体との調整に戻す</text>
    <rect x="590" y="84" width="250" height="170" rx="10" class="soft"/>
    <text x="715" y="112" class="ts" font-weight="700">書き込める</text>
    <text x="715" y="140">Profile の正本を編集できる・</text><text x="715" y="160">リポジトリに書き込める</text>
    <use href="#i-no" x="662" y="182" width="18" height="18"/><text x="726" y="196" class="xc">承認ではない</text>
    <text x="715" y="222">これだけでは、義務を消す・緩める・</text><text x="715" y="242">権限を足す、はできない</text>
  </g>
  <text x="440" y="300" class="t" text-anchor="middle" font-weight="700">自分を縛る規範を自分で緩めず、権限を自分で広げない</text>
  <text x="440" y="340" class="ts sub" text-anchor="middle">どの軸で切った Cell の境界も、この規定で保つ</text>
</svg>
```

実行者は、自分を縛る規範を緩める変更を自分で承認せず、自ら権限を広げません。足りないときは、それを示して正当な判断主体との調整に戻します。

出典: EAA Core 版 6「2.」「4.」、EAA Profiles「4.」（正本の編集権）。※ 書き込みの権限を編集権に当てたのは書き手の読み。例は仮定。
