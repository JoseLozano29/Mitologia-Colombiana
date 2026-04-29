// js/criaturas-render.js
// Renderiza las tarjetas de criaturas en la página index.html

document.addEventListener("DOMContentLoaded", function() {
    // Mapeo de regiones a IDs de contenedores en el HTML
    const regionesContenedores = {
        'caribe': 'grid-caribe',
        'andina': 'grid-andina',
        'pacifico': 'grid-pacifico',
        'orinoquia': 'grid-orinoquia',
        'amazonia': 'grid-amazonia',
        'insular': 'grid-insular'
    };

    // Verificar que la función obtenerCriaturasPorRegion existe
    if (typeof obtenerCriaturasPorRegion === 'undefined') {
        console.error("ERROR: La función 'obtenerCriaturasPorRegion' no está definida. Revisa la carga de criaturas.js");
        return;
    }

    // Función para generar el HTML de una tarjeta
    function generarTarjeta(criatura) {
        // Usar la imagen real o un placeholder
        const imagenSrc = criatura.imagen || '../img/criaturas/placeholder.png';
        
        return `
            <a href="criatura.html?nombre=${criatura.id}" style="text-decoration: none; color: inherit;">
                <div class="deity-card">
                    <div class="deity-img">
                        <img src="${imagenSrc}" alt="${criatura.nombre}">
                    </div>
                    <h4>${criatura.nombre}</h4>
                    <span class="culture-badge">${criatura.cultura}</span>
                    <p class="deity-desc">${criatura.descripcion_corta.substring(0, 100)}${criatura.descripcion_corta.length > 100 ? '…' : ''}</p>
                    <div class="atributos">
                        <i class="fas ${criatura.iconos[0]}"></i> ${criatura.atributos[0]} · 
                        <i class="fas ${criatura.iconos[1]}"></i> ${criatura.atributos[1]}
                    </div>
                </div>
            </a>
        `;
    }

    // Recorrer cada región y llenar su contenedor
    for (const [region, contenedorId] of Object.entries(regionesContenedores)) {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor) {
            console.warn(`No se encontró el contenedor con id: ${contenedorId}`);
            continue;
        }

        const criaturasRegion = obtenerCriaturasPorRegion(region);
        if (criaturasRegion.length === 0) {
            contenedor.innerHTML = '<p class="text-center" style="padding: 2rem;">Próximamente más criaturas de esta región...</p>';
            continue;
        }

        let htmlTarjetas = '';
        for (const criatura of criaturasRegion) {
            htmlTarjetas += generarTarjeta(criatura);
        }
        contenedor.innerHTML = htmlTarjetas;
    }
});