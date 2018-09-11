module.exports = {
  base: '/AdminLTEVue/',
  title: 'AdminLte Vue',
  footer: 'adminweb',
  description: 'Vue on AdminLTE',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'pt-BR', // this will be set as the lang attribute on <html>
      title: 'AdminLte Vue',
      description: 'AdminLTE em Vue.js',
    },
    '/en/': {
      lang: 'en-US',
      title: 'AdminLte Vue',
      description: 'AdminLTE in Vue.js',
    },
  },
  themeConfig: {
    sidebarDepth: 2,

    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        lang: 'pt-BR', // this will be set as the lang attribute on <html>
        title: 'AdminLte Vue',
        description: 'AdminLTE em Vue.js',
        selectText: 'Idiomas',
        // label for this locale in the language dropdown
        label: 'Português do Brasil',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'GitHub', link: 'https://github.com/IgorDePaula/AdminLTEVue' }
        ],
        sidebar: [
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
      },
      '/en/': {
        lang: 'en-US',
        title: 'AdminLte Vue',
        description: 'AdminLTE in Vue.js',
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'GitHub', link: 'https://github.com/IgorDePaula/AdminLTEVue' }
        ],
        sidebar: [
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
  }
}
