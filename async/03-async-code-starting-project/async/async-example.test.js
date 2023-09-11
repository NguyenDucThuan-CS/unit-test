import { it, expect } from "vitest"
import { generateToken } from "./async-example"
import { generateTokenPromise } from "./async-example"


it('should generate token value', (done) => {
    const username = "jdjd@gmail.com"
    generateToken(username, (err, token) => {
        try {
            expect(token).toBeDefined();
            done()
        } catch (error) {
            done(error);
        }   
    })
})

it("should generate token value", () => {
    const testUserEmail = 'test@test.com';
    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined()
})