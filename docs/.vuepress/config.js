module.exports = {
  base: '/AdminLTEVue/',
  title: 'AdminLte Vue',
  footer: 'adminweb',
  description: 'Vue on AdminLTE',
  locales: {
    '/': {
      lang: 'pt-BR',
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
      '/': {
        lang: 'pt-BR',
        title: 'AdminLte Vue',
        description: 'AdminLTE em Vue.js',
        selectText: 'Idiomas',
        label: 'Português do Brasil',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'GitHub', link: 'https://github.com/IgorDePaula/AdminLTEVue' }
        ],
        sidebar: [
          '/',
          {
            title: 'LteButton',
            collapsable: true,
            collapsed: true,
            children: [
              '/LteButton/',
              '/LteButton/LteButtonGroup',
              '/LteButton/LteActionButton'
            ]
          },
          {
            title: 'LteIcon',
            collapsable: true,
            children: [
              '/LteIcon/',
              '/LteIcon/LteGlyIcon'
            ]
          },
        ],
      },
      '/en': {
        lang: 'en-US',
        title: 'AdminLte Vue',
        description: 'AdminLTE in Vue.js',
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'GitHub', link: 'https://github.com/IgorDePaula/AdminLTEVue' }
        ],
        sidebar: [
          '/',
          {
            title: 'LteButton',
            collapsable: true,
            children: [
              '/en/LteButton/',
              '/en/LteButton/LteButtonGroup',
              '/en/LteButton/LteActionButton'
            ]
          },
          {
            title: 'LteIcon',
            collapsable: true,
            children: [
              '/en/LteIcon/',
              '/en/LteIcon/GlyIcon'
            ]
          },
        ],
      }
    }
  }
}
