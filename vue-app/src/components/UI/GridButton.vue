<template>
  <button @click="emit('GBClicked')" :style="style">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";

const emit = defineEmits(["GBClicked"]);
defineProps<{
  style?: CSSProperties;
}>();
</script>
