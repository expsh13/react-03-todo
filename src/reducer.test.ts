import { reducer } from "./reducer";
import { test, expect, describe } from "vitest";

describe("reducer", () => {
  test("should handle add action", () => {
    const initialState = [{ title: "Item 1" }];
    const action = { type: "add" as const, list: { title: "Item 2" } };
    const state = reducer(initialState, action);
    expect(state).toEqual([{ title: "Item 1" }, { title: "Item 2" }]);
  });

  test("should handle delete action", () => {
    const initialState = [{ title: "Item 1" }, { title: "Item 2" }];
    const action = { type: "delete" as const, id: 1 };
    const state = reducer(initialState, action);
    expect(state).toEqual([{ title: "Item 1" }]);
  });
});
