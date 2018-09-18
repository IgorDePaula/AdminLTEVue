import typeValidator from '../../mixins/button/typeValidator'
import sizeValidator from '../../mixins/button/sizeValidator'
import bgValidator from '../../mixins/button/bgValidator'
import socialnetworkValidator from '../../mixins/button/socialnetworkValidator'
import LteFaIcon from '../Icon/FaIcon'
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
    social: {
      type: Boolean
    },
    socialNetwork: {
      type: String,
      validator: socialnetworkValidator
    },
    app: {
      type: Boolean
    },
    dropdown: {
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
    if (this.dropdown) {
      props.class.push('dropdown-toggle')
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
      props.class.push('disabled')
    }

    if (this.social) {
      if (!this.socialNetwork) {
        this.socialNetwork = 'bitbucket'
      }
      props.class.push('btn-block')
      props.class.push('btn-social')
      props.class.push(`btn-${this.socialNetwork}`)
      const content = [h(LteFaIcon, { props: { type: `fa-${this.socialNetwork}` } }), []]
      content.push(this.$slots.default)
      return h('a', props, content)
    }
    if (!this.type && !this.bg) {
      props.class.push(`btn-default`)
    }
    if (this.app) {
      props.class.push('btn-app')
      return h('a', props, content)
    }
    return h('button', props, content)
  }
}
