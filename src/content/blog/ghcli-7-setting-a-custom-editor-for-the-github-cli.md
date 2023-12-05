---
title: Setting a Custom Editor for the GitHub CLI
description: "Elevate your GitHub CLI skills with expert tips on editor configurations and interactive prompts. Discover how to tailor the CLI to your workflow for maximum efficiency."
pubDate: 'Dec 05 2023'
heroImage: '/ghcli-7-cute-octopus-using-computer-960x480.jpg'
heroAlt: 'Cute octopus excitedly using the computer'
---

In previous articles we discussed everything from [initializing a repo](/blog/ghcli-2-initializing-a-repo-with-the-github-cli/) to [building custom workflows within the GitHub CLI](/blog/ghcli-6-building-custom-github-cli-workflows/). Next we're ready to take the GH CLI to the next level by utilizing a special rule that allows you to choose how documents are edited. For example, users wanting to write a pull request on their machine can specify `code --wait` to write PRs directly in their default code editor.

This lesson will explore this feature. It should be noted that while this feature works with some external apps, results may vary.

Below are some examples from the [GitHub CLI manual](https://cli.github.com/manual/gh_config_set):

## Vim
Write your PR directly in the shell with Vim.
```shell
gh config set editor vim
```

![Editing commits with Vim](./assets/ghcli-7-commit-editor.jpg)

## Code Wait
This option opens a temporary document in VS Code. Changes must be saved, and once the document is closed, you can proceed with uploading the PR to GitHub.

I prefer this option as it allows me to use markdown plugins within VS Code.

_Note: The `--wait` flag tells the UI to wait for the editor before proceeding._

```shell
gh config set editor "code --wait"
```

For more details using `code --wait` with VS Code, checkout the [official docs](https://code.visualstudio.com/docs/sourcecontrol/overview#_vs-code-as-git-editor).

![Editing commits with VS Code using code --wait](./assets/ghcli-7-commi-code-wait.jpg)

## SSH
Change your protocol to SSH or HTTPS.

```shell
gh config set git_protocol ssh --host github.com
```

## Enabling / Disabling the Prompt
Enable:
```shell
gh config set prompt enabled
```

By default, this option is enabled when the GitHub CLI is installed, allowing users to utilize interactive prompts.

![GH CLI interactive prompts allow the interactive UI within terminal](./assets/ghcli-7-interactive-prompts.jpg)

Disable:
```shell
gh config set prompt disabled
```

Disabling the prompt requires additional flags for commands that the interactive UI would normally set up.

![Disable the GH CLI interactive prompts allows for fast updates with preconfigured commands](./assets/ghcli-7-interactive-prompts-disabled.jpg)

## Custom Configuration
It’s worth mentioning that you can configure your default editor to work with other applications on your machine. However, compatibility and functionality might vary. Here's how I configured my editor to use Nota MD to write my PRs:

First, I installed the [Nota CLI](https://docs.nota.md/command-line-interface) to make it executable from the command line. Then, I verified that using `nota` in the command line successfully opened the application.

Once the Nota CLI was functional, I used the following command:

```shell
gh config set editor "nota --wait"
```

You can test this by drafting a PR from the command line.

```shell
gh pr create --draft --assignee @me
```

One downside I've encountered with this setup is the need to fully close the Nota application after using it. This requirement can be a bit frustrating, especially since I frequently use Nota for note-taking purposes. While other applications might integrate more seamlessly with the GitHub CLI.

![Using Nota as an editor with the GitHub CLI.](./assets/ghcli-7-nota-editor.png)

### Takeaways
Thank you for taking the time to read this blog series. I really hope that this blog has inspired you to dive deeper into workflow optimizing. Taking advantage of [aliases](/blog/ghcli-5-creating-and-managing-github-cli-aliases/), [complex commands](/blog/ghcli-4-building-custom-github-cli-commands/), and utilizing your editor to help your write better and faster PRs will help you save a large amount of time. In the future I hope to write more about some of the really complex areas within the GitHub CLI.