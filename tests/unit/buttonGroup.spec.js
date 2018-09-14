import { mount } from '@vue/test-utils'
import LteButtonGroup from '../../src/components/Button/ButtonGroup'

describe('Button group', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteButtonGroup)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('div')
  })

  wrapper.setProps({ vertical: true})

  it('renders the correct vertical', () => {
    expect(wrapper.html()).toContain('vertical')
  })
})
