<template>
  <div class="table-row" :class="{ active: focus }" @click="onClick()">
    <div class="table-cell">{{ rowData.id }}</div>
    <div class="table-cell">{{ rowData.name }}</div>
    <div class="table-cell">{{ rowData.level }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { TableRowProps } from "../../models/table/TableRowProps";
const { rowData } = defineProps<TableRowProps>();
const focus = ref<boolean>(false);

function onClick() {
  focus.value = !focus.value;
}
</script>
<style scoped>
.table-row {
  background-color: var(--main-color);
  width: 100%;
  display: grid;
  grid-template-columns: [id] 20% [name] 40% [level] 40%;
}
.table-cell {
  height: 1em;
  padding: 0.3em 0.3em 0.3em 0.75em;
  border: 1px solid var(--hover-element-color);
  font-weight: bold;
  font-size: 1rem;
}

.table-row.active {
  background-color: yellow;
}

.table-row:hover {
  background-color: var(--hover-element-color);
}
</style>
