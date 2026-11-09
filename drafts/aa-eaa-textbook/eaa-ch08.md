# 第 8 章　Cell の分け直しと引き継ぎ

群: 取り決めの改訂と Cell の分け直し
副題: コンテキストスイッチが起き始めたら、Cell を分け直す

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v7.md（863f5176）の第 8 章。着手: @ope-ultp1635 msg 58cbdf2b（便 3）。本文 GO: @ope-ultp1635 msg d9ab1757、kishibashi3「うん」。
v7 で畳んだ: 5b5aea2 の eaa-ch09.md（Cell の分け直しと引き継ぎ、16 ページ）を 4 ページにした。前の字は `git show 5b5aea2:drafts/aa-eaa-textbook/eaa-ch09.md`。ページごとの行き先と落とした字: writer-ja/drafts/eaa-toc/fold-v7-ledger.md の便 3。
落とした: p.「渡した権限は、元の範囲に追随しない」（第 3 章 p.「分割は、責務と判断権限を渡すこと」の絵の下の段と同じ文）、p.「Core はここまでしか決めていない」（右側は第 9 章 p.「Core が決めていないこと」の行へ）、p.「次章へ：導入の最初の一歩」。
章番号: この章の本文・注・絵は v7 の章番号（10 章）で書いた。
-->

> 分け直すときも、まとめ直すときも、権限・資源・管理している対象・記録・進行中の Mission・残件を引き継ぐ。誰も持たない責任と、重なって決める権限を残さず、まだ果たしていない保証を消さない。

```svg
<svg viewBox="0 0 880 300" width="880" height="300">
  <rect x="30" y="50" width="230" height="170" rx="10" class="box"/><text x="145" y="86" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="145" y="130" class="ts" text-anchor="middle">在庫と返品</text><text x="145" y="160" class="ts xc" text-anchor="middle">判断のたびに切り替える</text>
  <path d="M264,135 H330" class="ln" marker-end="url(#arr)"/>
  <rect x="336" y="50" width="250" height="170" rx="6" class="soft"/><text x="461" y="80" class="ts" text-anchor="middle" font-weight="700">引き継ぐもの</text>
  <g class="tx" text-anchor="middle"><text x="461" y="108">権限・資源・管理している対象</text><text x="461" y="132">記録・進行中の Mission・残件</text><text x="461" y="166" class="xc">誰も持たない責任を残さない</text><text x="461" y="190" class="xc">まだ果たしていない保証を消さない</text></g>
  <path d="M590,135 H626" class="ln" marker-end="url(#arr)"/>
  <rect x="630" y="40" width="220" height="80" rx="10" class="hl" style="fill:#fff"/><text x="740" y="88" class="ts hc" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <rect x="630" y="150" width="220" height="80" rx="10" class="hl" style="fill:#fff"/><text x="740" y="198" class="ts hc" text-anchor="middle" font-weight="700">返品の Cell</text>
  <text x="440" y="276" class="t" text-anchor="middle" font-weight="700">分けた後は、どちらも横に並ぶ別の Cell</text>
</svg>
```

分けた後も、仕事は増え、変わります。Cell の中の Agent や人が別の文脈へ切り替え始めたら分け直します。分け直すときは、引き継ぐものを落としません。

## 切り替えで分け、行き来でまとめる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="20" y="10" width="410" height="230" rx="10" class="box"/><text x="225" y="40" class="ts" text-anchor="middle" font-weight="700">在庫の Cell に返品が加わった</text>
  <rect x="40" y="58" width="180" height="104" rx="6" class="soft"/><text x="130" y="86" class="ts" text-anchor="middle" font-weight="700">在庫</text><text x="130" y="114" class="tx" text-anchor="middle">数を正しく保つ</text><text x="130" y="136" class="tx" text-anchor="middle">ことを優先する</text>
  <rect x="230" y="58" width="180" height="104" rx="6" class="soft"/><text x="320" y="86" class="ts" text-anchor="middle" font-weight="700">返品</text><text x="320" y="114" class="tx" text-anchor="middle">返金の速さを</text><text x="320" y="136" class="tx" text-anchor="middle">優先する</text>
  <text x="225" y="190" class="tx xc" text-anchor="middle">戻った品を数え直すたびに、どちらを優先するかを切り替える</text>
  <text x="225" y="222" class="ts hc" text-anchor="middle" font-weight="700">→ 分ける</text>
  <rect x="450" y="10" width="410" height="230" rx="10" class="box"/>
  <rect x="470" y="40" width="110" height="110" rx="10" class="soft"/><text x="525" y="100" class="ts" text-anchor="middle">Cell</text>
  <rect x="730" y="40" width="110" height="110" rx="10" class="soft"/><text x="785" y="100" class="ts" text-anchor="middle">Cell</text>
  <g class="ln"><path d="M584,64 H726"/><path d="M726,84 H584"/><path d="M584,104 H726"/><path d="M726,124 H584"/></g>
  <text x="655" y="174" class="tx" text-anchor="middle">書いても Mission のたびに照会し、Contract の改訂が止まらない</text>
  <text x="655" y="196" class="tx" text-anchor="middle">相手の文脈を読まないと進まないなら、二つの文脈は一つ</text>
  <text x="655" y="222" class="ts hc" text-anchor="middle" font-weight="700">→ まとめ直すか、引き直す</text>
  <text x="440" y="282" class="ts" text-anchor="middle">人のチームや ART の組み直しも、サービスの切り直しも、同じ判定で決める</text>
  <text x="440" y="314" class="tx" text-anchor="middle">サービスやドメインの数では決めない。一つの主体の中で、価値・語・権限が切り替わるかで決める</text>
  <text x="440" y="344" class="tx" text-anchor="middle">書けていないだけなら、直す先は Mission と Contract</text>
</svg>
```

分けた後も第 2 章の判定を当て直します。中の Agent や人が価値や語を切り替え始めたら分け、書いても照会が止まらない Cell どうしはまとめ直します。

※ 書き手の読み。Core はいつ分け、いつまとめるかを書いていない。例は仮定。SAFe の 2022 年版は value stream に沿った組み直しを戦略的な決定に置く。

## 移すものは、権限から残件まで

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="440" y="30" class="ts" text-anchor="middle" font-weight="700">分け直しは、責務と判断の権限を渡すこと。責務を Profile に書き、引き受ける責任者を決めてから渡す</text>
  <g class="tx">
    <text x="60" y="66" font-weight="700">引き継ぐもの</text><text x="250" y="66" font-weight="700">例：在庫から返品の Cell へ</text>
    <text x="60" y="94">権限</text><text x="250" y="94">返金と再出荷を判断する権限</text>
    <text x="60" y="120">資源</text><text x="250" y="120">返品を扱う Agent と担当者</text>
    <text x="60" y="146">管理している対象</text><text x="250" y="146">返品の受付と検品の仕組み</text>
    <text x="60" y="172">記録</text><text x="250" y="172">これまでの返品と判断の記録</text>
    <text x="60" y="198">進行中の Mission</text><text x="250" y="198">返品の理由の欄を足す Mission</text>
    <text x="60" y="224">残件</text><text x="250" y="224">受け付けて、まだ返金していない返品</text>
  </g>
  <path d="M40,76 H500 M40,102 H500 M40,128 H500 M40,154 H500 M40,180 H500 M40,206 H500 M230,50 V232" class="lt"/>
  <rect x="530" y="50" width="310" height="182" rx="10" class="xl" style="fill:#fff"/>
  <use href="#i-no" x="626" y="60" width="20" height="20"/><text x="697" y="76" class="ts xc" text-anchor="middle" font-weight="700">残さないもの</text>
  <g class="tx" text-anchor="middle">
    <text x="685" y="104" font-weight="700">責任の空白</text><text x="685" y="124">戻った品を数え直すかを、どちらも判断しない</text>
    <text x="685" y="156" font-weight="700">決定権の重なり</text><text x="685" y="176">返品の再出荷の指示を、両方が出して食い違う</text>
    <text x="685" y="212" class="hc">判断の一つずつに持ち主を決める</text>
  </g>
  <rect x="40" y="254" width="800" height="96" rx="10" class="soft"/>
  <text x="60" y="282" class="ts" font-weight="700">所有者の居場所</text><text x="190" y="282" class="tx">物流が配送と倉庫に分かれ、Contract の所有者が倉庫に移ると、</text>
  <text x="190" y="304" class="tx">結ぶ Cell（在庫と配送）のどれにも属さないので、後任が決まるまで改訂は承認されない（第 7 章）</text>
  <text x="60" y="334" class="ts" font-weight="700">記録</text><text x="190" y="334" class="tx">何を誰に移したかを、後から追える記録に残す。一時的な会話だけに閉じ込めない</text>
</svg>
```

分け直しは、責務と判断の権限を渡すことです。権限・資源・管理している対象・記録・進行中の Mission・残件を引き継ぎ、空白と重なりを残しません。

出典: EAA Core 版 6「1.」「4.」「5.」、EAA Profiles「5. 分離可能な責務」。※ 例と絵の 2 行（空白・重なり）は説明のための仮定で、Core の字ではない。

## 外への責任と、果たしていない保証は残る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="80" width="240" height="180" rx="10" class="box"/><text x="160" y="116" class="t" text-anchor="middle" font-weight="700">店舗</text>
  <rect x="460" y="20" width="380" height="140" rx="10" class="box"/><text x="650" y="56" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text><text x="650" y="88" class="tx" text-anchor="middle">店舗に引き受けた責任を、分けた後も果たす</text>
  <rect x="490" y="104" width="320" height="40" rx="6" class="soft"/><text x="650" y="129" class="tx" text-anchor="middle">保証「返品は翌日までに返金」</text>
  <path d="M650,148 V206" class="ln" marker-end="url(#arr)"/><text x="660" y="184" class="tx">一緒に移す</text>
  <rect x="460" y="210" width="380" height="90" rx="10" class="box"/><text x="650" y="246" class="t" text-anchor="middle" font-weight="700">返品の Cell</text><text x="650" y="278" class="tx" text-anchor="middle">同じ保証を引き受ける</text>
  <path d="M284,140 H456" class="ln" marker-start="url(#arr)" marker-end="url(#arr)"/>
  <text x="440" y="340" class="ts sub" text-anchor="middle">分けたことを理由に外への責任は手放さない。保証を変えるなら、店舗と合意し直す</text>
</svg>
```

返品の Cell を分けた後も、在庫の Cell は店舗に引き受けた責任を果たします。まだ果たしていない保証は引き継ぐ Cell に移し、変えるなら相手と合意し直します。

出典: EAA Core 版 6「1. 責務と分割」、EAA Profiles「5.」。※ 保証の中身は説明のための仮定です。
