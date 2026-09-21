# EAA Role Model v0.1

2026-09-21 · Kazuhiro

> Status: draft / reference model
>
> EAA における最小の人間ロールモデルを具体化する Reference Model。
> Operator / Enabler の基本責務は EAA Core Vocabulary に従う。
> 人数、配置、Council、scope variation、既存ロールからの移行例は non-normative であり、案件ごとに調整してよい。

## 1. 三つの基本主体

```
Operator = Govern
Enabler  = Change
Agent    = Execute
```

> **Operator owns what is.**
>
> **Enabler owns what should change.**
>
> **Agent executes the change.**

ここで Agent は Agentic Domain における代表的 executor を表す。
非 Agentic Domain では、Executor は人間チーム、Vendor process、Package implementation 等の Local Delivery System でもよい。

日本語では、

> **Operator は現在の系を成立させる。**
>
> **Enabler は系を次の状態へ動かす。**
>
> **Executor はその変化を実行する。**

と表現する。

---

## 2. Operator

Operator は bounded scope の統治と継続的成立条件を所有する。

主な責務:

- Authority
- Constraint
- Policy
- Risk / Exception
- Domain Boundary
- Contract
- Evidence requirement
- Escalation
- scope の健全性

Operator は「最も多くコードを書く人」ではない。

```
Leader Output
!= Code

Leader Output
= Better Governed Autonomous System
```

### Operator は安定した責任境界に属する

```
Enterprise Operator
Area Operator
Domain Operator
```

は別職種ではなく、すべて `Operator(scope)` である。

```
N(Operator) ∝ N(stable decision scopes)
```

Domain を基本単位にするなら、

```
N(Operator) ∝ N(Domain)
```

と考えられる。

---

## 3. Enabler

Enabler は Change を所有する。

Change は障害改善だけではない。

- 新しい顧客価値
- 新機能
- Legacy 撤去
- Agent 自律範囲の拡張
- Human Gate の Rule 化
- Boundary Wait の削減
- 新しい業務能力

など、現在状態から望ましい状態へ移すものすべてを含む。

EAA では micro task ではなく Mission を主語にする。

```
Mission
= a change or problem worth solving
```

したがって、

> **Enabler は問題ではなく Active Change に属する。**

```
N(Enabler) ∝ Active Change Demand
```

であり、

```
N(Enabler) != N(Operator)
```

でよい。

---

## 4. Stable Plane と Change Plane

```
Operator Plane
= Stable Structure / Governance

Enabler Plane
= Change / Mission / Opportunity

Agent Plane
= Execution
```

概念図:

```
                 Enterprise
        +-------------------------+
        |                         |
 Enterprise Operator      Enterprise Enabler
        |                         |
   stable governance        portfolio / change
        |                         |
   +----+----+              +-----+------+
   |         |              |            |
Domain O   Domain O      Mission E     Mission E
   |         |              |            |
   +---------+------ Agents +------------+
```

> **Operator は構造に属し、Enabler は変化に属する。**

---

## 5. Operator と Enabler

一つの Change に対して責務を分ける。

```
Enabler
- 何を変えるべきか
- 何を達成したいか
- Priority / Outcome

Operator
- どこまで任せてよいか
- 何を守るべきか
- Authority / Constraint / Evidence
```

Enabler は Operator の補佐ではなく、Operator も Enabler の単純な承認者ではない。
異なる責務を持つ peer とする。

---

## 6. Cross-domain Mission

重要な Change は複数 Domain を横断しうる。

```
             Mission Enabler
                  |
       +----------+----------+
       |          |          |
 Contract O   Billing O   Customer O
       |          |          |
       +--------- Agents -----+
```

Enabler が Mission Outcome を所有し、Operator は各 Domain の Authority / Boundary / Contract を所有する。

---

## 7. Enterprise Operator

Enterprise Operator はスーパーPMではない。

扱うのは Enterprise scope でしか解けない統治判断である。

- Enterprise-wide Constraint
- Enterprise Authority
- Domain boundary arbitration
- cross-domain conflict
- major risk / exception
- Profile activation
- Enterprise-level Contract

通常の Domain 判断や Mission 進捗を抱え込まない。

### 過負荷は診断信号

```
Enterprise O overloaded
        |
        +-- local decision
        |      -> delegate Authority
        |
        +-- repeated conflict
        |      -> Enabler に構造改善を渡す
        |
        +-- too many scopes
        |      -> split scope
        |
        +-- truly enterprise-wide
               -> Enterprise Operator
```

成熟するほど `Enterprise Operator Load` は下がるべきである。

---

## 8. Enterprise Enabler

Enterprise Enabler は Enterprise の Change / Value / Portfolio を所有する。

従来の Product Owner に最も近い EAA ロールである。

```
Product Owner
「次に何を作るべきか」

Enterprise Enabler
「Enterprise は次に何を変えるべきか」
```

主な責務:

- Enterprise Goal を Change へ落とす
- Opportunity / Problem を発見する
- Mission を形成する
- Priority を決める
- 必要な Domain を招集する
- Outcome を Evidence で確認する

概念的には、

```
Enterprise Enabler
≈ Product Owner
+ Portfolio Change Leadership
```

と捉えられる。

---

## 9. 顧客との接点

顧客接点も Governance と Change に分ける。

```
Customer Overall Lead
        |
        +-- Goal / Priority / Outcome
        |          ↕
        |   Enterprise Enabler
        |
        +-- Authority / Constraint / Risk
                   ↕
            Enterprise Operator
```

各 Domain では、

```
Customer Domain Owner
        ↕
   Domain Operator
```

を基本とする。

Active Mission では Enabler が Domain Owner / SME と直接対話してよい。

PM を介した伝言ゲームを作らず、決定事項は Mission / Authority / Contract として durable source に戻す。

---

## 10. 既存ロールからの移行

| Existing role | 主な移行先 |
| --- | --- |
| Product Owner / Product Manager | Enabler / Enterprise Enabler |
| Scrum Master | Enabler capability |
| Project Manager | Operator / Enabler |
| PMO | Enterprise Operator / Enabler |
| Architect | Operator |
| Tech Lead | Domain Operator |
| QA / Test Lead | Operator / Enabler |
| SRE | Operator / Enabler |
| Security | Operator |
| BA / 業務SE | Enabler / Domain Expert |

EAA Core は PO / Scrum Master を必須としない。
Scrum を Local Delivery Model として採用する Domain では残してよい。

PO の Goal / Value / Priority は Enabler へ、
SM の Flow / impediment / learning / organizational change は Enabler capability へ移りうる。

---

## 11. 横断構造

必要なら二つの council / community を持てる。

### Operator Council

- Authority conflict
- Domain Boundary
- Enterprise Constraint
- shared Contract
- major risk / exception
- Profile activation

### Enabler Council

- Change portfolio
- cross-domain Mission
- repeated blocker
- shared enabling capability
- Rule / Evidence 化
- Agent Literacy
- local learning の enterprise 化

どちらも定例進捗会議である必要はない。

---

## 12. 人数原則

EAA は Operator と Enabler の 1:1 配置を要求しない。

```
N(Operator) ∝ Stable Decision Scopes
N(Enabler)  ∝ Active Change Demand
```

より簡単には、

> **Operator は Domain の数に比例する。**
>
> **Enabler は解きたい Change の量に比例する。**

一つの Enabler が複数 Operator と横断 Mission を進めてもよい。
一人の Operator が複数 Enabler と異なる Change を扱ってもよい。

---

## 13. 成熟

良い Operator は自分に判断を集中させない。

```
Operator judgment
→ Rule / Constitution / Contract
→ machine-readable control
→ Agent autonomy
```

良い Enabler は自分に Change を永久依存させない。

```
Change
→ capability / rule / platform / learning
→ stable operation
→ Enabler released
```

理想的には、

```
Repeated Human Judgment ↓
Operator Dependency     ↓
Manual Coordination     ↓

Safe Autonomy           ↑
Rule Coverage           ↑
Evidence Quality        ↑
Change Throughput       ↑
```

する。

---

## 14. 最小ロールモデル

EAA のロール体系を必要以上に増やさない。

```
Operator
Enabler
Agent
```

専門性は新しい恒久ロール名ではなく、scope、Profile、Capability で表現する。

> **Core を小さく保つのと同じように、Role Model も小さく保つ。**

要約すると、

> **Operator は構造を成立させる。Enabler は構造を変える。Agent は実行する。**
