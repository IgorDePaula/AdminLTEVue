<template>
  <div id="app">
    <h1 class="hello">Welcome to Your Vue.js App</h1>
    <lte-small-box title="bookmarks" number="90%" url="http://google.com" bg="green" icon="fa-shopping-cart" text-botton="mais informações" />
    <br>
    <lte-info-box icon="fa-eye" title="open" bg-icon="green" number="308"/>
    <br>
    <lte-alert title="meus" body="de q?" type="info" :dimissible="true" />
  </div>

</template>

<script>
import LteSmallBox from './components/SmallBox/SmallBox'
import LteInfoBox from './components/InfoBox/InfoBox'
import LteAlert from './components/Alert/Alert'

export default {
  name: 'app',
  components: {
    LteSmallBox,
    LteInfoBox,
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
