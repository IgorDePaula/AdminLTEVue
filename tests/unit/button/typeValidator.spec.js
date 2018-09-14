import typeValidator from '../../../src/mixins/button/typeValidator'

describe('Button TypeValidator', () => {

    it('Validates a type default', () => {
        expect(typeValidator('default')).toBe(true)
    })
    it('Validates a type primary', () => {
        expect(typeValidator('primary')).toBe(true)
    })
    it('Validates a type success', () => {
        expect(typeValidator('success')).toBe(true)
    })
    it('Validates a type info', () => {
        expect(typeValidator('info')).toBe(true)
    })
    it('Validates a type warning', () => {
        expect(typeValidator('warning')).toBe(true)
    })
    it('Validates a type danger', () => {
        expect(typeValidator('danger')).toBe(true)
    })

    it('Not validates a type sky', () => {
        expect(typeValidator('sky')).toBe(false)
    })

})
