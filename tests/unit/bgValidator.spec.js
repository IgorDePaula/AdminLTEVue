import bgValidator from '../../src/mixins/bgValidator'

describe('BgValidator', () => {

    it('Validates a bgColor maroon', () => {
        expect(bgValidator('maroon')).toBe(true)
    })
    it('Validates a bgColor purple', () => {
        expect(bgValidator('purple')).toBe(true)
    })
    it('Validates a bgColor navy', () => {
        expect(bgValidator('navy')).toBe(true)
    })
    it('Validates a bgColor orange', () => {
        expect(bgValidator('orange')).toBe(true)
    })
    it('Validates a bgColor olive', () => {
        expect(bgValidator('olive')).toBe(true)
    })

    it('Not validates a bgColor blue', () => {
        expect(bgValidator('blue')).toBe(false)
    })

})
