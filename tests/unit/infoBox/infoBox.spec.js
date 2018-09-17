import { mount } from '@vue/test-utils'
import LteInfoBox from '../../../src/components/InfoBox/InfoBox'

describe('InfoBox', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteInfoBox, { propsData: { title: 'bookmarks', number: '308', icon: 'fa-flag-o', 'bg-icon': 'green' } })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('info-box')
    expect(wrapper.html()).toContain('bookmarks')
    expect(wrapper.html()).toContain('308')
    expect(wrapper.html()).toContain('fa-flag-o')
    expect(wrapper.html()).toContain('bg-green')
  })
  wrapper.setProps({ bg: 'green', progressBar: 90, progressDescription: 'test' })
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('info-box')
    expect(wrapper.html()).toContain('bookmarks')
    expect(wrapper.html()).toContain('308')
    expect(wrapper.html()).toContain('fa-flag-o')
    expect(wrapper.html()).toContain('bg-green')
    expect(wrapper.html()).toContain('progress-bar')
    expect(wrapper.html()).toContain('90%')
    expect(wrapper.html()).toContain('progress-description')
    expect(wrapper.html()).toContain('test')
  })
})
