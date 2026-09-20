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
