import { test } from "node:test";
import assert from "node:assert/strict";
import { page, pageCount } from "../src/paginate.js";

const items = [1, 2, 3, 4, 5, 6, 7];

test("page returns the items of a page", () => {
  assert.deepEqual(page(items, 1, 3), [1, 2, 3]);
  assert.deepEqual(page(items, 2, 3), [4, 5, 6]);
});

test("the last page may hold fewer items", () => {
  assert.deepEqual(page(items, 3, 3), [7]);
});

test("a page past the end is empty", () => {
  assert.deepEqual(page(items, 4, 3), []);
});

test("pageCount counts the last, shorter page", () => {
  assert.equal(pageCount(items, 3), 3);
  assert.equal(pageCount([], 3), 0);
});

test("a size below 1 is refused", () => {
  assert.throws(() => page(items, 1, 0), RangeError);
  assert.throws(() => pageCount(items, 0), RangeError);
});
