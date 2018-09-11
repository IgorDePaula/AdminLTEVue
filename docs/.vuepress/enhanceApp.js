import LteButton from '../../src/components/Button/Button'
import '../../src/assets/css/bootstrap/bootstrap.less'
import '../../src/assets/css/skins/_all-skins.less'
import '../../src/assets/css/font-awesome/less/font-awesome.less'
import '../../src/assets/css/AdminLTE.less'
import '../../src/assets/css/buttons.less'
export default ({
                  Vue, // the version of Vue being used in the VuePress app
                  options, // the options for the root Vue instance
                  router, // the router instance for the app
                  siteData // site metadata
                }) => {
  Vue.component(LteButton.name, LteButton)
}
