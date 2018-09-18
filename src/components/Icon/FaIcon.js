export default {
  name: 'LteFaIcon',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  render (h) {
    const props = {}
    props.staticClass = 'fa'
    props.class = this.type
    return h('i', props, [])
  }
}
