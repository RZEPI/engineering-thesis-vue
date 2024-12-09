<template>
  <div class="recursive-component">
    <p :style="{ color: getColor(props.depth) }">
      {{ props.message }} {{ props.depth }}
    </p>
    <RecursiveComponent
      v-if="props.depth < props.maxDepth"
      :message="props.message"
      :depth="props.depth + 1"
      :maxDepth="props.maxDepth"
    />
  </div>
</template>

<script setup lang="ts">
import type { RecursiveComponentProps } from "../../models/recursive/RecursiveComponentProps";
import RecursiveComponent from "./RecursiveComponent.vue";
const props = defineProps<RecursiveComponentProps>();

const getColor = (depth: number): string => {
  const hue = (146 + depth * 3) % 255;
  const saturation = (172 + depth * 3) % 255;
  const lightness = 50;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
</script>

<style scoped>
.recursive-component {
  text-align: center;
  font-size: 1.7rem;
}
</style>
