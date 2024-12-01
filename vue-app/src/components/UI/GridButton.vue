<template>
  <button @click="emit('clicked')" :style="style">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";

const emit = defineEmits(["clicked"]);
defineProps<{
  style?: CSSProperties;
}>();
</script>
