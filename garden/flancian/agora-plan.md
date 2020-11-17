# Agora Plan

I'll use this as a sort of inline project page for the [[agora]] implementation you're likely reading this in now: [[anagora]].org.

As you might know by now, an Agora is a beast with multiple legs:

 - A knowledge garden. This is the heart of the [[Agora]]. It is kept in the <https://flancia.org/go/agora> repo.
 - A web renderer, which I run on anagora.org. This is [[Agora Server]]. It is kept in the <https://flancia.org/go/agora-server> repo.

This page is about both, although it's probably going to be [[Agora Server]] heavy as I'm currently focused on developing features for it.

## Latest
- On [[2020-11-17]] implemented [[latest]].
- On [[2020-11-16]] I implemented [[agora fuzzy matching]] and full text search, adopted a div based layout, improved the CSS, improved user pages.
- On [[2020-11-15]] I implemented dark mode (press on 'theme' on the top right corner to switch dark <-> light).
- On [[2020-11-14]] I released [[agora 0.5.1]].
- Previously:
  - dev environment is now available (when up) at http://dev.anagora.org.
  - Moved dev/prod to separate '<https://flancia.org/go/agora>' and '<https://flancia.org/go/agora-server>' repos.

### Signups
 - [x] [[pen-coded]]: https://github.com/KGBicheno/KGB_Agora
 - [ ] likely [[arghzero]]
 - [ ] likely [[solomon naim]]

## Integrations
- [[agora-go-links-integration]]
- [[agora twitter integration]]
- [[roam2agora]]

## Next
- [ ] Make the site header be marked as an actual header (div with a class, etc.); Google seems to think it's part of the site text (it's showing up in results).
- [x] Implement [[agora fuzzy matching]].
  - Done
  - [ ] but backlinks don't work in some cases, like <http://dev.anagora.org/node/abstract%20fairy>.
  - Probably not worth fixing that right now as it only triggers for nodes that are not canonical, perhaps better to just redirect to a canonical node.
  - [ ] could help with disambiguation and acronym expansion
- [ ] Fix markdown list formatting issue with different tab widths.
- [ ] add footer.
- [x] add some search support -- a simple textbox + GET?
  - Probably want to use [[flask-wtf]] for this: https://hackersandslackers.com/flask-wtforms-forms/
- Implement preview-on-hover?
- Implement "around the Agora".
- [ ] better css
  - [x] Add '[[dark mode]]' to the Agora, I like this kind of scheme: https://twitter.com/ablueaeshna/status/1323439284272222208/photo/1
  - [x] added switching by button
  - Make subnodes/notes look like notes instead of using clunky ```<hr />``` everywhere. Move to divs, etc.
- [ ] add /latest or some other chronological view
- [ ] User profiles: perhaps just note [[flancian]] as written by user [[flancian]]? Unsure.
  - [[s5bug]] suggested using [[README]] in gardens for this. Makes sense.
- [ ] Make the index be just another note [[ding-levery]].
- [x] Add 'link to this note'.
  - Now called subnode.
  - Subnode rendering is ready, just need to add links.
  - Perhaps I need to fix subnode paths; right now they are the actual filename. It'd be better if there was at least possible to specify the filename base (no extension) and have the right file be resolve, a la nodes.
- [ ] Improve backlinks: show snippets as well as just the link.
- [ ] Improve pull loop to also support arbitrary hooks, like that needed to implement [[agora go links integration]].
- [ ] Multi user improvements:
  - Better sorting (right now all my notes show up at the top, doesn't make sense).
  - Ability to "zoom into" a user, to navigate just their garden for a while.
  - [ ] Perhaps ability to "uprank" users, pinning their notes to the top of any sorting order.
  - [ ] Perhaps sort+uprank can be integrated?
  - [ ] usernames could have a 'pin' emoji that upranks all their posts?
- [ ] Implement search (full text).
- [ ] Add support for media serving (useful for pictures of [[ocell]]).
  - assets/foo end up at node/assets/foo; just adding a handler for node/assets/ seems like it could be enough.
  - It would conflict with a node named 'assets' though, so perhaps it's not ideal.
  - Perhaps it'd be better to just serve images/media as subnodes?
- [ ] Add monitoring/alerting.
- [x] Clean up stale journal pages which don't follow [[iso 8601]].
- [x] Add config.py file with things such as paths.
- [x] Add user handler: /u
  - /u/flancian -> all nodes by flancian
  - /node/flancia/u/flancian -> flancia by flancian
  - Also added @flancian. Shorter is better, and it's a common convention.
  - perhaps /g/ for groups later? or /s/ for stoa.

## Some day:
- When you update a node on a [[person]], said person gets a notification (they can opt out).
- Support [[Roam]], [[Athens]], [[org-roam]] digital gardens.
- Twitter integration -> [[agora twitter integration]]
   - Ask [[ding levery]].
- Automatic [[actions]] -> [[agora action]]s -> [[agora action]]
  - [[tweet]] block tweets the block (exactly once, etc.).
- [[go links]] integration -> [[agora go links integration]]
  - If the first block of [[foo]] is a URL, anagora.org/go/foo just redirect there.
  - Could also work as an action: [[go]] target URL.

## Feature requests
- [ ] [[titushora]] [[FR]]: make the [[Agora]] look like this: https://twitter.com/TitusHora/status/1325147589197484036

[//begin]: # "Autogenerated link references for markdown compatibility"
[agora]: agora "Agora"
[anagora]: anagora "Anagora"
[2020-11-17]: journal/2020-11-17 "2020-11-17"
[latest]: latest "Latest"
[2020-11-16]: journal/2020-11-16 "2020-11-16"
[2020-11-15]: journal/2020-11-15 "2020-11-15"
[2020-11-14]: journal/2020-11-14 "2020-11-14"
[pen-coded]: pen-coded "Pen Coded"
[arghzero]: arghzero "Arghzero"
[agora-go-links-integration]: agora-go-links-integration "Agora Go Links Integration"
[roam2agora]: roam2agora "Roam2agora"
[flancian]: flancian "Flancian"
[s5bug]: s5bug "S5bug"
[README]: README "Flancian's digital garden"
[ding-levery]: ding-levery "Ding Levery"
[ocell]: ocell "Ocell"
[iso 8601]: iso-8601 "Iso 8601"
[person]: person "Person"
[org-roam]: org-roam "Org Roam"
[tweet]: tweet "Tweet"
[go links]: go-links "Go Links"
[foo]: foo "Foo"
[go]: go "Go"
[titushora]: titushora "Titushora"
[//end]: # "Autogenerated link references"