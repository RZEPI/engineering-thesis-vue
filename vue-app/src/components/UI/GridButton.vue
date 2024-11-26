<template>
  <button @click="emit('Clicked')" :style="style">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";

const emit = defineEmits(["Clicked"]);
defineProps<{
  style?: CSSProperties;
}>();
</script>
