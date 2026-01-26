# Agora Meta-Repo Context

This repository (`~/agora`) is the root of the Agora structure on this system. It contains:
1.  **Documentation**: High-level architecture and philosophy (`PHILOSOPHY.md`, `AGORA.md`).
2.  **Mount Points**: `garden/`, `stream/`, `stoa/` where sub-repositories (users, servers, bridges) are mounted.
3.  **Skills**: The home of the `agora-explorer` Gemini Skill (`.gemini/skills/agora`).

## The Agora Skill

We have implemented a **Gemini CLI Skill** in `.gemini/skills/agora` that allows an agent to natively interact with this Agora.

*   **Capabilities**:
    *   **Resolve**: Look up `[[wikilinks]]` to find their canonical URL (and potentially content).
    *   **Search**: Query the Agora for topics.
*   **Usage**: The agent can "use" this skill to ground its responses in the knowledge stored here.

## Architecture

*   **Source of Truth**: The `garden` directory is the primary data store.
*   **Integration**: This repo serves as the "glue" that binds the `agora-server` (Flask app) and `agora-bridge` (Social bots) together into a cohesive whole.
