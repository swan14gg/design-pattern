import { Observerable, Observer } from "./observer";
import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";

describe("Observer pattern", () => {
  let observerable;
  let observer1;
  let observer2;
  let log;

  beforeEach(() => {
    observerable = new Observerable();
    observer1 = new Observer();
    observer2 = new Observer();
    log = console.log;
    console.log = vi.fn();
  });

  afterEach(() => {
    console.log = log;
  });

  test("subscribe adds observers correctly", () => {
    observerable.subscribe(observer1);
    observerable.subscribe(observer2);
    expect(observerable.observers.length).toBe(2);
  });

  test("unsubscribe removes observers correctly", () => {
    observerable.subscribe(observer1);
    observerable.subscribe(observer2);
    observerable.unsubscribe(observer2);
    expect(observerable.observers.length).toBe(1);
  });

  test("notify notifies all observers", () => {
    observerable.subscribe(observer1);
    observerable.subscribe(observer2);
    observerable.notify("Hello");
    expect(console.log).toHaveBeenCalledWith(
      "Observer received message: Hello"
    );
    expect(console.log).toHaveBeenCalledTimes(2);
  });
});
