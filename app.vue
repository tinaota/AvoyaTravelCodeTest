<template>
    <Html lang="en" class="h-full bg-white">
        <Body class="h-full">
            <NuxtLayout :name="layout">
                <NuxtPage />
            </NuxtLayout>
        </Body>
    </Html>
</template>

<script setup>
const layout = ref("default");
</script>

<style></style>
