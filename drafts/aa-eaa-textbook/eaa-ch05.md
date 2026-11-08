# 第 5 章　権限による分割

群: 文脈が疎結合になる切り方
副題: 権限で分けると、判断のたびに他へ問い合わせずに済む

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（dd08b888）の第 5 章。着手: @ope-ultp1635 msg 83d1e0ea（群二）。
章題: 目次の「所有者である人間がその範囲を管理できる」を「判断の責任を負う人間がその範囲を追える」に変えた。Core の「所有者」は規範・共有する文書の所有者（core.md:90・91・94・98）で、Cell の判断の責任を負う人は「正当な判断責任者」（core.md:49）・「Cell に属する」人（core.md:42）。目次の通読で @reader の読者が第 10 章の「所有者」を誰かと止まった（@reader 349c4d63）。同じ語を Cell の責任者に使うと、第 10 章の規範の所有者と混ざる。「管理できる」を「追える」にしたのは、第 0 章 p.「一つの Cell の判断は追い切れない」の字に揃えるため。
2d0ca30 までの第 4 章（分割で渡した判断権限は、親 Cell も上書きしない）の中身を、この章に移した: 分割は判断権限ごと渡す（core.md:52）、渡したものは受け取った側のもの・範囲は新しい版を採用するまで変わらない（core.md:53）、親・子は由来の呼び名（core.md:43）、親も横断も上書きしない（core.md:63）、断ることと義務を捨てることは別（core.md:70。「正当な判断主体」は ⑤ の直しのまま）。持ってこなかったもの: 上書きしないので届いた側が確かめる（core.md:22。群三の第 8 章で Evidence と一緒に扱う。⑥ の直し — Evidence の受け手と分割の受け手を混ぜない — を落とさない）。旧本文は 2d0ca30 の eaa-ch04.md にある。
2d0ca30 の第 5 章（分割と統合の引き継ぎ）は群五の第 11 章へ移す。この章には持ってこない。
p.「問い合わせも切り替え」「上書きを許すと文脈が戻る」は書き手の読み。Core が上書きしない理由として書いた行は無い。注に書いた。
p.「責任を負う人間が追える大きさ」は第 0 章の問い「人間が管理し切れるか」からの書き手の導出（structure-v5.md 注 3 番目）。Core は Cell の大きさを書かない。
p.「例：最後に誰が決めるか」は、目次の通読で @reader の読者（最後はテックリードが決めているのは上書きか）が止まった所に、この章の中身で答えた。例の注文画面・在庫連携は @reader のペルソナの設定から借りた形で、書き手が作った例として書いた。
p.「自分の権限は自分で広げない」は core.md:96。保ち方は群四の第 10 章。
絵: 親 Cell と子 Cell は横に並べ、子を親の枠の中に描かない（core.md:43）。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff。判定の正本 @reviewer 2026-11-08-eaa-textbook-77a7fc9-ch00-04 / ch05-08 / ch09-12-furoku、@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）: p.「渡した判断は相手のもの」の「版」を Profile の版と書いた（core.md:53・30。@reader p.68）。p.「断ることと義務を捨てることは別」に core.md:70 の後半（既存権限で判断できない問題）を足した。p.「責任者が追える大きさ」: 文脈が一つのまま追えないとき第 2 章では切らず第 5 章では切る、が閉じていなかった。「文脈で切れる所があれば分け、無ければ責務ごとに責任者を置く」とし、正当な判断責任者は Profile ごと（core.md:49・50）と注に書いた。p.「例：最後に誰が決めるか」に、一つか二つかは第 2 章の判定で決める・一つの Cell ならその判断の責務の責任者が決める、を書いた（書き手の読み。@reader p.75）。p.「自分の権限は自分で広げない」の主語を core.md:96 の「実行者」にした。p.「権限で切るのも Core の外」を外した。
-->

```svg
<svg viewBox="0 0 880 340" width="880" height="340">
  <rect x="40" y="60" width="300" height="200" rx="10" class="hl" style="fill:#fff"/>
  <text x="190" y="96" class="t hc" text-anchor="middle" font-weight="700">渡した Cell</text>
  <rect x="540" y="60" width="300" height="200" rx="10" class="hl" style="fill:#fff"/>
  <text x="690" y="96" class="t hc" text-anchor="middle" font-weight="700">受け取った Cell</text>
  <rect x="640" y="114" width="100" height="40" rx="6" class="h"/><text x="690" y="140" class="ts on" text-anchor="middle">責任者</text>
  <text x="690" y="190" class="ts" text-anchor="middle">自分の範囲は自分で判断</text>
  <text x="690" y="220" class="tx" text-anchor="middle">責任者が追える大きさ</text>
  <path d="M350,120 H530" class="ln" marker-end="url(#arr)"/><text x="440" y="110" class="tx" text-anchor="middle">責務と判断の権限</text>
  <g opacity=".6"><path d="M530,200 H350" class="xl dash" marker-end="url(#arr-x)"/><use href="#i-no" x="428" y="210" width="24" height="24"/><text x="440" y="252" class="tx xc" text-anchor="middle">上書き</text></g>
  <text x="440" y="310" class="t" text-anchor="middle" font-weight="700">変えたいときは、上書きせず提案する</text>
</svg>
```

権限で分けると、一つの Cell が判断のたびに他へ問い合わせずに済みます。Cell の範囲は、その判断の責任を負う人間が追える大きさに収めます。親の Cell も横断の Cell も、分けた Cell の判断を上書きせず、提案を通して変えます。

## 問い合わせも切り替え

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="60" width="320" height="220" rx="10" class="box"/><text x="220" y="96" class="t" text-anchor="middle" font-weight="700">判断する主体</text>
  <rect x="160" y="140" width="120" height="44" rx="22" class="a"/><text x="220" y="168" class="ts on" text-anchor="middle">主体</text>
  <rect x="500" y="60" width="320" height="220" rx="10" class="box"/><text x="660" y="96" class="t" text-anchor="middle" font-weight="700">決めてよいかを持つ主体</text>
  <text x="660" y="168" class="ts" text-anchor="middle">相手の事情・相手の語</text>
  <path d="M380,140 H498" class="xl" marker-end="url(#arr-x)"/><text x="440" y="130" class="tx xc" text-anchor="middle">決めてよいか</text>
  <path d="M498,200 H380" class="xl" marker-end="url(#arr-x)"/><text x="440" y="226" class="tx xc" text-anchor="middle">相手の文脈で返る</text>
  <text x="440" y="336" class="t" text-anchor="middle" font-weight="700">判断のたびに、相手の文脈を読んでから戻る</text>
</svg>
```

判断のたびに、決めてよいかを他の主体に問い合わせると、相手の事情を読んでから自分の仕事に戻ります。これもコンテキストスイッチです。

※ 書き手の読み。権限で分けると疎結合になる、はこの本の考え（第 0 章）。

## 分割は判断権限ごと渡す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="380" height="240" rx="10" class="hl" style="fill:#fff"/>
  <text x="230" y="84" class="t hc" text-anchor="middle" font-weight="700">分割</text>
  <g class="ts"><text x="70" y="140">責務を渡す</text><text x="70" y="180">自分で判断する権限も渡す</text></g>
  <use href="#i-ok" x="70" y="220" width="24" height="24"/>
  <rect x="460" y="50" width="380" height="240" rx="10" class="xl" style="fill:#fff"/>
  <text x="650" y="84" class="t xc" text-anchor="middle" font-weight="700">分割ではない</text>
  <g class="ts"><text x="490" y="140">責務だけを渡す</text><text x="490" y="180">判断は手元に残す</text></g>
  <use href="#i-no" x="490" y="220" width="24" height="24"/>
  <text x="440" y="340" class="ts sub" text-anchor="middle">判断が手元に残ると、受けた側は毎回問い合わせる</text>
</svg>
```

分割は、責務と、自分で判断する権限を、別の責任主体に渡すことです。責務だけを渡し、判断を手元に残すのは分割ではありません。

出典: EAA Core 版 6「1. 責務と分割」。

## 渡した判断は相手のもの

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="340" height="200" rx="10" class="hl" style="fill:#fff"/><text x="210" y="96" class="t hc" text-anchor="middle" font-weight="700">渡した Cell</text>
  <rect x="80" y="140" width="260" height="40" rx="6" class="x"/><text x="210" y="166" class="ts on" text-anchor="middle">後で範囲が変わる（Profile 版 2）</text>
  <rect x="500" y="60" width="340" height="200" rx="10" class="hl" style="fill:#fff"/><text x="670" y="96" class="t hc" text-anchor="middle" font-weight="700">受け取った Cell</text>
  <rect x="540" y="140" width="260" height="40" rx="6" class="soft"/><text x="670" y="166" class="ts" text-anchor="middle">範囲は Profile 版 1 のまま</text>
  <text x="670" y="220" class="tx" text-anchor="middle">版 2 を採用するまで変わらない</text>
  <text x="440" y="330" class="t" text-anchor="middle" font-weight="700">渡したものは、受け取った Cell のもの</text>
</svg>
```

渡した責務と判断権限は、受け取った Cell のものになります。渡した側の範囲が後で変わっても、受け取った側が Profile の新しい版を採用するまで変わりません。

出典: EAA Core 版 6「1. 責務と分割」。Profile は第 4 章、版の採用は第 9 章で見る。

## 親・子は由来の呼び名

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="80" width="240" height="160" rx="10" class="hl" style="fill:#fff"/><text x="160" y="150" class="t hc" text-anchor="middle" font-weight="700">親 Cell</text><text x="160" y="186" class="tx" text-anchor="middle">渡した側</text>
  <rect x="320" y="80" width="240" height="160" rx="10" class="hl" style="fill:#fff"/><text x="440" y="150" class="t hc" text-anchor="middle" font-weight="700">子 Cell</text><text x="440" y="186" class="tx" text-anchor="middle">受け取った側</text>
  <rect x="600" y="80" width="240" height="160" rx="10" class="hl" style="fill:#fff"/><text x="720" y="150" class="t hc" text-anchor="middle" font-weight="700">ほかの Cell</text>
  <path d="M280,200 H320 M560,200 H600" class="ln"/>
  <text x="440" y="300" class="t" text-anchor="middle" font-weight="700">分割の後は、どの線も同じ Cell どうしの関係</text>
</svg>
```

渡した Cell を親、受け取った Cell を子と呼びます。呼び名は分割の由来を示すだけで、分割の後の両者は、ほかの Cell どうしと同じ関係です。

出典: EAA Core 版 6 の概念表「親 Cell・子 Cell」。

## 親も横断も上書きしない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="240" height="110" rx="10" class="hl" style="fill:#fff"/><text x="160" y="102" class="ts hc" text-anchor="middle" font-weight="700">親 Cell</text>
  <rect x="40" y="190" width="240" height="110" rx="10" class="hl" style="fill:#fff"/><text x="160" y="240" class="ts hc" text-anchor="middle" font-weight="700">横断の Cell</text><text x="160" y="266" class="tx" text-anchor="middle">複数の Cell にまたがる責務</text>
  <rect x="580" y="100" width="260" height="140" rx="10" class="hl" style="fill:#fff"/><text x="710" y="164" class="t hc" text-anchor="middle" font-weight="700">分けた Cell</text><text x="710" y="196" class="tx" text-anchor="middle">自分の判断</text>
  <g opacity=".7"><path d="M280,95 L576,150 M280,245 L576,195" class="xl dash" marker-end="url(#arr-x)"/></g>
  <use href="#i-no" x="420" y="108" width="24" height="24"/><use href="#i-no" x="420" y="210" width="24" height="24"/>
  <text x="440" y="346" class="ts sub" text-anchor="middle">どちらも、一方的に上書きしない</text>
</svg>
```

親の Cell も、複数の Cell にまたがる責務を担う横断の Cell も、分けた Cell の判断を一方的に上書きしません。

出典: EAA Core 版 6「2. 自治と権限」、同 概念表「横断責務」。

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
  <rect x="460" y="60" width="380" height="220" rx="10" class="xl" style="fill:#fff"/><text x="650" y="96" class="t xc" text-anchor="middle" font-weight="700">合意した義務を捨てる</text>
  <use href="#i-no" x="638" y="140" width="24" height="24"/><text x="650" y="200" class="ts" text-anchor="middle">一方的にはしない</text>
  <text x="440" y="336" class="ts sub" text-anchor="middle">果たせない・自分の権限で判断できないときは示して、正当な判断主体との調整に戻す</text>
</svg>
```

提案を受け入れないことと、合意した義務を一方的に捨てることは別です。果たせないときや、自分の権限で判断できないときは、示して正当な判断主体との調整に戻します。

出典: EAA Core 版 6「2. 自治と権限」。

## 責任者が追える大きさ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="380" height="240" rx="10" class="box"/>
  <rect x="190" y="70" width="80" height="40" rx="6" class="h"/><text x="230" y="96" class="ts on" text-anchor="middle">責任者</text>
  <g class="tx" text-anchor="middle" opacity=".8"><text x="100" y="160">判断</text><text x="170" y="150">判断</text><text x="240" y="170">判断</text><text x="310" y="150">判断</text><text x="370" y="170">判断</text><text x="120" y="220">判断</text><text x="200" y="240">判断</text><text x="280" y="220">判断</text><text x="360" y="240">判断</text></g>
  <use href="#i-no" x="380" y="70" width="24" height="24"/><text x="230" y="276" class="ts xc" text-anchor="middle">追い切れない</text>
  <path d="M430,170 H470" class="ln" marker-end="url(#arr)"/>
  <rect x="480" y="50" width="170" height="240" rx="10" class="hl" style="fill:#fff"/><rect x="525" y="70" width="80" height="40" rx="6" class="h"/><text x="565" y="96" class="ts on" text-anchor="middle">責任者</text><g class="tx" text-anchor="middle"><text x="565" y="170">判断</text><text x="565" y="210">判断</text></g>
  <rect x="670" y="50" width="170" height="240" rx="10" class="hl" style="fill:#fff"/><rect x="715" y="70" width="80" height="40" rx="6" class="h"/><text x="755" y="96" class="ts on" text-anchor="middle">責任者</text><g class="tx" text-anchor="middle"><text x="755" y="170">判断</text><text x="755" y="210">判断</text></g>
  <text x="440" y="340" class="t" text-anchor="middle" font-weight="700">追えないなら、文脈の境界で権限を渡して分ける</text>
</svg>
```

Cell の範囲は、判断の責任者が中の判断を追える大きさに収めます。追えないとき、文脈で切れる所があれば分け、無ければ責務ごとに責任者を置きます。

※ 第 0 章の問いから書き手が導いた。Core は大きさを書かず、正当な判断責任者を責務（Profile）ごとに明らかにするとする（「1.」）。

## 例：最後に誰が決めるか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="340" height="200" rx="10" class="hl" style="fill:#fff"/><text x="210" y="96" class="t hc" text-anchor="middle" font-weight="700">注文画面の Cell</text>
  <rect x="160" y="120" width="100" height="40" rx="6" class="h"/><text x="210" y="146" class="ts on" text-anchor="middle">責任者 A</text>
  <rect x="500" y="60" width="340" height="200" rx="10" class="hl" style="fill:#fff"/><text x="670" y="96" class="t hc" text-anchor="middle" font-weight="700">在庫連携の Cell</text>
  <rect x="620" y="120" width="100" height="40" rx="6" class="h"/><text x="670" y="146" class="ts on" text-anchor="middle">責任者 B</text>
  <g opacity=".7"><path d="M496,190 H384" class="xl dash" marker-end="url(#arr-x)"/><text x="440" y="180" class="tx xc" text-anchor="middle">B が決め直す</text><use href="#i-no" x="428" y="198" width="24" height="24"/></g>
  <text x="440" y="296" class="ts" text-anchor="middle">一つか二つかは、第 2 章の判定で決める</text><text x="440" y="326" class="ts" text-anchor="middle">二つなら B は提案する。一つなら、その判断の責務の責任者が決める</text>
</svg>
```

二つの Cell なら、在庫連携の責任者が注文画面の判断を決め直すのは上書きで、提案にします。一つの Cell なら、その判断の責務を持つ責任者が決めます。

※ 例は説明のために作った。一つの Cell に責任者が複数いてよく（概念表「Cell に属する」）、判断責任者は責務ごとに置く（「1.」）。書き手の読み。

## 自分の権限は自分で広げない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="200" y="50" width="480" height="230" rx="10" class="hl" style="fill:#fff"/>
  <text x="440" y="86" class="t hc" text-anchor="middle" font-weight="700">Cell の権限の範囲</text>
  <rect x="260" y="120" width="360" height="100" rx="6" class="soft"/>
  <g opacity=".7"><rect x="240" y="110" width="400" height="120" rx="6" class="xl dash" style="fill:none"/></g>
  <use href="#i-no" x="640" y="100" width="24" height="24"/>
  <text x="440" y="176" class="ts" text-anchor="middle">自分で緩める・自分で広げる</text>
  <text x="440" y="336" class="t" text-anchor="middle" font-weight="700">片側の都合で、境界が動く</text>
</svg>
```

権限で切った境界は、片側の実行者が自分の権限を自分で広げれば動きます。Core は、実行者が自ら権限を広げることを禁じています。保ち方は第 10 章で見ます。

出典: EAA Core 版 6「4. 提案と変更」（実行者が自分を縛る規範を緩める変更を自己承認したり、自ら権限を拡大したりしてはならない）。

## 次章へ：切っても残る結合

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="80" width="260" height="160" rx="10" class="hl" style="fill:#fff"/><text x="190" y="166" class="t hc" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="560" y="80" width="260" height="160" rx="10" class="hl" style="fill:#fff"/><text x="690" y="166" class="t hc" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="350" y="130" width="180" height="60" rx="6" class="box"/><text x="440" y="166" class="ts" text-anchor="middle">渡すもの</text>
  <path d="M320,160 H350 M530,160 H560" class="ln"/>
  <text x="440" y="300" class="ts" text-anchor="middle">第 6 章</text>
</svg>
```

価値・ドメイン・権限で切っても、Cell のあいだで渡すものは残ります。第 6 章から、その結合を少なく、明示して持つやり方を見ます。
