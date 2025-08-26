<template>
  <section id="contact" class="contact-crev section-padding bord-thin-bottom bord-thin-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="sec-head md-mb80">
            <h6 class="sub-title main-color mb-15 wow fadeInUp">
              📞 Contáctame
            </h6>
            <h2 class="text-u ls1 d-rotate wow">
              <span class="rotate-text"
                >Hagamos tu proyecto
                <span class="fw-200">realidad!</span></span
              >
            </h2>
            <p class="mt-10">
              Si quieres trabajar conmigo o simplemente quieres ponerte en contacto,
              ¡me encantaría escucharte!
            </p>
            <div class="phone fz-30 fw-600 mt-80 underline main-color">
              <a href="tel:+541166068541">11 6606-8541</a>
            </div>
            <ul class="rest social-text d-flex mt-40">
              <li class="mr-30">
                <a href="https://github.com/LautaroMaza7" target="_blank" class="hover-this">
                  <span class="hover-anim">GitHub</span>
                </a>
              </li>
              <li class="mr-30">
                <a href="https://www.linkedin.com/in/lautaromaza7/" target="_blank" class="hover-this">
                  <span class="hover-anim">LinkedIn</span>
                </a>
              </li>
              <li class="mr-30">
                <a href="mailto:mazalautarodamian.dev@gmail.com" class="hover-this">
                  <span class="hover-anim">Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 valign">
          <div class="full-width">
            <div class="contact-info">
              <div class="contact-methods">
                <div class="contact-method mb-40">
                  <div class="icon mb-20">
                    <i class="ti-phone"></i>
                  </div>
                  <h5>Llamada Directa</h5>
                  <p>¿Prefieres hablar por teléfono? Llámame directamente</p>
                  <a href="tel:+541166068541" class="butn butn-md main-colorbg radius-30">
                    <span class="text">Llamar Ahora</span>
                  </a>
                </div>
                
                <div class="contact-method mb-40">
                  <div class="icon mb-20">
                    <i class="ti-email"></i>
                  </div>
                  <h5>Email</h5>
                  <p>Enviar un correo electrónico detallado</p>
                  <a href="mailto:mazalautarodamian.dev@gmail.com" class="butn butn-md main-colorbg radius-30">
                    <span class="text">Enviar Email</span>
                  </a>
                </div>
                
                <div class="contact-method">
                  <div class="icon mb-20">
                    <i class="ti-mobile"></i>
                  </div>
                  <h5>WhatsApp</h5>
                  <p>¡Hablemos por WhatsApp! Es la forma más rápida</p>
                  <a 
                    href="https://wa.me/541166068541?text=Hola%20Lautaro!%20Me%20interesa%20trabajar%20contigo%20en%20mi%20proyecto%20web.%20¿Podemos%20conversar?" 
                    target="_blank" 
                    class="butn butn-full butn-bord radius-30 whatsapp-btn"
                  >
                    <span class="text">💬 Hablemos por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-crev {
  position: relative;
  overflow: hidden;
}

.contact-crev::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  background: transparent;
}

/* Asegurar que no haya espacios al final */
.contact-crev .container {
  position: relative;
  z-index: 2;
}

/* Eliminar cualquier margen o padding innecesario */
.contact-crev.section-padding {
  padding-bottom: 100px;
}

/* Estilos para los métodos de contacto */
.contact-methods {
  padding: 20px 0;
}

.contact-method {
  text-align: center;
  padding: 30px 20px;
  border-radius: 15px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-method:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--main-color, #007bff);
}

.contact-method .icon {
  font-size: 2.5rem;
  color: var(--main-color, #007bff);
}

.contact-method h5 {
  margin-bottom: 15px;
  font-size: 1.3rem;
  font-weight: 600;
}

.contact-method p {
  color: #999;
  margin-bottom: 25px;
  line-height: 1.6;
}

.contact-method .butn {
  transition: all 0.3s ease;
  width: 100%;
  font-weight: 500;
  letter-spacing: 0.02em;
  border: none;
}

.contact-method .butn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

/* Estilo para botones principales (Llamar y Email) */
.contact-method .butn.main-colorbg .text {
  color: #000 !important;
  font-weight: 500;
}

.contact-method .butn.main-colorbg:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

/* Estilo especial para el botón de WhatsApp */
.whatsapp-btn {
  background: linear-gradient(45deg, #25d366, #128c7e);
  border-color: #25d366;
  color: white;
}

.whatsapp-btn:hover {
  background: linear-gradient(45deg, #128c7e, #25d366);
  border-color: #128c7e;
}

.whatsapp-btn .text {
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-method {
    margin-bottom: 30px;
  }
  
  .contact-method .icon {
    font-size: 2rem;
  }
  
  .contact-method h5 {
    font-size: 1.1rem;
  }
}
</style>
