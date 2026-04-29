// js/footer-component.js - con rutas absolutas dinámicas
class FooterMitologia extends HTMLElement {
  connectedCallback() {
    // Construir la base de la URL absoluta (por si se publica en GitHub Pages)
    // Esto funciona tanto en local como en GitHub Pages
    const base = window.location.origin + window.location.pathname.split('/').slice(0, -2).join('/');
    // Obtener la raíz del repositorio: si estamos en local, base es 'http://localhost:.../Mitologia-Colombiana'
    // Pero podemos simplificar usando una variable global o detectar por el pathname.

    // Para GitHub Pages, sabemos que el repositorio se sirve en /Mitologia-Colombiana/
    let root = '';
    if (window.location.hostname === 'jozeloano29.github.io') {
      root = '/Mitologia-Colombiana';
    } else {
      // En local, obtener la ruta hasta la carpeta del proyecto (sin incluir /panteon/, etc.)
      const pathParts = window.location.pathname.split('/');
      const repoIndex = pathParts.findIndex(part => part === 'Mitologia-Colombiana');
      if (repoIndex !== -1) {
        root = pathParts.slice(0, repoIndex + 1).join('/');
      } else {
        root = '';
      }
    }
    
    // Ahora las rutas absolutas
    const imgSrc = `${root}/img/logo.webp`;
    const panteonHref = `${root}/panteon/index.html`;
    const criaturasHref = `${root}/criaturas/index.html`;
    const lugaresHref = `${root}/lugares/index.html`;

    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-col" style="display: flex; align-items: center; gap: 1rem;">
            <img src="${imgSrc}" alt="Logo Panteón Colombia" style="width: 120px; height: auto; border-radius: 30px;">
            <div>
              <p><strong>PANTEÓN COLOMBIA</strong><br />
              <span style="font-size: 0.9rem">Mitología, memoria y resistencia indígena</span></p>
              <p style="font-size: 0.85rem; margin-top: 0.5rem">Imágenes generadas con IA · 2026</p>
            </div>
          </div>
          <div class="footer-col">
            <h4>Explorar</h4>
            <ul>
              <li><a href="${panteonHref}">Panteón</a></li>
              <li><a href="${criaturasHref}">Bestiario / Criaturas</a></li>
              <li><a href="${lugaresHref}">Lugares Sagrados</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contáctanos</h4>
            <p><i class="fas fa-envelope"></i>
              <a href="mailto:panteoncolombia@gmail.com" target="_blank" rel="noopener noreferrer">panteoncolombia@gmail.com</a>
            </p>
            <div class="social-icons">
              <a href="https://www.youtube.com/channel/UCCs6podmD_igKdpJBCt8J-Q" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
              <a href="https://www.tiktok.com/@panteoncolombia" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
              <a href="https://web.facebook.com/PanteonColombia" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/panteoncolombia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            </div>
            <p style="font-size: 0.85rem; margin-top: 0.8rem">¿Sugerencias, correcciones o aportes?<br />
            Escríbenos, leemos cada mensaje.</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© Proyecto autónomo · 2026 · Respeto por los saberes ancestrales</p>
          <p><i class="fas fa-leaf"></i> Información basada en fuentes etnográficas y tradición oral</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('footer-mitologia', FooterMitologia);