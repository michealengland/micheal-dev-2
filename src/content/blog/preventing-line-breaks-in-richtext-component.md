---
title: Preventing line break elements in the RichText component
# date: 2021-05-13T17:00:00Z
description: By default the WordPress Gutenberg RichText component will insert `<br>` tags into the block grammar when the "enter" key is used. While this is okay in some circumstances, it may not always be wanted behavior.
pubDate: 'May 13 2021'
heroImage: '/robo-doberman-in-computer-tower-960x480.jpeg'
heroAlt: 'Robot doberman climbing the computer tower.'
---

By default the WordPress Gutenberg RichText component will insert `<br>` tags into the block grammar when the "enter" key is used. While this is okay in some circumstances, it may not always be wanted behavior.

_If you do not actually need features like bold, italics, links, or other text formats. I would recommend using a text input instead of the RichText component._

## What Doesn't Work

If you've checked out the documentation around the RichText component, you may have seen the `multiline` prop as a possible solution. However, this feature is misleading because it does not prevent multiple lines. Instead, it inserts a `<br>` tag on return or `<someTagName>` on return. For example, the `core/list` has multiline enabled and creates new line wrapped in an `<li></li>`.

## How to Prevent Line Breaks

Taking a look at [onSplit](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/rich-text#onsplit-value-string--function) property for the RichText component we can override the default behavior for when a split should occur (Returns count as a split). By returning a function that does nothing, when the return key is used no changes will occur. However, we still need to add one more change.

Due to the codependent relationship of `onSplit` and `onReplace` we must include the [onReplace](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/rich-text#onreplace-blocks-array--function) property and pass it an empty function as well.

_UPDATE 5-25-21: The `multiline` prop on the RichText component must be set to `false` for this feature to work. The `multiline` prop defaults to `false` so it's not explicitly required. Any value other than `false` will cause the return disable not to work._

```js
<RichText
  multiline={false} // Not required, this is the default value.
  onReplace={() => {}}
  onSplit={() => {}}
/>
```

## Testing the Results

Once your RichText component has these properties in place hitting the "enter" key should not do anything. Hopefully this helps someone else out there.
