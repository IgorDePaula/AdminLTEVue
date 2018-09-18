import bgValidator from '../../../src/mixins/smallBox/bgValidator'

describe('SmallBox BgValidator', () => {
  it('Validates a bgColor aqua', () => {
    expect(bgValidator('aqua')).toBe(true)
  })
  it('Validates a bgColor yellow', () => {
    expect(bgValidator('yellow')).toBe(true)
  })
  it('Validates a bgColor red', () => {
    expect(bgValidator('red')).toBe(true)
  })
  it('Validates a bgColor green', () => {
    expect(bgValidator('green')).toBe(true)
  })

  it('Not validates a bgColor blue', () => {
    expect(bgValidator('blue')).toBe(false)
  })
})
