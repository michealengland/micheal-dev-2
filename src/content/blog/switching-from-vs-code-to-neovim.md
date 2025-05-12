---
title: Why I Switched from VS Code to Neovim and Why You Might Too
pubDate: May 12 2025
description: Tired of bloat, distractions, and slow performance in VS Code, I made the leap to Neovim. Here's my journey from frustration to focus—and how Neovim reshaped my dev workflow.
heroImage: ./assets/switching-to-neovim-cover-960x480.webp
heroAlt: Neovim editor with Rosepine Dawn code theme
---
There's a few first moments in life you never really forget. That first time you drive a car, the first time you write "hello world," the first time you see a co-worker using Vim in a pair programming session.

In November 2024, I decided it was time for a change. As a longtime VS Code user, I was starting to grow frustrated with the tool. At the same time, I was grinding away on large marketing site rebuilds, working in isolation for weeks at a time, which gave me a lot of time to think about why I was unhappy in the first place.

Here’s what I came up with:

1. VS Code felt very slow and bloated compared to the terminal-based tools I used.
2. I was unhappy with the constant updates and unwanted changes that were forced upon me—like Microsoft altering shortcuts.
3. I was in a never-ending battle with VS Code assuming how to configure whitespace in the documents I opened. This pain was very noticeable on projects that weren't consistent with coding standards.
4. Since a lot of my work involved working in 3 repos at once, I found myself trying to locate open projects in a sea of VS Code instances.
5. Oftentimes I struggled to stay focused. I felt like there was a lot of noise and distraction, and the "Zen" mode wasn't a great solution for me.
6. Most importantly, I just felt like the tool lost its magic compared to when I first started using it.

These issues had been lingering in the back of my mind, and I finally hit a breaking point and started researching new tools. Then, I remembered that time [Sal Ferrarello](https://salferrarello.com/) effortlessly zoomed through code changes using Vim during a pair programming session. Seeing him breeze through code changes like a code assassin was something I never forgot. So, he was the first person I reached out to for advice on getting started with Neovim.

## Friday: Discovering Neovim

After I shared some of my current IDE frustrations, Sal gladly helped clarify a few things and gave me some great recommendations.

1. Check out TypeCraft's [Neovim for Newbs](https://www.youtube.com/playlist?list=PLsz00TDipIffreIaUNk64KxTIkQaGguqn) course.
2. Use the `:Tutor` command to learn Vim motions.
3. Explore prebuilt Neovim configs like [LazyVim](https://www.lazyvim.org/) or [LunarVim](https://www.lunarvim.org/), but start simple until you know what you want.
4. Learn the difference between Vim and Neovim. (In short: Vim is the original; Neovim is a community-driven fork with modern features like Lua-based plugins.)

After work on a Friday night, I jumped headfirst into the TypeCraft series. I only planned to watch a few videos—but ended up binging them like a Netflix special. I went to bed full of ideas about how I could change my workflow.
## Saturday: Learning with `:Tutor`

It wasn't long after installing Neovim that it was clear—I didn't really know how to use it. That's where the built-in `:Tutor` command came in. I spent the weekend learning the basics through its interactive tutorial. While my wife and son watched Disney movies, I practiced basic Vim motions—and it was actually fun!

It starts with the basics: navigating lines, exiting Vim, then slowly builds up. It doesn't take long, and by the end, you'll have a decent grasp of how to interact with buffers—and even understand what a buffer is.

## Sunday: Confidence from the Basics

After completing `:Tutor`, I felt like I had accomplished something meaningful. I opened up a side project to see what I could do. To my surprise, I was able to navigate a single file with newfound confidence. Unfortunately, that confidence was short-lived, as I quickly realized I didn't know how to navigate a project the same way I would in VS Code. Simple things like quickly switching between files, searching the codebase, or cloning a file suddenly became unknowns.

With so many questions in mind, I created a running list of questions and wanted features. That way, I could add to it over time and ask the right questions later on.

## Monday: My First Work Week with Neovim

Monday morning came quickly and marked the start of a new work week. On Sunday night, I told myself I’d use Neovim exclusively—and only fall back to VS Code if absolutely necessary.

As expected, the first few days were slow. I constantly had to pause and learn how to do simple things: duplicating a file, switching buffers, searching, and replacing. But despite the friction, it felt fun. It was a breath of fresh air.

> **Sidebar:** For this first week I opted to use the most basic Neovim configuration that I could. I had only a few plugins and custom shortcuts that I had figured out from the weekend. I chose this route over a pre-configured setup so that I could understand more and edit as needed while working.

By the following Friday, I was feeling great. I wrapped up big tasks and felt significantly more focused. That simplicity I was chasing? I found it. It helped me think more clearly—and that was a huge personal win. Repetition throughout the week helped too. The more I used Vim motions without thinking, the more drunk with power I became. I felt faster and more in control.

## A Few Months In

A few months later, I had tackled most of the items on my wishlist. My confidence had grown tremendously, and I felt pretty comfortable using Neovim as my daily driver.

With this comfort, I decided it was time to configure GitHub Copilot. After taking a break from it, it was clear that I had gained some less-than-ideal habits. At first, I constantly found myself pausing for autocomplete and forgetting how to write `for` loops without looking them up. Things that I once wrote effortlessly blossomed into a struggle. However, like riding a bike, the muscle memory came back after a day or two.

> After installing Copilot, I made sure to learn the disable command `:Copilot disable` so that I could prevent the unwanted autocompletes when needed. To this day I use it whenever Copilot gets too liberal with the "suggestions."

Eventually, I integrated Tmux into my workflow. While it's not a tool specifically for Neovim, it massively improved my workflow. I often work in multiple repos per project, and Tmux made it easy to jump between them—right where I left off. I could even run multiple terminals for each: one for Neovim, one for build scripts, and one for Git.

Surprisingly, I grew faster at using external tools such as browser inspectors, terminal apps, and other command line integrations. It became a new personal challenge to learn and use the shortcuts whenever possible. I even explored new terminal-based tools like Yazi and figured out better ways to manage browser tabs, snap windows,
