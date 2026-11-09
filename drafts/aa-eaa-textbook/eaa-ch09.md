# 第 9 章　Cell の分け直しと引き継ぎ

群: 切り直しと加わり方
副題: コンテキストスイッチが起き始めたら、Cell を分け直す

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（77de7781）の第 11 章。着手: @ope-ultp1635 msg cfe0fe59（群五）。
この章が拠る本の考え: 主体ごとにコンテキストスイッチが起きないように切り分ける（structure-v5.md「イデア」第 2 文。逐語は roles-kaz 側）。
2d0ca30 までの第 5 章（Cell の分割と統合では、権限・記録・残件・未履行の保証を引き継ぐ）の中身を、この章に持ってきた: 移すもの（core.md:57、profiles.md 5 節 81 行）、責任の空白と決定権の重なり（core.md:58）、未履行の保証と外部保証の再合意（core.md:58、profiles.md:82）、最後のページの既知の不足と Profiles の未決（core.md:11、profiles.md:83・135）。旧第 5 章の Platform の例（development-model.md 5 節）は使わず、例は第 6〜10 章の在庫と物流を続けた（在庫に返品が加わる・物流が配送と倉庫に分かれる、は説明のための仮定）。旧本文は 2d0ca30 の eaa-ch05.md にある。
旧第 5 章の直しを落とさずに持ってきた: ⑤（@ope-ultp1635 msg 281e5366）— 引継ぎの詳細手順を未決としているのは Core ではなく Profiles（profiles.md:83・135）。Core の既知の不足に当たるのは「移行中の責任」だけで、⑥（msg 6fc17eeb 項 15）のとおり、Core の「移行」は版の移行（core.md:79・80）の語なので、分割の引継ぎに当たるかは Core の字では決まらない。最後のページの注に書いた。2 周目（msg 8fbac4e5）— 既知の不足の下に「詳しい手順は未定。いつ決めるかは書いていない」。
足した出どころ: core.md:52（分割は責務と自律的な判断権限を別の責任主体へ引き渡すこと）、core.md:53（引き渡した判断権限は、引き渡した Cell の範囲が後で変わっても、受け取った Cell が新しい版を採用するまで変わらない。版 6 で入った字）、core.md:55（子 Cell 群を持つ Cell も外部には自らが引き受けた責任を果たす）、core.md:99（Contract の所有者が結ぶ Cell のどれにも属さなくなったとき。第 10 章の規定を分け直しに当てた）、core.md:109（引継ぎを追跡可能に残す）。
@reader 目次の通読（349c4d63）で 3 体がこの章を読む章に選んだ。それぞれが探しに来たものを本文で拾った: 読者 A（責任の空白）— p.「責任の空白と、決定権の重なり」に例の 2 行、p.「所有者の居場所も確かめる」に Core がすでに決めている空白の扱い（第 10 章）。読者 B（ART の組み直し）— p.「人のチームの組み直しも同じ」。SAFe が ART の組み直しに何を求めるかは当たっていないので、Core の字と第 2 章の判定を当てる、とだけ書いた。読者 C（サービスの切り方の見直し）— p.「サービスを切り直すときも同じ判定」。第 3 章 p.「サービスの数とは揃わない」・第 4 章 p.「数から決めない」に揃えた。
書き手の読み（注に書いた）: いつ分け直すか（p.「切り替えが始まったら分ける」「行き来が多すぎれば、まとめる」）、ART・サービスへの当て方。Core は分離・再統合で何を引き継ぐかを決めるが、いつ分けるか・いつまとめるかは書いていない（core.md を「分離」「再統合」で grep、当たるのは 57 行だけ）。疎結合・コンテキスト・切り替えの語は Core に 0 件（第 9 章の注と同じ）。
包含と同じ形の字: 分けた後の Cell を元の Cell の中に描いていない。親・子は由来の呼び名（core.md:43、第 5 章 p.「親・子は由来の呼び名」）。
絵: Cell はどれもほかの Cell の枠の外に並べる（core.md:43）。
新しく引く外部の文献は無い。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff。判定の正本 @reviewer 2026-11-08-eaa-textbook-77a7fc9-ch00-04 / ch05-08 / ch09-12-furoku、@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）: p.「切り替えが始まったら分ける」の注に、Adoption Guide「6.」（adoption-guide.md:281）の負荷・専門性との関係を書き手の読みとして書いた（負荷は第 5 章の追える大きさ、専門性は語と記録の違い）。p.「行き来が多すぎれば、まとめる」に「Mission と Contract に書いても」の条件を足し、第 7 章の判定・第 12 章の左の直し方と区別した。p.「人のチームの組み直しも同じ」の絵を「チーム・ART の中で、人が」にし、注に SAFe 2022 年版が value stream に沿った組み直しを戦略的な決定に置くことを書いた。p.「いつ分け直すかは、この本の読み」を外した。次章へのページの「職能で切っている」を「チームや会社で分かれている」にした（第 12 章の例は業務と会社で分かれている）。
v6 の 3 便目（着手: @ope-ultp1635 msg df6c27d8。構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v6.md 87be3308）で、ファイルを eaa-ch11.md から eaa-ch10.md に、章を第 11 章から第 10 章にした。本文・注・絵の「第 N 章」を v6 の番号にした（第 6 章以降は 1 ずつ減らした）。旧第 3〜5 章を指していた所: 注「第 5 章の追える大きさ」→ 第 2 章、注「価値の違い…第 3 章」→ 第 2 章、注「分割の決まりは第 5 章」→ 第 3 章、注「第 3 章 p.「サービスの数とは揃わない」、第 4 章 p.「数から決めない」」→ 第 2 章 p.「軸は重ねて使い、数からは決めない」（二つのページは v6 の 1 便目でこの 1 ページに畳んだ）。この上の記録の章番号は、そのときの番号のまま。
082ceb2 の検算 3 便目を受けて直した（@ope-ultp1635 msg 468b4a37、判定の正本 @reviewer 2026-11-09-eaa-textbook-082ceb2-ch04-constitution-federation 97306492）: 章の概要の文と p.「切り替えが始まったら分ける」の「切り替える」の主語を Cell から「Cell の中の Agent や人」にした（第 2 章の判定は一人ずつ）。
v7 の 2 便目（@ope-ultp1635 msg 7bd9839e）で、第 5・6 章を 1 章にし第 7 章を第 6 章にしたので、章の番号を詰めるためにファイルを eaa-ch10.md から eaa-ch09.md に、章題の番号を第 10 章から第 9 章にした。本文・注・絵は変えていない（中の「第 N 章」は 3 便目で v7 の番号にする）。
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

## 切り替えが始まったら分ける

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <path d="M80,300 H820" class="ln" marker-end="url(#arr)"/><text x="820" y="326" class="tx" text-anchor="end">時間</text>
  <rect x="80" y="80" width="300" height="160" rx="10" class="box"/><text x="230" y="116" class="t" text-anchor="middle" font-weight="700">分けたとき</text>
  <text x="230" y="160" class="ts" text-anchor="middle">第 2 章の判定に通った</text><use href="#i-ok" x="216" y="184" width="28" height="28"/>
  <rect x="500" y="80" width="300" height="160" rx="10" class="xl" style="fill:#fff"/><text x="650" y="116" class="t" text-anchor="middle" font-weight="700">仕事が増えた後</text>
  <text x="650" y="160" class="ts" text-anchor="middle">もう一度、同じ判定を当てる</text><use href="#i-no" x="636" y="184" width="28" height="28"/>
  <path d="M384,160 H496" class="ln dash" marker-end="url(#arr)"/>
</svg>
```

分けたときに第 2 章の判定に通っても、仕事が増えると通らなくなることがあります。同じ判定を時々当て直し、中の Agent や人に切り替えが始まった Cell を分けます。

※ 書き手の読み。Core はいつ分けるかを書いていない。Adoption Guide「6.」の負荷は第 2 章の追える大きさ、専門性は語と記録の違いとして、この判定で見る。

## 例：在庫の Cell に返品が加わる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="200" y="30" width="480" height="270" rx="10" class="box"/><text x="440" y="66" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <rect x="230" y="96" width="200" height="150" rx="6" class="soft"/><text x="330" y="130" class="ts" text-anchor="middle" font-weight="700">在庫</text><text x="330" y="170" class="tx" text-anchor="middle">数を正しく保つ</text><text x="330" y="196" class="tx" text-anchor="middle">ことを優先する</text>
  <rect x="450" y="96" width="200" height="150" rx="6" class="soft"/><text x="550" y="130" class="ts" text-anchor="middle" font-weight="700">返品</text><text x="550" y="170" class="tx" text-anchor="middle">返金の速さを</text><text x="550" y="196" class="tx" text-anchor="middle">優先する</text>
  <path d="M434,170 H446" class="xl"/>
  <text x="440" y="340" class="ts xc" text-anchor="middle">戻った品を数え直すたびに、どちらを優先するかを切り替える</text>
</svg>
```

在庫の Cell が、店舗からの返品も扱うようになりました。在庫は数を正しく保つことを、返品は返金の速さを優先します。判断のたびに切り替えが起きます。

※ 例は説明のための仮定。価値の違いで判定に通らなくなる形は第 2 章で見ました。

## 行き来が多すぎれば、まとめる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="70" width="240" height="160" rx="10" class="box"/><text x="160" y="160" class="t" text-anchor="middle" font-weight="700">Cell</text>
  <rect x="600" y="70" width="240" height="160" rx="10" class="box"/><text x="720" y="160" class="t" text-anchor="middle" font-weight="700">Cell</text>
  <g class="ln"><path d="M284,100 H596"/><path d="M596,130 H284"/><path d="M284,160 H596"/><path d="M596,190 H284"/></g>
  <text x="440" y="90" class="tx" text-anchor="middle">書いても、Mission のたびに照会</text><text x="440" y="214" class="tx" text-anchor="middle">Contract の改訂が止まらない</text>
  <rect x="140" y="270" width="600" height="60" rx="10" class="soft"/><text x="440" y="306" class="ts" text-anchor="middle">相手の文脈を読まないと進まないなら、二つの文脈は一つ</text>
</svg>
```

逆に、Mission と Contract に書いても照会が要り、改訂が止まらない Cell どうしは、境界が文脈に合っていません。まとめ直すか、引き直します。

※ 書き手の読み。書けていないだけなら、直す先は Mission と Contract（第 6・11 章）。Core はいつまとめるかを書いていない。

## 分け直しは、判断の権限を渡すこと

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="300" height="220" rx="10" class="box"/><text x="190" y="96" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="190" y="150" class="ts" text-anchor="middle">返品の責務と、</text><text x="190" y="176" class="ts" text-anchor="middle">返品を判断する権限</text>
  <path d="M340,170 H536" class="ln" marker-end="url(#arr)"/><text x="440" y="158" class="ts" text-anchor="middle">引き渡す</text>
  <rect x="540" y="60" width="300" height="220" rx="10" class="box"/><text x="690" y="96" class="t" text-anchor="middle" font-weight="700">返品の Cell</text>
  <rect x="610" y="140" width="160" height="40" rx="6" class="h"/><text x="690" y="166" class="ts on" text-anchor="middle">判断の責任者</text>
  <text x="690" y="220" class="tx" text-anchor="middle">返品の Profile を引き受ける</text>
  <text x="440" y="330" class="ts sub" text-anchor="middle">責務を Profile に書き、引き受ける責任者を決めてから渡す</text>
</svg>
```

分け直すことは、責務と、自分で判断する権限を別の責任主体に渡すことです。返品の責務を Profile に書き、引き受ける責任者を決めてから渡します。

出典: EAA Core 版 6「1. 責務と分割」。分割の決まりは第 3 章で見ました。

## 移すものは、権限から残件まで

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <g class="ts">
    <text x="60" y="56" font-weight="700">引き継ぐもの</text><text x="360" y="56" font-weight="700">例：在庫から返品の Cell へ</text>
    <text x="60" y="100">権限</text><text x="360" y="100">返金と再出荷を判断する権限</text>
    <text x="60" y="144">資源</text><text x="360" y="144">返品を扱う Agent と担当者</text>
    <text x="60" y="188">管理している対象</text><text x="360" y="188">返品の受付と検品の仕組み</text>
    <text x="60" y="232">記録</text><text x="360" y="232">これまでの返品と判断の記録</text>
    <text x="60" y="276">進行中の Mission</text><text x="360" y="276">返品の理由の欄を足す Mission</text>
    <text x="60" y="320">残件</text><text x="360" y="320">受け付けて、まだ返金していない返品</text>
  </g>
  <path d="M40,72 H840 M40,116 H840 M40,160 H840 M40,204 H840 M40,248 H840 M40,292 H840 M340,30 V336" class="lt"/>
</svg>
```

分けるときも、まとめ直すときも、責務を外すときも、権限・資源・管理している対象・記録・進行中の Mission・残件を引き継ぎます。

出典: EAA Core 版 6「1. 責務と分割」、EAA Profiles「5. 分離可能な責務」。※ 右の列は説明のための仮定です。

## 責任の空白と、決定権の重なり

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="380" height="250" rx="10" fill="url(#hatch)"/>
  <text x="230" y="90" class="t" text-anchor="middle" font-weight="700">責任の空白</text>
  <text x="230" y="140" class="ts" text-anchor="middle">戻った品を在庫に数え直すかを、</text><text x="230" y="166" class="ts" text-anchor="middle">どちらの Cell も判断しない</text>
  <use href="#i-no" x="216" y="196" width="28" height="28"/>
  <rect x="460" y="50" width="380" height="250" rx="10" class="xl" style="fill:#fff"/>
  <text x="650" y="90" class="t" text-anchor="middle" font-weight="700">決定権の重なり</text>
  <text x="650" y="140" class="ts" text-anchor="middle">返品の再出荷の指示を、</text><text x="650" y="166" class="ts" text-anchor="middle">両方の Cell が出して食い違う</text>
  <use href="#i-no" x="636" y="196" width="28" height="28"/>
  <text x="440" y="346" class="t" text-anchor="middle" font-weight="700">分ける前に、判断の一つずつに持ち主を決める</text>
</svg>
```

引き継ぎでは、どちらの Cell も持たない責任が残るか、同じことを両方が決めて食い違うかの失敗が起きます。判断の一つずつに持ち主を決め、どちらも残しません。

出典: EAA Core 版 6「1. 責務と分割」。※ 絵の 2 行は説明のための例で、Core の字ではない。

## 所有者の居場所も確かめる

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="40" width="200" height="150" rx="10" class="box"/><text x="130" y="76" class="t" text-anchor="middle" font-weight="700">在庫</text>
  <rect x="340" y="40" width="200" height="150" rx="10" class="box"/><text x="440" y="76" class="t" text-anchor="middle" font-weight="700">配送</text>
  <rect x="650" y="40" width="200" height="150" rx="10" class="box"/><text x="750" y="76" class="t" text-anchor="middle" font-weight="700">倉庫</text>
  <rect x="680" y="100" width="140" height="40" rx="6" class="h"/><text x="750" y="126" class="ts on" text-anchor="middle">元の所有者</text>
  <path d="M234,115 H336" class="ln"/><text x="285" y="105" class="tx" text-anchor="middle">Contract</text>
  <rect x="40" y="230" width="800" height="110" rx="10" class="soft"/>
  <text x="440" y="270" class="ts" text-anchor="middle">Contract を結ぶのが在庫と配送になり、所有者がそのどちらにも属さないなら、</text>
  <text x="440" y="300" class="ts xc" text-anchor="middle" font-weight="700">後任が決まるまで、その Contract の改訂は承認されない（第 9 章）</text>
</svg>
```

物流が配送と倉庫に分かれ、所有者が倉庫に移ったとします。結ぶ Cell のどれにも属さなくなるので、後任が決まるまで改訂は承認されません。

出典: EAA Core 版 6「4. 提案と変更」。※ 例は説明のための仮定。分け直しの前に、結ぶ Cell と所有者を確かめる。

## まだ果たしていない保証を消さない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="300" height="200" rx="10" class="box"/><text x="190" y="86" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="190" y="140" class="ts" text-anchor="middle">店舗への保証</text><text x="190" y="166" class="ts" text-anchor="middle">「返品は翌日までに返金」</text>
  <path d="M340,150 H536" class="ln" marker-end="url(#arr)"/><text x="440" y="138" class="ts" text-anchor="middle">一緒に移す</text>
  <rect x="540" y="50" width="300" height="200" rx="10" class="box"/><text x="690" y="86" class="t" text-anchor="middle" font-weight="700">返品の Cell</text>
  <text x="690" y="150" class="ts" text-anchor="middle">同じ保証を引き受ける</text>
  <rect x="40" y="280" width="800" height="60" rx="10" class="soft"/><text x="440" y="316" class="ts" text-anchor="middle">保証を変えるなら、店舗と合意し直す</text>
</svg>
```

まだ果たしていない保証は、分けても消しません。引き継ぐ Cell に移します。外に約束した保証を変えるなら、関係する相手と合意し直します。

出典: EAA Core 版 6「1. 責務と分割」、EAA Profiles「5.」。※ 保証の中身は説明のための仮定です。

## 渡した権限は、元の範囲に追随しない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="340" height="220" rx="10" class="box"/><text x="210" y="96" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text>
  <text x="210" y="150" class="ts" text-anchor="middle">後で、自分の範囲が変わった</text>
  <path d="M380,170 H496" class="xl dash"/><use href="#i-no" x="424" y="142" width="28" height="28"/>
  <rect x="500" y="60" width="340" height="220" rx="10" class="box"/><text x="670" y="96" class="t" text-anchor="middle" font-weight="700">返品の Cell</text>
  <text x="670" y="150" class="ts" text-anchor="middle">渡された判断の権限は</text><text x="670" y="176" class="ts" text-anchor="middle">そのまま</text>
  <text x="670" y="226" class="tx" text-anchor="middle">変わるのは、新しい版を採用したとき</text>
</svg>
```

渡した責務と判断の権限は、受け取った Cell のものです。渡した Cell の範囲が後で変わっても、受け取った Cell が新しい版を採用するまで変わりません。

出典: EAA Core 版 6「1. 責務と分割」。採用の進み方は第 8 章で見ました。

## 外への責任は、分けても残る

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="80" width="260" height="180" rx="10" class="box"/><text x="170" y="116" class="t" text-anchor="middle" font-weight="700">店舗</text>
  <rect x="460" y="40" width="380" height="120" rx="10" class="box"/><text x="650" y="90" class="t" text-anchor="middle" font-weight="700">在庫の Cell</text><text x="650" y="122" class="tx" text-anchor="middle">店舗に約束した責任を果たす</text>
  <rect x="460" y="200" width="380" height="100" rx="10" class="box"/><text x="650" y="246" class="t" text-anchor="middle" font-weight="700">返品の Cell</text><text x="650" y="274" class="tx" text-anchor="middle">在庫から分けた Cell</text>
  <path d="M300,140 H456" class="ln" marker-start="url(#arr)" marker-end="url(#arr)"/>
  <text x="440" y="346" class="ts sub" text-anchor="middle">分けた Cell を持つ Cell も、外には自分が引き受けた責任を果たす</text>
</svg>
```

返品の Cell を分けた後も、在庫の Cell は、店舗に自分が引き受けた責任を果たします。分けたことを理由に、外への責任を手放せません。

出典: EAA Core 版 6「1. 責務と分割」（子 Cell 群を持つ Cell も、外部には自らが引き受けた責任を果たす）。

## 人のチームの組み直しも同じ

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="360" height="220" rx="10" class="box"/><text x="220" y="96" class="t" text-anchor="middle" font-weight="700">組み直す前</text>
  <text x="220" y="150" class="ts" text-anchor="middle">一つのチーム・ART の中で、</text><text x="220" y="176" class="ts" text-anchor="middle">人が二つの価値を切り替えている</text>
  <path d="M400,170 H476" class="ln" marker-end="url(#arr)"/>
  <rect x="480" y="60" width="360" height="220" rx="10" class="box"/><text x="660" y="96" class="t" text-anchor="middle" font-weight="700">組み直すとき</text>
  <g class="ts"><text x="510" y="146">同じ判定で切り方を決める</text><text x="510" y="182">権限から残件までを引き継ぐ</text><text x="510" y="218">空白と重なりを残さない</text></g>
  <text x="440" y="330" class="ts sub" text-anchor="middle">中が人のチームでも、Cell として分け直すなら Core の同じ字が当たる</text>
</svg>
```

中が人のチームでも、判定と引き継ぎは同じです。SAFe の ART を組み直すときも、切り方は第 2 章の判定で決め、移すものと空白を同じように確かめます。

※ 書き手の読み（第 2 章）。誰が組み直しを決めるかは書いていない。SAFe の 2022 年の版は、value stream に沿った組み直しを戦略的な決定に置く（付録）。

## サービスを切り直すときも同じ判定

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="60" width="360" height="220" rx="10" fill="url(#hatch)"/>
  <text x="220" y="100" class="t" text-anchor="middle" font-weight="700">これで決めない</text>
  <text x="220" y="160" class="ts" text-anchor="middle">サービスの数</text><text x="220" y="196" class="ts" text-anchor="middle">ドメインの数</text>
  <rect x="480" y="60" width="360" height="220" rx="10" class="box"/>
  <text x="660" y="100" class="t" text-anchor="middle" font-weight="700">これで決める</text>
  <text x="660" y="160" class="ts" text-anchor="middle">一つの主体の中で、</text><text x="660" y="186" class="ts" text-anchor="middle">価値・語・権限が切り替わるか</text>
  <use href="#i-ok" x="646" y="214" width="28" height="28"/>
</svg>
```

サービスの切り方を見直すときも、Cell の切り方はサービスの数では決めません。一つの主体の中で価値・語・権限が切り替わるかで、分ける所とまとめる所を決めます。

※ 書き手の読み。第 2 章 p.「軸は重ねて使い、数からは決めない」と同じ判定です。

## 引き継ぎも、記録に残す

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="200" y="40" width="480" height="260" rx="10" class="box"/>
  <text x="440" y="76" class="t" text-anchor="middle" font-weight="700">追えるように残すもの</text>
  <g class="ts" text-anchor="middle"><text x="440" y="122">意思・Mission とその派生</text><text x="440" y="158">実行・Evidence・受入</text><text x="440" y="194">改訂</text><text x="440" y="230" class="hc" font-weight="700">引継ぎ</text></g>
  <text x="440" y="340" class="ts sub" text-anchor="middle">何を誰に移したかを、一時的な会話だけに閉じ込めない</text>
</svg>
```

何を誰に移したかも、後から追える記録に残します。分け直しを会話だけで決めると、移した権限と残件を後から確かめられません。

出典: EAA Core 版 6「5. 成果と記録」。

## Core はここまでしか決めていない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="30" width="380" height="290" rx="10" class="soft"/>
  <text x="60" y="64" class="t" font-weight="700">Core が決めていること</text>
  <g class="ts"><use href="#i-ok" x="60" y="88" width="22" height="22"/><text x="92" y="105">分離・再統合で引き継ぐもの</text>
  <use href="#i-ok" x="60" y="128" width="22" height="22"/><text x="92" y="145">空白と重なりを残さない</text>
  <use href="#i-ok" x="60" y="168" width="22" height="22"/><text x="92" y="185">保証を消さず、変えるなら再合意</text>
  <use href="#i-ok" x="60" y="208" width="22" height="22"/><text x="92" y="225">渡した権限は採用まで変わらない</text>
  <use href="#i-ok" x="60" y="248" width="22" height="22"/><text x="92" y="265">引継ぎを追える記録に残す</text></g>
  <rect x="460" y="30" width="380" height="290" rx="10" fill="url(#hatch)"/>
  <text x="480" y="64" class="t" font-weight="700">決めていないこと</text>
  <g class="ts"><text x="480" y="102" class="ts" font-weight="700">既知の不足（Core の冒頭が挙げた）</text><text x="480" y="126" class="tx">詳しい手順は未定。いつ決めるかは書いていない</text><text x="480" y="160" class="ts">移行中の責任</text>
  <text x="480" y="210" class="ts" font-weight="700">Profiles が未決・未確定とした</text><text x="480" y="244" class="ts">引継ぎの詳しい手順</text><text x="480" y="276" class="ts">分離・再統合の移行の手順</text></g>
  <text x="440" y="356" class="ts sub" text-anchor="middle">手順が未定の調整を、ほかの Cell からの一方的な強制で埋めない</text>
</svg>
```

何を移し、何を残してはいけないかは Core が決めています。引き継ぎと移行の詳しい手順は、Profiles が未決・未確定としています。

出典: EAA Core 版 6 冒頭の観測欄・「2.」、EAA Profiles「5.」「10.」。※ Core の「移行」は版の移行の語で、分け直しの引き継ぎに当たるかは決まらない。

## 次章へ：導入の最初の一歩

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="60" y="80" width="260" height="160" rx="10" class="box"/><text x="190" y="150" class="t" text-anchor="middle" font-weight="700">いまの分業</text><text x="190" y="186" class="ts" text-anchor="middle">チームや会社で分かれている</text>
  <rect x="560" y="80" width="260" height="160" rx="10" class="hl" style="fill:#fff"/><text x="690" y="150" class="t hc" text-anchor="middle" font-weight="700">記録を見る</text><text x="690" y="186" class="ts" text-anchor="middle">どこを越えて行き来しているか</text>
  <path d="M320,160 H556" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="300" class="ts" text-anchor="middle">第 11 章</text>
</svg>
```

ここまでは、Cell で分業する形を見てきました。第 11 章では、いまの分業から EAA に移るときの、最初の一歩を見ます。
