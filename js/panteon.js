// js/panteon.js
document.addEventListener("DOMContentLoaded", function() {
    console.log("panteon.js cargado");

    const culturaARegion = {
        "Muisca": "andina",
        "Nasa": "andina",
        "Pijao": "andina",
        "Uwa": "andina",
        "misak": "andina",
        "Kogui": "caribe",
        "Wayuu": "caribe",
        "Uitoto": "amazonia",
        "Tikuna": "amazonia",
        "Tukano": "amazonia",
        "Bora": "amazonia",
        "Yagua": "amazonia",
        "awa": "pacifico",
        "embera": "pacifico",
        "wounaan": "pacifico",
        "Sikuani": "orinoquia",
        "Achagua": "orinoquia",
        "Piapoco": "orinoquia",
        
        

    };

    function generarId(region, cultura, grupo) {
        let culturaId = cultura.toLowerCase().replace(/[^a-z0-9]/g, '');
        let grupoId = grupo ? '-' + grupo : '-principal';
        return region + '-' + culturaId + grupoId;
    }

    // Verificar que el objeto dioses existe
    if (typeof dioses === 'undefined') {
        console.error("ERROR: El objeto 'dioses' no está definido. Revisa la carga de dioses.js");
        return;
    }

    let contadores = {};

    for (let id in dioses) {
        let dios = dioses[id];
        let cultura = dios.cultura;
        let region = culturaARegion[cultura];
        if (!region) {
            console.warn(`La cultura "${cultura}" no tiene región asignada. No se mostrará.`);
            continue;
        }

        let grupo = dios.grupo || 'principal';
        let contenedorId = generarId(region, cultura, grupo);
        let contenedor = document.getElementById(contenedorId);

        if (!contenedor) {
            console.warn(`No se encontró contenedor con ID: ${contenedorId} para el dios ${dios.nombre}`);
            continue;
        }

        // Contar cuántos dioses van a cada contenedor (para depuración)
        contadores[contenedorId] = (contadores[contenedorId] || 0) + 1;

        // Crear enlace
        let enlace = document.createElement('a');
        enlace.href = 'dios.html?nombre=' + id;
        enlace.style.textDecoration = 'none';
        enlace.style.color = 'inherit';

        // Crear tarjeta
        let card = document.createElement('div');
        card.className = 'deity-card';

        // Imagen
        let imgDiv = document.createElement('div');
        imgDiv.className = 'deity-img';
        let img = document.createElement('img');
        img.src = dios.imagen;
        img.alt = dios.nombre;
        imgDiv.appendChild(img);
        card.appendChild(imgDiv);

        // Nombre
        let h4 = document.createElement('h4');
        h4.textContent = dios.nombre;
        card.appendChild(h4);

        // Badge de cultura
        let badge = document.createElement('span');
        badge.className = 'culture-badge';
        badge.textContent = dios.cultura;
        card.appendChild(badge);

        // Descripción corta
        let desc = document.createElement('p');
        desc.className = 'deity-desc';
        if (dios.descripcion_corta) {
            desc.textContent = dios.descripcion_corta;
        } else {
            desc.textContent = dios.atributos.slice(0, 2).join(' · ');
        }
        card.appendChild(desc);

        // Atributos (iconos + texto)
        let attrs = document.createElement('div');
        attrs.className = 'atributos';
        let iconos = dios.iconos && dios.iconos.length ? dios.iconos : ['fa-star', 'fa-star'];
        attrs.innerHTML = `<i class="fas ${iconos[0]}"></i> ${dios.atributos[0]} · <i class="fas ${iconos[1]}"></i> ${dios.atributos[1]}`;
        card.appendChild(attrs);

        enlace.appendChild(card);
        contenedor.appendChild(enlace);
    }

    console.log("Resumen de dioses por contenedor:", contadores);
});