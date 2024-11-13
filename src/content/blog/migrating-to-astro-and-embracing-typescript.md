---
title: My Journey from Gatsby.js to Astro.js and Embracing TypeScript
pubDate: July 04 2024
description: Discover my journey from Gatsby.js to Astro.js and how I transitioned my site to TypeScript. Learn about the benefits, process, and key lessons from this migration to enhance your static site development.
heroImage: /src/content/blog/assets/migrating-to-astro-and-embracing-typescript-960x480.webp
heroAlt: Abstract colorful structure or rgb.
---

It's been almost four years since I decided to throw out my bulky WordPress site and move to the sleek and shiny static site setup that I've grown very fond of. Over those years, I've added features, redesigned areas, broken a few things along the way, and fixed them 😆 right after. However, it wasn't that long ago that I decided to move on from Gatsby.js to something more suited for my needs, which led me to Astro.js.

Since migrating the site to Astro.js, things have been great! The site builds really fast, and I love the option of choosing React or native `.astro` syntax. One thing that I've been wanting to do for a while was to get the site running on TypeScript. In the past, I had only worked on existing structures heavily entrenched in TypeScript and never really got to start from scratch. Even though I'm by no means a TypeScript expert, I really wanted to give this a try.

I believe TypeScript is a good path for this project moving forward because:
- It adds a layer of static testing directly into the project.
- It helps prevent incorrect assumptions about values.
- It's extendable and well-supported.

## The Process

I decided that I really wanted to bang this out quickly, as I don't have much free time at the moment. Work is really busy, and I'm often feeling a bit burnt out from the projects I work on. So I came up with a very simple plan:

1. Configure the project for TypeScript. Astro.js was already configured for TypeScript out of the box, so this step was easy.
2. Convert all files with `.js` and `.jsx` extensions to `.ts` and `.tsx`.
3. Crawl through components, starting with the simplest ones first, and work my way through them all. Since I use atomic design organization, that meant starting with everything in the `/atoms` directory.
4. After making good progress, go back and re-check other areas to ensure I had the correct types throughout the context tree. Spoilers 😆, I had to fix a few.
5. In some cases, refactor to address the issues.

## What I Learned

There were a few key things I picked up that, if I had to do this process again, I would do a little differently.

**Starting from top to bottom:**

After getting a few simple components out of the way, start with the most generic components and work my way down the component tree. I found that when I had a good foundation, passing the types through to subcomponents became much easier!

**Keep it simple:**

I've seen past projects where types get heavily abstracted and then re-used throughout the project. I decided to avoid this as much as possible and keep things very simple.

1. I found that keeping prop names consistent made things easier. I had to go back and rename some of these, but it made the cognitive load much lighter.
2. When passing a large chunk of data like a post object, it's much easier to import the types rather than redefine them.
3. Pay attention to linked components while you're making fixes. You might overlook something small.

**Using AI as a helper when things aren't clear**

While it wasn't perfect, there were a few times I got stuck and needed to make progress. I used a mixture of AI and just writing the types directly. However, definitely don't rely on this entirely, as in some cases the AI tried to make props optional that I wanted to be required, and it would pick the wrong type on rare occasions.

### Final Thoughts

While it wasn't that bad, I was able to convert my small site in a few hours. As a result, I found a lot of minor bugs and improvements along the way. I also have peace of mind knowing that when I go to add a new feature, there is another layer of safety to prevent me from unintentionally doing something wrong.
