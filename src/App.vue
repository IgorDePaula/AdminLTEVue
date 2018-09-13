<template>
  <div id="app">
    <h1 class="hello">Welcome to Your Vue.js App</h1>
<lte-fa-icon type="fa-contao"></lte-fa-icon>
    <br>
    <lte-action-button type="warning" title="care" :itens="list"></lte-action-button>
    <br>
    <lte-button :social="true">clique aqui</lte-button>
    <br>
    <lte-gly-icon type="glyphicon-eur"></lte-gly-icon>
  </div>

</template>

<script>
import LteActionButton from './components/Button/ActionButton'
import LteButton from './components/Button/Button'
import LteFaIcon from './components/Icon/FaIcon'
import LteGlyIcon from './components/Icon/GlyIcon'

export default {
  name: 'app',
  components: {
    LteActionButton,
    LteButton,
    LteFaIcon,
    LteGlyIcon
  },
  data () {
    return {
      list: [
        {
          title: 'test',
          handler: () => {
            console.log('log from handler')
          }
        }, {
          title: 'test 2',
          handler: () => {
            console.log('log from handler 2')
          }
        }
      ]
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
