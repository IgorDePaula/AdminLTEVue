<template>
  <div id="app">
    <h1 class="hello">Welcome to Your Vue.js App</h1>

  <lte-modal title="teste de modal title" target="modal1" close-text="Fechar" open-text="Abrir modal" type="info">
      teste de modal
  </lte-modal>
      <lte-modal title="teste de modal title" target="modal2" save-text="Salvar" close-text="Fechar" open-text="Abrir modal" type="warning">
      teste de modal
  </lte-modal>
  </div>

</template>

<script>
import LteModal from '../src/components/Modal/Modal'
export default {
  name: 'app',
  components: {
    LteModal
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
