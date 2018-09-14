import { mount } from '@vue/test-utils'
import LteActionButton from '../../src/components/Button/ActionButton'

describe('ActionButton action backdrop', () => {
  const list = [{
    title: 'test',
    handler: () => console.log('test')
  }]
  const wrapper = mount(LteActionButton, { propsData: { title: 'fa-eye', itens: list } })
  it('Validates correct markup', () => {
    expect(wrapper.html()).toContain('button')
  })
  wrapper.find('.dropdown-toggle').trigger('click')
  wrapper.find('.dropdown-backdrop').trigger('click')
  it('Validates correct markup to click', () => {
    expect(wrapper.html()).not.toContain('backdrop')
  })
})
describe('ActionButton no action backdrop', () => {
  const list = [{
    title: 'test',
    handler: () => console.log('test')
  }]
  const wrapper = mount(LteActionButton, { propsData: { title: 'fa-eye', itens: list } })
  it('Validates correct markup', () => {
    expect(wrapper.html()).toContain('button')
  })
  wrapper.find('.dropdown-toggle').trigger('click')
  it('Validates correct markup to click', () => {
    expect(wrapper.html()).toContain('backdrop')
  })
})
describe('ActionButton vertical', () => {
  const list = [{
    title: 'test',
    handler: () => console.log('test')
  }]
  const wrapper = mount(LteActionButton, { propsData: { title: 'fa-eye', vertical: true, itens: list } })
  it('Validates correct markup', () => {
    expect(wrapper.html()).toContain('vertical')
  })
})
