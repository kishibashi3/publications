# 第 3 章　Profile

群: Cell の境界と責務
副題: Cell の責務は、版付きの仕様に書いてから渡す

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v6.md（87be3308）の第 3 章。着手: @ope-ultp1635 msg 6d22f01a（v6 の 2 便目）。本文 GO: @ope-ultp1635 msg 8c181d1b、kishibashi3「うん」。
このファイルは 62b9aa0 までの第 3 章（価値による分割）を置き換えた。旧第 3 章のページの行き先は v6 の表のとおり（価値の例は第 2 章へ 1 便目で移した。Constitution のページ — 価値は Constitution に書く・規範の範囲で中を決める・違う価値で上書きしない — は 3 便目で第 4 章へ。旧本文は 62b9aa0 の eaa-ch03.md にある）。
出典の中心: EAA Profiles（origin/main drafts/enterprise-agentic-agile/profiles.md）全体と、EAA Core 版 6「1. 責務と分割」（core.md:49〜53）・概念表「Profile」「横断責務」「Cell に属する」「親 Cell・子 Cell」（core.md:30・31・42・43）。
いまの本のどこにも無く、新しく書いたページと出典:
- p.「Profile に書くこと」— profiles.md:36〜42（「3.」の 5 項目）。項目名・記法・必須項目は未確定（profiles.md:36）
- p.「例：在庫の Profile」— 書き手の例。5 項目を在庫に当てた。在庫・物流・「出荷日」は第 2 章 p.「例：ドメインで切る」と同じ
- p.「Standard Profile と Domain Profile」— profiles.md:24〜32（「2.」）。Domain の例は原典の 3 つ（契約・請求・受注）のまま
- p.「Standard Profile の初期カタログ」— profiles.md:85〜102（「6.」）。表の「成り立たせる責務」の列は Profiles の字を平らに言い直した
- p.「書くことと割り当てることは別」— profiles.md:44〜46（「3.」）、core.md:50（「1.」記述だけで権限は発生しない）
- p.「判断責任者は責務ごとに置く」— core.md:49（「1.」）。例は 62b9aa0 の第 5 章 p.「例：最後に誰が決めるか」から持ってきた（注文画面・在庫連携は @reader のペルソナの設定から借りた形で、書き手が作った例）
- p.「合わせて担うときに確かめること」— profiles.md:53・54（「4.」）。三つの言い直しは書き手。分け直すときの同じ確かめ（core.md:58）は第 10 章 p.「責任の空白と、決定権の重なり」。空白と重なりは第 10 章と同じく持ち主（割当の判断責任者、profiles.md:44）で言い直した。Profile の字で言い直すと p.「書くことと割り当てることは別」（core.md:50・profiles.md:46）と食い違うため（@reviewer 2026-11-09 ch03 の「3-2」）
- p.「ロードで引き受ける」— profiles.md:50・51・56・57（「4.」）。Enterprise Cell は profiles.md:51 の字のまま引き、説明は付けない。「全体を扱う」は working-notes.md:304 の字で、その節は :297〜298 で EAA の規範ではないとしているため出典から外した（@reviewer 同「2.」）
- p.「横断責務も Profile」— core.md:31（概念表「横断責務」）、profiles.md:21・22（「1.」）・109（「7.」）
- p.「Domain Profile は最初の Mission に要る範囲から」— profiles.md:122〜131（「9.」）。Billing の例は Profiles の例をそのまま訳した
- p.「正本は提供する側、採用版は引き受けた側」— profiles.md:61〜63・70（「4.」の「改訂元と採用先を分ける」）。手続きの表は第 8 章 p.「正本の改訂と、採用版の変更を分ける」が既に持つので、ここは誰が何を持つかだけにした
- p.「Core はここまでしか決めていない」— 左は Core の字だけ（core.md:30・50・52・53・31・63）。見出しは第 8・10 章に揃えて「Core が決めていること」。右は Core の観測欄の既知の不足のうち分け直しに関わる「移行中の責任」（core.md:11、第 10 章と同じ）と、Profiles が未決・未確定とした所（profiles.md:83・102・120・131・135）。題は第 5〜11 章の同題のページに揃えた
移したページ（v6 の表のとおり）:
- p.「Profile は、引き受ける責務の仕様」← 62b9aa0 第 4 章 p.「責務は Profile に書く」。在庫の Profile の絵は p.「例：在庫の Profile」へ移し、このページの絵は Profiles「1.」の概念表（Profile・Cell・Mission）にした
- p.「判断責任者は責務ごとに置く」← 62b9aa0 第 5 章 p.「例：最後に誰が決めるか」
- p.「分割は、責務と判断権限を渡すこと」← 62b9aa0 第 5 章 p.「分割は判断権限ごと渡す」＋ 第 2 章 p.「増えるのは判断を渡すとき」（渡す先は責任主体で人に限らない・責任を複数の人で負ってよい。core.md:42・52。@reviewer 2-1 の直しのまま）
- p.「渡した判断は相手のもの」← 62b9aa0 第 5 章 同題。注の章番号を v6 に（Profile はこの章、版の採用は第 8 章）
- p.「親・子は由来の呼び名」← 62b9aa0 第 5 章 同題
- p.「一つの Cell が複数を担う」← 62b9aa0 第 4 章 同題 ＋ profiles.md:78・79（「5.」）。旧第 4 章の判定「語と記録が混ざらないなら」を、第 2 章の判定（ch02 文脈＝語と記録・価値・権限）に直した
p.「〜」の参照: 移したページの題を本文・注・絵の中で引いている所は、第 11 章（いまの番号）の注（p.「親・子は由来の呼び名」、題は変えていない）と、旧第 5 章の注の中だけで、どちらもリンクではない。章番号で旧第 4・5 章を指している所（eaa-ch08.md:134 本文「第 5 章の分割」・eaa-ch11.md:103 注「分割の決まりは第 5 章」・eaa-ch12.md:177 絵「（第 4 章）」・eaa-furoku.md:200 絵「（第 5 章）」）は、3 便目の章番号の直しで行き先をこの章にする。
章番号: この章の本文・注・絵は v6 の章番号で書いた（第 2 章 Cell の境界、第 4 章 Constitution と Federation、第 5 章 Contract、第 7 章 Evidence と Ontology、第 8 章 版の公開と採用、第 9 章 改訂の承認と権限、第 10 章 Cell の分け直し）。3 便目の章番号の直しで、この章はずらさない。
書き手の読み: p.「判断責任者は責務ごとに置く」の帰結（二つなら提案・一つなら責務の責任者）、p.「合わせて担うときに確かめること」の言い直し。注で断った。
絵の Cell の枠は入れ子にしない（core.md:43）。
v7 で畳んだ（構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v7.md 863f5176。本文 GO: @ope-ultp1635 msg d9ab1757、kishibashi3「うん」）: 19 → 7 ページ。p.「Profile は、引き受ける責務の仕様」に p.「Profile に書くこと」（5 項目を絵の右に）。p.「Standard と Domain」に p.「Standard の初期カタログ」（名前だけ絵に）p.「Domain は最初の Mission から」。p.「書くことと割り当てることは別」に p.「判断責任者は責務ごとに置く」p.「ロードで引き受ける」p.「正本は提供する側、採用版は引き受けた側」。p.「分割は、責務と判断権限を渡すこと」に p.「渡した判断は相手のもの」p.「親・子は由来の呼び名」（「責務だけを渡して判断を手元に残すのは分割ではない」は本文に残した）。p.「一つの Cell が複数を担う」に p.「合わせて担うときに確かめること」p.「横断責務も Profile」。落とした: p.「Core はここまでしか決めていない」（右側は第 9 章 p.「Core が決めていないこと」へ。3 便目で書く。字は ledger に逐語で控えた）、p.「次章へ：Constitution」。落とした字と行き先: writer-ja/drafts/eaa-toc/fold-v7-ledger.md。
章番号: v7 の章番号（第 7 章 版の改訂と採用、第 8 章 Cell の分け直し）で書いた。
-->

```svg
<svg viewBox="0 0 880 340" width="880" height="340">
  <rect x="40" y="40" width="300" height="230" rx="10" class="hl" style="fill:#fff"/>
  <text x="190" y="76" class="t hc" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="110" y="110" width="160" height="40" rx="6" class="h"/><text x="190" y="136" class="ts on" text-anchor="middle">判断責任者</text>
  <text x="190" y="196" class="ts" text-anchor="middle">権限・資源・能力</text>
  <text x="190" y="226" class="tx" text-anchor="middle">割当で決める</text>
  <path d="M500,155 H346" class="ln" marker-end="url(#arr)"/><text x="423" y="145" class="tx" text-anchor="middle">引き受ける</text>
  <rect x="510" y="40" width="330" height="230" rx="3" class="box"/>
  <text x="675" y="76" class="t" text-anchor="middle" font-weight="700">Profile（版 1）</text>
  <g class="ts"><text x="540" y="116">目的と範囲</text><text x="540" y="144">意味と参照する Ontology</text><text x="540" y="172">権限と制約</text><text x="540" y="200">能力と外への保証</text><text x="540" y="228">Evidence と判断できない条件</text></g>
  <text x="440" y="310" class="t" text-anchor="middle" font-weight="700">責務は先に書き、誰が引き受けるかは別に決める</text>
</svg>
```

Cell が引き受ける責務は、版付きの仕様（Profile）に書いてから渡します。Profile には責務の中身を書き、どの Cell と誰が引き受けるかは割当として別に決めます。分割は、この責務と判断の権限を別の責任主体に渡すことです。

## Profile は、引き受ける責務の仕様

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g>
    <rect x="30" y="30" width="170" height="110" rx="3" class="box"/><text x="115" y="66" class="ts" text-anchor="middle" font-weight="700">Profile</text><text x="115" y="96" class="tx" text-anchor="middle">引き受ける責務の定義</text><text x="115" y="120" class="tx" text-anchor="middle">版を持つ</text>
    <rect x="30" y="160" width="170" height="80" rx="10" class="hl" style="fill:#fff"/><text x="115" y="194" class="ts hc" text-anchor="middle" font-weight="700">Cell</text><text x="115" y="220" class="tx" text-anchor="middle">責務を引き受ける主体</text>
    <rect x="30" y="260" width="170" height="80" rx="10" class="box"/><text x="115" y="294" class="ts" text-anchor="middle" font-weight="700">Mission</text><text x="115" y="320" class="tx" text-anchor="middle">今回達成する変化・成果</text>
    <path d="M115,140 V160 M115,240 V260" class="ln"/>
  </g>
  <path d="M206,85 H246" class="ln" marker-end="url(#arr)"/>
  <rect x="250" y="30" width="600" height="310" rx="3" class="box"/>
  <text x="550" y="66" class="t" text-anchor="middle" font-weight="700">Profile に書くこと</text>
  <g class="ts">
    <text x="280" y="112">目的と、責任を負う範囲・負わない範囲</text>
    <text x="280" y="154">業務上の意味と、参照する Ontology</text>
    <text x="280" y="196">要る権限、守る制約と参照する規範</text>
    <text x="280" y="238">提供する能力、依存先、外への保証と Contract</text>
    <text x="280" y="280">成り立ちを示す Evidence、自分で判断できない条件</text>
  </g>
  <text x="550" y="322" class="tx" text-anchor="middle">項目名・書き方・必須の欄は、Profiles が未確定にしている</text>
  <text x="440" y="368" class="ts sub" text-anchor="middle">Profile は続く責務、Mission は今回の仕事</text>
</svg>
```

Profile は、Cell が引き受ける責務を定める版付きの仕様です。責務の範囲と意味、要る権限と制約、外への保証、確かめ方、自分で判断できない条件を書きます。

出典: EAA Core 版 6 の概念表「Profile」、EAA Profiles「1.」「3.」。項目名・記法・必須項目は次の設計対象とされている。

## 例：在庫の Profile

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="20" width="760" height="300" rx="3" class="box"/>
  <text x="440" y="54" class="t" text-anchor="middle" font-weight="700">在庫の Profile（版 1）</text>
  <g class="ts">
    <text x="90" y="98" font-weight="700">目的と範囲</text><text x="330" y="98">倉庫ごとの在庫数が正しい。便の手配は負わない</text>
    <text x="90" y="144" font-weight="700">意味と Ontology</text><text x="330" y="144">「出荷日」は引当を確定した日。物流との対応は Ontology</text>
    <text x="90" y="190" font-weight="700">権限と制約</text><text x="330" y="190">引当の順番を決める。引当済みの在庫は動かさない</text>
    <text x="90" y="236" font-weight="700">能力と保証</text><text x="330" y="236">引当の結果を物流に渡す（Contract）</text>
    <text x="90" y="282" font-weight="700">Evidence と条件</text><text x="330" y="282">棚卸の記録と突き合わせる。欠品の代替品は決めない</text>
  </g>
  <text x="440" y="356" class="ts sub" text-anchor="middle">引き受ける Cell と判断責任者は、ここには書かない</text>
</svg>
```

第 2 章で切った在庫の Cell の責務を、前のページの項目で書くとこうなります。誰が引き受けるかは書きません。

※ 例は説明のために作った。欄の名前は前のページの項目を短くしたもので、Profiles の項目名ではない。

## Standard と Domain

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="30" width="400" height="280" rx="3" class="box"/><text x="230" y="64" class="t" text-anchor="middle" font-weight="700">Standard Profile</text>
  <text x="230" y="96" class="ts" text-anchor="middle">EAA が、再利用できる責務として出す</text>
  <text x="230" y="126" class="tx" text-anchor="middle">初めに挙げたカタログ</text>
  <g class="ts" text-anchor="middle">
    <rect x="50" y="140" width="110" height="32" rx="4" class="soft"/><text x="105" y="161">Platform</text>
    <rect x="175" y="140" width="110" height="32" rx="4" class="soft"/><text x="230" y="161">Portfolio</text>
    <rect x="300" y="140" width="110" height="32" rx="4" class="soft"/><text x="355" y="161">Supplier</text>
    <rect x="50" y="182" width="110" height="32" rx="4" class="soft"/><text x="105" y="203">Assurance</text>
    <rect x="175" y="182" width="110" height="32" rx="4" class="soft"/><text x="230" y="203">Regulated</text>
    <rect x="300" y="182" width="110" height="32" rx="4" class="soft"/><text x="355" y="203">Migration</text>
    <rect x="175" y="224" width="110" height="32" rx="4" class="soft"/><text x="230" y="245">Cutover</text>
  </g>
  <text x="230" y="290" class="tx" text-anchor="middle">全部を置くことは求めない。完成したスキーマでもない</text>
  <rect x="450" y="30" width="400" height="280" rx="3" class="box"/><text x="650" y="64" class="t" text-anchor="middle" font-weight="700">Domain Profile</text>
  <text x="650" y="96" class="ts" text-anchor="middle">企業が、業務の意味・不変条件・責任から書く</text>
  <text x="650" y="126" class="tx" text-anchor="middle">契約・請求・受注など</text>
  <rect x="470" y="144" width="360" height="56" rx="6" class="soft"/><text x="650" y="168" class="ts" text-anchor="middle">全業務を初日から書かない</text><text x="650" y="190" class="ts" text-anchor="middle">最初の Mission に要る範囲だけ書く</text>
  <rect x="470" y="214" width="360" height="56" rx="6" class="xl" style="fill:#fff"/><text x="650" y="238" class="ts" text-anchor="middle">まだ決めていない所を</text><text x="650" y="260" class="ts" text-anchor="middle">権限があることにしない</text>
  <text x="440" y="352" class="t" text-anchor="middle" font-weight="700">形式も引き受け方も同じ。Cell の種類は分けない</text>
</svg>
```

Standard は EAA が再利用できる形で出し、Domain は企業が業務から書きます。形式は同じで、Domain は最初の Mission に要る範囲から書きます。

出典: EAA Profiles「2.」「6.」「9.」。Assurance や Regulated を担う Cell があっても、対象の各 Cell が持つ義務は消えない（「6.」）。

## 書くことと割り当てることは別

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="30" width="370" height="250" rx="3" class="box"/><text x="215" y="62" class="t" text-anchor="middle" font-weight="700">Profile の本文（正本）</text>
  <g class="ts"><text x="56" y="104">責務の中身</text><text x="56" y="136">要る権限（要求として）</text></g>
  <g class="tx xc"><text x="56" y="176">特定の担当者は書かない</text><text x="56" y="200">特定の Agent 製品は書かない</text></g>
  <text x="56" y="246" class="tx">正本は提供する側が持つ。版 1・版 2 …</text>
  <path d="M404,155 H476" class="ln" marker-end="url(#arr)"/><text x="440" y="145" class="tx" text-anchor="middle">ロード</text>
  <rect x="480" y="30" width="370" height="250" rx="10" class="hl" style="fill:#fff"/><text x="665" y="62" class="t hc" text-anchor="middle" font-weight="700">割当</text>
  <g class="ts"><text x="506" y="104">引き受ける Cell</text><text x="506" y="136">責務ごとの判断責任者</text><text x="506" y="168">資源・対象範囲・採用した版</text><text x="506" y="200">実際に与えられた権限</text></g>
  <text x="506" y="246" class="tx">要る権限と能力を確保して、引き受けが成り立つ</text>
  <text x="440" y="320" class="ts" text-anchor="middle">新しい版を公開しても、引き受けた側が採用するまで当たらない</text>
  <text x="440" y="356" class="ts sub" text-anchor="middle">Profile に書いただけでは、権限は生まれない</text>
</svg>
```

Profile には責務と要る権限を書き、誰が引き受けるかは割当に書きます。要る権限と能力を確保して引き受け（ロード）が成り立ち、新しい版も採用まで当たりません。

出典: EAA Profiles「3.」「4.」、EAA Core 版 6「1.」（記述だけで権限は発生しない。責務ごとに正当な判断責任者を明らかにする）。手続きは第 7 章。

## 分割は、責務と判断権限を渡すこと

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="30" width="390" height="200" rx="10" class="hl" style="fill:#fff"/>
  <text x="225" y="64" class="t hc" text-anchor="middle" font-weight="700">分割</text>
  <g class="ts"><text x="60" y="110">責務を渡す</text><text x="60" y="146">自分で判断する権限も渡す</text></g>
  <use href="#i-ok" x="60" y="174" width="24" height="24"/><text x="94" y="192" class="ts">Cell が増える</text>
  <rect x="460" y="30" width="390" height="200" rx="10" class="xl" style="fill:#fff"/>
  <text x="655" y="64" class="t xc" text-anchor="middle" font-weight="700">分割ではない</text>
  <g class="ts"><text x="490" y="110">責務だけを渡す</text><text x="490" y="146">判断は手元に残す</text></g>
  <use href="#i-no" x="490" y="174" width="24" height="24"/><text x="524" y="192" class="ts">受けた側は毎回問い合わせる</text>
  <rect x="30" y="250" width="390" height="70" rx="10" class="hl" style="fill:#fff"/>
  <text x="225" y="278" class="ts" text-anchor="middle">親 Cell（渡した側）・子 Cell（受け取った側）</text>
  <text x="225" y="304" class="tx" text-anchor="middle">由来の呼び名。分割の後は、ほかの Cell と同じ関係</text>
  <rect x="460" y="250" width="390" height="70" rx="10" class="soft"/>
  <text x="655" y="278" class="ts" text-anchor="middle">渡した側の範囲が後で変わっても</text>
  <text x="655" y="304" class="tx" text-anchor="middle">受け取った側が新しい版を採用するまで変わらない</text>
  <text x="440" y="356" class="ts sub" text-anchor="middle">渡す先は責任主体。人一人に限らない</text>
</svg>
```

分割は、責務と自分で判断する権限を別の責任主体に渡すことです。責務だけを渡して判断を手元に残すのは分割ではありません。渡したものは受け取った Cell のものです。

出典: EAA Core 版 6「1. 責務と分割」、概念表「Cell に属する」（責任を複数の人で負ってよい）「親 Cell・子 Cell」。

## 一つの Cell が複数を担う

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="20" width="520" height="110" rx="10" class="hl" style="fill:#fff"/>
  <text x="290" y="50" class="ts hc" text-anchor="middle" font-weight="700">一つの Cell</text>
  <g class="ts" text-anchor="middle">
    <rect x="70" y="68" width="200" height="44" rx="6" class="soft"/><text x="170" y="96">在庫の Profile</text>
    <rect x="310" y="68" width="200" height="44" rx="6" class="soft"/><text x="410" y="96">発注の Profile</text>
  </g>
  <text x="290" y="156" class="tx" text-anchor="middle">担う者が文脈を切り替えずに済むなら、分けずに置く（第 2 章の判定）</text>
  <g class="ts">
    <rect x="30" y="172" width="165" height="110" rx="6" class="box"/><text x="112" y="200" text-anchor="middle" font-weight="700">責任の空白</text><text x="112" y="232" text-anchor="middle" class="tx">どの判断責任者も</text><text x="112" y="254" text-anchor="middle" class="tx">引き受けていない</text>
    <rect x="207" y="172" width="165" height="110" rx="6" class="box"/><text x="289" y="200" text-anchor="middle" font-weight="700">重なる決定権</text><text x="289" y="232" text-anchor="middle" class="tx">同じことを二人の</text><text x="289" y="254" text-anchor="middle" class="tx">判断責任者が決める</text>
    <rect x="385" y="172" width="165" height="110" rx="6" class="box"/><text x="467" y="200" text-anchor="middle" font-weight="700">両立しない保証</text><text x="467" y="232" text-anchor="middle" class="tx">片方を守ると、</text><text x="467" y="254" text-anchor="middle" class="tx">もう片方が守れない</text>
  </g>
  <rect x="580" y="20" width="270" height="262" rx="10" class="hl" style="fill:#fff"/>
  <text x="715" y="52" class="ts hc" text-anchor="middle" font-weight="700">横断責務も Profile</text>
  <text x="715" y="84" class="tx" text-anchor="middle">複数の Cell にまたがる変更・保証</text>
  <text x="715" y="108" class="tx" text-anchor="middle">（例：Platform の Cell）</text>
  <path d="M715,124 V160" class="ln" marker-end="url(#arr)"/><text x="725" y="146" class="tx">変更を提案する</text>
  <rect x="610" y="166" width="210" height="44" rx="6" class="soft"/><text x="715" y="193" class="ts" text-anchor="middle">業務の Cell が決める</text>
  <use href="#i-no" x="620" y="226" width="22" height="22"/><text x="650" y="243" class="tx xc">相手を直接変えない</text>
  <text x="440" y="334" class="ts sub" text-anchor="middle">Profile 一つに Cell 一つ、は求めない。決定権は割当で生まれる</text>
</svg>
```

Profile 一つに Cell 一つは求めず、切り替えずに済むなら同じ Cell で担います。そのときは割当で、責任の空白・重なる決定権・両立しない保証を確かめます。

出典: EAA Core 版 6「1.」・概念表「横断責務」、EAA Profiles「4.」「5.」「7.」。※ 三つの言い直しは書き手。空白と重なりを持ち主で見るのは第 8 章と同じ。
