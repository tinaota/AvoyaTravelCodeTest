<template>
    <div class="text-white-100 py-3.5 px-6 md:flex justify-between items-center bg-gray-100">
      <div class="flex items-center cursor-pointer">
        <div><img src="@/assets/logo.png" alt="Main Logo" /></div>
      </div>
      <span class="absolute right-6 top-8 md:hidden cursor-pointer" @click="toggleMenu">
        <font-awesome-icon :icon="open ? 'times' : 'bars'" />
      </span>
      <ul
        class="md:flex md:items-center md:px-0 px-3 md:pb-0 md:p-10 md:static absolute md:bg-transparent bg-gray-100 text-white md:w-auto w-full top-14 duration-700 ease-in"
        :class="[open ? 'left-0' : 'left-[-100%]']"
      >
        <li class="md:mx-4" v-for="link in Links" :key="link.name">
          <a :href="link.link" class="text-xl hover:text-orange-400" @click="closeMenu">{{ link.name }}</a>
        </li>
        <li><Button></Button></li>
      </ul>
    </div>
  </template>
  
  <script>
  import Button from './Button';
  import { ref } from 'vue';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faBars, faTimes);
  
  export default {
    components: {
      Button,
      FontAwesomeIcon,
    },
    setup() {
      let open = ref(false);
      let Links = [
        { name: "SEARCH", link: "#" },
        { name: "CRUISES", link: "#" },
        { name: "TOURS", link: "#" },
        { name: "RESORTS", link: "#" },
        { name: "DESTINATIONS", link: "#" },
        { name: "DEALS", link: "#" },
        { name: "BLOG", link: "#" },
        { name: "GET STARTED", link: "#" },
      ];
  
      const toggleMenu = () => {
        open.value = !open.value;
      };
  
      const closeMenu = () => {
        open.value = false;
      };
  
      return { Links, open, toggleMenu, closeMenu };
    },
  };
  </script>
  