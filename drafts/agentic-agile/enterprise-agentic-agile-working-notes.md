# Enterprise Agentic Agile (EAA) — Working Notes

2026-09-21 · Kazuhiro

> Status: working notes / non-normative draft
>
> 本文書は、Agentic Agile (AA) を企業規模へ拡張する Enterprise Agentic Agile (EAA) の現時点の整理を保存するための作業メモである。AA Principles 本体の規範は変更しない。

## 1. 位置づけ

Enterprise Agentic Agile (EAA) は、Agentic Agile (AA) の拡張である。

AA が一つの Agentic な自律実行系の内部を扱うのに対し、EAA は複数の異種 Agentic System が、それぞれの自治とドメイン固有性を保ったまま企業全体として協調するための構造を扱う。

```
AA:  自律系内部の Agile
EAA: 自律系間の Agile
```

概念上は、

```
AA ⊂ EAA
```

と捉える。

EAA は AA を置き換えない。EAA を構成する各サブシステム内部では AA が成立し、その上に EAA 固有の境界・意味・規範・協調の層が加わる。

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

企業全体では、一つの Agentic System に統一されるとは限らない。

例:

```
全体統括      AgentHub
サブシステムA Dify
サブシステムB GitHub Copilot
サブシステムC 独自 Agent 基盤
```

それぞれのドメインは、業務知識、データ、権限、SLA、法的責任、失敗モード、技術制約を独自に持つ。

したがって EAA は、全ドメインに同じ Agent 基盤、同じモデル、同じ Agent 構成、同じ内部 Operating Model を強制してはならない。

```
内部実装は自治する。
境界を共有・統治する。
```

EAA の問題は、異種の Agentic System をどう同質化するかではなく、異質なままどう協調させるかである。

## 4. AA と EAA の共通点

| 観点 | AA | EAA |
| --- | --- | --- |
| 実行主体 | Agent 中心 | Agent 中心 |
| 人間判断 | 希少資源 | 希少資源 |
| 規範 | 書かれ、版管理される | 継承する |
| 自律 | 可逆性・期待浪費に応じて拡大 | 継承する |
| 品質 | 点ではなく分布として扱う | 継承する |
| 改訂 | 観測を根拠に規範を改訂する | 継承する |
| 自己権限 | 自らを縛る規則を自ら緩めない | 継承する |
| 基本構造 | 自律実行系 | 自律実行系の連邦 |

EAA の各ドメイン内部では AA Principles がそのまま適用される。

## 5. AA と EAA の違い

AA の中心問題:

> 一つの Agentic System を、どう速く、安全に、無駄なく自律させるか。

EAA の中心問題:

> 異なるドメイン、異なる技術、異なる Agent 基盤を持つ複数の自律系を、自治を壊さず企業全体としてどう協調させるか。

したがって、

```
AA  = 自律ループを成立させる
EAA = 自律ループ同士を接続する
```

と整理できる。

## 6. EAA の共通層

現時点では、異種 Agentic System が共通して参照すべき上位層として、少なくとも次の三つを置く。

### 6.1 Enterprise Ontology — 意味

全 Agent 基盤が参照できる企業レベルの意味体系を持つ。

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

既存の Ontology 論にある「分裂を保持する」という原則を、Enterprise の全 Agentic System 間へ拡張する。

### 6.2 Enterprise Constitution — 規範と権限

各サブシステムの内部自治を認めつつ、上位の価値、制約、権限境界を共有する。

各ドメインは上位規範に準拠し、自ドメインの下位規範を持つ。

これは AA の P2「開発は憲法の連鎖である」の Enterprise への拡張と考えられる。

### 6.3 Inter-system Protocol — 相互作用

異なる Agent 基盤同士が最低限交換できる共通形式を持つ。

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

重要なのは製品 API の統一ではなく、異種自律系が協調可能な接続契約を共有することである。

原則的には、

> Standardize the boundary, not the implementation.

と表現できる。

## 7. Operator

AA の内部では、設計者・実装者・テスター・レビュアーといった工程由来の人間ロールは大きく縮退する。

一方、EAA ではドメイン境界そのものは消えない。

そのため、各自律サブシステムに Operator を置く構造が考えられる。

Operator は通常のコードレビュー担当や工程管理者ではない。通常の設計・実装・検証ループを人間の承認に通すと、人間が再びボトルネックになる。

Operator が所有する候補は次のとおり。

- Domain Goal
- Authority Boundary
- Enterprise Ontology と Domain Reality の接続
- 他ドメインとの契約
- 例外判断
- 上位規範への改訂提起

したがって、

```
Operator ≈ Domain Boundary Owner
```

と考えられる。

過去に繰り返し行った Operator 判断は、可能ならルール化し Agent 側へ委任する。

```
Human decision
→ record
→ rule
→ agent autonomy
```

Operator の仕事には、自分の判断回数を減らすことも含まれる。

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

EAA ではむしろ、

```
Human Role = Autonomous Domain Boundary
```

へ移る。

人間は工程を担当するのではなく、自律系がどの目的と権限の中で存在するかを所有する。

## 9. 既存 Enterprise Agile との比較

既存 Enterprise Agile の中心問題は、主として複数の人間中心 Agile Team をどう整列・同期し、企業全体として価値を届けるかにある。

典型的には、

```
Team
→ Team of Teams / ART / Nexus
→ Portfolio / Solution
```

というスケール構造を取る。

EAA は基本粒子が異なる。

```
Agentic System
→ Federation of Agentic Systems
```

比較すると以下のようになる。

| 観点 | 既存 Enterprise Agile | EAA |
| --- | --- | --- |
| スケール単位 | 人間中心 Agile Team | 自律 Agentic System / Domain |
| 内部構造 | 共通 Framework / Operating Model を共有しやすい | 内部実装は異種でよい |
| 全体整合 | Backlog, Cadence, Event, Role | Ontology, Constitution, Protocol |
| 人間ロール | PO, SM, Architect, RTE 等 | Operator / Domain Boundary Owner |
| 工程 | 人間職能として残る | 高速 Agentic Loop へ縮退 |
| ドメイン差 | 共通プロセス内で調整 | 自治を前提に保持 |
| 意味整合 | 会話・Backlog・仕様で調整 | Enterprise Ontology を参照 |
| 人間介入 | 会議・レビュー・承認が通常経路に入りやすい | 例外・権限境界へ寄せる |

既存 Enterprise Agile と EAA は、どちらも

```
local autonomy + global alignment
```

という同じシステム問題を解いている。

ただし制約条件が異なる。

人間中心 Enterprise Agile では、通信、会議、認知、handoff、人数、同期コストが主要制約となる。

EAA では、確率的誤り、異種 Agent 基盤、context 差、意味差、token / compute 消費、権限、自律系間契約が主要制約となる。

同じシステム論から導出しても、制約が変わるため組織構造も変わる。

## 10. AI-Native Enterprise Agile との差

既存の Enterprise Agile Framework も AI 利用へ進化しており、「AI が実装し、人間が intent や strategy に寄る」といった方向は EAA 固有ではない。

したがって EAA の独自性を単に、

- AI を使う
- Agent に実装させる
- 人間を戦略へ移す

に置いてはならない。

現時点で EAA 固有の核になりうるのは、次の組み合わせである。

1. **基本粒子を人間 Team ではなく Agentic System とする**
2. **異種 Agentic System の連邦を前提とする**
3. **Enterprise Ontology を全 Agentic 基盤の共有意味層とする**
4. **内部 Operating Model を統一せず、境界契約を統治する**
5. **人間ロールを工程ではなく Domain Boundary / Authority の所有へ移す**
6. **人間の最終承認を通常経路の必須条件にせず、可逆性・期待浪費・権限境界から介入を決める**

## 11. 暫定的な核心命題

AA:

> 人間の制約から作られた開発構造を捨て、Agent の制約から Agile を再導出する。

EAA:

> AA によって成立した自律システムを企業規模へ拡張し、各ドメインの自治と独自性を失わせず、共通の意味・規範・境界によって協調させる。

短く表すなら、

> **AA はループを自律化する。EAA は自律したループ同士を接続する。**

EAA の設計思想としては、

> **意味と規範は共有する。実装は自治する。**

が現時点の有力な表現である。

より厳密には、

> **意味の違いまで共有し、内部実装は自治する。**

## 12. 未決事項

- EAA Principles を AA Principles の下位規範として独立させるか
- Enterprise Ontology の所有者と改訂手続き
- Operator の正式な責任範囲
- Domain Boundary の決め方
- Inter-system Protocol の最小構成
- 横断 mission の owner / coordinator を誰または何が担うか
- ドメイン間の期待浪費をどう測るか
- EAA 固有の観測指標
- Human escalation の条件
- AI-Native SAFe 等との厳密な先行研究比較


## 13. ケーススタディ: 10億円・1年の業務基盤刷新

ここでは EAA の人員モデルを具体化するため、次の仮想案件を置く。

- 期間: 12か月
- 予算: 10億円
- 現行: AWS 上のレガシーなマイクロサービス 20個
- 目的: 業務基盤を段階的に置き換える
- 追加目的: B2B インターフェースを現代化し、外部企業の Agent が利用できる Agent Interface を提供する
- 移行方針: 一括再構築ではなく Strangler 型で段階移行する
- 組織方針: 20サービスを20チームに分けず、業務ドメイン単位の AA 系へ再編する

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

各 Domain は一つの AA 系として扱う。旧マイクロサービスの個数は、新組織の個数を決めない。

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
                           Enterprise Operator
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

この案件では、Developer、Tester、QA、Reviewer、PMO を人数比例で配置しない。

それらは独立した恒久ロールではなく、各 AA 系の Agent が実行する機能になる。

人間を配置する根拠は、主に次のいずれかである。

1. Domain の現実と目的を所有する
2. 権限または不可逆な境界を所有する
3. Enterprise と Domain の意味を接続する
4. 旧基盤にしか存在しない暗黙知を提供する
5. 外部組織との契約・リリース境界を所有する

### 13.4 Core Member 一覧

リリースまでの Core Team を19名と仮置きする。

| ID | Role | 人数 | 主責務 |
| --- | --- | ---: | --- |
| E01 | Enterprise Operator | 1 | 全体目的、投資配分、Domain 境界、cross-domain mission、最終的な Enterprise authority |
| E02 | Enterprise Ontology Operator | 1 | Enterprise Ontology、意味の分裂、Domain 間 semantic mapping、ontology 改訂 |
| E03 | EAA Platform & Reliability Operator | 1 | Control Plane、AWS platform、observability、CI/CD、可用性・運用境界 |
| E04 | Security & Authority Operator | 1 | Identity、権限、policy、secret、外部 Agent の authority boundary、セキュリティ例外 |
| E05 | Data Migration & Reconciliation Operator | 1 | DMS/Glue、移行順序、差分照合、データ完全性、rollback 条件 |
| E06 | B2B Agent Interface Operator | 1 | Agent Gateway、capability 契約、Partner onboarding、外部 Agent との互換性 |
| E07 | Release & Cutover Operator | 1 | release criteria、cutover rehearsal、本番切替、rollback、旧基盤縮退 |
| D01 | Customer & Partner Domain Operator | 1 | 当該 Domain の目的、権限、境界、Agentic loop |
| D02 | Contract & Product Domain Operator | 1 | 同上 |
| D03 | Order & Workflow Domain Operator | 1 | 同上 |
| D04 | Billing & Payment Domain Operator | 1 | 同上 |
| D05 | Identity & Entitlement Domain Operator | 1 | 同上 |
| D06 | Integration & B2B Domain Operator | 1 | 同上。E06 と協調し内部実装を所有 |
| X01 | Customer & Partner Domain Expert | 1 | 現行業務、例外、業務上の正誤、ontology 訂正 |
| X02 | Contract & Product Domain Expert | 1 | 同上 |
| X03 | Order & Workflow Domain Expert | 1 | 同上 |
| X04 | Billing & Payment Domain Expert | 1 | 同上 |
| X05 | Identity & Entitlement Domain Expert | 1 | 同上 |
| X06 | Integration & Partner Domain Expert | 1 | 同上 |

Core Team:

```
Enterprise / Cross-domain Operators   7
Domain Operators                     6
Domain Experts                       6
--------------------------------------
Total                               19
```

Domain Operator は従来の PL / Architect / Lead Developer の単純な改名ではない。設計・実装・テストを自分で順番に処理する人でもない。その Domain の Agentic System が、自律的に設計・実装・検証・修正を回せる状態を作り、境界と例外を所有する。

Domain Expert は Agentic Agile Operator である必要はない。ただし Agentic System に現実を供給できることが必要である。業務知識を人間の会議の中だけに閉じ込めず、Ontology、Example、Rule、Acceptance Evidence へ変換する。

### 13.5 Temporary Member

旧基盤の暗黙知は、置き換え完了まで一時的に必要になる。

20サービスに1人ずつ保守担当を残すのではなく、依存関係を横断して理解している SME を4名置く。

| ID | Role | 人数 | 主責務 | 主な期間 |
| --- | --- | ---: | --- | --- |
| L01-L04 | Legacy SME | 4 | 旧20サービスの実挙動、batch、例外、hidden dependency、障害履歴の説明 | Month 1-9、以後縮退 |

ピーク時の人間人数は、

```
Core 19 + Legacy SME 4 = 23
```

を基準とする。

外部 Partner 側の担当者、法務、監査、経営承認者は必要に応じて参加するが、本プロジェクトの恒常的な実行チームには含めない。

### 13.6 各 Domain Operator が持つ Agent 機能

一人の Domain Operator の下に、一人の「AI開発者」を置くのではない。役割の異なる Agent 群を置く。

例:

```
Domain Operator
   |
   +-- planner / researcher
   +-- domain model / ontology agent
   +-- implementation agents
   +-- test / property-test agents
   +-- reviewer (different model lineage where needed)
   +-- migration adapter agent
   +-- observability / incident agent
   +-- documentation / evidence agent
```

Agent 数は固定しない。仕事量、期待浪費、検証コストに応じて増減させる。

人間人数と Agent 数を比例させない。

### 13.7 意図的に置かない専任ロール

本ケースでは、以下を独立した恒久ロールとして置かない。

| 従来ロール | EAA での扱い |
| --- | --- |
| Project Manager | Enterprise Operator と機械的 mission tracking に分解 |
| PMO | Evidence / telemetry / Agent による自動観測へ移す |
| Solution Architect | Enterprise / Domain Operator の境界判断と Agent 設計へ分解 |
| Lead Developer | Domain Operator + implementation agents へ分解 |
| Developer | implementation agent の機能 |
| Tester | test agent / executable specification の機能 |
| QA Reviewer | independent judge / evidence rule の機能 |
| Release Manager | Release & Cutover Operator に限定して残す |
| Cloud Platform Team | Platform Operator + platform agents に縮退 |
| API Team | Integration Domain と各 Domain の boundary contract に分解 |

「人間を減らすこと」が目的ではない。工程ごとの人間 handoff を残す合理性がないため、結果としてこれらの恒久ロールが消える。

### 13.8 リリースまでの人員変化

同じ19名を一年間同じ仕事に固定しない。

| 期間 | 主に重くなる人間 | 目的 |
| --- | --- | --- |
| Month 1-2 | E01-E06, D01-D06, X01-X06, Legacy SME | Domain 境界、Ontology v0、最初の vertical mission |
| Month 3-5 | Domain Operators, Platform, Security, Migration | 新旧共存、最初の Domain cut、Agent Interface v0 |
| Month 6-8 | Domain Operators, Migration, B2B Operator | 大量置換、Partner pilot、reconciliation |
| Month 9-10 | Migration, Release, Security, Domain Operators | shadow run、cutover rehearsal、rollback 実証 |
| Month 11-12 | Release Operator, Enterprise Operator, Domain Operators | 段階 release、旧系 write 停止、縮退 |

Legacy SME は Month 1 から知識を Ontology、Rule、Test、Evidence に移し、必要人数を継続的に減らす。最後まで「人間だけが知っている仕様」が残った場合、それ自体を移行未完了として扱う。

### 13.9 Release 条件

リリース判断は「開発完了率100%」では行わない。

最低限、次を満たす。

1. 主要業務 mission が新系を通って end-to-end で完了する
2. Domain 間 contract が versioned で機械参照可能である
3. Enterprise Ontology から主要 cross-domain 語彙を解釈できる
4. 新旧 dual-run の reconciliation が許容閾値内である
5. rollback が rehearsal 済みである
6. B2B Agent Interface が権限境界を越えずに task を完了できる
7. 外部 Agent の要求が deterministic business operation へ落ち、証拠を返せる
8. Operator escalation が正常系の throughput bottleneck になっていない
9. 重大な判断について provenance / evidence が追跡できる
10. 旧系固有知識が Legacy SME の頭の中だけに残っていない

### 13.10 この人数モデルが示すこと

従来型の10億円案件では、20マイクロサービスに対して複数の開発・テスト・管理チームを置き、数十人から100人超の体制を組むことがありうる。

EAA では基本粒子が「人間の開発チーム」ではないため、人数はサービス数に比例しない。

本ケースでは、

```
20 legacy microservices
        ↓
6 autonomous domains
        ↓
6 Domain Operators
+ 6 Domain Experts
+ 7 enterprise / boundary operators
+ 4 temporary legacy SMEs
```

とする。

すなわち、人間の主な仕事はコードを書くことではなく、

```
Reality
→ Ontology / Goal / Rule / Boundary
→ Agentic System
→ Evidence
→ Revision
```

を成立させることである。

この世界で不足するのは「実装者の人数」ではない。

不足しうるのは、Domain の現実を理解し、その現実を Agent が自律的に扱える規範・意味・境界へ変換できる Operator である。
