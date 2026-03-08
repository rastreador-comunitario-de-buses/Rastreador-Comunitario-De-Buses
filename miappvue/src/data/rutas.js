export const rutas = [
    {
        nombre: "SM101 - (Aeropuerto - Santa Rita)",
        color: "blue",
        puntos: [
            [11.2055, -74.2265], // Terminal de Transferencia de Gaira
            [11.1925, -74.2300], // Bello Horizonte (Doble calzada)
            [11.1196, -74.2306], // Aeropuerto
            [11.1650, -74.2300], // Regreso por doble calzada
            [11.1800, -74.2250], // Variante debajo del puente
            [11.1850, -74.2300], // Entrada barrio La Paz (recorrido interno)
            [11.1900, -74.2280], // Retorno a la doble calzada
            [11.1950, -74.2260], // Bomba Zuca
            [11.2050, -74.2250], // Carrera 4 Rodadero
            [11.2135, -74.2060], // Ziruma
            [11.2408, -74.1990], // Calle 22 con carrera 4 (Centro)
            [11.2420, -74.1970], // Calle 22 con carrera 5
            [11.2480, -74.1920], // Carrera 5 hasta Av. del Ferrocarril
            [11.2520, -74.1965], // Av. del Ferrocarril hasta carrera 1
            [11.2470, -74.1980], // Carrera 1 hasta calle 22
            [11.2408, -74.1990], // Calle 22 hasta carrera 4
            [11.2135, -74.2060], // Carrera 4 hasta Ziruma
            [11.2050, -74.2250], // Carrera 4 Rodadero
            [11.2055, -74.2265]  // Regreso Terminal Gaira
        ]
    },
    {
        nombre: "SM102 - (Mamatoco - Taganga)",
        color: "blue",
        puntos: [
            [11.2150, -74.2300], // Terminal de Transferencia de Mamatoco
            [11.2200, -74.2200], // Glorieta de Mamatoco
            [11.2250, -74.2100], // Troncal del Caribe hacia Riohacha
            [11.2300, -74.2000], // Entrada a Garagoa
            [11.2350, -74.1950], // Cantilito
            [11.2400, -74.1900], // Puente hacia Timayui
            [11.2450, -74.1850], // Timayui 1
            [11.2480, -74.1820], // Timayui 2
            [11.2400, -74.1900], // Regreso por la misma vía a Troncal del Caribe
            [11.2200, -74.2200], // Glorieta de Mamatoco
            [11.2255, -74.2150], // Buenavista
            [11.2300, -74.2000], // Av. del Libertador
            [11.2400, -74.1900], // Carrera 24
            [11.2420, -74.1920], // Av. Santa Rita / Calle 22
            [11.2450, -74.1930], // Calle 22 hasta Carrera 5
            [11.2480, -74.1920], // Carrera 5 hasta Av. del Ferrocarril
            [11.2500, -74.1900], // Calle 11 (Mercado Público)
            [11.2520, -74.1880], // Carrera 11
            [11.2600, -74.1800], // Taganga (recorrido interno Santropel / Nuevo IED)
            [11.2620, -74.1780], // Camellón del corregimiento (fin Taganga)
            [11.2600, -74.1800], // Inicio retorno Taganga
            [11.2520, -74.1880], // Carrera 11 hasta Calle 10
            [11.2500, -74.1850], // Calle 10 hasta Carrera 5
            [11.2480, -74.1820], // Av. del Ferrocarril hasta Carrera 1
            [11.2450, -74.1800], // Carrera 1 hasta Calle 22
            [11.2420, -74.1920], // Calle 22 hasta Carrera 24
            [11.2400, -74.1900], // Carrera 24 hasta Av. del Libertador
            [11.2300, -74.2000], // Av. del Libertador hasta Glorieta Buenavista
            [11.2150, -74.2300]  // Regreso Terminal de Mamatoco
        ]
    },
    {
        nombre: "SM103 - (Universitaria - Gaira - Troncal del Caribe)",
        color: "blue",
        puntos: [
            [11.2055, -74.2265], // Terminal de Transferencia de Gaira (inicio)
            [11.1925, -74.2300], // Doble calzada Bello Horizonte
            [11.1800, -74.2250], // Zona hotelera (Irotama, Zuana Beach Resort, Medicure, Estelar)
            [11.1196, -74.2306], // Aeropuerto
            [11.1650, -74.2300], // Regreso por doble calzada
            [11.1800, -74.2250], // Variante debajo del puente
            [11.1850, -74.2300], // Barrio La Paz
            [11.1950, -74.2260], // Bomba Zuca
            [11.2050, -74.2250], // Frente Terminal Gaira (otro sentido)
            [11.2100, -74.2200], // Sector La Lucha
            [11.2150, -74.2150], // Glorieta de la Piragua
            [11.2200, -74.2120], // Glorieta izquierda hacia empalmar con Mamatoco
            [11.2250, -74.2100], // Glorieta de Mamatoco
            [11.2270, -74.2050], // Frente Buenavista
            [11.2300, -74.2000], // Troncal del Caribe hacia Riohacha
            [11.2350, -74.1950], // Punto “YE” y desviamos derecha
            [11.2400, -74.1900], // Bonda (recorrido interno)
            [11.2350, -74.1950], // Retorno a vía principal
            [11.2300, -74.2000], // Troncal hacia glorieta de Mamatoco
            [11.2270, -74.2050], // Frente Buenavista
            [11.2250, -74.2100], // Glorieta de Mamatoco
            [11.2200, -74.2120], // Glorieta izquierda hacia Piragua
            [11.2150, -74.2150], // Glorieta de la Piragua
            [11.2100, -74.2200], // Doble calzada hacia Terminal Gaira
            [11.2055, -74.2265]  // Terminal de Transferencia de Gaira (fin)
        ]
    },
    {
        nombre: "SM104 - (Vía a Minca - La Lucha - Ciudad Equidad)",
        color: "orange",
        puntos: [
            [11.2150, -74.2300], // Terminal de Transferencia de La Lucha
            [11.2200, -74.2250], // Mamatoco
            [11.2250, -74.2200], // Retorno Av. del Ferrocarril con Carrera 5
            [11.2180, -74.2230], // Glorieta de La Lucha, pasando debajo del puente
            [11.2150, -74.2200], // Doble calzada hacia Glorieta de la Piragua
            [11.2120, -74.2150], // Glorieta de Mamatoco
            [11.2100, -74.2120], // Desvío hacia vía a Riohacha / entrada Vía a Minca
            [11.2050, -74.2100], // Puente frente a Villa Toledo
            [11.2000, -74.2050], // Carretera hacia Minca
            [11.1950, -74.2000], // Entrada Ciudad Equidad
            [11.1930, -74.1980], // Recorrido interno Manzana 10
            [11.1950, -74.2000], // Retorno vía principal
            [11.2000, -74.2050], // Regreso vía a Minca
            [11.2100, -74.2120], // Variante de la vía a Riohacha hacia glorieta de Mamatoco
            [11.2120, -74.2150], // Doble calzada hacia Glorieta de la Piragua
            [11.2150, -74.2200], // Doble calzada derecho, desviación frente a terminal
            [11.2180, -74.2230], // Glorieta de La Lucha
            [11.2200, -74.2250], // Av. del Ferrocarril derecho hasta Calle 22 (Santa Rita)
            [11.2220, -74.2270], // Calle 22 hasta Carrera 5
            [11.2250, -74.2300], // Carrera 5 hasta Av. del Ferrocarril
            [11.2150, -74.2300]  // Terminal de Transferencia de La Lucha (fin)
        ]
    },
    {
        nombre: "SM105 - (Calle 19 - La Lucha - Av del Ferrocarril)",
        color: "blue",
        puntos: [
            [11.2150, -74.2300], // Terminal de Transferencia de Mamatoco
            [11.2180, -74.2280], // Av. Primera / Camellón de la bahía
            [11.2200, -74.2250], // Entrada barrio Bastidas, vía alterna
            [11.2220, -74.2230], // Diagonal 9 hacia carrera 35
            [11.2250, -74.2200], // Calle 9c bajando hasta carrera 34
            [11.2220, -74.2230], // Retoma diagonal 9
            [11.2200, -74.2250], // Vía alterna al puerto
            [11.2180, -74.2280], // Carrera 25A hasta calle 9
            [11.2170, -74.2300], // Carrera 22a hasta calle 9A (Barrio Alfonso López)
            [11.2150, -74.2320], // Carrera 17c hasta carrera 9
            [11.2130, -74.2300], // Carrera 14 hasta calle 8
            [11.2100, -74.2280], // Calle 8 hasta carrera 11, Escuela Superior María Auxiliadora
            [11.2120, -74.2250], // Calle 10 hasta carrera 15
            [11.2140, -74.2230], // Calle 10A hasta Sociedad Portuaria
            [11.2160, -74.2200], // Carrera 1A hasta glorieta
            [11.2180, -74.2180], // Glorieta toma carrera 22
            [11.2200, -74.2150], // Carrera 5 hasta Av. del Ferrocarril
            [11.2220, -74.2120], // Calle 11 por Mercado Público
            [11.2240, -74.2100], // Carrera 11 hasta calle 9 (Campo Alegre)
            [11.2260, -74.2080], // Vía alterna al puerto
            [11.2280, -74.2050], // Calle 100 cruzando vía alterna sobre calle 25A
            [11.2220, -74.2230], // Entrada barrio Bastidas (retorno)
            [11.2150, -74.2300]  // Terminal de Transferencia de Mamatoco (fin)
        ]
    },
    {
        nombre: "SM106 - (Ruta del Ferrocarril - La Lucha - Av del Ferrocarril)",
        color: "blue",
        puntos: [
            [11.2150, -74.2300], // Terminal de Transferencia de La Lucha
            [11.2180, -74.2280], // Av. del Ferrocarril con carrera 5
            [11.2180, -74.2230], // Glorieta de La Lucha, pasando debajo del puente
            [11.2200, -74.2200], // Doble calzada hacia entrada antiguo Royer (carrera 29)
            [11.2220, -74.2180], // Calle 53
            [11.2240, -74.2170], // Carrera 30 - ingreso barrio Andrea Carolina
            [11.2250, -74.2150], // Recorrido interno barrio Andrea Carolina
            [11.2240, -74.2170], // Salida a Calle 53 sector Bodegas Donados
            [11.2220, -74.2180], // Calle 53 hasta Carrera 24
            [11.2200, -74.2200], // Carrera 24 hasta Calle 48
            [11.2180, -74.2220], // Calle 48 hasta Carrera 21F
            [11.2160, -74.2240], // Carrera 21F hasta Calle 46
            [11.2150, -74.2250], // Calle 46 hasta Carrera 21B8
            [11.2180, -74.2280], // Glorieta de La Lucha
            [11.2180, -74.2230], // Glorieta y debajo del puente
            [11.2200, -74.2200], // Conecta con Av. del Ferrocarril
            [11.2220, -74.2150], // Av. del Ferrocarril hasta Calle 22 (Santa Rita)
            [11.2240, -74.2120], // Calle 22 hasta Carrera 5
            [11.2250, -74.2100], // Carrera 5 hasta Av. del Ferrocarril
            [11.2270, -74.2080], // Av. del Ferrocarril hasta Carrera 1 (camellón turístico)
            [11.2250, -74.2100], // Carrera 1 hasta Calle 22 (Santa Rita)
            [11.2240, -74.2120], // Calle 22 hasta Av. del Ferrocarril
            [11.2150, -74.2300]  // Final Terminal de Transferencia de La Lucha
        ]
    },
    { 
        nombre: "SM107 - (Bahía Concha - Gaira)",
        color: "blue",
        puntos: [
            [11.2055, -74.2265], // Terminal de Transferencia de Gaira
            [11.2100, -74.2240], // Doble calzada pasando por debajo del puente
            [11.2150, -74.2200], // Carrera 4 Rodadero hasta Calle 13 de Gaira
            [11.2180, -74.2180], // Calle 13 hasta Carrera 14
            [11.2200, -74.2150], // Carrera 14 hasta Carrera 10
            [11.2220, -74.2120], // Carrera 10 hasta Calle 2
            [11.2240, -74.2100], // Calle 2 hasta Carrera 9 de Gaira
            [11.2260, -74.2080], // Carrera 9 hasta Calle 1A
            [11.2280, -74.2060], // Calle 1A hasta Carrera 9A
            [11.2300, -74.2040], // Carrera 9A hasta Calle 1B
            [11.2320, -74.2020], // Calle 1B hasta Calle 2
            [11.2340, -74.2000], // Calle 2 hasta Carrera 4 Rodadero
            [11.2360, -74.1980], // Carrera 4 hasta Ziruma
            [11.2380, -74.1960], // Ziruma hasta Calle 22
            [11.2400, -74.1940], // Calle 22 hasta Av. de los Estudiantes
            [11.2420, -74.1920], // Av. de los Estudiantes hasta Av. del Libertador
            [11.2440, -74.1900], // Av. del Libertador hasta entrada Barrio Bastidas
            [11.2460, -74.1880], // Doble vía hasta Parque Bastidas
            [11.2480, -74.1850], // Vía hacia Balneario Bahía Concha
            [11.2500, -74.1820], // Barrio Altos de Bahía Concha (recorrido interno)
            [11.2480, -74.1850], // Retorno a la vía principal
            [11.2460, -74.1880], // Av. del Libertador
            [11.2440, -74.1900], // Av. de los Estudiantes
            [11.2420, -74.1920], // Calle 22 (Santa Rita)
            [11.2400, -74.1940], // Carrera 4 hasta Ziruma
            [11.2380, -74.1960], // Carrera 4 Rodadero, recorrido interno Gaira
            [11.2360, -74.1980], // Salida a Carrera 4 Rodadero
            [11.2055, -74.2265]  // Terminal de Transferencia de Gaira (fin)
        ]
    },
    { 
        nombre: "SM108 - (El Parque - La Lucha)",
        color: "blue",
        puntos: [
            [11.2150, -74.2300], // Terminal de Transferencia de La Lucha
            [11.2180, -74.2280], // Glorieta de La Lucha hacia Doble Calzada
            [11.2200, -74.2250], // Doble calzada hacia Ciénaga, retorno estadio
            [11.2220, -74.2230], // Pequeña glorieta hacia Curinca
            [11.2240, -74.2200], // Barrio Curinca / Santa Cruz
            [11.2260, -74.2180], // Carrera 22 con Calle 46
            [11.2280, -74.2160], // Carrera 24
            [11.2300, -74.2140], // Límite El Parque – Santa Lucía
            [11.2320, -74.2120], // Bodegas Donado / Barrio Andrea Carolina
            [11.2340, -74.2100], // Barrio El Líbano 2000
            [11.2360, -74.2080], // Universidad Antonio Nariño (sede Troncal)
            [11.2380, -74.2060], // Doble calzada Troncal del Caribe
            [11.2400, -74.2040], // Glorieta de Mamatoco
            [11.2420, -74.2020], // Mamatoco hacia Av. del Libertador
            [11.2440, -74.2000], // Av. del Libertador hasta Av. del Ferrocarril
            [11.2460, -74.1980], // Carrera 1A (Camellón turístico)
            [11.2480, -74.1960], // Calle 22 (Santa Rita) / Carrera 5
            [11.2500, -74.1940], // Centro histórico de la ciudad
            [11.2520, -74.1920], // Av. del Ferrocarril con Carrera 5
            [11.2540, -74.1900], // Av. del Ferrocarril hasta Av. del Libertador
            [11.2560, -74.1880], // Av. del Libertador hacia Glorieta Quinta San Pedro
            [11.2580, -74.1860], // Glorieta Quinta de San Pedro Alejandrino
            [11.2600, -74.1840], // Empalme Glorieta Mamatoco / Doble Calzada
            [11.2620, -74.1820], // Glorieta de la Piragua
            [11.2640, -74.1800], // Retorno Glorieta hasta Universidad Antonio Nariño
            [11.2660, -74.1780], // Circuito interno barrios: Líbano 2000, Altos Santa Cruz, Santa Lucía, Villas Santa Cruz, Parque, Curinca
            [11.2150, -74.2300]  // Terminal de Transferencia de La Lucha (fin)
        ]
    },
    {
        nombre: "SM109 - (San Pablo - Timayui)",
        color: "blue",
        puntos: [
            [11.2150, -74.2300], // Terminal de Transferencia de Mamatoco
            [11.2250, -74.2200], // Glorieta de Mamatoco hacia Riohacha
            [11.2300, -74.2000], // Entrada Garagoa
            [11.2350, -74.1950], // Cantilito
            [11.2400, -74.1900], // Puente hacia Timayui
            [11.2450, -74.1850], // Timayui 1
            [11.2480, -74.1820], // Timayui 2
            [11.2400, -74.1900], // Retorno Troncal del Caribe
            [11.2250, -74.2200], // Glorieta Mamatoco / Doble Calzada
            [11.2200, -74.2120], // Glorieta de la Piragua
            [11.2180, -74.2100], // Desvío hacia Cootrasmag
            [11.2160, -74.2080], // Universidad del Magdalena
            [11.2140, -74.2060], // Av. del Ferrocarril, Ciudadela
            [11.2120, -74.2040], // Carrera 19 – Calle 30
            [11.2100, -74.2020], // Calle 30 hasta Carrera 5
            [11.2080, -74.2000], // Carrera 5 hasta Calle 40, San Pablo
            [11.2100, -74.2020], // Retorno Calle 40 – Carrera 5
            [11.2120, -74.2040], // Calle 30 – Carrera 19
            [11.2140, -74.2060], // Av. del Ferrocarril / Universidad del Magdalena
            [11.2160, -74.2080], // Retorno hacia Cootrasmag
            [11.2200, -74.2120], // Doble Calzada hacia Glorieta de La Lucha
            [11.2180, -74.2100], // Por debajo del puente, Doble Calzada
            [11.2200, -74.2120], // Glorieta de la Piragua
            [11.2150, -74.2300]  // Terminal de Transferencia de Mamatoco (fin)
        ]   
    },
    {
        nombre: "SM110 - (Libertador - Curval)",
        color: "blue",
        puntos: [
            [11.2150, -74.2300], // Terminal de Transferencia de Mamatoco
            [11.2250, -74.2200], // Glorieta de Mamatoco / Troncal del Caribe
            [11.2300, -74.2000], // Punto “YE”
            [11.2350, -74.1950], // Bonda
            [11.2400, -74.1900], // Curval (recorrido interno)
            [11.2350, -74.1950], // Retorno a Troncal del Caribe
            [11.2250, -74.2100], // Glorieta Buenavista
            [11.2200, -74.2120], // Av. del Libertador hacia Av. del Ferrocarril
            [11.2180, -74.2100], // Av. del Ferrocarril hasta Carrera 1ª (Camellón Turístico)
            [11.2160, -74.2080], // Carrera 1 hasta Calle 22
            [11.2140, -74.2060], // Calle 22 hasta Carrera 5
            [11.2120, -74.2040], // Carrera 5 hasta Av. del Ferrocarril
            [11.2140, -74.2060], // Av. del Ferrocarril hasta Av. del Libertador
            [11.2160, -74.2080], // Av. del Libertador hasta Glorieta Quinta de San Pedro
            [11.2150, -74.2300]  // Terminal de Transferencia de Mamatoco (fin)
        ]
    },
    {
        nombre: "SM111 - (20 de Julio - Nacho Vives)",
        color: "red",
        puntos: [
            [11.2150, -74.2300], // Terminal de Transferencia de La Lucha
            [11.2100, -74.2280], // Calle 30 hasta Carrera 5
            [11.2120, -74.2250], // Carrera 5 (Centro Histórico)
            [11.2140, -74.2230], // Av. del Ferrocarril
            [11.2160, -74.2200], // Calle 10 (Pueblito / Mercado)
            [11.2180, -74.2180], // Carrera 11
            [11.2200, -74.2150], // Vía hacia Taganga hasta Calle 6
            [11.2220, -74.2120], // Carrera 19
            [11.2240, -74.2100], // Barrio 20 de Julio
            [11.2260, -74.2080], // Carrera 21
            [11.2280, -74.2050], // Barrio Nacho Vives hasta Punta Arrecha
            [11.2220, -74.2030], // Vía alterna al puerto
            [11.2200, -74.2000], // Carrera 16 con Calle 6
            [11.2180, -74.1980], // Carrera 5 hasta Av. del Ferrocarril
            [11.2160, -74.1960], // Av. del Ferrocarril hacia Carrera 1 (Camellón Turístico)
            [11.2140, -74.1940], // Calle 22 (Santa Rita)
            [11.2120, -74.1920], // Carrera 5
            [11.2100, -74.1900], // Calle 30
            [11.2080, -74.1880], // Carrera 19
            [11.2060, -74.1860], // Barrio El Pando (recorrido interno)
            [11.2150, -74.2300]  // Terminal de Transferencia de La Lucha (fin)
        ]
    },
    {
        nombre: "SM112 - (La 30 - Pantano – María Eugenia)",
        color: "blue",
        puntos: [
            [11.2480, -74.1880], // Terminal de Transferencia de Mamatoco
            [11.2500, -74.1850], // Glorieta de Mamatoco (U)
            [11.2520, -74.1820], // Av. del Libertador
            [11.2420, -74.1920], // Carrera 24
            [11.2400, -74.1900], // Calle 22 (Santa Rita)
            [11.2380, -74.1920], // Avenida Santa Rita hasta Carrera 5
            [11.2360, -74.1900], // Carrera 5 hasta Calle 30
            [11.2340, -74.1880], // Calle 30 hasta Carrera 13
            [11.2320, -74.1860], // Carrera 13 hasta Calle 38
            [11.2300, -74.1850], // Calle 38 hasta Carrera 14
            [11.2280, -74.1830], // Carrera 14 hasta Calle 33
            [11.2260, -74.1820], // Calle 33 hasta Carrera 18
            [11.2240, -74.1800], // Carrera 18 hasta Calle 30
            [11.2220, -74.1780], // Calle 30 (regreso)
            [11.2200, -74.1760], // Carrera 5 hasta Calle 22
            [11.2180, -74.1740], // Calle 22 (Avenida Santa Rita) hasta Carrera 24
            [11.2160, -74.1720], // Carrera 24 hasta Av. del Libertador
            [11.2140, -74.1700], // Av. del Libertador hasta Bastidas
            [11.2120, -74.1680], // Barrio Galicia (recorrido interno)
            [11.2100, -74.1660], // Vía alterna al puerto
            [11.2080, -74.1640], // Variante debajo del puente de Galicia
            [11.2060, -74.1620], // Barrios Santa Fe y Tayrona
            [11.2080, -74.1640], // Salida a Av. del Libertador
            [11.2100, -74.1660], // Glorieta de la Quinta de San Pedro Alejandrino
            [11.2480, -74.1880]  // Terminal de Transferencia de Mamatoco (fin)
        ]
    },
    {
        nombre: "SM113 - (Chimila - Mamatoco – Av del Río)",
        color: "blue",
        puntos: [
            [11.2480, -74.1880], // Terminal de Transferencia de Mamatoco
            [11.2500, -74.1850], // Barrio Pantano, U en glorieta de Mamatoco
            [11.2520, -74.1820], // Av. del Libertador
            [11.2600, -74.1800], // Av. del Río
            [11.2620, -74.1780], // Calle 1C
            [11.2640, -74.1760], // Calle 28
            [11.2660, -74.1740], // Carrera 2
            [11.2680, -74.1720], // Calle 27
            [11.2700, -74.1700], // Carrera 4
            [11.2720, -74.1680], // Calle 22
            [11.2740, -74.1660], // Carrera 5
            [11.2760, -74.1640], // Av. del Río
            [11.2780, -74.1620], // Av. del Libertador
            [11.2800, -74.1600], // Barrio Los Nogales
            [11.2820, -74.1580], // Barrio Santa Fe
            [11.2840, -74.1560], // Barrios El Pantano, Los Fundadores, Chimila
            [11.2480, -74.1880]  // Terminal de Transferencia de Mamatoco (fin)
        ]
    },
    {
        nombre: "SM114 - (Gaira – Arrecife)",
        color: "blue",
        puntos: [
            [11.2055, -74.2265], // Terminal de Transferencia de la Lucha
            [11.2000, -74.2230], // Retorno Arrecife / Rodadero
            [11.1980, -74.2200], // Glorieta de La Lucha
            [11.1950, -74.2150], // Conexión doble calzada a Ciénaga
            [11.1900, -74.2100], // Entrada a Gaira
            [11.1880, -74.2080], // Calle 6 Gaira
            [11.1850, -74.2060], // Carrera 4 Rodadero
            [11.1830, -74.2040], // Centro Comercial Arrecife
            [11.1850, -74.2060], // Retorno por Carrera 4
            [11.1880, -74.2080], // Calle 6 Gaira
            [11.1900, -74.2100], // Recorrido interno Gaira
            [11.1920, -74.2120], // Doble calzada
            [11.1950, -74.2150], // Retorno Villas del Palmar
            [11.2000, -74.2230], // Retorno doble calzada hasta Lucha
            [11.2055, -74.2265], // Glorieta Lucha / Av. del Ferrocarril
            [11.2080, -74.2220], // Av. del Ferrocarril
            [11.2120, -74.2180], // Calle 22
            [11.2150, -74.2150], // Av. Santa Rita
            [11.2180, -74.2120], // Carrera 5
            [11.2200, -74.2100], // Centro Ciudad
            [11.2055, -74.2265]  // Terminal de Transferencia de la Lucha (fin)
        ]
    },
    {
        nombre: "SM115 - (Rodrigo Galván de Bastidas – Chimila)",
        color: "blue",
        puntos: [
            [11.2055, -74.2265], // Terminal de Transferencia de la Lucha
            [11.2000, -74.2230], // Barrio Bastidas / Glorieta por debajo del puente
            [11.1980, -74.2200], // Doble calzada hacia Torre O / Carrera 27
            [11.1950, -74.2180], // Entrada Concepción / El Parque
            [11.1900, -74.2150], // Esquina remates Marilyn / Calle 48
            [11.1880, -74.2120], // Carrera 26
            [11.1850, -74.2100], // Calle 39
            [11.1830, -74.2080], // Carrera 22
            [11.1820, -74.2050], // Pequeña glorieta entrada al Parque
            [11.1800, -74.2030], // Variante por debajo del puente (U)
            [11.1820, -74.2000], // Entrada Cootrasmag
            [11.1850, -74.1980], // Universidad del Magdalena
            [11.1880, -74.1950], // Av. del Ferrocarril / Ciudadela
            [11.1900, -74.1920], // Carrera 19 hasta Calle 7
            [11.1920, -74.1900], // Carrera 20 hasta Calle 11
            [11.1940, -74.1880], // Carrera 24F
            [11.1960, -74.1850], // Vía alterna / Barrio 17 de diciembre
            [11.1980, -74.1820], // Recorrido interno Bastidas
            [11.2000, -74.1800], // Salida 17 de diciembre
            [11.2020, -74.1780], // Retorno vía alterna / Calle 10A
            [11.2050, -74.1750], // Carrera 20
            [11.2080, -74.1720], // Calle 7
            [11.2100, -74.1700], // Carrera 19 hasta ciudadela
            [11.2055, -74.2265]  // Terminal de Transferencia de la Lucha (fin)
        ]
    },
    {
        nombre: "SM116 - Pozos Colorados (Zona Hotelera, Don Jaca)",
        color: "blue",
        puntos: [
            [11.2475, -74.1990], // Terminal de Transferencia de Gaira
            [11.2500, -74.1950], // Glorieta vía a Ciénaga / Desvío vía alterna
            [11.2550, -74.1900], // Doble calzada hacia Bello Horizonte
            [11.2600, -74.1850], // Cadena hotelera Pozos Colorados
            [11.2650, -74.1800], // Don Jaca / retorno glorieta desvío vía alterna
            [11.2600, -74.1850], // Regreso doble calzada
            [11.2550, -74.1900], // Entrada barrio Cristo Rey
            [11.2520, -74.1920], // Recorrido interno Cristo Rey
            [11.2500, -74.1950], // Salida a la doble calzada
            [11.2475, -74.1990]  // Terminal de Transferencia de Gaira (fin)
        ]
    },
    {
        nombre: "SM117 - Estudiantes (11 de Noviembre – Santa Rita)",
        color: "blue",
        puntos: [
            [11.2480, -74.1985], // Terminal de Transferencia de Mamatoco
            [11.2520, -74.1950], // Glorieta Mamatoco / Troncal del Caribe
            [11.2600, -74.1900], // Vía a Minca / Puente
            [11.2650, -74.1850], // Barrio 11 de Noviembre / Nueva Colombia
            [11.2600, -74.1900], // Regreso vía a Minca / Glorieta
            [11.2520, -74.1950], // Glorieta Mamatoco / Vía alterna
            [11.2500, -74.1920], // Parte trasera empresa Bavaria / recorrido interno Mamatoco
            [11.2485, -74.1970], // Doble vía hacia Buenavista
            [11.2490, -74.1990], // Av. del Libertador hasta carrera 24
            [11.2470, -74.2000], // Calle 22 Santa Rita
            [11.2480, -74.1985]  // Terminal de Transferencia de Mamatoco (fin)
        ]
    },
    {
        nombre: "SM118 - Camellón de la Bahía (La Paz – Centro)",
        color: "blue",
        puntos: [
            [11.2380, -74.1810], // Terminal de Transferencia de Gaira / El Manantial
            [11.2450, -74.1790], // Doble calzada / sector hotelero
            [11.2500, -74.1770], // Retorno Zazue
            [11.2480, -74.1800], // Recorrido interno sector El Manantial
            [11.2460, -74.1785], // Bomba Zuca
            [11.2440, -74.1760], // Carrera 4 del Rodadero
            [11.2420, -74.1750], // Ziruma / Carrera 4 Santa Marta
            [11.2410, -74.1740], // Calle 22 con carrera 4
            [11.2400, -74.1730], // Calle 22 con carrera 5
            [11.2390, -74.1720], // Carrera 5 centro de la ciudad / Av. del Ferrocarril
            [11.2385, -74.1710], // Carrera 1 Camellón turístico
            [11.2380, -74.1700], // Calle 22 Santa Rita / Av. Santa Rita
            [11.2380, -74.1810]  // Terminal de Transferencia de Gaira (fin)
        ]
    },
    {
        nombre: "SM119 - Ciudad Equidad (Ciudad Equidad – Centro)",
        color: "blue",
        puntos: [
            [11.2150, -74.2300], // Terminal de Transferencia de Mamatoco
            [11.2180, -74.2320], // Glorieta hacia la derecha
            [11.2200, -74.2350], // Desvío por debajo de glorieta vía a Riohacha
            [11.2220, -74.2380], // Vía hacia Minca
            [11.2250, -74.2400], // Puente frente a Villa Toledo
            [11.2270, -74.2420], // Carretera hacia Minca
            [11.2300, -74.2450], // Entrada Ciudad Equidad
            [11.2320, -74.2470], // Recorrido interno hasta manzana 10
            [11.2300, -74.2450], // Retorno hacia entrada
            [11.2270, -74.2420], // Regreso vía a Minca
            [11.2250, -74.2400], // Variante vía a Riohacha
            [11.2220, -74.2380], // Glorieta Mamatoco
            [11.2200, -74.2350], // Glorieta del Buenavista
            [11.2180, -74.2320], // Av. del Libertador hasta Av. del Ferrocarril
            [11.2150, -74.2300], // Carrera 1 / camellón turístico
            [11.2120, -74.2280], // Calle 22 hasta carrera 5
            [11.2150, -74.2300]  // Regreso Terminal de Transferencia de Gaira
        ]
    },
    {
        nombre: "SM120 - Rodadero (Rodadero Centro – Rodadero Sur)",
        color: "blue",
        puntos: [
            [11.2150, -74.2300], // Terminal de Transferencia de La Lucha
            [11.2180, -74.2280], // Glorieta de La Lucha, pasando por un lado del puente
            [11.2200, -74.2250], // Conexión con doble calzada hacia Ciénaga
            [11.1900, -74.2100], // Entrada a Gaira
            [11.1880, -74.2080], // Recorrido interno por Gaira vía principal
            [11.1850, -74.2060], // Calle 6 de Gaira
            [11.1830, -74.2040], // Carrera 4 del Rodadero
            [11.1835, -74.2020], // Centro Comercial Arrecife
            [11.1820, -74.2000], // Av. Tamaca inicio
            [11.1780, -74.1900], // Sur del Rodadero por Av. Tamaca
            [11.1830, -74.2020], // Regreso por Carrera 4 del Rodadero
            [11.1850, -74.2060], // Calle 6 de Gaira (regreso)
            [11.1880, -74.2080], // Recorrido interno por Gaira (regreso)
            [11.1920, -74.2120], // Doble calzada
            [11.1950, -74.2150], // Retorno Villas del Palmar
            [11.2150, -74.2300], // Regreso Terminal de La Lucha vía doble calzada
            [11.2180, -74.2280], // Glorieta por debajo del puente
            [11.2200, -74.2250], // Conexión Calle 30
            [11.2220, -74.2230], // Calle 30 hasta nuevo puente de Bavaria
            [11.2240, -74.2200], // Avenida hasta Calle 22 (Santa Rita)
            [11.2220, -74.2180], // Calle 22 hasta Carrera 5
            [11.2200, -74.2150], // Carrera 5 hasta Av. del Ferrocarril
            [11.2180, -74.2120], // Av. del Ferrocarril hasta Carrera 1 (Camellón Turístico)
            [11.2160, -74.2080], // Carrera 1 hasta Calle 22
            [11.2140, -74.2060], // Calle 22 hasta Carrera 8
            [11.2120, -74.2040], // Carrera 8 hasta Calle 30
            [11.2150, -74.2300]  // Terminal de Transferencia de La Lucha (fin)
        ]
    },
    {
        nombre: "SM121 - Ruta del rio (Rosalía – Av. del Río)",
        color: "blue",
        puntos: [
            [11.2150, -74.2300], // Terminal de Transferencia de Mamatoco
            [11.2180, -74.2280], // Glorieta de Mamatoco hacia derecha
            [11.2200, -74.2250], // Desviación por debajo de la glorieta hacia vía Riohacha
            [11.2250, -74.2200], // Vía a Minca, pasando puente frente a Villa Toledo
            [11.2300, -74.2150], // Carretera hacia Minca
            [11.2350, -74.2100], // Entrada barrio La Rosalía
            [11.2355, -74.2105], // Recorrido interno Rosalía
            [11.2350, -74.2100], // Retorno a entrada Rosalía
            [11.2300, -74.2150], // Retorno vía a Minca hasta variante vía Riohacha
            [11.2250, -74.2200], // Variante hacia izquierda a glorieta Mamatoco
            [11.2200, -74.2250], // Glorieta Buenavista
            [11.2180, -74.2280], // Av. del Libertador
            [11.2150, -74.2300], // Av. del Río
            [11.2100, -74.2320], // Carrera 4
            [11.2080, -74.2340], // Calle 22
            [11.2060, -74.2360], // Carrera 5
            [11.2050, -74.2380], // Av. del Río
            [11.2030, -74.2400], // Av. del Libertador
            [11.2000, -74.2420], // Glorieta Buenavista
            [11.2150, -74.2300]  // Regreso Terminal de Transferencia de Mamatoco
        ]
    },
    {
        nombre: "SM122 - Universidad Del Magdalena (Universidad del Magdalena – Las Malvinas)",
        color: "blue",
        puntos: [
            [11.2150, -74.2300], // Terminal de Transferencia de La Lucha
            [11.2180, -74.2280], // Glorieta de La Lucha (pasando por debajo del puente)
            [11.2200, -74.2250], // Desvío para U hacia Av. del Ferrocarril
            [11.2220, -74.2230], // Av. del Ferrocarril rumbo a Universidad del Magdalena
            [11.2240, -74.2210], // Entrada a Universidad del Magdalena (giro a la derecha)
            [11.2250, -74.2200], // Recorrido interno Universidad
            [11.2260, -74.2180], // Barrio 8 de Febrero
            [11.2270, -74.2160], // Barrio Las Malvinas
            [11.2280, -74.2140], // Barrio Pamplonita
            [11.2290, -74.2120], // Barrio Villa del Carmen
            [11.2250, -74.2200], // Retorno a vía principal de Universidad del Magdalena
            [11.2220, -74.2230], // Av. del Ferrocarril
            [11.2180, -74.2280], // Glorieta de La Lucha
            [11.2150, -74.2300]  // Terminal de Transferencia de La Lucha (fin)
        ]
    }
]