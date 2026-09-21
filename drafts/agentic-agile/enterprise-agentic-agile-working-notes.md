# Enterprise Agentic Agile (EAA) — Working Notes

2026-09-21 · Kazuhiro

> Status: working notes / non-normative draft
>
> 本文書は、Agentic Agile (AA) から出発して検討してきた Enterprise Agentic Agile (EAA) の現時点の整理を保存するための作業メモである。AA Principles 本体の規範は変更しない。
>
> 現在の整理では、EAA はすべての Domain に AA を要求しない。Agentic Domain では AA を内部原理として利用できるが、Scrum、Kanban、SAFe ART、Predictive、Package/Vendor 等の Domain も、EAA Core の境界条件を満たせば参加できる。

## 1. 位置づけ

Enterprise Agentic Agile (EAA) は、AI / Agent を主要な実行主体として扱う Enterprise 規模の開発手法・統治モデルであり、AA から出発して Enterprise 規模の協調問題を再定義した境界アーキテクチャを内部構造として持つ。

AA は一つの Agentic な自律実行系の内部を扱う。
EAA は、Agentic / Human-centered / Vendor / Package を含む複数の異種 Domain が、それぞれの自治とドメイン固有性を保ったまま企業全体として協調するための構造を扱う。

```
AA  = Agentic Domain 内部の自律実行原理
EAA = 異種 Domain 間の協調原理
```

したがって、EAA は AA を置き換えないが、すべての Domain に AA を要求もしない。

```
EAA Instance
├─ Agentic Domain      → AA を適用できる
├─ Scrum Domain        → Scrum を内部利用
├─ Predictive Domain   → Predictive を内部利用
└─ Vendor / Package    → 独自方式を内部利用
```

EAA が共通化するのは内部 Operating Model ではなく、意味、Mission、Authority、Contract、Evidence、Escalation である。

## 2. AA が扱う世界

従来の人間中心開発では、設計・実装・テスト・レビュー・再設計というループを、複数の人間・職能・工程に分けていた。

```
設計者 → 実装者 → テスト者 → レビュアー → 設計者
```

しかし Agentic な実行系では、このループは極めて短時間で回る。

```
仮説 → 設計 → 実装 → 検証 → 観測 → 修正
```

したがって、設計者・実装者・テスト担当者といった「工程に由来する役割分担」は縮退する。工程を別組織・別担当へ handoff すること自体が、Agentic な速度を損なう可能性がある。

AA の中心問題は、人間の制約ではなく Agent の制約から Agile を再導出することにある。

現在の AA v2 が置く主要な前提は以下である。

- 実行は安く、速い
- 実行総量には上限がある
- 人間の判断は希少である
- 出力は確率的にばらつく
- 同じ生成元は同じ誤りを共有しうる

この前提から、可逆性、期待浪費、生成と判定の分離、自己権限の固定などが導出される。

特に、自律の速度を考える基礎量として、

```
期待浪費 = 誤り確率 × 誤ったまま進む実行量
```

を置ける。

より厳密には、検証を挟むかどうかは、

```
回避可能な期待浪費 > 検証コスト
```

となるかで判断できる。

この見方では「小さく実装する」「早く検証する」は独立した教義ではない。有限資源下で期待浪費を抑えれば自然に導出される。

## 3. EAA で新たに現れる問題

企業全体では、一つの Agentic System や一つの Delivery Model に統一されるとは限らない。

例:

```
Domain A  AgentHub / Full Agentic
Domain B  Dify
Domain C  GitHub Copilot + Scrum
Domain D  Predictive Vendor
Domain E  Package implementation
```

それぞれの Domain は、業務知識、データ、権限、SLA、法的責任、失敗モード、技術制約、Agent Literacy を独自に持つ。

したがって EAA は、全 Domain に同じ Agent 基盤、同じモデル、同じ Agent 構成、同じ内部 Operating Model を強制してはならない。

```
内部実装は自治する。
境界を共有・統治する。
```

EAA の問題は、異種の実行系をどう同質化するかではなく、異質なままどう協調させるかである。

## 4. AA と EAA の関係

AA と EAA は同じ層ではない。

| 観点 | AA | EAA |
| --- | --- | --- |
| 主対象 | Agentic Domain 内部 | Domain 間 |
| 基本単位 | Agentic System | Domain / heterogeneous execution system |
| 主問題 | 高速・確率的な自律実行 | local autonomy + global alignment |
| 人間判断 | 希少資源として扱う | Enterprise 境界の希少判断へ集中させる |
| 権限 | 自律系内部の Authority | Domain 間 Authority / Contract |
| 意味 | Domain 内 context | Enterprise Ontology / semantic difference |
| 品質 | 期待浪費、独立検証 | Evidence、provenance、cross-domain assurance |
| 内部方式 | AA Principles | 原則として統一しない |

Agentic Domain では AA Principles を適用できる。
非 Agentic Domain に AA の内部 Operating Model を強制する必要はない。

EAA が要求するのは、その Domain が EAA Boundary を満たすことである。

```
Missionを受け取れる
Ontology / Contractを解釈できる
Authorityを越えない
Evidenceを返せる
Escalationできる
```

## 5. AA と EAA の違い

AA の中心問題:

> 一つの Agentic System を、どう速く、安全に、無駄なく自律させるか。

EAA の中心問題:

> 異なるドメイン、異なる技術、異なる Delivery Model を持つ複数の実行系を、自治を壊さず企業全体としてどう協調させるか。

したがって、

```
AA  = Agentic な自律ループを成立させる
EAA = 異種 Domain を共通境界で接続する
```

と整理できる。

## 6. EAA の共通層

現時点では、異種 Domain が共通して参照すべき上位層として、少なくとも次の三つを置く。

### 6.1 Enterprise Ontology — 意味

全 Domain / 実行系が参照できる企業レベルの意味体系を持つ。

ただし、これは全社語彙を一つの意味に統一することではない。

営業の「顧客」と CS の「顧客」が異なるなら、その分裂そのものを記録する。

```
顧客
├─ 営業: 法人
├─ CS: 利用者個人
└─ 会計: 請求主体
```

Enterprise Ontology は canonical model ではなく、canonical semantic map として振る舞う。

EAA が共有するのは「一つの意味」ではなく、「意味の違いを含む共通の意味地図」である。

```
Ontology + Domain / Position / Context
→ その場で使う意味を導出
```

既存の Ontology 論にある「分裂を保持する」という原則を、Enterprise の全 Domain 間へ拡張する。

### 6.2 Enterprise Constitution — 規範と権限

各サブシステムの内部自治を認めつつ、上位の価値、制約、権限境界を共有する。

各ドメインは上位規範に準拠し、自ドメインの下位規範を持つ。

これは AA の P2「開発は憲法の連鎖である」の Enterprise への拡張と考えられる。

### 6.3 Inter-system Protocol — 相互作用

異なる Domain / 実行系同士が最低限交換できる共通形式を持つ。

候補:

- Intent / Goal
- Constraints
- Semantic references
- Authority / permitted scope
- Request
- Result
- Evidence
- Failure
- Escalation
- Version / provenance

重要なのは製品 API や内部プロセスの統一ではなく、異種 Domain が協調可能な接続契約を共有することである。

原則的には、

> Standardize the boundary, not the implementation.

と表現できる。

## 7. Operator / Enabler

AA の内部では、設計者・実装者・テスター・レビュアーといった工程由来の人間ロールは大きく縮退する。

一方、EAA では二種類の人間責務が残る。

```
Operator = Stable Structure / Governance
Enabler  = Active Change / Outcome
```

Operator は安定した Scope の Purpose、Boundary、Authority、Constraint、Exception を所有し、現在の系を成立させる。

Enabler は Change の Goal、Priority、Outcome を所有し、Mission を形成して系を次の状態へ動かす。

どちらも通常の設計・実装・検証を逐次承認する役ではない。
実行は Agent または Local Delivery System に委任し、人間は境界・価値・例外へ集中する。

```
Operator ≈ Stable Scope Governor
Enabler  ≈ Change / Outcome Owner
```

繰り返す Operator 判断は Rule / Constitution / Contract へ変換し、繰り返す Change impediment は Enabler が構造改善として扱う。

```
Human decision
→ record
→ rule
→ future autonomy
```

## 8. 人間ロールの変化

従来:

```
Human Role = Development Phase
```

例:

- Designer
- Developer
- Tester
- QA
- Architect
- PM

AA では工程ループが高速に閉じるため、この区分は縮退する。

EAA では、人間ロールを工程ではなく二つの責務軸で捉える。

```
Human Responsibility
= Stable Governance
+ Active Change
```

すなわち、

```
Operator = 何を成立させ続けるか
Enabler  = 次に何を変えるか
```

である。

## 9. 既存 Enterprise Agile との比較

既存 Enterprise Agile の中心問題は、主として複数の人間中心 Agile Team をどう整列・同期し、企業全体として価値を届けるかにある。

典型的には、

```
Team
→ Team of Teams / ART / Nexus
→ Portfolio / Solution
```

というスケール構造を取る。

EAA は基本粒子を人間 Team の共通プロセスではなく、自治可能な Domain として置く。

```
Domain
→ Federation of heterogeneous Domains
```

比較すると以下のようになる。

| 観点 | 既存 Enterprise Agile | EAA |
| --- | --- | --- |
| スケール単位 | 人間中心 Agile Team | Autonomous Domain |
| 内部構造 | 共通 Framework / Operating Model を共有しやすい | Full Agentic / Scrum / Predictive 等を混在可能 |
| 全体整合 | Backlog, Cadence, Event, Role | Ontology, Mission, Authority, Contract, Evidence |
| 人間ロール | PO, SM, Architect, RTE 等 | Operator / Domain Boundary Owner |
| 工程 | Framework ごとに一定の共通形を持つ | Domain 内部へ委任 |
| ドメイン差 | 共通プロセス内で調整 | 自治を前提に保持 |
| 意味整合 | 会話・Backlog・仕様で調整 | Enterprise Ontology を参照 |
| 人間介入 | 会議・レビュー・承認が通常経路に入りやすい | EAA Boundary では例外・権限境界へ寄せる |

既存 Enterprise Agile と EAA は、どちらも

```
local autonomy + global alignment
```

という同じシステム問題を解いている。

ただし制約条件が異なる。

人間中心 Enterprise Agile では、通信、会議、認知、handoff、人数、同期コストが主要制約となる。

EAA では、異種 Delivery Model、context 差、意味差、権限、Domain 間契約が主要制約となる。Agentic Domain ではさらに確率的誤り、token / compute 消費、Agent 間の相関失敗が加わる。

同じシステム論から導出しても、制約が変わるため組織構造も変わる。

## 10. AI-Native Enterprise Agile との差

既存の Enterprise Agile Framework も AI 利用へ進化しており、「AI が実装し、人間が intent や strategy に寄る」といった方向は EAA 固有ではない。

したがって EAA の独自性を単に、

- AI を使う
- Agent に実装させる
- 人間を戦略へ移す

に置いてはならない。

現時点で EAA 固有の核になりうるのは、次の組み合わせである。

1. **基本粒子を共通プロセスに従う Team ではなく Autonomous Domain とする**
2. **Agentic / Human-centered / Vendor / Package を含む異種 Domain の連邦を前提とする**
3. **Enterprise Ontology を全 Domain の共有意味層とする**
4. **内部 Operating Model を統一せず、Mission / Authority / Contract / Evidence の境界を統治する**
5. **人間ロールを工程ではなく Domain Boundary / Authority の所有へ移す**
6. **Agentic Domain では、人間の最終承認を通常経路の必須条件にせず、AA の可逆性・期待浪費・権限境界から介入を決める**
7. **条件付き Enterprise 統制を Core に埋め込まず、Profile として追加・解除できる**

## 11. 暫定的な核心命題

AA:

> 人間の制約から作られた開発構造を捨て、Agent の制約から Agile を再導出する。

EAA:

> 異なる内部 Operating Model を持つ Domain を、自治と独自性を失わせず、共通の意味・Mission・権限・Contract・Evidence によって企業規模で協調させる。

短く表すなら、

> **AA は Agentic ループを自律化する。EAA は異種 Domain を接続する。**

EAA の設計思想としては、

> **意味と規範は共有する。実装は自治する。**

が現時点の有力な表現である。

より厳密には、

> **意味の違いまで共有し、内部実装は自治する。**

## 12. 未決事項

Role Model については、Operator / Enabler の基本責務と cross-domain Mission の Outcome owner を v0.1 で確定した。
残る未決事項は主に実装・実証側である。

- EAA Core と AA Principles の形式的な関係をどう定義するか
- Enterprise Ontology の所有・改訂プロトコル
- Domain Boundary の決め方と再編条件
- Inter-system Protocol の最小構成
- 複数 Mission / Domain 間で優先順位や Authority が競合した場合の arbitration
- ドメイン間の期待浪費をどう測るか
- EAA 固有の観測指標
- Human escalation の閾値をどうEvidenceから学習するか
- Budget / Commercial model と Mission portfolio の接続
- Operator / Enabler の実負荷と適正 span
- Agent Literacy / Adoption の成熟モデル
- AI-Native SAFe、Team Topologies、Nexus / LeSS、Hybrid 等との厳密な先行研究比較
- Profile の追加・廃止・versioning 手続き
- Local Delivery Model の EAA compliance test


## 13. ケーススタディ: 10億円・1年の業務基盤刷新

ここでは EAA の人員モデルを具体化するため、次の仮想案件を置く。

- 期間: 12か月
- 予算: 10億円
- 現行: AWS 上のレガシーなマイクロサービス 20個
- 目的: 業務基盤を段階的に置き換える
- 追加目的: B2B インターフェースを現代化し、外部企業の Agent が利用できる Agent Interface を提供する
- 移行方針: 一括再構築ではなく Strangler 型で段階移行する
- 組織方針: 20サービスを20チームに分けず、業務ドメイン単位へ再編する
- Local Delivery Model: 本ケースでは比較を単純化するため、6 Domain を原則 Agentic / AA 系として仮置きする（EAA 一般要件ではない）

### 13.1 Domain 分割

20個の既存マイクロサービスを、実装単位ではなく業務上の自律境界で6 Domainへ束ねる。

| Domain | 旧サービス数 | 主な責務 |
| --- | ---: | --- |
| Customer & Partner | 3 | 顧客、取引先、連絡先、取引関係 |
| Contract & Product | 4 | 商品、価格、契約、契約変更 |
| Order & Workflow | 4 | 受注、申請、承認、業務ワークフロー |
| Billing & Payment | 4 | 請求、入金、返金、債権 |
| Identity & Entitlement | 2 | ID、組織、権限、利用資格 |
| Integration & B2B | 3 | 外部連携、Partner API、Agent Interface |

本ケースでは各 Domain を一つの AA 系として扱う。これはケーススタディ上の Local Delivery Model 選択であり、EAA Core が全 Domain に AA を要求することを意味しない。旧マイクロサービスの個数は、新組織の個数を決めない。

### 13.2 仮置きする AWS 構成

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

### 13.3 人員原則

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
2. Active Change の Goal、Priority、Outcome を所有する
3. Domain の現実・暗黙知を提供する
4. Enterprise と Domain の意味を接続する
5. 高リスク時の一時的 Authority / Assurance を担う

人数原則は、

```
N(Operator) ∝ Stable Decision Scopes
N(Enabler)  ∝ Active Change Demand
```

とする。

### 13.4 Persistent Roles

本ケースでは6 Domainを仮置きするため、Domain Operatorは概ね6名を基準とする。

| Role | 人数の目安 | 主責務 |
| --- | ---: | --- |
| Enterprise Operator | 1 | Enterprise Constraint、Authority、Domain boundary arbitration、重大例外 |
| Domain Operators | 6 | 各 Domain の Purpose、Boundary、Authority、Contract、Exception |
| Domain Experts | 6 | 現行業務、例外、意味、業務上の正誤、Ontology訂正 |

Domain Operator は PL / Architect / Lead Developer の単純な改名ではない。
その Domain の実行系が自律的に動ける境界を作り、正常系の逐次承認者にはならない。

Domain Expert は Operator である必要はない。
業務知識を会議の中だけに閉じ込めず、Ontology、Example、Rule、Acceptance Evidence へ変換する。

### 13.5 Enabler Pool / Active Change

Enabler は Domain ごとに1名常設しない。

Enterprise Enabler は Enterprise Goal から Change portfolio を形成し、優先順位と Outcome を扱う。
Mission Enabler は一つまたは複数 Domain を横断する Active Mission を所有する。

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

### 13.6 Capability は恒久ロール名を増やさない

Ontology、Platform、Security、Migration、B2B、Release 等をすべて専用 Operator 職種として常設しない。

それらは次のいずれかとして扱う。

- Domain / Enterprise Operator が持つ Capability
- Mission Enabler が呼び出す専門能力
- Active Profile が要求する一時的 Authority / Assurance
- temporary specialist
- Agent / platform capability

例:

```
Security
!= Security Operator を必ず1名常設

Security
= Policy / Authority / Assurance capability
  loaded where required
```

Cutover のように短期間だけ強い Authority が必要なら、Cutover Profile の期間だけ Cutover Commander を明示してよい。

### 13.7 Temporary Member

旧基盤の暗黙知は置換完了まで一時的に必要になる。

本ケースでは Legacy SME を4名仮置きする。

| Role | 人数 | 主責務 | 主な期間 |
| --- | ---: | --- | --- |
| Legacy SME | 4 | 旧20サービスの実挙動、batch、例外、hidden dependency、障害履歴 | Month 1-9、以後縮退 |

同じ SME への質問が繰り返される場合、知識移行が未完了とみなす。

### 13.8 既存ロールからの移行

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
| Release Manager | Cutover Profile下の一時Authority |
| Platform / Security | Capability Ownership |

これは肩書の一対一変換ではない。

### 13.9 人数モデル

固定するのは「19人」という人数ではなく、配置則である。

例として開始時には、

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

### 13.10 Release 条件

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

## 14. ケーススタディ運営モデル: 12か月の実行スケジュールとイベント

本節では、新しい Operator / Enabler Role Model を一年間の基幹刷新へ適用する一例を仮置きする。
これは EAA の規範ではない。

### 14.1 基本構造

```
Stable Plane                      Change Plane

Enterprise Operator <----------> Enterprise Enabler
       |                               |
       |                         Active Missions
       |                         /      |       \
 Domain O A                 Mission E  Mission E  Mission E
 Domain O B                      \      |      /
 Domain O C                       Domain Operators
 ...                                    |
                                  Local Executors
                                       |
                                    Evidence
```

組織単位は次のように扱う。

| Unit | 存続期間 | 目的 |
| --- | --- | --- |
| Enterprise Governance | 全期間 | Enterprise Constraint / Authority / Boundary |
| Domain Cell | 原則全期間 | 各 Domain の安定運転 |
| Mission Cell | Mission期間 | 特定 Outcome / Change |
| Cutover Cell | 高リスク期間のみ | 切替・rollback・GO/NO-GO |

Mission Cell は Mission Enabler と必要な Domain Operator / Expert / Executor から形成し、Outcome達成後に解散する。

### 14.2 Scrum の位置づけ

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

### 14.3 Daily Evidence

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

### 14.4 人間イベント

| Event | 発火 | 主な参加者 | 目的 |
| --- | --- | --- | --- |
| Enterprise Change Review | weekly / as needed | Enterprise Enabler + Mission Enablers | priority、investment、stopped Mission |
| Operator Council | event-driven | Enterprise / 関係 Domain Operators | Authority、Boundary、Constraint、重大例外 |
| Enabler Council | event-driven | 関係 Enablers | cross-domain Mission、repeated blocker、学習共有 |
| Domain Reality Session | as needed | Domain O + Expert + SME +必要なEnabler | 現実をRule / Ontology / Evidenceへ変換 |
| Cutover War Room | rehearsal / cutover | temporary Cutover Cell | 高リスク同期判断 |

進捗報告のためだけに会議を開かない。

### 14.5 Day 0

Day 0では詳細WBSを作らない。

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

を置く。

最初の Vertical Mission は複数 Domain を横断する実業務を選ぶ。

### 14.6 Week 1-2: Boundary / Ontology Discovery

最初のMissionに必要なDomainを優先起動する。

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

### 14.7 Week 3-6: First Autonomous Vertical Mission

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

- Mission Enablerがcross-domain Outcomeを所有できる
- Domain Operatorが各Boundaryを守れる
- Ontology / Contractを共有できる
- Human PMを通常経路に置かず進む
- 必要な場所だけEscalationする
- EvidenceでOutcomeを判定できる

成立しない場合、大量実装前にRole / Boundary / Protocolを修正する。

### 14.8 Month 2-3: Domain Activation

First Missionが通った後、必要Domainを本格起動する。

Agentic DomainはAA loopを回し、非Agentic Domainは自身のLocal Delivery ModelでMissionを処理する。

人間が細かいStoryを大量作成することは前提にしない。

### 14.9 Backlog / Mission Portfolio

Enterprise EnablerはChange portfolioを持てる。
Mission EnablerはActive MissionのGoal / Outcome / Priorityを持つ。

Domain内部の細かなtask decompositionはLocal Executorへ委任する。

```
Change Portfolio
→ Mission
→ Domain execution
→ Evidence
```

### 14.10 Month 3: First Production Slice

全面切替を必須とせず、小さなproduction sliceを出す。

条件:

- 実traffic
- observability
- rollback
- reconciliation
- 正常系でOperator承認待ちをしない
- Mission OutcomeをEvidenceで確認できる

### 14.11 Month 4-8: Parallel Change

複数のActive Missionを並行させる。

例:

- Legacy write reduction
- Partner B2B pilot
- Billing modernization
- Knowledge extraction

Change量が増えればEnablerを増やす。
Domain数が変わらない限り、OperatorをChange量に比例して増やさない。

### 14.12 Month 6: Midpoint Evidence Review

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

### 14.13 Month 9-10: Shadow / Reconciliation / Cutover Preparation

Migration / Cutoverは恒久専用Operatorを前提とせず、Mission / Capability / Active Profileとして扱う。

Cutover Profileを有効にした期間だけ、最終AuthorityとしてCutover Commanderを明示してよい。

参加者は必要なDomain Operator、Mission Enabler、Migration/Platform/Security等の専門家、Legacy SMEから構成する。

### 14.14 Month 11: Release Candidate Mode

通常Authorityを一律に捨てず、Assurance / Cutover Profileによって一時的に制約を強くする。

```
Normal
Executor
→ automated verification
→ production

High-risk window
Executor
→ candidate
→ required evidence
→ elevated assurance
→ explicit authority where required
→ production
```

### 14.15 Month 12: Final Cutover

Final Cutoverでは一時的なcommand structureを許す。

平時の分散自治を、高リスク・時間制約の強い切替へ教義として強制しない。

Cutover完了後は一時Authorityを解除し、通常のOperator / Enabler構造へ戻す。

### 14.16 12か月の全体像

| 時期 | Stable Plane | Change Plane | Milestone |
| --- | --- | --- | --- |
| Day 0 | Enterprise O + initial Domain O | Enterprise E + First Mission E | Kickoff |
| Week 1-2 | Boundary / Authority | First Mission shaping | Boundary v0 |
| Week 3-6 | Domain governance | First Vertical Mission | First E2E Outcome |
| Month 2-3 | Domain activation | Production Mission | First Production Slice |
| Month 4-8 | Stable Domain O | Multiple Mission Enablers | Parallel Replacement |
| Month 9-10 | Operator + temporary authority | Cutover readiness missions | Cutover Ready |
| Month 11 | tightened authority | Release candidate | RC |
| Month 12 | temporary command | Final cutover | Release |

### 14.17 Event-driven Escalation

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

### 14.18 この運営モデルが示すこと

EAAの標準的な人間構造は、

> **Persistent Operators + Change-driven Enablers + Local Executors + Event-driven Governance**

と表現できる。

```
Operator = Govern stable scope
Enabler  = Own active change
Executor = Execute and return Evidence
```

人間が毎日知るべきなのは実行全量ではない。
判断が必要な場所、Changeが止まった場所、Boundaryが破れた場所である。


## 15. Mission Graph / Evidence Graph による開発観測

EAA では、Mission を GitHub Issue、分解された Mission を Sub-issue、実装・検証結果を PR / Actions / Comment / Artifact として残すことで、プロジェクト全体をグラフとして観測できる。

概念的には、

```
Project
= Mission Graph
+ Evidence Graph
```

と捉えられる。

### 15.1 Mission Graph

Mission Graph の node は Mission / Sub-mission であり、edge は例えば次の関係を表す。

- parent-of
- requires
- blocked-by
- caused-by
- implements
- verifies
- supersedes

これにより、「どの意思から、どの作業が派生したか」を後から辿れる。

### 15.2 Evidence Graph

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

### 15.3 効率指標

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

### 15.4 Intent Drift

Agentic execution では Mission が再帰的に分解されるため、深い子 Mission が親の意図から離れる可能性がある。

各 node は「どの親 Goal へ、どのように寄与するか」を説明可能であるべきである。

例:

```
derived_from: #100
contributes_to: contract-change-latency
```

親 Goal への寄与を説明できない node は、Intent Drift の候補となる。

### 15.5 Discarded Graph と Waste Graph を分ける

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

### 15.6 AA の期待浪費との接続

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

### 15.7 進捗ではなく実行構造を見る

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
