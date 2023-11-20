---
title: Initializing a Repository with the GitHub CLI
description: "Step-by-step guide on initializing a new repository with GitHub CLI. Learn to create and clone your project workspace efficiently for seamless GitHub integration."
pubDate: 'Nov 20 2023'
heroImage: '/ghcli-2-cute-octopus-learning-command-line-interface-960x480.jpg'
heroAlt: 'Cute octopus interacting with command line interface'
---

In the previous chapter, we successfully installed the [GitHub CLI and authorized your GitHub account](/blog/ghcli-1-installing-and-authorizing-the-GitHubCLI). Building on that foundation, we're now set to step into the practical use of the CLI.

Let's start by setting up a workspace. Navigate to where you want your new repository. I typically use a `projects` directory, but choose whatever works for you.

If the projects directory doesn't exist, let's create it using the following commands:

```shell
mkdir projects
cd projects
```

In the `projects` directory, run `gh repo create` to start the setup process. This interactive command is identical to creating a repository on GitHub's website but significantly faster. It guides you through each step, ensuring a seamless process.

_NOTE: Authentication is essential to proceed with repository creation. See [Installing and Authorizing the GitHub CLI](/blog/ghcli-1-installing-and-authorizing-the-GitHubCLI) if you have issues with this._

```shell
❯ projects gh repo create
? What would you like to do?  [Use arrows to move, type to filter]
> Create a new repository on GitHub from scratch
  Push an existing local repository to GitHub
```

When prompted, choose to create a "new repository" and fill in the required details however you like:

```shell
? What would you like to do? Create a new repository on GitHub from scratch
? Repository name GH CLI Course
? Description A repository for experimenting with the GitHub CLI.
? Visibility Private
? Would you like to add a .gitignore? No
? Would you like to add a license? No
? This will create "GH-CLI-Course" as a private repository on GitHub. Continue? Yes
```

After completing the prompts and initializing the repository, you'll have the option to clone it locally. Simply type `y` or `yes` when prompted.

```shell
Clone the new repository locally?
y
```

For now, don't worry about additional configuration hints in the terminal. They're there to assist you in further customizing your repository.

With your new repository ready, the next chapter (to be released soon) will dive into learning the GitHub CLI commands. We'll explore how these commands can streamline your development workflow and introduce you to some powerful features of the CLI.