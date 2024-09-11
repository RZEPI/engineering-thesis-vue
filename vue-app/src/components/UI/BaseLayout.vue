<template>
    <h1>{{ title }}</h1>
    <main>
        <slot></slot>
    </main>
</template>

<script setup lang="ts">
import {LayoutProps} from "../../models/LayoutProps";
defineProps<LayoutProps>();
</script>

<style scoped>
h1
{
    text-align: center;
    font-size: 3em;
}
main
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>