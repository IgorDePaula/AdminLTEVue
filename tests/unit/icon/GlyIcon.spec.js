import { mount } from '@vue/test-utils'
import LteGlyIcon from '../../../src/components/Icon/GlyIcon'

describe('FaIcon', () => {
  const wrapper = mount(LteGlyIcon)
  wrapper.setProps({type:'glyphicon-eur'})
  it('Validates correct markup', () => {
    expect(wrapper.html()).toContain('span')
    expect(wrapper.html()).toContain('glyphicon')
    expect(wrapper.html()).toContain('glyphicon-eur')
  })
})
