<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container">
      <a class="logo" href="#">
        <span class="logo-text">Lautaro</span>
      </a>

      <button
        class="navbar-toggler d-none"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#header" @click="scrollToSection('header')">
              <span class="rolling-text">Inicio</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about" @click="scrollToSection('about')">
              <span class="rolling-text">Sobre Mí</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services" @click="scrollToSection('services')">
              <span class="rolling-text">Servicios</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio" @click="scrollToSection('portfolio')">
              <span class="rolling-text">Portfolio</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills" @click="scrollToSection('skills')">
              <span class="rolling-text">Habilidades</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" @click="scrollToSection('contact')">
              <span class="rolling-text">Contacto</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="topnav">
        <div @click="toggleMenu" class="menu-icon cursor-pointer">
          <span class="icon ti-align-right"></span>
        </div>
      </div>
    </div>
  </nav>

  <div :class="`hamenu ${isOpen && 'open'}`">
    <div class="logo">
      <span class="logo-text">Lautaro</span>
    </div>
    <div @click="closeMenu" class="close-menu cursor-pointer ti-close"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="menu-text">
            <div class="text">
              <h2>Menu</h2>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="menu-links">
            <ul class="main-menu rest">
              <li>
                <a href="#header" @click="scrollToSection('header'); closeMenu()">
                  <span class="fill-text">Inicio</span>
                </a>
              </li>
              <li>
                <a href="#about" @click="scrollToSection('about'); closeMenu()">
                  <span class="fill-text">Sobre Mí</span>
                </a>
              </li>
              <li>
                <a href="#services" @click="scrollToSection('services'); closeMenu()">
                  <span class="fill-text">Servicios</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" @click="scrollToSection('portfolio'); closeMenu()">
                  <span class="fill-text">Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#skills" @click="scrollToSection('skills'); closeMenu()">
                  <span class="fill-text">Habilidades</span>
                </a>
              </li>
              <li>
                <a href="#contact" @click="scrollToSection('contact'); closeMenu()">
                  <span class="fill-text">Contacto</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- <div class="col-lg-3">
          <div class="cont-info">
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Address</h6>
              <h5>
                541 Melville Geek, <br />
                Palo Alto, CA 94301
              </h5>
            </div>
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Social Media</h6>
              <ul class="rest social-text">
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Facebook</span>
                  </a>
                </li>
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Twitter</span>
                  </a>
                </li>
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="item mb-40">
              <h6 class="sub-title mb-15 opacity-7">Contact Us</h6>
              <h5>
                <a href="#0">Hello@email.com</a>
              </h5>
              <h5 class="underline mt-10">
                <a href="#0">+1 840 841 25 69</a>
              </h5>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
import { ref } from 'vue';

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');

  if (bodyScroll > 300) navbar.classList.add('nav-scroll');
  else navbar.classList.remove('nav-scroll');
}

function handleDropdownMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
}

function handleDropdownMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
}

function handleDropdownSideMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-side').classList.add('show');
}

function handleDropdownSideMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-side').classList.remove('show');
}

function toggleSearch() {
  let form = document.querySelector('.navbar .search-form');
  let closeBtn = document.querySelector('.search-form .close-search');

  form.classList.toggle('open');
  if (form.classList.contains('open')) closeBtn.style.display = 'block';
  else closeBtn.style.display = 'none';
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isOpen = ref(false);
function toggleMenu() {
  const hamenu = document.querySelector('.hamenu');
  isOpen.value = !isOpen.value;
  setTimeout(() => {
    isOpen.value == false
      ? (hamenu.style.left = '-100%')
      : (hamenu.style.left = '0');
  }, 300);
}

function closeMenu() {
  const hamenu = document.querySelector('.hamenu');

  isOpen.value = false;
  setTimeout(() => {
    hamenu.style.left = '-100%';
  }, 300);
}

function handleMouseEnter(event) {
  document.querySelectorAll('ul.main-menu li').forEach((item) => {
    item.classList.add('hoverd');
  });
  event.currentTarget.classList.remove('hoverd');
}

function handleMouseLeave() {
  document
    .querySelectorAll('ul.main-menu li')
    .forEach((item) => item.classList.remove('hoverd'));
}
function toggleSubMenu(event) {
  const subMenu = event.currentTarget.querySelector('.sub-menu');
  const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
  if (subMenu) {
    if (subMenu.classList.contains('sub-open') && SubMenu2 == null) {
      document.querySelectorAll('.sub-menu').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      subMenu.classList.remove('sub-open');
      subMenu.style.maxHeight = '0';
      subMenu.previousElementSibling.children[0].classList.remove('dopen');
    } else if (!subMenu.classList.contains('sub-open')) {
      if (SubMenu2 == null) {
        document.querySelectorAll('.sub-menu').forEach((item) => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });

        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '450px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      } else {
        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '450px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      }
    }
  }
}
function toggleSubMenu2(event) {
  const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
  if (SubMenu2) {
    if (SubMenu2.classList.contains('sub-open')) {
      event.currentTarget.querySelectorAll('.sub-menu2').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      SubMenu2.classList.remove('sub-open');
      SubMenu2.style.maxHeight = '0';
      SubMenu2.previousElementSibling.children[0].classList.remove('dopen');
    } else if (!SubMenu2.classList.contains('sub-open')) {
      event.currentTarget.querySelectorAll('.sub-menu2').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      SubMenu2.classList.add('sub-open');
      SubMenu2.style.maxHeight = '450px';
      SubMenu2.previousElementSibling.children[0].classList.add('dopen');
    }
  }
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    // Calcular la posición exacta considerando el navbar fijo
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
    const elementPosition = element.offsetTop - navbarHeight - 20; // 20px de margen
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}
</script>

<style scoped>
.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
}

/* Ocultar el botón de navegación en móvil */
.navbar-toggler.d-none {
  display: none !important;
}

/* Responsive para el logo */
@media (max-width: 768px) {
  .logo-text {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .logo-text {
    font-size: 1.3rem;
  }
}
</style>
