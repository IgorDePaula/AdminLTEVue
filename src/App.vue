<template>
  <div id="app">
    <h1 class="hello">Welcome to Your Vue.js App</h1>
    <lte-info-box title="bookmarks" number="308" icon="fa-flag-o" bg-icon="green" bg="green" progress-bar="50" progress-description="test" />
  </div>

</template>

<script>
import LteInfoBox from './components/InfoBox/InfoBox'

export default {
  name: 'app',
  components: {
    LteInfoBox
  },
  data () {
    return {
      list: [
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
