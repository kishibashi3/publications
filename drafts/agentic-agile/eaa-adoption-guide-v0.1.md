# EAA Adoption Guide v0.1

2026-09-21 · Kazuhiro

> Status: draft / non-normative
>
> 本文書は Enterprise Agentic Agile (EAA) を既存 Enterprise へ導入する際の、組織・役割・受容性に関する Reference Guide である。
> EAA Core の規範ではなく、Profile でもない。
>
> EAA の技術的成立性だけでなく、既存組織がその透明性、権限構造、役割変化を受容できるかを扱う。

## 1. 最初の最大リスク

EAA 導入の最初の最大リスクは、Agent の性能不足とは限らない。

むしろ、既存の利害関係者が EAA を、

- 自分の仕事を奪うもの
- 自分を監視するもの
- 既存の権限を壊すもの
- 責任だけ増やすもの
- 過去のやり方を否定するもの

と認識することである。

概念的には、

```
Success
≈ Technical Viability
× Organizational Acceptance
```

と考える。

Technical Viability が高くても Organizational Acceptance が 0 に近ければ、Enterprise 導入は成立しない。

> **EAA 導入の最初の関門は、抵抗する人を排除することではなく、受益者へ変換することである。**

---

## 2. Opposition を Beneficiary へ変換する

EAA は、既存ロールを単純に廃止することを目的としない。

Agent によって価値が下がる活動を縮退させ、残る専門知識と責任を、より上位の判断・規範・境界へ移す。

```
Current Role
→ Threatened Activity
→ New Ownership
→ Organizational Capability
```

目標は、

```
Opponent
→ Participant
→ Beneficiary
→ Co-owner
```

である。

---

## 3. Role Transition

### PM / PMO

失われやすい活動:

- 進捗収集
- status meeting
- 手作業の報告書
- task level coordination
- 情報の中継

EAA での新しい所有候補:

- Portfolio / Investment
- Mission flow
- Evidence quality
- decision latency
- cross-domain blockage
- Commercial / Supplier boundary
- Transparency interpretation

```
PMO
from: progress collection
to: evidence-based enterprise governance
```

### QA / Test Management

失われやすい活動:

- 全変更の人手レビュー
- 最終工程での集中テスト
- 人間 Gate の常設

新しい所有候補:

- Assurance rule
- independent verification
- Evidence design
- risk-based verification
- release confidence
- quality provenance

```
QA
from: inspect every artifact
to: design the system that proves quality
```

### Architect

失われやすい活動:

- 全設計の中央レビュー
- 詳細設計の逐次承認
- implementation standardization

新しい所有候補:

- Domain Boundary
- Ontology
- Contract
- Capability boundary
- Enterprise Constraint
- architectural exception

```
Architect
from: central design approver
to: boundary and semantic architect
```

### SIer / Supplier

失われやすい活動:

- 内部工程のブラックボックス化
- 人月と進捗率だけによる説明
- downstream での責任吸収

新しい利益:

- Supplier Mission / Contract の明確化
- Acceptance Evidence
- customer wait の可視化
- change provenance
- Rework cause の帰属
- 不当に負わされる責任からの防御

### Customer / Business Owner

失われやすい活動:

- 要求を曖昧なまま丸投げする
- 判断を会議の空気に埋める
- 例外判断を downstream へ委ねる

新しい責任:

- Goal
- Boundary
- Authority
- Exception
- investment priority

ただし、EAA は顧客にすべての技術判断を要求しない。

Agent / Operator は技術的な問いを、顧客が判断可能な Business Decision へ翻訳する。

---

## 4. Transparency は監視ではなく防御である

EAA の Transparency は、強い抵抗を生みうる。

Mission / Evidence / Cost / Wait / Rework の provenance が可視化されると、それまで人間の解釈や報告の中に存在した曖昧さが減るためである。

誤った導入ナラティブ:

> 誰が遅らせたか、誰が悪かったかを見えるようにする。

望ましいナラティブ:

> 何が起きたかを正しく帰属し、不当に責任を負わされる人を守る。

```
Transparency
!= Surveillance

Transparency
= Correct Attribution
+ Protection from Misattribution
```

> **Transparency is a shield, not a surveillance system.**

例:

```
Delay 21 days
├─ Customer decision wait  11 days
├─ External supplier wait   6 days
└─ Domain execution         4 days
```

または、

```
Rework ¥12M
├─ Requirement change       ¥6M
├─ Legacy discovery         ¥3M
├─ Supplier defect          ¥2M
└─ Experiment / learning    ¥1M
```

この情報は、現場を処罰するためではなく、次の判断を改善し、責任を正しく帰属するために使う。

---

## 5. Transparency の導入原則

Transparency は一度に最大化しない。

透明性そのものが組織の blast radius を持つ。

初期には、

1. FACT と INTERPRETATION を分ける
2. 個人ランキングを作らない
3. Mission / Domain / causal source を主単位にする
4. 数値から原 Evidence へ遡れるようにする
5. punitive use を先に禁止する
6. 誤帰属を訂正できる経路を持つ

ことが望ましい。

例:

```
FACT
Boundary Wait = 312h

INTERPRETATION
Billing policy decision が主因と推定

DECISION
policy authority を Domain Operator へ移譲する
```

Transparency Report は評価票ではなく、Enterprise system の observation interface として扱う。

---

## 6. Operator は英雄ではなく圧縮器である

EAA 初期には強い Operator が必要になりやすい。

しかし、

> 超優秀な Operator が永続的にすべてを判断する

状態は成功ではない。

EAA の成熟は、Operator の判断を規範へ変換し、Operator dependence を減らす方向へ進むべきである。

```
Operator Judgment
→ Recorded Decision
→ Rule / Constitution / Contract
→ Machine-readable Control
→ Future Autonomy
```

したがって、

```
Operator Dependency(t) ↓
```

を成熟指標の一つとして扱える。

Operator の価値は、判断件数の多さではなく、

- ambiguity を business decision へ翻訳する
- exception を分類する
- repeated decision を Rule 化する
- Domain が自律できる境界を作る

ことにある。

> **優秀な Operator を作るだけでなく、その判断を組織能力へ吸収する。**

---

## 7. EAA 導入は革命ではなく包含から始める

EAA は既存 Delivery Model を初日から破壊しない。

```
Existing Organization
→ connect with EAA Core
→ retain Local Delivery Models
→ observe Evidence
→ add Profiles where necessary
→ remove only constraints proven unnecessary
```

Scrum、SAFe ART、Predictive、Vendor process、Package implementation は Local Delivery Model として残せる。

これにより、導入初期のメッセージを、

> 今の仕事を全部やめる

ではなく、

> 今の専門性を Agent 時代にも残る形へ変換する

へ変えられる。

EAA の変化は、置換よりも gradual substitution を基本とする。

---

## 8. Coalition を作る

Enterprise 導入は Architecture Decision だけでは成立しない。

EAA から異なる利益を得る coalition を作る。

例:

| Stakeholder | EAA から得られる利益 |
| --- | --- |
| Executive | 投資と Outcome の因果を追える |
| Business | 判断待ち、責任境界、例外が明確になる |
| PMO | 手作業報告から Evidence-based governance へ移れる |
| SIer | 顧客変更や外部待ちを客観的に立証できる |
| QA | 品質 Gate ではなく Assurance system を所有できる |
| Architect | 中央レビューから Ontology / Contract へ移れる |
| Developer | 理不尽な手戻り原因を可視化できる |
| Security / Compliance | Policy を machine-readable control に変換できる |

全員に同じ理由で EAA を支持してもらう必要はない。

> **同じ EAA を、それぞれ異なる利益から支持できればよい。**

---

## 9. 最初の6週間で観測する組織リスク

First Vertical Mission では技術だけでなく、次を観測する。

- 誰が EAA を自分への脅威と感じたか
- どの役割で responsibility ambiguity が増えたか
- Transparency Report に対する拒否反応
- Evidence の事実認定を巡る争い
- Operator への集中
- Human decision latency
- customer decision wait
- supplier boundary conflict
- 既存会議を止められない理由
- Rule 化できず人間判断へ戻る例外
- 既存 incentive と EAA の衝突

技術的に Mission が完了しても、これらが解決不能なら本番 scale-up の重大リスクとみなす。

---

## 10. Adoption Metrics

導入の成熟を、コード生成量だけで評価しない。

候補:

| Metric | 観測したいもの |
| --- | --- |
| Operator Escalation / Mission | 人間判断への依存 |
| Decision Latency | 顧客・Operator 判断速度 |
| Boundary Wait | Domain / Supplier 間待ち |
| Human Touch Time | 人間作業量 |
| Rule Conversion Rate | repeated judgment の規範化率 |
| Evidence Dispute Rate | Evidence の解釈争い |
| Transparency Acceptance | Report が意思決定に利用された割合 |
| Manual Status Work | 手作業報告の残量 |
| Responsibility Reassignment | 誤帰属が Evidence により修正された件数 |
| Operator Dependency | 特定個人への判断集中 |

定量化が難しいものは、PoC では interview / retrospective Evidence として残してよい。

---

## 11. PoC は Socio-technical Stress Test である

3か月 PoC の目的を、

> Agent がコードを書けるか

に置かない。

実際に検証すべきものは、

```
Technical Viability
× Organizational Acceptance
× Governance
× Agent Literacy
```

である。

したがって PoC は、

> **本番10億円規模へ進む前に、企業が Agent の高速実行、透明性、権限再配置、役割変化に耐えられるかを確認する socio-technical stress test**

と位置づけられる。

これは技術 PoC を弱める意味ではない。

技術が成立しても組織が成立しなければ、Enterprise delivery は成立しないというだけである。

---

## 12. PoC の Adoption Exit Criteria

技術的 Exit Criteria に加えて、少なくとも以下を見る。

### GO に近づく Evidence

- Transparency Report が blame ではなく decision に使われた
- customer / supplier wait が客観的に扱えた
- repeated Operator judgment が Rule 化された
- 既存ロールの新しい ownership が理解された
- Local Delivery Model を壊さず EAA Boundary に接続できた
- Human decision latency が観測・改善された
- Evidence dispute を解決できた

### RED FLAG

- Transparency が人事評価・犯人探しへ転用される
- Evidence があっても責任帰属を政治的に拒否する
- すべての判断が一人の Operator に集中する
- 既存会議・承認を一切減らせず、EAA Gate が上乗せされる
- Supplier が provenance / Evidence 提供を拒否する
- Customer が Authority を持たず、判断だけを要求される
- Local Delivery の自治が中央統制で潰される

特に、

```
Old Governance
+ EAA Governance
```

の単純加算は避ける。

EAA によって新しい統制を追加したなら、何を廃止できるかを必ず問う。

---

## 13. 導入ナラティブ

避けたい表現:

- AI が人を置き換える
- PMO が不要になる
- Vendor のごまかしを暴く
- 会議を全部なくす
- 人間承認を排除する

代わりに、

- 人間判断を価値の高い判断へ集中する
- 専門知識を Rule / Contract / Evidence として残す
- 誰が悪いかではなく何が起きたかを正しく帰属する
- 現場を不要な手戻りから守る
- 必要な統制だけを必要な期間に適用する
- 既存 Delivery Model を壊さず段階移行する

と説明する。

EAA は効率化だけでなく、責任・判断・Evidence の品質を上げるための変化である。

---

## 14. 成功状態

Adoption が進むほど、

```
Manual Coordination ↓
Manual Status Work  ↓
Repeated Judgment   ↓
Operator Dependency ↓
Boundary Ambiguity  ↓
```

し、

```
Evidence Quality        ↑
Rule Coverage           ↑
Domain Autonomy         ↑
Decision Quality        ↑
Correct Attribution     ↑
```

することを期待する。

最終的な成功状態は、

> EAA を支える特別な英雄がいること

ではない。

> **組織が、Agent の高速実行を通常能力として統治できること**

である。

---

## 15. 要約

EAA Adoption の最初の原則は次である。

> **抵抗勢力を排除しない。EAA によって守られるもの、所有できるもの、価値が上がるものを設計し、受益者へ変換する。**

Transparency は監視ではなく正しい帰属のために使う。

Operator は判断を抱え込まず、Rule / Constitution / Contract へ圧縮する。

既存 Delivery Model は Local として包含し、Evidence を見ながら不要な統制だけを外す。

そして PoC は技術実証であると同時に、

> **この企業が EAA の透明性・権限再配置・役割変化を受容できるかを測る socio-technical stress test**

である。
