<template>
  <div class="grid-main"
  :style='
    {
      gridAutoFlow: cssProps.gridAutoFlow?.toString(),
      gridTemplateColumns: "repeat(auto-fill," + cssProps.gridTemplateColumns?.toString() + "px)",
      gridAutoRows: cssProps.gridAutoRows?.toString() + "px",
      gap: cssProps.gap?.toString() + "px",
    }
  '
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from 'vue';

defineProps<{cssProps : CSSProperties}>()

</script>

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
