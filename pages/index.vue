<template>
    <div class="flex flex-col min-h-screen">
        <div class="bg-slate-100">Page Header</div>
        <div class="flex-1">Main content here</div>
        <div><FooterExample /></div>
    </div>
</template>

<script setup>
const title = ref("My App");
const description = ref("My App Description");
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
