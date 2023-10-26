<template>
    <div class="flex flex-col min-h-screen">
        <div class="z-10"><MainNavigation/></div>
        <div class="flex-grow  md:-mt-80 -mt-20"><HeroSlider/></div>
        <div><ServicePro/></div>
        <div><CustomerService/></div>
        <div><FooterExample /></div>
    </div>
</template>

<script setup>
const title = ref("VUE Nux single landing page");
const description = ref("build web app using the assets and layout provided");
useHead({
    title,
    meta: [
        {
            name: "description",
            content: description,
        },
    ],
});
</script>
