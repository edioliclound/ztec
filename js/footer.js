document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <style>
    /* CSS DEL FOOTER PREMIUM CORPORATIVO */
    .premium-footer-wrapper { background: #1a1a1a; color: #a0aec0; font-family: 'Open Sans', sans-serif; position: relative; overflow: hidden; margin-top: 60px; width: 100vw; margin-left: calc(-50vw + 50%); }
    .premium-footer-cta { background: #3289e6; border-bottom: none; padding: 45px 5vw; text-align: center; }
    .premium-footer-cta h2 { color: #ffffff !important; font-weight: 800; font-size: 28px; margin-bottom: 12px; text-shadow: 0 2px 4px rgba(0,0,0,0.1); border: none; }
    .premium-footer-cta p { color: #e6f6ff; font-size: 16px; margin-bottom: 25px; font-weight: 500; }
    .btn-cta-white { background: #ffffff !important; color: #0056b3 !important; border: none !important; padding: 14px 35px !important; border-radius: 30px !important; font-weight: 800 !important; text-transform: uppercase; text-decoration: none; box-shadow: 0 6px 15px rgba(0,0,0,0.15) !important; transition: all 0.3s ease !important; display: inline-block; letter-spacing: 1px; }
    .btn-cta-white:hover { background: #f8f9fa !important; color: #00a8e8 !important; transform: translateY(-3px) !important; box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important; }

    .premium-footer-content { max-width: 1300px; margin: 0 auto; padding: 70px 5vw; display: flex; flex-wrap: wrap; gap: 40px; justify-content: space-between; }
    .premium-footer-col { flex: 1; min-width: 250px; }
    .premium-footer-col.brand-col { max-width: 320px; }
    .premium-footer-col h4 { color: #ffffff !important; font-size: 18px !important; font-weight: 800 !important; margin-bottom: 25px !important; position: relative; padding-bottom: 12px; border: none; letter-spacing: 0.5px; }
    .premium-footer-col h4::after { content: ''; position: absolute; left: 0; bottom: 0; width: 40px; height: 3px; background: #0ad1e5; border-radius: 2px; }

    .social-circles { display: flex; gap: 12px; }
    .social-circles a { width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.05); display: flex; justify-content: center; align-items: center; color: #a0aec0; transition: all 0.3s ease; }
    .social-circles a:hover { background: #0ad1e5; color: #fff; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(10,209,229,0.3); }
    .social-circles a.fb:hover { background: #3782e4; box-shadow: 0 5px 15px rgba(121, 167, 228, 0.3); }
    .social-circles a.ig:hover { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); box-shadow: 0 5px 15px rgba(225,48,108,0.3); }
    .social-circles a.wa:hover { background: #25d366; box-shadow: 0 5px 15px rgba(37,211,102,0.3); }

    .footer-links { list-style: none; margin: 0; padding: 0; }
    .footer-links li { margin-bottom: 12px; padding: 0 !important; background: none !important; }
    .footer-links a { color: #a0aec0 !important; text-decoration: none !important; transition: all 0.3s ease !important; display: inline-flex; align-items: center; font-size: 14px; font-weight: 600; }
    .footer-links a span { color: #0ad1e5; margin-right: 10px; transition: transform 0.3s; font-size: 18px; }
    .footer-links a:hover { color: #ffffff !important; transform: translateX(5px); }
    .footer-links a:hover span { transform: translateX(3px); color: #fff; }

    .contact-item { display: flex; align-items: flex-start; margin-bottom: 22px; }
    .contact-icon { width: 42px; height: 42px; border-radius: 10px; background: rgba(10, 209, 229, 0.1); color: #0ad1e5; display: flex; justify-content: center; align-items: center; margin-right: 15px; flex-shrink: 0; transition: all 0.3s ease; }
    .contact-item:hover .contact-icon { background: #0ad1e5; color: #ffffff; transform: scale(1.05); box-shadow: 0 5px 15px rgba(10,209,229,0.3); }
    .contact-text span { display: block; font-size: 11px; color: #718096; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 3px; font-weight: 700; }
    .contact-text strong { color: #e2e8f0; font-size: 15px; font-weight: 700; line-height: 1.5; display: block; }

    .map-container { border-radius: 12px; overflow: hidden; height: 180px; box-shadow: 0 10px 20px rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); position: relative; }
    .map-container iframe { width: 100%; height: 100%; border: 0; filter: invert(90%) hue-rotate(180deg) brightness(95%) contrast(85%); transition: filter 0.5s ease; }
    .map-container:hover iframe { filter: invert(0%) hue-rotate(0deg) brightness(100%) contrast(100%); }

    .premium-footer-bottom { border-top: 1px solid rgba(255,255,255,0.05); padding: 25px 5vw; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; max-width: 1300px; margin: 0 auto; gap: 15px; }
    .premium-footer-bottom p { color: #718096; font-size: 13px; margin: 0; font-weight: 600; }
    .premium-footer-bottom p strong { color: #e2e8f0; font-weight: 800; }
    .bottom-links a { color: #718096 !important; text-decoration: none !important; font-size: 13px; margin-left: 20px; transition: color 0.3s ease !important; font-weight: 600; }
    .bottom-links a:hover { color: #0ad1e5 !important; }

    @media (max-width: 768px) {
      .premium-footer-content { flex-direction: column; gap: 40px; padding: 50px 5vw; }
      .premium-footer-col.brand-col { max-width: 100%; }
      .premium-footer-bottom { flex-direction: column; text-align: center; justify-content: center; }
      .bottom-links { margin-top: 15px; }
      .bottom-links a { margin: 0 10px; }
    }
    </style>

    <footer class="premium-footer-wrapper">
      <div class="premium-footer-cta">
        <h2>¿Listo para proteger tu hogar o negocio?</h2>
        <p>Contáctanos hoy mismo y recibe asesoría gratuita con nuestros expertos en tecnología.</p>
        <a href="contactanos.html" class="btn-cta-white">Solicitar Cotización</a>
      </div>
      <div class="premium-footer-content">
        <div class="premium-footer-col brand-col">
          <img src="images/logo.jpg" alt="Ztec Logo" style="height: 50px; background: #ffffff; padding: 10px 15px; border-radius: 8px; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); object-fit: contain;">
          <p style="line-height: 1.8; font-size: 14px; margin-bottom: 25px;">ZTEC S.R.L. es líder en seguridad electrónica e informática en Cajamarca. Proveemos tecnología de vanguardia para la tranquilidad de tu familia y el éxito de tu empresa.</p>
          <div class="social-circles">
            <a href="https://www.facebook.com/" target="_blank" class="fb" title="Facebook"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg></a>
            <a href="https://www.instagram.com/" target="_blank" class="ig" title="Instagram"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.053 3.252.108 4.575 1.43 4.684 4.684.041 1.266.053 1.646.053 4.85s-.012 3.584-.053 4.85c-.109 3.253-1.432 4.575-4.684 4.684-1.266.041-1.646.053-4.85.053s-3.584-.012-4.85-.053c-3.254-.109-4.575-1.43-4.684-4.684-.041-1.266-.053-1.646-.053-4.85s.012-3.584.053-4.85c.109-3.254 1.432-4.575 4.684-4.684 1.266-.041 1.646-.053 4.85-.053M12 0C8.741 0 8.333.014 7.053.072 2.695.272.272 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
            <a href="https://wa.me/51976956368" target="_blank" class="wa" title="WhatsApp"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg></a>
          </div>
        </div>
        <div class="premium-footer-col">
          <h4>Nuestras Soluciones</h4>
          <ul class="footer-links">
            <li><a href="camarasdeseguridad.html"><span>▹</span> Cámaras de Videovigilancia</a></li>
            <li><a href="alarmascontrarobos.html"><span>▹</span> Alarmas Contra Robos</a></li>
            <li><a href="controladoresdeasistencia.html"><span>▹</span> Control Biométrico y Acceso</a></li>
            <li><a href="soportecomputadoras.html"><span>▹</span> Soporte Técnico de PCs</a></li>
            <li><a href="disenioweb.html"><span>▹</span> Diseño Web & Marketing</a></li>
          </ul>
        </div>
        <div class="premium-footer-col">
          <h4>Contacto Directo</h4>
          <div class="contact-item">
            <div class="contact-icon"><svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
            <div class="contact-text"><span>Llámanos</span><strong>(076) 36 1384<br>976 956 368</strong></div>
          </div>
          <div class="contact-item">
            <div class="contact-icon"><svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
            <div class="contact-text"><span>Escríbenos</span><strong>informes@ztec.pe</strong></div>
          </div>
          <div class="contact-item">
            <div class="contact-icon"><svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
            <div class="contact-text"><span>Visítanos</span><strong>Jr. Cruz de Piedra N° 628<br>Cajamarca - Perú</strong></div>
          </div>
        </div>
        <div class="premium-footer-col">
          <h4>Nuestra Ubicación</h4>
          <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.3629047205213!2d-78.518715!3d-7.157665661306594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25af8c5a8c127%3A0x6f3cdb5af29d8960!2sZtec+S.R.L!5e0!3m2!1ses!2spe!4v1421934844957" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div class="premium-footer-bottom">
        <p>&copy; 2026 <strong>Ztec S.R.L.</strong> Todos los derechos reservados.</p>
        <div class="bottom-links">
          <a href="#">Políticas de Privacidad</a>
          <a href="#">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
    `;
    
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerHTML;
    }
});