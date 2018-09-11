import socialnetworkValidator from '../../src/mixins/socialnetworkValidator'

describe('SocialNetworkValidator', () => {

  it('Validates a socialnetwork bitbucket', () => {
    expect(socialnetworkValidator('bitbucket')).toBe(true)
  })
  it('Validates a socialnetwork dropbox', () => {
    expect(socialnetworkValidator('dropbox')).toBe(true)
  })
  it('Validates a socialnetwork facebook', () => {
    expect(socialnetworkValidator('facebook')).toBe(true)
  })
  it('Validates a socialnetwork flickr', () => {
    expect(socialnetworkValidator('flickr')).toBe(true)
  })
  it('Validates a socialnetwork foursquare', () => {
    expect(socialnetworkValidator('foursquare')).toBe(true)
  })
  it('Validates a socialnetwork github', () => {
    expect(socialnetworkValidator('github')).toBe(true)
  })
  it('Validates a socialnetwork google', () => {
    expect(socialnetworkValidator('google')).toBe(true)
  })
  it('Validates a socialnetwork instagram', () => {
    expect(socialnetworkValidator('instagram')).toBe(true)
  })
  it('Validates a socialnetwork linkedin', () => {
    expect(socialnetworkValidator('linkedin')).toBe(true)
  })
  it('Validates a socialnetwork tumblr', () => {
    expect(socialnetworkValidator('tumblr')).toBe(true)
  })
  it('Validates a socialnetwork twitter', () => {
    expect(socialnetworkValidator('twitter')).toBe(true)
  })
  it('Validates a socialnetwork vk', () => {
    expect(socialnetworkValidator('vk')).toBe(true)
  })
  it('Not validates a socialnetwork badoo', () => {
    expect(socialnetworkValidator('badoo')).toBe(false)
  })

})
