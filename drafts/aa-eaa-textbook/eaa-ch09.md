# 第 9 章　EAA の導入

群: 取り決めの改訂と Cell の分け直し
副題: 導入は、境界を越える行き来を記録で見ることから始める

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v7.md（863f5176）の第 9 章。着手: @ope-ultp1635 msg 58cbdf2b（便 3）。本文 GO: @ope-ultp1635 msg d9ab1757、kishibashi3「うん」。
v7 で畳んだ: 5b5aea2 の eaa-ch10.md（EAA の導入、22 ページ）を 8 ページにした。前の字は `git show 5b5aea2:drafts/aa-eaa-textbook/eaa-ch10.md`（それより前の経緯はそのファイルのメモ）。ページごとの行き先と落とした字: writer-ja/drafts/eaa-toc/fold-v7-ledger.md の便 3。
p.「Core が決めていないこと」は新しく書いた。5b5aea2 までの 8 枚の p.「Core はここまでしか決めていない」の右側（Core が冒頭に挙げた既知の不足、Profiles が未決・未確定としたこと、Core に書かれていないこと）を章ごとに 1 行にした（8 枚は v7 の第 3・5・6・7・8・9 章に当たるので 6 行。Contract と Mission は第 5 章、版の公開と採用と改訂の承認は第 7 章の 1 行）。左側（Core が決めていること）は各ページの出典が言うので落とした。逐語の控えは ledger の「便 3 へ持ち越す字」（便 1・便 2）と便 3 の表。既知の不足は Core 冒頭の観測欄の字（core.md:10）を 1 行目にまとめ、各章の行には当たる語だけを置いた。
v7 の表で第 7 章から落としたページ p.「例：所有者本人が提起したら」は、第 7 章の行の「所有者本人が出したい改訂の進め方（承認できる者がいない）」に入れた。
Operator: 第 0〜8 章に Operator の字は無い。p.「判断を規範に書き直していく」の注で Role Model「1.」の字（Core と Profiles が求める判断責任者を人間の Operator が担う）から説明した。
絵: Cell はどれもほかの Cell の枠の外に並べる（core.md:43）。
章番号: この章の本文・注・絵は v7 の章番号（10 章）で書いた。
便 3 の判定（@ope-ultp1635 msg a6251cdc）: p.「例：在庫と物流を Core でつなぐ」の注に、5b5aea2 の eaa-ch10.md:206 の「中の規範に所有者がいない Cell は、採用の前に中の手続きで決める」を戻した（@reader r3 の p.191〜194）。注の上限 90 字に入れるため、同じ注の「在庫と物流の例の続きで、」を「例は仮定。」に、出典の「（適用例）」と「EAA 」3 つを落とした。旧注の参照「（第 9 章）」は付けていない（v7 では第 7 章 p.「改訂は提起者でない人間の所有者が承認する」の絵の「Cell の中の規範の改訂の手続きは、各 Cell が決める」に当たる）。
検算 1 便目と v7 の通読を受けて直した（@ope-ultp1635 msg 9628f0a9。判定の正本 roles-kaz reviewer/feedback-archive/2026-11-09-eaa-textbook-d0dd000-fold-v7-1-core.md、reader/feedback-archive/2026-11-09-eaa-textbook-v7-68p-6readers.md）: p.「判断を規範に書き直していく」に delivery-guide.md:15-16 の条件（人の判断を例外に集める運営では）と断り（人が中心の作り方の Cell に同じ運営を求めない）を戻した（便 3 の「注で足りる」の判定の誤り）。p.「Core が決めていないこと」の本文「導入する Cell は、自分の案件でこれを決めます」は絵の下の行（core.md:71）と閉じないので、一つの Cell で閉じるものとほかの Cell にかかるもので主語を分けた。第 7 章の行「所有者は 1 人」を「Contract の所有者は 1 人」に（core.md:98。所有者を 1 人と決めているのは Contract だけ）。
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
  <g class="tx">
    <text x="60" y="34" font-weight="700">いま残っている記録</text><text x="360" y="34" font-weight="700">境界を越えた行き来</text>
    <text x="60" y="66">チケットの差し戻し</text><text x="360" y="66">追跡番号が無いと物流へ差し戻した</text>
    <text x="60" y="98">ほかのチームへの問い合わせ</text><text x="360" y="98">欠品の理由を電話で聞いた</text>
    <text x="60" y="130">定例会議の議事録</text><text x="360" y="130">出荷指示の変更を、週 1 回承認した</text>
    <text x="60" y="162">PR のコメント</text><text x="360" y="162">相手の事情を聞くまで止めた</text>
  </g>
  <path d="M40,44 H840 M40,76 H840 M40,108 H840 M40,140 H840 M340,16 V172" class="lt"/>
  <text x="440" y="200" class="tx sub" text-anchor="middle">新しく測る仕組みは要らない。いま残っているものを見て、どのあいだで多いかを数える</text>
  <rect x="40" y="220" width="390" height="104" rx="10" class="soft"/>
  <text x="235" y="248" class="ts" text-anchor="middle" font-weight="700">渡すものが書かれていない</text>
  <text x="235" y="274" class="tx" text-anchor="middle">欠品の理由を、毎回電話で聞く</text>
  <text x="235" y="304" class="tx hc" text-anchor="middle" font-weight="700">→ Contract に書く（第 5 章）</text>
  <rect x="450" y="220" width="390" height="104" rx="10" class="soft"/>
  <text x="645" y="248" class="ts" text-anchor="middle" font-weight="700">境界が文脈に合っていない</text>
  <text x="645" y="274" class="tx" text-anchor="middle">書いても、Mission のたびに照会する</text>
  <text x="645" y="304" class="tx hc" text-anchor="middle" font-weight="700">→ 境界を引き直す（第 2・8 章）</text>
  <text x="440" y="356" class="ts sub" text-anchor="middle">まずは左。書けば止まる行き来から始める</text>
</svg>
```

差し戻し・問い合わせ・議事録・PR のコメントから、境界を越えた行き来を数えます。書かれていなければ Contract に書き、境界が合わなければ引き直します。

※ 書き手の読み。表の中身は説明のための仮定。Adoption Guide「10.」の Boundary Wait（境界の間の待ち）が近い観測です。

## 一つのあいだから、中の作り方を残して試す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="middle">
    <rect x="30" y="20" width="110" height="56" rx="10" class="box"/><text x="85" y="54">在庫</text>
    <rect x="290" y="20" width="110" height="56" rx="10" class="box"/><text x="345" y="54">物流</text>
    <rect x="30" y="130" width="110" height="56" rx="10" class="box"/><text x="85" y="164">請求</text>
    <rect x="290" y="130" width="110" height="56" rx="10" class="box"/><text x="345" y="164">店舗</text>
  </g>
  <path d="M140,48 H290" class="hl" style="stroke-width:5"/><text x="215" y="40" class="tx hc" text-anchor="middle" font-weight="700">ここから</text>
  <path d="M85,76 V130 M345,76 V130 M140,158 H290" class="lt dash"/><text x="215" y="150" class="tx" text-anchor="middle">いまのまま</text>
  <text x="215" y="216" class="tx" text-anchor="middle">行き来の一番多いあいだ一本を、</text><text x="215" y="236" class="tx" text-anchor="middle">Contract と Evidence に替える</text>
  <rect x="450" y="10" width="400" height="236" rx="10" class="soft"/>
  <text x="650" y="38" class="ts" text-anchor="middle" font-weight="700">Cell の中の作り方として残す</text>
  <g class="tx" text-anchor="middle"><text x="650" y="72">Scrum</text><text x="650" y="102">ART の中の SAFe の進め方</text><text x="650" y="132">計画型の工程</text><text x="650" y="162">委託先の工程</text><text x="650" y="192">パッケージの導入</text></g>
  <text x="650" y="228" class="tx hc" text-anchor="middle">今の仕事をやめさせず、今の専門性を残る形に変える</text>
  <text x="40" y="276" class="ts" font-weight="700">導入の順序（適用例）</text>
  <g class="tx">
    <text x="40" y="304">記録を見る（この本が足す）</text><text x="250" y="304">→ Core でつなぐ</text><text x="380" y="304">→ 中の作り方を残す</text><text x="540" y="304">→ Evidence を観測する</text>
    <text x="250" y="332">→ 責務を Profile に書き、割り当てる</text><text x="520" y="332">→ 独立した判断が要る所だけ Cell を分ける</text>
    <text x="250" y="360">→ 要らないと確かめた制約だけ外す</text>
  </g>
</svg>
```

最初は、行き来の一番多いあいだ一本だけを Contract と Evidence に替え、ほかは今のままにします。Scrum や委託先の工程は Cell の中に残します。

出典: EAA Adoption Guide「7.」（適用例。原文は「SAFe ART」、Predictive を計画型と書いた）。※ 一番多いあいだから選ぶのは書き手の読み。図の組は仮定。

## 例：在庫と物流を Core でつなぐ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="20" y="10" width="220" height="84" rx="10" class="box"/><text x="130" y="40" class="ts" text-anchor="middle" font-weight="700">在庫の Cell</text><text x="130" y="68" class="tx" text-anchor="middle">中は自社の Scrum のまま</text>
  <rect x="640" y="10" width="220" height="84" rx="10" class="box"/><text x="750" y="40" class="ts" text-anchor="middle" font-weight="700">物流の Cell</text><text x="750" y="68" class="tx" text-anchor="middle">中は委託先の標準工程のまま</text>
  <rect x="270" y="10" width="340" height="84" rx="3" class="hl" style="fill:#fff"/><text x="440" y="36" class="ts hc" text-anchor="middle" font-weight="700">Contract　版 1</text>
  <text x="440" y="60" class="tx" text-anchor="middle">所有者は物流の窓口の責任者</text><text x="440" y="82" class="tx" text-anchor="middle">定例会議で合わせていた中身を書く</text>
  <path d="M240,52 H270 M610,52 H640" class="ln"/>
  <g class="tx">
    <text x="40" y="128" font-weight="700">並べる Profile</text>
    <text x="40" y="152">Domain Profile</text><text x="220" y="152">在庫・物流</text><text x="420" y="152">責任の範囲・権限・保証を書く</text>
    <text x="40" y="176">Standard Profile</text><text x="220" y="176">Supplier</text><text x="420" y="176">委託先が担うなら要る。契約主体をまたぐ責任と受入</text>
    <text x="220" y="200">Platform など</text><text x="420" y="200">要るものだけ。Profile ごとに Cell を作るのではない</text>
  </g>
  <path d="M40,162 H840 M40,186 H840" class="lt"/>
  <g class="tx">
    <text x="40" y="238" font-weight="700">最初に決めること</text><text x="420" y="238" font-weight="700">誰が決めるか</text>
    <text x="40" y="264">どのあいだから始めるか</text><text x="420" y="264">両側の判断の責任者</text>
    <text x="40" y="288">そのあいだの Contract の所有者</text><text x="420" y="288">結ぶ Cell が合意して 1 人</text>
    <text x="40" y="312">各 Cell で Core を採用するか</text><text x="420" y="312">各 Cell の規範の所有者</text>
    <text x="40" y="336">何で受け入れを確かめるか</text><text x="420" y="336">Contract に書く Evidence（出荷結果と突き合わせの記録）</text>
  </g>
  <path d="M40,248 H840 M40,274 H840 M40,298 H840 M40,322 H840" class="lt"/>
  <text x="440" y="368" class="ts sub" text-anchor="middle">所有者と承認者が決まらないあいだは、まだ始められない</text>
</svg>
```

中は在庫が Scrum、物流が委託先の工程のままです。要る Profile を並べ、Contract の所有者、採用の承認者、受け入れの Evidence を先に決めます。

※ 例は仮定。中の規範に所有者がいない Cell は、採用の前に中の手続きで決める。出典: Delivery Guide「4.」、Profiles「6.」、Core 版 6「4.」「6.」。

## Core の採用は Cell ごとに承認する

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="300" y="10" width="280" height="40" rx="3" class="hl" style="fill:#fff"/><text x="440" y="36" class="ts hc" text-anchor="middle" font-weight="700">EAA Core　版 6（公開済み）</text>
  <path d="M370,50 L210,74 M510,50 L670,74" class="ln" marker-end="url(#arr)"/>
  <rect x="40" y="78" width="340" height="80" rx="10" class="box"/><text x="210" y="106" class="ts" text-anchor="middle" font-weight="700">在庫の Cell</text><text x="210" y="134" class="tx" text-anchor="middle">規範の所有者のうち、Core の所有者ではない人間が承認</text>
  <rect x="500" y="78" width="340" height="80" rx="10" class="box"/><text x="670" y="106" class="ts" text-anchor="middle" font-weight="700">物流の Cell</text><text x="670" y="134" class="tx" text-anchor="middle">規範の所有者のうち、Core の所有者ではない人間が承認</text>
  <g class="tx">
    <text x="60" y="190" font-weight="700">記録に書くこと</text><text x="230" y="190" font-weight="700">例：物流の記録</text>
    <text x="60" y="216">承認者と版</text><text x="230" y="216">物流の規範の所有者（名前）・Core 版 6</text>
    <text x="60" y="242">引き受ける拘束</text><text x="230" y="242">少なくとも、所有する共有文書とその所有者：在庫とのあいだの Contract・物流の窓口の責任者</text>
    <text x="60" y="268">採用しない部分と理由</text><text x="230" y="268">無い（無ければ、無いと書く）</text>
  </g>
  <path d="M40,200 H840 M40,226 H840 M40,252 H840" class="lt"/>
  <rect x="40" y="288" width="800" height="80" rx="10" class="soft"/>
  <g class="tx">
    <text x="60" y="312">承認は、承認者がこれを自分の Cell に当てて記録したときに成り立つ。理解しているかは検査しない</text>
    <text x="60" y="334">採用しない部分のうち共有する文書にかかるものは、その文書を共有する Cell に示す</text>
    <text x="60" y="356">記録は採用した Cell が管理し、Core の所有者は書き換えない。承認者を置けない Cell は Core を採用しない</text>
  </g>
</svg>
```

Core を採用するかは Cell ごとに決め、規範の所有者のうち Core の所有者ではない人間が承認します。ふつうの変更の受入権限では決められません。

出典: EAA Core 版 6「6. 本書の採用」「3.」「4.」。※ 記録の中身は説明のための仮定。新しい版の採用も同じ記録をする、は書き手の読み。

## 外すのは、要らないと確かめた制約だけ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="tx">
    <text x="60" y="40" font-weight="700">今の手順にある制約</text><text x="420" y="40" font-weight="700">観測した結果</text><text x="700" y="40" font-weight="700">扱い</text>
    <text x="60" y="76">週 1 回の定例で出荷指示の変更を承認</text><text x="420" y="76">Contract と Evidence で足りた</text><text x="700" y="76" class="okc" font-weight="700">外す</text>
    <text x="60" y="112">委託先の工程の中の出荷前の検品</text><text x="420" y="112">要らないと確かめていない</text><text x="700" y="112" class="hc" font-weight="700">残す</text>
  </g>
  <path d="M40,52 H840 M40,88 H840 M400,20 V126 M680,20 V126" class="lt"/>
  <text x="440" y="160" class="ts" text-anchor="middle">一度に置き換えず、少しずつ置き換える</text>
  <rect x="40" y="190" width="390" height="130" rx="10" class="xl" style="fill:#fff"/>
  <text x="235" y="220" class="ts xc" text-anchor="middle" font-weight="700">避ける形</text>
  <text x="235" y="254" class="tx" text-anchor="middle">定例会議と承認はそのまま</text>
  <text x="235" y="280" class="tx" text-anchor="middle">＋ Contract と採用の記録</text>
  <rect x="450" y="190" width="390" height="130" rx="10" class="hl" style="fill:#fff"/>
  <text x="645" y="220" class="ts hc" text-anchor="middle" font-weight="700">毎回問うこと</text>
  <text x="645" y="254" class="tx" text-anchor="middle">Contract に書いた分、</text>
  <text x="645" y="280" class="tx" text-anchor="middle">どの会議・承認を外せるか</text>
</svg>
```

今の手順の制約は、要らないと確かめたものだけを少しずつ外します。新しい手続きを足したなら、どの会議・承認を外せるかを毎回問います。

出典: EAA Adoption Guide「7.」「12. PoC の Adoption Exit Criteria」（適用例）。※ 表の中身は説明のための仮定です。

## 判断を規範に書き直していく

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="tx" text-anchor="middle">
    <rect x="20" y="10" width="120" height="60" rx="6" class="h"/><text x="80" y="36" class="on">Operator の</text><text x="80" y="56" class="on">判断</text>
    <rect x="160" y="10" width="120" height="60" rx="6" class="soft"/><text x="220" y="36">記録した</text><text x="220" y="56">判断</text>
    <rect x="300" y="10" width="220" height="60" rx="6" class="soft"/><text x="410" y="36">提案して、正当な承認と</text><text x="410" y="56">対象の Cell の受入を得る</text>
    <rect x="540" y="10" width="160" height="60" rx="3" class="hl" style="fill:#fff"/><text x="620" y="36" class="hc">規則・Constitution・</text><text x="620" y="56" class="hc">Contract</text>
    <rect x="720" y="10" width="140" height="60" rx="22" class="a"/><text x="790" y="36" class="on">機械で読む制御</text><text x="790" y="56" class="on">次からは任せる</text>
  </g>
  <path d="M140,40 H156 M280,40 H296 M520,40 H536 M700,40 H716" class="ln"/>
  <text x="440" y="104" class="ts" text-anchor="middle" font-weight="700">人の判断を例外に集める運営では、同じ判断を毎回 Operator がしなくてよくなる</text>
  <rect x="20" y="126" width="270" height="222" rx="10" class="xl" style="fill:#fff"/>
  <text x="155" y="154" class="ts xc" text-anchor="middle" font-weight="700">機械化は、権限の緩和ではない</text>
  <g class="tx" text-anchor="middle"><text x="155" y="186">自分を縛る規範を自分で承認して</text><text x="155" y="206">緩めることとは別</text><text x="155" y="244">ほかの Cell にかかる規範は、</text><text x="155" y="264">提案して所有者の承認と</text><text x="155" y="284">相手の採用を得る</text></g>
  <rect x="305" y="126" width="270" height="222" rx="10" class="soft"/>
  <text x="440" y="154" class="ts" text-anchor="middle" font-weight="700">Operator の仕事</text>
  <g class="tx" text-anchor="middle"><text x="440" y="186">統治の曖昧さを</text><text x="440" y="206">Authority・Constraint・例外に訳す</text><text x="440" y="236">Cell が自律する範囲を、</text><text x="440" y="256">規範と Contract の案にする</text><text x="440" y="290">範囲が決まるのは、</text><text x="440" y="310">案が承認され、採用されたとき</text></g>
  <rect x="590" y="126" width="270" height="222" rx="10" class="soft"/>
  <text x="725" y="154" class="ts" text-anchor="middle" font-weight="700">観測すること</text>
  <g class="tx" text-anchor="middle"><text x="725" y="186">人の判断の件数を減らしながら、</text><text x="725" y="206">成果と安全を保てているか</text><text x="725" y="226">を一緒に観測する</text><text x="725" y="264" class="hc" font-weight="700">依存が減っていくことを</text><text x="725" y="284" class="hc" font-weight="700">成熟と見る</text><text x="725" y="320">判断の件数の多さが価値ではない</text></g>
  <text x="440" y="372" class="ts hc" text-anchor="middle" font-weight="700">人が中心の作り方の Cell に、同じ運営を求めるものではない</text>
</svg>
```

人の判断を例外に集める運営では、Operator はふつうの成果物を一つずつ承認しません。繰り返す判断を、承認と受入を得て規則や Contract にします。

出典: EAA Adoption Guide「6.」、Role Model「1.」「2.」、Delivery Guide「2.」（適用例）。Operator は判断責任者を担う人間の呼び名。

## Core が決めていないこと

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="20" y="8" width="840" height="58" rx="8" class="box"/>
  <text x="36" y="30" class="tx" font-weight="700">既知の不足（Core が冒頭に挙げた。詳しい手順が未定）</text>
  <text x="36" y="52" class="tx">合意不成立・外部の制約の変化・緊急時の調整、移行中の責任、複数の Cell にまたがる変更の互換性・適用順・部分失敗からの復旧</text>
  <g class="tx">
    <text x="36" y="94" font-weight="700">第 3 章</text><text x="120" y="94">既知の不足の移行中の責任。Profiles が未決：スキーマと Template・責務の分割の手続き・ロードの確かめ方</text>
    <text x="120" y="114">分離の引継ぎと移行の手順・外部の義務を履行できないとき・切替時の予期しない不一致と緊急時の手順</text>
    <text x="36" y="144" font-weight="700">第 5 章</text><text x="120" y="144">Core に無い：商取引上の契約書との関係・Mission の記法（書く場所・書式）・欄を埋めるための問い・</text>
    <text x="120" y="164">Contract 更新などを判定する者</text>
    <text x="36" y="194" font-weight="700">第 6 章</text><text x="120" y="194">Core に無い：Evidence の様式に書く項目・共有する Ontology と Evidence の様式の所有者の決め方</text>
    <text x="36" y="224" font-weight="700">第 7 章</text><text x="120" y="224">既知の不足の全部。Core に無い：提起した者と承認した者が別だと記録の上でどう示すか・承認の手続きの細部・</text>
    <text x="120" y="244">所有者本人が出したい改訂の進め方（提起した者は承認せず、Contract の所有者は 1 人なので、承認できる者がいない）</text>
    <text x="36" y="274" font-weight="700">第 8 章</text><text x="120" y="274">既知の不足の移行中の責任。Profiles が未決：引継ぎの詳しい手順・分離と再統合の移行の手順</text>
    <text x="36" y="304" font-weight="700">第 9 章</text><text x="120" y="304">Core に無い：採用の記録の書式と置き場所・採用をやめる手続き・Core の版が違う Cell どうしの扱い・</text>
    <text x="120" y="324">採用しない部分を示した後、同じ Contract で両側が別の規定に従う状態の扱い</text>
  </g>
  <path d="M20,76 H860 M20,128 H860 M20,178 H860 M20,208 H860 M20,258 H860 M20,288 H860 M20,338 H860" class="lt"/>
  <text x="440" y="366" class="ts sub" text-anchor="middle">手順が未定の調整を、ほかの Cell からの一方的な強制で埋めない</text>
</svg>
```

Core と Profiles が決めていないことです。一つの Cell で閉じるものはその Cell が、ほかの Cell にかかるものはかかる Cell と調整して決めます。

出典: EAA Core 版 6 冒頭の観測欄・「2.」、EAA Profiles「5.」「6.」「8.」「9.」「10.」。※ Core の「移行」は版の移行の語。導入の順序と速さは適用例。
