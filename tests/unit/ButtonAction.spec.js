import { mount } from '@vue/test-utils'
import LteActionButton from '../../src/components/Button/ActionButton'

describe('ActionButton', () => {
  const wrapper = mount(LteActionButton)
  wrapper.setProps({ title: 'fa-eye'})
  wrapper.setProps({ itens: []})
  it('Validates correct markup', () => {
    expect(wrapper.html()).toContain('button')
  })
})
