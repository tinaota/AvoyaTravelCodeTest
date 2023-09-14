<template>
    <div class="slider">
      <div class="slides">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :class="{ active: index === currentIndex }"
        >
          <img :src="slide.imageUrl" alt="Slide Image" />
        </div>
      </div>
  
      <div class="controls">
        <button @click="prevSlide">&laquo; Prev</button>
        <button @click="nextSlide">Next &raquo;</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slides: [
          { imageUrl: require('@/assets/slideshow/slide1.png') },
          { imageUrl: require('@/assets/slideshow/slide2.png') },
          { imageUrl: require('@/assets/slideshow/slide3.png') },
        ],
        currentIndex: 0,
        intervalId: null,
        intervalDuration: 3000, // Change slide every 3 seconds
      };
    },
    methods: {
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      },
      startAutoRotation() {
        this.intervalId = setInterval(this.nextSlide, this.intervalDuration);
      },
      stopAutoRotation() {
        clearInterval(this.intervalId);
      },
    },
    created() {
      this.startAutoRotation();
    },
    beforeUnmount() {
      this.stopAutoRotation();
    },
  };
  </script>
  
  <style scoped>
  /* Your styles go here as before */
  </style>
  