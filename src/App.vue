<template>
  <div id="app">
    <h1 class="hello">Welcome to Your Vue.js App</h1>
      <lte-progress-bar :percent="12" color="success" :striped="true" :active="true" size="sm"/>
  </div>

</template>

<script>
import LteProgressBar from './components/Progress/Progress'

export default {
  name: 'app',
  components: {
    LteProgressBar
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
