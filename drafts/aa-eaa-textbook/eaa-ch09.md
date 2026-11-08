# 第 9 章　改訂の承認と権限

群: 分業を続けながら境界を保つ
副題: 権限で切った境界は、一人の都合では動かない

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（0f0a562c）の第 10 章。着手: @ope-ultp1635 msg adc84781（群四）。
この章が拠る本の考え: ドメイン・価値・権限で分けると疎結合になる（structure-v5.md「イデア」第 2 文。逐語は roles-kaz 側）。
2d0ca30 までの第 10 章（共有文書の改訂は人間の所有者が承認し、提起した者は承認しない）の中身を、この章に持ってきた: 共有する文書は所有者・観測・準拠先を持つ（core.md:94）、例の 3 項目（core.md:7-12 の Core 自身の表から語の意味を取った）、所有者は人間（core.md:94）、提起した者は承認しない（core.md:94・45、profiles.md 4 節）、職務分離（core.md:45・107）、自分を縛る規範を緩めない・自分の権限を広げない（core.md:96・70）、編集権の行（profiles.md:73）、中の改訂の手続き（core.md:95）、所有者本人が提起したら（core.md:90・94・98）、最後のページ。旧本文は 2d0ca30 の eaa-ch10.md にある。
群三から回したもの（第 6 章の注「持ってこなかったもの」）: 結んでいない者は所有者にならない・所有者が離れたら改訂は止まる・後任も結ぶ Cell の合意で決める・所有者がいない間も止めることはできる（core.md:98-102）、最後のページの「後任の合意が成り立たないときは合意不成立」（core.md:101・11）。旧本文は 2d0ca30 の eaa-ch08.md の p.「結んでいない者は、所有者にならない」〜「所有者がいない間も、止めることはできる」と最後のページ。発注側の立ち位置は EAA 紹介 3 の読みで、Core は発注側について書いていない（注のまま）。所有者は結ぶ Cell の中の 1 人（core.md:98 の前半）は第 6 章に置いたので、ここでは第 6 章を指した。
直しを落とさずに持ってきた（@ope-ultp1635 msg adc84781 が挙げた、@reviewer の指摘と 2d0ca30 の直し）:
- ⑥（msg 6fc17eeb）: 章題と最後のページから「所有者が承認する」（core.md:90）を落とさない。v5 の章題は「人間の所有者が承認し」を含む。最後のページの左の 1 行目と文に置いた。p.「改訂は、人間の所有者が承認する」を足し、core.md:90 を本文の字にした。
- ⑤（msg 281e5366）: 所有者本人が提起した改訂は、Core の字の範囲では承認できる者がいない。「未決」ではなく core.md:90・94・98 からの帰結として、最後のページの左の矢印の行と文に書いた。例のページの文に「改訂を判断するのは所有者」（core.md:90）を置き、所有者以外を承認者に充てる読みを塞いだ。
- ④（msg 02ab9595）: profiles.md:73 を共有文書全般に広げず、Profile の正本に戻した形のまま（p.「承認は、Profile の正本の編集権とは別」）。
- ⑥: p.「中の改訂の手続きは、各 Cell が決める」の絵の結びと注が逆だったのを直した形のまま。core.md:94-95 で中に及ばないのは「所有者・観測・準拠先を持つ」（同アーキテクチャへの準拠）の要求で、core.md:96 は文書を限っていない。
- ③（msg 6ec153b2）と 2 周目（msg 8fbac4e5）: 準拠先は「自己改訂規範アーキテクチャ v1・最小構成」（core.md:94）。例のページの絵の準拠先の行に、2d0ca30 の第 8 章で足した説明「改訂の承認と版を定めた文書。Core も従う」を移した（2 周目の通読で 6 体中 5 体が止まった語）。中身は self-revising-norm-architecture-minimal.md の「1. 規範文書が持つもの」「2. 改訂」、Core 自身の準拠先は core.md:12。置き場所は書かない（第 1 章の置き場所と同じ理由）。注に「準拠先は仮定ではなく、Core が決めた文書」。
- 最後のページの右の小見出し「既知の不足にも挙がっていない」（2 周目、理由は第 6 章の注と同じ）。権限が足りないときの戻し先は core.md:70 の字「正当な判断主体」（第 2・4 章と同じ）。
ページの見出しを肯定の形にした: 2d0ca30 の「提起した者は、承認しない」「自分を縛る規範を、自分で緩めない」「自分の権限を、自分で広げない」「編集できても、承認ではない」「結んでいない者は、所有者にならない」「所有者が離れたら、改訂は止まる」を、それぞれ「提起した者と承認する者は、別の人」「規範を緩めるかは、正当な所有者が決める」「権限が足りないときは、示して調整に戻す」「承認は、Profile の正本の編集権とは別」「所有者になれるのは、結ぶ Cell に属する人」「所有者が離れたら、改訂は後任を待つ」にした。Core の字は禁止形のまま本文と出典に残した。最後のページの見出し「Core はここまでしか決めていない」は全章で同じ見出しなので変えていない。
p.「切れ目を片側で動かすと、相手の文脈が戻る」と p.「承認で切れ目を保つのは、この本の読み」は書き手の読み。Core は疎結合・切れ目の語を使っていない（core.md を grep で確認）。第 5 章 p.「自分の権限は自分で広げない」が「切れ目の保ち方は、第 10 章で見ます」と指した先。
publications の #135・#136・#137 と APPROVALS 行 12〜15 は、2d0ca30 の判断のまま実例に使っていない（公開の記録どうしが食い違っている・読み手の案件から遠い）。
包含と同じ形の字: profiles.md 4 節の 51 行・62 行は使っていない。使ったのは 73 行だけ。
例は第 6〜9 章の在庫と物流を続けた。締めの時刻の改訂は第 9 章 p.「逆向きの変更も、同じ順序で」の続き。
絵: Cell はどれもほかの Cell の枠の外に並べる（core.md:43）。人は橙の四角、Agent は青の丸い札（第 0・2 章と同じ）。
新しく引く外部の文献は無い。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff。判定の正本 @reviewer 2026-11-08-eaa-textbook-77a7fc9-ch00-04 / ch05-08 / ch09-12-furoku、@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）: 章題を変えた。「承認で切れ目を保つ」は閉じていなかった — 所有者は片側の Cell にいる（core.md:98）ので、片側の中だけで承認まで進む。片側で変わらないのは採用（core.md:80・91、第 9 章と付録）。承認の決まりは人の単位で、一人の都合の版を相手に届く前に止める。章題・章の概要・p.「一人の都合の改訂は、相手に届く前に止める」（旧 p.「切れ目を片側で動かすと、相手の文脈が戻る」）をこの形に。この本の考えの出どころには確かめていない（Core の字で決まる話。第 9 章の題を変えたときと同じ）。structure-v5.md の第 10 章の行は直していない。p.「承認で切れ目を保つのは、この本の読み」を外した。最後のページの右に「所有者本人が出したい改訂を、どう進めるか」を足した（@reader p.161〜163）。
v6 の 3 便目（着手: @ope-ultp1635 msg df6c27d8。構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v6.md 87be3308）で、ファイルを eaa-ch10.md から eaa-ch09.md に、章を第 10 章から第 9 章にした。本文・注・絵の「第 N 章」を v6 の番号にした（第 6 章以降は 1 ずつ減らした）。旧第 3〜5 章を指していた所: p.「権限が足りないときは、示して調整に戻す」の本文「第 5 章で見た、権限で切った境界を保つ規定」を「権限で切った境界（第 2 章）を保つ規定」に（旧第 5 章 p.「自分の権限は自分で広げない」は v6 で落としたので、規定を先に見た章は無い。権限で切ることは第 2 章 p.「例：権限で切る」）。この上の記録の章番号は、そのときの番号のまま。
-->

> 共有する文書の改訂は、その文書の人間の所有者が承認し、改訂を提起した者はその改訂を承認しない。実行者は、自分を縛る規範を緩める変更を自分で承認せず、権限が足りなければ示して調整に戻す。所有者が離れたら、後任が決まるまで改訂は承認されない。

```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <rect x="40" y="40" width="240" height="170" rx="10" class="box"/><text x="160" y="76" class="t" text-anchor="middle" font-weight="700">提起する者</text>
  <use href="#i-no" x="146" y="110" width="28" height="28"/><text x="160" y="170" class="ts xc" text-anchor="middle">自分では承認しない</text>
  <rect x="330" y="70" width="220" height="80" rx="3" class="hl" style="fill:#fff"/><text x="440" y="104" class="ts hc" text-anchor="middle" font-weight="700">共有する文書</text><text x="440" y="130" class="tx" text-anchor="middle">改訂の案</text>
  <path d="M280,110 H326" class="ln" marker-end="url(#arr)"/><path d="M554,110 H596" class="ln" marker-end="url(#arr)"/>
  <rect x="600" y="40" width="240" height="170" rx="10" class="box"/><text x="720" y="76" class="t" text-anchor="middle" font-weight="700">承認する者</text>
  <rect x="660" y="94" width="120" height="36" rx="6" class="h"/><text x="720" y="118" class="ts on" text-anchor="middle">所有者・人間</text>
  <use href="#i-ok" x="706" y="144" width="28" height="28"/><text x="720" y="196" class="ts okc" text-anchor="middle">承認する</text>
  <text x="440" y="264" class="t" text-anchor="middle" font-weight="700">同じ改訂を、出す者と認める者が別の人</text>
</svg>
```

権限で切った境界は、一人の都合で動かせると保てません。共有する文書の改訂は、提起した者とは別の人間の所有者が承認します。実行者は自分の権限を自分で広げません。片側の Cell の都合で版が変わらないのは、各 Cell の採用によります（第 8 章）。

## 一人の都合の改訂は、相手に届く前に止める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="260" height="200" rx="10" class="box"/><text x="170" y="96" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <text x="170" y="150" class="ts" text-anchor="middle">改訂を提起した者が、</text><text x="170" y="176" class="ts" text-anchor="middle">自分で承認する</text>
  <rect x="330" y="110" width="220" height="80" rx="3" class="xl" style="fill:#fff"/><text x="440" y="146" class="ts xc" text-anchor="middle" font-weight="700">Contract</text><text x="440" y="172" class="tx" text-anchor="middle">一人の都合の版</text>
  <path d="M300,150 H326 M554,150 H576" class="ln"/>
  <rect x="580" y="60" width="260" height="200" rx="10" class="box"/><text x="710" y="96" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="710" y="150" class="ts" text-anchor="middle">採用を決めるたびに、</text><text x="710" y="176" class="ts" text-anchor="middle">一人の都合を読み解く</text>
  <use href="#i-no" x="696" y="200" width="28" height="28"/>
  <text x="440" y="320" class="t" text-anchor="middle" font-weight="700">承認を提起と別の人にすると、一人の都合の版は届く前に止まる</text>
</svg>
```

提起した者が自分で承認できると、一人の都合の版が相手に届き、相手は採用のたびにそれを読み解きます。承認を別の人にすると、その版は届く前に止まります。

※ 書き手の読み。承認は人の単位の決まりで、片側の Cell の中で承認まで進む。相手の側で変わらないのは採用による（第 8 章）。

## 共有する文書は、所有者を持つ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="middle">
    <rect x="30" y="50" width="150" height="70" rx="3" class="hl" style="fill:#fff"/><text x="105" y="91">Contract</text>
    <rect x="200" y="50" width="150" height="70" rx="3" class="hl" style="fill:#fff"/><text x="275" y="80">共有する</text><text x="275" y="104">Profile</text>
    <rect x="370" y="50" width="150" height="70" rx="3" class="hl" style="fill:#fff"/><text x="445" y="80">共有する</text><text x="445" y="104">Ontology</text>
    <rect x="540" y="50" width="150" height="70" rx="3" class="hl" style="fill:#fff"/><text x="615" y="80">Evidence の</text><text x="615" y="104">様式</text>
    <rect x="710" y="50" width="150" height="70" rx="3" class="hl" style="fill:#fff"/><text x="785" y="91">EAA Core</text>
  </g>
  <path d="M105,124 V168 M275,124 V168 M445,124 V168 M615,124 V168 M785,124 V168 M105,168 H785 M445,168 V196" class="lt"/>
  <rect x="200" y="200" width="490" height="130" rx="10" class="soft"/>
  <text x="445" y="236" class="t" text-anchor="middle" font-weight="700">どれも、次の 3 項目を持つ</text>
  <g class="ts" text-anchor="middle"><text x="290" y="290">所有者</text><text x="445" y="290">観測</text><text x="600" y="290">準拠先</text></g>
</svg>
```

Contract、共有する Profile・Ontology、Evidence の様式と Core は、どれも所有者・観測・準拠先を持ちます。

出典: EAA Core 版 6「4. 提案と変更」。

## 例：在庫と物流の Contract の 3 項目

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="60" y="50" class="ts hc" font-weight="700">在庫と物流のあいだの Contract　版 1</text>
  <g class="ts">
    <text x="60" y="110" font-weight="700">所有者</text><text x="220" y="110">物流の窓口の責任者</text><text x="560" y="110" class="tx">変更を承認する人</text>
    <text x="60" y="180" font-weight="700">観測</text><text x="220" y="180">受け入れられなかった出荷結果と、</text><text x="220" y="204">その理由</text><text x="560" y="180" class="tx">見直しの根拠に残す記録</text>
    <text x="60" y="274" font-weight="700">準拠先</text><text x="220" y="262">自己改訂規範アーキテクチャ</text><text x="220" y="286">v1・最小構成</text><text x="560" y="262" class="tx">改訂の承認と版を定めた文書。</text><text x="560" y="286" class="tx">Core も従う</text>
  </g>
  <path d="M40,70 H840 M40,140 H840 M40,234 H840 M40,304 H840" class="lt"/>
</svg>
```

在庫と物流の Contract なら、所有者は物流の窓口の責任者、観測は受け入れられなかった出荷結果、準拠先は自己改訂規範アーキテクチャ v1・最小構成です。

※ 所有者・観測の中身は説明のための仮定（第 5 章と同じ）。準拠先は仮定ではなく、Core「4. 提案と変更」が決めた文書。項目の意味は Core 冒頭の表から取った。

## 改訂は、人間の所有者が承認する

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="340" height="230" rx="10" class="box"/><text x="210" y="96" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="80" y="130" width="120" height="44" rx="22" class="a"/><text x="140" y="158" class="ts on" text-anchor="middle">Agent</text>
  <text x="140" y="206" class="ts" text-anchor="middle">改訂の文面を書く</text>
  <rect x="230" y="130" width="120" height="44" rx="6" class="h"/><text x="290" y="158" class="ts on" text-anchor="middle">所有者</text>
  <text x="290" y="206" class="ts" text-anchor="middle">人間</text>
  <path d="M380,170 H496" class="ln" marker-end="url(#arr)"/>
  <rect x="500" y="110" width="340" height="120" rx="3" class="hl" style="fill:#fff"/><text x="670" y="150" class="ts hc" text-anchor="middle" font-weight="700">改訂を判断するのは、所有者</text>
  <text x="670" y="190" class="ts" text-anchor="middle">所有者は人間。Agent は所有者にならない</text>
</svg>
```

規範の改訂を判断するのは、その規範の正当な所有者です。共有する文書の所有者は人間なので、改訂の文面を Agent が書いても、承認するのは人間の所有者です。

出典: EAA Core 版 6「4. 提案と変更」の表（規範の改訂の判断主体）と本文。

## 提起した者と承認する者は、別の人

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="300" height="220" rx="10" class="box"/><text x="190" y="96" class="t" text-anchor="middle" font-weight="700">改訂を提起した者</text>
  <use href="#i-no" x="176" y="140" width="28" height="28"/><text x="190" y="200" class="ts xc" text-anchor="middle">その改訂は承認しない</text>
  <text x="190" y="236" class="tx" text-anchor="middle">提供する側に属していても</text>
  <path d="M340,170 H536" class="ln" marker-end="url(#arr)"/><use href="#i-pr" x="425" y="128" width="30" height="38"/>
  <rect x="540" y="60" width="300" height="220" rx="10" class="box"/><text x="690" y="96" class="t" text-anchor="middle" font-weight="700">提起していない所有者</text>
  <use href="#i-ok" x="676" y="140" width="28" height="28"/><text x="690" y="200" class="ts okc" text-anchor="middle">承認する</text>
</svg>
```

改訂を提起した者は、その改訂を承認しません。文書を提供する側に属していても同じです。承認するのは、提起していない所有者です。

出典: EAA Core 版 6「4. 提案と変更」、EAA Profiles「4.」の「改訂元と採用先を分ける」。第 8 章の希望時間帯の例は、この形でした。

## 職務分離の一つ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="60" font-weight="700">判断</text><text x="330" y="60" font-weight="700">行う者</text><text x="600" y="60" font-weight="700">承認・検証する者</text>
    <text x="60" y="130">共有する文書の改訂</text><text x="330" y="130">提起する者</text><text x="600" y="130">提起していない所有者</text>
    <text x="60" y="200">Mission の完了</text><text x="330" y="200">作業する者</text><text x="600" y="200">確かめる者</text>
  </g>
  <path d="M40,80 H840 M40,160 H840 M40,230 H840 M560,30 V230" class="lt"/>
  <rect x="40" y="270" width="800" height="70" rx="10" class="soft"/>
  <text x="440" y="312" class="t" text-anchor="middle" font-weight="700">同じ判断を、別の者に分ける</text>
</svg>
```

同じ判断を、行う者と、承認または検証する者に分けることを職務分離と呼びます。提起した者が承認しないのは、その一つです。

出典: EAA Core 版 6 の概念表「職務分離」と「5. 成果と記録」。Mission の完了の分離は第 6 章で見ました。

## 所有者は、結ぶ Cell に属する人

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="240" height="160" rx="10" class="box"/><text x="160" y="126" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <rect x="600" y="40" width="240" height="160" rx="10" class="box"/><text x="720" y="126" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="330" y="92" width="220" height="56" rx="3" class="hl" style="fill:#fff"/><text x="440" y="126" class="ts hc" text-anchor="middle">Contract</text>
  <path d="M280,120 H326 M554,120 H596" class="ln"/>
  <rect x="330" y="250" width="220" height="70" rx="10" class="box"/><text x="440" y="282" class="ts" text-anchor="middle">発注側の部門</text><text x="440" y="306" class="tx" text-anchor="middle">この Contract を結んでいない</text>
  <path d="M440,246 V154" class="xl dash" marker-end="url(#arr-x)"/><use href="#i-no" x="452" y="190" width="24" height="24"/>
  <text x="680" y="290" class="ts" text-anchor="middle">持つなら、結ぶ Cell の</text><text x="680" y="316" class="ts" text-anchor="middle">一つとして立つ</text>
</svg>
```

Contract の所有者になれるのは、その Contract を結ぶ Cell に属する人だけです。結んでいない部門が、外からあいだの取り決めを持つことはありません。

出典: EAA Core 版 6「4. 提案と変更」。所有者は結ぶ Cell の中の 1 人（第 5 章）。※ 発注側の立ち位置は EAA 紹介 3 の読みで、Core は発注側を書いていない。

## 所有者が離れたら、改訂は後任を待つ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M60,250 H820" class="ln" marker-end="url(#arr)"/><text x="830" y="276" class="tx" text-anchor="end">時間</text>
  <rect x="60" y="150" width="260" height="60" rx="6" class="h"/><text x="190" y="186" class="ts on" text-anchor="middle">所有者がいる</text>
  <path d="M330,120 V260" class="xl"/><text x="330" y="110" class="ts xc" text-anchor="middle">結ぶ Cell のどれにも属さなくなった</text>
  <rect x="340" y="150" width="260" height="60" rx="6" fill="url(#hatch)"/><text x="470" y="186" class="ts" text-anchor="middle">改訂は承認されない</text>
  <rect x="610" y="150" width="210" height="60" rx="6" class="h"/><text x="715" y="186" class="ts on" text-anchor="middle">後任が決まった</text>
  <rect x="60" y="294" width="760" height="56" rx="10" class="soft"/><text x="440" y="328" class="ts" text-anchor="middle">成立している版と、承認済みの版の採用は、これで変わらない</text>
</svg>
```

所有者が、結ぶ Cell のどれにも属さなくなったら、その人は以後の改訂を承認しません。後任が決まるまで改訂は承認されませんが、成り立っている版は効き続けます。

出典: EAA Core 版 6「4. 提案と変更」。

## 後任も、結ぶ Cell の合意で決める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="800" height="80" rx="10" class="soft"/><use href="#i-ok" x="60" y="56" width="26" height="26"/>
  <text x="100" y="76" class="t" font-weight="700">作るときと同じく、Contract を結ぶ Cell が合意して決める</text>
  <text x="60" y="150" class="ts" font-weight="700">次のどれも、それだけでは後任の根拠にならない</text>
  <g class="ts">
    <use href="#i-no" x="60" y="172" width="22" height="22"/><text x="92" y="189">離れた所有者が指名した</text>
    <use href="#i-no" x="460" y="172" width="22" height="22"/><text x="492" y="189">所有者が属していた Cell だけで決めた</text>
    <use href="#i-no" x="60" y="222" width="22" height="22"/><text x="92" y="239">Cell の親子関係</text>
    <use href="#i-no" x="460" y="222" width="22" height="22"/><text x="492" y="239">Agent が申告した</text>
  </g>
  <rect x="40" y="280" width="800" height="60" rx="10" class="box"/><text x="440" y="316" class="ts" text-anchor="middle">後任が決まっても、承認されていなかった改訂が承認されたことにはならない</text>
</svg>
```

後任も、作るときと同じく、結ぶ Cell が合意して決めます。前の所有者の指名や、片側の Cell だけの決定、親子関係、Agent の申告は、単独では根拠になりません。

出典: EAA Core 版 6「4. 提案と変更」。

## 所有者がいない間も、止めることはできる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="390" height="230" rx="10" class="soft"/>
  <text x="235" y="78" class="t" text-anchor="middle" font-weight="700">使える</text>
  <use href="#i-ok" x="221" y="96" width="28" height="28"/>
  <text x="235" y="156" class="ts" text-anchor="middle">Contract と各 Cell の規範で</text><text x="235" y="182" class="ts" text-anchor="middle">すでに認められている</text><text x="235" y="208" class="ts" text-anchor="middle" font-weight="700">停止・取消</text>
  <rect x="450" y="40" width="390" height="230" rx="10" class="xl" style="fill:#fff"/>
  <text x="645" y="78" class="t xc" text-anchor="middle" font-weight="700">根拠にしない</text>
  <use href="#i-no" x="631" y="96" width="28" height="28"/>
  <text x="645" y="156" class="ts" text-anchor="middle">「緊急だから」「元に戻せるから」を</text><text x="645" y="182" class="ts" text-anchor="middle">改訂の承認や</text><text x="645" y="208" class="ts" text-anchor="middle">新しい権限の理由にする</text>
  <text x="440" y="320" class="ts sub" text-anchor="middle">所有者がいない間、Contract は所有者を持たない（後任までの例外）</text>
</svg>
```

所有者がいない間も、すでに認められている停止・取消は使えます。ただ、緊急であることや元に戻せることを、改訂の承認や新しい権限の理由にはしません。

出典: EAA Core 版 6「4. 提案と変更」。

## 承認は、正本の編集権とは別

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="340" height="220" rx="10" class="soft"/>
  <text x="210" y="100" class="t" text-anchor="middle" font-weight="700">Profile の正本を編集できる</text>
  <use href="#i-pr" x="195" y="130" width="30" height="38"/>
  <text x="210" y="210" class="ts" text-anchor="middle">GitHub に書き込める</text><text x="210" y="236" class="ts" text-anchor="middle">権限も、これに当たる</text>
  <path d="M380,170 H496" class="xl dash"/><use href="#i-no" x="424" y="142" width="28" height="28"/>
  <rect x="500" y="60" width="340" height="220" rx="10" class="box"/>
  <g class="ts"><text x="530" y="110">これだけでは、できないこと</text><text x="530" y="160">・合意した義務を消す</text><text x="530" y="196">・合意した義務を緩める</text><text x="530" y="232">・権限を足す</text></g>
</svg>
```

Profile の正本を編集できる権限だけでは、合意した義務を消したり緩めたり、権限を足したりできません。リポジトリに書き込めることも、承認ではありません。

出典: EAA Profiles「4.」の「改訂元と採用先を分ける」（共有する Profile の正本の改訂の行）。※ 書き込みの権限を編集権に当てたのは、この本の読み。

## 規範を緩めるかは、正当な所有者が決める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="340" height="230" rx="10" class="box"/><text x="210" y="96" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="80" y="126" width="260" height="44" rx="22" class="a"/><text x="210" y="154" class="ts on" text-anchor="middle">出荷を担う Agent</text>
  <text x="210" y="210" class="ts" text-anchor="middle">「欠品の理由を残す手順を</text><text x="210" y="236" class="ts" text-anchor="middle">外したい」</text>
  <path d="M380,170 H496" class="ln" marker-end="url(#arr)"/>
  <rect x="500" y="60" width="340" height="230" rx="10" class="soft"/>
  <use href="#i-no" x="526" y="100" width="24" height="24"/><text x="562" y="118" class="ts">自分では承認しない</text>
  <use href="#i-ok" x="526" y="160" width="24" height="24"/><text x="562" y="178" class="ts">緩めるかは、正当な所有者が</text><text x="562" y="202" class="ts">承認して決める</text>
</svg>
```

実行者は、自分を縛る規範を緩める変更を、自分で承認してはいけません。緩めてよいかは、正当な所有者が承認して決めます。

出典: EAA Core 版 6「4. 提案と変更」。※ 例は説明のための仮定です。

## 権限が足りないときは、示して調整に戻す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="300" height="220" rx="10" class="box"/><text x="190" y="96" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="70" y="126" width="240" height="44" rx="22" class="a"/><text x="190" y="154" class="ts on" text-anchor="middle">出荷を担う Agent</text>
  <text x="190" y="214" class="ts" text-anchor="middle">在庫の引き当てを、</text><text x="190" y="240" class="ts" text-anchor="middle">直接書き換えたい</text>
  <rect x="540" y="60" width="300" height="220" rx="10" class="box"/><text x="690" y="96" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <path d="M340,140 H536" class="xl dash"/><use href="#i-no" x="424" y="112" width="28" height="28"/><text x="440" y="170" class="ts xc" text-anchor="middle">自分で権限を足さない</text>
  <path d="M340,230 H536" class="ln" marker-end="url(#arr)"/><text x="440" y="222" class="ts" text-anchor="middle">足りないと示して、提案する</text>
</svg>
```

実行者は、自ら権限を広げてはいけません。権限が足りないときは、それを示し、正当な判断主体との調整に戻します。権限で切った境界（第 2 章）を保つ規定です。

出典: EAA Core 版 6「4. 提案と変更」「2. 自治と権限」。※ 例は説明のための仮定です。

## 中の改訂の手続きは、各 Cell が決める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="260" height="200" rx="10" class="box"/><text x="170" y="86" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text><text x="170" y="150" class="ts" text-anchor="middle">中の規範の改訂は</text><text x="170" y="176" class="ts" text-anchor="middle">在庫が決めた手続き</text>
  <rect x="580" y="50" width="260" height="200" rx="10" class="box"/><text x="710" y="86" class="t" text-anchor="middle" font-weight="700">物流の Cell</text><text x="710" y="150" class="ts" text-anchor="middle">中の規範の改訂は</text><text x="710" y="176" class="ts" text-anchor="middle">物流が決めた手続き</text>
  <rect x="330" y="110" width="220" height="80" rx="3" class="hl" style="fill:#fff"/><text x="440" y="144" class="ts hc" text-anchor="middle" font-weight="700">Contract</text><text x="440" y="170" class="tx" text-anchor="middle">所有者・観測・準拠先を持つ</text>
  <path d="M300,150 H326 M554,150 H576" class="ln"/>
  <text x="440" y="310" class="t" text-anchor="middle" font-weight="700">所有者・観測・準拠先の要求が及ぶのは、共有する文書</text>
</svg>
```

所有者・観測・準拠先を持つという要求は、Cell の中の規範には及びません。中の改訂の手続きは各 Cell が決めます。

出典: EAA Core 版 6「4. 提案と変更」。※ 前の 2 ページの行（規範を緩める・権限を広げる）は文書を限っていないので、中の規範にも当たると読んだ。

## 例：所有者本人が提起したら

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="300" height="220" rx="10" class="box"/><text x="190" y="96" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="120" y="120" width="140" height="40" rx="6" class="h"/><text x="190" y="146" class="ts on" text-anchor="middle">所有者</text>
  <text x="190" y="200" class="ts" text-anchor="middle">締めを 15 時から 14 時に</text><text x="190" y="224" class="ts" text-anchor="middle">早める改訂を提起</text>
  <path d="M340,170 H536" class="ln" marker-end="url(#arr)"/>
  <rect x="540" y="60" width="300" height="220" rx="10" fill="url(#hatch)"/><text x="690" y="130" class="t" text-anchor="middle" font-weight="700">承認する者</text>
  <text x="690" y="180" class="tl" text-anchor="middle">？</text>
  <text x="690" y="236" class="ts" text-anchor="middle">所有者は 1 人で、提起した本人</text>
</svg>
```

第 8 章の締めの時刻の改訂を、所有者本人が提起したとします。改訂を判断するのは所有者、提起した者は承認せず、所有者は 1 人なので、承認できる者がいません。

※ 例は説明のための仮定です。出典: EAA Core 版 6「4. 提案と変更」。所有者以外の者を承認者に充てることは、改訂を判断するのは所有者という行と合いません。

## Core はここまでしか決めていない

```svg
<svg viewBox="0 0 880 480" width="880" height="480">
  <rect x="40" y="30" width="400" height="390" rx="10" class="soft"/>
  <text x="60" y="64" class="t" font-weight="700">Core が決めていること</text>
  <g class="ts"><use href="#i-ok" x="60" y="88" width="22" height="22"/><text x="92" y="105">改訂は人間の所有者が承認する</text>
  <use href="#i-ok" x="60" y="123" width="22" height="22"/><text x="92" y="140">提起した者は承認しない</text>
  <use href="#i-ok" x="60" y="158" width="22" height="22"/><text x="92" y="175">自分を縛る規範を自分で緩めない</text>
  <use href="#i-ok" x="60" y="193" width="22" height="22"/><text x="92" y="210">自分の権限を自分で広げない</text>
  <use href="#i-ok" x="60" y="228" width="22" height="22"/><text x="92" y="245">所有者が離れたら、後任まで承認されない</text>
  <use href="#i-ok" x="60" y="263" width="22" height="22"/><text x="92" y="280">後任は結ぶ Cell の合意で決める</text>
  <use href="#i-ok" x="60" y="298" width="22" height="22"/><text x="92" y="315">後任の合意不成立は、合意不成立</text>
  <use href="#i-ok" x="60" y="333" width="22" height="22"/><text x="92" y="350">中の改訂の手続きは各 Cell</text></g>
  <text x="60" y="400" class="ts" font-weight="700">→ 所有者本人の改訂は、承認できる者がいない</text>
  <rect x="460" y="30" width="380" height="390" rx="10" fill="url(#hatch)"/>
  <text x="480" y="64" class="t" font-weight="700">決めていないこと</text>
  <g class="ts"><text x="480" y="102" class="ts" font-weight="700">既知の不足（Core の冒頭が挙げた）</text><text x="480" y="126" class="tx">詳しい手順は未定。いつ決めるかは書いていない</text><text x="480" y="160" class="ts">合意不成立の詳しい手順</text>
  <text x="480" y="214" class="ts" font-weight="700">Core に書かれていない</text><text x="480" y="238" class="tx">既知の不足にも挙がっていない</text><text x="480" y="278" class="ts">提起した者と承認した者が別だと、</text><text x="480" y="302" class="ts">記録の上でどう示すか</text><text x="480" y="342" class="ts">承認の手続きの細部</text><text x="480" y="376" class="ts">所有者本人が出したい改訂を、</text><text x="480" y="400" class="ts">どう進めるか</text></g>
  <text x="440" y="460" class="ts sub" text-anchor="middle">承認の手続きは、それぞれの判断に当てる手続きに任せている</text>
</svg>
```

所有者本人の改訂に承認できる者がいないのは、未決ではなく Core の字からの帰結です。その先どう進めるかは、Core に書かれていません。

出典: EAA Core 版 6「4. 提案と変更」「5. 成果と記録」と冒頭の観測欄（合意不成立）。Core は職務分離を保つことと、改訂を後から追える記録に残すことだけを求めています。

## 次章へ：Cell を分け直す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="80" width="260" height="160" rx="10" class="box"/><text x="190" y="150" class="t" text-anchor="middle" font-weight="700">Cell</text><text x="190" y="186" class="ts" text-anchor="middle">文脈が切り替わり始めた</text>
  <rect x="520" y="60" width="300" height="80" rx="10" class="hl" style="fill:#fff"/><text x="670" y="106" class="ts hc" text-anchor="middle">Cell</text>
  <rect x="520" y="180" width="300" height="80" rx="10" class="hl" style="fill:#fff"/><text x="670" y="226" class="ts hc" text-anchor="middle">Cell</text>
  <path d="M320,140 L516,100 M320,180 L516,220" class="ln"/>
  <text x="440" y="310" class="ts" text-anchor="middle">第 10 章</text>
</svg>
```

ここまでは、境界を保ちながら分業を続ける形でした。第 10 章では、一つの Cell の中でコンテキストスイッチが起き始めたときに、分け直す形を見ます。
