# EAA vs Enterprise Agile Alternatives — Comparison v0.1

2026-09-21 · Kazuhiro

> Status: working comparison / non-normative
>
> 本文書は Enterprise Agentic Agile (EAA) と、代表的な Enterprise delivery / scaling model を同一の観点で比較するための作業資料である。
> EAA Core の規範ではない。
> 点数は普遍的な優劣ではなく、**10億円規模・複数 Domain / Vendor・基幹刷新・約1年**の案件へ適用した場合の現時点の設計適合度仮説である。
>
> PoC / 実案件の Evidence に基づき再採点することを前提とする。

## 1. 比較対象

比較対象は次の6モデルとする。

| ID | Model | 概要 |
| --- | --- | --- |
| A | **EAA** | Core + Active Profiles + Local Delivery Models + Reference Patterns |
| B1 | **Hybrid Large-Scale Agile** | Program Governance / PMO と Domain 内 Agile / DevOps の組合せ |
| B2 | **SAFe Large Solution** | ART / Solution Train / Portfolio 等による大規模統合 |
| B3 | **Team Topologies + DDD + DevOps** | Domain / team boundary、fast flow、platform / enabling を中心とする |
| B4 | **Nexus / LeSS** | 複数 Scrum Team を一つの Product / Increment へ統合する |
| B5 | **Predictive / V-model / Phase Gate** | 計画、責任分界、工程 Gate、受入を強く置く |

AI / Agent 利用は B1〜B5 でも可能であり、比較軸は「AIを使うか」ではなく Enterprise Operating Model とする。

---

## 2. 採点ルール

5点満点。

| Score | Meaning |
| ---: | --- |
| 5 | 今回の問題をモデル自身が強く扱える |
| 4 | 十分扱えるが、追加設計・運用が必要 |
| 3 | 扱えるが、別の仕組みで相当補完する必要がある |
| 2 | 構造的に弱い |
| 1 | 主対象ではない |

重要:

- **設計上の表現力**と**市場での成熟度 / 実績**を混同しない
- EAA は現在の文書化された構造を評価する
- EAA は AI / Agent 時代の Enterprise 開発手法として評価し、Core 単体ではなく案件条件に応じた Active Profiles を含める
- Local Delivery Model は Domain ごとに異なってよい

---

## 3. Enterprise Agile 共通関心事

比較軸は、特定 Framework に有利な固有用語ではなく、大規模 Enterprise delivery で共通して問題になる関心事から置く。

1. Strategy / Portfolio alignment
2. Business Value / Outcome
3. Change responsiveness
4. Cross-domain dependency / integration
5. Architecture / Domain / semantic alignment
6. Governance / Authority / Compliance
7. Quality / Assurance / Release confidence
8. Transparency / Traceability
9. Flow / Handoff reduction
10. Multi-vendor / heterogeneous delivery
11. Migration / Cutover
12. Budget / Commercial control
13. Organization scale / Cognitive load
14. Adoption maturity / talent availability

---

## 4. Current Comparison

| Enterprise concern | EAA | B1 Hybrid | B2 SAFe | B3 TT + DDD | B4 Nexus / LeSS | B5 Predictive |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Strategy / Portfolio alignment | **5** | 5 | 5 | 3 | 4 | 4 |
| Business Value / Outcome | **5** | 4 | 4 | 5 | 5 | 3 |
| Change responsiveness | **5** | 4 | 4 | 5 | 5 | 2 |
| Cross-domain dependency / integration | 4 | 4 | **5** | 4 | **5** | 3 |
| Architecture / Domain / semantic alignment | **5** | 4 | 4 | **5** | 4 | 4 |
| Governance / Authority / Compliance | **5** | 5 | 5 | 3 | 3 | 5 |
| Quality / Assurance / Release confidence | **5** | 4 | 5 | 4 | 5 | 5 |
| Transparency / Traceability | **5** | 3 | 4 | 4 | 4 | 4 |
| Flow / Handoff reduction | **5** | 3 | 3 | **5** | 4 | 2 |
| Multi-vendor / heterogeneous delivery | **5** | 5 | 5 | 4 | 3 | 5 |
| Migration / Cutover | **5** | 5 | 5 | 3 | 3 | 5 |
| Budget / Commercial control | 4 | **5** | **5** | 3 | 3 | **5** |
| Organization scale / Cognitive load | 4 | 3 | 3 | **5** | 4 | 2 |
| Adoption maturity / talent availability | **2** | 5 | 5 | 4 | 4 | 5 |
| **Total / 70** | **64** | 59 | **62** | 57 | 56 | 54 |
| **Normalized** | **91%** | 84% | **89%** | 81% | 80% | 77% |

この表は「EAA が証明済みである」という意味ではない。

> **EAA は現時点で、Enterprise Agile の主要関心事を広く表現できる設計になった。**
>
> **その表現力が実運用で成立することはまだ証明されていない。**

---

## 5. EAA が前回評価から上がった理由

Core / Profile 分離前は、Portfolio、Cutover、Supplier、Assurance 等が EAA の不足として見えていた。

現在は、

```
EAA Instance
= Core
+ Active Profiles
+ Local Delivery Models
+ Reference Patterns
```

と分離した。

これにより、Enterprise に必要な能力を Core へ常設せず、条件付きで追加できる。

| Concern | Before | Current | 主因 |
| --- | ---: | ---: | --- |
| Strategy / Portfolio | 3 | **5** | Portfolio Profile |
| Governance / Compliance | 4 | **5** | Authority + Assurance / Regulated Profile |
| Quality / Assurance | 4 | **5** | Assurance Profile |
| Multi-vendor | 5 | **5** | Supplier Profile により明示化 |
| Migration / Cutover | 3 | **5** | Migration + Cutover Profile |
| Budget / Commercial | 3 | **4** | Portfolio + Supplier Profile |
| Flow | 5 | **5** | Core を肥大化させず維持 |
| Adoption maturity | 2 | **2** | 実績不足は設計変更では解消しない |

---

## 6. EAA がまだ 5 でない領域

### 6.1 Cross-domain dependency / integration — 4

Mission / Contract / Ontology / Authority は構造として存在する。

未解決:

- Inter-system Protocol の最小仕様
- 複数 Domain が競合する Mission の arbitration
- cross-domain Mission owner / coordinator
- Contract version conflict の解決
- Domain 間 expected waste の計測

PoC で最優先に検証する。

### 6.2 Budget / Commercial control — 4

Portfolio / Supplier Profile により構造は存在する。

ただし、

```
Annual Budget
→ Investment
→ Enterprise Mission
→ Domain Mission
→ Actual Cost
→ Forecast
```

までの管理会計モデルは未成熟。

特に、

- forecast
- committed vs actual
- vendor commercial model
- capital / expense distinction
- change cost
- rework attribution

は既存 PMO / ERP / commercial management の方が成熟している。

### 6.3 Organization scale / Cognitive load — 4

Capability / Enabling Pattern はある。

ただし Team Topologies のように、

- cognitive load
- interaction mode
- platform as a product
- team boundary evolution

を中心問題として体系化してはいない。

EAA ではこれを Core に入れず、Capability / Organization Profile または Pattern として扱う余地がある。

### 6.4 Adoption maturity — 2

これは文書では解決しない。

不足:

- 実案件 Evidence
- Operator 育成
- Agent Literacy
- Reference implementation
- 失敗パターン
- 教育教材
- 市場人材
- 導入 playbook

PoC の主要成果対象とする。

---

## 7. EAA と既存方式の関係

EAA は既存 Framework を全社レベルで排除しない。

```
                 EAA Core
                    |
             Active Profiles
                    |
     +--------------+--------------+
     |              |              |
Full Agentic     Scrum          SAFe ART
Domain           Domain         Domain
     |              |              |
     +--------- EAA Boundary -------+
```

EAA Boundary の最低条件:

```
Mission を受け取れる
Ontology / Contract を解釈できる
Authority を越えない
Required Evidence を返せる
Durable provenance を残せる
Escalation できる
```

したがって、

```
EAA Compliance
!= Internal Process Compliance
```

である。

SAFe、Scrum、Predictive、Vendor proprietary process 等は Local Delivery Model として EAA 内に共存しうる。

---

## 8. 各方式の主要な強み

### B1 Hybrid Large-Scale Agile

強い領域:

- Portfolio / budget
- governance
- supplier
- cutover
- existing organization fit

主要リスク:

- PMO / approval / reporting の人間同期コスト
- Agent execution が高速化した場合の coordination bottleneck

### B2 SAFe Large Solution

強い領域:

- scale
- dependency
- supplier
- governance
- compliance
- large solution coordination

主要リスク:

- role / event / artifact の常設コスト
- 高速 Agentic execution に対し人間 cadence が律速になる可能性

### B3 Team Topologies + DDD + DevOps

強い領域:

- domain autonomy
- fast flow
- architecture evolution
- cognitive load
- platform / enabling

主要リスク:

- Portfolio / commercial / cutover は別途必要
- Enterprise Governance 全体を単独では規定しない

### B4 Nexus / LeSS

強い領域:

- whole product
- feedback
- integrated increment
- cross-team integration

主要リスク:

- 一つの Product / Backlog へ寄せる前提
- 異種 Vendor / 独立 Domain / 異なる Operating Model の federation には制約がある

### B5 Predictive / V-model

強い領域:

- planning
- responsibility boundary
- contract
- formal acceptance
- audit
- cutover

主要リスク:

- change cost
- feedback latency
- handoff
-高速 Agentic execution との不整合

---

## 9. PoC での再評価方法

この表の点数は仮説である。

PoC 後、主観的な印象ではなく Evidence から再採点する。

主要測定例:

| Concern | Evidence candidate |
| --- | --- |
| Change responsiveness | Mission Lead Time |
| Cross-domain integration | Boundary Wait / blocked mission |
| Governance | authority violation / escalation / audit trace |
| Quality | escaped defect / Detection Depth / rollback |
| Transparency | Evidence Coverage / provenance completeness |
| Flow | Human Touch Time / handoff count |
| Multi-vendor | cross-boundary acceptance / wait |
| Migration | reconciliation / rollback rehearsal |
| Budget | Cost / Accepted Mission / Rework Cost |
| Cognitive load | human decision count / Operator load |
| Adoption | literacy before-after / escalation trend |

PoC 後の比較表は同じ軸を維持する。

軸そのものを都合よく変更しない。

---

## 10. PoC 判定原則

PoC の目的は EAA を勝たせることではない。

```
Hypothesis
→ Execute
→ Evidence
→ Re-score
→ Adopt / Modify / Reject
```

B1〜B5 の方が十分に優れる領域が残る場合、その能力を、

1. Local Delivery Model として内包する
2. Profile / Pattern として EAA に取り込む
3. EAA を採用しない

のいずれかで扱う。

> **完全上位互換は宣言ではなく、既存方式が解いている Enterprise concern を失わず、不要な制約だけを外せることで成立する。**

---

## 11. 現時点の評価

現在の EAA は、Core / Profile / Local Delivery Model / Pattern の分離により、既存方式の強みを局所的に保持しながら、Enterprise 全体へ一つの Operating Model を強制しない構造になった。

設計上の狙いは、

```
既存 Enterprise Agile が解いてきた問題
                 +
Agent 時代に不要になった人間由来の制約の除去
                 +
Agent 時代に新しく現れた制約への対応
```

である。

現時点で最大の不足は、Core の機能数ではない。

```
Missing = Empirical Evidence
```

PoC / 実案件によって、この比較表そのものを更新する。
