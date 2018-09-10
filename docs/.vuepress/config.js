module.exports = {
  base: '/AdminLTEVue/',
  title: 'AdminLte Vue',
  footer: 'adminweb',
  description: "Vue on AdminLTE",
  themeConfig:{
    sidebarDepth: 2,
    nav: [
      {text: 'Home', link: '/'},
      { text: 'COUNTER', link: '/counter/' },
      { text: 'GUIDE', link: '/foo/' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],
    sidebar:[
      '/',
      '/Button/',
      {
        title: 'Foo',
        collapsable: false,
        children: [
          '/foo/',
          '/foo/One',
          '/foo/Two'
        ]
      },
    ],
  }
}
