<template>
  <div id="app">
    <h1 class="hello">Welcome to Your Vue.js App</h1>

    <lte-action-button :type="'warning'" title="care" :itens="[]"></lte-action-button>
  </div>

</template>

<script>
import LteActionButton from './components/Button/ActionButton'

export default {
  name: 'app',
  components: {
    LteActionButton
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
