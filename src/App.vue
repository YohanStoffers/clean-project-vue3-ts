<template>
    <header>
        <div class="startClass">
            <nav class="p-2">
                <h3 class="m-2">nav</h3>
                <RouterLink class="m-2" to="/">Home</RouterLink>
                <RouterLink class="m-2" to="/about">About</RouterLink>
            </nav>
        </div>
    </header>
    <div>
        <Suspense>
            <RouterView />
        </Suspense>
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
