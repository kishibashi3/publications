#!/usr/bin/env bash
# AA・EAA 教科書の dev。http://127.0.0.1:8766/ で見る。md を保存すると組み直してブラウザが自動で更新される。build/ には書かない。
set -euo pipefail
cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"
exec node dev.mjs "$@"
