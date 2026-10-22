# 第 7 章　変更の大きさ

> 小さく刻むと、revert できる範囲が広がる

<!-- 扉の絵（@ope-ultp1635 msg f0419ae4）: 章全体の主張 1 つ。本文の絵の使い回しはしない -->
```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <path d="M40,250 H400 M480,250 H840" class="ln"/>
  <text x="220" y="34" class="t" text-anchor="middle" font-weight="700">1 回で大きく</text>
  <rect x="160" y="80" width="200" height="170" class="a"/><text x="260" y="170" class="ts on" text-anchor="middle">1 回の変更</text>
  <path d="M156,92 C 90,110 80,180 92,240" class="xl" marker-end="url(#arr-x)"/><use href="#i-no" x="70" y="140" width="30" height="30"/>
  <text x="80" y="278" class="ts xc" text-anchor="middle">戻せない</text>
  <text x="660" y="34" class="t" text-anchor="middle" font-weight="700">小さく刻む</text>
  <g class="a" stroke="#fff" stroke-width="2">
    <rect x="510" y="216" width="60" height="34"/><rect x="570" y="182" width="60" height="68"/><rect x="630" y="148" width="60" height="102"/><rect x="690" y="114" width="60" height="136"/><rect x="750" y="80" width="60" height="170"/>
  </g>
  <g fill="none" stroke="#2e7d32" stroke-width="3">
    <path d="M770,76 C 750,58 726,74 722,104" marker-end="url(#arr)"/><path d="M710,110 C 690,92 666,108 662,138" marker-end="url(#arr)"/><path d="M650,144 C 630,126 606,142 602,172" marker-end="url(#arr)"/><path d="M590,178 C 570,160 546,176 542,206" marker-end="url(#arr)"/>
  </g>
  <text x="660" y="278" class="ts okc" text-anchor="middle">1 段ずつ revert できる</text>
</svg>
```

<!--
骨格から本物にした（plan §G.1 の 5 番目）。依頼元 @ope-ultp1635 msg 241ea18b（第 5〜7 章の着手便）・msg 06ecaa03（第 4〜10 章を本物に）。
ページ番号は build/aa.html の右上の数字（第 7 章の扉＝101）。
骨格から: 「第 1 章の 55 版を刻み方で見直す」を落とした。55 版で失われたのは中身の無い書き直しの手間で、revert できるかの話ではない（どの版も戻せる）。D7 の実例に当てると導出がずれる（plan §9.2 の D7 の行は「あると良い」）。代わりに p.105「刻めば、刻んで逃げる道も開く」（解説 D7 の但し書きの理由）を足し、床のページで第 3 章 p.49 の実例を呼び戻した。
例は作り物: p.103 の大きな 1 本、p.106・107 の毎日のデータの書き換えとバックアップ 7 世代、p.109 の列の名前の変更。
-->

第 6 章で、AI の手が届く範囲を絞りました。3 つめは大きさです。4 枚の外にあって、物差しの上の位置を決めます。

## 4 枚が正しくても、1 回が大きい

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g fill="#fff" class="lt"><rect x="520" y="6" width="110" height="30" rx="4"/><rect x="640" y="6" width="110" height="30" rx="4"/></g>
  <rect x="760" y="6" width="110" height="30" rx="4" fill="#fff" stroke="#222" stroke-width="3"/>
  <g class="tx" text-anchor="middle"><text x="575" y="26">5 判定</text><text x="695" y="26">6 権限</text><text x="815" y="26" style="fill:#222;font-weight:700">7 大きさ</text></g>
  <g fill="#fff" class="hl"><rect x="40" y="60" width="96" height="40" rx="4"/><rect x="146" y="60" width="96" height="40" rx="4"/><rect x="252" y="60" width="96" height="40" rx="4"/><rect x="358" y="60" width="96" height="40" rx="4"/></g>
  <g class="tx hc" text-anchor="middle"><text x="88" y="85">1 目的</text><text x="194" y="85">2 条件</text><text x="300" y="85">3 権限</text><text x="406" y="85">4 判定</text></g>
  <path d="M40,108 V118 H454 V108" class="ln"/>
  <text x="247" y="140" class="ts" text-anchor="middle">4 枚が書くのは「この一筋の分」</text>
  <text x="247" y="162" class="tx" text-anchor="middle">一筋の大きさは、どの 1 枚にも無い</text>
  <path d="M60,290 H820" class="ln" marker-end="url(#arr)"/>
  <text x="60" y="320" class="ts sub">revert できる</text><text x="820" y="320" class="ts sub" text-anchor="end">revert できない</text>
  <path d="M440,190 V340" stroke="#d9822b" stroke-width="5"/>
  <rect x="400" y="156" width="80" height="34" rx="6" class="h"/><text x="440" y="179" class="ts on" text-anchor="middle">人</text>
  <rect x="500" y="190" width="320" height="86" rx="6" fill="#fff" stroke="#555" stroke-width="3"/>
  <text x="660" y="226" class="t" text-anchor="middle">大きな 1 本</text>
  <text x="660" y="254" class="tx" text-anchor="middle">戻せない部分が 1 つでも入れば、1 本ごと線の右</text>
  <path d="M247,170 Q300,240 494,230" class="lt dash" marker-end="url(#arr)"/>
</svg>
```

4 枚は「この一筋の分」を書く物でした（p.78）。一筋の大きさは、どの 1 枚にも書かれていません。大きいほど、物差しの右に寄ります。

※ 物差しは第 3 章 p.44。大きな 1 本は、戻すときに巻き込む物も多い。

## 小さく刻むと、revert できる側に移る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M440,20 V340" stroke="#d9822b" stroke-width="5"/>
  <text x="220" y="40" class="ts sub" text-anchor="middle">revert できる</text><text x="660" y="40" class="ts sub" text-anchor="middle">revert できない</text>
  <text x="40" y="84" class="ts">刻まない</text>
  <rect x="470" y="60" width="380" height="64" rx="6" fill="#fff" stroke="#555" stroke-width="3"/>
  <g class="ts" text-anchor="middle"><text x="530" y="98">コード</text><text x="620" y="98">テスト</text><text x="700" y="98">設定</text></g>
  <rect x="740" y="70" width="100" height="44" rx="4" class="x"/><text x="790" y="98" class="ts on" text-anchor="middle">旧データ削除</text>
  <path d="M620,128 C560,190 380,170 300,204" class="lt dash" marker-end="url(#arr)"/>
  <text x="40" y="244" class="ts">刻む</text>
  <g fill="#fff" class="al"><rect x="110" y="210" width="90" height="56" rx="6"/><rect x="215" y="210" width="90" height="56" rx="6"/><rect x="320" y="210" width="90" height="56" rx="6"/></g>
  <g class="ts" text-anchor="middle"><text x="155" y="244">コード</text><text x="260" y="244">テスト</text><text x="365" y="244">設定</text></g>
  <rect x="470" y="210" width="110" height="56" rx="6" class="x"/><text x="525" y="244" class="ts on" text-anchor="middle">旧データ削除</text>
  <text x="260" y="300" class="ts ac" text-anchor="middle">3 本は、レビューに通れば進む</text>
  <text x="470" y="300" class="ts hc">人が見るのは、この 1 本</text>
  <path d="M790,120 Q760,200 586,236" class="lt dash" marker-end="url(#arr)"/>
</svg>
```

刻むと、戻せる札は線の左へ移り、戻せない所だけが小さく右に残ります。人が見るのはその 1 本です。条文 D7 は、これを可逆性を買うと言います。

※ D7「小さく刻むとは、可逆性を買う行為である」。例は作り物。第 3 章 p.48 で減ったのは捨てる量、ここで動くのは物差しの上の位置。

## アジャイルでは心がけ、AA では帰結

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="360" height="280" rx="10" class="soft"/>
  <text x="220" y="76" class="ts sub" text-anchor="middle">アジャイル</text>
  <rect x="100" y="110" width="240" height="110" rx="4" fill="#fff" class="lt"/>
  <text x="220" y="174" class="t" text-anchor="middle">小さく刻め</text>
  <text x="220" y="270" class="ts" text-anchor="middle">守らせるのは規律</text>
  <rect x="480" y="40" width="360" height="280" rx="10" class="soft"/>
  <text x="660" y="76" class="ts sub" text-anchor="middle">AA</text>
  <path d="M700,100 V300" stroke="#d9822b" stroke-width="5"/>
  <rect x="510" y="150" width="170" height="70" rx="6" fill="#fff" stroke="#555" stroke-width="3"/>
  <text x="595" y="191" class="ts" text-anchor="middle">大きな 1 本</text>
  <use href="#i-wait" x="716" y="166" width="22" height="30"/>
  <text x="760" y="190" class="ts">人を待つ</text>
  <text x="660" y="270" class="ts" text-anchor="middle">刻まないと、自分が止まる</text>
</svg>
```

刻まないと、大きな 1 本は人の線の手前で止まり、人を待ちます。守らせる心がけではなく、刻まないと自分が止まるので刻みます。

※ アジャイルでは、刻むのは守らせる処方で、規律が要る。D4 の下では、刻まないと自分が止まる。処方が帰結に変わる。

## 刻めば、刻んで逃げる道も開く

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M440,20 V300" stroke="#d9822b" stroke-width="5"/>
  <text x="220" y="40" class="ts sub" text-anchor="middle">線の左：人を呼ばない</text><text x="660" y="40" class="ts sub" text-anchor="middle">線の右：人を呼ぶ</text>
  <rect x="480" y="70" width="360" height="60" rx="6" fill="#fff" class="xl"/>
  <text x="660" y="106" class="ts xc" text-anchor="middle">戻せない 1 本</text>
  <g fill="#fff" class="al"><rect x="60" y="170" width="34" height="56" rx="3"/><rect x="104" y="170" width="34" height="56" rx="3"/><rect x="148" y="170" width="34" height="56" rx="3"/><rect x="192" y="170" width="34" height="56" rx="3"/><rect x="236" y="170" width="34" height="56" rx="3"/><rect x="280" y="170" width="34" height="56" rx="3"/><rect x="324" y="170" width="34" height="56" rx="3"/><rect x="368" y="170" width="34" height="56" rx="3"/></g>
  <path d="M520,134 C460,160 440,180 404,196" class="xl dash" marker-end="url(#arr-x)"/>
  <text x="230" y="256" class="ts ac" text-anchor="middle">1 本ずつは小さく、戻せるように見える</text>
  <rect x="60" y="300" width="760" height="50" rx="6" class="xw"/>
  <text x="440" y="331" class="ts xc" text-anchor="middle">足し合わせると、線の右の 1 本と同じ</text>
</svg>
```

刻むと、人を呼ばずに済む範囲が広がります。ならば、人を呼ばないためだけに刻む道も同時に開きます。D7 の但し書きは、この道をふさぎます。

※ 但し書きは 3 つ。全体が 1 か所から見える（p.116）、累積に対して判断する（p.117）、床は買えない（p.118）。

## 刻んだ全体が 1 か所から見えること

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="40" width="360" height="290" rx="10" fill="#fff" class="lt"/>
  <text x="210" y="70" class="ts sub" text-anchor="middle">散らばった札</text>
  <g fill="#fff" class="al"><rect x="60" y="100" width="90" height="40" rx="4"/><rect x="230" y="120" width="90" height="40" rx="4"/><rect x="100" y="190" width="90" height="40" rx="4"/><rect x="250" y="220" width="90" height="40" rx="4"/><rect x="70" y="270" width="90" height="40" rx="4"/></g>
  <g class="tx" text-anchor="middle"><text x="105" y="125">書き換え 1</text><text x="275" y="145">書き換え 2</text><text x="145" y="215">書き換え 3</text><text x="295" y="245">書き換え 4</text><text x="115" y="295">書き換え 5</text></g>
  <text x="300" y="300" class="tl" text-anchor="middle">?</text>
  <rect x="460" y="40" width="390" height="290" rx="10" fill="#fff" stroke="#222" stroke-width="3"/>
  <text x="655" y="70" class="ts sub" text-anchor="middle">1 枚の台帳</text>
  <path d="M480,84 H830" class="lt"/>
  <g class="ts"><text x="490" y="106">10/1　書き換え 1</text><text x="490" y="128">10/2　書き換え 2</text><text x="490" y="150">10/3　書き換え 3</text><text x="490" y="172">10/4　書き換え 4</text><text x="490" y="194">10/5　書き換え 5</text><text x="490" y="216">10/6　書き換え 6</text><text x="490" y="238">10/7　書き換え 7</text><text x="490" y="260">10/8　書き換え 8</text></g>
  <path d="M480,272 H830" class="ln"/>
  <text x="490" y="298" class="ts" font-weight="700">全体：同じデータを 8 回書き換えた</text>
  <text x="490" y="320" class="tx">何が積み重なったかを、ここで言える</text>
</svg>
```

刻んだ札が別々の所に散ると、全体で何が変わったかを誰も言えません。全部が 1 枚の台帳から見えることを、刻む条件にします。

※ D7「ただし刻んだ全体が一箇所から見えること」。台帳の中身は、次のページで使う作り物。

## 1 つずつ戻せても、積み重ねは戻せない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="40" y="44" class="ts sub">バックアップは 7 世代まで残る（作り物）</text>
  <g fill="#fff" class="al"><rect x="40" y="70" width="84" height="56" rx="4"/><rect x="134" y="70" width="84" height="56" rx="4"/><rect x="228" y="70" width="84" height="56" rx="4"/><rect x="322" y="70" width="84" height="56" rx="4"/><rect x="416" y="70" width="84" height="56" rx="4"/><rect x="510" y="70" width="84" height="56" rx="4"/><rect x="604" y="70" width="84" height="56" rx="4"/><rect x="698" y="70" width="84" height="56" rx="4"/></g>
  <g class="tx" text-anchor="middle"><text x="82" y="104">1 日目</text><text x="176" y="104">2 日目</text><text x="270" y="104">3 日目</text><text x="364" y="104">4 日目</text><text x="458" y="104">5 日目</text><text x="552" y="104">6 日目</text><text x="646" y="104">7 日目</text><text x="740" y="104">8 日目</text></g>
  <text x="411" y="156" class="ts ac" text-anchor="middle">どの日も、前の日の写しで 1 本ずつ戻せる</text>
  <rect x="40" y="186" width="84" height="44" rx="4" class="w"/><text x="82" y="213" class="tx" text-anchor="middle">最初の状態</text>
  <g fill="#fff" class="lt"><rect x="134" y="186" width="84" height="44" rx="4"/><rect x="228" y="186" width="84" height="44" rx="4"/><rect x="322" y="186" width="84" height="44" rx="4"/><rect x="416" y="186" width="84" height="44" rx="4"/><rect x="510" y="186" width="84" height="44" rx="4"/><rect x="604" y="186" width="84" height="44" rx="4"/><rect x="698" y="186" width="84" height="44" rx="4"/></g>
  <text x="782" y="276" class="tx" text-anchor="end">残っている写しは 7 つ</text>
  <path d="M82,234 V256" class="xl"/><text x="40" y="276" class="ts xc">8 本積んだあと、最初の状態はどの写しにも無い</text>
  <rect x="40" y="304" width="742" height="50" rx="6" class="h"/>
  <text x="411" y="335" class="ts on" text-anchor="middle">人の判断は、8 本目の 1 本ではなく、積み重ねに求める</text>
</svg>
```

毎日 1 本、データを書き換えます。1 本ずつは前の日の写しで戻せても、8 本積むと、最初の状態はどの写しにも残りません。世代を増やしても、それより多く積めば同じです。

※ D7「累積が不可逆なら、判断は累積に対して求める」。例は作り物。

## 床は、刻んでも買えない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="210" width="760" height="110" class="h"/>
  <text x="440" y="256" class="t on" text-anchor="middle">床：AI が自分の権限を緩める変更</text>
  <text x="440" y="290" class="ts on" text-anchor="middle">どれだけ小さくても、人が approve（第 3 章 p.52）</text>
  <g fill="#fff" class="al"><rect x="120" y="120" width="80" height="60" rx="4"/><rect x="230" y="120" width="80" height="60" rx="4"/><rect x="340" y="120" width="80" height="60" rx="4"/></g>
  <g class="tx ac" text-anchor="middle"><text x="160" y="155">1 文</text><text x="270" y="155">1 文</text><text x="380" y="155">1 文</text></g>
  <path d="M160,182 V204 M270,182 V204 M380,182 V204" class="ln"/>
  <rect x="520" y="40" width="300" height="140" rx="8" fill="#fff" class="hl"/>
  <text x="540" y="72" class="ts sub">第 3 章 p.53 の実例</text>
  <text x="540" y="108" class="ts">「確認は要らない」という</text>
  <text x="540" y="132" class="ts">一文の書き足し</text>
  <text x="540" y="164" class="ts hc">小さくても、床の上</text>
  <text x="270" y="350" class="ts sub" text-anchor="middle">刻んだ札も、床の上に落ちる</text>
</svg>
```

AI の権限を緩める変更は、どれだけ小さく刻んでも人が通します。第 3 章の実例は 1 文の書き足しでした。小ささは、床の抜け道になりません。

※ D7「D8 が範囲の外に置くものは、刻んでも買えない」。

## 練習問題：この移行をどう刻むか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="60" width="760" height="130" rx="8" fill="#fff" stroke="#555" stroke-width="3"/>
  <text x="84" y="96" class="ts sub">本番の表を変える 1 本の変更</text>
  <text x="84" y="138" class="t">列の名前を「addr」から「address」に変え、</text>
  <text x="84" y="170" class="t">旧い列を消す</text>
  <path d="M60,280 H820" class="ln" marker-end="url(#arr)"/>
  <text x="60" y="310" class="ts sub">revert できる</text><text x="820" y="310" class="ts sub" text-anchor="end">revert できない</text>
  <path d="M440,220 V330" stroke="#d9822b" stroke-width="5"/>
  <text x="250" y="250" class="tl" text-anchor="middle">?</text><text x="630" y="250" class="tl" text-anchor="middle">?</text>
</svg>
```

表の列の名前を変え、旧い列を消す変更を 1 本で出します。どう刻めば戻せる札になるでしょう。刻めずに残るのはどこでしょう。

※ 答え：新しい列を足す・両方に書く・読みを新しい列へ、は戻せる。旧い列を消す 1 本は刻めずに残り、人が見る（p.113）。

## まとめ：刻めば戻せる、全体・累積・床は別

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="20" width="800" height="300" rx="10" class="soft"/>
  <text x="64" y="50" class="ts sub">AA の条文（全文）</text>
  <text x="64" y="88" style="font-size:18px">D7 小さく刻むとは、可逆性を買う行為である。</text>
  <path d="M100,96 H420" class="hl"/><text x="650" y="92" class="tx">p.113 戻せる側に移る</text>
  <text x="64" y="140" style="font-size:18px">　　ただし刻んだ全体が一箇所から見えること。</text>
  <path d="M100,148 H420" class="hl"/><text x="650" y="144" class="tx">p.116 1 枚の台帳</text>
  <text x="64" y="192" style="font-size:18px">　　累積が不可逆なら、判断は累積に対して求める。</text>
  <path d="M100,200 H460" class="hl"/><text x="650" y="196" class="tx">p.117 積み重ね</text>
  <text x="64" y="244" style="font-size:18px">　　D8 が範囲の外に置くものは、刻んでも買えない</text>
  <path d="M100,252 H470" class="hl"/><text x="650" y="248" class="tx">p.118 床</text>
  <text x="64" y="292" style="font-size:18px">　　（D4・D8・前提）</text>
  <text x="440" y="358" class="ts sub" text-anchor="middle">壊れる所 3 つのうち、3 つめ：大きさ</text>
</svg>
```

この章を条文で書くと、D7 の 1 行です。刻めば戻せる範囲が広がり、全体・積み重ね・床の 3 つは別に見ます。

※ 条文の一覧は p.3。

## 実装イメージ：先に台帳の issue

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="20" y="6" width="840" height="46" rx="8" class="soft"/>
  <text x="36" y="35" class="ts sub">この章の約束</text>
  <text x="150" y="35" class="ts">作る AI → 人：大きな依頼は、刻んだ全部を台帳に並べてから 1 本ずつ出す</text>
  <rect x="40" y="74" width="560" height="270" rx="8" fill="#fff" class="lt"/>
  <text x="60" y="104" class="tx">issue #40（台帳）</text>
  <text x="60" y="134" class="t" font-weight="700">列 name を full_name に変える</text>
  <g style="font-size:16px">
    <use href="#i-ok" x="60" y="156" width="20" height="20"/><text x="90" y="172">#41 新しい列を足す</text>
    <use href="#i-ok" x="60" y="190" width="20" height="20"/><text x="90" y="206">#42 両方の列に書く</text>
    <rect x="60" y="224" width="20" height="20" rx="3" fill="#fff" class="lt"/><text x="90" y="240">#43 読みを新しい列へ</text>
    <rect x="60" y="258" width="20" height="20" rx="3" fill="#fff" class="hl"/><text x="90" y="274" class="hc" font-weight="700">#44 旧い列を消す</text>
  </g>
  <text x="90" y="310" class="tx">1 本ずつ、1 回の revert で戻せる大きさ</text>
  <path d="M330,268 H630" class="hl" marker-end="url(#arr)"/>
  <rect x="636" y="232" width="210" height="72" rx="6" class="h"/>
  <text x="741" y="262" class="ts on" text-anchor="middle">人が approve</text><text x="741" y="288" class="tx on" text-anchor="middle">戻せない 1 本（線の右）</text>
  <text x="660" y="110" class="ts">台帳を先に作る</text><text x="660" y="136" class="tx">全体で何が変わるかを</text><text x="660" y="156" class="tx">1 か所で見せる（p.116）</text>
  <text x="440" y="368" class="tx" text-anchor="middle">番号と列の名前は作り物。第 7 章の練習問題（p.119）の刻み方</text>
</svg>
```

この条文を守るとは：大きな依頼は、刻む前に台帳の issue を作ることです。1 本は 1 回の revert で戻せる大きさにし、全部を台帳に並べます。

※ 積むと戻せない物（毎日のデータの書き換えなど）は、台帳の段階で人が approve する（p.117）。床の変更は、どれだけ小さくても人が merge する（p.118）。

## 次章へ：なぜ同じ形が何度も出るのか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g fill="#fff" class="lt"><rect x="30" y="60" width="152" height="170" rx="8"/><rect x="200" y="60" width="152" height="170" rx="8"/><rect x="370" y="60" width="152" height="170" rx="8"/><rect x="540" y="60" width="152" height="170" rx="8"/><rect x="710" y="60" width="152" height="170" rx="8"/></g>
  <g class="ts" text-anchor="middle" font-weight="700"><text x="106" y="90">第 2 章</text><text x="276" y="90">第 3 章</text><text x="446" y="90">第 5 章</text><text x="616" y="90">第 6 章</text><text x="786" y="90">第 7 章</text></g>
  <g class="ts" text-anchor="middle"><text x="106" y="124">成果の</text><text x="106" y="146">approve</text><text x="276" y="124">権限を</text><text x="276" y="146">緩める変更</text><text x="446" y="124">毎回の</text><text x="446" y="146">判定</text><text x="616" y="124">円を</text><text x="616" y="146">広げる</text><text x="786" y="124">刻んだ</text><text x="786" y="146">床の札</text></g>
  <g class="tx" text-anchor="middle"><text x="106" y="204">作った AI の外</text><text x="276" y="204">作った AI の外</text><text x="446" y="204">作った AI の外</text><text x="616" y="204">作った AI の外</text><text x="786" y="204">作った AI の外</text></g>
  <g class="lt"><path d="M50,172 H162 M220,172 H332 M390,172 H502 M560,172 H672 M730,172 H842"/></g>
  <text x="440" y="300" class="tl" text-anchor="middle">?</text>
  <text x="440" y="346" class="ts sub" text-anchor="middle">どこで決めても、作った AI は自分で通さない</text>
</svg>
```

判定も、円を広げるのも、床も、作った AI の外で決めました。なぜ同じ形が何度も出るのか。答えは、4 枚を書き足していく第 8 章にあります。

---
@writer-ja [bridge-claude2] (operator-supervised · k-ishibashi-ntv/agent-hub)
