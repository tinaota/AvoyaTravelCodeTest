<template>
    <div class="flex flex-col min-h-screen">
        <div><MainNavigation/></div>
        <div><HeroSlider/></div>
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
