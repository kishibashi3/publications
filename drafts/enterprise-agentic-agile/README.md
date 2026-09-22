# Enterprise Agentic Agile（EAA）

必要な責務をProfileとして定義し、Cellへ配置し、必要に応じて分離する。
分離したCellは、合意した境界のもとで自律し、提案と受入によって協働する。

## 構成原理と仕様

| 順序 | 文書 | 内容 |
| --- | --- | --- |
| 1 | [Cell・Profile・Federation](eaa-cell-profile-federation-draft.md) | 全体像と設計の背景 |
| 2 | [Core](enterprise-agentic-agile-core-v0.1.md) | 責務分割とCell間の共通原則 |
| 3 | [Profiles](eaa-profiles-v0.1.md) | Standard／Domain Profileの責務仕様 |
| 4 | [Role Model](eaa-role-model-v0.1.md) | Operator・Enabler・Executorの責務と配置 |

## 適用と検証

| 文書 | 内容 |
| --- | --- |
| [Delivery Guide](eaa-delivery-guide-v0.2.md) | 運営・記録・導入の具体例 |
| [Adoption Guide](eaa-adoption-guide-v0.1.md) | 既存組織への導入と役割移行 |
| [Working Notes](enterprise-agentic-agile-working-notes.md) | 理論との接続、10億円ケース、観測方法 |
| [比較資料](eaa-enterprise-agile-comparison-v0.1.md) | 旧モデルの比較履歴と改訂モデルの検証計画 |

[Delivery Guide v0.1](eaa-delivery-guide-v0.1.md)は旧版からの案内である。
これらは草案であり、詳細スキーマやFederationの状態遷移は未確定である。ファイル名の版表記だけで承認・採用状態を判断しない。

## AA・共通規範との関係

[AA](../agentic-agile/README.md)は単独で成立する。EAAはその開発主体をCellとして扱い、責務の分割とFederationによって拡張する。
AAの定義はEAAを必要としない。全責務を担うAAも、分割後のCellを担うAAも同じ原則で動く。
Federationは内部実装に踏み込まず、AA以外の方式で動くCellとも接続できる。
具体的な対応は[AAからの拡張](aa-scaling-and-federation.md)を参照する。

規範の所有・改訂・版参照という共通基盤は[自己改訂規範アーキテクチャ](../self-revising-norm-architecture/README.md)に分けて置く。

[下書きの案内へ](../README.md)
