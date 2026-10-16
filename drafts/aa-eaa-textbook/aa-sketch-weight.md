# 重さの置き場所（試作の絵 4 枚）

<!--
試作。未 commit。build の対象外（aa-ch*.md ではない）。見るとき: node build.mjs aa-sketch-weight.md → build/aa-sketch-weight.html
依頼元 @ope-ultp1635 msg fb4f18b8（kishibashi3「で、コードを作る仕組みの方は、簡単に変えたらダメじゃん? だからめんどくさい変更の仕組みを用意してる」）。plan §D。
1 枚目は第 1 章の終わりと第 10 章の終わりに同じ絵で置く（左右の中身だけ入れ替わる）。2・3 枚目は第 10 章、4 枚目は第 3 章。
-->

人の判断を、どこに重く置くか。

## 重い所が、入れ替わる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="t" text-anchor="middle"><text x="225" y="36">いまの形</text><text x="655" y="36">AA</text></g>
  <path d="M440,20 V370" class="lt"/>
  <g class="ts"><text x="40" y="96">毎日のコード</text><text x="470" y="96">毎日のコード</text><text x="40" y="256">仕組みの変更</text><text x="470" y="256">仕組みの変更</text></g>
  <path d="M40,140 H410" class="ln"/><path d="M470,140 H840" class="ln"/>
  <path d="M40,300 H410" class="ln dash"/><path d="M470,300 H840" class="ln"/>
  <rect x="70" y="128" width="30" height="24" class="w"/><rect x="110" y="128" width="30" height="24" class="w"/><rect x="150" y="128" width="30" height="24" class="w"/><rect x="190" y="128" width="30" height="24" class="w"/><rect x="230" y="128" width="30" height="24" class="w"/>
  <rect x="280" y="104" width="16" height="72" class="h"/>
  <rect x="330" y="128" width="30" height="24" class="a"/>
  <text x="288" y="196" class="tx" text-anchor="middle">全部に、人のレビュー</text>
  <rect x="140" y="288" width="30" height="24" class="box"/>
  <rect x="280" y="276" width="16" height="48" class="box"/>
  <text x="288" y="346" class="tx" text-anchor="middle">コードと同じ関門か、無し</text>
  <rect x="500" y="128" width="30" height="24" class="a"/><rect x="560" y="128" width="30" height="24" class="a"/><rect x="620" y="128" width="30" height="24" class="a"/>
  <rect x="680" y="112" width="12" height="56" class="a"/>
  <rect x="720" y="128" width="30" height="24" class="a"/><rect x="780" y="128" width="30" height="24" class="a"/>
  <text x="686" y="196" class="tx" text-anchor="middle">判定は別の AI。人を待たない</text>
  <rect x="500" y="288" width="30" height="24" class="w"/>
  <rect x="570" y="268" width="18" height="64" class="h"/><rect x="650" y="268" width="18" height="64" class="h"/><rect x="730" y="268" width="18" height="64" class="h"/>
  <g class="tx" text-anchor="middle"><text x="579" y="350">観測</text><text x="659" y="350">別の人が承認</text><text x="739" y="350">版</text></g>
</svg>
```

いまの形は、毎日のコードが重い。AA は、仕組みの変更が重い。

※ 説明のために作った絵です。橙の柵＝人が通す所。灰の斜線＝待っている物。

## 札を 1 枚足すのに、これだけ通る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="30" y="70" class="ts">AA で、条件の札を 1 枚足す</text>
  <rect x="30" y="90" width="140" height="56" rx="6" class="box"/><rect x="200" y="90" width="140" height="56" rx="6" class="a"/><rect x="370" y="90" width="140" height="56" rx="6" class="h"/><rect x="540" y="90" width="140" height="56" rx="6" class="box"/><rect x="710" y="90" width="140" height="56" rx="6" class="h"/>
  <path d="M170,118 H200 M340,118 H370 M510,118 H540 M680,118 H710" class="ln"/>
  <g class="ts" text-anchor="middle"><text x="100" y="124">観測を記録</text><text x="270" y="124" class="on">書き足しを提起</text><text x="440" y="124" class="on">所有者が承認</text><text x="610" y="124">新しい版</text><text x="780" y="124" class="on">下が採用</text></g>
  <g class="tx" text-anchor="middle"><text x="100" y="172">思いつきでは</text><text x="100" y="190">始めない</text><text x="270" y="172">AI が書いてよい</text><text x="440" y="172">提起した者は</text><text x="440" y="190">承認しない</text><text x="610" y="172">どの版に従ったか</text><text x="610" y="190">残る</text><text x="780" y="172">上が変わっても</text><text x="780" y="190">自動では従わない</text></g>
  <text x="30" y="270" class="ts">いまの形で、決まりのファイルに 1 行足す</text>
  <rect x="30" y="290" width="310" height="56" rx="6" class="box"/>
  <text x="185" y="324" class="ts" text-anchor="middle">書いて、（コードと同じく）通す</text>
</svg>
```

5 段、人は 2 回。上の段は、毎日のコードより遅い。

※ 自己改訂規範アーキテクチャ §1〜§3。2 段目を AI が書いてよいのは、承認と別の行為だから。

## なぜ、こんなに面倒か

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="70" width="120" height="56" rx="6" class="a"/><text x="100" y="104" class="ts on" text-anchor="middle">実行者</text>
  <rect x="210" y="70" width="190" height="56" rx="6" class="box"/><text x="305" y="96" class="ts" text-anchor="middle">札「ここは</text><text x="305" y="116" class="ts" text-anchor="middle">人を待たない」</text>
  <path d="M160,98 H210" class="al"/>
  <rect x="470" y="58" width="16" height="80" class="h"/><text x="478" y="160" class="tx" text-anchor="middle">通す</text>
  <path d="M400,98 H455" class="al"/><path d="M440,84 L462,112 M462,84 L440,112" class="xl"/>
  <rect x="40" y="190" width="120" height="56" rx="6" class="h"/><text x="100" y="224" class="ts on" text-anchor="middle">所有者</text>
  <path d="M160,218 C330,218 400,160 470,130" class="hl"/>
  <text x="560" y="74" class="ts">以後の周</text>
  <path d="M560,98 H850" class="lt"/>
  <circle cx="590" cy="98" r="10" class="box"/><circle cx="640" cy="98" r="10" class="box"/><circle cx="690" cy="98" r="10" class="box"/><circle cx="740" cy="98" r="10" class="box"/><circle cx="790" cy="98" r="10" class="box"/><text x="830" y="104" class="ts">…</text>
  <text x="560" y="134" class="tx">この問いで人を待つ所が、全部消える</text>
  <rect x="540" y="200" width="310" height="110" rx="6" class="soft"/>
  <text x="560" y="232" class="ts">本人が通せたら</text>
  <text x="560" y="262" class="ts">どの決まりも</text>
  <text x="560" y="290" class="ts xc">「要らなければ外せる物」になる</text>
</svg>
```

人を待つ所をなくす変更は、それ自体はなくせない判断です。

※ 解説の D8（commentary.md:69）。札を足すのは規範文書の改訂でアーキテクチャ §2、文書でない縛り（承認の設定など）は D8。

## 床は決まり、その上は決まっていない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="60" y="70" class="ts">人の判断（限られている）</text>
  <rect x="60" y="100" width="170" height="70" class="h"/><text x="145" y="142" class="ts on" text-anchor="middle">床（D8）</text>
  <rect x="230" y="100" width="590" height="70" class="soft"/><path d="M230,100 H820 V170 H230" class="ln"/>
  <path d="M250,135 H500" class="hl"/><path d="M500,135 L488,127 M500,135 L488,143" class="hl"/>
  <path d="M800,135 H560" class="ln"/><path d="M560,135 L572,127 M560,135 L572,143" class="ln"/>
  <path d="M530,92 V178" class="ln dash"/><text x="530" y="88" class="t" text-anchor="middle">?</text>
  <g class="tx"><text x="250" y="200">D4: 取り消せない操作に回せ</text><text x="800" y="200" text-anchor="end">D1: 要らない判断は消せ</text></g>
  <g class="tx" text-anchor="middle"><text x="145" y="200">削れない</text></g>
  <path d="M60,250 H230" class="hl"/><text x="145" y="280" class="ts" text-anchor="middle">決まっている</text>
  <path d="M230,250 H820" class="ln dash"/><text x="525" y="280" class="ts" text-anchor="middle">どちらを先にするか、決まっていない</text>
  <text x="525" y="310" class="tx" text-anchor="middle">決め方だけは決まっている: 記録が溜まってから</text>
</svg>
```

D1 と D4 は、同じ人の判断を取り合います。床の上の分け方は、まだ決まっていません。

※ 解説 §3 末尾（commentary.md:65-73）・規範 §6。最初の循環では D4 の停止時間を測っている。
