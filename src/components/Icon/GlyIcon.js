export default {
  name: 'LteGlyIcon',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  render (h) {
    const props = {}
    props.staticClass = 'glyphicon'
    props.class = this.type
    return h('span', props, [])
  }
}
