import { HttpError, ValidationError } from "./errors";
import { it, expect, describe } from 'vitest'

describe('should return approriate statuscode, message, data',() => {
    it('test case 1', () => {
        const statusCode = 200;
        const message = 'success';
        const data = { key: 'test'};

        const testError = new HttpError(statusCode,message,data);

        expect(testError.statusCode).toBe(statusCode);
        expect(testError.message).toBe(message);
        expect(testError.data).toBe(data)
    })

    it('test case 2', () => {
        const statusCode = 200;
        const message = 'success';
     

        const testError = new HttpError(statusCode,message);

        expect(testError.statusCode).toBe(statusCode);
        expect(testError.message).toBe(message);
        expect(testError.data).toBeUndefined()
    })
})


describe('should return approriate statuscode, message, data',() => {
    it('test case 1', () => {
        const testMess = "test"
        const testError = new ValidationError(testMess);
        expect(testError.message).toBe(testMess)
    })
})