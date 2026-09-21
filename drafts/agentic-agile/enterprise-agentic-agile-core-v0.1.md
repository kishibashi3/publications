# Enterprise Agentic Agile Core v0.1

2026-09-21 · Kazuhiro

> Status: draft / proposed normative core
>
> 本文書は Enterprise Agentic Agile (EAA) の最小 Core を定める。
> 案件固有の統制、運営方法、ツール、会議、組織形態は Core に含めない。

## 1. EAA の位置づけ

Agentic Agile (AA) が一つの自律実行系の内部を扱うのに対し、EAA は複数の異種実行系を企業規模で協調させる。

```
AA  = 自律ループを成立させる
EAA = 自律ループ同士を接続する
```

EAA の中心命題は次である。

> **意味の違いまで共有し、内部実装は自治する。**

さらに短く表すなら、

> **Standardize the boundary, not the implementation.**

EAA は特定の Agent 基盤、モデル、開発手法、クラウド、チケット管理製品を要求しない。

---

## 2. EAA の層

EAA の実案件は、次の層から構成される。

```
EAA Instance
= Core
+ Active Profiles
+ Local Delivery Models
+ Reference Patterns
```

### Core

すべての EAA に共通する最小規範。

### Profile

特定の Enterprise 条件でのみ追加される規範。
例: Portfolio、Supplier、Regulated、Migration、Cutover。

### Local Delivery Model

各 Domain 内部の実行方式。
Full Agentic、Scrum、Kanban、SAFe ART、Predictive、Package/Vendor などを選択してよい。

### Reference Pattern

EAA を実装するための非規範的な例。
GitHub Mission Ledger、Daily Evidence、Transparency Report など。

Core は Local Delivery Model を統一しない。

---

## 3. Core 肥大化を防ぐ規則

新しい規範を Core に追加するには、原則として次をすべて満たすこと。

1. すべての EAA 実装に必要である
2. なくすと自律系間の協調、安全性、または説明可能性が成立しない
3. 特定の業界、契約形態、ツール、組織形態に依存しない

満たさないものは Profile または Reference Pattern とする。

> **普遍でない規範を Core へ入れない。**

---

## 4. Core Vocabulary

### Domain

業務上の意味、データ、権限、責任を持ち、内部を自治できる境界。

サービス数、既存組織図、チーム数そのものでは決めない。

### Operator

Domain または Enterprise の Goal、Boundary、Authority、Exception を所有する人間。

```
Operator
= Goal
+ Boundary
+ Authority
+ Exception
```

Operator は通常の設計・実装・テストを逐次承認する人ではない。

### Mission

達成すべき Outcome を表す実行単位。

Mission は最低限、次を持つ。

```
Goal
Constraints
Authority
Acceptance Evidence
```

### Ontology

企業内の意味の地図。

単語を一つの意味へ統一するのではなく、Domain ごとの意味の差そのものを保持する。

### Constitution

上位の価値、制約、権限、禁止事項。

Domain の下位規範は上位 Constitution を弱めてはならない。

### Contract

Domain 間で共有する機械参照可能な境界合意。

内部 DB schema や内部実装そのものは Contract ではない。

### Evidence

Mission が正しく達成されたことを検証可能にする記録。

### Escalation

自律実行から Human Judgment へ制御を移すこと。

正常経路ではなく、境界を越えたときの制御遷移として扱う。

### Profile

特定条件下で Core に追加される versioned な規範集合。

---

## 5. C1 — Domain Autonomy

各 Domain は内部実装を自治する。

EAA は以下を全社統一しない。

- Agent framework
- model provider
- internal workflow
- programming language
- database
- Scrum / Kanban / Predictive 等の Local Delivery Model
- 人間と Agent の内部役割分担

EAA が統治するのは Domain の外側へ現れる境界である。

```
Internal implementation = local
Boundary semantics      = shared
Boundary authority      = shared
Boundary evidence       = shared
```

---

## 6. C2 — Shared Semantics

Cross-domain の意思伝達は、共有された意味体系から解釈可能でなければならない。

ただし意味の差は消さない。

例:

```
Customer
├─ Sales: Corporation
├─ Support: Service User
└─ Accounting: Billing Party
```

したがって、

```
Ontology + Domain / Position / Context
→ Meaning
```

で解釈する。

意味が一意に決められない場合は、推測によって越境せず Escalation または Contract 改訂を行う。

---

## 7. C3 — Mission before Task

Domain 間では細かな Task ではなく、Mission を渡す。

Mission は最低限、Goal、Constraints、Authority、Acceptance Evidence を持つ。

Task decomposition は受け取った Domain の内部へ委任してよい。

```
Enterprise intent
→ Mission
→ Domain execution
→ Evidence
```

Mission の子は親の Goal への寄与を説明可能でなければならない。

---

## 8. C4 — Authority Monotonicity

自律系は、自らに与えられた権限を自ら拡大してはならない。

Mission を分解した場合、

```
Authority(child)
⊆ Authority(parent)
```

でなければならない。

上位 Constitution、Active Profile、Domain Contract が課す制約は、下位 Mission によって緩和できない。

Authority の拡大が必要な場合は Escalation する。

---

## 9. C5 — Boundary Contract

Domain 間の依存は暗黙の内部実装依存ではなく Contract として表現する。

Contract は少なくとも必要に応じて次を扱う。

- semantic reference
- input / output
- permitted authority
- side effect
- failure
- version
- provenance
- required evidence

Domain A は Domain B の内部 DB や内部 Agent 構造を前提としてはならない。

```
Internal artifact = Domain owned
Boundary contract = shared
```

---

## 10. C6 — Evidence-based Completion

Mission の完了は、作業の実施、PR merge、自己申告だけでは成立しない。

```
Done
= Outcome achieved
+ Acceptance Evidence satisfied
+ Required contracts updated
+ Required decisions recorded
+ No unresolved authority violation
```

Evidence の形式は Mission と Active Profile によって決まる。

作る主体と判定する主体の独立性が必要な場合は、AA の生成と判定の分離を適用する。

---

## 11. C7 — Durable Provenance

Cross-domain の意思、決定、Evidence は、後から因果を追跡できる durable な形で残す。

特定の製品を要求しない。

必要なのは、

```
Intent
→ Mission
→ Derived Mission
→ Execution
→ Evidence
→ Decision
```

を遡れることである。

チャット、会議、Agent 間の一時通信だけに重要な決定を閉じ込めない。

---

## 12. C8 — Human Judgment by Exception

人間判断は希少資源として扱う。

人間を通常の throughput gate に置かず、次のような場合に Escalation する。

- semantic mismatch
- boundary conflict
- authority expansion
- irreversible operation
- high blast radius
- repeated verification disagreement
- external contractual decision
- Active Profile が Human Judgment を要求する場合

繰り返される Human Judgment は、可能なら Rule、Constitution、Contract、Profile へ変換する。

```
Human decision
→ record
→ rule
→ future autonomy
```

---

## 13. C9 — Enterprise Constraints

Domain autonomy は Enterprise の外部制約を越えない。

例:

- budget
- deadline
- regulation
- legal obligation
- commercial contract
- SLA
- cutover window

```
Domain Autonomy
⊆ Enterprise Constraints
```

ただし Enterprise Constraint は、Domain 内部の詳細手順まで中央統制する根拠にはしない。

Deadline は Constraint になり得るが、全 Domain 共通の詳細 WBS を Core は要求しない。

---

## 14. Profile の扱い

Profile は Core を弱めてはならない。

概念的には、

```
Requirements(Profile) ⊇ Requirements(Core)
Authority(Profile)    ⊆ Authority(Core)
Evidence(Profile)     ⊇ Evidence(Core)
```

複数 Profile は組み合わせてよい。

Profile は Enterprise 全体、特定 Domain、特定 Mission、特定期間のいずれにも scope できる。

Profile の詳細は `eaa-profiles-v0.1.md` に定める。

---

## 15. Local Delivery Model の適合条件

Domain 内部では任意の Delivery Model を使ってよい。

例:

- Full Agentic
- Human + Agent / Half Agentic
- Scrum
- Kanban
- SAFe ART
- Predictive / V-model
- Package implementation
- 外部 Vendor 独自プロセス

ただし EAA Boundary に参加するには最低限、

1. Mission を受け取れる
2. Ontology / Contract に基づき意味を解釈できる
3. Authority を越えない
4. Required Evidence を返せる
5. 重要な決定と provenance を durable に残せる
6. Escalation を行える

ことを満たす。

```
EAA Compliance
≠ Internal Process Compliance
```

---

## 16. AA との関係

EAA は AA を置き換えない。

Agentic な Domain 内部では AA Principles を適用する。

特に次を継承する。

- 人間判断を希少資源として扱う
- 生成と判定を必要に応じて分離する
- 可逆性に応じて自律範囲を決める
- 期待浪費に応じて自律速度を決める
- 自らを縛る規範を自ら緩めない
- 観測に基づき規範を改訂する

一方、Scrum や Predictive な Domain に AA の内部 Operating Model を強制しない。

EAA はその Domain が境界条件を満たすことだけを要求する。

---

## 17. EAA Core の最小形

```
Domain Autonomy
+ Shared Semantics
+ Mission
+ Authority
+ Contract
+ Evidence
+ Durable Provenance
+ Escalation
+ Enterprise Constraints
```

人間ロールとして最小限必要なのは、境界を所有する Operator である。

> **Core は最小に保つ。案件固有の必要性は Profile として外付けする。**
