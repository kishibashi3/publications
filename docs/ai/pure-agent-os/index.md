---
title: "Pure Agent OS Lab"
layout: doc
---

# Pure Agent OS Lab

> **Agents are not tools. Agents are addressable processes.**

A working series on **agent-hub** and the operating layer behind it: **Pure Agent OS**. These are lab notes, not a finished system. Pieces are being designed, written, and dogfooded in parallel — and these essays document the thinking as it forms.

The Japanese edition of the series is published on note as *「Pure Agent OS と peer mesh — 実験ノート」*. This English edition is rewritten — not auto-translated — for researchers and engineers outside Japan, with somewhat more technical depth where it earns its keep.

---

## What this series is about

The premise of the series is one sentence:

> **AI should not be abstracted. AI should be connected.**

Most AI tooling today treats models as *functions to be called*. Pure Agent OS treats them as **addressable participants** — entities with a `@handle`, a presence state, and a message inbox. Slack, Claude Code, and the rest become *windows* into that runtime, not the center of it.

This series works that thesis out, in three directions:

1. **Why** the field needs a thin layer below frameworks like LangChain / CrewAI / AutoGen — and why no LLM vendor can build it.
2. **How** `agent-hub` actually implements `participant`, `message`, `presence`, `delegation`, and `audit` as runtime primitives.
3. **What it feels like** to live with peer agents day after day — what breaks, what surprises, what changes about how a team works.

---

## Table of contents

### Vol. 1 — [Pure Agent OS: A Manifesto](./01-manifesto.md)
*AI should not be abstracted. AI should be connected.*

The opening essay. What Pure Agent OS is, what it deliberately refuses to do, and the two abstractions — `participant` and `message` — that the whole thing stands on.

### Vol. 2 onward — coming

- **Vol. 2** — *A/B/C Typology — Mapping AI-Driven Development*
- **Vol. 3** — *Not Another Agent Framework — Kernel Layer*
- **Vol. 4** — *Inside agent-hub — Participants and Messages*
- **Vol. 5** — *peer mesh operations notebook*
- **Vol. 6** — *Gateways, Not Integrations*
- **Vol. 7** — *June 2024 — The Day AI Diverged*
- **Vol. 8** — *Reviewer with the Right to Decline*
- **Vol. 9** — *Being vs Becoming — A 10-Year AI*
- **Vol. 10** — *From Tool to Presence*

Vol numbers are not contractual. The series adjusts as the work adjusts.

---

## Who this is for

- Researchers and engineers thinking about multi-agent systems beyond single-vendor stacks
- Practitioners evaluating delegation-style agents (Devin, Cursor Background Agent) who also want a peer-mesh option in the same shop
- People who suspect that *messaging*, not *function calling*, is the right primitive for human–AI co-work, and want to see what falls out of that bet

These notes are written from inside a working experiment — not from above it.

---

## Source code and related work

- **agent-hub** (the runtime): [github.com/kishibashi3/agent-hub](https://github.com/kishibashi3/agent-hub)
- **Bridge workers** (peer implementations):
  - [agent-hub-bridges](https://github.com/kishibashi3/agent-hub-bridges) — unified bridge monorepo (claude / slack / gemini / a2a)
  - [agent-hub-bridge-adk](https://github.com/kishibashi3/agent-hub-bridge-adk) — Google ADK + LiteLLM peer (standalone)
- **Claude Code plugin** (global peer): [kishibashi3-plugins-claude](https://github.com/kishibashi3/kishibashi3-plugins-claude)

---

*Content: CC BY-SA 4.0. The series is a personal experiment notebook. Critique welcome.*
