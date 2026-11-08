# 付録　LeSS・SAFe・Spotify との対応

副題: 大規模開発の枠組みは、集める決定と任せる決定を分けている

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（77de7781）の付録。着手: @ope-ultp1635 msg cfe0fe59（群五）。
v5 の付録の題は「LeSS・SAFe・Spotify は、人間の分業のあいだの合意を一人に集めるか、各チームに任せて持つ」。群二で「SAFe をどちらに置くかは付録を書くとき原文で決める」と残していた（structure-v5.md「本文を書いて変えた所（群一・群二）」）。@reader 目次の通読（349c4d63）で読者（SAFe の RTE・SPC）が題で確かめに行った。
SAFe の置き場所の判定（原文に当たった。2026-11-08）:
- Principle #9 の Web Archive 2022-02-01 版（web.archive.org/web/20220201024706/https://www.scaledagileframework.com/decentralize-decision-making/、SAFe 5.1 の頃）: 見出し「Centralize Strategic Decisions」の下で「Of course, not all decisions should be decentralized. Some decisions are strategic, have far-reaching impact, and are outside the scope, knowledge, or responsibilities of the teams.」、性質は「Infrequent」「Long-lasting」「Provide significant economies of scale」。見出し「Decentralize Everything Else」の下で「The vast majority of decisions do not reach the threshold of strategic importance. All other decisions should be decentralized.」。
- 同 2023-12-16 版（web.archive.org/web/20231216044729/https://scaledagileframework.com/decentralize-decision-making/）: 「take vs delegate」の考える道具（frequency・time-criticality・economies of scale を 0〜2 で付け、0〜3 は take、4〜6 は delegate）。「delegating the decision to others closer to the task is the critical element of decentralizing decision-making」。
- いまの版（framework.scaledagile.com/decentralize-decision-making）: 導入部だけ読める（以下はログインが要る）。「when managerial input is necessary for most decisions, it causes a queue of decision requests that block progress」。
判定: SAFe は既定が任せる側で、集めるのは戦略的な一部の決定だけ。2d0ca30 の旧第 1 章は SAFe を「集める：範囲を限る」に置き、「中央に集める決定を…限る」と書いた。字は原文と合うが、置き場所が「集める」側の例になっていて、原文の既定（Decentralize Everything Else）と逆に読める。付録では SAFe を「任せるのが既定、戦略的な決定だけ集める」に置いた。
これで v5 の題（集めるか、任せるか）は三つのどれにも当たらない: LeSS は優先順位を一人の PO に集め調整は任せる、SAFe は戦略的な決定だけを集め他は任せる、Spotify は大きく任せた。三つとも「どちらか」ではなく、決定ごとに分けている。題を「一か所に集めるものと各チームに任せるものに分けている」に変えた（「一人」を「一か所」にしたのは、SAFe で集める先が Leadership で一人ではないため）。
PI Planning（framework.scaledagile.com/pi-planning、2026-11-08）: 「PI Planning is a cadence-based event for the entire ART that aligns teams and stakeholders to a shared mission and vision.」「It is typically a 2-day event for the entire ART that takes place every 8-12 weeks.」「PI Planning is led by the Release Train Engineer (RTE).」出力は「an ART planning board that reflects feature delivery dates and dependencies」。
LeSS（2026-11-08 に当たり直した）: Area Product Owner「With 50 teams this leads to a PB with 200 PBIs just for one iteration.」「Prioritizing 200 PBIs per iteration is too much work for one PO.」「The main reason for having Area Product Owners is to prevent the Product Owner from becoming overloaded.」「the PO always has the final decision」。Coordination and Integration「You do not need a formal, official, usually slow coordination mechanism in order to coordinate.」「“just talk” by going to the other team, picking up the phone …」。2d0ca30 の訳（EAA 紹介 0）と中身は同じ。
Spotify: Jeremiah Lee「Spotify's Failed #SquadGoals」（jeremiahlee.com/posts/failed-squad-goals/、2020-04-19）は当たり直した —「There was no single person accountable for the engineering team's delivery」「who could negotiate prioritization of work at an equivalent level of responsibility」、「Henrik Kniberg talked about how we're not that good at large initiatives」。Kniberg の動画「Spotify Engineering Culture part 1・2」（2014）は当たり直していない。「疎結合だがしっかり揃ったチーム」は EAA 紹介 0 の訳のまま。p.「引用の確かめ方」に分けて書いた。Lee の字は squad の中の話（エンジニアリングマネージャーがいない）で、チームのあいだの話ではない。本文はその範囲で書いた。Lee の役職の字: 本人の記事では Spotify のプロダクトマネージャーとして入社し、いまは在籍していない。
旧第 1 章の直しを落とさずに持ってきた（eaa-ch01.md 7 行の注）: 引用を当たり直したかを本文と絵で見せる（p.「引用の確かめ方」）、LeSS の URL と参照日（絵の中）、片側改訂を防ぐのは core.md:79・80・91（p.「あいだの合意を、書いて持つ」の注）、EAA 紹介 0 の置き場所は本文に書かない。
旧第 1 章の「実行が安くなり、判断が残る」から「相手の中は、こちらから選べない」までの、Agent が実行すると集める側・任せる側の両方が狭くなる論は持ってこなかった。新しい構成で「なぜ Agent では違うか」を答えるのは第 0・1 章（一つの Cell を追い切れない・職能は Agent の文脈にならない）で、付録は「枠組みを使っている読み手向けに、各枠組みの記述を本文の切り方に対応づける」（structure-v5.md の付録の行）ところまで。p.「あいだの合意を、書いて持つ」に結論だけ置いた。
p.「この本の切り方との対応」は書き手の読み。枠組みの語とこの本の語は同じ物を指さない。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff、@reviewer 2026-11-08 ch09-12-furoku、@reader r3）:
- 事実の誤り: p.「SAFe：既定は任せる側」の注「2023 年 12 月の版は…考える形に書き直している」。2022-02-01 の版にも「A Lightweight Thinking Tool for Decision-Making」がある。2023 年版で変わったのは Take / Delegate などの選択肢と点数。注から「書き直している」を外した。
- 引用の版: 「Centralize Strategic Decisions」「Decentralize Everything Else」「All other decisions should be decentralized.」は 2022 年版の字で、2023-12-16 版に 0 件（@reviewer）。現在形「既定にしています」を「2022 年の版の SAFe は…既定にしていました」にし、見出しと一覧の SAFe 行に版を書いた。p.「SAFe：集めすぎると判断待ちの列」はいまの版の導入部の字なので「いまの版の SAFe は、任せる理由の一つに」とし、既定がどちらかを言わせない。
- 本の中の食い違い: 対応表の「ART を価値の単位で組む（SAFe）→ 価値で分ける（第 3 章）」は、第 3 章が別の語とした「価値」の字だけでつないでいた。2022 年版の SAFe は value stream に沿った組み直しを集める側（Long-lasting）に置く。行を外し、外した理由を注に書いた（@reader p.212）。
- 「EAA 紹介 3」の説明が本に無かった（@reader の読者 3 体）。第 6 章の最初の出現と、このページの注に置いた。
付録は巻末と同じ組み方（章の概要・群・リードを持たない）。build.mjs に <本>-furoku.md を読む行を足した（付録の判定・並べる順・公開してよい名前の一覧）。
新しく引く外部の文献: 上の SAFe・LeSS・Lee の原文（どれも旧第 1 章で引いた文書の当たり直しか、同じ枠組みの別のページ）。
v6 の 3 便目（着手: @ope-ultp1635 msg df6c27d8。構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v6.md 87be3308）で、本文・注・絵の「第 N 章」を v6 の番号にした（第 6 章以降は 1 ずつ減らした）。旧第 3〜5 章を指していた所: 絵「判断の権限を渡して分ける（第 5 章）」→ 第 3 章、「責任者が追える大きさ（第 5 章）」→ 第 2 章、注「第 3 章の「価値」」→ 第 2 章。この上の記録の章番号は、そのときの番号のまま。
-->

## 三つとも、決定ごとに分けている

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="56" font-weight="700">枠組み</text><text x="220" y="56" font-weight="700">一か所に集めるもの</text><text x="540" y="56" font-weight="700">各チームに任せるもの</text>
    <text x="60" y="116" font-weight="700">LeSS</text><text x="220" y="116">優先順位（一人の PO）</text><text x="540" y="116">チームのあいだの調整</text>
    <text x="60" y="176" font-weight="700">SAFe</text><text x="60" y="200" class="tx">2022 年の版</text><text x="220" y="176">戦略的な決定だけ</text><text x="220" y="200" class="tx">頻度が低く、長く効き、規模の経済が大きい</text><text x="540" y="176" class="hc" font-weight="700">ほかの決定すべて（既定）</text><text x="540" y="200" class="tx">あいだの計画は PI Planning で揃える</text>
    <text x="60" y="266" font-weight="700">Spotify</text><text x="220" y="266" class="tx">引いた記述の中には無い</text><text x="540" y="266">大きく任せた</text>
  </g>
  <path d="M40,76 H840 M40,146 H840 M40,226 H840 M40,296 H840 M200,30 V296 M520,30 V296" class="lt"/>
  <text x="440" y="346" class="ts sub" text-anchor="middle">「集めるか、任せるか」の二択ではない。どの決定をどちらに置くかが違う</text>
</svg>
```

LeSS・SAFe・Spotify は、チームのあいだの決定を、どれか一方に寄せてはいません。決定ごとに、一か所に集めるものと各チームに任せるものを分けています。

※ 三つとも、それぞれの条件の下で機能している。この本は優劣を判定しない。

## LeSS：優先順位は一人の PO

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="40" width="200" height="130" rx="10" class="box"/><text x="160" y="96" class="t" text-anchor="middle" font-weight="700">50 チーム</text>
  <path d="M264,105 H336" class="ln" marker-end="url(#arr)"/>
  <rect x="340" y="40" width="200" height="130" rx="10" class="soft"/><text x="440" y="96" class="t" text-anchor="middle" font-weight="700">PBI 200 件</text><text x="440" y="130" class="tx" text-anchor="middle">1 回の iteration で</text>
  <path d="M544,105 H616" class="ln" marker-end="url(#arr)"/>
  <rect x="680" y="70" width="120" height="70" rx="6" class="h"/><text x="740" y="112" class="ts on" text-anchor="middle">PO</text>
  <text x="60" y="230" class="ts sub">LeSS「Area Product Owner」　less.works/less/less-huge/area-product-owner（2026-11-08 参照）</text>
  <text x="60" y="264" class="ts">With 50 teams this leads to a PB with 200 PBIs just for one iteration.</text>
  <text x="60" y="292" class="ts">Prioritizing 200 PBIs per iteration is too much work for one PO.</text>
  <text x="60" y="330" class="ts">… the PO always has the final decision.</text>
</svg>
```

LeSS は、優先順位の最終決定を一人の Product Owner（PO）に集めます。補う役を置く主な理由は、その一人が多すぎる仕事を抱えないようにするためです。

出典: LeSS「Area Product Owner」（英文は絵の中）。PBI は Product Backlog の項目、iteration は開発の 1 周期。

## LeSS：調整は、チームどうしで話す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="60" width="240" height="140" rx="10" class="box"/><text x="180" y="138" class="t" text-anchor="middle" font-weight="700">チーム</text>
  <rect x="580" y="60" width="240" height="140" rx="10" class="box"/><text x="700" y="138" class="t" text-anchor="middle" font-weight="700">チーム</text>
  <path d="M304,130 H576" class="ln" marker-start="url(#arr)" marker-end="url(#arr)"/><text x="440" y="116" class="ts hc" text-anchor="middle">"just talk"</text>
  <text x="60" y="262" class="ts sub">LeSS「Coordination and Integration」　less.works/less/framework/coordination-and-integration（2026-11-08 参照）</text>
  <text x="60" y="296" class="ts">You do not need a formal, official, usually slow coordination mechanism</text>
  <text x="60" y="320" class="ts">in order to coordinate.</text>
</svg>
```

LeSS は、チームのあいだの調整を各チームに任せます。調整が要るなら、相手のチームへ行く・電話するなどして、直接話して合わせます。

出典: LeSS「Coordination and Integration」（英文は絵の中）。

## SAFe 2022 年版：既定は任せる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="380" height="200" rx="10" class="soft"/>
  <text x="230" y="76" class="t" text-anchor="middle" font-weight="700">Centralize Strategic Decisions</text>
  <g class="ts" text-anchor="middle"><text x="230" y="120">Infrequent</text><text x="230" y="150">Long-lasting</text><text x="230" y="180">Provide significant economies of scale</text></g>
  <rect x="460" y="40" width="380" height="200" rx="10" class="hl" style="fill:#fff"/>
  <text x="650" y="76" class="t hc" text-anchor="middle" font-weight="700">Decentralize Everything Else</text>
  <g class="ts" text-anchor="middle"><text x="650" y="120">Frequent</text><text x="650" y="150">Time-critical</text><text x="650" y="180">Require local information</text></g>
  <text x="60" y="284" class="ts sub">SAFe「Principle #9 – Decentralize decision-making」（Web Archive 2022-02-01 の版、2026-11-08 参照）</text>
  <text x="60" y="316" class="ts">The vast majority of decisions do not reach the threshold of strategic importance.</text>
  <text x="60" y="340" class="ts">All other decisions should be decentralized.</text>
</svg>
```

2022 年の版の SAFe は、任せる側を既定にしていました。集めるのは、頻度が低く、長く効き、規模の経済が大きい戦略的な決定だけで、ほかはすべて任せます。

出典: SAFe「Principle #9」2022 年の版（英文は絵の中）。2023 年 12 月の版に「ほかはすべて任せる」の字は無く、決定ごとに点を付けて任せるかを選ぶ。

## SAFe：集めすぎると判断待ちの列

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="middle">
    <rect x="40" y="70" width="110" height="70" rx="6" class="box"/><text x="95" y="112">決定</text>
    <rect x="160" y="70" width="110" height="70" rx="6" class="box"/><text x="215" y="112">決定</text>
    <rect x="280" y="70" width="110" height="70" rx="6" class="box"/><text x="335" y="112">決定</text>
    <rect x="400" y="70" width="110" height="70" rx="6" class="box"/><text x="455" y="112">決定</text>
  </g>
  <path d="M514,105 H636" class="ln" marker-end="url(#arr)"/>
  <rect x="640" y="70" width="180" height="70" rx="6" class="h"/><text x="730" y="112" class="ts on" text-anchor="middle">管理者</text>
  <text x="60" y="230" class="ts sub">SAFe「Principle #9 - Decentralize Decision-Making」（framework.scaledagile.com、2026-11-08 参照）</text>
  <text x="60" y="264" class="ts">when managerial input is necessary for most decisions, it causes a queue of</text>
  <text x="60" y="288" class="ts">decision requests that block progress</text>
</svg>
```

いまの版の SAFe は、任せる理由の一つに、ほとんどの決定に管理者の関与が要ると決定を求める列ができ、進行を止めることを挙げます。

出典: SAFe「Principle #9」のいまの版の導入部（英文は絵の中）。

## SAFe：計画は PI Planning で

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="40" width="800" height="190" rx="10" class="box"/><text x="440" y="76" class="t" text-anchor="middle" font-weight="700">PI Planning（ART 全体の催し）</text>
  <g class="ts" text-anchor="middle">
    <rect x="80" y="100" width="150" height="60" rx="6" class="soft"/><text x="155" y="136">チーム</text>
    <rect x="260" y="100" width="150" height="60" rx="6" class="soft"/><text x="335" y="136">チーム</text>
    <rect x="440" y="100" width="150" height="60" rx="6" class="soft"/><text x="515" y="136">チーム</text>
    <rect x="620" y="100" width="180" height="60" rx="6" class="h"/><text x="710" y="136" class="on">RTE が進める</text>
  </g>
  <text x="440" y="200" class="ts" text-anchor="middle">依存は ART planning board に載せる</text>
  <text x="60" y="270" class="ts sub">SAFe「PI Planning」（framework.scaledagile.com/pi-planning、2026-11-08 参照）</text>
  <text x="60" y="302" class="ts">It is typically a 2-day event for the entire ART that takes place every 8-12 weeks.</text>
  <text x="60" y="330" class="ts">PI Planning is led by the Release Train Engineer (RTE).</text>
</svg>
```

チームのあいだの計画と依存は、8〜12 週ごとの PI Planning で、ART の全チームが揃えます。決定を一人に集めず、決まった周期の場で揃えます。

出典: SAFe「PI Planning」（英文は絵の中）。ART は SAFe の、チームを束ねた単位。RTE はその進行役。

## Spotify：任せる側に大きく寄った

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" text-anchor="middle">
    <rect x="60" y="30" width="140" height="60" rx="6" class="box"/><text x="130" y="66">squad</text>
    <rect x="230" y="30" width="140" height="60" rx="6" class="box"/><text x="300" y="66">squad</text>
    <rect x="400" y="30" width="140" height="60" rx="6" class="box"/><text x="470" y="66">squad</text>
  </g>
  <text x="580" y="66" class="ts">疎結合だが、しっかり揃ったチーム</text>
  <text x="60" y="150" class="ts sub">Henrik Kniberg「Spotify Engineering Culture part 2」（2014、動画。当たり直していない）</text>
  <text x="60" y="178" class="ts">大きな案件の進め方は、まだたくさん実験していて、まだうまくない。</text>
  <text x="60" y="226" class="ts sub">Jeremiah Lee「Spotify's Failed #SquadGoals」（2020、本人のサイト。2026-11-08 参照）</text>
  <text x="60" y="256" class="ts">There was no single person accountable for the engineering team's delivery</text>
  <text x="60" y="280" class="ts">… who could negotiate prioritization of work at an equivalent level of responsibility.</text>
  <text x="60" y="330" class="tx">squad は Spotify の、自分で決めるチームの呼び名</text>
</svg>
```

Spotify は、各チームに任せる側に大きく寄りました。元社員の Lee は、エンジニアのチームの成果に一人で責任を持つ人がいなかったと書いています。

出典: 題・年・媒体は絵の中。Kniberg の字の訳は EAA 紹介 0（この本の前に書いた紹介資料）。一社の実践の記述です。

## 複数社のあいだも、集めるか任せるか

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="220" y="44" class="t" text-anchor="middle" font-weight="700">発注側が集める</text>
  <text x="660" y="44" class="t" text-anchor="middle" font-weight="700">ベンダーに任せる</text>
  <path d="M440,30 V320" class="lt dash"/>
  <rect x="140" y="70" width="160" height="60" rx="6" class="h"/><text x="220" y="106" class="ts on" text-anchor="middle">発注側の定例会議</text>
  <g class="ts" text-anchor="middle"><rect x="60" y="180" width="120" height="60" rx="6" class="box"/><text x="120" y="216">A 社</text><rect x="260" y="180" width="120" height="60" rx="6" class="box"/><text x="320" y="216">B 社</text></g>
  <path d="M180,134 L130,176 M260,134 L310,176" class="ln"/>
  <g class="ts" text-anchor="middle"><rect x="500" y="120" width="120" height="60" rx="6" class="box"/><text x="560" y="156">A 社</text><rect x="700" y="120" width="120" height="60" rx="6" class="box"/><text x="760" y="156">B 社</text></g>
  <path d="M624,150 H696" class="ln" marker-start="url(#arr)" marker-end="url(#arr)"/><text x="660" y="214" class="ts hc" text-anchor="middle">直接合わせる</text>
  <text x="220" y="300" class="ts sub" text-anchor="middle">合わせた中身は、契約と検収の条件に書く</text>
  <text x="660" y="300" class="ts sub" text-anchor="middle">合わせた中身は、話した人が持つ</text>
</svg>
```

複数社で組む現場でも、集めるか任せるかを分けます。発注側の定例会議で合わせて契約と検収の条件に書くか、ベンダーどうしで直接合わせてもらうかです。

※ 説明のための一般的な形で、特定の現場の記述ではない。第 11 章の例の定例会議は左側。

## この本の切り方との対応

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="56" font-weight="700">枠組みの記述</text><text x="470" y="56" font-weight="700">この本で当たる所</text>
    <text x="60" y="106">チーム・ART の中の進め方</text><text x="470" y="106">Cell の中の作り方（第 2・11 章）</text>
    <text x="60" y="156">決定を任せる（SAFe・LeSS）</text><text x="470" y="156">判断の権限を渡して分ける（第 3 章）</text>
    <text x="60" y="206">あいだの調整・計画</text><text x="470" y="206">Contract と、版の採用（第 5・8 章）</text>
    <text x="60" y="256">一人に集めた優先順位（LeSS）</text><text x="470" y="256">責任者が追える大きさ（第 2 章）</text>
  </g>
  <path d="M40,76 H840 M40,126 H840 M40,176 H840 M40,226 H840 M40,276 H840 M450,30 V276" class="lt"/>
  <text x="440" y="330" class="ts sub" text-anchor="middle">左と右は同じ物ではない。読み替えの見当</text>
</svg>
```

枠組みで使っている語を、この本のどの章で扱うかの見当です。決定を任せることは権限で分けることに、あいだの調整は Contract と版の採用に当たります。

※ 書き手の読み。SAFe の「Organizing ARTs around value」の value は value stream の側で、第 2 章の「価値」とは別の語なので、表に置かない。

## あいだの合意を、書いて持つ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="250" height="200" rx="10" class="soft"/><text x="165" y="90" class="t" text-anchor="middle" font-weight="700">集める</text><text x="165" y="140" class="ts" text-anchor="middle">一人や定例の場が持つ</text>
  <rect x="315" y="50" width="250" height="200" rx="10" class="soft"/><text x="440" y="90" class="t" text-anchor="middle" font-weight="700">任せる</text><text x="440" y="140" class="ts" text-anchor="middle">話した人が持つ</text>
  <rect x="590" y="50" width="250" height="200" rx="10" class="hl" style="fill:#fff"/><text x="715" y="90" class="t hc" text-anchor="middle" font-weight="700">この本</text>
  <text x="715" y="140" class="ts" text-anchor="middle">版付きの Contract に書き、</text><text x="715" y="166" class="ts" text-anchor="middle">結ぶ Cell が全部採用して</text><text x="715" y="192" class="ts" text-anchor="middle">成り立たせる</text>
  <text x="440" y="306" class="ts sub" text-anchor="middle">片側だけでは変わらない。採用は各 Cell の所有者が決める</text>
</svg>
```

この本は、あいだの合意を一人にも話した人にも預けず、版付きの Contract に書きます。結ぶ Cell が全部同じ版を採用して成り立つので、片側では変わりません。

出典: EAA Core 版 6「3. 意味と合意」「4. 提案と変更」。第 5・8 章で見ました。

## 引用の確かめ方

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="56" font-weight="700">引用</text><text x="520" y="56" font-weight="700">この本で原文に当たったか</text>
    <text x="60" y="110">LeSS「Area Product Owner」</text><use href="#i-ok" x="520" y="92" width="24" height="24"/><text x="556" y="110" class="tx">2026-11-08</text>
    <text x="60" y="160">LeSS「Coordination and Integration」</text><use href="#i-ok" x="520" y="142" width="24" height="24"/><text x="556" y="160" class="tx">2026-11-08</text>
    <text x="60" y="210">SAFe「Principle #9」「PI Planning」</text><use href="#i-ok" x="520" y="192" width="24" height="24"/><text x="556" y="210" class="tx">2026-11-08（Web Archive の版を含む）</text>
    <text x="60" y="260">Lee「Spotify's Failed #SquadGoals」</text><use href="#i-ok" x="520" y="242" width="24" height="24"/><text x="556" y="260" class="tx">2026-11-08</text>
    <text x="60" y="310">Kniberg「Spotify Engineering Culture」</text><use href="#i-no" x="520" y="292" width="24" height="24"/><text x="556" y="310" class="tx">動画。訳は EAA 紹介 0 のまま</text>
  </g>
  <path d="M40,76 H840 M40,126 H840 M40,176 H840 M40,226 H840 M40,276 H840 M40,326 H840 M500,30 V326" class="lt"/>
</svg>
```

英文の引用は、Kniberg の動画を除いて、この本で原文に当たりました。Kniberg の字だけは、EAA 紹介 0 の訳のままです。

※ EAA 紹介 0・3 は、この本の前に書いた EAA の紹介資料。注に出てくるが、この本を読むのに先に読む必要はない。
