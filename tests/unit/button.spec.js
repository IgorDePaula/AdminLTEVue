import { mount } from '@vue/test-utils'
import LteButton from '../../src/components/Button/Button'

describe('Button', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteButton)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('button')
  })

  wrapper.setProps({ type: 'info' })

  it('renders the correct type', () => {
    expect(wrapper.html()).toContain('info')
  })
  wrapper.setProps({ block: true })

  it('renders the block', () => {
    expect(wrapper.html()).toContain('block')
  })
  wrapper.setProps({ bg: 'olive' })

  it('renders the bg olive', () => {
    expect(wrapper.html()).toContain('olive')
  })

  wrapper.setProps({ size: 'sm' })

  it('renders the size sm', () => {
    expect(wrapper.html()).toContain('sm')
  })
  wrapper.setProps({ flat: true })

  it('renders the flat', () => {
    expect(wrapper.html()).toContain('flat')
  })

  wrapper.setProps({ disabled: true })

  it('renders the disabled', () => {
    expect(wrapper.html()).toContain('disabled')
  })
})

describe('Button app', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteButton)
  wrapper.setProps({ app: true })
  it('renders the correct markup for app button', () => {
    expect(wrapper.html()).toContain('a')
    expect(wrapper.html()).toContain('app')
  })
})

describe('Button social bitbucket', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(LteButton)
  wrapper.setProps({ social: true, socialNetwork: 'bitbucket' })
  it('renders the correct markup for social button bitbucket', () => {
    expect(wrapper.html()).toContain('a')
    expect(wrapper.html()).toContain('social')
    expect(wrapper.html()).toContain('bitbucket')
  })
})

describe('Button social dropbox', () => {
  const wrapper = mount(LteButton)
  wrapper.setProps({ social: true, socialNetwork: 'dropbox' })
  it('renders the correct markup for social button dropbox', () => {
    expect(wrapper.html()).toContain('a')
    expect(wrapper.html()).toContain('social')
    expect(wrapper.html()).toContain('dropbox')
  })
})

describe('Button social facebook', () => {
  const wrapper = mount(LteButton)
  wrapper.setProps({ social: true, socialNetwork: 'facebook' })
  it('renders the correct markup for social button facebook', () => {
    expect(wrapper.html()).toContain('a')
    expect(wrapper.html()).toContain('social')
    expect(wrapper.html()).toContain('facebook')
  })
})

describe('Button social flickr', () => {
  const wrapper = mount(LteButton)
  wrapper.setProps({ social: true, socialNetwork: 'flickr' })
  it('renders the correct markup for social button flickr', () => {
    expect(wrapper.html()).toContain('a')
    expect(wrapper.html()).toContain('social')
    expect(wrapper.html()).toContain('flickr')
  })
})

describe('Button social foursquare', () => {
  const wrapper = mount(LteButton)
  wrapper.setProps({ social: true, socialNetwork: 'foursquare' })
  it('renders the correct markup for social button foursquare', () => {
    expect(wrapper.html()).toContain('a')
    expect(wrapper.html()).toContain('social')
    expect(wrapper.html()).toContain('foursquare')
  })
})

describe('Button social github', () => {
  const wrapper = mount(LteButton)
  wrapper.setProps({ social: true, socialNetwork: 'github' })

  it('renders the correct markup for social button github', () => {
    expect(wrapper.html()).toContain('a')
    expect(wrapper.html()).toContain('social')
    expect(wrapper.html()).toContain('github')
  })
})

describe('Button social google', () => {
  const wrapper = mount(LteButton)
  wrapper.setProps({ social: true, socialNetwork: 'google' })
  it('renders the correct markup for social button google', () => {
    expect(wrapper.html()).toContain('a')
    expect(wrapper.html()).toContain('social')
    expect(wrapper.html()).toContain('google')
  })
})

describe('Button social instagram', () => {
  const wrapper = mount(LteButton)
  wrapper.setProps({ social: true })
  wrapper.setProps({ socialNetwork: 'instagram' })

  it('renders the correct markup for social button instagram', () => {
    expect(wrapper.html()).toContain('a')
    expect(wrapper.html()).toContain('social')
    expect(wrapper.html()).toContain('instagram')
  })
})

describe('Button social linkedin', () => {
  const wrapper = mount(LteButton)
  wrapper.setProps({ social: true, socialNetwork: 'linkedin' })
  it('renders the correct markup for social button linkedin', () => {
    expect(wrapper.html()).toContain('a')
    expect(wrapper.html()).toContain('social')
    expect(wrapper.html()).toContain('linkedin')
  })
})

describe('Button social tumblr', () => {
  const wrapper = mount(LteButton)
  wrapper.setProps({ social: true, socialNetwork: 'tumblr' })
  it('renders the correct markup for social button tumblr', () => {
    expect(wrapper.html()).toContain('a')
    expect(wrapper.html()).toContain('social')
    expect(wrapper.html()).toContain('tumblr')
  })
})

describe('Button social twitter', () => {
  const wrapper = mount(LteButton)
  wrapper.setProps({ social: true, socialNetwork: 'twitter' })
  it('renders the correct markup for social button twitter', () => {
    expect(wrapper.html()).toContain('a')
    expect(wrapper.html()).toContain('social')
    expect(wrapper.html()).toContain('twitter')
  })
})

describe('Button social vk', () => {
  const wrapper = mount(LteButton)
  wrapper.setProps({ social: true, socialNetwork: 'vk' })
  it('renders the correct markup for social button vk', () => {
    expect(wrapper.html()).toContain('a')
    expect(wrapper.html()).toContain('social')
    expect(wrapper.html()).toContain('vk')
  })
})

describe('Button dropdown', () => {
  const wrapper = mount(LteButton)
  wrapper.setProps({ dropdown: true })
  it('renders the correct markup for dropdown button', () => {
    expect(wrapper.html()).toContain('button')
    expect(wrapper.html()).toContain('dropdown')
  })
})
