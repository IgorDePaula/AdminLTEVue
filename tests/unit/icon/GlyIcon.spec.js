import { mount } from '@vue/test-utils'
import LteGlyIcon from '../../../src/components/Icon/GlyIcon'

describe('FaIcon', () => {
  const wrapper = mount(LteGlyIcon, { propsData: { type: 'glyphicon-eur' } })
  it('Validates correct markup', () => {
    expect(wrapper.html()).toContain('span')
    expect(wrapper.html()).toContain('glyphicon')
    expect(wrapper.html()).toContain('glyphicon-eur')
  })
})
