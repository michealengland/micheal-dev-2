---
title: Creating and Managing GitHub CLI Aliases
description: "Discover the power of aliases in the GitHub CLI. Our step-by-step tutorial shows you how to set up, modify, and use aliases to optimize your development process."
pubDate: 'Nov 28 2023'
lastUpdated: 'Dec 1 2023'
heroImage: '/ghcli-5-cute-octopus-in-glasses-writing-book-960x480.jpg'
heroAlt: 'Cute octopus in glasses writing ideas in notebook'
tags: [gh-cli]
---

When I first began exploring the GitHub CLI, I quickly realized that while some commands were straightforward, others demanded trial and error. To simplify your learning curve, let's walk through a few examples. Building on our previous discussion about the [basics of command building](/blog/ghcli-4-building-custom-github-cli-commands/), this lesson aims to further enhance those skills, making your workflow hacking even more efficient.

Here are the main alias commands you need in order to get started.

### 1. Creating and Updating Aliases
Define a new alias with `set` subcommand. This works by passing in an alias name and a command within the quotes.

```shell
gh alias set alias-name 'command without gh'
```

#### Try:
Let's create a simple alias for creating draft PRs. In this example we'll do the following actions from the command line:
- Create a PR and set it as a draft.
- Use the `@me` tag to assign yourself. *Note: You can assign others just by inserting their GitHub user.*

```shell
gh alias set create-draft-pr 'pr create --draft --assignee @me'
```

Once successfully created, you'll see this confirmation:

```shell
❯ ~ gh alias set create-draft-pr 'pr create --draft --assignee @me'
- Adding alias for create-draft-pr: pr create --draft --assignee @me
✓ Added alias.
```

Execute your new command like so:

```shell
gh create-draft-pr
```

_Note: You can update an existing alias by redefining it, or modifying your `config.yaml` file._

### 2. List Aliases
Show all aliases currently saved in your GitHub CLI config file.

```shell
gh alias list
```

Below is what my aliases list looks like. I'll break these down later.

```shell
❯ ~ gh alias list

co:    pr checkout $1
dpr:   pr create --draft --assignee @me
lpr:   pr list --assignee @me
lprc:  pr list --search "is:pr is:closed author:@me"
lr:    pr list --search "is:open review-requested:@me"
lrc:   pr list --search "is:closed review-requested:@me"
prs:   pr status
si:    issue list --search "is:open is:issue $1"
sic:   issue list --search "is:issue is:closed $1"
spr:   pr list --search "is:pr is:open $1"
sprc:  pr list --search "is:pr is:closed $1"
v:     pr view $1
vw:    pr view $1 -w
```

### 3. Removing an Alias
Remove an alias by using the `delete` subcommand and passing in the alias name

```shell
gh alias delete <alias name>
```
#### Try:
Let's try removing the alias we created in step 1.

```shell
gh alias delete create-draft-pr
```

Once an aliases is deleted, you'll see prompt confirming that.

```shell
❯ ~ gh alias delete create-draft-pr
✓ Deleted alias create-draft-pr; was pr create --draft --assignee @me
```

## Using variables in aliases
An important feature of the GitHub CLI is the ability to use variables in your commands. Variables are denoted by `$1`, `$2`, etc.

### Variable Rules:
- Variables are represented by a `$` followed by a numerical identifier, starting at 1 such as `$1`.
- Increment the variable number for each additional variable, such as `$1`, `$2`, `$3`, and so on.
- Use single quotes to wrap the alias and double quotes around variables, as per the [GitHub CLI documentation](https://cli.github.com/manual/gh_alias_set).
- Ensure the order of your values matches the order of the variables in the alias.

## Try:
Convert the command seen below into an alias, replacing dynamic values with variables:

```shell
gh search issues auth token --owner=cli --repo=cli --label="help wanted"
```

Correct:

```shell
gh alias set srp 'search issues $1 --owner="$2" --repo="$3" --label="$4"'
```

Incorrect (due to lack of proper quotations):

```shell
gh alias set srp 'search issues $1 --owner=$2 --repo=$3 --label=$4'
```

Execute the alias like so and verify you get the correct results.

```shell
gh srp "auth token" cli cli "help wanted"
```

## Start Planning Your Aliases!
You're now ready to begin [workflow hacking with the GitHub CLI](/blog/ghcli-6-building-custom-github-cli-workflows/). The next lesson will delve into creating your own workflow hacks to save time throughout your week.