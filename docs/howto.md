# How to use this Agora

## To browse it
The simplest way to read this Agora is to browse it online in https://anagora.org. If you browse it directly on github, you'll find many links are broken (this will be fixed eventually).

## To contribute to it
The Agora is by design a distributed system. The easiest way to contribute is to start taking public notes (that is, growing a digital garden), and then to ask to be included in the digital gardens repository.

The Agora currently targets Foam as its main editor: https://flancia.org/go/foam. The gist of the idea is that every user hosts their digital garden in a git repository of their own, which they can maintain full control of; and then they send a pull request to the Agora to include them with 'git subtree' (this likely won't scale, but it might be good enough for the first few hundred users). 

The next sections detail how to get Foam running for the purpose of setting up a digital garden / note taking system compatible with the Agora; and information on how to go from other tools to achieving a similar outcome.

### Foam
Please refer to https://flancia.org/go/setting-up-foam.

### Obsidian
Likely very similar to the procedure for Foam; hosting your garden in a git repository should get you most of the way there.

### Roam
Roam is currently not supported as an Agora editor. You can export your database to Markdown (warning: block references will not be preserved fully) and then import it into Obsidian or Roam.

### Athens
Same as per the above, although I expect to prioritize direct Athens support.