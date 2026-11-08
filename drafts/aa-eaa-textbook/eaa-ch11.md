# 第 11 章　EAA の導入

群: 切り直しと加わり方
副題: 導入は、境界を越える行き来を記録で見ることから始める

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（77de7781）の第 12 章。着手: @ope-ultp1635 msg cfe0fe59（群五）。
この章が拠る本の問い: その分業を Agent の系でどう実現するか（structure-v5.md「イデア」第 1 文。逐語は roles-kaz 側）。
2d0ca30 までの第 11 章（Core の採用）と第 12 章（導入）の中身を、この章に持ってきた。旧本文は 2d0ca30 の eaa-ch11.md・eaa-ch12.md にある。
- 旧第 12 章から: 中の作り方を残す・導入の順序・例・流れている記録を見る・Profile を並べる・要らない制約だけ外す（adoption-guide.md 7 節、delivery-guide.md 4 節）、Operator の判断を規範に書き直す・ほかの Cell にかかる規範は提案で・機械化は権限の緩和ではない・自律の範囲を案にする・成熟（adoption-guide.md 6 節、role-model.md 2 節）、判断を減らしても成果と安全を保つ（delivery-guide.md 2 節）、最後のページ。
- 旧第 11 章から: 採用は Cell ごと・承認は規範の所有者・Core の所有者は承認しない・置けなければ採用しない・記録で成り立つ・記録の項目・物流の採用の記録の例・採用しない部分を示す・記録はその Cell が持つ・新しい版も採用して移る（core.md:112-123、79、93）。
落としたページ: 旧第 12 章 p.「Operator は、逐一承認しない」は p.「判断を規範に書き直していく」に、p.「ほかの Cell にかかる規範は、提案で」は p.「機械化は、権限を緩めることではない」に、p.「依存が減っていくことを成熟と見る」は p.「Operator は、自律の範囲を案にする」の注にまとめた。旧第 11 章 p.「理解ではなく、記録で成り立つ」は p.「記録に書くこと」に、p.「Core の新しい版も、採用して移る」は p.「記録は、その Cell が持つ」の注にまとめた。中身は落としていない。
直しを落とさずに持ってきた: ④（@ope-ultp1635 msg 02ab9595）— adoption-guide.md:296「Domain が自律できる境界を作る」を「Cell が自律する範囲を、規範と Contract の案にする」にした形のまま（core.md:62）。⑤（msg 281e5366）— 最後の絵の「各 Cell の中の作り方は、各 Cell が決める」を Core の側に置いた形のまま。⑥（msg 6fc17eeb）— リードの「独立した判断が要る所だけ Cell を分ける」は規範の形なので、適用例の導入順に置いた。旧第 11 章 ⑥ — 最後のページの「不採用を示した後、同じ Contract で両側が別の規定に従う状態の扱い」は Core に書かれていない（core.md:121 は示すことまで）。⑤ — それらは既知の不足に無いので「Core に書かれていない」。2 周目 — 小見出し「既知の不足にも挙がっていない」。
新しく足したこと: 章の入口を「記録で見る」にした（v5 の主張）。p.「境界を越える行き来を数える」「行き来には二つの直し方がある」「一つのあいだから試す」「最初に決めること」「足した手続きの分だけ、外すものを問う」。
- @reader 目次の通読（349c4d63）で読者（CTO）が「社外では使わず社内の 2 チームで試す」と決めた章。読み手が最初の一歩を踏めるかを見た: 何を見るか（いま残っている記録）・何を数えるか（境界を越える行き来）・どこから始めるか（一つのあいだ）・何を決めるか（Contract の所有者と採用の承認者）を、ページの順にした。
- 「記録で見るところから始める」と Adoption Guide「7.」の順（Core でつなぐ → 中を残す → Evidence を観測する）の関係: Adoption Guide は 1 段目が Core でつなぐことで、観測は 3 段目。この章の最初の一歩は、1 段目で「どこを」つなぐかを決めるための観測で、この本の読み。p.「導入の順序」の注に書いた。
- 「境界を越える行き来」の観測は Adoption Guide「10.」の Boundary Wait（Domain / Supplier 間待ち）に近いが、同じ指標ではない。注に「近い」とだけ書いた。
- p.「足した手続きの分だけ、外すものを問う」は adoption-guide.md「12.」の RED FLAG（既存会議・承認を一切減らせず、EAA Gate が上乗せされる）と結び（新しい統制を追加したなら、何を廃止できるかを必ず問う）。
- p.「最初に決めること」の Contract の所有者は core.md:98、採用の承認者は core.md:114。
Operator: 新しい構成では第 0〜11 章に Operator の字が無い（grep で確認）。旧第 12 章の注「判断の責任者を Operator と呼ぶのは第 3 章の注で見ました」は旧第 3 章を指していたので、p.「判断を規範に書き直していく」の注で Role Model「1.」の字（Core と Profiles が求める判断責任者を人間の Operator が担う）から説明した。
章の参照を新しい構成に直した: 導入の順序の右の列（旧 第 6・3・3・5 章 → 第 8・4・2・5 章）、Profile の数で Cell を決めない（旧 第 3 章 → 第 4 章 p.「数から決めない」）、自律の範囲（旧 第 4 章 → 第 5 章）、Contract の所有者の例（旧 第 8 章 → 第 6 章）、定例会議（旧 第 1 章 → 付録）、例の続き（旧 第 6〜11 章 → 第 6〜10 章）。
包含と同じ形の字: 採用の記録を全体の側が一つ持つ形は書いていない（core.md:123）。delivery-guide.md・role-model.md 5 節の Enterprise は使っていない（旧第 12 章の注と同じ）。
絵: Cell はどれもほかの Cell の枠の外に並べる（core.md:43）。
新しく引く外部の文献は無い。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff。判定の正本 @reviewer 2026-11-08-eaa-textbook-77a7fc9-ch00-04 / ch05-08 / ch09-12-furoku、@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）: 章の概要の絵の「1」「2」を「最初に」「次に」にした（p.「導入の順序」の 1 と二つあった）。p.「導入の順序」の注に、記録を見る一歩は 1 段目の前に足す読みで 1〜6 段目の順は変えない、を書いた。p.「一つのあいだから試す」の「一番多いあいだ」は 7 節に無いので書き手の読みと断った。p.「中の作り方は、そのまま残す」の「SAFe の ART」を「ART の中の SAFe」にし、第 11 章で ART を Cell とする扱いとつないだ（原文は「SAFe ART」と注に）。p.「最初に決めること」の注に、中の規範に所有者がいない Cell は採用の前に中の手続きで決める、を書いた（第 10 章で中の規範には所有者の要求が及ばない。@reader p.191〜194）。
v6 の 3 便目（着手: @ope-ultp1635 msg df6c27d8。構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v6.md 87be3308）で、ファイルを eaa-ch12.md から eaa-ch11.md に、章を第 12 章から第 11 章にした。本文・注・絵の「第 N 章」を v6 の番号にした（第 6 章以降は 1 ずつ減らした）。旧第 3〜5 章を指していた所: p.「導入の順序」の絵の「第 4 章」（Profile）→ 第 3 章、「第 2・5 章」（独立した判断が要る所だけ分ける）→ 第 2・3 章。p.「案件に要る Profile を並べる」の絵「（第 4 章）」→ 第 3 章。p.「Operator は、自律の範囲を案にする」の注「第 5 章からの読み」→ 第 4 章（上書きせず提案で変える。旧第 5 章のそのページは第 4 章へ移った）。この上の記録の章番号は、そのときの番号のまま。
-->

> 最初に、いまの分業でチームの境界を越えて行き来している記録を見る。中の作り方は残し、行き来の多い一つのあいだから Contract に書き、Core の採用は各 Cell の規範の所有者が承認して記録する。

```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <rect x="30" y="50" width="150" height="120" rx="10" class="box"/><text x="105" y="104" class="ts" text-anchor="middle" font-weight="700">在庫</text><text x="105" y="130" class="tx" text-anchor="middle">Scrum</text>
  <rect x="300" y="50" width="150" height="120" rx="10" class="box"/><text x="375" y="104" class="ts" text-anchor="middle" font-weight="700">物流</text><text x="375" y="130" class="tx" text-anchor="middle">委託先の工程</text>
  <g class="ln"><path d="M184,80 H296"/><path d="M296,105 H184"/><path d="M184,130 H296"/></g>
  <text x="240" y="200" class="ts hc" text-anchor="middle" font-weight="700">最初に　行き来を記録で見る</text>
  <path d="M470,110 H520" class="ln" marker-end="url(#arr)"/>
  <rect x="540" y="50" width="120" height="120" rx="10" class="box"/><text x="600" y="104" class="ts" text-anchor="middle" font-weight="700">在庫</text>
  <rect x="740" y="50" width="120" height="120" rx="10" class="box"/><text x="800" y="104" class="ts" text-anchor="middle" font-weight="700">物流</text>
  <rect x="664" y="86" width="72" height="48" rx="3" class="hl" style="fill:#fff"/><text x="700" y="115" class="tx hc" text-anchor="middle">Contract</text>
  <text x="700" y="200" class="ts" text-anchor="middle">次に　一つのあいだを書く</text>
  <text x="440" y="262" class="t" text-anchor="middle" font-weight="700">中は今のまま。替わるのは、あいだの線から</text>
</svg>
```

導入は、いまの分業のどこで文脈が境界を越えて行き来しているかを、残っている記録で見るところから始めます。中の作り方は変えず、つながり方から変えます。

## 境界を越える行き来を数える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="56" font-weight="700">いま残っている記録</text><text x="400" y="56" font-weight="700">境界を越えた行き来</text>
    <text x="60" y="110">チケットの差し戻し</text><text x="400" y="110">追跡番号が無いと物流へ差し戻した</text>
    <text x="60" y="170">ほかのチームへの問い合わせ</text><text x="400" y="170">欠品の理由を電話で聞いた</text>
    <text x="60" y="230">定例会議の議事録</text><text x="400" y="230">出荷指示の変更を、週 1 回承認した</text>
    <text x="60" y="290">PR のコメント</text><text x="400" y="290">相手の事情を聞くまで止めた</text>
  </g>
  <path d="M40,76 H840 M40,136 H840 M40,196 H840 M40,256 H840 M40,316 H840 M380,30 V316" class="lt"/>
  <text x="440" y="356" class="ts sub" text-anchor="middle">新しく測る仕組みは要らない。いま残っているものを見る</text>
</svg>
```

チケットの差し戻し、ほかのチームへの問い合わせ、定例会議の議事録、PR のコメントから、チームの境界を越えた行き来を拾います。どのあいだで多いかを数えます。

※ 書き手の読み。表の中身は説明のための仮定。Adoption Guide「10.」の Boundary Wait（境界の間の待ち）が近い観測です。

## 行き来には二つの直し方がある

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="380" height="250" rx="10" class="box"/>
  <text x="230" y="88" class="t" text-anchor="middle" font-weight="700">渡すものが書かれていない</text>
  <text x="230" y="140" class="ts" text-anchor="middle">欠品の理由を、毎回電話で聞く</text>
  <text x="230" y="200" class="ts hc" text-anchor="middle" font-weight="700">→ Contract に書く</text><text x="230" y="232" class="tx" text-anchor="middle">第 5 章</text>
  <rect x="460" y="50" width="380" height="250" rx="10" class="box"/>
  <text x="650" y="88" class="t" text-anchor="middle" font-weight="700">相手の文脈を毎回読む</text>
  <text x="650" y="140" class="ts" text-anchor="middle">書いても、Mission のたびに照会する</text>
  <text x="650" y="200" class="ts hc" text-anchor="middle" font-weight="700">→ 境界を引き直す</text><text x="650" y="232" class="tx" text-anchor="middle">第 2・10 章</text>
  <text x="440" y="346" class="ts sub" text-anchor="middle">まずは左。書けば止まる行き来から始める</text>
</svg>
```

行き来が多いあいだは、渡すものが書かれていないか、境界が文脈に合っていないかです。前者は Contract に書き、後者は境界を引き直します。

※ 書き手の読み。左は第 5 章の「暗黙の結合」、右は第 10 章の「行き来が多すぎれば、まとめる」。

## 一つのあいだから試す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="middle">
    <rect x="40" y="60" width="160" height="90" rx="10" class="box"/><text x="120" y="112">在庫</text>
    <rect x="360" y="60" width="160" height="90" rx="10" class="box"/><text x="440" y="112">物流</text>
    <rect x="680" y="60" width="160" height="90" rx="10" class="box"/><text x="760" y="112">請求</text>
    <rect x="360" y="220" width="160" height="90" rx="10" class="box"/><text x="440" y="272">店舗</text>
  </g>
  <path d="M204,105 H356" class="hl"/><text x="280" y="92" class="ts hc" text-anchor="middle" font-weight="700">ここから</text>
  <path d="M524,105 H676 M440,154 V216" class="lt dash"/><text x="600" y="92" class="tx" text-anchor="middle">いまのまま</text>
  <text x="440" y="350" class="ts sub" text-anchor="middle">行き来の一番多いあいだ一本を、Contract と Evidence に替える</text>
</svg>
```

最初は、行き来の一番多いあいだ一本だけを替えます。ほかのあいだは今のままにし、一本で確かめてから次へ広げます。

出典: EAA Adoption Guide「7.」（gradual substitution を「少しずつ置き換える」と書いた）。※ 一番多いあいだから選ぶのは書き手の読み。図の組は仮定。

## 中の作り方は、そのまま残す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="middle">
    <rect x="20" y="80" width="150" height="120" rx="10" class="box"/><text x="95" y="134">Scrum</text>
    <rect x="195" y="80" width="150" height="120" rx="10" class="box"/><text x="270" y="134">ART の中の SAFe</text>
    <rect x="370" y="80" width="150" height="120" rx="10" class="box"/><text x="445" y="134">計画型の工程</text>
    <rect x="545" y="80" width="150" height="120" rx="10" class="box"/><text x="620" y="134">委託先の工程</text>
    <rect x="720" y="80" width="150" height="120" rx="10" class="box"/><text x="795" y="134">パッケージ導入</text>
    <text x="95" y="170" class="tx">Cell の中</text><text x="270" y="170" class="tx">Cell の中</text><text x="445" y="170" class="tx">Cell の中</text><text x="620" y="170" class="tx">Cell の中</text><text x="795" y="170" class="tx">Cell の中</text>
  </g>
  <rect x="40" y="250" width="800" height="70" rx="10" class="soft"/>
  <text x="440" y="292" class="t" text-anchor="middle" font-weight="700">今の仕事をやめさせず、今の専門性を残る形に変える</text>
</svg>
```

Scrum、ART の中の SAFe の進め方、計画型の工程、委託先の工程、パッケージの導入は、どれもその Cell の中の作り方として残せます。

出典: EAA Adoption Guide「7.」（原文は「SAFe ART」）。Predictive を計画型と書いた。ART を一つの Cell とすれば、その中の進め方（第 10 章）。

## 導入の順序

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <rect x="60" y="20" width="560" height="40" rx="6" class="soft"/><text x="80" y="46">1　Core でつなぐ</text>
    <rect x="60" y="70" width="560" height="40" rx="6" class="soft"/><text x="80" y="96">2　中の作り方を残す</text>
    <rect x="60" y="120" width="560" height="40" rx="6" class="soft"/><text x="80" y="146">3　Evidence を観測する</text>
    <rect x="60" y="170" width="560" height="40" rx="6" class="soft"/><text x="80" y="196">4　責務を Profile に書き、割り当てる</text>
    <rect x="60" y="220" width="560" height="40" rx="6" class="soft"/><text x="80" y="246">5　独立した判断が要る所だけ Cell を分ける</text>
    <rect x="60" y="270" width="560" height="40" rx="6" class="soft"/><text x="80" y="296">6　要らないと確かめた制約だけ外す</text>
  </g>
  <path d="M650,40 V290" class="ln" marker-end="url(#arr)"/>
  <g class="tx"><text x="670" y="46">第 5 章</text><text x="670" y="146">第 7 章</text><text x="670" y="196">第 3 章</text><text x="670" y="246">第 2・3 章</text></g>
</svg>
```

Core でつなぎ、中の作り方を残し、Evidence を観測し、責務を Profile に書き、独立した判断が要る所だけを分け、要らない制約だけを外します。

出典: EAA Adoption Guide「7.」（適用例）。※ 記録を見る一歩は、どこをつなぐかを決めるために、この本が 1 段目の前に足す読み。1〜6 段目の順は変えない。

## 例：在庫と物流を Core でつなぐ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="260" height="210" rx="10" class="box"/><text x="170" y="86" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text><text x="170" y="114" class="tx" text-anchor="middle">中は Scrum（自社のチーム）のまま</text>
  <rect x="580" y="50" width="260" height="210" rx="10" class="box"/><text x="710" y="86" class="t" text-anchor="middle" font-weight="700">物流の Cell</text><text x="710" y="114" class="tx" text-anchor="middle">中は委託先の標準工程のまま</text>
  <rect x="330" y="100" width="220" height="70" rx="3" class="hl" style="fill:#fff"/><text x="440" y="132" class="ts hc" text-anchor="middle" font-weight="700">Contract　版 1</text><text x="440" y="156" class="tx" text-anchor="middle">所有者は物流の窓口の責任者</text>
  <path d="M300,135 H326 M554,135 H576" class="ln"/>
  <path d="M576,214 H304" class="ln" marker-end="url(#arr)"/><text x="440" y="204" class="ts" text-anchor="middle">出荷結果と、突き合わせの記録</text>
  <rect x="120" y="296" width="640" height="54" rx="6" class="soft"/><text x="440" y="329" class="ts" text-anchor="middle">定例会議で合わせていた中身を、Contract に書く</text>
</svg>
```

在庫は自社の Scrum、物流は委託先の標準工程のままです。変えるのは、あいだの取り決めを Contract に書き、Evidence で確かめることだけです。

※ 第 5〜9 章の在庫と物流の例の続きで、説明のための仮定です。定例会議で合わせる形は付録 p.「複数社のあいだも、集めるか任せるか」の左側です。

## 案件に要る Profile を並べる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="60" font-weight="700">種類</text><text x="260" y="60" font-weight="700">Profile</text><text x="480" y="60" font-weight="700">書くこと</text>
    <text x="60" y="120">Domain Profile</text><text x="260" y="120">在庫・物流</text><text x="480" y="120">責任の範囲・権限・保証</text>
    <text x="60" y="190">Standard Profile</text><text x="260" y="190">Supplier</text><text x="480" y="190">契約主体をまたぐ責任と受入</text>
    <text x="260" y="250">Platform など</text><text x="480" y="250">要るものだけ</text>
  </g>
  <path d="M40,80 H840 M40,150 H840 M40,280 H840" class="lt"/>
  <text x="440" y="330" class="ts sub" text-anchor="middle">並べた Profile ごとに Cell を作るのではない（第 3 章）</text>
</svg>
```

案件に要る Domain Profile と Standard Profile を並べ、責任の範囲・権限・保証を書きます。委託先が担うなら、Supplier も要ります。

出典: EAA Delivery Guide「4. Profile Selection」（適用例）、EAA Profiles「6.」。※ 在庫・物流の行は説明のための仮定です。

## 最初に決めること

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="56" font-weight="700">決めること</text><text x="440" y="56" font-weight="700">誰が決めるか</text>
    <text x="60" y="110">どのあいだから始めるか</text><text x="440" y="110">両側の判断の責任者</text>
    <text x="60" y="170">そのあいだの Contract の所有者</text><text x="440" y="170">結ぶ Cell が合意して 1 人</text>
    <text x="60" y="230">各 Cell で Core を採用するか</text><text x="440" y="230">各 Cell の規範の所有者</text>
    <text x="60" y="290">何で受け入れを確かめるか</text><text x="440" y="290">Contract に書く Evidence</text>
  </g>
  <path d="M40,76 H840 M40,136 H840 M40,196 H840 M40,256 H840 M40,316 H840 M420,30 V316" class="lt"/>
  <text x="440" y="356" class="ts sub" text-anchor="middle">所有者と承認者が決まらないあいだは、まだ始められない</text>
</svg>
```

始めるあいだを選んだら、その Contract の所有者、各 Cell で Core を採用するかの承認者、受け入れを確かめる Evidence を決めます。

出典: EAA Core 版 6「4.」「6.」。※ 1 行目は書き手の読み。中の規範に所有者がいない Cell は、採用の前に中の手続きで決める（第 9 章）。

## Core の採用は、Cell ごとに決める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="300" y="30" width="280" height="60" rx="3" class="hl" style="fill:#fff"/><text x="440" y="66" class="ts hc" text-anchor="middle" font-weight="700">EAA Core　版 6（公開済み）</text>
  <path d="M380,94 L240,130 M500,94 L640,130" class="lt"/>
  <rect x="40" y="130" width="340" height="190" rx="10" class="box"/><text x="210" y="166" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="210" y="216" class="ts" text-anchor="middle">在庫の規範の所有者が</text><text x="210" y="242" class="ts" text-anchor="middle">採用を承認する</text>
  <rect x="500" y="130" width="340" height="190" rx="10" class="box"/><text x="670" y="166" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <text x="670" y="216" class="ts" text-anchor="middle">物流の規範の所有者が</text><text x="670" y="242" class="ts" text-anchor="middle">採用を承認する</text>
  <text x="440" y="356" class="ts sub" text-anchor="middle">Core を公開しても、どの Cell も自動では従わない</text>
</svg>
```

Core を採用するかは Cell ごとに決め、その Cell の規範の正当な所有者が承認します。ふつうの変更を受け入れる権限だけでは決められません。

出典: EAA Core 版 6「6. 本書の採用」「3.」「4.」。公開と採用が別なのは、第 8 章の Contract の版と同じです。

## 承認者は、Core の所有者ではない人間

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="380" height="230" rx="10" class="box"/><text x="230" y="96" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="230" y="140" class="ts" text-anchor="middle">規範の所有者のうち、</text><text x="230" y="166" class="ts" text-anchor="middle">Core の所有者ではない人間</text>
  <use href="#i-ok" x="216" y="190" width="28" height="28"/><text x="230" y="250" class="ts okc" text-anchor="middle">この人が承認する</text>
  <rect x="460" y="60" width="380" height="230" rx="10" fill="url(#hatch)"/><text x="650" y="96" class="t" text-anchor="middle" font-weight="700">ある Cell</text>
  <text x="650" y="140" class="ts" text-anchor="middle">規範の所有者が、</text><text x="650" y="166" class="ts" text-anchor="middle">Core の所有者 1 人だけ</text>
  <use href="#i-no" x="636" y="190" width="28" height="28"/><text x="650" y="250" class="ts xc" text-anchor="middle">Core を採用しない</text>
</svg>
```

承認者は、その Cell の規範の所有者のうち、Core の所有者ではない人間です。この承認者を置けない Cell では、Core を採用しません。

出典: EAA Core 版 6「6. 本書の採用」。※ 右は同じ節の 2 行から導いた場合の一つ。書いた者が採用を兼ねない点で、第 9 章の職務分離と同じ向き。

## 記録に書くこと

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="60" font-weight="700">項目</text><text x="330" y="60" font-weight="700">書くこと</text>
    <text x="60" y="120">承認者と版</text><text x="330" y="120">承認者の名前と、採用する Core の版</text>
    <text x="60" y="190">引き受ける拘束</text><text x="330" y="190">少なくとも、その Cell が所有する共有文書と、</text><text x="330" y="214">その所有者</text>
    <text x="60" y="284">採用しない部分</text><text x="330" y="284">その部分と理由。無ければ、無いこと</text>
  </g>
  <path d="M40,80 H840 M40,150 H840 M40,244 H840 M40,314 H840 M310,30 V314" class="lt"/>
  <text x="440" y="352" class="ts sub" text-anchor="middle">理解しているかは検査しない。承認は、これを記録したときに成り立つ</text>
</svg>
```

承認は、承認者が承認者と版、引き受ける拘束、採用しない部分とその理由を自分の Cell に当てて記録したときに成り立ちます。無ければ無いと書きます。

出典: EAA Core 版 6「6. 本書の採用」（理解の有無そのものは検査しない）。

## 例：物流の採用の記録

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="800" height="300" rx="10" class="box"/>
  <text x="60" y="66" class="t" font-weight="700">物流の Cell　Core の採用の記録</text>
  <g class="ts">
    <text x="60" y="120" font-weight="700">承認者と版</text><text x="270" y="120">物流の規範の所有者（名前）・Core 版 6</text>
    <text x="60" y="184" font-weight="700">引き受ける拘束</text><text x="270" y="184">所有する共有文書：在庫と物流のあいだの Contract</text><text x="270" y="208">その所有者：物流の窓口の責任者</text>
    <text x="60" y="278" font-weight="700">採用しない部分</text><text x="270" y="278">無い</text>
  </g>
  <path d="M50,90 H830 M50,150 H830 M50,240 H830" class="lt"/>
</svg>
```

物流は、在庫との Contract を所有しているので、それを拘束に書きます。採用しない部分は無いので、無いと書きます。

※ 記録の中身は説明のための仮定です。Contract の所有者が物流の窓口の責任者なのは、第 5 章の例のままです。

## 採用しない部分は、相手に示す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="340" height="250" rx="10" class="box"/><text x="210" y="76" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <g class="ts"><text x="70" y="124" font-weight="700">採用しない部分</text><text x="70" y="156">Contract の所有者が離れたときの規定</text><text x="70" y="200" font-weight="700">理由</text><text x="70" y="232">所有者の交代を、取引先との</text><text x="70" y="256">契約書で決めているため</text></g>
  <path d="M380,165 H536" class="ln" marker-end="url(#arr)"/><text x="458" y="152" class="ts" text-anchor="middle">示す</text>
  <rect x="540" y="40" width="300" height="250" rx="10" class="box"/><text x="690" y="76" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <text x="690" y="160" class="ts" text-anchor="middle">Contract を共有する相手</text>
</svg>
```

採用しない部分のうち、共有する文書にかかるものは、その文書を共有する Cell に示します。在庫が Contract にかかる部分を外すなら、物流に示します。

出典: EAA Core 版 6「6. 本書の採用」。※ 外す部分と理由は説明のための仮定。所有者が離れたときの規定は第 9 章、Contract と契約書の関係は第 5 章の最後のページ。

## 記録は、その Cell が持つ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="380" height="240" rx="10" class="box"/><text x="230" y="96" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <rect x="100" y="130" width="260" height="70" rx="3" class="hl" style="fill:#fff"/><text x="230" y="172" class="ts hc" text-anchor="middle" font-weight="700">在庫の採用の記録</text>
  <text x="230" y="250" class="ts" text-anchor="middle">在庫が管理する</text>
  <rect x="540" y="60" width="300" height="240" rx="10" class="soft"/><text x="690" y="100" class="t" text-anchor="middle" font-weight="700">Core の所有者</text>
  <path d="M536,165 H364" class="xl dash"/><use href="#i-no" x="436" y="137" width="28" height="28"/><text x="450" y="200" class="ts xc" text-anchor="middle">書き換えない</text>
</svg>
```

採用の記録は、採用した Cell が管理します。Core の所有者は、その記録を書き換えません。

出典: EAA Core 版 6「6.」。※ Core の新しい版が出ても自動では移らない（「3.」）。移るときも同じ記録をするのは、記録に版を書くことからの読み。

## 外すのは、要らないと確かめた制約だけ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="60" font-weight="700">今の手順にある制約</text><text x="500" y="60" font-weight="700">観測した結果</text>
    <text x="60" y="120">週 1 回の定例で出荷指示の変更を承認</text><text x="500" y="120">Contract と Evidence で足りた</text><use href="#i-ok" x="790" y="102" width="24" height="24"/>
    <text x="60" y="180">委託先の工程の中の出荷前の検品</text><text x="500" y="180">要らないと確かめていない</text><text x="790" y="180" class="tx">残す</text>
  </g>
  <path d="M40,80 H840 M40,140 H840 M40,200 H840" class="lt"/>
  <rect x="40" y="240" width="800" height="70" rx="10" class="soft"/>
  <text x="440" y="282" class="t" text-anchor="middle" font-weight="700">一度に置き換えず、少しずつ置き換える</text>
</svg>
```

今の手順にある制約は、要らないと確かめられたものだけを外します。置き換えは一度にせず、少しずつ進めます。

出典: EAA Adoption Guide「7.」（適用例）。※ 表の中身は説明のための仮定です。

## 足した手続きの分だけ、外すものを問う

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="380" height="250" rx="10" fill="url(#hatch)"/>
  <text x="230" y="90" class="t" text-anchor="middle" font-weight="700">避ける形</text>
  <g class="ts" text-anchor="middle"><text x="230" y="150">定例会議と承認はそのまま</text><text x="230" y="184">＋ Contract と採用の記録</text></g>
  <use href="#i-no" x="216" y="218" width="28" height="28"/>
  <rect x="460" y="50" width="380" height="250" rx="10" class="box"/>
  <text x="650" y="90" class="t" text-anchor="middle" font-weight="700">問うこと</text>
  <g class="ts" text-anchor="middle"><text x="650" y="150">Contract に書いた分、</text><text x="650" y="184">どの会議・承認を外せるか</text></g>
  <use href="#i-ok" x="636" y="218" width="28" height="28"/>
</svg>
```

前の手続きを一つも減らせないまま、新しい手続きを上乗せする形は避けます。新しく足したなら、どの会議・承認を外せるかを毎回問います。

出典: EAA Adoption Guide「12. PoC の Adoption Exit Criteria」（適用例）。

## 判断を規範に書き直していく

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="middle">
    <rect x="20" y="40" width="130" height="80" rx="6" class="h"/><text x="85" y="76" class="on">Operator の</text><text x="85" y="100" class="on">判断</text>
    <rect x="170" y="40" width="130" height="80" rx="6" class="soft"/><text x="235" y="76">記録した</text><text x="235" y="100">判断</text>
    <rect x="320" y="40" width="250" height="80" rx="6" class="soft"/><text x="445" y="76">提案して、正当な承認と</text><text x="445" y="100">対象の Cell の受入を得る</text>
    <rect x="590" y="40" width="270" height="80" rx="3" class="hl" style="fill:#fff"/><text x="725" y="76" class="hc">規則・Constitution・</text><text x="725" y="100" class="hc">Contract</text>
    <rect x="320" y="200" width="250" height="80" rx="6" class="soft"/><text x="445" y="246">機械で読める制御</text>
    <rect x="610" y="200" width="250" height="80" rx="22" class="a"/><text x="735" y="246" class="on">次からは任せられる</text>
  </g>
  <path d="M150,80 H166 M300,80 H316 M570,80 H586" class="ln"/>
  <path d="M725,124 V160 H445 V196" class="ln" marker-end="url(#arr)"/><path d="M570,240 H606" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="336" class="t" text-anchor="middle" font-weight="700">同じ判断を、毎回 Operator がしなくてよくなる</text>
</svg>
```

Operator は、ふつうの成果物を一つずつ承認する役ではありません。繰り返す判断を記録し、承認と受入を得て規則や Contract にし、機械で読める形にします。

出典: EAA Adoption Guide「6.」、Role Model「1.」「2.」（適用例）。Operator は、Core が求める判断責任者を担う人間の呼び名。

## 機械化は、権限を緩めることではない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="360" height="220" rx="10" class="box"/>
  <text x="220" y="100" class="t" text-anchor="middle" font-weight="700">繰り返す判断の機械化</text>
  <text x="220" y="160" class="ts" text-anchor="middle">承認と採用を経た規範を、</text><text x="220" y="184" class="ts" text-anchor="middle">機械が読める形にする</text>
  <use href="#i-ok" x="206" y="214" width="28" height="28"/>
  <rect x="480" y="60" width="360" height="220" rx="10" fill="url(#hatch)"/>
  <text x="660" y="100" class="t" text-anchor="middle" font-weight="700">Agent による自己権限の緩和</text>
  <text x="660" y="160" class="ts" text-anchor="middle">自分を縛る規範を、</text><text x="660" y="184" class="ts" text-anchor="middle">自分で承認して緩める</text>
  <use href="#i-no" x="646" y="214" width="28" height="28"/>
  <text x="440" y="330" class="ts sub" text-anchor="middle">ほかの Cell にかかる規範は、提案して所有者の承認と相手の採用を得る</text>
</svg>
```

繰り返す判断の機械化は、Agent が自分の権限を緩めることとは別です。ほかの Cell にかかる規範なら、提案して所有者の承認と相手の採用を得ています。

出典: EAA Adoption Guide「6.」（適用例）。承認と自分で緩めないことは第 9 章、採用は第 8 章で見ました。

## Operator は、自律の範囲を案にする

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="60" font-weight="700">Operator の仕事</text>
    <text x="60" y="120">統治の曖昧さを、Authority・Constraint・例外に訳す</text>
    <text x="60" y="180">例外を分類する</text>
    <text x="60" y="240">繰り返す判断を規則にする</text>
    <text x="60" y="300">Cell が自律する範囲を、規範と Contract の案にする</text>
  </g>
  <path d="M40,80 H840 M40,140 H840 M40,200 H840 M40,260 H840 M40,320 H840" class="lt"/>
  <text x="820" y="60" class="ts sub" text-anchor="end">判断の件数の多さではない</text>
  <text x="440" y="356" class="ts hc" text-anchor="middle">範囲が決まるのは、案が承認され、採用されたとき</text>
</svg>
```

Operator の価値は判断の件数ではなく、曖昧な所を権限・制約・例外に訳し、自律する範囲を案にすることです。依存が減っていくことを成熟と見ます。

出典: EAA Adoption Guide「6.」（適用例。原文は「Domain が自律できる境界を作る」）。範囲を決めるのが承認と採用だとするのは、第 4 章からの読み。

## 判断を減らしても、成果と安全は保つ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="360" height="210" rx="10" class="box"/><text x="220" y="100" class="t" text-anchor="middle" font-weight="700">人の判断の件数</text>
  <text x="220" y="180" class="tl" text-anchor="middle">↓</text><text x="220" y="230" class="ts" text-anchor="middle">減らしていく</text>
  <rect x="480" y="60" width="360" height="210" rx="10" class="box"/><text x="660" y="100" class="t" text-anchor="middle" font-weight="700">成果と安全</text>
  <text x="660" y="180" class="tl" text-anchor="middle">＝</text><text x="660" y="230" class="ts" text-anchor="middle">保てているか</text>
  <text x="440" y="320" class="t" text-anchor="middle" font-weight="700">両方を、一緒に観測する</text>
</svg>
```

人の判断を減らすことと、成果と安全を保てているかを、一緒に観測します。人が中心の作り方の Cell に、同じ運営を求めるものではありません。

出典: EAA Delivery Guide「2. 判断と役割の配置」（適用例）。

## Core はここまでしか決めていない

```svg
<svg viewBox="0 0 880 420" width="880" height="420">
  <rect x="40" y="30" width="380" height="330" rx="10" class="soft"/>
  <text x="60" y="64" class="t" font-weight="700">Core が決めていること</text>
  <g class="ts"><use href="#i-ok" x="60" y="88" width="22" height="22"/><text x="92" y="105">Core の採用の承認者と、置けない場合</text>
  <use href="#i-ok" x="60" y="128" width="22" height="22"/><text x="92" y="145">記録に書く項目と、記録を持つ Cell</text>
  <use href="#i-ok" x="60" y="168" width="22" height="22"/><text x="92" y="185">Contract の所有者の決め方</text>
  <use href="#i-ok" x="60" y="208" width="22" height="22"/><text x="92" y="225">各 Cell の中の作り方は、各 Cell が決める</text></g>
  <rect x="460" y="30" width="380" height="330" rx="10" fill="url(#hatch)"/>
  <text x="480" y="64" class="t" font-weight="700">決めていないこと</text>
  <g class="ts"><text x="480" y="102" class="ts" font-weight="700">Core に書かれていない</text><text x="480" y="126" class="tx">既知の不足にも挙がっていない</text><text x="480" y="160">採用の記録の書式と置き場所</text><text x="480" y="188">採用をやめるときの手続き</text><text x="480" y="216">Core の版が違う Cell どうしの扱い</text><text x="480" y="244">不採用を示した後、同じ Contract で</text><text x="480" y="268">両側が別の規定に従う状態の扱い</text>
  <text x="480" y="308" class="ts" font-weight="700">自分の案件で決めること（適用例）</text><text x="480" y="336">導入の順序と速さ・Operator の置き方</text></g>
  <text x="440" y="398" class="ts sub" text-anchor="middle">この章の導入の手順は、どれも適用例か書き手の読みで、Core の規範ではない</text>
</svg>
```

採用の承認と記録は Core が決めています。記録の書式、採用をやめる手続き、版が違う Cell どうしの扱いは書かれていません。導入の手順は自分の案件で決めます。

出典: EAA Core 版 6「6.」「4.」と冒頭の観測欄。Adoption Guide・Role Model・Delivery Guide は冒頭で「適用例（非規範）」とする。
