import { Dog, SuperDog } from "./dog";
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

  test("Dog", () => {
    const dog = new Dog("Fido");
    expect(dog.name).toBe("Fido");
    dog.bark();
    expect(console.log).toHaveBeenCalledWith("Woof!");
  });

  test("SuperDog", () => {
    const superDog = new SuperDog("Super Fido");
    expect(superDog.name).toBe("Super Fido");
    superDog.bark();
    expect(console.log).toHaveBeenCalledWith("Woof!");
    superDog.fly();
    expect(console.log).toHaveBeenCalledWith("Flying!");
  });
});
