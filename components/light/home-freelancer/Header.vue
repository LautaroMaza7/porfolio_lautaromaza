<template>
  <header id="header" class="header freelancer" data-scroll-index="0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="img">
            <!-- <img src="/light/assets/imgs/intro/freelancer.png" alt="" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="caption">
      <h1 class="up stroke">
        <span>Desarrollador</span> <span>FullStack</span>
      </h1>
      <h1 class="down"><span>Desarrollador</span> <span>FullStack</span></h1>
    </div>
  </header>
</template>

<style scoped>
.header .img {
  height: 500px;
  overflow: hidden;
  border-radius: 15px;
}

.header .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Estilos para el texto del caption */
.header .caption h1 {
  font-size: 9rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.header .caption h1.up {
  font-size: 8.5rem;
}

.header .caption h1.down {
  font-size: 8rem;
}

/* Responsive para la imagen */
@media (max-width: 1200px) {
  .header .img {
    height: 450px;
  }
  
  .header .caption h1 {
    font-size: 7rem;
  }
  
  .header .caption h1.up {
    font-size: 6.5rem;
  }
  
  .header .caption h1.down {
    font-size: 6rem;
  }
}

@media (max-width: 992px) {
  .header .img {
    height: 400px;
  }
  
  .header .caption h1 {
    font-size: 5.5rem;
  }
  
  .header .caption h1.up {
    font-size: 5rem;
  }
  
  .header .caption h1.down {
    font-size: 4.5rem;
  }
}

@media (max-width: 768px) {
  .header .img {
    height: 350px;
  }
  
  .header .caption h1 {
    font-size: 4rem;
  }
  
  .header .caption h1.up {
    font-size: 3.5rem;
  }
  
  .header .caption h1.down {
    font-size: 3rem;
  }
}

@media (max-width: 576px) {
  .header .img {
    height: 300px;
  }
  
  .header .caption h1 {
    font-size: 3rem;
  }
  
  .header .caption h1.up {
    font-size: 2.5rem;
  }
  
  .header .caption h1.down {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .header .img {
    height: 250px;
  }
  
  .header .caption h1 {
    font-size: 2.5rem;
  }
  
  .header .caption h1.up {
    font-size: 2rem;
  }
  
  .header .caption h1.down {
    font-size: 1.5rem;
  }
}
</style>
