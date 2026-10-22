# 第 6 章　権限の範囲

> AI に見せる・送らせる範囲を、役ごとに絞る

<!-- 扉の絵（@ope-ultp1635 msg f0419ae4）: 章全体の主張 1 つ。本文の絵の使い回しはしない -->
```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <g class="ts" text-anchor="middle"><text x="225" y="40">コード</text><text x="355" y="40">テスト環境</text><text x="485" y="40">公開の資料</text><text x="615" y="40">本番の鍵</text><text x="745" y="40">社外へ送る</text></g>
  <g class="t" text-anchor="end"><text x="150" y="88">レビュー役</text><text x="150" y="150">実装役</text><text x="150" y="212">調べ役</text></g>
  <g fill="#fff" stroke="#ccc" stroke-width="1.5">
    <rect x="170" y="58" width="110" height="46" rx="4"/><rect x="300" y="58" width="110" height="46" rx="4"/><rect x="430" y="58" width="110" height="46" rx="4"/><rect x="560" y="58" width="110" height="46" rx="4"/><rect x="690" y="58" width="110" height="46" rx="4"/>
    <rect x="170" y="120" width="110" height="46" rx="4"/><rect x="300" y="120" width="110" height="46" rx="4"/><rect x="430" y="120" width="110" height="46" rx="4"/><rect x="560" y="120" width="110" height="46" rx="4"/><rect x="690" y="120" width="110" height="46" rx="4"/>
    <rect x="170" y="182" width="110" height="46" rx="4"/><rect x="300" y="182" width="110" height="46" rx="4"/><rect x="430" y="182" width="110" height="46" rx="4"/><rect x="560" y="182" width="110" height="46" rx="4"/><rect x="690" y="182" width="110" height="46" rx="4"/>
  </g>
  <g class="a"><rect x="170" y="58" width="110" height="46" rx="4"/><rect x="170" y="120" width="110" height="46" rx="4"/><rect x="300" y="120" width="110" height="46" rx="4"/><rect x="430" y="182" width="110" height="46" rx="4"/></g>
  <path d="M556,240 V250 H804 V240" class="lt"/>
  <text x="680" y="276" class="ts sub" text-anchor="middle">どの役にも開けない</text>
  <text x="300" y="276" class="ts ac" text-anchor="middle">青 = その役に見せる・送らせる所</text>
</svg>
```

<!--
骨格から本物にした（plan §G.1 の 5 番目）。依頼元 @ope-ultp1635 msg 241ea18b（第 5〜7 章の着手便）・msg 06ecaa03（第 4〜10 章を本物に）。
ページ番号は build/aa.html の右上の数字（第 6 章の扉＝91）。
実例: plan §9.2 の D6 の行（一時ファイルの名前の衝突）は kishibashi3 の公開可否待ちなので使わない（§G.3 の 1・operator msg 241ea18b）。p.93 は作り物で組み、注に「作り物」と書いた。形も別にした（顧客の名前を PR の説明に貼る）。使えることになったら差し替えを考える。
骨格から: 「人が見ていない所で、物が外へ出る」を 2 ページに分けた（p.92 書いた権限と届く範囲／p.93 第 3 章の人の線が止めない送信）。p.97「円を広げる変更は、床の上」を足した（D8 とのつなぎ。円を広げるのは許可リストを緩めること）。「上の決定材料」は、層（P2）が第 8 章なので「頼んだ側の検討メモ」にした。
例は第 4 章の 4 枚（決済の再試行）を引き継いだ。作り物。
-->

第 5 章で、判定は毎回になりました。3 つのうち 2 つめは権限です。判定が見ない所で、AI が何を読み、どこへ送れるかを見ます。

## 書いた権限より、届く範囲が広い

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g fill="#fff" class="lt"><rect x="520" y="6" width="110" height="30" rx="4"/><rect x="760" y="6" width="110" height="30" rx="4"/></g>
  <rect x="640" y="6" width="110" height="30" rx="4" fill="#fff" stroke="#222" stroke-width="3"/>
  <g class="tx" text-anchor="middle"><text x="575" y="26">5 判定</text><text x="695" y="26" style="fill:#222;font-weight:700">6 権限</text><text x="815" y="26">7 大きさ</text></g>
  <rect x="30" y="80" width="230" height="140" rx="6" fill="#fff" class="hl"/>
  <text x="46" y="110" class="ts hc" font-weight="700">3 使える権限</text>
  <text x="46" y="150" class="ts">テスト環境まで</text><text x="46" y="176" class="ts">本番の決済は呼ばない</text>
  <text x="145" y="250" class="tx" text-anchor="middle">札に書いた範囲（第 4 章 p.71）</text>
  <rect x="300" y="56" width="560" height="300" rx="12" fill="#f4f4f2"/>
  <text x="316" y="80" class="tx">AI の手が届く範囲</text>
  <rect x="440" y="180" width="130" height="56" rx="6" class="a"/><text x="505" y="214" class="ts on" text-anchor="middle">実装役の AI</text>
  <rect x="320" y="96" width="140" height="48" rx="6" class="box"/><text x="390" y="126" class="ts" text-anchor="middle">テスト環境</text>
  <rect x="312" y="88" width="156" height="64" rx="8" fill="none" class="hl dash"/>
  <g fill="#fff" stroke="#c62828" stroke-width="2"><rect x="660" y="96" width="180" height="48" rx="6"/><rect x="660" y="184" width="180" height="48" rx="6"/><rect x="660" y="272" width="180" height="48" rx="6"/></g>
  <g class="ts" text-anchor="middle"><text x="750" y="126">本番の決済の鍵</text><text x="750" y="214">顧客一覧</text><text x="750" y="302">社外へのメール</text></g>
  <g class="ln"><path d="M470,178 L430,150" marker-end="url(#arr)"/><path d="M572,196 L656,128" marker-end="url(#arr)"/><path d="M572,208 H656" marker-end="url(#arr)"/><path d="M572,222 L656,288" marker-end="url(#arr)"/></g>
  <text x="440" y="300" class="ts xc" text-anchor="middle">札の外にも手が届く</text>
</svg>
```

3 枚目に「本番の決済は呼ばない」と書いても、本番の鍵に手が届くなら、守っているのは AI の読み方だけです。

※ AI は書かれていない所を、もっともらしく埋める（第 4 章 p.68）。図は説明のための作り物。

## 人の線は、送ると分かる送信で止まる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M60,150 H820" class="ln" marker-end="url(#arr)"/>
  <text x="60" y="180" class="ts sub">revert できる</text>
  <text x="820" y="180" class="ts sub" text-anchor="end">revert できない</text>
  <g fill="#2f6fb3"><circle cx="220" cy="150" r="9"/><circle cx="330" cy="150" r="9"/></g>
  <circle cx="680" cy="150" r="9" fill="#555"/>
  <g class="ts" text-anchor="middle"><text x="220" y="110">PR の説明を</text><text x="220" y="132">書く</text><text x="340" y="110">feature へ</text><text x="340" y="132">merge</text><text x="680" y="110">顧客に</text><text x="680" y="132">メール</text></g>
  <path d="M440,60 V230" stroke="#d9822b" stroke-width="5"/>
  <rect x="400" y="24" width="80" height="34" rx="6" class="h"/><text x="440" y="47" class="ts on" text-anchor="middle">人</text>
  <text x="560" y="210" class="ts hc" text-anchor="middle">送ると分かるので、ここで止まる</text>
  <rect x="60" y="250" width="420" height="80" rx="8" fill="#fff" class="xl"/>
  <text x="80" y="282" class="ts">調べるために読んだ顧客の名前を、</text>
  <text x="80" y="308" class="ts">PR の説明にそのまま貼った</text>
  <path d="M220,246 V168" class="xl dash" marker-end="url(#arr-x)"/>
  <text x="510" y="282" class="ts xc">送ったと気づかれないまま、</text>
  <text x="510" y="308" class="ts xc">線の左を通る</text>
</svg>
```

第 3 章の人の線は、送ると分かる操作の手前で止まります。顧客の名前を PR の説明に貼ると、気づかれずに線の左を通ります。線を動かしても、気づかない送り方は残ります。

※ 説明のための作り物。物差しは第 3 章 p.44。説明は書き直せても、読まれた分は戻らない（p.46 と同じ形）。

## 役ごとに、見える範囲の円が違う

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <circle cx="160" cy="170" r="100" fill="#eaf1f9" class="al"/>
  <circle cx="440" cy="170" r="120" fill="#eaf1f9" class="al"/>
  <circle cx="720" cy="170" r="130" fill="#eaf1f9" class="al"/>
  <rect x="100" y="84" width="120" height="34" rx="6" class="a"/><text x="160" y="107" class="ts on" text-anchor="middle">レビュー役</text>
  <rect x="380" y="64" width="120" height="34" rx="6" class="a"/><text x="440" y="87" class="ts on" text-anchor="middle">実装役</text>
  <rect x="660" y="54" width="120" height="34" rx="6" class="a"/><text x="720" y="77" class="ts on" text-anchor="middle">調べ役</text>
  <g class="ts" text-anchor="middle">
    <text x="160" y="160">PR の差分</text><text x="160" y="190">受け入れ条件</text>
    <text x="440" y="140">コード</text><text x="440" y="170">テスト環境</text><text x="440" y="200">4 枚</text>
    <text x="720" y="130">公開の資料</text><text x="720" y="160">過去の記録</text><text x="720" y="190">4 枚の目的</text>
  </g>
  <rect x="200" y="314" width="480" height="44" rx="6" class="w"/>
  <text x="440" y="342" class="ts" text-anchor="middle">どの円にも入らない：本番の決済の鍵・顧客一覧</text>
</svg>
```

AI が読めて送れる範囲を、役に要るぶんだけにします。届かない物は、埋めようも送りようもありません。条文 D6 です。

※ D6「実行者が参照・送信できる情報は、役割に応じて最小化する（P2）」。P2 は第 8 章 p.126。条文の一覧は p.3。

## 絞るのは参照と送信、目的は渡す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <circle cx="300" cy="190" r="160" fill="#eaf1f9" class="al"/>
  <rect x="240" y="44" width="120" height="34" rx="6" class="a"/><text x="300" y="67" class="ts on" text-anchor="middle">実装役</text>
  <g fill="#fff" class="hl"><rect x="190" y="100" width="220" height="44" rx="6"/><rect x="190" y="156" width="220" height="44" rx="6"/></g>
  <text x="300" y="128" class="ts hc" text-anchor="middle">1 目的</text><text x="300" y="184" class="ts hc" text-anchor="middle">なぜ再試行が要るか</text>
  <g class="box"><rect x="190" y="220" width="220" height="44" rx="6"/><rect x="190" y="276" width="220" height="44" rx="6"/></g>
  <text x="300" y="248" class="ts" text-anchor="middle">コード</text><text x="300" y="304" class="ts" text-anchor="middle">テスト環境</text>
  <text x="300" y="370" class="ts" text-anchor="middle">残す</text>
  <g class="w"><rect x="620" y="90" width="220" height="44" rx="6"/><rect x="620" y="170" width="220" height="44" rx="6"/><rect x="620" y="250" width="220" height="44" rx="6"/></g>
  <g class="ts" text-anchor="middle"><text x="730" y="118">本番の決済の鍵</text><text x="730" y="198">顧客一覧</text><text x="730" y="278">ほかの案件の資料</text></g>
  <g class="ln"><path d="M466,112 H612" marker-end="url(#arr)"/><path d="M466,192 H612" marker-end="url(#arr)"/><path d="M466,272 H612" marker-end="url(#arr)"/></g>
  <text x="730" y="340" class="ts" text-anchor="middle">外す</text>
</svg>
```

目的が分かるための文脈までは切りません。1 枚目の目的と、その背景は渡します。外すのは、役に要らない読み書きだけです。

## 読めた資料は、従う決まりではない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="330" y="160" width="150" height="60" rx="6" class="a"/><text x="405" y="196" class="t on" text-anchor="middle">実装役の AI</text>
  <rect x="30" y="40" width="270" height="96" rx="6" fill="#f4f4f2" stroke="#b5b5b5" stroke-width="1.5"/>
  <text x="46" y="68" class="tx">頼んだ側の検討メモ</text>
  <text x="46" y="98" class="ts">来月からは、本番の決済も</text><text x="46" y="122" class="ts">触ってもらう予定</text>
  <path d="M300,110 L360,156" stroke="#b5b5b5" stroke-width="3" fill="none" marker-end="url(#arr)"/>
  <text x="250" y="168" class="ts sub" text-anchor="end">読める</text>
  <rect x="580" y="40" width="270" height="96" rx="6" fill="#fff" class="hl"/>
  <text x="596" y="68" class="ts hc" font-weight="700">3 使える権限</text>
  <text x="596" y="98" class="ts">テスト環境まで</text><text x="596" y="122" class="ts">本番の決済は呼ばない</text>
  <path d="M580,110 L484,160" class="ln" marker-end="url(#arr)"/>
  <text x="600" y="168" class="ts">従う</text>
  <rect x="330" y="290" width="150" height="50" rx="6" fill="#fff" stroke="#c62828" stroke-width="2"/><text x="405" y="321" class="ts" text-anchor="middle">本番の決済</text>
  <path d="M405,222 V284" class="xl dash"/><use href="#i-no" x="393" y="240" width="24" height="24"/>
  <text x="520" y="321" class="ts xc">メモからは、権限は生まれない</text>
</svg>
```

読めることと、従うことは別です。頼んだ側の検討メモを読んでも、権限は生まれません。従うのは、決まりとして渡された 4 枚です。

※ 上の役の判断材料を読めても、上の役の決める権限は得ない。

## 円を広げる変更は、床の上

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <circle cx="170" cy="180" r="110" fill="#eaf1f9" class="al"/>
  <rect x="110" y="96" width="120" height="34" rx="6" class="a"/><text x="170" y="119" class="ts on" text-anchor="middle">実装役</text>
  <text x="170" y="190" class="ts" text-anchor="middle">テスト環境</text>
  <circle cx="170" cy="180" r="150" fill="none" class="al dash"/>
  <text x="170" y="350" class="tx ac" text-anchor="middle">広げたい円</text>
  <rect x="360" y="70" width="230" height="70" rx="6" fill="#fff" class="al"/>
  <use href="#i-pr" x="374" y="86" width="28" height="36"/>
  <text x="412" y="100" class="ts">本番の決済の鍵も</text><text x="412" y="124" class="ts">見せてください</text>
  <text x="475" y="166" class="tx ac" text-anchor="middle">AI が頼むのはかまわない</text>
  <path d="M590,105 H656" class="ln" marker-end="url(#arr)"/>
  <rect x="660" y="76" width="180" height="60" rx="6" class="h"/><text x="750" y="112" class="ts on" text-anchor="middle">人が通す</text>
  <rect x="360" y="210" width="480" height="70" rx="6" class="h"/>
  <text x="600" y="242" class="ts on" text-anchor="middle">床：AI が自分の縛りを緩める変更</text>
  <text x="600" y="266" class="tx on" text-anchor="middle">第 3 章 p.52</text>
  <text x="600" y="320" class="ts sub" text-anchor="middle">円を狭める向きは、床に当たらない</text>
</svg>
```

円を広げるのは、AI の縛りを緩める変更です。AI が頼むのはかまいません。通すのは人で、第 3 章の床に当たります。

※ 第 3 章 p.52・p.54。許可リストのような、文書の形をとらない縛りも D8 に入る。

## 練習問題：この AI に渡しすぎている物

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="150" width="170" height="60" rx="6" class="a"/><text x="145" y="186" class="t on" text-anchor="middle">レビュー役</text>
  <path d="M236,180 H330" class="ln" marker-end="url(#arr)"/>
  <text x="283" y="166" class="tx" text-anchor="middle">渡した物</text>
  <g fill="#fff" class="lt"><rect x="340" y="50" width="400" height="56" rx="6"/><rect x="340" y="120" width="400" height="56" rx="6"/><rect x="340" y="190" width="400" height="56" rx="6"/><rect x="340" y="260" width="400" height="56" rx="6"/></g>
  <g class="ts"><text x="370" y="84">本番の決済の鍵</text><text x="370" y="154">顧客一覧（全件）</text><text x="370" y="224">PR の差分</text><text x="370" y="294">受け入れ条件</text></g>
  <g fill="#fff" class="lt dash"><rect x="690" y="64" width="28" height="28" rx="3"/><rect x="690" y="134" width="28" height="28" rx="3"/><rect x="690" y="204" width="28" height="28" rx="3"/><rect x="690" y="274" width="28" height="28" rx="3"/></g>
  <text x="540" y="350" class="ts sub" text-anchor="middle">要らない物に印を</text>
</svg>
```

レビュー役の AI に渡した物です。要らない物はどれでしょう。外すと困る物はどれでしょう。

※ 答え：鍵と顧客一覧は要らない。差分と受け入れ条件は外せない。受け入れ条件が無いと作成者寄りになる（第 2 章 p.31）。

## まとめ：届く範囲を、役ごとに先に決める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="800" height="150" rx="10" class="soft"/>
  <text x="64" y="62" class="ts sub">AA の条文（抜き書き）</text>
  <text x="64" y="112" style="font-size:19px">D6 実行者が参照・送信できる情報は、役割に応じて最小化する（P2）</text>
  <path d="M100,120 H290" class="hl"/><path d="M370,120 H600" class="hl"/>
  <text x="100" y="146" class="tx">p.101・99 判定の見ない所</text>
  <text x="370" y="146" class="tx">p.103 役ごとの円</text>
  <g fill="#fff" class="lt"><rect x="40" y="214" width="250" height="110" rx="8"/><rect x="315" y="214" width="250" height="110" rx="8"/><rect x="590" y="214" width="250" height="110" rx="8"/></g>
  <text x="70" y="254" class="ts">目的は渡す</text><text x="70" y="296" class="tx">p.104 絞るのは参照と送信</text>
  <text x="345" y="254" class="ts">読める ≠ 従う</text><text x="345" y="296" class="tx">p.105 メモから権限は出ない</text>
  <text x="620" y="254" class="ts">広げるのは床の上</text><text x="620" y="296" class="tx">p.106 通すのは人</text>
  <text x="440" y="360" class="ts sub" text-anchor="middle">壊れる所 3 つのうち、2 つめ：権限</text>
</svg>
```

この章を条文で書くと、D6 の 1 行です。人が毎回は見ない代わりに、AI の手が届く範囲を、役ごとに先に決めておきます。

※ 条文の一覧は p.3。

## 実装イメージ：役ごとの届く範囲

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="20" y="6" width="840" height="46" rx="8" class="soft"/>
  <text x="36" y="35" class="ts sub">この章の約束</text>
  <text x="150" y="35" class="ts">どの役も、自分の行の外には手を伸ばさない。行を広げたいときは頼む（床）</text>
  <g class="tx"><text x="40" y="84">役</text><text x="190" y="84">読める所</text><text x="440" y="84">送れる所・打てる物</text><text x="690" y="84">持つ鍵</text></g>
  <path d="M20,92 H860" class="lt"/>
  <rect x="20" y="94" width="840" height="76" class="soft"/>
  <text x="40" y="128" class="t ac" font-weight="700">作る AI</text>
  <g class="ts"><text x="190" y="124">repo・依頼ファイル</text><text x="190" y="150">・決まりファイル</text>
    <text x="440" y="124">自分の branch に push</text><text x="440" y="150">PR を出す。テストを回す</text>
    <text x="690" y="124">テスト用の鍵だけ</text></g>
  <text x="40" y="208" class="t ac" font-weight="700">判定する AI</text>
  <g class="ts"><text x="190" y="204">差分・4 枚目</text><text x="190" y="230">・決まりファイル</text>
    <text x="440" y="204">PR へのコメントだけ</text><text x="440" y="230" class="sub">push も merge もしない</text>
    <text x="690" y="204">なし</text></g>
  <rect x="20" y="254" width="840" height="76" fill="#fdf2e6"/>
  <text x="40" y="288" class="t hc" font-weight="700">人</text>
  <g class="ts"><text x="190" y="284">全部</text>
    <text x="440" y="284">merge・線の右の操作</text><text x="440" y="310">（第 3 章の表）</text>
    <text x="690" y="284">本番の鍵</text></g>
  <text x="440" y="362" class="tx" text-anchor="middle">役ごとに別のセッションを起こし、それぞれの権限設定でこの行を書く</text>
</svg>
```

この条文を守るとは：役ごとのセッションの権限設定で、読める場所と打てるコマンドを決めることです。判定の役は、読むことと PR へのコメントしかできません。

※ 本番の鍵は、AI のセッションを起こす端末の環境変数に置かない。設定で読みを禁じても、環境にあれば届く（p.101）。

## 次章へ：1 回が大きいと戻せるか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g fill="#fff" class="lt"><rect x="520" y="6" width="110" height="30" rx="4"/><rect x="640" y="6" width="110" height="30" rx="4"/></g>
  <rect x="760" y="6" width="110" height="30" rx="4" fill="#fff" stroke="#222" stroke-width="3"/>
  <g class="tx" text-anchor="middle"><text x="575" y="26">5 判定</text><text x="695" y="26">6 権限</text><text x="815" y="26" style="fill:#222;font-weight:700">7 大きさ</text></g>
  <path d="M60,240 H820" class="ln" marker-end="url(#arr)"/>
  <text x="60" y="270" class="ts sub">revert できる</text><text x="820" y="270" class="ts sub" text-anchor="end">revert できない</text>
  <path d="M440,90 V300" stroke="#d9822b" stroke-width="5"/>
  <rect x="400" y="56" width="80" height="34" rx="6" class="h"/><text x="440" y="79" class="ts on" text-anchor="middle">人</text>
  <rect x="500" y="120" width="300" height="100" rx="6" fill="#fff" stroke="#555" stroke-width="3"/>
  <text x="650" y="164" class="t" text-anchor="middle">大きな 1 本の変更</text>
  <text x="650" y="194" class="ts sub" text-anchor="middle">4 枚はどれも正しい</text>
  <text x="250" y="170" class="tl" text-anchor="middle">?</text>
  <text x="440" y="350" class="ts sub" text-anchor="middle">判定も権限も効いている。それでも、1 本が大きい</text>
</svg>
```

判定も権限も効いていても、1 回の変更が大きいと、戻すときに巻き込む物が増えます。どう刻むかが第 7 章です。

---
@writer-ja [bridge-claude2] (operator-supervised · k-ishibashi-ntv/agent-hub)
