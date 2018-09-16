import LteAlert from '../../../src/components/Alert/Alert'
import {mount} from '@vue/test-utils'

describe('Alert', () => {
    const wrapper = mount(LteAlert, {propsData: {type: 'info', title: 'title', body: 'body'}})
    it('Validates a type info', () => {
        expect(wrapper.html()).toContain('alert-info')
        expect(wrapper.html()).toContain('fa-info')
    })
})

describe('Alert', () => {
    const wrapper = mount(LteAlert, {propsData: {type: 'danger', title: 'title', body: 'body'}})
    it('Validates a type info', () => {
        expect(wrapper.html()).toContain('alert-danger')
        expect(wrapper.html()).toContain('fa-ban')
    })
})

describe('Alert', () => {
    const wrapper = mount(LteAlert, {propsData: {type: 'warning', title: 'title', body: 'body'}})
    it('Validates a type info', () => {
        expect(wrapper.html()).toContain('alert-warning')
        expect(wrapper.html()).toContain('fa-warning')
    })
})

describe('Alert', () => {
    const wrapper = mount(LteAlert, {propsData: {type: 'success', title: 'title', body: 'body'}})
    it('Validates a type info', () => {
        expect(wrapper.html()).toContain('alert-success')
        expect(wrapper.html()).toContain('fa-check')
    })
})

describe('Alert', () => {
    const wrapper = mount(LteAlert, {propsData: {type: 'success', title: 'title', body: 'body', dimissible: true}})


    it('Validates correct markup to click', () => {
        expect(wrapper.html()).toContain('class="close"')
    })
    wrapper.find('.close').trigger('click')
    it('Validates correct markup to click', () => {
        expect(wrapper.isVisible()).toBe(false)
    })
})

describe('Alert', () => {
    const wrapper = mount(LteAlert, {propsData: {type: 'success', title: 'title', body: 'body', dimissible: true}})

    wrapper.find('.close').trigger('click')

    it('Validates correct markup to click', () => {
        expect(wrapper.html()).not.toContain('body')
    })
})
