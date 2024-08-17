<template>
  <div class="table-row" :class="{ active: focus }" @click="onClick()">
    <div class="table-cell">{{ tuple[0] }}</div>
    <div class="table-cell">{{ tuple[1] }}</div>
    <div class="table-cell">{{ tuple[2] }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps(["tuple"]);
const focus = ref(false);

function onClick() {
  focus.value = !focus.value;
}
</script>
<style scoped>
.table-row.active {
  background-color: yellow;
}

.table-row:hover {
  background-color: var(--hover-element-color);
}
</style>
