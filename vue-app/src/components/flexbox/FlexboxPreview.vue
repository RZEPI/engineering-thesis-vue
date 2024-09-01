<template>
    <div class="preview" :style="flexClasses">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script setup lang="ts">
import { CSSProperties, computed } from 'vue';
import { useStore as useFlexboxStore } from '../../store/flexbox';

const store = useFlexboxStore();
const flexClasses = computed<CSSProperties>(() => store.getters.getStyleObject);

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