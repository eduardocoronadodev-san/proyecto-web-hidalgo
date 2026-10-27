/**
 * datos-destinos.js
 * Base de datos local con todos los destinos turísticos de Hidalgo.
 * Se usa en explorar.html, detalle.html y mapa.html
 */

const DESTINOS = [
    // ========================
    // PUEBLOS MÁGICOS
    // ========================
    {
        id: "real-del-monte",
        nombre: "Real del Monte",
        categoria: "pueblos-magicos",
        etiqueta: "Pueblo Mágico",
        ubicacion: "Mineral del Monte",
        coordenadas: [20.1292, -98.6744],
        imagen: "../img/imagen.webp",
        galeria: [
            "../img/imagen.webp",
            "../img/imagen.webp",
            "../img/imagen.webp"
        ],
        resumen: "Pueblo minero con herencia inglesa, famoso por sus pastes y calles de cantera.",
        descripcion: "Real del Monte es un encantador pueblo minero ubicado en las montañas de Hidalgo, a más de 2,600 metros de altitud. Su historia está profundamente ligada a la minería de plata y a la llegada de mineros ingleses en el siglo XIX, quienes dejaron una huella cultural que permanece hasta hoy: los famosos pastes, el fútbol y la arquitectura de estilo británico. Sus calles empedradas, fachadas coloridas y el clima fresco de montaña crean una atmósfera única que transporta a otra época.",
        atractivos: [
            "Calles empedradas y fachadas coloniales coloridas",
            "Museo de Medicina Laboral en la Mina de Acosta",
            "Panteón Inglés con vista panorámica",
            "Museo del Paste",
            "Centro histórico con tiendas de artesanías"
        ],
        actividades: [
            "Recorrido por las minas históricas",
            "Degustación de pastes en las pastelerías tradicionales",
            "Caminatas por los senderos de montaña",
            "Visita al Panteón Inglés",
            "Fotografía arquitectónica"
        ],
        recomendaciones: "Lleva ropa abrigadora ya que el clima puede ser frío. Los fines de semana hay más actividad pero también más visitantes. Prueba los pastes de diferentes sabores en las pastelerías del centro."
    },
    {
        id: "huasca-de-ocampo",
        nombre: "Huasca de Ocampo",
        categoria: "pueblos-magicos",
        etiqueta: "Pueblo Mágico",
        ubicacion: "Huasca de Ocampo",
        coordenadas: [20.2036, -98.5764],
        imagen: "../img/imagen.webp",
        galeria: [
            "../img/imagen.webp",
            "../img/imagen.webp",
            "../img/imagen.webp"
        ],
        resumen: "Haciendas coloniales, bosques de niebla y el primer Pueblo Mágico de Hidalgo.",
        descripcion: "Huasca de Ocampo fue el primer Pueblo Mágico designado en México en 2001. Este pintoresco pueblo se encuentra rodeado de bosques de encino y oyamel, con un clima fresco y paisajes que parecen sacados de un cuento. Sus antiguas haciendas de beneficio minero, como San Miguel Regla y Santa María Regla, son testimonio de la riqueza minera de la región y hoy funcionan como hoteles y centros turísticos.",
        atractivos: [
            "Hacienda de Santa María Regla",
            "Hacienda de San Miguel Regla",
            "Prismas Basálticos (cerca)",
            "Bosques y lagos cercanos",
            "Plaza principal y parroquia"
        ],
        actividades: [
            "Visita a las haciendas coloniales",
            "Paseos a caballo por los bosques",
            "Pesca en la presa San Antonio",
            "Tirolesa y actividades de aventura",
            "Compra de artesanías y dulces típicos"
        ],
        recomendaciones: "Es ideal visitarlo entre semana para disfrutar con más tranquilidad. Los bosques de los alrededores son perfectos para caminatas. No te pierdas la trucha fresca que se prepara en los restaurantes locales."
    },
    {
        id: "mineral-del-chico",
        nombre: "Mineral del Chico",
        categoria: "pueblos-magicos",
        etiqueta: "Pueblo Mágico",
        ubicacion: "Mineral del Chico",
        coordenadas: [20.2225, -98.7281],
        imagen: "../img/imagen.webp",
        galeria: [
            "../img/imagen.webp",
            "../img/imagen.webp",
            "../img/imagen.webp"
        ],
        resumen: "Pueblo rodeado de peñas y bosques, paraíso para el senderismo y la escalada.",
        descripcion: "Mineral del Chico es un pequeño pueblo enclavado en la sierra hidalguense, rodeado por el Parque Nacional El Chico. Es conocido como la capital del turismo de aventura en Hidalgo gracias a sus formaciones rocosas ideales para la escalada, sus senderos para caminatas y ciclismo de montaña, y sus paisajes boscosos que invitan a la contemplación. Su centro histórico conserva la tranquilidad y el encanto de un pueblo minero del siglo XVIII.",
        atractivos: [
            "Parque Nacional El Chico",
            "Peñas como Las Ventanas, Las Monjas y El Cuervo",
            "Presa El Cedral",
            "Centro histórico colonial",
            "Mirador de las peñas"
        ],
        actividades: [
            "Escalada en roca",
            "Senderismo por el parque nacional",
            "Ciclismo de montaña",
            "Rappel y tirolesa",
            "Camping en áreas designadas"
        ],
        recomendaciones: "Si quieres escalar, contrata un guía certificado. Lleva calzado apropiado para senderos. El clima cambia rápido, así que lleva ropa impermeable. La temporada de lluvias es hermosa pero los senderos pueden ser resbalosos."
    },
    {
        id: "huichapan",
        nombre: "Huichapan",
        categoria: "pueblos-magicos",
        etiqueta: "Pueblo Mágico",
        ubicacion: "Huichapan",
        coordenadas: [20.3753, -99.6511],
        imagen: "../img/imagen.webp",
        galeria: [
            "../img/imagen.webp",
            "../img/imagen.webp",
            "../img/imagen.webp"
        ],
        resumen: "Cuna de la Independencia en Hidalgo, con arquitectura virreinal y aguas termales.",
        descripcion: "Huichapan es un pueblo con profundas raíces históricas. Fue aquí donde se dio el primer Grito de Independencia fuera de Dolores, en 1812, por el general Ignacio López Rayón. Su arquitectura virreinal, sus acueductos y su chapitel son testimonio de siglos de historia. Además, los alrededores ofrecen balnearios de aguas termales que complementan la visita cultural con relajación.",
        atractivos: [
            "El Chapitel (monumento histórico)",
            "Acueducto colonial",
            "Parroquia de San Mateo Apóstol",
            "Plaza de la Independencia",
            "Balnearios de aguas termales cercanos"
        ],
        actividades: [
            "Recorrido histórico por el centro",
            "Visita al Chapitel y museo",
            "Baño en aguas termales",
            "Fotografía de arquitectura colonial",
            "Degustación de gastronomía local"
        ],
        recomendaciones: "Visita durante las fiestas patrias para vivir la recreación del Grito de Independencia. Los balnearios son ideales para ir en familia. El clima es más templado que en otros pueblos de Hidalgo."
    },

    // ========================
    // NATURALEZA Y AVENTURA
    // ========================
    {
        id: "prismas-basalticos",
        nombre: "Prismas Basálticos",
        categoria: "naturaleza",
        etiqueta: "Naturaleza",
        ubicacion: "Huasca de Ocampo",
        coordenadas: [20.2394, -98.5603],
        imagen: "../img/imagen.webp",
        galeria: [
            "../img/imagen.webp",
            "../img/imagen.webp",
            "../img/imagen.webp"
        ],
        resumen: "Impresionantes columnas de basalto con cascadas que crean un paisaje único en el mundo.",
        descripcion: "Los Prismas Basálticos son una formación geológica de columnas de basalto de hasta 40 metros de altura, consideradas una maravilla natural de México. Fueron formados por el enfriamiento lento de lava volcánica hace millones de años. El agua de las cascadas cae entre las columnas hexagonales creando un espectáculo visual impresionante. Alexander von Humboldt los describió en el siglo XIX, dándoles reconocimiento internacional.",
        atractivos: [
            "Columnas basálticas hexagonales de 40 metros",
            "Cascadas que caen entre los prismas",
            "Mirador panorámico",
            "Jardín de esculturas",
            "Presa de San Antonio"
        ],
        actividades: [
            "Recorrido por los miradores",
            "Fotografía paisajística",
            "Paseo en lancha por la presa",
            "Visita al jardín de esculturas",
            "Rappel (con operadores autorizados)"
        ],
        recomendaciones: "La mejor luz para fotografías es por la mañana. Lleva calzado cómodo ya que hay muchas escaleras. En temporada de lluvias las cascadas son más espectaculares. Hay restaurantes cerca con comida regional."
    },
    {
        id: "grutas-tolantongo",
        nombre: "Grutas de Tolantongo",
        categoria: "naturaleza",
        etiqueta: "Naturaleza",
        ubicacion: "Cardonal",
        coordenadas: [20.6536, -99.0058],
        imagen: "../img/imagen.webp",
        galeria: [
            "../img/imagen.webp",
            "../img/imagen.webp",
            "../img/imagen.webp"
        ],
        resumen: "Aguas termales turquesa, grutas naturales, río y pozas escalonadas entre la sierra.",
        descripcion: "Las Grutas de Tolantongo son uno de los destinos naturales más impresionantes de México. Ubicadas en un profundo cañón de la Sierra Madre Oriental, ofrecen aguas termales de color turquesa que brotan de las entrañas de la tierra. El complejo incluye grutas naturales con agua caliente, pozas escalonadas en la ladera del cerro con vistas espectaculares al cañón, un río de aguas cristalinas y un túnel de vapor natural. Es un paraíso para quienes buscan relajación en medio de la naturaleza.",
        atractivos: [
            "Pozas termales escalonadas con vista al cañón",
            "Gruta principal con agua caliente",
            "Túnel de vapor natural",
            "Río de aguas turquesa",
            "Cañón con vegetación exuberante"
        ],
        actividades: [
            "Baño en pozas termales",
            "Exploración de las grutas",
            "Nado en el río",
            "Camping en las áreas designadas",
            "Senderismo por el cañón"
        ],
        recomendaciones: "Llega temprano, especialmente los fines de semana, ya que se llena rápido. Lleva traje de baño, sandalias acuáticas y protector solar biodegradable. El camino de acceso es sinuoso, conduce con precaución. Se recomienda pasar al menos una noche para disfrutar el lugar con calma."
    },
    {
        id: "parque-nacional-el-chico",
        nombre: "Parque Nacional El Chico",
        categoria: "naturaleza",
        etiqueta: "Naturaleza",
        ubicacion: "Mineral del Chico",
        coordenadas: [20.2128, -98.7275],
        imagen: "../img/imagen.webp",
        galeria: [
            "../img/imagen.webp",
            "../img/imagen.webp",
            "../img/imagen.webp"
        ],
        resumen: "Uno de los parques nacionales más antiguos de México, ideal para senderismo y escalada.",
        descripcion: "El Parque Nacional El Chico, decretado en 1982, es uno de los parques nacionales más antiguos y emblemáticos de México. Con más de 2,700 hectáreas de bosques de oyamel, encino y cedro, ofrece un refugio natural a menos de dos horas de la Ciudad de México. Sus formaciones rocosas, conocidas como peñas, son famosas entre escaladores de todo el país. Los senderos bien señalizados atraviesan paisajes de ensueño entre la niebla y los árboles centenarios.",
        atractivos: [
            "Peña del Cuervo y Las Ventanas",
            "Bosques de oyamel centenarios",
            "Presa El Cedral",
            "Formaciones rocosas para escalada",
            "Flora y fauna de montaña"
        ],
        actividades: [
            "Senderismo por rutas señalizadas",
            "Escalada en roca",
            "Ciclismo de montaña",
            "Observación de aves",
            "Camping"
        ],
        recomendaciones: "Registra tu visita en la caseta de entrada. No hagas fogatas fuera de las áreas permitidas. Lleva agua suficiente y ropa en capas. Los senderos pueden ser resbalosos en época de lluvias."
    },
    {
        id: "pena-del-aire",
        nombre: "Peña del Aire",
        categoria: "naturaleza",
        etiqueta: "Naturaleza",
        ubicacion: "Metztitlán",
        coordenadas: [20.5833, -98.7667],
        imagen: "../img/imagen.webp",
        galeria: [
            "../img/imagen.webp",
            "../img/imagen.webp",
            "../img/imagen.webp"
        ],
        resumen: "Mirador natural con vista a la impresionante Barranca de Metztitlán.",
        descripcion: "La Peña del Aire es un espectacular mirador natural ubicado al borde de la Barranca de Metztitlán, una de las barrancas más profundas e impresionantes de México. Desde este punto se pueden apreciar vistas de vértigo hacia el fondo del cañón, donde el río Metztitlán serpentea entre la vegetación semidesértica. Es un lugar que quita el aliento y que muestra la diversidad de paisajes que ofrece el estado de Hidalgo.",
        atractivos: [
            "Mirador con vista a la barranca",
            "Barranca de Metztitlán",
            "Reserva de la Biosfera Barranca de Metztitlán",
            "Vegetación semidesértica y cactáceas",
            "Paisajes de contraste geográfico"
        ],
        actividades: [
            "Contemplación del paisaje",
            "Fotografía panorámica",
            "Senderismo en los alrededores",
            "Observación de flora desértica",
            "Visita a comunidades cercanas"
        ],
        recomendaciones: "No hay barandales de protección, ten mucho cuidado al acercarte al borde. Lleva agua y protección solar. El acceso puede ser complicado en temporada de lluvias. Combina la visita con el Ex Convento de los Santos Reyes en Metztitlán."
    },

    // ========================
    // GASTRONOMÍA TRADICIONAL
    // ========================
    {
        id: "pastes",
        nombre: "Pastes de Real del Monte",
        categoria: "gastronomia",
        etiqueta: "Gastronomía",
        ubicacion: "Real del Monte",
        coordenadas: [20.1292, -98.6744],
        imagen: "../img/imagen.webp",
        galeria: [
            "../img/imagen.webp",
            "../img/imagen.webp",
            "../img/imagen.webp"
        ],
        resumen: "Empanadas de origen inglés adoptadas y reinventadas por la cocina hidalguense.",
        descripcion: "Los pastes son empanadas horneadas que llegaron a Hidalgo con los mineros ingleses de Cornualles en el siglo XIX. Originalmente rellenos de carne con papa, los hidalguenses los adoptaron y crearon nuevas variedades con ingredientes locales como mole, frijol, rajas con queso, tinga y hasta dulces como piña y arroz con leche. Hoy son el platillo más emblemático de Real del Monte y se pueden encontrar en decenas de pastelerías a lo largo del pueblo. Cada año se celebra el Festival del Paste.",
        atractivos: [
            "Museo del Paste",
            "Pastelerías tradicionales en el centro",
            "Festival Internacional del Paste",
            "Variedad de más de 30 sabores",
            "Historia de la herencia cornish"
        ],
        actividades: [
            "Degustación de pastes de diferentes sabores",
            "Visita al Museo del Paste",
            "Recorrido gastronómico por las pastelerías",
            "Taller de elaboración de pastes (algunos locales lo ofrecen)"
        ],
        recomendaciones: "Prueba tanto los pastes tradicionales (papa con carne) como los de sabores regionales. El Museo del Paste ofrece una experiencia interactiva. Los pastes recién horneados son los mejores."
    },
    {
        id: "barbacoa",
        nombre: "Barbacoa Hidalguense",
        categoria: "gastronomia",
        etiqueta: "Gastronomía",
        ubicacion: "Actopan y región",
        coordenadas: [20.2692, -98.9428],
        imagen: "../img/imagen.webp",
        galeria: [
            "../img/imagen.webp",
            "../img/imagen.webp",
            "../img/imagen.webp"
        ],
        resumen: "Carne de borrego cocida en horno de tierra con pencas de maguey, tradición ancestral.",
        descripcion: "La barbacoa hidalguense es considerada una de las mejores de México. Se prepara envolviendo la carne de borrego en pencas de maguey y cocinándola durante toda la noche en un horno cavado en la tierra, sobre piedras calientes. El resultado es una carne suave, jugosa y con un sabor ahumado inigualable. Se acompaña con consomé, tortillas hechas a mano, salsa borracha y nopales. Actopan es reconocido como la capital de la barbacoa y celebra cada año una feria dedicada a este platillo.",
        atractivos: [
            "Mercados y puestos de barbacoa en Actopan",
            "Feria de la Barbacoa de Actopan",
            "Proceso tradicional de cocción en horno de tierra",
            "Consomé de barbacoa",
            "Acompañamientos tradicionales"
        ],
        actividades: [
            "Degustación de barbacoa tradicional",
            "Visita a la Feria de la Barbacoa (noviembre)",
            "Conocer el proceso de preparación en hornos de tierra",
            "Recorrido gastronómico por Actopan"
        ],
        recomendaciones: "La barbacoa se consigue fresca principalmente los fines de semana y muy temprano por la mañana. Actopan es el mejor lugar para probarla. Pide el consomé aparte, es una delicia."
    },
    {
        id: "ximbo",
        nombre: "Ximbo",
        categoria: "gastronomia",
        etiqueta: "Gastronomía",
        ubicacion: "Valle del Mezquital",
        coordenadas: [20.4500, -99.2333],
        imagen: "../img/imagen.webp",
        galeria: [
            "../img/imagen.webp",
            "../img/imagen.webp",
            "../img/imagen.webp"
        ],
        resumen: "Pollo o carne envuelta en penca de maguey y cocida en horno subterráneo.",
        descripcion: "El ximbo es un platillo tradicional del Valle del Mezquital que consiste en carne (generalmente pollo, conejo o cerdo) sazonada con chiles y especias locales, envuelta en pencas de maguey y cocida lentamente en un horno de tierra. La penca le aporta un sabor ahumado y una textura única a la carne. Es un platillo que representa la relación profunda de los pueblos otomíes con el maguey, planta sagrada que les proporciona alimento, bebida (pulque) y materiales de construcción.",
        atractivos: [
            "Preparación tradicional otomí",
            "Uso del maguey como envoltorio natural",
            "Cocción en horno de tierra",
            "Mercados locales del Valle del Mezquital",
            "Conexión con la cultura otomí"
        ],
        actividades: [
            "Degustación en restaurantes y mercados de la región",
            "Conocer el proceso de preparación",
            "Visita al Valle del Mezquital",
            "Aprender sobre la cultura del maguey y el pulque"
        ],
        recomendaciones: "Se encuentra principalmente en los mercados y fondas del Valle del Mezquital. Combina la visita con la degustación de pulque natural. Pregunta a los locales por las mejores fondas."
    },
    {
        id: "escamoles",
        nombre: "Escamoles",
        categoria: "gastronomia",
        etiqueta: "Gastronomía",
        ubicacion: "Región Otomí-Tepehua",
        coordenadas: [20.3500, -98.9000],
        imagen: "../img/imagen.webp",
        galeria: [
            "../img/imagen.webp",
            "../img/imagen.webp",
            "../img/imagen.webp"
        ],
        resumen: "Larvas de hormiga consideradas el 'caviar mexicano', manjar prehispánico.",
        descripcion: "Los escamoles son larvas y pupas de hormiga güijera (Liometopum apiculatum) que se recolectan de los nidos subterráneos entre las raíces de los magueyes y nopales. Conocidos como el 'caviar mexicano' por su sabor delicado y su alto precio, son un manjar prehispánico que se ha consumido en la región desde tiempos ancestrales. Se preparan generalmente salteados con mantequilla, epazote y chile serrano, y se sirven en tacos con tortillas recién hechas. Su temporada de recolección es entre marzo y abril.",
        atractivos: [
            "Manjar prehispánico de temporada",
            "Recolección artesanal tradicional",
            "Preparación en mantequilla con epazote",
            "Restaurantes especializados en cocina otomí",
            "Temporada: marzo-abril"
        ],
        actividades: [
            "Degustación en restaurantes de la región",
            "Conocer el proceso de recolección",
            "Visitar mercados durante temporada",
            "Combinar con otros platillos prehispánicos (gusanos de maguey, chinicuiles)"
        ],
        recomendaciones: "Solo están disponibles frescos entre marzo y abril. Son costosos debido a la dificultad de recolección. Pruébalos en tacos con tortilla de maíz recién hecha para la mejor experiencia."
    }
];
