<template>
  <section id="portfolio" class="portfolio-carsouel section-padding" data-scroll-index="3">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">💼 Mi Portfolio</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2>Proyectos <span class="fw-200">destacados</span></h2>
          <div class="ml-auto">
            <div class="swiper-arrow-control">
              <div class="swiper-button-prev">
                <span class="ti-arrow-left"></span>
              </div>
              <div class="swiper-button-next">
                <span class="ti-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="work-swiper-center">
        <Swiper id="content-carousel-container-unq-work" v-bind="swiperOptions">
          <SwiperSlide v-for="(item, i) in data" :key="i">
            <div class="item">
              <div class="img">
                <img :src="item.img" :alt="item.title" />
              </div>
              <div class="cont">
                <div class="content-info">
                  <h5>{{ item.title }}</h5>
                  <p>{{ item.subTitle }}</p>
                </div>
                <div class="action-btn">
                  <a :href="item.link" class="butn butn-md main-colorbg radius-30 mt-40">
                    <span class="text">Ver Proyecto</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/l-data/portfolios/works1';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

const swiperOptions = {
  modules: [Navigation],
  speed: 600,
  loop: false,
  navigation: {
    nextEl: '.swiper-arrow-control .swiper-button-next',
    prevEl: '.swiper-arrow-control .swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 640px
    640: {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    // when window width is >= 768px
    768: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 50,
      centeredSlides: false,
    },
    // when window width is >= 1200px
    1200: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 100,
      centeredSlides: true,
    },
  },
};
</script>