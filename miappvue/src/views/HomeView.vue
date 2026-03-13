<template>
  
  <main class="pagina-inicio">
    <section class="presentacion-principal">
      <div class="capa-oscura"></div>
      <div class="bloque-contenido">
        <div class="texto-bienvenida">
          <span class="etiqueta-info">Sistema de Transporte - Santa Marta</span>
          <h1 class="titulo-gigante">PRONTO</h1>
          <h2 class="subtitulo-web">Tu ciudad, <span class="resaltado-amarillo">en movimiento.</span></h2>
          <p class="parrafo-descripcion">
            La plataforma inteligente de transporte que conecta a los samarios con su destino. 
            Localiza tu bus en tiempo real con precisión milimétrica.
          </p>
          <div class="botones-grupo">
            <router-link to="/mapa" @click="validacionSesionMapa">
              <button class="boton-amarillo">
                <i class='bx bx-map-alt'></i> Explorar Rutas
              </button>
            </router-link>
            <button class="boton-borde">Saber más</button>
          </div>
        </div>
        
        <div class="zona-imagen">
          <div class="contenedor-bus">
            <img src="../assets/imagen-bus.png" alt="Pronto Bus" class="imagen-flotante">
            <div class="efecto-pulso"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="seccion-servicios">
      <div class="encabezado-seccion">
        <h2>Tecnología al servicio del ciudadano</h2>
        <div class="linea-decorativa"></div>
      </div>

      <div class="contenedor-tarjetas">
        <div class="tarjeta-informativa">
          <div class="icono-servicio"><i class='bx bxs-zap'></i></div>
          <h3>Tiempo Real</h3>
          <p>Algoritmos de alta precisión para que sepas exactamente dónde está tu bus cada segundo.</p>
        </div>

        <div class="tarjeta-informativa">
          <div class="icono-servicio"><i class='bx bxs-shield-alt'></i></div>
          <h3>Viaje Seguro</h3>
          <p>Planifica tus rutas con antelación y comparte tu ubicación con seres queridos.</p>
        </div>

        <div class="tarjeta-informativa">
          <div class="icono-servicio"><i class='bx bxs-leaf'></i></div>
          <h3>Sostenibilidad</h3>
          <p>Menos esperas, rutas más eficientes y una Santa Marta más organizada.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  data(){
    return{
      
    }
  },
  methods: {
    validacionSesionMapa: function(){
      const validarSesionActiva = localStorage.getItem('SesionActiva')
      if(validarSesionActiva == 'true'){
        localStorage.setItem('verificarGuardarRuta','true')
      }
      else{
        localStorage.setItem('verificarGuardarRuta','false')
      }
    },
  }

}

</script>

<style scoped>
/* Estilos base de la pagina */
.pagina-inicio {
  font-family: 'Segoe UI', sans-serif;
  background: #0a0f18;
}

/* Configuracion de la parte superior */
.presentacion-principal {
  position: relative;
  min-height: 95vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
  color: white;
  overflow: hidden;
}

.bloque-contenido {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 5;
}

.texto-bienvenida { 
  max-width: 600px; 
}

.etiqueta-info {
  background: rgba(96, 165, 250, 0.15);
  color: #60a5fa;
  padding: 7px 16px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.titulo-gigante {
  font-size: 85px;
  font-weight: 900;
  line-height: 1;
  margin: 25px 0 15px;
  background: linear-gradient(to bottom, #ffffff 50%, #a1a1a1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitulo-web { 
  font-size: 36px; 
  margin-bottom: 20px; 
  font-weight: 400; 
}

.resaltado-amarillo { 
  color: #ffd500; 
  font-weight: 700; 
}

.parrafo-descripcion {
  font-size: 18px;
  color: #a3b1c6;
  margin-bottom: 45px;
  line-height: 1.6;
}

/* Estilos de botones */
.botones-grupo { 
  display: flex; 
  gap: 15px; 
}

.boton-amarillo {
  background: #ffd500;
  color: #1a1a1a;
  padding: 15px 32px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.boton-amarillo:hover {
  background: rgba(224, 195, 30, 0.973);
  
}

.boton-borde {
  background: transparent;
  border: 2px solid rgba(255,255,255,0.15);
  color: white;
  padding: 15px 32px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.boton-borde:hover {
  background: rgba(255,255,255,0.05);
}

/* Zona derecha - imagen */
.zona-imagen { 
  width: 45%; 
}

.imagen-flotante {
  width: 100%;
  border-radius: 25px;
  filter: drop-shadow(0 15px 30px rgba(0,0,0,0.4));
}

/* Seccion de tarjetas inferiores */
.seccion-servicios { 
  padding: 80px 10%; 
  background: #0a0f18; 
}

.encabezado-seccion { 
  text-align: center; 
  margin-bottom: 50px; 
  color: white; 
}

.encabezado-seccion h2 { 
  font-size: 36px; 
}

.linea-decorativa { 
  width: 50px; 
  height: 4px; 
  background: #ffd500; 
  margin: 15px auto; 
  border-radius: 10px; 
}

.contenedor-tarjetas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.tarjeta-informativa {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(8px);
  padding: 45px 35px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.06);
  transition: 0.3s ease;
  color: white;
}

.tarjeta-informativa:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: #ffd500;
  transform: translateY(-8px);
}

.icono-servicio { 
  font-size: 40px; 
  color: #ffd500; 
  margin-bottom: 20px; 
}

.tarjeta-informativa h3 { 
  font-size: 22px; 
  margin-bottom: 12px; 
}

.tarjeta-informativa p { 
  color: #9ba7b9; 
  line-height: 1.5; 
  font-size: 15px;
}

</style>