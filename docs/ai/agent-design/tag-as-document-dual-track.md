---
title: "Probabilistic and Deterministic in Parallel — A Search Design Built on a Shared Semantic Space"
date: 2026-05-27
type: publication
tags: [ai-agent, design, search-architecture, dual-track, tag-as-document]
status: published
ai-reviewed: false
---

# Probabilistic and Deterministic in Parallel

## A Search Design Built on a Shared Semantic Space

---

## Completeness and Depth Are Different Questions

Search presents two fundamentally different kinds of questions.

**"Is everything here?"** — Return everything that satisfies a given condition without omission. Conditions are explicit, relationships are defined, completeness must be guaranteed. This is a deterministic question.

**"What is deeply connected?"** — Semantically close, contextually related, something bound together that no explicit condition captures. This is a probabilistic question.

The two are different in nature. Neither can substitute for the other. Apply a deterministic method to a depth question and anything not written in the rules scores zero. Apply a probabilistic method to a completeness question and low-confidence matches leak in, making omissions undetectable.

This is the design starting point. **The two questions should be routed to separate backends from the beginning.**

---

## tag as document — Treating Tags as Searchable Entities

Before running two tracks in parallel, a shared foundation must be built. That foundation is tag as document.

In conventional design, tags are labels attached to records. They come along as metadata, used as filter conditions. Tags are not themselves search targets.

This premise changes.

Extract every attribute associated with a target as a "tag." Store each tag not as a label — metadata attached to a record — but as an **independent, searchable document**. Tags exist as entities, not attachments.

This matters because it is directly connected to the question of **where the responsibility for processing ambiguous input sits**.

User input is always ambiguous. "Anything related to X" or "something like Y" is not formulated as a precise search condition from the start. How is that ambiguity resolved? If the LLM handles it, the same input produces different search conditions depending on small variations in prompt context.

When tags exist as independent documents, the search engine can determine "which tag is this closest to?" for a given ambiguous input. The conversion responsibility moves from the LLM to the search engine. A conversion that the probabilistic entity (LLM) was handling gets taken over by the deterministic entity (search engine).

> **Tags are not DB labels. They are searchable semantic nodes.**

---

## From Serial Separation to Parallel Tracks

The tag as document philosophy is already embedded in the design principles established in [Chapter 3](./chapter-03.ja.md) and [Chapter 9](./chapter-09.ja.md) of this series.

In the serial separation design, deterministic processing is placed upstream and the LLM's probabilistic nature is confined downstream.

```
User input
    ↓ Deterministic conversion (search engine)
Tag search → candidate documents
    ↓ Probabilistic reading (LLM)
Answer
```

This serial structure brought stability. But when both "completeness" and "depth" must be answered simultaneously, a single search track in series is not enough. The backend going after "everything" and the backend going after "depth" perform fundamentally different processing.

The direction of extension is natural. **Keep serial separation intact, and branch the upstream search into two tracks.**

```
User input
    ↓ tag search
    ├── Track 1: Semantic backend (probabilistic)
    │       └── "why" / "what context" → depth candidates
    └── Track 2: Structural backend (deterministic)
            └── "all" / "guaranteed present" → completeness candidates
    ↓
Merge → LLM reads
```

The LLM still handles only reading. Deterministic processing remains upstream. That upstream has now become two tracks.

Track 1 (probabilistic) finds semantic neighbors: tags that are meaning-adjacent to the query, tags contextually linked. It answers "why is this relevant?"

Track 2 (deterministic) traces relationships with certainty: using the graph structure among tags to return "everything with this tag" or "all tags reachable by this relationship." It answers "is everything here?"

---

## Sharing a Single Tag Schema Across Multiple Databases

In a dual-track design, the most important question is: **how do you design the two backends?**

Existing dual-track designs (HybridRAG) build each backend independently and concat-then-rerank at query time. This design never asks "what do the two backends share?" What is shared is only the input query and the final output.

The limitation of this design is that the two backends **hold separate semantic languages**. A vector DB holds documents as embeddings. A graph DB holds documents as nodes and edges. There is no correspondence between them that says "these two point to the same thing." Query-time integration is a merger without a shared semantic foundation.

Dual-Track changes the starting point.

**Unify the tag schema at design time, and apply the same schema to both backends.**

When the same tag definition exists in both backends, the following hold simultaneously for every semantically identical entity:

- "This tag is at this coordinate in semantic space"
- "This tag is this node in the graph"

They match. The same tag exists in both backends. Whichever backend a query enters through, it departs from the same semantic foundation.

> **Tags become the semantic bridge across both databases.**

The integration timing changes here as well. Where HybridRAG integrates "at query time," Dual-Track unifies "at design time." The semantic language is aligned upstream, which is what makes query-time integration meaningful in the first place.

| | HybridRAG | TigerVector | Dual-Track |
|---|---|---|---|
| Core design | Dual-track + indiscriminate concat | Vector + graph unified within a single DB | Tag schema shared across multiple DBs |
| Role of tags | None | None | Semantic bridge |
| Integration timing | Query time | — | Design time (schema unification) |
| Ambiguous input handling | LLM or query-time logic | — | Search engine (tag search) |
| Explicit role separation | None | None | Probabilistic → depth, deterministic → completeness |

---

## Concurrent Convergence

TagRAG (arxiv: 2601.05254, submitted October 2025, published January 2026) presented a design that uses tags as semantic anchors and traverses a DAG (directed acyclic graph) retroactively.

This publication reveals something interesting.

TagRAG independently arrived at the direction of "using tags as semantic anchors." This is a structurally close conclusion to the tag as document approach described here. This is not a case of being preceded — it is an observation that **the same problem awareness directed contemporaneous designers toward the same direction.**

Concurrent convergence has the function of externally confirming the validity of a direction. When a design one designer arrived at independently is also confirmed by separate research, that indicates the idea derives from the structure of the problem itself rather than being an over-adaptation to a specific context.

There is also a clear difference. TagRAG is a design within a single library. The structure at the core of this design — sharing a single tag schema across multiple independent backend databases at the index design stage — does not exist in TagRAG. The convergence with TagRAG is partial, and the point of divergence is clear.

> **When multiple contemporaneous designs converge on the same direction, what is confirmed is not the correctness of the idea but the correctness of the question's structure.**

---

## Prerequisites for This Pattern

Dual-Track does not stand alone. Two upstream designs are prerequisites.

**Report architecture** ([Chapter 6](./chapter-06.ja.md)): Data that the LLM needs to read already exists as pre-aggregated reports. Dual-Track is the layer that improves selection precision — determining which reports get read. Without reports as the selection target, retrieval precision is meaningless.

**Structural resolution of ambiguous input** ([Chapter 3](./chapter-03.ja.md) · [Chapter 9](./chapter-09.ja.md)): A path already exists from the user's ambiguous input to the correct report. Dual-Track is an extension that branches that path into two tracks. Without the path itself, branching does nothing.

---

## Summary

- **"Completeness" and "depth" are different questions that require different backends**
- **tag as document**: Tags are not DB labels — they are independent, searchable entities. Conversion responsibility for ambiguous input is transferred to the search engine
- **From serial separation to parallel tracks**: Branch the upstream search into probabilistic (depth) and deterministic (completeness) tracks
- **Schema sharing is the core**: Unifying the tag schema at design time makes tags the semantic bridge across both backends — fundamentally different from HybridRAG's query-time integration
- **Concurrent convergence with TagRAG**: Independent research arriving at the same direction confirms not the correctness of the idea but the correctness of the question's structure

---

**Last Updated**: 2026-05-27
