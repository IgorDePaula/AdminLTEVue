<script>
  import typeValidator from '../../mixins/callout/typeValidator'

  export default {
    name: 'LteCallout',
    props: {
      type: {
        type: String,
        required: true,
        validator: typeValidator
      },
      title: {
        type: String,
        required: true
      },
      body: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        close: false
      }
    },
    render (h) {
      const content = []
      const title = h('h4', {}, [this.title])
      const body = h('p', {}, [this.body])
      const props = {}
      props.class = []
      props.staticClass = 'callout'
      props.class.push(`callout-${this.type}`)
      content.push(title)
      content.push(body)
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
    @import '../../assets/css/callout';
</style>

