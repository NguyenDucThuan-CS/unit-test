import { it, expect, describe, vi } from "vitest";
import { generateReportData } from "./data";
import writeData from "./util/io";

describe("test spies", () => {
    it("1 use case", () => {
        const logger = vi.fn;
        
        expect(generateReportData(logger)).toBeCalled()
    })
})