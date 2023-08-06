import dog from "./dog";
import { describe, test, expect, afterEach, beforeEach, vi } from "vitest";

describe("dog.js test", () => {
  let originalLog;

  beforeEach(() => {
    originalLog = console.log;
    console.log = vi.fn();
  });

  afterEach(() => {
    console.log = originalLog;
  });

  test("Object create", () => {
    const dog1 = Object.create(dog);
    dog1.bark();
    expect(console.log).toHaveBeenCalledWith("Woof!");
  });

  test("Object Keys", () => {
    const dog1 = Object.create(dog);
    expect(Object.keys(dog1)).toEqual([]);
  });

  test("Object Prototype", () => {
    const dog1 = Object.create(dog);
    expect(Object.keys(dog1.__proto__)).toEqual(["bark"]);
  });
});
