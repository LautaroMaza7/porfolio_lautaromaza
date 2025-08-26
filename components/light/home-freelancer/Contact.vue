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
            <form id="contact-form" method="post" action="contact.php">
              <div class="messages"></div>

              <div class="controls row">
                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      required
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group mb-30">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder="Asunto"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Mensaje"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div class="mt-30">
                    <button
                      type="submit"
                      class="butn butn-full butn-bord radius-30"
                    >
                      <span class="text">Hablemos</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
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
</style>
