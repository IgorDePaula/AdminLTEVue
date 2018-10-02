import typeValidator from '../../mixins/box/typeValidator'
import LteFaIcon from '../Icon/FaIcon'
export default {
  name: 'LteBox',
  props: {
    type: {
      type: String,
      validator: typeValidator
    },
    title: {
      type: String,
      required: true
    },
    collapsable: {
      type: Boolean
    },
    solid: {
      type: Boolean
    },
    closeable: {
      type: Boolean
    },
    loading: {
      type: Boolean
    }
  },
  data () {
    return {
      opened: true,
      closed: false
    }
  },
  render (h) {
    const body = [this.$slots.default]
    const genProps = {}
    const headerContent = []
    const bodyProps = {}
    const genContent = []

    genProps.staticClass = 'box'
    genProps.class = []
    bodyProps.class = 'box-body'
    this.type ? genProps.class.push(`box-${this.type}`) : genProps.class.push('box-default')

    if (this.solid) {
      genProps.class.push('box-solid')
    }

    if (this.collapsable) {
      if (this.opened) {
        const iconCollapse = h(LteFaIcon, { props: { type: 'fa-minus' } })
        const buttonCollapse = h('button', { class: ['btn', 'btn-box-tool'], on: { click: () => { this.opened = !this.opened } }, attrs: { 'data-widget': 'collapse', type: 'button' } }, [iconCollapse])

        headerContent.push(buttonCollapse)
      } else {
        genProps.class.push('collapsed-box')
        bodyProps.style = { display: 'none' }

        const iconExpand = h(LteFaIcon, { props: { type: 'fa-plus' } })
        const buttonExpand = h('button', { class: ['btn', 'btn-box-tool'], on: { click: () => { this.opened = !this.opened } }, attrs: { 'data-widget': 'collapse', type: 'button' } }, [iconExpand])

        headerContent.push(buttonExpand)
      }
    }

    if (this.closeable) {
      const iconClose = h(LteFaIcon, { props: { type: 'fa-times' } })
      const buttonClose = h('button', { class: ['btn', 'btn-box-tool', 'remove'], on: { click: () => { this.closed = true } }, attrs: { 'data-widget': 'remove', type: 'button' } }, [iconClose])
      headerContent.push(buttonClose)
    }

    if (this.loading) {
      const iconLoading = h('i', { class: ['fa', 'fa-refresh', 'fa-spin'] })
      const divLoading = h('div', { class: 'overlay' }, [iconLoading])
      genContent.push(divLoading)
    }

    const title = h('h3', { class: 'box-title' }, [this.title])

    const headerbuttons = h('div', { class: ['box-tools', 'pull-right'] }, [headerContent])

    const header = h('div', { class: ['box-header', 'with-border'] }, [title, headerbuttons])

    const divBody = h('div', bodyProps, body)

    genContent.push(divBody)

    if (!this.closed) {
      return h('div', genProps, [header, genContent])
    }
  }
}
