// js/criaturas.js
// Base de datos de criaturas legendarias de Colombia

const criaturasDB = [
  // ==================== REGIÓN CARIBE ====================

  {
    id: "hombre-caiman",
    nombre: "Hombre Caimán",
    cultura: "Plato, Magdalena",
    region: "caribe",
    imagen: "../img/Criaturas/Hombre-caiman.webp",
    descripcion_corta: "Pescador transformado en mitad hombre, mitad caimán.",
    descripcion: `<h3>🌊 El obsesivo pescador de Plato</h3>
        <p>En el municipio de <strong>Plato</strong>, a orillas del majestuoso río Magdalena, vivía un pescador llamado <strong>Saúl Montenegro</strong>. No era conocido por su destreza con las redes, sino por una obsesión que lo consumía: espiar a las mujeres mientras se bañaban en las cristalinas aguas del río. Día tras día, escondido entre los arbustos, Saúl alimentaba su morbo sin ser visto. Pero quería más, quería acercarse sin peligro, y fue entonces cuando concibió un plan desesperado.</p>
        
        <h3>🐊 El pacto con el brujo de la Guajira</h3>
        <p>Saúl emprendió un largo viaje hasta la <strong>Alta Guajira</strong>, donde encontró a un poderoso brujo indígena. Tras escuchar su petición, el hechicero preparó dos pócimas mágicas: una de color rojo (o blanca, según las versiones) que lo transformaría en un enorme caimán, y otra que lo devolvería a su forma humana. La condición era que un amigo de confianza debía administrar las dosis en el momento preciso.</p>
        <p>De regreso a Plato, Saúl le pidió a su mejor amigo que lo ayudara. Todo funcionó a la perfección durante varias semanas: se convertía en caimán, nadaba sigilosamente hasta el lugar donde las mujeres se bañaban, las espiaba sin ser detectado y luego regresaba para que su amigo le diera el antídoto.</p>
        
        <h3>⚠️ El accidente que lo condenó para siempre</h3>
        <p>Sin embargo, la fatalidad acechaba. Un día, el amigo habitual no pudo acompañarlo y fue reemplazado por otro, quien jamás había presenciado la transformación. Cuando Saúl, convertido en un enorme caimán, emergió del agua, el sustituto entró en pánico y dejó caer el frasco con la pócima humana. El líquido se derramó sobre las piedras, y apenas unas gotas alcanzaron la cabeza del animal.</p>
        <p>El resultado fue aterrador y definitivo: Saúl conservó su cabeza humana, pero su cuerpo quedó para siempre convertido en el de un caimán. Las mujeres que lo vieron huyeron despavoridas, y jamás volvieron a bañarse en el río. El terror cundió por todo el pueblo.</p>
        
        <h3>🏞️ La condena eterna en el Magdalena</h3>
        <p>Rechazado por su comunidad y sumido en una profunda soledad, el Hombre Caimán emprendió un viaje sin retorno río abajo, hasta perderse en las ciénagas del Bajo Magdalena. Su madre, la única que todavía le llevaba alimentos, murió de tristeza al no poder encontrar un remedio. Desde entonces, los pescadores cuentan que en las noches de luna llena es posible verlo asomar su cabeza de hombre entre las aguas, condenado a vagar eternamente como advertencia de que todo deseo secreto tiene un precio.</p>
        <p><em>"Se va el caimán, se va el caimán, se va para Barranquilla..."</em>, canta el folclor, recordando la trágica historia de Saúl Montenegro.</p>`,
    atributos: ["Río Magdalena", "Transformación", "Obsesión", "Maldición"],
    iconos: ["fa-water", "fa-exchange-alt", "fa-eye", "fa-skull"],
  },
  {
    id: "la-llorona-caribe",
    nombre: "La Llorona",
    cultura: "Versión Caribe (varios municipios)",
    region: "caribe",
    imagen: "../img/Criaturas/llorona-caribe.webp",
    descripcion_corta: "Ánima en pena que llora por sus hijos ahogados.",
    descripcion: `<h3>👻 El espectro que vaga por las noches</h3>
        <p>La <strong>Llorona</strong> es quizás uno de los espectros más universales de Latinoamérica, pero en la región Caribe de Colombia adquiere matices propios que la convierten en un espanto singular. Deambula por las noches, especialmente cerca de ríos, ciénagas y caminos solitarios, con un llanto desgarrador que hiela la sangre de quienes la escuchan: <em>"¡Ay, mis hijos!"</em>. Su imagen es la de una mujer espectral, de rostro huesudo, ojos rojos y vestiduras andrajosas, que carga un bulto que simula un niño muerto o, según otras versiones, va en busca de sus pequeños extraviados.</p>
        
        <h3>💔 El origen de su eterno lamento</h3>
        <p>El origen de esta ánima en pena varía según el narrador, pero la versión más extendida en la costa Caribe cuenta que fue una joven madre que, abandonada por su amante, decidió ahogar a sus dos hijos en un arroyo. Al momento de cometer el crimen, la desesperación la llevó a lanzarse también al agua, muriendo ahogada. Al llegar a las puertas del cielo, se le negó la entrada y se le ordenó regresar a la tierra a buscar a sus hijos por la eternidad.</p>
        <p>Otra versión, muy popular en el bajo Magdalena, narra que la mujer estaba casada con un hombre que se fue a la guerra. Al creerlo muerto, tuvo un hijo con otro hombre. Cuando el esposo regresó, ella huyó con el niño en brazos, y en la oscuridad de la noche cayó al río, ahogándose ambos. Desde entonces, su alma vaga llorando sin consuelo.</p>
        
        <h3>⚠️ Presagio de muerte y castigo para infieles</h3>
        <p>Los campesinos y pescadores del Caribe advierten que escuchar el lamento de La Llorona es un presagio de muerte. Si se oye cerca, es porque ella está lejos; si se oye lejos, es porque se acerca. Se aparece con frecuencia a los <strong>hombres infieles</strong>, a los <strong>borrachos</strong> que vagan trasnochados y a los niños desobedientes. Su aparición provoca una parálisis de terror, y aunque no siempre ataca físicamente, su grito puede enloquecer a quien la mire fijamente a los ojos.</p>
        <p>La Llorona es, ante todo, una advertencia moral sobre el peso de la culpa, el arrepentimiento y la imposibilidad de redimir ciertas faltas. En algunas noches de luna llena, los pescadores aseguran haber visto su silueta blanca en la orilla, peinándose con una peineta de hueso mientras sus gemidos se mezclan con el sonido del agua.</p> <p><em>📌 Versión de La Llorona propia del Caribe colombiano. En la región Andina su vestido es de muchos colores, su cabello mezcla negro, plateado y dorado, y castiga específicamente a quienes atentan contra la vida de los no nacidos (parteras, médicos, hombres que abandonan a embarazadas).</em></p>`,
    atributos: ["Lamento", "Ríos", "Maternidad trágica", "Presagio"],
    iconos: ["fa-sad-tear", "fa-water", "fa-child", "fa-moon"],
  },
  {
    id: "el-mohan",
    nombre: "El Mohán",
    cultura: "Ríos Magdalena, Sinú y ciénagas",
    region: "caribe",
    imagen: "../img/Criaturas/Mohan_CARB.webp",
    descripcion_corta: "Anciano seductor, guardián de los ríos y tesoros.",
    descripcion:  `<h3>🌊 El dueño de las profundidades</h3>
        <p>El <strong>Mohán</strong> —también conocido como <strong>Poira</strong> en algunas regiones— es uno de los seres míticos más arraigados en la tradición del Caribe colombiano y el Tolima. Se le describe como un anciano de <strong>larga cabellera enmarañada</strong>, barba espesa, <strong>dientes de oro</strong> y cuerpo velludo, a veces cubierto de hojas o completamente desnudo. Habita en los remolinos más profundos de los ríos, en cuevas submarinas o en grandes peñascos desde donde vigila sus dominios.</p>
        <p>Los pescadores ribereños le temen y le respetan a la vez. Cuentan que el Mohán es el <strong>dueño de los peces</strong> y de los <strong>tesoros escondidos</strong> en el fondo del agua. Cuando alguien pesca con dinamita, contamina el río o abusa de la pesca, el Mohán enfurece: revienta las embarcaciones, enreda las redes y hace desaparecer a los intrusos. Pero también se muestra benévolo con quienes le ofrecen <strong>tabaco, aguardiente o comida</strong>, recompensándolos con abundante pesca.</p>
        
        <h3>❤️ El seductor de lavanderas</h3>
        <p>Sin embargo, su faceta más conocida es la de <strong>seductor implacable</strong>. El Mohán acecha a las mujeres que lavan ropa en la orilla o a las jóvenes que se bañan solas. Con su canto y su mirada embrujadora las atrae hacia las profundidades, donde las convierte en sus amantes. Las víctimas desaparecen sin dejar rastro, y se dice que quien escucha el acordeón o la guitarra del Mohán en la noche está condenado a caer en su trampa. Otras veces, se aparece como un apuesto jinete para engañar a las incautas.</p>
        <p>Una de las historias más contadas es la de una muchacha llamada <strong>Pabla</strong>, quien desapareció misteriosamente mientras lavaba ropa en el río Sinú. Días después, unos pescadores encontraron sus ropas dobladas sobre una piedra, y a lo lejos vieron al Mohán fumando tabaco en la entrada de una cueva. Nunca volvieron a ver a Pabla.</p>
        
        <h3>🏺 Cómo aplacar su ira</h3>
        <p>Los lugareños saben que para mantener al Mohán contento hay que dejarle <strong>ofrendas</strong> en las orillas: un cigarrillo, un trago de ron o un puñado de maíz. Si el agua está tranquila y la pesca es buena, es señal de que el Mohán aceptó el tributo. Pero si el río se pone bravo sin motivo, hay que hacer una plegaria y ofrecer algo más valioso. La leyenda del Mohán es un llamado a <strong>respetar los cuerpos de agua</strong> y a no dejarse llevar por las apariencias, pues bajo una belleza fugaz puede ocultarse un destino fatal.</p> <p><em>📌 Versión del Mohán propia del Caribe colombiano. En la región Andina se le conoce como Poira (transforma mujeres en oro) y en la Orinoquía es un gigante guitarrista que rapta lavanderas.</em></p>`, 
    atributos: ["Río", "Seducción", "Tesoros", "Guardián", "Tabaco"],
    iconos: ["fa-water", "fa-heart", "fa-coins", "fa-shield-alt", "fa-smoking"],
  },
  {
    id: "la-mojana",
    nombre: "La Mojana",
    cultura: "Cerro de Juanché, Bolívar / Cartagena",
    region: "caribe",
    imagen: "../img/Criaturas/La-Mojana.webp",
    descripcion_corta: "Mujer diminuta de cabellos dorados que roba niños.",
    descripcion: `<h3>✨ La pequeña sirena de los cabellos dorados</h3>
        <p>La <strong>Mojana</strong> es una de las leyendas más singulares del Caribe colombiano, especialmente presente en los departamentos de Bolívar, Sucre y Córdoba. Se trata de una mujer de <strong>estatura diminuta</strong>, rasgos finos y una cabellera larguísima, <strong>dorada como el sol</strong>, que le arrastra hasta los pies. Vive en una casa de piedra construida bajo las aguas de las ciénagas o en las profundidades del mar, donde cría animales domésticos y se baña con una <strong>totuma de oro</strong>.</p>
        <p>Los campesinos afirman que a La Mojana se le veía con frecuencia en el <strong>cerro de Juanché</strong>, cerca de Magangué, después de los aguaceros, cuando el barro quedaba marcado con sus pequeñas huellas. Se dice que su principal actividad es <strong>raptar a los niños</strong> que se acercan descuidados a las orillas de los cuerpos de agua. Con su voz dulce y su apariencia inofensiva, los atrae hacia el agua y los sumerge, llevándolos a su morada acuática. Allí los cuida como si fueran sus propios hijos, pero jamás regresan a la superficie.</p>
        
        <h3>🏛️ La versión colonial de Cartagena</h3>
        <p>Otra versión, más extendida en <strong>Cartagena</strong>, narra que La Mojana es el espíritu de una noble dama colonial asesinada por su esposo celoso. La mujer, que descuidaba a su marido por dedicarse por completo a su hijo, fue ultimada por él en un ataque de ira. Al morir, la mujer gritó, y el niño, que estaba sentado en el borde de un pozo, perdió el equilibrio y cayó al fondo. Desde entonces, la madre vaga con una <strong>peineta de hueso</strong> en la mano, peinando sus dorados cabellos y buscando al pequeño. Cuando un niño la ve, queda hipnotizado y camina hacia ella; al descubrir que no es su hijo, lo arroja al pozo.</p>
        <p>En las casas coloniales que aún conservan pozos, los vecinos aseguran haberla visto en las noches de luna llena, con su vestido blanco y su cabellera brillante.</p>
        
        <h3>👶 Advertencia para padres y niños</h3>
        <p>La Mojana es así una figura <strong>ambivalente</strong>: protectora de los niños que rapta y castigo para los padres desobligados. Su leyenda advierte sobre los peligros ocultos en los remansos apacibles y recuerda que el agua, fuente de vida, también puede ser tumba eterna. Por eso, las madres caribeñas les dicen a sus hijos: <em>"No te acerques solo a la ciénaga, que la Mojana te lleva"</em>. Y los pescadores, al caer la tarde, miran con recelo las orillas, temiendo ver aquella pequeña figura de cabellos dorados peinándose bajo la luna.</p>`,
    atributos: [
      "Cabellos dorados",
      "Rapto de niños",
      "Vida acuática",
      "Peineta de hueso",
    ],
    iconos: ["fa-female", "fa-child", "fa-water", "fa-moon"],
  },
    
  {
    id: "el-caballo-cojo",
    nombre: "El Caballo Cojo",
    cultura: "Centro y sur de Bolívar",
    region: "caribe",
    imagen: "../img/Criaturas/El-Caballo-Cojo.webp",
    descripcion_corta:
      "Caballo negro de tres patas, ojos rojos y olor a azufre.",
    descripcion: `<h3>🐎 El galope infernal en las noches de Bolívar</h3>
        <p>En los municipios del <strong>centro y sur de Bolívar</strong>, como San Jacinto, El Carmen de Bolívar y Zambrano, los campesinos aún cuentan con escalofríos la leyenda del <strong>Caballo Cojo</strong>. Se trata de una <strong>criatura espectral</strong> que aparece en las noches más oscuras, cuando el viento calla y los perros aúllan sin motivo. Su galope es seco, desigual, como si arrastrara una cadena. Quienes han tenido la desgracia de verlo describen un <strong>caballo completamente negro, de ojos rojos penetrantes, que solo tiene tres patas</strong>. En lugar de la cuarta, tiene un muñón que golpea el suelo produciendo un ruido aterrador.</p>
        
        <h3>👣 El rastro de azufre</h3>
        <p>Lo más terrible del Caballo Cojo es el <strong>nauseabundo olor a azufre</strong> que deja a su paso, señal inequívoca de su origen demoníaco. Se aparece a los viajeros trasnochados, a los borrachos que caminan solos y a los hombres infieles. A veces, se queda quieto en medio del camino, mirando fijamente a su víctima; otras veces, corre velozmente alrededor de ella, encerrándola en un círculo de terror. Los campesinos aseguran que quien monta al Caballo Cojo es llevado directamente al infierno, y que jamás vuelve a saberse de él.</p>
        
        <h3>😨 Cómo evitar su encuentro</h3>
        <p>Para protegerse, los lugareños recomiendan <strong>rezar un Padre Nuestro</strong> al escuchar su galope, llevar una <strong>medalla de la Virgen</strong> o cargar un <strong>diente de ajo</strong> en el bolsillo. También se dice que el caballo no puede cruzar líneas de ceniza o de agua bendita. Algunos ancianos cuentan que, si uno se persigna y grita "¡Dios te venza!", la criatura relincha con furia y desaparece en una llama. El Caballo Cojo es el espanto que recuerda que no se debe desafiar la noche, y que la curiosidad puede costar el alma.</p>`,
    atributos: ["Tres patas", "Ojos rojos", "Azufre", "Galope infernal"],
    iconos: ["fa-horse", "fa-fire", "fa-eye", "fa-skull"],
  },
  {
    id: "el-animero",
    nombre: "El Animero",
    cultura: "Bolívar / Montería, Córdoba",
    region: "caribe",
    imagen: "../img/Criaturas/Animero.webp",
    descripcion_corta:
      "Hombre vestido de nazareno que reza por las ánimas, seguido de muertos.",
    descripcion: `<h3>⛪ El rezador de las ánimas del purgatorio</h3>
        <p>En los pueblos de <strong>Bolívar y Montería (Córdoba)</strong>, los abuelos narran con recelo la historia del <strong>Animero</strong>. Era un hombre vestido con una <strong>túnica de nazareno</strong>, una <strong>hoja en cruz</strong> en una mano y una <strong>lámpara de gas o un farolito</strong> en la otra. Durante el mes de noviembre, especialmente en la madrugada, salía a recorrer las calles desiertas del pueblo. En cada esquina, el Animero se arrodillaba, rezaba un Padre Nuestro y un Ave María por las <strong>ánimas del purgatorio</strong>, y luego seguía su camino sonando una campanita.</p>
        <p>Lo más aterrador, según la tradición, es que el Animero <strong>no iba solo</strong>. Detrás de él, en una larga procesión silenciosa, lo seguían <strong>almas en pena, esqueletos envueltos en sudarios y brujas entrometidas</strong>. Los moradores, al escuchar el tintineo de la campana y los murmullos, se encerraban en sus casas y apagaban todas las luces, porque quien se asomara a la ventana podría ser arrastrado por la procesión o condenado a unirse a ella para siempre.</p>
        
        <h3>🙏 Un rito entre lo sagrado y lo pagano</h3>
        <p>Se cree que el Animero era un devoto que había hecho una <strong>promesa a las almas del purgatorio</strong>, y que mientras cumplía su recorrido, las ánimas lo acompañaban para recibir los rezos. Algunas versiones dicen que el mismo Animero era un <strong>muerto viviente</strong>, condenado a vagar eternamente por no haber cumplido una manda en vida. Otras afirman que era un hombre de carne y hueso, pero que su piedad lo volvía invisible a los ojos de los espíritus malignos.</p>
        <p>La costumbre del <strong>Animero</strong> ha desaparecido casi por completo, pero en algunos municipios remotos todavía se celebra el <strong>Rosario de la Aurora</strong> o se realizan rezos por las ánimas. La leyenda perdura como un recordatorio de la fina línea entre la vida y la muerte, y del respeto que se debe a los que ya partieron. En las noches de viento, algunos campesinos aún aseguran oír, a lo lejos, el repique de una campanita y el murmullo de un rezo.</p>`,
    atributos: [
      "Nazareno",
      "Ánimas del purgatorio",
      "Procesión de muertos",
      "Campanita",
    ],
    iconos: ["fa-church", "fa-pray", "fa-ghost", "fa-bell"],
  },
  {
    id: "keralia-espanto",
    nombre: "Keralia",
    cultura: "Wayuu (La Guajira)",
    region: "caribe",
    imagen: "../img/Criaturas/Keralia.webp",
    descripcion_corta: "Luz fatua que seduce, embaraza con la mirada y mata.",
    descripcion: `<h3>🔥 La luz que vaga en la oscuridad</h3>
        <p>En la árida península de <strong>La Guajira</strong>, donde el desierto se encuentra con el mar, los wayuu cuentan con terror la historia de <strong>Keralia</strong>. No es un dios ni un héroe: es un <strong>espíritu errante, un fuego fatuo</strong> que aparece en las noches sin luna como un resplandor brillante que flota sobre las salinas, las playas desiertas y los cardonales. Quienes lo han visto dicen que parece una <strong>linterna lejana o un reflector</strong>, pero que se mueve sin rumbo, como buscando algo —o a alguien—.</p>
        
        <h3>✨ La transformación en un amante perfecto</h3>
        <p>Keralia tiene la capacidad de <strong>cambiar de forma</strong>. Cuando una joven wayuu llama su atención, el fuego fatuo se transforma en un <strong>hombre apuesto, de belleza inigualable</strong>, que la visita noche tras noche como un pretendiente enamorado. La muchacha, hechizada por su mirada, cree haber encontrado el amor. Pero todo es un engaño. Con el <strong>poder de sus ojos</strong>, Keralia la deja embarazada sin tocarla siquiera. Cuando llega el momento del parto, la joven muere desangrada, y de su vientre no nace un bebé, sino <strong>culebras, sapos, iguanas y toda clase de animales ponzoñosos</strong> que la devoran desde adentro.</p>
        
        <h3>💀 La muerte para los hombres</h3>
        <p>Si un hombre se topa con Keralia en la noche, el encuentro es igualmente fatal. La luz lo envuelve, y la víctima comienza a <strong>vomitar sangre</strong> sin control hasta morir en cuestión de minutos. Los ancianos wayuu advierten a los niños y a los ebrios que jamás deambulen solos después del anochecer, especialmente cerca de las salinas o los lugares donde no hay vegetación. <em>"Keralia acecha donde la luna no alumbra"</em>, dicen.</p>
        
        <h3>🏜️ Un espanto que habita en los cardones</h3>
        <p>Durante el día, Keralia se esconde en los <strong>cardones viejos</strong>, adoptando la forma de un <strong>iguánido</strong> (como una iguana o un lagarto). Solo al caer la noche emerge como esa luz brillante que tanto atrae como aterra. La tradición oral wayuu lo describe como uno de los <strong>espíritus más letales</strong> de la región, un recordatorio de que no todo lo que brilla es bueno, y de que la belleza puede esconder una muerte espantosa. Por eso, en el Panteón wayuu se le reconoce como una entidad maligna, pero en el bestiario popular es el espanto que los viajeros temen encontrar en los caminos solitarios de la Guajira.</p>`,
    atributos: [
      "Luz fatua",
      "Seducción mortal",
      "Transformación",
      "Muerte por vómito de sangre",
    ],
    iconos: ["fa-lightbulb", "fa-heart-broken", "fa-snake", "fa-skull"],
  },
  {
    id: "duende-wayuu",
    nombre: "El Duende Wayuu",
    cultura: "Wayuu (La Guajira)",
    region: "caribe",
    imagen: "../img/Criaturas/El-Duende-Wayuu.webp",
    descripcion_corta:
      "Seres pequeños que silban, devoran personas y temen a los perros.",
    descripcion: `<h3>🌵 Los silbadores de la noche</h3>
        <p>En la península de La Guajira, los wayuu hablan de unos <strong>seres pequeñitos</strong> que aparecen en las noches de invierno, cuando la lluvia hace crecer la vegetación. Salen de entre los matorrales y los cardonales <strong>silbando de manera aguda y repetitiva</strong>. No son duendes juguetones como los de otras culturas: estos son <strong>devoradores de hombres</strong>. Cuando encuentran a una persona sola en el camino, la atacan, la despedazan y se la comen.</p>
        
        <h3>😨 El terror en la oscuridad</h3>
        <p>Los ancianos wayuu cuentan que estos duendes <strong>no se acercan a las viviendas</strong> porque temen a los perros y a la candela. Por eso, en las rancherías tradicionales, siempre mantienen <strong>perros vigilantes</strong> y, durante la noche, dejan la <strong>leña prendida</strong> en el fogón. El fuego y los ladridos son las únicas barreras que mantienen a raya a estos seres. Si una persona se aleja del poblado después del anochecer, especialmente en épocas de lluvias, corre el riesgo de escuchar un silbido que se acerca... y entonces ya es demasiado tarde.</p>
        
        <h3>👣 Cómo reconocer su presencia</h3>
        <p>El silbido del duende wayuu es inconfundible: agudo, como el de un pájaro nocturno, pero con un tono que hiela la sangre. Quienes lo han escuchado dicen que parece venir de todas direcciones a la vez. Si el silbido se oye lejos, es porque el duende está cerca; si se oye cerca, es porque ya está encima. La única salvación es correr hacia el fuego o hacia un perro que ladre. Los wayuu más precavidos llevan consigo una <strong>tinaja con brasas</strong> cuando deben salir de noche.</p>
        
        <h3>📖 Una lección de supervivencia</h3>
        <p>La leyenda del duende wayuu no solo asusta, sino que <strong>enseña a respetar los límites del territorio</strong> y a no aventurarse solo en la oscuridad. También refuerza la importancia del <strong>fuego como protección</strong> y de los perros como compañeros fieles. En una tierra tan dura como La Guajira, donde la noche es fría y el desierto infinito, estos pequeños seres silbadores son el eco de un miedo ancestral: el de ser devorado por lo desconocido.</p>`,
    atributos: [
      "Silbido",
      "Devoran personas",
      "Temen a perros y fuego",
      "Noches de invierno",
    ],
    iconos: ["fa-crow", "fa-fire", "fa-dog", "fa-moon"],
  },
  {
    id: "el-jinete-mompox",
    nombre: "El Jinete",
    cultura: "Mompox, Bolívar",
    region: "caribe",
    imagen: "../img/Criaturas/El-Jinete-Mompox.webp",
    descripcion_corta:
      "Hombre de dientes de oro que monta un caballo blanco con siete perros y hace desaparecer personas.",
    descripcion: `<h3>🐎 El jinete de la media noche</h3>
        <p>En la histórica ciudad de <strong>Mompox</strong>, a orillas del río Magdalena, los abuelos cuentan la leyenda del <strong>Jinete</strong>, un espanto que aparece en las noches de luna llena. Se trata de un hombre de <strong>dientes de oro</strong> relucientes, vestido con ropas elegantes de otra época, que monta un <strong>caballo blanco</strong> de gran alzada. A su lado corren <strong>siete perros negros</strong>, de ojos brillantes, que nunca ladran pero siempre acechan.</p>
        
        <h3>🤝 El engaño amable</h3>
        <p>El Jinete se muestra <strong>extremadamente amable</strong> con los caminantes solitarios que encuentra en su trayecto. Se acerca sonriendo, con sus dientes de oro brillando bajo la luna, y les ofrece un aventón: <em>"Súbase, que vamos para el mismo lado"</em>. Pero el que acepta la invitación jamás vuelve a ser visto. Algunos dicen que el caballo blanco emprende una carrera infernal que termina en un barranco o en el río; otros aseguran que los perros devoran al incauto antes de que pueda gritar. Lo cierto es que el Jinete <strong>hace desaparecer a sus víctimas para siempre</strong>.</p>
        
        <h3>⏰ La hora del peligro</h3>
        <p>El Jinete aparece puntualmente a la <strong>media noche</strong>, cuando los caminos están desiertos y solo los trasnochadores se atreven a circular. Se le ha visto especialmente en los <strong>caminos que bordean el río</strong> y en las calles empedradas de Mompox. El tintineo de los frenos del caballo y el jadeo de los perros anuncian su llegada. Quienes lo escuchan se persignan y rezan en voz baja, porque saben que asomarse a la ventana puede ser la última acción de sus vidas.</p>
        
        <h3>👻 Un espanto con historia</h3>
        <p>La tradición oral momposina vincula al Jinete con algún <strong>antiguo hacendado</strong> que murió en pecado mortal, o con un <strong>cazador de almas</strong> condenado a recorrer los mismos caminos que tanto amó en vida. También hay quien cree que se trata del <strong>diablo disfrazado</strong>, probando la bondad o la codicia de los viajeros. Sea como sea, el Jinete es uno de los espantos más temidos del Caribe bolivarense, y su leyenda sirve para recordar que no se debe confiar en las apariencias, ni aceptar favores de desconocidos en la oscuridad.</p>`,
    atributos: [
      "Dientes de oro",
      "Caballo blanco",
      "Siete perros",
      "Desapariciones",
    ],
    iconos: ["fa-horse", "fa-dog", "fa-smile", "fa-skull"],
  },
  {
    id: "el-cura-sin-cabeza-caribe",
    nombre: "El Cura sin Cabeza",
    cultura: "Varios pueblos del Caribe",
    region: "caribe",
    imagen: "../img/Criaturas/Cura_CARB.webp",
    descripcion_corta:
      "Fantasma decapitado que deambula por quebradas y caminos.",
    descripcion: `<h3>⛪ El sacerdote decapitado</h3>
        <p>En muchos pueblos del Caribe colombiano —desde <strong>La Cabrería</strong> en Antioquia hasta ciertos municipios de Bolívar y Córdoba— se cuenta la aparición del <strong>Cura sin Cabeza</strong>. Es el espectro de un sacerdote que, según la leyenda, fue <strong>decapitado</strong> en circunstancias trágicas. Su figura es aterradora: viste la sotana negra, pero donde debería estar su cabeza solo hay <strong>un muñón ensangrentado</strong> o, en otras versiones, una <strong>calavera que sostiene entre sus manos</strong>. Algunos testigos afirman que también lleva una <strong>vela encendida</strong> o una <strong>cruz invertida</strong>.</p>
        
        <h3>🚶‍♂️ Por dónde deambula</h3>
        <p>El Cura sin Cabeza aparece en <strong>quebradas solitarias, caminos rurales y puentes antiguos</strong>, especialmente después de la medianoche. Se dice que fue un sacerdote que <strong>perdió una apuesta con el demonio</strong> durante una misa negra, o que fue ajusticiado por los indígenas al considerarlo un brujo. Otra versión, muy popular en la región, cuenta que se internó en una quebrada para rezar y fue hallado muerto y decapitado sin que nadie supiera la causa. Desde entonces, su alma vaga en penitencia.</p>
        
        <h3>😱 El terror que enloquece</h3>
        <p>Los campesinos que han tenido la desgracia de verlo cuentan que su aparición produce un <strong>frío intenso</strong> y una <strong>parálisis momentánea</strong>. El cura sin cabeza no habla, pero emite un <strong>gemido profundo</strong> que parece salir de su pecho. Algunos aseguran que quien lo mira directamente a la calavera <strong>pierde la cordura</strong> o enferma gravemente. Para protegerse, los lugareños recomiendan <strong>rezar un credo</strong> y no volverse a mirar atrás mientras se huye.</p>
        
        <h3>📖 Una advertencia sobre los pactos</h3>
        <p>Más allá del terror, la leyenda del Cura sin Cabeza es una <strong>advertencia moral</strong> sobre los peligros del orgullo espiritual y de involucrarse con fuerzas oscuras. También refleja el miedo ancestral a los <strong>lugares sagrados profanados</strong> y a los sacerdotes que olvidaron su vocación. En las noches de viento, los campesinos del Caribe aún se persignan al escuchar un gemido cerca de la quebrada, y recuerdan que la cabeza del cura sigue buscando su cuerpo, o tal vez, su alma perdida.</p> <p><em>📌 Versión del Cura sin Cabeza propia del Caribe colombiano. Aparece en quebradas, caminos rurales y puentes; su origen se relaciona con una apuesta con el diablo o un ajusticiamiento indígena. Quien lo mira directamente a la calavera pierde la cordura. En la región Andina, en cambio, su origen es colonial (pecado secreto con una mujer) y vaga por iglesias y cementerios sin atacar, solo inspirando tristeza.</em></p>`,
    atributos: [
      "Decapitado",
      "Sotana negra",
      "Quebradas",
      "Pérdida de cordura",
    ],
    iconos: ["fa-church", "fa-skull", "fa-water", "fa-eye"],
  },
  {
    id: "el-sombreron-caribe",
    nombre: "El Sombrerón",
    cultura: "Región Caribe (popular)",
    region: "caribe",
    imagen: "../img/Criaturas/Sombreron_CARB.webp",
    descripcion_corta:
      "Hombre pequeño de sombrero ancho que enreda cabelleras.",
    descripcion: `<h3>🎩 El charro de la noche</h3>
    <p>En los pueblos del Caribe colombiano, desde las sabanas de Bolívar hasta los valles del Cesar, los abuelos cuentan con recelo la historia del <strong>Sombrerón</strong>. Se trata de un <strong>hombre pequeño, vestido de charro</strong> —con traje oscuro, botines y un <strong>sombrero ancho</strong> que parece cubrirle medio cuerpo— que aparece en las noches de luna llena. Su figura es elegante pero siniestra, y su presencia siempre anuncia algo extraño.</p>
    
    <h3>💇 El terror de las mujeres</h3>
    <p>El Sombrerón tiene una obsesión: las <strong>mujeres de cabello largo</strong>. Se acerca sigilosamente a las casas donde duermen jóvenes solteras, especialmente aquellas que son vanidosas o que han rechazado pretendientes. Una vez dentro, se sienta a los pies de la cama y comienza a <strong>enredar el cabello de la dormida con listones de colores brillantes</strong>, mientras tararea una canción antigua. Cuando la mujer despierta, encuentra su cabellera imposible de desenredar, llena de nudos y cintas. Algunas versiones dicen que el Sombrerón también <strong>silba</strong> para hipnotizar a sus víctimas.</p>
    
    <h3>🐴 Enemigo de los borrachos y los malos dueños de caballos</h3>
    <p>Pero el Sombrerón no solo ataca a las mujeres. También <strong>persigue a los borrachos</strong> que vagan solos por las calles trasnochadas, y <strong>castiga a quienes maltratan o descuidan a sus caballos</strong>. A estos últimos, el Sombrerón los hace extraviarse en el campo o les provoca pesadillas con el fantasma de un caballo negro que los persigue. Se dice que, si alguien escucha el trote de un caballo en la noche y no ve a nadie, es el Sombrerón montando su corcel invisible.</p>
    
    <h3>🛡️ Cómo ahuyentarlo</h3>
    <p>Para protegerse del Sombrerón, las mujeres deben <strong>dormir con tijeras abiertas debajo de la almohada</strong> o con un <strong>espejo frente a la cama</strong>, pues el duende no soporta ver su propio reflejo. También se recomienda rezar una oración al despertar si se siente un peso en la cama. El Sombrerón es, ante todo, un recordatorio de que la vanidad y el descuido atraen desgracias, y de que la noche pertenece a seres que no entendemos.</p> <p><em>📌 Versión del Sombrerón propia del Caribe colombiano. Es un hombre pequeño, vestido de charro, que enreda el cabello de las mujeres con listones y persigue a borrachos y maltratadores de caballos. En la región Andina, en cambio, es un jinete espectral de gran tamaño, monta un caballo negro, va acompañado de dos perros con cadenas y atrapa a sus víctimas con su sombrero encantado mientras grita "Si te alcanzo, te lo pongo".</em></p>`,
    atributos: [
      "Sombrero ancho",
      "Enreda cabellos",
      "Castiga borrachos",
      "Protege caballos",
    ],
    iconos: ["fa-hat-cowboy", "fa-female", "fa-wine-bottle", "fa-horse"],
  },
  
  {
    id: "francisco-el-hombre",
    nombre: "Francisco el Hombre",
    cultura: "Valledupar, Cesar",
    region: "caribe",
    imagen: "../img/Criaturas/Francisco-el-Hombre.webp",
    descripcion_corta:
      "Acordeonista que derrotó al diablo en un duelo musical.",
    descripcion: `<h3>🎵 El duelo de acordeones en la noche</h3>
    <p>En la tierra del vallenato, <strong>Valledupar</strong> y los pueblos del Cesar, la leyenda de <strong>Francisco el Hombre</strong> es tan popular como los acordeones que suenan en las parrandas. Cuentan que <strong>Francisco Moscote</strong> —o simplemente "Francisco el Hombre"— era un campesino y músico ambulante, famoso por su habilidad con el acordeón. Una noche, después de una larga parranda, regresaba a su casa montado en su burro, tocando melodías para animar el camino.</p>
    
    <h3>😈 El desafío del demonio</h3>
    <p>De repente, otra música comenzó a sonar en la oscuridad. Era un acordeón que respondía a cada una de sus notas, tocando con una destreza sobrehumana. Francisco, intrigado, siguió el sonido hasta llegar a un viejo árbol. Allí, sentado en las raíces, encontró a un hombre de mirada brillante y ropajes oscuros. Cuando la luna iluminó su rostro, Francisco reconoció con horror que era el <strong>mismísimo diablo</strong>.</p>
    
    <h3>🙏 El triunfo con el credo al revés</h3>
    <p>El diablo retó a Francisco a un <strong>duelo de acordeones</strong>: quien tocara mejor se llevaría el alma del otro. Francisco aceptó, sabiendo que no podía huir. Comenzó a tocar con todas sus fuerzas, pero el diablo igualaba cada melodía. Entonces, Francisco, que era un hombre de profunda fe, <strong>rezó el Credo al revés</strong> mientras sus dedos recorrían el acordeón. La música que brotó era tan hermosa y sobrecogedora que el diablo no pudo seguirle. Derrotado, Satanás desapareció entre llamas, dejando a Francisco como vencedor.</p>
    
    <h3>🏆 Un héroe del folclor vallenato</h3>
    <p>Desde ese día, Francisco es recordado como <strong>"el hombre que le ganó al diablo en un duelo de acordeones"</strong>. En Riohacha y Valledupar, el <strong>Festival Francisco el Hombre</strong> honra su memoria cada año, y los acordeonistas más virtuosos aspiran a emular su hazaña. La leyenda no solo celebra la música vallenata, sino también la astucia y la fe como armas contra el mal. En cada acordeón que suena en el Caribe, los viejos dicen que aún se escucha un eco de aquella noche en que Francisco el Hombre derrotó al demonio.</p>`,
    atributos: ["Acordeón", "Duelo musical", "Credo al revés", "Vallenato"],
    iconos: ["fa-music", "fa-guitar", "fa-cross", "fa-crown"],
  },
  {
    id: "espanto-del-sinu",
    nombre: "El Espanto del Sinú",
    cultura: "Río Sinú, Córdoba",
    region: "caribe",
    imagen: "../img/Criaturas/El-Espanto-del-Sinú.webp",
    descripcion_corta:
      "Ser sobrenatural que emite ruidos aterradores y hace desaparecer personas.",
    descripcion: `<h3>🌊 El guardián tenebroso del río Sinú</h3>
    <p>En las ciénagas y los meandros del <strong>río Sinú</strong>, en el departamento de Córdoba, los pescadores y campesinos hablan con voz baja de <strong>El Espanto del Sinú</strong>. No se atreven a describir su forma física —porque quien lo ve rara vez vuelve para contarlo—, pero todos coinciden en lo que <strong>se escucha</strong> antes de su aparición: <strong>ruidos espeluznantes</strong>, como gemidos ahogados, golpes de cadena contra el agua, y un silbido grave que parece salir del fondo del río.</p>
    
    <h3>👣 La desaparición repentina</h3>
    <p>La leyenda cuenta que el Espanto del Sinú <strong>acecha a quienes se acercan solos a las orillas del río después del anochecer</strong>, especialmente a los pescadores que abusan de la pesca o a los viajeros que profanan lugares sagrados. La víctima escucha primero un ruido extraño; luego, una neblina densa se levanta del agua. Cuando la neblina se disipa, la persona ha <strong>desaparecido sin dejar rastro</strong>. Ni las canoas, ni las ropas, ni los utensilios quedan. Es como si el río se hubiera tragado todo.</p>
    
    <h3>😨 Un ser que no se puede mirar</h3>
    <p>Algunos ancianos aseguran haber visto al Espanto del Sinú desde lejos: lo describen como una <strong>sombra alta y deforme</strong>, con brazos demasiado largos y una cabeza que gira en ángulos imposibles. Otros dicen que es más bien un <strong>remolino viviente</strong>, un torbellino de agua y barro que atrapa a los incautos. Pero todos coinciden en que <strong>mirarlo directamente es fatal</strong>: quien lo hace queda paralizado de terror y luego es arrastrado a las profundidades.</p>
    
    <h3>🛶 Cómo evitar su encuentro</h3>
    <p>Los pescadores del Sinú tienen reglas estrictas: <strong>no navegar solos después de la medianoche</strong>, no pescar con dinamita ni contaminar el río, y llevar siempre una <strong>medalla bendita</strong> o una <strong>rama de palma bendecida</strong>. También evitan silbar en la oscuridad, porque el Espanto podría confundir el silbido con un llamado. La leyenda del Espanto del Sinú es, ante todo, un recordatorio del <strong>respeto que se le debe al río</strong>, fuente de vida y también de muerte. En sus aguas tranquilas, dicen los cordobeses, habitan secretos que es mejor no perturbar.</p>`,
    atributos: [
      "Río Sinú",
      "Ruidos espeluznantes",
      "Desapariciones",
      "Neblina mortal",
    ],
    iconos: ["fa-water", "fa-soundcloud", "fa-skull", "fa-cloud"],
  },
  {
    id: "la-mata-de-patilla",
    nombre: "La Mata de Patilla",
    cultura: "Manatí, Atlántico",
    region: "caribe",
    imagen: "../img/Criaturas/La-Mata-de-Patilla.webp",
    descripcion_corta:
      "Bruja transformada en mata de sandía que bloquea el paso.",
    descripcion: `<h3>🍉 El obstáculo nocturno</h3>
    <p>En el municipio de <strong>Manatí</strong>, al sur del departamento del Atlántico, los campesinos cuentan una leyenda tan extraña como aterradora: la de <strong>La Mata de Patilla</strong> (patilla es el nombre costeño para la sandía). Según la tradición, en altas horas de la noche, cuando los habitantes regresan a sus hogares, puede aparecer de repente en medio del camino una <strong>mata de patilla</strong> frondosa, llena de frutos verdes, que antes no estaba allí. No es una planta común: es una <strong>bruja transformada</strong> que busca impedir el paso hacia el lugar donde ella o sus cómplices están realizando rituales oscuros.</p>
    
    <h3>🌿 Enredos y castigos</h3>
    <p>La mata se mueve, <strong>enreda las piernas del caminante</strong> y lo aprieta con fuerza, como si fueran serpientes vegetales. Quien intenta pasar a los lados o por encima queda atrapado entre las ramas, que parecen tener vida propia. Cuentan los ancianos que un joven manatieño, al verse envuelto por la mata, comenzó a <strong>patear las patillas</strong> que colgaban de ella. Con cada patada, la planta se aflojaba un poco, hasta que logró romper una de las frutas. En ese instante, la mata desapareció y el muchacho pudo huir.</p>
    
    <h3>💢 Las moretones de la bruja</h3>
    <p>Al día siguiente, una vecina del pueblo amaneció con <strong>dolores y moretones en todo el cuerpo</strong>, exactamente en los mismos lugares donde el joven había golpeado las patillas. Entonces todos comprendieron: la mujer era la bruja que se había convertido en mata para proteger sus maleficios. Desde entonces, en Manatí se dice que si encuentras una mata de patilla en medio del camino de noche, <strong>no intentes rodearla</strong>: patea las frutas con fuerza. Los golpes que recibas en la planta los recibirá la bruja en su carne.</p>
    
    <h3>👵 Una advertencia sobre la hechicería</h3>
    <p>La leyenda de la Mata de Patilla es un <strong>aviso sobre los peligros de la brujería rural</strong> y la capacidad de las hechiceras para transformarse en elementos del paisaje. También refleja la astucia popular: saber que incluso un ser sobrenatural tiene puntos débiles (las patillas) y que la violencia contra la forma vegetal se traduce en daño real a la bruja. Por eso, los campesinos del Atlántico aún hojean el camino con linterna cuando vuelven tarde a casa.</p>`,
    atributos: [
      "Transformación vegetal",
      "Bloqueo de caminos",
      "Moretones",
      "Brujería",
    ],
    iconos: ["fa-leaf", "fa-watermelon", "fa-fist-raised", "fa-brush"],
  },
  {
    id: "la-casa-del-diablo",
    nombre: "La Casa del Diablo",
    cultura: "Ciénaga, Magdalena",
    region: "caribe",
    imagen: "../img/Criaturas/La-Casa-del-Diablo.webp",
    descripcion_corta:
      "Mansión demoníaca donde el diablo aparece como perro o enano negro.",
    descripcion: `<h3>🏚️ La mansión maldita de Ciénaga</h3>
    <p>En el municipio de <strong>Ciénaga</strong>, puerta de entrada a la Sierra Nevada de Santa Marta, se yergue una imponente mansión conocida como <strong>La Casa del Diablo</strong> (también llamada <strong>Mansión Manuelita</strong>). Construida a principios del siglo XX por el poderoso hacendado <strong>Manuel Varela</strong>, la casona es hoy un lugar temido por todos los habitantes. Nadie se atreve a acercarse después del anochecer, pues aseguran que está <strong>poseída por el mismísimo Satanás</strong>.</p>
    
    <h3>👹 Los pactos de Manuel Varela</h3>
    <p>Cuenta la leyenda que Manuel Varela amasó una fortuna enorme gracias al cultivo de banano, pero su riqueza no era del todo legítima. Los pobladores notaron que <strong>desaparecían trabajadores y niños</strong> cerca de la mansión. Se decía que bajo la casa había un <strong>túnel secreto</strong> que conducía a una cámara donde Varela se reunía con el demonio. Cada noche, el hacendado caminaba por el túnel con una <strong>veladora negra</strong> y un pergamino, ofreciendo <strong>sacrificios humanos</strong> a cambio de poder y dinero.</p>
    
    <h3>🐕‍🦺 Las apariciones demoníacas</h3>
    <p>Tras la muerte de Varela en los años 50, la actividad paranormal no cesó. Los vecinos aseguran escuchar <strong>gritos y llantos desesperados</strong> provenientes del interior de la mansión. Un <strong>fuerte olor a azufre</strong> emana por las puertas y ventanas, y en ocasiones se asoman <strong>ojos rojos</strong> que espían la calle. El diablo se aparece en dos formas: a veces como un <strong>perro negro de gran tamaño</strong>, otras como un <strong>enano negro que sonríe de manera tenebrosa</strong>. Quienes lo han visto quedan aterrados y huyen sin mirar atrás.</p>
    
    <h3>🚫 Un lugar prohibido</h3>
    <p>Los padres de Ciénaga prohíben a sus hijos acercarse a la Casa del Diablo, incluso de día. Algunos curiosos han intentado entrar, pero ninguno ha vuelto a contar la experiencia sin mostrar señales de locura. La leyenda sirve como <strong>advertencia sobre la ambición desmedida</strong> y los pactos con fuerzas malignas. La mansión sigue en pie, testigo mudo de una historia que nadie quiere repetir.</p>`,
    atributos: [
      "Mansión poseída",
      "Sacrificios humanos",
      "Perro negro",
      "Enano negro",
      "Olor a azufre",
    ],
    iconos: ["fa-building", "fa-dog", "fa-child", "fa-skull", "fa-fire"],
  },
  {
    id: "la-ciguapa-caribe",
    nombre: "La Ciguapa",
    cultura: "Sierra Nevada de Santa Marta",
    region: "caribe",
    imagen: "../img/Criaturas/Ciguapa.webp",
    descripcion_corta:
      "Mujer de pies al revés, bella y fatal, que pierde hombres en la montaña.",
    descripcion: `<h3>🌙 La belleza invertida de la Sierra Nevada</h3>
    <p>En las estribaciones de la <strong>Sierra Nevada de Santa Marta</strong>, donde la selva se encuentra con la nieve perpetua, los indígenas kogui y arhuacos, así como los campesinos mestizos, cuentan la leyenda de <strong>La Ciguapa</strong>. Es una mujer de una <strong>belleza sobrenatural</strong>, piel canela, cabello largo y negro, y ojos oscuros y profundos. Pero tiene un rasgo que la delata: sus <strong>pies están volteados hacia atrás</strong>, de modo que sus huellas parecen ir en dirección contraria a la que realmente sigue.</p>
    
    <h3>😵 El hechizo de la soledad</h3>
    <p>La Ciguapa <strong>habita en las partes más apartadas del bosque</strong>, cerca de quebradas y cuevas. Sale al anochecer y atrae a los <strong>hombres solitarios</strong> —cazadores, leñadores o viajeros extraviados— con su silueta y su canto melancólico. El hombre, fascinado por su hermosura, la sigue. Ella camina de espaldas, pero gracias a sus pies invertidos avanza con rapidez. La víctima se adentra cada vez más en la espesura, hasta que <strong>pierde todo sentido de orientación</strong> y termina perdido para siempre. Algunos jamás regresan; otros aparecen días después, desorientados y sin recordar nada.</p>
    
    <h3>🌿 La Ciguapa no es malvada, sino triste</h3>
    <p>Versiones más antiguas de la leyenda —compartidas con República Dominicana y otras islas del Caribe— dicen que la Ciguapa es un <strong>espíritu solitario</strong> que anhela compañía humana, pero su naturaleza sobrenatural la obliga a alejar a quienes la siguen. No mata con violencia, sino con el extravío. Quienes han logrado escapar cuentan que para romper su hechizo hay que <strong>llevar un espejo o un objeto de metal brillante</strong>, pues la Ciguapa huye al ver su propio reflejo invertido.</p>
    
    <h3>👣 Advertencia para los caminantes</h3>
    <p>En la Sierra Nevada, los mayores advierten: <em>"Si ves a una mujer sola en el monte y sus pies parecen mirar hacia atrás, no la sigas. Reza un credo y voltea el rostro. La Ciguapa se alimenta de la soledad de los hombres"</em>. La leyenda protege a las comunidades de internarse imprudentemente en la selva y refuerza el respeto por los seres que habitan los límites entre lo humano y lo espiritual.</p>`,
    atributos: [
      "Pies al revés",
      "Belleza sobrenatural",
      "Extravío",
      "Sierra Nevada",
    ],
    iconos: ["fa-female", "fa-shoe-prints", "fa-mountain", "fa-eye"],
  },
  {
    id: "el-senor-del-monte",
    nombre: "El Señor del Monte",
    cultura: "Baranoa, Atlántico",
    region: "caribe",
    imagen: "../img/Criaturas/El-Señor-del-Monte.webp",
    descripcion_corta:
      "Hombre alto de cabello liso que anuncia huracanes y desastres.",
    descripcion: `<h3>🌩️ El anunciador de tormentas</h3>
    <p>En el municipio de <strong>Baranoa</strong>, en el departamento del Atlántico, los campesinos y las abuelas cuentan la historia de <strong>El Señor del Monte</strong>. Se trata de un hombre de <strong>gran estatura, cabello liso y oscuro</strong>, vestido con ropas sencillas, que aparece de repente en los senderos rurales o en los claros del bosque. No habla mucho; solo se queda mirando fijamente a quien lo encuentra. Pero su presencia es un <strong>augurio funesto</strong>.</p>
    
    <h3>💨 El presagio de huracanes y centellas</h3>
    <p>Los ancianos de Baranoa aseguran que ver al Señor del Monte es señal de que <strong>pronto vendrán desastres naturales</strong>: huracanes, tormentas eléctricas con rayos (centellas), vientos huracanados o inundaciones. Quien lo ve <strong>enferma poco después</strong> con fiebres o malestares inexplicables, y en su familia ocurre alguna desgracia. Una versión recogida directamente de una habitante del lugar narra: <em>"Mi abuela me dijo: 'Apúrate, porque si no el señor del monte te sale, y cuando el señor del monte sale es porque va a ver centellas y huracanes'"</em>. Y así sucedió: tras verlo, una tormenta arrasó con los cultivos.</p>
    
    <h3>😷 Enfermedad y protección</h3>
    <p>No se sabe si el Señor del Monte es un <strong>espíritu vengativo</strong> o un <strong>mensajero de fuerzas mayores</strong>. Los campesinos creen que su aparición es un aviso para que la gente se prepare o para que abandone el campo. Quienes han logrado evitar sus efectos negativos recomiendan <strong>no mirarlo directamente</strong>, sino bajar la vista y rezar una oración. También se lleva un <strong>escapulario o una pepa de cabalonga</strong> para protegerse. Después del encuentro, hay que bañarse con agua de hierbas benditas para alejar la enfermedad.</p>
    
    <h3>🌪️ Un respeto ancestral por la naturaleza</h3>
    <p>El Señor del Monte encarna la <strong>fuerza indómita de la naturaleza</strong>. En el Atlántico, una región plana y expuesta a los huracanes del Caribe, esta leyenda tiene una función práctica: recordar a las comunidades rurales que deben estar atentas a los signos del clima y no desafiar a los elementos. Más que un espanto maligno, es un <strong>augurio necesario</strong> que ha salvado más de una vida al advertir con tiempo la llegada de una tormenta.</p>`,
    atributos: [
      "Hombre alto",
      "Cabello liso",
      "Augurio de tormentas",
      "Enfermedad",
    ],
    iconos: ["fa-male", "fa-cloud-sun", "fa-bolt", "fa-thermometer-half"],
  },

  // ==================== REGIÓN ANDINA ====================

  {
    id: "sombreron",
    nombre: "El Sombrerón",
    cultura: "Antioquia, Tolima, Huila, Valle del Cauca",
    region: "andina",
    imagen: "../img/Criaturas/Sombreron_AND.webp",
    descripcion_corta:
      "Jinete espectral que persigue a trasnochadores y jugadores con su sombrero encantado.",
    descripcion:
      '<h3>🌙 El jinete de la noche andina</h3><p>En las noches más oscuras de los departamentos de Antioquia, Tolima, Huila y el oriente del Valle del Cauca, los caminos solitarios se tornan escenario de un encuentro que ningún trasnochador desearía tener. Se trata del <strong>Sombrerón</strong>, una figura espectral que ha sembrado el terror en la tradición oral colombiana desde tiempos inmemoriales. Algunos lo consideran el espanto más antiguo del departamento de Antioquia, con apariciones documentadas desde 1837, cuando recorría las calles de Medellín durante cuatro o cinco viernes seguidos para luego desaparecer por meses.</p><p>Su descripción física es imponente: un hombre de estatura elevada y contextura corpulenta, vestido completamente de negro, que monta un caballo —o una mula, según algunas versiones— del mismo color sombrío que se confunde con la oscuridad. Su rasgo más distintivo es un sombrero enorme, también negro, cuyas alas son tan amplias que casi le llegan hasta los pies. Bajo el ala del sombrero, algunos testigos aseguran que no hay un rostro humano, sino una calavera de mirada fija y aterradora.</p><h3>🐕 Los guardianes del espanto</h3><p>El Sombrerón nunca viaja solo. A su lado caminan dos enormes perros negros, descritos como mastines, sujetos por gruesas cadenas metálicas que arrastran sobre el suelo emitiendo un sonido inconfundible que anticipa su llegada. El aullido de estos canes, mezclado con el trote del caballo y un viento helado que precede su aparición, conforman una sinfonía de terror que eriza la piel de quienes la escuchan en la soledad de la noche.</p><p>El jinete nocturno no habla con nadie, ni causa daño físico directo a sus víctimas, pero su sola presencia basta para sembrar el miedo más profundo. Aparece y desaparece como por encanto, envuelto en un aura de misterio. Su rostro, descrito como opaco y de expresión hierática, permanece en actitud de observación permanente, como si vigilara a cada persona que se cruza en su camino.</p><h3>⚠️ "Si te alcanzo, te lo pongo"</h3><p>El modus operandi del Sombrerón es tan peculiar como aterrador. Cuando detecta a una víctima potencial —borrachos, jugadores tramposos, peleadores, padres perezosos que utilizan a sus hijos menores para trabajar, trasnochadores empedernidos y todo aquel que lleve un estilo de vida disoluto— comienza a perseguirla implacablemente mientras grita su amenaza característica: <strong>"Si te alcanzo, te lo pongo"</strong>, en referencia a su sombrero.</p><p>Una vez que alcanza a su objetivo, lanza su enorme sombrero hacia él. El sombrero, poseído por un poder sobrenatural, comienza a crecer hasta alcanzar dimensiones descomunales, envolviendo por completo a la víctima. La persona queda atrapada en el interior, presa del terror más absoluto, hasta que finalmente pierde el conocimiento. Acto seguido, el sombrero regresa a su dueño, y el Sombrerón desaparece junto con su caballo y sus perros en medio de un viento helado y nauseabundo, dejando tras de sí a la víctima inconsciente pero, curiosamente, sin ninguna herida física.</p><h3>🏙️ Un espanto con historia</h3><p>La fama del Sombrerón alcanzó su punto más alto durante la primera mitad del siglo XIX, especialmente en la ciudad de Medellín, donde se le conocía como "el espanto propio" de la capital antioqueña. Los relatos de la época cuentan que aparecía con regularidad los viernes por la noche, asustando a los trasnochadores que se atrevían a desafiar la oscuridad. Prefiere los lugares solitarios, las orillas de los caminos y las horas más oscuras, cuando la luna, si acaso brilla, proyecta sombras que confunden al viajero y lo hacen dudar si lo que ve es real o producto de su imaginación.</p><p>En regiones como el Tolima, el Huila y el oriente del Valle del Cauca, se le conoce también como <strong>El Jinete Negro</strong>, manteniendo las mismas características. Aunque su origen permanece envuelto en el misterio —nadie sabe con certeza quién fue en vida o qué lo llevó a convertirse en este espanto—, su función como justiciero nocturno que castiga los excesos y las malas costumbres lo ha convertido en una de las leyendas más arraigadas del folclor andino colombiano.</p><p><em>Dicen los campesinos que si escuchas cadenas arrastrándose en la noche y sientes un viento helado que no es de esta tierra, es mejor que apresures el paso y no mires atrás.</em></p> <p><em>📌 Versión del Sombrerón propia de la región Andina (Antioquia, Tolima, Huila, Valle del Cauca). Es un jinete espectral de gran estatura, vestido de negro, que monta un caballo oscuro, va acompañado de dos perros negros con cadenas y atrapa a sus víctimas (borrachos, jugadores, trasnochadores) lanzándoles su sombrero encantado mientras grita "Si te alcanzo, te lo pongo". En el Caribe, en cambio, es un hombre pequeño vestido de charro que enreda cabelleras y castiga a maltratadores de caballos.</em></p>',
    atributos: [
      "Justiciero nocturno",
      "Sombrero encantado",
      "Perros espectrales",
      "Persecución",
    ],
    iconos: ["fa-moon", "fa-hat-cowboy", "fa-dog", "fa-running"],
  },
  {
    id: "rodillona",
    nombre: "La Rodillona",
    cultura: "Antioquia",
    region: "andina",
    imagen: "../img/Criaturas/Rodillona.webp",
    descripcion_corta:
      "Espectro burlón con apariencia de vieja sentada, la cara entre las piernas y una risa escalofriante.",
    descripcion:
      '<h3>👵 La aparición en los barrancos</h3><p>En los caminos solitarios de Antioquia, especialmente cerca de los barrancos y las hondonadas, los viajeros nocturnos han narrado encuentros con uno de los espantos más grotescos y burlones del folclor andino: <strong>La Rodillona</strong>. No se trata de un alma en pena con una historia trágica conocida, sino de un espectro cuya sola presencia provoca escalofríos y cuya risa es capaz de helar la sangre del más valiente.</p><p>Su apariencia es inconfundible y perturbadora: se presenta como una vieja encorvada, sentada en el suelo o en una roca, con la cara metida entre sus propias piernas. Esta postura tan particular, que le da el nombre, hace que su rostro quede casi oculto, pero lo que se alcanza a ver es suficiente para sembrar el terror. Sus cabellos son largos y completamente grises, despeinados y enmarañados como los de una bruja.</p><h3>👁️ Un rostro de pesadilla</h3><p>Los pocos afortunados (o desafortunados) que han logrado verle el rostro cuentan que sus ojos son de un rojo intenso y brillante, como ascuas encendidas. Su nariz es ganchuda y prominente, similar al pico de un ave rapaz. Pero lo más aterrador es su boca: apenas muestra un solo diente, largo y amarillento, que asoma entre sus labios resecos. Cuando ríe —y ríe con frecuencia— emite una carcajada escalofriante, hueca y burlona, que resuena en la oscuridad y parece venir de todas partes a la vez.</p><p>La Rodillona no suele atacar físicamente a sus víctimas, sino que se limita a observarlas con sus ojos rojos y a reírse de ellas. Sin embargo, a veces muestra una actitud perversa, especialmente con aquellos que la han ofendido o que se burlan de ella. Algunos relatos cuentan que puede lanzar pequeñas piedras, hacer gestos obscenos o incluso perseguir a los caminantes durante unos metros antes de desaparecer.</p><h3>😈 Un espectro burlón</h3><p>El propósito de La Rodillona, más que causar daño, parece ser el de asustar y avergonzar a quienes la ven. Los campesinos antioqueños advierten que si alguien se cruza con ella, lo mejor es no demostrar miedo ni reírse de su apariencia, pues eso podría enfurecerla. Algunos recomiendan rezar una oración o llevar un objeto de protección, como una rama de ruda o un escapulario.</p><p>A diferencia de otros espantos que castigan vicios específicos, La Rodillona parece dirigirse a cualquier persona que transite sola por lugares apartados durante la noche, aunque se dice que tiene predilección por los trasnochadores y los borrachos que se apartan del camino. Su risa, dicen, es una advertencia: quien la escucha debe darse la vuelta y buscar otro sendero, o de lo contrario sufrirá una noche de pesadillas y malos augurios.</p><h3>🌿 Una leyenda viva</h3><p>La Rodillona no tiene una historia de origen clara ni un nombre propio como otras criaturas del bestiario andino. Su leyenda se ha transmitido de generación en generación como un cuento para asustar a los niños que se alejan de casa o para advertir a los jóvenes sobre los peligros de andar solos de noche. Algunos investigadores del folclor la consideran una variante local de las "viejas del monte" o "brujas encorvadas" presentes en muchas culturas del mundo.</p><p>Lo cierto es que, en los pueblos rurales de Antioquia, todavía hay quienes juran haber visto sus ojos rojos brillar entre los arbustos y haber escuchado su risa hueca en medio de la noche. Y mientras exista quien cuente la historia, La Rodillona seguirá sentada en los barrancos, esperando al próximo viajero desprevenido.</p><p><em>"Si vas solo por el camino y oyes una risa que no es humana, no mires hacia los barrancos. La Rodillona te está esperando."</em></p>',
    atributos: [
      "Risa escalofriante",
      "Ojos rojos",
      "Aspecto grotesco",
      "Espanto burlón",
    ],
    iconos: [
      "fa-laugh-squint",
      "fa-eye",
      "fa-hags",
      "fa-face-grin-tongue-squint",
    ],
  },
  {
    id: "mohan-poira",
    nombre: "El Mohán / Poira",
    cultura: "Tolima (río Magdalena)",
    region: "andina",
    imagen: "../img/Criaturas/Mohan_AND.webp",
    descripcion_corta:
      "Brujo acuático que roba peces a los pescadores y seduce mujeres para convertirlas en oro.",
    descripcion:
      '<h3>🌊 El hechicero del río Magdalena</h3><p>En las profundidades del majestuoso río Magdalena, específicamente en el departamento del Tolima, habita uno de los seres más temidos y fascinantes de la mitología andina colombiana: <strong>El Mohán</strong>, también conocido como <strong>Poira</strong>. Se trata de un poderoso brujo que practica artes de hechicería y vive en una cueva cuya entrada está sumergida bajo el agua, accesible solo para quienes conocen sus secretos o son invitados por él.</p><p>Su apariencia física es la de un humano de baja estatura, pero con rasgos que delatan su naturaleza sobrenatural: sus manos y pies son desproporcionadamente grandes, su barba es larga, enmarañada y descuidada, y su mirada tiene un brillo hipnótico que resulta difícil de resistir. Algunas versiones lo describen cubierto de vello o musgo, como si fuera parte del río mismo.</p><h3>🎣 El terror de los pescadores</h3><p>Los pescadores que se aventuran por el río Magdalena conocen bien al Mohán y le temen profundamente. No hay faena tranquila cuando él anda cerca. Con su magia, enreda los anzuelos, roba los peces atrapados en las atarrayas e incluso voltea las canoas, dejando a los hombres nadando entre las aguas oscuras. Algunos cuentan que también provoca tormentas repentinas o calmas inexplicables que impiden la navegación.</p><p>El Mohán no actúa por maldad pura, sino por un sentido de posesión sobre el río y sus recursos. Considera que los peces le pertenecen y que los pescadores son intrusos que deben pagar por su osadía. Por eso, antes de lanzarse al agua, muchos pescadores rezan o dejan ofrendas en la orilla para aplacar su ira y pedir permiso para pescar.</p><h3>💃 El seductor de mujeres</h3><p>Pero si hay algo por lo que el Mohán es realmente temido y conocido, es por su insaciable apetito por las mujeres. Según la leyenda, el brujo acuático utiliza su magia para atraer a las jóvenes que se acercan al río. Lo hace de dos maneras: mediante una música hipnótica que sale de su cueva y que ninguna mujer puede resistir, o presentándose ante ellas con el aspecto de un hombre apuesto y encantador.</p><p>Una vez que la mujer cae en su trampa y entra a la caverna submarina, nunca más se vuelve a saber de ella. El Mohán, usando sus poderes, la transforma en una pieza de oro macizo que pasa a engrosar los incontables cofres de tesoros y joyas que guarda en su morada. Así, su colección no deja de crecer, alimentada por la ingenuidad y la curiosidad de sus víctimas.</p><h3>🏺 El guardián de tesoros</h3><p>Dentro de su cueva submarina, el Mohán acumula riquezas inimaginables: monedas de oro, esmeraldas, joyas preciosas y, sobre todo, las mujeres convertidas en estatuas doradas. Se dice que él mismo es el guardián de estos tesoros, y que cualquier mortal que intente robarlos sufrirá una muerte horrible o será condenado a servirle para siempre.</p><p>El Mohán o Poira es una figura ambivalente: temido por los pescadores, odiado por las familias que han perdido a sus hijas, pero también respetado como dueño y señor del río. Su leyenda sirve como advertencia para quienes se acercan al agua sin respeto, y especialmente para las mujeres jóvenes, a quienes se les enseña desde pequeñas a no confiar en extraños ni dejarse llevar por músicas misteriosas cerca del río.</p><p><em>"Si escuchas una guitarra que sale del agua cuando cae la noche, tapa tus oídos y corre. Es el Mohán, que busca una nueva pieza de oro para su colección." </em> <p><em>📌 Versión del Mohán propia de la región Andina (Tolima), también llamado Poira. En el Caribe es un anciano peludo que fuma tabaco, y en la Orinoquía un gigante guitarrista guardián de los ríos.</em></p></p>',
    atributos: ["Río Magdalena", "Brujería acuática", "Seducción", "Tesoros"],
    iconos: ["fa-water", "fa-magic", "fa-heart", "fa-coins"],
  },

  {
    id: "patetarro",
    nombre: "El Patetarro",
    cultura: "Antioquia (también Chocó entre mineros)",
    region: "andina",
    imagen: "../img/Criaturas/Patetarro.webp",
    descripcion_corta:
      "Espanto minero con una pierna de tarro que esparce un líquido fétido dañando cultivos.",
    descripcion:
      '<h3>⛏️ El minero humillado</h3><p>En las entrañas de las montañas antioqueñas, entre socavones y galerías mineras, nació una de las leyendas más grotescas y malolientes del folclor andino: <strong>El Patetarro</strong>. Todo comenzó con una pelea de machete, de esas que en tiempos pasados dirimían honras y rencores entre hombres rudos. Uno de los contendientes resultó gravemente herido en una de sus piernas. La herida fue tan profunda que la infección no tardó en propagarse, pero no fue el dolor físico lo que lo destruyó, sino la vergüenza. Había perdido delante de todo el pueblo, y su orgullo, más frágil que su hueso, se quebró para siempre.</p><p>Humillado y derrotado, el hombre decidió huir. No soportaba las miradas de compasión ni las risas burlonas de sus vecinos. Se internó en la espesura de la montaña y encontró refugio en el socavón de una mina abandonada. Allí, en la oscuridad y la soledad, su pierna gangrenada empeoró día tras día. Sin nadie que lo auxiliara, sin medicamentos ni remedios, tomó una decisión desesperada: se amputó el miembro infectado con su propio machete.</p><h3>🎋 La prótesis macabra</h3><p>Pero la naturaleza aborrece el vacío, y el minero necesitaba algo que reemplazara la pierna perdida para poder moverse. Halló un tarro de guadua —un grueso segmento de bambú— y lo ató a su muñón a modo de prótesis. Sin embargo, el tarro no era un simple sustituto. Pronto descubrió que podía utilizarlo para otro fin mucho más siniestro: en él comenzó a depositar sus propias necesidades fisiológicas.</p><p>El tarro se convirtió así en un receptáculo de inmundicia, un recipiente de desechos que rebosaba constantemente. De él manaba un líquido blanquecino y espeso, de un olor nauseabundo que atraía moscas y gusanos. El Patetarro —así bautizado por su característica pata de tarro— aprendió a esparcir ese líquido a su paso, como un sembrador de pestilencia.</p><h3>🌾 El castigo de los cultivos</h3><p>Desde entonces, el Patetarro deambula por las zonas rurales de Antioquia y, según algunas versiones, también por los mineros del Chocó. Prefiere los caminos apartados, los bordes de las quebradas y los linderos de las parcelas. Allí donde su líquido blanco toca la tierra, la vida vegetal se extingue. Las plantas se marchitan, los cultivos se pudren y en el suelo brotan gusaneras que devoran cuanto encuentran.</p><p>Los campesinos le temen no por violencia física, sino por la ruina económica que deja a su paso. Una sola noche de visita del Patetarro puede significar la pérdida de toda una cosecha. Además, se dice que su presencia también provoca inundaciones y otros desastres naturales, como si la naturaleza misma rechazara su contacto.</p><h3>😈 La risa perversa</h3><p>El Patetarro no es un ser vengativo en el sentido clásico; más bien parece un castigo andante, una maldición que se arrastra por el territorio. Cuando termina sus fechorías, cuando ha dejado regado su hediondo líquido por potreros y sembrados, entonces emite una risa escalofriante, acompañada de gritos perversos que resuenan en la noche. Algunos aseguran que puede manifestarse tanto en figura masculina como femenina, aunque la versión más extendida es la del minero humillado.</p><p>La leyenda del Patetarro sirve como advertencia sobre la soberbia y la incapacidad de aceptar la derrota. También explica, a su manera, las plagas y las malas cosechas que aquejan a los agricultores. Y mientras haya un campesino que cuente la historia, el Patetarro seguirá arrastrando su tarro maloliente por los caminos de Antioquia.</p><p><em>"Si sientes un olor a podrido que no viene de ningún animal muerto, huye. El Patetarro anda cerca y su líquido blanco no perdona ni los cultivos más sanos."</em></p>',
    atributos: [
      "Prótesis de guadua",
      "Líquido fétido",
      "Muerte de cultivos",
      "Risa perversa",
    ],
    iconos: ["fa-leg", "fa-skull", "fa-seedling", "fa-laugh-squint"],
  },
  {
    id: "maria-la-larga",
    nombre: "María la Larga",
    cultura: "Antioquia, Caldas, Eje Cafetero",
    region: "andina",
    imagen: "../img/Criaturas/Maria-la-larga.webp",
    descripcion_corta:
      "Mujer hermosa que atrae borrachos, se eleva con ellos y los deja caer desde las alturas.",
    descripcion:
      '<h3>🍷 La noche de parranda</h3><p>En los pueblos cafeteros de Antioquia, Caldas y todo el Eje Cafetero, los hombres que se entregan al desenfreno nocturno conocen bien el nombre de <strong>María la Larga</strong>. No es una mujer común, sino un espectro que se aparece en las parrandas, en las madrugadas de ron y cantinas, para llevarse a los borrachos desprevenidos hacia una muerte terrible.</p><p>Cuenta la leyenda que, una noche, un grupo de hombres celebraba animadamente en una fonda. El ron corría y la música no cesaba. De repente, una mujer alta y buenamoza se acercó al grupo. Era tan bella que todos los hombres detuvieron su conversación para admirarla. Ella sonreía con picardía, coqueteaba con la mirada y movía sus caderas al ritmo de la música. No dijo una sola palabra, pero su presencia era más elocuente que cualquier discurso.</p><h3>👁️ El coqueteo fatal</h3><p>Los hombres, cegados por la lujuria y el alcohol, comenzaron a seguirla con la mirada. La mujer, sintiéndose observada, empezó a alejarse del lugar, caminando con pasos lentos y provocadores. Como moscas hacia la miel, los borrachos no pudieron resistirse y la siguieron. Ella los condujo a través de calles oscuras y caminos empedrados, siempre hacia adelante, siempre sin mirar atrás.</p><p>El destino de aquella peregrinación nocturna fue el cementerio del pueblo. Allí, entre tumbas y cruces, la extraña mujer continuó con su actitud festiva, como si la muerte no existiera. Uno de los hombres, el más osado o el más borracho, logró conquistarla. Comenzaron a besarse y abrazarse en medio de las lápidas, mientras el resto del grupo vitoreaba y reía.</p><h3>📈 La revelación y la ascensión</h3><p>Pero el éxtasis duró poco. De repente, la apariencia de la bella mujer cambió por completo. Su rostro se deformó en una máscara de horror, sus ojos se volvieron huecos y de su boca salió un aliento fétido. El hombre que la abrazaba quiso soltarse, quiso huir, pero por más que forcejeó no pudo desprenderse de ella. Sus brazos, convertidos en garras, lo sujetaban con una fuerza sobrehumana.</p><p>Entonces comenzó lo peor. La mujer empezó a elevarse lentamente, llevando consigo al hombre aferrado a ella. Subió y subió, más allá de los árboles, más allá de los tejados, hasta alcanzar la torre de la vieja capilla del cementerio. Allí, en lo más alto, soltó a su víctima. El cuerpo del borracho cayó al vacío y se incrustó en la torre, muriendo en el acto. La figura de María la Larga —pues así se le conoció desde entonces— se alargó desmesuradamente y se desvaneció en la noche oscura.</p><h3>📏 La moraleja de la altura</h3><p>Desde aquel día, los campesinos y parranderos del Eje Cafetero cuentan que María la Larga aparece cada vez que un grupo de hombres bebe sin medida y pierde el respeto por la noche. Su modus operandi es siempre el mismo: se acerca como una mujer hermosa, coquetea, atrae a sus víctimas al cementerio o a algún lugar alto (torres de iglesias, acantilados, puentes) y luego se eleva con uno de ellos para dejarlo caer.</p><p>No todos los que la siguen mueren, advierten los viejos. Algunos logran escapar si rezan una oración o si alguien del grupo se da cuenta del engaño a tiempo. Pero la mayoría sucumbe a su embrujo. María la Larga es, en esencia, una advertencia contra los excesos del alcohol y la lujuria desmedida. Su figura alargada y su capacidad de elevarse simbolizan cómo los vicios pueden levantar a un hombre solo para estrellarlo contra el suelo.</p><p><em>"Si en una parranda ves una mujer alta que te sonríe y se aleja hacia el cementerio, no la sigas. Es María la Larga, y su abrazo es el último que darás."</em></p>',
    atributos: [
      "Transformación",
      "Cementerio",
      "Ascensión fatal",
      "Advertencia",
    ],
    iconos: [
      "fa-venus-mars",
      "fa-church",
      "fa-arrow-up",
      "fa-skull-crossbones",
    ],
  },
  {
    id: "cura-sin-cabeza",
    nombre: "El Cura sin Cabeza",
    cultura: "Antioquia, Tolima, Boyacá",
    region: "andina",
    imagen: "../img/Criaturas/Cura_AND.webp",
    descripcion_corta:
      "Fantasma colonial decapitado que vaga en busca de redención o protegiendo un tesoro.",
    descripcion:
      '<h3>⛪ El pecado oculto</h3><p>En los viejos pueblos coloniales de Antioquia, Tolima y Boyacá, las noches de luna llena traen consigo una aparición que hiela la sangre de los más valientes: <strong>El Cura sin Cabeza</strong>. Se trata de un fantasma que vaga por calles empedradas, plazas desiertas y atrios de iglesias, portando un hábito negro y llevando su cabeza entre las manos o, según otras versiones, completamente decapitado, buscando algo que perdió hace siglos.</p><p>La historia se remonta a los tiempos de la Colonia, cuando los curas párrocos no solo eran guías espirituales, sino también hombres con pasiones y secretos. Uno de ellos, cuyo nombre se ha perdido en la tradición oral, mantenía una relación prohibida con una mujer del pueblo. La lujuria lo había vencido, y el voto de castidad se quebró en una noche de debilidad.</p><h3>🌳 La horqueta fatal</h3><p>Todo ocurrió una madrugada. El cura y su amante se encontraban en la casa de ella, entregados al pecado, cuando escucharon ruidos en la entrada. Presas del pánico, creyeron que era el esposo de la mujer que regresaba inesperadamente. Sin pensarlo dos veces, el cura saltó desde el balcón hacia el patio, buscando escapar. Pero no midió la distancia ni la fuerza. Cayó directamente sobre un árbol que tenía una horqueta —una rama bifurcada y afilada— y esta le cercenó la cabeza de cuajo.</p><p>Lo que el cura y su amante no sabían era que los ruidos no provenían del marido, sino de un ladrón que se había llevado el caballo del cura, el cual estaba atado a la puerta junto a un cofre con pertenencias. El esposo nunca regresó esa noche; fue una falsa alarma que terminó en una tragedia evitable.</p><h3>🕯️ El fantasma arrepentido</h3><p>Desde entonces, el espíritu del cura vaga sin descanso por los pueblos coloniales. Los campesinos cuentan que se le ve aparecer en las noches, especialmente en los atrios de las iglesias y en los caminos que llevan a los antiguos cementerios. Algunos dicen que lleva su cabeza en las manos, como si aún buscara un lugar donde colocarla. Otros aseguran que simplemente es una figura sin cabeza que camina en silencio, con las manos extendidas como pidiendo perdón.</p><p>No ataca a quienes lo ven, sino que más bien inspira una profunda tristeza. Su aparición es un presagio de desgracias, pero también un recordatorio de que los pecados secretos siempre terminan por salir a la luz. Algunas versiones más tardías añaden que el cura sin cabeza protege un tesoro escondido en algún lugar de la iglesia o en las catacumbas del pueblo, y que solo se aparece a quienes son dignos de encontrarlo.</p><h3>🏚️ Una leyenda de la Colonia</h3><p>El Cura sin Cabeza es uno de los espantos más característicos de la tradición colonial andina. Su historia ha sido transmitida por generaciones como un cuento de advertencia sobre los peligros de quebrantar los votos sagrados y dejarse llevar por los deseos carnales. También refleja el miedo ancestral a la muerte súbita y a quedar atrapado entre el cielo y la tierra por un pecado no confesado.</p><p>En algunos pueblos de Boyacá, como Tunja, se dice que el fantasma aparece en las noches de Semana Santa, cuando las almas en pena tienen permiso para recorrer la tierra. En Antioquia y Tolima, en cambio, se le asocia más con los caminos solitarios que conectan pueblos mineros. Pero en todos los casos, el mensaje es el mismo: la conciencia culpable no descansa ni siquiera después de la muerte.</p><p><em>"Si en la noche ves una figura oscura sin cabeza caminando hacia la iglesia, reza un padre nuestro y retírate. Es el alma de un cura que pagó con su vida el precio del pecado."</em></p> <p><em>📌 Versión del Cura sin Cabeza propia de la región Andina (Antioquia, Tolima, Boyacá). Su origen es colonial: un sacerdote que mantenía una relación prohibida murió decapitado al caer en la horqueta de un árbol. Vaga por iglesias y cementerios, inspirando tristeza, y no ataca físicamente. En el Caribe, en cambio, aparece en quebradas y caminos rurales, y suele estar vinculado a apuestas con el diablo o ajusticiamientos indígenas, pudiendo causar pérdida de cordura.</em></p>',
    atributos: [
      "Decapitación",
      "Pecado oculto",
      "Época colonial",
      "Alma en pena",
    ],
    iconos: [
      "fa-church",
      ["fa-cut", "fa-head-side-brain"],
      "fa-landmark",
      "fa-ghost",
    ],
  },
  {
    id: "muelona",
    nombre: "La Muelona",
    cultura: "Zona Andina (tradición campesina)",
    region: "andina",
    imagen: "../img/Criaturas/Muelona.webp",
    descripcion_corta:
      "Espectro con dentadura de fiera que ataca a mujeriegos y borrachos al atardecer.",
    descripcion:
      '<h3>🦷 La sonrisa mortal</h3><p>En los caminos rurales de la región Andina colombiana, cuando el sol comienza a ocultarse tras las montañas y las sombras se alargan, aparece uno de los espantos más temidos por los hombres de mal vivir: <strong>La Muelona</strong>. No es una mujer cualquiera, sino un espectro que se presenta ante sus víctimas como una joven de belleza arrebatadora, cabellera larga y oscura, y una sonrisa hipnótica. Pero esa sonrisa es la antesala de la muerte, pues esconde una dentadura descomunal, propia de una fiera, capaz de destrozar no solo a un hombre, sino también a una vaca o un caballo de un solo mordisco.</p><p>La Muelona tiene una risa ensordecedora y aterradora, una carcajada que retumba en la noche y hace estremecer la zona donde se encuentra. Cuando ríe, muestra todos sus dientes enormes y afilados, como si estuviera celebrando de antemano su próxima víctima. Sus horas preferidas para salir son el atardecer, entre las seis y las nueve de la noche, cuando la penumbra confunde y los caminantes bajan la guardia.</p><h3>💋 La seducción fatal</h3><p>La Muelona no ataca a cualquiera. Sus víctimas predilectas son los jugadores empedernidos, los borrachos, los infieles, los perversos y los adúlteros. Hombres que han hecho del vicio y la traición su forma de vida. A ellos se les aparece en la orilla del sendero o recostada contra el tronco de un árbol, con el aspecto de una mujer bellísima y seductora. Los hombres, cegados por la lujuria, se acercan a ella sin imaginar el peligro.</p><p>Cuando la víctima está lo suficientemente cerca, la Muelona la envuelve en un abrazo aparentemente amoroso. Pero en cuanto los cuerpos se juntan, ella muestra su verdadera naturaleza: abre su enorme boca y hunde sus colmillos en el cuello del infeliz, destrozándolo ferozmente. Los campesinos cuentan que sus mordiscos son tan potentes que pueden partir un hueso como si fuera una rama seca.</p><h3>🃏 El origen: la maga de la colonia</h3><p>La leyenda de La Muelona tiene raíces coloniales. Según los cronistas, en aquellos tiempos llegaron a estas tierras mujeres españolas de dudosa reputación. Una de ellas, conocida como "la Maga", estableció un negocio de magia negra en un pueblo andino. Ofrecía consultas amorosas, desbarataba matrimonios a petición, leía las líneas de la mano y echaba las cartas. Pronto acumuló una gran fortuna gracias a su clientela rica y poderosa.</p><p>Con el dinero, amplió su negocio y abrió un prostíbulo en la propiedad vecina. Allí corrompió a jóvenes inocentes, arruinó a hombres adinerados, disolvió hogares y sembró enfermedades venéreas. Su cuerpo, sin embargo, no resistió el ritmo desenfrenado de la vida que llevaba. Se llenó de úlceras y murió en una dolorosa soledad, sin nadie que la llorara.</p><h3>🏚️ El nacimiento del espanto</h3><p>Cuentan que, la noche de su muerte, la casa donde vivía se llenó de un olor nauseabundo que obligó a todos a abandonarla. Una mujer, antigua favorita de la difunta, decidió quedarse a recoger algunas pertenencias de valor. Cuando apagó la vela para dormir, una bandada de vampiros invadió la estancia y una voz cavernosa resonó en el dormitorio: <em>"¡Tengo que vengarme de los hombres jugadores y perniciosos, malditos! ¡De las mujeres livianas y desvergonzadas! ¡Estarán conmigo en el infierno! ¡Soy la Muelona!"</em></p><p>La mujer escapó gateando de terror y contó lo sucedido. Las autoridades prendieron fuego a la casa maldita para dar paz a los vecinos. Pero el espíritu de la Maga no descansó. Desde entonces, La Muelona vaga errante por caminos y bosques, buscando hombres insanos y mujeres desvergonzadas para destrozarlos con sus aterradores dientes. Los campesinos dicen que los hogares que se libran de ella son aquellos donde hay niños recién nacidos o mujeres embarazadas, pues su mal no puede cruzar la inocencia.</p><p><em>"Si al atardecer ves a una mujer hermosa que te sonríe mostrando todos sus dientes, corre. No es una sonrisa de amor, es el aviso de La Muelona."</em></p>',
    atributos: ["Dentadura letal", "Seducción", "Vicios", "Origen colonial"],
    iconos: ["fa-tooth", "fa-heart-broken", "fa-dice", "fa-landmark"],
  },
  {
    id: "mandiga",
    nombre: "El Mandiga",
    cultura: "Bogotá, Tolima, Antioquia",
    region: "andina",
    imagen: "../img/Criaturas/Mandiga.webp",
    descripcion_corta:
      "Una representación del demonio que prefiere las casas de juego y los lugares de vicio, visto como protector por los perversos.",
    descripcion:
      '<h3>😈 El otro Satanás</h3><p>En las calles oscuras de Bogotá, los barrios bravos de Antioquia y los pueblos calientes del Tolima, se habla en voz baja de <strong>El Mandiga</strong>. No es un espanto cualquiera, sino una representación del demonio mismo, considerado por muchos como "otro Satanás". Los campesinos y citadinos que han tenido la desgracia de cruzarse con él cuentan que aparece en las noches más profundas, siempre en lugares donde el vicio y la perdición son los dueños de la fiesta.</p><p>Su aspecto es el de un hombre alto y corpulento, vestido con ropas oscuras que parecen fundirse con la sombra. Tiene los ojos brillantes y rojizos, como ascuas encendidas, y casi siempre se le ve con un cigarro o pitillo en la boca, cuyo humo exhala en espirales que se enredan en el aire nocturno. Camina sin prisa, con paso firme, como si fuera el dueño de cada callejuela que pisa.</p><h3>🎲 El protector de los viciosos</h3><p>El Mandiga no persigue a los pecadores para castigarlos, como hacen otros espantos. Al contrario, prefiere las casas de juego, las cantinas, los burdeles y todos los lugares donde se fraguan malas acciones. Allí, los perversos y los degenerados lo ven como su protector, como un aliado invisible que les da suerte en las apuestas o los ayuda a salir airosos de sus fechorías.</p><p>Se dice que en las mesas de naipes y dados, cuando la suerte cambia de bando de manera inexplicable, es porque el Mandiga está presente. Los jugadores tramposos le rezan en secreto, le ofrecen parte de sus ganancias y le piden protección contra la justicia o contra los maridos engañados. Pero el Mandiga no regala nada. Quienes recurren a él terminan pagando un precio mucho más alto que el dinero: su alma.</p><h3>🚬 Una presencia familiar</h3><p>A diferencia de otros espantos que huyen de la luz y la oración, el Mandiga no parece tenerle miedo a nada. Los pocos que lo han visto de cerca aseguran que desprende un olor a azufre mezclado con tabaco rancio, y que su sombra no se comporta como debería: a veces se alarga desmesuradamente, otras veces se parte en dos o simplemente desaparece. Cuando habla —pues a veces habla— su voz es grave y ronca, como si viniera de lo más profundo de un pozo.</p><p>No todos pueden ver al Mandiga. Solo los que están sumergidos en el vicio o los que han hecho pactos implícitos con él logran percibir su presencia. Para el resto de los mortales, simplemente pasa desapercibido, una sombra más entre tantas. Pero los campesinos advierten que si alguna vez sientes un frío repentino en un lugar de juego, y ves a un hombre alto fumando en una esquina que no conocías, es mejor salir de ahí antes de que sea demasiado tarde.</p><h3>⚖️ La dualidad del mal</h3><p>El Mandiga representa esa faceta del demonio que no asusta ni aterra, sino que seduce y protege. Es el diablo que se disfraza de aliado, el que ofrece su mano a los caídos y los levanta solo para hundirlos más profundamente después. Los curanderos y rezanderos de la región andina recomiendan, ante la sospecha de su presencia, rezar un credo o persignarse con agua bendita. Pero los jugadores empedernidos, en cambio, lo invocan en secreto, esperando que suerte y protección caigan sobre ellos.</p><p>La leyenda del Mandiga ha viajado de pueblo en pueblo, adaptándose a cada región, pero manteniendo su esencia: es el diablo de los vicios, el guardián de las casas de juego, el "otro Satanás" que prefiere la compañía de los perversos. Y mientras haya quien apueste su alma por una mano de cartas, él seguirá ahí, fumando en la penumbra, esperando.</p><p><em>"Si en una noche de tragos ves a un desconocido que fuma en la esquina y te ofrece un cigarro, no lo aceptes. Puede ser el Mandiga, y su tabaco sabe a azufre y condenación."</em></p>',
    atributos: [
      "Demonio",
      "Casas de juego",
      "Protector de perversos",
      "Cigarro eterno",
    ],
    iconos: ["fa-fire", "fa-dice-d6", "fa-hand-holding-heart", "fa-smoking"],
  },
  {
    id: "perro-san-francisco",
    nombre: "El Perro de San Francisco",
    cultura: "Tunja, Boyacá",
    region: "andina",
    imagen: "../img/Criaturas/Perro-san-francisco.webp",
    descripcion_corta:
      "Estatua de piedra que cobra vida por las noches, arrastra cadenas y tiene ojos de fuego.",
    descripcion:
      '<h3>🏛️ El centinela de piedra</h3><p>En la ciudad de Tunja, capital del departamento de Boyacá, existe una leyenda que ha helado la sangre de sus habitantes desde la época colonial. Se trata de <strong>El Perro de San Francisco</strong>, una imponente estatua de piedra que durante siglos ha vigilado el antiguo convento de San Francisco y, más tarde, el batallón Bolívar. Pero cuando cae la noche y las campanas marcan la medianoche, la fría piedra cobra vida y se convierte en una pesadilla para quienes osan caminar por sus cercanías.</p><p>El perro de piedra no era una escultura decorativa cualquiera. Los cronistas de la época cuentan que fue labrado por manos indígenas bajo la dirección de frailes españoles, y que desde el primer día tuvo algo extraño, algo que no encajaba del todo. Sus ojos, tallados en una piedra más oscura, parecían seguir al transeúnte allá por donde pasara. Su boca, entreabierta, dejaba ver unos colmillos que más que ornamentales parecían funcionales.</p><h3>🔥 Ojos de fuego y cadenas</h3><p>Según la tradición oral de Tunja, en la madrugada —cuando la ciudad duerme y solo los serenos recorren las calles empedradas— el perro de piedra despierta. Sus ojos de granito se encienden como dos brasas, emitiendo un resplandor rojizo que ilumina la fachada del convento. Entonces comienza a arrastrar unas cadenas invisibles, cuyo sonido metálico resuena en el silencio como un presagio de muerte.</p><p>Los antiguos habitantes de Tunja aseguraban haberlo escuchado aullar y ladrar terriblemente, con una furia que no era de este mundo. Sus ladridos, huecos y cavernosos, se mezclaban con el eco de las cadenas y el viento que silbaba entre los arcos del convento. Quienes se atrevían a pasar cerca, atraídos quizás por el ruido o forzados por el camino, se topaban con la bestia de piedra, que los encaraba con sus ojos llameantes y los espantaba de vuelta a sus casas.</p><h3>⚔️ Del convento al batallón</h3><p>Con el paso del tiempo, el convento de San Francisco fue desamortizado y el edificio pasó a ser ocupado por el batallón Bolívar. La estatua del perro fue trasladada o permaneció en el lugar, pero la leyenda no murió. Los soldados que hacían guardia nocturna en el cuartel también reportaron avistamientos: una sombra canina que recorría el patio, el brillo de dos ojos rojos en la oscuridad, el sonido de patas sobre las losas cuando no había ningún perro vivo en la zona.</p><p>Algunos más escépticos intentaron explicar los fenómenos como trucos de la mente o exageraciones de la gente sencilla. Pero los más viejos, los que conocen la historia de Tunja piedra por piedra, sostienen que el perro de San Francisco sigue ahí, atrapado entre la vida y la piedra, condenado a velar por el antiguo convento hasta el fin de los tiempos.</p><h3>🐕 Una leyenda que perdura</h3><p>El Perro de San Francisco es uno de esos relatos que mezclan lo histórico con lo sobrenatural. No es un espanto que castigue vicios ni que busque venganza; es más bien un guardián, un centinela eterno que protege lo que fue sagrado. Algunos dicen que su aparición anuncia la muerte de algún personaje importante de la ciudad; otros creen que simplemente espanta a los curiosos que se acercan a husmear donde no deben.</p><p>Hoy en día, pocos tunjanos se atreven a caminar solos por las cercanías del batallón Bolívar en las madrugadas. Y aunque la estatua original quizás ya no esté en el mismo lugar, la leyenda sigue viva en la memoria colectiva. El Perro de San Francisco, con sus ojos de fuego y sus cadenas, sigue siendo uno de los íconos del folclor boyacense.</p><p><em>"Si pasas por Tunja en la madrugada y oyes ladridos que vienen de una estatua de piedra, no te detengas. Corre y no mires atrás, porque los ojos de fuego ya te vieron."</em></p>',
    atributos: [
      "Estatua de piedra",
      "Ojos de fuego",
      "Cadenas",
      "Época colonial",
    ],
    iconos: ["fa-dog", "fa-fire", "fa-chain", "fa-landmark"],
  },
  {
    id: "patasola",
    nombre: "La Patasola",
    cultura: "Tolima Grande, Córdoba",
    region: "andina",
    imagen: "../img/Criaturas/Patasola.webp",
    descripcion_corta:
      "Alma en pena de una mujer infiel, convertida en monstruo de una sola pierna que ataca a los hombres en la selva.",
    descripcion: `<h3>💔 La mujer que pagó con su vida la infidelidad</h3>
        <p>En las espesas selvas y montañas de la región Andina —especialmente en Tolima, Caldas, Huila y Cauca—, y también en el departamento de Córdoba en el Caribe, los campesinos y leñadores susurran con temor el nombre de <strong>La Patasola</strong>. Su historia, transmitida de generación en generación, narra la tragedia de una mujer que pagó con su vida el precio de la traición y cuya alma en pena vaga por los bosques buscando venganza.</p>
        <p>Cuenta la leyenda que en una región del Tolima Grande vivía una mujer de belleza incomparable, casada con un campesino trabajador con quien tenía tres hijos. El esposo se dedicaba a vender las cosechas del patrón, un hombre rico y poderoso de la hacienda. Aprovechando las frecuentes ausencias del marido, el patrón comenzó a cortejarla con piropos y regalos, y ella, débil ante sus atenciones, le fue correspondiendo poco a poco.</p>
        
        <h3>🗡️ El descubrimiento y la venganza</h3>
        <p>Los vecinos, al darse cuenta de los amoríos, le contaron todo al campesino. Herido en su orgullo y consumido por los celos, el marido fingió una nueva salida a vender cosechas fuera del pueblo, pero en realidad se escondió cerca de la casa. Al anochecer, irrumpió en la vivienda y encontró a los amantes abrazados en la cama. Cegado por la ira, desenvainó su machete y, de un solo golpe, le cortó la cabeza al patrón. La mujer, horrorizada, intentó huir, pero el enfurecido esposo le asestó un machetazo que le amputó una de sus piernas, causándole la muerte casi instantáneamente.</p>
        <p>El campesino, sin pensarlo dos veces, prendió fuego al rancho donde vivían y huyó de la región llevándose a sus hijos. Al atardecer, el alma de la mujer, convertida ya en La Patasola, regresó al lugar donde había vivido, saltando con dificultad sobre su única pierna. En una mezcla de arrepentimiento y furia, su espíritu se transformó en un monstruo malvado y horroroso que lanza tenebrosos gritos por sierras, cañadas y caminos, destilando sangre y profiriendo lamentos lastimeros.</p>
        
        <h3>👹 La apariencia del terror</h3>
        <p>El aspecto físico de La Patasola es aterrador. Se caracteriza por tener una sola pierna, que termina en forma de pezuña. Su cabellera es larga, enmarañada y desordenada, a menudo cubriendo gran parte de su rostro. Posee pequeños ojos de tigresa que brillan intensamente con un fulgor diabólico, una boca grande y descomunal, y unos colmillos enormes y afilados como los de una fiera. Sus uñas son largas y puntiagudas, semejantes a garras, que usa para desgarrar a sus víctimas. A pesar de su cojera, es extremadamente ágil y puede moverse a gran velocidad a través de bosques y montañas.</p>
        <p>Pero su rasgo más siniestro es su capacidad de transformación. Cuando acecha a un hombre solitario en medio de la selva, se presenta ante él como una mujer bellísima, de mirada hipnotizante y provocativa silueta, ataviada con ropas elegantes. Así lo atrae y lo seduce, llevándolo hacia lo profundo de la oscuridad. Pero una vez que la víctima está a su merced, revela su verdadera y horrible apariencia: sus ojos se encienden como brasas, su boca muestra todos sus colmillos, y su rostro se deforma en una máscara de muerte, momento en el que ataca ferozmente.</p>
        
        <h3>🌿 El espíritu vengador de la selva</h3>
        <p>La Patasola es un espíritu errante y vengativo que actúa en solitario. Prefiere los lugares aislados: selvas impenetrables, montañas escarpadas, matorrales espesos y orillas de quebradas. Se aparece principalmente a los hombres que transitan solos por estos parajes, especialmente a los cazadores, leñadores, mineros y viajeros. Sus víctimas predilectas son los hombres infieles, los mujeriegos, los perversos, los que maltratan a sus esposas, y aquellos que se internan en la selva sin respeto por la naturaleza.</p>
        <p>Se dice que La Patasola es una especie de vampiro feroz con un gran apetito de carne y sangre humana, capaz de atacar, devorar o chupar la sangre de sus víctimas. Sin embargo, también cumple una función de protectora de la naturaleza y los animales del bosque, y no perdona a los seres humanos que osan penetrar en sus dominios para alterarlos o destruirlos. Es, por tanto, una figura ambivalente: una castigadora de infieles y una guardiana de la selva.</p>
        <p>En la región Caribe, especialmente en Córdoba, los campesinos también cuentan su historia con los mismos detalles, advirtiendo a los hombres infieles que no se internen solos en el monte.</p>
        <p><em>"Si en medio de la montaña ves a una mujer hermosa que te sonríe y te llama, desconfía. Puede ser La Patasola, que busca una nueva víctima para calmar su sed de venganza."</em></p>`,
    atributos: ["Una sola pierna", "Transformación", "Infidelidad", "Venganza"],
    iconos: ["fa-leg", "fa-mask", "fa-heart-broken", "fa-fist-raised"],
  },
  {
    id: "madremonte",
    nombre: "La Madremonte",
    cultura:"Andina (Caribe y Amazonía)",
    region: "andina",
    imagen: "../img/Criaturas/Madremonte.webp",
    descripcion_corta: "Guardiana de la naturaleza y los animales, castiga a quienes dañan el medio ambiente y a los hombres infieles.",
    descripcion: `<h3>🌳 La dueña de la selva</h3>
        <p>En las profundidades de las selvas y montañas de Antioquia, los Andes centrales y occidentales, y los valles de los ríos Magdalena y Cauca —y también en las regiones Caribe y Amazónica de Colombia—, los campesinos y leñadores hablan con respeto y temor de <strong>La Madremonte</strong>. No es un simple espanto, sino una deidad protectora, una manifestación de la propia naturaleza que castiga sin piedad a quienes osan dañarla. Su origen se remonta a antiguas deidades indígenas sudamericanas que representaban a la Madre Tierra, y su figura tiene paralelismos con otras protectoras de la naturaleza como la Pachamama andina.</p>
        
        <p>La descripción de La Madremonte varía según la región y la versión del relato, pero todos coinciden en su aspecto imponente y sobrecogedor. Unos la describen como un monstruoso ser femenino cubierto de musgos, ramas y bejucos, con ojos encendidos como brasas. Otros la ven como una mujer joven, hermosa, elegante y alta, vestida con ramajes y plantas frescas. También hay quien la describe como una anciana huesuda de largas extremidades, envuelta en hojas. Un rasgo común en muchas versiones es que su rostro permanece oculto, ya sea por un sombrero cubierto de hojas y plumas verdes o porque simplemente no se puede ver.</p>
        
        <h3>💧 La dueña de las tormentas</h3>
        <p>La Madremonte no solo protege la selva, sino que tiene poder sobre el clima y la vegetación. Se aparece en sitios pantanosos y zonas selváticas profundas cuando hay grandes tempestades, lanzando grandes alaridos que se sobreponen a los truenos. Los campesinos atribuían la turbiedad de ríos y quebradas a La Madremonte, que se bañaba en ellos durante las inundaciones y borrascas, causando desbordamientos y daños espantosos.</p>
        
        <p>Su presencia anuncia desastres naturales: cuando se baña en las cabeceras de los ríos, estos se enturbian y se desbordan, provocan inundaciones y borrascas fuertes. También maldice con plagas los ganados de los propietarios que usurpan terrenos ajenos o cortan los alambrados de los colindantes. A los que andan en malos pasos, les hace ver una montaña inasequible e impenetrable, o una maraña de juncos o arbustos difíciles de pasar, borrándoles el camino y sintiendo un mareo del que no se despiertan sino después de unas horas, convenciéndose de no haber sido más que una alucinación.</p>
        
        <h3>🪓 La castigadora implacable</h3>
        <p>La función principal de La Madremonte es la de guardiana de la selva y los animales. Persigue y castiga a cazadores, aserradores y pescadores codiciosos que abusan de los recursos naturales. También se ensaña con los esposos infieles, los que pelean por los límites de las propiedades, los perversos, los desleales y los vagabundos. A todos ellos los atrae con sus gritos hacia las zonas boscosas, los pierde en las selvas, y en ocasiones incluso se lleva a los niños que se adentran solos en su territorio.</p>
        
        <p>Para librarse de sus acometidas, los campesinos recomiendan diversas estrategias: ir fumando un tabaco, llevar un bejuco de adorote amarrado a la cintura, portar pepas de cabalonga en el bolsillo o una vara recién cortada de cordoncillo de guayacán. También sirve llevar escapularios y medallas benditas, o ir rezando la oración de San Isidro Labrador, abogado de los montes y de los aserríos. Pero lo más importante es enfrentársele cara a cara, azotándola con ramas de tabaco y sin demostrarle ningún temor.</p>
        
        <h3>🌎 Una leyenda que trasciende fronteras</h3>
        <p>La figura de La Madremonte es tan poderosa que su leyenda ha trascendido las fronteras colombianas. Es conocida en otros países de Sudamérica como Brasil, Argentina y Paraguay con nombres como Madreselva, Fantasma del monte y Madre de los cerros. En Colombia, se la ha relacionado con la diosa Dabaibe de los pueblos catío, nutabae y chocoe, cuyo poder divino se centraba en los bosques, ríos y huracanes de la región del Atrato.</p>
        
        <p>En el Caribe colombiano (Bolívar, Córdoba, Sucre) y en la Amazonía (Caquetá, Guaviare), los campesinos también cuentan su historia con los mismos detalles, advirtiendo a los leñadores y cazadores que respeten el monte si no quieren sufrir su ira.</p>
        
        <p><em>"Si adentrándote en la selva sientes un viento frío que no es de este mundo y escuchas un alarido que sobrepasa los truenos, ha llegado La Madremonte. Pide perdón por tus pecados y abandona el monte si quieres conservar la vida."</em></p>`,
    atributos: ["Protectora", "Naturaleza", "Tormentas", "Castigo"],
    iconos: ["fa-tree", "fa-leaf", "fa-cloud-rain", "fa-gavel"],
  },
  {
    id: "llorona-andina",
    nombre: "La Llorona",
    cultura: "Tolima Grande, Región Andina",
    region: "andina",
    imagen: "../img/Criaturas/llorona_AND.webp",
    descripcion_corta:
      "Alma en pena de una mujer que llora eternamente a sus hijos, presagiando muerte y castigando a quienes atentan contra la vida.",
    descripcion:
      "<h3>👻 El llanto eterno</h3><p>En las noches oscuras de los cafetales del Tolima Grande y en toda la región Andina colombiana, los campesinos han escuchado un sonido que hiela la sangre: el lamento desgarrador de <strong>La Llorona</strong>. No es una simple leyenda, sino una presencia aterradora que vaga por ríos, quebradas y caminos solitarios, buscando algo que perdió para siempre y que nunca podrá recuperar.</p><p>La versión andina de La Llorona tiene sus propias características distintivas. Quienes la han visto, cuentan que viste con un vestido de muchos colores que le tapa todo su cuerpo hasta los pies descalzos. Su cabello es muy largo, en una mezcla de colores negro, plateado y dorado. En su cabeza se posan grillos, luciérnagas y mariposas, como si la naturaleza misma la reclamara. Pero lo más sobrecogedor es su rostro: su cara es como la de una calavera, y sus ojos son rojizos. Sus manos son muy grandes, y en ellas carga un bebé muerto, su hijo, por quien llora todo el tiempo desconsoladamente.</p><h3>💧 La historia de una madre arrepentida</h3><p>La historia de La Llorona en Colombia, particularmente en la región del Tolima, está profundamente vinculada al arrepentimiento y al castigo. La leyenda más extendida narra que fue una mujer indígena que se enamoró de un caballero español. Con él tuvo tres hijos, pero al ver que por cuestiones sociales no podían casarse, la indignación y la desesperación la llevaron a ahogar a sus tres hijos en el río. Arrepentida al instante, su alma quedó condenada a vagar eternamente buscándolos sin encontrarlos nunca.</p><p>Otra versión, más cercana a la tradición del Tolima Grande, cuenta que durante la guerra civil, en tiempos del presidente José Ignacio de Márquez, un capitán de conducta poco recomendable se instaló en la Villa de las Palmas o Purificación con su esposa. Las circunstancias de la guerra llevaron a que la esposa cometiera el terrible acto de acabar con la vida de su propio hijo, y desde entonces su alma no encuentra descanso. Sea cual sea el origen, el mensaje es el mismo: La Llorona es el alma en pena de una mujer que mató a sus hijos y ahora sufre por ello eternamente.</p><h3>⚠️ La castigadora de los infanticidas</h3><p>A diferencia de otras versiones latinoamericanas donde La Llorona asusta a los niños o a los hombres en general, en la región Andina colombiana tiene un objetivo muy específico. Esta mujer fantasma ataca solo a las parteras, médicos y enfermeras que ayudan a las mujeres embarazadas a acabar con la vida de sus bebés antes de nacer. También ataca a los hombres que dejan embarazadas a mujeres jóvenes solteras y que luego las abandonan cuando nace su bebé.</p><p>Se aparece principalmente en lugares solitarios, desde las ocho de la noche hasta las cinco de la mañana. Sus sitios preferidos son las quebradas, lagunas y charcos profundos, donde se oye el chapaleo y los desgarradores quejidos. Se les aparece a los hombres infieles, a los perversos, a los borrachos, a los jugadores y a todo ser que ande tramando maldades. Cuando La Llorona habla, solo pide una cosa: que se respete la vida, sobre todo la de los que están por nacer.</p><h3>🕯️ Una advertencia y un castigo</h3><p>Dice la tradición que La Llorona también puede reclamar de las personas ayuda para cargar al niño muerto. Quien acepta cargarlo se libra del castigo, pero la Llorona desaparece, y la persona que lo recibió se convierte entonces en la nueva Llorona, condenada a vagar con el niño en brazos para siempre. Por eso, cuando se escucha su lamento en la noche, los campesinos recomiendan no acercarse, no hacer caso a sus llamados y, sobre todo, no ofrecerse a cargar al niño.</p><p>La Llorona de los Andes colombianos es, ante todo, una figura trágica. Su llanto interminable no solo causa terror, sino también una profunda tristeza. Es el recordatorio eterno de que la vida de un hijo es sagrada, y que quien atente contra ella, ya sea por despecho, por conveniencia o por abandono, cargará con una condena peor que la muerte: la de vagar por la eternidad sin encontrar paz.</p><p><em>\"Si en la noche oyes un llanto que viene del río y una voz que grita '¡Ay mis hijos!', no te acerques. Es La Llorona, que busca a alguien que cargue su cruz.\"</em></p> <p><em>📌 Versión de La Llorona propia de la región Andina (Tolima Grande). En el Caribe se le representa con vestiduras andrajosas, rostro huesudo y ojos rojos; su lamento es presagio de muerte y se aparece a infieles, borrachos y niños desobedientes.</em></p>",
    atributos: [
      "Lamento eterno",
      "Bebé muerto",
      "Arrepentimiento",
      "Castigo divino",
    ],
    iconos: ["fa-sad-tear", "fa-baby", "fa-heart-broken", "fa-cross"],
  },
  {
    id: "duende-andino",
    nombre: "El Duende",
    cultura: "Zona Andina (Antioquia, Eje Cafetero, Tolima, Huila)",
    region: "andina",
    imagen: "../img/Criaturas/Duende.and.webp",
    descripcion_corta:
      "Ser travieso de baja estatura, seductor de mujeres jóvenes y amante de la música, que disfruta jugando bromas a los humanos.",
    descripcion:
      '<h3>🎸 El ángel caído convertido en duende</h3><p>En los lugares más apartados de la región Andina colombiana, donde hay guaduas, árboles muy altos y fincas lejanas, los campesinos saben que deben tener cuidado con las travesuras de <strong>El Duende</strong>. No es un espanto maligno que busque matar, sino un ser travieso, a veces juguetón y otras veces peligroso, que disfruta molestando a los humanos, especialmente a las mujeres jóvenes y a los niños.</p><p>La leyenda cuenta un origen fascinante para este ser. Se dice que el duende era uno de los ángeles preferidos por Dios en el cielo, donde tocaba el arpa entre las nubes. Pero un día se portó mal, desobedeció las órdenes divinas, y fue expulsado del cielo y mandado al infierno. Desde entonces, convertido en duende, vaga por la tierra recordando su antigua pasión por la música. Por eso, los duendes sienten una atracción irresistible por los instrumentos musicales, especialmente por las guitarras y los tiples.</p><h3>😈 Un ser de dos caras</h3><p>El aspecto físico del duende varía según las regiones, pero todos coinciden en que es un ser pequeño, de baja estatura, a menudo vestido con ropas oscuras y un sombrero grande que le cubre parte del rostro. En algunas versiones se le describe como un hombre viejo y arrugado; en otras, como un ser peludo y de aspecto salvaje. Pero lo que más lo caracteriza es su capacidad de transformación: puede aparecer como un joven apuesto, como un viejo campesino o como un artista con guitarra, dependiendo de a quién quiera engañar.</p><p>Su comportamiento es igualmente cambiante. Cuando se enamora de una muchacha —y esto le sucede con frecuencia— se mete a la casa para molestarla. Se acomoda a su lado en la cama por las noches, la pellizca, la toca, la muerde y no la deja dormir. Las mujeres víctimas de sus asedios cuentan que sentían a un hombre junto a ellas, pero cuando prendían la luz, no había nadie. También lanza piedras a las casas como si lloviera con terrones, y disfruta especialmente molestando a los niños, invitándolos a jugar con él en medio del bosque hasta altas horas de la noche, para luego dejarlos perdidos, arañados, sucios, con hambre, fiebre y alergias en todo el cuerpo.</p><h3>🎶 La trampa de la música</h3><p>Otra de las características más conocidas del duende es su afición por la música. Se dice que un duende guitarrista suele aparecerse en las noches para atraer a las jovencitas con sus melodías. Algunas versiones cuentan que ha llegado a llevarse a mujeres jóvenes, que luego eran encontradas con el rostro y la parte frontal del cuerpo llenos de babas, señal de que el duende las había estado "endulzando" o embrujando. Por eso, los campesinos advierten a las muchachas que no se dejen llevar por músicas misteriosas que salen del bosque.</p><p>Pero los duendes también tienen sus debilidades, y los campesinos han descubierto la manera de ahuyentarlos. Cuenta una famosa leyenda que un señor de apellido Pantoja tenía dos hijas a las que el duende perseguía sin descanso. Desesperadas, consultaron a un vecino, quien les recomendó dejar un tiple bien templado sobre una mesa en la habitación de las mujeres. En la noche, el duende llegó, vio el tiple que sonaba solo y, atraído por la música, se acercó. Al amanecer, el tiple había desaparecido, pero el duende nunca volvió. Desde entonces, se dice que para espantar a los duendes es necesario tocar un tiple bien templado al son de las vacas que llaman.</p><h3>⚠️ Una advertencia para los curiosos</h3><p>Aunque el duende no suele matar a sus víctimas, sus travesuras pueden tener consecuencias graves. Hay historias de hombres que, atraídos por la música de un duende guitarrista, aceptaron intercambiar sus instrumentos y terminaron desapareciendo o siendo encontrados inconscientes y transformados, con el cuerpo cubierto de pelos y piel de animales, marcados para siempre por el encuentro sobrenatural. Por eso, los campesinos recomiendan no confiar en extraños que aparecen de la nada ofreciendo regalos o música, y tener siempre a mano un tiple bien templado para ahuyentar a estos traviesos seres.</p><p>El duende es, en esencia, un recordatorio de que no todo lo que parece inofensivo lo es, y de que la curiosidad y la vanidad pueden llevar a situaciones peligrosas. Es un ser que vive al borde de lo real y lo fantástico, esperando a la próxima víctima desprevenida para jugarle una broma que tal vez nunca olvide.</p><p><em>"Si en la noche oyes una guitarra que sale de la nada y ves a un hombre pequeño con sombrero que te sonríe, no te acerques. Es el duende, que busca alguien a quien endulzar."</em></p>',
    atributos: ["Travesuras", "Seducción", "Música", "Transformación"],
    iconos: ["fa-guitar", "fa-child", "fa-music", "fa-mask"],
  },

  // ==================== REGIÓN PACÍFICO ====================

  {
    id: "la-tunda",
    nombre: "La Tunda",
    cultura: "Nariño, Valle del Cauca",
    region: "pacifico",
    imagen: "../img/Criaturas/La-Tunda.webp",
    descripcion_corta:
      "Espíritu del bosque que se transforma en un ser querido para raptar a sus víctimas.",
    descripcion: `<h3>🌿 La perezosa que se fue al monte</h3>
      <p>Cuentan los abuelos del Pacífico colombiano que la Tunda fue alguna vez una mujer joven, perezosa y grosera, que decidió alejarse de la casa de sus padres para vivir en la espesura de la selva. Allí, con el paso del tiempo, su cuerpo se transformó en el de una criatura monstruosa: viste camisa, falda y sombrero, pero tiene un pie de madera en forma de molinillo que no puede ocultar ni cambiar. Su piel despide un olor peculiar y su canto, un insistente "tul, tul, tul", anuncia su presencia en cangrejales, naidizales y cocales.</p>
      
      <h3>🎭 La maestra del engaño</h3>
      <p>La Tunda posee una facultad aterradora: puede tomar la apariencia física de un ser querido de su víctima. Si desea raptar a un niño, se transforma en su madre; si busca a un hombre guapo o enamoradizo, adopta el rostro de su esposa o hermana. De esta forma, la desafortunada persona la sigue monte adentro sin oponer resistencia, creyendo que va junto a un familiar. La Tunda desvía los caminos y confunde los sentidos, de modo que la víctima pierde toda noción de orientación y no puede regresar por sus propios medios.</p>
      
      <h3>🦐 El entundamiento y los camarones peídos</h3>
      <p>Una vez que la Tunda tiene a su rehén en el corazón de la selva, lo alimenta con "camarón peído": camarones que han recibido el aroma de sus propios pedos. Este vil manjar sumerge a la víctima en un profundo trance conocido como <strong>entundamiento</strong>. La persona queda como sonámbula, con los ojos grandes y saltones, el cuerpo arañado, espumando por la boca y comportándose como un animal salvaje. En ese estado, es incapaz de huir o reconocer a sus verdaderos seres queridos.</p>
      
      <h3>🙏 El rescate del entundado</h3>
      <p>La tradición oral enseña que sí es posible rescatar a quien ha caído bajo el poder de la Tunda. Los padrinos de la víctima, acompañados por un sacerdote, deben internarse en la selva con velas prendidas, agua bendita, bombos y cununos. Allí deben rezar el Padre Nuestro y el Credo, mientras gritan insultos y cantan: <em>"¡Tunda, suelta a ese muchacho, busca a tu marido!"</em>. Solo así la criatura abandona a su presa y permite que sea devuelta a su hogar. Desde entonces, en las riberas del Pacífico se recomienda a los niños obedecer a sus padres y a los hombres no dejarse seducir por extrañas apariciones en el monte.</p>`,
    atributos: [
      "Transformación",
      "Entundamiento",
      "Pie de molinillo",
      "Camarón peído",
    ],
    iconos: ["fa-mask", "fa-brain", "fa-shoe-prints", "fa-fish"],
  },
  {
    id: "el-riviel",
    nombre: "El Riviel",
    cultura: "Pacífico nariñense",
    region: "pacifico",
    imagen: "../img/Criaturas/El-Riviel.webp",
    descripcion_corta:
      "Alma en pena de un sacerdote hereje que navega en una tabla y chupa los sesos de los pescadores.",
    descripcion: `<h3>⛪ El sacerdote que quemó el rosario</h3>
      <p>En tiempos antiguos, un sacerdote llamado Riviel —o Reivige, según algunas versiones— cometió una herejía imperdonable: por pura ociosidad y desprecio a lo sagrado, quemó un rosario. Dios lo castigó convirtiéndolo en un espectro condenado a vagar eternamente por los ríos, esteros y el mar Pacífico. Desde entonces, se aparece en las noches de luna menguante flotando sobre una mochila, una tabla vieja o cualquier objeto a la deriva. En el mar se sube a las olas; en el río navega de arriba abajo, montándose y bajándose de su improvisada embarcación con gritos de alegría macabra.</p>
      
      <h3>🔦 La luz azul que encandila</h3>
      <p>Los pescadores nocturnos reconocen la presencia del Riviel por una luz de color azul que lleva en la proa de su tabla, como un farol fatuo que los encandila. Al acercarse, divisan a un hombre de piel oscura, casi como un enano, cuyo rostro nunca logran distinguir. De su cuerpo emana un olor a carne podrida. El Riviel aborda a los navegantes con una pregunta sencilla y engañosa: <em>"Amigo, ¿cómo está la pesca?"</em>. Si el pescador responde, siente que su potrillo (embarcación pequeña) se vuelve pesado e imposible de mover, como si una fuerza sobrenatural lo anclara al fondo.</p>
      
      <h3>🧠 El succionador de sesos</h3>
      <p>La peor faceta del Riviel es su apetito por el cerebro humano. Quienes han tenido la desgracia de caer en su trampa y no logran escuchar los rezos protectores, son encontrados días después con el cráneo totalmente vacío. El Riviel los deja a la deriva, confundidos y sin memoria, o directamente los mata succionándoles los sesos. También se dice que disfruta hundiendo embarcaciones y que, si el navegante lo ignora, el espectro redobla su furia, desorientando la brújula y la carta de navegación hasta el amanecer.</p>
      
      <h3>🕯️ Cómo ahuyentar al Riviel</h3>
      <p>La sabiduría ancestral ha transmitido la única forma de protegerse de este espanto. Al ver la luz azul o escuchar su pregunta, el pescador debe gritar con firmeza: <em>"¡Andate a la punta de un cuerno y sobre vos candela!"</em>, y rezar el rosario o el Credo. Los abuelos cuentan que don Casimiro, una madrugada en que divisó al Riviel con una cruz como canalete, pronunció esas palabras y el espectro desapareció al instante. Desde entonces, en las bocanas y riberas del Pacífico, nadie sale a pescar de noche sin llevar un rosario en el bolsillo y la oración en la lengua.</p>`,
    atributos: [
      "Luz azul",
      "Succión de sesos",
      "Luna menguante",
      "Tabla flotante",
    ],
    iconos: ["fa-lightbulb", "fa-skull", "fa-moon", "fa-water"],
  },
  {
    id: "la-madre-de-agua",
    nombre: "La Madre de Agua",
    cultura: "Nariño, Cauca, Chocó y Valle del Cauca",
    region: "pacifico",
    imagen: "../img/Criaturas/La-Madre-de-Agua.webp",
    descripcion_corta:
      "Ninfa creada por brujos que ahoga a sus víctimas y se mete en sus estómagos.",
    descripcion: `<h3>🧙 La oscura creación de los brujos</h3>
      <p>A diferencia de otras ninfas acuáticas, la Madre de Agua del Pacífico colombiano no es un ser de la naturaleza espontáneo, sino una <strong>creación deliberada de los brujos</strong>. Según cuentan los abuelos de El Charco y La Tola, los hechiceros lanzaban un hechizo a los ríos para dar vida a esta visión, con el fin de dañar a quienes tomaban cosas ajenas o cometían malas acciones. Con el tiempo, los brujos perdieron el control sobre su criatura, y la Madre de Agua empezó a aparecer por su cuenta en ríos, quebradas y lagos, tendiendo trampas a todo incauto que se acercara.</p>
      
      <h3>🦆 De pato gigante a doncella hermosa</h3>
      <p>La Madre de Agua tiene dos formas principales. La más común es la de un <strong>pato de gran tamaño</strong>, con el que nada sigilosamente junto a las embarcaciones pequeñas (potrillos) o en las orillas. Pero su apariencia más peligrosa es la de una <strong>doncella de belleza inigualable</strong>: cabellera negra o rubia, ojos azules hipnotizadores y pies volteados hacia atrás, de modo que quien sigue sus huellas se desorienta por completo. En esta forma, atrae a niños y hombres con su canto dulce y tierno, o con ramos de flores blancas que brillan en la oscuridad.</p>
      
      <h3>🤰 La víctima que se hincha con la marea</h3>
      <p>Lo más macabro de esta leyenda es lo que ocurre después de la captura. Una vez que la Madre de Agua atrapa a su víctima —generalmente hombres o niños desobedientes—, <strong>se introduce en su estómago</strong>. A partir de ese momento, el cuerpo del desafortunado queda ligado al ritmo de las mareas: cuando la marea sube, la barriga de la víctima se hincha como un globo; cuando la marea baja, se deshincha lentamente. Los pescadores aseguran que los cuerpos nunca emergen del fondo, pues la Madre de Agua los mantiene cautivos en sus viviendas de obsidiana y coral, en lo profundo de los ríos.</p>
      
      <h3>🙏 Testimonios y prevenciones</h3>
      <p>Doña Fidelina, una abuela de la región, contó que una noche, mientras bogaba con sus amigas, vieron a un hombre con la barriga enorme que se quejaba en la orilla. Supieron entonces que era víctima de la Madre de Agua. El hermano de la profesora Nayely también estuvo a punto de ser arrastrado por ella mientras se bañaba en el río; solo el auxilio oportuno de sus amigos y las oraciones del Credo lo salvaron. Por eso, en el Pacífico se enseña a los niños a nunca bañarse solos en el río, a obedecer a sus padres y a rezar cuando escuchen un canto extraño o vean a una hermosa mujer de pies al revés. Como reza la copla popular: <em>"Cuando vayas para el río, fija bien qué encontrarás, de pronto a una Madre de Agua que te vaya a embrujar"</em>.</p>`,
    atributos: [
      "Ninfa fluvial",
      "Pato gigante",
      "Hinchazón por marea",
      "Creación de brujos",
    ],
    iconos: ["fa-feather-alt", "fa-female", "fa-chart-line", "fa-magic"],
  },

  {
    id: "la-cucuragua",
    nombre: "La Cucuragua",
    cultura: "La Tola, El Charco (Nariño)",
    region: "pacifico",
    imagen: "../img/Criaturas/La-Cucuragua.webp",
    descripcion_corta:
      "Mujer hermosa de pelo largo que seduce a los hombres en el río para arrancarles el corazón.",
    descripcion: `<h3>💇‍♀️ La dama de la orilla</h3>
    <p>En las riberas de los ríos del Pacífico nariñense, especialmente en los municipios de La Tola y El Charco, merodea un ser conocido como la Cucuragua. Los pescadores y campesinos la describen como una mujer de una belleza hipnótica, de larga cabellera que le cae hasta la cintura. Se sienta en las orillas peinándose o se baña en las quebradas, mostrando su silueta entre los manglares. Su apariencia es tan perfecta que cualquier hombre que la ve cree encontrarse ante una mujer común y corriente, y se acerca seducido por su encanto.</p>
    
    <h3>❤️ La seducción mortal</h3>
    <p>La Cucuragua no necesita forzar a nadie. Su estrategia es la más antigua y efectiva: la tentación. El hombre, al verla, siente una atracción irrefrenable. Quiere verle la cara, hablarle, tocarla. Pero cuando finalmente logra acercarse lo suficiente, la visión lo envuelve en un embrujo. La víctima pierde el conocimiento justo en el momento en que la Cucuragua le abre el pecho con sus afiladas uñas y le <strong>arranca el corazón</strong>. Luego lo devora allí mismo, con una tranquilidad espeluznante, mientras el cuerpo del infortunado se desangra en la orilla.</p>
    
    <h3>🔥 El hambre de carbón encendido</h3>
    <p>La Cucuragua no solo acecha en los ríos. También tiene la costumbre de visitar los ranchos y campamentos de los trabajadores del monte en busca de <strong>carbón encendido</strong>. Los leñadores y mineros que pasan la noche en la selva saben que si al despertar encuentran el fogón limpio y sin brasas, la Cucuragua ha estado allí. Ella come carbón caliente, y deja tras de sí solo cenizas frías. Algunos ancianos cuentan que también puede entrar en las casas y llevarse el corazón de quienes sueñan con ella, por lo que recomiendan nunca contar esta historia a los niños antes de dormir.</p>
    
    <h3>🌲 La Cucuragua del monte</h3>
    <p>Este espanto no es exclusivo del agua. También aparece en la espesura de la selva, donde se lleva a los hombres que trabajan solos. Una de las historias más terribles es la de Tirófilo, un joven que fue a cortar naidy con su padre y su hermano Casimiro. Mientras se bañaba en el río, vio a una mujer idéntica a su esposa. Se acostó con ella en su hamaca, y al amanecer su padre despertó cubierto de sangre que goteaba desde arriba. Tirófilo yacía muerto, con el pecho abierto. La Cucuragua también alcanzó al padre. Solo Casimiro sobrevivió para contar la historia. Para ahuyentarla, los abuelos recomiendan rezar el Credo o cantar alabanzas, pues el agua bendita y la fe son las únicas armas contra esta devoradora de corazones.</p>`,
    atributos: [
      "Cabello largo",
      "Devora corazones",
      "Come carbón",
      "Seducción mortal",
    ],
    iconos: ["fa-female", "fa-heart", "fa-fire", "fa-moon"],
  },
  {
    id: "el-duende-pacifico",
    nombre: "El Duende",
    cultura: "Nariño, Valle del Cauca, Cauca, Chocó",
    region: "pacifico",
    imagen: "../img/Criaturas/El-Duende-Pacifico.webp",
    descripcion_corta:
      "Ser pequeño con sombrero grande, enamorado de vírgenes, toca guitarra y enseña a pelear.",
    descripcion: `<h3>😈 El ángel desterrado</h3>
    <p>En las tradiciones del Pacífico colombiano, el Duende es un ser mágico que habita en lugares solitarios: campos, laderas, valles y montañas. Los ancestros cuentan que alguna vez fue un ángel de Dios, pero por desobediente fue expulsado del cielo. Desde entonces, vaga por la Tierra como un fantasma tentador, poniendo a prueba a los mortales con su astucia y su carácter caprichoso. Su apariencia es la de un hombre pequeño, de rasgos indígenas, que usa un sombrero enorme y a menudo fuma un tabaco igualmente grande.</p>
    
    <h3>🎸 El enamorado de las doncellas</h3>
    <p>El Duende siente una fascinación especial por las mujeres vírgenes. Se acerca a ellas en la noche, les deja frutas, flores y hasta monedas de oro debajo de la almohada. Si la muchacha corresponde a sus atenciones, él la seduce con su guitarra, tocando melodías del litoral que hipnotizan a quien las escucha. Luego la lleva al monte, donde la acaricia o la golpea si se resiste. Cuando se aburre de ella, la abandona en lo alto de un árbol, desde donde debe ser rescatada por sus familiares. Las jóvenes que han caído en su poder suelen quedar "privadas", es decir, en estado de shock, sin recordar nada.</p>
    
    <h3>👊 El maestro de la pelea y la guitarra</h3>
    <p>El Duende también es conocido por su destreza en dos artes muy distintas: la música y la lucha. Enseña a tocar la guitarra a quien se atreva a seguirlo, pero si el alumno no hace lo que él quiere, lo priva y lo deja espumiando por la boca. También reta a los hombres valientes a pelear. Al principio se muestra pequeño, pero a medida que el adversario crece en furia, el Duende aumenta su tamaño hasta igualarlo. Si el hombre vence al duende, este lo convertirá en un virtuoso de la guitarra; si es derrotado, recibirá una paliza que le dolerá por semanas.</p>
    
    <h3>🇨🇴 Cómo espantar al Duende</h3>
    <p>Cuando el Duende llega a una fiesta, los asistentes sienten que la casa se mueve como si temblara. Los músicos de marimba conocen el único remedio infalible: deben tocar el Himno Nacional. Al sonar las primeras notas, el Duende huye despavorido. También funciona rezar el Credo o el "rezo de criszajio" (oración del profeta Isaías). Los abuelos advierten que no se debe desafiar al Duende sin preparación espiritual, pues su poder es grande. Como reza una copla: <em>"La forma de desterrarlo / es con el Himno Nacional"</em>.</p>`,
    atributos: [
      "Sombrero grande",
      "Guitarra",
      "Enamorado de vírgenes",
      "Peleador",
    ],
    iconos: ["fa-hat-cowboy", "fa-guitar", "fa-heart", "fa-fist-raised"],
  },
  {
    id: "el-descabezado",
    nombre: "El Descabezado",
    cultura: "La Tola, El Charco (Nariño)",
    region: "pacifico",
    imagen: "../img/Criaturas/El-Descabezado.webp",
    descripcion_corta:
      "Hombre alto, elegante y sin cabeza que silba en la noche y espanta hasta matar.",
    descripcion: `<h3>🎩 El caballero sin cabeza</h3>
    <p>En las noches de La Tola y El Charco, especialmente durante los tiempos santos (Semana Santa y festividades religiosas), los pobladores temen encontrarse con una visión aterradora: un hombre alto, elegante y bien vestido, que camina con las manos en los bolsillos y silba suavemente. Su porte es distinguido, casi señorial. Pero cuando uno se acerca, descubre con horror que <strong>no tiene cabeza</strong>. Bajo el cuello solo hay un vacío oscuro, un muñón que no sangra, y sin embargo el cuerpo sigue andando, erguido, impecable, como si nada le faltara.</p>
    
    <h3>🗡️ El español decapitado</h3>
    <p>Los abuelos cuentan que el Descabezado es el alma en pena de un español que fue decapitado en tiempos de la esclavitud. Algunos dicen que era un terrateniente cruel que mandaba a azotar a sus esclavos; otros, que fue un militar que cometió atrocidades durante la Colonia. Su castigo eterno es vagar sin cabeza por las mismas tierras donde hizo sufrir a otros. No habla, solo silba. Y su silbido, lejano al principio, se va haciendo más cerca a medida que la víctima se acerca a él.</p>
    
    <h3>😵 La privación del susto</h3>
    <p>El encuentro con el Descabezado es casi siempre fatal. La persona que lo ve siente un escalofrío que le recorre todo el cuerpo. La cabeza se le hincha imaginariamente, las piernas se le aflojan y cae al suelo en un ataque de nervios. Quienes han sobrevivido cuentan que quedan "privados": espumando por la boca, temblando, incapaces de hablar durante días. Algunos incluso mueren del susto en el acto. El marido de la prima de un vecino de La Tola —como reza el testimonio recogido— vio al Descabezado una noche al volver de una fiesta. Gritó con tanta fuerza que los vecinos salieron y lo encontraron tirado en el piso, sin poder articular palabra.</p>
    
    <h3>🌙 Respeto a la noche</h3>
    <p>La lección que deja el Descabezado es clara: las noches no son para los vivos, sino para los espíritus. Los ancestros enseñan que hay que respetar la oscuridad y no desafiar las horas santas caminando solo por los caminos desolados. Si alguien escucha un silbido en la madrugada y no hay nadie más a su alrededor, debe persignarse y rezar el Credo sin mirar atrás. Porque el Descabezado no persigue a quien lo respeta; solo atrapa a los osados que se atreven a buscarlo. Como dice la copla: <em>"Mamá, no tiene cabeza", el tío Pedro decía / Veníamos de una fiesta donde la tía María</em>.</p>`,
    atributos: [
      "Sin cabeza",
      "Silbido mortal",
      "Elegante",
      "Alma en pena colonial",
    ],
    iconos: ["fa-user-tie", "fa-music", "fa-skull", "fa-crown"],
  },

  {
    id: "el-marabeli",
    nombre: "El Marabelí",
    cultura: "Litoral Pacífico",
    region: "pacifico",
    imagen: "../img/Criaturas/El-Marabeli.webp",
    descripcion_corta:
      "Buque fantasma de luces multicolores que navega en Semana Santa tripulado por almas en pena.",
    descripcion: `<h3>🚢 El barco de luces en la niebla</h3>
    <p>En las noches de Semana Santa, cuando la marea está baja y la luna apenas asoma entre los manglares, los pescadores del Pacífico colombiano cuentan que a veces aparece una visión aterradora: un hermoso barco, iluminado con luces de todos los colores, que navega sin hacer ruido entre los esteros y las bocanas. Es el <strong>Marabelí</strong>, un buque fantasma cargado de almas en pena. Algunos dicen que solo se escucha el sonido de su paso; muy pocos han logrado ver sus luces de cerca, y los que lo han hecho aseguran que es una embarcación tan bella como aterradora, adornada como para una fiesta pero con un silencio sepulcral.</p>
    
    <h3>📜 La lista de los condenados</h3>
    <p>Lo más escalofriante del Marabelí es su rutina. El barco recorre ríos y esteros del litoral llevando una lista de nombres. En voz alta, un capitán invisible llama a cada nombre, y una multitud de espectros responde al unísono "presente" o "ausente". Los pobladores de La Tola y El Charco aseguran que si el barco responde "presente" a un nombre, esa persona ya ha muerto; pero si responde "ausente", significa que está viva y que el barco volverá por ella en el futuro. Se dice que el Marabelí será visto en todo su esplendor el día que muera el último integrante que falta por aparecer en la lista.</p>
    
    <h3>🌕 Testimonios de ultratumba</h3>
    <p>En una noche sin luna, tres hombres conversaban frente a una fogata en las playas de la isla Gorgona, cuando de repente brotó de las brumas un barco adornado con luces de Navidad. Era el Marabelí. El pescador más viejo, con una botella de viche en la mano, apuró un trago y sin moverse dijo: <em>"Es el Marabelí buscando sus almas en pena. ¡Hay que rezar el credo!"</em>. Uno de los hombres juró que oyó patentico cómo una voz de ultratumba llamaba por su nombre y apellido al alcalde del pueblo. Otro aseguró que el barco era hermoso, de un silencio más bello todavía, y que apenas lo vio, la cabeza se le puso tan grande que no pudo hablar. El tercero, acostumbrado a verlo, explicó que el Marabelí anda buscando a algún negro pecador o que tal vez alguien del pueblo estaba a punto de morir y por eso vino a recoger su alma.</p>
    
    <h3>⛓️ El barco de la memoria africana</h3>
    <p>Una vieja de carcajada festiva, mientras vendía pescado frito, contó que su abuela —que en paz descanse— le decía que el Marabelí era un buque donde transportaban negros africanos a los mares y ríos del Chocó, Cauca y Nariño. Esos fantasmas, decía, nos vienen a recordar que somos mitad africanos y mitad de estas tierras. Nos vienen a decir que no podemos permitir que los muchachitos de ahora metan al cajón de los olvidos las normas e historias de los viejos. Por eso, cuando el Marabelí aparece, los sabios se persignan y rezan el Credo, porque es la única forma de alejar al maligno y honrar la memoria de los ancestros. Como reza la copla: <em>"No hagamos lo indebido / o que no tenga buen fin, / para no andar en la lista / del barco Marabelí"</em>.</p>`,
    atributos: [
      "Luces de colores",
      "Lista de nombres",
      "Semana Santa",
      "Almas en pena",
    ],
    iconos: ["fa-ship", "fa-list", "fa-church", "fa-ghost"],
  },
  {
    id: "el-quejador-del-agua",
    nombre: "El Quejador del Agua",
    cultura: "El Charco, La Tola, Barbacoas",
    region: "pacifico",
    imagen: "../img/Criaturas/Quejador-del-Agua.webp",
    descripcion_corta:
      "Un pescador castigado por Dios, emite quejidos de vaca anunciando calamidades.",
    descripcion: `<h3>🐮 El bramido que anuncia desgracias</h3>
    <p>En las bocanas y riberas de los ríos del Pacífico nariñense, especialmente durante la Semana Santa, se escucha un sonido aterrador: un quejido hondo, grueso y lastimero, parecido al mugido de una vaca, que resuena en la noche sin que se vea a nadie. Es el <strong>Quejador del Agua</strong>, un pescador que Dios castigó por sus pecados y condenó a penar eternamente por los ríos y mares. Cuando se le oye quejar, los abuelos afirman que en esos días habrá alguna calamidad: una creciente, un naufragio o la muerte de algún vecino. Su lamento es un presagio, una advertencia que pocos se atreven a ignorar.</p>
    
    <h3>🐸 Una vaca con cabeza humana</h3>
    <p>La apariencia del Quejador es tan confusa como aterradora. Hay varias versiones sobre su forma: algunos dicen que toma la figura de una vaca enorme que vaga por las orillas; otros aseguran que se parece a una rana gigante que salta entre los manglares; los más atrevidos, incluso, afirman que es una criatura con cuerpo de vaca y cabeza humana, o viceversa, un hombre con cabeza de vaca. Lo que todos coinciden es que sus quejidos son inconfundibles y que su sola presencia hiela la sangre de quien lo escucha. Como reza la copla: <em>"Con cuerpo como de gente / y su cabeza de vaca, / asusta a los pobladores / en todas nuestras bocanas"</em>.</p>
    
    <h3>🙏 El susto de la abuela Fidelina</h3>
    <p>Una noche, la abuela Fidelina venía bogando con unas amigas tras pasar la tarde cangrejiando. Era tarde, pero había luna y la noche estaba iluminada. Pasaron por un barranco y vieron de repente a un hombre con cabeza de vaca. El susto de todas fue muy grande, pero cuando oyeron los terribles berridos que emitía aquella criatura quedaron paralizadas. Por suerte, Fidelina recordó las enseñanzas de sus mayores: se persignaron y se unieron todas para rezar el Credo con todas sus fuerzas. Poco a poco, los quejidos se fueron alejando hasta desaparecer en la espesura. Desde entonces, en el Pacífico se recomienda no navegar solo en Semana Santa y llevar siempre un rosario a mano.</p>
    
    <h3>⚠️ El castigo divino</h3>
    <p>Los abuelos cuentan que el Quejador del Agua no siempre fue un monstruo. En vida fue un pescador que cometió tantas fechorías que Dios, cansado de sus maldades, lo convirtió en este ser híbrido, condenado a vagar por siempre en las aguas que antes surcaba con su potrillo. Su castigo es anunciar las desgracias que él mismo provocó en vida. Por eso, cuando los pescadores escuchan su quejido, saben que deben volver a tierra firme, rezar y encomendarse a Dios, porque el Quejador del Agua no perdona a los que se atreven a desafiarlo. Como reza la copla: <em>"Ese Quejador del Agua / es un hombre aburrido, / que anda por todos los mares, / en los puertos y los ríos"</em>.</p>`,
    atributos: [
      "Quejidos de vaca",
      "Cabeza humana",
      "Semana Santa",
      "Anuncia calamidades",
    ],
    iconos: ["fa-cow", "fa-user", "fa-church", "fa-skull"],
  },
  {
    id: "el-bracamonte",
    nombre: "El Bracamonte",
    cultura: "litoral Pacífico colombiano",
    region: "pacifico",
    imagen: "../img/Criaturas/El-Bramaconte.webp",
    descripcion_corta:
      "Criatura invisible de bramidos aterradores que se repele con calavera de vaca.",
    descripcion: `<h3>🌲 El rugido de la espesura</h3>
    <p>En las profundidades de las selvas del Chocó y el Valle del Cauca, existe una de las leyendas más oscuras del Pacífico colombiano: el <strong>Bracamonte</strong>. Nadie, absolutamente nadie, ha visto jamás a esta criatura. No se sabe si tiene forma humana, animal o es algo completamente distinto. Pero lo que todos los habitantes de la región saben, con un terror que se transmite de generación en generación, es que el Bracamonte existe. Su presencia se anuncia con formidables bramidos que retumban en la espesura, sobre todo en las noches de tormenta, cuando el viento azota los árboles y la lluvia golpea los techos de zinc.</p>
    
    <h3>😱 El terror del ganado</h3>
    <p>Los bramidos del Bracamonte son tan terroríficos que el ganado, al escucharlos, huye despavorido hacia las casas o se aglomera detrás de los peones en busca de protección. Algunos animales incluso convulsionan o se desploman del susto. Los campesinos cuentan que la criatura devora a cualquiera que se cruce en su camino, y que sus rugidos pueden oírse a kilómetros de distancia, como un aviso de muerte. No importa si es día o noche, si hay luna llena o tormenta: cuando el Bracamonte ruge, todos los seres vivos se quedan en silencio, paralizados por el miedo.</p>
    
    <h3>💀 La protección de la calavera</h3>
    <p>Afortunadamente, la sabiduría ancestral ha encontrado una forma de protegerse de este espanto. Los abuelos enseñan que el Bracamonte le tiene pánico a las calaveras de vaca. Por esta razón, los campesinos clavan una estaca en el límite de sus propiedades y colocan en ella una calavera de vaca bien visible, amarrada con bejucos. Algunos incluso cuelgan varias calaveras alrededor de sus bohíos. Mientras la calavera esté allí, el Bracamonte no se atreverá a cruzar. Se dice que la criatura no sale del bosque precisamente porque teme encontrarse con los restos de sus propias víctimas.</p>
    
    <h3>🔮 Un misterio sin resolver</h3>
    <p>A pesar de los siglos de tradición oral, nadie ha podido describir el aspecto del Bracamonte. Algunos especulan que podría ser un animal anfibio que vive a orillas de los ríos, otros creen que es el espíritu de un antiguo cacique que murió en batalla, y los más escépticos piensan que es solo el rugido de una fiera desconocida. Pero los pobladores del Chocó no necesitan pruebas. Saben que el Bracamonte es real porque lo han oído, porque sus animales se han espantado, porque sus abuelos les enseñaron a colocar la calavera en la estaca. Y mientras las selvas del Pacífico sigan en pie, el Bracamonte seguirá rugiendo en la noche, recordando a los vivos que hay misterios que la ciencia aún no puede explicar.</p>`,
    atributos: [
      "Invisible",
      "Bramidos terroríficos",
      "Teme calaveras",
      "Noches de tormenta",
    ],
    iconos: ["fa-eye-slash", "fa-dragon", "fa-skull", "fa-bolt"],
  },

  {
    id: "la-sirena-del-arco",
    nombre: "La Sirena del Arco",
    cultura: "litoral Pacífico colombiano",
    region: "pacifico",
    imagen: "../img/Criaturas/La-Sirena-del-Arco.webp",
    descripcion_corta:
      "Reina del mar con cuerpo de pez, cola de ave, puñal y cetro de oro. Enloquece con su canto.",
    descripcion: `<h3>👑 La reina de los palacios submarinos</h3>
    <p>En las profundidades del Océano Pacífico, frente a las costas de Tumaco, Nariño, habita una criatura de belleza sobrecogedora: la <strong>Sirena del Arco</strong>. Los pescadores y buzos más temerarios cuentan que sus dominios son palacios construidos con cristales, joyas y piedras preciosas, donde ella reina con un puñal en una mano y un cetro de oro en la otra. Lleva una máscara que oculta parte de su rostro, y su figura es una mezcla fantástica: cabeza y busto de mujer, cuerpo de pez escamado y cola de ave. Nada de manera fantasmagórica, como un sueño hecho de espuma y misterio.</p>
    
    <h3>💎 Los poderes de las piedras mágicas</h3>
    <p>La Sirena del Arco no solo es hermosa, sino que posee un conocimiento ancestral sobre el poder de las gemas. Los abuelos cuentan que cada piedra preciosa de su palacio tiene una facultad mágica: el <strong>ágata</strong> fortifica el espíritu; la <strong>amatista</strong> conserva la castidad; la <strong>esmeralda</strong> cuida la belleza; el <strong>ónice</strong> trae felicidad a los enamorados; la <strong>perla</strong> salva el alma; el <strong>rubí</strong> ahuyenta la tristeza; el <strong>berilio</strong> da alegría; la <strong>calcedonia</strong> desterra la melancolía; el <strong>granate</strong> otorga poder victorioso; el <strong>zafiro</strong> brinda constancia; y la <strong>turquesa</strong> asegura prosperidad. Quien lograra obtener una de estas gemas sería bendecido para siempre, pero pocos se atreven a descender al reino de la sirena.</p>
    
    <h3>🎵 El canto que enloquece a los navegantes</h3>
    <p>La Sirena del Arco sale de sus palacios en las noches de luna llena. Se acerca a las playas solitarias, se sienta en las rocas cubiertas de caracolas y comienza a entonar cantos sagrados, poesías de amor con una voz dulce y armónica que conmueve al cielo y a la tierra. Los marineros y pescadores que la escuchan quedan hipnotizados. Sienten una atracción irresistible hacia el mar, y sin darse cuenta, se sumergen en las aguas adormecidos por la voz de la sirena, solo para despertar en el fondo del océano, ahogados, convertidos en parte de su cortejo de almas perdidas. Ella simboliza la tragedia, la tristeza, la melancolía y el remordimiento de quienes se dejan atrapar por los placeres físicos.</p>
    
    <h3>🐋 La danza con las ballenas jorobadas</h3>
    <p>Otros relatos, más asombrosos aún, aseguran que la Sirena del Arco ha sido vista nadando junto a las ballenas jorobadas que peregrinan por el Pacífico colombiano. En esas noches mágicas, las ballenas se unen a ella y, juntas, arrastran las embarcaciones ancladas hacia lo más profundo, llevándose a los marinos como ofrendas. También se dice que la sirena hace bailar a las parejas de enamorados en la playa, con un ritmo que surge de las olas, y que aquellos que han logrado verla sin caer en su hechizo cuentan que su mirada es triste, como si ella misma estuviera condenada a vagar eternamente entre dos mundos, sin pertenecer del todo a ninguno. Algunos pescadores juraban haberla visto solitaria en la playa, mirando el horizonte, esperando quizás un amor que nunca llegará.</p>`,
    atributos: [
      "Cuerpo de pez",
      "Cola de ave",
      "Cetro y puñal",
      "Canto mortal",
    ],
    iconos: ["fa-fish", "fa-dove", "fa-crown", "fa-music"],
  },
  {
    id: "la-viuda-pacifico",
    nombre: "La Viuda",
    cultura: "Nariño, Valle del Cauca",
    region: "pacifico",
    imagen: "../img/Criaturas/La-Viuda.webp",
    descripcion_corta:
      "Mujer joven, alegre y coqueta que ahuyenta a pretendientes codiciosos con falsas deudas.",
    descripcion: `<h3>💃 La viuda más elegante del Pacífico</h3>
    <p>En los pueblos bohemios del Pacífico colombiano, especialmente en Nariño y el Valle del Cauca, corre la historia de una viuda muy particular. No es un alma en pena que llora en los cementerios, ni una aparecida que asusta a los viajeros. Todo lo contrario: es una mujer <strong>joven, alegre, hermosa y coqueta</strong>, de abundante cabellera, cejas delineadas, perfectamente maquillada, pestañas postizas y labios colorados. Lleva aretes, collar de perlas, gargantilla de oro, manilla áurea, pulsera de plata, anillos de diamante y un reloj mágico. Viste minifalda roja, blusa amarilla, cinturón negro, zapatos y cartera de charol. Es fina, respetuosa, sabe de etiqueta y protocolo. Y es tan inteligente que habla inglés, francés, alemán, italiano, portugués y español.</p>
    
    <h3>💰 El cebo de la fortuna</h3>
    <p>Desde que enviudó, la Viuda ha recibido incontables propuestas de matrimonio. Pero no cualquier hombre: sus pretendientes son siempre <strong>codiciosos, avivatos e interesados</strong>, que creen que ella posee una gran fortuna. La invitan a cenar, le regalan flores y joyas, le juran amor eterno. Pero ella, astuta como ninguna, sabe que lo que realmente buscan es su dinero. Entonces, cuando ya están en confianza y le preguntan con rodeos si tiene bienes para administrar, ella despliega su arsenal de falsas miserias.</p>
    
    <h3>🎭 La lección de humildad</h3>
    <p>—Ay, querido —les dice con una sonrisa pícara—, tengo una jauría de acreedores, más de cien cheques posfechados que debo pagar, mis fincas están hipotecadas, mis casas embargadas, mis joyas empeñadas, los recibos de servicios públicos en rojo y la Declaración de Renta sin presentar. Además, tengo un perro miedoso, una gata ciega, un caballo cojo, un galpón de gallinas jubiladas, un televisor blanco y negro dañado y una máquina de escribir de museo. Y para colmo, yo ronco, tengo un ojo de vidrio, una prótesis de pierna y una caja de dientes que debo reparar.</p>
    <p>Y remata: <em>"Si quieres algo conmigo, primero honra mis deudas, firma capitulaciones matrimoniales y espera un par de años antes de consumar el contrato nupcial"</em>.</p>
    
    <h3>😄 La risa que burla a los codiciosos</h3>
    <p>Los pretendientes, al escuchar semejante lista de calamidades, se sienten decepcionados. Piensan que la viuda es "un peladero", que no hay nada que agarrar y que solo les esperan obligaciones. Se despiden con excusas y no vuelven a aparecer. Entonces, la Viuda se ríe alegre y estridente, porque ella sabe la verdad: no tiene ningún defecto, ni deudas, ni pasivos. Todo es un simulacro para ahuyentar a los haraganes que solo quieren desplumar su fortuna. En su testamento ya ha estipulado dejar todas sus propiedades a una fundación de ancianos, donde seguramente ella irá a terminar. Mientras tanto, sigue eufórica, disfrutando los carnavales y burlándose de los avaros. Porque la Viuda del Pacífico enseña una lección clara: el amor que busca dinero no es amor, y la mejor manera de espantar a los interesados es hacerles creer que no hay nada que robar.</p>`,
    atributos: ["Coqueta", "Políglota", "Falsas deudas", "Burla a codiciosos"],
    iconos: ["fa-female", "fa-language", "fa-file-invoice-dollar", "fa-laugh"],
  },

  // ==================== REGIÓN LLANOS ORIENTALES ====================

  {
    id: "el-silibon",
    nombre: "El Silbón",
    cultura: "Llanos Orientales (Meta, Casanare, Arauca, Vichada)",
    region: "orinoquia",
    imagen: "../img/Criaturas/Silbon.webp",
    descripcion_corta:
      "Alma en pena que anuncia la muerte con un silbido escalofriante.",
    descripcion: `<h3>🎭 El Silbón: El espectro que anuncia la muerte con un silbido</h3>
      <p>En los llanos orientales de Colombia, donde la inmensidad del horizonte se funde con el cielo estrellado, habita una de las leyendas más aterradoras del folclor llanero: <strong>El Silbón</strong>, también conocido como el Silbador o Simbón. Se trata de un espectro que siembra el terror entre los habitantes de la sabana, pues su escalofriante silbido es el presagio de una muerte inminente.</p>
      
      <h3>🏃‍♂️ La trágica historia del joven malcriado</h3>
      <p>Cuenta la tradición oral que, hace muchos años, vivía en los Llanos Orientales un joven al que apodaban "El Silbón" porque se la pasaba silbando todo el día mientras caminaba de cantina en cantina. Este joven era malcriado, mimado y consentido por su familia; sus padres le cumplían todos los caprichos. Un día, enfadado porque no le gustó la comida que sirvieron en la mesa, exigió a su padre que saliera a cazar un venado para sacarle las vísceras y cocinarlas. El padre obedeció, pero tras un largo día de cacería, regresó con las manos vacías. El joven, cegado por la ira y bajo los efectos del alcohol, golpeó brutalmente a su progenitor y luego, sin medir consecuencias, lo mató de un escopetazo en la cabeza. Con un cuchillo le extrajo las vísceras y las entrañas, las empacó en un pedazo de camisa y se las llevó a su abuela para que se las preparara. Ante la pregunta de la anciana sobre el origen de las asaduras, el joven respondió sin remordimiento alguno: "El inepto de mi padre no logró cazar al venado, así que yo le arranqué sus vísceras para saciar mi hambre".</p>
      
      <h3>⛓️ La maldición eterna</h3>
      <p>La familia, horrorizada por tan macabro acto, lo ató a un árbol y lo torturó con latigazos en reprimenda por su maldad, aplicándole sal y ají picante en sus heridas para que su dolor fuera aún más desesperante. Posteriormente, fue exiliado y su abuela lo maldijo, condenándolo a vagar por la llanura cargando los huesos de su padre en un saco viejo y harapiento, mientras un perro tureco le muerde los talones a donde quiera que vaya. Desde entonces, el alma errante del Silbón recorre las noches llaneras, buscando a borrachos y mujeriegos para succionarles el ombligo e ingerir el licor que estos hayan bebido.</p>
      
      <h3>🎶 El siniestro presagio de su silbido</h3>
      <p>El Silbón es descrito como una figura de hasta seis metros de altura, que se mueve sigilosamente entre los árboles, portando un sombrero de cogollo. Su característica más aterradora es, sin duda, su silbido, que sube y baja en las notas musicales. Una creencia popular, profundamente arraigada en el imaginario llanero, indica que si el silbido suena muy cerca, el Silbón está lejos y no hay peligro; pero si suena lejano, está muy próximo y representa una amenaza mortal, especialmente para aquellos de mala conducta. Se dice que el espanto puede provocar fiebre, tullidez o incluso la muerte a sus víctimas.</p>
      <p><em>"Si escuchas cerca los silbidos, el Silbón está lejos y no hay peligro; si los escuchas lejos, no tienes escapatoria, el Silbón está cerca y corres peligro".</em></p>`,
    atributos: ["Espectro", "Silbido", "Maldición", "Justiciero"],
    iconos: ["fa-ghost", "fa-music", "fa-skull", "fa-gavel"],
  },

  {
    id: "juan-machete",
    nombre: "Juan Machete",
    cultura: "La Macarena, Meta",
    region: "orinoquia",
    imagen: "../img/Criaturas/Juan_Machete.webp",
    descripcion_corta:
      "Hombre que vendió su alma al diablo por riquezas y ahora vaga vomitando fuego.",
    descripcion: `<h3>🔪 Juan Machete: El hombre que vendió su alma por poder y fortuna</h3>
      <p>En las profundas selvas de La Macarena, en el departamento del Meta, la leyenda de <strong>Juan Machete</strong> resuena como un eco de advertencia sobre los peligros de la ambición desmedida. Juan Francisco Ortiz, amo y señor de esas tierras, anhelaba convertirse en el hombre más poderoso de la región, sin importarle el precio a pagar.</p>
      
      <h3>😈 El oscuro pacto con el diablo</h3>
      <p>Impulsado por su deseo de riqueza, Juan decidió hacer un pacto con el diablo. El maligno le exigió la entrega de su mujer e hijos a cambio de dinero, ganado y tierras. Para sellar el pacto, Juan debía realizar un macabro ritual: debía coser los ojos a un sapo y a una gallina, para luego enterrarlos vivos en un lugar apartado, un Viernes Santo a la medianoche, invocando al demonio de alma y corazón. Juan cumplió con lo encomendado. Pasados varios días, comenzó a notar cómo sus negocios prosperaban de manera misteriosa. Una madrugada, al ensillar su caballo, divisó un imponente toro negro, con los cuatro cascos y los dos cuernos blancos. El animal permaneció merodeando la casa durante días, y cada vez que bramaba a medianoche, miles de reses aparecían pastando en sus potreros.</p>
      
      <h3>🏚️ El arrepentimiento y la condena eterna</h3>
      <p>Juan se convirtió en el hombre más rico de la región, pero su fortuna empezó a desvanecerse tan misteriosamente como había llegado. El ganado comenzó a desaparecer y sus negocios entraron en declive hasta llevarlo a la miseria. Arrepentido por el pacto infernal, Juan enterró el poco dinero que le quedaba y desapareció en las entrañas de la selva. Desde entonces, los pobladores de la región afirman haber visto a un hombre deambular por las marraneras, vomitando fuego e impidiendo que alguien desentierre el tesoro de Juan Machete. Se ganó este sobrenombre porque siempre portaba un largo machete en una vaina de cuero crudo sujeto a su cinturón.</p>
      <p><em>La leyenda de Juan Machete nos recuerda que la ambición desmedida y los pactos con el mal tienen un precio que termina pagándose, incluso más allá de la muerte.</em></p>`,
    atributos: ["Pacto Diabólico", "Ambición", "Fuego", "Machete"],
    iconos: ["fa-hand-peace", "fa-fire", "fa-skull", "fa-cut"],
  },
  {
    id: "la-sayona",
    nombre: "La Sayona",
    cultura: "Arauca, Meta, Casanare",
    region: "orinoquia",
    imagen: "../img/Criaturas/La-Sayona.webp",
    descripcion_corta: "Espectro femenino que castiga a los hombres infieles.",
    descripcion: `<h3>👻 La Sayona: El espectro que castiga a los infieles en la oscuridad del llano</h3>
      <p>En las noches de luna llena, cuando la brisa mueve las palmeras y los llaneros encienden sus fogones, se cuenta la escalofriante historia de <strong>La Sayona</strong>, un espectro que siembra el terror entre los hombres infieles y mujeriegos de los Llanos Orientales.</p>
      
      <h3>💔 La trágica historia de Casilda</h3>
      <p>La leyenda más antigua narra la historia de una hermosa mujer llamada Casilda, quien vivía en una humilde choza a orillas del río Arauca. Casilda era una mujer profundamente celosa y desconfiada. Un día, un pretendiente que deseaba conquistarla le inventó una terrible mentira: le dijo que su esposo la estaba engañando con su propia madre. Cegada por los celos y la ira, Casilda enloqueció. Esa noche, tomó un machete y asesinó a su esposo mientras dormía, para luego dirigirse a la casa de su madre y también quitarle la vida. Cuando regresó a su hogar, encontró a su pequeño hijo de brazos llorando desconsoladamente. Consumida por la culpa y la desesperación, prendió fuego a la choza, consumiendo en las llamas al niño. Su madre, antes de morir, la maldijo para que vagara por la eternidad como un alma en pena.</p>
      
      <h3>✨ La condena de una aparición fantasmal</h3>
      <p>Desde entonces, los llaneros aseguran haberse encontrado con La Sayona en los caminos solitarios. Se presenta como una mujer de una belleza cautivadora: es delgada y elegante, pero de una altura sobrehumana que puede alcanzar hasta tres metros. Viste un sayal negro, de donde proviene su nombre, y su larga cabellera ondea al viento mientras sus afiladas uñas brillan amenazantes bajo la luz de la luna. Su misión es castigar a los hombres infieles, aquellos que engañan a sus esposas o viven una vida de parranda y desamor. Se acerca sigilosa, seduce a su víctima con su belleza y, justo en el momento en que el hombre cree que va a besar a una hermosa dama, La Sayona se transforma: sus dientes se convierten en filosas cuchillas y, con un abrazo mortal, lo devora para luego desaparecer entre las sombras, dejando tras de sí un eco de su desgarrador llanto.</p>
      
      <h3>⚡ El símbolo de un castigo implacable</h3>
      <p>Los habitantes de la región la consideran un símbolo castigador de las malas conductas y los deslices amorosos. Cuentan que cuando los perros aúllan en la noche y una niebla espesa cubre el suelo, es señal de que La Sayona anda cerca, buscando a su próxima víctima.</p>
      <p><em>"Mire, mijo, esa es la Sayona; ella le sale a los infieles".</em></p>`,
    atributos: ["Infidelidad", "Castigo", "Transformación", "Espectro"],
    iconos: ["fa-heart-broken", "fa-gavel", "fa-mask", "fa-ghost"],
  },
  {
    id: "bola-de-fuego-candileja",
    nombre: "La Candileja / Bola de Fuego",
    cultura: "Orinoquia (Caribe)",
    region: "orinoquia",
    imagen: "../img/Criaturas/Bola-de-Fuego.webp",
    descripcion_corta: "Esfera ardiente de tres llamaradas que castiga a malvados en noches de verano.",
    descripcion: `<h3>🔥 La Candileja: El espectro de fuego que castiga en la noche</h3>
        <p>En las vastas sabanas de la Orinoquía colombiana —y también en los departamentos de Bolívar, Sucre y Córdoba en el Caribe—, los campesinos hablan con terror de <strong>La Candileja</strong> o <strong>Bola de Fuego</strong>. Se trata de un espíritu maligno con forma de esfera ígnea que aparece en las noches oscuras, especialmente durante los meses de verano.</p>
        
        <h3>🕯️ El aterrador aspecto</h3>
        <p>Quienes la han visto la describen como una masa esférica de candela, pequeña a lo lejos pero capaz de crecer hasta un tamaño aterrador. En su forma más reconocida, se manifiesta como una <strong>bola ardiente de tres antorchas, con brazos como tentáculos rojos</strong>, que producen un ruido semejante al de jarrones rotos. Algunos testigos afirman haber distinguido en su interior un rostro cadavérico de mujer.</p>
        
        <h3>💔 La trágica historia de Candelaria</h3>
        <p>Una versión narra la historia de <strong>Candelaria</strong>, una mujer casada con un parrandero. Cegada por los celos, asesinó a su esposo con un hacha. Con el tiempo, convirtió a su hijo mayor en amante, y al menor lo rechazó. Al morir, fue arrojada como meteorito a la llanura, condenada a vagar como bola de fuego.</p>
        
        <h3>👵 La versión de la abuela consentidora</h3>
        <p>Otra versión más popular cuenta que la Candileja era una anciana que consentía en exceso a sus dos nietos, quienes la usaban como <strong>caballo de carga</strong>. Cuando murió, fue condenada a vagar como <strong>tres llamaradas</strong>: una por ella y dos por sus malcriados nietos.</p>
        
        <h3>👣 A quién persigue</h3>
        <p>Persigue a borrachos, hombres infieles, maltratadores y perjuros. Sin embargo, es compasiva con los niños perdidos, a quienes guía de vuelta a casa con su luz.</p>
        
        <h3>🛡️ Cómo defenderse</h3>
        <p>A diferencia de otros espantos, <strong>no se le debe rezar, sino maldecir</strong>. Los llaneros le profieren groserías para hacerla retroceder. También se puede evitar acostándose boca abajo o llevando el cabo de la soga de arrastre.</p>
        <p><em>"Cuentan los viejos que la bola de fuego no se espanta con rezos, sino con maldiciones".</em></p>`,
    atributos: ["Fuego", "Justiciera", "Tres llamaradas", "Maldición"],
    iconos: ["fa-fire", "fa-gavel", "fa-skull", "fa-venus-mars"],
  },
  {
    id: "florentino-y-el-diablo",
    nombre: "Florentino y el Diablo",
    cultura: "Llanos de Casanare, Meta y Arauca",
    region: "orinoquia",
    imagen: "../img/Criaturas/Florentino-Diablo.webp",
    descripcion_corta:
      "El mejor coplero del llano se enfrenta al demonio en un duelo de versos.",
    descripcion: `<h3>🎵 Florentino: El coplero que desafió al mismísimo diablo</h3>
      <p>En los llanos de Casanare, Meta y Arauca, donde la música del arpa y el cuatro resuena en cada joropo, existe una leyenda que ensalza el valor y la astucia del hombre llanero: <strong>Florentino y el Diablo</strong>. Florentino era reconocido en toda la región como el mejor coplero y jinete del llano, un hombre de palabra filosa, maestro del contrapunteo, cuya voz llevaba la fuerza del río Orinoco y cuyo cuatro resonaba como un eco del alma llanera. Lo llamaban "catire quitapesares", porque sus coplas alegraban los joropos y apagaban las penas de quienes lo escuchaban.</p>
      
      <h3>🌙 El encuentro en la sabana</h3>
      <p>Una noche de luna llena, mientras Florentino cabalgaba solo por la sabana para asistir a un joropo en un pueblo cercano, sintió un escalofrío que no explicaba el viento fresco de la noche. Al mirar atrás, divisó a lo lejos un jinete vestido totalmente de negro, montado en un caballo que parecía flotar sobre la tierra. Sus ojos brillaban como brasas y su risa cortaba el silencio como un cuchillo. El misterioso jinete alcanzó a Florentino y con una voz que parecía surgir de las profundidades de la tierra, lo retó a un duelo de contrapunteo. "Soy el llanero de los caminos oscuros. Vengo por tu alma. Si me vences, te dejaré libre. Si pierdes, tu alma será mía para siempre". Florentino, con el orgullo del llanero y la fe en su pecho, aceptó el desafío sin dudar.</p>
      
      <h3>🎶 El duelo de coplas</h3>
      <p>El Diablo abrió el contrapunteo con versos llenos de enigmas e ilusiones, intentando confundir a su oponente. Pero Florentino, lejos de amilanarse, respondió con coplas que pintaban el llano: cantó al río que corre, al ganado que brama, a la garza que vuela, demostrando un ingenio rápido y una voz clara. Al comenzar el cruce de coplas, Florentino se dio cuenta de que su adversario era nada menos que el mismísimo Diablo, y que si perdía, perdería su alma. A pesar del peligro, no se rindió y mantuvo su fe en sí mismo como improvisador. Entre copla y copla fue transcurriendo toda la noche. El Diablo, haciendo uso de todas sus artimañas, estuvo ocupado intentando derrotar a Florentino, pero este no cejó en su empeño. Cuando los primeros rayos del sol comenzaron a asomarse en el horizonte, el Diablo, cansado y derrotado, tuvo que retirarse, reconociendo la superioridad del coplero llanero. Florentino había logrado vencer al maligno con sus versos, enviándolo de regreso al infierno.</p>
      
      <h3>📖 El mensaje de la leyenda</h3>
      <p>La leyenda de Florentino y el Diablo es un canto a la valentía, la astucia y la fe. Nos enseña que no debemos dejarnos intimidar por aquello que nos infunde miedo y que, teniendo suficiente confianza en nosotros mismos, podemos superar cualquier adversidad. El duelo de contrapunteo, una tradición profundamente arraigada en la cultura llanera, simboliza en esta historia la eterna lucha entre el bien y el mal, donde la inteligencia y la fuerza del espíritu humano triunfan sobre las fuerzas oscuras. Esta leyenda fue magistralmente plasmada en un poema emblemático por el escritor venezolano Alberto Arvelo Torrealba en 1940, convirtiéndose en un himno del folclor llanero que ha sido adaptado al cine, el teatro, la música y la televisión.</p>
      <p><em>"Florentino le ganó al Diablo con la fuerza de sus versos y la fe en su corazón".</em></p>`,
    atributos: ["Contrapunteo", "Diablo", "Copla", "Fe"],
    iconos: ["fa-music", "fa-guitar", "fa-skull", "fa-church"],
  },
  {
    id: "rompellanos",
    nombre: "El Rompellanos",
    cultura: "Arauca, Casanare (Hato Corozal)",
    region: "orinoquia",
    imagen: "../img/Criaturas/Rompellanos.webp",
    descripcion_corta:
      "Guerrillero generoso que robaba a los ricos para ayudar a los pobres, convertido en héroe popular.",
    descripcion: `<h3>⚡ El Rompellanos: El héroe popular que desafió a los poderosos</h3>
      <p>En la memoria colectiva de Arauca y Casanare, la figura de <strong>Eduardo Fernández</strong>, más conocido como <strong>"Rompellanos"</strong>, ocupa un lugar de honor. No se trata de un ser sobrenatural, sino de un héroe popular, un hombre de carne y hueso cuya vida y muerte lo convirtieron en una leyenda venerada por el pueblo llanero. Natural de Casanare, posiblemente del municipio de Hato Corozal, era descrito como un hombre alto, delgado, de cabello castaño y lacio, y ojos claros y brillantes. Su apodo, "Rompellanos", reflejaba su carácter indómito y su capacidad para desafiar a los poderosos de la región.</p>
      
      <h3>🌾 La lucha por los pobres</h3>
      <p>En la turbulenta década de los años 50, Rompellanos formó parte de las guerrillas liberales de los llanos, haciendo la revolución al lado del legendario <strong>Guadalupe Salcedo</strong>, en las regiones de Arauca y Casanare. Quienes lo conocieron, coinciden en afirmar que era un hombre noble y generoso, movido por un profundo sentido de justicia social. Como expresó el señor Román Cisneros, una de las personas que lo trató: "A Eduardo le nacía luchar incansablemente por los pobres, <strong>robaba a los ricos para ayudar a los marginados</strong>". Su fama creció rápidamente, convirtiéndose en una especie de Robin Hood llanero, admirado y querido por las clases más desfavorecidas.</p>
      
      <h3>⚰️ La trágica muerte y el nacimiento de un mito</h3>
      <p>Cuando se presentó la primera amnistía del gobierno del General Gustavo Rojas Pinilla, el 13 de junio de 1953, Eduardo Fernández se acogió al decreto en la población de Tame. El 19 de septiembre de 1953, llegó a la ciudad de Arauca, donde según las personas que lo conocieron, bebió en exceso durante tres días. El 22 de septiembre, lo vieron bebiendo en la tienda de don Belarmino Paredes en compañía de dos detectives del Servicio Secreto (SIR). Esa noche, fue asesinado por uno de los detectives, de nombre Alberto García. Su cadáver quedó tendido a la intemperie, recibiendo todo el aguacero de la noche, que según las creencias populares purificó su alma. Nadie reclamó su cuerpo, por lo que fue enterrado sin urna en el cementerio local. Años más tarde, una mujer que dijo ser su esposa intentó exhumar sus restos, pero un nutrido grupo de habitantes de Arauca lo impidieron.</p>
      
      <h3>✨ La devoción popular</h3>
      <p>Desde el día de su muerte, la figura de Rompellanos trascendió su condición mortal para convertirse en un mito. El pueblo lo erigió como su <strong>benefactor celestial</strong>, y los necesitados acuden en romería a implorarle milagros. Su memoria es perpetuada por el conocido cantautor araucano Juan Farfán, quien en una canción con ritmo de 'pajarillo' añora los tiempos pasados y elogia las virtudes de este héroe popular. Rompellanos representa el espíritu indómito del llanero, su lucha por la justicia y su solidaridad con los más débiles, valores que lo han convertido en una de las leyendas más queridas y respetadas de la Orinoquía colombiana.</p>
      <p><em>"Rompellanos vive en el corazón del llano, donde cada joropo y cada copla recuerdan su nombre".</em></p>`,
    atributos: [
      "Héroe popular",
      "Justicia social",
      "Guerrillero",
      "Robin Hood llanero",
    ],
    iconos: ["fa-hand-holding-heart", "fa-fist-raised", "fa-gun", "fa-star"],
  },
  {
    id: "anima-de-santa-helena",
    nombre: "El Ánima de Santa Helena",
    cultura: "Hato de Santa Helena, Meta",
    region: "orinoquia",
    imagen: "../img/Criaturas/El-Ánima-de-Santa-Helena.webp",
    descripcion_corta:
      "Fantasma de una quinceañera que murió en una balacera durante su fiesta.",
    descripcion: `<h3>💃 La fiesta que terminó en tragedia</h3>
      <p>En los extensos llanos del Meta, muy cerca del río Cravo Norte, se encuentra el legendario <strong>Hato de Santa Helena</strong>. Allí, cuentan los viejos llaneros, ocurrió una desgracia que aún hoy se recuerda con escalofríos. Corría el año en que la violencia partidista sembraba el terror en los campos, y don Ramón Herrera, dueño del hato, decidió celebrar el cumpleaños de su hija, una hermosa catira que cumplía quince años. La fiesta era grande: sonaba el arpa, el cuatro y las maracas, y el guarapo corría como el agua de los caños. Los invitados llegaban de todas las veredas, y la alegría parecía no tener fin.</p>
      
      <h3>🤠 La llegada de los forasteros</h3>
      <p>Eran pasadas las diez de la noche cuando, en medio del jolgorio, se escuchó un relincho de caballos. Un grupo de hombres con sombrero alón, traje negro y revólver al cinto se apearon frente a la casa. El más altivo de ellos, con una voz que helaba la sangre, se acercó al arpista y lo retó a un contrapunteo. "Yo vengo de Santa Rita, contrapunteo con cualquiera", dijo con desdén. Un mocetón llanero, que ya había bebido unos tragos de más, aceptó el desafío. Las coplas comenzaron a cruzarse, pero pronto la competencia se tornó en disputa por la atención de la quinceañera, que observaba desde un rincón con sus ojos claros llenos de inocencia. Los versos se volvieron punzantes, las miradas desafiantes, y en un instante, la fiesta se convirtió en un campo de batalla.</p>
      
      <h3>💔 La bala perdida</h3>
      <p>El contrapunteo subió de tono. Uno de los forasteros, sintiéndose humillado, desenfundó su revólver y disparó al aire. El mocetón llanero respondió con otro tiro. Pronto, la balacera fue general. Las mujeres gritaban, los hombres se tiraban al suelo, y la música cesó. En medio del caos, una bala perdida, que nadie supo de dónde vino, atravesó el pecho de la joven cumpleañera. Cayó como una flor cortada, sin tiempo para un último suspiro. Cuando el humo se disipó, dos hombres yacían muertos frente a la puerta, y la quinceañera, con su vestido blanco manchado de rojo, había partido al cielo sin cumplir los quince. Los forasteros huyeron al galope, y los llaneros, consternados, enterraron a la niña en la capilla del hato.</p>
      
      <h3>🌙 La guardiana del hato</h3>
      <p>Desde aquel 16 de enero, cuenta la tradición que, en cada aniversario de su muerte, una <strong>blanca figura de inigualable belleza</strong> aparece en las sabanas de Santa Helena. Es la ánima de la quinceañera, vestida con el mismo traje que llevaba la noche de la fiesta. Camina entre los árboles de la entrada, y aleja a todo forastero que intente acercarse al hato. Los llaneros más viejos aseguran que, si alguien llega con malas intenciones, ella lo asusta con su mirada triste y su silencio sepulcral, haciéndolo huir despavorido. Otros dicen que, en las noches de luna llena, se le ve danzando sola al ritmo del viento, como si aún esperara el baile que le fue negado. Su espíritu vaga en paz, pero no permite que nadie perturbe la quietud del lugar donde perdió la vida.</p>
      <p><em>"Por cada año, marcando la misma fecha, se ve una blanca figura de inigualable belleza alejar los forasteros del Hato de Santa Helena".</em></p>`,
    atributos: ["Fantasma", "Justiciera", "Belleza", "Protección"],
    iconos: ["fa-ghost", "fa-female", "fa-heart", "fa-shield-alt"],
  },
  {
    id: "jinete-sin-cabeza",
    nombre: "El Jinete sin Cabeza",
    cultura: "Llanos de Casanare y Meta",
    region: "orinoquia",
    imagen: "../img/Criaturas/El-Jinete-sin-Cabeza.webp",
    descripcion_corta:
      "Guerrero decapitado que cabalga en noches de luna llena buscando venganza.",
    descripcion: `<h3>🏇 La sombra que galopa sin rumbo</h3>
      <p>En las noches de luna llena, cuando el silencio de la sabana solo se interrumpe por el canto de los carraos y el aullido de los perros, algunos viajeros han visto una aparición que hiela la sangre: un <strong>jinete sin cabeza</strong> cabalgando a toda velocidad sobre un caballo negro como el carbón. Su túnica ondea al viento, y su mano izquierda sostiene una lanza o un machete, mientras la derecha lleva las riendas. Donde debería estar su cabeza, solo hay un vacío oscuro, y de su cuello brota un resplandor fantasmal que ilumina el camino a su paso.</p>
      
      <h3>⚔️ La injusticia que lo condenó</h3>
      <p>Cuentan los abuelos llaneros que este jinete fue en vida un valiente guerrero de los tiempos de la independencia o, según otras versiones, un capitán de los ejércitos liberales durante la Guerra de los Mil Días. Era un hombre honorable, leal a su causa y querido por sus soldados. Pero un día, un enemigo celoso de su fama y su valor lo acusó falsamente de traición. Sin juicio ni piedad, lo capturaron, lo ataron a un árbol y le cercenaron la cabeza con un machete oxidado. Su cuerpo fue abandonado en la sabana, y su cabeza, clavada en una pica, sirvió de escarmiento. Pero el alma del guerrero no encontró descanso. Maldijo a sus verdugos y juró vagar por la eternidad hasta ajustar cuentas con todos los traidores y cobardes.</p>
      
      <h3>🌕 La búsqueda eterna</h3>
      <p>Desde entonces, el Jinete sin Cabeza recorre los llanos de Casanare y Meta, especialmente en los alrededores de los caños y morichales solitarios. Se aparece a los viajeros nocturnos, a los soldados desertores y a los políticos corruptos. Si alguien tiene la mala fortuna de cruzarse con él, no debe mirar directamente hacia donde debería estar su rostro, pues sus ojos vacíos pueden robarle el alma y condenarlo a seguirlo en su galope eterno. Se dice que si el jinete se detiene frente a ti y señala con su lanza, es porque te ha elegido como su próxima víctima. Solo hay una forma de salvarse: gritar con todas las fuerzas "¡Jesús me acompaña!" y montar a contrapelo en dirección opuesta, sin mirar atrás. Otros afirman que el jinete se calma si se le ofrece un trago de aguardiente y se le reza un credo, pero nunca se debe intentar engañarlo.</p>
      
      <h3>⚠️ Advertencia para los vivos</h3>
      <p>La leyenda del Jinete sin Cabeza es un recordatorio de que la injusticia y la venganza nunca mueren del todo. Su presencia en las noches de plenilunio advierte a los hombres que no cometan maldades, porque siempre habrá un espíritu que las castigue. Los llaneros más supersticiosos evitan salir a la sabana cuando la luna está llena, y si escuchan el galope de un caballo que no ven, se persignan y rezan en voz baja. Porque en el llano, nadie está a salvo de la sombra del jinete decapitado.</p>
      <p><em>"Si oyes galopar un caballo y no ves jinete, o si ves un jinete sin cabeza, no mires sus ojos vacíos, pues te arrastrará en su condena eterna".</em></p>`,
    atributos: ["Jinete", "Venganza", "Decapitado", "Luna llena"],
    iconos: ["fa-horse-head", "fa-skull", "fa-moon", "fa-gavel"],
  },
  {
    id: "duende-llanero",
    nombre: "El Duende",
    cultura: "Llanos de Casanare, Meta, Arauca, Vichada",
    region: "orinoquia",
    imagen: "../img/Criaturas/Duende-Llanero.webp",
    descripcion_corta:
      "Ser travieso que desorienta a los viajeros y asusta a los parranderos.",
    descripcion: `<h3>🎩 El pequeño gran embustero de la sabana</h3>
      <p>En la tradición oral de los Llanos Orientales, <strong>el Duende</strong> es uno de los espantos más conocidos y, a la vez, más traviesos. A diferencia de otros seres aterradores, el duende no busca matar ni castigar gravemente, sino divertirse a costa de los descuidados, los borrachos y los que no respetan la naturaleza. Se le describe como un hombrecillo de no más de un metro de estatura, con una enorme cabeza, orejas puntiagudas y una sonrisa pícara. Viste con pantalón y chaqueta de hojas secas o de cuero, y lleva un sombrero de palma tan grande que le cubre medio rostro. Su risa suena como el crujir de las ramas, y sus pies son al revés, con los talones hacia adelante, para confundir a quienes intentan seguir sus huellas.</p>
      
      <h3>🌿 Moradas y travesuras</h3>
      <p>Los duendes llaneros habitan en los morichales, en las cuevas de los barrancos y en los árboles viejos de los caños. Son especialmente activos en las noches de luna nueva y durante la época de lluvias, cuando la neblina cubre la sabana. Les encanta silbar imitando el canto de las aves o el lamento de la llorona para desorientar a los caminantes. Si un viajero se pierde, es probable que el duende lo haya hechizado haciéndole dar vueltas en el mismo lugar durante horas. También les gusta enredar las crines de los caballos, robar las totumas de agua, esconder las enjalmas y, sobre todo, molestar a los bebedores de guarapo que se duermen bajo los árboles. Al despertar, estos se encuentran con que les han amarrado los cordones de las alpargatas, les han pintado la cara con barro o les han cambiado el sombrero por un nido de hornero.</p>
      
      <h3>👶 El duende y los niños</h3>
      <p>Una de las creencias más extendidas en el llano es que el duende siente una fascinación especial por los niños recién nacidos o por aquellos que no han sido bautizados. Cuentan las abuelas que el duende puede "embrujar" a un pequeño, haciéndolo enfermar de repente, llorar sin consuelo o perder el apetito. Para proteger a los bebés, se acostumbra colocar un escapulario, una tijera abierta o un diente de ajo debajo de la cuna. También se dice que el duende se aparece a los niños traviesos para asustarlos, pero si el niño es valiente y le grita groserías, el duende se va riendo y no vuelve por un tiempo.</p>
      
      <h3>🌳 El guardián de la naturaleza</h3>
      <p>En algunas versiones de la Orinoquía, el duende no es solo un ser juguetón, sino un guardián de los bosques y las fuentes de agua. Castiga a los que talan árboles sin permiso, a los que matan animales en exceso y a los que ensucian los caños. Si alguien encuentra un duende en su camino, lo mejor es tratarlo con respeto, ofrecerle un poco de miel o una arepa, y alejarse sin mirar atrás. Porque, aunque no sea malo, sus bromas pueden volverse pesadas si se siente ofendido.</p>
      <p><em>"El duende no es malo, solo es juguetón; pero si te descuida, te pierde en el llano".</em></p>`,
    atributos: ["Travieso", "Guardián", "Pequeño", "Silbador"],
    iconos: ["fa-child", "fa-mask", "fa-tree", "fa-music"],
  },
  {
    id: "el-mandingas",
    nombre: "El Mandingas",
    cultura: "Llanos de Meta, Casanare, Arauca, Vichada",
    region: "orinoquia",
    imagen: "../img/Criaturas/Mandingas.webp",
    descripcion_corta:
      "Encarnación del diablo que tienta a los llaneros en las fiestas y caminos solitarios.",
    descripcion: `<h3>😈 El Mandingas: El diablo que ronda los llanos</h3>
      <p>En los Llanos Orientales de Colombia, cuando un llanero quiere referirse al demonio sin nombrarlo directamente, lo llama <strong>"El Mandingas"</strong>. Este nombre, que en otras regiones de Sudamérica designa al diablo, tiene en la Orinoquía una presencia particularmente vívida, asociada a las tentaciones, los pactos malditos y el castigo a los pecadores. No se trata de un espanto con forma definida, sino de una fuerza maligna que puede adoptar diversas apariencias para engañar a los incautos y probar la fe de los creyentes.</p>
      
      <h3>🌙 El origen del nombre</h3>
      <p>El término "Mandingas" proviene de la etnia africana de los mandinga, esclavizados durante la colonia. Los misioneros cristianos asociaron a este pueblo con las fuerzas del mal, y el nombre quedó grabado en el imaginario popular como sinónimo del diablo. En los Llanos, esta figura se fusionó con las creencias indígenas y españolas, dando origen a una entidad que merodea las sabanas, los ríos y las fiestas, siempre dispuesta a tentar a los descuidados.</p>
      
      <h3>🃏 Las múltiples caras del tentador</h3>
      <p>El Mandingas no tiene una forma fija. Puede aparecer como un hombre apuesto y bien vestido en un baile de joropo, seduciendo a las mujeres más hermosas y desafiando a los hombres a duelos de coplas o de tragos. Otras veces se presenta como un viajero solitario en el camino, ofreciendo riquezas a cambio de favores oscuros. También puede manifestarse como un animal negro: un toro de mirada rojiza, un perro sin dueño o un caballo que galopa en la noche sin jinete. Su rasgo distintivo es un olor a azufre que impregna el aire donde ha estado, y su risa, que suena como un eco burlón en la oscuridad.</p>
      
      <h3>💀 Los pactos malditos</h3>
      <p>La leyenda más famosa relacionada con el Mandingas en los Llanos es la de Florentino y el Diablo, donde el maligno reta al mejor coplero del llano a un contrapunteo por su alma. Pero hay otras historias menos conocidas. Cuentan los abuelos que, en noches de luna nueva, el Mandingas se aparece a los hombres desesperados que buscan fortuna fácil, ofreciéndoles ganado, tierras o amor a cambio de su alma o la de un ser querido. Los que aceptan su trato suelen terminar como Juan Machete: condenados a vagar eternamente, vomitando fuego o enloquecidos por la culpa.</p>
      
      <h3>⛪ Cómo defenderse del Mandingas</h3>
      <p>Los llaneros más sabios saben que el Mandingas no soporta las oraciones ni los rezos. Si se siente su presencia, lo mejor es persignarse y rezar un credo en voz alta. También se dice que el Mandingas huye al escuchar el canto de un gallo o al ver una cruz hecha con dos palos de guarataro. En las fiestas, los viejos recomiendan nunca aceptar tragos de desconocidos ni dejarse tentar por apuestas imposibles, pues detrás de ellas podría estar el Maligno acechando. Porque en el llano, dicen, el Mandingas siempre anda rondando, esperando el descuido de un pecador.</p>
      <p><em>"El Mandingas no tiene forma fija; puede ser el hombre apuesto que baila con tu mujer o el toro negro que ves en el potrero. Cuídate de él, que anda suelto en la sabana".</em></p>`,
    atributos: ["Diablo", "Tentador", "Pactos", "Azufre"],
    iconos: ["fa-devil", "fa-handshake", "fa-skull", "fa-fire"],
  },
  {
    id: "doncella-marbachare",
    nombre: "Doncella de Marbachare",
    cultura: "San Martín, Meta (río Guacavía)",
    region: "orinoquia",
    imagen: "../img/Criaturas/Doncella-de-Marbachare.webp",
    descripcion_corta:
      "Espíritu femenino que protege las aguas y castiga a los que contaminan los caños.",
    descripcion: `<h3>👸 La guardiana de las aguas del Guacavía</h3>
      <p>En el municipio de San Martín, Meta, a orillas del río Guacavía, se encuentra Marbachare, un lugar de una belleza natural extraordinaria. Allí, según la tradición oral, habita la <strong>Doncella de Marbachare</strong>, un espíritu femenino que protege las aguas, la flora y la fauna de la región. A diferencia de otros espantos vengativos, la Doncella es un ser profundamente ligado a la naturaleza y la justicia ambiental, castigando a quienes dañan el equilibrio del ecosistema llanero. Su leyenda, aunque menos conocida que la del Silbón o la Sayona, ha sido preservada por los habitantes ribereños de San Martín y rescatada en la cultura popular a través de series animadas como "Cuentos del Camino".</p>
      
      <h3>💧 El origen de su condena</h3>
      <p>Cuentan los viejos pescadores del Guacavía que la Doncella fue en vida una joven de extraordinaria hermosura, hija de un importante cacique de la región. Un día, mientras se bañaba en las cristalinas aguas del río, fue sorprendida por unos forasteros que, cegados por la codicia, intentaron robar las ofrendas de oro que su tribu había depositado en el fondo del caño. Al negarse ella a revelar el escondite de los tesoros sagrados, la asesinaron brutalmente, arrojando su cuerpo al río. Pero su alma, pura y justa, no se fue al cielo. Los dioses del agua la convirtieron en la eterna guardiana del río, condenada a velar por la pureza de las aguas y a castigar a todo aquel que intente profanar la naturaleza. Desde entonces, su espíritu recorre los caños y morichales, cuidando de los animales y plantas que habitan en ellos.</p>
      
      <h3>🌿 La protectora del río</h3>
      <p>La Doncella de Marbachare se aparece como una mujer esbelta, de larga cabellera negra y vestida con una túnica blanca que flota sobre el agua como si fuera una niebla matutina. No es malvada ni busca asustar a los viajeros; su misión es proteger. A los pescadores que respetan las vedas y no usan barbasco para envenenar los peces, ella les concede buenas capturas y los guía de vuelta a casa cuando la neblina cubre el río. Pero a quienes contaminan las aguas, talan los árboles de la ribera o matan animales en exceso, ella los castiga sin piedad. Puede hacer que sus embarcaciones se hundan misteriosamente, que pierdan el rumbo durante días o que una fiebre inexplicable los postre en la cama. También se dice que, en las noches de luna llena, se le oye cantar una melodía triste y hermosa que sirve de advertencia: quien la escuche debe alejarse del río, pues algo malo está por suceder.</p>
      
      <h3>🌎 Un mito de conciencia ecológica</h3>
      <p>La leyenda de la Doncella de Marbachare es, en esencia, un llamado a la armonía con la naturaleza. En los Llanos Orientales, donde el agua es vida y los ríos son el sustento de comunidades enteras, esta historia recuerda a las generaciones más jóvenes la importancia de cuidar el entorno. Por eso, en San Martín, muchos pescadores y campesinos aún le ofrecen pequeñas ofrendas antes de internarse en el río: una flor, un poco de mañoco o simplemente una oración en voz baja, pidiendo permiso a la Doncella para tomar lo necesario sin dañar el equilibrio del ecosistema. Su espíritu, dicen, sigue velando por las aguas del Guacavía, tan pura y hermosa como el día en que perdió la vida.</p>
      <p><em>"La Doncella de Marbachare cuida el río como una madre cuida a sus hijos. Respétala y ella te dará lo que necesitas; daña su hogar y sufrirás su castigo".</em></p>`,
    atributos: ["Protectora", "Agua", "Justicia", "Naturaleza"],
    iconos: ["fa-female", "fa-water", "fa-leaf", "fa-gavel"],
  },
  {
    id: "mohan-llanero",
    nombre: "El Mohán",
    cultura: "Ríos y caños de Meta y Casanare",
    region: "orinoquia",
    imagen: "../img/Criaturas/Mohan_LLAN.webp",
    descripcion_corta:
      "Guardián de los ríos que encanta y rapta a las lavanderas descuidadas.",
    descripcion: `<h3>🌊 El Mohán: El señor de los ríos llaneros</h3>
      <p>En los recodos más profundos de los ríos Meta, Cravo, Ariporo y Pauto, donde la corriente se remansa y los árboles besan la superficie del agua, habita una de las figuras más antiguas y temidas del folclor llanero: <strong>El Mohán</strong>. Conocido también como Poira en algunas regiones, este ser mitológico es el guardián de los ríos, las quebradas y las lagunas de la Orinoquía. Su figura imponente y su carácter travieso pero peligroso lo convierten en un personaje central de las tradiciones orales de pescadores, bogas y lavanderas.</p>
      
      <h3>🧔 El aspecto del habitante de las aguas</h3>
      <p>El Mohán llanero es descrito como un hombre corpulento, de estatura gigantesca, con una larga y descuidada cabellera que le cubre gran parte del cuerpo. Su cara está tostada por el sol, sus ojos son brillantes y penetrantes, y su boca muestra dientes de oro cuando sonríe. En algunas versiones, se dice que tiene el cuerpo cubierto de musgo y algas, como si fuera parte del río mismo. Sus uñas son largas y afiladas, y fuma un grueso tabaco cuyo humo se eleva en espiral entre los árboles. Los pescadores cuentan que, en las noches de luna llena, se le puede oír reír a carcajadas o cantar con una voz ronca y profunda que retumba en los caños solitarios.</p>
      
      <h3>🎸 El seductor de las lavanderas</h3>
      <p>La leyenda más recurrente sobre el Mohán en los Llanos Orientales es su obsesión por las mujeres jóvenes, especialmente aquellas que se acercan al río a lavar la ropa. El Mohán las acecha desde el fondo del agua, hechizándolas con su mirada pícara y su voz melodiosa. Aparece en la orilla tocando una guitarra o una flauta, o simplemente mostrando sus dientes de oro en una sonrisa encantadora. Las mujeres que caen bajo su hechizo pierden la voluntad, se olvidan de sus familias y se adentran en las cuevas secretas que el Mohán tiene bajo el agua, para nunca más regresar. Por eso, las abuelas llaneras advierten a las jóvenes que nunca vayan solas al río al atardecer, y que si escuchan una música extraña o ven un hombre extraño en la orilla, huyan sin mirar atrás.</p>
      
      <h3>⚡ El guardián de la naturaleza</h3>
      <p>Pero no todo es maldad en el Mohán. También es considerado el guardián de los ríos y el dueño de los peces. Los pescadores que respetan las vedas, que no usan métodos destructivos y que le ofrecen una parte de su pesca como tributo, son recompensados con abundancia. En cambio, aquellos que abusan de los recursos, que envenenan el agua con barbasco o que matan crías de animales, sufren la ira del Mohán: sus redes aparecen rotas, sus canoas se hunden misteriosamente o enferman de fiebres extrañas. Se dice que el Mohán tiene el poder de encalmar las tormentas o de desatarlas a su antojo, y que puede convertirse en un remolino para arrastrar a los imprudentes al fondo del río.</p>
      
      <h3>🌿 La tradición del Mohán en el Llano</h3>
      <p>A diferencia de otras regiones de Colombia, donde el Mohán es principalmente un personaje de la tradición andina, en los Llanos Orientales su figura adquiere matices propios. Aquí no es solo un hechicero malvado, sino un ser profundamente conectado con la naturaleza, que castiga el daño ambiental y protege los secretos del agua. Los viejos llaneros aún cuentan historias de encuentros con el Mohán: pescadores que lo vieron sentado en una piedra en medio del río, viajeros que escucharon su risa en la noche, mujeres que sintieron su aliento en la nuca mientras lavaban ropa. Y aunque algunos duden de su existencia, nadie se atreve a desafiarlo. Porque en el llano, quien no respeta al Mohán, termina pagando caro su osadía.</p>
      <p><em>"Si vas al río al atardecer y ves a un hombre peludo fumando tabaco en la orilla, no te le acerques, que es el Mohán y te puede encantar".</em></p> <p><em>📌 Versión del Mohán propia de los Llanos Orientales. En el Caribe se le describe como un anciano peludo que fuma tabaco, y en la región Andina como un brujo de baja estatura que convierte mujeres en oro.</em></p>`,
    atributos: ["Río", "Guardián", "Seductor", "Justiciero"],
    iconos: ["fa-water", "fa-guitar", "fa-heart", "fa-tree"],
  },

  // ==================== REGIÓN AMAZONÍA ====================
  {
    id: "yacumama",
    nombre: "Yacumama",
    cultura: "Cuenca del Amazonas",
    region: "amazonia",
    imagen: "../img/Criaturas/Yacumama.webp",
    descripcion_corta: "Serpiente acuática gigante, madre de todas las aguas.",
    descripcion: `<h3>🐍 La madre de las aguas</h3>
        <p>En las profundidades del río Amazonas y sus incontables afluentes, donde la luz del sol apenas logra penetrar, habita la <strong>Yacumama</strong> —voz quechua que significa “Madre del Agua”. No es una serpiente común: es una anaconda de proporciones colosales, cuyo cuerpo puede rodear una embarcación entera y cuyos ojos brillan en la noche como dos faros rojizos. Los pueblos indígenas de la Amazonía colombiana, desde los Huitoto hasta los Tikuna, la reverencian como el espíritu supremo de todos los ríos, lagunas y caños.</p>
        
        <h3>🌊 Guardiana del ecosistema</h3>
        <p>La Yacumama no ataca sin motivo. Es la protectora feroz de la selva y sus criaturas. Cuando los forasteros llegan con motosierras para talar árboles milenarios, o cuando los cazadores furtivos masacran animales sin respeto, la Madre del Agua lo sabe. Escucha los silbidos de auxilio de los monos, los cantos de las aves y los gemidos de los peces. Entonces, enfurecida, provoca tormentas repentinas, levanta olas enormes en ríos antes calmados y envía niebla espesa que desorienta a los intrusos hasta que encallan sus embarcaciones.</p>
        
        <h3>⚠️ El precio de la ambición</h3>
        <p>Los pescadores y ribereños cuentan que, a medianoche, la Yacumama puede emerger parcialmente del agua, mostrando una cabeza del tamaño de un bote. Quien la mira fijamente queda paralizado por el terror. También se dice que a veces adopta la forma de un tronco flotante para acercarse sigilosamente a los depredadores. Si logra atrapar a un infractor, lo arrastra a su guarida subacuática, una cueva laberíntica llena de huesos de animales y humanos que pagaron su osadía. El único modo de apaciguarla es ofreciendo tabaco o coca en la orilla, en señal de respeto.</p>
        
        <h3>🌙 Un mito que protege la selva</h3>
        <p>La Yacumama es, ante todo, una advertencia ecológica. Cada relato sobre sus castigos recuerda a las comunidades que el río no es una simple fuente de recursos, sino un ser vivo con memoria y furia. Por eso, antes de cualquier pesca o viaje, los ancianos recomiendan pedir permiso a la Madre del Agua, para que no se enojen las profundidades y la travesía sea segura. <em>“Quien respeta la Yacumama, nunca naufraga”</em>, dicen los sabedores del Amazonas.</p>`,
    atributos: [
      "Río Amazonas",
      "Serpiente gigante",
      "Protectora",
      "Furia ecológica",
    ],
    iconos: ["fa-water", "fa-snake", "fa-shield-alt", "fa-bolt"],
  },

  {
    id: "curupira",
    nombre: "Curupira",
    cultura: "Pueblos Tupí-Guaraní",
    region: "amazonia",
    imagen: "../img/Criaturas/Curupira.webp",
    descripcion_corta: "Pequeño duende de pies al revés que protege la selva.",
    descripcion: `<h3>👣 El guardián de los pies volteados</h3>
        <p>En el corazón de la selva amazónica, donde los árboles se alzan como columnas de una catedral verde, habita el <strong>Curupira</strong>. No mide más de un metro, su cuerpo es robusto y su piel rojiza como la arcilla. Su rasgo más desconcertante —y el que lo hace imparable— son sus pies: los talones apuntan hacia adelante y los dedos hacia atrás. Cualquier cazador o leñador que intente seguir sus huellas termina perdido, pues las pisadas parecen ir en dirección contraria a donde realmente se dirige.</p>
        
        <h3>🏹 El castigo a los depredadores voraces</h3>
        <p>El Curupira es el policía implacable de la fauna y la flora. Odia a quienes cazan más de lo que pueden comer, a los que talan árboles sin necesidad y a los que maltratan a los animales. Se aparece ante ellos en los senderos solitarios, a menudo disfrazado de un niño inocente o de un animal herido. Cuando el infractor se acerca, el duende revela su verdadera forma, emite un silbido estridente que hiela la sangre y comienza a perseguirlo. Sus pies al revés hacen imposible escapar: por más que el hombre corra, el Curupira siempre aparece delante de él.</p>
        
        <h3>🍃 Un trato posible</h3>
        <p>Sin embargo, no todo es terror. Los indígenas saben que el Curupira puede ser apaciguado con ofrendas de tabaco, miel o masato. Si un cazador respeta las normas ancestrales —no cazar hembras preñadas, no matar crías, no talar árboles frutales—, el duende incluso puede ayudarlo, guiándolo hacia una presa abundante o protegiéndolo de jaguares. Pero si alguien miente o rompe el pacto, el castigo es seguro: el Curupira lo enloquecerá en la selva, haciéndolo caminar en círculos hasta que muera de hambre o caiga en un río infestado de pirañas.</p>
        
        <h3>🌎 Un mito que enseña a convivir</h3>
        <p>La leyenda del Curupira es una de las más antiguas del continente, y en la Amazonía colombiana se cuenta con variaciones entre los pueblos Yagua, Cocama y Ticuna. Más que un simple espanto, representa la conciencia ecológica de las culturas originarias: <em>“La selva no es nuestra, nosotros somos de la selva”</em>. Quien la lastima, lastima al Curupira, y el duende nunca olvida una ofensa. Por eso, los niños aprenden desde pequeños a no maltratar a los animales y a pedir permiso antes de adentrarse en la espesura.</p>`,
    atributos: [
      "Pies al revés",
      "Protector de animales",
      "Silbido aterrador",
      "Ofrendas de tabaco",
    ],
    iconos: ["fa-shoe-prints", "fa-paw", "fa-music", "fa-leaf"],
  },
  {
    id: "sachamama",
    nombre: "Sachamama",
    cultura: "Quechua",
    region: "amazonia",
    imagen: "../img/Criaturas/Sachamama.webp",
    descripcion_corta:
      "Boa gigante que se confunde con un tronco, madre del monte.",
    descripcion: `<h3>🌿 La serpiente que parece un árbol caído</h3>
        <p>En los rincones más remotos de la selva amazónica, donde los árboles milenarios tocan el cielo y el suelo está cubierto de hojarasca, se oculta la <strong>Sachamama</strong> —del quechua <em>sacha</em> (monte) y <em>mama</em> (madre). Es una boa de proporciones legendarias, cuyo cuerpo, cubierto de musgo, líquenes y pequeñas plantas, puede confundirse fácilmente con un tronco derribado por la tormenta. Los viajeros desprevenidos caminan sobre ella sin saberlo, y entonces ocurre el despertar.</p>
        
        <h3>😵 El poder hipnótico de la madre del monte</h3>
        <p>La Sachamama no necesita moverse para cazar. Posee una mirada hipnótica que atrae a sus víctimas como un imán. El cazador que se topa con ella siente de repente una curiosidad irresistible, una necesidad de acercarse y tocar esa “madera” extraña. Sus piernas se debilitan, sus brazos caen y, sin poder gritar, queda paralizado. Entonces, la gran serpiente abre lentamente sus fauces y comienza a devorarlo, empezando por los pies, mientras la víctima permanece consciente pero incapaz de moverse.</p>
        
        <h3>⏳ Una digestión que dura meses</h3>
        <p>Los ancianos cuentan que la Sachamama puede pasar hasta seis meses sin volver a alimentarse después de una presa grande. Durante ese tiempo, permanece inmóvil, con su vientre abultado, y la vegetación sigue creciendo sobre su lomo, camuflándola aún mejor. Las leyendas advierten que jamás se debe acampar cerca de un tronco que parezca “demasiado perfecto” o que tenga un olor extraño a podredumbre, porque podría ser la Madre del Monte esperando su próxima comida. Solo los chamanes conocen canciones especiales para “adormecer” a la Sachamama y poder cruzarla sin peligro.</p>
        
        <h3>🌎 Un espejo del respeto por lo desconocido</h3>
        <p>Más allá del terror, la Sachamama simboliza el peligro de subestimar la selva. Así como la serpiente se confunde con un tronco, muchas amenazas en la Amazonía no son lo que parecen. La leyenda enseña a los más jóvenes a observar con cuidado cada paso, a no fiarse de las apariencias y a venerar los lugares donde la naturaleza muestra su poder descomunal. <em>“El monte tiene ojos y dientes”</em>, repiten los abuelos, y la Sachamama es la prueba de que, en el Amazonas, incluso la madera muerta puede cobrar vida.</p>`,
    atributos: [
      "Camuflaje vegetal",
      "Mirada hipnótica",
      "Devora lentamente",
      "Tronco falso",
    ],
    iconos: ["fa-tree", "fa-eye", "fa-hourglass-half", "fa-skull"],
  },
  {
    id: "mapinguari",
    nombre: "Mapinguari",
    cultura: "Amazonía colombiana, Guainía y Vaupés",
    region: "amazonia",
    imagen: "../img/Criaturas/Mapinguari.webp",
    descripcion_corta: "Monstruoso chamán de un ojo y una boca en el vientre.",
    descripcion: `<h3>👹 El chamán que descubrió el secreto prohibido</h3>
        <p>En la inmensidad de la selva amazónica, en los límites del Guainía y el Vaupés, los pueblos indígenas cuentan la aterradora historia del <strong>Mapinguari</strong>. Antes de convertirse en la criatura más temida, este ser fue un poderoso chamán que, movido por una ambición desmedida, descubrió el secreto de la inmortalidad. Los dioses ancestrales, al enterarse de que un mortal había osado traspasar la barrera de la muerte, le impusieron el castigo más cruel: lo transformaron en un monstruo errante que vagaría por la selva por toda la eternidad.</p>
        
        <h3>🔴 La bestia de un solo ojo</h3>
        <p>El Mapinguari es descrito como una criatura de aspecto similar a un oso gigante, de entre dos y tres metros de altura, cuyo cuerpo está cubierto por un espeso pelaje rojizo y enmarañado. Su rasgo más aterrador es el único ojo que brilla en medio de su frente, y una segunda boca ubicada en el vientre, que utiliza para devorar a sus víctimas. Sus patas, similares a las de un armadillo, apuntan hacia atrás, una deformidad que, al igual que en el Curupira, confunde a quienes intentan seguir su rastro. Una armadura natural hecha con el caparazón de una tortuga gigante recubre su lomo, haciéndolo prácticamente invulnerable. Se dice que su piel es tan gruesa que ninguna bala o cuchillo puede perforarla.</p>
        
        <h3>👃 El hedor de la muerte eterna</h3>
        <p>La presencia del Mapinguari es inconfundible incluso antes de verlo. Su cuerpo despide un olor fétido y nauseabundo, similar al azufre o a la carne podrida, que puede desorientar y dejar inconscientes a sus víctimas. Los sobrevivientes de sus ataques relatan que su rugido retumba en la selva como un trueno, paralizando a cualquiera que lo escuche. Es una criatura lenta pero implacable, capaz de emboscar sigilosamente a los humanos para luego destrozarlos con sus enormes garras. Siente una predilección especial por la carne humana, y se caza devorando a todo aquel que se atreve a profanar su territorio.</p>
        
        <h3>🌎 ¿Un monstruo prehistórico o un guardián espiritual?</h3>
        <p>Algunos científicos han relacionado al Mapinguari con la leyenda de un perezoso gigante prehistórico, el <em>Megatherium</em>, una bestia que habitó la Tierra hace más de 10,000 años y que algunos creen que pudo haber sobrevivido en los rincones más profundos de la Amazonía. Para los pueblos indígenas, sin embargo, es más que un simple monstruo: es el guardián de los secretos de la inmortalidad y el protector de la selva. Se dice que persigue con especial saña a los cazadores furtivos y a los madereros que destruyen el bosque, recordándoles que hay un precio por dañar la naturaleza. La única forma de acabar con él es disparándole en el ojo, un blanco casi imposible de alcanzar para un humano presa del terror.</p>`,
    atributos: [
      "Un ojo",
      "Boca en el vientre",
      "Olor fétido",
      "Chamán inmortal",
    ],
    iconos: ["fa-eye", "fa-skull", "fa-smog", "fa-infinity"],
  },
  
  {
    id: "duende-florencia",
    nombre: "El Duende",
    cultura: "Florencia, Caquetá",
    region: "amazonia",
    imagen: "../img/Criaturas/Duende_AMZ.webp",
    descripcion_corta:
      "Niño de gran sombrero que secuestra a los desprevenidos.",
    descripcion: `<h3>🧒 El niño del sombrero gigante</h3>
        <p>En la ciudad de Florencia, capital del departamento del Caquetá, los abuelos advierten a los más jóvenes sobre la presencia de un ser que acecha en las sombras. Lo llaman simplemente <strong>El Duende</strong>, y lo describen como una criatura diminuta, del tamaño de un niño pequeño, que carga consigo un sombrero desproporcionadamente grande que le cubre casi todo el cuerpo. No es un simple duende travieso de los que juegan bromas en las casas; este ser tiene un objetivo macabro: robar a los niños.</p>
        
        <h3>🎁 El seductor de infantes</h3>
        <p>El Duende no ataca por la fuerza. Es un maestro del engaño que utiliza una estrategia psicológica casi perfecta. Se obsesiona especialmente con los niños y niñas de cabello rubio o de facciones hermosas, a quienes considera "de admirable presencia". Su técnica de caza consiste en acercarse sigilosamente a su presa y ofrecerle juguetes, dulces y todo tipo de regalos para ganarse su confianza. Poco a poco, a través de promesas y halagos, va atrayendo al menor hacia la espesura de la selva, alejándolo del hogar y de la protección de sus padres.</p>
        
        <h3>🌿 El regreso a la civilización</h3>
        <p>Una vez que el niño es llevado al corazón del bosque, la leyenda cuenta que se "vuelve salvaje". Si los padres logran encontrarlo antes de que sea demasiado tarde, deben someterlo a un ritual de purificación: bañarlo con agua bendita para romper el hechizo del Duende y devolverlo a su estado humano. Aquellos que han sufrido el rapto y han sido rescatados suelen contar que durante su cautiverio vieron luces extrañas entre los árboles y escucharon risas que parecían venir de todas partes a la vez.</p>
        
        <h3>✂️ Cómo protegerse</h3>
        <p>Los ancianos del Caquetá aseguran que solo la persona que va a ser raptada puede ver al Duende; para el resto de los mortales, es invisible. La forma más efectiva de prevenir su ataque es, al notar su presencia cercana, cortar el cabello del niño que está siendo acechado. Este sencillo acto, según la tradición, neutraliza el poder del Duende y lo ahuyenta de regreso a su guarida en la selva. Por eso, en los pueblos rurales del Caquetá, las madres mantienen el cabello de sus hijos pequeños siempre bien recortado, como un amuleto contra este secuestrador de la noche.</p>`,
    atributos: [
      "Sombrero gigante",
      "Rapta niños",
      "Ofrece regalos",
      "Invisible para adultos",
    ],
    iconos: ["fa-hat-cowboy", "fa-child", "fa-gift", "fa-eye-slash"],
  },

  {
    id: "bufeo-colorado",
    nombre: "Bufeo Colorado",
    cultura: "Amazonas, Putumayo",
    region: "amazonia",
    imagen: "../img/Criaturas/Bufeo_Colorado.webp",
    descripcion_corta: "Delfín rosado que seduce mujeres en las fiestas.",
    descripcion: `<h3>🐬 El delfín que se vuelve hombre</h3>
        <p>En las profundidades del río Amazonas y sus afluentes en los departamentos de Amazonas y Putumayo, habita una criatura tan hermosa como peligrosa: el <strong>Bufeo Colorado</strong>, también conocido como delfín rosado o <em>tonina</em>. No es un animal común; los pueblos indígenas y ribereños aseguran que posee poderes mágicos para transformarse en un apuesto joven de piel blanca, cabello rubio o castaño, y ojos claros. Siempre viste de blanco, de pies a cabeza, y usa un elegante sombrero que oculta un pequeño orificio en la coronilla, su único rasgo que delata su verdadera naturaleza acuática.</p>
        
        <h3>🎭 El seductor de las fiestas</h3>
        <p>El Bufeo Colorado espera las noches de luna llena o las grandes celebraciones comunitarias —como la Fiesta de la Pelazón o el Atuasma— para salir del agua. Se mezcla entre la multitud, baila, bebe masato y conversa con las jóvenes más hermosas. Su labia es inigualable y su presencia magnética; ninguna mujer puede resistirse a sus encantos. Con promesas de amor eterno y una vida mejor, convence a su víctima para que lo acompañe a la orilla del río. Una vez allí, la toma de la mano y la sumerge en las aguas, desapareciendo ambos en las profundidades.</p>
        
        <h3>👶 La explicación de los embarazos misteriosos</h3>
        <p>La leyenda del Bufeo Colorado tiene una función social muy clara en las comunidades amazónicas: explica los embarazos no deseados o de origen incierto. Cuando una joven soltera queda encinta sin que nadie reconozca al padre, los ancianos sentencian: <em>"Fue el Bufeo"</em>. Se dice que los niños nacidos de estas uniones tienen orejas grandes, rasgos especiales o habilidades sobrenaturales para la pesca. Algunos incluso portan un pequeño orificio en la cabeza, igual que su padre delfín. La madre jamás vuelve a ver a su amante, pero el niño crece con la marca del río.</p>
        
        <h3>⚠️ Cómo evitar su hechizo</h3>
        <p>Los ribereños conocen algunas formas de protegerse del Bufeo Colorado. La más efectiva es llevar consigo un diente del propio animal, que se utiliza para preparar pócimas de protección o, en manos malintencionadas, para hacer <em>pusanga</em> (brujería de amor). También se dice que si una mujer sospecha que un apuesto desconocido es un delfín transformado, debe fijarse en su sombrero o pedirle que se lo quite; si se niega o si al caer el sombrero muestra un orificio en la cabeza, debe huir sin mirar atrás. El Bufeo no soporta el olor del tabaco ni el de la guasca (una planta aromática), por lo que muchos pescadores las usan como amuletos antes de salir de noche.</p>`,
    atributos: [
      "Delfín rosado",
      "Se transforma en hombre",
      "Seduce en fiestas",
      "Embarazos misteriosos",
    ],
    iconos: ["fa-fish", "fa-mask", "fa-music", "fa-baby"],
  },

  {
    id: "yara-iara",
    nombre: "Yara",
    cultura: "Amazonas, Putumayo",
    region: "amazonia",
    imagen: "../img/Criaturas/Yara.webp",
    descripcion_corta:
      "Sirena de cabellos largos que atrae hombres con su canto.",
    descripcion: `<h3>🧜‍♀️ La sirena de los ríos amazónicos</h3>
        <p>En los remansos tranquilos y las lagunas de aguas oscuras del Amazonas y Putumayo, vive la <strong>Yara</strong> (también llamada <em>Iara</em> en Brasil). Es una sirena diferente a las europeas: su cabellera larga y negra flota en la superficie como serpientes acuáticas, su piel es bronceada por el sol tropical y sus ojos verdes o dorados brillan en la noche. De cintura para arriba tiene forma de mujer hermosa; de cintura para abajo, su cuerpo se alarga en una cola escamosa de tonos verdes y dorados que se confunde con el follaje reflejado en el agua.</p>
        
        <h3>🎵 El canto que hechiza a los hombres</h3>
        <p>La Yara no necesita la fuerza bruta para atrapar a sus víctimas. Su arma más poderosa es su voz: un canto suave, arrullador y melancólico que flota sobre el río en las noches sin luna. Los pescadores solitarios, los viajeros en canoa y los jóvenes imprudentes que se acercan a la orilla escuchan esa melodía y sienten una atracción irresistible. Reman hacia ella sin control, con los ojos vidriosos y una sonrisa boba en el rostro. Cuando están lo suficientemente cerca, la Yara emerge, los mira fijamente y los sumerge en el agua con un movimiento rápido de su cola.</p>
        
        <h3>🏰 Los palacios encantados del fondo del río</h3>
        <p>Los hombres arrastrados por la Yara no mueren, al menos no de inmediato. Según la leyenda, ella los lleva a sus palacios submarinos, construidos con piedras preciosas, conchas y corales de agua dulce. Allí los convierte en esclavos, obligándolos a servirla y a satisfacer sus caprichos amorosos para siempre. Las almas de estos cautivos se reflejan en la superficie como burbujas que suben y estallan sin razón. De vez en cuando, algún pescador anciano jura haber visto a un hombre conocido años atrás, sentado en el fondo del río, peinando el cabello de la Yara mientras ella canta.</p>
        
        <h3>🌙 La Yara y la luna</h3>
        <p>Existe una variante de la leyenda que vincula a la Yara con la luna. Se dice que ella fue una princesa indígena que murió ahogada por desamor y que los dioses la transformaron en sirena como castigo por su vanidad. Por eso, cuando la luna llena se refleja en el agua, la Yara sale a la superficie para peinarse y cantar, recordando su vida pasada. Los sabedores recomiendan nunca navegar solos en noches de luna llena, y si se escucha un canto hermoso pero triste, taparse los oídos con barro o cera y remar en dirección contraria sin volver la mirada.</p>`,
    atributos: [
      "Sirena amazónica",
      "Canto hipnótico",
      "Palacios submarinos",
      "Esclaviza hombres",
    ],
    iconos: ["fa-female", "fa-music", "fa-water", "fa-gem"],
  },

  {
    id: "tunche",
    nombre: "Tunche",
    cultura: "Caquetá, Putumayo",
    region: "amazonia",
    imagen: "../img/Criaturas/Tunche.webp",
    descripcion_corta: "Alma en pena cuyo silbido anuncia la muerte.",
    descripcion: `<h3>😱 El silbido de la muerte</h3>
        <p>En las selvas de Caquetá y Putumayo, cuando cae la noche y la neblina empieza a trepar desde los ríos, los pobladores cierran puertas y ventanas. Saben que el <strong>Tunche</strong> (también llamado <em>Tunchi</em> o <em>Kakuy</em>) ronda por los caminos. No es un ser con cuerpo definido: es un alma en pena, el espíritu de alguien que murió de forma trágica o violenta —ahogado, asesinado o víctima de una fiera— y que vaga sin descanso. Quienes lo han visto lo describen como una sombra alta, sin rostro, que flota a ras del suelo.</p>
        
        <h3>🗣️ El silbido fatal</h3>
        <p>La señal inequívoca de su presencia es un silbido agudo, largo y penetrante que parece venir de todas direcciones a la vez. No es un silbido cualquiera: hela la sangre, eriza la piel y paraliza a quien lo escucha. La tradición dice que <strong>nunca se debe imitar el silbido del Tunche</strong>. Si alguien lo hace, el espíritu se enfurece, se acerca rápidamente y le arranca la lengua o lo enloquece para siempre. Tampoco se debe silbar de noche en la selva, porque el Tunche puede confundir ese sonido con una invitación.</p>
        
        <h3>💀 ¿Qué hacer si se escucha?</h3>
        <p>Las comunidades indígenas y campesinas tienen claras las reglas de supervivencia ante el Tunche. Si se oye su silbido a lo lejos, hay que quedarse quieto, no hacer ruido y rezar en silencio. Si se escucha muy cerca, hay que encender una fogata o una vela, pues el Tunche teme la luz. También se dice que masticar hojas de coca o fumar tabaco ahuyenta al espíritu. Pero lo peor que puede ocurrir es escuchar el silbido tres veces seguidas: eso significa que el Tunche ya eligió a su víctima y antes del amanecer, esa persona morirá ahogada, aplastada por un árbol o desaparecerá sin dejar rastro.</p>
        
        <h3>🌲 Un guardián de los secretos de la selva</h3>
        <p>Algunos relatos más antiguos no ven al Tunche como un demonio, sino como el espíritu guardián de los lugares sagrados. Aparece para ahuyentar a los forasteros que se adentran donde no deben, para proteger las tumbas ancestrales o los árboles milenarios que los chamanes consideran morada de dioses. Por eso, cuando un guía indígena escucha un silbido y decide dar media vuelta, nadie pregunta por qué. Saben que el Tunche está vigilando y que es mejor respetar su territorio. <em>"El que silba en la selva, silba su propia sentencia"</em>, reza el dicho popular.</p>`,
    atributos: [
      "Alma en pena",
      "Silbido mortal",
      "Anuncia la muerte",
      "Teme la luz",
    ],
    iconos: ["fa-ghost", "fa-music", "fa-skull", "fa-lightbulb"],
  },

  {
    id: "chullachaqui",
    nombre: "Chullachaqui",
    cultura: "Amazonas, Putumayo",
    region: "amazonia",
    imagen: "../img/Criaturas/Chullachaqui.webp",
    descripcion_corta: "Duende de un pie humano y uno de cabra, que confunde.",
    descripcion: `<h3>👣 El guardián de los pies desiguales</h3>
        <p>En la espesura más densa de la selva amazónica, donde la luz del sol apenas se filtra entre las copas de los árboles, acecha el <strong>Chullachaqui</strong>. Su nombre proviene del quechua <em>chulla chakji</em> —"pie disparejo" o "desigual"—, y su característica más distintiva es precisamente esa: un pie es humano, normal, mientras que el otro es una pata de animal, comúnmente de cabra, venado o sajino. Es por esta deformidad que siempre intenta ocultar sus extremidades bajo harapos o entre la hojarasca, dejando un rastro confuso de una huella humana y otra animal, la señal inequívoca de su presencia para los cazadores experimentados.</p>
        
        <h3>🎭 El maestro del engaño</h3>
        <p>El Chullachaqui no es un ser malévolo por naturaleza, sino un guardián celoso de su territorio. Su principal poder es la metamorfosis: puede adoptar la forma de cualquier persona, y frecuentemente se transforma en un familiar o amigo cercano para engañar a los visitantes. Con esta apariencia familiar, se presenta ante el viajero solitario y, mediante engaños y una conversación amigable, lo va guiando por senderos falsos, cada vez más adentro de la espesura del bosque. La víctima, confiada, sigue a su supuesto ser querido hasta perderse irremediablemente. También se dice que puede convertir a las serpientes de coral en flautas, y viceversa, como parte de su repertorio mágico.</p>
        
        <h3>🌿 El protector de la selva</h3>
        <p>Más allá del miedo que inspira, el Chullachaqui cumple una función ecológica fundamental en la cosmovisión amazónica. Es considerado el dueño y protector de los animales y las plantas. No ataca a cualquiera: elige a sus víctimas entre los cazadores irrespetuosos que matan más de lo necesario, los que sacrifican hembras preñadas o crías, y aquellos que talan árboles sin necesidad. En cambio, a los pobladores justos o de su agrado les da provisión para varias semanas. Se dice que suele llevar a los animales heridos a las parcelas de cultivo para curarlos, y que a veces intercambia regalos con los indígenas como muestra de agradecimiento.</p>
        
        <h3>😈 Una criatura de dos caras</h3>
        <p>Según algunas versiones, el Chullachaqui se originó de una relación entre un duende y un demonio, siendo una especie híbrida entre ambas criaturas. Su apariencia física es inconfundible: pequeño, encorvado, con rostro de adulto pero cuerpo de niño, cabello largo y barba, panza sobresaliente, nariz enorme, orejas puntiagudas y ojos rojos que brillan en la oscuridad. Otro rasgo particular que comparte con otros duendes de la selva es que no posee glúteos ni ano, lo que lo hace fácilmente reconocible cuando no está transformado. A veces se presenta de manera amistosa, otorgando regalos de la selva; otras, se muestra agresivo, sobre todo hacia personas pecadoras o ateas. Quienes logran escapar de sus engaños cuentan que la única forma de identificarlo es fijarse en sus pies, que siempre intenta cubrir.</p>`,
    atributos: [
      "Pie humano y animal",
      "Metamorfosis",
      "Guardián del bosque",
      "Castiga cazadores",
    ],
    iconos: ["fa-shoe-prints", "fa-mask", "fa-tree", "fa-gavel"],
  },

  {
    id: "cotomachaco",
    nombre: "Cotomachaco",
    cultura: "Leticia, Amazonas",
    region: "amazonia",
    imagen: "../img/Criaturas/Cotomachaco.webp",
    descripcion_corta: "Boa de dos cabezas, cazadora implacable.",
    descripcion: `<h3>🐍 La serpiente de dos cabezas</h3>
        <p>En los rincones más profundos de la selva amazónica, cerca de lagunas donde nadie se atreve a caminar, habita una criatura insólita: el <strong>Cotomachaco</strong>, también conocido como <em>Coto</em>. Se trata de una boa colosal con dos cabezas, cada una apuntando a destinos contrarios pero esenciales. Su primera cabeza se alza con majestuosidad entre las ramas de los árboles más altos, alcanzando hasta los cincuenta metros, como si el mismo cielo la hubiera puesto allí para vigilar su reino desde las alturas. Su otra cabeza descansa sobre la tierra, recostada sobre el mullido lecho del mundo, siempre alerta.</p>
        
        <h3>🍽️ Un apetito insaciable</h3>
        <p>El Cotomachaco come todo lo que pasa: sea cristiano o animal, lo devora sin piedad. La cabeza que cuelga de los árboles caza animales arbóreos como monos aulladores, micos y aves; la cabeza que reposa en la tierra acecha al caminante despistado, al cazador que se interna solo en la selva. Es un solo animal, pero se alimenta de las dos formas, y su barriga siempre está hinchada por la cantidad de presas que consume. Si una persona se topa con él, el Cotomachaco "jala" a su víctima, la tira hacia arriba y se la traga entera, dejando tras de sí solo la escopeta del cazador en el suelo, como un escalofriante testimonio de su paso.</p>
        
        <h3>🦍 El grito que anuncia la muerte</h3>
        <p>Se le llama <em>Cotomachaco</em> o <em>Coto</em> porque su grito se asemeja al de un mono aullador: un "<em>wo, wo, wo</em>" que resuena en la selva como un eco de tristeza olvidada. Pero ese grito no es una simple llamada: es una promesa de muerte. Cuando los cazadores lo escuchan, saben que el Cotomachaco está cerca y que los ha elegido como su próxima cena. Algunos, confiados o temerarios, dicen "Voy a matar un coto" y se adentran en la selva con sus escopetas. Pero el animal siempre se adelanta, los atrapa antes de que puedan disparar y desaparece con ellos en su inmensa barriga. Los que logran escapar —pocos— advierten a los demás que nunca bajen la guardia y que honren el silencio donde se esconde lo intangible.</p>
        
        <h3>🌙 Un mito de advertencia</h3>
        <p>La leyenda del Cotomachaco es una de las más temidas en la región amazónica, y tiene una función clara: advertir a los más jóvenes sobre los peligros de adentrarse solos en la selva, especialmente cerca de lagunas o en lugares apartados. Los ancianos de las comunidades cuentan que este ser sobrenatural vive "donde nadie anda", en los rincones más recónditos del bosque, y que nadie debería aventurarse allí sin respeto ni preparación. Por eso, en Leticia y sus alrededores, cuando alguien escucha un "<em>wo, wo, wo</em>" en la distancia, regresa a casa sin mirar atrás, sabiendo que el Cotomachaco está acechando.</p>`,
    atributos: [
      "Boa de dos cabezas",
      "Caza en árboles y tierra",
      "Grito de mono aullador",
      "Devora cazadores",
    ],
    iconos: ["fa-snake", "fa-tree", "fa-volume-up", "fa-skull"],
  },

  {
    id: "hombre-encantado",
    nombre: "Hombre Encantado",
    cultura: "Putumayo, Amazonas (Comunidad Tikuna)",
    region: "amazonia",
    imagen: "../img/Criaturas/Hombre-Encantado.webp",
    descripcion_corta: "Joven atrapado por una boa negra en el fondo del río.",
    descripcion: `<h3>🧒 El muchacho que siempre mentía</h3>
        <p>En las riberas del Putumayo y el Amazonas, entre las comunidades tikuna, se cuenta la trágica historia del <strong>Muchacho Encantado</strong>. Era un joven de quince años, travieso y mentiroso, que había convertido en un juego cruel una falsa alarma: se tiraba al río, gritaba pidiendo auxilio y simulaba que se ahogaba. La gente acudía presurosa a rescatarlo, solo para descubrir que se trataba de una broma de mal gusto. Así ocurrió una y otra vez, hasta que llegó el día en que todos dejaron de creerle.</p>
        
        <h3>🐍 El hechizo de la boa negra</h3>
        <p>Un atardecer, el muchacho se metió al agua como de costumbre y comenzó a gritar. Pero esta vez no era un engaño: realmente se estaba ahogando. Nadie acudió a ayudarlo. Sus padres, al ver que no regresaba, fueron a buscarlo desesperados. Consultaron a los chamanes más poderosos de la región, quienes, tras sus rituales de revelación, les dieron la aterradora verdad: el joven había sido <strong>encantado por una boa negra</strong>, una serpiente de poderes mágicos que había tomado la forma de una mujer hermosa para seducirlo y arrastrarlo al fondo del río. Allí, en las profundidades, el muchacho seguía vivo, pero atrapado en un mundo encantado del que no podía escapar.</p>
        
        <h3>🎉 La fiesta que no logró salvarlo</h3>
        <p>Los chamanes indicaron a los padres que había una única oportunidad para recuperar a su hijo en cuerpo y alma: debían preparar una gran fiesta en la orilla del río. Cuando el muchacho se asomara y saliera del agua, todos debían salir de su escondite y caminar hacia él para traerlo de vuelta. Así lo hicieron. Pero cuando llegó el momento, una fuerza sobrenatural, más poderosa que la voluntad de los padres, les impidió acercarse. Era tal el poder del encantamiento que tuvieron que rendirse. El muchacho se sumergió de nuevo en las aguas y no volvió a salir jamás.</p>
        
        <h3>🌊 Un espíritu que ronda los ríos</h3>
        <p>Desde entonces, los pobladores del Putumayo y el Amazonas aseguran que el espíritu del Muchacho Encantado ronda las orillas de los ríos, especialmente en las noches de luna llena. Algunos afirman haber visto a un joven emergiendo del agua con la mirada perdida, para luego hundirse silenciosamente. Otros cuentan que escuchan su risa entre los remolinos, un eco burlón que recuerda el precio de mentir. La leyenda sirve como advertencia para los niños y jóvenes: no se debe jugar con la muerte ni engañar a quienes ofrecen su ayuda, porque el río —y la boa negra que lo habita— no olvidan ni perdonan.</p>`,
    atributos: [
      "Joven mentiroso",
      "Encantado por boa negra",
      "Fiesta fallida",
      "Ronda los ríos",
    ],
    iconos: ["fa-child", "fa-snake", "fa-music", "fa-water"],
  },

  // ==================== REGIÓN INSULAR ====================
  {
    id: "duppy",
    nombre: "Duppy",
    cultura: "San Andrés y Providencia",
    region: "insular",
    imagen: "../img/Criaturas/Duppy.webp",
    descripcion_corta:
      "Espíritu blanquecino de los muertos que vaga en la oscuridad y los sueños.",
    descripcion: `<h3>👻 El origen en la construcción de la carretera</h3>
        <p>La leyenda del <strong>Duppy</strong> es una de las más arraigadas en la tradición oral del archipiélago de San Andrés, Providencia y Santa Catalina. Su nombre, que en la lengua criolla de la isla es sinónimo de "fantasma" o "espectro", se remonta a la época en que se construyó la carretera que bordea la isla de San Andrés. Según cuentan los isleños, fue precisamente del lugar de donde se extrajo el material para esta obra de donde surgieron los primeros avistamientos de este ser, pues desde entonces se reportan constantes apariciones y espantos.</p>
        
        <h3>🌑 Un espectro de luz y frío</h3>
        <p>El <strong>Duppy</strong> es descrito como el espíritu de una persona fallecida que ha regresado al mundo de los vivos. Su apariencia es fantasmal y etérea: una silueta de un color blanco incoloro, con una tenue luminiscencia que oscila entre el blanco puro y un tenue dorado, que contrasta con la oscuridad que lo rodea. Los relatos coinciden en que su presencia no solo se ve, sino que también se siente, pues transmite un frío interior tan intenso que puede llegar a paralizar a quien lo tiene enfrente. Por esta razón, se le asocia comúnmente con los lugares más apartados, sombríos y solitarios de las islas.</p>
        
        <h3>😴 Visitante de los sueños</h3>
        <p>Una de las características más singulares de esta leyenda es que el <strong>Duppy</strong> no solo acecha en la realidad, sino que también tiene la capacidad de manifestarse en los sueños de las personas. Estas visitas oníricas son igual de aterradoras que un encuentro en la vida real, y los nativos las interpretan como un mal presagio o una advertencia. En la cultura isleña, hablar del Duppy es hacerlo con respeto y temor, pues se cree que su origen está ligado a almas en pena que no han encontrado descanso.</p>
        
        <p><em>"Si sientes un frío que no es de la brisa del mar, o ves una luz blanca donde no debería haberla, quizás el Duppy esté cerca."</em>, advierten los ancianos raizales.</p>`,
    atributos: ["Espíritu", "Lugares oscuros", "Sueños", "Frío paralizante"],
    iconos: ["fa-ghost", "fa-moon", "fa-bed", "fa-snowflake"],
  },
  {
    id: "rolling-calf",
    nombre: "Rolling Calf",
    cultura: "San Andrés y Providencia",
    region: "insular",
    imagen: "../img/Criaturas/Rolling-Calf.webp",
    descripcion_corta:
      "Bestia infernal que rueda envuelta en llamas con ojos de fuego.",
    descripcion: `<h3>🐂 El terror que rueda en la noche</h3>
        <p><strong>Rolling Calf</strong> es una de las criaturas más temidas del folclor isleño. Su nombre, que podría traducirse como "Ternero Rodante", hace honor a su forma de desplazarse: un ser infernal que rueda sin control por los montes y caminos solitarios de San Andrés. Se le describe como una bestia imponente, que guarda un gran parecido con un toro o una vaca, pero de un tamaño mucho más grande y una contextura robusta y aterradora.</p>
        
        <h3>👀 Ojos de fuego y olor a azufre</h3>
        <p>La característica más distintiva de <strong>Rolling Calf</strong> son sus ojos: dos esferas rojas y brillantes que parecen estar hechas de brasa viva, capaces de hipnotizar y aterrorizar a quien se atreva a mirarlos fijamente. Pero la pesadilla no termina ahí. La bestia está envuelta por completo en llamas ardientes que no la consumen, iluminando la oscuridad a su alrededor mientras rueda sin cesar. A su paso, deja un rastro inconfundible: un fuerte y penetrante olor a azufre, el mismo que, en la tradición popular, se asocia con el infierno y lo demoníaco.</p>
        
        <h3>😈 Un guardián del monte</h3>
        <p>Los más ancianos de la comunidad raizal cuentan que <strong>Rolling Calf</strong> aparece en las noches más oscuras para custodiar los secretos de la isla y alejar a los forasteros o a aquellos que transitan por el monte con malas intenciones. Su presencia es un presagio de desgracia, y quienes logran verlo y sobrevivir para contarlo, jamás olvidan el pánico que les produjo el resplandor de sus ojos y el calor sofocante de su cuerpo envuelto en llamas.</p>
        
        <p><em>"Cuando el viento trae olor a quemado y escuchas un rodar pesado en la tierra, no mires atrás. El Rolling Calf anda suelto."</em>, susurran los pescadores en las noches de luna nueva.</p>`,
    atributos: [
      "Criatura demoníaca",
      "Fuego y azufre",
      "Ojos rojos",
      "Protección del monte",
    ],
    iconos: ["fa-fire", "fa-skull", "fa-eye", "fa-tree"],
  },
  {
    id: "tesoro-pirata-morgan",
    nombre: "El Tesoro del Pirata Morgan",
    cultura: "San Andrés (Cueva de Morgan)",
    region: "insular",
    imagen: "../img/Criaturas/Tesoro-Morgan.webp",
    descripcion_corta:
      "Fabulosa fortuna pirata custodiada por almas en pena en una cueva encantada.",
    descripcion: `<h3>🏴‍☠️ El Alacrán del Caribe</h3>
        <p>A mediados del siglo XVII, el temido pirata inglés <strong>Henry Morgan</strong>, conocido como "el Azote del Caribe", surcaba los mares sembrando el terror entre los galeones españoles. Su fama de despiadado y su astucia para el saqueo le permitieron acumular una de las fortunas más grandes jamás vista en la piratería: montañas de oro, barriles de plata, perlas y las más finas piedras preciosas, producto del saqueo y la quema de ciudades como Puerto Príncipe, Portobelo y la Vieja Panamá.</p>
        
        <h3>🕯️ La búsqueda del escondite perfecto</h3>
        <p>Cansado de cargar con tanto botín y temiendo ser descubierto por sus enemigos o traicionado por los suyos, <strong>Morgan</strong> emprendió la búsqueda de un lugar seguro donde ocultar su tesoro. Fue así como llegó a la isla de San Andrés, un paraíso escondido en el Caribe colombiano, y encontró una cueva de roca coralina cuyas condiciones eran perfectas. La cavidad, ubicada en el kilómetro ocho de la vía circunvalar, cuenta con una gran profundidad que sobrepasa los <strong>120 metros</strong>, con aguas subterráneas que se comunican directamente con el océano a través de un sistema de galerías internas de unos 35 metros, un lugar casi inaccesible para cualquier curioso.</p>
        
        <h3>💀 El pacto de sangre</h3>
        <p>La leyenda narra que, para asegurarse de que su riqueza jamás fuera profanada, <strong>Morgan</strong> realizó un macabro ritual. Una vez que todo el tesoro fue transportado al interior de la cueva, ordenó a sus cuatro esclavos más fieles que custodiaran la entrada. Acto seguido, y con la frialdad que lo caracterizaba, los decapitó uno por uno y los enterró junto a las riquezas, condenando sus almas a vagar por siempre como guardianes eternos del botín.</p>
        
        <h3>✨ Un tesoro maldito</h3>
        <p>Desde entonces, se dice que el codiciado tesoro del pirata <strong>Henry Morgan</strong> continúa en el fondo de esa cueva, en un nivel aún inaccesible para los seres humanos. Muchos han sido los que, a lo largo de los años, han intentado encontrar la fortuna, pero todos han fracasado. La leyenda afirma que, para tener éxito, es necesario realizar ciertos pactos o rituales secretos a la medianoche. Si alguien logra encontrar el tesoro y no cumple con lo prometido, o si una persona con malas intenciones se atreve a tocarlo, los espíritus de los esclavos decapitados lo maldecirán por el resto de su vida, condenándolo a terribles parálisis o a la locura eterna.</p>
        
        <p><em>"El oro de Morgan sigue ahí, en la cueva. Se ve desde fuera, pero quien entra con codicia, jamás sale."</em>, afirman los nativos raizales, manteniendo viva la historia de generación en generación.</p>`,
    atributos: [
      "Tesoro maldito",
      "Cueva de Morgan",
      "Espíritus guardianes",
      "Rituales",
    ],
    iconos: ["fa-coins", "fa-mask", "fa-water", "fa-crown"],
  },
  {
    id: "anancy",
    nombre: "Anancy",
    cultura: "San Andrés y Providencia",
    region: "insular",
    imagen: "../img/Criaturas/Anancy.webp",
    descripcion_corta:
      "Astuta araña trickster que teje enseñanzas morales entre el bien y el mal.",
    descripcion: `<h3>🕷️ El origen africano de la astuta araña</h3>
      <p><strong>Anancy</strong> es uno de los personajes más queridos y fascinantes de la tradición oral del archipiélago de San Andrés, Providencia y Santa Catalina. Su nombre proviene de la lengua akan (originaria de la actual Ghana), donde "Ananse" significa literalmente "araña". Aunque en el folclor de África Occidental es conocido como un dios menor o un trickster embaucador que a menudo adopta la forma de un arácnido, en las islas ha adquirido rasgos profundamente humanos y una fluidez de género característica: los isleños raizales se refieren a esta criatura tanto como "Beda Anancy" (hermano Anancy) o "Sista Anancy" (hermana Anancy), según la historia que se esté contando.</p>
      
      <h3>🌊 La travesía del Atlántico</h3>
      <p>Los cuentos de <strong>Anancy</strong> llegaron a las costas del Caribe colombiano a bordo de los barcos esclavistas que cruzaron el Atlántico durante siglos. Lo que en Ghana era una deidad venerada, en las islas se transformó en un símbolo de resistencia cultural y adaptación para los pueblos africanos esclavizados. Las historias de la araña se convirtieron en una válvula de escape y en un vehículo para preservar la identidad frente a la opresión. Por eso, aunque hoy en día los niños isleños conocen a Caperucita Roja o Blanca Nieves, las narraciones de Anancy siguen siendo el pilar del legado oral raizal.</p>
      
      <h3>✨ Un personaje de dos caras</h3>
      <p>A diferencia de otros seres del bestiario colombiano, <strong>Anancy</strong> no es ni completamente bueno ni completamente malo. En unas historias aparece como un héroe que protege a los débiles, mientras que en otras encarna al villano que siembra el caos. Puede mentir, robar y tender trampas para salirse con la suya, pero también puede ser víctima de sus propios engaños. En muchos cuentos, el embaucador se enfrenta a animales más grandes y poderosos, como el Tigre, el Mico o el Chivo, y casi siempre los vence usando únicamente su astucia, la creatividad y la palabra. Esa dualidad lo convierte en un personaje profundamente humano, con virtudes y defectos, que juega constantemente con los límites de la moral.</p>
      
      <h3>📚 Enseñanzas para toda la vida</h3>
      <p>Aunque <strong>Anancy</strong> haga trampa y mienta, sus cuentos no se narran para imitarlo, sino todo lo contrario: se cuentan para reflexionar sobre sus actos y aprender de sus errores. Los relatos de la araña suelen tener una fuerte carga pedagógica y se transmiten en reuniones familiares donde los niños escuchan atentos las aventuras del personaje. De esta manera, los más pequeños aprenden valores como la honestidad, la humildad y el respeto por los demás. Algunos investigadores sostienen que Anancy funciona como un espejo de las tensiones sociales y que permite a los isleños liberar, a través de la ficción, sus deseos más profundos de transgredir las normas.</p>
      
      <p><em>"Ser raizal es contarles a tus hijos y a tus nietos historias, cuentos y relatos de Beda Nancy, Taiga y Alligator".</em>, reza un antiguo periódico regional, demostrando que mientras haya quien los narre, Anancy nunca morirá.</p>`,
    atributos: ["Trickster", "Dualidad", "Tradición oral", "Astucia"],
    iconos: ["fa-spider", "fa-theater-masks", "fa-book", "fa-lightbulb"],
  },
  {
    id: "boca",
    nombre: "Boca",
    cultura: "San Andrés",
    region: "insular",
    imagen: "../img/Criaturas/Boca.webp",
    descripcion_corta:
      "Espectro con la boca cortada y ensangrentada, usado para asustar a los niños.",
    descripcion: `<h3>😱 El espanto de la sonrisa sangrante</h3>
      <p>En las noches más oscuras de la isla de San Andrés, los padres isleños susurran el nombre de <strong>Boca</strong> (pronunciado "Buoca") para infundir respeto y temor en los niños que se portan mal. Este espanto, cuyo rostro grotesco permanece eternamente desfigurado por un profundo corte que va de oreja a oreja, es una de las leyendas más utilizadas en la tradición oral de la región insular para advertir a los más pequeños sobre los peligros de la desobediencia.</p>
      
      <h3>🩸 Una apariencia que aterra</h3>
      <p>La apariencia de <strong>Boca</strong> es tan simple como aterradora: un rostro humano, pero con una gran herida que cruza la boca de lado a lado, dejando al descubierto una dentadura rota y ensangrentada. Las versiones más antiguas del mito aseguran que el espanto vaga por los alrededores de los pueblos, especialmente por los caminos solitarios que bordean los manglares, y que se aparece sin previo aviso a los niños que han desobedecido a sus padres o que se han alejado demasiado de sus casas. Algunos relatos añaden que Boca puede emitir un gemido ahogado y que, al abrir su boca cortada, deja escapar un hedor nauseabundo a carne podrida.</p>
      
      <h3>🔪 Una práctica indígena olvidada</h3>
      <p>Aunque hoy en día la leyenda de <strong>Boca</strong> se cuenta principalmente como un recurso pedagógico para asustar a los niños, algunos historiadores orales de la isla sostienen que el mito tiene un origen real. Hace décadas, ciertas tribus indígenas que habitaban las costas del Caribe colombiano practicaban un rito de mutilación consistente en cortarse los labios o las comisuras de la boca como señal de duelo o como advertencia para los enemigos. Con el paso del tiempo, esa costumbre se fue perdiendo, pero el recuerdo de aquellos rostros desfigurados se transformó en el espanto que hoy conocemos.</p>
      
      <h3>👹 Un guardián del orden</h3>
      <p>Más que un simple fantasma vengativo, <strong>Boca</strong> funciona en el imaginario isleño como un guardián del orden social. Los adultos lo invocan para que los niños no se alejen de sus hogares después del anochecer y para que respeten las normas de la comunidad. Aunque su presencia es aterradora, su función es preventiva, y ningún isleño ha reportado jamás un ataque físico por parte del espanto. Sin embargo, el miedo que produce su sola mención basta para mantener a raya a los más traviesos.</p>
      
      <p><em>"Si no te portas bien, esta noche vendrá Boca y te asustará con su boca cortada"</em>, advierten los abuelos raizales, asegurándose de que la tradición oral se siga transmitiendo de generación en generación.</p>`,
    atributos: [
      "Espectro",
      "Boca cortada",
      "Castigo infantil",
      "Tradición oral",
    ],
    iconos: ["fa-face-angry", "fa-cut", "fa-child", "fa-book"],
  },
  {
    id: "booboo",
    nombre: "Booboo",
    cultura: "San Andrés",
    region: "insular",
    imagen: "../img/Criaturas/Booboo.webp",
    descripcion_corta:
      "Demonio con tres cabezas de perro que acecha a los niños desobedientes.",
    descripcion: `<h3>🐕‍🦺 El Cerbero del Caribe colombiano</h3>
      <p>En las profundidades de la selva de San Andrés, protegido por la espesura de los manglares y las palmeras, habita una de las criaturas más temidas del folclor isleño: <strong>Booboo</strong>, también conocido como "Buba". Este ser mitológico, cuya apariencia evoca a un enorme perro o lobo de tres cabezas, es el equivalente isleño al Cerbero de la mitología griega, pero con un propósito mucho más cercano a la realidad cotidiana de los raizales: castigar a los niños desobedientes y ahuyentar a los forasteros con malas intenciones.</p>
      
      <h3>👁️ Tres cabezas, tres personalidades</h3>
      <p><strong>Booboo</strong> es descrito como una criatura de pelaje negro y áspero, con ojos que brillan como dos hogueras en la oscuridad y dientes afilados capaces de desgarrar cualquier presa. Pero su rasgo más distintivo son sus tres cabezas: la primera, feroz y agresiva, está siempre alerta para defender su territorio; la segunda, juguetona y traviesa, se dedica a tender trampas a los incautos que se adentran en el bosque; y la tercera, sabia y serena, parece observar con inteligencia cada movimiento. Cada una de las cabezas posee un olfato independiente y una visión panorámica que le otorga a la bestia una consciencia de 360 grados de lo que ocurre a su alrededor.</p>
      
      <h3>🔥 El guardián de los tesoros y protector de la isla</h3>
      <p>Aunque la versión más popular de la leyenda asegura que <strong>Booboo</strong> persigue a los niños que se portan mal o que se alejan de sus casas después del anochecer, existe una variante menos conocida pero igual de fascinante: la del Booboo como guardián de los tesoros escondidos en la isla y como protector del pueblo raizal. Algunos relatos cuentan que la criatura fue creada por un poderoso abuelo de la comunidad para defender a los isleños de los piratas, los conquistadores españoles y los saqueadores que amenazaban sus tierras. Bajo esa luz, Booboo dejaría de ser un mero demonio aterrador para convertirse en un héroe trágico que vaga solitario por las noches, protegiendo lo que le fue encomendado.</p>
      
      <h3>🌕 Un aullido que anuncia desgracia</h3>
      <p>La leyenda sostiene que <strong>Booboo</strong> solo sale de su cueva en las noches de luna llena y que, cuando lo hace, su aullido espeluznante llena de terror a todos los habitantes de la isla. Aunque su apariencia es aterradora, la criatura no suele atacar a los humanos a menos que estos representen una amenaza para los tesoros que protege o para la comunidad. Sin embargo, los niños que han sido desobedientes y se han adentrado en su territorio aseguran haber sentido sus pisadas pesadas y haber escuchado su respiración ronca justo detrás de ellos. Para evitar encontrarse con Booboo, los isleños recomiendan no caminar solos por el bosque por la noche, llevar un amuleto de la suerte y, sobre todo, respetar las normas impuestas por los mayores.</p>
      
      <p><em>"Cuando escuches tres ladridos en la noche, uno más feroz que el anterior, corre a casa sin mirar atrás. El Booboo anda suelto"</em>, advierten los pescadores en las noches de luna llena.</p>`,
    atributos: [
      "Tres cabezas",
      "Demonio guardián",
      "Noches de luna",
      "Castigo infantil",
    ],
    iconos: ["fa-dog", "fa-fire", "fa-moon", "fa-child"],
  },
  {
    id: "hombre-cangrejo",
    nombre: "El Hombre Cangrejo",
    cultura: "Santa Catalina",
    region: "insular",
    imagen: "../img/Criaturas/Hombre-Cangrejo.webp",
    descripcion_corta:
      "Protector de los cangrejos negros, capaz de transformarse de humano a crustáceo.",
    descripcion: `<h3>🦀 El guardián de los cangrejos negros</h3>
      <p>En la apacible isla de <strong>Santa Catalina</strong>, al norte de Providencia, el folclor raizal ha tejido la historia de un ser único: el <strong>Hombre Cangrejo</strong>. Esta leyenda, transmitida de generación en generación, habla de un hombre común, un pescador o habitante de la isla, que poseía la asombrosa capacidad de transformarse en un cangrejo negro de gran tamaño. Su razón de ser, sin embargo, no era la maldad, sino la protección de su entorno y de su gente.</p>
      
      <h3>✨ Una transformación con propósito</h3>
      <p>La leyenda describe al Hombre Cangrejo como un símbolo viviente de la conexión sagrada que los nativos del archipiélago tienen con el mar y sus recursos. Cuando la ocasión lo requería, este ser se metamorfoseaba, adquiriendo la capacidad de desplazarse con la misma soltura por la tierra firme y el fondo del océano, vigilando los arrecifes y playas de Santa Catalina. Se le atribuye una misión muy clara: ser el guardián de los <strong>cangrejos negros</strong>, una especie que migra masivamente por la isla y que tiene un gran valor cultural y alimenticio para la comunidad.</p>
      
      <h3>👁️ Vigilante de la naturaleza</h3>
      <p>Más allá de una simple historia para asustar, la figura del Hombre Cangrejo encarna un principio fundamental de la cultura raizal: el respeto por la naturaleza. Su existencia en el imaginario colectivo sirve como un poderoso recordatorio de que los recursos del mar no son inagotables y que deben ser usados con mesura. Se dice que este ser observa a los pescadores y visitantes, y que quienes dañan los arrecifes o cazan los cangrejos de manera desmedida pueden sufrir su ira o caer víctimas de sus travesuras. De esta forma, el Hombre Cangrejo se erige como un guardián ecológico, una metáfora viva del equilibrio entre el hombre y su entorno.</p>
      
      <h3>🏝️ Un legado que perdura</h3>
      <p>Aunque Santa Catalina es una isla pequeña y tranquila, la leyenda del Hombre Cangrejo resuena con fuerza, siendo uno de los cuentos más característicos e importantes para la comunidad. La historia invita tanto a locales como a visitantes a reflexionar sobre la profunda conexión que existe entre los isleños y el mar que los rodea, un vínculo que va más allá de lo material y se adentra en el terreno de lo mítico y lo espiritual, enseñando a las nuevas generaciones a valorar y proteger el paraíso natural que habitan.</p>`,
    atributos: [
      "Transformación",
      "Protector de la naturaleza",
      "Cangrejos negros",
      "Sabiduría ancestral",
    ],
    iconos: ["fa-paw", "fa-shield-alt", "fa-water", "fa-leaf"],
  },
  {
    id: "sirenas-providencia-rhaxche",
    nombre: "Rhaxche, la Sirena de Providencia",
    cultura: "Providencia",
    region: "insular",
    imagen: "../img/Criaturas/Rhaxche.webp",
    descripcion_corta:
      "Hermosa sirena de cabellos dorados que cautiva y protege a los pescadores de Providencia.",
    descripcion: `<h3>🧜‍♀️ La guardiana de las aguas turquesas</h3>
      <p>En las cristalinas aguas que bañan la <strong>Isla de Providencia</strong>, una leyenda resuena con la fuerza del oleaje: la historia de <strong>Rhaxche</strong>, una sirena de incomparable belleza. Esta criatura mítica es uno de los relatos más fascinantes del folclor isleño, una figura que encarna tanto el peligro como la protección del mar Caribe, envuelta en el misterio y la magia de las tradiciones orales raizales.</p>
      
      <h3>✨ La aparición de los dorados cabellos</h3>
      <p><strong>Rhaxche</strong> no es una sirena cualquiera. Los relatos la describen como un ser de una hermosura hipnótica, con largos cabellos dorados que brillan bajo el sol tropical y unos ojos que semejan dos valiosas perlas de mar, llenos de sabiduría y un profundo conocimiento del océano. Los pescadores que han tenido el privilegio (o la desgracia) de divisarla, cuentan que su aparición más común es al atardecer, cuando le gusta recostarse sobre las rocas que sobresalen del mar, peinando su larga melena mientras el cielo se pinta de tonos naranjas y violetas.</p>
      
      <h3>🎶 El canto hipnótico de Rhaxche</h3>
      <p>Como las sirenas de la mitología clásica, <strong>Rhaxche</strong> posee una voz de una belleza celestial, capaz de hechizar a cualquier hombre que la escuche. Su canto, que se mezcla con el rumor de las olas, tiene el poder de atraer a los marineros hacia las rocas, poniendo en riesgo sus embarcaciones. Sin embargo, a diferencia de sus contrapartes europeas, la leyenda de Rhaxche en Providencia tiene un matiz más benévolo. Muchos pescadores aseguran que, en medio de las tormentas más feroces y peligrosas, esta sirena se ha aparecido para guiarlos de vuelta a puerto, protegiéndolos de la furia del mar y evitando que naufragaran.</p>
      
      <h3>💎 El espíritu del mar</h3>
      <p>Para la comunidad raizal, <strong>Rhaxche</strong> es más que una simple leyenda para asustar a los niños; es el espíritu mismo del mar Caribe. Su figura adorna el imaginario colectivo como un recordatorio del respeto que se le debe al océano, fuente de vida y de recursos para la isla. Ya sea como un peligro que acecha a los desprevenidos o como una heroína que rescata a los valientes, Rhaxche sigue siendo un pilar fundamental de la identidad cultural de Providencia, una historia que las abuelas cuentan al oído de los más pequeños mientras la brisa marina acaricia las palmeras.</p>`,
    atributos: [
      "Sirena",
      "Canto hipnótico",
      "Protectora del mar",
      "Belleza dorada",
    ],
    iconos: ["fa-fish", "fa-music", "fa-sun", "fa-crown"],
  },
  {
    id: "espiritus-guardianes",
    nombre: "Espíritus Guardianes: Los Hermanos Mayores",
    cultura: "Providencia",
    region: "insular",
    imagen: "../img/Criaturas/Espiritus-guardianes.webp",
    descripcion_corta:
      "Entidades espirituales de la naturaleza que protegen montañas, ríos y arrecifes de Providencia.",
    descripcion: `<h3>🌳 La presencia invisible que todo lo cuida</h3>
      <p>En las verdes montañas, los caudalosos ríos y los vibrantes arrecifes de coral de la <strong>Isla de Providencia</strong>, los raizales saben que no están solos. La tradición oral habla de la existencia de entidades espirituales ancestrales conocidas como los <strong>"Hermanos Mayores"</strong>. Estos no son simples fantasmas o demonios, sino espíritus de la naturaleza con una misión sagrada: velar por la integridad y el equilibrio de su entorno, protegiendo la isla y a sus habitantes.</p>
      
      <h3>🤝 Rituales de respeto y reciprocidad</h3>
      <p>La creencia en los <strong>Hermanos Mayores</strong> está profundamente arraigada en las prácticas cotidianas de los isleños, especialmente en aquellas relacionadas con la pesca y la agricultura. Antes de lanzar sus redes al mar o de cosechar los frutos de la tierra, muchos pescadores y campesinos aún realizan pequeños rituales o plegarias para apaciguar a estos espíritus guardianes. El objetivo es pedir su permiso y su bendición, asegurándose de no ofenderlos con su accionar y de que su labor sea fructífera y segura. Esta tradición subraya la profunda conexión espiritual que los une con su entorno.</p>
      
      <h3>🌊 Guardianes del equilibrio ecológico</h3>
      <p>Se dice que los <strong>Hermanos Mayores</strong> son particularmente sensibles a las acciones humanas que dañan la naturaleza. La tala indiscriminada de árboles, la contaminación de los ríos o la pesca con métodos destructivos son actos que pueden desatar su ira. Quienes osan dañar el territorio bajo su custodia pueden sufrir desde malas cosechas y sequías hasta naufragios inexplicables o extrañas enfermedades. De esta manera, estos espíritus se convierten en los más efectivos guardianes ecológicos de la isla, enseñando a los más jóvenes el valor del respeto por la creación.</p>
      
      <p><em>"Antes de pescar, se debe pedir permiso al Hermano Mayor. Él sabe cuánto quitar y cuánto dejar en el mar para que nunca falte"</em>, explican los ancianos raizales, perpetuando esta sabiduría ancestral.</p>`,
    atributos: [
      "Espíritus de la naturaleza",
      "Protección",
      "Rituales ancestrales",
      "Equilibrio ecológico",
    ],
    iconos: ["fa-mountain", "fa-tree", "fa-fish", "fa-hand-sparkles"],
  },
  {
    id: "espiritu-del-abuelo-cacique",
    nombre: "El Espíritu del Abuelo Cacique",
    cultura: "Providencia",
    region: "insular",
    imagen: "../img/Criaturas/Abuelo-Cacique.webp",
    descripcion_corta:
      "Poderoso espíritu ancestral protector de la isla, que guía a su pueblo en tiempos de crisis.",
    descripcion: `<h3>👴 El ancestro que nunca se fue</h3>
      <p>En lo más profundo de la cosmovisión raizal de la <strong>Isla de Providencia</strong>, habita una figura espiritual de una importancia capital: el <strong>Abuelo Cacique</strong>. Lejos de ser un simple cuento para ahuyentar a los niños, este espíritu ancestral es venerado como un poderoso protector y guía de toda la comunidad. La tradición oral lo describe como la esencia inmortal de un antiguo líder de la isla, un hombre sabio y justo cuya muerte no fue el final, sino una transición a un estado superior de conciencia para velar eternamente por su pueblo.</p>
      
      <h3>🐟 Manifiesto en la naturaleza</h3>
      <p>Una de las características más fascinantes del <strong>Abuelo Cacique</strong> es su capacidad de manifestarse en el mundo terrenal. Aunque su espíritu es invisible, se dice que puede tomar la forma de un gran <strong>pez</strong> que nada majestuosamente cerca de los arrecifes, o la de una majestuosa <strong>ave</strong> que sobrevuela las montañas de la isla, observándolo todo. Los raizales más ancianos y respetados aseguran haberlo visto en estos avatares, interpretando su presencia como un mensaje o una señal.</p>
      
      <h3>📜 Guía en momentos de crisis</h3>
      <p>La función primordial del <strong>Abuelo Cacique</strong> es ofrecer guía y protección en los momentos más difíciles. La leyenda cuenta que cuando la isla enfrenta una amenaza, ya sea una tormenta feroz, un mal momento económico o un conflicto interno, el espíritu del cacique se manifiesta. Puede hacerlo a través de un sueño, donde le revela a un miembro de la comunidad la solución a sus problemas, o apareciéndose físicamente en alguna de sus formas animales para mostrar el camino a seguir o para alejar el peligro. Su presencia es un faro de esperanza y sabiduría, recordando a los isleños que no están solos y que cuentan con la protección de sus ancestros.</p>
      
      <p><em>"Cuando el mar se enoja y los vientos azotan, el Abuelo Cacique se convierte en un pez y nos guía a un puerto seguro"</em>, es una frase que se escucha en las noches de tormenta en Providencia.</p>`,
    atributos: [
      "Espíritu ancestral",
      "Protector de la isla",
      "Transformación animal",
      "Sabiduría",
    ],
    iconos: ["fa-user-tie", "fa-dove", "fa-fish", "fa-eye"],
  },
  {
    id: "hoyo-soplador-sirena",
    nombre: "El Hoyo Soplador y su Sirena",
    cultura: "San Andrés y Providencia",
    region: "insular",
    imagen: "../img/Criaturas/Hoyo-Soplador.webp",
    descripcion_corta:
      "Fenómeno natural habitado por una sirena que escucha los deseos de los visitantes.",
    descripcion: `<h3>🌊 El géiser mágico de San Andrés</h3>
      <p>En la impresionante costa sur de la isla de <strong>San Andrés</strong>, se encuentra uno de los fenómenos naturales más espectaculares del archipiélago: <strong>El Hoyo Soplador</strong>. Se trata de un imponente orificio en la roca volcánica que, empujado por la fuerza de las olas y el viento, expulsa potentes chorros de agua hacia el cielo, creando un espectáculo digno de admirar. Pero más allá de su imponente geología, este lugar es el epicentro de una fascinante leyenda local que le ha otorgado un carácter casi sagrado.</p>
      
      <h3>🧜‍♀️ La guardiana del Hoyo Soplador</h3>
      <p>Según la tradición oral, este impresionante géiser natural no está vacío. En sus profundidades, en el lugar exacto donde el mar se estrella contra las rocas, habita una <strong>sirena mágica</strong>. Esta criatura, de una belleza etérea y con un profundo conocimiento de los secretos del océano, es considerada la guardiana y el espíritu del lugar. La leyenda es clara al afirmar que la sirena del Hoyo Soplador tiene el poder de <strong>escuchar los deseos</strong> de todas las personas que se acercan a contemplar este fenómeno de la naturaleza.</p>
      
      <h3>✨ Una tradición de peticiones</h3>
      <p>Con el paso de los años, esta historia ha tejido una hermosa tradición entre los visitantes y los mismos isleños. Se dice que, en el preciso momento en que el Hoyo Soplador lanza su potente chorro de agua, la sirena está más atenta que nunca. Por esta razón, es costumbre acercarse al borde de la formación rocosa y, al ver el agua dispararse hacia el cielo, pedir un deseo con profunda fe. Muchos lugareños aseguran que la sirena es benevolente y que concede las peticiones de aquellos que se acercan con un corazón puro y respetuoso. Incluso, algunos relatos cuentan que el sonido ensordecedor del géiser es, en realidad, la forma que tiene la sirena de comunicarse y de alejar los malos espíritus o presagiar buen tiempo para los pescadores.</p>
      
      <h3>🏴‍☠️ El guardián del tesoro</h3>
      <p>Otra variante de la leyenda vincula a la sirena del Hoyo Soplador con la historia del pirata Henry Morgan. Los isleños más viejos insisten en que el famoso bucanero ocultó parte de su legendario tesoro en las profundidades de este lugar, y que la sirena fue la encargada por el pirata o por las fuerzas místicas de la isla para ser su guardiana eterna. De esta manera, El Hoyo Soplador no es solo una maravilla geológica, sino un lugar cargado de magia, historia y misterio, donde la realidad se confunde con el encanto de las leyendas del Caribe.</p>`,
    atributos: [
      "Fenómeno natural",
      "Sirena",
      "Concesión de deseos",
      "Tesoro escondido",
    ],
    iconos: ["fa-water", "fa-fan", "fa-gem", "fa-hand-sparkles"],
  },
];

// Funciones de acceso (sin manipulación del DOM)
function obtenerCriaturasPorRegion(region) {
  if (region === "todas") return criaturasDB;
  return criaturasDB.filter((c) => c.region === region);
}

function obtenerCriaturaPorId(id) {
  return criaturasDB.find((c) => c.id === id);
}

function obtenerRegiones() {
  const regionesSet = new Set(criaturasDB.map((c) => c.region));
  const regionesMap = {
    caribe: "caribe",
    andina: "andina",
    pacifica: "pacifico",
    orinoquia: "orinoquia",
    amazonia: "amazonia",
  };
  return Array.from(regionesSet).map((r) => ({
    id: r,
    nombre: regionesMap[r] || r,
  }));
}
