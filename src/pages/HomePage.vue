<template>
    <div>
        <h1>Template Vue3 With ts and nice configs</h1>

        <div class="m-4">
            <strong>From API template:</strong>
            {{ templateData?.body }}
        </div>
        <div class="m-4">
            <strong>From API template custom data:</strong>
            {{ customData?.title }}
        </div>

        <WelcomeItem />
    </div>
</template>
<script setup lang="ts">
import WelcomeItem from '@/components/WelcomeItem.vue';

import {getApiTemplateData, getApiTemplateDataCustomUrl} from '../api';
// need to move this
const templateData = await getApiTemplateData();
const customData = await getApiTemplateDataCustomUrl('https://jsonplaceholder.typicode.com/posts/1');
</script>
