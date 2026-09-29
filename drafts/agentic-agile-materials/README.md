# AA・EAAの説明・提案資料

AA・EAAに関する独立したHTML資料を用途別に保存する。いずれも非規範の説明・提案資料である。
HTMLをダウンロードしてブラウザで開く。スタイルは各ファイルに含まれる。

## 説明資料

初めて読む場合は「設計の理由」から読む。

| 資料 | 用途 |
| --- | --- |
| [設計の理由](explanations/why-aa-eaa.html) | 前提知識なしで、AAの内部設計とEAAの責任・接続設計を独立した編で読む。冒頭に見取り図、末尾に両者の接続を示す。同僚への説明の入口 |
| [AA単独版](explanations/aa-introduction.html) | AAの目的、人間とAgentsの役割、原則、委任と学習を説明する |
| [AA・EAA全体紹介](explanations/aa-eaa-introduction.html) | 全体の構造と、一件の仕事が成果になるまでを図と例で説明する |

## 提案資料

以下は各資料として残っている最新版を、本文を変更せず保存したもの。
現行仕様への追随改訂は行っていない。旧Profile定義、比較点数、役割・承認の旧説明を含むため、現行仕様の説明として扱わない。
金額・期間・評価点・報告値は各提案内の想定や例であり、実績を示すものではない。

| 資料 | 保存元 | 用途 |
| --- | --- | --- |
| [Enterprise Agile比較](proposals/enterprise-agile-comparison.html) | EAA_Enterprise_Agile_Comparison_v0.1.html | 比較軸と当時の設計適合度仮説 |
| [PoC提案](proposals/poc-proposal.html) | EAA_PoC_Proposal_RFI_3months_30M_v2.html | 3か月・約3,000万円の検証提案 |
| [RFP向けデリバリーモデル](proposals/rfp-delivery-model.html) | EAA_RFP_Agentic_Delivery_Model(1).html | 10億円規模・12か月の基幹刷新の説明案 |

## 定義元と履歴

原則・仕様は[AA](../agentic-agile/README.md)と[EAA](../enterprise-agentic-agile/README.md)を参照する。
AA Principlesは正本、EAA Core・Profilesは未確定の仕様案であり、HTMLの保存は規範の承認・採用を意味しない。

ファイル名は用途に応じた固定名とし、以後の改訂は同じパスへ反映する。旧版はGit履歴で管理する。
元のHTMLに含まれる参照コミットや版表記は保存時に変更していない。
全体紹介の添付コピー「agentic-agile-introduction 9.html」は保存元と同一内容のため、重複保存していない。
このディレクトリは公開サイトのビルド対象外である。
