import { expect, test } from "vitest";
import counter from "./counter.mjs";

test("incrementing 1 time should be 1", () => {
  counter.increment();
  expect(counter.getCount()).toBe(1);
});

test("incrementing 3 extra times should be 4", () => {
  counter.increment();
  counter.increment();
  counter.increment();
  expect(counter.getCount()).toBe(4);
});

test("decrementing 1  times should be 3", () => {
  counter.decrement();
  expect(counter.getCount()).toBe(3);
});
