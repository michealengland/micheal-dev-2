---
title: Building Stellar Pages, a Markdown-to-PDF Web App
description: Building Stellar Pages wasn’t just about making a Markdown-to-PDF tool—it was a journey of technical challenges, problem-solving, and personal growth. From battling infinite loops to rethinking my entire tech stack, this project pushed me to new limits. Here’s what I learned along the way.
heroImage: ./assets/stellar-pages-home-graphic-960x480.webp
heroAlt: Stellar Pagse home page screen capture graphic
pubDate: Feb 14 2025
---

Since late 2023, I've been working on and off on an application idea that I had after I was laid off. While updating my resume for what felt like the twentieth time, I thought to myself, "I wish I could just keep this as a Markdown document." I love writing content in Markdown—it's easy, fast, and most importantly, I can easily edit it anywhere. I found that opening apps like Affinity Publisher or Adobe InDesign for writing documents was tedious. I just like writing my content in Obsidian.

Over the next few days, this idea lived in my mind, and the more I thought about it, the more I wanted to see it through. I pitched the idea to a few friends, and it wasn't long before I was building a barebones prototype. That prototype quickly turned into many late nights of learning, problem-solving, and experimentation, which I later released as [Stellar Pages](https://stellarpages.app/).

> The feeling I had working on this project was something I really believed in.

## Figuring Out What to Build

While I had a rough prototype, it quickly became obvious what I would like to have as a user of the application:

- Document selection (one or many)
- Reusable style templates that can apply to any document
- The ability to make a PDF that is exactly what I see in the application
- A secure environment for personal documents (I have over 1,000 `.md` files accumulated over my developer career)
- Import & export for previous projects
- It has to be easy & quick for reuse

### Logically, I Started Building an Electron App

When I first started on the application, I considered different technologies—Swift, React, AstroJS—before landing on Electron. Electron seemed like a good fit because it allowed me to build a web development-adjacent project as a desktop app. While I had reservations about using it, this seemed like the best way for me, as a solo developer, to fully create and see the project through.

> Spoiler alert: I ended up not releasing the Electron app. I built the whole thing and changed my mind after a long and hard thought. 🥲

## Getting Started

Electron was different. There were a lot of concepts I was unfamiliar with, and I quickly found myself learning them on the spot. One of the biggest surprises was the security policies that often roadblocked how I would proceed with building features such as loading user-generated styles or finding and reading image files. While I encountered many roadblocks along the way, I didn't mind—it was refreshing to learn something new again.

Once I put together a basic UI for loading Markdown documents, the real challenges began. Some of these challenges included:

- Figuring out how to load images within Electron’s security policies
- Project import & export
- Page splitting based on stylized rendering (the hardest challenge of the entire project)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A while back, I had an idea that I wanted to manage my resume with markdown and custom styles. After crafting a quick prototype I realized that creating resumes was the tip of the iceberg.<br><br>So... Here is a sneak peak of this markdown publishing software I&#39;ve been working on. <a href="https://t.co/vDXcZsaOPK">pic.twitter.com/vDXcZsaOPK</a></p>&mdash; Mike England (@mikelikethebike) <a href="https://twitter.com/mikelikethebike/status/1841327366573871555?ref_src=twsrc%5Etfw">October 2, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Splitting Pages

The challenge seemed simple at first glance: take a lot of content, determine when it exceeds the page size, and split it into new pages until there are no overflows. It could be one or 1,000 pages.

> I thought this task would be simple. Famous last words.

While my early version of the page splitter worked, it often left large gaps on pages—an undesirable side effect that wasn’t fit for production. I initially thought a few simple loops would resolve the issue, but I quickly found myself battling infinite loops and unexpected curveballs with DOM tree manipulation.

As I refined the process, I spent more time debugging infinite loops than ever before. Determined to solve the challenge, I iterated relentlessly, solving one small piece at a time. However, one major challenge kept haunting me: dividing nodes with nested children.

Through this process, I learned an incredible amount about DOM manipulation and the importance of the order in which you manipulate the DOM. This was a major level-up moment for me.

Things I learned:

- Traversing deep DOM node structures
- Migrating DOM nodes from A -> B while retaining correct order
- The browser debugger became my best friend
- I thought I knew recursion—but I relearned recursion

During the final stretch of building the page splitter, I pushed harder than ever before. Every evening after work, I poured hours into understanding what I was missing, iterating on tiny changes at a time.

I lost track of how many times I thought the page splitter was working, only to find another infinite loop or an incorrect nesting issue. For example, if a deeply nested list was split in half, the second half would have incorrect levels of nesting—everything else worked, but that detail wasn’t right.

## Sweet, Sweet Victory

Before work on the morning of Nov. 23rd, 2024, I solved the page splitter algorithm. All the right conditions and values were returning correctly. I was in a state of disbelief. Naturally, I set out to break it—because I had been fooled before with false positives.

I threw every possible nested content structure at the problem, and to my surprise, it kept working. That day, I walked a little taller. That day, I felt one of the proudest moments in my developer career.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">It&#39;s been a long week 😴 and I&#39;ve finally solved the page dividing feature how I always envisioned it. The previous version just felt incomplete. As a result, the amount I&#39;ve learned has been a reward on it&#39;s own.<br><br>7 .md docs ➡️ 17 🎨 stylized pages ➡️ Exported as 1 PDF ✅ <a href="https://t.co/PQ461qD8oT">pic.twitter.com/PQ461qD8oT</a></p>&mdash; Mike England (@mikelikethebike) <a href="https://twitter.com/mikelikethebike/status/1860544945116881346?ref_src=twsrc%5Etfw">November 24, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Finishing the Application

With the page splitter completed, I started finishing features as if it were my only purpose in life. Next, it was time to figure out a release plan. However, all my doubts about using Electron came rushing back, and I felt stuck.

The longer I thought about it, the more I second-guessed an Electron release. Expecting users to download a 286MB package for less than 2MB of actual code felt unfair. Combined with the lifecycle costs of supporting the app, it no longer seemed like a good fit.

> While watching a movie that night, I saw a floppy disk and remembered a time when you could just insert a disk, save things, and eject.

This was my pivotal moment. I lit up with excitement at the idea of allowing users to control their own data.

> So... yeah... I decided to rebuild the whole project as a web app.

## Figuring Out Persistence

One of my biggest concerns was data persistence. I initially looked at SQLite but then stumbled upon the [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API). After a quick prototype, it became clear that this was the perfect solution.

I needed:

- A database stored on the user's device
- Full removability by the user
- CRUD functionality
- Built-in version management
- Great storage capacity
- Same-origin access only
- Low maintenance costs

## Release Time

After porting the UI and overhauling inputs, I improved the dashboard and finalized the database for persistence. The biggest challenge was handling image uploads, as browsers require user interaction for file access.

While flying from Washington to Munich, I finished the new asset management functionality—one of the last big tasks. Exhausted and sleep-deprived, I woke up at 2 AM and decided to YOLO a silent release.

To my surprise, everything worked on the first try. I was caught off guard but incredibly excited. Eventually, I fell back asleep.

## Post-Release

Looking back, I can’t remember working harder on anything. This project leveled me up as both a developer and product maker. The lessons I learned go beyond what I could have learned in a typical 9-to-5.

> When I was ready to quit, I could hear ThePrimeagen’s motivational words—"Just do the thing."—in the back of my mind, cheering me on.

## So What’s Next?

This past year was tough. Multiple life events left me feeling like things were pointless, and I frequently wanted to quit. My friends and family noticed. I’m incredibly thankful for their support.

Whether this app opens new doors or earns nothing, I feel accomplished. I grew as a person while building it. This application is very special to it's around an idea I deeply care about. I even mixed in some personal easter eggs within the application such as my love for cats, and `color: skyblue`.

In the meantime, I’ll keep adding features and working towards happiness. Since the initial release, I’ve already added so much, with more to come. I even recently created a resume for Gandalf the Grey using Stellar Pages + AI.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I used <a href="https://t.co/B2XqKfDWCE">https://t.co/B2XqKfDWCE</a> to create my resume, but I didn&#39;t want to share it publicly so I made one for Gandalf the Grey 🧙‍♂️. Once I got it configured, I was able to generate the Gandalf&#39;s resume with an LLM output markdown.<br><br>It was a fun exercise and now I have bugs to fix. <a href="https://t.co/XZthq87TJc">pic.twitter.com/XZthq87TJc</a></p>&mdash; Mike England (@mikelikethebike) <a href="https://twitter.com/mikelikethebike/status/1890026954465907128?ref_src=twsrc%5Etfw">February 13, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

If you like [Stellar Pages](https://stellarpages.app/) or just think it’s a cool project, please share it—or just say hey.
