# 第 2 章　判定の独立性

> 人の代わりに AI がレビュー：作成者の文脈を持たない・作成者以外が merge・受け入れ条件

<!-- 扉の絵（@ope-ultp1635 msg f0419ae4）: 章全体の主張 1 つ。本文の絵の使い回しはしない -->
```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <rect x="30" y="24" width="170" height="54" rx="27" class="soft"/><text x="115" y="57" class="ts" text-anchor="middle">作った会話の文脈</text>
  <rect x="50" y="116" width="130" height="60" rx="6" class="a"/><text x="115" y="152" class="t on" text-anchor="middle">作る AI</text>
  <path d="M115,78 V112" class="lt"/>
  <rect x="262" y="14" width="24" height="200" class="w"/>
  <path d="M200,51 H254" class="xl dash"/><use href="#i-no" x="236" y="39" width="24" height="24"/>
  <path d="M180,146 H300" class="ln" marker-end="url(#arr)"/>
  <use href="#i-pr" x="306" y="118" width="36" height="46"/><text x="324" y="186" class="ts" text-anchor="middle">PR</text>
  <rect x="362" y="112" width="124" height="60" rx="3" fill="#fff" class="hl"/><text x="424" y="148" class="ts hc" text-anchor="middle">受け入れ条件</text>
  <path d="M490,142 H540" class="ln" marker-end="url(#arr)"/>
  <rect x="546" y="116" width="150" height="60" rx="6" class="a"/><text x="621" y="141" class="ts on" text-anchor="middle">別の会話の AI</text><text x="621" y="163" class="ts on" text-anchor="middle">が判定</text>
  <path d="M696,146 H736" class="ln" marker-end="url(#arr)"/>
  <rect x="742" y="116" width="110" height="60" rx="6" class="box"/><text x="784" y="152" class="t" text-anchor="middle">merge</text><use href="#i-ok" x="816" y="134" width="24" height="24"/>
  <path d="M115,176 V258 H797 V182" class="xl dash"/><use href="#i-no" x="444" y="246" width="24" height="24"/>
  <text x="456" y="290" class="ts xc" text-anchor="middle">作った AI は merge を決めない</text>
</svg>
```

<!--
試作（絵の形）。依頼元 @ope-ultp1635 msg a2359e0c（第 1 章を通過とし第 2 章へ。軸は「判定は要る。判定者は人とは限らない」・計画 §D）。
ページ番号は build/aa.html の右上の数字（第 1 章の扉＝1。第 2 章の扉＝20）。
第 14 版（plan §F, @ope-ultp1635 msg 467fb7b2）で読み手を上げ、言い換えを戻し p.2〜3・4〜5・6〜7 を畳んだ。
1 本目の条件を「別モデル」から「作成者の文脈を持たない」に戻した（@ope-ultp1635 msg 7c4be03f・判断は writer-ja/drafts/aa-toc-retitle/ch02-axis-judgment.md）。条文 §2 前提の語は「生成元」、D3 は「異なる主体または」が先。
-->

第 1 章で、AI レビューに替えた輪は、同じ所で読み違えました。この章では、何を替えればよかったのかを見ます。

## 原因：作成者とレビュアーが同じ文脈

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="150" width="120" height="60" rx="6" class="a"/><text x="250" y="186" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="150" width="120" height="60" rx="6" class="box"/><text x="398" y="186" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="168" width="24" height="24"/>
  <rect x="510" y="150" width="140" height="60" rx="6" class="a"/><text x="580" y="186" class="t on" text-anchor="middle">AI がレビュー</text>
  <rect x="690" y="150" width="120" height="60" rx="6" class="box"/><text x="750" y="186" class="t" text-anchor="middle">次へ</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M310,180 H346" class="ln" marker-end="url(#arr)"/><path d="M470,180 H506" class="ln" marker-end="url(#arr)"/><path d="M650,180 H686" class="ln" marker-end="url(#arr)"/>
  <path d="M750,210 V280 H90 V214" class="ln" marker-end="url(#arr)"/>
  <path d="M250,144 V100 H580 V144" class="xl dash"/>
  <text x="415" y="88" class="t xc" text-anchor="middle">同じ会話・同じ前提</text>
  <rect x="510" y="20" width="140" height="44" rx="6" class="hl dash"/><text x="580" y="48" class="ts hc" text-anchor="middle">人のレビュー</text>
  <use href="#i-no" x="640" y="10" width="24" height="24"/>
  <text x="440" y="326" class="ts sub" text-anchor="middle">外したのは、人。壊れたのは、作成者とレビュアーが同じ文脈だった所</text>
</svg>
```

第 1 章で外したのは、人のレビューでした。でも、壊れた原因は別の所です。レビュアーが、作成者と同じ会話と前提を積んでいました。

※ 第 1 章 p.10・p.11 の輪。

## 判定は残し、レビュアーを文脈から切る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="60" width="120" height="50" rx="6" class="h"/><text x="90" y="92" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="60" width="120" height="50" rx="6" class="a"/><text x="250" y="92" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="60" width="120" height="50" rx="6" class="box"/><text x="398" y="92" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="73" width="24" height="24"/>
  <rect x="510" y="60" width="140" height="50" rx="6" fill="#fff" class="al"/><text x="580" y="82" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="580" y="102" class="ts ac" text-anchor="middle">がレビュー</text>
  <rect x="690" y="60" width="120" height="50" rx="6" class="box"/><text x="750" y="92" class="t" text-anchor="middle">次へ</text>
  <path d="M150,85 H186" class="ln" marker-end="url(#arr)"/><path d="M310,85 H346" class="ln" marker-end="url(#arr)"/><path d="M470,85 H506" class="ln" marker-end="url(#arr)"/><path d="M650,85 H686" class="ln" marker-end="url(#arr)"/>
  <path d="M750,110 V140 H90 V114" class="ln" marker-end="url(#arr)"/>
  <text x="250" y="48" class="ts ac" text-anchor="middle">会話 A</text>
  <text x="580" y="48" class="ts ac" text-anchor="middle">A を持たない</text>
  <path d="M40,170 H840" class="lt"/>
  <text x="40" y="202" class="ts sub">レビュアーにできるのは</text>
  <rect x="80" y="216" width="180" height="60" rx="8" class="h"/><text x="170" y="252" class="t on" text-anchor="middle">人</text>
  <rect x="350" y="216" width="180" height="60" rx="8" fill="#fff" class="al"/><text x="440" y="252" class="ts ac" text-anchor="middle">別の会話の AI</text>
  <rect x="620" y="216" width="180" height="60" rx="8" class="a"/><text x="710" y="252" class="t on" text-anchor="middle">作成者の AI</text>
  <use href="#i-ok" x="156" y="288" width="28" height="28"/>
  <use href="#i-ok" x="426" y="288" width="28" height="28"/>
  <use href="#i-no" x="696" y="288" width="28" height="28"/>
  <text x="440" y="346" class="ts ac" text-anchor="middle">同じモデルでも、新しい会話なら可</text>
  <text x="710" y="346" class="ts xc" text-anchor="middle">作成者だけは不可</text>
</svg>
```

レビューそのものは外しません。替えるのはレビュアーです。人でも、作成者の会話を持たない AI でもかまいません。作成者だけは不可です。

※ 条文は「異なる主体またはモデルの系列」。この本は、作成者の会話を持たない AI を異なる主体と読む。モデルまで替えるのは上乗せの手で、著者の場では確かめていない。

## レビューは回数でなく、文脈を分ける

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="200" y="36" class="t" text-anchor="middle">同じ会話で 3 回レビュー</text>
  <g class="tx" text-anchor="middle"><text x="112" y="62">A</text><text x="192" y="62">A</text><text x="272" y="62">A</text></g>
  <g fill="#dbe7f5" stroke="#2f6fb3" stroke-width="2">
    <rect x="90" y="70" width="44" height="220" rx="6"/><rect x="170" y="70" width="44" height="220" rx="6"/><rect x="250" y="70" width="44" height="220" rx="6"/>
  </g>
  <g fill="#fff" stroke="#2f6fb3" stroke-width="1.5">
    <ellipse cx="112" cy="180" rx="14" ry="12"/><ellipse cx="192" cy="180" rx="14" ry="12"/><ellipse cx="272" cy="180" rx="14" ry="12"/>
  </g>
  <path d="M40,180 H352" stroke="#c62828" stroke-width="4" marker-end="url(#arr-x)"/>
  <text x="200" y="322" class="ts xc" text-anchor="middle">31 日の読み違いが通り抜ける</text>
  <path d="M430,30 V340" class="lt"/>
  <text x="660" y="36" class="t" text-anchor="middle">文脈を切ってレビュー</text>
  <g class="tx" text-anchor="middle"><text x="542" y="62">作る A</text><text x="632" y="62">テスト A</text><text x="722" y="62">レビュー B</text></g>
  <g fill="#dbe7f5" stroke="#2f6fb3" stroke-width="2">
    <rect x="520" y="70" width="44" height="220" rx="6"/><rect x="610" y="70" width="44" height="220" rx="6"/>
  </g>
  <rect x="700" y="70" width="44" height="220" rx="6" fill="#fff" class="al"/>
  <g fill="#fff" stroke="#2f6fb3" stroke-width="1.5">
    <ellipse cx="542" cy="180" rx="14" ry="12"/><ellipse cx="632" cy="180" rx="14" ry="12"/>
  </g>
  <g fill="#eef3fa" stroke="#2f6fb3" stroke-width="1.5"><ellipse cx="722" cy="110" rx="13" ry="11"/><ellipse cx="722" cy="250" rx="13" ry="11"/></g>
  <path d="M470,180 H692" stroke="#c62828" stroke-width="4" marker-end="url(#arr-x)"/>
  <use href="#i-no" x="756" y="166" width="28" height="28"/>
  <text x="660" y="322" class="ts xc" text-anchor="middle">B の板で止まる</text>
</svg>
```

同じ会話のままレビューを何回重ねても、穴は同じ所に並びます。作成者の会話を持たない AI に替えると、穴の位置がずれます。

※ 必ず止まる、ではない。止まるかは、B が何と照らすかで決まる（p.30〜32）。31 日の件は第 1 章 p.18。説明のために作った絵。

## 作成者が merge を決めたら意味がない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="150" width="120" height="60" rx="6" class="a"/><text x="250" y="186" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="150" width="120" height="60" rx="6" class="box"/><text x="398" y="186" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="168" width="24" height="24"/>
  <rect x="510" y="150" width="140" height="60" rx="6" fill="#fff" class="al"/><text x="580" y="176" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="580" y="198" class="ts ac" text-anchor="middle">がレビュー</text>
  <rect x="690" y="150" width="120" height="60" rx="6" class="box"/><text x="750" y="186" class="t" text-anchor="middle">merge</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M310,180 H346" class="ln" marker-end="url(#arr)"/><path d="M470,180 H506" class="ln" marker-end="url(#arr)"/>
  <path d="M580,214 V256 H262 V216" class="ln" marker-end="url(#arr)"/>
  <use href="#i-no" x="568" y="232" width="24" height="24"/>
  <text x="420" y="282" class="ts xc" text-anchor="middle">レビュー：「31 日が出ない」</text>
  <path d="M250,146 V74 H750 V144" class="xl" marker-end="url(#arr-x)"/>
  <text x="500" y="42" class="ts xc" text-anchor="middle">作成者の AI：「その指摘は誤り」</text>
  <text x="500" y="64" class="ts xc" text-anchor="middle">そのまま merge</text>
  <text x="440" y="330" class="ts sub" text-anchor="middle">レビューは分けた。merge を決めたのは、作成者</text>
</svg>
```

別の会話の AI がレビューしても、merge を作成者が決めるなら、自分で approve したのと同じです。レビューも merge 判断も、作成者の外に置きます。

※ 説明のために作った場面です。

## 実例：書いた AI の「GO」で誤って公開

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="end"><text x="150" y="66">レビューする AI</text><text x="150" y="126">書いた AI</text><text x="150" y="186">merge する AI</text><text x="150" y="246">人</text></g>
  <path d="M160,40 V270" class="lt"/>
  <rect x="180" y="44" width="130" height="34" rx="5" class="a"/><text x="245" y="67" class="ts on" text-anchor="middle">LGTM ✅</text>
  <rect x="330" y="104" width="190" height="34" rx="5" class="a"/><text x="425" y="127" class="ts on" text-anchor="middle">公開の可否を人に聞く</text>
  <rect x="530" y="104" width="160" height="34" rx="5" class="a"/><text x="610" y="127" class="ts on" text-anchor="middle">「GO ✅」と返す</text>
  <text x="530" y="98" class="tx" text-anchor="middle">2 分後</text>
  <rect x="440" y="164" width="200" height="34" rx="5" class="a"/><text x="540" y="187" class="ts on" text-anchor="middle">書いた AI に「GO？」</text>
  <path d="M570,164 V142" class="ln" marker-end="url(#arr)"/>
  <rect x="660" y="164" width="90" height="34" rx="5" class="a"/><text x="705" y="187" class="ts on" text-anchor="middle">merge</text>
  <path d="M660,140 L695,160" class="ln" marker-end="url(#arr)"/>
  <rect x="425" y="224" width="400" height="34" class="w"/><text x="625" y="247" class="ts sub" text-anchor="middle">まだ答えていない</text>
  <path d="M425,140 V220" class="lt dash"/>
  <rect x="760" y="164" width="90" height="34" rx="5" class="x"/><text x="805" y="187" class="ts on" text-anchor="middle">公開</text>
  <text x="805" y="218" class="tx" text-anchor="middle">71 秒後に revert</text>
  <rect x="60" y="292" width="760" height="56" rx="8" class="soft"/>
  <text x="80" y="316" class="ts sub">このあと決まりに足された 1 行</text>
  <text x="80" y="338" class="ts">「公開に直結する PR では、書いた者は GO を単独で使わない」</text>
</svg>
```

merge する AI に聞かれ、書いた AI は「文章は良い」の意味で GO と返し、merge する AI は「出してよい」と読みました。誰も、ずるをしていません。

出典: kishibashi3/publications PR #40（merge 2026-09-19T16:09:17Z）と巻き戻しの PR #47（16:10:28Z）。著者の場で起きた。

## 切った AI は、書かれたものだけを読む

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="230" height="200" rx="8" class="soft"/>
  <text x="155" y="90" class="ts" text-anchor="middle" font-weight="700">作成者の会話</text>
  <g class="ts sub" text-anchor="middle"><text x="155" y="130">「31 日は含めない」</text><text x="155" y="160">ほかの思い込み</text><text x="155" y="190">言われた細かい話</text></g>
  <path d="M290,160 H560" class="xl dash"/>
  <use href="#i-no" x="410" y="142" width="36" height="36"/>
  <text x="428" y="130" class="ts xc" text-anchor="middle">渡さない</text>
  <rect x="580" y="130" width="180" height="60" rx="6" fill="#fff" class="al"/><text x="670" y="156" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="670" y="178" class="ts ac" text-anchor="middle">がレビュー</text>
  <rect x="530" y="260" width="280" height="80" rx="6" fill="#fff" class="hl"/>
  <text x="670" y="290" class="ts hc" text-anchor="middle">書かれたもの</text><text x="670" y="318" class="tx" text-anchor="middle">頼んだこと・受け入れ条件・決まり</text>
  <path d="M670,256 V196" class="ln" marker-end="url(#arr)"/>
  <text x="680" y="232" class="tx">読むのはここだけ</text>
  <text x="300" y="320" class="ts sub" text-anchor="middle">書かれていない観点は、切った AI も見ない</text>
</svg>
```

文脈を切った AI は、作成者の会話の代わりに、書かれたものを読みます。まっさらな AI を立てるだけでは、分離はあっても、読むものがありません。

※ 新しい会話でも、作成者の会話のまとめや実装の計画を最初に貼れば、渡したのと同じ。書かれたものが周ごとに増える話は第 8 章。説明のために作った絵です。

## 受け入れ条件が無いと、作成者寄りになる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="60" width="230" height="80" rx="8" fill="#fff" class="hl"/>
  <text x="145" y="92" class="ts hc" text-anchor="middle">頼み方</text>
  <text x="145" y="120" class="t" text-anchor="middle">「ちゃんと動くか見て」</text>
  <path d="M260,100 H336" class="ln" marker-end="url(#arr)"/>
  <rect x="340" y="70" width="160" height="60" rx="6" fill="#fff" class="al"/><text x="420" y="96" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="420" y="118" class="ts ac" text-anchor="middle">がレビュー</text>
  <rect x="340" y="190" width="160" height="70" rx="6" class="w"/><text x="420" y="222" class="ts sub" text-anchor="middle">受け入れ条件が</text><text x="420" y="244" class="ts sub" text-anchor="middle">書かれていない</text>
  <path d="M420,134 V186" class="lt dash"/>
  <rect x="620" y="190" width="220" height="70" rx="6" class="a"/><text x="730" y="222" class="ts on" text-anchor="middle">作成者の読み方</text><text x="730" y="244" class="ts on" text-anchor="middle">「31 日は含めない」</text>
  <path d="M614,225 H506" class="al dash" marker-end="url(#arr)"/>
  <text x="560" y="286" class="tx" text-anchor="middle">同じ読み方で埋める</text>
  <use href="#i-ok" x="590" y="86" width="28" height="28"/><text x="626" y="106" class="ts okc">問題なし</text>
  <text x="440" y="320" class="ts xc" text-anchor="middle">文脈を切ったのに、同じ思い込みに戻る</text>
</svg>
```

何を確かめるかが書かれていないと、レビュアーは空白を、もっともらしく埋めます。埋め方は、作成者と同じになりがちです。

※ 説明のために作った場面です。

## 受け入れ条件を 1 行書いておく

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="60" width="300" height="110" rx="8" fill="#fff" class="hl"/>
  <text x="180" y="92" class="ts hc" text-anchor="middle">受け入れ条件</text>
  <text x="50" y="122" class="ts">10 月 1 日〜31 日で検索できる</text>
  <text x="50" y="152" class="t" font-weight="700">31 日を含む</text>
  <path d="M50,160 H168" class="hl"/>
  <path d="M330,115 H406" class="ln" marker-end="url(#arr)"/>
  <rect x="410" y="85" width="160" height="60" rx="6" fill="#fff" class="al"/><text x="490" y="111" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="490" y="133" class="ts ac" text-anchor="middle">がレビュー</text>
  <rect x="410" y="220" width="160" height="60" rx="6" class="a"/><text x="490" y="256" class="ts on" text-anchor="middle">作ったもの</text>
  <path d="M490,149 V216" class="ln" marker-start="url(#arr)" marker-end="url(#arr)"/>
  <text x="500" y="190" class="tx">照らす</text>
  <use href="#i-no" x="610" y="101" width="28" height="28"/>
  <text x="646" y="121" class="ts xc">31 日が出ない</text>
  <text x="440" y="336" class="ts sub" text-anchor="middle">書いた条件があれば、照らす先がある</text>
</svg>
```

1 行書けば、レビュアーはそれと照らせます。受け入れ条件は、書いてはじめて条件になります。

※ 書かれていないものをどう扱うかは、第 4 章で見ます。

## 文脈を切る・merge 分離・受け入れ条件

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="end"><text x="300" y="104">作成者の文脈を持たない</text><text x="300" y="164">merge は作成者以外</text><text x="300" y="224">受け入れ条件がある</text></g>
  <g class="tx" text-anchor="end"><text x="300" y="122">p.27</text><text x="300" y="182">p.28</text><text x="300" y="242">p.32</text></g>
  <g class="ts" text-anchor="middle"><text x="390" y="56">全部ある</text><text x="510" y="56">1 つめが無い</text><text x="630" y="56">2 つめが無い</text><text x="750" y="56">3 つめが無い</text></g>
  <use href="#i-ok" x="376" y="84" width="28" height="28"/><use href="#i-ok" x="376" y="144" width="28" height="28"/><use href="#i-ok" x="376" y="204" width="28" height="28"/>
  <rect x="496" y="84" width="28" height="28" rx="4" class="w"/><use href="#i-ok" x="496" y="144" width="28" height="28"/><use href="#i-ok" x="496" y="204" width="28" height="28"/>
  <use href="#i-ok" x="616" y="84" width="28" height="28"/><rect x="616" y="144" width="28" height="28" rx="4" class="w"/><use href="#i-ok" x="616" y="204" width="28" height="28"/>
  <use href="#i-ok" x="736" y="84" width="28" height="28"/><use href="#i-ok" x="736" y="144" width="28" height="28"/><rect x="736" y="204" width="28" height="28" rx="4" class="w"/>
  <path d="M320,262 H820" class="lt"/>
  <text x="390" y="304" class="t okc" text-anchor="middle">止まる</text>
  <g text-anchor="middle"><text x="510" y="304" class="t xc">通る</text><text x="630" y="304" class="t xc">通る</text><text x="750" y="304" class="t xc">通る</text></g>
  <text x="300" y="304" class="ts" text-anchor="end">31 日の読み違いは</text>
</svg>
```

どれか 1 つ欠けると、残りの 2 つがそろっていても、分けた意味が崩れます。

## 人のレビュー 60 分が AI の 5 分に

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="230" y="40" class="ts sub">PR 1 本が次へ進むまで（1 周）</text>
  <g class="t" text-anchor="end"><text x="210" y="112">人がレビュー</text><text x="210" y="232">別の会話の AI</text></g>
  <rect x="230" y="80" width="88" height="50" class="a"/><text x="274" y="111" class="ts on" text-anchor="middle">AI 11 分</text>
  <rect x="318" y="80" width="480" height="50" class="h"/><text x="558" y="111" class="ts on" text-anchor="middle">人のレビュー 60 分</text>
  <text x="810" y="112" class="t">71 分</text>
  <rect x="230" y="200" width="88" height="50" class="a"/><text x="274" y="231" class="ts on" text-anchor="middle">AI 11 分</text>
  <rect x="318" y="200" width="40" height="50" fill="#fff" class="al"/>
  <text x="370" y="232" class="t">16 分</text>
  <text x="338" y="276" class="tx" text-anchor="middle">レビュー 5 分</text>
  <text x="440" y="340" class="tl" text-anchor="middle">人の速さで、止まらない</text>
</svg>
```

人のレビュー 60 分が、別の会話の AI のレビューに替わります。輪は、人の速さで止まらなくなります。

※ 説明のために作った数字。上の段は第 1 章 p.8 と同じ。縮尺も同じ。

## 1 章の図から『外すと間違い』の壁が消える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="230" height="270" rx="10" fill="#fbe9d7" class="hl"/>
  <text x="155" y="96" class="t" text-anchor="middle" font-weight="700">輪に人を残す</text>
  <use href="#i-wait" x="125" y="130" width="60" height="84"/>
  <text x="155" y="262" class="ts hc" text-anchor="middle">人の速さで止まる</text>
  <rect x="610" y="50" width="230" height="270" rx="10" fill="#fff" stroke="#bbb" stroke-width="2" class="dash"/>
  <text x="725" y="96" class="t sub" text-anchor="middle" font-weight="700">輪から人を外す</text>
  <use href="#i-pile" x="685" y="132" width="80" height="80" opacity="0.25"/>
  <path d="M660,251 H790" class="xl" stroke-width="3"/>
  <text x="725" y="256" class="ts sub" text-anchor="middle">間違いが速く増える</text>
  <text x="725" y="296" class="ts ac" text-anchor="middle">文脈を切ったレビューで、外れる</text>
  <rect x="380" y="145" width="160" height="80" rx="8" class="box"/>
  <text x="460" y="192" class="t" text-anchor="middle">あなたのチーム</text>
  <path d="M546,185 H600" class="ln" marker-end="url(#arr)"/>
</svg>
```

作成者の文脈を持たない AI がレビューすれば、人を外しても間違いは同じ速さでは増えません。右の壁が外れるので、左の壁から離れられます。

※ 第 1 章 p.14 の図の描き直し。測った結果ではない。

## 練習問題：このレビューのどこがまずいか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="150" width="140" height="60" rx="6" class="a"/><text x="260" y="176" class="ts on" text-anchor="middle">AI が</text><text x="260" y="198" class="ts on" text-anchor="middle">設計書を書く</text>
  <rect x="370" y="150" width="160" height="60" rx="6" class="a"/><text x="450" y="176" class="ts on" text-anchor="middle">同じ AI が</text><text x="450" y="198" class="ts on" text-anchor="middle">レビュー</text>
  <rect x="570" y="150" width="140" height="60" rx="6" class="a"/><text x="640" y="176" class="ts on" text-anchor="middle">同じ AI が</text><text x="640" y="198" class="ts on" text-anchor="middle">次の工程へ</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M330,180 H366" class="ln" marker-end="url(#arr)"/><path d="M530,180 H566" class="ln" marker-end="url(#arr)"/>
  <use href="#i-ok" x="436" y="98" width="28" height="28"/><text x="472" y="118" class="ts okc">問題なし</text>
  <rect x="190" y="40" width="200" height="40" rx="6" fill="#fff" class="hl"/><text x="290" y="66" class="ts hc" text-anchor="middle">「レビューして」</text>
  <path d="M290,80 L420,146" class="lt"/>
  <text x="780" y="186" class="tl" text-anchor="middle">?</text>
</svg>
```

この輪は、この章の 3 点のうち、どれに引っかかるでしょう。直すには、何を替えればよいでしょう。

※ 答え：3 点全部。書いた会話のままレビューし、作成者が次へ進め、受け入れ条件が書かれていない。

## まとめ：作った AI は、自分で承認しない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="800" height="300" rx="10" class="soft"/>
  <text x="70" y="88" class="ts sub">AA（Agentic Agile）の条文　D3 生成と判定の分離（全文）</text>
  <text x="70" y="160" style="font-size:22px" textLength="550" lengthAdjust="spacingAndGlyphs">判定は、生成と異なる主体またはモデルの系列で行う。</text>
  <text x="70" y="225" style="font-size:22px" textLength="286" lengthAdjust="spacingAndGlyphs">自らの成果を自ら承認しない</text>
  <text x="362" y="225" style="font-size:22px" textLength="198" lengthAdjust="spacingAndGlyphs">（P1・P2・前提）</text>
  <path d="M224,168 H334" class="al"/><text x="224" y="186" class="tx">p.27 作成者の文脈を持たない</text><path d="M334,168 H532" class="lt dash"/><text x="532" y="186" class="tx" text-anchor="end">※ モデルも替える道</text>
  <path d="M70,233 H356" class="hl"/><text x="356" y="251" class="tx" text-anchor="end">p.28・29 作成者が merge</text>
  <path d="M376,233 H406" class="al"/><path d="M417,233 H447" class="hl"/><path d="M458,233 H542" class="xl"/>
  <text x="70" y="274" class="tx">括弧の中は、この 1 行の理由。条文の先のほうに書いてある原則</text>
  <path d="M376,292 H406" class="al"/><text x="416" y="297" class="ts">P1 書かれていないものは、無いものとして扱う → p.30・32</text>
  <path d="M376,313 H406" class="hl"/><text x="416" y="318" class="ts">P2 どの層も、決まりに従って働き、下の決まりを書く → p.28</text>
  <path d="M376,334 H406" class="xl"/><text x="416" y="339" class="ts">前提（第 1 章 p.21）→ p.18・27</text>
</svg>
```

この章で見たことは、AA の条文では D3 の 1 行です。下線の「異なる主体」は、作成者の会話を持たない AI です。P1・P2 は第 4 章・第 8 章で扱います。

※ 条文の一覧は p.3。

## 実装イメージ：3 役の最小構成

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="20" y="6" width="840" height="46" rx="8" class="soft"/>
  <text x="36" y="35" class="ts sub">この章の約束</text>
  <text x="150" y="35" class="ts">作る AI → 判定する AI：PR（差分と受け入れ条件 1 行だけ）。作る AI は merge しない</text>
  <rect x="20" y="96" width="120" height="76" rx="6" class="h"/><text x="80" y="130" class="t on" text-anchor="middle">人 1 人</text><text x="80" y="154" class="tx on" text-anchor="middle" style="fill:#fff">依頼を書く</text>
  <rect x="180" y="96" width="170" height="76" rx="6" class="a"/><text x="265" y="126" class="ts on" text-anchor="middle">作る AI の</text><text x="265" y="150" class="ts on" text-anchor="middle">セッション</text>
  <use href="#i-pr" x="378" y="114" width="30" height="38"/><text x="393" y="190" class="tx" text-anchor="middle">PR</text>
  <rect x="436" y="96" width="190" height="76" rx="6" fill="#fff" class="al"/><text x="531" y="126" class="ts ac" text-anchor="middle">判定する AI の</text><text x="531" y="150" class="ts ac" text-anchor="middle">セッション（新しく）</text>
  <rect x="666" y="96" width="194" height="76" rx="6" class="box"/><text x="763" y="126" class="ts" text-anchor="middle">merge する側</text><text x="763" y="150" class="tx" text-anchor="middle">人か、必須チェックで自動</text>
  <path d="M140,134 H176" class="ln" marker-end="url(#arr)"/><path d="M350,134 H374" class="ln" marker-end="url(#arr)"/><path d="M410,134 H432" class="ln" marker-end="url(#arr)"/><path d="M626,134 H662" class="ln" marker-end="url(#arr)"/>
  <text x="644" y="88" class="tx" text-anchor="middle">LGTM ✅</text>
  <rect x="180" y="214" width="320" height="120" rx="8" fill="#fff" class="lt"/>
  <text x="196" y="240" class="ts" font-weight="700">作る AI の権限設定（例）</text>
  <g style="font-family:monospace;font-size:14px"><text x="196" y="270">"deny": [</text><text x="216" y="294">"Bash(gh pr merge:*)"</text><text x="196" y="318">]</text></g>
  <path d="M265,172 V210" class="lt dash"/>
  <rect x="536" y="214" width="324" height="120" rx="8" fill="#fff" class="lt"/>
  <text x="552" y="240" class="ts" font-weight="700">判定する AI に渡す物</text>
  <g class="ts"><text x="552" y="270">渡す：差分・受け入れ条件 1 行</text><text x="552" y="298" class="sub">渡さない：作った会話</text></g>
  <path d="M531,172 V210" class="lt dash"/>
  <text x="440" y="366" class="tx" text-anchor="middle">役ごとに別のセッションを起こす。1 台・1 人で回せる</text>
</svg>
```

この条文を守るとは：作るセッションの権限から merge を外すことです。判定は PR ごとに新しいセッションを起こし、差分と受け入れ条件 1 行だけを渡します。

※ 権限の書き方は第 3 章 p.64 の例と同じ。役ごとに届く範囲は第 6 章 p.109、毎回かける形は第 5 章 p.98。

## 実装イメージ：LGTM をコメントに置く

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="tl" text-anchor="middle"><text x="50" y="88">1</text><text x="50" y="178">2</text><text x="50" y="268">3</text></g>
  <rect x="80" y="50" width="520" height="66" rx="8" class="soft"/>
  <text x="96" y="78" class="ts" font-weight="700">本来は、役ごとにアカウントを分けるのが筋</text>
  <text x="96" y="102" class="ts sub">そうすれば GitHub の approve が、そのまま役の分離になる</text>
  <rect x="80" y="140" width="520" height="66" rx="8" class="soft"/>
  <text x="96" y="168" class="ts" font-weight="700">ただし現実には分けられない</text>
  <text x="96" y="192" class="ts sub">1 人で回すなら、アカウントは 1 つ</text>
  <rect x="80" y="230" width="520" height="90" rx="8" fill="#fff" class="al"/>
  <text x="96" y="258" class="ts ac" font-weight="700">だから LGTM をコメントで残すことを決まりにする</text>
  <text x="96" y="284" class="ts">判定した役が PR に「LGTM ✅」のコメントを書き、</text>
  <text x="96" y="306" class="ts">merge する側はそれを確かめてから merge する</text>
  <rect x="630" y="230" width="230" height="90" rx="8" class="box"/>
  <use href="#i-pr" x="646" y="244" width="24" height="30"/><text x="680" y="264" class="ts">PR のコメント欄</text>
  <text x="646" y="300" style="font-family:monospace;font-size:15px">LGTM ✅</text>
  <path d="M600,275 H626" class="ln" marker-end="url(#arr)"/>
  <text x="745" y="80" class="ts" text-anchor="middle">コメントは残る</text>
  <text x="745" y="106" class="ts" text-anchor="middle">→ 後から、誰が</text><text x="745" y="128" class="ts" text-anchor="middle">判定したか辿れる</text>
  <path d="M745,140 V224" class="lt dash"/>
  <text x="440" y="362" class="ts sub" text-anchor="middle">分けられない前提で、約束をコメントに置いた</text>
</svg>
```

本来は役ごとにアカウントを分けるのが筋です。でも 1 人で回すなら 1 つです。だから LGTM をコメントで残すと決めます。仕方なくではなく、選んだ形です。

※ コメントは残るので、後から誰が判定したか辿れる。判定する AI の決まり（roles/judge.md）に、コメントの書き方を書いておく。

## 実装イメージ：この形の弱点

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="380" height="200" rx="10" fill="#fff" class="lt"/>
  <text x="230" y="72" class="ts sub" text-anchor="middle">GitHub から見えるもの</text>
  <rect x="70" y="96" width="140" height="56" rx="6" fill="#fff" class="al"/><text x="140" y="130" class="ts ac" text-anchor="middle">LGTM を書いた</text>
  <rect x="250" y="96" width="140" height="56" rx="6" class="box"/><text x="320" y="130" class="ts" text-anchor="middle">merge した</text>
  <text x="140" y="186" style="font-family:monospace;font-size:15px" text-anchor="middle">you</text><text x="320" y="186" style="font-family:monospace;font-size:15px" text-anchor="middle">you</text>
  <text x="230" y="186" class="tl xc" text-anchor="middle">=</text>
  <text x="230" y="222" class="ts xc" text-anchor="middle">別の役だったかは、仕組みでは保証されない</text>
  <rect x="470" y="40" width="370" height="200" rx="10" class="soft"/>
  <text x="490" y="72" class="ts" font-weight="700">守っているのは 2 つだけ</text>
  <g class="ts"><text x="490" y="110">決まり：書いた役は merge しない</text><text x="490" y="146">記録：PR に残る LGTM コメント</text></g>
  <rect x="40" y="270" width="800" height="70" rx="10" fill="#fdf2e6"/>
  <text x="60" y="300" class="ts hc" font-weight="700">だから、決まりファイルを変える PR だけは人が merge する</text>
  <a href="#p151"><text x="60" y="326" class="tx">第 9 章 p.151「緩める向きだけ重い」と同じ線</text></a>
</svg>
```

同じアカウントなので、LGTM を書いた役と merge した役が本当に別だったかは、仕組みでは保証されません。守っているのは決まりと記録だけです。

※ 第 3 章 p.52 の床と同じ扱い。決まりや権限を緩める変更は、revert できても人が見る。

## 次章へ：人は、戻せない操作の前に残る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="150" width="120" height="60" rx="6" class="a"/><text x="250" y="186" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="150" width="120" height="60" rx="6" class="box"/><text x="398" y="186" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="168" width="24" height="24"/>
  <rect x="510" y="150" width="140" height="60" rx="6" fill="#fff" class="al"/><text x="580" y="176" class="ts ac" text-anchor="middle">別の会話の AI</text><text x="580" y="198" class="ts ac" text-anchor="middle">がレビュー</text>
  <rect x="690" y="150" width="120" height="60" rx="6" class="box"/><text x="750" y="186" class="t" text-anchor="middle">次へ</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M310,180 H346" class="ln" marker-end="url(#arr)"/><path d="M470,180 H506" class="ln" marker-end="url(#arr)"/><path d="M650,180 H686" class="ln" marker-end="url(#arr)"/>
  <path d="M750,210 V280 H90 V214" class="ln" marker-end="url(#arr)"/>
  <path d="M670,120 V240" stroke="#d9822b" stroke-width="4" class="dash"/>
  <text x="670" y="108" class="t hc" text-anchor="middle">?</text>
  <rect x="700" y="30" width="140" height="50" rx="6" class="h"/><text x="770" y="62" class="t on" text-anchor="middle">人</text>
  <path d="M740,80 L680,100" class="lt dash"/>
  <text x="420" y="330" class="ts sub" text-anchor="middle">revert できない「次へ」の手前には、まだ人が要るかもしれない</text>
</svg>
```

人は輪の外に出ました。でも、revert できない操作の手前には、人を残すかもしれません。それが第 3 章です。

---
@writer-ja [bridge-claude2] (operator-supervised · k-ishibashi-ntv/agent-hub)
