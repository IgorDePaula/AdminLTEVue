import typeValidator from '../../mixins/alert/typeValidator'
import LteFaIcon from '../Icon/FaIcon'

export default {
  name: 'LteAlert',
  props: {
    type: {
      type: String,
      required: true,
      validator: typeValidator
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    dimissible: {
      type: Boolean
    }
  },
  data () {
    return {
      close: false
    }
  },
  render (h) {
    const content = []
    const icons = {}
    icons.danger = 'fa-ban'
    icons.info = 'fa-info'
    icons.warning = 'fa-warning'
    icons.success = 'fa-check'
    const title = h('h4', {}, [this.title])
    const props = {}
    props.class = []
    props.staticClass = 'alert'
    props.class.push(`alert-${this.type}`)
    if (this.dimissible) {
      props.class.push('alert-dimissible')
      content.push(h('button', { class: 'close', attrs: { type: 'button', 'data-dimiss': 'alert', 'aria-hidden': true }, on: { click: () => { this.close = true } } }, 'x'))
    }
    content.push(h(LteFaIcon, { props: { type: icons[this.type] } }), [])
    content.push(title)
    content.push(this.body)
    if (!this.close) {
      return h('div', props, content)
    }
  }
}
