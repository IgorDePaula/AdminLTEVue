import LteButton from "../../src/components/Button/Button";
import LteButtonGroup from "../../src/components/Button/ButtonGroup";
import LteFaIcon from "../../src/components/Icon/FaIcon";
import LteGlyIcon from "../../src/components/Icon/GlyIcon";
import LteActionButton from "../../src/components/Button/ActionButton";
import LteProgressBar from "../../src/components/Progress/Progress";

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
}
