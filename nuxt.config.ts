import { fileURLToPath } from 'node:url';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  typescript: {
    shim: false,
  },
  nitro: {
    experimental: {
      wasm: true
    }
  },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  app: {
    head: {
      title: 'Lautaro Maza - Desarrollador Full Stack | Portfolio Profesional',
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'googlebot',
          content: 'index, follow',
        },
        {
          name: 'keywords',
          content: 'desarrollador full stack, desarrollador web, react developer, vue.js developer, php developer, javascript developer, portfolio desarrollador, frontend developer, backend developer, aplicaciones web, sitios web, e-commerce, desarrollo móvil, flutter, node.js, mysql, mongodb, CABA Argentina',
        },
        {
          name: 'description',
          content: 'Lautaro Maza - Desarrollador Full Stack con más de 3 años de experiencia creando sitios web, aplicaciones y plataformas digitales. Especializado en React, Vue.js, PHP, Node.js y desarrollo móvil. Portfolio profesional con proyectos destacados.',
        },
        {
          name: 'author',
          content: 'Lautaro Maza - Desarrollador Full Stack',
        },
        {
          name: 'publisher',
          content: 'Lautaro Maza',
        },
        {
          property: 'og:title',
          content: 'Lautaro Maza - Desarrollador Full Stack | Portfolio Profesional',
        },
        {
          property: 'og:site_name',
          content: 'Lautaro Maza Portfolio',
        },
        {
          property: 'og:description',
          content: 'Desarrollador Full Stack con más de 3 años de experiencia en desarrollo web, aplicaciones móviles y plataformas digitales.',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:locale',
          content: 'es_AR',
        },
        {
          property: 'og:locale:alternate',
          content: 'en_US',
        },
        {
          property: 'og:url',
          content: 'https://lautaromaza.dev/',
        },
        {
          property: 'og:image',
          content: '/dark/assets/imgs/profile-lautaro-maza.jpg',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: '@lautaromaza7',
        },
        {
          name: 'twitter:creator',
          content: '@lautaromaza7',
        },
        {
          name: 'twitter:title',
          content: 'Lautaro Maza - Desarrollador Full Stack | Portfolio Profesional',
        },
        {
          name: 'twitter:description',
          content: 'Desarrollador Full Stack con experiencia en React, Vue.js, PHP, Node.js y desarrollo móvil. Portfolio con proyectos destacados.',
        },
        {
          name: 'twitter:image',
          content: '/dark/assets/imgs/profile-lautaro-maza.jpg',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/dark/assets/imgs/favicon-lautaro-maza.png' },
        // Google Fonts
        {
          rel: 'canonical',
          href: 'https://lautaromaza.dev/',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
        },
      ],
      script: [
        { src: '/dark/assets/js/plugins.js' },
        { src: '/dark/assets/js/TweenMax.min.js' },
        { src: '/dark/assets/js/charming.min.js' },
        { src: '/dark/assets/js/countdown.js' },
        { src: '/dark/assets/js/ScrollTrigger.min.js' },
        { src: '/dark/assets/js/gsap.min.js' },
        { src: '/dark/assets/js/splitting.min.js' },
        { src: '/dark/assets/js/isotope.pkgd.min.js' },
        { src: '/dark/assets/js/imgReveal/imagesloaded.pkgd.min.js' },
        { src: '/dark/assets/js/ScrollSmoother.min.js' },
        { src: '/dark/assets/js/scripts.js', defer: true },
        // Bloque JSON-LD para datos estructurados del desarrollador
        {
          type: 'application/ld+json',
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Lautaro Maza",
            "jobTitle": "Desarrollador Full Stack",
            "url": "https://lautaromaza.dev/",
            "image": "https://lautaromaza.dev/dark/assets/imgs/profile-lautaro-maza.jpg",
            "description": "Desarrollador Full Stack con más de 3 años de experiencia creando sitios web, aplicaciones y plataformas digitales.",
            "sameAs": [
              "https://github.com/LautaroMaza7",
              "https://www.linkedin.com/in/lautaromaza7/"
            ],
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+54-11-6606-8541",
              "contactType": "customer service",
              "areaServed": "AR",
              "availableLanguage": ["Spanish", "English"]
            }],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "CABA",
              "addressRegion": "Buenos Aires",
              "addressCountry": "AR"
            },
            "knowsAbout": [
              "JavaScript", "PHP", "SQL", "Node.js", "React", "Vue.js", "Angular", "Flutter", "Dart",
              "HTML", "CSS", "Bootstrap", "Sass", "MySQL", "MongoDB", "Firebase", "Git", "SEO"
            ],
            "worksFor": [
              {
                "@type": "Organization",
                "name": "Jano's Eventos",
                "jobTitle": "Full Stack Developer",
                "startDate": "2022-11"
              },
              {
                "@type": "Organization", 
                "name": "Tucs Digital",
                "jobTitle": "Full Stack Developer",
                "startDate": "2024-04",
                "endDate": "2024-06"
              },
              {
                "@type": "Organization",
                "name": "Dic Security Solutions", 
                "jobTitle": "Frontend Developer",
                "startDate": "2022-07",
                "endDate": "2024-03"
              }
            ],
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Coderhouse",
              "description": "Desarrollo Full Stack (2021-2023)"
            }
          }`,
        },
      ],
    },
  },
  css: ['swiper/css/bundle', '@/styles/globals.css'],

  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
      },
    },
  },
});
