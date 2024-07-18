---
title: Debugging JavaScript Imports, A Case Study of Unexpected Issues
pubDate: July 18 2024
description: Explore a real-world scenario of debugging JavaScript imports after relocating code from a script tag to a `.js` file. Understand the unexpected issues that arose, the troubleshooting process, and key takeaways for avoiding similar problems in your projects.
heroImage: /javascript-imports-case-study-960x480.jpeg
heroAlt: Photo by <a href="https://unsplash.com/@helloimnik?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nik</a> on <a href="https://unsplash.com/photos/lego-minifig-head-toy-lot-v8pL84kvTTc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

---

Recently, I was working on a project that was using vanilla JS. I needed to relocate some of the code I wrote from a raw script tag to a `.js` file. The code fully worked before I moved it. While I was moving the JS code, I was also relocating PHP and HTML elements. However, midway through this move, disaster struck, and I was left troubleshooting why things stopped working. With a bit of luck, I determined that this was caused by the `import` statement I used in the new JS file. That's where things got a little weird.

**Working import example**

```js
<script type="module">
  import { myCustomFunction } from 'some/file/path.js';
</script>
```

**Failed import example**

```js
import {  myCustomFunction } from 'some/file/path';
```

The reason why this one was a bit strange wasn't the fact that import didn't work but rather the characteristics caused by the imports not working.

- No errors were thrown in the console
- No missing files were detected
- Other functions within the file were not being executed
- Console logs after the import didn't work either
- The project-specific context of the code's location made troubleshooting a little bit more difficult
- New PHP errors were being thrown as a result of the JS not working

With all of these characteristics in mind, I went through the normal checks of whether I wrote the import and exports properly, and with no luck. In this case, the error was caused by the way the JS file was enqueued. Next, I wanted to understand more deeply: why did it work before, and why doesn't it work now? Make it make sense.

Here's what I realized after a bit of [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) reading. A common pattern for loading JS into a PHP/HTML involves using a script tag with `src` or just inlined JS. Most of the time, we don't declare `type="module"`. If I had to guess, it's because it's not a well-known attribute, it's newer and has less browser support, and in most cases, you might not even need it. On projects where your code is compiled, there's a good chance your imports are being handled automatically by the compiler.

See a live code example on [code sandbox](https://codesandbox.io/p/sandbox/import-module-debugging-5vhhjl?file=%2Fsrc%2Findex.js%3A6%2C1&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clyr8wo0600063b6i8xkjkaca%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clyr8wo0600023b6il43k4l2q%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clyr8wo0600033b6io39kdxiw%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clyr8wo0600053b6ifie5k2qp%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clyr8wo0600023b6il43k4l2q%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyr8wo0600013b6itz3hv9gp%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.html%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clyr90egg00023b6op85ldly7%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A6%252C%2522startColumn%2522%253A1%252C%2522endLineNumber%2522%253A6%252C%2522endColumn%2522%253A1%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.js%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clyr8wo0600023b6il43k4l2q%2522%252C%2522activeTabId%2522%253A%2522clyr90egg00023b6op85ldly7%2522%257D%252C%2522clyr8wo0600053b6ifie5k2qp%2522%253A%257B%2522id%2522%253A%2522clyr8wo0600053b6ifie5k2qp%2522%252C%2522activeTabId%2522%253A%2522clyr8yj8l006a3b6izomgbwv1%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyr8wo0600043b6icbj5yhn7%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%252C%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522id%2522%253A%2522clyr8yj8l006a3b6izomgbwv1%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clyr8wo0600033b6io39kdxiw%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clyr8wo0600033b6io39kdxiw%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

```html
<script src="./script.js"></script>
```

```html
<script type="module" src="./script.js"></script>
```

As a result, it caused me to reflect on this topic and take a moment to understand why I didn't catch this faster. Here are a few reasons I think this could easily trip up people, especially if you're in an area where you didn't write the code or load the JS file.

- Working mostly on projects that are compiled, imports get handled during the compilation step and this might not be your first train of thought during troubleshooting.
- The lack of error logging made it hard to determine the root issue. If you don't catch it immediately, you might go too far before you realize it's broken.