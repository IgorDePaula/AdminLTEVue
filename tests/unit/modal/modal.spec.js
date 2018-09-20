import { mount } from '@vue/test-utils'
import LteModal from '../../../src/components/Modal/Modal'

describe('Modal', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteModal, { propsData: { title: 'header de modal', close: 'Fechar', target: 'id123' } })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('button')
    expect(wrapper.html()).toContain('modal')
    expect(wrapper.html()).toContain('header de modal')
    expect(wrapper.html()).toContain('Fechar')
  })

  wrapper.setProps({ type: 'info' })

  it('renders the correct type', () => {
    expect(wrapper.html()).toContain('modal-info')
  })
  wrapper.setProps({ saveText: 'Salvar' })

  it('renders save text', () => {
    expect(wrapper.html()).toContain('Salvar')
  })

  wrapper.find('button').trigger('click')
  it('renders modal', () => {
    expect(wrapper.html()).toContain('display')
    expect(wrapper.html()).toContain('block')
    expect(wrapper.html()).toContain('padding')
    expect(wrapper.html()).toContain('12px')
  })
/*
  wrapper.find('.close').trigger('click')
  it('renders modal', () => {
    expect(wrapper.html()).toContain('display')
    expect(wrapper.html()).toContain('block')
    expect(wrapper.html()).toContain('padding')
    expect(wrapper.html()).toContain('12px')
  }) */
})

describe('Modal', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteModal, { propsData: { title: 'header de modal', close: 'Fechar', target: 'id123' } })

  wrapper.find('button').trigger('click')

  wrapper.find('.close').trigger('click')
  it('renders close modal by click close button', () => {
    expect(wrapper.html()).not.toContain('display')
    expect(wrapper.html()).not.toContain('block')
  })
})

describe('Modal', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteModal, { propsData: { type: 'info', title: 'header de modal', close: 'Fechar', target: 'id123' } })

  wrapper.find('button').trigger('click')

  wrapper.trigger('keydown.esc')
  it('renders close modal by esc click', () => {
    expect(wrapper.html()).not.toContain('display')
    expect(wrapper.html()).not.toContain('block')
  })
})
