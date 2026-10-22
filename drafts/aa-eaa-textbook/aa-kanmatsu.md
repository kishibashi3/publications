# 巻末　組み方の見本

<!--
実装イメージの通しの 1 枚。依頼元 @ope-ultp1635 msg d206ec8f（kishibashi3「最終的に、こんなのがいいんじゃない？というまとめも欲しい」）・a9ed49f1（完了条件: 最初に作るファイル・役の分け方・止める線・詰まる所）。
前提にする道具は、役ごとに起こすコーディング AI のセッション・git と PR・ファイル・人 1 人だけ。常駐の agent チームは最後の 1 文だけ。
-->

## 通しの 1 枚：役・ファイル・線・約束

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="10" y="6" width="425" height="178" rx="8" fill="#fff" class="lt"/>
  <text x="26" y="32" class="ts" font-weight="700">役（第 2・6 章）</text>
  <g class="ts"><text x="26" y="62" class="hc">人 1 人：依頼を書く・線の右と床を通す</text>
    <text x="26" y="90" class="ac">作る AI：依頼 1 件ごとにセッション</text>
    <text x="26" y="118" class="ac">判定する AI：PR ごとに新しく起こす</text>
    <text x="26" y="146">merge：線の左は必須チェックで自動</text><text x="96" y="170">線の右と床は人が押す</text></g>
  <rect x="445" y="6" width="425" height="178" rx="8" fill="#fff" stroke="#222" stroke-width="3"/>
  <text x="461" y="32" class="ts" font-weight="700">最初に作るファイル（第 4 章）</text>
  <g style="font-family:monospace;font-size:15px"><text x="461" y="64">1 CLAUDE.md</text><text x="461" y="110">2 roles/maker.md・judge.md</text><text x="461" y="152">3 tasks/001-….md</text></g>
  <g class="tx"><text x="481" y="86">共通の決まり・語の意味・線の右の表</text><text x="481" y="132">役の決まりと、役ごとの権限設定</text><text x="481" y="174">最初の依頼 1 件（4 見出し）</text></g>
  <rect x="10" y="194" width="425" height="150" rx="8" fill="#fff" class="lt"/>
  <text x="26" y="220" class="ts" font-weight="700">止める線（第 3 章）</text>
  <g class="ts"><text x="26" y="250">線の右：deploy・消す migration・送信</text><text x="26" y="274">　　　　secret・公開・課金</text>
    <text x="26" y="302" class="hc">床：決まり・権限設定を変える PR</text></g>
  <text x="26" y="330" class="tx">AI のセッションで禁じ、人の手順に置く</text>
  <rect x="445" y="194" width="425" height="150" rx="8" fill="#fff" class="lt"/>
  <text x="461" y="220" class="ts" font-weight="700">約束（各章の実装イメージ）</text>
  <g class="ts"><text x="461" y="248">人 → 作る AI：依頼ファイル</text><text x="461" y="274">作る → 判定：PR（差分と 4 枚目）</text>
    <text x="461" y="300">判定 → merge：LGTM ✅ コメント（見た commit）</text><text x="461" y="326">決まりの変更：PR。出した者は押さない</text></g>
  <text x="440" y="370" class="tx" text-anchor="middle">道具は、コーディング AI のセッション・git と PR・ファイルだけ</text>
</svg>
```

最初に作るのは右上の 3 つです。役は人・作る AI・判定する AI に分け、線の右と決まりの変更だけ人が通します。大きな場では、常駐の AI チームで回す形もあります。

※ 始めは第 1 章の出発点から、表と依頼ファイルを足すだけでよい。判定する AI と自動 merge は、表ができてから足す。


---
@writer-ja [bridge-claude2] (operator-supervised · k-ishibashi-ntv/agent-hub)
