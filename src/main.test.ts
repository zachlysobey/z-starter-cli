import { expect } from './test-setup'

describe('main.ts', function() {
    it('is going to need some tests', function() {
        expect(1 + 1).to.equal(2)
    })

    it('will need async tests too', async function() {
        await expect(Promise.reject('test')).to.be.rejectedWith(/test/)
    })
})
