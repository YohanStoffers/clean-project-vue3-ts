<template>
    <div>
        <h1>Template Vue3 With ts and nice configs</h1>

        <div class="m-4">
            <strong>From API template:</strong>
            {{ getTemplateData.body }}
        </div>
        <div class="m-4">
            <strong>From API template custom data:</strong>
            {{ customData }}
        </div>

        <WelcomeItem />
    </div>
</template>
<script setup lang="ts">
import WelcomeItem from '@/components/WelcomeItem.vue';

import {getApiTemplateData, getApiTemplateDataCustomUrlAndKey} from '../api';

const getTemplateData = await getApiTemplateData();
const customData = await getApiTemplateDataCustomUrlAndKey('https://jsonplaceholder.typicode.com/posts/1', 'title');
</script>
