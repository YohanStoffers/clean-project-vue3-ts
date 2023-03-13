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
        <div class="m-4">
            <strong>From API template:</strong>
            {{ getTemplateData.body }}
        </div>
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
import {getTemplateData} from './api';
</script>
<style scoped>
.startClass {
    color: brown;
}
</style>
