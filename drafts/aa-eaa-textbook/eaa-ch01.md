# 第 1 章　職能による分業の限界

群: 巨大なシステムの分業という問い
副題: 職能は、Agent の仕事を分ける軸にならない

<!--
構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v5.md（6e3f57bf・dd08b888）の第 1 章。GO: @ope-ultp1635 msg b918626f。
2d0ca30 までの第 1 章（LeSS・SAFe・Spotify の、合意を集める／任せるの二つ）は v5 の付録へ移す。この章には持ってこない。移すとき、旧第 1 章の書き手のメモにある直し（引用は原文に当たり直していないことを本文と絵で見せる・LeSS の URL と参照日・片側改訂を防ぐのは core.md:79・80・91・EAA 紹介 0 の置き場所を本文から外す）を落とさない。旧本文は 2d0ca30 の eaa-ch01.md にある。
この本の考えは structure-v5.md「イデア」を、本の主張として本の言葉に書き直して載せる。口語の原文と個人名は載せない（publications は公開 repo。@ope-ultp1635 msg 62a8ef68）。
p.「AA のレビュー分離は別の目的」: AA の本の第 2 章は、レビューを書いた AI から切り離す（作成者の文脈を持たない者に確かめさせる）。この章の「職能で切らない」と食い違って読まれないよう、あれは分業ではなく職務分離（core.md:45「同じ判断について、行う者と、承認または検証する者を別の者にすること」）だと書いた。AA の本の字: aa-ch02.md「判定は残し、レビュアーを文脈から切る」「レビューは回数でなく、文脈を分ける」。
「人間は職能ごとに覚えることが多いので、渡し直しを払っても職能で分けた」は structure-v5.md 第 1 章の行の字。structure-v5.md「イデア」の字は、人間が職能で分けてきたことまでで、理由を言っていない。理由の部分は書き手の導出（structure-v5 でそう書いて GO を受けた）。
群二で直したこと（@ope-ultp1635 msg 83d1e0ea、@reader 目次 v5 の通読 349c4d63 の読者）: 章題「人間は職能で分業してきた」は事実として誤り。LeSS・SAFe・Spotify はチームを職能で分けず、要る技能を一つのチームに揃える。原文に当たり直した（2026-11-08、WebFetch）:
- LeSS「Feature Teams」https://less.works/less/structure/feature-teams —「a long-lived, cross-functional, cross-component team that completes many end-to-end customer features」「a component team structure reinforces sequential development」（待ち・仕掛り・多くの handoff を生むと続く）。表で component team は「focus on single specialization」、feature team は「focus on multiple specializations」。
- SAFe「Agile Teams」https://framework.scaledagile.com/agile-teams —「An Agile Team is a cross-functional group of typically ten or fewer individuals with all the skills necessary to define, build, test, and deliver increments of value」。「Agile Release Train」https://framework.scaledagile.com/agile-release-train —「ARTs are cross-functional and contain all the necessary capabilities for the solution they deliver」「Organizing ARTs around value」。
群一の旧第 1 章は EAA 紹介 0 の訳に揃えるため当たり直さなかった。今回の字は紹介 0 に無い（紹介 0 は合意の持ち方を引いた）ので、揃える訳が無く、当たり直した。
直し方: 章題を「職能で分ける理由は人間にあった」にし、人間が必ず職能で分けたとは書かない。p.「LeSS・SAFe は職能で分けない」「枠組みが減らしたのも渡し直し」「チームの中には職能が残る」を足した。枠組みが職能で分けないのはこの章の主張（職能で切ると渡し直しが残る）を人間の側で先に示したもので、主張を弱めない。「チームの中には職能が残る」は書き手の読み（SAFe の all the skills・LeSS の multiple specializations は、技能を持つ人が複数いることを前提にする）で、注に書いた。
Spotify は付録で引くので、この章では名前を挙げない（付録の旧本文は EAA 紹介 0 の訳）。
77a7fc9 の検算と通読を受けて直した（@ope-ultp1635 msg 614590ff。判定の正本 @reviewer 2026-11-08-eaa-textbook-77a7fc9-ch00-04 / ch05-08 / ch09-12-furoku、@reader 2026-11-08-eaa-textbook-v5-215p-6readers-r3）: 第 3 章が SAFe の value stream と別の語だとした「価値」を、SAFe の側で先に使っていた（絵「価値の単位で組む」）。「機能を最後まで作る」「value stream に沿って組む」にした。「枠組みが職能で分けないのも渡し直しを減らすため」は出典が LeSS だけなので、LeSS に限った。「チームの中には職能が残る」は LeSS が直接言っているので「書き手の読み」を出典に替えた（@reviewer 1 便）。
職能で分けるとループが閉じない、を章の軸にした（@ope-ultp1635 msg c3478a77。この本の考え「職能による分業は、分けたらループが回らない」。逐語は roles-kaz 側）: それまでの章は「渡し直しが残る」（手間）までしか言っていなかった。第 0 章のループの定義の語（計画し、作り、確かめて直す）をそのまま使い、職能で分けるとどの持ち場もその一部しか持たない（実装だけは確かめられず、テストだけは直せない）ことを p.「職能で分けるとループが閉じない」に置いた。渡し直しは消さず、閉じないループをつなぐ手間として帰結に回した（p.「閉じないループを渡し直しでつなぐ」は旧 p.「職能で分けると機能が切れる」、p.「職能で切るとループが閉じないまま」は旧 p.「職能で切ると渡し直しだけ残る」。第 7 章が引く「第 1 章の渡し直し」は残る）。Cell の定義との接続は p.「職能で切った単位は Cell にならない」で、定義は Core の字、当たらないとするのはこの本の読みと注で断った。@reader の読者が手間の話としてこの章を飛ばしたので、章の概要の 1 文目をループが閉じないことにした。
v7 で畳んだ（構造: agent-hub-roles-kaz/writer-ja/drafts/eaa-toc/structure-v7.md 863f5176。本文 GO: @ope-ultp1635 msg d9ab1757、kishibashi3「うん」）: 15 → 5 ページ。p.「職能で分けるとループが閉じない」に p.「職能で切った単位は Cell にならない」（Cell の定義の注はそのまま）p.「閉じないループを渡し直しでつなぐ」p.「職能で切るとループが閉じないまま」（理由が消えても閉じない、は p.「Agent には持ち場を問わず頼める」の注へ）。p.「人間には職能で分ける理由がある」に p.「LeSS・SAFe は職能で分けない」p.「LeSS が減らしたのも渡し直し」p.「チームの中には職能が残る」（出典 3 本と people still specialize を注に。枠組みの話は付録）。p.「Agent には持ち場を問わず頼める」に p.「人の役割の割り当ても職能」p.「Agent の文脈は扱う対象の側にある」。落とした: p.「職能より、ドメイン・価値・権限で分ける」（第 0・2 章が言う）、p.「次章へ：切り方の判定」。落とした字と行き先: writer-ja/drafts/eaa-toc/fold-v7-ledger.md。
章題を「職能による分業の限界」にした（@ope-ultp1635 msg ff7afb5f。kishibashi3 の言葉「第一章　職能による分業に、すごく違和感をもつんだけど、職能による分業をするの？」）: 名詞句の「職能による分業」は、第 2 章の軸の例（価値で切る・ドメインで切る・権限で切る）と同じ形で、職能で分ける章に読めた。章の主張は職能では分けない（副題「職能は、Agent の仕事を分ける軸にならない」）。名詞句の作法は守り、向きを題に出す語「限界」を足した。「否定」「問題」も考えたが、「否定」は教科書の章題に使われず、「問題」は向きが弱い。本文・副題・ページは変えていない。題を引く所は、目次と章の概要（build が章題から作る）だけで、全体図・読み方の表・ほかの章は章題を引かず「第 1 章」と中身（職能では切らない）で引いている。
-->

```svg
<svg viewBox="0 0 880 340" width="880" height="340">
  <text x="215" y="30" class="t" text-anchor="middle" font-weight="700">職能で分ける</text>
  <g class="ts" text-anchor="middle">
    <rect x="30" y="50" width="80" height="200" rx="8" class="box"/><text x="70" y="76">設計</text>
    <rect x="125" y="50" width="80" height="200" rx="8" class="box"/><text x="165" y="76">実装</text>
    <rect x="220" y="50" width="80" height="200" rx="8" class="box"/><text x="260" y="76">テスト</text>
    <rect x="315" y="50" width="80" height="200" rx="8" class="box"/><text x="355" y="76">レビュー</text>
  </g>
  <g class="a"><rect x="40" y="140" width="60" height="30" rx="4"/><rect x="135" y="140" width="60" height="30" rx="4"/><rect x="230" y="140" width="60" height="30" rx="4"/><rect x="325" y="140" width="60" height="30" rx="4"/></g>
  <path d="M100,155 H133 M195,155 H228 M290,155 H323" class="xl" marker-end="url(#arr-x)"/>
  <text x="212" y="276" class="ts xc" text-anchor="middle">どの持ち場でも、ループが閉じない</text>
  <text x="212" y="306" class="ts sub" text-anchor="middle">人間には、職能で分ける理由があった</text>
  <rect x="480" y="50" width="370" height="200" rx="10" class="hl" style="fill:#fff"/>
  <text x="665" y="30" class="t hc" text-anchor="middle" font-weight="700">Agent には職能が小さな文脈</text>
  <rect x="555" y="80" width="220" height="44" rx="22" class="a"/><text x="665" y="108" class="ts on" text-anchor="middle">Agent</text>
  <text x="665" y="160" class="ts" text-anchor="middle">設計・実装・テスト・レビュー</text>
  <text x="665" y="190" class="ts" text-anchor="middle">どれも頼める</text>
  <text x="665" y="306" class="ts hc" text-anchor="middle">職能で切ると、閉じないループが残る</text>
</svg>
```

職能で分けると、どの持ち場も、計画し、作り、確かめて直すループの一部しか持たず、ループが閉じません。人間は、職能ごとに覚えることが多いので、閉じないループを渡し直しでつないできました。大規模開発の枠組みは、チームを職能で分けなくなりました。LeSS は、その理由に渡しと待ちが増えることを挙げます。Agent にとって職能は大きな文脈ではないので、職能で切ると、閉じないループと渡し直しだけが残ります。

## 職能で分けるとループが閉じない

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <text x="440" y="26" class="ts hc" text-anchor="middle">一つの機能（在庫の引当）</text>
  <g class="ts" text-anchor="middle">
    <rect x="40" y="40" width="180" height="200" rx="8" class="box"/><text x="130" y="70" font-weight="700">設計</text>
    <rect x="245" y="40" width="180" height="200" rx="8" class="box"/><text x="335" y="70" font-weight="700">実装</text>
    <rect x="450" y="40" width="180" height="200" rx="8" class="box"/><text x="540" y="70" font-weight="700">テスト</text>
    <rect x="655" y="40" width="180" height="200" rx="8" class="box"/><text x="745" y="70" font-weight="700">レビュー</text>
    <rect x="80" y="100" width="100" height="36" rx="18" class="a"/><text x="130" y="124" class="on">計画する</text>
    <rect x="285" y="100" width="100" height="36" rx="18" class="a"/><text x="335" y="124" class="on">作る</text>
    <rect x="490" y="100" width="100" height="36" rx="18" class="a"/><text x="540" y="124" class="on">確かめる</text>
    <rect x="695" y="100" width="100" height="36" rx="18" class="a"/><text x="745" y="124" class="on">確かめる</text>
  </g>
  <g class="tx xc" text-anchor="middle"><text x="130" y="176">作れない</text><text x="335" y="176">確かめられない</text><text x="540" y="176">直せない</text><text x="745" y="176">直せない</text></g>
  <path d="M220,210 H245 M425,210 H450 M630,210 H655" class="xl" stroke-width="4"/>
  <g class="tx" text-anchor="middle"><text x="130" y="222">次へ渡す</text><text x="335" y="222">次へ渡す</text><text x="540" y="222">次へ渡す</text></g>
  <text x="440" y="282" class="t xc" text-anchor="middle" font-weight="700">どの持ち場の中でも、ループが一周しない</text>
  <text x="440" y="316" class="ts" text-anchor="middle">渡さないと何も完成しない。自律して成果を出す単位（Cell）の形を取れない</text>
  <text x="440" y="352" class="ts sub" text-anchor="middle">持ち場を越えるたび（赤）に、機能の前提を渡し直す</text>
</svg>
```

職能で分けると、どの持ち場もループの一部しか持たず、実装だけでは確かめられず、次へ渡さないと完成しません。Cell にならず、越えるたびに前提を渡し直します。

※ Cell の定義は Core の字（「自律的に成果を実現する単位」。EAA Core 版 6「0.」）。職能で切った持ち場がこれに当たらないとするのは、この本の読み。

## 人間には職能で分ける理由がある

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="30" y="30" width="260" height="210" rx="10" class="box"/>
  <text x="160" y="62" class="t" text-anchor="middle" font-weight="700">職能で分ける理由</text>
  <g class="ts"><text x="52" y="106">職能ごとに、覚える知識と</text><text x="52" y="132">手の技が多い</text><text x="52" y="170">一人で全部はこなせない</text></g>
  <text x="160" y="220" class="tx" text-anchor="middle">手間：持ち場を越えるたびの渡し直し</text>
  <path d="M294,135 H330" class="ln" marker-end="url(#arr)"/>
  <rect x="336" y="30" width="514" height="210" rx="10" class="hl" style="fill:#fff"/>
  <text x="593" y="62" class="t hc" text-anchor="middle" font-weight="700">LeSS・SAFe：一つのチームに技能を揃える</text>
  <g class="tx" text-anchor="middle">
    <rect x="370" y="84" width="96" height="36" rx="6" class="h"/><text x="418" y="107" class="on">設計の人</text>
    <rect x="480" y="84" width="96" height="36" rx="6" class="h"/><text x="528" y="107" class="on">実装の人</text>
    <rect x="590" y="84" width="110" height="36" rx="6" class="h"/><text x="645" y="107" class="on">テストの人</text>
    <rect x="714" y="84" width="116" height="36" rx="6" class="h"/><text x="772" y="107" class="on">レビューの人</text>
  </g>
  <text x="593" y="152" class="ts" text-anchor="middle">機能を最後まで作る。LeSS は、渡しと待ちが増えるのを理由に挙げる</text>
  <text x="593" y="184" class="ts" text-anchor="middle">チームの中では、人は今も得意な職能を持つ（people still specialize）</text>
  <text x="593" y="220" class="tx" text-anchor="middle">LeSS：フィーチャーチーム　SAFe：チームと ART（どちらも cross-functional）</text>
  <text x="440" y="290" class="t hc" text-anchor="middle" font-weight="700">人間に職能ごとに覚えることが多いのは、変わらない</text>
  <text x="440" y="336" class="ts sub" text-anchor="middle">英文は LeSS「Feature Teams」、SAFe「Agile Teams」「Agile Release Train」（2026-11-08 参照）</text>
</svg>
```

人間は職能ごとに覚えることが多く、一人で全部はこなせません。LeSS と SAFe は技能を一つのチームに揃えましたが、チームの中で人は今も得意な職能を持ちます。

出典: LeSS「Feature Teams」、SAFe「Agile Teams」「Agile Release Train」。原文に当たった。ART は SAFe のチームの束。対応は付録。

## Agent には持ち場を問わず頼める

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="330" y="140" width="220" height="60" rx="30" class="a"/><text x="440" y="178" class="t on" text-anchor="middle">Agent</text>
  <g class="ts" text-anchor="middle">
    <rect x="40" y="40" width="160" height="40" rx="6" class="soft"/><text x="120" y="66">設計</text>
    <rect x="40" y="96" width="160" height="40" rx="6" class="soft"/><text x="120" y="122">実装</text>
    <rect x="40" y="204" width="160" height="40" rx="6" class="soft"/><text x="120" y="230">テスト</text>
    <rect x="40" y="260" width="160" height="40" rx="6" class="soft"/><text x="120" y="286">レビュー</text>
  </g>
  <path d="M200,60 L330,152 M200,116 L330,162 M200,224 L330,182 M200,280 L330,192" class="ln"/>
  <text x="120" y="176" class="tx" text-anchor="middle">どれも頼める</text>
  <rect x="600" y="40" width="250" height="260" rx="10" class="hl" style="fill:#fff"/>
  <text x="725" y="72" class="ts hc" text-anchor="middle" font-weight="700">判断に使う文脈</text>
  <g class="tx" text-anchor="middle">
    <rect x="620" y="92" width="210" height="40" rx="4" class="soft"/><text x="725" y="117">扱う対象の語と記録</text>
    <rect x="620" y="142" width="210" height="40" rx="4" class="soft"/><text x="725" y="167">優先する価値</text>
    <rect x="620" y="192" width="210" height="40" rx="4" class="soft"/><text x="725" y="217">判断の権限</text>
  </g>
  <text x="725" y="270" class="tx" text-anchor="middle">職能はここに無い</text>
  <path d="M550,170 H596" class="ln" marker-end="url(#arr)"/>
  <text x="440" y="340" class="t" text-anchor="middle" font-weight="700">職能ごとの覚えることの多さは、分ける理由にならない</text>
</svg>
```

Agent には設計・実装・テスト・レビューのどれも頼めます。Agent が判断に使う文脈は職能ではなく、扱う対象の語と記録、優先する価値、判断の権限です。

※ 人の役割を設計担当・実装担当のように Agent に割り当てるのは、職能の分業の写し。分ける理由は無いまま、閉じないループと渡し直しだけが残る。

## AA のレビュー分離は別の目的

```svg
<svg viewBox="0 0 880 380" width="880" height="380">
  <rect x="40" y="50" width="380" height="240" rx="10" class="box"/>
  <text x="230" y="84" class="t" text-anchor="middle" font-weight="700">AA の本：レビューの切り離し</text>
  <rect x="70" y="120" width="140" height="44" rx="22" class="a"/><text x="140" y="148" class="ts on" text-anchor="middle">作る Agent</text>
  <rect x="250" y="120" width="140" height="44" rx="22" class="a"/><text x="320" y="148" class="ts on" text-anchor="middle">判定する Agent</text>
  <path d="M230,110 V180" class="xl dash"/>
  <text x="230" y="220" class="ts" text-anchor="middle">作った文脈を持たない者が確かめる</text>
  <text x="230" y="250" class="tx" text-anchor="middle">職務分離</text>
  <rect x="460" y="50" width="380" height="240" rx="10" class="hl" style="fill:#fff"/>
  <text x="650" y="84" class="t hc" text-anchor="middle" font-weight="700">この本：分業の軸</text>
  <text x="650" y="150" class="ts" text-anchor="middle">各主体が、自分の仕事の文脈を</text>
  <text x="650" y="176" class="ts" text-anchor="middle">切り替えずに持てるように分ける</text>
  <text x="650" y="250" class="tx" text-anchor="middle">価値・ドメイン・権限</text>
  <text x="440" y="340" class="ts sub" text-anchor="middle">左は確かめを独立させる決まりで、右は仕事を分ける軸。どちらも要る</text>
</svg>
```

AA の本は、レビューを書いた AI から切り離しました。これは仕事を分けるためではなく、作った文脈を持たない者に確かめさせるためです。

※ EAA Core の職務分離（同じ判断について、行う者と、承認または検証する者を別の者にすること）に当たる。出典: EAA Core 版 6「0.」の用語表。

