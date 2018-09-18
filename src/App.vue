<template>
  <div id="app">
    <h1 class="hello">Welcome to Your Vue.js App</h1>
    <lte-small-box title="bookmarks" number="90%" url="http://google.com" bg="green" icon="fa-shopping-cart" text-botton="mais informações" />
  </div>

</template>

<script>
import LteSmallBox from './components/SmallBox/SmallBox'

export default {
  name: 'app',
  components: {
    LteSmallBox
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
