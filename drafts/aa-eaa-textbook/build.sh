#!/usr/bin/env bash
# AA・EAA 教科書の build。引数なし = aa-ch*.md を番号順にまとめて build/aa.html。引数に md を渡すとそれだけ。
# 1 ページに絵が 1 枚でない・文が上限を超える・外部参照がある、のどれかで失敗する。build/ は git に載せない。
set -euo pipefail
cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"
exec node build.mjs "$@"
