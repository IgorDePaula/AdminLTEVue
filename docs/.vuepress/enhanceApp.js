import LteButton from "../../src/components/Button/Button";
import LteButtonGroup from "../../src/components/Button/ButtonGroup";
import LteIcon from "../../src/components/Icon";
import LteActionButton from "../../src/components/Button/ActionButton";

export default ({
                  Vue, // the version of Vue being used in the VuePress app
                  options, // the options for the root Vue instance
                  router, // the router instance for the app
                  siteData // site metadata
                }) => {
  Vue.component(LteButton.name, LteButton)
  Vue.component(LteButtonGroup.name, LteButtonGroup)
  Vue.component(LteIcon.name, LteIcon)
  Vue.component(LteActionButton.name, LteActionButton)
}
