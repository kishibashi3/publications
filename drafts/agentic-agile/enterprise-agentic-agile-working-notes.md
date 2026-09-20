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


## 14. ケーススタディ運営モデル: 12か月の実行スケジュールとイベント

本節では、13章の人員モデルを実際に一年間動かした場合の運営モデルを仮置きする。

これは EAA の規範そのものではない。EAA から導出される一つの実装例である。

### 14.1 基本構造

人間を最初に固定チームへ割り当て、そのチームを一年間維持する方式を取らない。

組織単位は次の4種類に分ける。

| Unit | 存続期間 | 目的 |
| --- | --- | --- |
| Enterprise Control Cell | 全期間 | Enterprise Ontology、Constitution、Authority、Platform、Migration、B2B、Release の統治 |
| Domain Cell | 原則全期間 | 各 Domain の AA 系を自律運転する |
| Mission Cell | 数日〜数か月 | 複数 Domain をまたぐ特定 Outcome を達成する |
| Cutover Cell | 終盤・高リスク時のみ | rehearsal、本番切替、rollback 判断を同期的に行う |

構造は次のようになる。

```
Enterprise Control Cell
        |
        +-- Domain Cell A
        +-- Domain Cell B
        +-- Domain Cell C
        +-- Domain Cell D
        +-- Domain Cell E
        +-- Domain Cell F
        |
        +-- Mission Cell X  (temporary)
        +-- Mission Cell Y  (temporary)
        |
        +-- Cutover Cell    (temporary / high-risk)
```

Mission Cell は常設チームではない。成果が出たら解散する。

### 14.2 Scrum の位置づけ

プロジェクト全体には Scrum を置かない。

理由は、Sprint Planning、Daily Scrum、Sprint Review が主に解いてきた問題の多くが、人間中心の実行・同期・状態共有コストに由来するためである。

EAA では、

```
Observation
→ Agent replanning
→ Execution
→ Evidence
→ Replanning
```

を連続的に回す。

したがって、

- 全 Domain 共通の Sprint
- 全 Domain 共通の Daily Scrum
- 全社的な Scrum of Scrums
- 2週間ごとの一斉 Planning

は標準イベントとしない。

ただし Scrum、Kanban、定例会議を禁止するわけではない。特定の人間集団にとって有効なら、局所的 Application として使ってよい。

```
EAA Core     ≠ Scrum
Scrum        = optional local coordination tool
```

### 14.3 Daily Scrum の代替: Daily Evidence

人間が毎朝集まり、昨日何をしたか、今日何をするか、何に困っているかを口頭共有する必要はない。

Agentic System はそれらの状態を記録できる。

各 Domain Operator には、少なくとも毎日一回、次の evidence digest を自動生成する。

- 完了した mission / outcome
- production / staging change
- failed hypothesis
- rollback
- unresolved boundary
- ontology mismatch
- human escalation
- authority violation attempt
- expected waste / token・compute 消費
- verification failure
- external dependency

Operator はこれを確認し、異常がなければ何もしない。

したがって、

> Daily meeting ではなく Daily Evidence

を標準とする。

Daily Evidence の目的は進捗報告ではなく、人間判断を投入すべき例外を抽出することである。

### 14.4 人間イベント

平常時の人間イベントは最小限とする。

| Event | 頻度 | 参加者 | 目的 |
| --- | --- | --- | --- |
| Enterprise Mission Review | 週1回・45分目安 | E01 + 必要な Operator | 停止中 mission、cross-domain dependency、投資配分のみを見る |
| Boundary Review | event-driven、初期は週2回程度 | 関係 Domain Operator | Domain 間 contract / responsibility の衝突を解く |
| Ontology Review | event-driven | E02 + 関係 Expert / Operator | semantic mismatch、意味分裂、新概念を扱う |
| Authority Review | event-driven | E04 + 関係 Operator | 権限拡大、不可逆操作、新しい外部 Agent authority を扱う |
| Domain Reality Session | 必要時のみ | Domain Operator + Domain Expert + SME | Agent が現実を解釈できない場所を rule / example / ontology に変換する |
| Norm Retrospective | 月1回・60分目安 | Enterprise Operators | AA / EAA / project constitution が障害になった事例から規範を改訂する |
| Cutover War Room | rehearsal / cutover 時のみ | Cutover Cell | 時間制約・不可逆性が高い操作を同期的に扱う |

会議は情報を配るためには開かない。

情報共有だけなら Evidence Store、Mission、Ontology、telemetry で行う。

人間イベントを開く条件は、原則として次のいずれかである。

1. 複数の正当な選択肢があり、価値判断が必要
2. Domain boundary を変える必要がある
3. Authority を拡大する必要がある
4. 不可逆または高 blast-radius な操作を行う
5. 同じ例外が繰り返され、規範自体を変える必要がある

### 14.5 Day 0: Project Cutover / Kickoff

初日は全 Core Member と Legacy SME を集める。

ただし WBS を詳細化する場にはしない。

決めるのは以下に限定する。

- Business Goal
- 絶対に壊してはいけない制約
- 仮の Domain Boundary
- Human Authority
- 最初に扱う Enterprise Ontology の範囲
- 最初の Vertical Mission
- Release / rollback の最低原則

最初の Vertical Mission は、複数 Domain を横断する難しい業務を選ぶ。

例:

> 外部企業 Agent が契約プラン変更を要求し、Customer 確認、Contract 更新、Entitlement 更新、Billing 再計算まで行い、Evidence を返す。

これは Integration、Customer、Contract、Identity、Billing の5 Domainを横断する。

最初から複雑な mission を選ぶ理由は、EAA の成立性そのものを早期に検証するためである。

### 14.6 Week 1-2: Boundary / Ontology Discovery

最初から6 Domainすべてを同じ速度で立ち上げない。

最初の Vertical Mission に必要な Domain Cell を優先起動する。

例:

- Enterprise Control Cell
- Integration & B2B
- Customer & Partner
- Contract & Product
- Identity & Entitlement
- Billing & Payment

Order & Workflow は最初の Mission に不要なら本格起動を遅らせてよい。

各 Cell では、人間が要件定義書を書くのではなく、Agent に以下を解析させる。

- 旧ソースコード
- DB schema
- API definition
- batch
- log
- incident history
- operation manual
- business document
- existing test
- external interface

Agent はそこから、

```
Observed reality
→ ontology candidate
→ rule candidate
→ hidden dependency
→ domain boundary hypothesis
→ acceptance evidence
```

を生成する。

Domain Expert / Legacy SME は主に訂正を行う。

Operator は、

- Domain 内で自律判断してよいもの
- 他 Domain との contract にするもの
- Human Authority を要求するもの

を分類する。

#### Milestone 0 — Week 2: Boundary v0

最低条件:

- 最初の mission に必要な Domain が定義されている
-主要 cross-domain 語彙が Ontology v0 に存在する
-初期 authority boundary が書かれている
-旧系依存が観測可能になっている

### 14.7 Week 3-6: First Autonomous Vertical Mission

目的は新システムを完成させることではない。

EAA の制御構造が本当に動くことを確認する。

初期状態では背後に Legacy API を使ってもよい。

```
Partner Agent
   ↓
Agent Gateway
   ↓
Customer
   ↓
Contract
   ↓
Identity / Entitlement
   ↓
Billing simulation
   ↓
Legacy adapter
   ↓
Evidence
```

ここで確認するのは、

- Agentic System 間で mission が渡る
- Ontology reference が共有される
- Domain contract を機械参照できる
- Human PM を経由せず進行する
- 必要な場所だけ escalation する
- Evidence が残る

ことである。

#### Milestone 1 — Week 6: First Autonomous Vertical Mission

条件:

```
external agent request
→ 5 domains
→ legacy or new deterministic operation
→ result
→ evidence
```

が end-to-end で成立する。

この milestone が成立しない場合、全 Domain の大量実装を始めない。

まず EAA Control Plane、Ontology、Authority、Inter-system Protocol を修正する。

### 14.8 Month 2-3: Full Domain Activation

最初の mission が通った後、6 Domain Cell をすべて本格起動する。

各 Domain は独立して AA loop を回す。

```
Observation
→ hypothesis
→ implementation
→ test
→ independent verification when required
→ deploy
→ observe
→ revise
```

固定 Sprint は要求しない。

Agent が3時間で作業を終えれば、次の work item を開始する。

Planning の cadence は人間のカレンダーではなく、観測と evidence によって決まる。

### 14.9 Backlog の扱い

Backlog は存在してよいが、人間が細かい Story を大量に作成する方式を前提としない。

Domain Backlog が持つ主なものは、

- 未達成 Outcome
- Mission
- Constraint
- Risk
- unresolved semantic issue
- unresolved boundary
- Acceptance Evidence

である。

例:

```
Outcome:
  契約変更を即時反映できる

Constraints:
  過去契約を書き換えない
  請求確定後に price を変更しない

Acceptance Evidence:
  legacy 100万件との比較差異 < threshold
```

作業分解は Agentic System が行う。

### 14.10 Month 3: First Production Slice

最初の Domain を本番へ出す。

全面切替を必須としない。

例えば、

```
read  → new
write → legacy + new
```

または一部 customer segment のみ new system を使う。

#### Milestone 2 — Month 3: First Production Domain

条件:

- 実ユーザーまたは実トラフィックが通る
- observability がある
- rollback 可能
- Legacy reconciliation 済み
-正常系では Operator 承認を待たない

### 14.11 Month 4-6: Parallel Replacement

この期間から6 Domain が並列に旧基盤を置き換える。

人間を人数比例で増員せず、Agent 実行量を増減させる。

複数 Domain をまたぐ Outcome が生じたら Temporary Mission Cell を作る。

例:

> 解約時、未払い残高が存在する場合は返金ではなく相殺する。

必要な Domain:

- Contract
- Billing
- Order

Mission Cell は、この3 Domain Operator と各 Agentic System から必要な Agent を束ねる。

Mission 達成後に解散する。

Mission Cell のために恒久的な cross-functional human team を作らない。

### 14.12 Month 5: B2B Agent Interface v1

外部 Partner 1社以上を pilot として接続する。

少なくとも以下のいずれかを実取引として通す。

- 見積
- 注文
- 契約変更
- 請求照会

#### Milestone 3 — Month 5: External Agent Transaction

外部企業の Agent が、

```
intent
→ capability discovery
→ authorized task
→ deterministic business operation
→ result
→ evidence
```

を完了する。

### 14.13 Month 6: Midpoint Evidence Review

従来型の「進捗率50%」は主要評価にしない。

見るのは少なくとも以下。

- legacy dependency count
- autonomous mission completion
- operator escalation / mission
- semantic mismatch
- rollback rate
- expected waste
- production incident
- reconciliation error
- human-only knowledge count
- partner agent task completion

中心となる問いは、

> 予定作業の何%を終えたか

ではなく、

> 旧基盤なしで成立する業務能力がどれだけ増えたか

である。

### 14.14 Month 7-8: Legacy Write Reduction

新規 write を順次新系へ移す。

Legacy SME の知識は Ontology、Rule、Test、Evidence に移す。

同じ SME に繰り返し質問が発生する場合、知識移行が未完了とみなす。

#### Milestone 4 — Month 8: Legacy Write Majority Eliminated

目安として、新規 write の80-90%を新系へ移行する。

数値自体は案件ごとに変更してよい。

同時に Legacy SME の必要人数が減っていることを確認する。

### 14.15 Month 9-10: Shadow Production / Reconciliation

主要 mission について、新旧の実行結果を比較する。

例:

- Billing: 大量請求結果
- Order: 状態遷移
- Contract: 有効期間と価格
- Identity: entitlement
- Customer: master mapping

Agent が継続的に照合し、人間は差異のみを見る。

専任 QA Team は原則作らない。

この期間に Cutover Cell を一時的に形成する。

参加者例:

- Release & Cutover Operator
- Migration Operator
- Platform Operator
- Security Operator
- 6 Domain Operators
- 必要な Legacy SME

#### Cutover Rehearsal

Month 9 と Month 10 に最低2回を仮置きする。

この期間は同期 communication の価値が高い。

不可逆性、時間制約、blast radius が高いため、War Room を使用してよい。

#### Milestone 5 — Month 10: Cutover Ready

条件:

- major mission の shadow reconciliation が閾値内
- rollback rehearsal 成功
- authority / credential rotation が試験済み
- partner agent smoke test 成功
- production telemetry / evidence path 確認済み
- unresolved human-only knowledge が許容範囲内

### 14.16 Month 11: Release Candidate Mode

通常の開発を一律凍結するのではなく、authority profile を厳しくする。

通常時:

```
Domain Agent
→ automated verification
→ production
```

Release Candidate Mode:

```
Domain Agent
→ release candidate
→ automated evidence
→ elevated threshold
→ Release Operator / policy gate when required
→ production
```

リスクが上がるため、一時的に Human Gate を増やしてよい。

これは通常運用へ人間 Gate を戻すことではない。

### 14.17 Month 12: Final Cutover

Final Cutover では、恒久的な分散自治より、一時的な command structure を優先してよい。

Cutover Commander は E07 Release & Cutover Operator とする。

例:

| 時刻 | Event |
| --- | --- |
| 20:00 | Legacy write stop |
| 20:15 | final replication |
| 21:00 | reconciliation |
| 22:00 | new write enable |
| 23:00 | synthetic mission |
| 00:00 | B2B Agent smoke test |
| 01:00 | business reconciliation |
| 02:00 | GO / rollback boundary |
| 翌朝 | full traffic / normal authority restore |

Cutover 中は必要な Operator を同時接続してよい。

平時に非同期であることを、非常時にも強制しない。

### 14.18 12か月の全体像

| 時期 | 主な Unit | 主な活動 | Milestone |
| --- | --- | --- | --- |
| Day 0 | Enterprise Control Cell | Goal / Boundary / Authority / First Mission | Kickoff |
| Week 1-2 | 必要 Domain Cells | Ontology / Legacy discovery | M0 Boundary v0 |
| Week 3-6 | First Mission Cell | Cross-domain E2E | M1 First Autonomous Vertical Mission |
| Month 2-3 | 6 Domain Cells | Continuous AA | M2 First Production Domain |
| Month 4-5 | Domain + Mission Cells | Parallel replacement / B2B pilot | M3 External Agent Transaction |
| Month 6 | Enterprise Control Cell | Evidence-based midpoint review | Midpoint |
| Month 7-8 | Domain Cells | Legacy write reduction | M4 Legacy Write Majority Eliminated |
| Month 9-10 | Domain + Cutover Cell | Shadow / reconciliation / rehearsal | M5 Cutover Ready |
| Month 11 | Release mode | Authority tightening / RC | Release Candidate |
| Month 12 | Cutover Cell | Final transition | M6 Release |

### 14.19 Event-driven Escalation

EAA の運営では、人間イベントを cadence だけで発火させない。

以下のような machine-observable event を human escalation の契機とする。

```
semantic mismatch
boundary violation
authority expansion request
expected waste threshold exceeded
repeated rollback
repeated verification disagreement
cross-domain contract incompatibility
irreversible operation
production blast-radius threshold exceeded
legacy knowledge dependency detected
```

したがって、会議の量は work volume に比例しない。

理想的には、Agentic System が成熟するほど人間イベントは減る。

### 14.20 この運営モデルが示すこと

従来の大規模開発では、時間を同期することで人間を同期していた。

例:

```
Sprint
Daily
Planning
Review
Release Train
```

EAA では、時間ではなく意味、権限、Mission、Evidence を同期する。

```
Ontology
Constitution
Mission
Contract
Evidence
```

そのため、EAA の標準的な運営形は、

> **Persistent Domain Cells + Temporary Mission Cells + Event-driven Governance**

と表現できる。

平常時の人間同期は、概ね次へ圧縮される。

```
Weekly Mission Review
+ Event-driven Boundary / Ontology / Authority Decision
+ Monthly Norm Retrospective
```

そして Daily Scrum の代わりに、

> **Daily Evidence**

を置く。

人間が毎日知るべきなのは Agent が何をしたかの全量ではない。

人間判断が必要な場所、自律が停止した場所、境界が破れた場所だけである。
