import typeValidator from '../../../src/mixins/alert/typeValidator'

describe('Alert TypeValidator', () => {

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
