<template>
  <button @click="emit('GBClicked')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(["GBClicked"]);
</script>
