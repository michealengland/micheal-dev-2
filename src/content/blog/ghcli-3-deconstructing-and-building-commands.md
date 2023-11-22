---
title: Learn the GitHub CLI Command Basics
description: "Dive into GitHub CLI: Master command syntax and streamline your development process. Our guide breaks down CLI commands, making them easy to learn and apply."
pubDate: 'Nov 21 2023'
heroImage: '/ghcli-3-cute-octopus-playing-with-blocks-960x480.jpg'
heroAlt: 'Cute octopus playing with building block toys'
---

Now that we have a functioning repository from the [previous lesson](/blog/ghcli-2-initializing-a-repo-with-the-github-cli/), we're ready to dive headfirst into the GitHub CLI's commands. The best approach is to first familiarize ourselves with the command structure. At the core of the CLI, all commands follow a basic pattern.

```shell
gh <command> <subcommand> --flags
```

The primary alias for interacting with the GitHub CLI is `gh`. Executing `gh` alone will display a high-level overview of all available commands, as shown in the screenshot below.

![Display of possible commands when using `gh` by itself](./assets/ghcli-3-gh-base-command.jpg)

Scrolling down, there’s a useful guide that shows an overview on the command syntax:

```shell
LEARN MORE
  Use 'gh <command> <subcommand> --help' for more information about a command.
  Read the manual at https://cli.github.com/manual
```

## Deconstructing a Command
Let's deconstruct a straightforward command like `gh pr view 123 --web`. This command opens a specific pull request in the browser by passing in a value. The majority of commands are going to follow this type of syntax.

- `gh` is the CLI's alias.
- `pr` is a top-level command within the CLI.
- `view` is a subcommand under `pr`.
- `123` represents a variable, in this case, pull request number 123.
- `--web` is a flag that can be used with the `view` subcommand to open the item in the browser instead of displaying it in the terminal.

## Learning About Commands
In upcoming lessons, we'll explore how to [craft more complex commands](/blog/ghcli-3-deconstructing-and-building-commands/). Remember, two invaluable resources are at your disposal: the [GitHub CLI manual](https://cli.github.com/manual), which offers the most current information, and the `--help` flag which is an excellent quick-reference for command details.