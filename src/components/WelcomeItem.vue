<template>
    <div class="p-2 bg-dark">
        <div class="text-light">This is a component</div>
        <div class="text-success">{{ defaultFunction() }}</div>
    </div>
</template>
<script setup lang="ts">
const defaultFunction = () => 'function has returned';
</script>
