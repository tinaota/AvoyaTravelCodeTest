<template>
<div class="text-white-100 py-3.5 px-6 md:flex justify-between items-center bg-gray-100">
      <div class="flex items-center cursor-pointer">
            <div><img src="@/assets/logo.png" alt="Main Logo" /></div>
      </div>
      <span class="absolute md:hidden">
        <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
      </span>
      <ul
        class="md:flex md:items-center md:px-0 px-3 md:pb-0 md:p-10 md:static absolute bg-grey-900 md:w-auto w-full top-14 duration-700 ease-in"
        :class="[open ? 'left-0' : 'left-[-100%]']"
      >
        <li class="md:mx-4" v-for="link in Links" :key="link.name">
          <a :href="link.link" class="text-xl hover:text-orange-400">{{ link.name }}</a>
        </li>
        <Button></Button>
      </ul>
    </div>

  </template>
  
  <script>
  import Button from './Button';
  import { ref } from 'vue'; // Import ref
  
  
  export default {
    components: {
      Button,

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
      return { Links, open }; // Return open so you can use it in your template
    },
  };
  </script>