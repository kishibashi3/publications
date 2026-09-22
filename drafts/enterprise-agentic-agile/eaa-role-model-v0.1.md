# EAA Role Model — 改訂草案

2026-09-22 · Kazuhiro

> Status: draft / non-normative application guide
>
> [適用ガイド](eaa-delivery-guide-v0.2.md)の役割編。Coreの責任・判断主体を人間とAgentへ配置する参考モデルである。
> [EAA Core](enterprise-agentic-agile-core-v0.1.md)に従い、内部の職名・人数・工程を参加条件にしない。
> 配置・人数・Council・既存職種との対応はReference Modelである。
> 旧v0.1のファイルパスは参照互換のため維持する。

## 1. 三つの責務

| 役割 | 所有する責任 |
| --- | --- |
| Operator | Cellを成立させ続ける条件、境界、権限、規範、例外判断 |
| Enabler | 顧客・関係者の文脈から目的と受入条件を具体化し、成果成立まで変化を進める |
| Executor | 設計・実装・運用・検証などを実行し、Evidenceを返す |

EnablerとOpeは異なる責務を持つpeerである。
同一人物が兼務できるが、何の責任と権限で判断するかを区別する。
Agentic CellではAgentが代表的なExecutorとなり、他のCellでは人間チームやVendorも担う。

## 2. Operator

Opeは、自分のCellが引き受けたProfileを成立させる責任を持つ。
業務の意味と不変条件を理解し、Agentが動ける規範・環境・判定条件へ落とす。

通常の全成果物を逐次承認する役ではない。
繰り返される判断を規範へ変換し、実行と検証を自律系へ渡す。
規範の改訂は正当な所有者の承認を経る。

人物像としては、業務と技術に通じ、権限と責任を持ったアーキテクトに近い。
自分で全部判断し続ける能力より、判断を明示して任せられる能力を重視する。

OpeのAgenticなリテラシーは、CellがFull／Half／Legacyのどの実行方式を取れるかに大きく影響する。
実行方式は技術・契約・対象業務の条件にも左右される。

## 3. Enabler

Enablerは顧客と信頼関係を作り、言葉の背景、優先順位、暗黙の事情を理解する。
実行側の疑問や制約を顧客が判断できる形へ返し、決定をMission・Ontology・Contractなどの記録へ戻す。

PO的な役割だが、顧客接点を持つことが最終決定権を意味するわけではない。
最終決定権を顧客等が持つ場合も、Enablerは判断を成立させ、成果が得られるまで変化を進める責任を持つ。

| 区別 | 扱い |
| --- | --- |
| Goal・Priorityの最終決定 | 明示された権限者が行う。Enablerが権限を持つ場合もある |
| Missionの具体化・阻害解消・成果確認 | Enablerが進める |
| 各Cellの変更受入 | 対象Cellが規範に従って判断する |

Enablerは伝言だけで完了しない。各Cellの局所完了を集めるだけでなく、横断したOutcomeをEvidenceで確認する。
Agentの高度な運用能力は中核要件ではない。顧客理解と文脈の往復を強みとする人が担える。

## 4. Profileと配置

先に必要なProfileを定義し、その責務を引き受けるCell・Opeを決める。
一人のOpeが一つのCellで複数Profileを担ってよい。
責務を別Opeへ渡して自律判断できるようにすると、独立した子Cellになる。

Enterprise／Domain／PlatformのOpeは別職種ではなく、同じOperatorが異なる責任範囲を担う呼び名である。
独立した判断責任をいくつに分けるかがOpeの配置を決める。Profile数だけOpeを置く必要はない。

Enablerの需要はActive Changeの量と複雑さで決まる。
Cellごとの常設やOpeとの1:1配置を要求せず、一人のEnablerが複数CellのMissionを進められる。

## 5. Enterpriseの責務

Enterprise Opeは、全体の目的・制約・資源配分・責任境界を扱う。
分離前は複数の業務・基盤Profileも担える。負荷に応じて別Opeへ責務を渡す。

分離後は、子Cellの判断を一方的に上書きしない。
境界の調停は合意を形成する仕事であり、内部変更の強制ではない。
Profile採用や変更も、引受先Cellとの合意を伴う。

Enterprise Enablerは、全体の顧客文脈と変更要求を把握し、Mission群と優先順位を具体化する。
各Enablerとの協働を通じて全体のOutcomeを確認する。
全体の役割を担うことは、他Cellの資源や受入判断を自由に使えることを意味しない。

## 6. 顧客との接点

Goal・Priority・OutcomeについてはEnablerが対話を進める。
業務の不変条件、Authority、Constraint、RiskについてはOpeが関わる。
専門家・顧客Domain Ownerとの直接対話を許し、固定的な伝言経路を作らない。

その場の理解を個人に閉じず、意味・決定・未決事項を正本へ戻す。
同じ顧客説明を毎回人間が仲介しなくても、実行系が解釈できる状態へ育てる。

## 7. 横断協働と受入

複数CellのMissionでは、EnablerがOutcomeの成立を進め、各Opeが自Cellの境界と保証を持つ。
一時的な協働体を独立Cellと同一視しない。別のOpe・責任・権限を持たなければ、既存Cellの協働である。

必要に応じてOperator Council、Enabler Councilを設けてよい。
Council自体が他Cellの自治を上書きする権限を持つわけではなく、合意と記録に戻す。

受入判断は既存規範の範囲でAgentが行える。
自らを縛る規範の改訂は、実行者の自己承認にしない。

## 8. 既存職種との対応例

| 既存の経験 | 活かせる責務 |
| --- | --- |
| PO・事業開発・BA | 顧客理解、Mission具体化、価値と優先順位の調整 |
| Architect・Tech Lead | Cellの成立条件、境界、規範、実行環境 |
| PM・PMO | Ope／Enablerへの責務分解、全体Evidenceと阻害の観測 |
| QA・Security・SRE | 専門Profileの遂行、検証・運用能力の整備 |
| Scrum Master | Flow改善、阻害解消、学習支援というEnabler能力 |

肩書の置換表ではない。Scrum等を内部方式に選んだCellでは、内部の役割を維持できる。

## 9. 成熟の方向

Opeの判断がRule・Constitution・Contractへ蓄積され、Enablerが進めたChangeが能力・仕組み・学習として残る。
成果と安全性を維持しつつ、反復判断・手動調整・特定個人への依存を減らす。

分離が有効だったかは、親Opeへの判断集中が実際に減ったか、外部への保証を維持したかで観測する。
人員やCellの数自体を成熟指標にしない。
