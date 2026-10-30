# 第 2 章　ほどき方

<!--
試作（絵の形）。依頼元 @ope-ultp1635 msg a2359e0c（第 1 章を通過とし第 2 章へ。軸は「判定は要る。判定者は人とは限らない」・計画 §D）。
底本: Principles D3・解説 D3（origin/docs/eaa-working-notes 1dc3935 の drafts/agentic-agile/principles.md:43・commentary.md:54）。旧形の見本 plan §2 の中身を、plan §B.5 の第 2 章の絵にし直した。
ページ番号は build/aa.html の右上の数字（第 1 章の扉＝1。第 2 章の扉＝23）。
-->

第 1 章で、人を外した輪は、同じ所で読み違えました。この章では、何を外せばよかったのかを見ます。

## 何を外したのか

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
  <text x="415" y="88" class="t xc" text-anchor="middle">同じ元から出ている</text>
  <rect x="510" y="20" width="140" height="44" rx="6" class="hl dash"/><text x="580" y="48" class="ts hc" text-anchor="middle">人が確かめる</text>
  <use href="#i-no" x="640" y="10" width="24" height="24"/>
  <text x="440" y="326" class="ts sub" text-anchor="middle">外したのは、人。壊れたのは、確かめる者と作る者が同じ元だった所</text>
</svg>
```

第 1 章で外したのは、人の確認でした。でも、壊れた原因は別の所です。確かめる者が、作った者と同じ元から出ていました。

※ p.11「外せば、速くなる」と p.12「同じ所で、読み違える」の輪。

## 判定は、外さない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="250" y="30" width="380" height="80" rx="10" class="soft"/>
  <text x="440" y="66" class="t" text-anchor="middle" font-weight="700">判定</text>
  <text x="440" y="94" class="ts sub" text-anchor="middle">できたものを確かめ、通すかを決める</text>
  <text x="660" y="76" class="ts">← 残す</text>
  <path d="M400,112 L180,186" class="ln" marker-end="url(#arr)"/>
  <path d="M440,112 V186" class="ln" marker-end="url(#arr)"/>
  <path d="M480,112 L700,186" class="ln" marker-end="url(#arr)"/>
  <text x="30" y="150" class="ts">だれが判定するか</text><text x="30" y="172" class="ts">← 替えてよい</text>
  <rect x="80" y="192" width="180" height="70" rx="8" class="h"/><text x="170" y="234" class="t on" text-anchor="middle">人</text>
  <rect x="350" y="192" width="180" height="70" rx="8" fill="#fff" class="al"/><text x="440" y="222" class="ts ac" text-anchor="middle">作ったのとは</text><text x="440" y="246" class="ts ac" text-anchor="middle">別の系列の AI</text>
  <rect x="620" y="192" width="180" height="70" rx="8" class="a"/><text x="710" y="234" class="t on" text-anchor="middle">作った AI</text>
  <use href="#i-ok" x="156" y="280" width="28" height="28"/>
  <use href="#i-ok" x="426" y="280" width="28" height="28"/>
  <use href="#i-no" x="696" y="280" width="28" height="28"/>
  <text x="710" y="336" class="ts xc" text-anchor="middle">作った者だけは、だめ</text>
</svg>
```

判定そのものは外しません。替えてよいのは、だれが判定するかです。人でなくてもかまいません。作った者でなければ。

## 別の元に、確かめさせる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="150" width="120" height="60" rx="6" class="a"/><text x="250" y="186" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="150" width="120" height="60" rx="6" class="box"/><text x="398" y="186" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="168" width="24" height="24"/>
  <rect x="510" y="150" width="140" height="60" rx="6" fill="#fff" class="al"/><text x="580" y="176" class="ts ac" text-anchor="middle">別の系列の AI</text><text x="580" y="198" class="ts ac" text-anchor="middle">が判定</text>
  <rect x="690" y="150" width="120" height="60" rx="6" class="box"/><text x="750" y="186" class="t" text-anchor="middle">次へ</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M310,180 H346" class="ln" marker-end="url(#arr)"/><path d="M470,180 H506" class="ln" marker-end="url(#arr)"/><path d="M650,180 H686" class="ln" marker-end="url(#arr)"/>
  <path d="M750,210 V280 H90 V214" class="ln" marker-end="url(#arr)"/>
  <text x="250" y="138" class="ts ac" text-anchor="middle">系列 A</text>
  <text x="580" y="138" class="ts ac" text-anchor="middle">系列 B</text>
  <rect x="700" y="30" width="140" height="50" rx="6" class="h"/><text x="770" y="62" class="t on" text-anchor="middle">人</text>
  <text x="690" y="60" class="ts sub" text-anchor="end">輪の外</text>
  <path d="M600,40 H650" class="lt dash"/>
  <text x="420" y="306" class="ts" text-anchor="middle">次の仕事へ</text>
</svg>
```

輪の形は変えません。4 つめの箱だけを、作ったのとは別の系列の AI に替えます。人は、輪の外に出ます。

※ 系列：AI のモデルの家系。どこまでを同じ系列とみなすかは、条文にまだ書かれていない。

## 穴の位置が、ずれる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g fill="#dbe7f5" stroke="#2f6fb3" stroke-width="2">
    <rect x="260" y="70" width="60" height="240" rx="8"/><rect x="420" y="70" width="60" height="240" rx="8"/>
  </g>
  <rect x="580" y="70" width="60" height="240" rx="8" fill="#fff" class="al"/>
  <g fill="#fff" stroke="#2f6fb3" stroke-width="1.5">
    <ellipse cx="290" cy="115" rx="16" ry="12"/><ellipse cx="290" cy="200" rx="18" ry="14"/><ellipse cx="290" cy="272" rx="14" ry="11"/>
    <ellipse cx="450" cy="140" rx="15" ry="12"/><ellipse cx="450" cy="200" rx="18" ry="14"/><ellipse cx="450" cy="255" rx="14" ry="11"/>
  </g>
  <g fill="#eef3fa" stroke="#2f6fb3" stroke-width="1.5">
    <ellipse cx="610" cy="100" rx="14" ry="11"/><ellipse cx="610" cy="150" rx="15" ry="11"/><ellipse cx="610" cy="262" rx="16" ry="12"/>
  </g>
  <path d="M120,200 H572" stroke="#c62828" stroke-width="4" marker-end="url(#arr-x)"/>
  <text x="120" y="186" class="ts xc">31 日の読み違い</text>
  <use href="#i-no" x="650" y="186" width="28" height="28"/>
  <text x="686" y="206" class="ts xc">ここで止まる</text>
  <g class="ts" text-anchor="middle"><text x="290" y="338">作る</text><text x="450" y="338">テストを書く</text><text x="610" y="338">判定</text></g>
  <g class="tx" text-anchor="middle"><text x="290" y="56">系列 A</text><text x="450" y="56">系列 A</text><text x="610" y="56">系列 B</text></g>
</svg>
```

元を替えると、穴の位置がずれます。p.19 では通り抜けた 31 日の読み違いが、3 枚目で止まります。

※ 必ず止まる、ではない。穴が重なる見込みが下がる、ということ。説明のために作った絵。

## 増やすのではなく、分ける

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="220" y="40" class="t" text-anchor="middle">同じ元のレビューを 3 回</text>
  <g fill="#dbe7f5" stroke="#2f6fb3" stroke-width="2">
    <rect x="110" y="70" width="44" height="220" rx="6"/><rect x="200" y="70" width="44" height="220" rx="6"/><rect x="290" y="70" width="44" height="220" rx="6"/>
  </g>
  <g fill="#fff" stroke="#2f6fb3" stroke-width="1.5">
    <ellipse cx="132" cy="180" rx="14" ry="12"/><ellipse cx="222" cy="180" rx="14" ry="12"/><ellipse cx="312" cy="180" rx="14" ry="12"/>
  </g>
  <path d="M60,180 H392" stroke="#c62828" stroke-width="4" marker-end="url(#arr-x)"/>
  <text x="220" y="322" class="ts xc" text-anchor="middle">通り抜ける</text>
  <path d="M440,50 V320" class="lt"/>
  <text x="660" y="40" class="t" text-anchor="middle">別の元の判定を 1 回</text>
  <rect x="650" y="70" width="44" height="220" rx="6" fill="#fff" class="al"/>
  <g fill="#eef3fa" stroke="#2f6fb3" stroke-width="1.5"><ellipse cx="672" cy="110" rx="13" ry="11"/><ellipse cx="672" cy="250" rx="13" ry="11"/></g>
  <path d="M500,180 H642" stroke="#c62828" stroke-width="4" marker-end="url(#arr-x)"/>
  <use href="#i-no" x="710" y="166" width="28" height="28"/>
  <text x="672" y="322" class="ts xc" text-anchor="middle">止まる</text>
</svg>
```

同じ元のレビューを何回重ねても、穴は同じ所に並びます。増やすのは回数ではありません。元を分けます。

## 作った者が、突き返したら

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="150" width="120" height="60" rx="6" class="a"/><text x="250" y="186" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="150" width="120" height="60" rx="6" class="box"/><text x="398" y="186" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="168" width="24" height="24"/>
  <rect x="510" y="150" width="140" height="60" rx="6" fill="#fff" class="al"/><text x="580" y="176" class="ts ac" text-anchor="middle">別の系列の AI</text><text x="580" y="198" class="ts ac" text-anchor="middle">が判定</text>
  <rect x="690" y="150" width="120" height="60" rx="6" class="box"/><text x="750" y="186" class="t" text-anchor="middle">次へ</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M310,180 H346" class="ln" marker-end="url(#arr)"/><path d="M470,180 H506" class="ln" marker-end="url(#arr)"/>
  <path d="M580,214 V256 H262 V216" class="ln" marker-end="url(#arr)"/>
  <use href="#i-no" x="568" y="232" width="24" height="24"/>
  <text x="420" y="282" class="ts xc" text-anchor="middle">判定：「31 日が出ない」</text>
  <path d="M250,146 V74 H750 V144" class="xl" marker-end="url(#arr-x)"/>
  <text x="500" y="42" class="ts xc" text-anchor="middle">作った AI：「その指摘は誤り」</text>
  <text x="500" y="64" class="ts xc" text-anchor="middle">そのまま通す</text>
  <text x="440" y="340" class="ts sub" text-anchor="middle">確かめた者は分かれている。通すと決めたのは、作った者</text>
</svg>
```

別の元に確かめさせても、通すかどうかを作った者が決めるなら、作った者が自分で通したのと同じです。

※ 説明のために作った場面です。

## 確かめると、通すは別

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="90" y="70" width="280" height="90" rx="10" class="soft"/>
  <text x="230" y="108" class="t" text-anchor="middle" font-weight="700">確かめる</text>
  <text x="230" y="138" class="ts sub" text-anchor="middle">良いか悪いかを言う</text>
  <rect x="510" y="70" width="280" height="90" rx="10" class="soft"/>
  <text x="650" y="108" class="t" text-anchor="middle" font-weight="700">通すと決める</text>
  <text x="650" y="138" class="ts sub" text-anchor="middle">次へ進めてよいと言う</text>
  <path d="M230,164 V206" class="ln" marker-end="url(#arr)"/><path d="M650,164 V206" class="ln" marker-end="url(#arr)"/>
  <rect x="140" y="212" width="180" height="56" rx="8" fill="#fff" class="al"/><text x="230" y="246" class="ts ac" text-anchor="middle">作った者ではない</text>
  <rect x="560" y="212" width="180" height="56" rx="8" fill="#fff" class="al"/><text x="650" y="246" class="ts ac" text-anchor="middle">作った者ではない</text>
  <rect x="360" y="296" width="160" height="50" rx="8" class="a"/><text x="440" y="327" class="ts on" text-anchor="middle">作った AI</text>
  <path d="M360,310 L326,262" class="xl dash"/><path d="M520,310 L554,262" class="xl dash"/>
  <use href="#i-no" x="318" y="276" width="24" height="24"/><use href="#i-no" x="538" y="276" width="24" height="24"/>
</svg>
```

確かめることと、通すと決めることは、別のことです。条文は、両方を、作った者の手の外に置きます。

## 書いた者の GO で、公開された

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
  <text x="805" y="218" class="tx" text-anchor="middle">71 秒後に戻す</text>
  <rect x="60" y="292" width="760" height="56" rx="8" class="soft"/>
  <text x="80" y="316" class="ts sub">このあと決まりに足された 1 行</text>
  <text x="80" y="338" class="ts">「公開に直結する PR では、書いた者は GO を単独で使わない」</text>
</svg>
```

merge する AI に聞かれ、書いた AI は「文章は良い」の意味で GO と返し、merge する AI は「出してよい」と読みました。誰も、ずるをしていません。

出典: kishibashi3/publications PR #40（merge 2026-09-19T16:09:17Z）と巻き戻しの PR #47（16:10:28Z）。著者の場で起きた。

## 基準が、書かれていないと

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="60" width="230" height="80" rx="8" fill="#fff" class="hl"/>
  <text x="145" y="92" class="ts hc" text-anchor="middle">頼み方</text>
  <text x="145" y="120" class="t" text-anchor="middle">「ちゃんと動くか見て」</text>
  <path d="M260,100 H336" class="ln" marker-end="url(#arr)"/>
  <rect x="340" y="70" width="160" height="60" rx="6" fill="#fff" class="al"/><text x="420" y="96" class="ts ac" text-anchor="middle">別の系列の AI</text><text x="420" y="118" class="ts ac" text-anchor="middle">が判定</text>
  <rect x="340" y="190" width="160" height="70" rx="6" class="w"/><text x="420" y="222" class="ts sub" text-anchor="middle">何を確かめる？</text><text x="420" y="244" class="ts sub" text-anchor="middle">書かれていない</text>
  <path d="M420,134 V186" class="lt dash"/>
  <rect x="620" y="190" width="220" height="70" rx="6" class="a"/><text x="730" y="222" class="ts on" text-anchor="middle">作った AI の読み方</text><text x="730" y="244" class="ts on" text-anchor="middle">「31 日は含めない」</text>
  <path d="M614,225 H506" class="al dash" marker-end="url(#arr)"/>
  <text x="560" y="286" class="tx" text-anchor="middle">同じ読み方で埋める</text>
  <use href="#i-ok" x="590" y="86" width="28" height="28"/><text x="626" y="106" class="ts okc">問題なし</text>
  <text x="440" y="320" class="ts xc" text-anchor="middle">分けたのに、同じ思い込みに戻る</text>
</svg>
```

何を確かめるかが書かれていないと、判定者は空白を、もっともらしく埋めます。埋め方は、作った者と同じになりがちです。

※ 説明のために作った場面です。

## 基準を、1 行書く

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="60" width="300" height="110" rx="8" fill="#fff" class="hl"/>
  <text x="180" y="92" class="ts hc" text-anchor="middle">頼み方</text>
  <text x="50" y="122" class="ts">10 月 1 日〜31 日で検索できる</text>
  <text x="50" y="152" class="t" font-weight="700">31 日を含む</text>
  <path d="M50,160 H168" class="hl"/>
  <path d="M330,115 H406" class="ln" marker-end="url(#arr)"/>
  <rect x="410" y="85" width="160" height="60" rx="6" fill="#fff" class="al"/><text x="490" y="111" class="ts ac" text-anchor="middle">別の系列の AI</text><text x="490" y="133" class="ts ac" text-anchor="middle">が判定</text>
  <rect x="410" y="220" width="160" height="60" rx="6" class="a"/><text x="490" y="256" class="ts on" text-anchor="middle">作ったもの</text>
  <path d="M490,149 V216" class="ln" marker-start="url(#arr)" marker-end="url(#arr)"/>
  <text x="500" y="190" class="tx">照らす</text>
  <use href="#i-no" x="610" y="101" width="28" height="28"/>
  <text x="646" y="121" class="ts xc">31 日が出ない</text>
  <text x="440" y="336" class="ts sub" text-anchor="middle">書いた基準があれば、照らす先がある</text>
</svg>
```

1 行書けば、判定者はそれと照らせます。基準は、書いてはじめて基準になります。

※ 書かれていないものをどう扱うかは、第 4 章で見ます。

## 3 つそろって、はじめて効く

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="end"><text x="300" y="104">作った者と、元が違う</text><text x="300" y="164">通すのは、作った者でない</text><text x="300" y="224">何を確かめるか、書いてある</text></g>
  <g class="tx" text-anchor="end"><text x="300" y="122">p.27</text><text x="300" y="182">p.29</text><text x="300" y="242">p.33</text></g>
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

## 人の待ちが、消える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="230" y="40" class="ts sub">PR 1 本が次へ進むまで（1 周）</text>
  <g class="t" text-anchor="end"><text x="210" y="112">人が確かめる</text><text x="210" y="232">別の AI が判定</text></g>
  <rect x="230" y="80" width="88" height="50" class="a"/><text x="274" y="111" class="ts on" text-anchor="middle">AI 11 分</text>
  <rect x="318" y="80" width="480" height="50" class="h"/><text x="558" y="111" class="ts on" text-anchor="middle">人の確認 60 分</text>
  <text x="810" y="112" class="t">71 分</text>
  <rect x="230" y="200" width="88" height="50" class="a"/><text x="274" y="231" class="ts on" text-anchor="middle">AI 11 分</text>
  <rect x="318" y="200" width="40" height="50" fill="#fff" class="al"/>
  <text x="370" y="232" class="t">16 分</text>
  <text x="338" y="276" class="tx" text-anchor="middle">判定 5 分</text>
  <text x="440" y="340" class="tl" text-anchor="middle">人の速さで、止まらない</text>
</svg>
```

人の確認 60 分が、別の AI の判定に替わります。輪は、人の速さで止まらなくなります。

※ 説明のために作った数字。上の段は p.9 の「いま」と同じ。縮尺も同じ。

## 万力の片側が、外れる

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
  <text x="725" y="296" class="ts ac" text-anchor="middle">元を分けた判定で、外れる</text>
  <rect x="380" y="145" width="160" height="80" rx="8" class="box"/>
  <text x="460" y="192" class="t" text-anchor="middle">あなたのチーム</text>
  <path d="M546,185 H600" class="ln" marker-end="url(#arr)"/>
</svg>
```

元を分けて判定すれば、人を外しても間違いは同じ速さでは増えません。右の壁が外れるので、左の壁から離れられます。

※ p.15「どちらにいても、挟まれる」の描き直し。

## 確かめる問い

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

この輪は、この章の 3 つのうち、どれに引っかかるでしょう。直すには、何を替えればよいでしょう。

※ 答え：3 つ全部。同じ元が確かめ、作った者が通し、何を確かめるかが書かれていない。

## 条文では、D3 の 1 行にある

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="800" height="300" rx="10" class="soft"/>
  <text x="70" y="88" class="ts sub">AA（Agentic Agile）の条文　D3 生成と判定の分離（全文）</text>
  <text x="70" y="160" style="font-size:22px" textLength="550" lengthAdjust="spacingAndGlyphs">判定は、生成と異なる主体またはモデルの系列で行う。</text>
  <text x="70" y="225" style="font-size:22px" textLength="286" lengthAdjust="spacingAndGlyphs">自らの成果を自ら承認しない</text>
  <text x="362" y="225" style="font-size:22px" textLength="198" lengthAdjust="spacingAndGlyphs">（P1・P2・前提）</text>
  <path d="M180,168 H604" class="al"/><text x="604" y="186" class="tx" text-anchor="end">p.27 穴の位置が、ずれる</text>
  <path d="M70,233 H356" class="hl"/><text x="356" y="251" class="tx" text-anchor="end">p.29・p.31 作った者が通す</text>
  <path d="M376,233 H406" class="al"/><path d="M417,233 H447" class="hl"/><path d="M458,233 H542" class="xl"/>
  <text x="70" y="274" class="tx">括弧の中は、この 1 行の理由。条文の先のほうに書いてある原則</text>
  <path d="M376,292 H406" class="al"/><text x="416" y="297" class="ts">P1 書かれていないものは、無いものとして扱う → p.33</text>
  <path d="M376,313 H406" class="hl"/><text x="416" y="318" class="ts">P2 どの層も、決まりに従って働き、下の決まりを書く → p.29</text>
  <path d="M376,334 H406" class="xl"/><text x="416" y="339" class="ts">前提（第 1 章 p.21）→ p.19・p.27</text>
</svg>
```

この章で見たことは、AA の条文では D3 の 1 行です。P1・P2 は、第 4 章・第 8 章で正面から扱います。

## 人は、どこへ行ったか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="150" width="120" height="60" rx="6" class="h"/><text x="90" y="186" class="t on" text-anchor="middle">頼む</text>
  <rect x="190" y="150" width="120" height="60" rx="6" class="a"/><text x="250" y="186" class="t on" text-anchor="middle">AI が作る</text>
  <rect x="350" y="150" width="120" height="60" rx="6" class="box"/><text x="398" y="186" class="t" text-anchor="middle">テスト</text><use href="#i-ok" x="436" y="168" width="24" height="24"/>
  <rect x="510" y="150" width="140" height="60" rx="6" fill="#fff" class="al"/><text x="580" y="176" class="ts ac" text-anchor="middle">別の系列の AI</text><text x="580" y="198" class="ts ac" text-anchor="middle">が判定</text>
  <rect x="690" y="150" width="120" height="60" rx="6" class="box"/><text x="750" y="186" class="t" text-anchor="middle">次へ</text>
  <path d="M150,180 H186" class="ln" marker-end="url(#arr)"/><path d="M310,180 H346" class="ln" marker-end="url(#arr)"/><path d="M470,180 H506" class="ln" marker-end="url(#arr)"/><path d="M650,180 H686" class="ln" marker-end="url(#arr)"/>
  <path d="M750,210 V280 H90 V214" class="ln" marker-end="url(#arr)"/>
  <path d="M670,120 V240" stroke="#d9822b" stroke-width="4" class="dash"/>
  <text x="670" y="108" class="t hc" text-anchor="middle">?</text>
  <rect x="700" y="30" width="140" height="50" rx="6" class="h"/><text x="770" y="62" class="t on" text-anchor="middle">人</text>
  <path d="M740,80 L680,100" class="lt dash"/>
  <text x="420" y="330" class="ts sub" text-anchor="middle">取り消せない「次へ」の手前には、まだ人が要るかもしれない</text>
</svg>
```

人は輪の外に出ました。でも、取り消せない操作の手前には、人を残すかもしれません。それが第 3 章です。
