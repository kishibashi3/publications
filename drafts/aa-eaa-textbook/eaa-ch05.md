# 第 5 章　Contract と Mission

群: 切っても残る結合の持ち方
副題: 結合は Contract で明示し、仕事は Mission で頼む

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（7a7f5737）の第 6 章。着手: @ope-ultp1635 msg 6ad8d3f2（群三）。
この章が拠る本の考え: 各主体の文脈を疎結合にする（structure-v5.md「イデア」第 2 文。逐語は roles-kaz 側）。
2d0ca30 までの第 8 章（Contract は、結ぶ Cell のすべてが同じ版を採用して成立する）の中身を、この章に移した: Contract の定義と「どの Evidence を渡すか」（core.md:24・38）、欄と問い、所有者・観測・準拠先（core.md:94）、例の版 1、埋まらない欄、全部が採用して成立（core.md:80）、所有者は結ぶ Cell の中の 1 人（core.md:98）、片側だけでは変わらない（素材 3 の読み）、契約書との関係は Core に書かれていない。旧本文は 2d0ca30 の eaa-ch08.md にある。
②の直し（1d62eef、@ope-ultp1635 msg 95d31f1b、@reviewer 2026-11-08 ch06-09 三）を落とさずに持ってきた: 必要な Evidence の問いは core.md:22（受け取った側が作った側を介さずに確かめられる）と core.md:39（成果や判断の成立）の字のまま。所有者・観測・準拠先のページは欄のページの次に置き、例の版 1 にも 3 行を残した。準拠先の行の絵の説明「改訂の承認と版を定めた文書。Core も従う」（2 周目の直し）もそのまま。さらに p.「Contract に書く欄と問い」の文の「右の問いに答えれば欄が埋まります」に「欄のほかに持つものは次のページ」を足した。@reviewer 3-2（問いで欄を埋めた読み手は core.md:94 の要件を欠いた Contract を書く）の形を、文の側でも閉じるため。
持ってこなかったもの（群四の第 10 章へ移す）: 結んでいない者は所有者にならない・所有者が離れたら改訂は止まる・後任も結ぶ Cell の合意で決める・所有者がいない間も止めることはできる（core.md:98-102）、最後のページの「後任の合意が成り立たないときは合意不成立」（core.md:101・11）。どれも共有する文書の所有者と承認の話で、v5 の第 10 章（共有する文書の改訂を人間の所有者が承認する）の中身。第 10 章を書くまで、旧本文は 2d0ca30 の eaa-ch08.md にある。
2d0ca30 の第 2 章 p.「揃えるのは外とのつながり方」（delivery-guide.md「3.」、適用例）の中身は p.「中の作り方は書かない」に持ってきた。第 2 章の注（「群三の第 6 章で Contract と一緒に扱う」）のとおり。
2d0ca30 の第 0 章 p.「つなぐのは版の付いた共有文書」のうち、どの Evidence を渡すかを Contract に書く（core.md:24）は p.「結合は Contract に集める」へ。各 Cell が採用を決め、全部が同じ版を採用したときに成り立つ（⑥ の直し: 成り立つ版まで各 Cell が決めるとは読ませない）は p.「結ぶ Cell が全部採用して、成立する」へ。
p.「切っても渡すものは残る」「疎結合は、少なく明示された結合」「暗黙の結合は相手を読ませる」は書き手の読み。Core は疎結合の語を使っていない（core.md を grep で確認、0 件）。注に書いた。
p.「結ぶ Cell が全部採用して、成立する」の 2 文目は、目次の通読で @reader の読者が第 6 章（全員が同じ版）と第 9 章（各自の版）の関係を組み立てられなかった所（@reader 349c4d63）への答え。core.md:79-80（新版の公開と採用は別、採用中の合意は移行が成立するまで有効）の字による。
在庫と物流の例は、第 4 章の組と同じ。例の版 1 の入出力・Evidence に「指示番号」を足し、欠品を「物流がそう判断した理由」とした。第 8 章で、在庫が物流に聞かずに突き合わせられること（core.md:22）と、判断の成立（core.md:39）を例で見せるため。第 9 章の例（出荷指示に希望時間帯を足す）とは食い違わない。中が Scrum・委託先の標準工程という設定は素材 3 と 2d0ca30 の第 6 章のまま。第 7・8 章でも使う。
Core 版 6 は「契約」「検収」の語を使っていない（core.md を grep で確認）。Contract に「契約」の字を当てない（2 周目に Contract＝契約書の取り違えが強まった。@reader r2 cea29c1f）。
絵: 在庫と物流の Cell は横に並べ、Contract は二つの Cell のあいだに置き、どちらの枠の中にも入れない。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff。判定の正本 @reviewer 2026-11-08-eaa-textbook-77a7fc9-ch00-04 / ch05-08 / ch09-12-furoku、@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）: 「EAA 紹介 3」の説明が本に無かった（@reader の読者 3 体）。最初に出る p.「例：在庫と物流のあいだ」の注に書いた。付録 p.「引用の確かめ方」の注にも置いた。
v6 の 3 便目（着手: @ope-ultp1635 msg df6c27d8。構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v6.md 87be3308）で、ファイルを eaa-ch06.md から eaa-ch05.md に、章を第 6 章から第 5 章にした。本文・注・絵の「第 N 章」を v6 の番号にした（第 6 章以降は 1 ずつ減らした）。旧第 3〜5 章を指していた所: p.「切っても渡すものは残る」の本文「第 4 章で在庫と物流をドメインの境界で切りました」を第 2 章に（ドメインの例は第 2 章 p.「例：ドメインで切る」）。この上の記録の章番号は、そのときの番号のまま。
082ceb2 の検算 3 便目を受けて直した（@ope-ultp1635 msg 468b4a37、判定の正本 @reviewer 2026-11-09-eaa-textbook-082ceb2-ch04-constitution-federation 97306492）: 副題の「集める」を「明示する」にした。Contract に集めるのはこの本の読みで（p.「Core はここまでしか決めていない」）、Evidence の様式も共有する文書として並ぶ（p.「欄のほかに、所有者・観測・準拠先を持つ」）。第 4 章の送りも「Contract に書いて明示する」に揃えた。
以下は 1 本にする前の第 6 章（Mission、aa7e499 の eaa-ch06.md）の記録。
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（7a7f5737）の第 7 章。着手: @ope-ultp1635 msg 6ad8d3f2（群三）。
この章が拠る本の考え: 主体ごとにコンテキストスイッチが起きないように切り分ける（structure-v5.md「イデア」第 2 文。逐語は roles-kaz 側）。この章がイデアに当たる所は「受ける Cell が自分の文脈だけで進められる形」。
直した理由: @reader の目次の通読（349c4d63）で 6 体とも第 7 章を読む章に選ばず、2 周目（cea29c1f）で読者が Mission の例（契約プランの変更）を自分の出荷の話に当てられなかった。Contract には欄を埋める問いのページがあり、Mission には無かった。
直し方（書き手が決めた。@ope-ultp1635 msg 6ad8d3f2 で「あなたが決めてください」）:
(1) p.「欄を埋めるための問い」を足した。問いは書き手が作った。Core は欄の名前だけを挙げる（core.md:65・78）。各問いは Core の字と照合した — Acceptance Evidence の問いは core.md:22（受け取った側が作った側を介さずに確かめる）・39（成果や判断の成立）・40（受け入れる判断に使う）、Authority の問いは core.md:66（委任元が正当に与えられる範囲を越えない）、依存する版は core.md:78、背景と引受条件は core.md:65。Contract の問いで @reviewer 3 回目に出た形（問いに答えた Mission が Core を満たさない）を作らないため。
(2) p.「書けたかは、聞きに戻るかで確かめる」を問いのページの次に置いた。イデアの字を判定の形にしたもので、書き手の読み。
(3) 例を契約プランの変更から、第 4・6 章と同じ在庫と物流の組に替えた（追跡番号を出荷結果に載せる）。読者が当てられなかったのは、例が自分の組に無かったこと、Authority の「書いてよい：契約　書かない：請求」が何の持ち物かを決められなかったことの二つ。例を通しの組にし、p.「Authority は頼む側の持ち物まで」で、受ける側の中の作り方は Authority に書かないことを足した。これは core.md:62（各 Cell は内部方式と実行を決める）と 66 から書き手が導いた。注に書いた。
(4) p.「聞きに戻る渡し方」を章の初めに置いた。書き手の読み（渡し直しは第 1 章、コンテキストスイッチは第 2 章の字）。
2d0ca30 までの第 7 章（仕事は Mission で渡し、作業や受け入れだけでは完了にしない）から持ってきた: Mission・Goal・Outcome の定義（core.md:32-34）、一回の仕事と続く取り決め（素材 3）、欄（core.md:65）、依存する版（core.md:78）、Task は受けた Cell が分ける（core.md:35・66）、任せる権限は自分の持つ範囲まで（core.md:66）、目的を変えるなら提案する（core.md:67。⑥ の直しのまま）、完了に要るもの（core.md:106）、作業や受け入れだけでは完了しない（core.md:107。「必要な」職務分離は ⑥ のまま）、記録に戻す（core.md:109-110。Delivery Guide の字は注に置く ⑥ のまま）。旧本文は 2d0ca30 の eaa-ch07.md にある。持ってこなかったもの: 契約プランの変更の例（delivery-guide.md:131-179）。例を替えたため。Delivery Guide の例が説明用の記法で確定スキーマではないこと（178 行）は最後のページの出典に残した。
@reviewer 2026-11-08 ch06-09 2-2 を入れた: 完了を判定する者は、人の名指しは Core に無いが、Cell の単位では Acceptance Evidence を確かめるのは Evidence を受け取った Cell（core.md:22・40）。p.「受け入れは頼んだ Cell が決める」に書いた。Contract 更新・判断記録・権限違反の解消を誰が判定するかは Core の字に無いので、最後のページに置いた。同 2-2 の「項目名」と「欄の名前」の取り違え: 左を「Mission に書く欄（Goal など）」、右を「Mission の記法（書く場所・書式）」にした。
例の Mission の完了に Contract 版 2 の成立が要ることは、core.md:106（必要な Contract 更新）と、追跡番号の欄が Contract 版 1 の入出力に無いことから。版の移り方は第 9 章。
用語: Constraints・Authority は Core の概念表に定義が無い（core.md:65 で欄の名前として出るだけ）。英語の欄名を残し「守る条件」「任せる権限」を添えた（素材 3）。Constitution は第 3 章で説明した語。
「子Mission」「親Goal」（core.md:67）は Mission の分け方の呼び名で、Cell の親子ではない。
絵: Mission を Cell の枠の中に描かない。頼む Cell と受ける Cell は横に並べる。
例はすべて説明のために作った。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff。判定の正本 @reviewer 2026-11-08-eaa-textbook-77a7fc9-ch00-04 / ch05-08 / ch09-12-furoku、@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）: (1) p.「書けたかは、聞きに戻るかで確かめる」を p.「聞きに戻る所は、書けていない所」にした。聞きに戻らないことは、推測で埋めた場合と区別できず証拠にならない（core.md:76）。直す先は Mission の欄とは限らず、Ontology・Contract もある。章の頭の要約も同じに。(2) p.「Authority は頼む側の持ち物まで」: 渡すものが無ければ「無い」と書く（core.md:65、@reader p.104）、中の直し方は「規範と Contract の範囲で」（core.md:62）、例の Contract 版 2 の改訂と採用はどちらの持ち物でもなく第 9 章の手続き、を書いた。(3) 例の Mission の依存する版に「完了には版 2 の成立が要る」を書き、p.「依存する版で、前提が動かない」と食い違わないようにした。版 2 は在庫も採用して成り立つ・所有者が自分で提起すると承認できない、を注に（@reader p.107）。(4) 二つの「受け入れ」: p.「作業や受け入れだけでは完了しない」を「変更の提案を受け入れた」、次のページを「成果の受け入れは頼んだ Cell が決める」にし、確かめる Cell が受け入れも決めるのは読みだと断った（@reader p.108・p.111）。(5) 例の Acceptance Evidence を、物流が残し在庫が物流を介さずに引き直せる形にした（第 8 章「残すのは作る側」と合わせた）。
v6 の 3 便目（着手: @ope-ultp1635 msg df6c27d8。構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v6.md 87be3308）で、ファイルを eaa-ch07.md から eaa-ch06.md に、章を第 7 章から第 6 章にした。本文・注・絵の「第 N 章」を v6 の番号にした（第 6 章以降は 1 ずつ減らした）。旧第 3〜5 章を指していた所: 旧第 3〜5 章を指す所は無かった。この上の記録の章番号は、そのときの番号のまま。
v7 で畳んだ（構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v7.md 863f5176。本文 GO: @ope-ultp1635 msg d9ab1757、kishibashi3「うん」。便 2 の着手: @ope-ultp1635 msg 7bd9839e）: 第 5 章（Contract、16 ページ）と第 6 章（Mission、18 ページ）を 1 章 8 ページにした。ファイルは eaa-ch05.md 1 本（旧 eaa-ch06.md は消した）。旧本文は aa7e499 の eaa-ch05.md・eaa-ch06.md にある。
- p.「疎結合は、少なく明示された結合」← 同題 ＋ p.「切っても渡すものは残る」（本文 1 文目と絵の上の段）p.「暗黙の結合は相手を読ませる」（絵の中の列と注）
- p.「結合は Contract に集める」← 同題 ＋ p.「Contract に書く欄と問い」（絵の表）p.「欄のほかに、所有者・観測・準拠先を持つ」（本文 2 文目と絵の下の段）
- p.「例：在庫と物流の Contract」← 同題 ＋ p.「例：在庫と物流のあいだ」（絵の上の段の中の作り方、EAA 紹介 3 の注）p.「埋まらない欄は、まだ合意していない」（本文 3 文目と絵の下の行）p.「中の作り方は書かない」（本文 2 文目）
- p.「結ぶ Cell が全部採用して、成立する」← 同題 ＋ p.「所有者は、結ぶ Cell の中の 1 人」p.「所有者が片側でも、片側だけでは変わらない」（絵の下の段）
- p.「Mission は、一回の仕事」← p.「一回の仕事と、続く取り決め」＋ p.「Mission は、今回の変化」p.「聞きに戻る渡し方」（絵の下の段と注）
- p.「例：追跡番号を出荷結果に載せる」← 同題 ＋ p.「Mission に書く欄」p.「欄を埋めるための問い」（Acceptance Evidence の問いを例の字に）p.「聞きに戻る所は、書けていない所」p.「Task は、受けた Cell が分ける」p.「Authority は頼む側の持ち物まで」p.「依存する版で、前提が動かない」
- p.「完了と受け入れ」← p.「完了に要るもの」＋ p.「作業や受け入れだけでは完了しない」p.「成果の受け入れは頼んだ Cell が決める」p.「決めたことは、記録に戻す」
落とした: p.「目的を変えるなら、提案する」（core.md:67 の後半は例のページの注に 1 文で残した）、2 章分の p.「Core はここまでしか決めていない」（右側は第 9 章 p.「Core が決めていないこと」へ。字は ledger に逐語で控えた）、p.「次章へ：仕事の渡し方」「次章へ：成果の確かめ方」。落とした字と行き先: writer-ja/drafts/eaa-toc/fold-v7-ledger.md の便 2。
畳んで落ちかけた Core の字を戻した: 採用を決めるのは各 Cell の規範の所有者（core.md:91）は p.「結ぶ Cell が全部採用して、成立する」の注、Mission で背景と引受条件を共有する（core.md:65）は例の絵の右上、埋まらない欄の読みが EAA 紹介 3 のもので Core の規定ではないことは p.「例：在庫と物流の Contract」の注。
v7 の残す字「結ぶ Cell の全部が同じ版を採用して成り立つ。片側だけの間は前の版」（core.md:80）は p.「結ぶ Cell が全部採用して、成立する」の本文に逐語。
章番号: この章の本文・注・絵は v7 の章番号（10 章）で書いた。版の改訂と採用・所有者は第 7 章（旧第 8・9 章）。この上の記録の章番号は、そのときの番号のまま。
v7 の 3 便目（@ope-ultp1635 msg 58cbdf2b の判定 1）: core.md:67 の前半「子 Mission は親 Goal への寄与を説明可能にする」を p.「Mission は、一回の仕事」の絵（Goal・Outcome の箱の下）に戻した。便 2 で落としたが、第 4 章にこの字は無く、落とす根拠が無かった。出典に「2.」を足した。後半（目的を変えるなら新しい Mission か改訂として提案する）は p.「例：追跡番号を出荷結果に載せる」の注のまま。
検算 1 便目と v7 の通読を受けて直した（@ope-ultp1635 msg 9628f0a9。判定の正本 roles-kaz reviewer/feedback-archive/2026-11-09-eaa-textbook-d0dd000-fold-v7-1-core.md、reader/feedback-archive/2026-11-09-eaa-textbook-v7-68p-6readers.md）: p.「Contract は、契約書とは別に持つ」を足した（@reader 河野・片山。3 周目は 454f55d の eaa-ch05.md p.「Core はここまでしか決めていない」と eaa-ch11.md p.「採用しない部分は、相手に示す」の 2 ページで分かっていた。重なる所の例は eaa-ch11.md の例のまま）。p.「Mission の欄を埋める問い」を 454f55d の eaa-ch06.md p.「欄を埋めるための問い」から戻した（@reader 河野・宮下）。Authority の行に、頼む側が持っていないものは書けない（core.md:66）を足した（河野が自分で書く Authority が分からなかった）。
-->

> Contract には渡すもの・条件・確かめ方を書き、結ぶ Cell のすべてが同じ版を採用して成り立たせる。一回ずつの仕事は Mission で、受ける Cell が頼む側の事情を知らずに進められる形で渡す。

```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <rect x="30" y="30" width="250" height="180" rx="10" class="box"/><text x="155" y="66" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <rect x="600" y="30" width="250" height="180" rx="10" class="box"/><text x="725" y="66" class="t" text-anchor="middle" font-weight="700">物流の Cell</text>
  <rect x="330" y="30" width="220" height="70" rx="3" class="hl" style="fill:#fff"/><text x="440" y="60" class="ts hc" text-anchor="middle" font-weight="700">Contract　版 1</text><text x="440" y="86" class="tx" text-anchor="middle">続く取り決め</text>
  <path d="M280,66 H326 M554,66 H596" class="ln"/>
  <rect x="330" y="124" width="220" height="70" rx="3" class="lt" style="fill:#fff"/><text x="440" y="154" class="ts" text-anchor="middle" font-weight="700">Mission</text><text x="440" y="180" class="tx" text-anchor="middle">今回の仕事</text>
  <path d="M280,160 H326" class="ln"/><path d="M554,160 H596" class="ln" marker-end="url(#arr)"/>
  <use href="#i-ok" x="141" y="120" width="28" height="28"/><text x="155" y="180" class="ts okc" text-anchor="middle">版 1 を採用</text>
  <use href="#i-ok" x="711" y="120" width="28" height="28"/><text x="725" y="180" class="ts okc" text-anchor="middle">版 1 を採用</text>
  <text x="440" y="264" class="t" text-anchor="middle" font-weight="700">結合は少なく明示して持ち、その上で一回ずつ頼む</text>
</svg>
```

価値・ドメイン・権限で切っても、Cell のあいだで渡すものは残ります。この本は、その結合を Contract に集めて明示し、その上で一回ずつの仕事を Mission で頼みます。

## 疎結合は、少なく明示された結合

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="440" y="30" class="ts" text-anchor="middle">在庫と物流を切っても、出荷指示と出荷結果は行き来する</text>
  <path d="M293,50 V300 M586,50 V300" class="lt dash"/>
  <text x="146" y="80" class="t xc" text-anchor="middle" font-weight="700">結合が無い</text>
  <rect x="30" y="110" width="90" height="90" rx="10" class="box"/><rect x="172" y="110" width="90" height="90" rx="10" class="box"/>
  <use href="#i-no" x="134" y="143" width="24" height="24"/>
  <text x="146" y="240" class="ts" text-anchor="middle">何も渡らないなら、</text><text x="146" y="266" class="ts" text-anchor="middle">分業にならない</text>
  <text x="440" y="80" class="t xc" text-anchor="middle" font-weight="700">書いていない</text>
  <rect x="320" y="110" width="90" height="90" rx="10" class="box"/><rect x="470" y="110" width="90" height="90" rx="10" class="box"/>
  <path d="M410,138 H466" class="xl" marker-end="url(#arr-x)"/><path d="M466,174 H414" class="xl" marker-end="url(#arr-x)"/>
  <text x="440" y="240" class="ts" text-anchor="middle">締め時刻を、指示の</text><text x="440" y="266" class="ts" text-anchor="middle">たびに相手に聞く</text>
  <text x="733" y="80" class="t hc" text-anchor="middle" font-weight="700">少なく、明示してある</text>
  <rect x="612" y="110" width="80" height="90" rx="10" class="box"/><rect x="774" y="110" width="80" height="90" rx="10" class="box"/>
  <rect x="696" y="131" width="74" height="48" rx="3" class="hl" style="fill:#fff"/><text x="733" y="161" class="tx hc" text-anchor="middle">Contract</text>
  <use href="#i-ok" x="721" y="216" width="24" height="24"/>
  <text x="733" y="266" class="ts" text-anchor="middle">渡すものだけが通る</text>
  <text x="440" y="346" class="ts sub" text-anchor="middle">疎結合は、結合が無いことではない</text>
</svg>
```

第 2 章で在庫と物流を切っても、出荷指示と結果は行き来します。疎結合は結合が無いことではなく、少なく明示されていることです。

※ 書き手の読み。Core は疎結合の語を使わない。書いていない結合は、指示のたびに相手の事情を聞きに行かせる（第 2 章のコンテキストスイッチ）。例は作った。

## 結合は Contract に集める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="14" width="800" height="300" rx="3" class="hl" style="fill:#fff"/>
  <text x="60" y="42" class="ts hc" font-weight="700">Contract に書く欄</text><text x="300" y="42" class="tx">自分の案件で欄を埋めるときの問い</text>
  <g class="ts">
    <text x="60" y="82" font-weight="700">相互の責任</text><text x="300" y="82">相手に何を約束し、何を約束してもらうか</text>
    <text x="60" y="118" font-weight="700">提供条件</text><text x="300" y="118">どんな条件の下でなら、その約束を守れるか</text>
    <text x="60" y="154" font-weight="700">入出力</text><text x="300" y="154">何を渡し、何を受け取るか。その形は</text>
    <text x="60" y="190" font-weight="700">必要な Evidence</text><text x="300" y="190">何が残っていたら、成果と判断が成り立ったと、</text><text x="300" y="212" font-weight="700">受け取った側が、作った側を介さずに確かめられるか</text>
  </g>
  <path d="M60,98 H820 M60,134 H820 M60,170 H820" class="lt"/><path d="M60,232 H820" class="ln"/>
  <text x="60" y="262" class="ts" font-weight="700">共有する文書として持つもの</text>
  <text x="60" y="294" class="ts">所有者（人間）・観測・準拠先</text><text x="440" y="294" class="tx">欄だけでは、Contract は揃わない</text>
  <text x="440" y="338" class="tx" text-anchor="middle">結合を Contract に集めるのは、この本の読み。Core は Contract の欄と、境界に流れを通すことを書く</text>
  <text x="440" y="364" class="ts sub" text-anchor="middle">どの Evidence を渡すかも、ここで決める</text>
</svg>
```

Contract は、相互の責任、提供条件、入出力、必要な Evidence を定める Cell のあいだの合意です。共有する文書なので所有者・観測・準拠先も持ちます。

出典: EAA Core 版 6 の概念表「Contract」、「0.」「4.」。所有者は人間。※ 問いは EAA 紹介 3 のもので、Evidence の問いは Core の字に合わせた。

## 例：在庫と物流の Contract

```svg
<svg viewBox="0 0 880 404" width="880" height="404">
  <rect x="40" y="8" width="220" height="48" rx="10" class="box"/><text x="150" y="30" class="ts" text-anchor="middle" font-weight="700">在庫の Cell</text><text x="150" y="48" class="tx" text-anchor="middle">中は Scrum（自社のチーム）</text>
  <rect x="620" y="8" width="220" height="48" rx="10" class="box"/><text x="730" y="30" class="ts" text-anchor="middle" font-weight="700">物流の Cell</text><text x="730" y="48" class="tx" text-anchor="middle">中は委託先の標準工程</text>
  <text x="440" y="38" class="tx" text-anchor="middle">中の作り方は、Contract に書かない</text>
  <rect x="40" y="66" width="800" height="294" rx="3" class="hl" style="fill:#fff"/>
  <text x="60" y="90" class="ts hc" font-weight="700">在庫と物流のあいだの Contract　版 1</text>
  <g class="tx">
    <text x="60" y="118" font-weight="700">相互の責任</text><text x="200" y="118">在庫は、引き当て済みの品目だけを指示に載せる。物流は、受けた指示を出荷し、結果を返す</text>
    <text x="60" y="146" font-weight="700">提供条件</text><text x="200" y="146">平日 15 時までに受けた指示は、その日のうちに出荷する</text>
    <text x="60" y="174" font-weight="700">入出力</text><text x="200" y="174">渡す：出荷指示（指示番号・品目・数量・届け先）</text><text x="200" y="192">受け取る：出荷結果（指示番号・出荷番号・出荷日時・欠品の有無と理由）</text>
    <text x="60" y="220" font-weight="700">必要な Evidence</text><text x="200" y="220">指示と結果を指示番号で 1 件ずつ突き合わせた記録。欠品は、物流がそう判断した理由とともに残す</text>
    <text x="60" y="256" font-weight="700">所有者</text><text x="200" y="256">物流の窓口の責任者</text>
    <text x="60" y="282" font-weight="700">観測</text><text x="200" y="282">受け入れられなかった出荷結果と、その理由</text>
    <text x="60" y="308" font-weight="700">準拠先</text><text x="200" y="308">自己改訂規範アーキテクチャ v1・最小構成</text><text x="520" y="308">改訂の承認と版を定めた文書。Core も従う</text>
    <text x="60" y="332">準拠先は未確定の草案。GitHub の kishibashi3/publications の drafts/self-revising-norm-architecture/ にあり、公開サイトには無い</text>
  </g>
  <path d="M60,130 H820 M60,158 H820 M60,204 H820" class="lt"/><path d="M60,236 H820" class="ln"/>
  <text x="440" y="390" class="ts sub" text-anchor="middle">埋まらない欄は、まだ合意していないこと。版 1 を出す前に相手と決める</text>
</svg>
```

在庫と物流の例で欄を埋めた Contract です。中が Scrum でも委託先の工程でも、書くのはあいだの約束だけです。埋まらない欄は、まだ合意していないことです。

※ 例・中の作り方・埋まらない欄の読みは EAA 紹介 3（この本の前に書いた紹介資料。先に読まなくてよい）のもので、以降の章でも使う。準拠先は Core「4.」が決めた文書。

## Contract は、契約書とは別に持つ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="tx">
    <text x="60" y="30" font-weight="700"></text><text x="200" y="30" class="hc" font-weight="700">Contract</text><text x="540" y="30" font-weight="700">商取引の契約書</text>
    <text x="60" y="60" font-weight="700">結ぶもの</text><text x="200" y="60">Cell と Cell。同じ会社の中でも結ぶ</text><text x="540" y="60">会社と会社</text>
    <text x="60" y="90" font-weight="700">書くこと</text><text x="200" y="90">相互の責任・提供条件・入出力・必要な Evidence</text><text x="540" y="90">代金・期間・検収・責任の範囲などの取引の条件</text>
    <text x="60" y="120" font-weight="700">変え方</text><text x="200" y="120">所有者が版を公開し、結ぶ Cell が全部採用して移る</text><text x="540" y="120">当事者が合意して改める</text>
    <text x="60" y="150" font-weight="700">確かめ方</text><text x="200" y="150">受け取った Cell が Evidence で受け入れる</text><text x="540" y="150">発注側が契約の条件で検収する</text>
  </g>
  <path d="M40,40 H840 M40,70 H840 M40,100 H840 M40,130 H840 M180,14 V160 M520,14 V160" class="lt"/>
  <text x="440" y="196" class="ts" text-anchor="middle" font-weight="700">会社をまたぐあいだでは、両方を持つ。Contract は契約書の代わりにならない</text>
  <rect x="40" y="216" width="800" height="120" rx="10" class="soft"/>
  <text x="60" y="244" class="ts" font-weight="700">両方が同じことを決めているとき</text>
  <text x="60" y="272" class="tx">例：Contract の所有者の交代を、取引先との契約書で決めている</text>
  <text x="60" y="298" class="tx">→ Core を採用するときに、その規定を「採用しない部分」と理由として記録に書き、</text>
  <text x="60" y="320" class="tx">　 Contract を結ぶ相手の Cell に示す（記録の書き方は第 9 章）</text>
  <text x="440" y="366" class="ts sub" text-anchor="middle">契約書との関係は、Core に書かれていない</text>
</svg>
```

Contract は Cell のあいだの合意で、契約書の代わりではありません。契約書で決めている所は、Core を採用するときに採用しない部分として相手に示します。

※ 契約書の側の欄と、重なる所の扱いは書き手の読み。例は仮定。採用しない部分を示すのは Core 版 6「6.」。契約主体をまたぐ責任は Profiles「6.」の Supplier。

## 結ぶ Cell が全部採用して、成立する

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M120,200 H820" class="ln" marker-end="url(#arr)"/><text x="830" y="226" class="tx" text-anchor="end">時間</text>
  <text x="70" y="70" class="ts" text-anchor="middle" font-weight="700">在庫</text><text x="70" y="140" class="ts" text-anchor="middle" font-weight="700">物流</text>
  <rect x="300" y="46" width="520" height="40" rx="3" class="hl" style="fill:#fff"/><text x="560" y="72" class="ts hc" text-anchor="middle">版 1 を採用中</text>
  <rect x="500" y="116" width="320" height="40" rx="3" class="hl" style="fill:#fff"/><text x="660" y="142" class="ts hc" text-anchor="middle">版 1 を採用中</text>
  <path d="M300,30 V190" class="lt dash"/><text x="300" y="24" class="tx" text-anchor="middle">在庫が採用</text>
  <path d="M500,30 V190" class="ln"/><use href="#i-ok" x="512" y="166" width="22" height="22"/><text x="540" y="184" class="ts okc">ここで成立</text>
  <text x="400" y="114" class="tx" text-anchor="middle">片側だけでは</text><text x="400" y="134" class="tx" text-anchor="middle">まだ成り立たない</text>
  <rect x="40" y="248" width="390" height="110" rx="10" class="box"/>
  <text x="235" y="278" class="ts" text-anchor="middle" font-weight="700">所有者</text>
  <text x="235" y="306" class="tx" text-anchor="middle">結ぶ Cell に属する人間 1 人</text><text x="235" y="330" class="tx" text-anchor="middle">作るときに、結ぶ Cell が合意して決める</text>
  <rect x="450" y="248" width="390" height="110" rx="10" class="soft"/>
  <text x="645" y="278" class="ts" text-anchor="middle" font-weight="700">所有者が決めるのは本文と版まで</text>
  <text x="645" y="306" class="tx" text-anchor="middle">その版を採用するかは、各 Cell が決める</text><text x="645" y="330" class="tx" text-anchor="middle">片側の都合では、結合の形は動かない</text>
</svg>
```

採用するかは各 Cell が決め、全部が同じ版を採用したときに、その版で成り立ちます。新しい版を片側だけが採用している間は、前の版が効き続けます。

出典: EAA Core 版 6「3.」「4.」。採用を決めるのは各 Cell の規範の所有者。※ 所有者の都合だけでは変わらない、は EAA 紹介 3 の読み。版の移り方は第 7 章。

## Mission は、一回の仕事

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M440,20 V200" class="lt dash"/>
  <text x="220" y="44" class="t" text-anchor="middle" font-weight="700">Mission</text><text x="220" y="68" class="ts sub" text-anchor="middle">責務のもとで今回実現する変化</text>
  <text x="660" y="44" class="t" text-anchor="middle" font-weight="700">Contract</text><text x="660" y="68" class="ts sub" text-anchor="middle">続いていく取り決め</text>
  <rect x="60" y="86" width="320" height="104" rx="3" class="hl" style="fill:#fff"/>
  <g class="ts" text-anchor="middle"><text x="220" y="116">出荷結果に追跡番号を載せる</text></g>
  <g class="tx"><text x="80" y="148" font-weight="700">Goal</text><text x="160" y="148">目指す状態</text><text x="80" y="174" font-weight="700">Outcome</text><text x="160" y="174">成り立たせた変化</text></g>
  <rect x="500" y="86" width="320" height="104" rx="3" class="hl" style="fill:#fff"/>
  <g class="ts" text-anchor="middle"><text x="660" y="124">在庫と物流のあいだの</text><text x="660" y="150">責任・条件・入出力・Evidence</text><text x="660" y="178" class="sub">変えるまで効き続ける</text></g>
  <text x="440" y="214" class="tx" text-anchor="middle">Mission を分けたら、子 Mission は親 Goal への寄与を説明できるようにする</text>
  <rect x="40" y="236" width="800" height="120" rx="10" class="xl" style="fill:#fff"/>
  <use href="#i-no" x="60" y="254" width="24" height="24"/><text x="96" y="272" class="ts">「追跡番号を出してほしい、詳しくは打合せで」と渡す</text>
  <text x="96" y="304" class="tx">物流は、どこで終わりか・何を変えてはだめか・何で受け入れるかが分からない</text>
  <text x="96" y="332" class="tx xc">在庫の事情を聞きに戻る（頼んだ側の文脈を読みに行く）</text>
</svg>
```

Mission は、引き受けた責務のもとで今回実現する変化です。目指す状態が Goal、成り立たせた変化が Outcome です。続く取り決めは Contract です。

出典: EAA Core 版 6 の概念表「Mission」「Goal」「Outcome」、「2.」。※ 詳しくは打合せでと渡すと、受けた側は頼んだ側に聞きに戻る（書き手の読み、第 2 章）。

## Mission の欄を埋める問い

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="10" width="800" height="330" rx="3" class="hl" style="fill:#fff"/>
  <g class="ts">
    <text x="60" y="44" font-weight="700">Goal</text><text x="270" y="44">終わったとき、何ができるようになっているか</text>
    <text x="60" y="88" font-weight="700">Constraints</text><text x="270" y="88">進めるあいだ、何を変えてはいけないか</text>
    <text x="60" y="132" font-weight="700">Authority</text><text x="270" y="132">頼む側が持っているもののうち、何を使ってよく、</text><text x="270" y="154">何を使わないか</text>
    <text x="270" y="176" class="tx">頼む側が持っていないものは書けない。無ければ「無い」と書く</text>
    <text x="60" y="220" font-weight="700">Acceptance Evidence</text><text x="270" y="220">何が残っていたら、成果と判断が成り立ったと、</text><text x="270" y="242" font-weight="700">頼んだ側が、受けた側を介さずに確かめられるか</text>
    <text x="60" y="286" font-weight="700">依存する版</text><text x="270" y="286">どの版の Contract・Ontology・Constitution を前提にしたか</text>
    <text x="60" y="326" class="sub">背景と条件</text><text x="270" y="326" class="sub">引き受けるかを決めるのに、受ける側は何を知る必要があるか</text>
  </g>
  <path d="M50,62 H830 M50,106 H830 M50,194 H830 M50,262 H830 M50,304 H830" class="lt"/>
  <text x="440" y="368" class="ts sub" text-anchor="middle">左が Core の欄。右は、自分の案件で欄を埋めるときの問い</text>
</svg>
```

右の問いに答えると、Mission の欄が埋まります。問いは、受ける側が頼む側に聞かなくても答えが分かる形で書くためのものです。

※ 問いは書き手が作った。Core の字と照合した（Acceptance Evidence は「0.」と概念表、Authority は「2.」の委任元の範囲を越えない）。

## 例：追跡番号を出荷結果に載せる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="6" width="800" height="270" rx="3" class="hl" style="fill:#fff"/>
  <text x="60" y="30" class="ts hc" font-weight="700">在庫の Cell から物流の Cell への Mission</text><text x="820" y="30" class="tx" text-anchor="end">ほかに、背景と引き受ける条件を共有する</text>
  <g class="tx">
    <text x="60" y="58" font-weight="700">Goal</text><text x="240" y="58">在庫が、出荷結果から配送業者の追跡番号を読める</text>
    <text x="60" y="88" font-weight="700">Constraints</text><text x="240" y="88">15 時締めと当日出荷を変えない。出荷結果のいまの欄の意味を変えない</text>
    <text x="60" y="118" font-weight="700">Authority</text><text x="240" y="118">使ってよい：在庫の結合テスト環境に出荷結果を送る　使わない：在庫の本番の引当データ</text>
    <text x="240" y="136" class="sub">在庫が持つものだけ。無ければ「無い」と書く。物流の処理の直し方は書かない</text>
    <text x="60" y="166" font-weight="700">Acceptance Evidence</text><text x="240" y="166">物流が結合テストで送った出荷結果 100 件。在庫が配送業者の照会で、</text><text x="240" y="184">物流を介さずに引き直せる形</text>
    <text x="60" y="214" font-weight="700">依存する版</text><text x="240" y="214">Contract 版 1・Ontology 版 1。途中で新しい版が出ても版 1 の上で進める</text>
    <text x="240" y="232" class="sub">完了には版 2（追跡番号の欄を足す）の成立が要る</text>
    <text x="60" y="262" class="sub">背景</text><text x="240" y="262" class="sub">届け先からの「荷物はどこか」に、在庫の窓口が答えたい</text>
  </g>
  <path d="M50,70 H830 M50,100 H830 M50,148 H830 M50,196 H830 M50,244 H830" class="lt"/>
  <rect x="40" y="290" width="390" height="80" rx="10" class="soft"/>
  <text x="235" y="320" class="ts" text-anchor="middle" font-weight="700">Task は物流が分ける</text><text x="235" y="348" class="tx" text-anchor="middle">在庫は Task の分け方を指定しない</text>
  <rect x="450" y="290" width="390" height="80" rx="10" class="box"/>
  <text x="645" y="316" class="ts" text-anchor="middle" font-weight="700">物流が聞きに戻った所は、書けていない所</text><text x="645" y="342" class="tx" text-anchor="middle">直す先は、その欄・Ontology・Contract</text><text x="645" y="362" class="tx" text-anchor="middle">聞きに戻らないだけでは、書けた証拠にならない</text>
</svg>
```

在庫から物流への Mission です。欄と依存する版を書けば、物流は在庫の事情を知らずに進められます。Task の分け方は物流が決めます。

出典: EAA Core 版 6「2.」「3.」、概念表「Task」。※ 目的を変えるなら、新しい Mission か改訂として提案する（「2.」）。聞きに戻る所の読みと例は書き手。

## 完了と受け入れ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="40" y="26" class="ts" font-weight="700">完了に要るもの（全部）</text>
  <g class="tx" text-anchor="middle">
    <rect x="40" y="38" width="190" height="64" rx="6" class="h"/><text x="135" y="64" class="on" font-weight="700">Outcome の達成</text><text x="135" y="88" class="on">追跡番号を読める</text>
    <rect x="243" y="38" width="190" height="64" rx="6" class="h"/><text x="338" y="64" class="on" font-weight="700">Acceptance Evidence</text><text x="338" y="88" class="on">の充足</text>
    <rect x="446" y="38" width="190" height="64" rx="6" class="box"/><text x="541" y="64" font-weight="700">Contract の更新と</text><text x="541" y="88" font-weight="700">判断の記録</text>
    <rect x="650" y="38" width="190" height="64" rx="6" class="box"/><text x="745" y="64" font-weight="700">権限違反の解消</text><text x="745" y="88">本番に触れていない</text>
  </g>
  <g class="tx" text-anchor="middle">
    <rect x="40" y="126" width="250" height="40" rx="6" class="soft"/><text x="165" y="152">作業をやり終えた</text>
    <rect x="315" y="126" width="250" height="40" rx="6" class="soft"/><text x="440" y="152">変更の提案を受け入れた</text>
    <rect x="590" y="126" width="250" height="40" rx="6" class="soft"/><text x="715" y="152">PR を merge した</text>
  </g>
  <text x="440" y="192" class="ts xc" text-anchor="middle">どれも、それだけでは完了ではない。確かめの条件と、必要な職務分離を保つ</text>
  <rect x="40" y="210" width="390" height="150" rx="10" class="box"/>
  <text x="235" y="240" class="ts" text-anchor="middle" font-weight="700">成果の受け入れを決めるのは在庫</text>
  <text x="235" y="268" class="tx" text-anchor="middle">物流の「できました」の後も、</text><text x="235" y="290" class="tx" text-anchor="middle">Acceptance Evidence を受け取った在庫が</text><text x="235" y="312" class="tx" text-anchor="middle">記録で確かめて決める</text>
  <rect x="450" y="210" width="390" height="150" rx="10" class="soft"/>
  <text x="645" y="240" class="ts" text-anchor="middle" font-weight="700">決めたことは記録に戻す</text>
  <text x="645" y="268" class="tx" text-anchor="middle">Mission・実行・Evidence・受け入れ・</text><text x="645" y="290" class="tx" text-anchor="middle">改訂・引き継ぎを、後から追える形で</text><text x="645" y="312" class="tx" text-anchor="middle">重要な決定を、会話だけに残さない</text><text x="645" y="340" class="tx sub" text-anchor="middle">例：Issue・PR・Actions・Comment・Close</text>
</svg>
```

完了には、Outcome の達成、Acceptance Evidence の充足、必要な Contract の更新と判断の記録、権限違反の解消のすべてが要ります。

出典: EAA Core 版 6「0.」「5.」、Delivery Guide「6.」「8.」（適用例）。※ 確かめる Cell が成果の受け入れも決める、は書き手の読み。提案の受け入れとは別。
