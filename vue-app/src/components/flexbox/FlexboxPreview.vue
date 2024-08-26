<template>
    <div class="preview" :style="flexClasses.getStyleObject()">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script setup lang="ts">
import {inject} from 'vue';

import { FlexClasses } from '../../models/flexbox-generator/FlexClasses';

const flexClasses = inject<FlexClasses>('flexClasses')!;
</script>

<style scoped>
.preview
{
    grid-area: preview;
    display: flex;
    width: 40vw;
    max-height: 40vh;
    border: 1px solid black;
    border-radius: 1em;
    padding: 1em;
    background-color: var(--main-background-color-lighter);
    box-sizing: border-box;
}
.preview *
{
    width: 6vw;
    height: 6vh;
    background-color: var(--main-color);
    margin: 1em
}
</style>