<template>
  <div class="table-container">
    <div class="table">
      <div class="table-header">
        <div v-for="field in tableFields" :key="field">{{ field }}</div>
        <img :src="filter" alt="filter" @click="handleFilterClick" />
      </div>
      <table-row
        :key="row.id"
        v-for="row in tableContent"
        :rowData="row"
      ></table-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import TableRow from "./TableRow.vue";
import { TableContentProps } from "../../models/table/TableContentProps";

import filter from "../../assets/filter.png";

const { tableContent, tableFields, openFilterDialog } =
  defineProps<TableContentProps>();

function handleFilterClick() {
  openFilterDialog();
}
</script>

<style scoped>
.table-container {
  padding: 2em 1em 2em 1em;
  max-height: 80vh;
}

.table {
  max-height: 100%;
  box-sizing: content-box;
  border: 10px solid var(--hover-element-color);
  border-radius: 20px;
  overflow: hidden;
  overflow-y: scroll;
}

.table-header {
  display: grid;
  grid-template-columns: [id] 20% [name] 40% [level] 35% [fitler] 5%;
  background-color: var(--hover-element-color);
  width: 100%;
  padding: 0.25em 0em 0.25em 0em;
}

.table-header div {
  padding-left: 0.75em;
  font-size: 1.2em;
  font-weight: bold;
}

.table-header img {
  color: white;
  width: 1.2em;
  height: 100%;
  margin-left: 0.5em;
  cursor: pointer;
}

.table::-webkit-scrollbar {
  width: 12px;
  height: 20px;
}

.table::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.table::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: var(--main-color);
}
.table::-webkit-scrollbar-corner {
  background-color: transparent;
}
</style>
