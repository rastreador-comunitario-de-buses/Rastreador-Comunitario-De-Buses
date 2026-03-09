<template>
  <nav class="contenedor-menu">
    <!-- CAMILO2 -- Puse nuevos links que funcionan mediante botones y simplemente pase el componente del menu
     a este(dejare el componente del menuComponente por si acaso) -->
    <router-link to="/">Inicio</router-link> |
    <router-link to="/mapa" v-on:click="validacionSesionMapa">Mapa</router-link> |
    <router-link to="/login">
      <button class="boton-sesion" v-if="!logueado">Iniciar sesion</button>
    </router-link>
    <router-link to="/registro" class="router-registro">
      <button v-if="!logueado" class="boton-registro">Registrarse</button>
    </router-link>
    <!-- Menu rayitas para que dentro pueda interacturar con su perfil y administrar sus rutas jijiji -->
    <section class="menu-rayitas">
        <div class="menu-hamburguesa" v-if="logueado" v-on:click="mostrarMenuHmburguesa">
            <i class='bx bx-menu'></i>
        </div>
        <div class="menuDesplegable">
        <router-link to="/perfil" v-show="contenidoMenu">
          <ul v-on:click="mostrarMenuHmburguesa">Perfil</ul>
        </router-link>
        <router-link to="/administrarRutas" v-show="contenidoMenu">
          <ul v-on:click="mostrarMenuHmburguesa">
            administrar rutas
          </ul>
        </router-link>
        </div>

    </section>
</nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      logueado: false,
      contenidoMenu: false
    }
  },
  mounted() {
  //Aca se revisa si hay una sesion activa cuando se recargue la pagina
    this.verificarSesion();
  },
  watch: {
    //ejecuta cada vez que cambia de pestaña (ME tenia loco esta parte)
    $route() {
      this.verificarSesion();
    }
  },
  methods: { 
    //funcion para el mounted y watch
    verificarSesion() {
      const mostrador = localStorage.getItem('SesionActiva');
      if (mostrador === 'true') {
        this.logueado = true;
      } else {
        this.logueado = false;
      }
    },
      validacionSesionMapa: function(){
      const validarSesionActiva = localStorage.getItem('SesionActiva')
      if(validarSesionActiva == 'true'){
        localStorage.setItem('verificarGuardarRuta','true')
      }
      else{
        localStorage.setItem('verificarGuardarRuta','false')
      }
    },
    //Aca es para cuando toque las tres rayitas se muestre el contenido
    mostrarMenuHmburguesa: function(){
      if(this.contenidoMenu === false){
        this.contenidoMenu = true
      }
      else{
        this.contenidoMenu = false
      }
    }
  } 
} 
</script>
<style>

/*CAMILO2 --- Compañero camilo aca tienes que reducir el menu ese porque como puedes ver ocupa todo el ancho
(no me aguante y puse eso, disculpame camilo)
*/
/* debes de ajustar la altura del menu porque si no es un caos, la barrita de hamburguesa tambien debes de 
ponerla del lado derecho */
.menu-hamburguesa{
  border: 2px solid black;
  padding: 0;
  margin: 0;  
  position: relative;
  right: px;
}
.contenedor-menu{
display: flex;
align-items: center;

}

.menuDesplegable{  
  /* camilo si quitas esto el navbar se agranda tambien */
  position: absolute;

}

</style>