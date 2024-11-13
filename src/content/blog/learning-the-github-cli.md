---
title: Learning the GitHub CLI
# date: 2021-08-16T12:00:00Z
description: Here are some of commands I found helpful while getting started. I ended up using a combination of these commands in multiple custom aliases.
pubDate: 'August 16 2021'
heroImage: "./assets/robot-kitty-shredding-text-book-960x480.webp"
heroAlt: 'Robot kitty shredding text book.'
---

Recently, I made a decision to incorporate the [GitHub CLI](https://cli.github.com/manual/) into my daily routine. To my surprise it was much easier than I thought it would be. Within the first day, it became obvious how much time I spent clicking through the GitHub UI searching, managing, and creating new issues and PRs.

Before moving forward, I heavily recommend looking through the the [GitHub CLI documentation](https://cli.github.com/manual/). I found that starting small and tweaking commands into custom aliases made the learning process much easier.

## Helpful bits along the way

Here are some of commands I found helpful while getting started. I ended up using a combination of these commands in multiple custom aliases.

_Note: the `pr` and `issue` keyword can be swapped in most cases._

### Set your default editor

Setting an editor in the `gh` config is incredibly helpful for tasks such as creating PRs using the GitHub CLI. This is especially helpful if you prefer a more robust content editor as opposed to using `nano` to write content.

`gh config set editor 'code --wait'`

### Using Help

If you're ever stuck a quick way to get unstuck is to use the `help` keyword which will show what options are available or arguments are expected for a command.

`gh help`, `gh pr help`, `gh issue help`, etc...

### List aliases

Show all aliases and commands they perform.
`gh alias list`

#### Create New Alias Creation

Create an alias or update an existing one.
`gh alias set alias-name 'command without gh'`

### Remove an Alias

Remove existing alias.
`gh alias delete alias-name`

### Checkout a PR Branch

Quickly checkout the branch of a PR.
`gh pr checkout <pr number>`

### List PRs

List all of your PRs on the current Git repo you're checked into.
`gh pr list`

### Current PR Status

Display the current status updates on your open PRs.
`gh pr status`

### See recent workflows

Show a list or recently run workflows. This gives a good overview of pipeline health.
`gh run list`

### View in on web

`-w` or `-web` on many variations of `gh` commands.

### Custom Searches

You can make custom search filters similar to how you use search on GitHub.
ex: `gh pr list --search "is:pr is:open button"`

## Creating Custom Aliases

Aliases are a very powerful tool for creating quick and easy to remember commands to make the CLI work for you. Below are the ones I have come up with and use frequently. I highly recommend setting up some for your workflow.

Aliases can be added using `gh alias set name 'command'`. Also you can edit the `config.yml` found in `~/.config/gh/config.yml` on Mac.

_Note: The `$1` represents a variable, ex: `gh co 123 // checkout branch from pr #123`_

```shell
# Checkout a PR branch based on PR id.
co:    pr checkout $1

# Create a draft PR of current branch and self assign.
# Note: To retain your GitHub template you should avoid using "--fill".
dpr:   pr create --draft --assignee @me

# View PR by id in terminal window.
v:     pr view $1
# View PR by id on GitHub.com (web)
vw:    pr view $1 -w

# List PRs assigned to me.
lpr:   pr list --author @me
# List PRs assigned to me that are closed.
lprc:  pr list --search "is:pr is:closed author:@me"

# List PRs to review.
lr:    pr list --search "is:open review-requested:@me"
# List PRs to review that are closed.
lrc:   pr list --search "is:closed review-requested:@me"

# Display your PR statuses
prs:   pr status

# Search issues by string ex: gh si button
si:    issue list --search "is:open is:issue $1"
# Search closed issues by string ex: gh sic button
sic:   issue list --search "is:issue is:closed $1"

# Search PRs by string ex: gh spr dev-4022
spr:   pr list --search "is:pr is:open $1"
# Search closed PRs by string ex: gh spr dev-4012
sprc:  pr list --search "is:pr is:closed $1"
```

## Example Workflows

Each of these workflow use aliases. Refer the examples above to determine what each alias does.

### Creating a New PR

1. Navigate to project in terminal
2. Create work on a branch
3. Once ready to create a draft pr run `gh dpr`, this will draft a PR assigned you (note still working out the bugs on the template)
4. Next, run `gh vw` to view the PR in the browser

### Working on an existing PR workflow

1. Navigate to project in terminal
2. Runs `gh lpr` to see my work
3. Runs `gh co 123` to checkout a pr that I'd like to make changes to
4. Run `gh prs` to check current build status after changes are added
5. Once approved / ready, use `gh merge` to run through the merge process

### Reviewing a PR Workflow

1. Navigate to project in terminal
2. Run `gh lr` to list reviews that I'm assigned to
3. Use `gh co 123` to checkout the PR for review
4. Use `gh vw 123` to view the PR details on GitHub.com
5. Once an approval has been added, `gh lr` will no longer display the reviewed PR until changes are requested
