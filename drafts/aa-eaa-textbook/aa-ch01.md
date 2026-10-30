# 第 1 章　板挟み

<!--
試作（絵の形）。未 commit。依頼元 @ope-ultp1635 msg 39d13cfe（kishibashi3「どうしても文章を読ませたいの？ 文章減らせないの？ build にして、各ページに絵を一ついれるくらいにしてほしい」）。
入り方の改訂: @ope-ultp1635 msg 65edc748（kishibashi3「やっぱりベースラインがないから難しいのかな。一般的な ai 駆動開発から始める？」）。いま普通にやっている AI 駆動開発 3 つの形 → 3 つとも同じ輪 → 良い形で描く → そこから板挟みが出る、の順にした。輪（p.4）は本の最後まで描き直して使う（plan §B.4）。
底本: 解説 §1・Principles §2 前提（origin/docs/eaa-working-notes 1dc3935）。旧形の書き出し aa-ch01-opening.md の内容を絵にし直した。
build: ./build.sh → build/aa.html。1 ページ = ## 1 つ。絵はちょうど 1 枚、文は 80 字まで（plan §B.3）。
-->

いま普通にやっている AI 駆動開発から始めます。そこから何が起きるかを見ます。

## 形 1：人が書き、AI が手伝う

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="100" y="112" class="t" text-anchor="end">あなた</text>
  <text x="100" y="212" class="t" text-anchor="end">AI</text>
  <rect x="120" y="80" width="720" height="50" class="h"/>
  <text x="480" y="111" class="ts on" text-anchor="middle">書く・読む・直す</text>
  <rect x="120" y="180" width="720" height="50" class="soft"/>
  <rect x="150" y="180" width="10" height="50" class="a"/><rect x="232" y="180" width="6" height="50" class="a"/><rect x="300" y="180" width="12" height="50" class="a"/><rect x="390" y="180" width="6" height="50" class="a"/><rect x="455" y="180" width="10" height="50" class="a"/><rect x="540" y="180" width="6" height="50" class="a"/><rect x="610" y="180" width="12" height="50" class="a"/><rect x="700" y="180" width="6" height="50" class="a"/><rect x="772" y="180" width="10" height="50" class="a"/>
  <g class="lt"><path d="M155,135 V176 M235,135 V176 M306,135 V176 M393,135 V176 M460,135 V176 M543,135 V176 M616,135 V176 M703,135 V176 M777,135 V176"/></g>
  <text x="480" y="262" class="ts sub" text-anchor="middle">補完・チャット。頼まれたときに、候補を出す</text>
  <text x="440" y="330" class="tl" text-anchor="middle">1 回の大きさ：数行</text>
</svg>
```

IDE の補完やチャットを使う形。いちばん広く使われています。書いたものは、全部あなたが読んでいます。

出典: Google「Inside our 2025 DORA report」（2025-09-23）。約 5,000 人の調査で、AI を使う人は 90%。

## 形 2：課題を渡すと、PR が来る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="20" y="140" width="120" height="70" rx="6" class="h"/><text x="80" y="172" class="t on" text-anchor="middle">課題を</text><text x="80" y="196" class="t on" text-anchor="middle">渡す</text>
  <rect x="180" y="140" width="140" height="70" rx="6" class="a"/><text x="250" y="172" class="t on" text-anchor="middle">エージェント</text><text x="250" y="196" class="t on" text-anchor="middle">が作る</text>
  <use href="#i-pr" x="344" y="150" width="40" height="50"/><text x="364" y="228" class="ts" text-anchor="middle">PR</text>
  <rect x="410" y="140" width="120" height="70" rx="6" class="box"/><text x="462" y="182" class="t" text-anchor="middle">CI</text><use href="#i-ok" x="490" y="163" width="24" height="24"/>
  <rect x="570" y="140" width="150" height="70" rx="6" class="h"/><text x="645" y="172" class="t on" text-anchor="middle">人が</text><text x="645" y="196" class="t on" text-anchor="middle">レビュー</text>
  <rect x="760" y="140" width="100" height="70" rx="6" class="box"/><text x="810" y="182" class="t" text-anchor="middle">merge</text>
  <path d="M140,175 H176" class="ln" marker-end="url(#arr)"/><path d="M320,175 H340" class="ln" marker-end="url(#arr)"/><path d="M388,175 H406" class="ln" marker-end="url(#arr)"/><path d="M530,175 H566" class="ln" marker-end="url(#arr)"/><path d="M720,175 H756" class="ln" marker-end="url(#arr)"/>
  <path d="M645,212 V262 H250 V214" class="hl" marker-end="url(#arr)"/>
  <text x="448" y="286" class="ts hc" text-anchor="middle">直してほしい所をコメントすると、直して返ってくる</text>
  <text x="440" y="340" class="tl" text-anchor="middle">1 回の大きさ：PR 1 本</text>
</svg>
```

課題をエージェントに渡し、来た PR を人がレビューして merge する形。ここ 1〜2 年で広がりました。

出典: GitHub Docs「Reviewing a pull request created by Copilot」。Copilot の PR は、頼んだ人の承認を数えず、別の人の承認が要る。

## 形 3：工程ごとに、AI に作らせる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="t" text-anchor="middle"><text x="125" y="60">要件</text><text x="335" y="60">設計</text><text x="545" y="60">実装</text><text x="755" y="60">テスト</text></g>
  <g class="a"><rect x="50" y="85" width="150" height="56" rx="6"/><rect x="260" y="85" width="150" height="56" rx="6"/><rect x="470" y="85" width="150" height="56" rx="6"/><rect x="680" y="85" width="150" height="56" rx="6"/></g>
  <g class="ts" text-anchor="middle"><text class="on" x="125" y="119">AI が書く</text><text class="on" x="335" y="119">AI が書く</text><text class="on" x="545" y="119">AI が書く</text><text class="on" x="755" y="119">AI が書く</text></g>
  <g class="h"><rect x="50" y="175" width="150" height="56" rx="6"/><rect x="260" y="175" width="150" height="56" rx="6"/><rect x="470" y="175" width="150" height="56" rx="6"/><rect x="680" y="175" width="150" height="56" rx="6"/></g>
  <g class="ts" text-anchor="middle"><text class="on" x="125" y="209">人が確かめる</text><text class="on" x="335" y="209">人が確かめる</text><text class="on" x="545" y="209">人が確かめる</text><text class="on" x="755" y="209">人が確かめる</text></g>
  <path d="M125,141 V171" class="ln" marker-end="url(#arr)"/><path d="M335,141 V171" class="ln" marker-end="url(#arr)"/><path d="M545,141 V171" class="ln" marker-end="url(#arr)"/><path d="M755,141 V171" class="ln" marker-end="url(#arr)"/>
  <path d="M200,203 Q230,203 230,160 Q230,113 256,113" class="ln" marker-end="url(#arr)"/><path d="M410,203 Q440,203 440,160 Q440,113 466,113" class="ln" marker-end="url(#arr)"/><path d="M620,203 Q650,203 650,160 Q650,113 676,113" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="272" class="ts sub" text-anchor="middle">人が確かめてから、次の工程へ渡す</text>
  <text x="440" y="340" class="tl" text-anchor="middle">1 回の大きさ：工程 1 つ</text>
</svg>
```

各工程で AI が書き、人が確かめて次へ渡す形。国内で「AI 駆動開発」と呼ぶとき、多くはこれです。

出典: WEEL「AI駆動開発（AIDD）の定義とは？」（2026-08-24）ほか。どの解説も、最終判断は人が持つとする。

## 3 つとも、同じ輪

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="150" width="120" height="60" rx="6" class="a"/><text x="250" y="186" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="150" width="120" height="60" rx="6" class="box"/><text x="398" y="186" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="168" width="24" height="24"/>
  <rect x="510" y="150" width="140" height="60" rx="6" class="h"/><text x="580" y="186" class="t on" text-anchor="middle">人が確かめる</text>
  <rect x="690" y="150" width="120" height="60" rx="6" class="box"/><text x="750" y="186" class="t" text-anchor="middle">次へ</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M310,180 H346" class="ln" marker-end="url(#arr)"/><path d="M470,180 H506" class="ln" marker-end="url(#arr)"/><path d="M650,180 H686" class="ln" marker-end="url(#arr)"/>
  <path d="M750,210 V280 H90 V214" class="ln" marker-end="url(#arr)"/>
  <text x="420" y="306" class="ts" text-anchor="middle">次の仕事へ</text>
  <rect x="130" y="40" width="620" height="60" rx="8" class="soft"/>
  <text x="440" y="64" class="ts sub" text-anchor="middle">1 周の大きさが違うだけ</text>
  <g class="ts" text-anchor="middle"><text x="240" y="88">形 1：数行</text><text x="440" y="88">形 2：PR 1 本</text><text x="640" y="88">形 3：工程 1 つ</text></g>
</svg>
```

大きさは違っても、AI が作り、人が確かめてから次へ進みます。この本は、この輪を最後まで使います。

## いちばん良い形で描くと

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="150" width="120" height="60" rx="6" class="a"/><text x="250" y="186" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="150" width="120" height="60" rx="6" class="box"/><text x="398" y="186" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="168" width="24" height="24"/>
  <rect x="510" y="150" width="140" height="60" rx="6" class="h"/><text x="580" y="186" class="t on" text-anchor="middle">人が確かめる</text>
  <rect x="690" y="150" width="120" height="60" rx="6" class="box"/><text x="750" y="186" class="t" text-anchor="middle">次へ</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M310,180 H346" class="ln" marker-end="url(#arr)"/><path d="M470,180 H506" class="ln" marker-end="url(#arr)"/><path d="M650,180 H686" class="ln" marker-end="url(#arr)"/>
  <path d="M750,210 V280 H90 V214" class="ln" marker-end="url(#arr)"/>
  <rect x="190" y="40" width="300" height="56" rx="6" fill="#fff" class="al"/>
  <text x="340" y="64" class="ts ac" text-anchor="middle">テストと AI のレビューを先に回し、</text><text x="340" y="86" class="ts ac" text-anchor="middle">人が見る前に落とす</text>
  <path d="M340,96 L400,146" class="lt"/>
  <rect x="520" y="40" width="300" height="56" rx="6" fill="#fff" class="hl"/>
  <text x="670" y="64" class="ts hc" text-anchor="middle">承認するのは、</text><text x="670" y="86" class="ts hc" text-anchor="middle">頼んだ人とは別の人</text>
  <path d="M640,96 L590,146" class="lt"/>
  <use href="#i-ok" x="250" y="318" width="28" height="28"/>
  <text x="290" y="340" class="t">入った変更は、全部だれかが読んでいる</text>
</svg>
```

テストも AI のレビューも先に回し、承認は別の人。弱い形ではありません。よくできた形です。

## 10 周目も、同じ輪

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="t" text-anchor="middle"><text x="300" y="34">1 周目</text><text x="520" y="34">5 周目</text><text x="740" y="34">10 周目</text></g>
  <g class="ts" text-anchor="end"><text x="170" y="150">コード</text><text x="170" y="240">AI への決まり</text><text x="170" y="304">やり方</text></g>
  <path d="M190,198 H850" class="lt"/>
  <rect x="265" y="178" width="70" height="16" class="a"/>
  <rect x="270" y="212" width="60" height="44" rx="3" class="box"/>
  <path d="M278,224 H322" stroke="#555" stroke-width="2"/>
  <rect x="220" y="284" width="34" height="30" rx="4" class="h"/>
  <rect x="262" y="284" width="34" height="30" rx="4" class="a"/>
  <rect x="304" y="284" width="34" height="30" rx="4" class="box"/>
  <rect x="346" y="284" width="34" height="30" rx="4" class="h"/>
  <path d="M254,299 H262 M296,299 H304 M338,299 H346" class="ln"/>
  <rect x="485" y="178" width="70" height="16" class="a"/>
  <rect x="485" y="160" width="70" height="16" class="a"/>
  <rect x="485" y="142" width="70" height="16" class="a"/>
  <rect x="485" y="124" width="70" height="16" class="a"/>
  <rect x="490" y="212" width="60" height="44" rx="3" class="box"/>
  <path d="M498,224 H542" stroke="#555" stroke-width="2"/>
  <path d="M498,233 H542" stroke="#555" stroke-width="2"/>
  <rect x="440" y="284" width="34" height="30" rx="4" class="h"/>
  <rect x="482" y="284" width="34" height="30" rx="4" class="a"/>
  <rect x="524" y="284" width="34" height="30" rx="4" class="box"/>
  <rect x="566" y="284" width="34" height="30" rx="4" class="h"/>
  <path d="M474,299 H482 M516,299 H524 M558,299 H566" class="ln"/>
  <rect x="705" y="178" width="70" height="16" class="a"/>
  <rect x="705" y="160" width="70" height="16" class="a"/>
  <rect x="705" y="142" width="70" height="16" class="a"/>
  <rect x="705" y="124" width="70" height="16" class="a"/>
  <rect x="705" y="106" width="70" height="16" class="a"/>
  <rect x="705" y="88" width="70" height="16" class="a"/>
  <rect x="705" y="70" width="70" height="16" class="a"/>
  <rect x="705" y="52" width="70" height="16" class="a"/>
  <rect x="710" y="212" width="60" height="44" rx="3" class="box"/>
  <path d="M718,224 H762" stroke="#555" stroke-width="2"/>
  <path d="M718,233 H762" stroke="#555" stroke-width="2"/>
  <path d="M718,242 H762" stroke="#555" stroke-width="2"/>
  <rect x="660" y="284" width="34" height="30" rx="4" class="h"/>
  <rect x="702" y="284" width="34" height="30" rx="4" class="a"/>
  <rect x="744" y="284" width="34" height="30" rx="4" class="box"/>
  <rect x="786" y="284" width="34" height="30" rx="4" class="h"/>
  <path d="M694,299 H702 M736,299 H744 M778,299 H786" class="ln"/>
  <path d="M190,272 H850" class="lt"/>
  <text x="520" y="352" class="ts sub" text-anchor="middle">やり方（p.5 の輪：頼む → AI が作る → テスト → 人が確かめる）は毎周同じ</text>
</svg>
```

回すほど、コードは育ちます。決まりのファイルも少し増えます。でも、人が確かめる所は 1 周目と同じです。

※ 説明のために作った絵です。決まりのファイルの例: GitHub Copilot の .github/copilot-instructions.md（GitHub Docs）。

## それでも、AI は待っている

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="100" y="92" class="t" text-anchor="end">AI</text>
  <text x="100" y="192" class="t" text-anchor="end">あなた</text>
  <rect x="120" y="60" width="720" height="50" class="w"/>
  <rect x="120" y="60" width="13.3" height="50" class="a"/><rect x="246.7" y="60" width="13.3" height="50" class="a"/><rect x="393.3" y="60" width="13.3" height="50" class="a"/><rect x="560" y="60" width="13.3" height="50" class="a"/><rect x="706.7" y="60" width="13.3" height="50" class="a"/>
  <rect x="172" y="60" width="4" height="50" class="a"/><rect x="298" y="60" width="4" height="50" class="a"/><rect x="445" y="60" width="4" height="50" class="a"/><rect x="611" y="60" width="4" height="50" class="a"/><rect x="758" y="60" width="4" height="50" class="a"/>
  <text x="505" y="91" class="ts sub" text-anchor="middle">待っている</text>
  <rect x="133.3" y="160" width="706.7" height="50" class="h"/>
  <path d="M174,160 V210 M300,160 V210 M447,160 V210 M613,160 V210 M760,160 V210" stroke="#fff" stroke-width="2"/>
  <text x="530" y="191" class="ts on" text-anchor="middle">読んでいる</text>
  <path d="M120,235 H840" class="ln"/>
  <g class="tx" text-anchor="middle"><text x="120" y="255">9:00</text><text x="200" y="255">10:00</text><text x="280" y="255">11:00</text><text x="360" y="255">12:00</text><text x="440" y="255">13:00</text><text x="520" y="255">14:00</text><text x="600" y="255">15:00</text><text x="680" y="255">16:00</text><text x="760" y="255">17:00</text><text x="840" y="255">18:00</text></g>
  <rect x="120" y="290" width="18" height="18" class="a"/><text x="146" y="305" class="ts">AI が手を動かした時間　合計 55 分</text>
  <rect x="120" y="322" width="18" height="18" class="w"/><text x="146" y="337" class="ts">残りの 8 時間あまり</text>
  <text x="704" y="318" class="ts" text-anchor="end">まだ読んでいない PR</text>
  <use href="#i-pr" x="716" y="292" width="24" height="30"/><use href="#i-pr" x="746" y="292" width="24" height="30"/><use href="#i-pr" x="776" y="292" width="24" height="30"/>
</svg>
```

PR は 10 分で来る。読むのに 30 分。直しは 1 分で来て、また読む。人が承認しないと merge できないからです。

※ 説明のために作った例です。

## AI が 10 倍速くなっても

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="230" y="40" class="ts sub">PR 1 本が merge されるまで（1 周）</text>
  <g class="t" text-anchor="end"><text x="210" y="102">いま</text><text x="210" y="192">AI が 10 倍</text><text x="210" y="282">AI が 100 倍</text></g>
  <rect x="230" y="70" width="88" height="50" class="a"/><text x="274" y="101" class="ts on" text-anchor="middle">AI 11 分</text>
  <rect x="318" y="70" width="480" height="50" class="h"/><text x="558" y="101" class="ts on" text-anchor="middle">人の確認 60 分</text>
  <text x="810" y="102" class="t">71 分</text>
  <rect x="230" y="160" width="8.8" height="50" class="a"/>
  <rect x="238.8" y="160" width="480" height="50" class="h"/><text x="478.8" y="191" class="ts on" text-anchor="middle">人の確認 60 分</text>
  <text x="730" y="192" class="t">61 分</text>
  <rect x="230" y="250" width="2" height="50" class="a"/>
  <rect x="232" y="250" width="480" height="50" class="h"/><text x="472" y="281" class="ts on" text-anchor="middle">人の確認 60 分</text>
  <text x="724" y="282" class="t">60 分</text>
  <text x="440" y="355" class="tl" text-anchor="middle">縮むのは、青だけ</text>
</svg>
```

ループの速さは、いちばん遅い所で決まります。速くなるのは、AI があなたを待つ時間の割合だけです。

## 同じ所で止まっている人は多い

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="80" y="120" style="font-size:64px;font-weight:700" class="hc">85%</text>
  <rect x="80" y="150" width="720" height="56" class="soft"/>
  <rect x="80" y="150" width="612" height="56" class="h"/>
  <path d="M80,150 V214 M800,150 V214" class="lt"/>
  <text x="80" y="234" class="tx">0%</text><text x="800" y="234" class="tx" text-anchor="end">100%</text>
  <text x="80" y="280" class="t">「AI はボトルネックを、コードを書くことから、</text>
  <text x="80" y="312" class="t">　レビューと検証へ移した」に「そう思う」</text>
  <text x="80" y="350" class="ts sub">開発者と技術購買層 1,528 人（6 か国）</text>
</svg>
```

だから正しい、という数字ではありません。同じ所で止まっている人が多い、ということです。

出典: GitLab *AI Accountability Report*（2026）のプレスリリース（2026-06-23）による。調査は The Harris Poll、n=1,528。

## 外せば、速くなる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="150" width="120" height="60" rx="6" class="a"/><text x="250" y="186" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="150" width="120" height="60" rx="6" class="box"/><text x="398" y="186" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="168" width="24" height="24"/>
  <rect x="510" y="150" width="140" height="60" rx="6" class="a"/><text x="580" y="186" class="t on" text-anchor="middle">AI がレビュー</text>
  <rect x="690" y="150" width="120" height="60" rx="6" class="box"/><text x="750" y="186" class="t" text-anchor="middle">次へ</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M310,180 H346" class="ln" marker-end="url(#arr)"/><path d="M470,180 H506" class="ln" marker-end="url(#arr)"/><path d="M650,180 H686" class="ln" marker-end="url(#arr)"/>
  <path d="M750,210 V280 H90 V214" class="ln" marker-end="url(#arr)"/>
  <rect x="510" y="40" width="140" height="56" rx="6" class="hl dash"/>
  <text x="580" y="74" class="t hc" text-anchor="middle">人が確かめる</text>
  <use href="#i-no" x="636" y="26" width="28" height="28"/>
  <text x="580" y="118" class="ts sub" text-anchor="middle">外して、AI に替えた</text>
  <text x="420" y="306" class="ts" text-anchor="middle">次の仕事へ。止まる所が無い</text>
</svg>
```

同じ輪から、人の確認を外して AI のレビューに替える。テストが通れば次へ。本当に速くなります。

## 同じ所で、読み違える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="40" y="34" class="t">頼んだこと：「10 月 1 日から 10 月 31 日」</text>
  <g class="tx" text-anchor="middle"><text x="400" y="86">1〜28 日</text><text x="515" y="86">29 日</text><text x="595" y="86">30 日</text><text x="675" y="86">31 日</text></g>
  <g class="ts" text-anchor="end"><text x="310" y="123">使う人が思っていたこと</text><text x="310" y="183">AI が作った検索</text><text x="310" y="243">AI が書いたテスト</text><text x="310" y="303">AI のレビュー</text></g>
  <rect x="330" y="95" width="140" height="44" class="h"/><rect x="480" y="95" width="70" height="44" class="h"/><rect x="560" y="95" width="70" height="44" class="h"/><rect x="640" y="95" width="70" height="44" class="h"/>
  <rect x="330" y="155" width="140" height="44" class="a"/><rect x="480" y="155" width="70" height="44" class="a"/><rect x="560" y="155" width="70" height="44" class="a"/><rect x="641" y="156" width="68" height="42" class="box"/>
  <rect x="330" y="215" width="140" height="44" class="a"/><rect x="480" y="215" width="70" height="44" class="a"/><rect x="560" y="215" width="70" height="44" class="a"/><rect x="641" y="216" width="68" height="42" class="box"/>
  <rect x="330" y="275" width="140" height="44" class="a"/><rect x="480" y="275" width="70" height="44" class="a"/><rect x="560" y="275" width="70" height="44" class="a"/><rect x="641" y="276" width="68" height="42" class="box"/>
  <rect x="632" y="148" width="86" height="180" rx="8" class="xl dash"/>
  <use href="#i-ok" x="740" y="225" width="24" height="24"/><text x="772" y="243" class="ts okc">全部通る</text>
  <use href="#i-ok" x="740" y="285" width="24" height="24"/><text x="772" y="303" class="ts okc">問題なし</text>
  <text x="675" y="356" class="ts xc" text-anchor="middle">3 つとも、ここが抜けている</text>
</svg>
```

テストを書いたのも、レビューしたのも、作ったのと同じ AI です。だから、同じ所で同じように読み違えます。

## 間違いの上に、速く積む

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="230" y="22" width="300" height="42" rx="6" fill="#fbe9d7" class="hl"/>
  <text x="380" y="50" class="t hc" text-anchor="middle">「31 日のデータが出ない」</text>
  <text x="218" y="50" class="ts sub" text-anchor="end">使う人</text>
  <path d="M150,345 V96" class="ln" marker-end="url(#arr)"/>
  <text x="138" y="230" class="ts sub" text-anchor="end">日が経つ</text>
  <rect x="200" y="300" width="360" height="42" class="x"/><text x="380" y="327" class="ts on" text-anchor="middle">31 日を含めない検索</text>
  <g class="xw" stroke="#c62828" stroke-width="1.5">
    <rect x="200" y="255" width="176" height="40"/><rect x="384" y="255" width="176" height="40"/>
    <rect x="220" y="210" width="102" height="40"/><rect x="329" y="210" width="102" height="40"/><rect x="438" y="210" width="102" height="40"/>
    <rect x="250" y="165" width="126" height="40"/><rect x="384" y="165" width="126" height="40"/>
    <rect x="300" y="120" width="160" height="40"/>
  </g>
  <text x="380" y="145" class="ts sub" text-anchor="middle">その上に積んだ仕事</text>
  <path d="M585,120 H600 V342 H585" class="xl"/>
  <text x="614" y="237" class="t xc">ここまで全部、直すもの</text>
</svg>
```

人が気づくのは、使う人に言われたときです。作るのが速いぶんだけ、間違いも速く増えます。

## 中身の無い仕事も、速く増える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="50" y="50" class="t">1 つの報告の書き直し　55 回</text>
  <text x="50" y="78" class="ts sub">調べ物を任された AI が書いた報告</text>
  <g class="a">
    <rect x="50" y="120" width="11" height="140"/><rect x="64" y="120" width="11" height="140"/><rect x="78" y="120" width="11" height="140"/><rect x="92" y="120" width="11" height="140"/><rect x="106" y="120" width="11" height="140"/><rect x="120" y="120" width="11" height="140"/><rect x="134" y="120" width="11" height="140"/><rect x="148" y="120" width="11" height="140"/><rect x="162" y="120" width="11" height="140"/><rect x="176" y="120" width="11" height="140"/>
    <rect x="190" y="120" width="11" height="140"/><rect x="204" y="120" width="11" height="140"/><rect x="218" y="120" width="11" height="140"/><rect x="232" y="120" width="11" height="140"/><rect x="246" y="120" width="11" height="140"/><rect x="260" y="120" width="11" height="140"/><rect x="274" y="120" width="11" height="140"/><rect x="288" y="120" width="11" height="140"/><rect x="302" y="120" width="11" height="140"/><rect x="316" y="120" width="11" height="140"/>
    <rect x="330" y="120" width="11" height="140"/><rect x="344" y="120" width="11" height="140"/><rect x="358" y="120" width="11" height="140"/><rect x="372" y="120" width="11" height="140"/><rect x="386" y="120" width="11" height="140"/><rect x="400" y="120" width="11" height="140"/><rect x="414" y="120" width="11" height="140"/><rect x="428" y="120" width="11" height="140"/><rect x="442" y="120" width="11" height="140"/><rect x="456" y="120" width="11" height="140"/>
    <rect x="470" y="120" width="11" height="140"/><rect x="484" y="120" width="11" height="140"/><rect x="498" y="120" width="11" height="140"/><rect x="512" y="120" width="11" height="140"/><rect x="526" y="120" width="11" height="140"/><rect x="540" y="120" width="11" height="140"/><rect x="554" y="120" width="11" height="140"/><rect x="568" y="120" width="11" height="140"/><rect x="582" y="120" width="11" height="140"/><rect x="596" y="120" width="11" height="140"/>
    <rect x="610" y="120" width="11" height="140"/>
  </g>
  <g class="w" stroke="#999" stroke-width="1">
    <rect x="624" y="120" width="11" height="140"/><rect x="638" y="120" width="11" height="140"/><rect x="652" y="120" width="11" height="140"/><rect x="666" y="120" width="11" height="140"/><rect x="680" y="120" width="11" height="140"/><rect x="694" y="120" width="11" height="140"/><rect x="708" y="120" width="11" height="140"/>
    <rect x="722" y="120" width="11" height="140"/><rect x="736" y="120" width="11" height="140"/><rect x="750" y="120" width="11" height="140"/><rect x="764" y="120" width="11" height="140"/><rect x="778" y="120" width="11" height="140"/><rect x="792" y="120" width="11" height="140"/><rect x="806" y="120" width="11" height="140"/>
  </g>
  <path d="M624,108 V100 H817 V108" class="xl"/>
  <text x="720" y="62" class="t xc" text-anchor="middle">新しく分かったこと　0</text>
  <text x="720" y="90" class="ts" text-anchor="middle">後ろの 14 回・約 400 行</text>
  <g class="tx" text-anchor="middle"><text x="55" y="282">1 回目</text><text x="615" y="282">41</text><text x="811" y="282">55</text></g>
  <rect x="50" y="312" width="18" height="18" class="a"/><text x="76" y="327" class="ts">41 回目まで</text>
  <rect x="220" y="312" width="18" height="18" class="w"/><text x="246" y="327" class="ts">「届いた頼みごとは、もう古かった」という書き足しだけ</text>
</svg>
```

調べる係・まとめる係と、何体もの AI に仕事を分けて頼み合わせた場で起きたことです。間違いだけではありません。中身の無い仕事も、同じ速さで増えます。

出典: 著者が AI を働かせている場の共通の決まりに、この件を受けて足された理由書き（agent-hub-roles CLAUDE.md、2026-09-21）。

## どちらにいても、挟まれる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="230" height="270" rx="10" fill="#fbe9d7" class="hl"/>
  <text x="155" y="96" class="t" text-anchor="middle" font-weight="700">輪に人を残す</text>
  <use href="#i-wait" x="125" y="130" width="60" height="84"/>
  <text x="155" y="262" class="ts hc" text-anchor="middle">人の速さで止まる</text>
  <rect x="610" y="50" width="230" height="270" rx="10" fill="#f8dddd" class="xl"/>
  <text x="725" y="96" class="t" text-anchor="middle" font-weight="700">輪から人を外す</text>
  <use href="#i-pile" x="685" y="132" width="80" height="80"/>
  <text x="725" y="262" class="ts xc" text-anchor="middle">間違いが速く増える</text>
  <rect x="360" y="145" width="160" height="80" rx="8" class="box"/>
  <text x="440" y="192" class="t" text-anchor="middle">あなたのチーム</text>
  <path d="M276,185 H352" stroke="#555" stroke-width="6" marker-end="url(#arr)"/>
  <path d="M604,185 H528" stroke="#555" stroke-width="6" marker-end="url(#arr)"/>
</svg>
```

あなたのチームは、たぶんもう、どちらかにいます。PR によって、行き来しているかもしれません。

## 線をどこに引いても

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g>
    <use href="#i-pr" x="70" y="110" width="40" height="50"/><use href="#i-pr" x="132" y="110" width="40" height="50"/><use href="#i-pr" x="194" y="110" width="40" height="50"/><use href="#i-pr" x="256" y="110" width="40" height="50"/><use href="#i-pr" x="318" y="110" width="40" height="50"/>
    <use href="#i-pr" x="380" y="110" width="40" height="50"/><use href="#i-pr" x="442" y="110" width="40" height="50"/><use href="#i-pr" x="504" y="110" width="40" height="50"/><use href="#i-pr" x="566" y="110" width="40" height="50"/><use href="#i-pr" x="628" y="110" width="40" height="50"/><use href="#i-pr" x="690" y="110" width="40" height="50"/><use href="#i-pr" x="752" y="110" width="40" height="50"/>
  </g>
  <g>
    <use href="#i-wait" x="80" y="185" width="20" height="28"/><use href="#i-wait" x="142" y="185" width="20" height="28"/><use href="#i-wait" x="204" y="185" width="20" height="28"/><use href="#i-wait" x="266" y="185" width="20" height="28"/><use href="#i-wait" x="328" y="185" width="20" height="28"/>
    <use href="#i-pile" x="386" y="185" width="28" height="28"/><use href="#i-pile" x="448" y="185" width="28" height="28"/><use href="#i-pile" x="510" y="185" width="28" height="28"/><use href="#i-pile" x="572" y="185" width="28" height="28"/><use href="#i-pile" x="634" y="185" width="28" height="28"/><use href="#i-pile" x="696" y="185" width="28" height="28"/><use href="#i-pile" x="758" y="185" width="28" height="28"/>
  </g>
  <path d="M369,70 V300" class="ln dash"/>
  <text x="214" y="60" class="ts" text-anchor="middle">「大事だから見る」PR</text>
  <text x="586" y="60" class="ts" text-anchor="middle">見ない PR</text>
  <text x="214" y="250" class="t hc" text-anchor="middle">止まる</text>
  <text x="586" y="250" class="t xc" text-anchor="middle">増える</text>
  <path d="M300,330 H438" class="ln" marker-start="url(#arr)" marker-end="url(#arr)"/>
  <text x="369" y="360" class="ts sub" text-anchor="middle">線を動かしても、どちらかになる</text>
</svg>
```

「大事な PR だけ見る」は、あいだを取った答えに見えます。でも、1 本ずつ見ると、どの PR もどちらかの側にいます。

## 待っていても、消えない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="40" y="44" class="ts" font-weight="700">人が見る側：1 周のうち、AI が待つ割合</text>
  <g class="ts" text-anchor="end"><text x="150" y="113">いま</text><text x="150" y="173">AI が 10 倍</text><text x="150" y="233">AI が 100 倍</text></g>
  <rect x="160" y="88" width="212.5" height="36" class="h"/><text x="380" y="113" class="ts">85%</text>
  <rect x="160" y="148" width="245" height="36" class="h"/><text x="380" y="173" class="ts on" text-anchor="end">98%</text>
  <rect x="160" y="208" width="249.5" height="36" class="h"/><text x="380" y="233" class="ts on" text-anchor="end">99.8%</text>
  <path d="M160,80 V256" class="ln"/>
  <text x="470" y="44" class="ts" font-weight="700">人が見ない側：同じ日に積む間違い（いまを 1）</text>
  <g class="ts" text-anchor="end"><text x="570" y="113">いま</text><text x="570" y="173">AI が 10 倍</text><text x="570" y="233">AI が 100 倍</text></g>
  <rect x="580" y="88" width="2.8" height="36" class="x"/><text x="590" y="113" class="ts">1</text>
  <rect x="580" y="148" width="28" height="36" class="x"/><text x="616" y="173" class="ts">10</text>
  <rect x="580" y="208" width="280" height="36" class="x"/><text x="852" y="233" class="ts on" text-anchor="end">100</text>
  <path d="M580,80 V256" class="ln"/>
  <text x="440" y="320" class="tl" text-anchor="middle">AI が速くなるほど、どちらも強くなる</text>
</svg>
```

AI が賢く速くなるのを待っても、この板挟みは消えません。

※ 左は p.9 の数字（AI 11 分・人 60 分）から出した。60 ÷ 71 で 85%。p.10 の 85%（調査の数字）とは別の数字で、たまたま同じ値。右は、間違える割合が変わらないとした場合。

## なぜ挟まれるのか：全部は見られない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g>
    <use href="#i-pr" x="40" y="70" width="32" height="40"/><use href="#i-pr" x="90" y="70" width="32" height="40"/><use href="#i-pr" x="140" y="70" width="32" height="40"/><use href="#i-pr" x="190" y="70" width="32" height="40"/><use href="#i-pr" x="240" y="70" width="32" height="40"/>
    <use href="#i-pr" x="40" y="130" width="32" height="40"/><use href="#i-pr" x="90" y="130" width="32" height="40"/><use href="#i-pr" x="140" y="130" width="32" height="40"/><use href="#i-pr" x="190" y="130" width="32" height="40"/><use href="#i-pr" x="240" y="130" width="32" height="40"/>
    <use href="#i-pr" x="40" y="190" width="32" height="40"/><use href="#i-pr" x="90" y="190" width="32" height="40"/><use href="#i-pr" x="140" y="190" width="32" height="40"/><use href="#i-pr" x="190" y="190" width="32" height="40"/><use href="#i-pr" x="240" y="190" width="32" height="40"/>
    <use href="#i-pr" x="40" y="250" width="32" height="40"/><use href="#i-pr" x="90" y="250" width="32" height="40"/><use href="#i-pr" x="140" y="250" width="32" height="40"/><use href="#i-pr" x="190" y="250" width="32" height="40"/><use href="#i-pr" x="240" y="250" width="32" height="40"/>
  </g>
  <path d="M300,55 L560,150 V230 L300,315 Z" fill="#eee" stroke="#bbb" stroke-width="1.5"/>
  <rect x="560" y="150" width="120" height="80" class="h"/>
  <text x="620" y="196" class="t on" text-anchor="middle">人の判断</text>
  <use href="#i-pr" x="710" y="170" width="32" height="40"/>
  <path d="M686,190 H704" class="ln" marker-end="url(#arr)"/>
  <text x="160" y="335" class="ts" text-anchor="middle">実行は安く、速い。いくらでも出る</text>
  <text x="726" y="250" class="ts" text-anchor="middle">通れる量</text>
</svg>
```

実行が安いから、何度でも試せる。何度でも試せるから、人が全部は見られない。

## なぜ挟まれるのか：同じ穴が並ぶ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="345" y="10" width="250" height="36" rx="6" class="a"/>
  <text x="470" y="34" class="ts on" text-anchor="middle">同じ AI から出た 3 つ</text>
  <path d="M400,46 L330,70 M470,46 V70 M540,46 L610,70" class="lt"/>
  <g fill="#dbe7f5" stroke="#2f6fb3" stroke-width="2">
    <rect x="300" y="70" width="60" height="240" rx="8"/><rect x="440" y="70" width="60" height="240" rx="8"/><rect x="580" y="70" width="60" height="240" rx="8"/>
  </g>
  <g fill="#fff" stroke="#2f6fb3" stroke-width="1.5">
    <ellipse cx="330" cy="115" rx="16" ry="12"/><ellipse cx="330" cy="200" rx="18" ry="14"/><ellipse cx="330" cy="272" rx="14" ry="11"/>
    <ellipse cx="470" cy="140" rx="15" ry="12"/><ellipse cx="470" cy="200" rx="18" ry="14"/><ellipse cx="470" cy="255" rx="14" ry="11"/>
    <ellipse cx="610" cy="105" rx="14" ry="11"/><ellipse cx="610" cy="200" rx="18" ry="14"/><ellipse cx="610" cy="285" rx="15" ry="11"/>
  </g>
  <path d="M140,200 H820" stroke="#c62828" stroke-width="4" marker-end="url(#arr-x)"/>
  <text x="140" y="186" class="ts xc">31 日の読み違い</text>
  <text x="830" y="186" class="ts xc" text-anchor="end">通り抜ける</text>
  <g class="ts" text-anchor="middle"><text x="330" y="338">作る</text><text x="470" y="338">テストを書く</text><text x="610" y="338">レビュー</text></g>
</svg>
```

出力はばらつく。でも、同じ元から出たものは、同じ所に穴がある。31 日の件はこれでした。

## なぜ挟まれるのか：使ったぶんは戻らない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="60" y="44" class="ts sub">使える実行の総量（AI を動かす計算と費用。上限がある）</text>
  <text x="60" y="88" class="ts">間違いが無かったら</text>
  <rect x="60" y="100" width="760" height="60" class="box"/>
  <rect x="61" y="101" width="300" height="58" class="a"/><text x="211" y="137" class="ts on" text-anchor="middle">進んだぶん</text>
  <text x="590" y="137" class="ts sub" text-anchor="middle">残り</text>
  <text x="60" y="218" class="ts">間違った方向に流したら</text>
  <rect x="60" y="230" width="760" height="60" class="box"/>
  <rect x="61" y="231" width="300" height="58" class="a"/><text x="211" y="267" class="ts on" text-anchor="middle">進んだぶん</text>
  <rect x="361" y="231" width="170" height="58" class="x"/><text x="446" y="267" class="ts on" text-anchor="middle">間違った方向</text>
  <rect x="531" y="231" width="170" height="58" class="xw"/><text x="616" y="267" class="ts xc" text-anchor="middle">直すのに使う</text>
  <text x="760" y="267" class="ts sub" text-anchor="middle">残り</text>
  <path d="M361,300 V310 H701 V300" class="xl"/>
  <text x="531" y="336" class="ts xc" text-anchor="middle">あとで使えたはずの量から引かれる</text>
</svg>
```

実行の総量には上限がある。だから、人を外して速く回すことにも、値段がつきます。

## 条文では、前提の 3 文にある

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="800" height="230" rx="10" class="soft"/>
  <text x="70" y="98" class="ts sub">AA（Agentic Agile。この本が説明する開発のやり方）の条文　§2 前提（全文）</text>
  <text x="70" y="150" style="font-size:22px" textLength="440" lengthAdjust="spacingAndGlyphs">実行は安く、速いが、総量には上限がある。</text>
  <text x="70" y="205" style="font-size:22px" textLength="462" lengthAdjust="spacingAndGlyphs">希少なのは人間の判断と、実行の総量である。</text>
  <text x="70" y="260" style="font-size:22px" textLength="616" lengthAdjust="spacingAndGlyphs">出力は確率的にばらつき、同じ生成元は同じ誤りを共有する。</text>
  <path d="M70,158 H246" class="al"/><text x="248" y="176" class="tx" text-anchor="end">p.18 全部は見られない</text>
  <path d="M290,158 H488" class="xl"/><text x="488" y="176" class="tx" text-anchor="end">p.20 使ったぶんは戻らない</text>
  <path d="M180,213 H290" class="hl"/><text x="290" y="231" class="tx" text-anchor="end">p.18 全部は見られない</text>
  <path d="M334,268 H664" class="al"/><text x="664" y="286" class="tx" text-anchor="end">p.19 同じ穴が並ぶ</text>
</svg>
```

この本が説明するやり方を AA（Agentic Agile）と呼びます。この章で見た板挟みは、AA の条文では、この 3 文に入っています。

## この本が書くこと

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="160" width="150" height="60" rx="8" class="box"/>
  <text x="115" y="197" class="t" text-anchor="middle">板挟み</text>
  <path d="M190,180 L380,85" class="ln" marker-end="url(#arr)"/><path d="M190,190 H380" class="ln" marker-end="url(#arr)"/><path d="M190,200 L380,295" class="ln" marker-end="url(#arr)"/>
  <rect x="385" y="55" width="270" height="56" rx="8" fill="#fff" stroke="#bbb" stroke-width="2" class="dash"/>
  <text x="520" y="90" class="t sub" text-anchor="middle">人がもっと速く読む</text>
  <rect x="385" y="162" width="270" height="56" rx="8" fill="#fff" stroke="#bbb" stroke-width="2" class="dash"/>
  <text x="520" y="197" class="t sub" text-anchor="middle">AI が賢くなるのを待つ</text>
  <text x="680" y="90" class="ts sub">この本の答えではない</text>
  <text x="680" y="197" class="ts sub">この本の答えではない</text>
  <rect x="385" y="268" width="270" height="56" rx="8" class="al" stroke-width="4"/>
  <text x="520" y="303" class="t ac" text-anchor="middle" font-weight="700">第 2 章　ほどき方</text>
  <path d="M655,296 H700" class="ln dash" marker-end="url(#arr)"/>
  <rect x="705" y="268" width="150" height="56" rx="8" fill="#fff" class="al"/>
  <text x="780" y="303" class="ts ac" text-anchor="middle">第 9 章　輪が育つ</text>
</svg>
```

この本は、板挟みのほどき方と、回すほど人を待たなくなる輪を書きます。各章で、はじめの輪を描き直して比べます。
