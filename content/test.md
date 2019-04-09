---
title: Content test
description: On this site, Markdown is transformed to HTML through Remark following GitHub Flavored Markdown. This page is intended as a quick reference and showcase.
---

For more complete info, see [John Gruber's original spec](http://daringfireball.net/projects/markdown/) and the [Github-flavored Markdown info page](http://github.github.com/github-flavored-markdown/).

## Headers

```text
# H1
## H2
### H3
#### H4
##### H5
```

# H1

## H2

### H3

#### H4

##### H5

## Emphasis

```text
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

```text
1. First ordered list item
2. Another item
  - Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.
   Some text that should be aligned with the above item.
```

1. First ordered list item
2. Another item
   - Unordered sub-list.
3. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
4. And another item.
   Some text that should be aligned with the above item.

## Links

There are two ways to create links.

```markdown
[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```

[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images

```markdown
![alt text](jellyfish-grid@2x.png 'Ocean Protocol Jellyfish')
```

Here's our jellyfish, with the title being output as caption:

![alt text](../node_modules/@oceanprotocol/art/jellyfish/jellyfish-grid@2x.png 'Ocean Protocol Jellyfish')

## Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and _Markdown Here_ -- support syntax highlighting.

```text
Inline `code` has `back-ticks around` it.
```

Inline `code` has `back-ticks around` it.

Blocks of code are either fenced by lines with three back-ticks, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

```bash
git clone https://github.com/oceanprotocol/barge.git
cd barge/

./start_ocean.sh --latest
```

```js
const { Ocean, Logger } = require('@oceanprotocol/squid')
;(async () => {
  const ocean = await Ocean.getInstance({
    nodeUri: 'http://localhost:8545'
  })

  const accounts = await ocean.getAccounts()

  Logger.log(JSON.stringify(accounts, null, 2))
})()
```

```python
from squid_py.ocean_contracts import OceanContractsWrapper

ocean = OceanContractsWrapper(host='http://localhost', port=8545, config_path='config.ini')

ocean.init_contracts()
```

```java
package com.oceanprotocol.squid.core;

import com.oceanprotocol.squid.models.AbstractModel;

import java.io.IOException;

public interface FromJsonToModel {

    static AbstractModel convertToModel(String json) throws IOException {
        throw new UnsupportedOperationException();
    };

}
```

```text
No language indicated, so no syntax highlighting in Markdown Here (varies on Github).
But let's throw in a <b>tag</b>.
```

## Tables

Tables aren't part of the core Markdown spec, but they are part of GFM and _Markdown Here_ supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

```markdown
Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| | Markdown | Less | Pretty | |
| | ------------- | --------------- | ---------- |------- |
| | _Still_ | `renders` | **nicely** | |
| | 1 | 2 | 3 | |
```

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

## Blockquotes

```markdown
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.
```

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

```html
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

## Horizontal Rule

```text
Hypens
---
Hyphens
```

Hypens

---

Hyphens

## Line Breaks

My basic recommendation for learning how line breaks work is to experiment and discover -- hit &lt;Enter&gt; once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You'll soon learn to get what you want. "Markdown Toggle" is your friend.

Here are some things to try out:

```text
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
```

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

This line is also begins a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the _same paragraph_.

(Technical note: _Markdown Here_ uses GFM line breaks, so there's no need to use MD's two-space line breaks.)

## Videos

Videos can be embedded like so, works with YouTube, Vimeo, VideoPress, Twitch:

```text
`video: https://www.youtube.com/watch?v=6YRmyUZr2No`
```

resulting in:

`video: https://www.youtube.com/watch?v=6YRmyUZr2No`

You can also add an image with a link to the video like this:

```html
<a
  href="http://www.youtube.com/watch?feature=player_embedded&v=6YRmyUZr2No"
  target="_blank"
>
  <img
    src="http://img.youtube.com/vi/6YRmyUZr2No/0.jpg"
    alt="IMAGE ALT TEXT HERE"
    width="240"
    height="180"
    border="10"
  />
</a>
```

<a href="http://www.youtube.com/watch?feature=player_embedded&v=6YRmyUZr2No" target="_blank"><img src="http://img.youtube.com/vi/6YRmyUZr2No/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

Or, in pure Markdown, but losing the image sizing and border:

```md
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```

## GitHub Repository Component

In all Markdown docs you can use some select React Components. This magic is done with [gatsby-remark-component](https://www.gatsbyjs.org/packages/gatsby-remark-component/).

The `Repository` component fetching and displaying information about a GitHub repo. Component can be used in Markdown as `<repo>`, it requires a `name` to be passed:

```html
<repo name="pleuston"></repo>
```

Note that the component name in Markdown needs to be always in lowercase, and have a closing tag.

Resulting in:

<repo name="pleuston"></repo>

You can also pass `readme="true"` and the readme contents of the repo will be rendered:

```html
<repo name="aquarius" readme="true"></repo>
```

Resulting in:

<repo name="aquarius" readme="true"></repo>

## Embedding File Contents from GitHub

You can embed any file contents like so, note that the language needs to be defined manually to get proper syntax highlighting:

```text
GITHUB-EMBED https://github.com/oceanprotocol/squid-js/blob/develop/src/keeper/Web3Provider.ts js GITHUB-EMBED
```

Resulting in:

GITHUB-EMBED https://github.com/oceanprotocol/squid-js/blob/develop/src/keeper/Web3Provider.ts js GITHUB-EMBED
