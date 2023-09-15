import { it, vi, expect } from "vitest";
import { sendDataRequest } from "./http";


const test = "test"
const testFn = vi.fn(() => {
    return new Promise((resolve, reject) => {
        resolve({
            ok: true,
            json: () => new Promise((resolve, reject) => {
                resolve(test)
            })
        })
    })
})

vi.stubGlobal('fetch',testFn)

it("test http request fn", () => {
    const testData = {key:'test'}
    return expect(sendDataRequest(testData)).resolves.toEqual(test);
})