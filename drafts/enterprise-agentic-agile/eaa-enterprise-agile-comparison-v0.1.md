# EAA vs Enterprise Agile Alternatives — Comparison v0.1

2026-09-22 · Kazuhiro

> Status: historical comparison + reevaluation plan / non-normative
>
> 本文書は Enterprise Agentic Agile (EAA) と、代表的な Enterprise delivery / scaling model を同一の観点で比較するための作業資料である。
> EAA Core の規範ではない。
> 点数は2026-09-21時点の旧モデル（Profile = 条件付き追加規範）について、**10億円規模・複数 Domain / Vendor・基幹刷新・約1年**の案件を想定した設計適合度仮説である。
> 2026-09-22の改訂モデル（Profile = 責務仕様）には引き継がない。現在の点数は未評価であり、旧表は検討履歴として残す。
>
> PoC / 実案件の Evidence に基づき再採点することを前提とする。

## 1. 比較対象

比較対象は次の6モデルとする。

| ID | Model | 概要 |
| --- | --- | --- |
| A | **EAA** | 旧評価: Core + 追加規範Profiles + Local Delivery Models + Reference Patterns |
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
- 旧表は2026-09-21の文書化された構造を対象とする
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

## 4. 旧モデルの比較表（2026-09-21、参考履歴）

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

この表は実証結果ではない。旧モデルで64/70とした採点を、責務仕様とCell分割を中心に再構成したモデルの評価として引用しない。他方式の点数も当時の作業仮説であり、本改訂で再調査・検証した値ではない。

---

## 5. 今回の構造変更

改訂モデルは、必要なStandard / Domain Profileを先に定義し、引受Cellを割り当てる。一つのCellに複数Profileを配置でき、独立した判断責任を別Opeへ渡すときにCellを分離する。

Profileを定義できることだけで、該当能力が実現済みとは評価しない。権限・資源・実行能力の確保と、成果を示すEvidenceが必要である。

## 6. 再評価が必要な領域

- 分離前後で責任の空白・判断権の重複を避けられるか。
- 元のOpeへの判断集中が減り、成果と保証を維持できるか。
- 双方向の提案・受入で横断変更が進み、合意待ちが律速にならないか。
- Ontology・Constitution・Contractの採用版と移行を追跡できるか。
- Cutoverを含め、合意された義務と独立Cellの自治を両立できるか。
- 管理会計、契約、規制、導入・育成の具体的能力を確保できるか。

合意不成立、分離・再統合、複数Cell変更の復旧には未決の詳細がある。文書の単純化と実運用上の完成度は別に検証する。

## 7. EAAと既存方式の関係

各Cellは採用した責務・規範・Contractを満たす内部方式を選ぶ。Full Agentic、Half Agentic、Scrum、Predictive、Vendor processなどを共存させられるという設計である。

Enterpriseや横断Cellからの変更も対象Cellへ提案する。規範の新版発行だけで他Cellの採用版や内部工程は変わらない。一つのCellで始める場合も同じ責務仕様を使える。

---

## 8. 各方式についての旧比較メモ

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

旧表の点数は仮説である。改訂モデルの適用範囲と評価条件を明記して再評価する。

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
| Cognitive load | human decision count / Operator load / 分離前後の判断集中 |
| Federation | 提案から合意までの時間 / 採用版不整合 / 自律性の侵害 |
| Responsibility transfer | 責任の空白 / 決定権の重複 / 成果・保証の維持 |
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

構造は「責務を定義する → 引受Cellを決める → 必要時に分離する → 合意に基づき協働する」へ整理された。Profileごとに組織や専用職種を増やす必要がなく、1 Cellからの連続的な拡張を記述できる。

これは単純化と一貫性に関する設計上の改善である。大規模な合意形成、例外処理、コスト、育成を含む実効性は未実証であり、他方式への優位や完成を宣言しない。

## 12. Cell・Profile整理の変更履歴

以下は2026-09-22の設計変更の記録であり、現行仕様の追加要件ではない。

| 既存の整理 | 本草案での整理 |
| --- | --- |
| EAAは複数Domainの境界を統治する | 1 Cellから始め、責務を再帰的に分割・接続する |
| Profileは条件付きの追加規範 | Profileは引受可能な責務仕様。横断的な統制の成立も責務に含める |
| Platformの配置はCapability Ownership Pattern | Platform責務はStandard Profile候補。独立Cellにするかは配置判断 |
| Enterprise／Domainを中心にロールを配置 | 共通構造のCellにProfileを割り当て、独立した判断責任にOpeを配置 |
| EnablerがGoal・Priority・Outcomeを所有 | 顧客との文脈共有と変化の具体化を中核とし、最終決定権の所在を区別する |
| 上位規範への準拠 | 合意して採用した版への準拠。変更の受入は各Cellが判断する |

Ontologyによる意味差の保持、Authorityの自己拡大禁止、Evidenceによる完了判定、来歴の記録、内部方式の自治は継承する。
旧Profilesの要求集合・権限の積集合という式だけでは、新しい責務の割当や分離は表現できない。改訂カタログでは責務・制約・配置を分けて整理した。


### Core整理の対応

旧CoreのC1・C2は「責務と分割」、C3・C5は「自治と権限」、C4は「意味と合意」、C6は「提案と変更」、C7は「成果と記録」へ統合した。
C8のうち権限を越える問題の調整はCoreに残し、人間判断の集中と反復改善は適用ガイドへ移した。
Ope・Enabler・Executorの配置はRole Model、AA内部の判定分離はAAへの参照と適用例で扱う。
