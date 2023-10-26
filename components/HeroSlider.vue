<template>
  <Carousel :autoplay="4000" :wrap-around="true" >
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <img :src="slide.src" alt="Slide {{ slide.id }}" class="carousel__image" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

import slide1 from '/assets/slideshow/slide1.png'
import slide2 from '/assets/slideshow/slide2.png'
import slide3 from '/assets/slideshow/slide3.png'

export default defineComponent({
  name: 'autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        { id: 1, src: slide1 },
        { id: 2, src: slide2 },
        { id: 3, src: slide3 },
      ]
    }
  },
})
</script>

<style>
.carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__image {
  width: 100%;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
  