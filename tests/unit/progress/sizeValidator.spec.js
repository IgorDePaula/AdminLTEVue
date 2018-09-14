import sizeValidator from '../../../src/mixins/progressBar/sizeValidator'

describe('SizeValidator', () => {
  const sizes = ['xxs', 'sm', 'xs']
  sizes.forEach(size => {
    it(`Validates a size  ${size}`, () => {
      expect(sizeValidator(size)).toBe(true)
    })
  })
})
