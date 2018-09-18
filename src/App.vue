<template>
  <div id="app">
    <h1 class="hello">Welcome to Your Vue.js App</h1>
    <lte-small-box title="bookmarks" number="90%" url="http://google.com" bg="green" icon="fa-shopping-cart" text-botton="mais informações" />
    <br>
    <lte-info-box icon="fa-eye" title="open" bg-icon="green" number="308"/>
    <br>
    <lte-alert title="meus" body="de q?" type="info" :dimissible="true" />
    <!-- INICIO FORMULARIO BOTAO PAGSEGURO: NAO EDITE OS COMANDOS DAS LINHAS ABAIXO -->
    <form action="https://pagseguro.uol.com.br/pre-approvals/request.html" method="post">
      <input type="hidden" name="code" value="8694B07F9C9C92511479AFB738D93604" />
      <input type="hidden" name="iot" value="button" />
      <input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/assinaturas/205x30-assinar.gif" name="submit" alt="Pague com PagSeguro - É rápido, grátis e seguro!" width="205" height="30" />
    </form>
    <!-- FINAL FORMULARIO BOTAO PAGSEGURO -->
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
