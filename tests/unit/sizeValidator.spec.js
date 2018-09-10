import sizeValidator from '../../src/mixins/sizeValidator'

describe('SizeValidator', () => {

    it('Validates a size xs', () => {
        expect(sizeValidator('xs')).toBe(true)
    })
    it('Validates a size lg', () => {
        expect(sizeValidator('lg')).toBe(true)
    })
    it('Validates a size sm', () => {
        expect(sizeValidator('sm')).toBe(true)
    })
    it('Not validates a size xl', () => {
        expect(sizeValidator('xl')).toBe(false)
    })

})
