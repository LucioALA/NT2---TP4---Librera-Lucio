<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      

      <Formulario/>

     

    </div>

  </div>
</template>

<script>

import Formulario from './componentes/Formulario/index.vue'


export default {
  name: 'App',
  components: {
    
    Formulario
   
  }
}
</script>

<style>

h1 {
  color: blue;
}
#app {

}
</style>
