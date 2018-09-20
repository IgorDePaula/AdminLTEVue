import typeValidator from '../../mixins/modal/typeValidator'
import LteButton from '../Button/Button'
export default {
  name: 'LteModal',
  props: {
    target: {
      type: String,
      required: true
    },
    closeText: {
      type: String,
      required: true
    },
    openText: {
      type: String,
      required: true
    },
    saveText: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      validator: typeValidator
    }
  },
  data () {
    return {
      in: false
    }
  },
  methods: {
    close (e) {
      if (e.keyCode === 27) {
        this.in = false
      }
    }
  },
  created () {
    window.addEventListener('keydown', this.close)
  },
  beforeDestroy () {
    window.removeEventListener('keydown')
  },
  render (h) {
    const globalProps = {}
    globalProps.staticClass = 'modal'
    globalProps.class = []
    globalProps.attrs = {}
    globalProps.attrs.id = this.target

    const button = h(LteButton, { type: this.type, props: { type: this.type }, attrs: { 'data-target': `#${this.target}` }, on: { click: () => { this.in = !this.in } } }, [this.openText])

    if (this.in) {
      globalProps.class.push('in')
      globalProps.style = []
      globalProps.style.push({ display: 'block' })
      globalProps.style.push({ 'padding-right': '12px' })
    }
    if (this.type !== 'default') {
      globalProps.class.push(`modal-${this.type}`)
    }
    globalProps.class.push('fade')

    const finalContent = [this.$slots.default]

    const close = h('span', { attrs: { ariaHidden: true } }, ['x'])
    const buttonClose = h('button', { on: { click: () => { this.in = !this.in } }, attrs: { class: 'close', 'data-dismiss': 'modal', 'aria-label': this.closeText } }, [close])

    const title = h('h4', { class: 'modal-title' }, [this.title])

    const header = h('div', { class: 'modal-header' }, [buttonClose, title])
    const content = h('div', { class: 'modal-body' }, [finalContent])

    const footContent = []

    const closeFooter = h('button', { on: { click: () => { this.in = !this.in } }, class: ['btn', `btn-${this.type}`, 'pull-left'], attrs: { type: 'button', dataDimiss: 'modal' } }, [this.closeText])

    footContent.push(closeFooter)

    if (this.saveText) {
      const buttonSave = h('button', { class: ['btn', this.type === 'default' ? 'btn-primary' : 'btn-outline'], on: { click: () => { this.$emit('modal-saved'); this.in = false } } }, [this.saveText])
      footContent.push(buttonSave)
    }

    const footer = h('div', { class: 'modal-footer' }, footContent)

    const modalContent = h('div', { class: 'modal-content' }, [header, content, footer])

    const modalDialog = h('div', { class: 'modal-dialog' }, [modalContent])

    const modal = h('div', globalProps, [modalDialog])

    return h('div', { on: this.$listeners }, [button, modal])
  }
}
