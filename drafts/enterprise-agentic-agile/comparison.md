# EAA — 既存方式との比較・評価計画

> 位置づけ：検討資料（非規範）
> 対象：10億円規模・複数Domain／Vendor・約1年の基幹刷新を想定した比較の観点と評価計画。
> 参照：現行仕様の定義元は[Core](core.md)と[Profiles](profiles.md)。

現行モデルは未採点である。旧モデルの点数・比較メモ・設計変更履歴はGit履歴とPRに残す。
PoCと実案件のEvidenceから、採用・修正・不採用を判断する。

## 1. 比較対象

比較対象は次の6モデルとする。

| ID | Model | 概要 |
| --- | --- | --- |
| A | **EAA** | Core + 責務仕様Profiles + 自律したCells + Federation |
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

## 4. 評価する構造

現行モデルは、必要なStandard / Domain Profileを先に定義し、引受Cellを割り当てる。一つのCellに複数Profileを配置でき、独立した判断責任を別Opeへ渡すときにCellを分離する。

Profileを定義できることだけで、該当能力が実現済みとは評価しない。権限・資源・実行能力の確保と、成果を示すEvidenceが必要である。

## 5. 再評価が必要な領域

- 分離前後で責任の空白・判断権の重複を避けられるか。
- 元のOpeへの判断集中が減り、成果と保証を維持できるか。
- 双方向の提案・受入で横断変更が進み、合意待ちが律速にならないか。
- Ontology・Constitution・Contractの採用版と移行を追跡できるか。
- Cutoverを含め、合意された義務と独立Cellの自治を両立できるか。
- 管理会計、契約、規制、導入・育成の具体的能力を確保できるか。

合意不成立、分離・再統合、複数Cell変更の復旧には未決の詳細がある。文書の単純化と実運用上の完成度は別に検証する。

## 6. EAAと既存方式の関係

各Cellは採用した責務・規範・Contractを満たす内部方式を選ぶ。Full Agentic、Half Agentic、Scrum、Predictive、Vendor processなどを共存させられるという設計である。

Enterpriseや横断Cellからの変更も対象Cellへ提案する。規範の新版発行だけで他Cellの採用版や内部工程は変わらない。一つのCellで始める場合も同じ責務仕様を使える。

---

## 7. PoC での再評価方法

現行モデルの適用範囲と評価条件を明記して評価する。

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

## 8. PoC 判定原則

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

## 9. 現時点の評価

構造は「責務を定義する → 引受Cellを決める → 必要時に分離する → 合意に基づき協働する」へ整理された。Profileごとに組織や専用職種を増やす必要がなく、1 Cellからの連続的な拡張を記述できる。

これは単純化と一貫性に関する設計上の改善である。大規模な合意形成、例外処理、コスト、育成を含む実効性は未実証であり、他方式への優位や完成を宣言しない。
