import { mount } from '@vue/test-utils'
import LteSmallBox from '../../../src/components/SmallBox/SmallBox'

describe('SmallBox', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteSmallBox, { propsData: { title: 'bookmarks', number: 308, icon: 'fa-flag-o', bg: 'green', url: 'http://google.com' } })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('small-box')
    expect(wrapper.html()).toContain('bookmarks')
    expect(wrapper.html()).toContain('308')
    expect(wrapper.html()).toContain('fa-flag-o')
    expect(wrapper.html()).toContain('bg-green')
    expect(wrapper.html()).toContain('http://google.com')
  })
})
