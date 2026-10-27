/**
 * mapa.js
 * Lógica del mapa interactivo con Leaflet (mapa.html)
 */

document.addEventListener('DOMContentLoaded', function () {
    const contenedorMapa = document.getElementById('mapa-hidalgo');

    if (!contenedorMapa || typeof L === 'undefined' || typeof DESTINOS === 'undefined') {
        return;
    }

    // Coordenadas centrales aproximadas del estado de Hidalgo
    const centroHidalgo = [20.35, -98.75];
    const mapa = L.map('mapa-hidalgo').setView(centroHidalgo, 9);

    // Capa base de mapas (CARTO Voyager con API Key oficial)
    L.tileLayer('https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_4vkw_1_554e982ebdc003fae95cfb04', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 19
    }).addTo(mapa);

    // Grupo de marcadores para control de capas y filtros
    const grupoMarcadores = L.featureGroup().addTo(mapa);
    const mapaMarcadoresPorId = {};
    let filtroActivo = 'todos';

    // Delimitación del límite geográfico del Estado de Hidalgo
    let capaLimiteHidalgo = null;
    if (typeof LIMITE_HIDALGO !== 'undefined') {
        capaLimiteHidalgo = L.geoJSON(LIMITE_HIDALGO, {
            style: {
                color: '#b45309',        // Color terracota/dorado para el límite
                weight: 3,               // Grosor de la línea
                opacity: 0.95,           // Opacidad del borde
                dashArray: '7, 5',       // Línea discontinua estilo delimitación fronteriza
                fillColor: '#d97706',    // Relleno sutil para destacar el territorio
                fillOpacity: 0.05
            }
        }).addTo(mapa);

        capaLimiteHidalgo.bindTooltip("<strong>Estado de Hidalgo</strong>", {
            sticky: true,
            direction: 'top'
        });

        // Delimitar el área para que la vista quede fija en Hidalgo
        const limitesConMargen = capaLimiteHidalgo.getBounds().pad(0.25);
        mapa.setMaxBounds(limitesConMargen);
        mapa.setMinZoom(8);
        mapa.fitBounds(capaLimiteHidalgo.getBounds(), { padding: [30, 30] });
    }

    // Colores temáticos por categoría
    const coloresCategoria = {
        'pueblos-magicos': '#d97706',
        'naturaleza': '#059669',
        'gastronomia': '#dc2626'
    };

    // Crear icono personalizado en forma de pin
    function crearIconoPersonalizado(categoria) {
        const color = coloresCategoria[categoria] || '#2563eb';
        return L.divIcon({
            className: 'marcador-personalizado',
            html: `<div style="background-color: ${color}; width: 28px; height: 28px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.35); display: flex; align-items: center; justify-content: center;">
                <div style="width: 10px; height: 10px; background-color: white; border-radius: 50%; transform: rotate(45deg);"></div>
            </div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 28],
            popupAnchor: [0, -28]
        });
    }

    // Cargar marcadores y panel lateral
    function cargarMapaYLista() {
        grupoMarcadores.clearLayers();
        const listaPanel = document.getElementById('lista-destinos-panel');
        if (listaPanel) listaPanel.innerHTML = '';

        const destinosFiltrados = DESTINOS.filter(d => {
            return filtroActivo === 'todos' || d.categoria === filtroActivo;
        });

        const contadorMapa = document.getElementById('cuenta-destinos-mapa');
        if (contadorMapa) {
            contadorMapa.textContent = destinosFiltrados.length;
        }

        destinosFiltrados.forEach(destino => {
            if (!destino.coordenadas || destino.coordenadas.length !== 2) return;

            const icono = crearIconoPersonalizado(destino.categoria);
            const marcador = L.marker(destino.coordenadas, { icon: icono });

            // Popup interactivo con espacio para imagen
            const contenidoPopup = `
                <div class="popup-mapa">
                    <div class="espacio-imagen-popup">
                        <img src="${destino.imagen}" alt="${destino.nombre}">
                    </div>
                    <div class="cuerpo-popup">
                        <span class="insignia-categoria categoria-${destino.categoria}">${destino.etiqueta}</span>
                        <h4>${destino.nombre}</h4>
                        <p class="ubicacion-popup"><i class="fa-solid fa-location-dot"></i> ${destino.ubicacion}</p>
                        <p class="resumen-popup">${destino.resumen}</p>
                        <a href="detalle.html?id=${encodeURIComponent(destino.id)}" class="boton-popup-ver">
                            Ver ficha completa <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `;

            marcador.bindPopup(contenidoPopup, { maxWidth: 280 });
            marcador.addTo(grupoMarcadores);
            mapaMarcadoresPorId[destino.id] = marcador;

            // Elemento en la lista lateral
            if (listaPanel) {
                const itemLista = document.createElement('div');
                itemLista.className = 'item-lista-destino';
                itemLista.innerHTML = `
                    <div class="indicador-item categoria-${destino.categoria}"></div>
                    <div class="info-item-lista">
                        <strong>${destino.nombre}</strong>
                        <span><i class="fa-solid fa-location-dot"></i> ${destino.ubicacion}</span>
                    </div>
                    <i class="fa-solid fa-chevron-right icono-flecha-item"></i>
                `;

                itemLista.addEventListener('click', () => {
                    mapa.flyTo(destino.coordenadas, 13, { duration: 1.2 });
                    marcador.openPopup();
                });

                listaPanel.appendChild(itemLista);
            }
        });

        if (filtroActivo === 'todos' && capaLimiteHidalgo) {
            mapa.fitBounds(capaLimiteHidalgo.getBounds(), { padding: [25, 25] });
        } else if (destinosFiltrados.length > 0) {
            mapa.fitBounds(grupoMarcadores.getBounds(), { padding: [40, 40] });
        }
    }

    // Botones de filtro del mapa
    const botonesFiltro = document.querySelectorAll('.barra-controles-mapa .boton-filtro');
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', function () {
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            this.classList.add('activo');
            filtroActivo = this.dataset.filtro;
            cargarMapaYLista();
        });
    });

    // Carga inicial de marcadores
    cargarMapaYLista();
});
