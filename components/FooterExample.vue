<template>
    <footer class="bg-slate-300">
        <div>{{ content }}</div>
        <div class="container mx-auto flex justify-center items-center">
      <!-- Social Media Icons -->
      <div class="flex items-center space-x-4 bg-slate-200 p-10 drop-shadow-sm mb-8">
        <a href="#"><img src="@/assets/facebook.png" alt="Facebook" class="w-8 h-8"></a>
        <a href="#"><img src="@/assets/instagram.png" alt="Instagram" class="w-8 h-8"></a>
        <a href="#"><img src="@/assets/pinterest.png" alt="Pinterest" class="w-8 h-8"></a>
        <a href="#"><img src="@/assets/twitter.png" alt="Twitter" class="w-8 h-8"></a>
        <a href="#"><img src="@/assets/youtube.png" alt="YouTube" class="w-8 h-8"></a>
    </div>
      </div>
      <div class="container mx-auto text-center mb-6">
      <ul class="flex flex-wrap justify-center md:space-x-12 space-x-.5">
        <li><a href="#" class="capitalize">About</a></li>
        <li><a href="#" class="capitalize">Privacy Policy</a></li>
        <li><a href="#" class="capitalize">Don't Sell My Personal Information</a></li>
        <li><a href="#" class="capitalize">About Our Ads</a></li>
        <li><a href="#" class="capitalize">Website Terms of Use</a></li>
        <li><a href="#" class="capitalize">Pricing Terms</a></li>
        <li><a href="#" class="capitalize">Careers</a></li>
        <li><a href="#" class="capitalize">Join Avaya Network</a></li>
      </ul>
  </div>
      <div class="grid grid-cols-2 gap-0 container mx-auto border-solid bottom-px-3 border-gray-300 ">
    <div class="p-4 col-span-1">
      <p>US / Canada: 1-888-877-7042</p>
      <p>UK: -8000-098-651-8475 </p>
      <p>Australia: 1-800-651-320</p>
      <p>International: 001-760-5070</p>
    </div>
    <div class="p-4  col-span-1 text-right">
      <p>Avoya Travel®</p>
      <p>CST: 2085569-40</p>
      <p>Fla. Seller of Travel Ref. No. ST36781</p>
      <p>© Avoya Travel®. All Rights Reserved.</p>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-0 container mx-auto">
    <div class="p-4 col-span-1">
        <img src="@/assets/logo.png" alt="Second logo">
      </div> 
      <div class="p-4 md:col-span-1 col-span-2 flex md:space-x-4 space-x-.5 md:justify-end justify-start ">
        <img src="@/assets/logo1.png" alt="Second logo">
        <img src="@/assets/logo2.png" alt="Second logo">
        <img src="@/assets/logo3.png" alt="Second logo">
        <img src="@/assets/logo4.png" alt="Second logo">
      </div>  
    </div>
    </footer>
</template>

<script setup>
import { ref } from "vue";
const content = ref("");
</script>

