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

<style scoped>
.portfolio-carsouel .item {
  height: 500px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.portfolio-carsouel .item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.portfolio-carsouel .item .img {
  height: 350px;
  overflow: hidden;
  position: relative;
}

.portfolio-carsouel .item .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.3s ease;
}

.portfolio-carsouel .item:hover .img img {
  transform: scale(1.02);
}

.portfolio-carsouel .item .cont {
  flex: 1;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 120px;
}

.portfolio-carsouel .item .content-info {
  flex: 1;
}

.portfolio-carsouel .item .cont h5 {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: #2c3e50;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.portfolio-carsouel .item .cont p {
  font-size: 0.85rem;
  color: #7f8c8d;
  line-height: 1.5;
  margin-bottom: 0;
  font-weight: 400;
}

.portfolio-carsouel .item .action-btn {
  margin-top: auto;
  text-align: center;
}

.portfolio-carsouel .item .action-btn .butn {
  width: 100%;
  font-weight: 500;
  letter-spacing: 0.02em;
  border: none;
  transition: all 0.3s ease;
}

.portfolio-carsouel .item .action-btn .butn .text {
  color: #000 !important;
  font-weight: 500;
}

.portfolio-carsouel .item .action-btn .butn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .portfolio-carsouel .item {
    height: 450px;
  }
  
  .portfolio-carsouel .item .img {
    height: 300px;
  }
  
  .portfolio-carsouel .item .cont {
    min-height: 100px;
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .portfolio-carsouel .item {
    height: 400px;
  }
  
  .portfolio-carsouel .item .img {
    height: 250px;
  }
  
  .portfolio-carsouel .item .cont {
    padding: 18px;
  }
}
</style>
