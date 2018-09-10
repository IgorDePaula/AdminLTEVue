import typeValidator from '../../mixins/typeValidator'
import sizeValidator from '../../mixins/sizeValidator'
import bgValidator from '../../mixins/bgValidator'
export default {
  name: 'LteButton',
  props: {
    size: {
      type: String,
      validator: sizeValidator
    },
    type: {
      type: String,
      validator: typeValidator
    },
    block: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    flat: {
      type: Boolean
    },
    bg: {
      type: String,
      validator: bgValidator
    },
    app: {
      type: Boolean
    }
  },
  render (h) {
    const props = {}
    props.staticClass = 'btn'
    props.class = []
    props.on = this.$listeners
    const content = [this.$slots.default]
    if (this.type) {
      props.class.push(`btn-${this.type}`)
    }
    if (this.block) {
      props.class.push('btn-block')
    }
    if (this.bg) {
      props.class.push(`bg-${this.bg}`)
    }
    if (this.size) {
      props.class.push(`btn-${this.size}`)
    }
    if (this.flat) {
      props.class.push('btn-flat')
    }
    if (this.disabled) {
      props.class.push('btn-disabled')
    }
    if (this.app) {
      props.class.push('btn-app')
      return h('a', props, content)
    }
    return h('button', props, content)
  }
}
