import LteCallout from '../../../src/components/Callout/Callout'
import {mount} from '@vue/test-utils'

describe('Callout', () => {
    const wrapper = mount(LteCallout, {propsData: {type: 'info', title: 'title', body: 'body'}})
    it('Validates a type info', () => {
        expect(wrapper.html()).toContain('callout-info')
    })
})

describe('Callout', () => {
    const wrapper = mount(LteCallout, {propsData: {type: 'danger', title: 'title', body: 'body'}})
    it('Validates a type info', () => {
        expect(wrapper.html()).toContain('callout-danger')
    })
})

describe('Callout', () => {
    const wrapper = mount(LteCallout, {propsData: {type: 'warning', title: 'title', body: 'body'}})
    it('Validates a type info', () => {
        expect(wrapper.html()).toContain('callout-warning')
    })
})

describe('Callout', () => {
    const wrapper = mount(LteCallout, {propsData: {type: 'success', title: 'title', body: 'body'}})
    it('Validates a type info', () => {
        expect(wrapper.html()).toContain('callout-success')
    })
})
