import { mount } from '@vue/test-utils'
import LteProgressBar from '../../../src/components/Progress/Progress'

describe('ProgressBar', () => {
  const wrapper = mount(LteProgressBar)
  // wrapper.setProps({ type: 'fa-eye' })
  it('Validates correct markup', () => {
    expect(wrapper.html()).toContain('div')
    expect(wrapper.html()).toContain('span')
    expect(wrapper.html()).toContain('progress')
    expect(wrapper.html()).toContain('0%')
  })
  wrapper.setProps({ percent: 10 })
  it('Validates correct percent', () => {
    expect(wrapper.html()).toContain('10%')
    expect(wrapper.html()).toContain('width: 10%')
  })

  wrapper.setProps({ vertical: true })
  it('Validates correct vertical', () => {
    expect(wrapper.html()).toContain('vertical')
  })

  wrapper.setProps({ striped: true })
  it('Validates correct striped', () => {
    expect(wrapper.html()).toContain('striped')
  })
  wrapper.setProps({ active: true })
  it('Validates correct active', () => {
    expect(wrapper.html()).toContain('active')
  })
  wrapper.setProps({ size:'sm' })
  it('Validates correct size', () => {
    expect(wrapper.html()).toContain('sm')
  })
})
describe('ProgressBar', () => {
  const wrapper = mount(LteProgressBar)
  wrapper.setProps({ color: 'primary' })
  it('Validates correct primary', () => {
    expect(wrapper.html()).toContain('primary')
  })
})
describe('ProgressBar', () => {
  const wrapper = mount(LteProgressBar)
  wrapper.setProps({ color: 'success' })
  it('Validates correct success', () => {
    expect(wrapper.html()).toContain('success')
  })
})
describe('ProgressBar', () => {
  const wrapper = mount(LteProgressBar)
  wrapper.setProps({ color: 'danger' })
  it('Validates correct danger', () => {
    expect(wrapper.html()).toContain('danger')
  })
})
describe('ProgressBar', () => {
  const wrapper = mount(LteProgressBar)
  wrapper.setProps({ color: 'warning' })
  it('Validates correct warning', () => {
    expect(wrapper.html()).toContain('warning')
  })
})
