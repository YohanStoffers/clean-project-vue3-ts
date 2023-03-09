<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
</script>

<template>
    <header>
        <div class="startClass">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped>
.startClass {
    color: brown;
}
</style>
