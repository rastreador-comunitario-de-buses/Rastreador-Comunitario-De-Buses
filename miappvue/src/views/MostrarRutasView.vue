<template>

<div class="contenedor-maximo">
    <header class="header-rutas">
      <h1> Rutas guardadas</h1>
      <p>Gestiona los buses que rastreas con frecuencia</p>
    </header>

    <div class="contenedor-rutas">
      <div class="tarjeta-bus" v-for="ruta in misRutas" :key="ruta.id">
        <h3 class="nombre-ruta"> {{ ruta.nombreRuta }}</h3>
  
    <div class="detalles">
        <p>Bus: <span class="busGuardado"> {{ ruta.id}}</span></p>
        <p>Placa: <span class="placaGuardada">{{ ruta.placa }}</span></p>
        <p>Ruta: <span class="rutaGuardada">{{ ruta.rutaBus }}</span></p>
    </div>

    <div class="botones">
        <button class="btn-ver">Ver en Mapa</button>
        <button class="btn-borrar" v-on:click="eliminarRuta(ruta.id)">Eliminar</button>
    </div>
</div>
</div>
      </div>
</template>

<script >
export default {
  data() {
    return {
        misRutas: []
    }
  },
  mounted() {
  this.misRutas = JSON.parse(localStorage.getItem('rutasMasUsadas')) || [];
    },
    methods: {
        //se elimina la ruta de la lista 
        eliminarRuta: function(idAEliminar){
            //aca el filter funciona como un filtro literalmente saca lo que no cumple la condicion
            this.misRutas = this.misRutas.filter(ruta => ruta.id !== idAEliminar);
            localStorage.setItem('rutasMasUsadas', JSON.stringify(this.misRutas));
        }
    }
}
</script>

<style >
.tarjeta-bus{
border: 2px solid black;
}
</style>