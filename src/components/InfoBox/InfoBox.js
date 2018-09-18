import LteFaIcon from '../Icon/FaIcon'
import bgValidator from '../../mixins/infoBox/bgValidator'
export default {
  name: 'LteInfoBox',
  props: {
    icon: {
      type: String,
      required: true
    },
    bgIcon: {
      type: String,
      required: true,
      validator: bgValidator
    },
    title: {
      type: String,
      required: true
    },
    number: {
      type: [Number, String],
      required: true
    },
    bg: {
      type: String,
      validator: bgValidator
    },
    progressBar: {
      type: Number
    },
    progressDescription: {
      type: String
    }
  },
  render (h) {
    const content = []
    const props = {}
    props.staticClass = 'info-box'
    const icon = h(LteFaIcon, { props: { type: this.icon } })
    const bgIcon = h('span', { staticClass: 'info-box-icon', class: !this.bg ? `bg-${this.bgIcon}` : '' }, [icon])
    const title = h('span', { class: 'info-box-text' }, [this.title])
    const number = h('span', { class: 'info-box-number' }, [this.number])
    content.push(bgIcon)
    content.push(h('div', { class: 'info-box-content' }, [title, number]))
    if (this.bg) {
      props.class = `bg-${this.bg}`
      if (!this.progressBar) {
        this.progressBar = 70
      }
      const progressBar = h('div', { class: 'progress-bar', style: `width: ${this.progressBar}%` })
      const progress = h('div', { class: 'progress' }, [progressBar])
      content.push(progress)
      const progressDescription = h('span', { class: 'progress-description' }, this.progressDescription)
      content.push(progressDescription)
    }
    return h('div', props, content)
  }
}
