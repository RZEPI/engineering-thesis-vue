<template>
  <div class="v-btn-cont">
    <button @click="handleAddRecordsClick">Add {{ RECORDS_TO_CREATE }}</button>
    <button @click="handleDeleteRecordsClick">
      Delete {{ RECORDS_TO_DELETE }}
    </button>
    <button @click="handleDeleteEveryNthRecordClick">
      Delete {{ NTH_TO_DELETE }}th
    </button>
    <button @click="handleUpdateNthRowClick">
      Update {{ NTH_TO_UPDATE }}th
    </button>
    <button @click="handleReplaceAllRowsClick">Replace all</button>
    <button @click="handleSwapRowsClick">Swap</button>
    <button @click="handleClearRowsClick">Clear all</button>
    <span>rows: {{ rowCount }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { TableActionsProps } from "../../models/table/TableActionsProps";
const { actionFunctions, tableContent } = defineProps<TableActionsProps>();

const RECORDS_TO_CREATE: number = 30_000;
const RECORDS_TO_DELETE: number = 3_000;
const NTH_TO_DELETE: number = 2;
const NTH_TO_UPDATE: number = 2;

function handleAddRecordsClick() {
  actionFunctions.addNRecords(RECORDS_TO_CREATE);
}

function handleDeleteRecordsClick() {
  actionFunctions.deleteNRecords(RECORDS_TO_DELETE);
}

function handleDeleteEveryNthRecordClick() {
  actionFunctions.deleteEveryNthRecord(NTH_TO_DELETE);
}

function handleUpdateNthRowClick() {
  actionFunctions.updateNthRow(NTH_TO_UPDATE);
}

function handleReplaceAllRowsClick() {
  actionFunctions.replaceAllRows();
}

function handleSwapRowsClick() {
  actionFunctions.swapRows();
}

function handleClearRowsClick() {
  actionFunctions.clearRows();
}

const rowCount = computed<number>(()=> tableContent.length);
</script>

<style scoped>
.v-btn-cont {
  padding: 1em;
  display: flex;
  flex-direction: column;
}
.v-btn-cont button {
  font-size: 1.2em;
  margin-top: 1em;
  padding: 0.25em;
  border: 2px solid grey;
  background-color: white;
  border-radius: 10px;
}

button:hover {
  transition: all 0.3s;
  background-color: var(--hover-element-color);
}
button:active {
  background-color: var(--active-element-color);
}
</style>
