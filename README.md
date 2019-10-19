# 🕶 𝓩-Starter-CLI 🕶

[![Actions Status](https://github.com/zachlysobey/z-starter-cli/workflows/Node%20CI/badge.svg)](https://github.com/zachlysobey/z-starter-cli/actions)

_a CLI tool for my [`z-starter`](https://github.com/zachlysobey/z-starter) JS starter-template project_

## How it works

The basic mechanics of this project are pretty simple, and just wrap some fairly basic git features in a nice to use CLI.

When `z-starter-cli` is invoked within a git project, it will add a new _git remote repsoitory_: the `z-starter` one.
The, it will ask you to chose from the different template branches in that repo. Once a choice is made, the git history of the current branch is _reset_ to the one specificed from `z-starter`.

## Usage

Intended for use as a _global_ npm script.

```
npm install --global z-starter-cli
```

Right now, this should be run from a freshly `git init`ted blank project.

### Example usage:

```
~/work
▶ mkdir my-new-cat-meme-app

~/work
▶ cd my-new-cat-meme-app

~/work/my-new-cat-meme-app
▶ git init
Initialized empty Git repository in /Users/zachlysobey/work/my-new-cat-meme-app/.git/

~/work/my-new-cat-meme-app  master ✔
▶ z-starter-cli
               _             _                      _ _
  ____     ___| |_ __ _ _ __| |_ ___ _ __       ___| (_)
 |_  /____/ __| __/ _` | '__| __/ _ \ '__|____ / __| | |
  / /_____\__ \ || (_| | |  | ||  __/ | |_____| (__| | |
 /___|    |___/\__\__,_|_|   \__\___|_|        \___|_|_|

                                     v1.0.0

ensuring z-starter is loaded as a remote...
getting remotes...
adding z-starter as a remote repository...
fetching z-starter to ensure branches are up to date...
getting branches...
? What type of project do you need? (Use arrow keys)
  nodejs
  nodejs-cli
  nodejs-cli-typescript
  nodejs-library-typescript
❯ react
  react-formik
  vue
creating react project...

~/work/my-new-cat-meme-app  master ✔                                                                             2d
▶ git log --oneline
463d336 (HEAD -> master, starter/react) 👷 add github actions workflow
0252d39 ✨ Hello, Redux
356f114 ➕ add dependency on react-redux ^7.1.1
97b595f ➕ add dependency on redux-starter-kit ^0.8.1
b45427b 🔥 remove some create-react-app cruft
24984ae 💄 add 'prettier' pre-commit hook
6aa15e6 🎨 run prettier on existing code
8d8c143 💄 add prettier
6670daf 🔧 disable lockfiles with .npmrc
020258f 📝 add contributing guide
ab270ad 📝 add blank github pull-request template
6a4cacf 📝 add blank github issue template
1d709c7 📝 update README.md
cb11e0f 🔧 remove 'eject' npm run-script
86e58c9 🎉 npx create-react-app .
```

## Contributing

See the [contributing guide][contributing]

[contributing]: ./.github/CONTRIBUTING.md
