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
- p.「Standard Profile と Domain Profile」— profiles.md:24〜32（「2.」）
- p.「Standard Profile の初期カタログ」— profiles.md:85〜102（「6.」）。表の「成り立たせる責務」の列は Profiles の字を平らに言い直した
- p.「書くことと割り当てることは別」— profiles.md:44〜46（「3.」）、core.md:50（「1.」記述だけで権限は発生しない）
- p.「判断責任者は責務ごとに置く」— core.md:49（「1.」）。例は 62b9aa0 の第 5 章 p.「例：最後に誰が決めるか」から持ってきた（注文画面・在庫連携は @reader のペルソナの設定から借りた形で、書き手が作った例）
- p.「合わせて担うときに確かめること」— profiles.md:53・54（「4.」）。三つの言い直しは書き手。分け直すときの同じ確かめ（core.md:58）は第 10 章 p.「責任の空白と、決定権の重なり」
- p.「ロードで引き受ける」— profiles.md:50・51・56・57（「4.」）。Enterprise Cell の説明は Working Notes の表（working-notes.md:304「全体目的・資源・共通規範を扱う」。適用例）による
- p.「横断責務も Profile」— core.md:31（概念表「横断責務」）、profiles.md:21・22（「1.」）・109（「7.」）
- p.「Domain Profile は最初の Mission に要る範囲から」— profiles.md:122〜131（「9.」）。Billing の例は Profiles の例をそのまま訳した
- p.「正本は提供する側、採用版は引き受けた側」— profiles.md:61〜63・70（「4.」の「改訂元と採用先を分ける」）。手続きの表は第 8 章 p.「正本の改訂と、採用版の変更を分ける」（いまの第 9 章）が既に持つので、ここは誰が何を持つかだけにした
- p.「Core はここまでしか決めていない」— profiles.md:135・136（「10.」）。題は第 8〜11 章（いまの第 9〜12 章）の同題のページに揃えた。右の項目は Core ではなく Profiles が未確定としたもので、絵と出典でそう断った
移したページ（v6 の表のとおり）:
- p.「Profile は、引き受ける責務の仕様」← 62b9aa0 第 4 章 p.「責務は Profile に書く」。在庫の Profile の絵は p.「例：在庫の Profile」へ移し、このページの絵は Profiles「1.」の概念表（Profile・Cell・Mission）にした
- p.「判断責任者は責務ごとに置く」← 62b9aa0 第 5 章 p.「例：最後に誰が決めるか」
- p.「分割は、責務と判断権限を渡すこと」← 62b9aa0 第 5 章 p.「分割は判断権限ごと渡す」＋ 第 2 章 p.「増えるのは判断を渡すとき」（渡す先は責任主体で人に限らない・責任を複数の人で負ってよい。core.md:42・52。@reviewer 2-1 の直しのまま）
- p.「渡した判断は相手のもの」← 62b9aa0 第 5 章 同題。注の章番号を v6 に（Profile はこの章、版の採用は第 8 章）
- p.「親・子は由来の呼び名」← 62b9aa0 第 5 章 同題
- p.「一つの Cell が複数を担う」← 62b9aa0 第 4 章 同題 ＋ profiles.md:78・79（「5.」）
p.「〜」の参照: 移したページの題を本文・注・絵の中で引いている所は、第 11 章（いまの番号）の注（p.「親・子は由来の呼び名」、題は変えていない）と、旧第 5 章の注の中だけで、どちらもリンクではない。章番号で旧第 4・5 章を指している所（eaa-ch08.md:134 本文「第 5 章の分割」・eaa-ch11.md:103 注「分割の決まりは第 5 章」・eaa-ch12.md:177 絵「（第 4 章）」・eaa-furoku.md:200 絵「（第 5 章）」）は、3 便目の章番号の直しで行き先をこの章にする。
章番号: この章の本文・注・絵は v6 の章番号で書いた（第 2 章 Cell の境界、第 4 章 Constitution と Federation、第 5 章 Contract、第 7 章 Evidence と Ontology、第 8 章 版の公開と採用、第 9 章 改訂の承認と権限、第 10 章 Cell の分け直し）。3 便目の章番号の直しで、この章はずらさない。
書き手の読み: p.「判断責任者は責務ごとに置く」の帰結（二つなら提案・一つなら責務の責任者）、p.「合わせて担うときに確かめること」の言い直し。注で断った。
絵の Cell の枠は入れ子にしない（core.md:43）。
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
  <rect x="40" y="60" width="240" height="200" rx="3" class="box"/><text x="160" y="104" class="t" text-anchor="middle" font-weight="700">Profile</text>
  <text x="160" y="160" class="ts" text-anchor="middle">引き受ける責務の定義</text><text x="160" y="190" class="tx" text-anchor="middle">版を持つ</text>
  <rect x="320" y="60" width="240" height="200" rx="10" class="hl" style="fill:#fff"/><text x="440" y="104" class="t hc" text-anchor="middle" font-weight="700">Cell</text>
  <text x="440" y="160" class="ts" text-anchor="middle">責務を引き受ける主体</text>
  <rect x="600" y="60" width="240" height="200" rx="10" class="box"/><text x="720" y="104" class="t" text-anchor="middle" font-weight="700">Mission</text>
  <text x="720" y="160" class="ts" text-anchor="middle">今回達成する変化・成果</text>
  <path d="M280,160 H316 M560,160 H596" class="ln"/>
  <text x="440" y="320" class="ts sub" text-anchor="middle">Profile は続く責務、Mission は今回の仕事</text>
</svg>
```

Profile は、Cell が引き受ける責務を定める版付きの仕様です。何を成り立たせ、どこまで自分で判断し、外に何を保証し、どう確かめるかを書きます。

出典: EAA Core 版 6 の概念表「Profile」、EAA Profiles「1.」。

## Profile に書くこと

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="120" y="30" width="640" height="290" rx="3" class="box"/>
  <text x="440" y="66" class="t" text-anchor="middle" font-weight="700">Profile に書くこと</text>
  <g class="ts">
    <text x="160" y="112">目的と、責任を負う範囲・負わない範囲</text>
    <text x="160" y="154">業務上の意味と、参照する Ontology</text>
    <text x="160" y="196">要る権限、守る制約と参照する規範</text>
    <text x="160" y="238">提供する能力、依存先、外への保証と Contract</text>
    <text x="160" y="280">成り立ちを示す Evidence、自分で判断できない条件</text>
  </g>
  <text x="440" y="356" class="ts sub" text-anchor="middle">項目名・書き方・必須の欄は、Profiles が未確定にしている</text>
</svg>
```

Profile には、責務の範囲と意味、要る権限と制約、外への保証、成り立ちの確かめ方と、自分で判断できない条件を書きます。

出典: EAA Profiles「3. 責務定義と割当」。項目名・記法・必須項目は次の設計対象とされている。

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
  <rect x="40" y="40" width="380" height="220" rx="3" class="box"/><text x="230" y="76" class="t" text-anchor="middle" font-weight="700">Standard Profile</text>
  <text x="230" y="124" class="ts" text-anchor="middle">EAA が、再利用できる責務として出す</text>
  <text x="230" y="176" class="tx" text-anchor="middle">Platform・Assurance・Migration など</text>
  <rect x="460" y="40" width="380" height="220" rx="3" class="box"/><text x="650" y="76" class="t" text-anchor="middle" font-weight="700">Domain Profile</text>
  <text x="650" y="124" class="ts" text-anchor="middle">企業が、業務の意味・不変条件・責任から書く</text>
  <text x="650" y="176" class="tx" text-anchor="middle">契約・請求・受注・在庫など</text>
  <text x="440" y="310" class="t" text-anchor="middle" font-weight="700">形式も引き受け方も同じ。Cell の種類は分けない</text>
</svg>
```

Standard Profile は EAA が再利用できる形で出し、Domain Profile は企業が業務から書きます。形式は同じで、Cell の種類は分けません。

出典: EAA Profiles「2.」。よそで書かれた Domain Profile を使うときも、自分の企業の意味と条件に合わせる（同）。

## Standard の初期カタログ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="44" font-weight="700">Standard Profile</text><text x="280" y="44" font-weight="700">成り立たせる責務</text>
    <text x="60" y="88">Platform</text><text x="280" y="88">各 Cell が要る共通の基盤を使える</text>
    <text x="60" y="126">Portfolio</text><text x="280" y="126">全体の目的と、投資・資源の配分をつなぐ</text>
    <text x="60" y="164">Supplier</text><text x="280" y="164">契約主体をまたぐ責任と受け入れを成り立たせる</text>
    <text x="60" y="202">Assurance</text><text x="280" y="202">成果を独立した根拠で判定できるようにする</text>
    <text x="60" y="240">Regulated</text><text x="280" y="240">外部の義務を、実行と監査ができる条件にする</text>
    <text x="60" y="278">Migration</text><text x="280" y="278">旧系から新系への移行を成り立たせる</text>
    <text x="60" y="316">Cutover</text><text x="280" y="316">合意した条件と順序で切り替え全体を成り立たせる</text>
  </g>
  <path d="M40,62 H840 M260,24 V330" class="lt"/>
  <text x="440" y="362" class="ts sub" text-anchor="middle">専用の Cell を置いても、元の Cell が担っても、同じ責務</text>
</svg>
```

絵は、EAA が初めに挙げた Standard Profile です。責務を並べたもので、完成したスキーマでも、全部を置くことを求めるものでもありません。

出典: EAA Profiles「6.」。Assurance や Regulated を担う Cell があっても、対象の各 Cell が持つ義務は消えない（同）。

## 書くことと割り当てることは別

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="380" height="250" rx="3" class="box"/><text x="230" y="76" class="t" text-anchor="middle" font-weight="700">Profile の本文</text>
  <g class="ts"><text x="70" y="124">責務の中身</text><text x="70" y="160">要る権限（要求として）</text></g>
  <g class="tx xc"><text x="70" y="216">特定の担当者は書かない</text><text x="70" y="244">特定の Agent 製品は書かない</text></g>
  <rect x="460" y="40" width="380" height="250" rx="10" class="hl" style="fill:#fff"/><text x="650" y="76" class="t hc" text-anchor="middle" font-weight="700">割当</text>
  <g class="ts"><text x="490" y="124">引き受ける Cell・判断責任者</text><text x="490" y="160">資源・対象範囲・採用した版</text><text x="490" y="196">実際に与えられた権限</text></g>
  <text x="440" y="336" class="ts sub" text-anchor="middle">Profile に書いただけでは、権限は生まれない</text>
</svg>
```

Profile の本文には責務と要る権限を書き、担当者や Agent 製品は書きません。誰が引き受け、どの版を採用したかは割当に書きます。

出典: EAA Profiles「3.」、EAA Core 版 6「1.」（記述だけで権限は発生せず、引き受けるには権限・資源・能力の確保を伴う）。

## 判断責任者は責務ごとに置く

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

Core は、責務ごとに担う Cell と正当な判断責任者を明らかにするとしています。在庫連携の責任者が注文画面の判断を決め直すなら、二つの Cell では提案にします。

出典: EAA Core 版 6「1.」。※ 例は説明のために作った。二つなら提案、一つなら責務の責任者が決める、は書き手の読み。上書きしないことは第 4 章。

## 分割は、責務と判断権限を渡すこと

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="380" height="240" rx="10" class="hl" style="fill:#fff"/>
  <text x="230" y="84" class="t hc" text-anchor="middle" font-weight="700">分割</text>
  <g class="ts"><text x="70" y="140">責務を渡す</text><text x="70" y="180">自分で判断する権限も渡す</text></g>
  <use href="#i-ok" x="70" y="220" width="24" height="24"/><text x="104" y="238" class="ts">Cell が増える</text>
  <rect x="460" y="50" width="380" height="240" rx="10" class="xl" style="fill:#fff"/>
  <text x="650" y="84" class="t xc" text-anchor="middle" font-weight="700">分割ではない</text>
  <g class="ts"><text x="490" y="140">責務だけを渡す</text><text x="490" y="180">判断は手元に残す</text></g>
  <use href="#i-no" x="490" y="220" width="24" height="24"/><text x="524" y="238" class="ts">受けた側は毎回問い合わせる</text>
  <text x="440" y="340" class="ts sub" text-anchor="middle">渡す先は責任主体。人一人に限らない</text>
</svg>
```

分割は、責務と、自分で判断する権限を、別の責任主体に渡すことです。Cell が増えるのはこのときで、責務だけを渡して判断を手元に残すのは分割ではありません。

出典: EAA Core 版 6「1. 責務と分割」。一つの Cell の責任を複数の人で負ってもかまわない（同 概念表「Cell に属する」）。

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

出典: EAA Core 版 6「1. 責務と分割」。版の採用は第 8 章で見る。

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

要る Profile を並べてから、同じ Cell で担うか、別の判断責任者の Cell にするかを決めます。Profile 一つに Cell 一つ、は求めません。

出典: EAA Core 版 6「1. 責務と分割」、EAA Profiles「5.」。例は説明のために作った。

## 合わせて担うときに確かめること

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="200" y="20" width="480" height="50" rx="10" class="hl" style="fill:#fff"/><text x="440" y="52" class="ts hc" text-anchor="middle" font-weight="700">一つの Cell が、在庫と発注の Profile を担う</text>
  <path d="M440,74 V96" class="ln" marker-end="url(#arr)"/>
  <g class="ts">
    <rect x="40" y="104" width="250" height="180" rx="6" class="box"/><text x="165" y="140" text-anchor="middle" font-weight="700">責任の空白</text><text x="165" y="190" text-anchor="middle" class="tx">どちらの Profile にも</text><text x="165" y="214" text-anchor="middle" class="tx">書かれていない責務</text>
    <rect x="315" y="104" width="250" height="180" rx="6" class="box"/><text x="440" y="140" text-anchor="middle" font-weight="700">重なる決定権</text><text x="440" y="190" text-anchor="middle" class="tx">同じことを、両方の Profile が</text><text x="440" y="214" text-anchor="middle" class="tx">決めると書いている</text>
    <rect x="590" y="104" width="250" height="180" rx="6" class="box"/><text x="715" y="140" text-anchor="middle" font-weight="700">両立しない保証</text><text x="715" y="190" text-anchor="middle" class="tx">片方を守ると、</text><text x="715" y="214" text-anchor="middle" class="tx">もう片方が守れない</text>
  </g>
  <text x="440" y="336" class="ts sub" text-anchor="middle">制約を守ったうえで、誰が何を引き受けるかを合意する</text>
</svg>
```

一つの Cell が複数の Profile を担うときは、責任の空白、重なる決定権、両立しない保証が無いかを確かめます。そのうえで、誰が何を引き受けるかを合意します。

出典: EAA Profiles「4.」。※ 三つの言い直しは書き手による。分け直すときの空白と重なりは第 10 章で見る。

## ロードで引き受ける

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="240" height="180" rx="3" class="box"/><text x="160" y="104" class="t" text-anchor="middle" font-weight="700">Profile（版 1）</text><text x="160" y="160" class="ts" text-anchor="middle">指定した範囲の責務</text>
  <path d="M284,150 H436" class="ln" marker-end="url(#arr)"/><text x="360" y="140" class="tx" text-anchor="middle">ロード</text>
  <rect x="440" y="60" width="400" height="180" rx="10" class="hl" style="fill:#fff"/><text x="640" y="104" class="t hc" text-anchor="middle" font-weight="700">引き受けた Cell</text>
  <text x="640" y="150" class="ts" text-anchor="middle">要る権限と能力を確保した</text>
  <use href="#i-ok" x="628" y="176" width="24" height="24"/>
  <text x="440" y="296" class="ts" text-anchor="middle">版 2 が出ても、引き受けた Cell には自動で当たらない</text>
  <text x="440" y="334" class="ts sub" text-anchor="middle">解除は、責務の終了か移管。残件と外への保証を処理する</text>
</svg>
```

Cell が Profile を引き受けることをロードと呼び、要る権限と能力を確保したときに成り立ちます。改訂は、既に引き受けた Cell に自動では当たりません。

出典: EAA Profiles「4.」。全体を扱う Cell（Enterprise Cell）が、複数の Profile をまとめて引き受けてもよい（同）。解除の引き継ぎは第 10 章。

## 横断責務も Profile

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="300" height="200" rx="10" class="hl" style="fill:#fff"/><text x="190" y="96" class="t hc" text-anchor="middle" font-weight="700">Platform の Cell</text>
  <text x="190" y="150" class="ts" text-anchor="middle">横断責務の Profile を</text><text x="190" y="176" class="ts" text-anchor="middle">引き受けている</text>
  <rect x="540" y="60" width="300" height="200" rx="10" class="hl" style="fill:#fff"/><text x="690" y="96" class="t hc" text-anchor="middle" font-weight="700">業務の Cell</text>
  <text x="690" y="160" class="ts" text-anchor="middle">受け入れるかを決める</text>
  <path d="M344,130 H536" class="ln" marker-end="url(#arr)"/><text x="440" y="120" class="tx" text-anchor="middle">変更を提案する</text>
  <g opacity=".6"><path d="M344,210 H536" class="xl dash" marker-end="url(#arr-x)"/><use href="#i-no" x="428" y="220" width="24" height="24"/><text x="440" y="202" class="tx xc" text-anchor="middle">直接変える</text></g>
  <text x="440" y="320" class="t" text-anchor="middle" font-weight="700">横断の責務も、相手の中を変える権限を持たない</text>
</svg>
```

複数の Cell にまたがる変更や保証の責務（横断責務）も、Profile に書いて Cell が引き受けます。相手を直接変える権限は持たず、提案して相手が決めます。

出典: EAA Core 版 6 の概念表「横断責務」、EAA Profiles「1.」「7.」。例の続きは第 8 章 p.「基盤の Cell も、PR で提案する」。

## Domain は最初の Mission から

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="480" height="280" rx="3" class="box"/><text x="280" y="66" class="t" text-anchor="middle" font-weight="700">Billing Profile に書くこと</text>
  <g class="ts"><text x="70" y="112">請求・入金・返金の整合性</text><text x="70" y="148">請求する主体の意味</text><text x="70" y="184">確定した請求の扱い</text><text x="70" y="220">Contract 側との責任の境界</text><text x="70" y="256">照合の Evidence</text></g>
  <rect x="560" y="30" width="280" height="130" rx="6" class="soft"/><text x="700" y="86" class="ts" text-anchor="middle">最初の Mission に</text><text x="700" y="112" class="ts" text-anchor="middle">要る範囲だけ書く</text>
  <rect x="560" y="180" width="280" height="130" rx="6" class="xl" style="fill:#fff"/><text x="700" y="236" class="ts" text-anchor="middle">まだ決めていない所を</text><text x="700" y="262" class="ts" text-anchor="middle">権限があることにしない</text>
  <text x="440" y="354" class="ts sub" text-anchor="middle">誰が引き受けるか（元の Cell か、新しい Cell か）は、書いた後に決める</text>
</svg>
```

Domain Profile は、全業務を初日から書かず、最初の Mission に要る範囲を書きます。未確定の所を暗黙の権限にせず、誰が引き受けるかは後で決めます。

出典: EAA Profiles「9.」（Billing の例も同じ節）。先に組織を増やす必要はない（同）。

## 正本は提供する側、採用版は引き受けた側

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="360" height="220" rx="10" class="box"/><text x="220" y="86" class="t" text-anchor="middle" font-weight="700">提供する側</text>
  <rect x="100" y="120" width="240" height="56" rx="3" class="box"/><text x="220" y="154" class="ts" text-anchor="middle">正本（版 1・版 2 …）</text>
  <text x="220" y="226" class="tx" text-anchor="middle">承認済みの古い版は上書きしない</text>
  <rect x="480" y="50" width="360" height="220" rx="10" class="hl" style="fill:#fff"/><text x="660" y="86" class="t hc" text-anchor="middle" font-weight="700">引き受けた側</text>
  <rect x="540" y="120" width="240" height="56" rx="6" class="soft"/><text x="660" y="154" class="ts" text-anchor="middle">採用した版：版 1</text>
  <text x="660" y="226" class="tx" text-anchor="middle">版 2 を公開しただけでは変わらない</text>
  <path d="M536,148 H344" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="326" class="ts sub" text-anchor="middle">変え方の手続きは第 8 章と第 9 章</text>
</svg>
```

Profile の正本は提供する側が持ち、引き受けた側は採用した版を特定します。新しい版を公開しただけでは、採用中の合意は変わりません。

出典: EAA Profiles「4.」。Domain Profile の正本は、出す企業が持つ（同）。手続きは第 8 章 p.「正本の改訂と、採用版の変更を分ける」。

## Core はここまでしか決めていない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="380" height="290" rx="10" class="soft"/>
  <text x="60" y="64" class="t" font-weight="700">決めていること</text>
  <g class="ts"><use href="#i-ok" x="60" y="88" width="22" height="22"/><text x="92" y="105">Profile は版付きの責務の仕様</text>
  <use href="#i-ok" x="60" y="128" width="22" height="22"/><text x="92" y="145">書くことと割り当てることは別</text>
  <use href="#i-ok" x="60" y="168" width="22" height="22"/><text x="92" y="185">分割は責務と判断権限を渡す</text>
  <use href="#i-ok" x="60" y="208" width="22" height="22"/><text x="92" y="225">改訂は採用先に自動で当たらない</text>
  <use href="#i-ok" x="60" y="248" width="22" height="22"/><text x="92" y="265">横断の責務も提案で変える</text></g>
  <rect x="460" y="30" width="380" height="290" rx="10" fill="url(#hatch)"/>
  <text x="480" y="64" class="t" font-weight="700">決めていないこと</text>
  <g class="ts"><text x="480" y="102" class="ts" font-weight="700">Profiles が未確定とした</text><text x="480" y="140" class="ts">Profile の詳しいスキーマ</text><text x="480" y="174" class="ts">責務をさらに分割する手続き</text><text x="480" y="208" class="ts">ロードが済んだことの確かめ方</text><text x="480" y="242" class="ts">分離・再統合の移行の手順</text></g>
  <text x="440" y="356" class="ts sub" text-anchor="middle">Core の自治・権限・Evidence の原則を保ち、具体例から決めていく</text>
</svg>
```

左は Core と Profiles が決めていること、右は Profiles が未確定としたことです。原則は保ったまま、具体例から要る項目を決めるとしています。

出典: EAA Profiles「10. 今後定める仕様」、EAA Core 版 6「1.」。

## 次章へ：Constitution

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="70" width="300" height="200" rx="10" class="hl" style="fill:#fff"/>
  <text x="210" y="106" class="t hc" text-anchor="middle" font-weight="700">Cell</text>
  <text x="210" y="160" class="ts" text-anchor="middle">引き受けた責務（Profile）</text>
  <text x="210" y="196" class="ts" text-anchor="middle">中を決める規範（Constitution）</text>
  <path d="M370,170 H508" class="ln"/><text x="440" y="160" class="tx" text-anchor="middle">つながる</text>
  <rect x="520" y="70" width="300" height="200" rx="10" class="hl" style="fill:#fff"/>
  <text x="670" y="106" class="t hc" text-anchor="middle" font-weight="700">Cell</text>
  <text x="670" y="170" class="ts" text-anchor="middle">中の方式は指定しない</text>
  <text x="440" y="330" class="ts" text-anchor="middle">第 4 章</text>
</svg>
```

第 4 章では、Cell が中を決める規範（Constitution）と、Cell どうしのつながり方（Federation）を見ます。
