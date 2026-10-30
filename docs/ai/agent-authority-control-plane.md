# Agent Authority Control Plane

Agent が外部世界に起こす効果を、Agent の外側で強制・記録する統制面を考える。

これは完成した方式の提案ではない。Agent IAM、KYA、Agent Gateway、delegation 周辺を見たとき、既存部品でかなりのところまで作れる一方、なお残る問題がどこかを切り分けたメモである。

## 1. 総論

この構想の大半は既存部品の組み合わせで実現できる。

- **既知（配管）**: クレデンシャル注入型 Proxy、egress 制御、OAuth による委任、Policy Engine、決済 Mandate
- **工学課題（解ける）**: Effect 横断の Budget Ledger、Evidence
- **中核（未解決）**: 許可された経路の中で、その要求が依頼者の意図に由来するか

境界で見えるのは最終的にはバイト列である。ユーザー指示由来の値と prompt injection 由来の値は、外から見れば同じ形をしている。

したがって、全 Agent に同じ保証を約束することはできない。保証の強さは Agent の協調度に比例する。

- **白箱**: 自作 Agent。値ごとの由来ラベルをランタイムで持てる
- **灰箱**: hooks、MCP、モデル API 中継などで入出力を観測できる
- **黒箱**: SaaS 一体型。外部通信しか観測できない

この見方からすると、外部への要求仕様として重要なのは「Agent 製品自身に Auth 機能を持て」ではなく、**Provenance ラベルを標準形式で輸出せよ**に近い。

## 2. 問題設定

Agent の安全性を決めるのは「誰か（Identity）」だけではない。

重要なのは、**何を、誰の権限で、何の依頼として外部に起こしたか（Authority）**である。

Identity が正しくても、

- 権限を越えた実行
- 権限内だが依頼者の意図にない実行

は起こる。

区別すべき概念は次のとおり。

| 概念 | 意味 | 例 |
| --- | --- | --- |
| Identity | 実行主体の識別子 | `agent:buyer-prod` |
| Principal | 最終的な責任・権限主体 | `company:ABC` |
| Delegation | Principal または上位 Agent から渡された権限 | 購入20万円以下、承認済みベンダー |
| Task | その権限が何の依頼に紐づくか | `purchase-office-chair-123` |
| Effect | 外部世界に実際に起きる作用 | `payment.transfer`, `github.push` |
| Provenance | Effect の引数がどこから来たか | 金額=ユーザー指示 / 外部メール |

統制の対象は Agent の思考や、Agent が選んだ Tool ではない。**Effect** である。

> Agent freedom inside, effect control at boundary.

## 3. どこで強制するか

強制は Agent の外側、Effect が外部へ出る境界に置く。

Agent の内部に Auth を持たせるだけでは、信頼できない部品に自己統治させることになる。

### クレデンシャル注入型 Proxy

原則として Agent は実クレデンシャルを持たない。

```text
Agent
  ↓
Proxy
  ↓  Authority check
Credential injection
  ↓
External service
```

Proxy が要求単位で判定し、許可された要求にだけ認証情報を付与する。

短命 Token を Agent に渡す Broker 方式は、Token の有効期間中はその Role の範囲で自由に使える。したがって、Proxy 化できない Protocol の例外として扱う。

### egress を封鎖する

Proxy を迂回できるなら Security Boundary にはならない。

そのため、

- network namespace
- firewall
- egress policy

などで Proxy を通らない通信を禁止する。

HTTP の意味まで見たい場合は、Proxy 側で TLS を終端する必要がある。

### Effect の正規化は既知サービスに限る

`github.push` や `payment.transfer` のような意味を持たせられるのは、Schema を知っているサービスだけである。

未知の送信先については、

> domain X への POST

程度の粗い Effect として扱うしかない。

## 4. Canonical Action ではなく Canonical Effect

`Bash("git push")` を `git.push` に変換しても Security Boundary にはならない。

Shell の意味解析は完全にはできない。

- `sh -c`
- alias
- Makefile
- script
- subprocess
- curl

など、同じ Effect へ到達する経路はいくらでもある。

そのため、正規化の中心は Tool Call ではなく、**実際の外部効果**に置く。

例えば GitHub なら Git protocol や GitHub API、AWS なら STS 発行や API request、DB なら DB Proxy 上の SQL 実行を境界にする。

pre-hook や MCP での Action mapping は捨てる必要はないが、役割は別である。

- 早期拒否
- Agent への理由返却
- 人承認の前取り
- UX

に使う。

これは **Early Authorization** であり、Hard Enforcement ではない。

## 5. Authority は述語ではなく、場合によっては消費される資源

「1回20万円以下」という Scope だけでは累積を制御できない。

20万円を10回実行すれば200万円になる。

したがって、

- 1回あたりの上限 = Scope
- 累積残高 = Budget

を分ける。

Budget を一般化しすぎる必要はない。自然な単位を持つ Effect にだけ適用する。

例:

- 金銭
- API quota
- 送信件数

`git.push` の「残高」のような恣意的な一般化はしない。

並行実行では、

```text
Reserve
  ↓
Execute
  ↓
Commit / Release
```

の二相で扱う。

再委任時には、親 Budget から子へ切り出す escrow 方式が単純である。共有 Pool にすると、階層をまたぐ atomic な判定が必要になる。

## 6. Delegation は Task に束縛する

Policy の範囲内なら安全、ではない。

例えば、

- 承認済み vendor
- 20万円以下

の支払い権限を持つ Agent が、外部メールの injection に従って18万円を送金したとする。

Identity は正しい。
Delegation も有効。
Policy の範囲内。
Gateway も正規経路。

それでも依頼者は、その支払いを頼んでいない可能性がある。

これは confused deputy 型の問題である。

Delegation には最低限、

- `task_id`
- purpose
- allowed effects
- allowed resources
- expiry

を束縛する。

再委任では、権限の範囲を減衰させる必要がある。形式としては RFC 8693 の actor chain、Macaroons、Biscuit のような Capability 方式を優先して検討する。

ただし、Token 形式だけでは Budget のような状態を持つ Authority は解けない。

## 7. 中核: 意図判定と Provenance

権限範囲内の Effect が依頼者の意図に由来するかは、境界のバイト列だけでは判定できない。

自己申告も十分ではない。

Agent が「この金額は invoice 由来」と申告しても、injection された Agent はその申告も偽装できる。

Provenance を強制の根拠にするには、Agent の自己申告以外の材料が必要になる。

部分解は弱い順に次のように考えられる。

### 1. セッション単位テイント

セッションが、

- 信頼できない外部入力
- 秘密データ

の両方に触れた後の egress を止める。

粗いが比較的実装しやすい。

### 2. 値単位照合

灰箱 Agent では、モデル API の中継点で、

- ユーザー指示
- Tool result
- Agent output

を記録できる。

egress で出ていく重要値、例えば、

- 送金先
- 金額
- メール宛先

と照合する。

「信頼できない入力には現れたが、ユーザー指示や信頼済み台帳には現れない値」を疑わしいと判定する。

これが本構想で最も検証したい部分である。

### 3. 参照束縛パラメータ

重要な値を自由入力にしない。

例えば送金先を文字列で渡すのではなく、信頼済み Store 内の Object への参照として渡し、Proxy で、

> request value = referenced trusted value

を確認する。

### 4. ランタイムによる値ラベル

白箱 Agent なら、ランタイムが値ごとに由来ラベルを付与し、境界まで伝播させられる。

これが最も強い。

## 8. 黒箱 Agent への要求

黒箱 Agent では完全な Provenance は得られない。

その場合、Agent に Authority 判定をさせるのではなく、**判定材料を外へ輸出させる**方がよい。

例えば Tool Call ごとに、

- 引数の由来
- 参照した入力
- trusted / untrusted の区別

を標準形式で出す。

これはなお自己申告ではあるが、信頼対象を LLM の自由生成から、Vendor の決定的な Runtime へ移せる。

## 9. Provenance の限界

この方式にも限界がある。

### 変換された値

LLM が、

- 言い換え
- 計算
- 要約

した値は文字列照合では追えない。

### 外部入力を正当に使う Task

「このメールの請求書を払え」という Task では、外部由来であること自体が正常である。

そのため、高リスク Effect かつ外部由来の値については、人承認を最終線に置く。

Approval は Effect に束縛した短命 Token とする。

## 10. コード開発 Agent: Git と CI

コード開発では、ファイル書き込み1回ごとではなく成果物の diff 単位で統制するのが現実的である。

ただし、merge gate だけでは遅い。

Effect は二種類ある。

### Repository Effect

- commit
- push
- merge
- release

### Runtime Effect

Agent が作ったコードを実行した結果の、

- network access
- DB mutation
- secret access
- deploy

である。

diff で見られるのは前者だけで、後者は実行環境の境界で制御する必要がある。

Path scope も補助にすぎない。

`src/` 配下の変更でも、

- postinstall
- test 中の network call
- dynamic loading

などで外部に作用できる。

また、CI は merge より前に Agent のコードを実行する。

その CI に production secrets があれば、merge されなくても流出する。

したがって Agent 由来の PR の CI は、

- production secrets なし
- egress 制限
- ephemeral environment

を基本とし、必要な Credential は注入型 Proxy 経由で与える。

## 11. Evidence は監査ログではなく帳簿

Evidence は Effect ごとの帳簿として扱う。

任意の Effect について、

- Principal
- Task
- Delegation chain
- 協調度レベル
- 正規化後 Effect
- 正規化できなかった場合の raw destination
- Provenance
- Policy version
- classifier version / output / confidence
- ALLOW / DENY / REQUIRE_APPROVAL
- Approval token
- Budget の Reserve / Commit / Release
- Attempt
- Outcome

を後から再構成できるようにする。

確率的分類器を使う場合、後で同じ入力を再計算して同じ答えになる保証はない。

したがって「再現性」は、

> 現在のモデルで同じ判定を再生成できること

ではなく、

> **その時点の判断材料を再構成できること**

と定義する。

## 12. 未解決問題

この構想でまだ解けていないものは多い。

| 問題 | 原因 | 部分解 | 残るもの |
| --- | --- | --- | --- |
| 変換された値の由来 | LLM の言い換え・計算・要約 | 参照束縛、白箱ラベル | 灰箱での変換値 |
| 許可経路を使った流出 | 宛先が正当なら境界は通る | 内容分類 | 誤検知・見逃し |
| 外部入力が正当な Task | 外部由来が正常 | 人承認 | 承認疲れ |
| 黒箱の意図判定 | 材料が外に出ない | ラベル輸出要求 | Vendor 依存 |
| 再委任時の保証合成 | 下流 Agent がデータを指示として再解釈 | taint 伝播 | 標準 Protocol の不在 |
| 組織をまたぐ信頼 | 他組織の Delegation / label を信頼できない | Federation | 標準化途上 |

黒箱 Agent での完全な Provenance は原理的に得られない。

この構想が主張できるのは、部分解でリスクをどこまで縮められるかまでである。

## 13. MVP は製品ではなく反証実験にする

MVP の目的は配管を揃えることではない。

中核の主張を一つ、反証可能な形で試す。

### 仮説

> 灰箱 Agent に対して、モデル API 中継での入力記録と egress での値単位照合を組み合わせれば、injection 経由の送金を境界で止められる。正当な送金を誤って止める率は、業務で許容できる水準に収まる。

### Phase 1

- 注入型 egress Proxy
- egress の封鎖
- モデル API 中継点
- 値単位照合の判定器
- Evidence
- Effect は1〜2種だけ

候補は決済 Sandbox と GitHub。

### 計測

- injection 攻撃の阻止率
- 正当 Task の誤阻止率
- 計算・言い換えなど、値が変換される場合の見逃し率

セッション単位 taint と比べて有意に良くなければ、値単位照合は複雑さに見合わないとして仮説を棄却する。

具体的な閾値は実験設計時に決める。

### 後続

- Phase 2: Budget Ledger、参照束縛
- Phase 3: hooks / MCP など Early Authorization、白箱向け provenance label

## 14. 設計原則

1. Identity と Authority を分ける。
2. 統制対象は Agent の思考ではなく Effect とする。
3. 強制は Agent の外側に置く。
4. Credential は可能な限り Agent に渡さない。
5. egress を封鎖し、Proxy を通らない通信を禁止する。
6. 意味のある Effect 正規化は既知サービスに限る。
7. pre-hook / MCP は Early Authorization として使い、Security Boundary にしない。
8. 全 Agent を同じ Control Plane に載せるが、保証水準は協調度に比例させる。
9. Agent 自身による Provenance の自己申告だけを強制根拠にしない。
10. 灰箱ではモデル API 中継点と egress の二点で観測する。
11. 黒箱には判定機能ではなく provenance label の輸出を要求する。
12. Delegation は Task に束縛し、再委任では減衰させる。
13. Budget は自然な単位を持つ Effect に限る。
14. Agent 間通信も taint 伝播の対象とする。
15. Agent 由来コードを実行する CI は secrets なし・egress 制限を基本とする。
16. Evidence は帳簿として残す。
17. Policy Engine や Identity 基盤は既存技術を使う。
18. 新規性は部品の発明ではなく、未解決の中核に対する部分解の有効性で示す。

## 15. 一文で言うと

これは Agent IAM の拡張というより、

> **Agent が外部世界に起こす Effect を、誰のどの Task と Authority に由来するかまで含めて、外側で強制・記録する Authority Control Plane**

である。

既存部品はかなり揃っている。

残る問いは、**正しい権限を持つ Agent が、正しい経路で、依頼者が頼んでいないことをする問題を、どこまで外側から止められるか**である。
