import sizeValidator from '../../mixins/progressBar/sizeValidator'
import bgValidator from '../../mixins/progressBar/bgValidator'
export default {
  name: 'LteProgressBar',
  props: {
    color: {
      type: String,
      validator: bgValidator
    },
    size: {
      type: String,
      validator: sizeValidator
    },
    active: {
      type: Boolean
    },
    striped: {
      type: Boolean
    },
    vertical: {
      type: Boolean
    },
    percent: {
      type: Number,
      default: () => 0
    }
  },
  render: function (h) {
    const props = {}
    props.class = []
    const content = []
    let sizeClass = []
    if (this.color) {
      props.class.push(`progress-bar-${this.color}`)
    }
    if (this.striped) {
      props.class.push('progress-bar-striped')
    }
    if (this.active) {
      props.class.push('active')
    }
    if (this.vertical) {
      sizeClass.push('vertical')
    }
    if (this.size) {
      sizeClass.push(`progress-${this.size}`)
    }
    props.staticClass = 'progress-bar'
    props.style = {}
    props.style.width = `${this.percent}%`

    const span = h('span', { class: 'sr-only' }, [`${this.percent}%`])
    content.push(h('div', props, [span]))

    return h('div', { staticClass: 'progress', class: sizeClass }, content)
  }
}
