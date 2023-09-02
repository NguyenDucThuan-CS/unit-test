import { it, expect } from "vitest"
import { generateToken } from "./async-example"
import { generateTokenPromise } from "./async-example"


it('should generate token value', (done) => {
        const testUserEmail = 'test@test.com'
        generateToken(testUserEmail, (err, token) => {
            try {
                expect(token).toBeDefined();
                done()
            }
            catch (err) {
                done(err)
            }
        
        })
})

it("should generate token value", () => {
    const testUserEmail = 'test@test.com';
    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined()
})