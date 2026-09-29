# 承認台帳

> 位置づけ：記録（非規範）
> 対象：本リポジトリの規範文書に対する、所有者の採否。
> 参照：記録の義務は[自己改訂規範アーキテクチャ v1・最小構成](../self-revising-norm-architecture/self-revising-norm-architecture-minimal.md) §2、採用内容の固定は[文書管理](../document-management.md)に従う。

## この台帳について

最小構成 §2 は「評価・改訂の提起・採否を、追記のみの記録に残す」と定めている。本書はこのうち**採否**を残す。
1 行に 1 件、所有者がどの文書のどの版を、どの内容で承認したか、または承認しなかったかを書く。

評価と提起の本文は PR・issue・レビュー記録にあり、行の「根拠」欄から参照する。これらは後から編集できるので、ファイルにある記録は commit SHA を含む固定リンク（`blob/<SHA>/<パス>`）で指す。PR・issue のように SHA で固定できない場所は、後から書き換えられうるものとして参照する。
採否の出ていない提起（保留・取り下げ）は、本書には行が残らない。

文書が正本であることは、本書に承認の行があることで示す。冒頭の「位置づけ」欄の記述や、commit・merge があるだけでは示さない（文書管理「履歴・承認・採用」）。
ただし、最小構成は体系の根であり、その版は最小構成 §4 により所有者の承認そのものによって成立する。最小構成は本書に行が無くても正本である。最小構成について行を書く場合も、それは記録であり、版はその行によって成立するのではない。

## 本書の位置づけ

本書は記録であり、規範ではない。所有者・観測・準拠先を持たず、本書自身を承認する行も置かない。
本書を規範にすると、本書にも承認の行が要り、最初の行が本書自身を承認する行になる。

下の規則には出どころが 2 つあり、それぞれに付記する。

- **［§2］**：最小構成 §2 から来る規則。本書が非規範でも、§2 によって拘束する。
- **［書式］**：本書が決めた書き方。義務を追加しない。書式に合わない行も、承認として数えるかどうかは最小構成 §2 に従って判定される。

行を承認として数えるかどうかは、本書では判定しない。本書は、判定に要る事実を残す。案内と最小構成が食い違うときは、最小構成に従う。

行を誰が書いたかは、git の履歴からは確かめられない。エージェントと所有者が、同じ GitHub アカウント・同じ git author で commit するためである。本人記入（下の規則）は書式の約束であり、行があることは所有者が判断したことの証明ではない。判断の証明は、根拠欄の参照先による。

## 書き方の規則

- ［§2］追記のみとする。既存の行を書き換えない・消さない・並べ替えない。
- ［§2］改訂を提起した者は、その改訂を承認しない。提起者と承認者が同じになる行は、下の「提起者＝承認者」の印で示す。
- ［書式］各行の先頭に連番を付ける。1 から始め、1 ずつ増やす。連番の飛び・重複・逆転は、行が消された・並べ替えられたことを示す。連番は追記のみを強制するものではなく、破られたことに気づくためのものである。
- ［書式］承認・不承認の行は承認者本人が書く。起案者・レビュー者・エージェントが代わりに書かない。提起者が承認の行を書くと、提起者が承認したのと区別できない。適用の行は判断ではないので、承認者以外が書いてもよい。その場合は備考に書いた者を記す。
- ［書式］訂正は、前の行を残して新しい行を足す。種別を「訂正」とし、備考に対象の行の連番と、何をどう改めるかを書く。
- ［書式］取消は、**記入の取消**である。行に書いた事実が誤っていた（その判断は無かった、別の文書だった、等）ときに、新しい行で種別を「取消」とし、備考に対象の行の連番と理由を書く。
- ［書式］判断を変える（承認を撤回する、不承認を改める）ときは、取消を使わない。その日の判断として、承認または不承認の行を新しく書く。最小構成 §2 では、承認した改訂は新しい版になるので、判断を変えるときも前の版に戻すのではなく新しい行を足す。
- ［書式］訂正・取消の行は、対象の行を書いた者が書く。
- ［書式］表より上の案内を変えても、既存の行は書き換えない。

## 列

| 列 | 書くこと |
| --- | --- |
| 連番 | 行の番号。1 から 1 ずつ増やす |
| 判断日 | 承認者が判断した日（`YYYY-MM-DD`）。特定できない場合は、根拠から言える範囲（例：`2026-09-23 以前`）で書き、推定で一日に絞らない |
| 記入日 | この行を書いた日（`YYYY-MM-DD`） |
| 種別 | 承認／不承認／訂正／取消／適用。適用は、承認済みの差分が文書に当たった commit を残す行で、新しい判断ではない。備考に対応する承認の行の連番を書く |
| 文書 | リポジトリとパス。パスは commit 欄の SHA 時点のものを書き、後でファイルが移っても書き換えない。1 行に 1 文書とし、複数の文書にかかる承認は文書ごとに行を分ける |
| 版 | 文書の規範上の版識別子。起案の改訂番号（rev.N）ではない。文書に版が無い場合は「未設定」と書き、SHA で代用しない（文書管理「採用内容の固定」） |
| commit | 承認した内容を特定する完全なコミット SHA。本リポジトリで開ける SHA を書く。まだ文書に当たっていない差分を承認する場合は、差分を本リポジトリの PR として置き、その head の SHA を書く。当たった後に「適用」の行を足し、その commit を書く。本リポジトリの外（非公開のリポジトリを含む）の SHA は commit 欄に書かず、必要なら根拠欄に添える |
| 提起者 | 改訂を提起した者。起案した者と内容を決めた者が違う場合は、両方を役割とともに書く |
| 承認者 | 判断した人間 |
| 根拠 | 提起と評価が残っている場所（PR・issue・レビュー記録）。ファイルは SHA を含む固定リンクで書く |
| 備考 | 下記の印、訂正・取消・適用の対象となる行の連番 |

## 印

備考欄に、該当するものを書く。

判断日が記入日より前の行は、すべて次の条件に従う。備考に、判断があったことを示す記述の場所（ファイルと commit SHA）を書く。その記述は、記入日より前の commit に入っていなければならない。この条件を満たさない場合、または記入の時点で判断をやり直す場合は、記入日の承認の行として書く。そのうえで、判断日によって次の印を分ける。

- **遡及**：判断日が 2026-09-28 より前の行。本書ができる前にあった判断を、後から記録する。判断をやり直すものではない。
- **遅延**：判断日が 2026-09-28 以降で、記入日より前の行。備考に、遅れた理由も書く。
- **提起者＝承認者**：提起者と承認者が同じ人になる行。隠さずにそのまま書き、なぜそうなったか（最小構成の内側に入る前の立ち上げである、等）を書く。その行を承認として数えるかは、最小構成 §2 に従って判定される。

## 本書に書かないもの

- **他のCellでの採用の承認**。EAA の規範を採用する承認は、採用するCellの規範の所有者が行い、そのCellが記録を管理する。本書は、本リポジトリの規範文書の所有者の判断だけを残す。
- **採用記録のうち、本リポジトリの規範文書の所有者に示す部分**（EAA Core の観測欄の入力）。何を示すか、どこに置くかは Core の観測欄の側で定める（未決：#86）。本書に写すと、Cellが管理する記録の写しが所有者の側にでき、どちらが正か分からなくなる。観測から改訂が提起され、所有者が採否を判断したときに、その判断を本書に残し、観測の記録を根拠欄から参照する。
- **評価と改訂の提起を追記のみで残す場所**（最小構成 §2 のうち、本書が持たない部分）。本書は採否だけを残し、評価と提起は根拠欄から参照する。参照先の PR・issue は書き換えられ、レビュー記録は公開の読み手が開けない場所にある。どこに残すかは体系の側で決める（未決：#87）。

## 書き方の例（架空）

以下は実在しない文書・人・commit による例であり、承認の記録ではない。下の「記録」の表には入れない。

| 連番 | 判断日 | 記入日 | 種別 | 文書 | 版 | commit | 提起者 | 承認者 | 根拠 | 備考 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2099-01-15 | 2099-01-15 | 承認 | example/sample-repo `norms/sample-norm.md` | 3 | `0000000000000000000000000000000000000000` | @sample-drafter（起案） | Sample Owner | example/sample-repo#0 | — |

---
枠（表より上と「記録」の表の見出し）の起案:
@deep-research [bridge-claude2] (operator-supervised · kishibashi3/agent-hub)

## 記録

| 連番 | 判断日 | 記入日 | 種別 | 文書 | 版 | commit | 提起者 | 承認者 | 根拠 | 備考 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-09-23 以前 | 2026-09-28 | 承認 | kishibashi3/publications `drafts/agentic-agile/principles.md` | 未設定 | `29d565161b46ce5f1900118f420653c103f576a2` | 不明（本人の確認が取れていない） | Kazuhiro | [29d565161b46ce5f1900118f420653c103f576a2 の commit message](https://github.com/kishibashi3/publications/commit/29d565161b46ce5f1900118f420653c103f576a2)（"Owner approved adopting the rewrite as canonical, retaining its purpose and P1-P3/D1-D8"）／[https://github.com/kishibashi3/publications/blob/29d565161b46ce5f1900118f420653c103f576a2/drafts/document-management.md#L18](https://github.com/kishibashi3/publications/blob/29d565161b46ce5f1900118f420653c103f576a2/drafts/document-management.md#L18) | 遡及：判断があったことを示す記述は `drafts/document-management.md:18`（commit `29d565161b46ce5f1900118f420653c103f576a2`、2026-09-23）。パスは commit 欄の SHA 時点（改名後）のもので、改名前は `drafts/agentic-agile/agentic-agile-principles-rewrite.md`。版は当時付けていない。代筆：本行は承認者本人が書いていない。承認者本人の指示を受けた operator（@ope-ultp1635）の依頼により、@writer-ja が記入した。［書式］「承認・不承認の行は承認者本人が書く」に反する（本人の指示があったことは operator の申告による）。 |
| 2 | 2026-09-28 | 2026-09-28 | 承認 | kishibashi3/publications `drafts/enterprise-agentic-agile/core.md` | 1 | `77f3a5839a203c02f78333bdbca04134eaf87f16` | @deep-research（起案）／Kazuhiro（内容の決定） | Kazuhiro | agent-hub の DM（非公開）：kishibashi3「承認でいいよ」（2026-09-28）／@reviewer の Approve：[agent-hub-roles-kaz `reviewer/feedback-archive/2026-09-28-eaa-core-revision-proposal-rev2.md`](https://github.com/kishibashi3/agent-hub-roles-kaz/blob/b2b89eab8aacec736fcc830c2939bacd5a6b8eca/reviewer/feedback-archive/2026-09-28-eaa-core-revision-proposal-rev2.md)（非公開のリポジトリ、commit `b2b89eab8aacec736fcc830c2939bacd5a6b8eca`）／提起：kishibashi3/publications#88 | 提起者＝承認者：起案は @deep-research だが、内容は所有者の判断から出ているため、提起者と承認者が同じとして扱う。最小構成 §2（[最小構成:19](https://github.com/kishibashi3/publications/blob/ea575f1befce8783f823334e8421352f55a9dd12/drafts/self-revising-norm-architecture/self-revising-norm-architecture-minimal.md#L19)「改訂を提起した者は、その改訂を承認しない」）を適用する前の立ち上げとして承認した。 commit は #88 の head（未適用、merge 後に適用の行を足す）。Profiles は行 3。代筆：本行は承認者本人が書いていない。承認者本人の指示を受けた operator（@ope-ultp1635）の依頼により、@writer-ja が記入した。［書式］「承認・不承認の行は承認者本人が書く」に反する（本人の指示があったことは operator の申告による）。 根拠が非公開：根拠は agent-hub の DM と非公開のリポジトリにあり、公開の読み手には確かめられない。本書は判断の証明を根拠欄の参照先によるとしているので、本行は現時点でその証明を公開の形で持たない。kishibashi3 が #88 / #84 に承認のコメントを投稿した場合、追記の行で公開リンクを足す予定。 |
| 3 | 2026-09-28 | 2026-09-28 | 承認 | kishibashi3/publications `drafts/enterprise-agentic-agile/profiles.md` | 未設定 | `77f3a5839a203c02f78333bdbca04134eaf87f16` | @deep-research（起案）／Kazuhiro（内容の決定） | Kazuhiro | agent-hub の DM（非公開）：kishibashi3「承認でいいよ」（2026-09-28）／@reviewer の Approve：[agent-hub-roles-kaz `reviewer/feedback-archive/2026-09-28-eaa-core-revision-proposal-rev2.md`](https://github.com/kishibashi3/agent-hub-roles-kaz/blob/b2b89eab8aacec736fcc830c2939bacd5a6b8eca/reviewer/feedback-archive/2026-09-28-eaa-core-revision-proposal-rev2.md)（非公開のリポジトリ、commit `b2b89eab8aacec736fcc830c2939bacd5a6b8eca`）／提起：kishibashi3/publications#88 | 提起者＝承認者：起案は @deep-research だが、内容は所有者の判断から出ているため、提起者と承認者が同じとして扱う。最小構成 §2（[最小構成:19](https://github.com/kishibashi3/publications/blob/ea575f1befce8783f823334e8421352f55a9dd12/drafts/self-revising-norm-architecture/self-revising-norm-architecture-minimal.md#L19)「改訂を提起した者は、その改訂を承認しない」）を適用する前の立ち上げとして承認した。 commit は #88 の head（未適用、merge 後に適用の行を足す）。Core は行 2。代筆：本行は承認者本人が書いていない。承認者本人の指示を受けた operator（@ope-ultp1635）の依頼により、@writer-ja が記入した。［書式］「承認・不承認の行は承認者本人が書く」に反する（本人の指示があったことは operator の申告による）。 根拠が非公開：根拠は agent-hub の DM と非公開のリポジトリにあり、公開の読み手には確かめられない。本書は判断の証明を根拠欄の参照先によるとしているので、本行は現時点でその証明を公開の形で持たない。kishibashi3 が #88 / #84 に承認のコメントを投稿した場合、追記の行で公開リンクを足す予定。 |
| 4 | — | 2026-09-29 | 適用 | kishibashi3/publications `drafts/enterprise-agentic-agile/core.md` | 1 | `0b3f309e7b4f95e25b2be7a24c5fd0b34a8e2aa2` | — | — | kishibashi3/publications#88（merge commit `0b3f309e7b4f95e25b2be7a24c5fd0b34a8e2aa2`、2026-09-29 merge、base `docs/eaa-working-notes`）／f20f6e1 のレビュー：[agent-hub-roles-kaz `reviewer/feedback-archive/2026-09-29-publications-88-core-s6-simplify.md`](https://github.com/kishibashi3/agent-hub-roles-kaz/blob/395e0675f42a1ee20386f61f11e88dc484bc4cf7/reviewer/feedback-archive/2026-09-29-publications-88-core-s6-simplify.md)（非公開のリポジトリ、commit `395e0675f42a1ee20386f61f11e88dc484bc4cf7`） | 対応する承認：行 2。判断日は行 2 による（適用は判断ではないため本行には書かない）。**承認した内容と当たった内容が一致しない**：行 2 の commit は `77f3a5839a203c02f78333bdbca04134eaf87f16` だが、当たった `0b3f309e7b4f95e25b2be7a24c5fd0b34a8e2aa2` には、その後に #88 へ足された 2 commit が含まれる。(1) `f20f6e1eead20ed970cbc60222f08317a6051ec4`（§6 の削減：「新版の公開は適用を意味しない」「本書の所有者が兼ねる場合も承認しない」「いずれかを欠く承認は数えない」の各文と、記録 2 項目目の「Cell間で共有する文書は最小構成に準拠すること」を削除、3 項目目を短縮）、(2) `c2f331a479782fa33df5298dd2d140e29dc6b5f8`（3 項目目に「そのうち」を足し係り先を明示）。@reviewer は (1) を重複の削除で意味は保たれていると判定している（根拠欄）。ただし、所有者が (1)(2) を含む内容を承認した記録は本書に無い。版は 1 のまま変わっていない。記入：@writer-ja（operator @ope-ultp1635 の依頼による）。適用は判断ではないため、承認者以外が記入している。 |
| 5 | — | 2026-09-29 | 適用 | kishibashi3/publications `drafts/enterprise-agentic-agile/profiles.md` | 未設定 | `0b3f309e7b4f95e25b2be7a24c5fd0b34a8e2aa2` | — | — | kishibashi3/publications#88（merge commit `0b3f309e7b4f95e25b2be7a24c5fd0b34a8e2aa2`、2026-09-29 merge、base `docs/eaa-working-notes`） | 対応する承認：行 3。判断日は行 3 による（適用は判断ではないため本行には書かない）。当たった `profiles.md` は、行 3 の commit `77f3a5839a203c02f78333bdbca04134eaf87f16` のものと同一（`git diff 77f3a58 0b3f309 -- drafts/enterprise-agentic-agile/profiles.md` が空）。記入：@writer-ja（operator @ope-ultp1635 の依頼による）。適用は判断ではないため、承認者以外が記入している。 |
| 6 | 2026-09-30 | 2026-09-30 | 承認 | kishibashi3/publications `drafts/enterprise-agentic-agile/core.md` | 2 | `90aca09bf9b02daee7900fa4fc6ea51027191495` | @deep-research（起案）／Kazuhiro（内容の決定） | Kazuhiro | agent-hub の DM（非公開）：kishibashi3「よくわからん。やていいよ」（2026-09-30、operator @ope-ultp1635 の転記による）／起案 rev.4：[agent-hub-roles-kaz `deep-research/research-archive/2026-09-30-eaa-core-contract-owner-transition.md`](https://github.com/kishibashi3/agent-hub-roles-kaz/blob/5dc0df6625ff3e04683d0994bc2a67d5fa2245cb/deep-research/research-archive/2026-09-30-eaa-core-contract-owner-transition.md)（非公開のリポジトリ、commit `5dc0df6625ff3e04683d0994bc2a67d5fa2245cb`）／@reviewer の判定：[agent-hub-roles-kaz `reviewer/feedback-archive/2026-09-30-eaa-core-contract-owner-transition.md`](https://github.com/kishibashi3/agent-hub-roles-kaz/blob/d87e9f22dcb49539c4c511f0052b48c3637bd373/reviewer/feedback-archive/2026-09-30-eaa-core-contract-owner-transition.md)（非公開のリポジトリ、commit `d87e9f22dcb49539c4c511f0052b48c3637bd373`）。この判定は起案 rev.2 に対するもので、rev.3・rev.4 は見ていない。rev.3 は判定の推奨（「成立している版と異なる版で」）を取り込んだ版、rev.4 はそこに版 1 → 2 の変更を足した版であり、特に版の変更は @reviewer の判定を経ていない／@philosopher の判定：[agent-hub-roles-kaz `philosopher/2026-09-29-eaa-contract-owner-single-vs-joint.md`](https://github.com/kishibashi3/agent-hub-roles-kaz/blob/c86a6f06e6ecf53d57183f52def0a24558c01cc3/philosopher/2026-09-29-eaa-contract-owner-single-vs-joint.md)（非公開のリポジトリ、commit `c86a6f06e6ecf53d57183f52def0a24558c01cc3`）／提起：kishibashi3/publications#95 | 提起者＝承認者：起案は @deep-research だが、内容は所有者の判断から出ているため、提起者と承認者が同じとして扱う。理由は行 2・3 の「立ち上げ」ではない。Core は版 1 で最小構成に準拠しており、立ち上げは終わっている。Core の所有者は Kazuhiro 1 人であり、その所有者が内容を決めた改訂を承認できる人が、規範の上に存在しない。最小構成 §2（[最小構成:19](https://github.com/kishibashi3/publications/blob/ea575f1befce8783f823334e8421352f55a9dd12/drafts/self-revising-norm-architecture/self-revising-norm-architecture-minimal.md#L19)「改訂を提起した者は、その改訂を承認しない」）は、所有者が 1 人の文書をその所有者が改訂する場合を定めていない。@philosopher はこれを「SRNA §2 と所有者一人の組み合わせは詰みである。読み方では解けない。」と判定している（[agent-hub-roles-kaz `philosopher/2026-09-28-eaa-core-s6-collapse-a-and-srna-self-proposal.md:13`](https://github.com/kishibashi3/agent-hub-roles-kaz/blob/d5925043e96a157d9759a83b163f8d04a29dee2c/philosopher/2026-09-28-eaa-core-s6-collapse-a-and-srna-self-proposal.md#L13)、非公開のリポジトリ、commit `d5925043e96a157d9759a83b163f8d04a29dee2c`）。@reviewer も「所有者本人が起こした改訂は、承認できる人がいない。ただし Core 本体（所有者 Kazuhiro 1 人）でも profiles:67 でも同じ形なので、新しく生まれる矛盾ではない。」と書いている（[agent-hub-roles-kaz `reviewer/feedback-archive/2026-09-30-eaa-core-contract-owner-transition.md:59`](https://github.com/kishibashi3/agent-hub-roles-kaz/blob/7c15740c8e864eb94c2bc76aee802d511240f206/reviewer/feedback-archive/2026-09-30-eaa-core-contract-owner-transition.md#L59)、非公開のリポジトリ、commit `7c15740c8e864eb94c2bc76aee802d511240f206`。Contract の所有者が 1 人の場合について書かれた文の但し書き）。この未決は kishibashi3/publications#97 で扱う。 版：版 1 → 2 に上げた。Core はこれまでに 4 回改訂されたが、版は 1 のままだった。過去 4 回の改訂ぶんは遡って版を振らない。 commit は #95 の head（未適用、merge 後に適用の行を足す）。本行が承認するのはこの SHA の内容である。merge までに #95 の head がこの SHA から動いた場合、本行は当たった内容に対する承認ではない。適用の行では、#95 の merge 直前の head がこの SHA と一致するかを書く。 代筆：本行は承認者本人が書いていない。承認者本人の指示を受けた operator（@ope-ultp1635）の依頼により、@writer-ja が記入した。［書式］「承認・不承認の行は承認者本人が書く」に反する（本人の指示があったことは operator の申告による）。 根拠が非公開：根拠は agent-hub の DM と非公開のリポジトリにあり、公開の読み手には確かめられない。本書は判断の証明を根拠欄の参照先によるとしているので、本行は現時点でその証明を公開の形で持たない。kishibashi3 が #95 に承認のコメントを投稿した場合、追記の行で公開リンクを足す予定。 |
| 7 | — | 2026-09-30 | 適用 | kishibashi3/publications `drafts/enterprise-agentic-agile/core.md` | 2 | `091c94418e6cf3999c8f7cf1078679dbf620425e` | — | — | kishibashi3/publications#95（merge commit `091c94418e6cf3999c8f7cf1078679dbf620425e`、2026-09-29T20:27:00Z merge、base `docs/eaa-working-notes`） | 対応する承認：行 6。判断日は行 6 による（適用は判断ではないため本行には書かない）。**#95 の merge 直前の head は、行 6 の commit `90aca09bf9b02daee7900fa4fc6ea51027191495` と一致する**：merge commit `091c94418e6cf3999c8f7cf1078679dbf620425e` の第 2 親が `90aca09bf9b02daee7900fa4fc6ea51027191495` であり、GitHub 上の #95 の head（headRefOid）も同じ SHA である。当たった `core.md` は、行 6 の commit のものと同一（`git diff 90aca09 091c944 -- drafts/enterprise-agentic-agile/core.md` が空）。merge commit と `90aca09` の差分は `drafts/norms/APPROVALS.md` のみで、先に merge された #96（行 6 の記入）による。行 4 で起きた「承認した内容と当たった内容の不一致」は、本件では起きていない。記入：@writer-ja（operator @ope-ultp1635 の依頼による）。適用は判断ではないため、承認者以外が記入している。 |
