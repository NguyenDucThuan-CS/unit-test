import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should tranform a string number to a number with type number", () => {
    const input = '1';
    const result = transformToNumber(input);

    expect(result).toBe(1);
})

it("should tranform a string number to a number with type number", () => {
    const input = 'invalid';
    const result = transformToNumber(input);

    expect(result).toBeNaN();
})