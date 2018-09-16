<template>
  <div id="app">
    <h1 class="hello">Welcome to Your Vue.js App</h1>
    <lte-alert type="warning" title="danger" :dimissible="true" body="body is called" />
  </div>

</template>

<script>
  import LteAlert from './components/Alert/Alert'
export default {
  name: 'app',
  components: {
      LteAlert
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
