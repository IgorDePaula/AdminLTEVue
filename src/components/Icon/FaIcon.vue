<script>
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
</style>
