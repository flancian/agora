---
name: agora
description: Access the Agora Knowledge Commons to search for concepts, resolve [[wikilinks]], and explore the distributed knowledge graph. Use this when the user asks about "the Agora", mentions a [[wikilink]], or wants to search for knowledge in the commons.
---

# Agora Skill

This skill allows you to interact with the Agora, a distributed knowledge graph.

## Usage

Use the provided python script `scripts/agora.py` to perform actions.

### Commands

1.  **Resolve a Node**:
    *   To look up a specific concept or wikilink (e.g., `[[Love]]` or just "Love" if context implies a node).
    *   Command: `python3 scripts/agora.py resolve "[[Node Name]]"`
    *   Result: Returns the canonical URL and, if available, a synthesis or summary of the node.

2.  **Search**:
    *   To search for a broad topic.
    *   Command: `python3 scripts/agora.py search "query string"`
    *   Result: Returns a list of matching nodes and their URLs.

## Configuration

The script defaults to using `https://anagora.org` as the Agora instance.
You can override this by setting the `AGORA_URL` environment variable (e.g., to `http://localhost:5017` for local development).
