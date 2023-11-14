---
title: Initializing a Repository with the GitHub CLI
description: "Easily get up and running and authenticed on the GitHub CLI."
pubDate: 'Nov 16 2023'
heroImage: 'blog-place-holder-cover-960x480.jpeg'
heroAlt: 'Example alt text'
isDraft: true
---

In the previous chapter, we installed the GitHub CLI and authorized your GitHub account. Now we're ready to begin using the CLI.

Before diving into the CLI commands, let's set up a directory to work in. Navigate to the location where you'd like your new repository to be placed. I typically use a directory named `projects`, but feel free to choose your preferred location.

If the `projects` directory doesn't exist, create it with `mkdir projects` and then navigate into it.

```shell
mkdir projects
cd projects
```

In the `projects` directory, run `gh repo create` to start the setup process. This interactive command will guide you through creating a repository, mirroring the steps you would take if you were doing it via GitHub's website.

_❗ Remember, you need to be authenticated to proceed with repository creation._

```shell
❯ projects gh repo create
? What would you like to do?  [Use arrows to move, type to filter]
> Create a new repository on GitHub from scratch
  Push an existing local repository to GitHub
```

Choose to create a "new repository" if you haven't initialized Git in your directory. Next, you'll be prompted to provide details for your new repository. Since this is for educational purposes, you can enter any information you like.

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

Don't worry about additional configuration hints in the terminal for now; they are there to provide guidance on further customizing your repository settings.

Now you're ready to start learning about the GitHub CLI.
