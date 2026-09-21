# EAA Profiles v0.1

2026-09-21 · Kazuhiro

> Status: draft / conditionally normative
>
> Profile は Enterprise Agentic Agile Core に、特定条件下で追加する versioned な規範集合である。
> Profile は Core の例外ではなく、Core に追加制約を加える。

## 1. Profile の目的

EAA Core をあらゆる Enterprise 条件へ対応させようとすると、Core は急速に肥大化する。

そのため、業界、契約、移行、監査、リリース等の条件付き要求は Profile として分離する。

```
EAA Instance
= Core
+ Active Profiles
+ Local Delivery Models
```

> **普遍でない規範を Core へ入れない。**

---

## 2. Profile の不変条件

Profile は Core を弱めてはならない。

```
Requirements(Profile) ⊇ Requirements(Core)
Authority(Profile)    ⊆ Authority(Core)
Evidence(Profile)     ⊇ Evidence(Core)
```

Profile は以下のいずれかを追加できる。

- Constraint
- Required Evidence
- Independent Verification
- Human Judgment condition
- Retention / audit requirement
- Commercial responsibility
- Time window
- Rollback / recovery requirement

Profile は Core の Authority 制約や Evidence 要求を削除できない。

---

## 3. Scope と Lifecycle

Profile は次の scope で有効化できる。

- Enterprise
- Domain
- Mission
- Time window

例:

```yaml
profile:
  name: cutover
  version: 0.1
  scope: enterprise
  active_from: release-candidate
  active_until: cutover-complete
```

Profile はプロジェクト開始時に固定する必要はない。

```
Profile = Profile(scope, time, risk)
```

リスクが変化したら Profile を追加・解除してよい。

解除時も、その Profile 下で生成された Evidence と決定履歴は保持する。

---

## 4. Profile の合成

複数 Profile は同時に有効化できる。

```
Active Requirements
= Core Requirements
∪ Portfolio
∪ Supplier
∪ Migration
∪ ...
```

Authority は最も厳しい制約を採用する。

```
Active Authority
= Core Authority
∩ Profile A
∩ Profile B
∩ ...
```

Evidence は必要条件を加算する。

矛盾する Profile が存在する場合は、自動的に片方を無効化せず Human Escalation する。

---

# Initial Profile Catalog

## 5. Portfolio Profile

### 適用条件

複数 Domain / Mission へ有限の予算・人間判断・実行資源を配分する必要がある場合。

### 追加構造

```
Strategic Goal
→ Investment
→ Enterprise Mission
→ Domain Mission
→ Evidence
```

### 追加要求

- Mission は少なくとも一つの Strategic Goal または Investment Theme へ寄与を説明できる
- Investment allocation の決定を durable に残す
- 停止・継続・増額の判断を Evidence に基づける
- Cost を可能な範囲で Mission / Domain へ帰属させる

### 追加 Evidence

- outcome progress
- cost / accepted outcome
- investment change rationale
- blocked investment mass
- realized rework cost

Portfolio Profile は固定年度計画や特定の Portfolio Event を要求しない。

---

## 6. Assurance Profile

### 適用条件

誤りの blast radius、不可逆性、金銭・安全・信用への影響が通常より大きい場合。

### 原則

```
Risk ↑
→ Required Assurance ↑
```

### 追加要求の例

Low risk:

```
automated evidence
→ deploy
```

Medium risk:

```
automated evidence
→ independent verification
→ deploy
```

High / irreversible:

```
automated evidence
→ independent verification
→ rehearsal / recovery evidence
→ explicit authority check
→ deploy
```

### 追加 Evidence

- independent verification
- rollback / recovery result
- performance / security evidence
- reconciliation
- blast-radius estimate

固定工程 Gate を要求するのではなく、Risk に応じて Assurance を増やす。

---

## 7. Supplier Profile

### 適用条件

外部 Vendor、複数契約主体、委託先が同じ Enterprise Mission に参加する場合。

### 追加要求

- commercial boundary と Domain boundary を区別する
- Supplier が所有する Mission / Contract / Evidence を明示する
- Acceptance Evidence を契約上の受入条件と接続する
- 仕様変更・顧客判断・Vendor判断の provenance を保持する
- Cost / rework を可能な範囲で causal source へ帰属する

### 追加 Evidence

- supplier acceptance result
- contractual decision
- responsibility provenance
- cost provenance
- external dependency

Supplier の内部 SDLC は EAA が統一しない。

Vendor が Predictive でも Scrum でも、EAA Boundary を満たせばよい。

---

## 8. Regulated Profile

### 適用条件

法令、規制、監査、強い記録保持義務が存在する場合。

### 追加要求の候補

- segregation of duties
- mandatory independent verification
- evidence retention
- immutable audit history
- required approver / authority
- data residency / handling constraints
- policy version provenance

### 追加 Evidence

- approval evidence where legally required
- policy version
- audit trace
- retention proof
- security / compliance scan

法的に Human approval が必要な場合、Human Gate は例外ではなく Profile による明示的要求となる。

---

## 9. Migration Profile

### 適用条件

Legacy から新システムへ段階移行する場合。

### 追加要求

- source / target の責任境界を明示する
- data / behavior reconciliation を行う
- dual-run または shadow-run の要否を決める
- rollback boundary を定義する
- Legacy にのみ存在する知識を可視化する
- migration Mission の完了を新系実装完了だけで判定しない

### 追加 Evidence

- reconciliation result
- migration completeness
- rollback rehearsal
- legacy dependency count
- human-only knowledge count
- shadow production result

---

## 10. Cutover Profile

### 適用条件

時間制約が強く、不可逆性または blast radius が高い本番切替期間。

Cutover Profile は通常時の自律運転を否定しない。
一時的に Authority と同期条件を厳しくする。

### 追加構造

```
Normal Mode
Domain execution
→ automated verification
→ production

Cutover Profile
Domain execution
→ candidate
→ required evidence
→ reconciliation
→ rollback readiness
→ explicit GO / NO-GO boundary
→ production
```

### 追加要求

- Cutover Commander または最終 Authority を明示する
- time-boxed synchronous coordination を許可する
- GO / NO-GO / rollback 条件を事前定義する
- credential / routing / write-stop 等の切替順序を記録する
- Profile 終了条件を定義する

### 追加 Evidence

- rehearsal
- rollback rehearsal
- final reconciliation
- smoke / synthetic mission
- production telemetry
- authority confirmation

> 平時の非同期性を、高リスクの切替時にも教義として強制しない。

---

## 11. Profile ではないもの

次は通常 Profile ではない。

### Local Delivery Model

- Scrum
- Kanban
- SAFe ART
- Predictive
- Full Agentic
- Package implementation

これらは Domain 内部の実行方式であり、Core の上に追加される Enterprise 規範ではない。

### Reference Pattern

- GitHub Mission Ledger
- Daily Evidence
- Weekly Mission Review
- Transparency Report
- AWS architecture
- AgentHub

これらは実装方法であり、EAA の必須規範ではない。

### Capability / Enabling Pattern

Platform、DB、Security、Observability 等の専門能力を横断的に提供する構造は有用だが、すべての案件で同じ組織構造を要求しないため Pattern とする。

---

## 12. 今後の Profile 候補

PoC / 実案件の Evidence に応じて追加を検討する。

候補:

- Resilience Profile
- Data Governance Profile
- Safety-Critical Profile
- External Agent Profile
- Cost-Control Profile
- Incident Profile

追加前に必ず、

> これは本当に Core ではなく Profile か。
> 既存 Profile の組合せで表現できないか。

を確認する。

Profile catalog 自体も肥大化させない。
