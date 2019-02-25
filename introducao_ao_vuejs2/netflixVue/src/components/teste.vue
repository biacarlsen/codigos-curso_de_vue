<template>
  <div>
     <h1>{{titulo}}</h1>
  </div>
</template>

<script>
export default {
  name:'teste',
  props:['titulo'],
}
</script>

<style lang="scss">
  h1 {
    color: red;
  }
</style>