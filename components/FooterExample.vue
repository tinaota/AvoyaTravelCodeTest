<template>
    <footer class="bg-slate-100">
        <div>{{ content }}</div>
    </footer>
</template>

<script setup>
import { ref } from "vue";
const content = ref("Footer Here");
</script>
