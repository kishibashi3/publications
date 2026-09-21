# EAA Delivery Guide v0.2

2026-09-21 · Kazuhiro

> Status: draft / non-normative
>
> 本文書は EAA Core と Profiles を実案件へ適用するための Reference Guide である。
> Core の規範は `enterprise-agentic-agile-core-v0.1.md`、
> 条件付き規範は `eaa-profiles-v0.1.md` を参照する。
> 組織導入・役割移行・Transparency の受容については `eaa-adoption-guide-v0.1.md` を参照する。
> Operator / Enabler / Agent の人間ロールモデルは `eaa-role-model-v0.1.md` を参照する。

## 1. まず層を分ける

EAA を導入するとき、最初に「何を全員へ強制するか」を考えない。

```
EAA Instance
= Core
+ Active Profiles
+ Local Delivery Models
+ Reference Patterns
```

Core は小さく保つ。

案件固有の統制は Profile として追加する。

Domain 内部の作り方は Local Delivery Model として自治する。

GitHub、会議、レポート、AWS構成等は Pattern とする。

---

## 2. 最初に覚える7語

EAA を始める人は、まず次の7語で会話できればよい。

> **Operator**
>
> **Enabler**
>
> **Agent / Executor**
>
> **Domain**
>
> **Mission**
>
> **Evidence**
>
> **Escalation**

例:

> Mission は進んでいる。Evidence は green。Escalation はない。

---

## 3. Local Delivery Model

各 Domain は異なる Delivery Model を使ってよい。

例:

| Domain | Local Delivery Model |
| --- | --- |
| Integration | Full Agentic |
| Contract | Scrum + Coding Agent |
| Billing | Kanban + Agent |
| Legacy Master | Predictive / Vendor |
| Package Domain | Package implementation |
| Large Product Domain | SAFe ART |

EAA が揃えるのは中の作り方ではなく外とのつながり方である。

各 Domain は最低限、

```
Missionを受け取る
Ontology / Contractを解釈する
Authorityを越えない
Evidenceを返す
Escalationできる
```

ことを満たす。

---

## 4. Profile Selection

案件開始時に、必要な Profile だけ選択する。

例: 大規模基幹刷新

```
Core
+ Portfolio Profile
+ Supplier Profile
+ Migration Profile
```

高リスク期間:

```
+ Assurance Profile
```

Cutover 期間:

```
+ Cutover Profile
```

全 Profile を最初から有効化しない。

> **必要な統制を、必要な場所と時間にだけロードする。**

---

## 5. Agentic Domain の内部ループ

Agentic な Domain では AA の高速ループを使える。

```
Observe
→ Decide
→ Act
→ Verify
→ Learn
```

従来の、

```
Designer
→ Developer
→ Tester
→ Reviewer
```

という工程 handoff を必須にしない。

```
Hypothesis
→ Design
→ Implementation
→ Verification
→ Observation
→ Revision
```

を短い自律ループとして回す。

ただし生成と判定の独立性が必要な場合は、別 Agent / 別 model lineage / independent judge を使う。

> **作る仕事は統合する。判定の独立性は残す。**

---

# Reference Patterns

## 6. GitHub Mission Ledger Pattern

EAA の durable provenance を実装する一例として GitHub を使う。

```
Issue        = Mission
Sub-issue    = Mission decomposition
PR           = Implementation artifact
Actions      = Verification evidence
Comment      = Decision / Evidence
Close        = Mission completion
```

AgentHub や chat は realtime / ephemeral coordination に利用できる。

```
GitHub   = durable truth
AgentHub = ephemeral signal
```

重要なのは GitHub 自体ではない。

> **durable source に戻っていない重要な決定は、正式決定として扱わない。**

---

## 7. Mission Metadata Pattern

GitHub Issue 等で Mission を機械参照可能にする一例。

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

その後に人間向けの背景や判断理由を書いてよい。

---

## 8. Mission Graph / Evidence Graph Pattern

Mission が再帰的に分解される場合、Project を二つの Graph として観測できる。

```
Project
= Mission Graph
+ Evidence Graph
```

Mission Graph の edge 例:

- parent-of
- requires
- blocked-by
- caused-by
- implements
- verifies
- supersedes

Evidence Graph の node 例:

- PR
- executable test
- Actions
- production trace
- reconciliation
- rollback result
- human decision
- external confirmation

PR merge は Mission completion と同義ではない。

---

## 9. Graph Metrics Pattern

Mission / Evidence Graph から、作業量ではなく実行構造を観測する。

| Metric | 意味 |
| --- | --- |
| Rework Mass | やり直しになった subgraph の総コスト |
| Detection Depth | 誤りから発見までの階層深度 |
| Detection Latency | 誤りから発見までの時間 |
| Blast Radius | 一つの誤判断が影響した node / Domain 数 |
| Intent Drift | 親 Mission と子孫 Mission の目的乖離 |
| Blocked Mass | 停止している subgraph のコスト |
| Escalation Rate | Mission あたり Human Escalation 回数 |

node cost の例:

```
Cost(node)
= Compute
+ Token
+ Human Time
+ External Cost
```

破棄された仕事をすべて Waste としない。

```
Discarded Graph != Waste Graph
```

仮説棄却から知識を得た場合は探索コストであり、先行誤判断のために生じた無益な再実行を Rework / Waste とする。

---

## 10. Transparency Report Pattern

大規模案件では Mission / Evidence / Cost の provenance から月次 Transparency Report を機械生成できる。

Executive view の例:

| Metric | Current | Trend |
| --- | ---: | ---: |
| Accepted Missions | 43 | +12 |
| Mission Lead Time | 2.8 days | -21% |
| Human Touch Time | 184 h | -14% |
| Rework Mass | 8.7% | +3.1 pt |
| Evidence Coverage | 96.4% | +2.0 pt |
| Boundary Wait | 312 h | +42% |

原因分析の例:

```
Rework ¥6.8M
├─ Customer requirement change    ¥2.6M
├─ Vendor design error            ¥1.7M
├─ Legacy behavior discovery      ¥1.4M
├─ Cross-domain misunderstanding  ¥0.8M
└─ Experiment / learning          ¥0.3M
```

FACT、INTERPRETATION、DECISION を分ける。

```
FACT
Rework Mass = 8.7%

INTERPRETATION
Billing Contract変更が主因と考える

DECISION
Contract verificationを前倒しする
```

可能な限り手入力で数字を作らず、原 Evidence まで遡れるようにする。

---

## 11. Daily Evidence Pattern

Agentic Domain では Daily Scrum の代わりに、自動 Evidence digest を使える。

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
- external dependency

異常がなければ Operator は何もしない。

> **Daily meeting ではなく Daily Evidence**

これは EAA Core の必須イベントではない。
人間中心の Domain では Daily Scrum を使ってよい。

---

## 12. Human Event Pattern

会議を情報配布ではなく Human Judgment のために使う。

一例:

| Event | 目安 | 目的 |
| --- | --- | --- |
| Enterprise Change Review | weekly / as needed | priority、stopped mission、cross-domain dependency、投資判断 |
| Operator Council | event-driven | Authority、Boundary、Constraint、major exception |
| Boundary Review | event-driven | Contract / responsibility conflict |
| Ontology Review | event-driven | semantic mismatch |
| Authority Review | event-driven | authority expansion |
| Domain Reality Session | as needed | 暗黙知を Rule / Example / Ontology に変換 |
| Norm Retrospective | monthly | 繰り返す例外を規範へ戻す |

案件や Domain によって cadence は変えてよい。

---

## 13. Capability Ownership Pattern

DBA、Security、Platform、QA 等の専門家を、全成果物の中央承認者にしない。

```
Expert knowledge
→ Constitution / Policy / Rule
→ machine-checkable control
→ Domain autonomy
```

一般形:

```
Artifact Ownership   → Domain
Capability Ownership → Specialist / Capability Operator
```

例:

DBA が全 table definition を所有するのではなく、

> **Domain が安全に table を所有できる環境を所有する。**

Platform / Security / Data / Observability 等も同様に扱える。

---

## 14. Mission Cell Pattern

複数 Domain をまたぐ一時的な Outcome のために Mission Cell を形成してよい。

```
Persistent Domain Cells
+ Temporary Mission Cells
```

Mission Cell には Mission Outcome を所有する Enabler を置く。
関係 Domain Operator は各 Domain の Authority / Boundary / Contract を所有する。

Mission Cell は恒久組織にしない。
Mission 完了後に解散する。

各 Domain の内部 Operating Model は維持してよい。

---

## 15. Startup Pattern

EAA 案件の開始時に、最初から全組織を作り込まない。

最低限:

1. Enterprise Operator
2. First Vertical Mission の Enabler
3. 最初の Mission に必要な Domain Operators
4. Enterprise Ontology v0
5. Constitution / Authority v0
6. First Vertical Mission
7. Durable Evidence path
8. 必要最小限の Active Profiles

最初の Vertical Mission は、複数 Domain を横断する実業務を選ぶ。

同時に、技術成立性だけでなく、役割移行・Transparency 受容・Operator 依存・Human decision latency を観測する。EAA 導入を既存組織へ適用する際は、`eaa-adoption-guide-v0.1.md` の socio-technical stress test を併用する。

---

## 16. First Six Weeks Pattern

### Week 1-2

- Domain boundary 仮置き
- Ontology v0
- Authority v0
- Legacy discovery
- Active Profiles 決定
- First Vertical Mission の Mission 化
- Evidence path 構築

### Week 3-6

```
Intent
→ Enabler
→ Mission
→ Domain execution
→ Evidence
→ Completion
```

を end-to-end で実行する。

背後が Legacy API でもよい。

Week 6 までに確認するのは新システム完成ではなく、

- Domain 間で Mission が渡る
- Ontology / Contract を参照できる
- Authority を越えない
- Required Evidence が残る
- Human PM を通常経路に置かず進められる領域が分かる
- 非 Agentic Domain も同じ境界で参加できる
- Transparency が blame ではなく意思決定に使われる
- repeated Operator judgment を Rule / Contract へ変換できる
- 既存ロールの新しい ownership が成立する

ことである。

成立しない場合、大量実装の前に Core 適用、Profile、Boundary、Protocol を修正する。

---

## 17. Mixed Delivery Pattern

EAA は一つの案件に異なる Delivery Model が混在することを許す。

例:

```
Enterprise Mission
       |
+------+-------+---------+
|              |         |
Integration  Contract   Billing
Full Agentic Scrum+AI   Predictive Vendor
|              |         |
+------ EAA Boundary ----+
       |
     Evidence
```

このとき比較すべきなのは「どの手法が正しいか」ではなく、

- Mission Lead Time
- Human Touch Time
- Boundary Wait
- Rework Mass
- Detection Depth
- Evidence Coverage
- Cost / Accepted Mission

である。

必要なら Agent Literacy の教育介入を行い Before / After を比較する。

---

## 18. Capability Maturity / Agent Literacy Pattern

PoC等では Agent Literacy を仮に次のように扱える。

| Level | 呼称 | 状態 |
| --- | --- | --- |
| L1 | Assisted | 人間が分解し、Agentを道具として使う |
| L2 | Delegated | Issue / Outcome単位で設計〜実装〜テストを委任 |
| L3 | Agentic | Mission単位で自律系を運営し、人間は境界と例外を見る |

これは EAA Core の成熟度要求ではない。

目的は全員を L3 にすることではなく、

```
Minimum Sufficient Literacy(domain)
```

を見つけることである。

---

## 19. 大規模刷新での Profile 例

10億円規模の基幹刷新での一例。

### 通常期

```
Core
+ Portfolio
+ Supplier
+ Migration
```

### 高リスクな Release Candidate 期間

```
+ Assurance
```

### Final Cutover

```
+ Cutover
```

Cutover 中だけ同期 communication と Human GO を強化してよい。

終了後は Cutover Profile を解除し、通常 Authority へ戻す。

---

## 20. この Guide の位置づけ

この文書にある Pattern は EAA そのものではない。

案件の Evidence によって改善・置換してよい。

EAA の安定性は Core を小さく保つことで確保し、
Enterprise の多様性は Profile と Local Delivery Model で吸収する。

> **Core は変えにくく、Profile は出し入れでき、Pattern は学習によって交換できる。**
