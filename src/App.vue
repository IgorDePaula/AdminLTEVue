<template>
  <div id="app">
    <h1 class="hello">Welcome to Your Vue.js App</h1>
    <lte-button :social="true" social-network="bitbucket">Login with bitbucket</lte-button>
  </div>

</template>

<script>
import LteButton from './components/Button/Button'
import LteIcon from './components/Icon'
import LteButtonGroup from './components/Button/ButtonGroup'

export default {
  name: 'app',
  components: {
    LteButton
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
