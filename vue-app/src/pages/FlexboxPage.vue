<template>
    <base-layout title="Flexbox Testing">
    <div class="main-container">
        <flexbox-preview></flexbox-preview>
        <flexbox-form></flexbox-form>
    </div>
    </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from '../components/UI/BaseLayout.vue';
import FlexboxPreview from '../components/flexbox/FlexboxPreview.vue';
import FlexboxForm from '../components/flexbox/form/FlexboxForm.vue';
</script>

<style scoped>
.main-container
{
    --flex-element-size: 6em;
    display: grid;
    grid-template-areas: "preview preview form"
                         "preview preview form"
                         "preview preview form"
                         "listing listing listing";
    margin: 1em;
    width: 60vw;
    height: 50vh;
}
</style>