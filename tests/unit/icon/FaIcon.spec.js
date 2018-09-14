import { mount } from '@vue/test-utils'
import LteFaIcon from '../../../src/components/Icon/FaIcon'

describe('FaIcon', () => {
  const wrapper = mount(LteFaIcon)
  wrapper.setProps({type:'fa-eye'})
  it('Validates correct markup', () => {
    expect(wrapper.html()).toContain('i')
    expect(wrapper.html()).toContain('fa')
    expect(wrapper.html()).toContain('fa-eye')
  })
})
