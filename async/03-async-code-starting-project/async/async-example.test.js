import { it } from "vitest"
import { generateToken } from "./async-example"
import { expect } from "chai"


it('should generate token value', () => {
    const testUserEmail = 'test@test.com'
    generateToken(testUserEmail, (err, token) => {
        expect(token).toBeDefined()
    })
})