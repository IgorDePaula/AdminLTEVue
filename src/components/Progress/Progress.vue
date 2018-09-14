<script>
import progressBarSizeValidator from '../../mixins/progressBarSizeValidator'
export default {
  name: 'LteActionButton',
  components: {
    LteButton
  },
  props: {
    type: {
      type: String,
      validator: progressBarSizeValidator
    },
    active: {
      type: Boolean
    },
    vertical: {
      type: Boolean
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
    props.class = []
    if(this.type){
      props.class.push(`progress-${this.type}`)
    }
    if(this.active){
      props.class.push('active')
    }
    if(this.vertical){
      props.class.push('vertical')
    }
    props.staticClass = 'progress'
    const content = [this.$slots.default]
    return h('div', props, content)
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
    @import '../../assets/css/progress-bars';
</style>
