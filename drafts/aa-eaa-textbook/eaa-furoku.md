# 付録　LeSS・SAFe・Spotify との対応

副題: LeSS と SAFe は、集める決定と任せる決定を分けている

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
v7 の 3 便目（構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v7.md 863f5176。着手: @ope-ultp1635 msg 58cbdf2b。本文 GO: msg d9ab1757）で 11 → 5 ページに畳んだ。前の字は `git show 5b5aea2:drafts/aa-eaa-textbook/eaa-furoku.md`。ページごとの行き先と落とした字: writer-ja/drafts/eaa-toc/fold-v7-ledger.md の便 3。
- p.「LeSS：優先順位は一人の PO」に p.「LeSS：調整は、チームどうしで話す」を畳んだ。
- p.「SAFe 2022 年版：既定は任せる」に p.「SAFe：集めすぎると判断待ちの列」p.「SAFe：計画は PI Planning で」を畳んだ。題と絵と注に「2022 年版」を残し、いまの版の字と 2022 年版の字を絵の中で分けた（@reader の桜井が、推進会議の前に協力会社の担当に読ませたいと挙げた 3 ページ。社外に出る前提で読まれる。@ope-ultp1635 msg 58cbdf2b）。2023 年 12 月の版の扱いは注に残した。英文・URL・参照日は前のページのまま絵の中。
- p.「この本の切り方との対応」に p.「複数社のあいだも、集めるか任せるか」p.「あいだの合意を、書いて持つ」を畳んだ。p.「引用の確かめ方」は各ページの出典の注で足りるので落とした（Kniberg の動画を当たり直していないことは Spotify のページの絵に、EAA 紹介 0 の説明は同じページの注にある）。
- 章番号: 本文・注・絵は v7 の章番号（10 章）で書いた。
検算 1 便目と v7 の通読を受けて直した（@ope-ultp1635 msg 9628f0a9。判定の正本 roles-kaz reviewer/feedback-archive/2026-11-09-eaa-textbook-d0dd000-fold-v7-1-core.md、reader/feedback-archive/2026-11-09-eaa-textbook-v7-68p-6readers.md）: p.「SAFe 2022 年版：既定は任せる」に、英文ごとの日本語（書き手の訳）、版の見出し（2022 年の版／いまの版）、2023 年 12 月の版にこの字が無いことを絵の中に、この本との関係（ART の中の SAFe は Cell の中の作り方として残す）の段を足した。PI Planning の planning board の行は落とした。本文の「いまの版にその字は無く」は、いまの版を導入部しか読んでいないので「2023 年 12 月の版に」にした（@reader 桜井: 単独では渡せない、版の違いを協力会社の担当が読み分けられない）。p.「この本の切り方との対応」の「この本」の箱に「契約書は別に持つ（第 5 章）」を足した（@reader 河野が Contract が契約書の代わりか分からなくなった）。
検算 2・3 便目を受けて直した（@ope-ultp1635 msg 6a0e7393。判定の正本 roles-kaz reviewer/feedback-archive/2026-11-09-eaa-textbook-8e2f807-fold-v7-2.md・-3.md）: 「2022 年版」「2023 年 12 月の版」は SAFe の版ではなく Web Archive の取得日だった。版の名前に替えた — 2022-02-01 の取得は頁の Last update 10 February 2021、ナビに「What's new in the SAFe 5.1 Big Picture」があるので SAFe 5.1。2023-12-14 の取得は Last update 14 August 2023、ナビに「SAFe 6.0」なので SAFe 6.0（2026-11-09 に Web Archive で確かめた）。訳から、表示した英文の続きの字（that block progress の「進みが止まる」、2 文あとの「進行役は RTE」）を外した。最初のページの題・副題・本文を LeSS と SAFe に限った（Spotify の集める側は引いた記述に無い）。表の SAFe 5.1 の行の PI Planning はいまの版の頁から引いたので「（いまの版）」と書いた。
-->

## LeSS と SAFe は決定ごとに分けている

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="56" font-weight="700">枠組み</text><text x="220" y="56" font-weight="700">一か所に集めるもの</text><text x="540" y="56" font-weight="700">各チームに任せるもの</text>
    <text x="60" y="116" font-weight="700">LeSS</text><text x="220" y="116">優先順位（一人の PO）</text><text x="540" y="116">チームのあいだの調整</text>
    <text x="60" y="176" font-weight="700">SAFe</text><text x="60" y="200" class="tx">SAFe 5.1</text><text x="220" y="176">戦略的な決定だけ</text><text x="220" y="200" class="tx">頻度が低く、長く効き、規模の経済が大きい</text><text x="540" y="176" class="hc" font-weight="700">ほかの決定すべて（既定）</text><text x="540" y="200" class="tx">あいだの計画は PI Planning（いまの版）</text>
    <text x="60" y="266" font-weight="700">Spotify</text><text x="220" y="266" class="tx">引いた記述の中には無い</text><text x="540" y="266">大きく任せた</text>
  </g>
  <path d="M40,76 H840 M40,146 H840 M40,226 H840 M40,296 H840 M200,30 V296 M520,30 V296" class="lt"/>
  <text x="440" y="346" class="ts sub" text-anchor="middle">「集めるか、任せるか」の二択ではない。どの決定をどちらに置くかが違う</text>
</svg>
```

LeSS と SAFe は、チームのあいだの決定を、どれか一方に寄せてはいません。決定ごとに、一か所に集めるものと各チームに任せるものを分けています。

※ 三つとも、それぞれの条件の下で機能している。この本は優劣を判定しない。

## LeSS：優先順位は一人の PO

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="16" width="130" height="76" rx="10" class="box"/><text x="105" y="60" class="ts" text-anchor="middle" font-weight="700">50 チーム</text>
  <path d="M172,54 H198" class="ln" marker-end="url(#arr)"/>
  <rect x="200" y="16" width="130" height="76" rx="10" class="soft"/><text x="265" y="48" class="ts" text-anchor="middle" font-weight="700">PBI 200 件</text><text x="265" y="74" class="tx" text-anchor="middle">1 回の iteration で</text>
  <path d="M332,54 H358" class="ln" marker-end="url(#arr)"/>
  <rect x="360" y="30" width="70" height="48" rx="6" class="h"/><text x="395" y="60" class="ts on" text-anchor="middle">PO</text>
  <rect x="470" y="16" width="120" height="76" rx="10" class="box"/><text x="530" y="60" class="ts" text-anchor="middle" font-weight="700">チーム</text>
  <rect x="720" y="16" width="120" height="76" rx="10" class="box"/><text x="780" y="60" class="ts" text-anchor="middle" font-weight="700">チーム</text>
  <path d="M592,54 H718" class="ln" marker-start="url(#arr)" marker-end="url(#arr)"/><text x="655" y="44" class="ts hc" text-anchor="middle">"just talk"</text>
  <text x="235" y="118" class="tx" text-anchor="middle">優先順位は集める</text><text x="655" y="118" class="tx" text-anchor="middle">調整は任せる</text>
  <text x="40" y="160" class="tx sub">LeSS「Area Product Owner」　less.works/less/less-huge/area-product-owner（2026-11-08 参照）</text>
  <text x="40" y="186" class="ts">With 50 teams this leads to a PB with 200 PBIs just for one iteration.</text>
  <text x="40" y="210" class="ts">Prioritizing 200 PBIs per iteration is too much work for one PO.</text>
  <text x="40" y="234" class="ts">… the PO always has the final decision.</text>
  <text x="40" y="276" class="tx sub">LeSS「Coordination and Integration」　less.works/less/framework/coordination-and-integration（2026-11-08 参照）</text>
  <text x="40" y="302" class="ts">You do not need a formal, official, usually slow coordination mechanism</text>
  <text x="40" y="326" class="ts">in order to coordinate.</text>
</svg>
```

LeSS は、優先順位の最終決定を一人の Product Owner（PO）に集め、チームのあいだの調整は各チームに任せます。チームどうしが直接話して合わせます。

出典: LeSS（題・英文・参照日は絵の中）。PBI は Product Backlog の項目、iteration は開発の 1 周期。

## SAFe 5.1：既定は任せる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="40" y="18" class="tx sub">SAFe 5.1：「Principle #9 – Decentralize decision-making」（2021-02-10 更新。Web Archive 2022-02-01 の取得）</text>
  <rect x="40" y="28" width="440" height="62" rx="8" class="soft"/>
  <text x="260" y="50" class="ts" text-anchor="middle" font-weight="700">Centralize Strategic Decisions</text>
  <text x="260" y="76" class="tx" text-anchor="middle">戦略的な決定だけ集める（まれ・長く効く・規模の経済）</text>
  <rect x="500" y="28" width="340" height="62" rx="8" class="hl" style="fill:#fff"/>
  <text x="670" y="50" class="ts hc" text-anchor="middle" font-weight="700">Decentralize Everything Else</text>
  <text x="670" y="76" class="tx" text-anchor="middle">ほかはすべて任せる（頻繁・急ぐ・現場の情報）</text>
  <text x="40" y="112" class="ts">All other decisions should be decentralized.</text>
  <text x="40" y="134" class="tx">SAFe 6.0（頁の更新 2023-08-14）にこの字は無い。決定ごとに点を付けて、任せるかを選ぶ</text>
  <path d="M40,150 H840" class="lt"/>
  <text x="40" y="170" class="tx sub">いまの版：SAFe「Principle #9 - Decentralize Decision-Making」の導入部（framework.scaledagile.com、2026-11-08 参照）</text>
  <text x="40" y="192" class="ts">when managerial input is necessary for most decisions, it causes a queue of decision requests</text>
  <text x="40" y="212" class="tx">多くの決定に管理者の判断が要ると、判断待ちの列ができる</text>
  <path d="M40,228 H840" class="lt"/>
  <text x="40" y="248" class="tx sub">いまの版：SAFe「PI Planning」（framework.scaledagile.com/pi-planning、2026-11-08 参照）</text>
  <text x="40" y="270" class="ts">It is typically a 2-day event for the entire ART that takes place every 8-12 weeks.</text>
  <text x="40" y="290" class="tx">ART（チームを束ねた単位）全体で、8〜12 週ごとにふつう 2 日</text>
  <rect x="40" y="306" width="800" height="64" rx="10" class="box"/>
  <text x="60" y="332" class="ts" font-weight="700">この本との関係</text>
  <text x="200" y="332" class="tx">ART の中の SAFe の進め方は、Cell の中の作り方として残す（第 8 章）</text>
  <text x="200" y="356" class="tx">この本が書くのは Cell のあいだの合意の持ち方。対応はこの付録の最後のページ</text>
</svg>
```

SAFe 5.1 は、戦略的な決定だけ集めてほかを任せていました。SAFe 6.0 にその字は無く、いまの版は集めすぎると判断待ちの列ができると書きます。

出典: SAFe（題・英文・版・参照日は絵の中）。英文の下の日本語は書き手の訳。いまの版は導入部だけを読んだ。

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

## この本の切り方との対応

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="tx">
    <text x="50" y="30" font-weight="700">枠組みの記述</text><text x="450" y="30" font-weight="700">この本で当たる所</text>
    <text x="50" y="60">チーム・ART の中の進め方</text><text x="450" y="60">Cell の中の作り方（第 1・8 章）</text>
    <text x="50" y="90">決定を任せる（SAFe・LeSS）</text><text x="450" y="90">判断の権限を渡して分ける（第 2 章）</text>
    <text x="50" y="120">あいだの調整・計画</text><text x="450" y="120">Contract と、版の採用（第 4・6 章）</text>
    <text x="50" y="150">一人に集めた優先順位（LeSS）</text><text x="450" y="150">責任者が追える大きさ（第 1 章）</text>
  </g>
  <path d="M30,40 H850 M30,70 H850 M30,100 H850 M30,130 H850 M30,160 H850 M430,14 V160" class="lt"/>
  <text x="440" y="186" class="tx sub" text-anchor="middle">左と右は同じ物ではない。読み替えの見当</text>
  <text x="40" y="222" class="ts" font-weight="700">あいだの合意を、誰が持つか（複数社で組む現場でも同じ）</text>
  <g class="tx" text-anchor="middle">
    <rect x="40" y="236" width="250" height="104" rx="10" class="soft"/><text x="165" y="262" class="ts" font-weight="700">集める</text><text x="165" y="288">発注側の定例会議で合わせ、</text><text x="165" y="310">契約と検収の条件に書く</text>
    <rect x="315" y="236" width="250" height="104" rx="10" class="soft"/><text x="440" y="262" class="ts" font-weight="700">任せる</text><text x="440" y="288">ベンダーどうしで直接合わせる。</text><text x="440" y="310">中身は話した人が持つ</text>
    <rect x="590" y="236" width="250" height="104" rx="10" class="hl" style="fill:#fff"/><text x="715" y="262" class="ts hc" font-weight="700">この本</text><text x="715" y="288">版付きの Contract に書き、結ぶ</text><text x="715" y="310">Cell が全部採用して成り立たせる</text><text x="715" y="330" class="hc">契約書は別に持つ（第 4 章）</text>
  </g>
  <text x="440" y="366" class="ts sub" text-anchor="middle">片側だけでは変わらない。採用は各 Cell の規範の所有者が決める</text>
</svg>
```

枠組みの語を、この本のどの章で扱うかの見当です。この本は、あいだの合意を一人にも話した人にも預けず、版付きの Contract に書いて持ちます。

※ 書き手の読み。複数社の形は一般的な形で、特定の現場ではない。SAFe の value は value stream の側で、第 1 章の「価値」とは別の語。
