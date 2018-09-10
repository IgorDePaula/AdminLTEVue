import { mount } from '@vue/test-utils'
import LteButton from '../../src/components/Button/Button'


describe('Button', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(LteButton)

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('button')
    })

   wrapper.setProps({type:'info'})

    it('renders the correct type', () => {
        expect(wrapper.html()).toContain('info')
    })
  wrapper.setProps({block:true})

    it('renders the block', () => {
        expect(wrapper.html()).toContain('block')
    })
    wrapper.setProps({bg:'olive'})

    it('renders the bg olive', () => {
        expect(wrapper.html()).toContain('olive')
    })

    wrapper.setProps({size:'sm'})

    it('renders the size sm', () => {
        expect(wrapper.html()).toContain('sm')
    })
 wrapper.setProps({flat:true})

    it('renders the flat', () => {
        expect(wrapper.html()).toContain('flat')
    })

    wrapper.setProps({disabled:true})

    it('renders the disabled', () => {
        expect(wrapper.html()).toContain('disabled')
    })

})

describe('Button app', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(LteButton)
    wrapper.setProps({app:true})
    it('renders the correct markup for app button', () => {
        expect(wrapper.html()).toContain('a')
        expect(wrapper.html()).toContain('app')
    })

})
