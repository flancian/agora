# Agora V0.5

- The v0.5 is:
  - Foam/Obsidian based notes forming a personal digital garden.
  - Hosted in a public or private repository, by default git.
  - Federated/interlinked using a conventional scheme, plus a set of ancillary tools (scripts).
  - Integrated with go links/URL redirectors.
- See also: https://twitter.com/flancian/status/1315312902090391553 

## Plan

 - [x] Craft 'agora' repo (base repo):
   - places/
     - gardens/
       - flancian -> flancian.github.com/garden
     - stoas/
       - flancian -> flancian.github.com/stoa
    - done but changed my mind on the structure: [[places]] are top level items. [[users]] contribute [[fragments]].
   - [x] users/
   - [x] CONTRACT.md
  - Foam
    - Explore how to implement [[context]].
      - A [[context]] is a set of notes that are considered as relevant at any given moment (they are shown one after the other if there is more than one match for a query, etc.)
      - A [[context]] is defined with an algebra that operates over Agora entities.
  - Settle open questions
    - What does '->' mean as used above?
     - git submodule?
     - [x] git subtree?
      - Trying this first.
     - something else?
 - [x] Create 'Agora' Twitter account.
  - [[an_agora]]