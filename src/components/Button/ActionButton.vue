<script>
import LteButton from './Button'
import LteButtonGroup from './ButtonGroup'
export default {
  name: 'LteActionButton',
  components: {
    LteButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    itens: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      class: ''
    }
  },
  methods: {
    open () {
      this.class = 'open'
    },
    close () {
      this.class = ''
    }
  },
  render: function (h) {
    const props = {}
    const type = this.type
    const content = []
    content.push(h(LteButton, { props: { type: type } }, [this.title]))
    content.push(h(LteButton, {
      props: { type: type, dropdown: true },
      on: { click: this.open }
    }, [h('span', { class: 'caret' }), h('span', { class: 'sr-only' }, ['Toggle Dropdown'])]))
    const list = this.itens.map(item => {
      return h('li', {}, [h('a', { on: { click: item.handler } }, [item.title])])
    })
    if (this.class == 'open') {
      content.push(h('div', { class: 'dropdown-backdrop', on: { click: this.close } }, []))
    }
    props.class = this.class
    content.push(h('ul', { class: 'dropdown-menu', attrs: { role: 'menu' } }, list))
    return h(LteButtonGroup, props, content)
  }
}
</script>

<style scoped lang="less">

    @import "../../assets/css/bootstrap/bootstrap.less";
    @import "../../assets/css/skins/_all-skins.less";
    @import "../../assets/css/font-awesome/less/font-awesome.less";
    @import "../../assets/css/bootstrap/mixins.less";
    @import "../../assets/css/bootstrap/variables.less";
    @import "../../assets/css/variables.less";
    @import "../../assets/css/core.less";
    @import "../../assets/css/mixins.less";
    @import '../../assets/css/buttons';
    @import '../../assets/css/dropdown';
</style>
