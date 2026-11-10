# 巻末　読み合わせの問い・組み方の見本・語の一覧・引いた文書

<!--
@reader の v8 通読（roles-kaz reader/feedback-archive/2026-11-10-eaa-textbook-v8-70p-6readers.md、d0715594）で「無いもの」に挙がった 4 件のうち、語の一覧・引いた文書の一覧と入手先・この本の版と日付をここに置いた。着手: @ope-ultp1635 msg a08c1ed3。EAA の正式名は第 0 章 p.「この本と EAA Core」の絵の頭と、このページの語の一覧の 1 行目。
- 語の一覧: 読み方の 1 枚の注は「語の意味と全体の絵は、第 0 章の終わりの全体図へ」と案内していたが、全体図に Goal・Authority・ロードなどは無い（@reader の読者 2 体）。全体図は絵の役のまま残し、語は巻末に一覧を作って、読み方の 1 枚の案内先を「語の意味は巻末の語の一覧へ」に替えた。全体図に足さなかった理由: 全体図は 1 ページで Cell・文書・手続きのつながりを見せる絵で、25 語の意味を足すと絵が読めなくなる。
- 載せた語: 本文で名前を付けて使う語のうち、@reader が挙げた語（Goal・Constraints・Authority・Acceptance Evidence・Outcome・Task・ロード・割当・横断責務・Operator）と、全体図・章題に出る語。並びは定義したページの順。意味は本文の定義の字をこの本の言い直しのまま短くした（Core の字は各ページの注にある）。Constraints と Authority は Core の概念表に行が無く、本文 p.36 の問いから言い直した（Core「2.」は Mission の欄の名前として挙げる）。ページ番号は定義したページ。
- 引いた文書: 本文・注が引く文書を全部挙げ、置き場所を書いた。置き場所は 2026-11-10 に kishibashi3/publications の main で確かめた（enterprise-agentic-agile/ の 7 本・self-revising-norm-architecture/・agentic-agile-materials/explanations/eaa/・aa-eaa-textbook/ の aa-*.md）。repo は公開。公開サイト（docs/）にはどれも無い。この本の原稿は drafts/eaa-textbook の branch にだけある。LeSS・SAFe・Spotify の文献は付録の各ページの絵の中に題・URL・参照日がある。
- @reviewer の巻末の検算（roles-kaz reviewer/feedback-archive/2026-11-10-eaa-textbook-5221280-kanmatsu.md、a797aaaa、着手: @ope-ultp1635 msg 2999263c）で直した: EAA・Cell・割当・採用・正本・所有者・Outcome・Authority の行、p.6 の EAA の行（「AA を」→「AA から」）と注の出典、引いた文書に README の行。Outcome は Core の「成立させる」に合わせ、p.35 の本文と絵の字も「成り立たせる」に直した。正本を定義したページは p.22（「Profile の本文（正本）」）。
- 同じ検算の Suggestion 2〜5 を直した（着手: @ope-ultp1635 msg 8f1f2e85）: ロードを Profiles「4.」と p.22 の「引き受け（ロード）」に合わせて引き受けそのものにした。Federation に主語「Cell どうしが」を足した。Ontology に Core 概念表の「意味の違いと対応を保持し」を足した（p.42 の主張）。3 枚目の題を「Mission の欄」から「Mission と判断責任者」にした（欄でない Mission・Outcome・Task・Operator が載るため。Operator は判断責任者を担う人間の呼び名。「Mission と Operator」は見出しの上限 20 字を 1 字越える）。
- fc76428 の再検算（roles-kaz reviewer/feedback-archive、f9f6d6d5、着手: @ope-ultp1635 msg dd244475）で直した: 3 枚目に判断責任者の行を足した（定義 p.22。Core「1.」の語で、本文 6 ページと割当の行に出るのに一覧に無かった。Operator はそれを担う人間の非規範の呼び名なので、Operator の上に置いた。意味の字は Core「1.」の「正当な判断責任者」に合わせ、「責任」を落とさない形にした — @ope-ultp1635 msg ba79d6b0）。行が増えた分、本文の「の語」「の意味」を落として 80 字に収めた。p.35 の絵の Outcome に「実際に」を足した（Core の Outcome の字。Mission の「今回実現する変化」と分ける）。
- 読み合わせの問い・組み方の見本を足した（@reader v8 の「無いもの」の残り 2 件。着手: @ope-ultp1635 msg 9ec25e29、kishibashi3 GO）。語の一覧より前に置いた。巻末の中で使う物を先に、引く物を後にするため。語の一覧と引いた文書のページ番号は 4 ページ後ろへずれた（本文からこの 4 ページを番号で指す所は無い。grep で確認）。
- 読み合わせの問い: 章ごとに 1 ページを足さず、巻末に 2 ページで全章を並べた。研修では全章の問いをまとめて配れる形が要り（読者は付録も 3 枚を組で渡している）、章ごとに置くと 9 ページ増えて各ページの本文が問い 1 文になる。問いは書き手が作り、各章の本文の字（判定・Profile の項目・Contract の欄・Mission の問い・公開と採用・引き継ぐもの・行き来の数え方）から取った。第 4 章は Contract と Mission の 2 問。右の列は答えと比べるページ。群の切れ目（第 0〜3 章・第 4〜8 章）でページを分けた。
- 組み方の見本: AA の巻末「通しの 1 枚：役・ファイル・線・約束」に当たる 1 枚。周辺文書から取れる字だけで書いた — Delivery Guide「6.」（Issue・Sub-issue・PR・Actions・コメント・close の対応、ふつうの変更は Agent が判定し規範改訂と採用版の移行は所有者が判断）・「7.」（Mission の Issue の欄。説明用の記法で確定スキーマではない）・「8.」（PR の merge は Mission の完了と同じではない。今回の絵には入れていない）・「20.」（引受側の CLAUDE.md から提供側 Profile の固定版を参照、正本の PR と採用版の PR を分ける）、文書管理（採用先は repo・文書パス・完全な commit SHA を記録し、branch 名と latest を採用版にしない）。Profiles「4.」も CLAUDE.md の実装例を Delivery Guide に送る。
- 組み方の見本の右下（周辺文書に無いもの）: Contract・Ontology・Constitution のファイル名、Profile 正本と Contract を置く repo、Cell ごとに repo を分けるか、採用の記録を置く場所。2026-11-10 に main の enterprise-agentic-agile/ の全文書と document-management.md を「repo・ファイル・.md・パス・置き場・保存」で grep して、無いことを確かめた（観測範囲: main の enterprise-agentic-agile/ と document-management.md。未確認: 他 branch）。書き手の読みでは埋めていない。AA の見本にある「最初に作るファイル」の並びも、EAA の周辺文書に無いので作っていない。決め方の行き先は p.「Core が決めていないこと」。
- 引いた文書に文書管理（drafts/document-management.md、運用案内・非規範）を足した。組み方の見本が引くため。
- この本の版: 本に版の番号を付けていないので、日付で書いた（草案、2026-11-10）。版を上げるときはこの行の日付を変える。
-->

## 読み合わせの問い：第 0〜3 章

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" font-weight="700"><text x="40" y="28">章</text><text x="210" y="28">問い（自分の現場の記録で答える）</text><text x="840" y="28" text-anchor="end">戻る所</text></g>
  <path d="M30,40 H850" class="lt"/>
  <g class="ts" font-weight="700"><text x="40" y="76">第 0 章</text><text x="40" y="164">第 1 章</text><text x="40" y="252">第 2 章</text><text x="40" y="340">第 3 章</text></g>
  <g class="tx"><text x="40" y="96">AA と巨大なシステム</text><text x="40" y="184">Cell の境界</text><text x="40" y="272">Profile</text><text x="40" y="360">Constitution と</text><text x="40" y="376">Federation</text></g>
  <g class="ts">
    <text x="210" y="76">いまのチーム一つで、1 日に出る判断は何件か。</text><text x="210" y="98">そのうち、責任を負う人間が追えるのは何件か</text>
    <text x="210" y="164">仕事の途中で、別の語・記録・価値・権限へ切り替えている</text><text x="210" y="186">持ち場はどこか。職能で分けた持ち場は、その中にあるか</text>
    <text x="210" y="252">自分のチームの責務を Profile の項目で書くと、書けない項目は</text><text x="210" y="274">どれか。誰が引き受けるかは、どこで決めているか</text>
    <text x="210" y="340">相手のチームの中の作り方を指定したり、判断を上書きしたり</text><text x="210" y="362">している取り決めはあるか。提案に替えるなら、誰に出すか</text>
  </g>
  <path d="M30,120 H850 M30,208 H850 M30,296 H850" stroke="#ddd" stroke-width="1"/>
  <g class="ts hc" text-anchor="end">
    <a href="#p3"><text x="840" y="76">p.3</text></a>
    <a href="#p9"><text x="840" y="164">p.9</text></a><a href="#p12"><text x="840" y="186">p.12</text></a>
    <a href="#p19"><text x="840" y="252">p.19</text></a><a href="#p22"><text x="840" y="274">p.22</text></a>
    <a href="#p27"><text x="840" y="340">p.27</text></a><a href="#p28"><text x="840" y="362">p.28</text></a>
  </g>
</svg>
```

研修や読み合わせで、章ごとに話し合う問いです。答えは自分の現場の記録から出し、右のページに戻って本の字と比べます。

※ 問いは書き手が作った。EAA Core と Profiles に問いは無い。答えの正しさは、この本では決めない。

## 読み合わせの問い：第 4〜8 章

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" font-weight="700"><text x="40" y="28">章</text><text x="210" y="28">問い（自分の現場の記録で答える）</text><text x="840" y="28" text-anchor="end">戻る所</text></g>
  <path d="M30,40 H850" class="lt"/>
  <g class="ts" font-weight="700"><text x="40" y="66">第 4 章</text><text x="40" y="120">第 4 章</text><text x="40" y="174">第 5 章</text><text x="40" y="228">第 6 章</text><text x="40" y="282">第 7 章</text><text x="40" y="336">第 8 章</text></g>
  <g class="tx"><text x="40" y="86">Contract</text><text x="40" y="140">Mission</text><text x="40" y="194">Evidence と Ontology</text><text x="40" y="248">版の改訂と採用</text><text x="40" y="302">Cell の分け直し</text><text x="40" y="356">EAA の導入</text></g>
  <g class="ts">
    <text x="210" y="66">行き来の多い相手と、責任・提供条件・入出力・必要な Evidence</text><text x="210" y="86">のうち、まだ合意していないのはどれか</text>
    <text x="210" y="120">最近頼んだ仕事を p.36 の問いで書き直すと、受けた側が</text><text x="210" y="140">聞きに戻ってきた所は、どの欄が書けていなかった所か</text>
    <text x="210" y="174">受け取った成果を、作った側に聞かずに確かめられる記録はあるか。</text><text x="210" y="194">相手と意味の違う語は、どこに書いてあるか</text>
    <text x="210" y="228">共有している文書を変えるとき、承認する人と提起した人は別か。</text><text x="210" y="248">採用を決める人は、Cell ごとに決まっているか</text>
    <text x="210" y="282">持ち場を分け直すとき、進行中の Mission・残件・まだ果たして</text><text x="210" y="302">いない保証は、誰に引き継ぐかが決まっているか</text>
    <text x="210" y="336">差し戻し・問い合わせ・議事録・PR のコメントで、境界を越えた</text><text x="210" y="356">行き来が一番多いあいだはどこか。そこから Contract に書けるか</text>
  </g>
  <path d="M30,100 H850 M30,154 H850 M30,208 H850 M30,262 H850 M30,316 H850" stroke="#ddd" stroke-width="1"/>
  <g class="ts hc" text-anchor="end">
    <a href="#p31"><text x="840" y="66">p.31</text></a><a href="#p32"><text x="840" y="86">p.32</text></a>
    <a href="#p36"><text x="840" y="120">p.36</text></a>
    <a href="#p40"><text x="840" y="174">p.40</text></a><a href="#p42"><text x="840" y="194">p.42</text></a>
    <a href="#p45"><text x="840" y="228">p.45</text></a><a href="#p50"><text x="840" y="248">p.50</text></a>
    <a href="#p55"><text x="840" y="282">p.55</text></a><a href="#p56"><text x="840" y="302">p.56</text></a>
    <a href="#p58"><text x="840" y="336">p.58</text></a><a href="#p59"><text x="840" y="356">p.59</text></a>
  </g>
</svg>
```

第 4 章は、Contract と Mission で問いを分けました。第 8 章の問いの答えが、導入で最初に Contract に書くあいだの候補になります。

※ p.36 の問いは Mission の欄を埋めるためのもの。ここでは、すでに頼んだ仕事を見直すのに使う。

## 組み方の見本：記録と置き場所

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="10" y="6" width="425" height="170" rx="8" fill="#fff" stroke="#222" stroke-width="3"/>
  <text x="26" y="32" class="ts" font-weight="700">GitHub に残すもの（Delivery Guide「6.」）</text>
  <g class="ts"><text x="26" y="60">Mission → Issue、分けた Mission → Sub-issue</text><text x="26" y="84">変更の提案と成果物 → PR</text><text x="26" y="108">確かめた Evidence → Actions</text><text x="26" y="132">判断と Evidence → コメント</text><text x="26" y="156" class="hc">完了の記録 → close（Evidence に基づく）</text></g>
  <rect x="445" y="6" width="425" height="170" rx="8" fill="#fff" class="lt"/>
  <text x="461" y="32" class="ts" font-weight="700">Mission の Issue に書く欄（「7.」）</text>
  <g style="font-family:monospace;font-size:14px"><text x="461" y="62">cell・profile・requested_by</text><text x="461" y="86">goal・constraints</text><text x="461" y="110">authority・acceptance</text><text x="461" y="134">ontology・constitution・contract</text></g>
  <g class="tx"><text x="461" y="152">　の ref と version（参照する版）</text><text x="461" y="170">説明用の記法で、確定した書式ではない</text></g>
  <rect x="10" y="184" width="425" height="170" rx="8" fill="#fff" class="lt"/>
  <text x="26" y="210" class="ts" font-weight="700">CLAUDE.md と PR（「6.」「20.」）</text>
  <g class="ts"><text x="26" y="238">提供する側の Profile の固定した版を参照する</text><text x="26" y="262">版を変えるときは、正本の PR と採用版の PR を分ける</text><text x="26" y="286">ふつうの変更は Agent が判定し、規範の改訂と</text><text x="26" y="306">採用版の移行は所有者が判断する（「6.」）</text></g>
  <g class="tx"><text x="26" y="328">採用の記録は repo・文書の path・完全な commit SHA で書き、</text><text x="26" y="346">branch 名と latest は使わない（文書管理）</text></g>
  <rect x="445" y="184" width="425" height="170" rx="8" fill="#fff" class="lt" stroke-dasharray="6 4"/>
  <text x="461" y="210" class="ts" font-weight="700">周辺文書に無いもの</text>
  <g class="ts"><text x="461" y="238">Contract・Ontology・Constitution のファイル名</text><text x="461" y="262">Profile の正本と Contract を置く repo</text><text x="461" y="286">Cell ごとに repo を分けるか</text><text x="461" y="310">採用の記録を置く場所</text></g>
  <text x="461" y="338" class="tx">この本も決めない。決め方は <a href="#p64"><tspan>p.64</tspan></a>（Core が決めていないこと）</text>
  <text x="440" y="374" class="tx" text-anchor="middle">出典: Delivery Guide「6.」「7.」「20.」、文書管理（どれも非規範の適用例）</text>
</svg>
```

Mission は Issue、変更は PR、確かめた結果は Actions に残します。引き受けた側の CLAUDE.md は、採用した Profile の版を固定で指します。

※ 周辺文書から取れる所だけを書いた。右下はどの文書にも無いので、書き手の読みでも埋めていない。p.49 も CLAUDE.md から版を指す例。

## 語の一覧：Cell と責務

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" font-weight="700"><text x="40" y="28">語</text><text x="230" y="28">意味（この本の言い直し）</text><text x="840" y="28" text-anchor="end">定義</text></g>
  <path d="M30,40 H850" class="lt"/>
  <g class="ts" font-weight="700">
    <text x="40" y="64">EAA</text><text x="40" y="100">AA</text><text x="40" y="136">Cell</text><text x="40" y="172">ループ</text><text x="40" y="208">Profile</text><text x="40" y="244">Standard・Domain</text><text x="40" y="280">割当</text><text x="40" y="316">ロード</text><text x="40" y="352">横断責務</text>
  </g>
  <g class="ts">
    <text x="230" y="64">Enterprise Agentic Agile。AA から、責務の分割と Federation で広げる</text>
    <text x="230" y="100">Agentic Agile。Agent に開発を任せるやり方。同じ組の AA の本が扱う</text>
    <text x="230" y="127">目的に対する責任・権限・実行能力を持ち、</text><text x="230" y="145">外との合意に基づいて自律して成果を出す単位</text>
    <text x="230" y="172">Agent が計画し、作り、確かめて直すのを繰り返す流れ</text>
    <text x="230" y="208">Cell が引き受ける責務の、版付きの仕様</text>
    <text x="230" y="244">Profile の 2 種。EAA が再利用できる形で出す物と、企業が業務から書く物</text>
    <text x="230" y="271">引き受ける Cell・判断責任者・資源・範囲・採用した版を、</text><text x="230" y="289">Profile と別に決めた物。権限はここで与える</text>
    <text x="230" y="316">指定範囲の責務を引き受け、要る権限と能力を確保すること</text>
    <text x="230" y="352">複数の Cell にまたがる変更・保証の責務。これも Profile に書く</text>
  </g>
  <g class="ts hc" text-anchor="end">
    <a href="#p6"><text x="840" y="64">p.6</text></a><a href="#p2"><text x="840" y="100">p.2</text></a><a href="#p2"><text x="840" y="136">p.2</text></a><a href="#p2"><text x="840" y="172">p.2</text></a><a href="#p19"><text x="840" y="208">p.19</text></a><a href="#p21"><text x="840" y="244">p.21</text></a><a href="#p22"><text x="840" y="280">p.22</text></a><a href="#p22"><text x="840" y="316">p.22</text></a><a href="#p24"><text x="840" y="352">p.24</text></a>
  </g>
</svg>
```

第 0〜2 章で名前を付けた語です。右のページ番号は語を定義したページで、押すとそのページへ移ります。

※ 意味はこの本の言い直し。EAA Core 版 6 の字は、定義したページの注で引いている。

## 語の一覧：規範と文書

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" font-weight="700"><text x="40" y="28">語</text><text x="230" y="28">意味（この本の言い直し）</text><text x="840" y="28" text-anchor="end">定義</text></g>
  <path d="M30,40 H850" class="lt"/>
  <g class="ts" font-weight="700">
    <text x="40" y="64">Constitution</text><text x="40" y="100">Federation</text><text x="40" y="136">Contract</text><text x="40" y="172">Evidence</text><text x="40" y="208">Ontology</text><text x="40" y="244">採用</text><text x="40" y="280">正本</text><text x="40" y="316">所有者</text><text x="40" y="352">提起者</text>
  </g>
  <g class="ts">
    <text x="230" y="64">Cell が採用した目的・価値・制約・権限・禁止事項の規範</text>
    <text x="230" y="100">Cell どうしが互いの中の方式を指定せず、共有する文書でつながる関係</text>
    <text x="230" y="136">責任・提供条件・入出力・要る Evidence を定める、Cell のあいだの合意</text>
    <text x="230" y="172">成果や判断が成り立ったことを確かめられる記録</text>
    <text x="230" y="208">渡す語の意味の定義。境界の両側が保持し、意味の違いと対応も持つ</text>
    <text x="230" y="244">各 Cell の規範の所有者が、文書の版に従うと決めること。版の公開とは別の行為</text>
    <text x="230" y="280">Profile の本文。提供する側が持ち、版を重ねる</text>
    <text x="230" y="316">文書の改訂を承認する人間。Cell の規範の所有者は、新しい版の採用も決める</text>
    <text x="230" y="352">改訂を出した者。自分が出した改訂は承認しない</text>
  </g>
  <g class="ts hc" text-anchor="end">
    <a href="#p26"><text x="840" y="64">p.26</text></a><a href="#p28"><text x="840" y="100">p.28</text></a><a href="#p31"><text x="840" y="136">p.31</text></a><a href="#p40"><text x="840" y="172">p.40</text></a><a href="#p42"><text x="840" y="208">p.42</text></a><a href="#p45"><text x="840" y="244">p.45</text></a><a href="#p22"><text x="840" y="280">p.22</text></a><a href="#p50"><text x="840" y="316">p.50</text></a><a href="#p50"><text x="840" y="352">p.50</text></a>
  </g>
</svg>
```

第 3〜6 章で名前を付けた語です。Cell が持つ規範と、Cell のあいだで共有する文書と、その文書を変えるときに出てくる人の呼び名です。

※ 所有者と提起者の決め方は第 6 章。Contract の所有者の決め方は p.51。

## 語の一覧：Mission と判断責任者

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" font-weight="700"><text x="40" y="28">語</text><text x="230" y="28">意味（この本の言い直し）</text><text x="840" y="28" text-anchor="end">定義</text></g>
  <path d="M30,40 H850" class="lt"/>
  <g class="ts" font-weight="700">
    <text x="40" y="66">Mission</text><text x="40" y="102">Goal</text><text x="40" y="138">Outcome</text><text x="40" y="174">Constraints</text><text x="40" y="210">Authority</text><text x="40" y="242">Acceptance</text><text x="40" y="260">Evidence</text><text x="40" y="286">Task</text><text x="40" y="322">判断責任者</text><text x="40" y="358">Operator</text>
  </g>
  <g class="ts">
    <text x="230" y="66">引き受けた責務のもとで、今回実現する変化</text>
    <text x="230" y="102">Mission が目指す状態</text>
    <text x="230" y="138">Mission で実際に成り立たせる変化</text>
    <text x="230" y="174">Mission を進めるあいだ、変えてはいけない物</text>
    <text x="230" y="210">頼む側が持っている物のうち、受けた側が使ってよい物と、使わない物</text>
    <text x="230" y="251">Evidence のうち、成果の受け入れに使うと Mission に書いた物</text>
    <text x="230" y="286">Mission を受けた Cell が分けた作業。分け方はその Cell が決める</text>
    <text x="230" y="322">責務ごとに置く、その責務の判断に正当な責任を持つ者。誰かは割当で決める</text>
    <text x="230" y="358">判断責任者を担う人間の呼び名。EAA Role Model の語</text>
  </g>
  <g class="ts hc" text-anchor="end">
    <a href="#p35"><text x="840" y="66">p.35</text></a><a href="#p35"><text x="840" y="102">p.35</text></a><a href="#p35"><text x="840" y="138">p.35</text></a><a href="#p36"><text x="840" y="174">p.36</text></a><a href="#p36"><text x="840" y="210">p.36</text></a><a href="#p36"><text x="840" y="251">p.36</text></a><a href="#p37"><text x="840" y="286">p.37</text></a><a href="#p22"><text x="840" y="322">p.22</text></a><a href="#p63"><text x="840" y="358">p.63</text></a>
  </g>
</svg>
```

第 4 章の Mission とその欄、第 2 章の判断責任者、第 8 章の Operator です。Constraints と Authority は p.36 の問いから言い直しました。

※ Mission の欄は Goal・Constraints・Authority・Acceptance Evidence（EAA Core 版 6「2.」）。完了の条件は p.38。

## 引いた文書と入手先

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="40" y="24" class="ts" font-weight="700">置き場所は、GitHub の公開 repo kishibashi3/publications の main。公開サイトには無い</text>
  <g class="tx" font-weight="700"><text x="40" y="54">文書</text><text x="330" y="54">位置づけ</text><text x="520" y="54">置き場所（drafts/ の下）</text></g>
  <path d="M30,62 H850" class="lt"/>
  <g class="ts">
    <text x="40" y="84" font-weight="700">EAA Core　版 6</text><text x="330" y="84">規範案（未確定）</text>
    <text x="40" y="106" font-weight="700">EAA Profiles</text><text x="330" y="106">責務仕様案（未確定）</text>
    <text x="40" y="128">Adoption Guide・Delivery Guide</text><text x="330" y="128">適用例（非規範）</text>
    <text x="40" y="150">Role Model</text><text x="330" y="150">適用例（非規範）</text>
    <text x="40" y="172">Working Notes</text><text x="330" y="172">検討資料（非規範）</text>
    <text x="40" y="194">EAA README</text><text x="330" y="194">案内（非規範）</text>
    <text x="40" y="216">自己改訂規範アーキテクチャ</text><text x="330" y="216">Core の準拠先</text>
    <text x="40" y="238">AA の本</text><text x="330" y="238">同じ組の本</text>
    <text x="40" y="260">EAA 紹介 0〜3</text><text x="330" y="260">この本の前の紹介資料</text>
    <text x="40" y="282">AA・EAA の文書管理</text><text x="330" y="282">運用案内（非規範）</text>
  </g>
  <g class="tx" style="font-family:monospace">
    <text x="520" y="84">enterprise-agentic-agile/core.md</text>
    <text x="520" y="106">enterprise-agentic-agile/profiles.md</text>
    <text x="520" y="128">同じ所の adoption-guide.md・delivery-guide.md</text>
    <text x="520" y="150">同じ所の role-model.md</text>
    <text x="520" y="172">同じ所の working-notes.md</text>
    <text x="520" y="194">同じ所の README.md</text>
    <text x="520" y="216">self-revising-norm-architecture/</text>
    <text x="520" y="238">aa-eaa-textbook/ の aa- で始まる md</text>
    <text x="520" y="260">agentic-agile-materials/explanations/eaa/</text>
    <text x="520" y="282">document-management.md</text>
  </g>
  <text x="40" y="304" class="tx">LeSS・SAFe・Spotify の文献は、付録の各ページの絵の中に題・URL・参照日がある</text>
  <rect x="40" y="314" width="800" height="60" rx="10" fill="#fff" class="hl"/>
  <text x="60" y="339" class="ts hc" font-weight="700">この本の版</text><text x="200" y="339" class="ts">草案、2026-11-10。版が変わると、ページの番号と字も変わる</text>
  <text x="200" y="362" class="tx">原稿は同じ repo の branch drafts/eaa-textbook の drafts/aa-eaa-textbook/（eaa- で始まる md）</text>
</svg>
```

この本が引いた文書と、その置き場所です。Core と Profiles を規範として引き、ほかは適用例と検討資料です。この本も草案で、版は日付で示します。

※ 置き場所は 2026-11-10 に確かめた。Core の版は 6。Profiles と各 Guide に版の欄は無い。
