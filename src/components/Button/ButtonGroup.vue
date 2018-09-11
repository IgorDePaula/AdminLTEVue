<script>
  export default {
    name: 'LteButtonGroup',
    props: {
      vertical: {
        type: Boolean
      }
    },
    render (h) {
      let props = {}
      props.class = 'btn-group'
      let content = [this.$slots.default]
      if (this.vertical) {
        props.class = 'btn-group-vertical'
      }
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
    @import '../../assets/css/buttons';
</style>

