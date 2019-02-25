<template>
  <h2>Meu componente - Projeto: {{nomeProjeto}}</h2>
</template>



<script>
export default {
  name: 'App',
  data () {
    return {
      nomeProjeto: 'Netflix com Vue'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
