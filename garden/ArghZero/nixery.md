# nixery

- overview \#public_page
  - [github](https://github.com/google/nixery), [website](https://nixery.dev/)
  - a "docker registry" that lazily builds images based on what deps you ask for in the url (slash delimit them)!
- [Quick start](https://nixery.dev/\#quick-start)
  - Simply pull an image from this registry, separating each package you want included by a slash:
  - `docker pull nixery.dev/shell/git/htop`
  - This gives you an image with git, htop and an interactively configured shell. You could run it like this:
  - `docker run -ti nixery.dev/shell/git/htop bash`
  - Each path segment corresponds either to a key in the Nix package set, or a meta-package that automatically expands to several other packages.
