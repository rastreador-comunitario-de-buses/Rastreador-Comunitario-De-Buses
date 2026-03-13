<template>
  <header class="header-principal">  
    
    <div class="seccion-izquierda">
      <div class="menu-hamburguesa">
        <i class='bx bx-menu' v-on:click="mostrarMenuHmburguesa"></i>
        <div class="menuDesplegable" v-show="contenidoMenu">
          <div v-on:click="ejecuarValidacionPerfil">
            <ul class="texto-info">Perfil</ul>
          </div>
          <div v-on:click="ejecuarValidacion" v-show="contenidoMenu">
            <ul class="texto-info"> Administrar rutas </ul>
          </div>
        </div>
      </div>

      <div class="logo" v-on:click="volverInicio">
        <img class="logo-icono" src="../assets/logo-bus.png" alt="Logo bus">
        <img class="logo-texto" src="../assets/tipografia-pronto.png" alt="Tipografia">
      </div>
    </div>

    <nav class="contenedor-menu">
      <div class="buses-activos">
        🟢 {{ BusesActivos }} Buses en línea
      </div>

      <router-link to="/login">
        <button class="boton-sesion" v-if="!logueado">Iniciar sesion</button>
      </router-link>
      <router-link to="/registro" class="router-registro">
        <button v-if="!logueado" class="boton-registro">Registrarse</button>
      </router-link>

      <section class="menu-rayitas"></section>
    </nav>

  </header>

  <div class="texto-rodante">
    <span>
      ¡Pronto llegó a Santa Marta, consulta la ubicación de tus bus en tiempo real!ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
      La información que necesitas para moverte está ahora en un solo lugarㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
      La movilidad en Santa Marta ahora es más inteligenteㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
      Optimiza tu tiempo y reduce la espera en las paradasㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
    </span>
  </div>
</template>


<script>
import { buses } from '@/data/buses'

export default {
  name: "AppNavbar",

  data() {
    return {
      logueado: false,
      contenidoMenu: false,
      buses: buses
    }
  },

  computed: {
    BusesActivos() {
      return this.buses.length
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
      this.contenidoMenu = false
    }
  },
  methods: { 
    volverInicio: function(){
      this.$router.push("/")
    },
    ejecuarValidacionPerfil:function(){
      if(this.logueado === true){
        this.$router.push("/perfil")
      }
      else{
        this.$router.push("/login")
      }

    },
    ejecuarValidacion: function(){
      if(this.logueado === true){
        this.$router.push("/administrarRutas")
      }
      else{
        this.$router.push("/login")
      }
    },
    //funcion para el mounted y watch
    verificarSesion() {
      const mostrador = localStorage.getItem('SesionActiva');
      if (mostrador === 'true') {
        this.logueado = true;
      } else {
        this.logueado = false;
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header-principal {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Mantiene izquierda y derecha en sus extremos */
  background: #1e3a8a;
  padding: 3px 20px; /* Reduje el padding lateral para que no se vea tan apretado */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 3px 140px;
}

.seccion-izquierda {
  display: flex;
  align-items: center;
  gap: 20px;                    /* Espacio entre el menú hamburguesa y el logo */
}

.logo {
  display: flex;
  align-items: center;
 
}

.logo-icono {
  height: 65px;
  transform: translateY(-5px);
  cursor: pointer;
}

.logo-texto {
  height: 48px;
  cursor: pointer;
}

.buses-activos {
  color: white;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
}

.texto-rodante {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  color: white;
  background-color: #1387d4;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px 0;
}

.texto-rodante span {
  display: inline-block;
  padding-left: 100%;
  animation: mover 60s linear infinite;
}

@keyframes mover {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.contenedor-menu {
  display: flex;
  align-items: center;
  gap: 15px;
}

.boton-sesion, .boton-registro {
  padding: 8px 12px;
  border-radius: 15px;
  background-color: #ffd500;
  color: black;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
}

.boton-sesion:hover, .boton-registro:hover {
  background: rgba(224, 195, 30, 0.973);
}

.menu-hamburguesa {
  position: relative;
  font-size: 32px;
  color: white;
  cursor: pointer;
}

.menuDesplegable {
  position: absolute;
  top: 35px;
  left: 0;
  background: white;
  border-radius: 6px;
  width: 190px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  padding: 10px;
  z-index: 100;
}

</style>