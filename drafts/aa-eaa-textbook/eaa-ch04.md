# 第 4 章　ドメインによる分割

群: 文脈が疎結合になる切り方
副題: ドメインで分けると、読む語と記録が一つの範囲に閉じる

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（dd08b888）の第 4 章。着手: @ope-ultp1635 msg 83d1e0ea（群二）。
この章に当たる章は 2d0ca30 までの本に無い。新しく書いた。2d0ca30 の第 3 章（責務を先に Profile に書く）から、Profile の定義（core.md:30）・業務に固有の責務は Domain Profile（profiles.md 2 節）・一つの Cell が複数 Profile を担ってよい（core.md:50）・Profile やサービスの数で Cell の数を決めない（working-notes.md「2.」の「Profile数やサービス数から組織数を決めない」。適用例）を持ってきた。持ってこなかったもの: 組織を先に作ると調整先が増える・最初の Mission に要る範囲から書く（群五の第 12 章で扱う）、判断の負荷が続けて増えたら分ける（群五の第 11 章）。旧本文は 2d0ca30 の eaa-ch03.md にある。
この章が拠る本の考え: ドメイン・価値・権限で分けると疎結合になる（structure-v5.md「イデア」第 2 文。逐語は roles-kaz 側）。
Ontology の扱いは 2d0ca30 の第 2 章・第 6 章の直し（ef92a3f「2 つの Cell が共有する 1 つの文書を両側が持つ」）と揃えた。core.md:21（境界の両側が保持し、境界を越えて流れない）・36（意味の違いと対応を保持）・76（推測で越境しない、照会または変更提案で解く）。
群四の着手便（@ope-ultp1635 msg adc84781）で直した: p.「またぐ語は Ontology に書く」は「境界の両側がそれぞれ持ちます」と書いていて、③ の読み（二つの Cell のあいだに共有する Ontology が一つあり、両側がそれを持つ）と字が揃っていなかった。「それぞれ持つ」は各側が別の定義を持つ形に読める（2 周目に @reader の読者が止まった所の根）。文と絵を「一つを両側が持つ」にし、絵の Ontology を各 Cell の枠の中から二つの Cell のあいだへ移した（第 6 章の Contract と同じ置き方）。続けて p.「同じ定義を両側が共有して持つ、と読む」を 2d0ca30 の第 6 章から持ってきた。Core の字だけでは決まらないので、読みだと断るページ。根拠は core.md:94（Ontology を Cell 間で共有する文書に数える）と core.md:36（意味の違いと対応を保持する）。絵の Cell に在庫・物流の名を入れたのだけを変えた。
「出荷日」の例は書き手が作った（注に書いた）。在庫と物流は 2d0ca30 の第 6〜12 章で通した例と同じ組。
p.「変わる理由も分かれる」は書き手の読み。目次の 1 行（使う語・見る記録・変わる理由が違う）の字による。
p.「ドメインで切るのも Core の外」は第 3 章と同じ扱い。
絵の Cell の枠は入れ子にしない（core.md:43）。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff。判定の正本 @reviewer 2026-11-08-eaa-textbook-77a7fc9-ch00-04 / ch05-08 / ch09-12-furoku、@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）: p.「境界で切ると語が閉じる」の「在庫の意味だけを読む」が、両側が一つの Ontology を持つ（この章の後半・第 8 章）と両立していなかった。「自分の仕事の中では」に限り、境界では Ontology の対応で自分の意味に置き換えて読む、と注に書いた。p.「同じ定義を両側が共有して持つ、と読む」の根拠を core.md:94（「共有する Ontology」と限っている）から core.md:21「境界の両側が保持する共通語の定義」に替え、共有しない Ontology もありうると注に書いた。「各 Cell の中の語の使い方は Ontology と呼ばない」は Core に根拠が無いので外した。p.「ドメインで切るのも Core の外」を外した。
-->

```svg
<svg viewBox="0 0 880 340" width="880" height="340">
  <rect x="40" y="40" width="330" height="230" rx="10" class="hl" style="fill:#fff"/>
  <text x="205" y="76" class="t hc" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <g class="ts" text-anchor="middle"><text x="205" y="120">在庫の語</text><text x="205" y="150">在庫の記録</text><text x="205" y="180">在庫が変わる理由</text></g>
  <rect x="510" y="40" width="330" height="230" rx="10" class="hl" style="fill:#fff"/>
  <text x="675" y="76" class="t hc" text-anchor="middle" font-weight="700">物流の Cell</text>
  <g class="ts" text-anchor="middle"><text x="675" y="120">物流の語</text><text x="675" y="150">物流の記録</text><text x="675" y="180">物流が変わる理由</text></g>
  <rect x="380" y="130" width="120" height="60" rx="6" class="soft"/><text x="440" y="156" class="tx" text-anchor="middle">またぐ語の</text><text x="440" y="176" class="tx" text-anchor="middle">定義（Ontology）</text>
  <path d="M370,160 H380 M500,160 H510" class="ln"/>
  <text x="440" y="310" class="t" text-anchor="middle" font-weight="700">ドメインの境界で切ると、読む語と記録が閉じる</text>
</svg>
```

ドメインで分けると、一つの Cell が読む語と記録が一つの範囲に閉じます。在庫と物流のように扱う対象が違えば、語・記録・変わる理由が違うので、その境界で切ります。境界をまたぐ語の意味は、両側が共有する語の定義に書きます。

## ドメインは扱う対象の範囲

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <rect x="60" y="50" width="360" height="240" rx="10" class="box"/><text x="240" y="86" class="t" text-anchor="middle" font-weight="700">在庫</text>
    <text x="90" y="134">語：引当・欠品・棚卸</text><text x="90" y="174">記録：倉庫ごとの在庫数</text><text x="90" y="214">変わる理由：仕入れと売れ行き</text>
    <rect x="460" y="50" width="360" height="240" rx="10" class="box"/><text x="640" y="86" class="t" text-anchor="middle" font-weight="700">物流</text>
    <text x="490" y="134">語：集荷・配車・締め時刻</text><text x="490" y="174">記録：便ごとの積み荷</text><text x="490" y="214">変わる理由：配送網と運賃</text>
  </g>
  <text x="440" y="336" class="ts sub" text-anchor="middle">例は説明のために作った</text>
</svg>
```

ドメインは、仕事が扱う対象の範囲です。在庫と物流のように対象が違えば、使う語、見る記録、変わる理由が違います。

## 同じ語が違う意味になる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="320" y="30" width="240" height="60" rx="8" class="xl" style="fill:#fff"/><text x="440" y="68" class="t xc" text-anchor="middle" font-weight="700">「出荷日」</text>
  <path d="M380,94 L240,150 M500,94 L640,150" class="ln" marker-end="url(#arr)"/>
  <rect x="60" y="160" width="360" height="110" rx="10" class="box"/><text x="240" y="196" class="ts" text-anchor="middle" font-weight="700">在庫では</text><text x="240" y="232" class="ts" text-anchor="middle">引当を確定した日</text>
  <rect x="460" y="160" width="360" height="110" rx="10" class="box"/><text x="640" y="196" class="ts" text-anchor="middle" font-weight="700">物流では</text><text x="640" y="232" class="ts" text-anchor="middle">便に積んだ日</text>
  <text x="440" y="330" class="t" text-anchor="middle" font-weight="700">両方を読む主体は、語のたびに意味を切り替える</text>
</svg>
```

「出荷日」は、在庫では引当を確定した日、物流では便に積んだ日を指すことがあります。一つの主体が両方を読むと、語のたびにコンテキストスイッチが起きます。

※ 例は説明のために作った。

## 境界で切ると語が閉じる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="60" width="340" height="220" rx="10" class="hl" style="fill:#fff"/><text x="230" y="96" class="t hc" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="230" y="160" class="ts" text-anchor="middle">「出荷日」＝引当を確定した日</text><text x="230" y="196" class="tx" text-anchor="middle">自分の仕事は在庫の意味で</text>
  <rect x="480" y="60" width="340" height="220" rx="10" class="hl" style="fill:#fff"/><text x="650" y="96" class="t hc" text-anchor="middle" font-weight="700">物流の Cell</text>
  <text x="650" y="160" class="ts" text-anchor="middle">「出荷日」＝便に積んだ日</text><text x="650" y="196" class="tx" text-anchor="middle">自分の仕事は物流の意味で</text>
  <path d="M440,40 V300" class="xl dash"/>
  <text x="440" y="336" class="t" text-anchor="middle" font-weight="700">自分の仕事の中では、意味を切り替えずに済む</text>
</svg>
```

ドメインの境界で切ると、Cell は自分のドメインの語と記録で仕事を進められます。在庫の Cell の中では、「出荷日」は在庫の意味だけです。

※ 境界で相手の記録を読むときは、両側が持つ Ontology の対応で、自分の意味に置き換えて読む（この章の後半と第 8 章）。

## 変わる理由も分かれる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="60" width="340" height="200" rx="10" class="hl" style="fill:#fff"/><text x="230" y="96" class="t hc" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <rect x="110" y="140" width="240" height="44" rx="6" class="x"/><text x="230" y="168" class="ts on" text-anchor="middle">棚卸の数え方を変える</text>
  <rect x="480" y="60" width="340" height="200" rx="10" class="hl" style="fill:#fff"/><text x="650" y="96" class="t hc" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="530" y="140" width="240" height="44" rx="6" class="soft"/><text x="650" y="168" class="ts" text-anchor="middle">配車の組み方はそのまま</text>
  <text x="440" y="320" class="t" text-anchor="middle" font-weight="700">一方の変更で、他方の文脈を読み直さない</text>
</svg>
```

在庫の数え方が変わっても、物流の配車の組み方は変わりません。変わる理由が違う仕事を分けると、一方の変更で他方の文脈を読み直さずに済みます。

※ 書き手の読み。変える必要のある取り決めが境界にあるときの扱いは第 9 章で見る。

## 責務は Profile に書く

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="200" y="40" width="480" height="260" rx="10" class="box"/>
  <text x="440" y="76" class="t" text-anchor="middle" font-weight="700">在庫の Profile（版 1）</text>
  <g class="ts"><text x="240" y="124">成り立たせること：倉庫ごとの在庫数が正しい</text><text x="240" y="164">自分で判断する範囲：引当の順番</text><text x="240" y="204">外に保証すること：引当の結果</text><text x="240" y="244">確かめ方：棚卸の記録との突き合わせ</text></g>
  <text x="440" y="346" class="ts sub" text-anchor="middle">例は説明のために作った。項目名は Profiles が未確定にしている</text>
</svg>
```

ドメインに固有の責務は Profile に書きます。Profile は Cell が引き受ける責務を定める版付きの仕様で、何を成り立たせ、外に何を保証するかを書きます。

出典: EAA Core 版 6 の概念表「Profile」、EAA Profiles「1.」「2.」（業務に固有の責務は Domain Profile に書く）。

## 一つの Cell が複数を担う

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="200" y="50" width="480" height="230" rx="10" class="hl" style="fill:#fff"/>
  <text x="440" y="86" class="t hc" text-anchor="middle" font-weight="700">一つの Cell</text>
  <g class="ts" text-anchor="middle">
    <rect x="240" y="130" width="180" height="50" rx="6" class="soft"/><text x="330" y="160">在庫の Profile</text>
    <rect x="460" y="130" width="180" height="50" rx="6" class="soft"/><text x="550" y="160">発注の Profile</text>
  </g>
  <text x="440" y="236" class="ts" text-anchor="middle">語と記録が混ざらないなら、分けずに置く</text>
  <text x="440" y="336" class="ts sub" text-anchor="middle">混ざるかどうかは、第 2 章の判定で見る</text>
</svg>
```

一つの Cell が、複数のドメインの Profile を担ってもかまいません。語と記録が混ざらないなら、分けずに置きます。

出典: EAA Core 版 6「1. 責務と分割」。例は説明のために作った。

## 数から決めない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g opacity=".6" class="ts" text-anchor="middle">
    <rect x="60" y="60" width="220" height="60" rx="6" class="lt dash" style="fill:#fff"/><text x="170" y="96">ドメインの数</text>
    <rect x="60" y="150" width="220" height="60" rx="6" class="lt dash" style="fill:#fff"/><text x="170" y="186">サービスの数</text>
  </g>
  <use href="#i-no" x="300" y="118" width="26" height="26"/>
  <rect x="380" y="90" width="440" height="100" rx="10" class="hl" style="fill:#fff"/>
  <text x="600" y="132" class="ts hc" text-anchor="middle" font-weight="700">一つの主体の中で</text>
  <text x="600" y="162" class="ts hc" text-anchor="middle" font-weight="700">語と記録が切り替わるか</text>
  <text x="440" y="300" class="t" text-anchor="middle" font-weight="700">Cell の数は判定で決まる</text>
</svg>
```

ドメインの数からも、既存のサービスの数からも、Cell の数は決めません。見るのは、一つの主体の中で語と記録が切り替わるかです。

※ 適用例の EAA Working Notes「2.」も、Profile 数やサービス数から組織の数を決めないとする。

## またぐ語は Ontology に書く

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="70" width="220" height="190" rx="10" class="hl" style="fill:#fff"/><text x="150" y="170" class="ts hc" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <rect x="620" y="70" width="220" height="190" rx="10" class="hl" style="fill:#fff"/><text x="730" y="170" class="ts hc" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="310" y="60" width="260" height="140" rx="3" class="hl" style="fill:#fff"/>
  <text x="440" y="96" class="t hc" text-anchor="middle" font-weight="700">共有する Ontology</text>
  <text x="440" y="136" class="ts" text-anchor="middle">境界をまたぐ語の定義</text>
  <text x="440" y="170" class="tx" text-anchor="middle">在庫と物流の両方が、これを持つ</text>
  <path d="M260,130 H306 M574,130 H616" class="ln"/>
  <path d="M260,236 H616" class="ln" marker-end="url(#arr)"/><text x="440" y="228" class="tx" text-anchor="middle">流れるのは Evidence</text>
  <text x="440" y="320" class="ts sub" text-anchor="middle">Ontology は一つで、境界を越えて流れない</text>
</svg>
```

在庫と物流のあいだで渡す語の意味は、共有する語の定義に書きます。Core はこれを Ontology と呼びます。あいだに一つあり、在庫と物流の両方がそれを持ちます。

出典: EAA Core 版 6「0. 目的と範囲」、概念表「Ontology」。※「一つを両側が持つ」は、Core の字だけでは決まらない、この本の読み。次のページで見ます。

## 同じ定義を両側が共有して持つ、と読む

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M440,30 V300" class="lt dash"/>
  <text x="220" y="50" class="t" text-anchor="middle" font-weight="700">各側が自分の定義を持つ</text>
  <rect x="30" y="80" width="170" height="150" rx="10" class="box"/><text x="115" y="110" class="ts" text-anchor="middle">在庫の Cell</text>
  <rect x="50" y="160" width="130" height="44" rx="4" class="lt" style="fill:#fff"/><text x="115" y="187" class="tx" text-anchor="middle">在庫の定義</text>
  <rect x="240" y="80" width="170" height="150" rx="10" class="box"/><text x="325" y="110" class="ts" text-anchor="middle">物流の Cell</text>
  <rect x="260" y="160" width="130" height="44" rx="4" class="lt" style="fill:#fff"/><text x="325" y="187" class="tx" text-anchor="middle">物流の定義</text>
  <text x="220" y="270" class="tx" text-anchor="middle">字の上ではこうも読める</text>
  <text x="660" y="50" class="t hc" text-anchor="middle" font-weight="700">同じ定義を両側が持つ</text>
  <rect x="465" y="80" width="105" height="150" rx="10" class="box"/><text x="517" y="160" class="ts" text-anchor="middle">在庫</text>
  <rect x="750" y="80" width="105" height="150" rx="10" class="box"/><text x="802" y="160" class="ts" text-anchor="middle">物流</text>
  <rect x="585" y="125" width="150" height="60" rx="3" class="hl" style="fill:#fff"/><text x="660" y="160" class="ts hc" text-anchor="middle">共有する Ontology</text>
  <path d="M570,155 H585 M735,155 H750" class="ln"/>
  <use href="#i-ok" x="574" y="252" width="22" height="22"/><text x="606" y="270" class="ts okc">この本の読み</text>
  <text x="440" y="344" class="ts sub" text-anchor="middle">Core が Ontology を「境界の両側が保持する共通語の定義」と書いているから</text>
</svg>
```

「両側が保持する」は、各側が別の定義を持つとも読めます。Core は Ontology を「共通語の定義」と呼ぶので、この本は、同じ定義を両側が持つと読みます。

出典: EAA Core 版 6「0.」「4.」。※ 読みで、Core の字が決めたことではない。Core は「共有する Ontology」と限るので、共有しないものもありうる。

## 違いは消さずに対応を書く

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="140" y="40" width="600" height="250" rx="10" class="box"/>
  <text x="440" y="76" class="t" text-anchor="middle" font-weight="700">Ontology の一行</text>
  <g class="ts">
    <text x="180" y="130">在庫の「出荷日」＝引当を確定した日</text>
    <text x="180" y="170">物流の「出荷日」＝便に積んだ日</text>
    <text x="180" y="220" class="hc" font-weight="700">対応：物流の出荷日は、在庫の出荷日以後</text>
  </g>
  <text x="440" y="340" class="ts sub" text-anchor="middle">一つの意味に揃えず、違いと対応を持つ。例は説明のために作った</text>
</svg>
```

Ontology は、在庫の「出荷日」と物流の「出荷日」を一つの意味に揃えません。意味の違いと、どれがどれに当たるかを書いて持ちます。

出典: EAA Core 版 6 の概念表「Ontology」、同「3. 意味と合意」。

## 分からない語は推測しない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="60" width="300" height="200" rx="10" class="hl" style="fill:#fff"/><text x="210" y="96" class="t hc" text-anchor="middle" font-weight="700">物流の Cell</text>
  <text x="210" y="160" class="ts" text-anchor="middle">「出荷日」が分からない</text>
  <g opacity=".6"><path d="M360,120 H520" class="xl dash"/><use href="#i-no" x="428" y="96" width="24" height="24"/><text x="440" y="146" class="tx xc" text-anchor="middle">推測で読み進める</text></g>
  <path d="M360,210 H518" class="ln" marker-end="url(#arr)"/><text x="440" y="236" class="tx" text-anchor="middle">照会・変更提案</text>
  <rect x="520" y="60" width="300" height="200" rx="10" class="hl" style="fill:#fff"/><text x="670" y="96" class="t hc" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="440" y="320" class="t" text-anchor="middle" font-weight="700">分かった対応を、Ontology に足す</text>
</svg>
```

相手の語の意味が分からないとき、推測で読み進めません。照会か変更提案で解き、分かった対応を Ontology に足します。

出典: EAA Core 版 6「0. 目的と範囲」「3. 意味と合意」。

## 次章へ：権限で切る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g>
    <rect x="80" y="70" width="220" height="160" rx="10" class="box"/><text x="190" y="140" class="t" text-anchor="middle" font-weight="700">価値</text><text x="190" y="180" class="ts" text-anchor="middle">第 3 章</text>
    <rect x="330" y="70" width="220" height="160" rx="10" class="box"/><text x="440" y="140" class="t" text-anchor="middle" font-weight="700">ドメイン</text><text x="440" y="180" class="ts" text-anchor="middle">第 4 章</text>
    <rect x="580" y="70" width="220" height="160" rx="10" class="hl" style="fill:#fff"/><text x="690" y="140" class="t hc" text-anchor="middle" font-weight="700">権限</text><text x="690" y="180" class="ts" text-anchor="middle">第 5 章</text>
  </g>
  <text x="440" y="300" class="ts sub" text-anchor="middle">次は、判断を誰が下すかで切る</text>
</svg>
```

第 5 章では、判断の権限を渡して Cell を分けます。分けた Cell が判断のたびに他へ問い合わせずに済み、責任を負う人間がその範囲を追えるようにします。
