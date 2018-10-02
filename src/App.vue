<template>
  <div id="app">
    <h1 class="hello">Welcome to Your Vue.js App</h1>
<lte-box title="extends"  :collapsable="true" :closeable="true"   >
    teste da caixa
</lte-box>
  </div>

</template>

<script>
import LteBox from './components/Box/Box'
export default {
  name: 'app',
  components: {
    LteBox
  },
  data () {
    return {
      list: [
      ]
    }
  }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
