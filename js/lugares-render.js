// js/lugares-render.js
// Renderiza las tarjetas de lugares sagrados en lugares/index.html

document.addEventListener("DOMContentLoaded", function() {
    const regionesContenedores = {
        'caribe': 'grid-caribe',
        'andina': 'grid-andina',
        'pacifica': 'grid-pacifica',
        'amazonia': 'grid-amazonia',
        'orinoquia': 'grid-orinoquia',
        'insular': 'grid-insular'
    };

    function generarTarjeta(lugar) {
        return `
            <a href="lugar.html?nombre=${lugar.id}" style="text-decoration: none; color: inherit;">
                <div class="deity-card">
                    <div class="deity-img">
                        <img src="${lugar.imagen || '../img/lugares/placeholder.png'}" alt="${lugar.nombre}">
                    </div>
                    <h4>${lugar.nombre}</h4>
                    <span class="culture-badge">${lugar.cultura}</span>
                    <p class="deity-desc">${lugar.descripcion_corta.substring(0, 100)}${lugar.descripcion_corta.length > 100 ? '…' : ''}</p>
                    <div class="atributos">
                        <i class="fas ${lugar.iconos[0]}"></i> ${lugar.atributos[0]} · 
                        <i class="fas ${lugar.iconos[1]}"></i> ${lugar.atributos[1]}
                    </div>
                </div>
            </a>
        `;
    }

    for (const [region, contenedorId] of Object.entries(regionesContenedores)) {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor) {
            console.warn(`No se encontró el contenedor con id: ${contenedorId}`);
            continue;
        }

        const lugaresRegion = obtenerLugaresPorRegion(region);
        if (lugaresRegion.length === 0) {
            contenedor.innerHTML = '<p class="text-center" style="padding: 2rem;">Próximamente más lugares sagrados de esta región...</p>';
            continue;
        }

        let htmlTarjetas = '';
        for (const lugar of lugaresRegion) {
            htmlTarjetas += generarTarjeta(lugar);
        }
        contenedor.innerHTML = htmlTarjetas;
    }
});