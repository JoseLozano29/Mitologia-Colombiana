// js/lugares.js
// Base de datos de lugares sagrados de Colombia

const lugaresDB = [
    // ==================== REGIÓN CARIBE ====================
    {
        id: "sierra-nevada-santa-marta",
        nombre: "Sierra Nevada de Santa Marta (Gonawindúa)",
        cultura: "Kogui, Arhuaco, Wiwa, Kankuamo",
        region: "caribe",
        imagen: "../img/Lugares/Sierra-Nevada.webp",
        descripcion_corta: "El 'Corazón del Mundo', centro espiritual y físico de la creación para los pueblos de la Sierra. Alberga la 'Línea Negra' de sitios sagrados.",
        descripcion: `<h3>🏔️ Un Macizo Único en el Mundo</h3>
        <p>La Sierra Nevada de Santa Marta no es una montaña cualquiera. Se trata de un sistema montañoso independiente, aislado de la cordillera de los Andes, que se eleva abruptamente desde las cálidas playas del mar Caribe hasta alcanzar picos nevados a más de 5.775 metros de altura, como el Pico Cristóbal Colón y el Simón Bolívar, los más altos de Colombia. Su área total es de aproximadamente 17.000 km² y se extiende por los departamentos del Magdalena, Cesar y La Guajira. Para la ciencia, es el macizo litoral más alto del mundo y un resumen climático único. Para los pueblos indígenas que la habitan, es el <strong>Gonawindúa</strong>, el "Corazón del Mundo".</p>
      
        <h3>🌍 El Corazón del Mundo: Una Cosmovisión Sagrada</h3>
        <p>Para los pueblos Kogui, Arhuaco, Wiwa y Kankuamo —conocidos como los "Hermanos Mayores"— la Sierra Nevada es mucho más que un territorio. Es el centro del universo, el lugar donde comenzó la creación y el punto desde donde se ordenó toda la vida sobre la Tierra. Según su <strong>Ley de Origen (Sé)</strong>, la Sierra es un ser vivo, un cuerpo cósmico cuyos picos nevados son las "cumbres sagradas" o "padres espirituales", y los ríos que de ella descienden son las venas que irrigan y equilibran el planeta. Cada elemento del paisaje —montañas, lagunas, ríos, rocas— tiene un dueño espiritual y una función dentro del orden universal. Los mamos (autoridades espirituales masculinas) y las sagas (autoridades femeninas) son los encargados de interpretar y mantener este equilibrio a través de complejos rituales y pagamentos (ofrendas).</p>
      
        <h3>🛡️ La Línea Negra: Cartografía del Territorio Sagrado</h3>
        <p>El territorio sagrado de los pueblos de la Sierra está delimitado por la <strong>Línea Negra (Sezhizha)</strong>, una cartografía espiritual que conecta 348 sitios sagrados distribuidos desde los picos nevados hasta la orilla del mar Caribe. Esta línea, que no es un camino físico sino un tejido espiritual, representa los principios del origen y la historia de la creación. Dentro de esta área, los mamos realizan pagamentos para retribuir a la naturaleza y mantener la armonía del mundo. La importancia de este sistema de conocimiento ancestral fue reconocida por la UNESCO en 2022, cuando lo declaró Patrimonio Cultural Inmaterial de la Humanidad, destacando su papel en la protección del ecosistema y la preservación de la identidad cultural de los cuatro pueblos. Este sistema se transmite de generación en generación mediante la práctica cultural, las actividades comunitarias y el uso de las lenguas indígenas.</p>
      
        <h3>🌱 Un Territorio Vivo y en Peligro</h3>
        <p>La sacralidad de la Sierra Nevada impone una responsabilidad: cuidar el territorio es cuidar el mundo. Los mamos advierten que cualquier daño a los sitios sagrados —como la minería, la deforestación o el cambio climático— provoca un desequilibrio que se refleja en forma de enfermedades, desastres naturales o conflictos sociales. Por ello, el acceso a ciertas zonas de la Sierra está restringido, y se solicita a los visitantes respetar las normas y los lugares sagrados. La Sierra Nevada es, en esencia, una madre viva que debe ser respetada y protegida, no un recurso para explotar.</p>`,
        atributos: ["Corazón del Mundo", "Ley de Origen", "Línea Negra"],
        iconos: ["fa-mountain", "fa-hand-sparkles", "fa-globe"]
      },
      {
        id: "ciudad-perdida-teyuna",
        nombre: "Ciudad Perdida (Teyuna)",
        cultura: "Kogui (Tayrona)",
        region: "caribe",
        imagen: "../img/Lugares/Ciudad-Perdida.webp",
        descripcion_corta: "Antigua ciudad ceremonial y política de los Tayrona, considerada un centro de poder espiritual y conexión con los ancestros.",
        descripcion: `<h3>🏛️ El Redescubrimiento de un Tesoro Ancestral</h3>
        <p>En las profundidades de la selva de la Sierra Nevada de Santa Marta, a más de 1.200 metros de altura, se encuentra un secreto que permaneció oculto durante siglos: la <strong>Ciudad Perdida</strong>. Conocida por sus constructores, la civilización Tayrona, como <strong>Teyuna</strong>, esta ciudad fue fundada alrededor del año 700 d.C. y floreció hasta la llegada de los conquistadores españoles. Fue redescubierta oficialmente en 1972, cuando un grupo de buscadores de tesoros encontró sus escalinatas y terrazas cubiertas por la densa vegetación. Para entonces, los pueblos indígenas de la Sierra (Kogui, Arhuaco, Wiwa y Kankuamo), descendientes directos de los Tayrona, ya la conocían como un sitio sagrado al que llamaban Teyuna, el corazón de una red de aldeas que fue el centro político, económico, religioso y espiritual más importante de la región.</p>
      
        <h3>✨ Teyuna: Un Centro de Poder Espiritual</h3>
        <p>Para los pueblos de la Sierra, Teyuna no es un simple conjunto de ruinas arqueológicas. Es un espacio vivo donde la historia, la naturaleza y la espiritualidad se entrelazan. Sus más de 13 hectáreas de extensión contienen una impresionante infraestructura: plataformas pavimentadas, patios empedrados, escalinatas monumentales, canales de desagüe y una intrincada red de caminos de piedra que conectaban la ciudad con otras aldeas. La disposición de las construcciones reflejaba una jerarquía social y espiritual, siendo las viviendas de mayor tamaño ocupadas por los líderes espirituales o "mamos". Para los indígenas actuales, Teyuna es un centro de poder ancestral, un punto de conexión directa con sus antepasados y un lugar donde la memoria de los Tayrona pervive, guiando su espiritualidad y su relación con el territorio sagrado de la Sierra.</p>
      
        <h3>🙏 Un Sitio de Conexión con los Ancestros</h3>
        <p>Los mamos y las sagas de los pueblos Kogui, Arhuaco, Wiwa y Kankuamo han visitado Teyuna desde tiempos inmemoriales para realizar pagamentos (ofrendas) y rituales. Para ellos, la ciudad es un lugar donde la energía de los ancestros es particularmente poderosa y donde se puede establecer una comunicación directa con el origen. Aunque el sitio es ahora un parque arqueológico abierto al público, los indígenas insisten en que se debe mantener un profundo respeto. No es un lugar para el turismo convencional, sino un santuario donde la historia cobra vida. La UNESCO declaró la Sierra Nevada como Reserva de la Biosfera y Patrimonio de la Humanidad, reconociendo así el valor excepcional de Teyuna como parte integral de este paisaje cultural sagrado.</p>`,
        atributos: ["Centro Ceremonial", "Poder Ancestral", "Conexión Ancestral"],
        iconos: ["fa-city", "fa-church", "fa-route"]
      },
      {
        id: "laguna-sagrada-wotkasairu",
        nombre: "Laguna Sagrada (Wotkasairu)",
        cultura: "Wayuu (Maleiwa)",
        region: "caribe",
        imagen: "../img/Lugares/Laguna-Wotkasairu.webp",
        descripcion_corta: "Lugar de origen del pueblo Wayuu, donde el dios Maleiwa modeló a los primeros wayuu con arcilla roja.",
        descripcion: `<h3>🌅 En el Corazón de la Alta Guajira</h3>
        <p>En la vasta y árida península de la Alta Guajira, donde el desierto se encuentra con el mar Caribe, se encuentra un lugar de una profunda significación para el pueblo Wayuu: la laguna sagrada de <strong>Wotkasairu</strong>. Este espejo de agua, de apariencia modesta, es para los wayuu el escenario del origen de la humanidad. La tradición oral wayuu narra que, en los tiempos del principio, cuando la Tierra (Mma) se encontraba triste y solitaria, el dios creador <strong>Maleiwa</strong> descendió a este punto exacto. Fue allí donde tomó arcilla roja, el "pootchi" de la tierra, y con sus manos moldeó las primeras figuras humanas. A estas figuras, Maleiwa les insufló la vida y la palabra, y les ordenó: "Ustedes serán los Wayuu (los hombres), hablarán y caminarán por todas partes, esta tierra será suya".</p>
      
        <h3>✨ El Mito Fundacional de los Wayuu</h3>
        <p>Según la cosmogonía wayuu, Maleiwa no quería ver triste a Mma, por eso vino a Wotkasairu. Fue en este lugar donde los primeros Wayuu recibieron el aliento vital y las leyes fundamentales de respeto y no agresión que rigen su cultura. Maleiwa también creó a los animales a partir de la misma arcilla, pero a ellos les negó la palabra y el libre albedrío, condenándolos a ser mudos y a vivir bajo el dominio del hombre. Esta distinción es fundamental para la identidad wayuu: ellos son los poseedores de la palabra y los responsables de mantener el orden en el mundo. A otras figuras que creó, Maleiwa les dijo: "Ustedes serán los wayuu, hablarán y caminarán por todas partes".</p>
      
        <h3>🙏 Wotkasairu: Un Anclaje Territorial y Espiritual</h3>
        <p>Para los wayuu, Wotkasairu no es solo un mito del pasado; es un punto de anclaje territorial y de identidad. Es la prueba de que esta tierra les fue dada desde el origen por su creador, y que su presencia en la Guajira es el cumplimiento de un mandato divino. La laguna es considerada un sitio sagrado donde aún hoy se realizan rituales y ofrendas para honrar a Maleiwa y a los ancestros. Visitar Wotkasairu es reconectar con el origen, recordar la responsabilidad de cuidar la tierra y preservar la palabra. La laguna, aunque no es un destino turístico masivo, es un punto de referencia espiritual fundamental para los wayuu de la región, un recordatorio vivo de su lugar en el cosmos y de los pactos establecidos desde el principio de los tiempos.</p>`,
        atributos: ["Origen Wayuu", "Lugar Fundacional", "Ritual"],
        iconos: ["fa-water", "fa-hands", "fa-dharmachakra"]
      },
      {
        id: "rio-magdalena-plato",
        nombre: "Río Magdalena (tramo Plato)",
        cultura: "Hombre Caimán",
        region: "caribe",
        imagen: "../img/Lugares/Río-Magdalena-Caimán.webp",
        descripcion_corta: "Escenario de la trágica transformación del pescador Saúl Montenegro, condenado a vagar como mitad hombre, mitad caimán.",
        descripcion: `<h3>🐊 El Pecado Original en las Orillas del Magdalena</h3>
        <p>En las cálidas y caudalosas aguas del río Magdalena, a la altura del municipio de Plato (Magdalena), ocurrió una de las transformaciones más famosas del folclor colombiano. Este tramo del río es el escenario eterno de la leyenda del <strong>Hombre Caimán</strong>. La historia narra la vida de Saúl Montenegro, un pescador cuya obsesión era espiar a las mujeres que se bañaban desnudas en las playas del río. Cansado de esconderse entre los arbustos con el riesgo de ser descubierto, tomó una decisión desesperada: viajó hasta la Alta Guajira y convenció a un poderoso brujo para que le preparara dos pócimas mágicas: una roja para convertirse en caimán y una blanca para recuperar su forma humana.</p>
      
        <h3>⚗️ El Pacto con el Brujo y el Accidente Fatal</h3>
        <p>El plan funcionó a la perfección durante algún tiempo. Un amigo de confianza le administraba las pociones, y Saúl podía espiar con total impunidad. Sin embargo, la fatalidad acechaba. Un día, su amigo habitual no pudo acompañarlo, y fue reemplazado por otro hombre que jamás había presenciado la transformación. Cuando Saúl, convertido en un enorme caimán, emergió del agua, el sustituto entró en pánico y dejó caer el frasco con la pócima blanca, la cual se rompió en el suelo. Solo unas pocas gotas alcanzaron a salpicar la cabeza de Saúl, dejándolo atrapado para siempre en una forma monstruosa: con cabeza de hombre y cuerpo de caimán.</p>
      
        <h3>🌊 El Legado de una Leyenda Viva</h3>
        <p>Desde entonces, se dice que el fantasma del Hombre Caimán recorre el río Magdalena, especialmente en las noches de luna llena, condenado a vagar eternamente como advertencia para los curiosos y los infieles. Su madre, la única que no le temía, le llevaba comida al río todas las noches. La leyenda, que ya es parte del patrimonio cultural del municipio, se celebra anualmente con el Festival del Hombre Caimán en Plato, donde se realizan danzas, comparsas y se representa la historia. Incluso hay un monumento en su honor en la plaza principal. La figura del Hombre Caimán se ha convertido en un poderoso símbolo de advertencia sobre los peligros de la lujuria, la obsesión y las consecuencias de pactar con fuerzas desconocidas, siendo además fuente de inspiración para la canción "Se va el caimán" del compositor barranquillero José María Peñaranda.</p>`,
        atributos: ["Transformación", "Leyenda", "Advertencia Moral"],
        iconos: ["fa-water", "fa-eye", "fa-dragon"]
      },
      {
        id: "cienaga-grande-santa-marta-llorona",
        nombre: "Ciénaga Grande de Santa Marta",
        cultura: "Caribe",
        region: "caribe",
        imagen: "../img/Lugares/Cienaga-Grande.webp",
        descripcion_corta: "Lugar de aparición del espectro de La Llorona, cuyo lamento anuncia muerte y castiga a infieles y desobedientes.",
        descripcion: `<h3>🌾 El Ecosistema Sagrado y Mítico del Caribe</h3>
        <p>La Ciénaga Grande de Santa Marta es el sistema lagunar costero más grande de Colombia y uno de los humedales más productivos del mundo. Este vasto espejo de agua de aproximadamente 4.280 km², ubicado entre el río Magdalena y la Sierra Nevada de Santa Marta, es un territorio de manglares, ciénagas y caños que ha sido, desde tiempos ancestrales, un espacio de gran significación espiritual para las comunidades ribereñas. No es solo un ecosistema vital; es un escenario vivo donde lo cotidiano y lo sobrenatural se entrelazan.</p>
      
        <h3>👻 La Llorona: El Espectro que Vaga en la Noche</h3>
        <p>La tradición oral del Caribe colombiano ha consagrado a la Ciénaga Grande como el escenario por excelencia de las apariciones de La Llorona. Este espectro, uno de los más temidos y respetados del folclor regional, es descrito como una mujer fantasma que deambula por las orillas de las ciénagas y los caminos solitarios en las noches oscuras. Su aspecto es aterrador: viste un vestido de muchos colores que le tapa el cuerpo hasta los pies descalzos, y su cabello es muy largo, una mezcla de colores negro, plateado y dorado. Lo más sobrecogedor es su rostro, que tiene la apariencia de una calavera, y sus manos muy grandes, en las que carga a su hijo muerto, por quien llora todo el tiempo desconsoladamente. La gente comenta que fue ella misma quien lo mató y por eso su llanto es interminable.</p>
      
        <h3>⚖️ El Castigo a los Infieles y la Protección de la Vida</h3>
        <p>La sacralidad de este lugar está directamente vinculada a la función moralizante y justiciera de La Llorona. Los pescadores y habitantes ribereños cuentan que su lamento anuncia muerte y desgracia, especialmente para aquellos que han llevado una vida de infidelidad, desobediencia o falta de respeto hacia la vida. Según la tradición, esta mujer ataca solo a las parteras, médicos y enfermeras que ayudan a las mujeres embarazadas a acabar con la vida de sus bebés antes de nacer. También ataca a los hombres que dejan embarazadas a mujeres jóvenes solteras y que luego las abandonan cuando nace su bebé. Cuando La Llorona habla, solo pide una cosa: que se respete la vida, sobre todo la de los que están por nacer.</p>
      
        <h3>🙏 Una Advertencia Viva en la Memoria Colectiva</h3>
        <p>Para las comunidades que habitan las riberas de la Ciénaga Grande, este cuerpo de agua no es un simple humedal; es un umbral entre el mundo de los vivos y el de los muertos. Escuchar el lamento de La Llorona en la noche es un presagio de fatalidad, y los más viejos recomiendan no salir solos después del anochecer. La ciénaga, con sus aguas tranquilas pero profundas, guarda estos secretos ancestrales. La leyenda cumple una función social fundamental: advertir sobre las consecuencias de la infidelidad, el aborto y el abandono, y reforzar la importancia del respeto por la vida y por la palabra empeñada.</p>`,
        atributos: ["Lamento", "Castigo", "Protección de la Vida"],
        iconos: ["fa-water", "fa-sad-tear", "fa-gavel"]
      },
      {
        id: "rio-sinu-mohan-caribe",
        nombre: "Río Sinú",
        cultura: "Caribe",
        region: "caribe",
        imagen: "../img/Lugares/Río-Sinú.webp",
        descripcion_corta: "Morada del Mohán, guardián de los ríos y tesoros. Seduce a lavanderas y castiga a pescadores abusivos.",
        descripcion: `<h3>🌊 El Río de los Misterios</h3>
        <p>El río Sinú es una de las arterias fluviales más importantes de la región Caribe colombiana. Nace en el Nudo de Paramillo (Antioquia) y recorre los departamentos de Córdoba y Sucre hasta desembocar en el golfo de Morrosquillo. Este río, junto con sus ciénagas y caños, ha sido desde tiempos precolombinos la columna vertebral de la región, sustentando la pesca, la agricultura y el transporte. Pero también es el territorio espiritual del Mohán, uno de los seres más legendarios y respetados del folclor caribeño.</p>
      
        <h3>🧔 El Mohán: El Guardián de las Profundidades</h3>
        <p>Cuentan los pescadores que el Mohán habita en los charcos más profundos y peligrosos del río Sinú, donde tiene cuevas o cavernas internas que solo él conoce y considera como propias. Su apariencia es la de un ser de forma humana, con la cara quemada por el sol, de cabello largo y enmarañado, ojos penetrantes y picarescos. Siempre se le ve fumando un grueso tabaco para espantar a los insectos. No es un demonio, sino un guardián travieso y enamoradizo, dueño de los peces y de los tesoros escondidos en el fondo del agua.</p>
      
        <h3>💃 El Seductor de Lavanderas y el Castigo a los Abusivos</h3>
        <p>La sacralidad del río Sinú está intrínsecamente ligada al respeto que se le debe al Mohán. Se dice que este ser encanta y enamora a las mujeres que suelen ir a lavar la ropa a las orillas del río. Las seduce con su mirada y sus artificios, las emboba y las atrae hacia él para luego llevárselas a sus cuevas submarinas. Por eso, las madres advierten a las jóvenes que nunca vayan solas al río al atardecer. Pero el Mohán también es el guardián del equilibrio ecológico: castiga a los pescadores abusivos que utilizan dinamita o métodos destructivos, revienta sus embarcaciones y enreda sus redes. A quienes lo respetan y le ofrecen tabaco o aguardiente, les recompensa con abundante pesca.</p>
      
        <h3>🌿 Un Ecosistema Vivo y un Territorio de Respeto</h3>
        <p>Para las comunidades que viven a orillas del Sinú, el río es un ser vivo. Antes de pescar o navegar, los ancianos recomiendan pedir permiso al Mohán. Si el agua está tranquila y la pesca es buena, es señal de que el guardián está contento. Si el río se pone bravo sin motivo aparente, hay que hacer una ofrenda. La leyenda del Mohán es, ante todo, una poderosa herramienta de conservación ambiental: enseña que los recursos del río no son ilimitados y que quien abusa de ellos se enfrenta a la ira del dueño de las aguas.</p>`,
        atributos: ["Guardián", "Seducción", "Dueño de los Peces", "Castigo"],
        iconos: ["fa-water", "fa-mask", "fa-fish", "fa-gavel"]
      },
      {
        id: "cerro-juanche-mojana",
        nombre: "Cerro de Juanché",
        cultura: "La Mojana",
        region: "caribe",
        imagen: "../img/Lugares/Cerro-Juanché.webp",
        descripcion_corta: "Lugar asociado a La Mojana, mujer diminuta de cabellos dorados que rapta a los niños que se acercan a las ciénagas.",
        descripcion: `<h3>🏞️ El Cerro Mítico en el Corazón de la Depresión Mompoxina</h3>
        <p>El Cerro de Juanché es una elevación ubicada cerca del municipio de Magangué, en el departamento de Bolívar, en el corazón de la Depresión Mompoxina. Esta región de ciénagas, caños y humedales es conocida como "La Mojana", un nombre que alude tanto a la geografía anegadiza como a la legendaria criatura que la habita. El cerro, de origen rocoso, se alza como un punto de referencia en medio de la llanura aluvial y es, según la tradición oral, un lugar predilecto de apariciones de La Mojana.</p>
      
        <h3>✨ La Mojana: La Dama de los Cabellos Dorados</h3>
        <p>La Mojana es una de las leyendas más arraigadas del folclor caribeño. Se la describe como una mujer de una belleza sobrenatural: de piel blanca, cabellos dorados y largos que le llegan hasta los pies, y ojos grandes y brillantes. Su estatura es diminuta, y vive en una casa de piedra construida bajo el agua. Allí cuida de numerosos animales domésticos (gallinas, perros, patos) y se baña con una totuma de oro. Según los relatos, en el Cerro de Juanché se la ha visto bañándose en las aguas que nacen de sus manantiales, libre y desnuda como el aire y el viento.</p>
      
        <h3>👶 El Rapto de Niños: Una Advertencia Ancestral</h3>
        <p>La sacralidad del Cerro de Juanché está directamente asociada al peligro que representa La Mojana para los niños. La tradición cuenta que esta mujer captura a los pequeños que se bañan solitarios en sus dominios (ríos, ciénagas o charcos cercanos al cerro) y los lleva a su morada subacuática, de donde jamás regresan. Para evitar esto, los padres atan a sus hijos con cuerdas bendecidas o rezadas, ya sea en el cuello o en la cintura, como una forma de amuleto protector. Los campesinos de la región aseguran que, después de los aguaceros, es posible percibir sus pequeñas huellas en el barro cerca del cerro.</p>
      
        <h3>🌾 Un Límite entre lo Humano y lo Espiritual</h3>
        <p>El Cerro de Juanché es, en el imaginario de los habitantes de Magangué y sus alrededores, un punto liminal. No es un destino turístico común; es un lugar de respeto y cautela. Los padres advierten a los niños que no se acerquen solos a las ciénagas, especialmente al atardecer, porque "la Mojana se los puede llevar". La leyenda tiene una función clara: proteger a los más pequeños de los peligros reales de los cuerpos de agua (ahogamientos) y, al mismo tiempo, reforzar la autoridad de los mayores y la importancia de la obediencia. El cerro es el testigo silencioso de esta tradición oral que se transmite de generación en generación.</p>`,
        atributos: ["Rapto de niños", "Cabellos dorados", "Totuma de oro", "Protección infantil"],
        iconos: ["fa-mountain", ["fa-child", "fa-female"], "fa-water", "fa-shield-alt"]
      },
      {
        id: "mansion-manuelita-casa-diablo",
        nombre: "Mansión Manuelita (Ciénaga)",
        cultura: "La Casa del Diablo",
        region: "caribe",
        imagen: "../img/Lugares/Mansión-Manuelita.webp",
        descripcion_corta: "Mansión donde el hacendado Manuel Varela hacía pactos con el demonio. Aparece un perro o enano negro.",
        descripcion: `<h3>🏛️ La Mansión que Desafió al Tiempo</h3>
        <p>En el centro histórico de Ciénaga, Magdalena, se alza una imponente mansión de estilo republicano que ha sido testigo de más de un siglo de historia. Construida en 1916 por el próspero empresario bananero Manuel Varela Machado, esta casa esquinera de dos plantas, con fachada blanca de marmolina, 14 columnas romanas y un frontón con formas de cítara, fue concebida como un símbolo de poder y riqueza durante la bonanza del "oro verde" (el banano). Sin embargo, su nombre original, "Mansión Manuelita", fue pronto reemplazado por el apelativo que la haría famosa en todo el Caribe: la "Casa del Diablo".</p>
      
        <h3>😈 El Pacto con el Demonio: La Leyenda del Hacendado Maldito</h3>
        <p>La sacralidad negativa de este lugar, es decir, su carácter como espacio de temor y respeto por su asociación con el mal, proviene de la leyenda que rodea a su constructor. La tradición oral de Ciénaga afirma que la repentina y desmedida prosperidad de Manuel Varela no era fruto del trabajo, sino de un pacto con el demonio. Se dice que Don Manuel, cada año, sacrificaba a un trabajador de su plantación bananera a Satanás como pago por la prosperidad concedida. Otros aseguran que su fortuna crecía de la noche a la mañana, y que en la mansión se escuchaban ruidos extraños y se veían sombras. Así surgió el mito que, en parte, es el responsable de que su residencia esté hoy en ruinas, pues la gente comenzó a creer que la mansión misma estaba maldita.</p>
      
        <h3>👹 Las Apariciones: El Perro y el Enano Negro</h3>
        <p>El carácter sagrado (en su acepción de "prohibido" o "temible") del lugar se manifiesta en las constantes apariciones que los lugareños reportan. Se dice que en las noches, especialmente alrededor de la medianoche, un perro negro de gran tamaño y ojos rojos, o un enano negro de sonrisa tenebrosa, aparecen en las esquinas de la mansión o en sus alrededores. Una vecina de 77 años, Miriam Pérez Briceño, asegura que cuando era joven, a un enamorado suyo se le apareció el maligno en la esquina de la casa, "bailando agachado" delante de él cuando regresaba de una parranda. Las puertas y ventanas de la mansión están tapiadas, pero aun así, algunos afirman escuchar voces y ver luces en su interior.</p>
      
        <h3>🏚️ Un Monumento al Miedo y a la Codicia</h3>
        <p>Hoy en día, la Casa del Diablo es uno de los edificios emblemáticos de Ciénaga, declarado Patrimonio Arquitectónico de la Nación e incluido dentro del centro histórico, que es uno de los 17 Pueblos Patrimonio de Colombia. Sin embargo, para los habitantes, sigue siendo un lugar de respeto y recelo. Es la prueba física de que la ambición desmedida y los pactos con fuerzas oscuras dejan una huella imborrable. Los jóvenes se retan a pasar cerca en la noche, y los ancianos advierten que no se debe buscar al dueño de la casa, porque el mal nunca descansa.</p>`,
        atributos: ["Pacto Diabólico", "Sacrificios", "Perro Negro", "Enano Negro"],
        iconos: ["fa-building", "fa-hand-peace", "fa-dog", "fa-skull"]
      },
      {
        id: "alta-guajira-keralia",
        nombre: "Alta Guajira (cardonales)",
        cultura: "Wayuu",
        region: "caribe",
        imagen: "../img/Lugares/Alta-Guajira.webp",
        descripcion_corta: "Lugares desolados, salinas y cardonales donde aparece Keralia, un fuego fatuo que seduce y mata.",
        descripcion: `<h3>🏜️ El Desierto y el Mar: Territorio de Espíritus</h3>
        <p>La Alta Guajira, en los municipios de Uribia y Manaure, es un paisaje de contrastes extremos: un desierto árido de cardones y cactos que se encuentra con el azul profundo del mar Caribe. Es una tierra de salinas, vientos fuertes y cielos despejados, donde el sol (Ka'i) es una presencia avasalladora. Para el pueblo Wayuu, este territorio no es solo un hábitat; es un espacio sagrado poblado por espíritus, ancestros y fuerzas de la naturaleza. Entre los cardonales, las playas solitarias y las salinas, acecha una de las entidades más temidas: Keralia.</p>
      
        <h3>🔥 El Robo del Fuego y el Nacimiento de Keralia</h3>
        <p>La leyenda de Keralia está íntimamente ligada al origen del fuego y de la noche. Según la mitología wayuu, al inicio del mundo, el padre sol Ka'i mantenía la tierra iluminada durante el día, y de él emanaba la vida, generando el agua que regaba los desiertos y alimentaba las plantas. Keralia, un espíritu audaz, robó el fuego sagrado a Ka'i, el padre sol. Como castigo, Keralia fue transformada en un fuego fatuo, una luz errante que vaga por los lugares más desolados de la península, condenada a anunciar la muerte.</p>
      
        <h3>✨ La Luz que Seduce y Mata</h3>
        <p>Keralia se manifiesta como un resplandor brillante que flota en la oscuridad, especialmente en las noches sin luna. Los wayuu la describen como un espíritu errante y maligno, un fuego fatuo que tiene la capacidad de cambiar de forma. Cuando un hombre se topa con esta luz en la noche, Keralia lo envuelve y la víctima comienza a vomitar sangre sin control hasta morir en cuestión de minutos. Si se presenta ante una mujer joven, puede adoptar la forma de un hombre apuesto, seducirla con su mirada y dejarla embarazada sin tocarla. Al dar a luz, la joven muere, y de su vientre no nace un bebé, sino culebras, sapos y toda clase de animales ponzoñosos que la devoran desde adentro. Los cardonales y las salinas, lugares desprovistos de vegetación, son sus moradas predilectas.</p>
      
        <h3>🏜️ Un Territorio de Peligro y Respeto</h3>
        <p>Para los wayuu, la Alta Guajira no es un simple desierto; es un campo de fuerzas espirituales donde hay que caminar con respeto. Los ancianos advierten a los niños y a los ebrios que jamás deambulen solos después del anochecer, especialmente cerca de las salinas o los lugares donde no hay vegetación. La tradición oral enseña que no todo lo que brilla es bueno, y que la belleza puede esconder una muerte espantosa. Keralia es uno de los espíritus más letales de la región, un recordatorio de que la noche pertenece a seres que no entendemos y de que hay límites que no deben ser traspasados.</p>`,
        atributos: ["Fuego fatuo", "Seducción", "Muerte", "Espíritu errante"],
        iconos: ["fa-fire", "fa-lightbulb", "fa-skull", "fa-moon"]
      },

    // ==================== REGIÓN ANDINA ====================
    {
        id: "laguna-iguaque-bachue",
        nombre: "Laguna de Iguaque",
        cultura: "Muisca",
        region: "andina",
        imagen: "../img/Lugares/Laguna-Iguaque.webp",
        descripcion_corta: "Lugar de origen de la humanidad muisca. Emergió Bachué con un niño en brazos.",
        descripcion: `<h3>🏞️ Un Espejo de Agua en el Páramo</h3>
        <p>La laguna de Iguaque se encuentra en el departamento de Boyacá, a 3.800 metros sobre el nivel del mar, en jurisdicción del municipio de Chíquiza, cerca de Villa de Leyva. Es un pequeño cuerpo de agua de origen glaciar, de aproximadamente 6,75 km² de superficie y 105 metros de profundidad, rodeado por el majestuoso paisaje del páramo, con frailejones, bosques de niebla y una biodiversidad única. Esta laguna es el corazón del Santuario de Fauna y Flora Iguaque, un área protegida de 6.923 hectáreas que alberga ecosistemas de bosque andino, subpáramo y páramo, y que provee agua a varios municipios de la región.</p>
      
        <h3>🌅 El Origen de la Humanidad según los Muiscas</h3>
        <p>Para los muiscas, esta laguna no era un simple accidente geográfico. Era el lugar más sagrado de su universo, la cuna de la humanidad. La tradición oral cuenta que en el principio de los tiempos, cuando aún no existían los hombres y la mayor parte de la tierra estaba cubierta por las aguas, una hermosa mujer emergió de las profundidades de la laguna. Era <strong>Bachué</strong>, cuyo nombre significa "mujer buena" o "mujer de pechos grandes". En sus brazos llevaba a un niño de aproximadamente tres años. Ambos descendieron de la montaña hacia el valle, donde construyeron una casa y vivieron hasta que el niño alcanzó la edad adulta. Luego, Bachué se casó con él y comenzaron a poblar la tierra.</p>
      
        <h3>👶 La Madre Fecunda y Maestra</h3>
        <p>Bachué fue una madre prolífica. En cada parto tenía entre cuatro y seis hijos, y con ellos recorrió todo el territorio muisca, fundando pueblos y dejando descendencia en cada lugar. No solo fue la madre biológica de la humanidad, sino también su gran maestra. Ella enseñó a los hombres a tejer, a construir bohíos, a trabajar el barro y los metales, a cultivar la tierra y a vivir en armonía. Su esposo, cuyo nombre la tradición no ha conservado, entrenó a los guerreros y les enseñó los valores de la vida.</p>
      
        <h3>🐍 El Regreso a las Aguas y la Transformación en Serpiente</h3>
        <p>Después de muchos años, cuando Bachué y su esposo envejecieron y vieron que la tierra estaba suficientemente poblada, decidieron regresar a la laguna de donde habían salido. Una multitud los acompañó, entristecida por su partida. En la orilla, Bachué les dio un último mensaje, exhortándolos a mantener la paz, a conservar las leyes y a respetar el culto a los dioses. Luego, tomada de la mano de su esposo, caminó hacia las aguas. Al pisar el lago, ambos se transformaron en dos enormes serpientes y se sumergieron en las profundidades, desapareciendo para siempre. Desde entonces, se dice que en las noches de luna, la serpiente asoma sus brillantes ojos sobre la superficie del agua.</p>
      
        <h3>🙏 Un Lugar de Peregrinación y Ofrendas</h3>
        <p>Para los muiscas, la laguna de Iguaque era un centro ceremonial de primer orden. Los sacerdotes (jeques) y los peregrinos acudían a sus orillas para realizar ofrendas a Bachué y a los dioses solares Sué y Chía. En sus aguas se depositaban <strong>tunjos</strong> (pequeñas figuras de oro), esmeraldas, conchas marinas y alimentos, como una forma de retribuir a la naturaleza y pedir por la fertilidad de la tierra. Peregrinar a esta laguna sagrada era considerado un acto de purificación del alma y de renovación espiritual.</p>`,
        atributos: ["Origen Muisca", "Madre Bachué", "Lugar de Peregrinación"],
        iconos: ["fa-water", "fa-female", "fa-hand-sparkles"]
      },
      {
        id: "laguna-guatavita-dorado",
        nombre: "Laguna de Guatavita",
        cultura: "Muisca",
        region: "andina",
        imagen: "../img/Lugares/Laguna-Guatavita.webp",
        descripcion_corta: "Escenario del ritual de El Dorado; ofrendas de oro al dios solar.",
        descripcion: `<h3>🏞️ El Cráter Sagrado en la Cordillera</h3>
        <p>La laguna de Guatavita se encuentra en el municipio de Sesquilé, en el departamento de Cundinamarca, a 75 km al noreste de Bogotá. Se ubica a 3.100 metros de altitud, en una depresión montañosa de forma perfectamente circular de unos 350 a 430 metros de diámetro, rodeada de bosques nativos de encenillos y frailejones. Su origen geológico está asociado a procesos de disolución de estratos salinos, lo que le confiere una forma de cráter. Su agua es de un color verdoso y es ligeramente alcalina. Hoy es una reserva protegida, que busca equilibrar el turismo ecológico con la conservación de este lugar de inmenso valor histórico y espiritual.</p>
      
        <h3>✨ El Origen de la Leyenda de El Dorado</h3>
        <p>La laguna de Guatavita es, ante todo, el escenario del ritual que dio origen a la legendaria búsqueda de <strong>El Dorado</strong>, una de las historias más fascinantes del mundo. Para los muiscas, esta laguna era un santuario sagrado donde se realizaba la ceremonia de investidura del nuevo cacique (zipa o zaque). La fama de este ritual, transmitida por los cronistas españoles, desató una ambiciosa y fallida búsqueda de tesoros durante siglos.</p>
      
        <h3>👑 El Ritual de la Balsa Dorada</h3>
        <p>Según las crónicas, el ritual comenzaba con una larga preparación del futuro cacique, quien debía ayunar y permanecer recluido en una cueva durante varios años, sin consumir sal, ají o carne. Llegado el día de la ceremonia, el cacique era desnudado y untado con una mezcla pegajosa de trementina, miel y barro. Luego, se le cubría el cuerpo completamente con polvo de oro fino, que se adhería a la resina, dando la impresión de ser un hombre hecho de oro macizo. Cubierto con este resplandor metálico, abordaba una balsa de juncos ricamente adornada, acompañado por cuatro caciques sumergidos hasta la cintura. A sus pies se colocaban grandes cantidades de oro, esmeraldas y otros objetos preciosos, destinados a ser ofrendados.</p>
      
        <h3>🌊 La Ofrenda al Sol y la Luna</h3>
        <p>La balsa, con el "hombre dorado" y su séquito, se dirigía hacia el centro de la laguna, mientras el pueblo que se agolpaba en las orillas encendía sahumerios de moque y quemaba incienso. En medio del silencio y la expectación, el cacique realizaba la ofrenda, arrojando al agua todas las riquezas que llevaba, como un tributo al dios sol (Sué) y a la diosa luna (Chía). El oro, al ser el metal asociado al sol, representaba la energía vital, y al ser devuelto a la laguna, se creía que garantizaba la fertilidad de la tierra, la prosperidad de la comunidad y la legitimidad del nuevo gobernante.</p>
      
        <h3>📜 Legado y Saqueos</h3>
        <p>La leyenda de El Dorado despertó la codicia de los conquistadores españoles. A mediados del siglo XVI, comenzaron varios intentos fallidos por drenar la laguna para recuperar el oro del fondo. El capitán Lázaro Fonte extrajo algunas piezas; Hernán Pérez de Quesada logró reducir el nivel del agua y obtuvo algunos objetos en las orillas; pero los intentos más ambiciosos, como el del comerciante Antonio de Sepúlveda, terminaron en fracaso. En 1580, Sepúlveda abrió un boquete en el borde de la laguna, pero la construcción del canal se derrumbó, matando a muchos trabajadores y generando una leyenda de maldición. A pesar de los saqueos, se cree que el fondo de la laguna aún guarda un tesoro arqueológico invaluable.</p>`,
        atributos: ["El Dorado", "Ritual de Investidura", "Ofrendas de Oro"],
        iconos: ["fa-water", "fa-crown", "fa-gem"]
      },
      {
        id: "templo-sol-sogamoso",
        nombre: "Templo del Sol de Sogamoso (Sugamuxi)",
        cultura: "Muisca (Sué)",
        region: "andina",
        imagen: "../img/Lugares/Templo-del-Sol-de-Sogamoso.webp",
        descripcion_corta: "Santuario solar más importante de la Confederación Muisca.",
        descripcion: `<h3>🏛️ La Ciudad del Sol y el Centro del Universo Muisca</h3>
        <p>Sogamoso, conocida en la época precolombina como <strong>Sugamuxi</strong>, fue la capital religiosa de la Confederación Muisca. Allí, a orillas del pequeño río Monquirá, se erigía el <strong>Templo del Sol</strong>, el santuario más importante y venerado de todo el altiplano. Era el epicentro del culto a <strong>Sué</strong>, la deidad solar, y un lugar de peregrinación masiva. Su construcción data de aproximadamente entre los años 500 a.C. y 800 d.C., y fue concebido como una réplica del cosmos, un punto de encuentro entre el mundo terrenal y el universo celestial.</p>
      
        <h3>🏗️ La Arquitectura del Cosmos</h3>
        <p>El templo era una estructura monumental de forma circular, construida con grandes columnas de madera de comino traídas desde los llanos del Casanare, y muros de caña tejida y barro. Su techo era cónico y estaba hecho de paja. No tenía ventanas, pero sus pequeñas aberturas laterales funcionaban como un calendario solar: cada 22 de diciembre, durante el solsticio de invierno, los rayos del sol se proyectaban perfectamente sobre el pilote central, marcando el inicio de un nuevo ciclo agrícola y espiritual. Alrededor del templo se disponían tres círculos concéntricos de columnas, lo que reforzaba su carácter de observatorio astronómico.</p>
      
        <h3>✨ Un Lugar de Culto, Sabiduría y Muerte</h3>
        <p>El Templo del Sol era mucho más que un lugar de culto. Era el centro del poder espiritual y político de los muiscas. Allí residía el <strong>Iraca</strong>, el sumo sacerdote, quien gobernaba el valle de Sugamuxi. Era también un gran cementerio, donde reposaban las momias de los caciques y sacerdotes más importantes, envueltos en mantas y ofrendas de oro. El templo representaba la dualidad de la vida y la muerte: era un lugar de nacimiento (el sol) y de tránsito (el inframundo). También se realizaban rituales de iniciación y sacrificios.</p>
      
        <h3>🔥 La Destrucción y el Legado Vivo</h3>
        <p>En septiembre de 1537, los conquistadores españoles, al mando de Gonzalo Jiménez de Quesada, llegaron a Sugamuxi. Movidos por la codicia, dos de sus soldados, Miguel Sánchez y Juan Rodríguez Parra, entraron al templo con teas encendidas durante la noche del 4 de septiembre. Al tomar las riquezas, prendieron fuego accidentalmente, y el santuario más sagrado de los muiscas quedó reducido a cenizas. En 1942, el arqueólogo colombiano <strong>Eliécer Silva Celis</strong> descubrió un cementerio muisca en el lugar y, basándose en los restos y las crónicas, logró reconstruir una réplica del Templo del Sol en el sitio exacto donde se erigía el original. Hoy, esta reconstrucción es la pieza central del Museo Arqueológico de Sogamoso, un testimonio vivo de la grandeza espiritual de la cultura muisca y un lugar de encuentro para la celebración del año nuevo Muisca.</p>`,
        atributos: ["Santuario Solar", "Observatorio Astronómico", "Necrópolis"],
        iconos: ["fa-sun", "fa-church", "fa-calendar-alt"]
      },
      {
        id: "cojines-del-zaque-tunja",
        nombre: "Cojines del Zaque (Tunja)",
        cultura: "Muisca",
        region: "andina",
        imagen: "../img/Lugares/Cojines-del-Zaque.webp",
        descripcion_corta: "Piedras donde el Zaque recibía los primeros rayos del sol.",
        descripcion: `<h3>🏛️ El Santuario Solar en la Antigua Hunza</h3>
        <p>En la comuna 6 de la ciudad de Tunja, capital de Boyacá, sobre una pendiente del cerro de San Lázaro, se conserva un enigmático monumento de origen precolombino: los Cojines del Zaque o Santuario del Zaque de Hunza. Este sitio sagrado es uno de los vestigios más importantes del dominio del zaque, gobernante del territorio norte de la Confederación Muisca. Su nombre original en lengua muisca se ha perdido, pero su función como centro de adoración al sol ha sido preservada por la tradición oral y confirmada por la arqueoastronomía. Los españoles, al llegar en el siglo XVI, lo bautizaron despectivamente como "Cojines del Diablo", sin comprender la profundidad espiritual del lugar.</p>
      
        <h3>🪨 La Estructura del Observatorio Solar</h3>
        <p>El monumento está conformado por dos monolitos circulares tallados directamente en la roca madre del cerro. Cada piedra tiene aproximadamente un metro de diámetro y veinte centímetros de altura, y su forma cóncava recuerda a un cojín. Están alineadas hacia el oriente, con un desnivel tallado en su parte occidental. Esta orientación no es casual: los monolitos están perfectamente alineados con la elíptica solar, lo que indica un profundo conocimiento astronómico por parte de los muiscas. Junto con el "Cercado Grande de los Santuarios", los vestigios bajo el Claustro de San Agustín y la Laguna Sagrada de Hunzahúa, este sitio conforma uno de los cuatro puntos principales de concentración del patrimonio muisca en Colombia.</p>
      
        <h3>🌅 El Ritual de Bienvenida al Sol</h3>
        <p>Según la tradición, cada día antes del amanecer, el Zaque (gobernante), los jeques (sacerdotes) y numerosos indígenas de la legendaria Hunza formaban una gran procesión festiva desde el cercado del Zaque hasta los Cojines. Allí, en la cima del cerro, se arrodillaban sobre los cojines de piedra y elevaban plegarias al dios solar Sué, que aparecía por el oriente. Las ceremonias incluían cantos, danzas y, en algunas ocasiones, ofrendas y sacrificios. Estos rituales no solo eran actos de adoración, sino también una forma de marcar los ciclos agrícolas y renovar la legitimidad del gobernante.</p>
      
        <h3>🔭 Un Observatorio Astronómico</h3>
        <p>Más allá de su función religiosa, los Cojines del Zaque funcionaban como un observatorio astronómico. La alineación de las piedras con la salida del sol en los solsticios permitía a los sacerdotes muiscas determinar con precisión los momentos clave del año para la siembra y la cosecha. Este conocimiento era fundamental para la supervivencia de la comunidad en un territorio de páramos y climas cambiantes. El monumento es un testimonio de la avanzada comprensión muisca de los ciclos celestes, comparable a otros observatorios precolombinos de América.</p>`,
        atributos: ["Adoración Solar", "Observatorio Astronómico", "Rituales"],
        iconos: ["fa-sun", ["fa-arrows-spin", "fa-calendar-alt", "fa-church"]]
      },
      {
        id: "salto-tequendama-bochica",
        nombre: "Salto del Tequendama",
        cultura: "Muisca",
        region: "andina",
        imagen: "../img/Lugares/Alto-Tequendama.webp",
        descripcion_corta: "Bochica abrió las rocas para drenar el diluvio de Chibchacum.",
        descripcion: `<h3>🏞️ La Cascada que Abrió el Cielo y la Tierra</h3>
        <p>El Salto del Tequendama es una imponente cascada de 132 metros de altura, ubicada en el municipio de Soacha, a 30 kilómetros al suroeste de Bogotá. Es la caída más alta del río Bogotá y uno de los paisajes naturales más emblemáticos de Colombia. El nombre "Tequendama" proviene del idioma muisca y significa "el que se precipitó hacia abajo". Para la cosmovisión muisca, este lugar era sagrado: era el punto donde los mundos se separaban y donde habitaban los espíritus de los antepasados.</p>
      
        <h3>🌊 El Diluvio de Chibchacum y la Ira de Huitaca</h3>
        <p>Según la mitología muisca, la sabana de Bogotá estuvo a punto de ser destruida por un gran diluvio. Chibchacum, el dios de los terremotos y las lluvias, había inundado la sabana como castigo por la desobediencia de los hombres. Sin embargo, la versión más detallada de la leyenda involucra a Huitaca, la diosa rebelde del placer y la embriaguez, esposa de Bochica. Huitaca, que representaba el desorden y la lujuria, conjuró un hechizo maligno que desató tempestades furiosas e inundaciones devastadoras sobre la sabana.</p>
      
        <h3>✨ Bochica: El Salvador de la Sabana</h3>
        <p>Bochica, el héroe civilizador enviado por Chiminigagua, vio a su pueblo sumido en el sufrimiento. Mientras que Huitaca fue convertida en lechuza por su traición, las inundaciones no cesaban. Una muralla de piedra en la región del Tequendama tenía represadas las aguas. Bochica tomó entonces su vara dorada y, con un poderoso golpe, rompió el macizo rocoso, provocando una explosión sideral que desaguó el agua acumulada y dio origen a la imponente cascada. Así nació el Salto del Tequendama, un lugar de salvación y de separación entre el mundo de los vivos y el de los espíritus.</p>
      
        <h3>🏛️ Un Lugar de Poder a Través de los Siglos</h3>
        <p>Para los muiscas, la cascada era un punto de conexión con lo divino. Era considerada la puerta de entrada al inframundo y un lugar de peregrinación donde se realizaban ofrendas y rituales. Durante la Colonia, el lugar fue admirado por personajes como Gonzalo Jiménez de Quesada y el naturalista Alexander von Humboldt, quien en 1801 calculó su altura en 177 metros. En 1923 se construyó a sus pies una mansión de estilo francés que funcionó como hotel de lujo para la élite bogotana. Tras décadas de abandono y deterioro, el edificio fue restaurado y hoy alberga un museo dedicado a la historia natural y cultural del bosque de niebla.</p>`,
        atributos: ["Leyenda Muisca", "Lugar de Salvación", "Puerta al Inframundo"],
        iconos: ["fa-water", "fa-hand-sparkles", "fa-dragon"]
      },
      {
        id: "cerro-monserrate-bogota",
        nombre: "Cerro de Monserrate",
        cultura: "Muisca",
        region: "andina",
        imagen: "../img/Lugares/Cerro-Monserrate.webp",
        descripcion_corta: "Centro de observación astronómica y rituales muiscas.",
        descripcion: `<h3>🏔️ El Vigilante de Piedra de Bogotá</h3>
        <p>El Cerro de Monserrate es una montaña que se eleva a 3.152 metros sobre el nivel del mar en el oriente de Bogotá. Su silueta es un ícono inconfundible de la capital colombiana. Para la ciencia, es una formación de roca y tierra; para la historia, fue un observatorio astronómico de primer orden; para la fe, es un santuario de peregrinación masiva. Su nombre actual fue impuesto por los conquistadores españoles en honor al santuario de Montserrat en Cataluña, cuyo nombre significa "Monte en forma de dientes". Pero mucho antes de la llegada de los europeos, esta montaña ya era un lugar sagrado para los muiscas, quienes la llamaban <strong>Quijicha Caca</strong>, que significa "Pie de Abuela".</p>
      
        <h3>✨ Un Observatorio Astronómico Clave</h3>
        <p>Los muiscas poseían un conocimiento avanzado de los ciclos solares y lunares. El Cerro de Monserrate era un punto de referencia astronómico fundamental. Durante el solsticio de junio, el sol (Sué) sale exactamente desde detrás de esta montaña cuando se observa desde la Plaza de Bolívar. Este fenómeno astronómico no era casual: los muiscas lo usaban para marcar el inicio de su calendario agrícola y ceremonial. La montaña funcionaba como un marcador solar que estructuraba el tiempo sagrado y la vida cotidiana de la Confederación Muisca.</p>
      
        <h3>🙏 Un Centro Ceremonial y de Peregrinación</h3>
        <p>Por su carácter sagrado, la cima del cerro era un lugar de rituales y ofrendas. Los sacerdotes muiscas subían a la cumbre para realizar pagamentos (ofrendas) a los dioses, especialmente a Sué (el sol) y a Chía (la luna). El cerro era también un punto de conexión entre el mundo terrenal y el celestial, un lugar donde los humanos podían acercarse a lo divino. Con la llegada de los españoles, la sacralidad del lugar fue sincretizada: en el mismo sitio se construyó una ermita dedicada a la Virgen de Monserrate, y posteriormente el Santuario del Señor Caído, que hoy es uno de los centros de peregrinación católica más importantes de Colombia.</p>
      
        <h3>🏛️ Un Legado Vivo</h3>
        <p>El cerro sigue siendo hoy un lugar de encuentro entre lo ancestral y lo moderno. Las comunidades indígenas aún realizan rituales de armonización en su cima, mientras miles de peregrinos suben cada domingo y en Semana Santa para visitar al Señor Caído. Las leyendas sobre sus apariciones y milagros se mezclan con el eco de los antiguos cantos muiscas. Monserrate no es solo una montaña; es un testigo de la historia de Bogotá y un símbolo de la continuidad de lo sagrado en un mundo que cambia.</p>`,
        atributos: ["Observatorio Solar", "Rituales Muiscas", "Peregrinación"],
        iconos: ["fa-mountain", "fa-sun", "fa-church"]
      },
      {
        id: "cerro-guadalupe-bogota",
        nombre: "Cerro de Guadalupe",
        cultura: "Muisca",
        region: "andina",
        imagen: "../img/Lugares/Cerro-Guadalupe.webp",
        descripcion_corta: "Similar a Monserrate; sitio sagrado de peregrinación.",
        descripcion: `<h3>🏔️ El Otro Cerrito Tutelar de Bogotá</h3>
        <p>El cerro de Guadalupe, llamado por los muiscas <strong>Chiguachí</strong>, es uno de los más notables cerros orientales de Bogotá, alcanzando una altura de 3.360 metros sobre el nivel del mar. Junto a Monserrate, es conocido como uno de los dos cerros tutelares de la capital colombiana. Su nombre original en lengua muisca, "Chiguachí", significa "pie de abuela", mientras que a Monserrate se le llamaba "pie de abuelo", reflejando una dualidad complementaria que estructuraba el paisaje sagrado del altiplano. Su silueta ha sido, desde tiempos precolombinos, un punto de referencia espiritual y territorial para los habitantes de la sabana de Bogotá.</p>
      
        <h3>🌄 Chiguachí: Un Observatorio y Centro Ceremonial</h3>
        <p>Para los muiscas, Chiguachí no era un simple accidente geográfico. Era un observatorio astronómico clave y un centro ceremonial de gran importancia. Desde su cima, los sacerdotes muiscas (jeques) podían observar con precisión la salida del sol (Sué) durante los solsticios, marcando el inicio del año agrícola y los momentos propicios para la siembra y la cosecha. El cerro, junto con Monserrate, formaba parte de un calendario de piedra que ordenaba el tiempo sagrado y la vida cotidiana de la Confederación Muisca. Allí se realizaban ofrendas y rituales en honor a las deidades solares y lunares, y se consagraba a los nuevos caciques, conectando el poder terrenal con el divino. Era, en esencia, un punto de contacto entre el mundo de los humanos y el cosmos.</p>
      
        <h3>⛪ Sincretismo y Peregrinación: La Huella de la Conquista</h3>
        <p>Con la llegada de los conquistadores españoles, la sacralidad del lugar fue sincretizada. En 1656, se construyó en la cima una ermita consagrada a la Virgen de Guadalupe, en un acto de peregrinación que contó con las principales autoridades eclesiásticas y civiles. Desde entonces, el cerro se convirtió en un importante centro de peregrinación católica, especialmente durante el mes de septiembre, cuando se celebra a la virgen. En 1946, se erigió una estatua de 15 metros de altura de la Virgen de la Inmaculada Concepción, obra del escultor Gustavo Arcila Uribe, que hoy es un ícono de la ciudad.</p>
      
        <h3>🙏 Un Legado Vivo: Entre lo Ancestral y lo Moderno</h3>
        <p>El Cerro de Guadalupe sigue siendo hoy un lugar de encuentro entre la historia ancestral y la fe contemporánea. Cada semana, y especialmente en Semana Santa, miles de peregrinos suben sus empinadas escaleras para venerar a la virgen, pedir favores y agradecer milagros. Al mismo tiempo, las comunidades indígenas aún lo reconocen como un sitio sagrado, donde realizan rituales de armonización y ofrendas. Su mirador ofrece una de las vistas más impresionantes de Bogotá, recordando a todos que esta montaña ha sido, por siglos, un testigo silencioso y un guardián espiritual de la ciudad.</p>`,
        atributos: ["Cerro tutelar", "Observatorio solar", "Sincretismo religioso"],
        iconos: ["fa-mountain", "fa-sun", "fa-church"]
      },
      {
        id: "parque-san-agustin",
        nombre: "Parque Arqueológico de San Agustín",
        cultura: "Agustinianos",
        region: "andina",
        imagen: "../img/Lugares/San-Agustin.webp",
        descripcion_corta: "Paisaje funerario con estatuas de deidades y ancestros.",
        descripcion: `<h3>🏛️ El Mayor Conjunto Megalítico de Sudamérica</h3>
        <p>El Parque Arqueológico de San Agustín, ubicado en el departamento del Huila, es considerado el más importante sitio arqueológico de Colombia y uno de los conjuntos megalíticos más grandes de Sudamérica. Declarado Patrimonio de la Humanidad por la UNESCO en 1995, este paisaje funerario y ceremonial se extiende por más de 2000 kilómetros cuadrados, abarcando los municipios de San Agustín, Isnos y Saladoblanco. Sus monumentos, que incluyen más de 500 estatuas monumentales, túmulos funerarios, sarcófagos monolíticos y fuentes ceremoniales labradas en la roca viva, fueron creados por una cultura que floreció entre el 500 a.C. y el 1350 d.C., siendo una de las tres culturas más antiguas de Sudamérica junto con Caral y Chavín en Perú.</p>
      
        <h3>🗿 Estatuas: Guardianes y Deidades de Piedra</h3>
        <p>La característica más distintiva de San Agustín son sus estatuas líticas monumentales. Talladas en toba volcánica y andesita, estas figuras antropomorfas y zoomorfas representan un complejo universo simbólico. Las esculturas suelen mostrar figuras humanas con atributos de felinos, aves y reptiles, sugiriendo la creencia en chamanes o deidades con la capacidad de transformarse en animales para acceder a poderes espirituales. Algunas estatuas, como el famoso "Doble Yo" o el "Guardián de las Tumbas", combinan rasgos masculinos y femeninos, y elementos humanos y animales, simbolizando la dualidad y la conexión entre el mundo de los vivos y el de los muertos. Otras representan figuras con los ojos saltones y la boca abierta, que se interpreta como la representación de chamanes en trance inducido por alucinógenos. Estas estatuas no eran meros adornos, sino guardianes espirituales que protegían los recintos funerarios y acompañaban a los difuntos en su viaje al más allá.</p>
      
        <h3>🪦 Túmulos y Tumbas: La Morada de los Ancestros</h3>
        <p>El paisaje de San Agustín está marcado por cientos de túmulos (montículos de tierra y piedra) que cubren tumbas subterráneas. Estas tumbas, construidas con grandes lajas de piedra, a menudo contienen sarcófagos monolíticos en su interior. Las excavaciones arqueológicas han revelado que estos recintos funerarios eran utilizados para entierros colectivos, donde se depositaban ofrendas de cerámica, herramientas y objetos de valor, destinados a acompañar a los difuntos en la otra vida o a demostrar su estatus social. La disposición de las tumbas y la escenografía de los yacimientos indican prácticas ceremoniales elaboradas, que incluían rituales de enterramiento, depósitos sucesivos y, posiblemente, la reapertura de las tumbas para nuevos ritos. Se cree que San Agustín era una región sagrada a donde diferentes grupos traían a sus líderes y ancestros para ser sepultados, convirtiéndose en un gran centro de peregrinación y culto a los muertos.</p>
      
        <h3>🌿 Fuentes Ceremoniales y el Paisaje Sagrado</h3>
        <p>Además de las estatuas y las tumbas, San Agustín cuenta con complejos sistemas de terrazas, caminos empedrados y fuentes ceremoniales labradas en la roca viva, como la "Fuente de Lavapatas". Este lugar, un intrincado sistema de canales, pequeñas pozas y escalinatas talladas en la roca, era utilizado para rituales de purificación y abluciones. El agua, elemento sagrado, corría por estos canales, conectando simbólicamente el mundo subterráneo de los muertos con el mundo celestial. Todo el parque está concebido como un paisaje sagrado, donde la arquitectura funeraria y ceremonial se integra con la topografía natural, creando un espacio cargado de simbolismo. Las estatuas no se encuentran aisladas, sino que están dispuestas a lo largo de callejones rituales, en la cima de los túmulos o frente a las tumbas, orquestando una escenografía deliberada que guiaba al visitante a través de un territorio consagrado a los ancestros y a las deidades.</p>`,
        atributos: ["Necrópolis megalítica", "Estatuas guardianas", "Culto a los ancestros"],
        iconos: ["fa-mountain", ["fa-monument", "fa-user-graduate"], "fa-skull"]
      },
      {
        id: "parque-tierradentro",
        nombre: "Parque Arqueológico de Tierradentro",
        cultura: "Paeces / Nasa",
        region: "andina",
        imagen: "../img/Lugares/Tierradentro.webp",
        descripcion_corta: "Tumbas subterráneas para el culto a los ancestros.",
        descripcion: `<h3>🏛️ La Ciudad de los Muertos en el Corazón del Cauca</h3>
        <p>El Parque Arqueológico Nacional de Tierradentro, ubicado en el departamento del Cauca, cerca de los municipios de Belalcázar (Páez) e Inzá, es una de las necrópolis más grandes del mundo. Declarado Patrimonio de la Humanidad por la UNESCO en 1995, este sitio alberga una de las mayores concentraciones de <strong>hipogeos</strong> —tumbas subterráneas excavadas en la roca volcánica— del continente americano. La cultura que los construyó, de la que se sabe muy poco debido a la ausencia de escritura, habitó la región entre los siglos VI y X d.C., y concibió la muerte no como un final, sino como una transición a otra forma de existencia.</p>
      
        <h3>🕯️ Hipogeos: Moradas de Transición hacia el Inframundo</h3>
        <p>Los hipogeos de Tierradentro son la manifestación más impresionante de su cultura. Se trata de cámaras funerarias subterráneas, algunas de hasta 12 metros de ancho, excavadas a varios metros de profundidad en la toba volcánica. Cada hipogeo está precedido por una escalera de caracol o una rampa tallada en la roca que conduce a la cámara principal. Estas tumbas no eran simples fosas, sino auténticas moradas para los muertos, concebidas como una transición entre el mundo de los vivos y el inframundo. El acceso descendente simbolizaba el viaje hacia las profundidades de la tierra, donde el alma del difunto iniciaba su transformación.</p>
      
        <h3>🎨 La Casa del Más Allá: Decoración y Simbolismo</h3>
        <p>Lo que hace únicos a los hipogeos de Tierradentro es su rica decoración interior. Las paredes y columnas de las cámaras están pintadas con pigmentos negros, rojos, amarillos y ocres, formando complejos diseños geométricos: rombos, espirales, grecas y figuras antropomorfas estilizadas. Estos motivos no son aleatorios; reproducen la decoración interna de las viviendas de la época, sugiriendo que la tumba era concebida como una "casa del más allá", un hogar eterno donde el alma del difunto podía continuar su existencia. Las columnas que sostienen el techo imitan la estructura de las chozas, y los patrones pintados recuerdan los tejidos y los adornos corporales de los vivos. Este concepto funerario revela una profunda creencia en la continuidad de la vida después de la muerte, donde el difunto no desaparecía, sino que habitaba en una réplica de su hogar terrenal, pero en el plano subterráneo.</p>
      
        <h3>⚱️ Rituales Funerarios y el Culto a los Ancestros</h3>
        <p>Las excavaciones arqueológicas han revelado que los rituales funerarios en Tierradentro eran complejos y de dos etapas. Primero, los cuerpos eran enterrados en fosas simples para permitir su descomposición. Luego, los huesos eran exhumados, pintados y depositados colectivamente en las grandes cámaras de los hipogeos, acompañados de ofrendas de cerámica, joyas y herramientas. Este "segundo entierro" indica un culto elaborado a los ancestros, donde los muertos no eran olvidados, sino que seguían siendo parte de la comunidad espiritual. Los hipogeos, a menudo ubicados en las cumbres de las montañas, se convertían en hitos visibles en el paisaje, reclamando el territorio para los ancestros y estableciendo un vínculo perpetuo entre los vivos y los muertos. Para los actuales pueblos Nasa (Paeces), descendientes de sus constructores, Tierradentro sigue siendo un lugar sagrado, un espacio de memoria y de conexión con sus raíces ancestrales.</p>`,
        atributos: ["Hipogeos funerarios", ["Culto a los ancestros", "Pintura rupestre"], "Casa del más allá"],
        iconos: ["fa-hard-hat", ["fa-dungeon", "fa-paintbrush"], "fa-ancestors"]
      },
      {
        id: "volcan-machin-nacuco",
        nombre: "Volcán Machín",
        cultura: "Pijao",
        region: "andina",
        imagen: "../img/Lugares/Volcán-Machín.webp",
        descripcion_corta: "Morada del dios del fuego Nacuco; origen de aguas termales.",
        descripcion: `<h3>🌋 El Gigante Dormido del Tolima</h3>
        <p>El Volcán Machín es un estratovolcán activo ubicado a 17 kilómetros al oeste de la ciudad de Ibagué, en el departamento del Tolima. Con una altitud de 2.750 metros sobre el nivel del mar, su imponente presencia domina el paisaje del valle del río Toche y las estribaciones de la Cordillera Central. Geológicamente, es uno de los volcanes más jóvenes de Colombia, con una caldera de aproximadamente 3 kilómetros de diámetro que alberga un domo de lava. Su actividad se ha registrado a lo largo de la historia, con erupciones importantes en los años 1460, 1490, 1505 y la más reciente en 1557. Sin embargo, para los pueblos originarios de la región, especialmente para los Pijao, el Volcán Machín no es solo una formación geológica: es la morada del poderoso dios Nacuco.</p>
      
        <h3>🔥 Nacuco: El Señor del Fuego Interior</h3>
        <p>En la cosmogonía Pijao, Nacuco (también conocido como Ananuco, Nakuko o Nanuco) es una de las dos deidades principales, antagónica de Locomboo. Es un dios malévolo, el principio personificador de lo material, el creador y preservador de la realidad concreta del río y la montaña, del árbol y el ave, del maíz y la batata, de la piedra y la semilla. Según la tradición, Nacuco fue un indio poseedor de dotes sobrenaturales, que predecía los acontecimientos y hacía milagros, podía transformarse a voluntad y tenía la cabeza herida, quizás un símbolo de su maldad. Los Pijao creían que su morada final se encontraba en las entrañas del Volcán Machín.</p>
      
        <h3>💧 La Leyenda de Ibamaca y el Origen de las Aguas Termales</h3>
        <p>Una antigua leyenda narra que Nacuco se enamoró perdidamente de una hermosa joven indígena llamada Ibamaca, quien era venerada como una sacerdotisa consagrada al servicio de los dioses. Movida por su fe y su devoción, Ibamaca decidió tenderle una trampa para preservar su castidad y la de otras mujeres. Le pidió a Nacuco que entrara a una cueva en la montaña, donde ella prometió reunirse con él. Cuando Nacuco ingresó, Ibamaca y sus compañeros sellaron la entrada con enormes piedras y tierra, dejándolo encerrado para siempre. Encerrado en las profundidades de la tierra, la furia y el poder del dios creador no tenían salida. Su cuerpo se convirtió en la roca ígnea, su aliento en el vapor que emana de las profundidades y su corazón encendido en el magma que alimenta el volcán. Del lugar de su encierro brotaron dos fuentes: una de agua hirviente, que son las lágrimas de su furia y el sudor de su ira, y otra de agua fría, que son las lágrimas de su amor no correspondido. Así, Nacuco se transformó en el señor del fuego interior y de la tectónica, y su esencia palpitante sigue viva en el corazón del volcán, siendo el origen de las aguas termales que brotan en sus faldas.</p>
      
        <h3>🌿 Un Lugar de Poder y Respeto</h3>
        <p>Para el pueblo Pijao, el Volcán Machín es un lugar de profundo respeto y temor. Es el dominio de una fuerza poderosa que creó el mundo material y que aún hoy se manifiesta a través de los temblores de tierra, los cuales los Pijao interpretan como los ronquidos de Nacuco, y de las aguas termales que emergen de la montaña como el sudor de su ira y el suspiro de su amor eterno. La montaña encierra un poder inmenso que debe ser honrado. En sus cercanías, la sacerdotisa Yulima (también conocida como Dulima) regentaba un santuario religioso Pijao, y era allí donde se realizaban rituales y se formaban los chamanes. Hoy en día, las comunidades indígenas y los habitantes de la región siguen considerando el volcán un territorio sagrado, donde se realizan rituales de armonización y pagamentos (ofrendas) para mantener el equilibrio entre los mundos y apaciguar la ira del dios encerrado.</p>`,
        atributos: ["Dios del fuego interior", "Aguas termales", "Leyenda de creación"],
        iconos: ["fa-fire", ["fa-hand-sparkles"], ["fa-water"]]
      },
      {
        id: "sierra-organos-lulumoy",
        nombre: "Sierra de los Órganos",
        cultura: "Pijao",
        region: "andina",
        imagen: "../img/Lugares/Sierra-organos.webp",
        descripcion_corta: "Centro de formación de mohanes; ídolo de tres cabezas.",
        descripcion: `<h3>🏔️ Las Cumbres del Conocimiento Ancestral</h3>
        <p>La Sierra de los Órganos es una formación montañosa ubicada en el municipio de Coyaima, en el departamento del Tolima, en el corazón del territorio ancestral del pueblo Pijao. Sus imponentes picos rocosos, que se elevan como gigantescos órganos de piedra, dominan el paisaje de los valles del río Saldaña y el río Magdalena. Su nombre actual fue impuesto por los conquistadores españoles, impresionados por la verticalidad de sus riscos, que evocaban la forma de los tubos de un órgano eclesiástico. Sin embargo, para los Pijao, esta montaña era conocida con un nombre mucho más sagrado: era el "Templo de Lulumoy", un centro ceremonial y de formación chamánica de primer orden.</p>
      
        <h3>🗿 Lulumoy: El Dios Grande de Tres Cabezas</h3>
        <p>En las cuevas y concavidades de esta sierra reposaba la manifestación física de la deidad más importante de su panteón: <strong>Lulumoy</strong>, cuyo nombre significa "Dios Grande". Los cronistas españoles describieron con asombro un imponente ídolo de piedra esculpido en la roca misma, que representaba a esta deidad con tres cabezas, seis brazos y seis piernas. No era una representación humana común, sino la imagen de un ser omnisciente y omnipresente. Sus tres cabezas representaban su capacidad de ver el pasado, el presente y el futuro al mismo tiempo, y de comprender los tres niveles del cosmos: el supramundo de los astros, el mundo de los hombres y el inframundo. Sus seis brazos eran la manifestación de su poder para impartir justicia y sabiduría en todas direcciones. Sus seis piernas simbolizaban su arraigo en todos los territorios del conocimiento, su capacidad de caminar por los mundos visibles e invisibles sin jamás caer. Era la representación física de la omnisciencia y la omnipresencia divina, el juez supremo que mantenía el equilibrio del universo.</p>
      
        <h3>🧙 El Centro de Formación de los Mohanes</h3>
        <p>La sacralidad de la Sierra de los Órganos reside en su función como la "universidad ancestral" del pueblo Pijao. Los cronistas de la época documentaron que este lugar era el centro de formación de los mohanes o xeques (chamanes y sacerdotes), quienes acudían a sus cuevas sagradas para ayunar, meditar y recibir el poder de Lulumoy. Allí, en la oscuridad de las concavidades de la roca, los iniciados aprendían los secretos de la curación, los rituales, la interpretación de los sueños y la comunicación con los espíritus. Se dice que el dios, cansado de ayudar en la creación universal, se retiró a este lugar a reposar, no para abandonar a su pueblo, sino para convertirse en la fuente inmutable de conocimiento a la que los sabedores debían acudir.</p>
      
        <h3>🏛️ Un Templo Natural de Poder</h3>
        <p>La Sierra de los Órganos era un santuario natural donde se realizaban rituales de iniciación y se consagraba a los nuevos líderes espirituales. Los mohanes, al recibir su poder, eran investidos con la autoridad para curar, profetizar y guiar a su comunidad. La tradición oral señala a Lulumoy como el esposo de Ibamaca (la diosa que encerró a Nacuco), representando la unión del conocimiento con la protección. Juntos, desde su trono en la Sierra de los Órganos, Lulumoy e Ibamaca velaban por que la justicia y la sabiduría fueran los pilares de la vida comunitaria, impartiendo el conocimiento que permitía mantener el equilibrio del cosmos. Hoy en día, para el pueblo Pijao y las comunidades campesinas del sur del Tolima, la sierra sigue siendo un lugar de profundo respeto espiritual, un sitio de memoria ancestral donde se realizan rituales de armonización y se honra a los antiguos sabedores.</p>`,
        atributos: ["Centro de formación chamánica", ["Dios de la sabiduría", "Ídolo de piedra"]],
        iconos: ["fa-mountain", ["fa-graduation-cap"], "fa-hand-sparkles"]
      },
      {
        id: "cerros-abechucos-guimbales",
        nombre: "Cerros de Abechucos",
        cultura: "Pijao (Guimbales)",
        region: "andina",
        imagen: "../img/Lugares/Cerros-abechucos.webp",
        descripcion_corta: "Reposa Guimbales; sostiene una viga de oro del mundo.",
        descripcion: `<h3>⛰️ Los Centinelas del Sur del Tolima</h3>
        <p>Los Cerros de Abechucos son una cadena montañosa ubicada en el municipio de Ortega, en el departamento del Tolima, en el corazón del territorio ancestral del pueblo Pijao. Su nombre original y su significado profundo se han transmitido a través de la tradición oral, pero su presencia imponente ha marcado el paisaje y el imaginario de la región desde tiempos inmemoriales. Estos cerros son mucho más que un accidente geográfico: son, según la cosmovisión Pijao, uno de los pilares que sostienen el mundo.</p>
      
        <h3>🌍 Guimbales: El Gigante que Sostiene la Tierra</h3>
        <p>En las profundidades de los Cerros de Abechucos reposa Guimbales (también conocido como Gimbales), el poderoso dios de la guerra y el trueno. La tradición Pijao cuenta que el mundo no flota en el vacío, sino que descansa sobre tres enormes vigas de oro que se hunden en lo más profundo de la laguna primordial. Una de esas vigas se encuentra bajo el Cerro de Pacandé, otra bajo el Cerro de Calarma, y la tercera, la más importante para la guerra y la fuerza, reposa precisamente bajo los Cerros de Abechucos. Guimbales, un gigante de proporciones colosales, es el guardián de esa viga. No está muerto, sino que duerme un sueño eterno, y su cama es la propia viga de oro que sostiene toda la tierra seca. Allí, en la oscuridad de las profundidades, su cuerpo es el armazón que evita que el mundo se hunda.</p>
      
        <h3>⚔️ El Dios de la Guerra y los Terremotos</h3>
        <p>Guimbales es, ante todo, el dios de la guerra. Los guerreros Pijao lo invocaban antes de las batallas, pidiéndole que su brazo fuera tan certero como un rayo y su golpe tan demoledor como el impacto de un relámpago. Su dominio se extiende también a los fenómenos naturales que anuncian el conflicto. Cuentan que cuando Guimbales se enfurece, despierta de su letargo y blande su macana, un arma gigantesca forjada del mismo oro de las vigas. Los rayos que cruzan el cielo no son más que los destellos de esa macana cuando el dios la agita; el trueno que los sigue es el grito de guerra del gigante, un rugido que hiela la sangre de los enemigos. Además, cuando Guimbales se revuelca en sueños, la tierra tiembla; cuando ronca, el eco retumba en las montañas como un trueno lejano. Los terremotos, entonces, no son otra cosa que los movimientos del gran dios en su lecho de aguas saladas, una señal de su poder indómito.</p>
      
        <h3>⚰️ Un Lugar de Descanso y Resistencia</h3>
        <p>Los Cerros de Abechucos son un sitio de un profundo valor histórico y espiritual. Fue allí donde el líder indígena Manuel Quintín Lame, quien retomó la lucha ancestral del pueblo Pijao por la defensa de su territorio, pidió ser sepultado. El 7 de octubre de 1967, sus restos fueron depositados en la montaña, donde, según la tradición, su espíritu se fusionó con la fuerza del ancestro Guimbales para proteger a su pueblo desde las alturas. Hoy en día, los Cerros de Abechucos son un lugar de peregrinación y resistencia para las comunidades indígenas del Tolima y el Cauca. Allí se realizan rituales para honrar a Guimbales, pidiendo su protección y su fuerza, y para recordar que, bajo la tierra, un gigante de guerra vela por la soberanía de su pueblo. Cada vez que la tierra tiembla, los Pijao saben que es Guimbales recordándoles que el mundo se sostiene sobre la fuerza de sus ancestros y que la lucha por el territorio es eterna.</p>`,
        atributos: ["Dios de la guerra", ["Sostén del mundo", "Resistencia indígena"]],
        iconos: ["fa-mountain", ["fa-hand-fist"], "fa-shield-alt"]
      },
      {
        id: "nevado-del-tolima-ibanasca",
        nombre: "Nevado del Tolima",
        cultura: "Pijao",
        region: "andina",
        imagen: "../img/Lugares/Nevado-Tolima.webp",
        descripcion_corta: "Morada de Ibanasca (Dulima), diosa de las tormentas.",
        descripcion: `<h3>🏔️ El Coloso Nevado que Domina el Tolima</h3>
        <p>El Nevado del Tolima es uno de los volcanes nevados más emblemáticos de la Cordillera Central de los Andes colombianos. Con una altitud de 5.215 metros sobre el nivel del mar, su imponente silueta blanca domina el paisaje del departamento del Tolima, siendo visible desde la ciudad de Ibagué y gran parte del valle del río Magdalena. Geológicamente, es un estratovolcán activo, con fumarolas y actividad sísmica registrada a lo largo de la historia. Sus laderas están cubiertas por páramos, lagunas de origen glaciar y bosques de niebla que albergan una biodiversidad única. Sin embargo, para el pueblo Pijao y los habitantes de la región, este nevado no es solo una formación geológica; es la morada eterna de Ibanasca, la diosa de las tormentas y protectora de su pueblo.</p>
      
        <h3>👸 Ibanasca: La Cacica que se Convirtió en Diosa</h3>
        <p>La historia de Ibanasca, también conocida como Dulima ("Río de las Nieves") o Yulima, es una de las más conmovedoras de la resistencia indígena en Colombia. Nació cerca del volcán Machín, en los montes del río Cutumay, cerca del Nevado del Ruiz. Era líder y chamán del grupo que habitaba en la zona del Cañón del río Combeima, guardiana de las tradiciones, la cultura y la cosmología de su pueblo. En 1550, las tropas del conquistador Andrés López de Galarza llegaron al territorio de los pijaos. Ibanasca enfrentó con coraje la actividad usurpadora. Los españoles, creyendo que en las proximidades del volcán Machín existía un centro de adoración al sol y la luna donde había cuantiosos tesoros custodiados por Ibanasca, atacaron el templo de Dulima. Ibanasca fue tomada prisionera, conducida a Ibagué, juzgada por brujería y sentenciada a morir en la hoguera.</p>
      
        <h3>⚡ La Purificación por el Fuego y el Ascenso a las Nieves</h3>
        <p>Según la leyenda, cuando las llamas comenzaron a consumir su cuerpo, la tribu de Ibanasca no podía verla, pues un enviado del Dios Fuego la cubrió para purificarla. Su espíritu, libre del cuerpo mortal, ascendió a las profundidades del Nevado del Tolima, donde se convirtió en la Diosa de las Nieves. Desde entonces, Ibanasca habita en la cima del nevado, gobernando los vientos del sur y las tormentas. Cuando los vientos azotan la cordillera, es ella recorriendo su territorio; cuando el trueno retumba, es su voz de guerra; cuando el relámpago ilumina la noche, es su mirada encendida. Es también la protectora de su pueblo: se aparece en los sueños de los líderes indígenas para guiarlos, y se la invoca en rituales de armonización para calmar su furia o pedir su protección.</p>
      
        <h3>🌬️ Un Lugar de Poder y Resistencia</h3>
        <p>El Nevado del Tolima, junto con el Cerro de Pacandé (considerado uno de los tres pilares fundamentales de la cosmogonía Pijao y donde aún se guarda el espíritu del viento de la diosa Ibanasca), es un territorio de profunda sacralidad. Para los actuales Pijao, Ibanasca es la diosa de la tormenta y la borrasca, a quien se invoca cuando se quiere que haya lluvia, y es la protectora que lanza el grito de guerra. Su nombre es sinónimo de resistencia y libertad. El nevado sigue siendo un lugar de peregrinación espiritual, donde se realizan rituales de conexión con la diosa y con los ancestros. Para los montañistas y visitantes, es un recordatorio de que la naturaleza es un ser vivo y sagrado, y que su cumbre helada es la morada de un espíritu indomable que nunca se rindió.</p>`,
        atributos: ["Diosa de las tormentas", "Resistencia indígena", "Purificación por fuego"],
        iconos: ["fa-mountain", ["fa-wind", "fa-feather"], "fa-fire"]
      },
      {
        id: "cerro-leon-dabeiba",
        nombre: "Cerro León",
        cultura: "Emberá",
        region: "andina",
        imagen: "../img/Lugares/Cerro-León.webp",
        descripcion_corta: "Lugar donde Dabeiba ascendió al cielo como diosa de las tempestades.",
        descripcion: `<h3>🏔️ El Centinela de la Cordillera Occidental</h3>
        <p>El Cerro León es una elevación montañosa ubicada en el municipio de Murindó, en el departamento de Antioquia, en el corazón de la región del Urabá antioqueño. Esta montaña, que forma parte de la serranía del Abibe, se alza como un centinela en medio de la selva húmeda tropical, cerca del límite con el departamento del Chocó. Su nombre evoca su imponente silueta, que recuerda la forma de un felino en reposo. Para el pueblo Emberá Katío, esta montaña no es solo un accidente geográfico; es el lugar sagrado donde Dabeiba, la diosa civilizadora y señora de las tempestades, ascendió al cielo para reunirse con su padre, el dios creador Karagabí.</p>
      
        <h3>👩‍🏫 Dabeiba: La Maestra de la Civilización</h3>
        <p>Según la mitología Emberá, Dabeiba era una mujer joven, bellísima y llena de sabiduría, hija de Karagabí, el señor del cielo. Fue enviada a la tierra para enseñar a los primeros hombres las artes de la civilización. Con sus delicadas manos, enseñó a tejer canastos, esteras y abanicos para avivar el fuego. Tomaba la greda, la mezclaba con agua y hacía vasijas, platos y ollas, iniciando a los alfareros en su oficio. Mostró a los catíos la manera de pintarse el cuerpo y escoger los colores: el rojo del achiote, el amarillo de la piña, el azabache de la jagua. Con el tallo del huito, enseñó a teñir los dientes. También les enseñó a sembrar y cosechar la yuca y el maíz, y a construir sus hogares y pueblos.</p>
      
        <h3>✨ El Ascenso a la Morada del Padre</h3>
        <p>Cuando Karagabí vio que su obra estaba completa y que la gente ya podía continuar por sí misma, llamó a Dabeiba para que se reuniera con él en el cielo. Un día, al amanecer, Dabeiba subió al Cerro León y, desde lo más alto, se elevó lentamente para volver al seno de su padre. A pesar de que era muy temprano, de que la neblina se levantaba sobre las quebradas, de los truenos y del asomo de lluvia, algunos indios la vieron subir y subir hasta perderse entre las nubes, más arriba de las copas de los árboles.</p>
      
        <h3>🌩️ La Diosa de las Tempestades</h3>
        <p>Ya en el cielo, Dabeiba no abandonó a su pueblo. Para que los indios la recuerden y sean buenos, ella les envía truenos, terremotos y tormentas. Por eso es conocida como la diosa de las tempestades. Cada vez que hay una temporada lluviosa, un huracán o un temblor de tierra, los Emberá saben que Dabeiba está manifestando su poder, recordándoles su presencia y su voluntad. El Cerro León sigue siendo, hasta hoy, un lugar de profundo respeto espiritual. Los chamanes realizan rituales en sus faldas para pedir permiso a la diosa, y los cazadores y pescadores le ofrecen tabaco y coca para que los proteja. Para el pueblo Emberá, el cerro es el punto de unión entre la tierra y el cielo, la escalera por la que la diosa ascendió para velar por su pueblo desde las alturas.</p>`,
        atributos: ["Ascenso al cielo", "Diosa de las tempestades", "Enseñanzas"],
        iconos: ["fa-mountain", ["fa-female", "fa-cloud-sun"], "fa-hand-sparkles"]
      },
      {
        id: "sierra-nevada-cocuy-uwa",
        nombre: "Sierra Nevada del Cocuy",
        cultura: "U'wa",
        region: "andina",
        imagen: "../img/Lugares/Sierra-Nevada-del-Cocuy.webp",
        descripcion_corta: "Territorio sagrado U'wa; lagunas donde viven espíritus y héroes.",
        descripcion: `<h3>🏔️ Zizuma: El Techo Blanco de los Andes Orientales</h3>
        <p>La Sierra Nevada del Cocuy, conocida por el pueblo U'wa como Zizuma ("Territorio Sagrado"), es un macizo montañoso ubicado en la Cordillera Oriental de los Andes colombianos, en el límite de los departamentos de Boyacá, Arauca y Casanare. Es la masa glaciar más grande de Colombia, con más de 25 picos cubiertos de nieve perpetua que superan los 5.000 metros de altura, entre los que destacan el Ritacuba Blanco (5.410 m) y el Pan de Azúcar (5.120 m). Sus páramos y lagunas de origen glaciar, como la Laguna Grande de la Sierra y la Laguna de la Plaza, son ecosistemas de una belleza sobrecogedora, que albergan una biodiversidad única. Sin embargo, para el pueblo U'wa, esta sierra es mucho más que un paraíso natural; es el centro del universo, el territorio sagrado que les fue encomendado por sus dioses desde el principio de los tiempos.</p>
      
        <h3>🌍 El Mandato de los Dioses: Sira y Rurcocá</h3>
        <p>Según la cosmogonía U'wa, hace miles de años, el padre eterno, Sira, y la madre celeste, Rairia (o Rurcocá), entregaron al pueblo U'wa el territorio que se extiende a lo largo de la cordillera de los Andes, desde la Sierra Nevada del Cocuy en Colombia hasta la Sierra Nevada de Mérida en Venezuela. Los dioses les encomendaron la protección de la tierra y el equilibrio del universo. El nombre U'wa significa "gente inteligente que sabe hablar", y su lengua es la depositaria de los mitos cantados que contienen toda su sabiduría ancestral. Su territorio es considerado un ser vivo, un cuerpo cósmico, y ellos son sus guardianes espirituales.</p>
      
        <h3>🏞️ Lagunas Sagradas: Morada de Espíritus y Héroes</h3>
        <p>La Sierra Nevada del Cocuy está salpicada por más de 150 lagunas de origen glaciar, cada una de ellas considerada un sitio de máxima sacralidad. Estas lagunas son la morada de espíritus protectores, de héroes culturales y de los dueños de los animales y las plantas. En sus profundidades habitan los "encantados", seres que pueden conceder favores o castigar a quienes se acercan sin respeto. Algunas lagunas, como la Laguna de Juan Tama (aunque asociada al pueblo Nasa, su importancia es similar), son lugares de origen de clanes y de rituales de purificación. Los mamos (sacerdotes U'wa) realizan pagamentos (ofrendas) en estas lagunas para mantener el equilibrio del mundo, pidiendo permiso para pescar, cazar o simplemente transitar por sus orillas.</p>
      
        <h3>🛡️ Un Territorio Vivo en Lucha por su Supervivencia</h3>
        <p>Para los U'wa, la Sierra Nevada del Cocuy es un ser vivo. El petróleo (ruiria) es considerado la sangre de la tierra, y su explotación en el corazón del mundo provocaría, según su tradición, el derrumbe de su cultura y la muerte de su pueblo. Por esta razón, los U'wa han liderado una lucha histórica y heroica contra la explotación petrolera en su territorio. En 2016, decidieron cerrar el Parque Nacional Natural El Cocuy a los turistas para proteger su territorio sagrado del deterioro causado por la actividad turística irrespetuosa. Para los U'wa, la defensa de la Sierra Nevada no es una opción, sino un mandato divino. Hoy, la sierra sigue siendo un lugar de peregrinación espiritual para los indígenas y un símbolo de resistencia para Colombia. Acceder a ella es posible solo con respeto y guías autorizados, y siempre recordando que se está pisando un territorio vivo y sagrado.</p>`,
        atributos: ["Territorio sagrado", ["Lucha indígena", "Morada de espíritus"], "Equilibrio del universo"],
        iconos: ["fa-mountain", ["fa-water", "fa-leaf"], "fa-hand-sparkles"]
      },
      {
        id: "laguna-juan-tama-nasa",
        nombre: "Laguna de Juan Tama",
        cultura: "Nasa",
        region: "andina",
        imagen: "../img/Lugares/Laguna-Juan-Tama.webp",
        descripcion_corta: "Nació y regresó el cacique Juan Tama, héroe unificador del pueblo Nasa.",
        descripcion: `<h3>🏞️ Un Espejo de Agua en el Páramo de Moras</h3>
        <p>La laguna de Juan Tama se encuentra en el páramo de Moras, dentro del resguardo indígena de Mosoco, en el municipio de Belarcázar (antes conocido como Páez), en el departamento del Cauca. Es un cuerpo de agua de origen glaciar, rodeado de frailejones, bosque de niebla y una biodiversidad única de páramo. Para el pueblo Nasa (también conocido como Páez), esta laguna no es un simple accidente geográfico; es el lugar más sagrado de su territorio, el punto de origen y retorno de uno de sus más grandes líderes espirituales y políticos.</p>
      
        <h3>👑 Juan Tama de la Estrella: El Héroe que Unificó a los Nasa</h3>
        <p>Juan Tama, también conocido como Khwen Tama A', fue un cacique histórico que vivió entre los siglos XVII y XVIII. Utilizando su conocimiento de la ley colonial, logró que la Real Audiencia de Quito reconociera legalmente los resguardos de Jambaló, Vitoncó, San Lorenzo de Caldono, Quichaya y Pitayó, unificando los cuatro grandes cacicazgos del pueblo Nasa y estableciendo las bases para la defensa del territorio. Su éxito político y jurídico fue tal que la tradición oral lo divinizó, transformándolo en el hijo de la estrella y la laguna, un ser de origen sobrenatural dotado de poderes chamánicos.</p>
      
        <h3>🌟 El Origen Mítico: Hijo de la Estrella y el Trueno</h3>
        <p>La leyenda cuenta que, en tiempos de la "lluvia grande", los médicos tradicionales (Thë' Wala) vieron bajar por las aguas crecientes de la quebrada Pátalo a un niño envuelto en chumbes de colores. Era el hijo de la estrella y el trueno (Kpi'sx), que nacía del vientre de la laguna sagrada. Los médicos lo rescataron y, para salvar su frágil vida, lo refrescaron con plantas de climas fríos y cálidos, devolviéndole el pulso. Al crecer, Juan Tama se convirtió en un líder excepcional, unificador de los pueblos Nasa y defensor del territorio. Antes de partir, dejó a su pueblo cuatro mandatos eternos: su dinastía gobernaría por muchos años, la tierra del mundo Nasa sería siempre propia, el pueblo Nasa sería invencible y no mezclaría su sangre con la de otros.</p>
      
        <h3>🙏 Un Lugar de Consagración y Rituales de Armonización</h3>
        <p>La laguna de Juan Tama es considerada un lugar sagrado de primer orden, un "espacio encantado" donde no se puede entrar sin el permiso de los seres espirituales. Los Nasa la utilizan como sitio de purificación para los bastones de mando, símbolo de autoridad indígena. Allí, los cabildantes suben a purificarse y refrescar sus varas de mando, implorando a Juan Tama sabiduría para conducir los destinos de la comunidad. Los médicos tradicionales (Thë' Wala) también acuden a la laguna para realizar rituales de limpieza, armonización y pagamentos (ofrendas), utilizando las plantas sagradas que crecen en sus orillas. La laguna es el testimonio vivo de que Juan Tama no murió, sino que regresó a las aguas para seguir protegiendo a su pueblo, cumpliendo su promesa: "Yo me iré a vivir a la laguna. Yo no muero jamás".</p>`,
        atributos: ["Héroe unificador", ["Lugar de origen y retorno", "Rituales de armonización"], "Sabiduría y resistencia"],
        iconos: ["fa-water", ["fa-crown", "fa-hand-sparkles"], "fa-leaf"]
      },
      {
        id: "laguna-oso-lliban",
        nombre: "Laguna del Oso (E'sxufy ĩkh)",
        cultura: "Nasa (Llibán)",
        region: "andina",
        imagen: "../img/Lugares/Laguna-Oso.webp",
        descripcion_corta: "Morada del héroe guerrero Llibán, protector de su pueblo.",
        descripcion: `<h3>🏞️ Un Espejo de Agua en las Alturas del Cauca</h3>
        <p>La laguna del Oso, cuyo nombre en lengua Nasa Yuwe es E'sxufy ĩkh, es un cuerpo de agua sagrado ubicado en las montañas del departamento del Cauca, en el corazón del territorio ancestral del pueblo Nasa. Al igual que otras lagunas de páramo en la región, es un ecosistema de alta montaña, rodeado de frailejones y vegetación de páramo, que alberga una biodiversidad única y provee agua a las comunidades de las faldas. Sin embargo, para el pueblo Nasa, esta laguna no es solo una fuente de agua; es la morada eterna de Llibán, un héroe guerrero de la resistencia precolombina.</p>
      
        <h3>⚔️ Llibán (Dxi'p A'): El Hijo del Trueno</h3>
        <p>Llibán, también conocido como Dxi'p A' (Hijo del Trueno), es el arquetipo del héroe guerrero Nasa, anterior a Juan Tama. Su historia guarda un profundo paralelismo con la del gran cacique. Según la tradición, Llibán fue rescatado de una creciente de una quebrada, alimentado por mujeres jóvenes que morían al amamantarlo, y creció con una fuerza y un poder sobrenaturales. Cuando enfrentó a los Pijaos, los tradicionales enemigos del territorio Nasa, tomó en su mano una serpiente que se transformó en una poderosa boleadora, el arma de guerra por excelencia, derrotando a los invasores y demostrando que su poder provenía directamente de las fuerzas de la naturaleza.</p>
      
        <h3>🛡️ El Protector que Vive en la Laguna</h3>
        <p>Habiendo cumplido su misión de proteger el territorio, Llibán no desapareció en la muerte, sino que se internó en el mundo espiritual. Se fue a vivir para siempre en la laguna del Oso, donde aún hoy permanece como un guardián eterno. Su compañero de lucha, Juan Chiracol (Sxî'hra'cu'le), hijo de un jaguar y una mujer Nasa, recibió las leyes tradicionales y ordenó que las tierras nunca fueran vendidas. La laguna del Oso es, por tanto, un lugar de profundo respeto y poder, donde se realizan rituales de armonización y se pide permiso a Llibán antes de adentrarse en el territorio.</p>
      
        <h3>🌿 Un Símbolo de la Resistencia Ancestral</h3>
        <p>La laguna del Oso representa la capa más antigua de la memoria heroica Nasa: la de la resistencia guerrera anterior a la llegada de los españoles. La historia de Llibán, tejida con los mismos elementos míticos que luego se aplicarían a Juan Tama, muestra la continuidad del pensamiento Nasa: los héroes nacen del agua, son criados con sacrificio, empuñan el poder de la naturaleza y al final regresan a las lagunas, desde donde siguen protegiendo a su pueblo. Hoy en día, la laguna es un sitio de peregrinación para los Nasa que buscan conectarse con la fuerza guerrera de su ancestro, y un recordatorio de que el territorio se defiende con el poder de la tradición y el respeto por los espíritus que lo habitan.</p>`,
        atributos: ["Héroe guerrero", ["Hijo del trueno", "Resistencia precolombina"], "Guardián espiritual"],
        iconos: ["fa-water", ["fa-bolt", "fa-shield-alt"], "fa-mountain"]
      },
      {
        id: "convento-san-francisco-perro",
        nombre: "Convento San Francisco / Batallón Bolívar (Tunja)",
        cultura: "Tunja colonial",
        region: "andina",
        imagen: "../img/Lugares/Convento-San-Francisco.webp",
        descripcion_corta: "Lugar donde la estatua de un perro de piedra cobra vida por las noches, con ojos de fuego.",
        descripcion: `<h3>🏛️ Un Convento Histórico en el Corazón de Tunja</h3>
        <p>El Convento de San Francisco es uno de los edificios más emblemáticos de Tunja, la capital de Boyacá. Fundado en 1550 por los frailes franciscanos, es un ejemplo de la arquitectura colonial del siglo XVI. Su fachada de piedra, su claustro y su templo han sido testigos de más de cuatro siglos de historia. A su alrededor se encuentra el Parque de San Francisco, un espacio público que es punto de encuentro de los tunjanos. Sin embargo, este lugar no solo es famoso por su valor arquitectónico e histórico, sino también por ser el escenario de una de las leyendas más tenebrosas de la ciudad: la del Perro de San Francisco.</p>
      
        <h3>🐕 La Estatua de Piedra que Cobra Vida</h3>
        <p>Al frente del convento, en el parque, existía una estatua de piedra de un perro, tallada en gran tamaño y atada con gruesas cadenas. Según la tradición oral, esta estatua fue erigida en homenaje a un animal que solían sacar los frailes franciscanos, o quizás como un simple adorno. Sin embargo, la leyenda cuenta que en altas horas de la noche, especialmente después de la medianoche, la estatua cobraba vida. El perro de piedra se levantaba de su pedestal y comenzaba a arrastrar sus pesadas cadenas por las calles empedradas, emitiendo aullidos y ladridos terribles. Sus ojos se encendían como si fueran dos bolas de fuego, iluminando la oscuridad con un resplandor rojizo.</p>
      
        <h3>⚰️ El Espanto que Anunciaba la Muerte</h3>
        <p>El Perro de San Francisco no era un simple fantasma errante. Según la tradición, el can infernal tenía la costumbre de entrar a las casas que quedaban con los portones abiertos durante la noche. Pero su presencia era especialmente temida en los velorios. Se decía que al perro le gustaba entrar a las casas donde se estaban realizando rezos para los difuntos, y que se estacionaba donde alguien iba a morir, como un presagio de muerte. Los habitantes de Tunja, aterrorizados, adquirieron la costumbre de revisar bien los portones antes de ir a dormir y de mantenerlos bien cerrados, para evitar la visita del espectro.</p>
      
        <h3>🏚️ Un Legado que Perdura</h3>
        <p>Con el paso del tiempo, la estatua original desapareció del parque. Algunos relatos afirman que fue trasladada al interior del antiguo Convento de San Francisco, que posteriormente pasó a ser el Batallón Bolívar. Hoy en día, los soldados que hacen guardia en el batallón reportan avistamientos de la sombra canina y el sonido de cadenas arrastrándose en la noche. Aunque la estatua ya no esté visible, la leyenda del Perro de San Francisco sigue viva en la memoria colectiva de los tunjanos, como un recordatorio de que la línea entre lo real y lo sobrenatural es más delgada de lo que parece, y de que hay que respetar los portales que separan a los vivos de los muertos.</p>`,
        atributos: ["Estatua animada", ["Ojos de fuego", "Presagio de muerte"], "Leyenda colonial"],
        iconos: ["fa-dog", ["fa-fire", "fa-chain"], "fa-building"]
      },


    // ==================== REGIÓN PACÍFICO ====================
    {
        id: "rio-baudo-wounaan",
        nombre: "Río Baudó (Baaur Do Mos)",
        cultura: "Wounaan",
        region: "pacifica",
        imagen: "../img/Lugares/Rio-Baudó.webp",
        descripcion_corta: "Playa sagrada donde el dios creador Maach Aai engendró a su hijo Êwandam, quien moldeó a los primeros Wounaan.",
        descripcion: `<h3>🌊 Un Río Mítico en el Corazón del Chocó</h3>
        <p>El río Baudó nace en la Serranía que lleva su mismo nombre y recorre aproximadamente 150 kilómetros a través de la selva húmeda del departamento del Chocó, desembocando en el Océano Pacífico. Es una de las principales arterias fluviales de la región, junto con el río Atrato y el río San Juan. Su cuenca es una de las más lluviosas del mundo, con precipitaciones anuales superiores a los 5.000 mm, lo que lo convierte en un río caudaloso, lleno de pantanos y una biodiversidad exuberante. Pero para el pueblo Wounaan, este río es mucho más que una fuente de agua; es el escenario de su creación, el lugar donde el dios supremo manifestó su poder por primera vez en la tierra. Para ellos, Baaur Do Mos significa "la playa blanca del Baudó", el punto exacto donde comenzó todo.</p>
      
        <h3>✨ Maach Aai: El Padre Mayor que Creó el Mundo</h3>
        <p>Según la cosmogonía Wounaan, al principio no existía nada más que una laguna primordial. De esa laguna surgió Maach Aai (también conocido como Maach Aai Pomaam, el "Padre Mayor"), el dios creador supremo. A medida que crecía, fue desplegando el mundo: levantó la tierra firme, extendió el mar, alzó las montañas y colocó en el firmamento la luna y el sol. Una vez ordenado el cosmos, Maach Aai escogió una playa llamada Baaur Do Mos, hoy conocida como Baudó, para llevar a cabo el acto más importante de la creación: la formación de su hijo. Allí, con su aliento y su ciencia, engendró a su hijo Êwandam. Durante mucho tiempo, padre e hijo vivieron juntos en esa ribera, hasta que Êwandam, sintiéndose solo, le pidió a su padre que creara más seres para poblar la tierra. Maach Aai aceptó, pero dejó en manos de su hijo la tarea de dar forma a esa nueva gente.</p>
      
        <h3>🙏 La Creación de los Wounaan: El Barro que Recibió la Vida</h3>
        <p>Êwandam, siguiendo las instrucciones de su padre, moldeó miles de figuras de barro imitando su propia apariencia y las colocó en filas sobre la playa. Experimentó primero con madera de chonta, que lastimaba sus dedos, y luego con balso, que se desmoronaba, hasta que encontró en la arcilla la materia perfecta para dar forma a la humanidad. Al día siguiente, Maach Aai sopló sobre aquellos muñecos y, con su poder supremo, los transformó en seres vivos. Así nacieron los primeros Wounaan, que desde entonces llaman "padre" a Êwandam, pues fue por su petición y por sus manos que recibieron la forma, mientras que Maach Aai permanece como el origen último, el abuelo primordial que infundió el aliento vital.</p>
      
        <h3>🏞️ Un Territorio Vivo y un Mandato de Cuidado</h3>
        <p>Para los Wounaan, la playa de Baaur Do Mos y todo el río Baudó no son simples accidentes geográficos; son parte del cuerpo del creador. Los ancianos transmiten que el agua tiene dueño, que los peces tienen guardián, y que quien toma más de lo necesario o sin pedir permiso se enfrenta al castigo. Por eso, antes de pescar o navegar, se realizan rituales de permiso y ofrendas. La creación de los Wounaan a partir del barro también establece una relación sagrada con la tierra: el barro no es solo materia prima, es la sustancia de la que fueron hechos, y por eso debe ser respetado. Hoy en día, el río Baudó sigue siendo el centro de la vida espiritual y material del pueblo Wounaan, un recordatorio vivo de que el mundo fue creado por un padre mayor que sigue velando por su pueblo desde las alturas.</p>`,
        atributos: ["Playa sagrada", ["Dios creador", "Origen del pueblo Wounaan"]],
        iconos: ["fa-water", ["fa-mountain", "fa-hand-sparkles"], "fa-globe"]
      },
      {
        id: "rio-andagueda-cobaima",
        nombre: "Río Andágueda",
        cultura: "Emberá",
        region: "pacifica",
        imagen: "../img/Lugares/Rio-Andágueda.webp",
        descripcion_corta: "Sitio donde el primer Jaibaná, Cobaima, ordenó el territorio y nombró lugares sagrados.",
        descripcion: `<h3>🏞️ El Río que Corre entre Dos Mundos</h3>
        <p>El río Andágueda es un afluente del río Atrato en el departamento del Chocó, que atraviesa territorios ancestrales del pueblo Emberá. Nace en las estribaciones de la Cordillera Occidental y desciende por la selva húmeda, formando caños, raudales y pozos profundos que son hábitat de una inmensa biodiversidad. Sus riberas han sido, desde tiempos inmemoriales, el hogar del pueblo Emberá Dobidá, que construyen sus casas a orillas del agua y cuyas vidas están intrínsecamente ligadas al río. Pero para los Emberá, el Andágueda no es solo una fuente de pesca o una vía de comunicación; es el escenario donde ocurrió uno de los eventos fundacionales de su orden social y espiritual: el paso del primer Jaibaná, Cobaima.</p>
      
        <h3>✨ Cobaima: El Primer Jaibaná, Ordenador del Cosmos</h3>
        <p>Según la tradición oral Emberá, en el principio, cuando el mundo era una casa sin fogón y los humanos recién nacidos se asustaban con el canto de la noche, el dios creador Karagabí decidió poner orden. Tomó un poco de su aliento y lo guardó en una totuma de pensamiento, y soplando despacio formó a un hombre de mirada quieta. Le puso nombre de camino: Cobaima. A Cobaima no lo hicieron para mandar, sino para escuchar. Karagabí le dijo: "Tú vas a ser jaibaná primero. No para que te teman, sino para que el mundo te responda". Le enseñó a reconocer las plantas que curan, a hablar con los espíritus (jai) que habitan en el agua, en la piedra y en el viento, y le advirtió que no todo espíritu es benévolo. Armado con esta sabiduría, Cobaima bajó por los ríos del Chocó con la misión de ordenar un territorio donde la gente y los animales vivían mezclados en una misma rabia.</p>
      
        <h3>🌿 El Ordenamiento del Territorio en el Andágueda</h3>
        <p>Cobaima llegó al Andágueda después de haber separado a los animales peligrosos de los humanos. Allí encontró ríos sin nombre, y un río sin nombre, enseñan los ancianos, es como un niño sin llamado: se pierde fácil. Cobaima miró dos entradas de agua y vio una malla invisible que atrapaba a los peces, como si alguien hubiera amarrado el alimento con envidia. Con un gesto de jaibaná, arrancó esa trampa del mundo y liberó el paso. A ese lugar lo nombró con una palabra que recuerda la lección: "Atrapado", para que nadie olvide que el agua se enferma cuando la codicia la encierra. Más adelante halló sal nacida de la tierra, y entendió que la Madre también cura con su propia lágrima. Así, Cobaima fue nombrando y ordenando cada recodo del río, estableciendo los límites entre lo sagrado y lo profano, entre lo que puede ser usado por los humanos y lo que debe permanecer intocado.</p>
      
        <h3>🙏 El Andágueda como Espacio de Memoria y Resistencia</h3>
        <p>Para los Emberá del Alto Andágueda, el río es un libro vivo donde está escrita la historia de su origen y su resistencia. Cobaima es recordado no solo como el primer chamán, sino como el que desató trampas invisibles, nombró los lugares sin nombre y estableció los límites entre lo sagrado y lo profano. Por eso, en cada ritual de armonización, en cada pedido de permiso antes de pescar o cazar, los jaibanás invocan su nombre y recuerdan su paso por el Andágueda. Hoy en día, el río y su cuenca son también un símbolo de lucha por la defensa del territorio, un espacio donde la memoria ancestral se mantiene viva frente a las amenazas de la minería y la deforestación.</p>`,
        atributos: ["Ordenamiento territorial", ["Primer Jaibaná", "Conexión con los jai"]],
        iconos: ["fa-water", ["fa-mask", "fa-hand-sparkles"], "fa-tree"]
      },
      {
        id: "rio-atrato-sever",
        nombre: "Río Atrato",
        cultura: "Emberá",
        region: "pacifica",
        imagen: "../img/Lugares/Rio-Atrato.webp",
        descripcion_corta: "Escenario central del mito del héroe guerrero Séver, quien estableció el dominio Emberá sobre sus riberas.",
        descripcion: `<h3>🌊 La Gran Arteria del Chocó</h3>
        <p>El río Atrato es uno de los ríos más caudalosos y largos de Colombia. Nace en el Cerro de Caramanta, en la Cordillera Occidental, y recorre más de 700 kilómetros en dirección sur-norte hasta desembocar en el golfo de Urabá, en el mar Caribe. Es la principal vía de transporte y comunicación en el departamento del Chocó, y sus riberas están habitadas por comunidades afrocolombianas e indígenas, entre ellos el pueblo Emberá Dobidá. Para estos últimos, el Atrato no es solo una fuente de pesca o una ruta de navegación; es el escenario de las hazañas de Séver, el héroe guerrero que estableció el dominio de su pueblo sobre estas tierras, un mito que aún resuena en cada remanso y cada recodo del río.</p>
      
        <h3>⚔️ Séver: El Guerrero Forjado por Karagabí</h3>
        <p>Según la tradición oral Emberá, en tiempos de disputas territoriales con los vecinos Cunas, el dios creador Karagabí decidió intervenir para proteger a su pueblo. Tomó una gota de agua de su totuma primordial y la mezcló con la savia del árbol sagrado Jenené. De esa unión nació Séver, un guerrero destinado a ser el defensor de su pueblo. Karagabí no solo le dio vida, sino que lo dotó de habilidades sobrenaturales: podía ver en la oscuridad como si fuera pleno día, su cuerpo era tan ágil que parecía convertirse en viento cuando corría, y sus flechas nunca erraban el blanco. Para perfeccionar sus dones, Séver aprendió los secretos de los animales: se frotaba la piel con polvo de ojos de tigre para volverse veloz y sigiloso, y se ungía con ojos molidos de venado, león y guagua para afinar su visión en la noche.</p>
      
        <h3>🛡️ La Lucha por el Dominio del Atrato</h3>
        <p>La primera gran gesta de Séver ocurrió cuando los Cunas, que habitaban en las márgenes del Atrato, comenzaron a hostigar a los Emberá. Séver descendió el río en una canoa tallada de un solo tronco, acompañado de sus hijos y un puñado de guerreros. En una noche sin luna, utilizando su visión sobrenatural, se infiltró en el poblado enemigo y sembró el terror entre sus filas. Los Cunas no aceptaron la derrota y organizaron expediciones de venganza, remontando el río para atacar a Séver y su linaje. En cada encuentro, Séver demostró su superioridad. En una ocasión, sus hijos fueron emboscados y uno de ellos, Chiano, cayó en combate. La furia de Séver no tuvo límites. Incendió el pueblo de los Cunas, destruyó sus canoas y persiguió a los sobrevivientes hasta que apenas quedaron dos para contar la historia. Desde entonces, el río Atrato, desde su nacimiento hasta su desembocadura, quedó bajo el dominio de los Emberá.</p>
      
        <h3>🌿 Un Río Vivo y un Legado de Resistencia</h3>
        <p>Para los Emberá del Atrato, el río es el cuerpo de un héroe. Se dice que los dientes de los Cunas que Séver colgó en su bohío no eran simples trofeos: tenían un poder mágico que alertaba de la llegada de nuevos enemigos. Hoy en día, el río Atrato sigue siendo un escenario de lucha: las comunidades Emberá han emprendido acciones legales históricas para que el río sea reconocido como un sujeto de derechos, una entidad viva con derecho a la protección, la conservación y el mantenimiento. En 2016, la Corte Constitucional de Colombia declaró al río Atrato como un ser vivo sujeto de derechos, un fallo sin precedentes que reconoce la cosmovisión de los pueblos que lo habitan. Para los Emberá, Séver no solo les ganó el territorio en el pasado; su espíritu sigue vivo en cada ritual, en cada canoa que navega el río, y en la lucha actual por la defensa de las aguas que les dieron sus ancestros.</p>`,
        atributos: ["Héroe guerrero", ["Dominio territorial", "Sujeto de derechos"]],
        iconos: ["fa-water", ["fa-shield-alt", "fa-bolt"], "fa-hand-fist"]
      },
      {
        id: "la-tola-charco-descabezado",
        nombre: "La Tola y El Charco (noche)",
        cultura: "Pacifico",
        region: "pacifica",
        imagen: "../img/Lugares/Tola-Charco.webp",
        descripcion_corta: "Calles y caminos donde aparece un hombre elegante y sin cabeza que silba, causando la muerte por parálisis.",
        descripcion: `<h3>🌙 Dos Pueblos Hermanados por el Misterio</h3>
        <p>La Tola y El Charco son dos municipios ribereños del departamento de Nariño, ubicados en la costa pacífica norte, en una región de manglares, esteros y caños que se internan en la selva. Son pueblos de pescadores, agricultores y afrodescendientes, con una rica tradición oral que se ha transmitido de generación en generación. En sus calles empedradas y caminos de tierra, la vida transcurre al ritmo de las mareas. Pero cuando cae la noche, especialmente durante la Semana Santa o en noches sin luna, los habitantes saben que deben guardar silencio y apresurar el paso, porque por esos mismos caminos puede aparecer una de las figuras más aterradoras del folclor pacífico: el Descabezado.</p>
      
        <h3>🎩 El Caballero sin Cabeza</h3>
        <p>El Descabezado es descrito por los lugareños como un hombre alto, elegante y bien vestido, con traje oscuro, zapatos brillantes y un porte señorial. Camina con las manos en los bolsillos, erguido, como si fuera a una cita importante. Pero cuando uno se acerca, descubre con horror que bajo el cuello no hay cabeza. Es un vacío oscuro, un muñón que no sangra, y sin embargo el cuerpo sigue andando, impecable, como si nada le faltara. A veces se le ve con un sombrero que flota sobre sus hombros, o llevando su cabeza bajo el brazo. Lo que siempre lo delata, antes incluso de verlo, es su silbido. Es un silbido agudo, largo, que parece venir de todas direcciones a la vez, y que anuncia su presencia como un presagio de muerte.</p>
      
        <h3>😱 El Encuentro Fatal y la Privación</h3>
        <p>La tradición oral de La Tola y El Charco cuenta que el encuentro con el Descabezado es casi siempre fatal. La persona que lo ve siente un escalofrío que le recorre todo el cuerpo. La cabeza se le hincha imaginariamente, las piernas se le aflojan y cae al suelo en un ataque de nervios. Quienes han sobrevivido cuentan que quedan "privados": espumando por la boca, temblando, incapaces de hablar durante días. Algunos incluso mueren del susto en el acto. Se dice que el Descabezado no habla, solo silba. Y su silbido, lejano al principio, se va haciendo más cerca a medida que la víctima se acerca a él. Cuando el silbido se escucha cerca, el peligro es inminente; cuando se escucha lejos, es porque ya está encima.</p>
      
        <h3>⚰️ Un Alma en Pena Colonial</h3>
        <p>Los ancianos cuentan que el Descabezado es el alma en pena de un español que fue decapitado en tiempos de la esclavitud. Algunos dicen que era un terrateniente cruel que mandaba a azotar a sus esclavos; otros, que fue un militar que cometió atrocidades durante la Colonia. Su castigo eterno es vagar sin cabeza por las mismas tierras donde hizo sufrir a otros. Por eso, las noches no son para los vivos, sino para los espíritus. Los ancestros enseñan que hay que respetar la oscuridad y no desafiar las horas santas caminando solo por los caminos desolados. Si alguien escucha un silbido en la madrugada y no hay nadie más a su alrededor, debe persignarse y rezar el Credo sin mirar atrás. Porque el Descabezado no persigue a quien lo respeta; solo atrapa a los osados que se atreven a buscarlo.</p>`,
        atributos: ["Sin cabeza", ["Silbido mortal", "Alma en pena colonial"]],
        iconos: ["fa-user-tie", ["fa-music", "fa-skull"], "fa-moon"]
      },
      {
        id: "sirena-arco-tumaco",
        nombre: "Litoral Pacífico",
        cultura: "Tumaco",
        region: "pacifica",
        imagen: "../img/Lugares/Sirena-Arco.webp",
        descripcion_corta: "Playas y rocas del océano donde aparece una sirena con cuerpo de pez y cola de ave. Su canto enloquece a los navegantes.",
        descripcion: `<h3>🌊 El Arco del Morro y las Noches de Luna Llena</h3>
        <p>El litoral de Tumaco, en el departamento de Nariño, es un paisaje de manglares, playas de arena negra y rompientes del Océano Pacífico. Frente a sus costas se alza el Arco del Morro, una formación rocosa natural que ha sido testigo de la historia de la región: fue escenario de rituales ancestrales, fortaleza contra piratas en la Colonia y guarida de patriotas durante la Independencia. En sus alrededores, especialmente en las noches de luna llena, los pescadores y navegantes aseguran haber visto a la criatura más fascinante y temida del Pacífico colombiano: la Sirena del Arco, la reina del mar.</p>
      
        <h3>🧜‍♀️ La Ninfa de Cabeza y Busto de Mujer, Cuerpo de Pez y Cola de Ave</h3>
        <p>La Sirena del Arco es descrita como una ninfa de una belleza sobrecogedora: tiene cabeza y busto de mujer, con rasgos finos y una cabellera que flota en el agua como algas doradas. Su cuerpo, de la cintura para abajo, es el de un pez escamado, con tonalidades verdes y doradas que brillan bajo la luna. Pero su rasgo más distintivo, y el que la diferencia de las sirenas europeas, es su cola de ave, que le permite moverse con una gracia fantástica tanto en el agua como en el aire. La criatura lleva una máscara que oculta parte de su rostro, y en sus manos empuña un puñal en una y un cetro de oro en la otra. Es la reina de los palacios submarinos, construidos con cristales, joyas y piedras preciosas, a las que les atribuye poderes mágicos.</p>
      
        <h3>🎵 El Canto que Enloquece y las Piedras con Poder</h3>
        <p>Cuentan los marinos y pescadores que la Sirena del Arco sale de sus dominios en las noches de luna llena y se sienta en las rocas del litoral. Allí, con una voz dulce y armónica que conmueve al cielo y a la tierra, entona cantos sagrados y poesías de amor. Quienes la escuchan quedan hipnotizados, pierden el control de sus barcos y se sumergen en las profundidades adormecidos por su voz, sin darse cuenta de que se están ahogando. La sirena también tiene el poder de las gemas: cada piedra preciosa de sus palacios posee una facultad mágica: el ágata fortifica el espíritu, la amatista conserva la castidad, la esmeralda cuida la belleza, el ónice trae felicidad a los enamorados, la perla salva el alma, el rubí ahuyenta la tristeza, el berilio da alegría, la calcedonia desterra la melancolía, el granate otorga poder victorioso, el zafiro brinda constancia y la turquesa asegura prosperidad.</p>
      
        <h3>⚡ Simbolismo y Advertencia del Mar</h3>
        <p>La Sirena del Arco no es un ser bondadoso. Para las gentes del Pacífico, ella simboliza la tragedia, la tristeza, la melancolía, la desesperación y el remordimiento de quienes se dejan atrapar por sus encantos lujuriosos y su grandiosa voz, que los conduce a la muerte. Algunos pescadores han asegurado haberla visto nadando junto a las ballenas jorobadas que peregrinan por el Pacífico, y que juntas arrastran las embarcaciones ancladas a sus lados, llevándose a los marinos hasta lo más profundo del océano. Pero también hay una versión más moderna de la leyenda: la sirena castigará a todos aquellos que dañen el ecosistema marino y exploten indiscriminadamente los recursos del mar y el océano. Es, en ese sentido, una guardiana del equilibrio ecológico. Por eso, los pescadores respetuosos le ofrecen tabaco y coca, y le piden permiso antes de lanzar sus redes, sabiendo que quien daña el mar, se enfrenta a la ira de su reina.</p>`,
        atributos: ["Cuerpo de pez", ["Canto hipnótico", "Poderes mágicos"], "Guardián ecológico"],
        iconos: ["fa-fish", ["fa-music", "fa-crown"], "fa-hand-sparkles"]
      },
      {
        id: "isla-gorgona-ceremonial",
        nombre: "Isla Gorgona",
        cultura: "Yurumanguí",
        region: "pacifica",
        imagen: "../img/Lugares/Isla-Gorgona.webp",
        descripcion_corta: "Centro ceremonial precolombino, considerado un 'laboratorio viviente' y un lugar de gran poder espiritual.",
        descripcion: `<h3>🏝️ La Isla Mítica del Pacífico Colombiano</h3>
        <p>La isla Gorgona es una pequeña isla oceánica de aproximadamente 13 km², ubicada a 28 km al oeste de la costa del Pacífico colombiano. Fue bautizada por los conquistadores españoles en 1527 en honor a la figura mitológica griega de la Gorgona Medusa, probablemente impresionados por la abundancia de serpientes en su territorio. Sin embargo, mucho antes de la llegada de los europeos, Gorgona ya era un lugar sagrado. Sus acantilados, sus playas de arena blanca y negra, sus cuevas y sus aguas cristalinas fueron el escenario de rituales y ceremonias de los pueblos precolombinos que habitaron la región, especialmente la cultura Yurumanguí.</p>
      
        <h3>🗿 Un Centro Ceremonial Precolombino</h3>
        <p>Evidencias arqueológicas encontradas en la isla, como petroglifos, herramientas de piedra y restos de cerámica, confirman que Gorgona fue un importante centro ceremonial mucho antes de la llegada de los españoles. La isla era considerada un lugar de poder, un punto de conexión entre el mundo terrenal y el espiritual. Allí, los chamanes y líderes espirituales realizaban rituales de purificación, ofrendas a los dioses del mar y la tierra, y ceremonias de iniciación. Su aislamiento del continente y su clima húmedo y neblinoso le conferían un aire de misterio y sacralidad, un lugar donde lo divino se manifestaba con especial intensidad.</p>
      
        <h3>⛓️ De Prisión a Santuario de Vida</h3>
        <p>La historia de Gorgona dio un giro trágico en el siglo XX. Entre 1960 y 1984, la isla fue convertida en una prisión de máxima seguridad, un lugar de castigo para los reclusos más peligrosos de Colombia. Las condiciones de vida eran inhumanas, y la isla, que había sido sagrada, se llenó de sufrimiento y muerte. En 1984, la prisión fue cerrada, y Gorgona fue declarada Parque Nacional Natural. Desde entonces, la isla ha sido restaurada como un santuario de vida: es uno de los lugares con mayor biodiversidad marina del Pacífico Oriental, un "laboratorio viviente" para científicos, y un lugar de peregrinación para quienes buscan reconectarse con la naturaleza.</p>
      
        <h3>🌿 Un Lugar de Gran Poder Espiritual</h3>
        <p>Hoy en día, la Isla Gorgona es un lugar de encuentro entre la historia, la ciencia y la espiritualidad. Sus antiguos petroglifos aún son visibles en las rocas, testigos mudos de los rituales que allí se realizaron. Sus cuevas y acantilados son considerados por algunos como puntos de energía, donde se puede sentir la presencia de los antiguos habitantes. Las comunidades indígenas y afrodescendientes de la región la consideran un lugar sagrado, un espacio donde la naturaleza se manifiesta en su forma más pura y donde se debe entrar con respeto. La isla ha sido propuesta para ser declarada Patrimonio Mixto de la Humanidad por la UNESCO, en reconocimiento a su valor tanto natural como cultural.</p>`,
        atributos: ["Centro ceremonial", ["Biodiversidad única", "Lugar de poder espiritual"]],
        iconos: ["fa-island-tropical", ["fa-dove", "fa-mountain"], "fa-leaf"]
      },
    // ==================== REGIÓN AMAZONÍA ====================
    {
        id: "quebrada-eware-tikuna",
        nombre: "Quebrada / Laguna Eware (Yḭtaküchiü̃)",
        cultura: "Tikuna (Yoí, Ngṵtapa)",
        region: "amazonia",
        imagen: "../img/Lugares/Quebrada-Eware.webp",
        descripcion_corta: "El lugar más sagrado para el pueblo Tikuna. Útero mítico donde Yoí 'pescó' a los primeros humanos.",
        descripcion: `<h3>🌊 Un Espejo de Agua en la Frontera de Tres Países</h3>
        <p>La quebrada Eware, también conocida en la lengua tikuna como Yḭtaküchiü̃, es un cuerpo de agua ubicado en el municipio de Puerto Nariño, en el departamento del Amazonas, cerca de las fronteras con Brasil y Perú. Es un pequeño afluente de aguas oscuras que nace en las estribaciones de la selva y desemboca en el río Amazonas. Su nombre original, Yḭtaküchiü̃, evoca la imagen de una laguna cristalina y aceitosa donde, según la tradición, los inmortales se bañaban para no envejecer. Sin embargo, para el pueblo Tikuna (Magüta), este cuerpo de agua no es un simple accidente geográfico; es el útero mítico de la humanidad, el lugar más sagrado de su territorio y el punto de origen de su identidad como pueblo.</p>
      
        <h3>✨ El Útero Mítico: La Pesca de los Primeros Tikuna</h3>
        <p>Según la tradición oral de los Tikuna, fue en las aguas rojizas de la quebrada Eware donde el héroe cultural Yoí (también escrito Yo'í) realizó el acto fundacional de la humanidad. En un tiempo en que el mundo estaba cubierto por la oscuridad y los primeros seres vivían como espíritus en un mundo acuático, Yoí tomó su vara de pescar y, utilizando diferentes carnadas, comenzó a "pescar" a los primeros humanos de las profundidades del agua. Una por una, las figuras humanas emergían del líquido elemento y, al tocar la tierra firme, se transformaban en personas vivas. Estos fueron los primeros Magüta (como se autodenominan los Tikuna), la "gente pescada". Los peces que no lograron convertirse en humanos se quedaron en el agua, poblando los ríos y quebradas. La quebrada Eware, de aguas rojizas, es considerada el lugar exacto de esta creación, un punto de contacto entre el mundo espiritual de los inmortales y el mundo terrenal de los vivos.</p>
      
        <h3>🙏 Un Lugar de Purificación y Conexión con los Ancestros</h3>
        <p>La sacralidad de Eware no se limita al pasado mítico. Para los Tikuna, este es un lugar de poder donde aún hoy se realizan rituales de purificación y armonización. Las aguas de la quebrada son consideradas sagradas, y antes de bañarse en ella o de beber de sus aguas, se debe pedir permiso a los espíritus que la habitan. Se dice que en las profundidades de Eware aún viven los seres inmortales (Üüne) que no quisieron convertirse en humanos, y que estos pueden comunicarse con los chamanes a través de los sueños. El lugar es también un punto de peregrinación para los Tikuna que buscan reconectar con sus ancestros y con el origen de su identidad.</p>
      
        <h3>🌿 Un Territorio de Resistencia y Memoria Ancestral</h3>
        <p>La quebrada Eware es, en esencia, un libro abierto donde está escrita la historia del pueblo Tikuna. Es la prueba tangible de que su territorio les fue entregado por sus dioses desde el principio de los tiempos. Por esta razón, la defensa de Eware es una defensa de la identidad. Los Tikuna han luchado históricamente por la protección de este lugar sagrado frente a la explotación turística y la contaminación. Visitar Eware es posible solo con respeto y guías autorizados, y siempre recordando que se está pisando un territorio vivo, donde el agua, la tierra y los seres espirituales están conectados por un pacto ancestral que debe ser honrado.</p>`,
        atributos: ["Útero mítico", ["Origen del pueblo Tikuna", "Lugar de purificación"]],
        iconos: ["fa-water", ["fa-fish", "fa-hand-sparkles"], "fa-globe"]
      },
      {
        id: "resguardo-yaigoje-apaporis",
        nombre: "Resguardo Yaigojé Apaporis",
        cultura: "Uitoto (Yuruparí)",
        region: "amazonia",
        imagen: "../img/Lugares/Yaigoje-Apaporis.webp",
        descripcion_corta: "Alberga sitios sagrados como 'Yuisi', considerado el centro del mundo en la tradición del Yuruparí.",
        descripcion: `<h3>🏞️ Un Territorio de 1.056.023 Hectáreas en el Corazón de la Amazonía</h3>
        <p>El Resguardo Yaigojé Apaporis es un inmenso territorio indígena de 1.056.023 hectáreas ubicado en el departamento del Vaupés, en el sureste de Colombia, en la cuenca de los ríos Apaporis, Pirá Paraná y Caquetá. Es el hogar de los pueblos cabiyarí, tanimuka, letuama, yahuna, yuhup, barazano, yauna y macuna, entre otros. Su territorio se traslapa en un 100% con el Parque Nacional Natural Yaigojé Apaporis, una figura de doble protección que garantiza la conservación de su biodiversidad y de su patrimonio cultural. Para estos pueblos, el resguardo no es solo un espacio físico; es un ser vivo, un macroterritorio sagrado donde se originaron los conocimientos que sostienen el equilibrio del universo.</p>
      
        <h3>✨ Yuisi: El Centro del Mundo</h3>
        <p>Dentro de este resguardo se encuentra el sitio sagrado más importante de toda la región: Yuisi, también conocido como "La Libertad". Se trata de una espectacular caída de agua en el río Apaporis, un lugar de cascadas y rápidos donde, según la tradición, los dioses dijeron que era el centro del mundo. Yuisi es considerado la fuente de toda la energía espiritual y el punto de origen de los conocimientos tradicionales de los pueblos del Yuruparí. Allí fue donde el espíritu guardián del Yuruparí enseñó a los ancestros los rituales, las leyes y las prácticas que aún hoy rigen la vida en el territorio. Es un lugar donde el tiempo mítico y el tiempo histórico se encuentran, y donde los chamanes acuden para renovar su poder y consultar a los espíritus.</p>
      
        <h3>⛰️ Un Santuario Amenazado por la Minería Ilegal</h3>
        <p>La sacralidad de Yuisi y de todo el resguardo ha sido puesta a prueba en las últimas décadas por la amenaza de la minería ilegal de oro. Empresas multinacionales han intentado obtener títulos mineros para explotar las riquezas del subsuelo, lo que ha sido rechazado por las comunidades indígenas. Los líderes del resguardo han declarado que explotar en Yuisi sería como acabar con sus conocimientos y con su vida. "Allí fue donde los dioses dijeron que es el centro del mundo de todos los pueblos", afirma Robin Elkin Díaz Miraña, líder macuna. La defensa de Yuisi es una defensa de la identidad, de la memoria y del equilibrio espiritual del universo. En 2018, el resguardo fue declarado Parque Nacional Natural, una figura que, sumada a la del resguardo indígena, busca blindar la protección de los valores culturales y ambientales de este territorio sagrado.</p>
      
        <h3>🌿 Un Legado de Sabiduría y Resistencia</h3>
        <p>El Resguardo Yaigojé Apaporis es un ejemplo de cómo los pueblos indígenas han logrado articular su cosmovisión con las figuras de protección del Estado para salvaguardar sus territorios sagrados. Los sabedores del lugar, los chamanes jaguares, siguen guiando a sus comunidades a través del conocimiento ancestral que emana de Yuisi. Cada año, en este sitio se celebra el ritual del Yuruparí, donde se transmiten a los jóvenes las normas para la preservación de la salud y la conservación del territorio. Hoy en día, el resguardo es un bastión de resistencia cultural y un recordatorio de que hay lugares que no pueden ser medidos por su valor material, sino por su inmensa riqueza espiritual.</p>`,
        atributos: ["Centro del mundo", ["Resistencia indígena", "Ritual del Yuruparí"]],
        iconos: ["fa-mountain", ["fa-water", "fa-hand-sparkles"], "fa-tree"]
      },
      {
        id: "rio-pira-parana",
        nombre: "Río Pirá Paraná",
        cultura: "Uitoto",
        region: "amazonia",
        imagen: "../img/Lugares/Rio-Pirá-Paraná.webp",
        descripcion_corta: "Centro energético del macroterritorio Yuruparí, donde los chamanes jaguares realizan sus rituales.",
        descripcion: `<h3>🌊 El Corazón Energético de los Jaguares de Yuruparí</h3>
        <p>El río Pirá Paraná es un afluente del río Apaporis que fluye en el departamento del Vaupés, en el sureste de la Amazonía colombiana. Su nombre en lengua uitoto significa "Río de Aguas de Yuruparí" o "Hee Oko ~Ba". Para los pueblos indígenas que habitan su cuenca (Makuna, Tanimuka, Tuyuca, Cabiyari, Letuama y otros), el Pirá Paraná no es un simple río; es el corazón y el centro energético de un vasto espacio sagrado denominado el territorio de los jaguares de Yuruparí. Este macroterritorio, que abarca cerca de ocho millones de hectáreas, es considerado el lugar donde confluyen los sitios sagrados que nutren a todos los seres vivientes del mundo. Según la sabiduría ancestral, el río es el eje que ordena el cosmos y el punto de conexión entre el mundo de los vivos, el de los muertos y el de los espíritus.</p>
      
        <h3>✨ Los Chamanes Jaguares: Guardianes del Conocimiento Ancestral</h3>
        <p>En las orillas del Pirá Paraná residen los chamanes jaguares de Yuruparí, los guardianes y transmisores del conocimiento tradicional. Estos sabedores, que han heredado su poder y su sabiduría de un mítico Yuruparí omnipotente (una anaconda que vivió como persona), siguen un estricto calendario de rituales ceremoniales basados en sus conocimientos sagrados. Su objetivo es agrupar a la comunidad, curar a las personas, prevenir enfermedades y revitalizar la naturaleza. Los rituales comprenden cantos y danzas que embellecen los procesos de curación, y se realizan en lugares específicos a lo largo del río, cada uno con una energía espiritual particular.</p>
      
        <h3>🎵 El Hee Biki: El Ritual de las Trompetas Sagradas</h3>
        <p>El elemento central de la tradición de los chamanes jaguares es el ritual Hee Biki, que gira en torno a unas preciadas trompetas sagradas fabricadas con madera de palma. Cada grupo étnico posee sus propias trompetas yuruparí, que son consideradas la encarnación física del poder del héroe mítico. Durante la ejecución del ritual, que es parte de la iniciación de los jóvenes varones en la edad adulta, se transmiten las normas tradicionales para la preservación de la salud del cuerpo, la conservación del territorio y el respeto por las leyes de origen. El sonido de las trompetas, prohibido para las mujeres, es considerado la voz de los ancestros y tiene el poder de armonizar el cosmos.</p>
      
        <h3>🏛️ Un Patrimonio Vivo de la Humanidad</h3>
        <p>En 2011, la UNESCO inscribió los "Conocimientos tradicionales de los chamanes jaguares de Yuruparí" en la Lista Representativa del Patrimonio Cultural Inmaterial de la Humanidad. Este reconocimiento no solo valora la riqueza de este sistema de conocimiento, sino que también visibiliza la amenaza que enfrenta por la minería ilegal, la deforestación y la presión de proyectos extractivos. Para los pueblos del Pirá Paraná, este río es el eje de su identidad, el escenario de sus rituales y el territorio que deben proteger para que la sabiduría ancestral no se pierda.</p>`,
        atributos: ["Centro energético", ["Chamanes jaguares", "Ritual Hee Biki"]],
        iconos: ["fa-water", ["fa-dove", "fa-hand-sparkles"], "fa-globe"]
      },
      {
        id: "leticia-cotomachaco",
        nombre: "Leticia (selvas cercanas)",
        cultura: "Cotomachaco",
        region: "amazonia",
        imagen: "../img/Lugares/Cotomachaco.webp",
        descripcion_corta: "Selvas profundas y lagunas donde habita una boa de dos cabezas que caza en árboles y tierra.",
        descripcion: `<h3>🌿 El Reino de la Selva más Impenetrable</h3>
        <p>En las selvas más profundas y poco transitadas que rodean la ciudad de Leticia, capital del departamento del Amazonas, se extiende un reino de árboles centenarios, lagunas oscuras y caños sin nombre. Es una región donde la luz del sol apenas logra penetrar el denso follaje, y donde el silencio solo es interrumpido por el canto de los monos aulladores y el aleteo de las guacamayas. Para los indígenas y ribereños de la zona, este no es un lugar cualquiera; es el territorio sagrado del Cotomachaco, una de las criaturas más temidas y respetadas del folclor amazónico colombiano. Su nombre, que en lengua huitoto significa "boa de dos cabezas", es susurrado con reverencia y temor, y sus apariciones son consideradas un presagio de peligro inminente.</p>
      
        <h3>🐍 La Boa de Dos Cabezas: Un Ser Sobrenatural</h3>
        <p>El Cotomachaco es descrito como una boa de proporciones colosales, pero con un rasgo que la hace única y aterradora: posee dos cabezas, cada una apuntando a destinos contrarios pero esenciales. Su primera cabeza se alza con majestuosidad entre las ramas de los árboles más altos, alcanzando hasta los cincuenta metros, como si el mismo cielo la hubiera puesto allí para vigilar su reino desde las alturas. Esta cabeza, con su mirada de felino, acecha a los monos aulladores, a los micos y a las aves que confían en la seguridad de las copas de los árboles. Su otra cabeza descansa sobre la tierra, recostada sobre el mullido lecho de la selva, acechando al caminante despistado, al cazador que se interna solo en la espesura, y a todo ser vivo que se atreva a cruzar su camino. Es un ser híbrido, mitad aéreo y mitad terrestre, que encarna el poder absoluto sobre los dos niveles de la selva.</p>
      
        <h3>⚰️ El Cazador Invisible y la Voz del Mono</h3>
        <p>La estrategia de caza del Cotomachaco es tan ingeniosa como mortal. Una de sus cabezas puede imitar a la perfección los gritos del mono coto (aullador), un "wo, wo, wo" que resuena en la selva como un eco de tristeza olvidada. Los cazadores, al escuchar este sonido, se internan en la espesura creyendo que podrán cazar al animal. Pero el Cotomachaco se adelanta, se oculta entre las ramas, y cuando la víctima está lo suficientemente cerca, la "jala" hacia arriba con un movimiento imposible, la alza al aire y la acoge en su inmensa y sagrada barriga. Los cazadores más valientes pueden decir "Voy a matar un coto", pero la leyenda advierte que el animal siempre se adelanta, extraviando a los hombres en su propia leyenda.</p>
      
        <h3>🌙 Un Lugar de Advertencia y Respeto</h3>
        <p>Para los habitantes de Leticia y las comunidades indígenas de la región, el Cotomachaco no es un simple cuento para asustar niños. Es una advertencia real, una enseñanza sobre los peligros de adentrarse solo en la selva sin respeto por los espíritus que la habitan. Los ancianos recomiendan nunca caminar solo por la selva al atardecer, y si se escucha el "wo, wo, wo" del mono en la distancia, es mejor regresar a casa sin mirar atrás. Quienes se salvan de su embrujo regresan con un relato que es piedra filosofal para el oído: un aviso de nunca bajar la guardia y de honrar el silencio donde se esconde lo intangible. El Cotomachaco es, en esencia, el guardián de los secretos de la selva, un recordatorio de que el mundo natural tiene sus propios dueños y sus propias leyes, y que quien las transgrede se enfrenta a un poder que no puede controlar.</p>`,
        atributos: ["Boa de dos cabezas", ["Guardián de la selva", "Advertencia ancestral"]],
        iconos: ["fa-snake", ["fa-tree", "fa-skull"], "fa-moon"]
      },

    // ==================== REGIÓN ORINOQUÍA ====================
    {
        id: "cerro-autana-kaliawiri",
        nombre: "Cerro Autana",
        cultura: "Piapoco / Sikuani",
        region: "orinoquia",
        imagen: "../img/Lugares/Cerro-Autana.webp",
        descripcion_corta: "Tronco petrificado del árbol cósmico Kaliawiri, que contenía todos los alimentos del mundo.",
        descripcion: `<h3>🏔️ El Tepuy Fronterizo</h3>
        <p>El cerro Autana, conocido como Euwabey ("árbol de la vida") en lengua piaroa, es un imponente tepuy de 1.250 metros de altura situado en el estado Amazonas de Venezuela, cerca de la frontera con Colombia. Pertenece al escudo de Guayana y se caracteriza por sus paredes verticales y su cima casi plana. Para los pueblos indígenas de la cuenca del Orinoco, incluidos los Piapoco y Sikuani en el lado colombiano, esta montaña es mucho más que una formación geológica: es el tronco petrificado del árbol cósmico Kaliawiri, el origen de todos los alimentos del mundo.</p>
      
        <h3>🌳 Kaliawiri: El Árbol de la Vida</h3>
        <p>En la cosmogonía de los pueblos de la familia lingüística arawak, el árbol Kaliawiri (o Kaliawirinae) era un coloso cuyas ramas sostenían toda clase de frutas y raíces: piña, batata, yuca, ají, banano, ñame y muchos otros cultígenos. Según el mito, en una época de gran tempestad que arrasó con toda la comida, solo este árbol sobrevivió más allá del gran río Orinoco. Fue descubierto por Kutsikutsi, un hombre que podía transformarse en mono, quien encontró el árbol guiado por el olor dulce de una piña.</p>
      
        <h3>🌱 El Descubrimiento y la Distribución de los Alimentos</h3>
        <p>Guiados por el héroe cultural Tzamani, los animales y los primeros humanos organizaron una expedición para derribar el árbol y esparcir sus frutos por toda la tierra. La ardilla, el bachaco (hormiga) y otros animales colaboraron en la gran empresa. Cuando el árbol cayó, su tronco se convirtió en el cerro Autana, sus ramas formaron los ríos y sus frutos se esparcieron por el mundo, dando origen a la agricultura. Las piedras que hoy se ven en los ríos son las astillas del árbol cósmico, y los peces que los habitan surgieron de las semillas que cayeron al agua.</p>
      
        <h3>🪨 Un Territorio Sagrado de Peregrinación</h3>
        <p>Para los Piapoco y Sikuani, el cerro Autana es un lugar de peregrinación y rituales. Los chamanes realizan viajes espirituales hasta su cima para comunicarse con los dueños de los animales y las plantas. En sus cuevas se guardan los secretos del origen, y sus aguas son consideradas sagradas. Hoy en día, el cerro es un Monumento Natural protegido en Venezuela, pero su importancia espiritual trasciende las fronteras, siendo un punto de encuentro para los pueblos de la cuenca del Orinoco que aún veneran al árbol de la vida que una vez les dio el sustento.</p>`,
        atributos: ["Árbol de la vida", ["Origen de los alimentos", "Tepuy sagrado"]],
        iconos: ["fa-mountain", ["fa-tree", "fa-seedling"], "fa-globe"]
      },
      {
        id: "raudal-hipana-piapoco",
        nombre: "Raudales de Hípana (río Ayarí)",
        cultura: "Piapoco",
        region: "orinoquia",
        imagen: "../img/Lugares/Hipana.webp",
        descripcion_corta: "'Ombligo del mundo'; lugar desde donde Kalíiduwápini distribuyó el territorio entre los cinco linajes ancestrales.",
        descripcion: `<h3>🌊 El Corazón del Origen en el Río Ayarí</h3>
        <p>Los raudales de Hípana se encuentran en el río Ayarí (o Aiari), un afluente del río Isana en la cuenca del Vaupés, en la frontera entre Colombia y Brasil. Para el pueblo Piapoco (también conocido como Wenaiwika), este lugar es el punto cero de su universo, el "ombligo del mundo" donde comenzó todo. Según su tradición, el origen de los Piapoco se sitúa específicamente en la piedra yuluatá de estos raudales, un lugar sagrado al que se refieren como su hogar ancestral.</p>
      
        <h3>👣 El Viaje Fundacional desde el Ombligo del Mundo</h3>
        <p>La tradición oral de los Piapoco cuenta que fue desde Hípana donde partieron sus ancestros para poblar los territorios que hoy habitan entre los ríos Meta y Guaviare, en los departamentos de Guainía, Meta y Vichada. Utilizando rutas fluviales y terrestres a través del Vaupés, los Llanos y el alto Orinoco, los Piapoco se expandieron hasta las riberas del gran río en territorio venezolano. Hípana es, por tanto, el punto de emanación de su identidad y de su orden social, el lugar donde se gestó la memoria colectiva que aún hoy transmiten los mayores.</p>
      
        <h3>🙏 Un Lugar de Origen y Ritual</h3>
        <p>Los raudales de Hípana no son solo un lugar de origen mítico; son un sitio donde los Piapoco aún realizan rituales de armonización y pagamentos (ofrendas). Los chamanes invocan este lugar en sus cantos ceremoniales, y los ancianos enseñan a los jóvenes que allí están las raíces de su pueblo. Aunque el acceso a Hípana es difícil, su importancia espiritual es inmensa, y su nombre resuena en cada ceremonia del Yuruparí y en cada relato sobre la creación del mundo y la distribución de los clanes.</p>`,
        atributos: ["Ombligo del mundo", ["Lugar de origen", "Piedra yuluatá"]],
        iconos: ["fa-water", ["fa-dove", "fa-map-marker-alt"], "fa-hand-sparkles"]
      },
      {
        id: "rios-tsawaliwali-orinoco",
        nombre: "Los Ríos de Tsawaliwali (Vichada, Meta, Guaviare, Orinoco)",
        cultura: "Sikuani",
        region: "orinoquia",
        imagen: "../img/Lugares/Tsawaliwali.webp",
        descripcion_corta: "Abiertos por el cuerpo de la culebra primordial Tsawaliwali, trazando el territorio ancestral Sikuani.",
        descripcion: `<h3>🐍 La Culebra Primordial que Abrió los Ríos</h3>
        <p>Los ríos Vichada, Meta, Guaviare y Orinoco son las arterias vitales de la Orinoquía colombiana. Para el pueblo Sikuani, estas masas de agua no son producto de procesos geológicos fortuitos: fueron abiertas por el cuerpo de la culebra primordial Tsawaliwali, una anaconda gigante emparentada con la jomowabi (Eunectes murinus), creada por Yamaxëne, el señor del trueno. En un tiempo en que no existían ríos, solo sabanas interminables, la culebra comenzó a desplazarse serpenteando la tierra, trazando con cada vuelta de su cuerpo los caños y los grandes cursos de agua.</p>
      
        <h3>🌿 El Viaje del Anciano en el Vientre de la Culebra</h3>
        <p>Una versión del mito cuenta que la culebra llevaba en su vientre el espíritu de un anciano. Mientras Tsawaliwali serpenteaba la tierra, el anciano le daba órdenes desde dentro: "Vamos por allá, forma un río". Así recorrieron el territorio, abriendo el Vichada, el Meta, el Guaviare y finalmente el imponente Orinoco. Después de mucho tiempo, regresaron al lugar de origen, y el anciano rajó el estómago de la culebra para salir. Tsawaliwali se fue a vivir para siempre en las profundidades de las aguas, donde aún habita como un poderoso espíritu dueño de lagunas y fuerzas acuáticas.</p>
      
        <h3>🌊 Los Cauces Sagrados y los Espíritus de las Aguas</h3>
        <p>Para los Sikuani, cada recodo de estos ríos es la huella viva del paso de Tsawaliwali. En sus profundidades habitan espíritus poderosos como Umáwali, el dueño de los peces, las tortugas y las anacondas. Los pescadores deben pedir permiso antes de lanzar sus redes y ofrecer pagamentos para que la pesca sea abundante. Quienes contaminan las aguas o pescan con métodos destructivos se enfrentan a la ira de estos guardianes, que pueden enviar enfermedades o hacer que las embarcaciones se hundan misteriosamente.</p>
      
        <h3>🙏 Un Legado de Respeto y Reciprocidad</h3>
        <p>El mito de Tsawaliwali es también una carta geográfica que ha guiado las migraciones y la ocupación del territorio Sikuani durante generaciones. Los ancianos enseñan a los jóvenes que los ríos tienen dueño, que los peces tienen guardián, y que quien toma más de lo necesario sin pedir permiso se enfrenta al castigo. Por eso, antes de cualquier viaje o faena de pesca, los Sikuani realizan rituales de permiso y ofrendas. En cada viaje en curiara, en cada pesca exitosa, recuerdan a Tsawaliwali, la culebra que un día abrió los ríos para dar vida a su pueblo.</p>`,
        atributos: ["Culebra primordial", ["Ríos sagrados", "Guardianes acuáticos"]],
        iconos: ["fa-water", ["fa-snake", "fa-fish"], "fa-hand-sparkles"]
      },
      {
        id: "diosonamuto-camino-dios",
        nombre: "Diosonamuto (Camino de Dios)",
        cultura: "Sikuani",
        region: "orinoquia",
        imagen: "../img/Lugares/Diosonamuto.webp",
        descripcion_corta: "Ruta terrestre sagrada que cruzaba los llanos, utilizada por los abuelos para llegar a sitios sagrados.",
        descripcion: `<h3>🏞️ La Senda Ancestral en la Inmensidad del Llano</h3>
        <p>El Diosonamuto, conocido como el "Camino de Dios", era una ruta terrestre sagrada que atravesaba los Llanos Orientales de Colombia, conectando los territorios de los actuales departamentos de Meta, Casanare y Vichada. Para el pueblo Sikuani (también conocidos como Guahibo), este sendero no era una simple trocha de comunicación; era una vía espiritual trazada por los ancestros y consagrada por los dioses, que servía como puente entre las comunidades y los lugares de poder.</p>
      
        <h3>🙏 Una Vía de Peregrinación hacia lo Sagrado</h3>
        <p>La principal función del Diosonamuto era servir como ruta de peregrinación. Los abuelos, los chamanes (conocidos como thë' wala) y las personas enfermas recorrían este camino para llegar a los sitios sagrados donde se realizaban rituales de curación y armonización. El trayecto era en sí mismo una ceremonia, un acto de purificación que preparaba al caminante para el encuentro con los espíritus dueños de la naturaleza y los ancestros.</p>
      
        <h3>🛤️ El Camino como Eje de Comunicación y Memoria</h3>
        <p>Además de su función espiritual, el Diosonamuto era un eje de comunicación entre las diferentes parcialidades Sikuani y los pueblos vecinos de la cordillera. A través de este sendero se transmitían noticias, bienes y, sobre todo, el conocimiento ancestral de generación en generación. Cada hito del camino, cada árbol, cada cruce de caño, era una marca en la memoria colectiva, un recordatorio de la historia del pueblo y de su relación con el territorio. Hoy en día, aunque el camino físico se ha perdido en gran parte por la expansión de la frontera agrícola y ganadera, el Diosonamuto sigue vivo en la tradición oral Sikuani como un símbolo de la conexión con la tierra y con los ancestros.</p>`,
        atributos: ["Sendero sagrado", "Peregrinación", "Conexión ancestral"],
        iconos: ["fa-road", ["fa-hand-sparkles", "fa-person-walking"], "fa-tree"]
      },
      {
        id: "hato-santa-helena-anima",
        nombre: "Hato de Santa Helena (río Cravo Norte)",
        cultura: "Meta",
        region: "orinoquia",
        imagen: "../img/Lugares/Hato-Santa-Helena.webp",
        descripcion_corta: "Hato donde una joven fue asesinada por una bala perdida en su fiesta de quince años. Su fantasma viste de blanco y protege el lugar.",
        descripcion: `<h3>🏞️ El Hato Legendario a Orillas del Cravo Norte</h3>
        <p>El Hato de Santa Helena es una extensa propiedad ganadera ubicada a orillas del río Cravo Norte, en el departamento de Meta, en el corazón de los Llanos Orientales. Este hato, como muchos otros en la región, era un centro de vida y trabajo para los llaneros. Sin embargo, su nombre trascendió la geografía para convertirse en el epicentro de una de las leyendas más conmovedoras y perdurables del folclor llanero: la del Ánima de Santa Helena, una historia que combina la tragedia, la memoria y la protección espiritual del territorio.</p>
      
        <h3>🎉 La Fiesta que Terminó en Tragedia</h3>
        <p>Cuenta la tradición que el hacendado Don Ramón Herrera, un hombre de gran faena, celebró una animada fiesta en el hato para conmemorar los quince años de su hija, una bella catira (joven de cabello rubio y ojos claros). La celebración era grande: sonaba el arpa, el cuatro y las maracas, y el guarapo corría como el agua de los caños. Entre los invitados se encontraban dos hombres que se disputaban la atención de la quinceañera. La noche avanzaba cuando la disputa se volvió violenta y ambos hombres desenfundaron sus revólveres. En medio del tiroteo, una bala perdida atravesó el pecho de la joven, quien cayó sin vida, vistiendo aún el vestido blanco de su fiesta de quince años.</p>
      
        <h3>⚰️ El Espíritu Errante y Protector del Hato</h3>
        <p>Desde aquel 16 de enero, la tradición oral afirma que en cada aniversario de su muerte, una blanca figura de inigualable belleza aparece en las sabanas de Santa Helena. Es el ánima de la quinceañera, vestida con el mismo traje que llevaba la noche de la fiesta. Su espíritu no es vengativo, sino protector. Camina entre los árboles y senderos del hato, alejando a todo forastero que intente acercarse con malas intenciones. Los llaneros aseguran que su presencia es un recordatorio de la fragilidad de la vida y de la importancia de honrar la memoria de quienes partieron.</p>
      
        <h3>🌿 Una Leyenda que Enseña y Protege</h3>
        <p>La leyenda del Ánima de Santa Helena se ha transmitido de generación en generación, no solo como un relato de miedo, sino como una lección sobre la paz y el respeto. La joven, convertida en espíritu, se ha erigido en guardiana del hato y sus alrededores. Los habitantes de la región cuentan que, en las noches de luna llena, su silueta blanca se aparece a los viajeros para guiarlos de vuelta a casa o para advertirles de peligros inminentes. Es, en esencia, un símbolo de la memoria y la protección, un recordatorio de que los ancestros nunca abandonan del todo la tierra que amaron.</p>`,
        atributos: ["Espíritu guardián", ["Leyenda de tragedia", "Protección del territorio"]],
        iconos: ["fa-female", ["fa-ghost", "fa-shield-alt"], "fa-moon"]
      },
      {
        id: "rio-guacavia-doncella",
        nombre: "Río Guacavía (Marbachare)",
        cultura: "San Martín",
        region: "orinoquia",
        imagen: "../img/Lugares/Rio-Guacavía.webp",
        descripcion_corta: "Río y sus orillas, donde el espíritu de una joven protege las aguas y castiga a quienes contaminan.",
        descripcion: `<h3>🏞️ El Río que Atraviesa la Historia de San Martín</h3>
        <p>El río Guacavía es un afluente del río Meta, que atraviesa el municipio de San Martín de los Llanos, en el departamento del Meta. Sus aguas han sido testigos de la historia de la región, desde los asentamientos indígenas previos a la conquista hasta la colonización y el desarrollo ganadero. Para los habitantes de la zona, este río no es solo una fuente de agua y pesca; es un espacio habitado por fuerzas espirituales, siendo la más conocida la de la Doncella de Marbachare.</p>
      
        <h3>👸 La Doncella: Un Espíritu Protector de las Aguas</h3>
        <p>Según la tradición oral de San Martín, en las profundidades del río Guacavía, o en sus orillas durante las noches de luna, habita el espíritu de una doncella, conocida como la Doncella de Marbachare. No se trata de una leyenda de terror, sino de la historia de un espíritu femenino profundamente ligado a la naturaleza y la justicia ambiental. Aunque su origen mítico exacto se ha perdido en el tiempo, la Doncella es recordada como una guardiana, una protectora de las aguas y de los seres que en ellas habitan.</p>
      
        <h3>⚖️ La Castigadora de la Contaminación y el Abuso</h3>
        <p>La sacralidad del río Guacavía está directamente vinculada a la función moralizante y protectora de la Doncella de Marbachare. La tradición cuenta que este espíritu cuida con celo el río y castiga a quienes lo contaminan o abusan de sus recursos. Los pescadores que respetan las vedas y no usan métodos destructivos son recompensados con buena pesca. En cambio, aquellos que ensucian las aguas, talan los árboles de la ribera o matan animales en exceso, sufren su ira. La doncella puede hacer que sus embarcaciones se hundan, que pierdan el rumbo o que una fiebre inexplicable los postre en la cama. Su presencia en el imaginario colectivo sirve como un recordatorio del respeto que se le debe al río.</p>
      
        <h3>🌱 Un Símbolo de Conciencia Ecológica y Memoria Ancestral</h3>
        <p>La leyenda de la Doncella de Marbachare es, en esencia, un poderoso llamado a la armonía con la naturaleza. En una región donde el agua es vida y los ríos son el sustento de comunidades enteras, esta historia cobra una relevancia ecológica fundamental. La doncella es la memoria viva de un pacto ancestral: el agua se respeta, se cuida y se le pide permiso. Por eso, en San Martín, muchos pescadores y campesinos aún le ofrecen pequeñas ofrendas antes de internarse en el río o le piden permiso con una oración en voz baja. Su espíritu sigue velando por las aguas del Guacavía, recordando que el equilibrio entre el hombre y la naturaleza es la clave de la supervivencia.</p>`,
        atributos: ["Espíritu guardián", ["Protección del agua", "Justicia ambiental"]],
        iconos: ["fa-water", ["fa-female", "fa-leaf"], "fa-gavel"]
      },

    // ==================== REGIÓN INSULAR ====================
    {
        id: "cueva-morgan-san-andres",
        nombre: "Cueva de Morgan (San Andrés)",
        cultura: "Pirata Henry Morgan",
        region: "insular",
        imagen: "../img/Lugares/Cueva-Morgan.webp",
        descripcion_corta: "Escondite del tesoro del pirata Morgan, custodiado por almas en pena de sus esclavos decapitados.",
        descripcion: `<h3>🏝️ El Escondite Secreto en la Isla Caribe</h3>
        <p>La cueva de Morgan es una formación rocosa de origen coralino ubicada en el kilómetro 8 de la vía circunvalar de la isla de San Andrés, cerca del aeropuerto. Se trata de una cavidad de aproximadamente 30 metros de profundidad, con un sistema de galerías internas que se comunican con el mar a través de un túnel sumergido de unos 35 metros. Para los isleños raizales y los visitantes, este lugar no es solo una curiosidad geológica; es el escenario de una de las leyendas más poderosas y persistentes del Caribe colombiano, vinculada al famoso pirata inglés Henry Morgan (1635-1688).</p>
      
        <h3>💰 La Fortaleza del Alacrán y el Tesoro Maldito</h3>
        <p>Henry Morgan, conocido como el "Azote del Caribe", fue uno de los piratas más exitosos y temidos de la historia. Después de saquear y quemar ciudades como Portobelo, Maracaibo y la Vieja Panamá, acumuló una fortuna incalculable en oro, plata y joyas. Según la leyenda isleña, Morgan, temiendo ser traicionado por los suyos o capturado por los españoles, decidió esconder la mayor parte de su tesoro en una cueva de la isla de San Andrés. La cavidad, con su entrada discreta y su sistema de túneles sumergidos, era el escondite perfecto.</p>
      
        <h3>⚰️ Los Guardianes Decapitados y el Pacto de Sangre</h3>
        <p>Para asegurarse de que nadie revelara la ubicación del tesoro, Morgan ordenó ejecutar a los cuatro esclavos que lo habían ayudado a transportar y esconder las riquezas. Según la tradición, fueron decapitados en el acto, y sus cuerpos fueron arrojados al interior de la cueva, donde sus almas quedaron condenadas a vagar como guardianes eternos. Desde entonces, se dice que el tesoro de Morgan sigue en el fondo de la cueva, en una cámara aún inaccesible para los buzos comunes, custodiado por los espíritus de los esclavos decapitados. Quien intente llevarse el botín sin cumplir los rituales adecuados será condenado a una muerte terrible o a la locura eterna.</p>
      
        <h3>🌙 Un Lugar de Poder y Advertencia</h3>
        <p>Para los raizales de San Andrés, la cueva de Morgan no es un simple atractivo turístico; es un sitio de poder y respeto. La tradición oral advierte que para acceder al tesoro se requiere realizar un pacto o un ritual específico a la medianoche, y que nadie que haya actuado con maldad puede acercarse sin sufrir las consecuencias. Muchos visitantes han reportado sensaciones extrañas dentro de la cueva: escalofríos inexplicables, la sensación de ser observados y, en ocasiones, el sonido de cadenas arrastrándose en la oscuridad. La cueva es un recordatorio de que la codicia tiene un precio y de que hay secretos que el mar Caribe no está dispuesto a revelar.</p>`,
        atributos: ["Tesoro maldito", ["Espíritus guardianes", "Pacto de sangre"]],
        iconos: ["fa-water", ["fa-skull", "fa-gem"], "fa-dragon"]
      },
      {
        id: "hoyo-soplador-san-andres",
        nombre: "El Hoyo Soplador (San Andrés)",
        cultura: "Sirena del Hoyo Soplador",
        region: "insular",
        imagen: "../img/Lugares/Hoyo-Soplador.webp",
        descripcion_corta: "Géiser donde una sirena concede deseos a quienes los piden cuando el agua expulsa. También custodia un tesoro de Morgan.",
        descripcion: `<h3>🌊 El Géiser Natural en la Costa Sur</h3>
        <p>El Hoyo Soplador es una formación rocosa ubicada en la costa sur de la isla de San Andrés, a unos pocos kilómetros de la cueva de Morgan. Se trata de un orificio en la roca volcánica que, impulsado por la fuerza de las olas y el viento, expulsa potentes chorros de agua hacia el cielo, alcanzando alturas impresionantes. El fenómeno se produce cuando el mar entra por un túnel subterráneo y la presión del agua y el aire comprimido la lanzan hacia arriba. Para la ciencia, es un espectáculo geológico; para los isleños y visitantes, es un lugar de magia, un punto donde la naturaleza se manifiesta con poder y donde, según la tradición, habita una sirena de aguas profundas.</p>
      
        <h3>🧜‍♀️ La Sirena del Hoyo Soplador: Guardiana de los Deseos</h3>
        <p>La leyenda más arraigada del lugar cuenta que en las profundidades del Hoyo Soplador vive una sirena de una belleza sobrenatural. Es la guardiana del lugar, una criatura que posee el poder de escuchar los deseos de los visitantes. Se dice que en el preciso momento en que el géiser expulsa el chorro de agua, la sirena está más atenta que nunca, y que quien pida un deseo con fe y respeto en ese instante será escuchado. La sirena es descrita como benévola, y concede los deseos de aquellos que se acercan con un corazón puro. El sonido ensordecedor del agua al expulsarse es, en realidad, la forma que tiene la sirena de comunicarse y de ahuyentar los malos espíritus.</p>
      
        <h3>💰 Un Tesoro Pirata en el Fondo del Géiser</h3>
        <p>Otra variante de la leyenda vincula a la sirena del Hoyo Soplador con la historia del pirata Henry Morgan. Los ancianos raizales afirman que el famoso bucanero escondió parte de su legendario tesoro en el fondo de este lugar, y que la sirena fue la encargada por el pirata o por las fuerzas místicas de la isla para ser su guardiana eterna. Así, el Hoyo Soplador no es solo un fenómeno natural, sino un sitio cargado de magia, historia y misterio, donde la realidad se confunde con el encanto de las leyendas del Caribe.</p>
      
        <h3>🌿 Un Lugar de Respeto y Tradición Viva</h3>
        <p>Para los raizales de San Andrés, el Hoyo Soplador es un sitio que debe ser visitado con respeto. Es costumbre acercarse al borde de la formación rocosa y, al ver el agua dispararse hacia el cielo, pedir un deseo con profunda fe. Muchos lugareños aseguran que la sirena es benevolente y que concede las peticiones de quienes se acercan con un corazón sincero. También se recomienda no hacer ruido excesivo ni contaminar el lugar, pues la sirena puede enfadarse y retirar su protección. El Hoyo Soplador es, en esencia, un punto de encuentro entre el mundo natural y el mundo espiritual, un lugar donde el mar, el viento y la roca se unen para crear un escenario de magia y devoción.</p>`,
        atributos: ["Géiser sagrado", ["Sirena concededora", "Tesoro pirata"]],
        iconos: ["fa-water", ["fa-female", "fa-hand-sparkles"], "fa-gem"]
      },
      {
        id: "the-hill-san-andres",
        nombre: "The Hill (San Andrés)",
        cultura: "Duppy, Rolling Calf",
        region: "insular",
        imagen: "../img/Lugares/The-Hill.webp",
        descripcion_corta: "Cerro principal de la isla; zona de avistamiento de espíritus (duppies) y de la bestia de fuego Rolling Calf.",
        descripcion: `<h3>🏔️ El Cerro que Domina la Isla</h3>
        <p>La Loma (The Hill) es el cerro principal de la isla de San Andrés, una elevación que se alza en el centro del territorio y que ofrece una vista panorámica de toda la isla. En su cima se encuentra la iglesia bautista bautizada como "La Loma" y un mirador desde donde se contempla el mar Caribe en todo su esplendor. Este cerro no solo es un punto geográfico y turístico; es, para los raizales, un lugar de encuentro con el mundo espiritual, un territorio donde los duppies (espíritus de los muertos) y otras entidades sobrenaturales se manifiestan con frecuencia.</p>
      
        <h3>👻 Duppy: Los Espíritus Errante del Cementerio Raizal</h3>
        <p>En la tradición raizal de San Andrés y Providencia, los duppies son los espíritus de las personas fallecidas que han regresado al mundo de los vivos. Son una de las creencias más arraigadas del folclor isleño, heredadas de las tradiciones africanas traídas por los esclavos. Los duppies son descritos como siluetas blancuzcas, luminiscentes, que aparecen en lugares oscuros y solitarios, especialmente en los alrededores de los cementerios y en las noches sin luna. The Hill, con su antigua iglesia y su cementerio, es considerado uno de los puntos calientes para la aparición de duppies. Se dice que los espíritus de los antiguos pobladores de la isla aún deambulan por sus calles y senderos, protegiendo el territorio y apareciéndose a los trasnochadores.</p>
      
        <h3>🔥 Rolling Calf: La Bestia de Fuego que Rueda por las Laderas</h3>
        <p>Otra entidad temida que se asocia a The Hill es el Rolling Calf (Ternero Rodante). Esta criatura infernal es descrita como una bestia parecida a un toro o una vaca, pero de un tamaño mucho más grande y una contextura aterradora. Su característica más distintiva son sus ojos: dos esferas rojas y brillantes que parecen estar hechas de brasa viva. La bestia está envuelta por completo en llamas ardientes que no la consumen, y se desplaza rodando por los montes y caminos solitarios, dejando a su paso un fuerte y penetrante olor a azufre. Se aparece en las noches más oscuras para custodiar los secretos de la isla y alejar a los forasteros o a aquellos que transitan con malas intenciones.</p>
      
        <h3>🌙 Un Territorio de Misterio y Respeto</h3>
        <p>Para los raizales de San Andrés, The Hill no es un lugar para visitar de noche sin precaución. Las historias de encuentros con duppies y con el Rolling Calf se transmiten de generación en generación como advertencias. Los ancianos recomiendan no caminar solo por las laderas del cerro después del anochecer, y si se escucha el rodar pesado de una bestia o se ve una luz blanca flotando entre los árboles, es mejor regresar a casa sin mirar atrás. The Hill es, en esencia, un recordatorio de que la línea entre la vida y la muerte es delgada en el Caribe insular, y que los espíritus de los ancestros aún vigilan la tierra que un día habitaron.</p>`,
        atributos: ["Cerro espiritual", ["Duppy", "Rolling Calf"]],
        iconos: ["fa-mountain", ["fa-ghost", "fa-fire"], "fa-moon"]
      },
      {
        id: "la-loma-san-andres",
        nombre: "La Loma (San Andrés)",
        cultura: "Duppy",
        region: "insular",
        imagen: "../img/Lugares/La-Loma.webp",
        descripcion_corta: "Barrio tradicional con casas de madera; conocido por apariciones de duppies (espíritus de muertos).",
        descripcion: `<h3>🏞️ El Corazón Tradicional de la Isla</h3>
        <p>La Loma, conocida como The Hill en inglés, es el barrio tradicional por excelencia de San Andrés. Es el asentamiento principal de la comunidad raizal nativa de la isla, cuyas viviendas de madera de estilo caribeño, con sus característicos techos de zinc y sus coloridas fachadas, escalan las laderas del cerro central. Desde su cima, la iglesia bautista y el mirador ofrecen una vista panorámica de todo el mar de los siete colores. Pero más allá de su valor turístico y arquitectónico, La Loma es un lugar de profundo significado espiritual y cultural, un espacio donde las fronteras entre el mundo de los vivos y el de los muertos se perciben más cerca.</p>
      
        <h3>👻 Duppy: El Espíritu Errante</h3>
        <p>El nombre de La Loma está indisolublemente ligado a la leyenda del Duppy. En la tradición raizal de San Andrés y Providencia, el Duppy es el espíritu de una persona fallecida que ha regresado al mundo de los vivos. Es una de las creencias más arraigadas del folclor isleño, heredada de las tradiciones espirituales africanas traídas por los esclavos. Los duppies no son inherentemente malévolos, pero su aparición siempre es un presagio, a menudo asociado a una muerte inminente o una desgracia en la familia.</p>
      
        <h3>👣 El Territorio de los Duppies</h3>
        <p>La Loma es considerada uno de los "puntos calientes" para la aparición de duppies. Se dice que los espíritus de los antiguos pobladores de la isla aún deambulan por sus calles empinadas y sus casas de madera. Los avistamientos suelen ocurrir en las noches sin luna, donde los lugareños reportan ver siluetas blancas y luminiscentes entre los árboles o a la orilla de los caminos. El Duppy no solo se manifiesta en la realidad, sino que también puede visitar a las personas en sus sueños, una experiencia que se considera aún más aterradora y significativa. Para protegerse de un mal encuentro, los raizales recomiendan no caminar solo por La Loma después del anochecer, llevar un amuleto como una cruz o un diente de ajo, y rezar una oración si se siente una presencia extraña. La Loma es, en esencia, el guardián de la memoria ancestral de San Andrés, un recordatorio de que la muerte no es un final, sino una transición a otra forma de existencia.</p>`,
        atributos: ["Barrio tradicional", ["Espíritus de los muertos", "Apariciones nocturnas"], "Herencia africana"],
        iconos: ["fa-house-damage", ["fa-ghost", "fa-moon"], "fa-leaf"]
      },
      {
        id: "rocas-sirena-rhaxche",
        nombre: "Rocas de la Sirena (Providencia)",
        cultura: "Rhaxche (Sirena)",
        region: "insular",
        imagen: "../img/Lugares/Rocas-Sirena.webp",
        descripcion_corta: "Lugar donde se sienta la sirena Rhaxche, de cabellos dorados, cuyo canto hipnótico puede causar naufragios o guiar a pescadores.",
        descripcion: `<h3>🏞️ Las Formaciones Rocosas del Caribe</h3>
        <p>En las cristalinas aguas que rodean la isla de Providencia, cerca de la famosa piscina natural, se alzan un conjunto de formaciones rocosas conocidas como las Rocas de la Sirena. Estas rocas, esculpidas por la fuerza del mar Caribe a lo largo de milenios, emergen del agua como los dedos de una mano gigante, creando un paisaje de una belleza sobrecogedora. Para los isleños y visitantes, este no es un simple accidente geográfico; es el lugar de descanso de Rhaxche, la sirena de cabellos dorados, una de las leyendas más fascinantes y hermosas del archipiélago.</p>
      
        <h3>🧜‍♀️ Rhaxche: La Guardiana de las Profundidades</h3>
        <p>La tradición oral de Providencia describe a Rhaxche como una sirena de una belleza hipnótica. Su característica más distintiva es su larga cabellera dorada, que brilla bajo el sol tropical como el oro de un tesoro pirata. Sus ojos, del color de las perlas más finas, son profundos y están llenos de la sabiduría del mar. Se dice que Rhaxche no es una criatura malévola, sino una guardiana, un espíritu del océano que vela por los pescadores y navegantes de la isla.</p>
      
        <h3>🎵 El Canto Hipnótico: Bendición y Peligro</h3>
        <p>La leyenda cuenta que Rhaxche tiene la costumbre de salir del agua en el atardecer, cuando el cielo se tiñe de tonos anaranjados y violetas, para sentarse sobre las rocas que llevan su nombre. Allí, se peina su larga melena dorada con una concha de caracol mientras entona un canto de una belleza celestial y melancólica. Su voz, que se mezcla con el rumor de las olas, es tan poderosa que puede hechizar a cualquier hombre que la escuche. Los marineros que caen bajo su hechizo pueden perder el rumbo y estrellar sus embarcaciones contra las rocas. Sin embargo, a diferencia de las sirenas de la mitología clásica que son siempre fatales, Rhaxche también puede ser benévola. Se dice que, en medio de las tormentas más feroces, ha aparecido a los pescadores perdidos para guiarlos de vuelta a puerto, protegiéndolos de la furia del mar y evitando que naufragaran.</p>
      
        <h3>🌿 Un Símbolo de la Conexión con el Mar</h3>
        <p>Para los raizales de Providencia, Rhaxche es más que una simple leyenda; es el espíritu mismo del mar Caribe. Su figura en el imaginario colectivo es un recordatorio del respeto que se le debe al océano, fuente de vida y de recursos para la isla. Algunos pescadores aún le ofrecen pequeñas ofrendas de tabaco o una moneda antes de zarpar, pidiéndole su bendición y su protección. Las Rocas de la Sirena son, por tanto, un lugar de poder y conexión con la naturaleza, un punto donde la magia del mar se manifiesta y donde los límites entre lo real y lo fantástico se disuelven con la marea.</p>`,
        atributos: ["Sirena de cabellos dorados", ["Canto hipnótico", "Guía de pescadores"], "Espíritu del mar"],
        iconos: ["fa-female", ["fa-music", "fa-fish"], "fa-sun"]
      },
      {
        id: "cementerio-providencia",
        nombre: "Cementerio de Providencia",
        cultura: "Espíritus Guardianes (Hermanos Mayores)",
        region: "insular",
        imagen: "../img/Lugares/Cementerio-Providencia.webp",
        descripcion_corta: "Lugar de respeto y rituales para los 'Hermanos Mayores', espíritus que protegen la naturaleza de la isla.",
        descripcion: `<h3>⚰️ El Cementerio de Santa Isabel</h3>
        <p>El cementerio principal de la isla de Providencia, conocido como el Cementerio de Santa Isabel, se encuentra ubicado en un punto elevado cerca del pueblo, desde donde se contempla una vista del mar Caribe. Este camposanto es uno de los varios sitios de memoria en el archipiélago, espacios donde la comunidad raizal honra a sus ancestros y mantiene viva la conexión con su pasado. Sus tumbas, muchas de ellas con coloridas fachadas y flores frescas, son un reflejo de la cultura vibrante y respetuosa de los isleños. Pero más allá de su función funeraria, este cementerio es considerado un punto de encuentro con el mundo espiritual, un lugar donde habitan los "Hermanos Mayores", los espíritus guardianes de la naturaleza.</p>
      
        <h3>🙏 Los Hermanos Mayores: Guardianes de la Naturaleza</h3>
        <p>En la cosmovisión raizal, los "Hermanos Mayores" son entidades espirituales ancestrales que no son ni buenas ni malas. Son, ante todo, los dueños y guardianes de los elementos de la naturaleza: las montañas, los ríos, los manglares y los arrecifes de coral. Se cree que estos espíritus existen desde el origen de la isla y que tienen la función sagrada de velar por la integridad y el equilibrio de su entorno. Para los raizales, los Hermanos Mayores son los protectores del paraíso natural que habitan, y cualquier daño al medio ambiente es una ofensa directa contra ellos.</p>
      
        <h3>🌿 Un Lugar de Respeto y Reciprocidad</h3>
        <p>La creencia en los Hermanos Mayores está profundamente arraigada en las prácticas cotidianas de los isleños, especialmente en aquellas relacionadas con la pesca y la agricultura. Antes de internarse en el monte o de lanzar sus redes al mar, muchos pescadores y campesinos realizan pequeños rituales o plegarias en el cementerio o en sus hogares para apaciguar a estos espíritus guardianes. El objetivo es pedir su permiso y su bendición, asegurándose de no ofenderlos con su accionar y de que su labor sea fructífera y segura. El cementerio, por tanto, no es solo un lugar de duelo, sino un espacio de diálogo y respeto con los ancestros y con las fuerzas invisibles que sostienen la vida en la isla. Es un recordatorio de que el territorio tiene dueños invisibles que deben ser honrados, y de que la armonía con la naturaleza es la base de la supervivencia.</p>`,
        atributos: ["Cementerio principal", ["Espíritus guardianes", "Rituales de respeto"], "Conexión ancestral"],
        iconos: ["fa-cross", ["fa-hand-sparkles", "fa-tree"], "fa-leaf"]
      },
];

// Funciones de acceso
function obtenerLugaresPorRegion(region) {
    if (region === 'todas') return lugaresDB;
    return lugaresDB.filter(l => l.region === region);
}

function obtenerLugarPorId(id) {
    return lugaresDB.find(l => l.id === id);
}

function obtenerRegionesLugares() {
    const regionesSet = new Set(lugaresDB.map(l => l.region));
    const regionesMap = {
        'caribe': 'Caribe',
        'andina': 'Andina',
        'pacifica': 'Pacífico',
        'amazonia': 'Amazonía',
        'orinoquia': 'Orinoquía',
        'insular': 'Insular'
    };
    return Array.from(regionesSet).map(r => ({
        id: r,
        nombre: regionesMap[r] || r
    }));
}