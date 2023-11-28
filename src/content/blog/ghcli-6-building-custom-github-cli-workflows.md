---
title: Building Custom Workflows with the GitHub CLI
description: "Step up your GitHub game: Our guide delves into creating effective CLI aliases to simplify repetitive tasks, enhancing your workflow and saving time every day."
pubDate: 'Nov 29 2023'
heroImage: '/ghcli-6-cute-octopus-organizing-workflow-960x480.jpg'
heroAlt: 'Cute octopus organizing ideas into efficient workflows'
isDraft: true
---

In this lesson, we'll cover how you can start recognize patterns that could be optomized with the GitHub CLI. Now that you understand the [fundamentals of the GitHub CLI](/blog/ghcli-3-deconstructing-and-building-commands/) and how to [create aliases](/blog/ghcli-5-creating-and-managing-github-cli-aliases/), it's time for workflow hacking. Aliases are so powerful that they can sometimes overshadow other parts of the CLI. Here are some guidelines to enhance your workflow, using my own aliases as examples.

## Guidelines
Reflect on how you use GitHub regularly:

1. What tasks do you perform multiple times a day?
2. What would you do more often if it were less effort?
3. Are there multi-step processes you could streamline?

### Identify your own habits
Start by examining your current habits. Prioritize tasks you perform frequently. Here are some useful activities I identified within my own workflow:

- Checking reviews assigned to you
- Managing your drafted or in-review PRs
- Checking PR statuses
- Assigning reviewers
- Viewing or searching issues and PRs

### Prototype the idea
Once you have an idea, start simple. Don't overcomplicate. Remember, you can refine your aliases over time.

### Make it a memorable alias
Choose alias names that are easy to type and remember, especially for those you use frequently. Short, clear names can make a big difference in usability.

### Iterate on it
You might find room for improvement as you use your aliases in daily activities. Enhancements can include renaming frequently mistyped aliases or adding functionalities, like automatically assigning yourself to drafted PRs.

### Get Familiar with the Documentation
Staying updated with the GitHub CLI documentation is crucial. The tool has evolved significantly, and you might discover more efficient ways to achieve your goals.

## My Custom GitHub CLI Aliases
Here's a list of the custom aliases I use frequently:

- `gh co`: Quickly checkout PRs for review.
- `gh vw`: Instantly view a PR in the browser when someone mentions it.
- `gh lr` and `gh lpr`: View the PRs I need to review and the ones I've submitted. These lists update as PRs are approved and merged.

*Note: Most of my aliases assume that I'm in a working directory for a project.*

| Alias | Command | Meaning |
| ------- | ----- | ------- |
| co $ | `pr checkout $1` | Checkout PR by number. |
| dpr | `pr create --draft --assignee @me` | Create a draft PR assigned to me |
| lpr | `pr list --author @me` | List PRs where I'm the author |
| lprc | `pr list --search "is:pr is:closed author:@me"` | List closed PRs where I'm the author |
| lr | `pr list --search "is:open review-requested:@me"` | List open PRs awaiting my review |
| lrc | `pr list --search "is:closed review-requested:@me"` | List closed PRs where I'm the reviewer |
| prs | `pr status` | Show PR status
| si | ` issue list --search "is:open is:issue $1"` | Search open issues |
| sic | `issue list --search "is:closed is:issue $1"` | Search closed issues |
| spr | `pr list --search "is:pr is:open $1"` | Search open PRs |
| sprc | `pr list --search "is:pr is:closed $1"` | Search closed PRs |
| v | `pr view $1` | View PR in the current shell |
| vw | `pr view $1 -w` | View PR in the browser |

### Takeaways
I really hope this blog series has greatly improved your confidence with the GitHub CLI. The natural next steps after learning a tool are to put it into practice. In the next lesson, we'll discuss setting a custom editor. In the meantime, try creating your own aliases and use them on a daily basis.