<template>
  <div class="table-row" :class="{ active: focus }" @click="onClick()">
    <div class="table-cell">{{ tuple.id }}</div>
    <div class="table-cell">{{ tuple.name }}</div>
    <div class="table-cell">{{ tuple.level }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { TableRowData } from "../../models/PerfTestArrayRow";
const props = defineProps<{
  tuple: TableRowData
}>();
const focus = ref<boolean>(false);

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
