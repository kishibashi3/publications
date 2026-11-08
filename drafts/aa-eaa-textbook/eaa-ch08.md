# 第 8 章　Evidence

群: 切っても残る結合の持ち方
副題: 成果は、作った側に聞かずに Evidence で確かめる

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（7a7f5737）の第 8 章。着手: @ope-ultp1635 msg 6ad8d3f2（群三）。
この章が拠る本の考え: 各主体の文脈を疎結合にする（structure-v5.md「イデア」第 2 文。逐語は roles-kaz 側）。
2d0ca30 までの第 6 章（境界を越えるのは Evidence で、語の定義は両側が共有して持つ）から持ってきた: 越えるのは確かめる記録（core.md:20-21・39）、Evidence になる記録の例（delivery-guide.md:203-212。英語の node 名は日本語に開いた）、作った Cell を介さずに確かめる（core.md:22）、ずれは受け入れなかったときに見える（core.md:23）、推測で越えず照会か変更提案で解く（core.md:23・76）、Ontology の対応はずれから足す（core.md:23）、Evidence の様式も共有する文書（core.md:41・94）、最後のページ（⑤ と 2 周目の直しのまま）。旧本文は 2d0ca30 の eaa-ch06.md にある。
持ってこなかったもの: Ontology の定義と「同じ定義を両側が持つ、と読む」（③ の直し）。Ontology は群二の第 4 章 p.「またぐ語は Ontology に書く」「違いは消さずに対応を書く」で扱った。読みのページは、2 周目で @reader の読者の 1 体が何の話か分からず飛ばし、別の 1 体は社内で確定させる所としてメモした（@reader r2 cea29c1f）所で、置くなら Ontology を定める第 4 章。第 4 章の「境界の両側がそれぞれ持ちます」は ③ の読み（同じ定義を両側が持つ）と字が揃っていない。群二の直しとして @ope-ultp1635 に報告し、群四の着手便（msg adc84781）で第 4 章を直して読みのページもそこに置いた。在庫と物流の例の導入は第 6 章へ移した。
@ope-ultp1635 msg 6ad8d3f2 で回されたもの:
(1) 「上書きしないので届いた側が確かめる」（core.md:22）。向きは Core のまま — 上書きしない（§2、第 5 章）が前提で、受け取った Cell が確かめるのが帰結。@reviewer 2026-11-08 ch00-05 2-3 の直し。二つの「受け取った Cell」を混ぜない — この章の「受け取った Cell」は Evidence を受け取った Cell。第 5 章の「受け取った Cell」は分割で責務と判断権限を受け取った Cell。p.「二つの『受け取った』を分ける」に書いた。子の Evidence を親が受け取るなら確かめるのは親で、親が子の判断を上書きしない根拠は core.md:63 が直接書く（第 5 章で引いた）。
(2) Evidence の定義に「判断」を含める（core.md:39「成果や判断の成立を検証可能にする記録」、@reviewer 4 回目の軽微）。リード・章の概要の文・p.「Evidence は成果と判断の記録」・例（欠品と判断した理由）に入れた。
p.「作った側に聞くと、その文脈に入る」は書き手の読み（第 2 章のコンテキストスイッチの字）。注に書いた。
p.「例：出荷結果を突き合わせる」の「出荷しました」の申告だけの記録は、@reviewer ch06-09 3-1 が挙げた形（作った側の申告だけで答えた Evidence は core.md:22 を満たさない）を例にした。
「出荷日」のずれは第 4 章の例（在庫では引当を確定した日、物流では便に積んだ日）のまま。2d0ca30 の第 6 章の値（倉庫を出た日・配送業者に渡した日）からは替えた。第 4 章と揃えるため。
絵: Cell はどれもほかの Cell の枠の外に並べる（core.md:43）。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff。判定の正本 @reviewer 2026-11-08-eaa-textbook-77a7fc9-ch00-04 / ch05-08 / ch09-12-furoku、@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）: p.「対応はずれから Ontology に足す」の絵に「対応」の行を足し（core.md:23）、文を「対応を使って、相手の Evidence を自分の意味で読める」にした。第 4 章の「自分の仕事の中では在庫の意味」と揃う。
-->

> Evidence は成果や判断の成立を確かめる記録で、受け取った Cell が作った Cell を介さずに確かめられる形にする。意味のずれは受け入れられなかったときに見え、照会か変更提案で解く。

```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <rect x="30" y="30" width="280" height="200" rx="10" class="box"/><text x="170" y="64" class="t" text-anchor="middle" font-weight="700">作った Cell</text>
  <text x="170" y="130" class="tx" text-anchor="middle">作った側の事情</text>
  <rect x="570" y="30" width="280" height="200" rx="10" class="box"/><text x="710" y="64" class="t" text-anchor="middle" font-weight="700">受け取った Cell</text>
  <path d="M310,110 H566" class="ln" marker-end="url(#arr)"/><use href="#i-pr" x="425" y="66" width="30" height="38"/><text x="440" y="132" class="ts" text-anchor="middle" font-weight="700">Evidence</text>
  <use href="#i-ok" x="696" y="110" width="28" height="28"/><text x="710" y="166" class="ts okc" text-anchor="middle">記録だけで確かめる</text>
  <g opacity=".6"><path d="M566,196 H314" class="xl dash" marker-end="url(#arr-x)"/><use href="#i-no" x="428" y="176" width="24" height="24"/></g><text x="440" y="222" class="tx xc" text-anchor="middle">聞きに行かない</text>
  <text x="440" y="270" class="t" text-anchor="middle" font-weight="700">確かめるのに、相手の文脈を読みに行かない</text>
</svg>
```

受け取った成果は、作った Cell に聞かずに、記録だけで確かめます。成果と判断が成り立ったことを示す記録が Evidence で、その形にして渡します。

## 作った側に聞くと、その文脈に入る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="300" height="200" rx="10" class="box"/><text x="190" y="96" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="190" y="160" class="ts" text-anchor="middle">本当に出荷された？</text>
  <path d="M340,140 H536" class="xl" marker-end="url(#arr-x)"/><text x="440" y="130" class="tx xc" text-anchor="middle">聞く</text>
  <path d="M536,200 H344" class="xl" marker-end="url(#arr-x)"/><text x="440" y="226" class="tx xc" text-anchor="middle">物流の事情で答える</text>
  <rect x="540" y="60" width="300" height="200" rx="10" class="box"/><text x="690" y="96" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <text x="690" y="170" class="ts" text-anchor="middle">便・倉庫・人の手配</text>
  <text x="440" y="330" class="t xc" text-anchor="middle" font-weight="700">確かめるたびに、相手の文脈を読む</text>
</svg>
```

受け取った成果を、作った側に「本当に合っていますか」と聞いて確かめると、そのたびに相手の事情を読みます。切った文脈が、確かめの所で戻ります。

※ 書き手の読み。聞きに行くのは、第 2 章のコンテキストスイッチに当たる。

## Evidence は成果と判断の記録

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="240" height="200" rx="10" class="box"/><text x="160" y="96" class="t" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="600" y="60" width="240" height="200" rx="10" class="box"/><text x="720" y="96" class="t" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="70" y="130" width="180" height="40" rx="3" class="hl" style="fill:#fff"/><text x="160" y="156" class="ts hc" text-anchor="middle">成果</text>
  <rect x="70" y="186" width="180" height="40" rx="3" class="hl" style="fill:#fff"/><text x="160" y="212" class="ts hc" text-anchor="middle">判断</text>
  <path d="M280,178 H596" class="ln" marker-end="url(#arr)"/><use href="#i-pr" x="425" y="130" width="30" height="38"/>
  <text x="440" y="200" class="ts" text-anchor="middle" font-weight="700">Evidence</text>
  <text x="440" y="226" class="tx" text-anchor="middle">成り立ったことを確かめられる記録</text>
  <text x="440" y="320" class="t" text-anchor="middle" font-weight="700">Cell どうしは、この記録で互いの成果の上に積む</text>
</svg>
```

Evidence は、成果や判断が成り立ったことを確かめられるようにする記録です。Cell の境界を越えて流れるのはこれで、受け取った側は確かめて次を積みます。

出典: EAA Core 版 6「0. 目的と範囲」と概念表「Evidence」。

## Evidence になる記録の例

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="middle">
    <rect x="40" y="50" width="185" height="64" rx="3" class="lt" style="fill:#fff"/><text x="132" y="88">PR</text>
    <rect x="245" y="50" width="185" height="64" rx="3" class="lt" style="fill:#fff"/><text x="337" y="88">実行できるテスト</text>
    <rect x="450" y="50" width="185" height="64" rx="3" class="lt" style="fill:#fff"/><text x="542" y="88">CI の実行結果</text>
    <rect x="655" y="50" width="185" height="64" rx="3" class="lt" style="fill:#fff"/><text x="747" y="88">本番の実行記録</text>
    <rect x="40" y="134" width="185" height="64" rx="3" class="lt" style="fill:#fff"/><text x="132" y="172">突き合わせの結果</text>
    <rect x="245" y="134" width="185" height="64" rx="3" class="lt" style="fill:#fff"/><text x="337" y="172">切り戻しの結果</text>
    <rect x="450" y="134" width="185" height="64" rx="3" class="h"/><text x="542" y="172" class="on">人間の判断の記録</text>
    <rect x="655" y="134" width="185" height="64" rx="3" class="lt" style="fill:#fff"/><text x="747" y="172">外部の確認</text>
  </g>
  <rect x="40" y="236" width="800" height="90" rx="10" class="soft"/>
  <text x="440" y="272" class="t" text-anchor="middle" font-weight="700">どれも、作った側に聞かずに確かめられる形で残す</text>
  <text x="440" y="304" class="ts sub" text-anchor="middle">どれを Evidence にするかは、Contract と Mission で決める</text>
</svg>
```

PR、テスト、CI の実行結果、本番の実行記録、突き合わせや切り戻しの結果、人間の判断の記録などが Evidence になります。

出典: EAA Delivery Guide「8.」の Evidence Graph の例（適用例）。英語の名前は日本語に開いた（Actions・production trace など）。

## 上書きしないので、届いた側が確かめる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="70" width="360" height="160" rx="10" class="box"/>
  <text x="220" y="110" class="ts" text-anchor="middle" font-weight="700">前提（第 5 章）</text>
  <text x="220" y="150" class="ts" text-anchor="middle">どの Cell の判断も、</text><text x="220" y="176" class="ts" text-anchor="middle">ほかの Cell は上書きしない</text>
  <path d="M400,150 H476" class="ln" marker-end="url(#arr)"/>
  <rect x="480" y="70" width="360" height="160" rx="10" class="hl" style="fill:#fff"/>
  <text x="660" y="110" class="ts hc" text-anchor="middle" font-weight="700">帰結</text>
  <text x="660" y="150" class="ts" text-anchor="middle">流れてきたものを確かめるのは、</text><text x="660" y="176" class="ts" text-anchor="middle">それを受け取った Cell</text>
  <text x="440" y="300" class="t" text-anchor="middle" font-weight="700">作った側が代わりに確かめて、決めることはない</text>
</svg>
```

どの Cell の判断も、ほかの Cell は上書きしません。だから、流れてきた成果を確かめるのは、それを受け取った Cell です。

出典: EAA Core 版 6「0. 目的と範囲」。上書きしないことが前提で、確かめる側はその帰結（Core の向きのまま）。

## 二つの「受け取った」を分ける

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M440,30 V300" class="lt dash"/>
  <text x="220" y="56" class="t hc" text-anchor="middle" font-weight="700">この章</text>
  <text x="220" y="96" class="ts" text-anchor="middle">Evidence を受け取った Cell</text>
  <text x="220" y="140" class="tx" text-anchor="middle">確かめる側</text>
  <text x="220" y="220" class="ts" text-anchor="middle">子の Evidence を親が受け取れば、</text><text x="220" y="246" class="ts" text-anchor="middle">確かめるのは親</text>
  <text x="660" y="56" class="t" text-anchor="middle" font-weight="700">第 5 章</text>
  <text x="660" y="96" class="ts" text-anchor="middle">分割で責務を受け取った Cell</text>
  <text x="660" y="140" class="tx" text-anchor="middle">判断の権限を持つ側</text>
  <text x="660" y="220" class="ts" text-anchor="middle">親がその判断を上書きしないのは、</text><text x="660" y="246" class="ts" text-anchor="middle">別の行が決める</text>
  <text x="440" y="340" class="ts sub" text-anchor="middle">同じ「受け取った」でも、受け取る物が違う</text>
</svg>
```

この章で受け取るのは Evidence で、第 5 章の分割で受け取るのは責務と判断の権限です。子の Evidence を親が受け取れば、確かめるのは親です。

出典: EAA Core 版 6「0. 目的と範囲」「2. 自治と権限」（親 Cell も上書きしない）。

## 介さずに確かめられる形にする

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="70" width="240" height="200" rx="10" class="box"/><text x="160" y="106" class="t" text-anchor="middle" font-weight="700">作った Cell</text>
  <rect x="600" y="70" width="240" height="200" rx="10" class="box"/><text x="720" y="106" class="t" text-anchor="middle" font-weight="700">受け取った Cell</text>
  <path d="M280,150 H596" class="ln" marker-end="url(#arr)"/><use href="#i-pr" x="425" y="110" width="30" height="38"/><text x="440" y="172" class="ts" text-anchor="middle">Evidence</text>
  <use href="#i-ok" x="636" y="140" width="28" height="28"/><text x="750" y="160" class="ts okc" text-anchor="middle">記録だけで確かめる</text>
  <path d="M596,236 H284" class="xl dash" marker-end="url(#arr-x)"/><use href="#i-no" x="428" y="214" width="24" height="24"/><text x="440" y="262" class="ts xc" text-anchor="middle">「本当に合っていますか」と聞かないと分からない</text>
  <text x="440" y="330" class="t" text-anchor="middle" font-weight="700">作る側が、確かめられる形で残す</text>
</svg>
```

確かめるのが受け取った Cell なので、Evidence は、受け取った側が作った Cell を介さずに確かめられる形にします。その形で残すのは作る側です。

出典: EAA Core 版 6「0. 目的と範囲」。

## 例：出荷結果を突き合わせる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="390" height="290" rx="10" class="xl" style="fill:#fff"/>
  <text x="235" y="64" class="t xc" text-anchor="middle" font-weight="700">確かめられない</text>
  <rect x="70" y="90" width="330" height="60" rx="3" class="lt" style="fill:#fff"/><text x="235" y="126" class="ts" text-anchor="middle">物流の「出荷しました」の報告</text>
  <use href="#i-no" x="223" y="170" width="24" height="24"/>
  <text x="235" y="230" class="ts" text-anchor="middle">在庫は、物流に聞かないと</text><text x="235" y="256" class="ts" text-anchor="middle">合っているか分からない</text>
  <rect x="450" y="30" width="390" height="290" rx="10" class="hl" style="fill:#fff"/>
  <text x="645" y="64" class="t hc" text-anchor="middle" font-weight="700">確かめられる</text>
  <g class="ts"><text x="476" y="108">指示番号ごとの出荷結果</text><text x="476" y="140">欠品は、物流がそう判断した理由</text></g>
  <use href="#i-ok" x="633" y="170" width="24" height="24"/>
  <text x="645" y="230" class="ts" text-anchor="middle">在庫は、自分の出荷指示と</text><text x="645" y="256" class="ts" text-anchor="middle">指示番号で突き合わせられる</text>
</svg>
```

物流の「出荷しました」の報告だけでは、在庫は物流に聞かないと確かめられません。指示番号ごとの結果と欠品の判断の理由があれば、自分の指示と突き合わせられます。

※ 第 6 章の Contract 版 1 の「必要な Evidence」の欄による。例は説明のための仮定。

## ずれは、受け入れなかったときに見える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="240" height="190" rx="10" class="box"/><text x="160" y="96" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <text x="160" y="146" class="ts" text-anchor="middle">出荷日 ＝</text><text x="160" y="172" class="ts" text-anchor="middle">便に積んだ日</text>
  <rect x="600" y="60" width="240" height="190" rx="10" class="box"/><text x="720" y="96" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="720" y="146" class="ts" text-anchor="middle">出荷日 ＝</text><text x="720" y="172" class="ts" text-anchor="middle">引当を確定した日</text>
  <path d="M280,124 H596" class="ln" marker-end="url(#arr)"/><use href="#i-pr" x="425" y="86" width="26" height="32"/><text x="440" y="148" class="tx" text-anchor="middle">出荷結果の Evidence</text>
  <use href="#i-no" x="706" y="200" width="28" height="28"/><text x="720" y="282" class="ts xc" text-anchor="middle">突き合わせが合わない</text>
  <text x="440" y="336" class="t" text-anchor="middle" font-weight="700">意味のずれは、ここで初めて見える</text>
</svg>
```

第 4 章の「出荷日」のように、両側で意味が違う語があれば、そのずれは、Evidence を受け入れられなかったときに見えるようになります。

出典: EAA Core 版 6「0. 目的と範囲」。※「出荷日」の意味は第 4 章の、説明のための例。

## 推測で越えず、照会か変更提案で解く

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="800" height="70" rx="10" class="xl" style="fill:#fff"/>
  <use href="#i-no" x="60" y="62" width="26" height="26"/><text x="100" y="82" class="ts">「たぶん引当を確定した日のことだろう」と読み替えて受け入れる</text>
  <rect x="40" y="140" width="390" height="180" rx="10" class="soft"/>
  <text x="235" y="178" class="t" text-anchor="middle" font-weight="700">照会する</text>
  <text x="235" y="216" class="ts" text-anchor="middle">「この出荷日は何の日か」を</text><text x="235" y="242" class="ts" text-anchor="middle">相手に聞く</text>
  <rect x="450" y="140" width="390" height="180" rx="10" class="soft"/>
  <text x="645" y="178" class="t" text-anchor="middle" font-weight="700">変更を提案する</text>
  <text x="645" y="216" class="ts" text-anchor="middle">Contract の入出力に</text><text x="645" y="242" class="ts" text-anchor="middle">「便に積んだ日」の欄を足す</text>
  <text x="440" y="358" class="ts sub" text-anchor="middle">どちらでも、違いと、どう対応させたかを残す</text>
</svg>
```

ずれを見つけても、推測で読み替えて受け入れません。照会するか変更を提案して解き、意味の違いと対応を残します。

出典: EAA Core 版 6「0. 目的と範囲」「3. 意味と合意」。照会は、確かめのたびに聞くことではない。提案の手続きは第 9 章。

## 対応はずれから Ontology に足す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M100,300 H800" class="ln" marker-end="url(#arr)"/><text x="810" y="326" class="tx" text-anchor="end">時間</text>
  <g class="ts" text-anchor="middle">
    <rect x="80" y="180" width="180" height="60" rx="6" class="soft"/><text x="170" y="216">受け入れられない</text>
    <rect x="350" y="180" width="180" height="60" rx="6" class="soft"/><text x="440" y="216">照会・変更提案</text>
    <rect x="620" y="180" width="180" height="60" rx="3" class="hl" style="fill:#fff"/><text x="710" y="216" class="hc">対応を足す</text>
  </g>
  <path d="M260,210 H346" class="ln" marker-end="url(#arr)"/><path d="M530,210 H616" class="ln" marker-end="url(#arr)"/>
  <rect x="520" y="14" width="350" height="156" rx="3" class="hl" style="fill:#fff"/><text x="695" y="40" class="ts hc" text-anchor="middle" font-weight="700">共有する Ontology に足す</text><text x="695" y="74" class="ts" text-anchor="middle">物流の「出荷日」＝ 便に積んだ日</text><text x="695" y="102" class="ts" text-anchor="middle">在庫の「出荷日」＝ 引当を確定した日</text><text x="695" y="140" class="ts hc" text-anchor="middle" font-weight="700">対応：物流の出荷日は、在庫の出荷日以後</text>
  <path d="M710,176 V158" class="ln" marker-end="url(#arr)"/>
  <text x="250" y="110" class="ts sub" text-anchor="middle">初めから全部の語をそろえない</text>
</svg>
```

意味の違いと対応は、ずれが見えたところから、共有する Ontology に足していきます。足した後は、対応を使って、相手の Evidence を自分の意味で読めます。

出典: EAA Core 版 6「0. 目的と範囲」と概念表「Ontology」。Ontology は第 4 章で見た。

## Evidence の様式も共有する文書

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="70" width="220" height="180" rx="10" class="box"/><text x="150" y="166" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <rect x="620" y="70" width="220" height="180" rx="10" class="box"/><text x="730" y="166" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="310" y="60" width="260" height="200" rx="3" class="hl" style="fill:#fff"/>
  <text x="440" y="96" class="t hc" text-anchor="middle" font-weight="700">Evidence の様式</text>
  <g class="ts" text-anchor="middle"><text x="440" y="136">何を残すか</text><text x="440" y="164">どの形で残すか</text></g>
  <path d="M330,196 H550" class="lt"/>
  <g class="tx" text-anchor="middle"><text x="440" y="220">所有者（人間）・観測・準拠先</text></g>
  <path d="M260,160 H306 M574,160 H616" class="ln"/>
  <text x="440" y="320" class="ts sub" text-anchor="middle">Contract・共有する Profile・共有する Ontology と同じ扱い</text>
</svg>
```

何を Evidence とし、どの形で残すかは、Evidence の様式として Cell のあいだで共有する文書に書きます。所有者は人間で、観測と準拠先も持ちます。

出典: EAA Core 版 6 の概念表「Evidence の様式」と「4. 提案と変更」。

## Core はここまでしか決めていない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="380" height="290" rx="10" class="soft"/>
  <text x="60" y="64" class="t" font-weight="700">Core が決めていること</text>
  <g class="ts"><use href="#i-ok" x="60" y="88" width="22" height="22"/><text x="92" y="105">越えるのは成果と判断の Evidence</text>
  <use href="#i-ok" x="60" y="128" width="22" height="22"/><text x="92" y="145">確かめるのは受け取った Cell</text>
  <use href="#i-ok" x="60" y="168" width="22" height="22"/><text x="92" y="185">作った側を介さずに確かめられる形</text>
  <use href="#i-ok" x="60" y="208" width="22" height="22"/><text x="92" y="225">ずれは照会か変更提案で解く</text>
  <use href="#i-ok" x="60" y="248" width="22" height="22"/><text x="92" y="265">様式と Ontology も所有者を持つ</text></g>
  <rect x="460" y="30" width="380" height="290" rx="10" fill="url(#hatch)"/>
  <text x="480" y="64" class="t" font-weight="700">決めていないこと</text>
  <g class="ts"><text x="480" y="102" class="ts" font-weight="700">Core に書かれていない</text><text x="480" y="126" class="tx">既知の不足にも挙がっていない</text><text x="480" y="166" class="ts">Evidence の様式に書く項目</text><text x="480" y="206" class="ts">共有する Ontology の所有者の決め方</text><text x="480" y="246" class="ts">Evidence の様式の所有者の決め方</text></g>
  <text x="440" y="356" class="ts sub" text-anchor="middle">所有者の決め方を書いているのは、Contract だけ</text>
</svg>
```

Evidence の様式に書く項目と、共有する Ontology・様式の所有者の決め方は、Core に書かれていません。冒頭の既知の不足にも挙がっていません。

出典: EAA Core 版 6「4. 提案と変更」。所有者の決め方は、Contract についてだけ書いている（第 6 章）。

## 次章へ：取り決めを変える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="80" width="260" height="160" rx="10" class="box"/><text x="190" y="166" class="t" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="560" y="80" width="260" height="160" rx="10" class="box"/><text x="690" y="166" class="t" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="350" y="130" width="180" height="60" rx="3" class="hl" style="fill:#fff"/><text x="440" y="166" class="ts hc" text-anchor="middle">版 1 → 版 2</text>
  <path d="M320,160 H350 M530,160 H560" class="ln"/>
  <text x="440" y="300" class="ts" text-anchor="middle">第 9 章</text>
</svg>
```

変更提案は Contract や Ontology の版を変えます。第 9 章では、取り決めを変えるあいだも、各 Cell が相手の変更に引きずられずに仕事を続ける形を見ます。
