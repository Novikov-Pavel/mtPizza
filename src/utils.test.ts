import { smUnit } from "./utils";

describe("smUnit", () => {
    test("smUnit 1 см", () => {
        expect(smUnit(1)).toBe("1 см.");
    });
    test("smUnit -1 см", () => {
        expect(smUnit(-1)).toBe(false);
    });
    test("smUnit 0 см", () => {
        expect(smUnit(0)).toBe(false);
    });
});
