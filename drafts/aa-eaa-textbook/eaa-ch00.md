# 第 0 章　AA と巨大なシステム

群: 巨大なシステムの分業と Cell の境界
副題: AA は一つの Cell では巨大なシステムを開発できない

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（6e3f57bf・dd08b888）。GO: @ope-ultp1635 msg b918626f。群ごとに 5 回。群一（第 0・1 章）から。
2d0ca30 までの第 0 章（チームのあいだを版付きの文書と Evidence でつなぐ）は、v5 の群三（第 6〜8 章）へ移す。この章には持ってこない。
この本の問いは、structure-v5.md の「イデア」「AA がスケールしない理由」を、本の問いとして本の言葉に書き直して載せる。口語の原文と個人名は載せない（publications は公開 repo。@ope-ultp1635 msg 62a8ef68）。中身は弱めない: 一つの Cell は巨大なシステムを開発できるか／その Cell で下される判断を責任を負う人間が管理し切れるか／一つのループで価値を切り替えられるか。@reader の通読で、読者が旧ページの題と注の個人名で止まった（@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）。
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
問いの主語を「一つのループ」にした（@ope-ultp1635 msg 1e9e028f。kishibashi3 の言葉「一つのループは巨大なシステムを開発できるか？ だよね。問いは」）: 「走り切る」は口語から残った比喩なので外し、「開発する」にした。最初の問いの主語は「一つの Cell」だったが、価値を切り替える問いと同じ「一つのループ」にし、問いの字を本人の字に寄せた（前置きの「完璧な設計図を Agent に書かせれば、」は p.「素直に大きくすると一つの Cell」の絵と本文にあるので問いからは外した。そのページの本文は文の上限 80 字に収めるため「完璧な」を絵の「完璧な設計図」に任せた）。副題と章の概要の 1 文目も同じ主語にした。ループの定義は p.「一つのループは価値を切り替える」にあったが、問いより後なので、p.「素直に大きくすると一つの Cell」の本文へ移し、章の概要には短い言い換えを置いた（目次では副題に「ループ」が定義より先に出る）。Cell は残した: 責任を負う人間は Cell に付く（core.md:28）ので、素直なやり方は「一つの Cell の中の一つのループ」で、Core の「1 Cell の EAA」の注はそのまま当たる。答えのページ（追い切れない・判断 8,000 件・分ける）の主語も問いに合わせてループにした。p.「自分の現場で数える」は Cell を大きくしたときの PR の数なので Cell のまま。この上の記録に残る「走り切」「開発単位」は直した経緯の字で、本文には 0 件。
問いの主語を Cell とループの二つに分けた（@ope-ultp1635 msg c3478a77。判定の正本 @reviewer 2026-11-08-eaa-textbook-0db9058-ch00）: 主語をループに揃えると、一つの Cell でループを 100 本に分ければ追えるように読める。責任を負う人間は Cell に付き、一つの Cell にループはいくつあってもよい（第 2 章 p.「Agent の数では増えない」「主体は、判断する Agent と人」）ので、追い切れないの側は Cell で書く。開発できるか・管理し切れるかの主語は Cell、価値を切り替えられるかの主語はループ。c066f20 の三つの問いの形に戻した。副題・章の概要・最初の絵・p.「Cell とループへの問い」（題も替えた）・p.「一つの Cell の判断は追い切れない」・p.「判断 8,000 件、追えるのは 80 件」・p.「追い切れず、取り違えるから分ける」を Cell にし、p.「一つの Cell の判断は追い切れない」に「中のループを分けても、Cell の判断の数は減りません」を足した（第 5 章 p.「責任者が追える大きさ」への線）。数の前提: 8,000 件・1%・多くて 1 件は Cell で数えた値、取り違え 80 件はループの値。素直なやり方を「一つの Cell の一つのループ」と本文に書き、p.「取り違え 80 件…」は一つのループが 8,000 件を下す前提を本文に置いた。ループの定義に「Agent が」「繰り返す」を戻した。第 3 章は注の中のページ名だけ。
v6 の 1 便目で直した（構造: writer-ja/drafts/eaa-toc/structure-v6.md 87be3308。本文 GO: @ope-ultp1635 msg 8c181d1b）: p.「切る軸は価値・ドメイン・権限」の題を「切る軸の例：価値・ドメイン・権限」にした（題だけ読むと軸が三つに決まって見える）。本文と注は変えず、絵の章番号（第 3・4・5 章）を「第 2 章で例に」にした。p.「切り方は、Core の外の提案」の注の「第 3〜5 章」を第 2 章に。p.「この本の構成」を v6 の章立て（群二「Cell の境界と責務」・第 2〜4 章、群三 第 5〜7 章、群四 第 8・9 章、群五 第 10・11 章）に書き直した。p.「答え：文脈を疎結合に分ける」の注の Contract の章を第 5 章に。この章の本文・注・絵は v6 の章番号で書いたので、3 便目の章番号の直しでこの章はずらさない（絵のリンク #ch5・#ch8・#ch10 は、3 便目でファイルの番号を詰めるまで、いまの第 5・8・10 章に飛ぶ）。
082ceb2 の検算 1 便目を受けて直した（@ope-ultp1635 msg 6f1c06c4、判定の正本 @reviewer 2026-11-09-eaa-textbook-082ceb2-fold）: v6 で落とした旧第 3 章 p.「切り替えは外から見えない」の中身（どちらの優先で答えたかが外から見えず、責任を負う人間がなぜかを追えない）は、受け皿とした p.「一つの Cell の判断は追い切れない」p.「切り替えると取り違える」に無かった。落ちたのは二つの問いのつながりなので、p.「追い切れず、取り違えるから分ける」の本文 2 文目と絵の二つの枠のあいだに置いた。本文の上限 80 字に収めるため「問題は、何で分けるかです」を本文から外した（絵の下の行が言う）。上の行の「第 3 章 p.「切り替えは外から見えない」の先取りになる」は、そのページが無くなったので理由として成り立たない。
082ceb2 の検算 3 便目を受けて直した（@ope-ultp1635 msg 468b4a37、判定の正本 @reviewer 2026-11-09-eaa-textbook-082ceb2-ch04-constitution-federation 97306492）: p.「一つのループは価値を切り替える」の本文の主語を「ループを回す Agent」にした。題は変えていない（問いの主語「一つのループ」は kishibashi3 の字、上の msg 1e9e028f の記録）（第 2 章の注の主体は Agent や人で、ループではない）。
v7 で畳んだ（構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v7.md 863f5176。本文 GO: @ope-ultp1635 msg d9ab1757、kishibashi3「うん」）: 18 → 7 ページ。p.「AA と Cell」に p.「素直に大きくすると一つの Cell」（ループの定義を本文、「1 Cell の EAA」を絵）。p.「判断 8,000 件、追えるのは 80 件」に p.「一つの Cell の判断は追い切れない」（「中のループを分けても判断の数は減らない」を本文）と p.「自分の現場で数える」（比べる 2 つの数を絵）。p.「一つのループは価値を取り違える」に p.「一つのループは価値を切り替える」「サービスごとに価値が違う」「切り替えると取り違える」「取り違え 80 件、見つかるのは多くて 1 件」。p.「答え：文脈を疎結合に分ける」に p.「追い切れず、取り違えるから分ける」（外から見えないを注）と p.「切る軸の例：価値・ドメイン・権限」（絵の下の段）。p.「この本と EAA Core」に p.「拠る文書：Core と Profiles」と p.「切り方は、Core の外の提案」（どこで切るかを書かないを絵）、p.「この本の構成」は落とした（目次が言う）。p.「Cell・文書・手続きの全体図」は p.「用語の一覧」と巻末 p.「通しの 1 枚」を 1 枚に。p.「Cell とループへの問い」は落とした（章の概要が同じ問いを言う）。落とした字と行き先の一覧: writer-ja/drafts/eaa-toc/fold-v7-ledger.md。
v7 の便 1 の判定を受けて戻した（@ope-ultp1635 msg 7bd9839e）: p.「答え：文脈を疎結合に分ける」の注に「分ける理由はこの二つで、人間の分業の慣習には拠らない」を戻した（第 1 章の「職能で分ける理由は人間にあった。Agent には当てはまらない」と根拠の扱いが割れないため。@reviewer が前に「p.12 の理由は Agent が実行しても残るので食い違わない」とした判定の前提）。注の上限 90 字に収めるため、文脈の定義「文脈は判断に使う語と記録・価値・権限」は注から絵の左下の行に移した（字は同じ。各 Cell の箱の 3 行も同じことを言う）。疎結合の定義は注に残した。
v7 の便 2 で、p.「Cell・文書・手続きの全体図」の Evidence の下の 2 行「受けた側は、作った側に聞かずに／共有する語の定義で読んで確かめる」を「受けた側は、作った側を介さずに確かめる／渡す語の意味は、共有する Ontology に書く」にした。第 6 章の副題で直した形（「聞かずに」が照会とぶつかる、「読んで」が不等号の対応で成り立たない。@reviewer 2026-11-09-eaa-textbook-082ceb2-ch04-constitution-federation の 2-2・2-3）が、便 1 でこの絵に入っていた。

v7 の全体図で、在庫の Cell と物流の Cell の箱の中にそれぞれ描いていた「Ontology／共有する語の定義」を外し、二つの Cell のあいだに「共有する Ontology」の箱を 1 つ置いて両方の Cell に線でつないだ（下の行「渡す語の定義。両側が同じ一つを持つ」）。箱の中に 1 つずつ描くと各 Cell が自分の定義を持つと読め、第 6 章 p.「Ontology は共有する語の定義」の読み（同じ一つの定義を両側が持つ、core.md:21「境界の両側が保持する共通語の定義」）と食い違っていた。絵の下の行「渡す語の意味は、共有する Ontology に書く」は箱の下の行に移した。本文の「責務・規範・語の定義を持ち」を「責務と規範を持ち、語の定義を共有し」に（上限 80 字に入れるため「番号の章が」を「各章が」に）。kishibashi3 の問い（@ope-ultp1635 msg d9e92257）。
章番号: この章の本文・注・絵は v7 の章番号（10 章）で書いた。2・3 便目でファイルの番号を詰めるまで、#ch5 より後のリンクはいまのファイルの章に飛ぶ。
第 1 章（職能による分業の限界）を Cell の境界の章に畳んだ（@ope-ultp1635 msg 352dee1a）: 群の名前を「巨大なシステムの分業と Cell の境界」にした（第 0 章の問いと、その答えの Cell の境界を 1 つの群に）。p.「答え：文脈を疎結合に分ける」の絵の「判定は第 2 章、職能は第 1 章」を「判定と職能は第 1 章」に、全体図の上の行の「職能では切らない（第 1 章）。境界の判定（第 2 章）」を「職能では切らず、境界を判定する（第 1 章）」にした。ほかの章番号とリンクは 1 つずつ詰めた。上のメモの章番号は書いた時点のまま。
@reader v8 の「無いもの」（@ope-ultp1635 msg a08c1ed3。読者の 1 体が 3 回続けて EAA の略が無いと挙げた）: p.「この本と EAA Core」の絵の頭に EAA の正式名の行を足し、絵の高さを 400 → 430 にして下の箱を 30 下げた（章の概要の文の最後に置くと、ページの高さ 600px を越えて切れた）。字は Core の題「Enterprise Agentic Agile Core」と README の題「Enterprise Agentic Agile（EAA）」、説明は README の「単独で成立するAAから、責務の分割とFederationによって拡張する仕組み」。読み方の 1 枚の注は上限 90 字に入らなかった。巻末の語の一覧の 1 行目にも置いた。
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

AA は、一つの Cell では巨大なシステムを開発できません。責任を負う人間は判断を追い切れず、Agent は、計画し、作り、確かめて直す一つのループを回しながら、価値を切り替えて取り違えます。この本は、人間が分業するように仕事を分けて Agent に実行させる方法に答えます。答えは、各主体の文脈が疎結合になるように分けることです。

## AA と Cell

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="50" width="420" height="250" rx="10" class="box"/>
  <text x="240" y="86" class="t" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="205" y="104" width="70" height="40" rx="6" class="h"/><text x="240" y="130" class="ts on" text-anchor="middle">人間</text>
  <text x="290" y="130" class="tx">責任を負う</text>
  <rect x="130" y="176" width="220" height="44" rx="22" class="a"/><text x="240" y="204" class="ts on" text-anchor="middle">Agent が開発する（AA）</text>
  <text x="240" y="240" class="tx" text-anchor="middle">AA は、同じ組の AA の本が扱う</text>
  <g class="tx" text-anchor="middle"><text x="130" y="262">目的</text><text x="190" y="262">責任</text><text x="250" y="262">権限</text><text x="330" y="262">実行能力</text></g>
  <text x="240" y="336" class="ts sub" text-anchor="middle">外との合意に基づいて、自律して成果を出す単位</text>
  <text x="680" y="40" class="ts" text-anchor="middle" font-weight="700">ループ</text>
  <circle cx="680" cy="170" r="92" class="ln"/>
  <g class="tx" text-anchor="middle">
    <rect x="630" y="62" width="100" height="30" rx="15" class="a"/><text x="680" y="82" class="on">計画する</text>
    <rect x="722" y="155" width="100" height="30" rx="15" class="a"/><text x="772" y="175" class="on">作る</text>
    <rect x="630" y="248" width="100" height="30" rx="15" class="a"/><text x="680" y="268" class="on">確かめる</text>
    <rect x="538" y="155" width="100" height="30" rx="15" class="a"/><text x="588" y="175" class="on">直す</text>
  </g>
  <path d="M350,198 H534" class="lt dash"/>
  <text x="680" y="316" class="tx" text-anchor="middle">一つの Cell の一つのループで開発すると、</text>
  <text x="680" y="336" class="tx" text-anchor="middle">Core はそれを「1 Cell の EAA」と呼ぶ</text>
</svg>
```

AA は Agent に開発を任せるやり方です。AA のように自律して開発する単位を Cell、Agent が計画し、作り、確かめて直すのを繰り返す流れをループと呼びます。

※ Cell は「一定の目的に対する責任・権限・実行能力を持ち、外部との合意に基づいて自律的に成果を実現する単位」。出典: EAA Core 版 6「0.」。

## 判断 8,000 件、追えるのは 80 件

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="230" y="30" class="ts sub">一つの Cell で扱うサービスの数と、1 日の判断のうち人間が追える割合</text>
  <g class="t" text-anchor="end"><text x="210" y="82">サービス 1 本</text><text x="210" y="152">10 本</text><text x="210" y="222">100 本</text></g>
  <rect x="230" y="52" width="560" height="44" class="soft"/><rect x="230" y="52" width="560" height="44" class="h"/>
  <text x="510" y="80" class="ts on" text-anchor="middle">追える 80 件 ／ 判断 80 件</text>
  <rect x="230" y="122" width="560" height="44" class="soft"/><rect x="230" y="122" width="56" height="44" class="h"/>
  <text x="300" y="150" class="ts">追える 80 件 ／ 判断 800 件</text>
  <rect x="230" y="192" width="560" height="44" class="soft"/><rect x="230" y="192" width="6" height="44" class="h"/>
  <text x="250" y="220" class="ts">追える 80 件 ／ 判断 8,000 件</text>
  <g class="t"><text x="805" y="82">100%</text><text x="805" y="152">10%</text><text x="805" y="222">1%</text></g>
  <text x="440" y="272" class="t" text-anchor="middle" font-weight="700">増えるのは判断だけ。中のループを分けても減らない</text>
  <rect x="40" y="296" width="800" height="70" rx="8" class="lt" style="fill:#fff"/>
  <text x="60" y="324" class="ts" font-weight="700">自分の現場で数える</text>
  <text x="60" y="350" class="tx">1 日に出る PR の本数（Cell を大きくすると増える） 対 責任を負う人間が 1 日にレビューできる本数（増えない）</text>
</svg>
```

一つの Cell でサービス 100 本を扱うと、1 日の判断は 8,000 件、責任を負う人間が追えるのは 80 件です。中のループを分けても、Cell の判断の数は減りません。

※ 説明のために作った数字です。PR 1 本に判断 10 件、サービス 1 本に PR 1 日 8 本。人のレビューは AA の本 第 1 章 p.8 の PR 1 本 60 分で、1 日 8 本まで見る。

## 一つのループは価値を取り違える

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts hc" text-anchor="middle">
    <rect x="30" y="20" width="170" height="40" rx="4" class="hl" style="fill:#fff"/><text x="115" y="46">決済：止めない</text>
    <rect x="220" y="20" width="170" height="40" rx="4" class="hl" style="fill:#fff"/><text x="305" y="46">推薦：速く変える</text>
    <rect x="410" y="20" width="170" height="40" rx="4" class="hl" style="fill:#fff"/><text x="495" y="46">集計：安く保つ</text>
  </g>
  <path d="M115,60 L272,124 M305,60 V108 M495,60 L338,124" class="lt"/>
  <circle cx="305" cy="148" r="40" class="ln"/>
  <text x="305" y="154" class="ts sub" text-anchor="middle">ループ</text>
  <text x="305" y="210" class="tx xc" text-anchor="middle">判断のたびに、優先する価値を切り替える</text>
  <g class="ts xc" text-anchor="middle">
    <rect x="30" y="230" width="250" height="40" rx="4" class="xl" style="fill:#fff"/><text x="155" y="256">前の判断：推薦を速く変える</text>
    <rect x="300" y="230" width="250" height="40" rx="4" class="xl" style="fill:#fff"/><text x="425" y="256">次の判断：決済も速く変える</text>
  </g>
  <path d="M280,250 H296" class="ln" marker-end="url(#arr)"/>
  <text x="290" y="298" class="ts xc" text-anchor="middle">確かめを省いた変更が、決済に出る</text>
  <rect x="610" y="20" width="240" height="78" rx="8" class="soft"/>
  <text x="730" y="48" class="ts" text-anchor="middle">1 日の判断</text><text x="730" y="84" class="tl" text-anchor="middle">8,000 件</text>
  <path d="M730,98 V120" class="ln" marker-end="url(#arr)"/><text x="742" y="114" class="tx">100 回に 1 回</text>
  <rect x="610" y="124" width="240" height="78" rx="8" class="xl" style="fill:#fff"/>
  <text x="730" y="152" class="ts xc" text-anchor="middle">取り違えた判断</text><text x="730" y="188" class="tl" text-anchor="middle">80 件</text><use href="#i-pile" x="782" y="164" width="24" height="24"/>
  <path d="M730,202 V224" class="ln" marker-end="url(#arr)"/><text x="742" y="218" class="tx">追えるのは 1%</text>
  <rect x="610" y="228" width="240" height="78" rx="8" class="hl" style="fill:#fff"/>
  <text x="730" y="256" class="ts hc" text-anchor="middle">人間が見つける</text><text x="730" y="292" class="tl" text-anchor="middle">多くて 1 件</text>
  <text x="440" y="356" class="t" text-anchor="middle" font-weight="700">取り違えは正しい判断と同じ形で出て、追い切れない判断に紛れる</text>
</svg>
```

サービスごとに優先する価値が違うので、一つのループを回す Agent は判断のたびに価値を切り替え、前の仕事の価値で次を判断することがあります。

※ 例と数は説明のために作った。8,000 件と 1% は前のページと同じ。1 件は、見る 1% を取り違えと関係なく選び、見た取り違えを全部見つけた場合の上限。

## 答え：文脈を疎結合に分ける

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="30" width="230" height="70" rx="10" class="hl" style="fill:#fff"/>
  <text x="145" y="60" class="ts hc" text-anchor="middle" font-weight="700">人間が追い切れない</text><text x="145" y="86" class="tx" text-anchor="middle">追えるのは判断の 1%</text>
  <rect x="30" y="120" width="230" height="70" rx="10" class="xl" style="fill:#fff"/>
  <text x="145" y="150" class="ts xc" text-anchor="middle" font-weight="700">Agent が価値を取り違える</text><text x="145" y="176" class="tx" text-anchor="middle">見つかるのは多くて 1 件</text>
  <text x="145" y="214" class="tx" text-anchor="middle">どちらの優先か、外から見えない</text>
  <path d="M262,110 H302" class="ln" marker-end="url(#arr)"/>
  <g>
    <rect x="310" y="30" width="170" height="190" rx="10" class="box"/><text x="395" y="60" class="ts" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="490" y="30" width="170" height="190" rx="10" class="box"/><text x="575" y="60" class="ts" text-anchor="middle" font-weight="700">Cell</text>
    <rect x="670" y="30" width="170" height="190" rx="10" class="box"/><text x="755" y="60" class="ts" text-anchor="middle" font-weight="700">Cell</text>
  </g>
  <g class="tx" text-anchor="middle">
    <text x="395" y="100">読む語と記録</text><text x="395" y="126">優先する価値</text><text x="395" y="152">判断の権限</text>
    <text x="575" y="100">読む語と記録</text><text x="575" y="126">優先する価値</text><text x="575" y="152">判断の権限</text>
    <text x="755" y="100">読む語と記録</text><text x="755" y="126">優先する価値</text><text x="755" y="152">判断の権限</text>
  </g>
  <g class="ts hc" text-anchor="middle"><text x="395" y="198">文脈が一つ</text><text x="575" y="198">文脈が一つ</text><text x="755" y="198">文脈が一つ</text></g>
  <path d="M480,125 H490 M660,125 H670" class="ln"/>
  <text x="575" y="250" class="ts" text-anchor="middle">あいだの結合は少なく、明示してある</text>
  <text x="30" y="250" class="tx">文脈＝判断に使う語と記録・価値・権限</text>
  <text x="30" y="306" class="ts" font-weight="700">切る軸の例</text>
  <g class="ts hc" text-anchor="middle">
    <rect x="130" y="284" width="110" height="34" rx="6" class="hl" style="fill:#fff"/><text x="185" y="307">価値</text>
    <rect x="250" y="284" width="110" height="34" rx="6" class="hl" style="fill:#fff"/><text x="305" y="307">ドメイン</text>
    <rect x="370" y="284" width="110" height="34" rx="6" class="hl" style="fill:#fff"/><text x="425" y="307">権限</text>
  </g>
  <g opacity=".6"><rect x="500" y="284" width="110" height="34" rx="6" class="lt dash" style="fill:#fff"/><text x="555" y="307" class="ts" text-anchor="middle">職能</text></g>
  <use href="#i-no" x="616" y="289" width="24" height="24"/>
  <text x="652" y="307" class="tx">判定と職能は第 1 章</text>
  <text x="440" y="362" class="ts sub" text-anchor="middle">切り方はこの本の提案。Core の規定ではない</text>
</svg>
```

だから分けます。この本の答えは、各主体の文脈が疎結合になるように分けることです。切り方は Core の規定ではなく、この本の提案です。

※ どちらの優先で答えたかは外から見えず、責任を負う人間はなぜかを追えない。分ける理由はこの二つで、人間の分業の慣習には拠らない。疎結合は、結合が少なく明示されていること（第 4 章）。

## この本と EAA Core

```svg
<svg viewBox="0 0 880 430" width="880" height="430">
  <text x="40" y="20" class="ts"><tspan font-weight="700">EAA</tspan> は Enterprise Agentic Agile の略。AA を、責務の分割と Federation で広げる仕組み</text>
  <g transform="translate(0,30)">
  <rect x="40" y="14" width="370" height="196" rx="10" class="box"/>
  <text x="62" y="46" class="t" font-weight="700">EAA Core　版 6</text>
  <text x="62" y="76" class="ts hc" font-weight="700">位置づけ：規範案（未確定）</text>
  <g class="ts"><text x="62" y="112">Cell・Federation などの定義と、</text><text x="62" y="136">分割と、分けた後の責任・権限・合意</text><text x="62" y="160">どこで切るかは書いていない</text></g>
  <text x="62" y="192" class="tx">各章の注は「EAA Core 版 6「1.」」の形で引く</text>
  <path d="M410,112 H466" class="ln" marker-end="url(#arr)"/>
  <text x="438" y="98" class="tx" text-anchor="middle">責務の</text><text x="438" y="134" class="tx" text-anchor="middle">仕様は</text>
  <rect x="470" y="14" width="370" height="196" rx="10" class="box"/>
  <text x="492" y="46" class="t" font-weight="700">EAA Profiles</text>
  <text x="492" y="76" class="ts hc" font-weight="700">位置づけ：責務仕様案（未確定）</text>
  <g class="ts"><text x="492" y="112">Cell が引き受ける責務と、</text><text x="492" y="136">その引受・合成・改訂・解除。</text><text x="492" y="160">Standard と Domain</text></g>
  <text x="492" y="192" class="tx">詳細スキーマも未確定。主に第 2 章で引く</text>
  <rect x="40" y="226" width="800" height="54" rx="8" fill="#fff" class="lt dash"/>
  <text x="62" y="250" class="ts" font-weight="700">ほかに引く文書</text>
  <text x="62" y="270" class="tx">Adoption Guide・Delivery Guide・Role Model は非規範の適用例、Working Notes は検討履歴。EAA 自身がそう位置づけている</text>
  <rect x="40" y="296" width="800" height="90" rx="10" fill="#fff" class="hl"/>
  <text x="62" y="326" class="ts hc" font-weight="700">この本</text>
  <g class="ts"><text x="62" y="352">上の二つを規範として引く。どちらも未確定の草案で、版が変われば字も変わりうる</text>
    <text x="62" y="376">どこで切るか（文脈が疎結合になるように）は、この本の提案。Core の規定ではない</text></g>
  </g>
</svg>
```

この本は EAA Core と EAA Profiles を規範として引きます。どちらも未確定の草案で、Core は規範案、Profiles は責務仕様案と自ら書いています。

※ 出典: Core と Profiles の冒頭の「位置づけ」、Core 版 6「1.」。Core は責務の仕様を Profiles に任せる。Profiles には版の欄が無い。

## Cell・文書・手続きの全体図

```svg
<svg viewBox="0 0 880 420" width="880" height="420">
  <text x="10" y="18" class="tx">なぜ分けるか：判断を追い切れず、価値を取り違える（<a href="#ch0"><tspan>第 0 章</tspan></a>）。職能では切らず、境界を判定する（<a href="#ch1"><tspan>第 1 章</tspan></a>）</text>
  <rect x="10" y="30" width="270" height="250" rx="10" fill="#fff" class="al"/>
  <text x="26" y="58" class="t ac" font-weight="700">在庫の Cell</text>
  <rect x="26" y="72" width="238" height="44" rx="5" class="soft"/>
  <text x="38" y="90" class="ts" font-weight="700">Profile</text><text x="38" y="109" class="tx">引き受ける責務</text><a href="#ch2"><text x="256" y="90" class="tx" text-anchor="end">第 2 章</text></a>
  <rect x="26" y="124" width="238" height="44" rx="5" class="soft"/>
  <text x="38" y="142" class="ts" font-weight="700">Constitution</text><text x="38" y="161" class="tx">採用した規範</text><a href="#ch3"><text x="256" y="142" class="tx" text-anchor="end">第 3 章</text></a>
  <text x="26" y="196" class="tx">中は Agent でも人のチームでも。</text><text x="26" y="216" class="tx">作り方はこの Cell が決める</text>
  <rect x="600" y="30" width="270" height="250" rx="10" fill="#fff" class="al"/>
  <text x="616" y="58" class="t ac" font-weight="700">物流の Cell</text>
  <rect x="616" y="72" width="238" height="44" rx="5" class="soft"/>
  <text x="628" y="90" class="ts" font-weight="700">Profile</text><text x="628" y="109" class="tx">引き受ける責務</text>
  <rect x="616" y="124" width="238" height="44" rx="5" class="soft"/>
  <text x="628" y="142" class="ts" font-weight="700">Constitution</text><text x="628" y="161" class="tx">採用した規範</text>
  <text x="616" y="196" class="tx">境界は、中の主体が文脈を</text><text x="616" y="216" class="tx">切り替えずに済む範囲</text>
  <rect x="318" y="30" width="244" height="104" rx="4" fill="#fff" class="hl"/>
  <text x="440" y="54" class="ts hc" text-anchor="middle" font-weight="700">Contract（版付きの取り決め）</text>
  <text x="440" y="76" class="tx" text-anchor="middle">渡すもの・条件・確かめ方</text>
  <text x="440" y="96" class="tx" text-anchor="middle">結ぶ Cell の全部が同じ版を</text>
  <text x="440" y="116" class="tx" text-anchor="middle">採用して成り立つ <a href="#ch4"><tspan>第 4 章</tspan></a></text>
  <path d="M280,82 H316 M564,82 H600" class="lt"/>
  <path d="M286,164 H594" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="156" class="ts" text-anchor="middle"><tspan font-weight="700">Mission</tspan>　今回の仕事を頼む <a href="#ch4"><tspan class="tx">第 4 章</tspan></a></text>
  <path d="M594,198 H286" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="190" class="ts" text-anchor="middle"><tspan font-weight="700">Evidence</tspan>　成果の記録を返す <a href="#ch5"><tspan class="tx">第 5 章</tspan></a></text>
  <text x="440" y="218" class="tx" text-anchor="middle">受けた側は、作った側を介さずに確かめる</text>
  <rect x="318" y="230" width="244" height="50" rx="4" fill="#fff" class="hl"/>
  <path d="M280,255 H316 M564,255 H600" class="lt"/>
  <text x="330" y="250" class="ts" font-weight="700">共有する Ontology</text><a href="#ch5"><text x="550" y="250" class="tx" text-anchor="end">第 5 章</text></a>
  <text x="330" y="270" class="tx">渡す語の定義。境界の両側が保持する</text>
  <text x="440" y="298" class="tx" text-anchor="middle">互いの中は指定せず、共有する文書でつながる（Federation <a href="#ch3"><tspan>第 3 章</tspan></a>）</text>
  <text x="10" y="322" class="ts" font-weight="700">変えるとき・分け直すとき・始めるとき</text>
  <g class="box"><rect x="10" y="332" width="280" height="76" rx="6"/><rect x="300" y="332" width="280" height="76" rx="6"/><rect x="590" y="332" width="280" height="76" rx="6"/></g>
  <g class="ts"><text x="22" y="356">版の改訂と採用</text><text x="312" y="356">Cell の分け直し</text><text x="602" y="356">導入</text></g>
  <g class="tx"><text x="22" y="376">提起者でない所有者が承認し、各 Cell が採用</text><text x="312" y="376">切り替えが始まったら分ける</text><text x="602" y="376">行き来の多いあいだから試す</text></g>
  <g class="tx"><a href="#ch6"><text x="22" y="398">第 6 章</text></a><a href="#ch7"><text x="312" y="398">第 7 章</text></a><a href="#ch8"><text x="602" y="398">第 8 章</text></a></g>
</svg>
```

Cell は責務と規範を持ち、語の定義を共有し、あいだを Contract に書き、Mission で頼み、Evidence で確かめます。各章がその部分を説明します。

※ 例の在庫と物流は第 1・2・4〜6 章で使う。語の意味は EAA Core 版 6 の概念表をこの本の言葉で言い直した。Core の字は各章の注で引く。
