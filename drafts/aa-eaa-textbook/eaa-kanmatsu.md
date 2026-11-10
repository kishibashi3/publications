# 巻末　語の一覧と引いた文書

<!--
@reader の v8 通読（roles-kaz reader/feedback-archive/2026-11-10-eaa-textbook-v8-70p-6readers.md、d0715594）で「無いもの」に挙がった 4 件のうち、語の一覧・引いた文書の一覧と入手先・この本の版と日付をここに置いた。着手: @ope-ultp1635 msg a08c1ed3。EAA の正式名は第 0 章 p.「この本と EAA Core」の絵の頭と、このページの語の一覧の 1 行目。
- 語の一覧: 読み方の 1 枚の注は「語の意味と全体の絵は、第 0 章の終わりの全体図へ」と案内していたが、全体図に Goal・Authority・ロードなどは無い（@reader の読者 2 体）。全体図は絵の役のまま残し、語は巻末に一覧を作って、読み方の 1 枚の案内先を「語の意味は巻末の語の一覧へ」に替えた。全体図に足さなかった理由: 全体図は 1 ページで Cell・文書・手続きのつながりを見せる絵で、25 語の意味を足すと絵が読めなくなる。
- 載せた語: 本文で名前を付けて使う語のうち、@reader が挙げた語（Goal・Constraints・Authority・Acceptance Evidence・Outcome・Task・ロード・割当・横断責務・Operator）と、全体図・章題に出る語。並びは定義したページの順。意味は本文の定義の字をこの本の言い直しのまま短くした（Core の字は各ページの注にある）。Constraints と Authority は Core の概念表に行が無く、本文 p.36 の問いから言い直した（Core「2.」は Mission の欄の名前として挙げる）。ページ番号は定義したページ。
- 引いた文書: 本文・注が引く文書を全部挙げ、置き場所を書いた。置き場所は 2026-11-10 に kishibashi3/publications の main で確かめた（enterprise-agentic-agile/ の 7 本・self-revising-norm-architecture/・agentic-agile-materials/explanations/eaa/・aa-eaa-textbook/ の aa-*.md）。repo は公開。公開サイト（docs/）にはどれも無い。この本の原稿は drafts/eaa-textbook の branch にだけある。LeSS・SAFe・Spotify の文献は付録の各ページの絵の中に題・URL・参照日がある。
- @reviewer の巻末の検算（roles-kaz reviewer/feedback-archive/2026-11-10-eaa-textbook-5221280-kanmatsu.md、a797aaaa、着手: @ope-ultp1635 msg 2999263c）で直した: EAA・Cell・割当・採用・正本・所有者・Outcome・Authority の行、p.6 の EAA の行（「AA を」→「AA から」）と注の出典、引いた文書に README の行。Outcome は Core の「成立させる」に合わせ、p.35 の本文と絵の字も「成り立たせる」に直した。正本を定義したページは p.22（「Profile の本文（正本）」）。
- この本の版: 本に版の番号を付けていないので、日付で書いた（草案、2026-11-10）。版を上げるときはこの行の日付を変える。
-->

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
    <text x="230" y="316">要る権限と能力を確保して、責務の引き受けを成り立たせること</text>
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
    <text x="230" y="100">互いの中の方式を指定せず、共有する文書でつながる関係</text>
    <text x="230" y="136">責任・提供条件・入出力・要る Evidence を定める、Cell のあいだの合意</text>
    <text x="230" y="172">成果や判断が成り立ったことを確かめられる記録</text>
    <text x="230" y="208">渡す語の意味の定義。境界の両側が保持する</text>
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

## 語の一覧：Mission の欄

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts" font-weight="700"><text x="40" y="28">語</text><text x="230" y="28">意味（この本の言い直し）</text><text x="840" y="28" text-anchor="end">定義</text></g>
  <path d="M30,40 H850" class="lt"/>
  <g class="ts" font-weight="700">
    <text x="40" y="66">Mission</text><text x="40" y="102">Goal</text><text x="40" y="138">Outcome</text><text x="40" y="174">Constraints</text><text x="40" y="210">Authority</text><text x="40" y="242">Acceptance</text><text x="40" y="260">Evidence</text><text x="40" y="286">Task</text><text x="40" y="322">Operator</text>
  </g>
  <g class="ts">
    <text x="230" y="66">引き受けた責務のもとで、今回実現する変化</text>
    <text x="230" y="102">Mission が目指す状態</text>
    <text x="230" y="138">Mission で実際に成り立たせる変化</text>
    <text x="230" y="174">Mission を進めるあいだ、変えてはいけない物</text>
    <text x="230" y="210">頼む側が持っている物のうち、受けた側が使ってよい物と、使わない物</text>
    <text x="230" y="251">Evidence のうち、成果の受け入れに使うと Mission に書いた物</text>
    <text x="230" y="286">Mission を受けた Cell が分けた作業。分け方はその Cell が決める</text>
    <text x="230" y="322">判断責任者を担う人間の呼び名。EAA Role Model の語</text>
  </g>
  <g class="ts hc" text-anchor="end">
    <a href="#p35"><text x="840" y="66">p.35</text></a><a href="#p35"><text x="840" y="102">p.35</text></a><a href="#p35"><text x="840" y="138">p.35</text></a><a href="#p36"><text x="840" y="174">p.36</text></a><a href="#p36"><text x="840" y="210">p.36</text></a><a href="#p36"><text x="840" y="251">p.36</text></a><a href="#p37"><text x="840" y="286">p.37</text></a><a href="#p63"><text x="840" y="322">p.63</text></a>
  </g>
</svg>
```

第 4 章の Mission とその欄の語、第 8 章の Operator です。Constraints と Authority の意味は p.36 の問いから言い直しました。

※ Mission の欄は Goal・Constraints・Authority・Acceptance Evidence（EAA Core 版 6「2.」）。完了の条件は p.38。

## 引いた文書と入手先

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="40" y="24" class="ts" font-weight="700">置き場所は、GitHub の公開 repo kishibashi3/publications の main。公開サイトには無い</text>
  <g class="tx" font-weight="700"><text x="40" y="54">文書</text><text x="330" y="54">位置づけ</text><text x="520" y="54">置き場所（drafts/ の下）</text></g>
  <path d="M30,62 H850" class="lt"/>
  <g class="ts">
    <text x="40" y="86" font-weight="700">EAA Core　版 6</text><text x="330" y="86">規範案（未確定）</text>
    <text x="40" y="110" font-weight="700">EAA Profiles</text><text x="330" y="110">責務仕様案（未確定）</text>
    <text x="40" y="134">Adoption Guide・Delivery Guide</text><text x="330" y="134">適用例（非規範）</text>
    <text x="40" y="158">Role Model</text><text x="330" y="158">適用例（非規範）</text>
    <text x="40" y="182">Working Notes</text><text x="330" y="182">検討資料（非規範）</text>
    <text x="40" y="206">EAA README</text><text x="330" y="206">案内（非規範）</text>
    <text x="40" y="230">自己改訂規範アーキテクチャ</text><text x="330" y="230">Core の準拠先</text>
    <text x="40" y="254">AA の本</text><text x="330" y="254">同じ組の本</text>
    <text x="40" y="278">EAA 紹介 0〜3</text><text x="330" y="278">この本の前の紹介資料</text>
  </g>
  <g class="tx" style="font-family:monospace">
    <text x="520" y="86">enterprise-agentic-agile/core.md</text>
    <text x="520" y="110">enterprise-agentic-agile/profiles.md</text>
    <text x="520" y="134">同じ所の adoption-guide.md・delivery-guide.md</text>
    <text x="520" y="158">同じ所の role-model.md</text>
    <text x="520" y="182">同じ所の working-notes.md</text>
    <text x="520" y="206">同じ所の README.md</text>
    <text x="520" y="230">self-revising-norm-architecture/</text>
    <text x="520" y="254">aa-eaa-textbook/ の aa- で始まる md</text>
    <text x="520" y="278">agentic-agile-materials/explanations/eaa/</text>
  </g>
  <text x="40" y="302" class="tx">LeSS・SAFe・Spotify の文献は、付録の各ページの絵の中に題・URL・参照日がある</text>
  <rect x="40" y="314" width="800" height="60" rx="10" fill="#fff" class="hl"/>
  <text x="60" y="339" class="ts hc" font-weight="700">この本の版</text><text x="200" y="339" class="ts">草案、2026-11-10。版が変わると、ページの番号と字も変わる</text>
  <text x="200" y="362" class="tx">原稿は同じ repo の branch drafts/eaa-textbook の drafts/aa-eaa-textbook/（eaa- で始まる md）</text>
</svg>
```

この本が引いた文書と、その置き場所です。Core と Profiles を規範として引き、ほかは適用例と検討資料です。この本も草案で、版は日付で示します。

※ 置き場所は 2026-11-10 に確かめた。Core の版は 6。Profiles と各 Guide に版の欄は無い。
