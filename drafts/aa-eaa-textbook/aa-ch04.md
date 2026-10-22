# 第 4 章　頼み方の明文化

> AI は行間を読まない：人は書いた物で渡す

<!-- 扉の絵（@ope-ultp1635 msg f0419ae4）: 章全体の主張 1 つ。本文の絵の使い回しはしない -->
```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <rect x="40" y="120" width="90" height="60" rx="6" class="h"/><text x="85" y="157" class="t on" text-anchor="middle">人</text>
  <circle cx="122" cy="106" r="5" fill="#fbe9d7" class="hl"/><circle cx="140" cy="88" r="7" fill="#fbe9d7" class="hl"/>
  <rect x="150" y="18" width="220" height="64" rx="32" fill="#fbe9d7" class="hl dash"/><text x="260" y="56" class="ts hc" text-anchor="middle">頭の中の前提・事情</text>
  <path d="M370,50 H560" class="xl dash"/><use href="#i-no" x="560" y="38" width="26" height="26"/>
  <text x="466" y="40" class="ts xc" text-anchor="middle">届かない</text>
  <rect x="180" y="132" width="130" height="136" rx="3" fill="#fff" class="hl"/>
  <g class="ts" text-anchor="start"><text x="198" y="164">目的</text><text x="198" y="194">守る条件</text><text x="198" y="224">使える権限</text><text x="198" y="254">判定の条件</text></g>
  <text x="245" y="290" class="ts hc" text-anchor="middle">書いた物</text>
  <path d="M130,150 H174" class="ln" marker-end="url(#arr)"/>
  <path d="M310,200 H636" class="ln" marker-end="url(#arr)"/><use href="#i-ok" x="460" y="166" width="26" height="26"/>
  <text x="473" y="226" class="ts okc" text-anchor="middle">届く</text>
  <rect x="642" y="170" width="150" height="60" rx="6" class="a"/><text x="717" y="207" class="t on" text-anchor="middle">AI</text>
  <text x="717" y="256" class="ts sub" text-anchor="middle">行間は読まない</text>
</svg>
```

<!--
試作（絵の形）。骨格から本物にした（plan §G.1 の 1 番目）。依頼元 @ope-ultp1635 msg 066b5609（進め方の承認）・msg 06ecaa03（第 4〜10 章を本物に）。
ページ番号は build/aa.html の右上の数字（第 4 章の扉＝60）。
骨格の 19 ページから: 「作り方は書かない」を p.13 に寄せ（A.10 の穴 3 と同じことを言うため）、「代償（良い慣行はいったん止まる）」は p.64 の注に畳み、実例を 2 ページに分けて 20 ページ。
例は 1 つに通した: 設計書「失敗したら再試行する」の回数と間隔（p.61・62・65）。作り物。
-->

第 3 章で、人が毎日触るのは「頼む」だけになりました。この章では、頼むときに何を渡すかを見ます。

## 引き継ぎ：書かれない所は聞いて埋める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="330" height="250" rx="6" class="box"/>
  <text x="60" y="76" class="ts" font-weight="700">設計書　注文 API</text>
  <path d="M60,90 H350" class="lt"/>
  <text x="60" y="126" class="ts">決済が失敗したら、再試行する</text>
  <text x="60" y="176" class="ts">回数：</text><rect x="120" y="154" width="150" height="32" rx="4" fill="#fff" class="lt dash"/>
  <text x="60" y="226" class="ts">間隔：</text><rect x="120" y="204" width="150" height="32" rx="4" fill="#fff" class="lt dash"/>
  <text x="60" y="270" class="tx">書かれていない所</text>
  <rect x="560" y="40" width="270" height="44" rx="6" class="soft"/><text x="695" y="68" class="ts" text-anchor="middle">隣の席の先輩に聞く</text>
  <rect x="560" y="104" width="270" height="44" rx="6" class="soft"/><text x="695" y="132" class="ts" text-anchor="middle">前の案件のコードを見る</text>
  <rect x="560" y="168" width="270" height="44" rx="6" class="soft"/><text x="695" y="196" class="ts" text-anchor="middle">チャットの過去ログを探す</text>
  <path d="M556,62 L276,166" class="hl" marker-end="url(#arr)"/>
  <path d="M556,126 L276,172" class="hl" marker-end="url(#arr)"/>
  <path d="M556,190 L276,218" class="hl" marker-end="url(#arr)"/>
  <rect x="440" y="240" width="140" height="50" rx="6" class="h"/><text x="510" y="271" class="ts on" text-anchor="middle">新しいメンバー</text>
  <rect x="120" y="318" width="640" height="44" rx="8" fill="#fff" class="hl"/>
  <text x="440" y="346" class="ts hc" text-anchor="middle">外れたら、レビューで先輩が「うちは 3 回まで」と止める</text>
</svg>
```

前任から設計書を受け取った人は、書かれていない所を聞いて埋めます。外れたら、誰かが止めます。

※ 説明のために作った場面です。この章は、この設計書を通して使います。

## 同じ設計書を AI に：毎回違う埋め方

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="70" width="250" height="200" rx="6" class="box"/>
  <text x="60" y="104" class="ts" font-weight="700">同じ設計書</text>
  <text x="60" y="144" class="ts">失敗したら、再試行する</text>
  <text x="60" y="184" class="ts">回数：</text><rect x="120" y="162" width="130" height="30" rx="4" fill="#fff" class="lt dash"/>
  <text x="60" y="230" class="ts">間隔：</text><rect x="120" y="208" width="130" height="30" rx="4" fill="#fff" class="lt dash"/>
  <path d="M294,170 L376,96" class="ln" marker-end="url(#arr)"/><path d="M294,170 H376" class="ln" marker-end="url(#arr)"/><path d="M294,170 L376,244" class="ln" marker-end="url(#arr)"/>
  <g class="ts sub" text-anchor="end"><text x="460" y="102">1 回目</text><text x="460" y="176">2 回目</text><text x="460" y="250">3 回目</text></g>
  <rect x="480" y="74" width="340" height="44" rx="6" class="a"/><text x="650" y="102" class="ts on" text-anchor="middle">3 回・1 秒おき</text>
  <rect x="480" y="148" width="340" height="44" rx="6" class="a"/><text x="650" y="176" class="ts on" text-anchor="middle">5 回・待ちを倍々に延ばす</text>
  <rect x="480" y="222" width="340" height="44" rx="6" class="x"/><text x="650" y="250" class="ts on" text-anchor="middle">成功するまで・待たずに</text>
  <text x="650" y="300" class="tx" text-anchor="middle">どれも、それらしいコードとテストが付いて出てくる</text>
  <text x="440" y="346" class="t" text-anchor="middle">誰にも聞かずに埋める</text>
</svg>
```

AI は聞かずに埋めます。もっともらしく、しかも渡すたびに違う値で。「書いていないので分かりません」とは言いません。

※ 値は作り物です。

## 従来の工程は、読み手が行間を埋める前提

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="220" y="40" class="t" text-anchor="middle" font-weight="700">人が読み手</text>
  <text x="660" y="40" class="t" text-anchor="middle" font-weight="700">AI が読み手</text>
  <path d="M440,24 V350" class="lt dash"/>
  <rect x="60" y="70" width="320" height="50" rx="6" class="soft"/><text x="220" y="101" class="ts" text-anchor="middle">行間は、読み手が埋める</text>
  <rect x="90" y="120" width="100" height="160" class="h"/><rect x="250" y="120" width="100" height="160" class="h"/>
  <g class="ts on" text-anchor="middle"><text x="140" y="190">同じ場に</text><text x="140" y="214">長くいる</text><text x="300" y="190">外れたら</text><text x="300" y="214">周りが止める</text></g>
  <path d="M60,280 H380" class="ln"/>
  <use href="#i-ok" x="206" y="296" width="28" height="28"/>
  <rect x="500" y="94" width="320" height="50" rx="6" class="soft" transform="rotate(9 660 119)"/><text x="660" y="126" class="ts" text-anchor="middle" transform="rotate(9 660 119)">行間は、読み手が埋める</text>
  <rect x="530" y="160" width="100" height="120" class="w" stroke="#bbb"/><rect x="690" y="200" width="120" height="80" class="w" stroke="#bbb"/>
  <g class="ts sub" text-anchor="middle"><text x="580" y="214">会話は</text><text x="580" y="238">毎回まっさら</text><text x="750" y="230">止める AI も</text><text x="750" y="254">書いた物だけ</text></g>
  <path d="M500,280 H820" class="ln"/>
  <use href="#i-no" x="646" y="296" width="28" height="28"/>
</svg>
```

人の工程では、この 2 つがそろっていたので、書かずに済んでいました。AI の側には、どちらもありません。

※ 2 つとは、読み手が同じ場に長くいたことと、外れたときに周りが止めたこと。

## 書かれていない決まりは無い

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="800" height="110" rx="10" class="soft"/>
  <text x="64" y="60" class="ts sub">AA の条文　P1 権威は書かれたものに宿る（全文）</text>
  <text x="64" y="92" style="font-size:20px">実行者が従うのは、書かれたルールと書かれた価値だけである。</text>
  <text x="64" y="124" style="font-size:20px">書かれていないものは、存在しないものとして扱う</text>
  <path d="M64,130 H530" class="hl"/>
  <rect x="60" y="190" width="220" height="70" rx="6" fill="#fff" class="hl"/><text x="170" y="222" class="ts hc" text-anchor="middle">書いた決まり</text><text x="170" y="246" class="tx" text-anchor="middle">回数は 3 回まで</text>
  <use href="#i-ok" x="156" y="276" width="28" height="28"/><text x="170" y="330" class="ts" text-anchor="middle">従う</text>
  <g class="ts sub" text-anchor="middle">
    <rect x="340" y="190" width="150" height="70" rx="6" class="w"/><text x="415" y="230">前の会議で言った</text>
    <rect x="510" y="190" width="150" height="70" rx="6" class="w"/><text x="585" y="230">普通はこうする</text>
    <rect x="680" y="190" width="150" height="70" rx="6" class="w"/><text x="755" y="230">前もそうだった</text>
  </g>
  <path d="M340,260 L830,190" class="xl"/>
  <text x="585" y="330" class="ts" text-anchor="middle">無いものとして扱う</text>
</svg>
```

書かれていないのに少しは効く、という決まりを残すと、AI がそのつど推測で埋めた値にまで、その効き目が付きます。

※ 代償として、書かれていない良い慣行も、いったん効かなくなる。困った所で見つかり、書いた時点で戻る（第 8 章）。

## 人が渡すのは 4 つ：目的・条件・権限・判定

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="20" width="96" height="44" rx="6" class="h" stroke="#222" stroke-width="3"/><text x="78" y="48" class="ts on" text-anchor="middle">頼む</text>
  <rect x="146" y="20" width="96" height="44" rx="6" class="a"/><text x="194" y="48" class="ts on" text-anchor="middle">AI が作る</text>
  <rect x="262" y="20" width="96" height="44" rx="6" class="box"/><text x="300" y="48" class="ts" text-anchor="middle">テスト</text><use href="#i-ok" x="328" y="32" width="20" height="20"/>
  <rect x="378" y="20" width="120" height="44" rx="6" fill="#fff" class="al"/><text x="438" y="48" class="tx ac" text-anchor="middle">別の会話の AI</text>
  <rect x="518" y="20" width="80" height="44" rx="6" class="box"/><text x="558" y="48" class="ts" text-anchor="middle">次へ</text>
  <g class="ln"><path d="M126,42 H142" marker-end="url(#arr)"/><path d="M242,42 H258" marker-end="url(#arr)"/><path d="M358,42 H374" marker-end="url(#arr)"/><path d="M498,42 H514" marker-end="url(#arr)"/></g>
  <path d="M78,64 L40,96 M78,64 L840,96" class="lt dash"/>
  <g class="ts hc" font-weight="700"><text x="50" y="128">1 目的</text><text x="250" y="128">2 守る条件</text><text x="450" y="128">3 使える権限</text><text x="650" y="128">4 判定の条件</text></g>
  <g fill="#fff" class="hl"><rect x="40" y="100" width="190" height="230" rx="6"/><rect x="240" y="100" width="190" height="230" rx="6"/><rect x="440" y="100" width="190" height="230" rx="6"/><rect x="640" y="100" width="200" height="230" rx="6"/></g>
  <g class="tx"><text x="50" y="152">何を達成したいか</text><text x="250" y="152">何を守るか</text><text x="450" y="152">どこまで任せるか</text><text x="650" y="152">何をもって成果とするか</text></g>
  <g class="ts">
    <text x="50" y="200">決済が一時的に</text><text x="50" y="224">落ちても、注文を</text><text x="50" y="248">取りこぼさない</text>
    <text x="250" y="200">二重に課金しない</text><text x="250" y="224">再試行は 3 回まで</text>
    <text x="450" y="200">テスト環境まで</text><text x="450" y="224">本番の決済は</text><text x="450" y="248">呼ばない</text>
    <text x="650" y="200">決済が 3 回落ちても</text><text x="650" y="224">注文が 1 件だけ残る</text><text x="650" y="248">テストが通る</text>
  </g>
  <g class="tx"><text x="450" y="306">第 3 章の人の 2 か所</text><text x="650" y="306">第 2 章の受け入れ条件</text></g>
</svg>
```

「頼む」の中身は、この 4 枚です。作り方は入っていません。コードでない仕事でも、4 枚目は「数字がどれも元の票まで辿れる」のように書けます。

※ 人が整えるのは、目的・守る条件・使える権限・できたかの判定条件。設計・実装・確かめ・計画の立て直しは、AI がその範囲で進める。

## 要件→設計→実装→テストは誰から誰へ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="middle" font-weight="700"><text x="110" y="70">要件</text><text x="330" y="70">設計</text><text x="550" y="70">実装</text><text x="770" y="70">テスト</text></g>
  <g class="h"><rect x="50" y="90" width="120" height="60" rx="6"/><rect x="270" y="90" width="120" height="60" rx="6"/><rect x="490" y="90" width="120" height="60" rx="6"/><rect x="710" y="90" width="120" height="60" rx="6"/></g>
  <g class="ts on" text-anchor="middle"><text x="110" y="126">人</text><text x="330" y="126">人</text><text x="550" y="126">人</text><text x="770" y="126">人</text></g>
  <g class="ln"><path d="M170,120 H266" marker-end="url(#arr)"/><path d="M390,120 H486" marker-end="url(#arr)"/><path d="M610,120 H706" marker-end="url(#arr)"/></g>
  <g><rect x="190" y="180" width="60" height="78" rx="3" class="box"/><rect x="410" y="180" width="60" height="78" rx="3" class="box"/><rect x="630" y="180" width="60" height="78" rx="3" class="box"/></g>
  <g class="lt"><path d="M198,196 H242 M198,236 H242 M418,196 H462 M418,236 H462 M638,196 H682 M638,236 H682"/></g>
  <g class="lt dash"><rect x="198" y="206" width="44" height="22"/><rect x="418" y="206" width="44" height="22"/><rect x="638" y="206" width="44" height="22"/></g>
  <g class="lt"><path d="M220,176 V150 M440,176 V150 M660,176 V150"/></g>
  <text x="440" y="296" class="ts" text-anchor="middle">境目ごとに、書類を渡し、行間は受け取った人が埋める</text>
  <text x="440" y="340" class="t" text-anchor="middle">受け渡し 3 回 ＝ 行間を埋める前提が 3 回</text>
</svg>
```

第 1 章の 3 つめの形です。工程の境目は、どれも人から人への受け渡しでした。前のページの前提が、境目の数だけ重なります。

※ 第 1 章 p.5 の「工程ごとに AI」も、AI が書いた物を境目ごとに人が確認する形で、この絵の上にある。

## 工程で区切る理由：実装が高かった

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M290,300 L340,196 L390,300 Z" fill="#555"/>
  <path d="M110,222 L580,170" stroke="#555" stroke-width="5"/>
  <rect x="40" y="222" width="160" height="78" rx="4" class="a"/><text x="120" y="256" class="t on" text-anchor="middle">作り直し</text><text x="120" y="282" class="ts on" text-anchor="middle">高い</text>
  <path d="M570,171 V184" class="ln"/>
  <rect x="490" y="184" width="160" height="40" rx="4" class="h"/><text x="570" y="210" class="ts on" text-anchor="middle">紙で先に決める</text>
  <path d="M30,300 H640" class="ln"/>
  <rect x="660" y="80" width="190" height="210" rx="8" class="soft"/>
  <text x="755" y="112" class="ts" text-anchor="middle" font-weight="700">区切る理由</text>
  <g class="ts"><text x="676" y="152">1 人から人へ、</text><text x="696" y="176">順に渡す</text><text x="676" y="220">2 高い実装の前に、</text><text x="696" y="244">範囲を固める</text></g>
  <text x="340" y="350" class="ts sub" text-anchor="middle">作り直しが重いなら、先に紙で固めた方が安い</text>
</svg>
```

理由は 2 つでした。人から人へ順に渡すため。高い実装の前に範囲を固めるため。実装が高い前提の下では、筋の通った形です。

※ 工程で区切って順に渡す形（ウォーターフォール）。以後「工程で区切る形」と呼びます。

## 「要件一式そろうまで進めない」は無理

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="230" y="44" class="ts" text-anchor="middle" font-weight="700">要件</text>
  <g class="h"><rect x="100" y="60" width="80" height="70" rx="4"/><rect x="190" y="60" width="80" height="70" rx="4"/><rect x="100" y="140" width="80" height="70" rx="4"/></g>
  <g fill="#fff" class="lt dash"><rect x="280" y="60" width="80" height="70" rx="4"/><rect x="190" y="140" width="80" height="70" rx="4"/><rect x="280" y="140" width="80" height="70" rx="4"/><rect x="100" y="220" width="80" height="70" rx="4"/><rect x="190" y="220" width="80" height="70" rx="4"/><rect x="280" y="220" width="80" height="70" rx="4"/></g>
  <text x="230" y="320" class="tx" text-anchor="middle">点線は、作った物を見てから出てくる</text>
  <path d="M520,40 V300" stroke="#555" stroke-width="8"/>
  <rect x="490" y="150" width="60" height="50" rx="6" class="box"/><path d="M505,150 V134 A15,15 0 0 1 535,134 V150" class="ln"/>
  <text x="560" y="250" class="ts">一式そろうまで</text><text x="560" y="274" class="ts">開かない</text>
  <rect x="610" y="140" width="150" height="70" rx="6" class="box"/><text x="685" y="181" class="ts" text-anchor="middle">次の工程</text>
  <path d="M370,175 H486" class="lt" marker-end="url(#arr)"/>
  <text x="440" y="356" class="t" text-anchor="middle">開ける条件が、最初は満たせない</text>
</svg>
```

要件が一式そろうまで次へ進まない、という関門は、できないことを条件にしています。残りの要件は、作った物を見てから出てきます。

## そろったことにして通り、ツケは後ろに

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="h"><rect x="40" y="110" width="60" height="50" rx="4"/><rect x="106" y="110" width="60" height="50" rx="4"/><rect x="40" y="166" width="60" height="50" rx="4"/></g>
  <g fill="#fff" class="lt dash"><rect x="172" y="110" width="60" height="50" rx="4"/><rect x="106" y="166" width="60" height="50" rx="4"/><rect x="172" y="166" width="60" height="50" rx="4"/></g>
  <path d="M290,60 V280" stroke="#555" stroke-width="8"/>
  <rect x="240" y="120" width="100" height="40" rx="4" class="h"/><text x="290" y="146" class="ts on" text-anchor="middle">そろった</text>
  <path d="M236,190 H780" class="ln" marker-end="url(#arr)"/>
  <g class="ts" text-anchor="middle"><text x="420" y="236">設計</text><text x="560" y="236">実装</text><text x="700" y="236">テスト</text></g>
  <use href="#i-pile" x="540" y="140" width="36" height="36"/>
  <use href="#i-pile" x="672" y="120" width="56" height="56"/>
  <text x="620" y="290" class="ts xc" text-anchor="middle">足りなかった要件は、ここで出る</text>
  <text x="290" y="320" class="tx" text-anchor="middle">関門は通ったことになっている</text>
</svg>
```

だから、そろったことにして通ります。関門は守るふりだけになり、そろっていなかった分は後ろの工程で出ます。

## 境目ごとに人を待つ：安い物に高い判断

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts sub" text-anchor="end"><text x="90" y="86">1 周目</text><text x="90" y="166">2 周目</text><text x="90" y="246">3 周目</text></g>
  <g>
    <rect x="110" y="62" width="640" height="36" class="soft"/><rect x="110" y="142" width="640" height="36" class="soft"/><rect x="110" y="222" width="640" height="36" class="soft"/>
    <g class="a"><rect x="110" y="62" width="40" height="36"/><rect x="270" y="62" width="40" height="36"/><rect x="430" y="62" width="40" height="36"/><rect x="590" y="62" width="40" height="36"/>
    <rect x="110" y="142" width="40" height="36"/><rect x="270" y="142" width="40" height="36"/><rect x="430" y="142" width="40" height="36"/><rect x="590" y="142" width="40" height="36"/>
    <rect x="110" y="222" width="40" height="36"/><rect x="270" y="222" width="40" height="36"/><rect x="430" y="222" width="40" height="36"/><rect x="590" y="222" width="40" height="36"/></g>
    <g class="w"><rect x="150" y="62" width="120" height="36"/><rect x="310" y="62" width="120" height="36"/><rect x="470" y="62" width="120" height="36"/><rect x="630" y="62" width="120" height="36"/>
    <rect x="150" y="142" width="120" height="36"/><rect x="310" y="142" width="120" height="36"/><rect x="470" y="142" width="120" height="36"/><rect x="630" y="142" width="120" height="36"/>
    <rect x="150" y="222" width="120" height="36"/><rect x="310" y="222" width="120" height="36"/><rect x="470" y="222" width="120" height="36"/><rect x="630" y="222" width="120" height="36"/></g>
    <g><use href="#i-wait" x="200" y="66" width="20" height="28"/><use href="#i-wait" x="360" y="66" width="20" height="28"/><use href="#i-wait" x="520" y="66" width="20" height="28"/><use href="#i-wait" x="680" y="66" width="20" height="28"/>
    <use href="#i-wait" x="200" y="146" width="20" height="28"/><use href="#i-wait" x="360" y="146" width="20" height="28"/><use href="#i-wait" x="520" y="146" width="20" height="28"/><use href="#i-wait" x="680" y="146" width="20" height="28"/>
    <use href="#i-wait" x="200" y="226" width="20" height="28"/><use href="#i-wait" x="360" y="226" width="20" height="28"/><use href="#i-wait" x="520" y="226" width="20" height="28"/><use href="#i-wait" x="680" y="226" width="20" height="28"/></g>
  </g>
  <g class="tx" text-anchor="middle"><text x="130" y="50">AI の作業</text><text x="210" y="50">人の確認待ち</text></g>
  <text x="790" y="166" class="t" text-anchor="middle">…</text>
  <text x="430" y="306" class="ts" text-anchor="middle">工程 4 つの確認 × 周の数だけ、人を待つ</text>
  <text x="430" y="346" class="t" text-anchor="middle">安い実装の無駄を防ぐために、高い人の判断を使う</text>
</svg>
```

1 周ごとに工程の数だけ人を待ち、周を回すほど積もります。安くなった物の無駄を防ぐために、高い物を何度も使う形で、向きが逆になりました。

※ スプリントでも「今回の要件がそろうまで着手しない」なら同じ関門で、単位が小さいだけです。1 周を短くしても、境目で人を待つなら同じ。

## 問題は全部を固めて手放すこと

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M80,300 H820" class="ln" marker-end="url(#arr)"/><path d="M80,300 V50" class="ln" marker-end="url(#arr)"/>
  <text x="90" y="44" class="ts sub">分かっていること</text>
  <text x="820" y="330" class="ts sub" text-anchor="end">時間</text>
  <path d="M80,280 C300,270 500,140 800,80" class="hl"/>
  <path d="M130,90 V300" stroke="#555" stroke-width="3"/>
  <rect x="140" y="230" width="160" height="40" rx="4" class="box"/><text x="220" y="256" class="ts" text-anchor="middle">全部を固める</text>
  <path d="M220,226 C260,160 330,150 380,150" class="ln" marker-end="url(#arr)"/>
  <text x="300" y="132" class="ts" text-anchor="middle">次の工程へ手放す</text>
  <use href="#i-no" x="600" y="128" width="28" height="28"/><text x="614" y="116" class="ts xc" text-anchor="middle">食い違いが分かる</text>
  <path d="M598,146 C520,230 420,250 306,250" class="lt dash" marker-end="url(#arr)"/>
  <rect x="380" y="270" width="140" height="40" rx="4" class="w"/><text x="450" y="296" class="ts sub" text-anchor="middle">直す人は？</text>
</svg>
```

書くことが問題なのではありません。いちばん分かっていない時点で全部を固め、手放し、食い違っても直す人が決まっていない所です。

※ 「設計書が本体なら、工程で区切る形の設計工程こそ AI に合うのでは」への答え。

## 一部の要件から merge まで一筋通す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <g class="h" stroke="#fff" stroke-width="2"><rect x="40" y="96" width="30" height="30" rx="3"/><rect x="74" y="96" width="30" height="30" rx="3"/><rect x="108" y="96" width="30" height="30" rx="3"/></g>
  <text x="90" y="84" class="tx" text-anchor="middle">要件 3 枚</text>
  <rect x="190" y="150" width="120" height="60" rx="6" class="a"/><text x="250" y="186" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="150" width="120" height="60" rx="6" class="box"/><text x="398" y="186" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="168" width="24" height="24"/>
  <rect x="510" y="150" width="140" height="60" rx="6" fill="#fff" class="al"/><text x="580" y="176" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="580" y="198" class="ts ac" text-anchor="middle">がレビュー</text>
  <rect x="690" y="150" width="120" height="60" rx="6" class="box"/><text x="750" y="186" class="t" text-anchor="middle">merge</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M310,180 H346" class="ln" marker-end="url(#arr)"/><path d="M470,180 H506" class="ln" marker-end="url(#arr)"/><path d="M650,180 H686" class="ln" marker-end="url(#arr)"/>
  <path d="M750,210 V280 H90 V214" class="ln" marker-end="url(#arr)"/>
  <rect x="380" y="262" width="34" height="34" rx="3" fill="#fff" class="hl dash"/>
  <text x="420" y="330" class="ts" text-anchor="middle">動く物を見て、次の要件が出る</text>
  <text x="450" y="60" class="ts sub" text-anchor="middle">工程の境目で止まらず、1 周で merge まで</text>
</svg>
```

実装が安い今は、そろった一部から、テストと merge まで一筋通して確かめた方が早いのです。見えた物から、次の要件が出ます。

※ 設計・実装・テストを、決まった担当者のあいだで順に引き継ぐ形にしなくてよい。

## 先に書くのは中身でなく判定の条件

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="220" y="44" class="t" text-anchor="middle" font-weight="700">工程で区切る形</text>
  <text x="660" y="44" class="t" text-anchor="middle" font-weight="700">AA</text>
  <path d="M440,24 V350" class="lt dash"/>
  <g class="box"><rect x="150" y="150" width="140" height="150" rx="3"/><rect x="140" y="140" width="140" height="150" rx="3"/><rect x="130" y="130" width="140" height="150" rx="3"/></g>
  <g class="lt"><path d="M146,160 H254 M146,186 H254 M146,212 H254 M146,238 H254 M146,264 H230"/></g>
  <text x="220" y="94" class="ts" text-anchor="middle">先に固めるのは、作る物の中身</text>
  <text x="220" y="330" class="ts sub" text-anchor="middle">全部・後から直さない</text>
  <rect x="590" y="160" width="140" height="90" rx="6" fill="#fff" class="hl"/>
  <text x="660" y="196" class="ts hc" text-anchor="middle">判定の条件</text><text x="660" y="222" class="tx" text-anchor="middle">注文が 1 件だけ残る</text>
  <text x="660" y="94" class="ts" text-anchor="middle">先に書くのは、判定の条件</text>
  <text x="660" y="290" class="ts sub" text-anchor="middle">この一筋の分だけ</text>
  <text x="660" y="330" class="ts sub" text-anchor="middle">中身は AI が組み、書いた物も直す</text>
</svg>
```

AA も先に書きます。ただ先に書くのは、作る物の中身ではなく判定の条件で、それもこの一筋の分だけです。書いた物も、後で直します。

※ 書いた物の直し方は第 8 章。

## 書いても 2 つに読めたら書いていない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="340" y="40" width="200" height="80" rx="8" class="box"/><text x="440" y="92" class="tl" text-anchor="middle">GO ✅</text>
  <path d="M400,124 L220,196" class="ln" marker-end="url(#arr)"/><path d="M480,124 L660,196" class="ln" marker-end="url(#arr)"/>
  <rect x="80" y="200" width="280" height="70" rx="6" class="a"/><text x="220" y="230" class="ts on" text-anchor="middle">書いた AI の意味</text><text x="220" y="254" class="ts on" text-anchor="middle">「文章は良い」</text>
  <rect x="520" y="200" width="280" height="70" rx="6" class="a"/><text x="660" y="230" class="ts on" text-anchor="middle">merge する AI の読み</text><text x="660" y="254" class="ts on" text-anchor="middle">「公開してよい」</text>
  <use href="#i-ok" x="206" y="284" width="28" height="28"/>
  <rect x="610" y="284" width="100" height="34" rx="5" class="x"/><text x="660" y="307" class="ts on" text-anchor="middle">公開</text>
  <text x="440" y="356" class="ts sub" text-anchor="middle">第 2 章 p.29 の 1 語</text>
</svg>
```

第 2 章の誤公開は、書いた物が無かったのではありません。GO の 1 語が 2 つに読めました。読みが 2 つなら、どちらに従うかは決まりません。

※ 2 つに読める語は、書かれているのに従う先が決まらない。書いていないのと同じで、P1 が破れる。

## 実例：LGTM を 0 件と数えた

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="440" height="220" rx="8" class="box"/>
  <text x="60" y="74" class="ts" font-weight="700">PR #49</text><text x="460" y="74" class="ts sub" text-anchor="end">merge 済み</text>
  <path d="M60,90 H460" class="lt"/>
  <text x="60" y="130" class="ts">レビュー欄</text>
  <rect x="200" y="106" width="260" height="40" rx="4" class="w"/><text x="330" y="132" class="ts sub" text-anchor="middle">0 件</text>
  <text x="60" y="210" class="ts">コメント欄</text>
  <rect x="200" y="182" width="260" height="48" rx="4" fill="#fff" class="al"/><text x="330" y="212" class="ts ac" text-anchor="middle">LGTM ✅（レビュー役の AI）</text>
  <rect x="580" y="96" width="250" height="60" rx="6" class="a"/><text x="705" y="122" class="ts on" text-anchor="middle">数えた AI</text><text x="705" y="144" class="ts on" text-anchor="middle">レビュー欄だけ見る</text>
  <path d="M576,126 H466" class="al" marker-end="url(#arr)"/>
  <rect x="580" y="196" width="250" height="56" rx="6" class="x"/><text x="705" y="230" class="ts on" text-anchor="middle">「LGTM なし」</text>
  <path d="M705,156 V192" class="ln" marker-end="url(#arr)"/>
  <rect x="40" y="296" width="790" height="48" rx="6" fill="#fff" class="hl"/><text x="435" y="326" class="ts hc" text-anchor="middle">あとで決まりに足した 1 行：「LGTM はコメント欄も見る」</text>
</svg>
```

「LGTM が付いた」がどこを指すか書かれていないと、同じ PR が 0 件にも 1 件にも数えられます。直したのは、見る所を書いた 1 行です。

出典: kishibashi3/publications PR #49。LGTM はコメント（2026-09-19T17:06:50Z）でレビュー欄は 0 件。著者の場で起きた。

## 語の意味は 1 つ、変えるなら版で

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="800" height="90" rx="10" class="soft"/>
  <text x="64" y="60" class="ts sub">AA の条文　D2 意味の一意性（全文）</text>
  <text x="64" y="98" style="font-size:22px">語の意味は文脈ごとに一つとし、変更は版として行う（P1）</text>
  <path d="M64,106 H330" class="hl"/><path d="M352,106 H560" class="al"/>
  <rect x="80" y="170" width="200" height="70" rx="6" fill="#fff" class="hl"/><text x="180" y="200" class="ts hc" text-anchor="middle">LGTM　v1</text><text x="180" y="224" class="tx" text-anchor="middle">レビュー欄の承認</text>
  <path d="M284,205 H392" class="ln" marker-end="url(#arr)"/><text x="338" y="194" class="tx" text-anchor="middle">版を上げる</text>
  <rect x="396" y="170" width="220" height="70" rx="6" fill="#fff" class="hl"/><text x="506" y="200" class="ts hc" text-anchor="middle">LGTM　v2</text><text x="506" y="224" class="tx" text-anchor="middle">コメント欄の LGTM ✅ も</text>
  <path d="M180,244 C220,320 440,320 500,248" class="xl dash" marker-end="url(#arr-x)"/>
  <use href="#i-no" x="326" y="290" width="28" height="28"/>
  <text x="340" y="346" class="ts xc" text-anchor="middle">黙って意味を変える</text>
  <text x="740" y="200" class="tx" text-anchor="middle">どの版に</text><text x="740" y="220" class="tx" text-anchor="middle">従ったかが残る</text>
</svg>
```

条文 D2 です。意味を変えるなら版を上げます。黙って変われば、文書を 1 字も変えずに、従う中身が変わるからです。

※ v1・v2 は説明のための作り物。

## よくある誤解：要件定義は残る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g fill="#fff" class="box"><rect x="30" y="40" width="260" height="90" rx="30"/><rect x="310" y="40" width="260" height="90" rx="30"/><rect x="590" y="40" width="260" height="90" rx="30"/></g>
  <g class="ts" text-anchor="middle"><text x="160" y="92">要件定義は要らない</text><text x="440" y="80">工程で区切る形は</text><text x="440" y="104">昔から間違いだった</text><text x="720" y="80">各工程に AI を</text><text x="720" y="104">入れれば速い</text></g>
  <use href="#i-no" x="146" y="142" width="28" height="28"/><use href="#i-no" x="426" y="142" width="28" height="28"/><use href="#i-no" x="706" y="142" width="28" height="28"/>
  <g fill="#fff" class="hl"><rect x="30" y="190" width="260" height="120" rx="6"/><rect x="310" y="190" width="260" height="120" rx="6"/><rect x="590" y="190" width="260" height="120" rx="6"/></g>
  <g class="ts" text-anchor="middle">
    <text x="160" y="232">消すのは、一式</text><text x="160" y="256">そろうまで進めない</text><text x="160" y="280">関門だけ</text>
    <text x="440" y="232">実装が高い間は</text><text x="440" y="256">筋が通っていた</text>
    <text x="720" y="232">境目の待ちは</text><text x="720" y="256">そのまま。量だけ増える</text>
  </g>
  <text x="440" y="350" class="ts sub" text-anchor="middle">revert できない所で先に決める理由は、今も生きている（第 3 章）</text>
</svg>
```

要件定義の仕事は残ります。何を作り、何をもって出来とするかを決めるのは人で、決めた分を 4 枚に書きます。消すのは、一式そろうまで進めない関門だけです。

※ 工程ごとに AI を差し込んでも、増えるのは量だけで、境目で人を待つ形は残る。契約の区切りとしての工程は、この本では扱いません。

## 練習問題：この頼み方で AI は何を埋めるか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="520" height="150" rx="8" fill="#fff" class="hl"/>
  <text x="60" y="84" class="ts hc">頼み方</text>
  <text x="60" y="124" class="t">ログイン画面に、パスワード再設定を</text>
  <text x="60" y="156" class="t">付けてください。いい感じにお願いします。</text>
  <g fill="#fff" class="hl"><rect x="620" y="50" width="220" height="44" rx="6"/><rect x="620" y="104" width="220" height="44" rx="6"/><rect x="620" y="158" width="220" height="44" rx="6"/><rect x="620" y="212" width="220" height="44" rx="6"/></g>
  <g class="ts"><text x="636" y="78">1 目的</text><text x="636" y="132">2 守る条件</text><text x="636" y="186">3 使える権限</text><text x="636" y="240">4 判定の条件</text></g>
  <g class="lt dash" fill="#fff"><rect x="740" y="60" width="86" height="24" rx="3"/><rect x="740" y="114" width="86" height="24" rx="3"/><rect x="740" y="168" width="86" height="24" rx="3"/><rect x="740" y="222" width="86" height="24" rx="3"/></g>
  <text x="300" y="260" class="ts sub" text-anchor="middle">4 枚のどれが空いているか</text>
  <text x="440" y="320" class="t" text-anchor="middle">AI は、空いた所をどう埋めるか</text>
</svg>
```

この頼み方で AI が自分で埋めるのは、4 枚のどこでしょう。そのうち、埋められて困るのはどれでしょう。

※ 答え：4 枚とも空き。特に 3。再設定メールを本物の利用者に送ってよいかが無い。送ったメールは revert できない（第 3 章）。

## まとめ：渡す物を書き、読みを 1 つに

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="800" height="230" rx="10" class="soft"/>
  <text x="64" y="62" class="ts sub">AA の条文（全文）</text>
  <text x="64" y="100" style="font-size:19px">P1 実行者が従うのは、書かれたルールと書かれた価値だけである。</text>
  <text x="64" y="132" style="font-size:19px">　　書かれていないものは、存在しないものとして扱う</text>
  <path d="M100,140 H542" class="hl"/>
  <text x="550" y="156" class="tx" text-anchor="end">p.67〜67 行間は聞かずに埋まる</text>
  <text x="64" y="204" style="font-size:19px">D2 語の意味は文脈ごとに一つとし、変更は版として行う（P1）</text>
  <path d="M100,212 H320" class="al"/><path d="M342,212 H536" class="hl"/>
  <text x="100" y="230" class="tx">p.80・78 GO・LGTM</text><text x="536" y="230" class="tx" text-anchor="end">p.82</text>
  <g fill="#fff" class="hl"><rect x="40" y="286" width="190" height="50" rx="6"/><rect x="243" y="286" width="190" height="50" rx="6"/><rect x="446" y="286" width="190" height="50" rx="6"/><rect x="650" y="286" width="190" height="50" rx="6"/></g>
  <g class="ts hc" text-anchor="middle"><text x="135" y="317">目的</text><text x="338" y="317">守る条件</text><text x="541" y="317">使える権限</text><text x="745" y="317">判定の条件</text></g>
  <text x="440" y="362" class="tx" text-anchor="middle">人が渡す 4 枚（p.71）。作り方は入れない。この一筋の分だけ書く（p.78・76）</text>
</svg>
```

この章を条文で書くと、P1 と D2 の 2 行です。人の仕事は、AI に渡す物を書くことと、その読みを 1 つにすることに移りました。

※ 条文の一覧は p.3。

## 実装イメージ：4 枚を置くファイル

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="20" y="6" width="840" height="46" rx="8" class="soft"/>
  <text x="36" y="35" class="ts sub">この章の約束</text>
  <text x="150" y="35" class="ts">人 → 作る AI：依頼ファイルで渡す。書いていない所は、AI が埋めずに聞く</text>
  <rect x="40" y="74" width="800" height="250" rx="8" fill="#fff" class="lt"/>
  <g style="font-family:monospace;font-size:17px">
    <text x="64" y="112">CLAUDE.md</text>
    <text x="64" y="160">roles/maker.md</text><text x="64" y="188">roles/judge.md</text>
    <text x="64" y="236">tasks/012-retry.md</text><text x="64" y="264">tasks/013-…</text>
  </g>
  <g class="ts"><text x="330" y="112">共通の決まり・語の意味・線の右の表</text>
    <text x="330" y="160">作る役の決まり</text><text x="330" y="188">判定する役の決まり</text>
    <text x="330" y="236" class="hc" font-weight="700">依頼 1 件 = 1 ファイル（4 枚）</text></g>
  <text x="330" y="294" class="tx">目的・守る条件・使える権限・判定の条件の 4 見出し</text>
  <path d="M52,128 H828 M52,210 H828" class="lt dash"/>
  <g class="tx"><text x="820" y="112" text-anchor="end">全部の役が読む</text><text x="820" y="174" text-anchor="end">1 役 = 1 ファイル</text><text x="820" y="250" text-anchor="end">人が書く</text></g>
  <text x="440" y="358" class="ts sub" text-anchor="middle">名前は例。CLAUDE.md は Claude Code の場合（ほかの道具なら AGENTS.md など）</text>
</svg>
```

この条文を守るとは：依頼ファイルの無い作業を、AI のセッションに渡さないことです。4 枚は依頼 1 件につき 1 ファイル、決まりは 1 役につき 1 ファイルに置きます。

※ 依頼ファイルは PR と同じ repo に置く。判定する AI は、差分と一緒に 4 枚目を読む（第 2 章 p.32）。

## 実装イメージ：依頼ファイルの中身

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="14" width="560" height="340" rx="8" fill="#fff" class="lt"/>
  <text x="60" y="44" class="tx">tasks/012-retry.md</text>
  <g style="font-family:monospace;font-size:15px">
    <text x="60" y="76" font-weight="700"># 012 注文 API の再試行</text>
    <text x="60" y="108" class="hc">## 目的</text><text x="80" y="130">決済が一時的に落ちても、注文を取りこぼさない</text>
    <text x="60" y="160" class="hc">## 守る条件</text><text x="80" y="182">二重に課金しない。再試行は 3 回まで</text>
    <text x="60" y="212" class="hc">## 使える権限</text><text x="80" y="234">src/order/ と tests/。本番の決済は呼ばない</text>
    <text x="60" y="264" class="hc">## 判定の条件</text><text x="80" y="286">決済が 3 回落ちても注文が 1 件だけ残るテスト</text>
    <text x="60" y="320" class="sub">## 質問と答え（AI が足す。第 8 章）</text>
  </g>
  <rect x="630" y="14" width="230" height="160" rx="8" fill="#fff" class="lt"/>
  <text x="650" y="44" class="tx">CLAUDE.md の「語」の節</text>
  <g style="font-family:monospace;font-size:14px"><text x="650" y="80">LGTM: 判定の</text><text x="650" y="102">コメント欄を見る (v2)</text><text x="650" y="136">GO: 品質の GO と</text><text x="650" y="158">公開の GO を分ける</text></g>
  <text x="745" y="214" class="ts" text-anchor="middle">1 語 1 行。意味を</text><text x="745" y="238" class="ts" text-anchor="middle">変えたら版を上げる</text>
  <text x="745" y="290" class="tx" text-anchor="middle">p.80〜79</text>
</svg>
```

4 見出しが 1 つでも空なら、その依頼はまだ渡しません。語の意味は共通の決まりに 1 語 1 行で書き、変えるときは版を上げます。

※ 中身は第 4 章 p.71 の例。人が渡すのはここまでで、作り方は書かない。見出しを埋めるのに迷うなら、それが要件定義の残りの仕事（p.83）。

## 次章へ：1 回通った頼み方は次も通るか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <g fill="#fff" class="hl"><rect x="34" y="100" width="24" height="30" rx="3"/><rect x="62" y="100" width="24" height="30" rx="3"/><rect x="90" y="100" width="24" height="30" rx="3"/><rect x="118" y="100" width="24" height="30" rx="3"/></g>
  <rect x="190" y="150" width="120" height="60" rx="6" class="a"/><text x="250" y="186" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="150" width="120" height="60" rx="6" class="box"/><text x="398" y="186" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="168" width="24" height="24"/>
  <rect x="510" y="150" width="140" height="60" rx="6" fill="#fff" class="al"/><text x="580" y="176" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="580" y="198" class="ts ac" text-anchor="middle">がレビュー</text>
  <rect x="690" y="150" width="120" height="60" rx="6" class="box"/><text x="750" y="186" class="t" text-anchor="middle">次へ</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M310,180 H346" class="ln" marker-end="url(#arr)"/><path d="M470,180 H506" class="ln" marker-end="url(#arr)"/><path d="M650,180 H686" class="ln" marker-end="url(#arr)"/>
  <path d="M750,210 V280 H90 V214" class="ln" marker-end="url(#arr)"/>
  <use href="#i-ok" x="566" y="100" width="28" height="28"/><text x="600" y="120" class="ts okc">1 周目</text>
  <text x="580" y="80" class="tl" text-anchor="middle">?</text><text x="620" y="80" class="ts sub">2 周目も</text>
  <text x="420" y="330" class="ts sub" text-anchor="middle">同じ 4 枚で、同じ AI に、もう一度頼む</text>
</svg>
```

書いて渡し、1 回うまく通りました。次も通るのでしょうか。それが第 5 章です。
