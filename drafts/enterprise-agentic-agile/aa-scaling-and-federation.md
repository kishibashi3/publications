# AAから分割とFederationへ

> Status: explanatory draft / non-normative
>
> [Core](enterprise-agentic-agile-core-v0.1.md)の構成原理を、単独の開発からの拡張として説明する。

## 1. 単独で始める

[AA](../agentic-agile/README.md)は、人間の判断とAgentの実行・検証・学習を成立させる開発原則である。
目的と規範に従って開発するために、親Cellや別チームの存在を必要としない。

EAAは、この独立した開発主体をCellとして扱う。AAが全責務を担う構成が1 CellのEAAである。
EnterpriseとDomainを別々に置くことも、すべてのStandard Profileを最初から導入することも必要ない。

## 2. 責務を記述し、必要な部分を分ける

拡張が必要になったら、現在担っている責務と、新たに必要な責務をProfileとして記述する。
Profileは責務の仕様であり、AAの原則を置き換えるものではない。

同じCellで引き受け続けてもよい。判断負荷や専門性から分離する場合は、責務と判断権限を別Opeへ引き継ぐ。
目的・権限・資源・記録・残件・外部保証の引継ぎを合意し、独立した判断を成立させる。
内部TaskをAgentへ配るだけでは、Cellを分割したことにならない。

## 3. 全体にも部分にもなる

| 構成 | EAAから見た姿 | 維持するもの |
| --- | --- | --- |
| 一つのAAで全責務を担う | 1 Cell | 目的、責任、権限、Evidence |
| 分割した各開発主体がAAで動く | AAを内部方式に持つ複数Cell | 各主体の自治と外部合意 |
| 一つのCellがさらに分割する | 外部には一つの責任主体、内部には複数Cell | 外部保証と内部の責任分担 |
| AAと既存チームが協働する | 内部方式の異なるCellのFederation | 意味、Contract、提案と受入 |

分割後もAAはAAとして成立する。AAの内部規範の層を、そのままCellの親子関係とみなす必要はない。
再帰性が要求するのは同じ外部境界であり、すべての内部をAgenticに揃えることではない。

## 4. 接続に必要なものを合意する

Federationでは、責任範囲、判断権限、意味と採用版、提供条件、提案と受入、成立を示すEvidenceを共有する。
Agent構成、工程、内部Task分解は各Cellが決める。

親Cellの変更も子Cellへ自動適用しない。DomainからEnterpriseへの変更提案にも同じ原則を使う。
Platformが他CellへCI/CDの導入を提案するときも、対象Cellが受入を判断する。

AAのAgenticな実行能力は内部方式の特性である。Federationへの参加資格を、Agentの使用率で判定しない。
