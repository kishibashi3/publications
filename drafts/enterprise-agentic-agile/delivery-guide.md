# EAA Delivery Guide

> 位置づけ：適用例（非規範）
> 対象：GitHub・記録・運営への適用パターン。
> 参照：[Core](core.md)・[Profiles](profiles.md)。役割は[Role Model](role-model.md)、導入は[Adoption Guide](adoption-guide.md)。

## 1. このガイドの使い方

境界の条件は[Core](core.md)、責務仕様は[Profiles](profiles.md)を参照する。
以下は実装・配置・運営の選択例であり、全部を導入する必要はない。

## 2. 判断と役割の配置

[Role Model](role-model.md)はOperator・Enabler・Executorへ責務を配置する参考例である。
人間判断を例外へ集中する運営では、反復判断を正当な改訂手続きで規範・Contractへ戻し、Enablerが繰り返す阻害を改善Missionにする。
人間判断の削減と成果・安全性の維持を一緒に観測する。人間中心の内部方式へ同じ運営を要求するものではない。

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

案件に必要なDomain ProfileとStandard Profileを列挙し、責任範囲・権限・保証を明示する。
基幹刷新なら、契約・請求などのDomain Profileと、Platform・Portfolio・Supplier・MigrationなどのStandard Profileが候補になる。

初めから全Profileを専用Cellにしない。元のCellが担える責務はまとめ、継続的な判断負荷に応じて別Opeへ分ける。
AssuranceやCutoverなど期間・リスクに応じた責務も、その引受先と必要能力を明確にする。
追加の検証や設定を他Cellへ導入するときは、対象Cellへの提案と受入を通じて成立させる。

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

Agentic CellではAAの生成と判定の分離に従い、別Agent・別モデル系列などによる判定を行う。

> **作る仕事は統合する。判定の独立性は残す。**

---

# Reference Patterns

## 6. GitHub Mission Ledger Pattern

EAA の durable provenance を実装する一例として GitHub を使う。

```
Issue        = Mission
Sub-issue    = Mission decomposition
PR           = Change proposal / artifact
Actions      = Verification evidence
Comment      = Decision / Evidence
Close        = Evidenceに基づくMission完了の記録
```

Cell間の変更は、親子・横断を問わずPRとして提案し、対象Cellが受け入れる。
通常の変更はAgentが判定できる。規範改訂と採用版の移行は正当な所有者が判断する。

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

  cell: contract
  profile: contract
  requested_by: integration

  goal: >
    契約プラン変更を即時反映できる

  constraints:
    - 過去契約を書き換えない
    - 確定済み請求を変更しない

  ontology:
    - ref: enterprise://contract
      version: example-1
    - ref: enterprise://billing-plan
      version: example-1
    - ref: enterprise://customer
      version: example-1

  constitution:
    ref: enterprise-constitution
    version: example-1

  contract:
    ref: contract-change
    version: example-1

  authority:
    write:
      - contract
    prohibited:
      - billing

  acceptance:
    - contract-change-e2e
    - rollback-tested
```

これは説明用の記法であり、確定スキーマではない。実際の採用版と引受条件を解決可能にする。
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
| Authority Tightening Rate | 合意された手続きでAuthorityや受入条件を厳しくした回数 |

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

Platform / Security / Data / Observability等の責務はProfileで定義する。
既存Cellの能力として担うか、独立Cellへ分けるかが配置Patternである。
他Cellへの規則・検査・CI/CD導入はPRで提案し、対象Cellが受入を判断する。

---

## 14. Mission Collaboration Pattern

複数CellをまたぐOutcomeのために、Enablerと関係CellのOpe・専門家・Executorが一時的に協働する。
Enablerは成果成立を進めるが、各Cellの受入判断を代行しない。

この協働体を、独立した責任・権限を持つCellと混同しない。
独立Cell化が必要なら、引き受けるProfileとOpe、権限・資源・Contractを明示する。
協働が終わっても、有用な能力・規範・Evidenceは責務の引受先へ残す。

---

## 15. Startup Pattern

1. 一つのCellとOpeを置き、顧客文脈を扱うEnablerの役割を定める。兼務してもよい。
2. 最初のMissionに必要なStandard／Domain Profileを列挙する。
3. Ontology・Constitution・Authority・ContractとEvidence経路を具体化する。
4. 各Profileを同じCellで担うか、別Opeへ移して子Cellにするかを決める。
5. 分けた場合は提案・受入・記録を接続し、最初のMissionを実行する。

Federationを検証するPoCでは、複数の責任領域を横断する実業務を選び、少なくとも一つの実際のCell間境界を設ける。
これはPoC上の選択であり、EAAが開始時から複数Cellを要求することを意味しない。

役割移行・Transparency受容・Ope依存・判断待ちも観測する。
組織導入は [Adoption Guide](adoption-guide.md) を参照する。

---

## 16. First Six Weeks Pattern

### Week 1-2

- 必要Profileと責任境界を仮置き
- Ontology v0
- Authority v0
- Legacy discovery
- Profileの引受先を決め、必要な境界だけ別OpeのCellへ分離
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

- Cell間でMissionが渡り、引受条件を合意できる
- 双方向のPR提案と対象Cellの受入判断が成立する
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
Minimum Sufficient Literacy(role, cell)
```

を見つけることである。
Opeは自律実行系を成立させる能力、Enablerは顧客文脈を具体化する能力を重視する。全員に同じAgent運用能力を要求しない。

---

## 19. 大規模刷新でのProfileとCutover

通常期は、必要な業務責務とPlatform・Portfolio・Supplier・Migrationの責務を引受先へ割り当てる。
Assuranceは必要な検証能力を整え、対象Cellへ検証経路やEvidence条件を提案する。

Cutoverでは切替全体の実施可否を判断する担当を置ける。
各Cellが受け入れた準備条件・実行順序・GO／NO-GO・復旧条件に基づいて同期調整する。
全体GOは、未受入の変更を他Cellへ強制適用する権限ではない。

切替後は残件・資産・記録・継続運用を引き継ぎ、Cutover責務を終了する。
解除で他Cellの採用規範を自動的に書き換えない。予期しない不一致や緊急時の詳細は未決事項である。

---

## 20. Profile改訂・採用 Pattern

Profile仕様の「正本改訂と採用の分離」を、通常のPRで実装する例である。

実装例として、引受側のCLAUDE.mdから提供側のProfileの固定版を参照できる。
CLAUDE.mdは引受側が編集できるが、編集だけで参照先の義務を削除・緩和したり、自分へ権限を追加したりはできない。
正本改訂のPRと、採用版を更新するPRを別々に扱えば、各文書の所有者が、自分の管理する文書の改訂を判断できる。
規範の提起者と承認者の分離など、各段階の既存の承認条件は維持する。この例は専用のGitHub承認機能を前提としない。

| 起点 | 正本側のPR | 採用側のPR |
| --- | --- | --- |
| 提供側が変更したい | 正本を改訂し、承認済みの新版を公開する | 提供側が新版の採用を提案し、引受側が判断する |
| 引受側が変更したい | 引受側が改訂を提案し、提供側が判断・公開する | 引受側が公開内容を確認し、採用版を更新する |

参照は変更されるlatestではなく、承認済み内容を特定できる固定版にする。
二つのPRと採用結果を関連づけ、双方が実際の採用版を追跡できるようにする。
規範改訂の提起者と承認者の分離は、同じ所有者が管理する文書でも維持する。

## 21. この Guide の位置づけ

各Patternは案件のEvidenceに基づいて改善・置換できる。CoreとProfilesの条件を変える場合は、その仕様の改訂と採用手続きを別に行う。
