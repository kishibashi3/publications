# 第 0 章　AA と巨大なシステム

群: 巨大なシステムの分業という問い
副題: 一つの Cell は巨大なシステムを開発できない

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（6e3f57bf・dd08b888）。GO: @ope-ultp1635 msg b918626f。群ごとに 5 回。群一（第 0・1 章）から。
2d0ca30 までの第 0 章（チームのあいだを版付きの文書と Evidence でつなぐ）は、v5 の群三（第 6〜8 章）へ移す。この章には持ってこない。
この本の問いは、structure-v5.md の「イデア」「AA がスケールしない理由」を、本の問いとして本の言葉に書き直して載せる。口語の原文と個人名は載せない（publications は公開 repo。@ope-ultp1635 msg 62a8ef68）。中身は弱めない: 一つの Cell は巨大なシステムを開発できるか／責任を負う人間が管理し切れるか／一つのループで価値を切り替えられるか。@reader の通読で、読者が旧ページの題と注の個人名で止まった（@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）。
第 0 章は断定で書く（structure-v5.md 判定の記録の 3 番目）。この本の問いは反語で、答えの向き（管理し切れない／切り替えられない）は問いの字から閉じる。
@reviewer 2〜4 回目の直しのうち、この章に掛かるもの:
- Cell の定義は core.md:28 の字のまま。「Cell の数は判断の責任者の数」とは書かない（reviewer 2-1。core.md:42 で一つの Cell に責任を負う人は複数いてよい）。
- 2d0ca30 の第 0 章は「この本は、Core に無い決まりを足しません」と書いていた。v5 の切り方（コンテキストスイッチが起きない範囲で切る）は Core に無い（core.md:52 は分割を定義するだけで、どこで分けるかを書かない。reviewer 2-2 と同じ所）。だから p.「切り方は、Core の外の提案」で、切り方が Core の規定ではなくこの本の提案であることを書いた（要るのは Core の規定ではないことの明示で、誰の言葉かではない。msg 62a8ef68）。
- 絵の Cell の枠は入れ子にしない（core.md:43）。
「ループ」は structure-v5.md「イデア」の語。AA の本に「ループ」の定義は無いので、旧第 1 章の Agent の注（計画し、道具を使い、結果を確かめて直す）から「Agent が計画し、作り、確かめて直すのを繰り返す流れ」と定義した。
決済・推薦の価値の例は書き手が作った（注に書いた）。
群二で直したこと（@ope-ultp1635 msg 83d1e0ea、@reader 目次 v5 の通読 349c4d63）: 章題の「一つの Cell」を「一つの開発単位」にした。目次で Cell が名前の付く前に出て、@reader の読者が止まった。Cell の名前はこの章の p.「AA と Cell」で付ける。p.「切る軸は価値・ドメイン・権限」の「人間は職能で分業してきました」を外した。SAFe・LeSS は職能で分けない（第 1 章の直しと同じ。@reader 349c4d63）。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff。判定の正本 @reviewer 2026-11-08-eaa-textbook-77a7fc9-ch00-04 / ch05-08 / ch09-12-furoku、@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）: p.「AA と Cell」の名付けを「AA のように自律して開発する単位」にした（第 2 章で中が人のチームでも Cell なのと食い違っていた。@reviewer 1 便）。第 3〜5 章の「〜で切るのも Core の外」のページを外し、p.「切り方は、Core の外の提案」の注 1 か所にまとめた（6 体とも開かなくなった形。読者）。
章題を短くした（@ope-ultp1635 msg 12bf66b5）: 全章の題を一つの主張で止め、理由・帰結・限定は章の概要へ移した。build.mjs に章題の上限 30 字（AA の最長 29 字）。この章は起点「AA は走り切れない」を題に残し、「EAA は…方法に答える」を章の概要の文へ移した。記録: writer-ja/drafts/eaa-toc/structure-v5.md「章題を短くした」。
章題を名詞句にした（@ope-ultp1635 msg 23aba03d、root CLAUDE.md「成果物の文章の作法」二 3df0d3d5）: 全章と付録の題を名詞句にし、短くした主張の 1 文は「副題:」の行に移した。起点「AA は一つの開発単位では巨大なシステムを走り切れない」はこの章の副題と、章の概要の文の 1 文目の両方に置いた。目次は章題の下に副題を出す。記録: writer-ja/drafts/eaa-toc/structure-v5.md「章題を名詞句にした」。
分ける理由の二つに根拠を入れた（@ope-ultp1635 msg d7431726。kishibashi3 の指摘を逐語で受けた: 追い切れないの「多すぎる」に根拠が無い・切り替えると何が悪いかが無い「ここは大事だね」）: p.「判断 8,000 件、追えるのは 80 件」「自分の現場で数える」「切り替えると取り違える」「取り違え 80 件、見つかるのは 1 件」（いまの題は「…多くて 1 件」）を足した。数は書き手が説明のために作り、注に書いた（AA の本 第 1 章 p.8 と同じ扱い。人のレビュー 60 分は AA の数字を借りた）。出典つきの数は AA の本 第 1 章 p.9 の調査を引くだけにした。代償は「取り違えが出て、追い切れない判断に紛れる」まで。切り方の判定（第 2 章）と、どちらの価値で答えたかが外から見えないこと（第 3 章）は先取りしない。
p.「巨大なシステムでは人間は分業する」を p.「追い切れず、取り違えるから分ける」に替えた（@ope-ultp1635 の見立て、採否は書き手）。人間の慣習を分ける根拠にすると、第 1 章の「職能で分ける理由は人間にあった。Agent には当てはまらない」と根拠の扱いが割れる。分ける理由は前の二つで閉じるので、このページは二つから分けることを結ぶ役にし、人間の分業の枠組みとの対応は付録へ送った。章の概要の「人間が分業するように」は根拠ではなく本の問いの字なので変えない。
57234c5 の検算を受けて直した（@ope-ultp1635 msg e0a49b49、判定の正本 @reviewer 2026-11-08-eaa-textbook-57234c5-ch00）: p.「自分の現場で数える」の注は、AA p.9 の調査を「律速になることは調査にある」と引いていた。AA は問いの字（レビューと検証へ移した）と「だから正しい、という数字ではありません」の断りを置いているので、問いの字を逐語で引き、律速を示した数字ではないと断った。p.「取り違え 80 件、見つかるのは多くて 1 件」は、1 件が出る前提（見る 1% は取り違えと関係なく選ぶ・見た中の取り違えは全部見つける）を注に書き、本文・図・題で 1 件を上限として書いた。注の上限 90 字に収めるため「取り違えの率も作った値」を外した（注の 1 文目「説明のために作った数字です」が率も含む）。見ても見つからない取り違えがあることは書かない（第 3 章 p.「切り替えは外から見えない」の先取りになる）。第 4 章以降に第 0 章の数（8,000 件・1%・80 件・1 件）を引く所は無い（eaa-ch01〜12・付録・巻末を grep。第 5 章 p.「責任者が追える大きさ」の「追い切れない」は数を引かない）。
「走り切る」を「開発する」にした（@ope-ultp1635 msg 3e7217f0。kishibashi3 の言葉「セルは、でいいよ。同じ意味」）: 問いの字は「一つの Cell は巨大なシステムを開発できるか」。副題・章の概要の 1 文目・絵も同じ形にした。466d747 で主語を「一つのループ」に替えたが（msg 1e9e028f）、この問いでは Cell とループは同じ意味なので主語は Cell に戻し、ループの定義も p.「一つのループは価値を切り替える」に戻した。前置きの「完璧な設計図を Agent に書かせれば、」は p.「素直に大きくすると一つの Cell」の絵と本文にあるので問いからは外した。副題に Cell が名前の付く前に出る（上の群二の記録）が、本人の字に従った。この上の記録に残る「走り切」「開発単位」は直した経緯の字で、本文には 0 件。
-->

```svg
<svg viewBox="0 0 880 340" width="880" height="340">
  <rect x="30" y="40" width="370" height="240" rx="10" class="box"/>
  <text x="215" y="30" class="t" text-anchor="middle" font-weight="700">一つの Cell で開発する</text>
  <rect x="180" y="58" width="70" height="40" rx="6" class="h"/><text x="215" y="84" class="ts on" text-anchor="middle">人間</text>
  <use href="#i-no" x="252" y="56" width="22" height="22"/><text x="300" y="84" class="tx">追い切れない</text>
  <circle cx="215" cy="190" r="56" class="ln" stroke-dasharray="6 5"/>
  <g class="tx" text-anchor="middle">
    <rect x="70" y="128" width="84" height="28" rx="4" class="xl" style="fill:#fff"/><text x="112" y="147">止めない</text>
    <rect x="276" y="128" width="84" height="28" rx="4" class="xl" style="fill:#fff"/><text x="318" y="147">速く変える</text>
    <rect x="173" y="232" width="84" height="28" rx="4" class="xl" style="fill:#fff"/><text x="215" y="251">安く保つ</text>
  </g>
  <text x="215" y="196" class="ts xc" text-anchor="middle">価値を切り替える</text>
  <g>
    <rect x="460" y="60" width="120" height="150" rx="10" class="box"/><rect x="490" y="74" width="60" height="32" rx="6" class="h"/><text x="520" y="96" class="tx on" text-anchor="middle">人間</text><text x="520" y="140" class="ts" text-anchor="middle" font-weight="700">Cell</text><text x="520" y="168" class="tx hc" text-anchor="middle">止めない</text>
    <rect x="610" y="60" width="120" height="150" rx="10" class="box"/><rect x="640" y="74" width="60" height="32" rx="6" class="h"/><text x="670" y="96" class="tx on" text-anchor="middle">人間</text><text x="670" y="140" class="ts" text-anchor="middle" font-weight="700">Cell</text><text x="670" y="168" class="tx hc" text-anchor="middle">速く変える</text>
    <rect x="760" y="60" width="100" height="150" rx="10" class="box"/><rect x="780" y="74" width="60" height="32" rx="6" class="h"/><text x="810" y="96" class="tx on" text-anchor="middle">人間</text><text x="810" y="140" class="ts" text-anchor="middle" font-weight="700">Cell</text><text x="810" y="168" class="tx hc" text-anchor="middle">安く保つ</text>
  </g>
  <path d="M580,190 H610 M730,190 H760" class="ln"/>
  <text x="660" y="30" class="t hc" text-anchor="middle" font-weight="700">文脈が疎結合になるように分ける</text>
  <text x="660" y="246" class="ts sub" text-anchor="middle">一つの Cell は、一つの価値で判断する</text>
  <path d="M410,160 H450" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="320" class="t" text-anchor="middle" font-weight="700">人間が分業するように、Agent の仕事を分ける</text>
</svg>
```

一つの Cell は巨大なシステムを開発できません。この本は、人間が分業するように仕事を分けて Agent に実行させる方法に答えます。答えは、各主体の文脈が疎結合になるように分けることです。

## AA と Cell

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="250" y="50" width="380" height="240" rx="10" class="box"/>
  <text x="440" y="86" class="t" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="405" y="104" width="70" height="40" rx="6" class="h"/><text x="440" y="130" class="ts on" text-anchor="middle">人間</text>
  <text x="500" y="130" class="tx">責任を負う</text>
  <rect x="330" y="176" width="220" height="44" rx="22" class="a"/><text x="440" y="204" class="ts on" text-anchor="middle">Agent が開発する（AA）</text>
  <g class="tx" text-anchor="middle"><text x="330" y="262">目的</text><text x="390" y="262">責任</text><text x="450" y="262">権限</text><text x="530" y="262">実行能力</text></g>
  <text x="440" y="336" class="ts sub" text-anchor="middle">外との合意に基づいて、自律して成果を出す単位</text>
</svg>
```

AA は、AI エージェント（Agent）に開発を任せるやり方で、同じ組の AA の本が扱います。AA のように自律して開発する単位を、この本では Cell と呼びます。

※ Cell は「一定の目的に対する責任・権限・実行能力を持ち、外部との合意に基づいて自律的に成果を実現する単位」。出典: EAA Core 版 6「0.」。

## 素直に大きくすると一つの Cell

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="110" width="150" height="150" rx="4" class="hl" style="fill:#fff"/>
  <text x="115" y="150" class="ts hc" text-anchor="middle" font-weight="700">完璧な設計図</text>
  <g class="lt"><path d="M66,180 H164 M66,204 H164 M66,228 H140"/></g>
  <path d="M190,185 H260" class="ln" marker-end="url(#arr)"/><text x="225" y="174" class="tx" text-anchor="middle">書かせる</text>
  <rect x="270" y="60" width="300" height="250" rx="10" class="box"/>
  <text x="420" y="96" class="t" text-anchor="middle" font-weight="700">一つの Cell</text>
  <rect x="320" y="150" width="200" height="44" rx="22" class="a"/><text x="420" y="178" class="ts on" text-anchor="middle">Agent</text>
  <text x="420" y="250" class="ts sub" text-anchor="middle">最後まで開発する</text>
  <path d="M570,185 H640" class="ln" marker-end="url(#arr)"/>
  <rect x="650" y="80" width="200" height="210" rx="6" class="soft"/>
  <g class="h" opacity=".8"><rect x="670" y="100" width="70" height="40" rx="4"/><rect x="760" y="100" width="70" height="40" rx="4"/><rect x="670" y="160" width="70" height="40" rx="4"/><rect x="760" y="160" width="70" height="40" rx="4"/><rect x="670" y="220" width="70" height="40" rx="4"/><rect x="760" y="220" width="70" height="40" rx="4"/></g>
  <text x="750" y="320" class="ts" text-anchor="middle">巨大なシステム</text>
</svg>
```

AA で巨大なシステムを作る素直なやり方は、完璧な設計図を Agent に書かせ、一つの Cell で最後まで開発することです。

※ EAA Core は、AA が全部の責務を担う構成を「1 Cell の EAA」と呼ぶ。出典: EAA Core 版 6「0.」。

## 一つの Cell への問い

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="40" width="760" height="270" rx="10" class="soft"/>
  <text x="90" y="100" class="t" font-weight="700">一つの Cell は、巨大なシステムを開発できるか。</text>
  <text x="90" y="176" class="t hc" font-weight="700">その Cell の判断を、責任を負う人間は管理し切れるか。</text>
  <text x="90" y="236" class="t hc" font-weight="700">マイクロサービスごとに優先する価値が違うのに、</text>
  <text x="90" y="268" class="t hc" font-weight="700">一つのループでそれを切り替えられるか。</text>
  <text x="440" y="350" class="ts sub" text-anchor="middle">この本の出発点の問い</text>
</svg>
```

このやり方を問います。一つの Cell は巨大なシステムを開発できるか、人間が管理し切れるか、一つのループで価値を切り替えられるか。この章は、この問いに答えます。

※ どの問いも、答えは「できない」。次のページから、人間が追い切れない理由と、ループが価値を切り替える理由と、その代償を見る。

## 一つの Cell の判断は追い切れない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="560" height="290" rx="10" class="box"/><text x="320" y="72" class="t" text-anchor="middle" font-weight="700">一つの Cell</text>
  <g class="a">
    <circle cx="90" cy="120" r="9"/><circle cx="150" cy="150" r="9"/><circle cx="210" cy="110" r="9"/><circle cx="270" cy="160" r="9"/><circle cx="330" cy="120" r="9"/><circle cx="390" cy="150" r="9"/><circle cx="450" cy="110" r="9"/><circle cx="520" cy="140" r="9"/>
    <circle cx="100" cy="210" r="9"/><circle cx="170" cy="250" r="9"/><circle cx="240" cy="220" r="9"/><circle cx="310" cy="260" r="9"/><circle cx="380" cy="220" r="9"/><circle cx="450" cy="260" r="9"/><circle cx="530" cy="220" r="9"/>
    <circle cx="120" cy="300" r="9"/><circle cx="260" cy="300" r="9"/><circle cx="400" cy="300" r="9"/><circle cx="540" cy="295" r="9"/>
  </g>
  <rect x="80" y="96" width="150" height="80" rx="40" class="hl"/>
  <rect x="680" y="140" width="120" height="50" rx="6" class="h"/><text x="740" y="171" class="ts on" text-anchor="middle">人間</text>
  <path d="M676,165 C 500,170 300,140 234,138" class="lt dash"/>
  <text x="740" y="220" class="ts" text-anchor="middle">追えるのは</text><text x="740" y="244" class="ts" text-anchor="middle">一部の判断だけ</text>
  <text x="320" y="364" class="ts sub" text-anchor="middle">● は Cell の中で下される判断</text>
</svg>
```

一つの Cell で巨大なシステムを開発すると、中で下される判断が多すぎて、その Cell の責任を負う人間には追い切れません。

※ AA の本の第 1 章の、人がレビューすれば遅く、外せば誤りが積み上がる板挟みは、Cell が大きくなるほど強くなる。

## 判断 8,000 件、追えるのは 80 件

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="230" y="40" class="ts sub">一つの Cell で扱うサービスの数と、1 日の判断のうち人間が追える割合</text>
  <g class="t" text-anchor="end"><text x="210" y="102">サービス 1 本</text><text x="210" y="192">10 本</text><text x="210" y="282">100 本</text></g>
  <rect x="230" y="70" width="560" height="50" class="soft"/><rect x="230" y="70" width="560" height="50" class="h"/>
  <text x="510" y="101" class="ts on" text-anchor="middle">追える 80 件 ／ 判断 80 件</text>
  <rect x="230" y="160" width="560" height="50" class="soft"/><rect x="230" y="160" width="56" height="50" class="h"/>
  <text x="300" y="191" class="ts">追える 80 件 ／ 判断 800 件</text>
  <rect x="230" y="250" width="560" height="50" class="soft"/><rect x="230" y="250" width="6" height="50" class="h"/>
  <text x="250" y="281" class="ts">追える 80 件 ／ 判断 8,000 件</text>
  <g class="t"><text x="805" y="102">100%</text><text x="805" y="192">10%</text><text x="805" y="282">1%</text></g>
  <text x="440" y="350" class="tl" text-anchor="middle">増えるのは、判断だけ</text>
</svg>
```

サービス 1 本で 1 日 80 件の判断が出て、人間が追えるのも 80 件とします。サービス 100 本を一つの Cell で扱うと、判断は 8,000 件、追えるのは 1% です。

※ 説明のために作った数字です。PR 1 本に判断 10 件、サービス 1 本に PR 1 日 8 本。人のレビューは AA の本 第 1 章 p.8 の PR 1 本 60 分で、1 日 8 本まで見る。

## 自分の現場で数える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="70" width="380" height="200" rx="10" class="soft"/>
  <text x="230" y="112" class="t" text-anchor="middle" font-weight="700">Cell の中で出る PR</text>
  <text x="230" y="180" class="ts" text-anchor="middle">1 日に出る PR の本数</text>
  <text x="230" y="240" class="tx" text-anchor="middle">Cell を大きくすると増える</text>
  <text x="440" y="180" class="tl" text-anchor="middle">対</text>
  <rect x="460" y="70" width="380" height="200" rx="10" class="hl" style="fill:#fff"/>
  <text x="650" y="112" class="t hc" text-anchor="middle" font-weight="700">人間が見られる PR</text>
  <text x="650" y="180" class="ts" text-anchor="middle">責任を負う人間が 1 日にレビューできる本数</text>
  <text x="650" y="240" class="tx" text-anchor="middle">Cell を大きくしても増えない</text>
  <text x="440" y="330" class="t" text-anchor="middle" font-weight="700">自分の現場の数を入れて、左と右を比べる</text>
</svg>
```

自分の現場では、1 日に出る PR の本数と、責任を負う人間が 1 日にレビューできる本数を比べます。Cell を大きくして増えるのは、前者だけです。

※ AA の本 第 1 章 p.9 の調査で、1,528 人の 85% が「AI はボトルネックを、コードを書くことから、レビューと検証へ移した」に「そう思う」と答えた。律速を示した数字ではない。

## サービスごとに価値が違う

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g>
    <rect x="40" y="70" width="240" height="200" rx="10" class="soft"/><text x="160" y="110" class="t" text-anchor="middle" font-weight="700">決済</text>
    <rect x="70" y="150" width="180" height="50" rx="6" class="hl" style="fill:#fff"/><text x="160" y="182" class="ts hc" text-anchor="middle">止めない</text>
    <rect x="320" y="70" width="240" height="200" rx="10" class="soft"/><text x="440" y="110" class="t" text-anchor="middle" font-weight="700">推薦</text>
    <rect x="350" y="150" width="180" height="50" rx="6" class="hl" style="fill:#fff"/><text x="440" y="182" class="ts hc" text-anchor="middle">速く変える</text>
    <rect x="600" y="70" width="240" height="200" rx="10" class="soft"/><text x="720" y="110" class="t" text-anchor="middle" font-weight="700">集計</text>
    <rect x="630" y="150" width="180" height="50" rx="6" class="hl" style="fill:#fff"/><text x="720" y="182" class="ts hc" text-anchor="middle">安く保つ</text>
  </g>
  <text x="440" y="320" class="t" text-anchor="middle" font-weight="700">何を優先して判断するかが、サービスごとに違う</text>
</svg>
```

巨大なシステムでは、マイクロサービスごとに優先する価値が違います。例えば決済は止めないことを、推薦は変える速さを優先します。

※ 例は説明のために作った。

## 一つのループは価値を切り替える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <circle cx="300" cy="190" r="120" class="ln"/>
  <g class="ts" text-anchor="middle">
    <rect x="250" y="52" width="100" height="36" rx="18" class="a"/><text x="300" y="76" class="on">計画する</text>
    <rect x="370" y="172" width="100" height="36" rx="18" class="a"/><text x="420" y="196" class="on">作る</text>
    <rect x="250" y="292" width="100" height="36" rx="18" class="a"/><text x="300" y="316" class="on">確かめる</text>
    <rect x="130" y="172" width="100" height="36" rx="18" class="a"/><text x="180" y="196" class="on">直す</text>
  </g>
  <text x="300" y="196" class="ts sub" text-anchor="middle">ループ</text>
  <g class="ts" text-anchor="middle">
    <rect x="560" y="70" width="260" height="44" rx="4" class="xl" style="fill:#fff"/><text x="690" y="98" class="xc">決済の判断：止めない</text>
    <rect x="560" y="150" width="260" height="44" rx="4" class="xl" style="fill:#fff"/><text x="690" y="178" class="xc">推薦の判断：速く変える</text>
    <rect x="560" y="230" width="260" height="44" rx="4" class="xl" style="fill:#fff"/><text x="690" y="258" class="xc">集計の判断：安く保つ</text>
  </g>
  <path d="M690,114 V146 M690,194 V226" class="ln" marker-end="url(#arr)"/>
  <text x="690" y="320" class="ts xc" text-anchor="middle">判断のたびに優先順位を切り替える</text>
</svg>
```

Agent が計画し、作り、確かめて直すのを繰り返す流れをループと呼びます。一つのループで全部のサービスを扱うと、判断のたびに価値を切り替えます。

※ 主体の中で、判断に使う文脈がこのように切り替わることを、第 2 章でコンテキストスイッチと呼び、切り方の判定に使う。

## 切り替えると取り違える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <circle cx="150" cy="170" r="90" class="ln"/>
  <text x="150" y="176" class="ts sub" text-anchor="middle">一つのループ</text>
  <path d="M236,140 L296,104 M236,190 L296,198" class="lt"/>
  <rect x="300" y="80" width="250" height="44" rx="4" class="xl" style="fill:#fff"/><text x="425" y="108" class="ts xc" text-anchor="middle">前の判断：推薦を速く変える</text>
  <path d="M425,124 V170" class="ln" marker-end="url(#arr)"/>
  <rect x="300" y="176" width="250" height="44" rx="4" class="xl" style="fill:#fff"/><text x="425" y="204" class="ts xc" text-anchor="middle">次の判断：決済も速く変える</text>
  <text x="425" y="250" class="tx" text-anchor="middle">決済が優先するのは、止めないこと</text>
  <path d="M550,198 H600" class="ln" marker-end="url(#arr)"/>
  <rect x="610" y="150" width="230" height="96" rx="6" class="soft"/>
  <text x="725" y="190" class="ts" text-anchor="middle">確かめを省いた変更が</text>
  <text x="725" y="218" class="ts" text-anchor="middle">決済に出る</text>
  <text x="440" y="330" class="t" text-anchor="middle" font-weight="700">切り替えるたびに、前の価値が残ることがある</text>
</svg>
```

切り替えのたびに、前の仕事の価値で次の判断を下すことがあります。決済の判断を速く変えるで下すと、確かめを省いた変更が決済に出ます。

※ 例は説明のために作った。

## 取り違え 80 件、見つかるのは多くて 1 件

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="70" width="230" height="170" rx="10" class="soft"/>
  <text x="155" y="110" class="ts" text-anchor="middle">1 日の判断</text><text x="155" y="170" class="tl" text-anchor="middle">8,000 件</text><text x="155" y="210" class="tx" text-anchor="middle">ほぼ全部が切り替えを挟む</text>
  <path d="M270,155 H320" class="ln" marker-end="url(#arr)"/>
  <rect x="325" y="70" width="230" height="170" rx="10" class="xl" style="fill:#fff"/>
  <text x="440" y="110" class="ts xc" text-anchor="middle">取り違えた判断</text><text x="440" y="170" class="tl" text-anchor="middle">80 件</text><text x="440" y="210" class="tx" text-anchor="middle">正しい判断と同じ形で出る</text>
  <path d="M555,155 H605" class="ln" marker-end="url(#arr)"/>
  <rect x="610" y="70" width="230" height="170" rx="10" class="hl" style="fill:#fff"/>
  <text x="725" y="110" class="ts hc" text-anchor="middle">人間が見つける</text><text x="725" y="170" class="tl" text-anchor="middle">多くて 1 件</text><text x="725" y="210" class="tx" text-anchor="middle">残りは見つからないまま出る</text>
  <g class="tx" text-anchor="middle"><text x="297" y="270">100 回に 1 回</text><text x="582" y="270">追えるのは 1%</text></g>
  <text x="440" y="330" class="t" text-anchor="middle" font-weight="700">取り違えは、追い切れない判断に紛れる</text>
</svg>
```

8,000 件の判断がほぼ全部切り替えを挟み、100 回に 1 回取り違えると、1 日 80 件です。人間が追えるのは 1% なので、見つかるのは多くて 1 件です。

※ 説明のために作った数字です。8,000 件と 1% は p.「判断 8,000 件、追えるのは 80 件」と同じ。1 件は、見る 1% を取り違えと関係なく選び、見た取り違えを全部見つけた場合の上限。

## 追い切れず、取り違えるから分ける

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="300" height="90" rx="10" class="hl" style="fill:#fff"/>
  <text x="190" y="96" class="t hc" text-anchor="middle" font-weight="700">人間が追い切れない</text><text x="190" y="128" class="tx" text-anchor="middle">追えるのは判断の 1%</text>
  <rect x="40" y="180" width="300" height="90" rx="10" class="xl" style="fill:#fff"/>
  <text x="190" y="216" class="t xc" text-anchor="middle" font-weight="700">ループが価値を取り違える</text><text x="190" y="248" class="tx" text-anchor="middle">1 日 80 件、見つかるのは多くて 1 件</text>
  <path d="M340,105 C 380,105 380,165 410,165 M340,225 C 380,225 380,165 410,165" class="ln"/>
  <path d="M410,165 H450" class="ln" marker-end="url(#arr)"/>
  <g>
    <rect x="460" y="110" width="110" height="110" rx="10" class="box"/><text x="515" y="172" class="ts" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="595" y="110" width="110" height="110" rx="10" class="box"/><text x="650" y="172" class="ts" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="730" y="110" width="110" height="110" rx="10" class="box"/><text x="785" y="172" class="ts" text-anchor="middle" font-weight="700">Cell</text>
  </g>
  <text x="650" y="90" class="ts" text-anchor="middle">一つの Cell で開発せず、分ける</text>
  <text x="440" y="330" class="t hc" text-anchor="middle" font-weight="700">分ける理由はこの二つ。問題は、何で分けるか</text>
</svg>
```

一つの Cell で開発すると、人間は判断を追い切れず、ループは価値を取り違えます。だから仕事を分けます。問題は、何で分けるかです。

※ 分ける理由はこの二つで、人間が分業してきた慣習には拠らない。人間の分業の枠組みとの対応は付録で見る。

## 答え：文脈を疎結合に分ける

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g>
    <rect x="40" y="60" width="230" height="220" rx="10" class="box"/><text x="155" y="96" class="t" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="325" y="60" width="230" height="220" rx="10" class="box"/><text x="440" y="96" class="t" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="610" y="60" width="230" height="220" rx="10" class="box"/><text x="725" y="96" class="t" text-anchor="middle" font-weight="700">Cell</text>
  </g>
  <g class="tx">
    <text x="64" y="134">読む語と記録</text><text x="64" y="164">優先する価値</text><text x="64" y="194">判断の権限</text>
    <text x="349" y="134">読む語と記録</text><text x="349" y="164">優先する価値</text><text x="349" y="194">判断の権限</text>
    <text x="634" y="134">読む語と記録</text><text x="634" y="164">優先する価値</text><text x="634" y="194">判断の権限</text>
  </g>
  <g class="ts hc" text-anchor="middle"><text x="155" y="250">文脈が一つ</text><text x="440" y="250">文脈が一つ</text><text x="725" y="250">文脈が一つ</text></g>
  <path d="M270,170 H325 M555,170 H610" class="ln"/>
  <text x="440" y="330" class="t" text-anchor="middle" font-weight="700">あいだの結合は少なく、明示してある</text>
</svg>
```

この本の答えは、各主体の文脈が疎結合になるように分けることです。一つの主体が、自分の仕事を進めるあいだに別の文脈へ切り替えずに済むように切ります。

※ 文脈は、その主体が判断に使う語と記録・優先する価値・判断の権限を指す。疎結合は結合が無いことではなく、結合が少なく、明示されていること（第 6 章）。

## 切る軸は価値・ドメイン・権限

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g opacity=".7">
    <rect x="40" y="60" width="220" height="200" rx="10" class="soft"/>
    <text x="150" y="96" class="t" text-anchor="middle" font-weight="700">職能</text>
    <g class="ts" text-anchor="middle"><text x="150" y="140">設計・実装</text><text x="150" y="170">テスト・レビュー</text></g>
    <use href="#i-no" x="138" y="200" width="24" height="24"/>
  </g>
  <text x="150" y="300" class="ts sub" text-anchor="middle">理由は第 1 章</text>
  <g>
    <rect x="320" y="60" width="160" height="200" rx="10" class="hl" style="fill:#fff"/><text x="400" y="110" class="t hc" text-anchor="middle" font-weight="700">価値</text><text x="400" y="150" class="tx" text-anchor="middle">何を優先するか</text><text x="400" y="230" class="ts" text-anchor="middle">第 3 章</text>
    <rect x="500" y="60" width="160" height="200" rx="10" class="hl" style="fill:#fff"/><text x="580" y="110" class="t hc" text-anchor="middle" font-weight="700">ドメイン</text><text x="580" y="150" class="tx" text-anchor="middle">何を扱うか</text><text x="580" y="230" class="ts" text-anchor="middle">第 4 章</text>
    <rect x="680" y="60" width="160" height="200" rx="10" class="hl" style="fill:#fff"/><text x="760" y="110" class="t hc" text-anchor="middle" font-weight="700">権限</text><text x="760" y="150" class="tx" text-anchor="middle">何を決められるか</text><text x="760" y="230" class="ts" text-anchor="middle">第 5 章</text>
  </g>
  <text x="580" y="300" class="ts sub" text-anchor="middle">判定は第 2 章：主体の中でコンテキストスイッチが起きないか</text>
</svg>
```

この本は、職能ではなく価値・ドメイン・権限で切ります。職能で切らない理由は第 1 章、切り方の判定は第 2 章で見ます。

※ 価値・ドメイン・権限は切る軸の例で、全部ではない。どの軸で切っても、判定は第 2 章の一つに通す。

## 切り方は、Core の外の提案

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="380" height="230" rx="10" class="box"/>
  <text x="230" y="96" class="t" text-anchor="middle" font-weight="700">EAA Core が定める</text>
  <g class="ts"><text x="70" y="140">分割は、責務と判断権限を渡すこと</text><text x="70" y="172">分けた後の責任・権限・合意</text><text x="70" y="204">境界を越える Evidence と取り決め</text></g>
  <rect x="460" y="60" width="380" height="230" rx="10" class="hl" style="fill:#fff"/>
  <text x="650" y="96" class="t hc" text-anchor="middle" font-weight="700">この本が足す</text>
  <g class="ts"><text x="490" y="140">どこで切るか</text><text x="490" y="172">文脈が疎結合になるように</text><text x="490" y="204">価値・ドメイン・権限で</text></g>
  <text x="650" y="258" class="tx" text-anchor="middle">この本の提案。Core の規定ではない</text>
  <text x="440" y="340" class="ts sub" text-anchor="middle">左は Core の字で書き、右はこの本の提案として書く</text>
</svg>
```

EAA Core は、分割と分けた後の責任・権限・合意を定めますが、どこで切るかは書いていません。この本の切り方は、Core の規定ではなく、この本の提案です。

※ 出典: EAA Core 版 6「1. 責務と分割」。分割を「責務と自律的な判断権限を別の責任主体へ引き渡すこと」と定める。第 3〜5 章の切り方も、すべて同じ扱い。

## この本の構成

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <rect x="40" y="14" width="800" height="60" rx="6" class="soft"/>
    <text x="60" y="40" font-weight="700">巨大なシステムの分業という問い</text>
    <text x="60" y="63" class="sub">いまの章と第 1 章。職能で切らない理由</text>
    <a href="#ch1"><text x="820" y="40" text-anchor="end">第 1 章</text></a>
    <rect x="40" y="82" width="800" height="60" rx="6" class="lt" style="fill:#fff"/>
    <text x="60" y="108" font-weight="700">文脈が疎結合になる切り方</text>
    <text x="60" y="131" class="sub">切り方の判定と、価値・ドメイン・権限での切り方</text>
    <a href="#ch2"><text x="820" y="108" text-anchor="end">第 2 章から</text></a>
    <rect x="40" y="150" width="800" height="60" rx="6" class="lt" style="fill:#fff"/>
    <text x="60" y="176" font-weight="700">切っても残る結合の持ち方</text>
    <text x="60" y="199" class="sub">Cell のあいだの取り決め、仕事の渡し方、成果の確かめ方</text>
    <a href="#ch6"><text x="820" y="176" text-anchor="end">第 6 章から</text></a>
    <rect x="40" y="218" width="800" height="60" rx="6" class="lt" style="fill:#fff"/>
    <text x="60" y="244" font-weight="700">分業を続けながら境界を保つ</text>
    <text x="60" y="267" class="sub">取り決めの版の変え方と、共有する文書の改訂の承認</text>
    <a href="#ch9"><text x="820" y="244" text-anchor="end">第 9 章から</text></a>
    <rect x="40" y="286" width="800" height="60" rx="6" class="lt" style="fill:#fff"/>
    <text x="60" y="312" font-weight="700">切り直しと加わり方</text>
    <text x="60" y="335" class="sub">Cell の分け直しと、いまの分業からの始め方</text>
    <a href="#ch11"><text x="820" y="312" text-anchor="end">第 11 章から</text></a>
  </g>
</svg>
```

第 1 章で職能で切らない理由、第 2〜5 章で切り方、第 6〜8 章で切っても残る結合、第 9・10 章で境界の保ち方、第 11・12 章で切り直しと始め方を見ます。

※ LeSS・SAFe・Spotify など、人間の分業の枠組みとの対応は付録で見る。
