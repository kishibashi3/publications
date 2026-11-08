# 第 9 章　版の公開と採用

群: 分業を続けながら境界を保つ
副題: 取り決めを変えるあいだも、成り立っている版で仕事を続ける

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（0f0a562c）の第 9 章。着手: @ope-ultp1635 msg adc84781（群四）。
この章が拠る本の考え: 各主体の文脈を疎結合にし、主体ごとにコンテキストスイッチが起きないように切り分ける（structure-v5.md「イデア」第 2 文。逐語は roles-kaz 側）。
2d0ca30 までの第 9 章（新しい版を公開しても、各 Cell が採用するまで合意は変わらない）の中身を、この章に持ってきた: 公開と採用は別（core.md:79）、採用の進み方の表（core.md:80、素材 3）、提案（core.md:84）、希望時間帯の例（素材 3）、承認して公開（core.md:90・98）、採用は各 Cell の規範の所有者（core.md:91）、判断する者の表と採用は通常の受入権限だけでは判断できない（core.md:89-91・93）、逆向きの変更（core.md:70、素材 3）、どの向きでも同じ手続き（core.md:85、profiles.md 7 節）、基盤の Cell も PR で提案（profiles.md 7 節）、導入の完了は Evidence（profiles.md 7 節）、正本の改訂と採用版の変更を分ける（profiles.md 4 節）、別の PR に（delivery-guide.md:517-533。適用例）、最後のページ。旧本文は 2d0ca30 の eaa-ch09.md にある。
直しを落とさずに持ってきた: ⑥（@ope-ultp1635 msg 6fc17eeb、@reviewer 2〜4 回目）— p.「承認して、新しい版を公開する」で在庫の側が承認しない理由は、改訂を判断するのが所有者（core.md:90）で所有者が物流の側にいる（core.md:98、第 6 章の例）から。core.md:94（提起者は承認しない）は人の単位の規定で、Cell の単位の分離ではない。注のまま。⑤（msg 281e5366）— 最後のページの見出しは「詳しい手順が未定のこと」、各項目は core.md:11 の既知の不足。2 周目（msg 8fbac4e5、@reader r2 cea29c1f）— 「既知の不足」の下の「詳しい手順は未定。いつ決めるかは書いていない」。
@reader 目次の通読（349c4d63）で読者が止まった所への答え: 第 6 章「すべてが同じ版を採用」と第 9 章「各 Cell は採用中の版の上で」の関係が組み立てられなかった。p.「成り立つ版は一つ、採用する版は Cell ごと」を置いた。Core は「採用中」を二つの所に使っている — core.md:80「Contractは、それを結ぶCellのすべてが同じ版を採用中になったときに」は各 Cell が採用した版、core.md:79「採用中の合意は移行が成立するまで有効である」はいま成り立っている合意。章題の「採用中の版の上で」は後者の側で、移行が成り立つまで、どの Cell もいま成り立っている版の上で仕事を続ける。表のページの右の列の名を「効いている版」から「成り立っている版」にし、2 列の違いを文に書いた。章題は v5 のまま使った（@ope-ultp1635 msg adc84781「v5 の章題は肯定で立ててあります。そのまま使ってください」）。
群五で章題を変えた（@ope-ultp1635 msg cfe0fe59）: 「各 Cell は採用中の版の上で」→「各 Cell は成り立っている版の上で」。v5 の字は目次だけで読むと core.md:80 の側（各 Cell が自分の採用した版）に読め、@reader の読者がそちらで止まった。題が言いたいのは core.md:79 の側（いま成り立っている合意）なので、p.「採用の進み方と、成り立っている版」の列名と同じ字にした。この本の考えの出どころには確かめていない（Core の字で決まる話、同 msg）。
p.「相手の切り替えを強いると、文脈が戻る」と p.「時間の上の疎結合は、この本の読み」は書き手の読み（第 2 章のコンテキストスイッチの判定を時間の上に当てた）。Core は疎結合・コンテキスト・切り替えの語を使っていない（core.md を grep で確認、どれも 0 件）。注に書いた。
旧本文の p.「基盤の Cell も、PR で提案する」の注「第 5 章の Platform を分けた例の続き」は、群二で書き直した第 5 章に Platform の例が無いので、第 5 章 p.「親も横断も上書きしない」の続きに替えた。p.「導入は、PR を出しても終わらない」の見出しを「導入の完了は、導入後の Evidence で確かめる」にした（中身は変えない）。
包含と同じ形の字として、profiles.md:62「EnterpriseがDomain Profileを提供する場合、Enterpriseが正本を管理する」と、profiles.md:107「EnterpriseのOntology」、development-model.md:45「DomainからEnterpriseへのOntology訂正」は使っていない（development-model.md:24 の Enterprise／Domain と同じ字の組）。提供側・引受側の表（profiles.md:65-68）は Enterprise の字を含まないので使った。
絵: Cell はどれもほかの Cell の枠の外に並べる（core.md:43）。
新しく引く外部の文献は無い。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff。判定の正本 @reviewer 2026-11-08-eaa-textbook-77a7fc9-ch00-04 / ch05-08 / ch09-12-furoku、@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）: p.「相手の切り替えを強いると、文脈が戻る」: 公開と採用を分けても、採用を決めるときに相手の事情は読む。変わるのは読む時期を相手が決められること（@reviewer 3 便 1.）。絵と文を直し、左の「在庫が変えた」（例では在庫は Contract を変えられない）を「変えた事情」にした。p.「時間の上の疎結合は、この本の読み」を外し、その中身をこのページの注にまとめた。次章へのページの文を第 10 章の新しい題に合わせた。
-->

> 新しい版は公開と採用を分け、変えたい側は提案し、採用は各 Cell の規範の所有者が決める。Contract が成り立つ版は一つで、移行が成り立つまで、どの Cell もいま成り立っている版の上で仕事を続ける。

```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <path d="M120,236 H840" class="ln" marker-end="url(#arr)"/><text x="840" y="260" class="tx" text-anchor="end">時間</text>
  <text x="70" y="96" class="ts" text-anchor="middle" font-weight="700">在庫</text><text x="70" y="176" class="ts" text-anchor="middle" font-weight="700">物流</text>
  <rect x="120" y="74" width="300" height="40" rx="3" class="lt" style="fill:#fff"/><text x="270" y="100" class="ts" text-anchor="middle">版 1</text>
  <rect x="420" y="74" width="420" height="40" rx="3" class="hl" style="fill:#fff"/><text x="630" y="100" class="ts hc" text-anchor="middle">版 2 を採用</text>
  <rect x="120" y="154" width="520" height="40" rx="3" class="lt" style="fill:#fff"/><text x="380" y="180" class="ts" text-anchor="middle">版 1</text>
  <rect x="640" y="154" width="200" height="40" rx="3" class="hl" style="fill:#fff"/><text x="740" y="180" class="ts hc" text-anchor="middle">版 2 を採用</text>
  <path d="M260,40 V220" class="lt dash"/><text x="260" y="32" class="tx" text-anchor="middle">版 2 を公開</text>
  <path d="M640,40 V220" class="ln"/><text x="640" y="32" class="ts okc" text-anchor="middle">ここで版 2 に移る</text>
  <text x="450" y="284" class="t" text-anchor="middle" font-weight="700">移るまで、在庫も物流も版 1 の上で仕事を続ける</text>
</svg>
```

取り決めを変えるあいだも、各 Cell は相手の変更に引きずられずに仕事を続けます。新しい版の公開と各 Cell の採用は別の行為で、結ぶ Cell が全部採用するまで、いま成り立っている版が効き続けるからです。

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
  <text x="440" y="340" class="ts sub" text-anchor="middle">第 2 章の判定（自分の仕事のあいだに別の文脈へ切り替えずに済むか）を、時間の上に当てる</text>
</svg>
```

一方の変更が即時の切り替えを強いると、相手は仕事を止めて事情を読みます。公開と採用を分けても事情は読みますが、いつ読むかを相手が決められます。

※ 書き手の読み（第 2 章の判定を時間の上に当てた）。Core が定めるのは、公開と採用を分けること、全部が採用して移ること、提案すること。

## 公開と採用は、別の行為

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="360" height="220" rx="10" class="soft"/>
  <text x="220" y="100" class="t" text-anchor="middle" font-weight="700">公開する</text>
  <text x="220" y="140" class="ts" text-anchor="middle">規範の所有者が、新しい版を出す</text>
  <text x="220" y="200" class="ts sub" text-anchor="middle">これだけでは、どの Cell の</text><text x="220" y="226" class="ts sub" text-anchor="middle">義務も変わらない</text>
  <rect x="480" y="60" width="360" height="220" rx="10" class="soft"/>
  <text x="660" y="100" class="t" text-anchor="middle" font-weight="700">採用する</text>
  <text x="660" y="140" class="ts" text-anchor="middle">各 Cell が、その版に従うと決める</text>
  <text x="660" y="200" class="ts sub" text-anchor="middle">自動では追随しない</text>
  <path d="M400,170 H476" class="ln" marker-end="url(#arr)"/><text x="440" y="160" class="tx" text-anchor="middle">別の時点</text>
</svg>
```

規範の新しい版を公開することと、各 Cell がそれを採用することは別の行為で、採用は自動では追随しません。いま成り立っている合意は、移行が成り立つまで効きます。

出典: EAA Core 版 6「3. 意味と合意」。

## 成り立つ版と、Cell ごとの採用

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="210" y="30" width="460" height="100" rx="3" class="hl" style="fill:#fff"/>
  <text x="440" y="64" class="t hc" text-anchor="middle" font-weight="700">Contract が成り立っている版</text>
  <text x="440" y="100" class="ts" text-anchor="middle">一つ。全部が同じ版を採用したときに決まる（第 6 章）</text>
  <rect x="40" y="190" width="340" height="120" rx="10" class="box"/><text x="210" y="226" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="210" y="270" class="ts" text-anchor="middle">在庫が採用中の版</text>
  <rect x="500" y="190" width="340" height="120" rx="10" class="box"/><text x="670" y="226" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <text x="670" y="270" class="ts" text-anchor="middle">物流が採用中の版</text>
  <path d="M210,186 V150 H670 V186 M440,150 V134" class="lt"/>
  <text x="440" y="356" class="ts sub" text-anchor="middle">二つが違うあいだは、前に成り立った版が効き、どの Cell もその上で仕事を続ける</text>
</svg>
```

第 6 章の「同じ版」は Contract に一つ成り立つ版で、採用中の版は Cell ごとです。違うあいだは前に成り立った版が効き、どの Cell もその上で続けます。

出典: EAA Core 版 6「3.」。※ Core は「採用中」を、各 Cell が採用した版にも、いま成り立っている合意にも使う。章の副題は、後者を「成り立っている版」と書いた。

## 採用の進み方と、成り立っている版

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="54" font-weight="700">できごと</text><text x="520" y="54" font-weight="700" text-anchor="middle">在庫が採用中</text><text x="650" y="54" font-weight="700" text-anchor="middle">物流が採用中</text><text x="780" y="54" font-weight="700" text-anchor="middle">成り立っている版</text>
    <text x="60" y="104">両方が版 1 を採用する</text><text x="520" y="104" text-anchor="middle">1</text><text x="650" y="104" text-anchor="middle">1</text><text x="780" y="104" text-anchor="middle">1（成立）</text>
    <text x="60" y="164">所有者が版 2 を公開する</text><text x="520" y="164" text-anchor="middle">1</text><text x="650" y="164" text-anchor="middle">1</text><text x="780" y="164" text-anchor="middle">1</text>
    <text x="60" y="224">在庫が版 2 を採用する</text><text x="520" y="224" text-anchor="middle" class="hc" font-weight="700">2</text><text x="650" y="224" text-anchor="middle">1</text><text x="780" y="224" text-anchor="middle" font-weight="700">1</text>
    <text x="60" y="284">物流が版 2 を採用する</text><text x="520" y="284" text-anchor="middle" class="hc" font-weight="700">2</text><text x="650" y="284" text-anchor="middle" class="hc" font-weight="700">2</text><text x="780" y="284" text-anchor="middle" class="okc" font-weight="700">2（移行）</text>
  </g>
  <path d="M40,72 H840 M40,132 H840 M40,192 H840 M40,252 H840" class="lt"/>
  <text x="440" y="342" class="ts sub" text-anchor="middle">3 行目、在庫は版 2 を採用しているが、在庫も物流も版 1 の上で仕事をする</text>
</svg>
```

在庫が版 2 を採用しても、物流が採用するまでは版 1 が成り立っています。在庫は物流に版 2 に従えとは言えず、物流は在庫の採用に合わせて切り替えずに済みます。

出典: EAA Core 版 6「3. 意味と合意」。※ 表は EAA 紹介 3 のもので、版の番号は説明のための仮定です。

## 変えたい側は、提案する

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="260" height="220" rx="10" class="box"/><text x="170" y="96" class="t" text-anchor="middle" font-weight="700">提案する Cell</text>
  <g class="ts"><text x="80" y="150">内容</text><text x="80" y="186">理由</text><text x="80" y="222">根拠</text></g>
  <path d="M300,170 H536" class="ln" marker-end="url(#arr)"/><use href="#i-pr" x="405" y="128" width="30" height="38"/><text x="420" y="196" class="ts" text-anchor="middle">提案</text>
  <rect x="540" y="60" width="300" height="220" rx="10" class="box"/><text x="690" y="96" class="t" text-anchor="middle" font-weight="700">対象の Cell</text>
  <text x="690" y="132" class="ts" text-anchor="middle">検証して、どれかに決める</text>
  <g class="ts" text-anchor="middle"><rect x="570" y="150" width="240" height="32" rx="3" class="lt" style="fill:#fff"/><text x="690" y="172">受け入れる</text><rect x="570" y="190" width="240" height="32" rx="3" class="lt" style="fill:#fff"/><text x="690" y="212">直してもらう</text><rect x="570" y="230" width="240" height="32" rx="3" class="lt" style="fill:#fff"/><text x="690" y="252">受け入れない</text></g>
</svg>
```

Cell のあいだの変更は、提案する側が内容・理由・根拠を示します。対象の Cell が検証して、受け入れる・直してもらう・受け入れない、のどれかに決めます。

出典: EAA Core 版 6「4. 提案と変更」。

## 例：出荷指示に希望時間帯を足したい

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="260" height="220" rx="10" class="box"/><text x="170" y="96" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <rect x="580" y="60" width="260" height="220" rx="10" class="box"/><text x="710" y="96" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="650" y="116" width="120" height="40" rx="6" class="h"/><text x="710" y="142" class="ts on" text-anchor="middle">所有者</text>
  <path d="M300,140 H646" class="ln" marker-end="url(#arr)"/><use href="#i-pr" x="425" y="98" width="30" height="38"/>
  <rect x="60" y="300" width="760" height="60" rx="10" class="soft"/>
  <g class="ts"><text x="80" y="326">内容：出荷指示に、配送の希望時間帯の欄を足したい</text><text x="80" y="350">理由・根拠：店舗からの要望が増えている</text></g>
  <text x="710" y="200" class="ts" text-anchor="middle">検証して決める</text>
</svg>
```

在庫の Cell が、出荷指示に希望時間帯の欄を足したいと、Contract の所有者に提案します。内容と理由・根拠を付け、所有者が検証して決めます。

※ 例は EAA 紹介 3 の、説明のための仮定です。出典: EAA Core 版 6「4. 提案と変更」。

## 承認して、新しい版を公開する

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="300" height="200" rx="10" class="box"/><text x="190" y="96" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="190" y="150" class="ts" text-anchor="middle">改訂を提起した</text>
  <use href="#i-no" x="176" y="172" width="28" height="28"/><text x="190" y="226" class="ts xc" text-anchor="middle">所有者がいないので承認しない</text>
  <rect x="540" y="60" width="300" height="200" rx="10" class="box"/><text x="690" y="96" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="630" y="116" width="120" height="40" rx="6" class="h"/><text x="690" y="142" class="ts on" text-anchor="middle">所有者</text>
  <use href="#i-ok" x="676" y="172" width="28" height="28"/><text x="690" y="226" class="ts okc" text-anchor="middle">承認して版 2 を公開</text>
  <text x="440" y="320" class="t" text-anchor="middle" font-weight="700">承認するのは Contract の所有者で、物流の側にいる</text>
</svg>
```

所有者が承認すると、版 2 が公開されます。承認する所有者は、この例では物流の側にいます。在庫の側が承認しないのは、在庫の側に所有者がいないからです。

出典: EAA Core 版 6「4.」、規定は第 10 章。※「提起した者は承認しない」は人の単位の決まりで、Cell の単位ではない。この例では提起した人と所有者が別の人。

## 採用するかは、各 Cell が決める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="300" y="30" width="280" height="60" rx="3" class="hl" style="fill:#fff"/><text x="440" y="66" class="ts hc" text-anchor="middle" font-weight="700">Contract　版 2（公開済み）</text>
  <rect x="40" y="130" width="340" height="190" rx="10" class="box"/><text x="210" y="166" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="210" y="216" class="ts" text-anchor="middle">在庫の規範の所有者が、</text><text x="210" y="242" class="ts" text-anchor="middle">採用するかを決める</text>
  <rect x="500" y="130" width="340" height="190" rx="10" class="box"/><text x="670" y="166" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <text x="670" y="216" class="ts" text-anchor="middle">物流の規範の所有者が、</text><text x="670" y="242" class="ts" text-anchor="middle">採用するかを決める</text>
  <text x="670" y="290" class="tx" text-anchor="middle">Contract の所有者がいる側も、自動では従わない</text>
  <path d="M380,94 L300,130 M500,94 L580,130" class="lt"/>
</svg>
```

在庫も物流も、それぞれの規範の所有者が、版 2 を採用するかを決めます。Contract の所有者がいる物流の側も、自分の所有者が出した版に自動では従いません。

出典: EAA Core 版 6「3. 意味と合意」「4. 提案と変更」。

## 何を、誰が判断するか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="60" font-weight="700">対象</text><text x="400" y="60" font-weight="700">判断する者</text>
    <text x="60" y="120">実装・設定の変更</text><text x="400" y="120">対象の Cell の規範と権限で定めた受入の担当</text>
    <text x="60" y="180">規範の改訂</text><text x="400" y="180">その規範の正当な所有者</text>
    <text x="60" y="240">規範の新しい版の採用</text><text x="400" y="240">採用する側の規範の正当な所有者</text>
  </g>
  <path d="M40,80 H840 M40,140 H840 M40,200 H840" class="lt"/>
  <rect x="40" y="276" width="800" height="70" rx="10" class="xl" style="fill:#fff"/>
  <text x="440" y="318" class="ts xc" text-anchor="middle">新しい版の採用は、ふつうの実装・設定の変更を受け入れる権限だけでは決められない</text>
</svg>
```

実装・設定の変更、規範の改訂、新しい版の採用は、判断する者が違います。新しい版の採用は、ふつうの変更を受け入れる権限だけでは決められません。

出典: EAA Core 版 6「4. 提案と変更」の表と本文。

## 逆向きの変更も、同じ順序で

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="260" height="200" rx="10" class="box"/><text x="170" y="96" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <rect x="580" y="60" width="260" height="200" rx="10" class="box"/><text x="710" y="96" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="650" y="116" width="120" height="40" rx="6" class="h"/><text x="710" y="142" class="ts on" text-anchor="middle">所有者</text>
  <text x="710" y="200" class="ts" text-anchor="middle">締めを 15 時から 14 時に</text><text x="710" y="224" class="ts" text-anchor="middle">早めた版 3 を公開</text>
  <path d="M576,170 H304" class="ln" marker-end="url(#arr)"/>
  <use href="#i-no" x="156" y="150" width="28" height="28"/><text x="170" y="210" class="ts" text-anchor="middle">採用しない</text>
  <rect x="40" y="290" width="800" height="60" rx="10" class="soft"/><text x="440" y="326" class="t" text-anchor="middle" font-weight="700">在庫が採用しなければ、15 時のまま</text>
</svg>
```

物流の側が締めの時刻を早めたい場合も同じです。所有者が承認して版を出しても、在庫が採用しなければ前の時刻のままで、物流は合意した義務を一方的に捨てられません。

出典: EAA Core 版 6「2. 自治と権限」「3. 意味と合意」。※ 例は EAA 紹介 3 の、説明のための仮定です。

## どの向きでも、同じ手続き

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="middle">
    <rect x="20" y="60" width="110" height="90" rx="10" class="box"/><text x="75" y="100">Cell</text><text x="75" y="126" class="tx">親（由来）</text>
    <rect x="170" y="60" width="110" height="90" rx="10" class="box"/><text x="225" y="100">Cell</text><text x="225" y="126" class="tx">子（由来）</text>
    <rect x="310" y="60" width="110" height="90" rx="10" class="box"/><text x="365" y="100">Cell</text><text x="365" y="126" class="tx">兄弟</text>
    <rect x="460" y="60" width="110" height="90" rx="10" class="box"/><text x="515" y="100">Cell</text><text x="515" y="126" class="tx">兄弟</text>
    <rect x="600" y="60" width="110" height="90" rx="10" class="box"/><text x="655" y="100">Cell</text><text x="655" y="126" class="tx">横断の責務</text>
    <rect x="750" y="60" width="110" height="90" rx="10" class="box"/><text x="805" y="100">Cell</text><text x="805" y="126" class="tx">ほか</text>
  </g>
  <path d="M132,105 H168" class="ln" marker-start="url(#arr)" marker-end="url(#arr)"/><path d="M422,105 H458" class="ln" marker-start="url(#arr)" marker-end="url(#arr)"/><path d="M712,105 H748" class="ln" marker-start="url(#arr)" marker-end="url(#arr)"/>
  <g class="ts" text-anchor="middle"><text x="150" y="196">提案と受入</text><text x="440" y="196">提案と受入</text><text x="730" y="196">提案と受入</text></g>
  <rect x="40" y="250" width="800" height="80" rx="10" class="soft"/>
  <text x="440" y="296" class="t" text-anchor="middle" font-weight="700">どの組み合わせにも、相手の中を直接変える権限は作らない</text>
</svg>
```

提案と受入の手続きは、親子・兄弟・横断のどの向きにも同じように当てます。どの組み合わせにも、相手の中を直接変える特別な権限はありません。

出典: EAA Core 版 6「4. 提案と変更」、EAA Profiles「7. 横断責務の実行」。

## 基盤の Cell も、PR で提案する

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="260" height="220" rx="10" class="box"/><text x="170" y="96" class="t" text-anchor="middle" font-weight="700">Platform の Cell</text>
  <rect x="580" y="60" width="260" height="220" rx="10" class="box"/><text x="710" y="96" class="t" text-anchor="middle" font-weight="700">業務の Cell</text>
  <path d="M300,140 H576" class="ln" marker-end="url(#arr)"/><use href="#i-pr" x="425" y="100" width="30" height="38"/><text x="440" y="164" class="ts" text-anchor="middle">CI/CD の変更の PR</text>
  <text x="710" y="150" class="ts" text-anchor="middle">自分の規範と Contract に</text><text x="710" y="174" class="ts" text-anchor="middle">合うかを確かめて</text>
  <use href="#i-ok" x="696" y="190" width="28" height="28"/><text x="710" y="240" class="ts okc" text-anchor="middle">受け入れる</text>
  <path d="M576,240 H304" class="ln" marker-end="url(#arr)"/><text x="440" y="232" class="ts" text-anchor="middle">提供条件への変更提案</text>
  <text x="440" y="330" class="t" text-anchor="middle" font-weight="700">基盤を担っていても、相手の中を直接は変えない</text>
</svg>
```

Platform を担う Cell も、CI/CD の変更は PR で提案します。受け取った Cell が、規範と Contract に合うかを確かめて受け入れます。

出典: EAA Profiles「7. 横断責務の実行」。第 5 章 p.「親も横断も上書きしない」の続きです。

## 導入の完了は Evidence で

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M80,200 H820" class="ln" marker-end="url(#arr)"/>
  <g class="ts" text-anchor="middle">
    <rect x="80" y="160" width="180" height="80" rx="6" class="soft"/><text x="170" y="206">PR を出した</text>
    <rect x="340" y="160" width="180" height="80" rx="6" class="soft"/><text x="430" y="206">受け入れられた</text>
    <rect x="600" y="160" width="200" height="80" rx="6" class="h"/><text x="700" y="196" class="on">導入後に成り立った</text><text x="700" y="222" class="on">ことを Evidence で確認</text>
  </g>
  <use href="#i-no" x="156" y="110" width="28" height="28"/><use href="#i-no" x="416" y="110" width="28" height="28"/><use href="#i-ok" x="686" y="110" width="28" height="28"/>
  <text x="440" y="300" class="t" text-anchor="middle" font-weight="700">完了するのは、右端だけ</text>
</svg>
```

ほかの Cell への導入を目的とする Mission は、提案を出しただけでは完了しません。導入した後に成り立ったことを、Evidence で確かめます。

出典: EAA Profiles「7. 横断責務の実行」。完了の条件は第 7 章で見ました。

## 正本の改訂と、採用版の変更を分ける

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="56" font-weight="700">起点</text><text x="260" y="56" font-weight="700">正本の改訂</text><text x="570" y="56" font-weight="700">採用している版の変更</text>
    <text x="60" y="120">提供する側が</text><text x="60" y="144">変えたい</text>
    <text x="260" y="120">提起した者以外の正本の所有者が</text><text x="260" y="144">承認し、新しい版を公開する</text>
    <text x="570" y="120">引き受けた側へ採用を提案し、</text><text x="570" y="144">引き受けた側が決める</text>
    <text x="60" y="210">引き受けた側が</text><text x="60" y="234">変えたい</text>
    <text x="260" y="210">提供する側へ提案し、提供する側が</text><text x="260" y="234">承認して新しい版を公開する</text>
    <text x="570" y="210">引き受けた側が中身を確かめ、</text><text x="570" y="234">採用するかを決める</text>
  </g>
  <path d="M40,76 H840 M40,170 H840 M240,30 V260 M550,30 V260" class="lt"/>
  <text x="440" y="316" class="ts sub" text-anchor="middle">承認済みの古い版は上書きしない。採用する版と中身を固定する</text>
</svg>
```

Profile の正本は提供する側が持ち、引き受けた側は採用した版を特定します。どちらが変えたい場合も、正本の改訂と採用している版の変更を別に扱います。

出典: EAA Profiles「4.」の「改訂元と採用先を分ける」。

## PR では、正本と採用版を別の PR に

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="340" height="220" rx="10" class="box"/><text x="210" y="76" class="t" text-anchor="middle" font-weight="700">提供する側の repo</text>
  <use href="#i-pr" x="110" y="104" width="26" height="32"/><text x="150" y="126" class="ts">正本を改訂する PR</text>
  <rect x="80" y="170" width="260" height="56" rx="3" class="hl" style="fill:#fff"/><text x="210" y="204" class="ts hc" text-anchor="middle">Profile　版 2（固定）</text>
  <rect x="500" y="40" width="340" height="220" rx="10" class="box"/><text x="670" y="76" class="t" text-anchor="middle" font-weight="700">引き受けた側の repo</text>
  <use href="#i-pr" x="560" y="104" width="26" height="32"/><text x="600" y="126" class="ts">採用版を更新する PR</text>
  <rect x="540" y="170" width="260" height="56" rx="6" class="soft"/><text x="670" y="196" class="ts" text-anchor="middle">CLAUDE.md から</text><text x="670" y="218" class="ts" text-anchor="middle">版 2 を参照する</text>
  <path d="M540,198 H344" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="300" class="ts" text-anchor="middle">参照は latest ではなく、承認済みの中身を特定できる固定版</text>
  <text x="440" y="334" class="ts sub" text-anchor="middle">正本の PR・採用版の PR・採用の結果を関連づけ、実際の採用版を追えるようにする</text>
</svg>
```

GitHub では、正本を改訂する PR と採用版を更新する PR を分けます。それぞれの文書の所有者が判断でき、参照先は固定した版にします。

出典: EAA Delivery Guide「20. Profile 改訂・採用 Pattern」（適用例）。

## Core はここまでしか決めていない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="380" height="290" rx="10" class="soft"/>
  <text x="60" y="64" class="t" font-weight="700">Core が決めていること</text>
  <g class="ts"><use href="#i-ok" x="60" y="88" width="22" height="22"/><text x="92" y="105">公開と採用は別</text>
  <use href="#i-ok" x="60" y="128" width="22" height="22"/><text x="92" y="145">全部が採用して移る</text>
  <use href="#i-ok" x="60" y="168" width="22" height="22"/><text x="92" y="185">提案と受入、判断する者</text>
  <use href="#i-ok" x="60" y="208" width="22" height="22"/><text x="92" y="225">どの向きでも同じ手続き</text></g>
  <rect x="460" y="30" width="380" height="290" rx="10" fill="url(#hatch)"/>
  <text x="480" y="64" class="t" font-weight="700">詳しい手順が未定のこと</text>
  <g class="ts"><text x="480" y="102" class="ts" font-weight="700">既知の不足（Core の冒頭が挙げた）</text><text x="480" y="126" class="tx">詳しい手順は未定。いつ決めるかは書いていない</text><text x="480" y="160" class="ts">移行中の責任</text><text x="480" y="194" class="ts">複数の Cell にまたがる変更の</text><text x="480" y="218" class="ts">互換性・適用順・部分失敗からの復旧</text><text x="480" y="252" class="ts">合意不成立の調整</text><text x="480" y="286" class="ts">外部の制約の変化・緊急時の調整</text></g>
  <text x="440" y="356" class="ts sub" text-anchor="middle">手順が未定の調整を、ほかの Cell からの一方的な強制で埋めない</text>
</svg>
```

右の項目は、どれも Core が冒頭で既知の不足として挙げたものです。扱いが無いのではなく、未定なのは詳しい手順です。

出典: EAA Core 版 6 冒頭の観測欄（既知の不足）と「2. 自治と権限」。

## 次章へ：改訂の承認

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="80" width="260" height="160" rx="10" class="box"/><text x="190" y="150" class="t" text-anchor="middle" font-weight="700">提起する者</text><text x="190" y="186" class="ts" text-anchor="middle">改訂を出す</text>
  <rect x="560" y="80" width="260" height="160" rx="10" class="hl" style="fill:#fff"/><text x="690" y="150" class="t hc" text-anchor="middle" font-weight="700">承認する者</text><text x="690" y="186" class="ts" text-anchor="middle">人間の所有者</text>
  <path d="M320,160 H556" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="300" class="ts" text-anchor="middle">第 10 章</text>
</svg>
```

この章では、版を出すのは所有者の承認でした。第 10 章では、その承認を誰が担うかと、実行者が自分の権限を広げないことを見ます。
