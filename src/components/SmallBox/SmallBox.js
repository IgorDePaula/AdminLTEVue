import LteFaIcon from '../Icon/FaIcon'
import bgValidator from '../../mixins/smallBox/bgValidator'
export default {
  name: 'LteSmallBox',
  props: {
    icon: {
      type: String,
      required: true
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
      validator: bgValidator,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    textBottom: {
      type: String,
      required: true
    }
  },
  render (h) {
    const content = []
    const props = {}
    props.staticClass = 'small-box'
    const icon = h(LteFaIcon, { props: { type: this.icon } })
    const divIcon = h('div', { class: 'icon' }, [icon])
    const title = h('h3', { }, [this.number])
    const number = h('p', { }, [this.title])
    content.push(h('div', { class: 'inner' }, [title, number]))
    const iconFooter = h(LteFaIcon, { props: { type: 'fa-arrow-circle-right' } })
    const linkFooter = h('a', { class: 'small-box-footer', attrs: { href: this.url } }, [`${this.textBottom} `, iconFooter])
    content.push(divIcon)
    content.push(linkFooter)
    props.class = `bg-${this.bg}`
    return h('div', props, content)
  }
}
