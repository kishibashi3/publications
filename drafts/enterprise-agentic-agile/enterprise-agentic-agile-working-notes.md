# Enterprise Agentic Agile — Working Notes

2026-09-22 · Kazuhiro

> Status: research notes / non-normative
>
> 構成原理は[Cell・Profile・Federation](eaa-cell-profile-federation-draft.md)、共通ルールは[Core](enterprise-agentic-agile-core-v0.1.md)、責務仕様は[Profiles](eaa-profiles-v0.1.md)、人間配置は[Role Model](eaa-role-model-v0.1.md)を参照する。
> 本文書は設計の動機・仮想ケース・観測方法を扱う。ケースの人数、技術、期間、イベントをEAA一般の要件にしない。

## 1. AAからEAAへ

AAは一つのAgenticなCellで実行と学習を成立させる。EAAは同じ責任単位を、必要に応じて分割・接続するための構成原理である。一つのCellで全責務を担ってもよい。

組織が大きくなると、意味の違い、権限境界、異種の実行方式、外部契約、横断変更が問題になる。EAAは内部工程を統一せず、Ontology・Constitution・Contract・Evidenceと、提案・受入の手順でこれを扱う。

EnterpriseとDomainは全体と部分という位置を表す。Platformなどは責務を表す。どれも同じCell構造を持ち、子Cellはさらに分割できる。非AgenticなCellも接続できるが、1 Cellというだけでその内部方式をAAとは呼ばない。

## 2. 責務を先に定義する

Profileは引受可能な責務の版付き仕様であり、Standard Profileと企業固有のDomain Profileを同じ形式で記述する。まず必要な責務を列挙し、その後で引受Cellを決める。

一つのCellが複数Profileを扱える。判断負荷や専門性から別Opeが必要になった時、責務・権限・資源・資産・残件を渡して独立させる。Profile数やサービス数から組織数を決めない。

Opeは自律実行を成立させる境界・規範・例外判断を担う。Enablerは顧客と文脈を共有し、目的・優先順位・受入条件を具体化して成果実現を進める。顧客接点を持つことと最終決定権を持つことは同じではない。

## 3. 分離後の自治

分離したCellの判断を、親Cellや横断Cellが一方的に上書きしない。PlatformからDomainへのCI/CD変更も、DomainからEnterpriseへのOntology訂正も、対象Cellへの提案と受入で成立させる。

採用済みの義務は維持する。新版の発行は自動適用ではなく、影響するCellと移行を合意する。通常の実装受入はAgentに委ねられるが、規範・権限変更は正当な人間の変更権者の承認を要する。Agentによる自己権限の緩和は認めない。

Cutoverも例外的な強制指揮権を作らない。関係Cellが事前合意したGO/NO-GO、停止、rollbackの条件を用い、各Cellが自己の範囲を実行する。

## 4. 設計仮説と検証

創発文明論との接続は、[円環構造](../../docs/core/02-circular-structure.md)、[システム価値の再帰定義](../../docs/core/06-systemic-value.md)、[上下の要請とカオスの淵](../../docs/core/supplementary/emergence-theory.md)に置く。全体と部分が同じシステム構造を持ち、上下双方の要請を扱うことを、再帰的なCellと双方向の提案・受入として具体化する。

ただし、ProfileやPRという実装形式まで公理から一意に決まるわけではない。合意した秩序と局所の自由を両立させるための設計選択である。また、Cell数を増やすことを創発価値そのものとしない。新しい能力や協働が成立し、持続するかを観測する。

責務仕様を配置から分ければ、1 Cellから始めて責務を失わずに拡張できると考える。これは設計仮説であり、大規模運用での有効性が実証されたことを意味しない。

既存方式との比較は[比較資料](eaa-enterprise-agile-comparison-v0.1.md)を参照する。旧版の採点を改訂モデルへ引き継がず、判断集中、境界待ち、合意の所要時間、成果と保証の維持を観測する。

## 5. 未決事項

合意不成立・外部制約変化・緊急時の調整、分離・再統合の移行責任、複数Cell変更の適用順と復旧は詳細未定である。Profileの詳細スキーマとFederationの状態遷移も具体例から詰める。

以下のケースはこれらの手続きを完成させたものではなく、責務配置と検証対象を具体化するための仮置きである。

---

## 6. ケーススタディ: 10億円・1年の業務基盤刷新

ここでは EAA の人員モデルを具体化するため、次の仮想案件を置く。

- 期間: 12か月
- 予算: 10億円
- 現行: AWS 上のレガシーなマイクロサービス 20個
- 目的: 業務基盤を段階的に置き換える
- 追加目的: B2B インターフェースを現代化し、外部企業の Agent が利用できる Agent Interface を提供する
- 移行方針: 一括再構築ではなく Strangler 型で段階移行する
- 組織方針: 20サービスを20チームに分けず、業務ドメイン単位へ再編する
- Local Delivery Model: 本ケースでは比較を単純化するため、6 Domain を原則 Agentic / AA 系として仮置きする（EAA 一般要件ではない）

### 6.1 Domain 分割

まず20個の既存マイクロサービスの責務を、6つのDomain Profileとして定義する。そのうえで、本ケースでは判断負荷・専門性に応じてそれぞれを独立Cellへ配置する案を仮置きする。初日から6 Cellを要求するものではない。

| Domain | 旧サービス数 | 主な責務 |
| --- | ---: | --- |
| Customer & Partner | 3 | 顧客、取引先、連絡先、取引関係 |
| Contract & Product | 4 | 商品、価格、契約、契約変更 |
| Order & Workflow | 4 | 受注、申請、承認、業務ワークフロー |
| Billing & Payment | 4 | 請求、入金、返金、債権 |
| Identity & Entitlement | 2 | ID、組織、権限、利用資格 |
| Integration & B2B | 3 | 外部連携、Partner API、Agent Interface |

本ケースでは各 Domain を一つの AA 系として扱う。これはケーススタディ上の Local Delivery Model 選択であり、EAA Core が全 Domain に AA を要求することを意味しない。旧マイクロサービスの個数は、新組織の個数を決めない。

### 6.2 仮置きする AWS 構成

本ケースでは、以下を標準構成として仮置きする。これは EAA の必須技術ではなく、具体例のための実装選択である。

| 用途 | AWS サービス |
| --- | --- |
| 新業務サービス実行 | ECS on Fargate |
| 外部 HTTP / deterministic API | API Gateway |
| 内部同期通信 | ALB + private service endpoints |
| 非同期イベント | EventBridge + SQS |
| 長時間・決定論的ワークフロー | Step Functions |
| Domain transactional DB | Aurora PostgreSQL |
| idempotency / task / lightweight state | DynamoDB |
| オブジェクト、証拠、移行ファイル | S3 |
| Enterprise Ontology graph | Amazon Neptune |
| 認証 | Cognito / federation |
| 細粒度権限 | Amazon Verified Permissions |
| 暗号鍵・秘密情報 | KMS + Secrets Manager |
| 境界防御 | AWS WAF |
| 旧系 adapter | Lambda または ECS adapter |
| データ移行 | AWS DMS + Glue |
| 移行照合・分析 | S3 + Athena |
| Observability | CloudWatch + ADOT / OpenTelemetry + X-Ray |
| IaC | AWS CDK |
| CI/CD | GitHub Actions + AWS deployment APIs |
| Agent 用モデル | Bedrock を選択肢とするが、Domain 内部は他基盤を許容 |

EAA Control Plane は巨大な共通業務基盤にはしない。最低限、Ontology、Constitution、Capability、Mission、Evidence、Identity / Authority を提供する。

概念構成は次の通り。

```
                Enterprise Operator <-> Enterprise Enabler
                                  |
                 +----------------+----------------+
                 |                                 |
        EAA Control Plane                    Enterprise Ontology
   Constitution / Capability /               Amazon Neptune
       Mission / Evidence
                 |
         Amazon EventBridge
                 |
   +-------------+-------------+-------------+
   |             |             |             |
Domain A      Domain B      Domain C      ... Domain F
   |             |             |             |
 AA system     AA system     AA system     AA system
 AgentHub / Dify / Copilot / custom are allowed
   |
deterministic business API / event
   |
ECS / Aurora / SQS / Step Functions

Integration & B2B Domain
   |
Agent Gateway
   +-- Agent-to-Agent task / capability interface
   +-- deterministic OpenAPI operations
   +-- authn / authz / evidence
   |
Partner Agents
```

Agent Interface は業務トランザクションそのものを確率的処理にしない。外部 Agent の意図を capability / task として受け、最終的な更新は型付きの deterministic API / event へ落とす。

### 6.3 人員原則

この案件では、人間ロールを工程別に人数比例で配置しない。

EAA Role Model に従い、人間の主要責務を次の二軸へ分ける。

```
Operator = Stable Structure / Governance
Enabler  = Active Change / Mission / Outcome
```

Developer、Tester、Reviewer 等の実行機能は、Agentic Domain では主に Agent が担う。
非 Agentic Domain では Local Delivery Model が担う。

人間を配置する主な根拠は次である。

1. 安定した Domain / Scope の Purpose、Boundary、Authority、Constraint を所有する
2. 顧客と文脈を共有し、Active Changeの目的・優先順位・受入条件を具体化して成果実現を進める
3. Domain の現実・暗黙知を提供する
4. Enterprise と Domain の意味を接続する
5. 合意された範囲で高リスク時の検証・切替調整を担う

人数原則は、

```
N(Operator) ∝ Stable Decision Scopes
N(Enabler)  ∝ Active Change Demand
```

とする。

### 6.4 Persistent Roles

本ケースでは6つのDomain Profileを別々のCellへ分離する構成を仮置きするため、分離後のDomain Operatorは概ね6名とする。同じCellが複数Profileを引き受ける段階では、この人数は必要条件ではない。

| Role | 人数の目安 | 主責務 |
| --- | ---: | --- |
| Enterprise Operator | 1 | 全体目的・資源・共通規範、境界の調整提案、重大例外 |
| Domain Operators | 6 | 各 Domain の Purpose、Boundary、Authority、Contract、Exception |
| Domain Experts | 6 | 現行業務、例外、意味、業務上の正誤、Ontology訂正 |

Domain Operator は PL / Architect / Lead Developer の単純な改名ではない。
その Domain の実行系が自律的に動ける境界を作り、正常系の逐次承認者にはならない。

Domain Expert は Operator である必要はない。
業務知識を会議の中だけに閉じ込めず、Ontology、Example、Rule、Acceptance Evidence へ変換する。

### 6.5 Enabler Pool / Active Change

Enabler は Domain ごとに1名常設しない。

Enterprise Enabler は Enterprise Goal から Change portfolio を形成し、優先順位と Outcome を扱う。
Mission Enablerは一つまたは複数Domainを横断するActive Missionの成果実現を進める。最終的な投資・業務判断は明示された権限者が行い、Enablerという役割だけで決定権を得るわけではない。

例:

```
Enterprise Enabler
   |
   +-- Mission Enabler: First Vertical Mission
   +-- Mission Enabler: Legacy Migration
   +-- Mission Enabler: B2B Partner Pilot
   +-- Mission Enabler: Cutover Readiness
```

一人の Enabler が複数 Mission を持ってもよく、大きな Mission では複数 Enabler を置いてもよい。

Enabler数は固定せず、Active Change Demand に応じて増減させる。

### 6.6 責務と実行能力を分ける

Platform、Security、Migration、Assurance、Cutoverなどの責務は必要なProfileとして定義する。専門家・Agent・ツールは、その責務を実行する能力である。

すべてを専用Cellや恒久職種として設置する必要はない。Enterprise Cellが複数Profileを引き受けてもよく、別Opeへ判断責任を渡す必要があれば独立Cellにする。

横断責務の担当が他Cellへ変更を導入するときは、提案と対象Cellの受入を用いる。Cutoverの担当も、合意済みのGO/NO-GO・停止・rollback条件を調整する責務を持ち、他Cellの内部判断を上書きしない。

### 6.7 Temporary Member

旧基盤の暗黙知は置換完了まで一時的に必要になる。

本ケースでは Legacy SME を4名仮置きする。

| Role | 人数 | 主責務 | 主な期間 |
| --- | ---: | --- | --- |
| Legacy SME | 4 | 旧20サービスの実挙動、batch、例外、hidden dependency、障害履歴 | Month 1-9、以後縮退 |

同じ SME への質問が繰り返される場合、知識移行が未完了とみなす。

### 6.8 既存ロールからの移行

| 従来ロール | EAA での主な行き先 |
| --- | --- |
| Product Owner / Product Manager | Enterprise / Mission Enabler |
| Scrum Master | Enabler capability |
| Project Manager | Operator / Enabler に責務分解 |
| PMO | Evidence観測 + Enterprise Operator / Enabler |
| Solution Architect | Operator capability |
| Lead Developer | Domain Operator候補 / Agent execution |
| Developer | AgentまたはLocal Delivery executor |
| Tester / QA | Assurance capability / independent verification |
| Release Manager | Cutover責務のもとで合意済み切替条件を調整 |
| Platform / Security | 責務Profileの引受・実行能力の提供 |

これは肩書の一対一変換ではない。

### 6.9 人数モデル

固定するのは「19人」という人数ではなく、配置則である。

例として6 Domain Cellへの分離後には、

```
1 Enterprise Operator
6 Domain Operators
6 Domain Experts
+ Enablers proportional to active missions
+ 4 temporary Legacy SMEs
+ specialists as needed
```

となる。

First Vertical Mission、Migration、B2B pilot等を並行するならEnabler需要は増える。
Changeが収束すればEnablerは次のMissionへ移る。

### 6.10 Release 条件

リリース判断は「開発完了率100%」では行わない。

最低限、次を確認する。

1. 主要 Mission が end-to-end で完了する
2. Domain 間 Contract が versioned で機械参照可能
3. Enterprise Ontology から主要 cross-domain 語彙を解釈可能
4. reconciliation が許容閾値内
5. rollback が rehearsal 済み
6. 外部 Agent / Partner interface が Authority を越えない
7. Evidence と provenance を追跡可能
8. Operator escalation が正常系 throughput の bottleneck ではない
9. Active Mission の Outcome が Evidence で判定可能
10. 旧系固有知識が人間の頭の中だけに残っていない

この人数モデルが示すのは、人間の主な仕事がコードを書くことではなく、

```
Operator: Reality / Boundary / Authority -> Governed System
Enabler : Goal / Change / Outcome        -> Mission
Executor: Mission                        -> Evidence
```

を成立させることである。

## 7. ケーススタディ運営モデル: 12か月の実行スケジュールとイベント

本節では、新しい Operator / Enabler Role Model を一年間の基幹刷新へ適用する一例を仮置きする。
これは EAA の規範ではない。

### 7.1 基本構造

| 構成 | 責任 | 配置判断 |
| --- | --- | --- |
| Enterprise Cell | 全体目的・資源・共通規範を扱う | 初期に複数Profileを引き受けてよい |
| Domain Cell | 引き受けたDomain Profileの成果・保証 | 独立したOpeへ判断責任を移した時に成立 |
| 横断責務の引受Cell | Platform、Migration、Cutoverなど | 同じCellで担うか、必要に応じて独立 |
| Mission Collaboration | Enablerと関係Cellによる成果実現の協働 | Mission終了で解消でき、これ自体をCellとはしない |

Cellの成立には独立した責任・権限・実行能力とOpeが必要である。短期の協働会議や参加者の集合をCellと呼ばない。

### 7.2 Scrum の位置づけ

プロジェクト全体に Scrum を強制しない。

各 Domain は Scrum、Kanban、Predictive、Full Agentic等を Local Delivery Model として選べる。

Agentic Domain では、

```
Observation
→ Agent replanning
→ Execution
→ Evidence
→ Replanning
```

を連続的に回せるため、全Domain共通SprintやDaily Scrumを標準イベントにはしない。

### 7.3 Daily Evidence

Daily Evidence は一種類の進捗報告ではなく、見る責務によって分ける。

Operator view:

- authority violation
- boundary conflict
- contract violation
- risk / incident
- rollback
- unresolved exception

Enabler view:

- Mission Outcome
- lead time
- blocked change
- dependency
- rework
- Evidence completion
- learning / opportunity

異常や判断需要がなければ同期会議を開かない。

### 7.4 人間イベント

| Event | 発火 | 主な参加者 | 目的 |
| --- | --- | --- | --- |
| Enterprise Change Review | weekly / as needed | Enterprise Enabler + Mission Enablers | priority、investment、stopped Mission |
| Operator Council | event-driven | Enterprise / 関係 Domain Operators | Authority、Boundary、Constraint、重大例外 |
| Enabler Council | event-driven | 関係 Enablers | cross-domain Mission、repeated blocker、学習共有 |
| Domain Reality Session | as needed | Domain O + Expert + SME +必要なEnabler | 現実をRule / Ontology / Evidenceへ変換 |
| Cutover War Room | rehearsal / cutover | Cutover責務の引受Cell + 関係Cell | 高リスク同期判断 |

進捗報告のためだけに会議を開かない。

### 7.5 Day 0

Day 0では必要なStandard / Domain Profileを列挙し、初期の引受Cellと権限・資源を合意する。一つのCellから始めてもよい。以下は関係権限者と具体化する項目であり、他Cellへの一方的な設定ではない。

Enterprise Operator側で、

- Enterprise Constraint
- 仮 Domain Boundary
- Authority
- 絶対に壊してはいけない条件

を置く。

Enterprise Enabler側で、

- Business Goal
- Change priority
- First Vertical Mission
- expected Outcome

を顧客などの正当な判断主体と具体化する。

最初の Vertical Mission は複数 Domain を横断する実業務を選ぶ。

### 7.6 Week 1-2: Boundary / Ontology Discovery

最初のMissionに必要なProfileを優先して引き受ける。分離が必要な範囲だけ、別Opeと権限・資源を用意してCellを起動する。

Agent / Executorは旧ソース、DB schema、API、batch、log、incident、manual、test等を解析し、

```
Observed reality
→ ontology candidate
→ rule candidate
→ hidden dependency
→ boundary hypothesis
→ acceptance evidence
```

を生成する。

Domain OperatorはAuthority / Boundary / Contractを分類し、Mission EnablerはOutcome達成に必要なChangeをMissionへ整理する。

### 7.7 Week 3-6: First Autonomous Vertical Mission

```
Intent
→ Mission Enabler
→ Mission
→ Multiple Domains
→ Executors
→ Evidence
→ Outcome
```

を end-to-end で成立させる。

確認対象:

- Mission Enablerが顧客の文脈を共有し、関係Cellとcross-domain Outcomeを成立させられる
- Domain Operatorが各Boundaryを守れる
- Ontology / Contractを共有できる
- Human PMを通常経路に置かず進む
- 必要な場所だけEscalationする
- EvidenceでOutcomeを判定できる

成立しない場合、大量実装前にRole / Boundary / Protocolを修正する。

### 7.8 Month 2-3: Domain Activation

First MissionのEvidenceから負荷・専門性を判断し、必要なProfileの責務を独立Cellへ移す。すべてを分離することを成功条件にはしない。

Agentic DomainはAA loopを回し、非Agentic Domainは自身のLocal Delivery ModelでMissionを処理する。

人間が細かいStoryを大量作成することは前提にしない。

### 7.9 Backlog / Mission Portfolio

Enterprise EnablerはChange portfolioを持てる。
Mission EnablerはActive MissionのGoal / Outcome / Priorityを顧客・関係Cellと具体化し、成果実現を進める。最終決定は明示された権限者が行う。

Domain内部の細かなtask decompositionはLocal Executorへ委任する。

```
Change Portfolio
→ Mission
→ Domain execution
→ Evidence
```

### 7.10 Month 3: First Production Slice

全面切替を必須とせず、小さなproduction sliceを出す。

条件:

- 実traffic
- observability
- rollback
- reconciliation
- 正常系でOperator承認待ちをしない
- Mission OutcomeをEvidenceで確認できる

### 7.11 Month 4-8: Parallel Change

複数のActive Missionを並行させる。

例:

- Legacy write reduction
- Partner B2B pilot
- Billing modernization
- Knowledge extraction

Change量が増えればEnablerを増やす。
Operator配置は独立した判断責任の範囲と負荷から見直す。Domain Profile数やChange量に比例して機械的に増やさない。

### 7.12 Month 6: Midpoint Evidence Review

見るもの:

- Mission Lead Time
- autonomous mission completion
- Operator escalation / mission
- Enabler load / active mission
- Boundary Wait
- Rework Mass
- semantic mismatch
- rollback
- human-only knowledge
- cost / accepted outcome

中心となる問いは「予定作業の何%か」ではなく、

> **どれだけ新しい業務能力がEvidence付きで成立したか**

である。

### 7.13 Month 9-10: Shadow / Reconciliation / Cutover Preparation

Migration / Cutover Profileの引受先を定め、必要な能力・資源を確保する。専用Cellは必須ではなく、独立した判断責任が必要な場合に別Opeへ分離する。

関係CellはGO/NO-GO・停止・rollback・同期時刻・必要Evidence・判断主体を事前合意する。全体切替の調整責務は、各Cell内部を直接指揮する権限を意味しない。

### 7.14 Month 11: Release Candidate Mode

Assurance / Cutoverの引受先は追加検証や適用条件を提案する。規範変更は正当な人間の変更権者が承認し、影響するCellは採用・移行を合意する。Profileの有効化だけで他Cellの権限・制約は変わらない。

各Cellが候補とEvidenceを提示し、事前合意した判定条件を満たした場合だけ切替へ進む。条件を満たさない時は合意した停止・差戻し・復旧経路を使う。

### 7.15 Month 12: Final Cutover

合意済みの条件に基づいて全体GO/NO-GOを調整し、各Cellが自己の範囲で切替と復旧を行う。高リスク期間も分離済みCellの自治を上書きしない。

終了後は残件・保証・監視責務を引き継ぎ、一時的な責務配置と条件を合意した終了手順で解除する。合意不成立や未想定の緊急事態の詳細手続きは未決であり、このケースが解決済みとするものではない。

### 7.16 12か月の全体像

| 時期 | Stable Plane | Change Plane | Milestone |
| --- | --- | --- | --- |
| Day 0 | Profile列挙 + 初期引受Cell | Enterprise E + First Mission E | Kickoff |
| Week 1-2 | Boundary / Authority / 責務配置 | First Mission shaping | Boundary v0 |
| Week 3-6 | Domain governance | First Vertical Mission | First E2E Outcome |
| Month 2-3 | Domain activation | Production Mission | First Production Slice |
| Month 4-8 | Stable Domain O | Multiple Mission Enablers | Parallel Replacement |
| Month 9-10 | 合意済み切替条件と判断主体 | Cutover readiness missions | Cutover Ready |
| Month 11 | 採用合意済みの検証・受入条件 | Release candidate | RC |
| Month 12 | 合意に基づく同期調整 | Final cutover | Release |

### 7.17 Event-driven Escalation

人間イベントはcadenceだけで発火させない。

例:

```
semantic mismatch
boundary violation
authority expansion
repeated rollback
verification disagreement
contract incompatibility
irreversible operation
high blast radius
legacy knowledge dependency
mission blocked across domains
```

繰り返す問題は単発判断で終わらせず、EnablerがChangeとして扱う。

### 7.18 この運営モデルが示すこと

このケースで選んだ人間配置は、

> **Persistent Operators + Change-driven Enablers + Local Executors + Event-driven Governance**

と表現できる。

```
Operator = Govern stable scope
Enabler  = Shape context and drive outcomes
Executor = Execute and return Evidence
```

人間が毎日知るべきなのは実行全量ではない。
判断が必要な場所、Changeが止まった場所、Boundaryが破れた場所である。


## 8. Mission Graph / Evidence Graph による開発観測

EAA では、Mission を GitHub Issue、分解された Mission を Sub-issue、実装・検証結果を PR / Actions / Comment / Artifact として残すことで、プロジェクト全体をグラフとして観測できる。

概念的には、

```
Project
= Mission Graph
+ Evidence Graph
```

と捉えられる。

### 8.1 Mission Graph

Mission Graph の node は Mission / Sub-mission であり、edge は例えば次の関係を表す。

- parent-of
- requires
- blocked-by
- caused-by
- implements
- verifies
- supersedes

これにより、「どの意思から、どの作業が派生したか」を後から辿れる。

### 8.2 Evidence Graph

Evidence Graph は、Mission が正しく達成されたと判断した根拠を結びつける。

例:

```
Mission #100
├─ Sub-issue #101
├─ PR #150
├─ Actions run
├─ reconciliation result
├─ production trace
└─ rollback evidence
```

Evidence は単なる添付物ではなく、Mission の完了条件を支える構造として扱う。

### 8.3 効率指標

Mission Graph を観測すると、従来の進捗率では捉えにくかった浪費や乖離を測定できる。

| Metric | 意味 |
| --- | --- |
| Rework Mass | やり直しになった subgraph の総コスト |
| Detection Depth | 誤りが発生してから発見されるまでに進んだ階層深度 |
| Detection Latency | 誤り発生から発見までの時間 |
| Blast Radius | 一つの誤判断が影響した node / Domain の広がり |
| Intent Drift | 親 Mission の Goal / Constraint と子孫 Mission の乖離 |
| Blocked Mass | 停止している subgraph のコストまたは実行量 |
| Escalation Rate | Mission あたりの Human Escalation 回数 |
| Authority Tightening Rate | 一度自律に委ねた Authority を人間側へ戻した回数、または検証ゲートを追加した回数 |

node ごとの cost は、少なくとも次のような複数資源で重み付けできる。

```
Cost(node)
= Compute
+ Token
+ Human Time
+ External Cost
```

したがって、実際に発生した手戻りは、

```
Realized Rework
= Σ Cost(node)
  for node in rework subgraph
```

として近似できる。

### 8.4 Intent Drift

Agentic execution では Mission が再帰的に分解されるため、深い子 Mission が親の意図から離れる可能性がある。

各 node は「どの親 Goal へ、どのように寄与するか」を説明可能であるべきである。

例:

```
derived_from: #100
contributes_to: contract-change-latency
```

親 Goal への寄与を説明できない node は、Intent Drift の候補となる。

### 8.5 Discarded Graph と Waste Graph を分ける

破棄された仕事をすべて浪費とはみなさない。

```
Discarded Graph != Waste Graph
```

仮説を試し、誤りであるという Evidence を得て捨てたなら、それは探索または学習のコストである。

一方、新しい知識をほとんど生まず、先行する誤判断のためだけに発生した実行は Rework / Waste とみなせる。

破棄理由は少なくとも区別する。

- hypothesis-falsified
- superseded
- parent-wrong
- intent-drift
- duplicate

### 8.6 AA の期待浪費との接続

AA では、自律速度を考える基礎量として、

```
Expected Waste
= P(wrong) × W
```

を置いている。

Mission Graph / Evidence Graph を長期に観測すると、

- Mission 種別ごとの誤り率
- 誤った場合の平均 Rework Mass
- Verification のコスト
- Verification による早期検出率
- Detection Depth

を実測できる。

すなわち、

```
P(wrong)
W
C(check)
```

を経験データから推定できる可能性がある。

このとき D4 は単なる設計思想ではなく、実プロジェクトの履歴から学習する制御則へ近づく。

### 8.7 進捗ではなく実行構造を見る

EAA の観測画面は、単純な「何%完了したか」だけを中心に置かない。

例:

```
Mission completion       87%
Rework Mass              4.2%
Intent Drift             1.1%
Median Detection Depth   1.7
Human Escalation         0.14 / mission
Blocked Mass             ...
Expected Waste           ...
```

重要なのは、作業量そのものではなく、

- 意思がどれだけ正しく伝播したか
- 誤りをどれだけ浅い場所で発見できたか
- やり直しがどこから発生したか
- 人間判断がどこに必要だったか

を観測することである。

この意味で GitHub は単なる開発管理ツールではなく、EAA の実行・因果・Evidence を記録する durable ledger として利用できる。
