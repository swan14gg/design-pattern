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

  test("get operation", () => {
    personProxy.name;
    expect(console.log).toHaveBeenCalledWith("The value of name is John Doe");

    personProxy.age;
    expect(console.log).toHaveBeenCalledWith("The value of age is 42");

    personProxy.nationality;
    expect(console.log).toHaveBeenCalledWith(
      "The value of nationality is American"
    );
  });

  test("set operation", () => {
    personProxy.age = 45;
    expect(console.log).toHaveBeenCalledWith("Changed age from 42 to 45");

    personProxy.name = "Jane Doe";
    expect(console.log).toHaveBeenCalledWith(
      "Changed name from John Doe to Jane Doe"
    );

    personProxy.nationality = "British";
    expect(console.log).toHaveBeenCalledWith(
      "Changed nationality from American to British"
    );
  });
});
