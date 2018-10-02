import { mount } from '@vue/test-utils'
import LteBox from '../../../src/components/Box/Box'

describe('Box', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteBox, { propsData: { title: 'Titulo' } })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('box')
    expect(wrapper.html()).toContain('box-title')
    expect(wrapper.html()).toContain('box-default')
    expect(wrapper.html()).toContain('Titulo')
  })
})

describe('Box', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteBox, { propsData: { title: 'Titulo', type: 'info', solid: true } })

  it('renders the correct markup solid and type', () => {
    expect(wrapper.html()).toContain('box')
    expect(wrapper.html()).toContain('box-title')
    expect(wrapper.html()).toContain('box-info')
    expect(wrapper.html()).toContain('box-solid')
    expect(wrapper.html()).toContain('Titulo')
  })
})

describe('Box', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteBox, { propsData: { title: 'Titulo', type: 'info', closeable: true } })

  it('renders the correct markup with closeable', () => {
    expect(wrapper.html()).toContain('fa-times')
  })
})

describe('Box', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteBox, { propsData: { title: 'Titulo', type: 'info', closeable: true } })
  wrapper.find('button.remove').trigger('click')
  it('renders the correct close triggered', () => {
    expect(wrapper.html()).toBeUndefined()
  })
})
describe('Box', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteBox, { propsData: { title: 'Titulo', type: 'info', collapsable: true } })
  it('renders the correct collapsable', () => {
    expect(wrapper.html()).toContain('fa-minus')
  })
})

describe('Box', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteBox, { propsData: { title: 'Titulo', type: 'info', collapsable: true } })
  wrapper.find('.btn-box-tool').trigger('click')
  it('renders the correct  collapse triggered', () => {
    expect(wrapper.html()).toContain('collapsed-box')
    expect(wrapper.html()).toContain('fa-plus')
  })
})

describe('Box', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteBox, { propsData: { title: 'Titulo', type: 'info', collapsable: true } })

  wrapper.find('.btn-box-tool').trigger('click')
  wrapper.find('.btn-box-tool').trigger('click')
  it('renders the correct  collapse', () => {
    expect(wrapper.html()).toContain('fa-minus')
  })
})

describe('Box', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteBox, { propsData: { title: 'Titulo', type: 'info', loading: true } })

  it('renders the correct loading', () => {
    expect(wrapper.html()).toContain('overlay')
    expect(wrapper.html()).toContain('fa-refresh')
    expect(wrapper.html()).toContain('fa-spin')
  })
})
