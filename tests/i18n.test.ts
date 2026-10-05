import { describe, expect, it } from "vitest";
import { MESSAGES } from "../src/i18n";
import { SPECIAL_TYPE_COUNT } from "../src/save/format";

describe("locales", () => {
  it.each(Object.entries(MESSAGES))("%s names every special bonus type", (_, msg) => {
    expect(msg.specials).toHaveLength(SPECIAL_TYPE_COUNT);
    expect(msg.start.steps.every((s) => s.length === 2)).toBe(true);
  });
});
