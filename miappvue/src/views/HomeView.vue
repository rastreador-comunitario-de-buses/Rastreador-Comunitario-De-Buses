<template>
  <main class="Contenedor">
    <!-- compañeros, aca utilice el componente de MenuComponente -->
    <MenuComponente></MenuComponente>
    <!-- `Compañeros, es para ver el video en bucle(VIDEO DE PRUEBA)` -->
    </main>
</template>

<script>
import MenuComponente from '@/components/MenuComponente.vue';

export default {
  name: "HomeView",
  components: {
    //compañeros, aca basicamente es para utilizar este componente en esta view
    MenuComponente
  }
}

</script>

<style>
 /*Full style chavales*/


</style>
