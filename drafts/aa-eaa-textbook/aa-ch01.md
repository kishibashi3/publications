# 第 1 章　問題の発見

> 人がレビューすると遅く、外すと間違いが増える

<!-- 扉の絵（@ope-ultp1635 msg f0419ae4）: 章全体の主張 1 つ。本文の絵の使い回しはしない -->
```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <path d="M150,30 V250 H790" class="ln"/>
  <path d="M160,62 C 330,70 560,190 780,228" fill="none" stroke="#b5b5b5" stroke-width="7"/>
  <path d="M160,228 C 380,190 610,70 780,62" fill="none" stroke="#c62828" stroke-width="7"/>
  <use href="#i-wait" x="96" y="42" width="30" height="42"/>
  <text x="200" y="50" class="t" font-weight="700">待ち</text>
  <use href="#i-pile" x="800" y="38" width="44" height="44"/>
  <text x="680" y="50" class="t xc" font-weight="700">間違い</text>
  <text x="150" y="278" class="ts hc" text-anchor="middle">人が全部見る</text>
  <text x="790" y="278" class="ts" text-anchor="middle">人が見ない</text>
  <path d="M330,272 H600" class="ln" marker-end="url(#arr)"/>
  <text x="465" y="294" class="tx" text-anchor="middle">人のレビューを減らす</text>
  <rect x="352" y="196" width="236" height="28" fill="#fff"/><text x="470" y="216" class="ts sub" text-anchor="middle">どこに置いても、どちらかが残る</text>
</svg>
```

<!--
試作（絵の形）。未 commit。依頼元 @ope-ultp1635 msg 39d13cfe（kishibashi3「どうしても文章を読ませたいの？ 文章減らせないの？ build にして、各ページに絵を一ついれるくらいにしてほしい」）。
入り方の改訂: @ope-ultp1635 msg 65edc748（kishibashi3「やっぱりベースラインがないから難しいのかな。一般的な ai 駆動開発から始める？」）。いま普通にやっている AI 駆動開発 3 つの形 → 3 つとも同じ輪 → 良い形で描く → そこから板挟みが出る、の順にした。輪（p.3）は本の最後まで描き直して使う（plan §B.4）。
第 14 版（plan §F, @ope-ultp1635 msg 467fb7b2）で読み手を上げ、言い換えを戻し p.1〜3・4〜5・7〜8 を畳んだ。
第 17 版（plan 冒頭, @ope-ultp1635 msg ad92916c）で「AA とは」を第 0 章（aa-ch00.md）へ出し、このページ（通し p.19）を「AA の目的＝板挟みへの答え」に改題。第 0 章で 2 ページ増えたので、本文の通し番号の参照を全章 +2 した。
build: ./build.sh → build/aa.html。1 ページ = ## 1 つ。絵はちょうど 1 枚、文は 80 字まで（plan §B.3）。
-->

いま普通にやっている AI 駆動開発から始めます。そこから何が起きるかを見ます。

## よくある 3 つの形：補完・PR・工程ごと

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M295,30 V320 M585,30 V320" class="lt dash"/>
  <g class="t" text-anchor="middle" font-weight="700"><text x="150" y="40">1　補完・チャット</text><text x="440" y="40">2　エージェントが PR</text><text x="730" y="40">3　工程ごとに AI</text></g>
  <text x="40" y="86" class="ts">あなた</text>
  <rect x="40" y="94" width="220" height="40" class="h"/><text x="150" y="120" class="ts on" text-anchor="middle">書く・読む・直す</text>
  <text x="40" y="176" class="ts">AI</text>
  <rect x="40" y="184" width="220" height="40" class="soft"/>
  <rect x="58" y="184" width="8" height="40" class="a"/><rect x="100" y="184" width="5" height="40" class="a"/><rect x="140" y="184" width="9" height="40" class="a"/><rect x="185" y="184" width="5" height="40" class="a"/><rect x="225" y="184" width="8" height="40" class="a"/>
  <g class="lt"><path d="M62,138 V180 M102,138 V180 M144,138 V180 M187,138 V180 M229,138 V180"/></g>
  <text x="150" y="256" class="ts sub" text-anchor="middle">頼まれたときに候補を出す</text>
  <rect x="350" y="62" width="180" height="36" rx="6" class="h"/><text x="440" y="86" class="ts on" text-anchor="middle">課題を渡す</text>
  <rect x="350" y="114" width="180" height="36" rx="6" class="a"/><text x="440" y="138" class="ts on" text-anchor="middle">エージェントが作る</text>
  <rect x="350" y="166" width="180" height="36" rx="6" class="box"/><text x="430" y="190" class="ts" text-anchor="middle">PR・CI</text><use href="#i-ok" x="474" y="173" width="22" height="22"/>
  <rect x="350" y="218" width="180" height="36" rx="6" class="h"/><text x="440" y="242" class="ts on" text-anchor="middle">人がレビュー</text>
  <rect x="350" y="270" width="180" height="36" rx="6" class="box"/><text x="440" y="294" class="ts" text-anchor="middle">merge</text>
  <path d="M440,98 V111" class="ln" marker-end="url(#arr)"/><path d="M440,150 V163" class="ln" marker-end="url(#arr)"/><path d="M440,202 V215" class="ln" marker-end="url(#arr)"/><path d="M440,254 V267" class="ln" marker-end="url(#arr)"/>
  <path d="M530,236 H556 V132 H534" class="hl" marker-end="url(#arr)"/>
  <g class="ts" text-anchor="start"><text x="600" y="86">要件</text><text x="600" y="146">設計</text><text x="600" y="206">実装</text><text x="600" y="266">テスト</text></g>
  <g class="a"><rect x="652" y="64" width="96" height="34" rx="5"/><rect x="652" y="124" width="96" height="34" rx="5"/><rect x="652" y="184" width="96" height="34" rx="5"/><rect x="652" y="244" width="96" height="34" rx="5"/></g>
  <g class="h"><rect x="760" y="64" width="96" height="34" rx="5"/><rect x="760" y="124" width="96" height="34" rx="5"/><rect x="760" y="184" width="96" height="34" rx="5"/><rect x="760" y="244" width="96" height="34" rx="5"/></g>
  <g class="ts on" text-anchor="middle"><text x="700" y="87">AI が書く</text><text x="700" y="147">AI が書く</text><text x="700" y="207">AI が書く</text><text x="700" y="267">AI が書く</text><text x="808" y="87">人が確認</text><text x="808" y="147">人が確認</text><text x="808" y="207">人が確認</text><text x="808" y="267">人が確認</text></g>
  <path d="M808,98 L708,120" class="ln" marker-end="url(#arr)"/><path d="M808,158 L708,180" class="ln" marker-end="url(#arr)"/><path d="M808,218 L708,240" class="ln" marker-end="url(#arr)"/>
  <g class="t" text-anchor="middle"><text x="150" y="352">1 周：数行</text><text x="440" y="352">1 周：PR 1 本</text><text x="730" y="352">1 周：工程 1 つ</text></g>
</svg>
```

補完は最も広く使われ、PR を出すエージェントはここ 1〜2 年で広がりました。国内で「AI 駆動開発」と呼ぶときは、多くが 3 です。

出典: 1 は DORA 2025 報告（AI 利用 90%）、2 は GitHub Docs（Copilot の PR）、3 は WEEL「AI駆動開発（AIDD）の定義とは？」（2026-08-24）。

## 3 つとも同じ輪：最後は人が approve

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="150" width="120" height="60" rx="6" class="a"/><text x="250" y="186" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="150" width="120" height="60" rx="6" class="box"/><text x="398" y="186" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="168" width="24" height="24"/>
  <rect x="510" y="150" width="140" height="60" rx="6" class="h"/><text x="580" y="186" class="t on" text-anchor="middle">人が approve</text>
  <rect x="690" y="150" width="120" height="60" rx="6" class="box"/><text x="750" y="186" class="t" text-anchor="middle">merge</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M310,180 H346" class="ln" marker-end="url(#arr)"/><path d="M470,180 H506" class="ln" marker-end="url(#arr)"/><path d="M650,180 H686" class="ln" marker-end="url(#arr)"/>
  <path d="M750,210 V280 H90 V214" class="ln" marker-end="url(#arr)"/>
  <text x="420" y="306" class="ts" text-anchor="middle">次の仕事へ</text>
  <rect x="190" y="40" width="300" height="56" rx="6" fill="#fff" class="al"/>
  <text x="340" y="64" class="ts ac" text-anchor="middle">CI のテストと AI レビューを先に回し、</text><text x="340" y="86" class="ts ac" text-anchor="middle">人が見る前に落とす</text>
  <path d="M340,96 L400,146" class="lt"/>
  <rect x="520" y="40" width="300" height="56" rx="6" fill="#fff" class="hl"/>
  <text x="670" y="64" class="ts hc" text-anchor="middle">approve するのは、</text><text x="670" y="86" class="ts hc" text-anchor="middle">作成者とは別の人</text>
  <path d="M640,96 L590,146" class="lt"/>
  <use href="#i-ok" x="250" y="318" width="28" height="28"/>
  <text x="290" y="340" class="t">merge した変更は、全部だれかが読んでいる</text>
</svg>
```

3 つとも、1 周の大きさが違うだけの同じ輪です。テストも AI レビューも先に回し、approve は別の人。この本はこの輪を最後まで使います。

## 10 周回しても、人が見る所は同じ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="t" text-anchor="middle"><text x="300" y="34">1 周目</text><text x="520" y="34">5 周目</text><text x="740" y="34">10 周目</text></g>
  <g class="ts" text-anchor="end"><text x="170" y="150">コード</text><text x="170" y="240">指示ファイル</text><text x="170" y="304">やり方</text></g>
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
  <text x="520" y="352" class="ts sub" text-anchor="middle">やり方（p.6 の輪：頼む → AI が作る → テスト → 人が approve）は毎周同じ</text>
</svg>
```

回すほどコードは育ち、指示ファイルも少し増えます。でも、人がレビューする所は 1 周目と同じです。

※ 説明のために作った絵です。指示ファイルの例: GitHub Copilot の .github/copilot-instructions.md（GitHub Docs）。

## 律速はレビュー 60 分：AI 10 倍でも同じ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="230" y="40" class="ts sub">PR 1 本が merge されるまで（1 周）</text>
  <g class="t" text-anchor="end"><text x="210" y="102">いま</text><text x="210" y="192">AI が 10 倍</text><text x="210" y="282">AI が 100 倍</text></g>
  <rect x="230" y="70" width="88" height="50" class="a"/><text x="274" y="101" class="ts on" text-anchor="middle">AI 11 分</text>
  <rect x="318" y="70" width="480" height="50" class="h"/><text x="558" y="101" class="ts on" text-anchor="middle">人のレビュー 60 分</text>
  <text x="810" y="102" class="t">71 分</text>
  <rect x="230" y="160" width="8.8" height="50" class="a"/>
  <rect x="238.8" y="160" width="480" height="50" class="h"/><text x="478.8" y="191" class="ts on" text-anchor="middle">人のレビュー 60 分</text>
  <text x="730" y="192" class="t">61 分</text>
  <rect x="230" y="250" width="2" height="50" class="a"/>
  <rect x="232" y="250" width="480" height="50" class="h"/><text x="472" y="281" class="ts on" text-anchor="middle">人のレビュー 60 分</text>
  <text x="724" y="282" class="t">60 分</text>
  <text x="440" y="355" class="tl" text-anchor="middle">縮むのは、青だけ</text>
</svg>
```

PR は 10 分で来て、レビューと直しの往復に 60 分。AI が 10 倍速くなっても、縮むのは AI の時間だけです。

※ 説明のために作った数字です。AI 11 分は、PR を作る 10 分と直し 1 分。

## 調査：85% が「ボトルネックはレビュー」

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

## 人のレビューを AI レビューに替えると速い

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
  <text x="580" y="74" class="t hc" text-anchor="middle">人の approve</text>
  <use href="#i-no" x="636" y="26" width="28" height="28"/>
  <text x="580" y="118" class="ts sub" text-anchor="middle">外して、AI レビューに替えた</text>
  <text x="420" y="306" class="ts" text-anchor="middle">次の仕事へ。止まる所が無い</text>
</svg>
```

同じ輪から人の approve を外し、AI のレビューに替える。CI が通れば merge。本当に速くなります。

## 同じ AI が実装もレビューも：同じ所を誤る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="40" y="34" class="t">頼んだこと：「10 月 1 日から 10 月 31 日」</text>
  <g class="tx" text-anchor="middle"><text x="400" y="86">1〜28 日</text><text x="515" y="86">29 日</text><text x="595" y="86">30 日</text><text x="675" y="86">31 日</text></g>
  <g class="ts" text-anchor="end"><text x="310" y="123">ユーザーが思っていたこと</text><text x="310" y="183">AI が書いたクエリ</text><text x="310" y="243">AI が書いたテスト</text><text x="310" y="303">AI のレビュー</text></g>
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

テストを書いたのも、レビューしたのも、実装したのと同じ AI です。だから、同じ所で同じように読み違えます。

## 人を外すと、バグも速く積み上がる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="230" y="22" width="300" height="42" rx="6" fill="#fbe9d7" class="hl"/>
  <text x="380" y="50" class="t hc" text-anchor="middle">「31 日のデータが出ない」</text>
  <text x="218" y="50" class="ts sub" text-anchor="end">ユーザー</text>
  <path d="M150,345 V96" class="ln" marker-end="url(#arr)"/>
  <text x="138" y="230" class="ts sub" text-anchor="end">日が経つ</text>
  <rect x="200" y="300" width="360" height="42" class="x"/><text x="380" y="327" class="ts on" text-anchor="middle">31 日を含めないクエリ</text>
  <g class="xw" stroke="#c62828" stroke-width="1.5">
    <rect x="200" y="255" width="176" height="40"/><rect x="384" y="255" width="176" height="40"/>
    <rect x="220" y="210" width="102" height="40"/><rect x="329" y="210" width="102" height="40"/><rect x="438" y="210" width="102" height="40"/>
    <rect x="250" y="165" width="126" height="40"/><rect x="384" y="165" width="126" height="40"/>
    <rect x="300" y="120" width="160" height="40"/>
  </g>
  <text x="380" y="145" class="ts sub" text-anchor="middle">その上に積んだ PR</text>
  <path d="M585,120 H600 V342 H585" class="xl"/>
  <text x="614" y="237" class="t xc">ここまで全部、直すもの</text>
</svg>
```

人が気づくのは、ユーザーに言われたときです。作るのが速いぶんだけ、バグも速く積み上がります。

## 実例：調査 AI の報告 55 版、14 版は無駄

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="50" y="50" class="t">1 つの報告の書き直し　55 回</text>
  <text x="50" y="78" class="ts sub">調査担当のエージェントが書いた報告</text>
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

役割を分けた複数のエージェントが、互いに依頼し合う場で起きたことです。間違いだけでなく、中身の無い仕事も同じ速さで増えます。

出典: 著者が AI を働かせている場の共通の決まりに、この件を受けて足された理由書き（agent-hub-roles CLAUDE.md、2026-09-21）。

## 人が見れば遅く、外せば間違いが増える

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

## 「大事な PR だけ人が見る」も解決しない

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

※ p.2 の「選んだ所だけ人」とは別です。p.2 では見ない PR も作成者以外の AI が判定し（第 2 章）、人が見るのは大事さでなく、revert できない操作と AI の権限緩和です（第 3 章）。

<!--
第 19 版（@reader msg c2f1b9fb の (5)）: 第 0 章を先に置いたら、p.2 を持ったまま読んだ 6 人中 3 人がここで「p.2 の『選んだ所だけ人』と同じでは？」と p.2 に戻り、ほどけたのは 1 人だけだった。違いは 2 つ（見ない側を誰が判定するか・線を何で引くか）で、どちらも第 2・3 章の題にある。ぶつかる所で、行き先だけ注に置いた。本文と絵は変えていない。
-->

## AI が賢くなっても、待ちと間違いは残る

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

※ 左は p.8 の数字（AI 11 分・人 60 分）から出した。60 ÷ 71 で 85%。p.9 の 85%（調査の数字）とは別の数字で、たまたま同じ値。右は、間違える割合が変わらないとした場合。

## 原因 1：試行が多すぎて人が全部見られない

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

## 原因 2：同じ文脈の出力には同じ穴がある

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="345" y="10" width="250" height="36" rx="6" class="a"/>
  <text x="470" y="34" class="ts on" text-anchor="middle">同じ文脈の AI から出た 3 つ</text>
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
  <g class="ts" text-anchor="middle"><text x="330" y="338">実装</text><text x="470" y="338">テストを書く</text><text x="610" y="338">レビュー</text></g>
</svg>
```

出力はばらつく。でも、同じ会話と前提を積んだ AI から出たものは、同じ所に穴がある。31 日のバグはこれでした。

## 原因 3：やり直しが計算と費用を食う

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

## AA の目的＝板挟みへの答え

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="40" y="26" class="ts sub">AA の条文から逐語（左の札）と、この本での意味（右）</text>
  <rect x="40" y="40" width="800" height="100" rx="10" class="soft"/>
  <rect x="40" y="40" width="10" height="100" class="h"/>
  <text x="70" y="72" class="t" font-weight="700">目的</text><text x="70" y="94" class="tx">条文の目的の表</text>
  <text x="200" y="74" style="font-size:22px">人間の判断を、最も価値のある判断に使い切る</text>
  <text x="200" y="118" class="ts hc">全部の PR を見るのでも、人を外すのでもない。人の判断の置き場所を選ぶ</text>
  <rect x="40" y="152" width="800" height="100" rx="10" class="soft"/>
  <rect x="40" y="152" width="10" height="100" class="a"/>
  <text x="70" y="184" class="t" font-weight="700">Agentic</text><text x="70" y="206" class="tx">条文の冒頭</text>
  <text x="200" y="186" style="font-size:22px">AIエージェントが開発の実行主体となる環境</text>
  <text x="200" y="230" class="ts ac">作るのは主に AI エージェント。人は作業から判断の側へ回る</text>
  <rect x="40" y="264" width="800" height="100" rx="10" class="soft"/>
  <rect x="40" y="264" width="10" height="100" fill="#555"/>
  <text x="70" y="296" class="t" font-weight="700">Agile</text><text x="70" y="318" class="tx">条文の冒頭</text>
  <text x="200" y="291" style="font-size:19px">特定の宣言や枠組みではなく、素早さそのものを指す。</text>
  <text x="200" y="316" style="font-size:19px" textLength="620" lengthAdjust="spacingAndGlyphs">前提が変わって答えが変わる部分だけを書き、変わらない部分は書かない。</text>
  <text x="200" y="348" class="ts" textLength="630" lengthAdjust="spacingAndGlyphs">スクラム等の型の名前ではない。決まりは、変わった前提の所だけ書き直す（前提は次のページ）</text>
</svg>
```

p.2 の「人の判断の置き場所を選ぶ」は、p.14 の板挟みへの答えです。条文では目的の 1 行です。第 2 章から、置き場所を決めていきます。

出典: AA の条文は、著者が書いた開発の決まり（草稿）。目的は条文の目的の表、Agentic・Agile は条文の冒頭の 2 文。使う条文は、この本の中でその場に引く。

## 3 原因＝AA の前提

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="800" height="230" rx="10" class="soft"/>
  <text x="70" y="98" class="ts sub">AA の条文　前提（全文）</text>
  <text x="70" y="150" style="font-size:22px" textLength="440" lengthAdjust="spacingAndGlyphs">実行は安く、速いが、総量には上限がある。</text>
  <text x="70" y="205" style="font-size:22px" textLength="462" lengthAdjust="spacingAndGlyphs">希少なのは人間の判断と、実行の総量である。</text>
  <text x="70" y="260" style="font-size:22px" textLength="616" lengthAdjust="spacingAndGlyphs">出力は確率的にばらつき、同じ生成元は同じ誤りを共有する。</text>
  <path d="M70,158 H246" class="al"/><text x="248" y="176" class="tx" text-anchor="end">p.17 原因 1</text>
  <path d="M290,158 H488" class="xl"/><text x="488" y="176" class="tx" text-anchor="end">p.19 原因 3</text>
  <path d="M180,213 H290" class="hl"/><text x="290" y="231" class="tx" text-anchor="end">p.17 原因 1</text>
  <path d="M334,268 H664" class="al"/><text x="664" y="286" class="tx" text-anchor="end">p.18 原因 2</text>
</svg>
```

原因 1〜3 は、AA の条文では前提の 3 文です。前のページの「前提が変わって答えが変わる部分」が、この 3 文です。

## この本の内容：人を待たずに回す方法

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
  <text x="780" y="303" class="ts ac" text-anchor="middle">第 8 章　輪が育つ</text>
</svg>
```

この本は、板挟みのほどき方と、回すほど人を待たなくなる輪を書きます。各章で、はじめの輪を描き直して比べます。

※ 組み方は、各章の終わりの「実装イメージ」と、通しの 1 枚の巻末 p.163 に。

## 実装イメージ：出発点の組み方

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="160" height="70" rx="6" class="h"/><text x="120" y="82" class="t on" text-anchor="middle">人 1 人</text>
  <rect x="340" y="40" width="200" height="70" rx="6" class="a"/><text x="440" y="72" class="ts on" text-anchor="middle">AI のセッション</text><text x="440" y="96" class="ts on" text-anchor="middle">1 つ</text>
  <path d="M200,64 H336" class="ln" marker-end="url(#arr)"/><text x="268" y="54" class="tx" text-anchor="middle">会話で頼む</text>
  <path d="M540,75 H636" class="ln" marker-end="url(#arr)"/>
  <use href="#i-pr" x="642" y="56" width="30" height="38"/><text x="690" y="82" class="ts">PR・テスト</text>
  <path d="M657,112 C657,200 200,170 130,116" class="hl" marker-end="url(#arr)"/>
  <text x="400" y="190" class="ts hc" text-anchor="middle">人が全部の PR を読み、merge を押す</text>
  <rect x="40" y="226" width="800" height="104" rx="8" fill="#fff" class="lt dash"/>
  <text x="60" y="256" class="ts sub">まだ無い物</text>
  <g class="ts"><text x="60" y="288">判定する別の AI（第 2 章）・線の右の表（第 3 章）・依頼ファイル（第 4 章）</text>
    <text x="60" y="316">役ごとの権限設定（第 6 章）・決まりを変える手順（第 9 章）</text></g>
  <text x="440" y="362" class="ts sub" text-anchor="middle">第 2 章から、章の終わりで 1 つずつ足していく</text>
</svg>
```

出発点は、AI のセッション 1 つと人 1 人です。AI が PR を出し、人が全部読んで merge します。各章の終わりで、ここに 1 つずつ足します。
