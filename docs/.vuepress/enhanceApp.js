import LteButton from '../../src/components/Button/Button'
import LteButtonGroup from '../../src/components/Button/ButtonGroup'
import LteFaIcon from '../../src/components/Icon/FaIcon'
import LteGlyIcon from '../../src/components/Icon/GlyIcon'
import LteActionButton from '../../src/components/Button/ActionButton'
import LteProgressBar from '../../src/components/Progress/Progress'
import LteAlert from '../../src/components/Alert/Alert'
import LteCallout from '../../src/components/Callout/Callout'
import LteInfoBox from '../../src/components/InfoBox/InfoBox'
import LteSmallBox from '../../src/components/SmallBox/SmallBox'
import LteModal from '../../src/components/Modal/Modal'
import LteBox from '../../src/components/Box/Box'
import '../../src/assets/css/bootstrap/bootstrap.less'
import '../../src/assets/css/font-awesome/less/font-awesome.less'

import 'admin-lte/dist/css/AdminLTE.min.css'
export default ({
                  Vue, // the version of Vue being used in the VuePress app
                  options, // the options for the root Vue instance
                  router, // the router instance for the app
                  siteData // site metadata
                }) => {
  Vue.component(LteButton.name, LteButton)
  Vue.component(LteButtonGroup.name, LteButtonGroup)
  Vue.component(LteFaIcon.name, LteFaIcon)
  Vue.component(LteGlyIcon.name, LteGlyIcon)
  Vue.component(LteActionButton.name, LteActionButton)
  Vue.component(LteProgressBar.name, LteProgressBar)
  Vue.component(LteAlert.name, LteAlert)
  Vue.component(LteCallout.name, LteCallout)
  Vue.component(LteInfoBox.name, LteInfoBox)
  Vue.component(LteSmallBox.name, LteSmallBox)
  Vue.component(LteModal.name, LteModal)
  Vue.component(LteBox.name, LteBox)
}
