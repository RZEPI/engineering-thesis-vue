<template>
    <div class="preview">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.preview
{
    grid-area: preview;
    display: flex;
    width: 100%;
    height: 100%;
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