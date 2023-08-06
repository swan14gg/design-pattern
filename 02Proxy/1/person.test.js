import personProxy from "./person";
import { describe, test, expect, afterEach, beforeEach, vi } from "vitest";

describe("personProxy", () => {
  let originalLog;

  beforeEach(() => {
    originalLog = console.log;
    console.log = vi.fn();
  });

  afterEach(() => {
    console.log = originalLog;
  });

  test("success get operation", () => {
    const name = personProxy.name;
    expect(console.log).toHaveBeenCalledWith("The value of name is John Doe");
    expect(name).toBe("John Doe");

    const age = personProxy.age;
    expect(console.log).toHaveBeenCalledWith("The value of age is 42");
    expect(age).toBe(42);
  });

  test("failure get operation", () => {
    const height = personProxy.height;
    expect(console.log).toHaveBeenCalledWith(
      "Hmm.. this property doesn't seem to exist"
    );
    expect(height).toBeUndefined();
  });

  test("success set operation", () => {
    personProxy.age = 45;
    expect(console.log).toHaveBeenCalledWith("Changed age from 42 to 45.");
    expect(personProxy.age).toBe(45);

    personProxy.name = "Jane Doe";
    expect(console.log).toHaveBeenCalledWith(
      "Changed name from John Doe to Jane Doe."
    );
    expect(personProxy.name).toBe("Jane Doe");
  });

  test("failure set operation", () => {
    personProxy.age = "forty-five";
    expect(console.log).toHaveBeenCalledWith(
      "Sorry, you can only pass numeric values for age."
    );
    expect(personProxy.age).toBe(45);

    personProxy.name = "J";
    expect(console.log).toHaveBeenCalledWith(
      "You need to provide a valid name."
    );
    expect(personProxy.name).toBe("Jane Doe");
  });
});
