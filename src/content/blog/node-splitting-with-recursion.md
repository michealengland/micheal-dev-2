---
title: Mastering Node Splitting with Recursion in Web Development
description: Learn how I solved complex node splitting and recursion challenges in a web app, gaining key insights into DOM manipulation, data structures, and debugging.
heroImage: ./assets/node-splitting-with-recursion960x480.webp
heroAlt: Code sandbox prototype
pubDate: Feb 27 2025
---

Full disclosure: This article discusses a real-world experience with everyone’s favorite topic—data structures and algorithms (DSA). In this experience share, I recap some of the things I learned while working on [Stellar Pages](https://stellarpages.app). It wasn’t all sunshine and rainbows; some parts were quite difficult.

During the early days of Stellar Pages, I tackled a particularly challenging problem I had never encountered before. I had a use case where, based on a certain location within a node—such as an unordered list—I needed to split that node in half as-is. This part was relatively straightforward since it involved determining a specific point and moving everything after that point to a new node.

**For example, we decide to split a flat list at item #2.**

```markdown
- List item 1
- List item 2
- List Item 3
- List Item 4
```

**Would become**

Original Node:
```markdown
- List item 1
- List item 2
```

New Node:
```markdown
- List Item 3
- List Item 4
```

**Next, let's say we have the a nested list and want to divide at "List Item 2AB".**

```markdown
- List item 1
- List item 2
	- List Item 2A
	- List Item 2B
		- List Item 2AA
		- List Item 2AB
		- List Item 2AC
	- List Item 2C
- List Item 3
- List Item 4
```

**Here's what we would end up with.**

Original Node;
```markdown
- List item 1
```

New Node:
```markdown
- List item 2
	- List Item 2A
	- List Item 2B
		- List Item 2AA
		- List Item 2AB
		- List Item 2AC
	- List Item 2C
- List Item 3
- List Item 4
```

**Meanwhile, the best solution would retain the original structure.**

Original Node:
```markdown
- List item 1
- List item 2
	- List Item 2A
	- List Item 2B
		- List Item 2AA
		- List Item 2AB
```

New Node:
```markdown
		- List Item 2AC
	- List Item 2C
- List Item 3
- List Item 4
```

> While the early prototype was simple it wasn't a great longterm solution, especially for nested element structures. My priority for the app was determining its viability **so, I left this problem for Future Mike.**



## The Node splitter resurfaces

Eventually, I made significant progress on the application, working many nights and weekends. Throughout these sessions, the node splitter was always on my mind. Once I reached a good place it was time to circle back and solve this problem.

My first approach was to enhance the original page splitter by manually checking one level down with a nested loop. If an item met my criteria, I would check for sub-elements and continue until no further split points were found. This worked but with limited success. I mostly did this to rough out the idea I was after.

If you’re thinking, _this sounds like a job for recursion_, you’re right. I thought I had a solid grasp of recursion, but tackling it in a real-world scenario taught me some tough lessons. It didn’t take long before I got stuck.

## Determining a path forward

One of the first challenges I solved was determining the exact point where nodes needed to be split which was a big win. However, this success was immediately overshadowed by a much bigger issue: retaining the structure while dividing nodes (_post-recursion_).

Throughout this process, I thought about the problem in terms of two key elements:

1. **Node A (Original)** – The tree we subtract from.
2. **Node B (Empty Clone)** – The tree we add to.

Visually, the challenge is that each time we go down a level, we must track our previous position. Once the split occurs, the next item must be moved to the correct location in the new structure.

Original Node:
```markdown
- List item 1
- List item 2 // The item is in here, go down.
	- List Item 2A
	- List Item 2B // The item is in here, go down.
		- List Item 2AA
		- List Item 2AB // Found the item.
```

New Node:
```markdown
		- List Item 2AC // Auto moved.
	- List Item 2C // Resume one depth above.
- List Item 3 // Resume one depth above.
- List Item 4 // Auto moved.
```

While troubleshooting and testing various cases, I eventually lost track of what I was doing. At this point, I had multiple iterations of the same algorithm—each _almost_ working but riddled with small bugs that had formed a colony.

> Meanwhile, my brain hurt from trying to keep track of all the edge cases in this challenge.

Mentally exhausted, I decided I needed a fresh approach. I stripped the problem down to its bare essentials. Due to how this functionality was being invoked, I frequently had to fight off infinite loops, which made debugging recursion even harder.

For the sake of progress, I isolated the algorithm in a [CodeSandbox](https://codesandbox.io/p/sandbox/confident-swirles-2k6v72?file=%2Fprevious.mjs%3A5%2C4). *Note: This is an early demo I had created that kind of solved the problem. While the full example of my results is not publicly visible, this is an earlier representation.*

This sandbox helped me incrementally refine the solution until I had a working prototype. It felt like the heavens and stars had aligned. But my happiness was short-lived—when applied in practice, it didn’t work as expected.

While the CodeSandbox worked well in isolation, it didn’t function as expected in practice for several reasons:

1. Debugging was complicated by infinite loops caused by the splitter algorithm.
2. A hidden bug in how splits were determined within the application added unexpected complexity.
3. Unlike the sandbox demo, real Markdown-to-HTML conversions sometimes included hidden elements, leading to incorrect results.
4. Retaining content order presented additional challenges, especially when transferring content from **Node A → Node B** while preserving structure.
## So I gave up...

Just kidding—I didn’t give up. Over time, I powered through each challenge, making small but meaningful progress toward a larger solution. While developing the early versions of the splitter, I learned a tremendous amount about DOM manipulation. I practically lived in the MDN docs and discovered techniques I hadn’t even known existed.

> I also used LLMs to fill in the gaps in my understanding. While they occasionally helped, the answers were often wrong. This was a poor use case for an LLM.

The more I learned, the more I could see incremental progress. At this point, I’m starting to feel pretty good—the algorithm mostly works. While it’s not a perfect translation, it’s very close.

**Let's recap:**

- We use a **Node tree** as our data structure.
- We traverse the tree to locate a specific split point.
- Recursion is used in three key phases:
    - **Pre-Recursion** – Traverse nodes to find the split point based on criteria. If a matching node has children, we go deeper until we can't proceed further.
    - **During Recursion** – Once the split point is found, we signal that it's safe to move all remaining nodes to a new tree while tracking our traversal path. This optimization helps improve efficiency.
    - **Post-Recursion** – We shape the new tree using storage nodes created in the **Pre-Recursion** step.
- The result is a modified original node and an almost-perfect new node.
## I'll get this working or die trying

We're not done yet. After reaching this point, I encountered a few new challenges. Some of the nested structures were off by one, and unexpected DOM elements appeared that I didn’t catch until I started logging the `innerHTML`. These issues weren’t present in the CodeSandbox demo, as the HTML example was much simpler.

So, I kept chipping away at the problem, deeply analyzing the differences between my expectations and the actual output. Eventually, I added a few key conditionals that slowly eliminated bugs until only a few remained.

Then, the moment came where I thought I was done. Just kidding—I had a false positive. It turned out I still had more work to do. Consumed by the power of the One Ring, I dedicated all my free time to tackling the last few bugs.

- Nesting was still off in some cases.
- The algorithm worked on live test data, but when applied in the full environment, it triggered an infinite loop.
## Climbing Mount Doom

So close to my precious, I decided to dive deep into the debugger tools and walk through the code line-by-line. I’d done this a few times on the project, but never this intensely. Eventually, I discovered that my algorithm had one more condition I had missed.

Then, I approached the fires of Mordor. As I closed in on the infinite loop, I once again used the debugger to trace through the functions, only to realize I was an absolute moron. At the root of the page splitter, I had a minor bug in how the pages were being split—one that had existed before I even created the recursion algorithm.

With a single-line code change, I re-ran the algorithm. It worked. I didn’t believe it, so I ran it 20 more times with different data sets. It worked, again and again and again.
## Taking the time to clean up

At this point, the algorithm worked, but it was pretty messy from all the updates I’d made during troubleshooting. There were code comments scattered everywhere, and I noticed places where the code could be more efficient, along with inconsistencies in variable names.

This was the easy part—I cleaned up the naming, organized the code, and optimized smaller areas. The larger areas I left for Future Mike. While it would be nice to implement the [Square Root algorithm](https://www.cantorsparadise.com/the-square-root-algorithm-f97ab5c29d6d), it wasn’t worth optimizing just yet.

One thing was clear: this feature working paved the way for the rest of the Electron app I had built, as well as the web app version I built later on.
## Why I would recommend hanging in there

I'm so glad I hung in there. I learned _many_ new skills using the DOM, tree data structures, and recursion. The lessons I picked up along the way greatly contributed to my development skills, my day job, and even shifted my perspective on tackling new topics. There were multiple times I almost gave up and moved on, but I kept pushing through.

As a full-time developer, husband, and father to a 3-year-old, it was tough to find the energy to work on a non-paying project.

All of this is just a long way of saying: _just do the thing._ The skills you gain along the way will prove invaluable down the road.

**Advice I would give my past self**

- Learn about [Nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node) deeply! You might be surprised by what you learn even if you already feel knowledgeable.
- Get very familiar with "Sources" tab the browser Inspector.
- Don't be afraid to abstract and breakdown challenges.
- Seeing things through is a great feeling. When you make it past a tough task, the remaining things felt significantly easier.
- Take a refresher on recursion & tree data structures.
