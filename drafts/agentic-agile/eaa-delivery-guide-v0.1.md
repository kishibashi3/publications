# EAA Delivery Guide v0.1

2026-09-21 · Kazuhiro

> Status: draft / non-normative
>
> 本文書は Enterprise Agentic Agile (EAA) を実案件で運用するための最小ガイドである。
> EAA の原則そのものではなく、案件開始時に共通言語と最小運営構造を与えることを目的とする。

## 1. EAAとは

Agentic Agile (AA) が一つの自律実行系の内部を扱うのに対し、Enterprise Agentic Agile (EAA) は、複数の異種 Agentic System を企業規模で協調させる。

```
AA  = 自律ループを成立させる
EAA = 自律ループ同士を接続する
```

EAA の基本思想は次である。

> **意味の違いまで共有し、内部実装は自治する。**

各 Domain は独自の Agent 基盤、モデル、内部構造を持ってよい。
全社で統一するのは内部実装ではなく、境界・意味・権限・Evidence である。

---

## 2. Core Vocabulary

EAA を始めるために、まず以下だけを共通語彙とする。

### Operator

自律系の目的・権限・境界を所有する人間。

Operator は通常の承認者ではない。

```
Operator = Goal + Boundary + Authority + Exception
```

通常の設計・実装・テストを逐次承認しない。
繰り返す判断は Rule / Constitution / Policy に変換し、Agent 側へ委任する。

### Domain

一つの業務上の自律性を持てる境界。

サービス数、組織図、既存チーム数では決めない。

### Domain Cell

一つの Domain を継続的に運営する単位。

```
Domain Cell
= Domain Operator
+ Domain knowledge
+ Agentic System
```

### Mission

達成すべき Outcome を表す実行単位。

Mission は一つの Domain 内で閉じてもよく、複数 Domain を横断してもよい。

### Mission Cell

複数 Domain をまたぐ Mission のために一時的に形成される協調単位。

Mission 完了後に解散する。
恒久的な cross-functional team とはしない。

### Ontology

企業内の意味の地図。

一つの語を一つの意味へ統一するものではない。
Domain ごとの意味の差そのものを保持する。

### Constitution

Agentic System が従う価値、制約、権限、禁止事項。

### Contract

Domain 間で共有される機械可読な境界合意。

内部 DB schema や内部実装は Contract にしない。

### Evidence

Mission が正しく達成されたことを検証可能にする記録。

PR、test、Actions、trace、reconciliation、decision、rollback result などを含む。

### Escalation

Agentic execution から Human judgment へ制御を移すこと。

正常系ではなく例外系として扱う。

---

## 3. 基本ループ

各 Domain Cell は次の Agentic Loop を自律的に回す。

```
Observe
→ Decide
→ Act
→ Verify
→ Learn
```

実装工程を人間職能で分割しない。

```
Designer
→ Developer
→ Tester
→ Reviewer
```

ではなく、

```
Hypothesis
→ Design
→ Implementation
→ Verification
→ Observation
→ Revision
```

を一つの高速ループとして扱う。

ただし、生成と判定の独立性が必要な場合は、別 Agent / 別 model lineage / independent judge を使う。

> **作る仕事は統合する。判定の独立性は残す。**

---

## 4. GitHub を Mission Ledger として使う

EAA v0.1 では、Mission の durable source of truth として GitHub Issue を使う。

```
Issue        = Mission
Sub-issue    = Mission decomposition
PR           = Implementation artifact
Actions      = Verification evidence
Comment      = Decision / Evidence
Close        = Mission completion
```

Agent 間の主要な意思伝達も Issue / Sub-issue を通して行う。

人間の決定も、最終的には GitHub 上へ記録する。

> **GitHub に戻っていない決定は、EAA の決定ではない。**

AgentHub や chat は ephemeral coordination に利用できるが、durable truth にはしない。

```
GitHub   = durable truth
AgentHub = ephemeral signal
```

### Mission Graph

Mission は再帰的に Sub-issue へ分解される。

概念的には、

```
Project
= Mission Graph
+ Evidence Graph
```

と捉える。

edge には例えば以下を持つ。

- parent-of
- requires
- blocked-by
- caused-by
- implements
- verifies
- supersedes

---

## 5. Mission の最小形式

Mission は人間と Agent の双方が読めるようにする。

v0.1 では、Issue body の先頭に機械可読な最小 metadata を置く。

例:

```yaml
eaa:
  version: 0.1
  type: mission

  domain: contract
  requested_by: integration

  goal: >
    契約プラン変更を即時反映できる

  constraints:
    - 過去契約を書き換えない
    - 確定済み請求を変更しない

  ontology:
    - enterprise://contract
    - enterprise://billing-plan
    - enterprise://customer

  authority:
    write:
      - contract
    prohibited:
      - billing

  acceptance:
    - contract-change-e2e
    - rollback-tested
```

その後に、人間向けの背景、判断理由、補足を書いてよい。

Mission の目的は Task を細かく指示することではない。

Mission は最低限、

```
Goal
Constraints
Authority
Acceptance Evidence
```

を渡す。

Task decomposition は Agentic System に委任する。

---

## 6. Sub-issue の原則

Agent は Mission を必要なだけ Sub-issue へ分解してよい。

Issue 数そのものを人間向け管理コストとみなさない。

> **Issue 数を減らすのではなく、人間が読む Issue 数を減らす。**

ただし子 Mission は親より広い Authority を持ってはならない。

```
Authority(child)
⊆ Authority(parent)
```

親の Authority を越える必要が出た場合は Escalation する。

また、各 Sub-issue は親 Mission への寄与を説明可能であるべきである。

例:

```yaml
derived_from: "#100"
contributes_to: contract-change-latency
```

---

## 7. Evidence

Mission の完了は「コードを書いた」「PR が merge された」では判定しない。

必要な Evidence が揃ったことによって判定する。

Evidence の例:

- executable test
- property test
- integration / E2E result
- production trace
- reconciliation
- security scan
- rollback result
- performance measurement
- human decision
- external confirmation

```
Mission
├─ PR
├─ Test
├─ Actions
├─ Trace
├─ Reconciliation
└─ Decision
```

PR は Mission を達成するための artifact であり、Mission そのものではない。

---

## 8. Escalation

Human judgment は通常経路へ入れない。

Escalation は、Agentic System の Authority や判断能力を越えたときに発生する。

代表例:

- semantic mismatch
- boundary conflict
- authority expansion
- irreversible operation
- high blast radius
- repeated verification disagreement
- repeated rollback
- unknown legacy behavior
- external contractual decision

Escalation は可能なら分類する。

例:

```
blocked:semantic
blocked:boundary
blocked:authority
blocked:external
```

分類に応じて適切な Operator へ routing する。

---

## 9. 人間イベント

EAA では会議を情報配布のために使わない。

情報は Mission / Evidence / telemetry に存在する。

人間イベントは判断のために開く。

### Daily Evidence

Daily Scrum の代わりに、各 Domain Cell から自動 Evidence digest を出す。

例:

- completed mission
- failed mission
- rollback
- unresolved boundary
- ontology mismatch
- authority violation
- human escalation
- expected waste
- verification failure

異常がなければ Operator は何もしない。

> **Daily meeting ではなく Daily Evidence**

### Weekly Mission Review

週1回を目安に、Enterprise Operator と必要な Domain Operator が以下だけを見る。

- stopped mission
- cross-domain dependency
- unresolved escalation
- resource / investment shift

進捗読み上げはしない。

### Event-driven Review

次は必要時のみ開く。

- Boundary Review
- Ontology Review
- Authority Review
- Domain Reality Session

### Norm Retrospective

月1回を目安に、繰り返し発生する例外や摩擦を確認する。

目的は人間に注意を促すことではなく、Constitution / Rule / Protocol を更新し、同じ判断を次回 Agent に委任することである。

---

## 10. Scrum の位置づけ

EAA は Scrum を必須としない。

```
EAA Core ≠ Scrum
```

固定 Sprint、Daily Scrum、全社共通 Planning、Scrum of Scrums を標準イベントにはしない。

ただし、人間中心の局所的な協調に Scrum / Kanban が有効なら利用してよい。

Scrum は EAA の上位原則ではなく、必要に応じて使う Application である。

---

## 11. Domain 内部実装

Domain 内部は自治する。

例えば以下は統一しなくてよい。

- AgentHub
- Dify
- GitHub Copilot
- custom agent framework
- model provider
- internal workflow
- programming language
- database technology

統一するのは境界である。

> **Standardize the boundary, not the implementation.**

---

## 12. 横断職能の扱い

DBA、Security、Platform、QA などの横断専門家は、すべての変更を逐次承認する中央ゲートにはしない。

専門知識は、できる限り以下へ変換する。

```
Expert knowledge
→ Constitution / Policy / Rule
→ machine-checkable control
→ Domain autonomy
```

例:

DBA が全テーブル定義を所有するのではなく、

> **Domain が安全にテーブルを所有できる環境を所有する。**

Domain の内部 schema は Domain が所有する。
DBA / Data Operator は backup、migration safety、recovery、performance boundary、shared policy を所有する。

---

## 13. 開発観測

EAA は Mission Graph と Evidence Graph を分析して実行効率を観測する。

代表指標:

| Metric | 意味 |
| --- | --- |
| Rework Mass | やり直しになった subgraph の総コスト |
| Detection Depth | 誤りから発見までの階層深度 |
| Detection Latency | 誤りから発見までの時間 |
| Blast Radius | 一つの誤判断が影響した node / Domain 数 |
| Intent Drift | 親 Mission と子孫 Mission の目的乖離 |
| Blocked Mass | 停止中 subgraph の規模 |
| Escalation Rate | Mission あたり Human Escalation 数 |

node の重みは例えば、

```
Cost(node)
= Compute
+ Token
+ Human Time
+ External Cost
```

で表せる。

### Discarded Graph と Waste Graph

破棄した実行をすべて Waste とはみなさない。

```
Discarded Graph != Waste Graph
```

仮説を棄却して新しい Evidence を得たなら、それは探索コストである。

新しい知識をほとんど生まず、先行する誤判断のために発生した部分を Rework / Waste とみなす。

---

## 14. AA の期待浪費との接続

AA では、

```
Expected Waste
= P(wrong) × W
```

を、自律速度を決める基礎量として扱う。

Mission Graph を蓄積すると、

- Mission 種別ごとの誤り率
- 誤った場合の平均 Rework Mass
- Verification cost
- early detection rate
- Detection Depth

を実測できる。

この履歴を用いて、

```
P(wrong)
W
C(check)
```

を経験データから推定できる可能性がある。

EAA は使うほど、自律と検証の境界を学習できる。

---

## 15. 案件開始時の最小構成

EAA 案件を開始するとき、最初から全組織を作り込まない。

最低限以下を用意する。

### 1. Enterprise Operator

全体 Goal、投資、Domain boundary、Enterprise authority を所有する。

### 2. Initial Domain Operators

最初の Vertical Mission に必要な Domain だけ起動する。

### 3. Enterprise Ontology v0

最初の Mission に登場する主要語だけを定義する。

### 4. Constitution v0

絶対に壊してはいけないものと Authority boundary を書く。

### 5. First Vertical Mission

複数 Domain を横断する実業務を一つ選ぶ。

### 6. Evidence path

Issue → Sub-issue → PR / Test / Actions → Evidence → Close が end-to-end で追えるようにする。

---

## 16. 最初の6週間

### Week 1-2

- Domain boundary 仮置き
- Ontology v0
- Authority v0
- Legacy discovery
- First Vertical Mission の Issue 化

### Week 3-6

First Vertical Mission を実際に Agentic に流す。

```
Intent
→ Mission
→ Sub-mission
→ Domain execution
→ Evidence
→ Completion
```

背後が Legacy API でも構わない。

Week 6 までに確認すべきなのは新システム完成ではなく、

- Domain 間で Mission が渡る
- Ontology を参照できる
- Authority を越えない
- Evidence が残る
- Human PM を通常経路に置かず進む

ことである。

成立しない場合、実装量を増やす前に EAA の境界設計を修正する。

---

## 17. Done の考え方

Mission は、以下が成立して初めて Done とする。

```
Outcome achieved
+ Acceptance Evidence satisfied
+ Required contracts updated
+ Required decisions recorded
+ No unresolved authority violation
```

PR merge、実装完了、test pass の一つだけでは Done としない。

---

## 18. EAA の最小運営形

平常時は次で足りることを目標とする。

```
Persistent Domain Cells
+ Temporary Mission Cells
+ Event-driven Governance
```

人間同期は概ね、

```
Daily Evidence
+ Weekly Mission Review
+ Event-driven Boundary / Ontology / Authority Review
+ Monthly Norm Retrospective
```

へ圧縮する。

EAA が成熟するほど、人間イベントは減るべきである。

---

## 19. 最初に覚える言葉

EAA を始める人は、まず次の5語を覚えればよい。

> **Operator**
>
> **Domain**
>
> **Mission**
>
> **Evidence**
>
> **Escalation**

日常会話も、この語彙で成立する状態を目指す。

例:

> Mission は進んでいる。Evidence は green。Escalation はない。

これが EAA の正常状態である。
