// Splits a list into pages. Pages are numbered from 1.

function checkSize(size) {
  if (!Number.isInteger(size) || size < 1) throw new RangeError("size must be an integer of 1 or more");
}

// Returns the items on page n (1-based) when each page holds size items.
// The last page may hold fewer items. A page past the end is an empty list.
export function page(items, n, size) {
  checkSize(size);
  if (!Number.isInteger(n) || n < 1) throw new RangeError("n must be an integer of 1 or more");
  const start = (n - 1) * size;
  return items.slice(start, start + size);
}

// Returns how many pages items fills at size items per page.
export function pageCount(items, size) {
  checkSize(size);
  return Math.ceil(items.length / size);
}

// Yields every page in order, from page 1 to the last page, the last one included.
export function* pages(items, size) {
  const count = pageCount(items, size);
  for (let n = 1; n < count; n++) yield page(items, n, size);
}
