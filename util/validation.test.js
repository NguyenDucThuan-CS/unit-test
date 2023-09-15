import { it, expect } from "vitest";
import { validateNotEmpty } from "./validation";

it("throw error if empty", () => {
    const testInput = '';
    const validateFn = () => validateNotEmpty(testInput);
    
    expect(validateFn).toThrow();
})

it("throw error if empty", () => {
    const testInput = '';
    const errMess = 'not empty string';

    const validateFn = () => validateNotEmpty(testInput,errMess);
    
    expect(validateFn).toThrow(errMess);
})