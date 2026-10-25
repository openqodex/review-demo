# review-demo

This repository exists to show a live OpenQodex review. It is a demo, not production code.
It holds one bug planted on purpose, on the branch `planted-bug` and in its pull request.
The planted bug is at `src/paginate.js:25` in that change: the loop in `pages()` stops one page early, so the last page is never yielded, although the comment above it says the last page is included.
The pull request "Planted bug for the live review (labelled)" holds the receipt of the OpenQodex review of that change.

## What the code does

`src/paginate.js` splits a list into pages numbered from 1.

- `page(items, n, size)` returns the items on page `n`. The last page may hold fewer items. A page past the end is an empty list.
- `pageCount(items, size)` returns how many pages the list fills.

## Run the tests

```
node --test
```

Node 22 or later. There are no dependencies.

## The review

The review was run with `openqodex review` on the uncommitted change, the way a developer reviews a change before a push. OpenQodex is at https://github.com/openqodex/openqodex.

## Licence

Apache 2.0, see `LICENSE`.
