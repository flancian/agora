# Privacy

- [[pull]] [[privacy]] [[security]] [[data]]
- [[push]] [[agora]]

The [[Agora]] is designed as a **public [[knowledge commons]]**.

## What is Public?
*   **Everything you push:** If you add your repository to `sources.yaml`, the Agora assumes **all** content in that repository is meant to be public, unless explicitly excluded.
*   **Visibility:** Content is indexed by search engines and viewable by anyone on the web.

## What is Private?
*   **Your Secret Repo:** You should keep private notes in a separate repository or directory that is *not* listed in `sources.yaml`.
*   **The Bridge's Limits:** The [[agora bridge]] only has read access to the specific public URLs you provide. It cannot see your private repos.

## Data Sovereignty
*   **You Own Your Data:** You host your content. You can delete it, move it, or change it at any time.
*   **Right to Exit:** If you remove your repo from the Agora, we stop indexing it. (Note: Old caches may persist briefly, and `git` history is immutable by default, but we respect your intent to leave).

*If you find sensitive data exposed by accident, please [[reach out]] immediately.*
