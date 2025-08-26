<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />

  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="sub-bg">
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <!-- <Testimonials />
        <Blog /> -->
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import Navbar from '@/components/light/home-freelancer/Navbar';
import Header from '@/components/light/home-freelancer/Header';
import About from '@/components/light/home-freelancer/About';
import Services from '@/components/light/home-freelancer/Services';
import Portfolio from '@/components/light/home-freelancer/Portfolio';
import Skills from '@/components/light/home-freelancer/Skills';
import Testimonials from '@/components/light/home-freelancer/Testimonials';
import Blog from '@/components/light/home-freelancer/Blog';
import Contact from '@/components/light/home-freelancer/Contact';
import Footer from '@/components/light/home-freelancer/Footer';
import { onMounted } from 'vue';

useHead({
  link: [
    { rel: 'stylesheet', href: '/light/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/light/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/light/assets/css/style.css' },
  ],
});

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});
</script>
