<template>
  <div class="grid-main">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.grid-main {
  padding: 15px;
  display: grid;
  grid-auto-flow: row;
  align-items: top;
  justify-content: space-evenly;
  border: 5px solid var(--hover-element-color);
  border-radius: 15px;
  max-width: 100%;
  justify-items: stretch;
}
</style>
