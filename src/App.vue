<template>
    <header>
        <div class="startClass">
            <nav class="p-2">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>
    <div>
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
</script>
<style scoped>
.startClass {
    color: brown;
}
</style>
