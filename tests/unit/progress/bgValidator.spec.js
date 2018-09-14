import bgValidator from '../../../src/mixins/progressBar/bgValidator'

describe('Progress BgValidator', () => {
  const color = ['primary','danger','warning','success']
  color.forEach(clr => {
    it(`Validates a bgColor ${clr}`, () => {
      expect(bgValidator(clr)).toBe(true)
    })
  })
})
