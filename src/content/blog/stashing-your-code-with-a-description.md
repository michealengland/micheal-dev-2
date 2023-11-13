---
title: Adding a Description to git stash
# date: 2020-01-14T04:02:57
description: Saving code for later use with `git stash` is one of my favorite features of git. Here's how it works.
pubDate: 'Jan 14 2020'
heroImage: '/robot-turtle-on-book-island.jpeg'
---

# Using git stash

Saving code for later use with `git stash` is one of my favorite features of git. Stashing code allows me to save an idea without making a commit. I often find myself stashing code while trying out ideas or performing a big refactor. My only dislike about using `git stash`is that I often forget why I stashed the code in the first place. This is where `git stash save` comes into save the day.

## The power of git stash save

Similar to `git commit -m` using `git stash save` adds a brief description that provides better context to a stash it's applied to. When assigning a normal stash the only available identifier is the stash ID which isn't very descriptive. Instead I like to use the `git stash save` which allows me to add a string to each stash.

## How to use git stash save

After making changes I run the following command in the terminal and replace out the text inside of the quotations with a meaningful description.

```sh
git stash save "Descriptive text"
```

Then when I'm ready to reference this stash again, I run `git stash list` followed up `git stash apply` and the ID of the stash I would like to open.

### Example Scenario

Assuming that I've already made some stashes using `git stash save` on a repo. First, I'll want to reference my stashes using `git stash list`. This will display all of the stashes I've created and display any of the descriptions I created previously with `git stash save`.

This is what my CL displays after running `git stash list`.

```sh
stash@{0}: WIP on master: 3b95319 Added first blog.
stash@{1}: WIP on master: 24059fc Made various tweaks to layout component.
```

After that, I'll copy the ID of the stash I want to apply. In this case, I'll apply the second option using `git stash apply stash@{1}`. This will apply the code from my stash to the current head of whatever branch I'm checked into. After that my changes are applied and I'm ready to continue where I left off.
