<script>
import LteButton from './Button'
import LteButtonGroup from './ButtonGroup'
export default {
  name: 'LteActionButton',
  components:{
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
  render(h){
    const content = []
    const type = this.type
    content.push(h(LteButton, {type: type}, [this.title]))
    content.push(h(LteButton, {type: type, dropdown: true}, [h('span',{class:'caret'}),h('span',{class:'sr-only'}, ['Toggle Dropdown'])]))
    return h(LteButtonGroup, {}, content)
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
</style>
