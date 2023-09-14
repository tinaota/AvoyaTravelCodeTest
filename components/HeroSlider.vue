<template>
    <div class="slider">
      <div class="slides">
        <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{ active: index === currentIndex }">
            <img :src="slide.imageUrl" alt="Slide Image">
            </div>
      </div>
      
      <div class="controls">
        <button @click="prevSlide">&laquo;</button>
        <button @click="nextSlide">&raquo;</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slides: [
        { imageUrl: "@/assets/slide1.png" },
        { imageUrl: "@/assets/slide2.png" },
        { imageUrl: "@/assets/slide3.png" },
        ],
        currentIndex: 0,
        intervalId: null,
        intervalDuration: 3000, // Change slide every 5 seconds
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
    beforeDestroy() {
      this.stopAutoRotation();
    },
  };
  </script>
  
  <style scoped>
  .slider {
    position: relative;
    width: 100%;
    max-width:100%;
    margin: 0 auto;
  }
  
  .slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .slide {
    flex: 0 0 100%;
    padding: 20px;
    text-align: center;
    display: none;
  }
  
  .slide.active {
    display: block;
  }
  
  .controls {
    margin-top: 10px;
    text-align: center;
  }
  
  button {
    margin: 5px;
    padding: 10px 20px;
    background-color: grey;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    background-color: ;
  }
  
  button:hover {
    background-color: white;
    color:#000;
  }
  </style>