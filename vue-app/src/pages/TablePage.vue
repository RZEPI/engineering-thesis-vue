<template>
  <div class="page-wrapper">
    <div class="page-content">
      <div class="v-btn-cont">
        <button @click="addNRecords(RECORDS_TO_CREATE)">
          Add {{ RECORDS_TO_CREATE }}
        </button>
        <button @click="deleteNRecords(RECORDS_TO_DELETE)">
          Delete {{ RECORDS_TO_DELETE }}
        </button>
        <button @click="deleteEveryNthRecord(NTH_TO_DELETE)">
          Delete {{ NTH_TO_DELETE }}th
        </button>
        <button @click="updateNthRow(NTH_TO_UPDATE)">
          Update {{ NTH_TO_UPDATE }}th
        </button>
        <button @click="replaceAllRows">Replace all</button>
        <button @click="swapRows">Swap</button>
        <button @click="clearRows">Clear all</button>
        <span>rows: {{ rowCount }}</span>
      </div>

      <div class="table-container">
        <div class="table">
          <div class="table-header">
            <div>Id</div>
            <div>Name</div>
            <div>Level</div>
          </div>
          <table-row
            class="table-row"
            :key="tuple.id"
            v-for="tuple in tableContent"
            :tuple="tuple"
          >
          </table-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef, onBeforeMount, ref } from "vue";
import { namesTable } from "../static/RandomDataTables";
import { numberTable } from "../static/RandomDataTables";
import TableRow from "../components/UI/TableRow.vue";
import { TableRowData } from "../models/PerfTestArrayRow";

const RECORDS_TO_CREATE: number = 3000;
const RECORDS_TO_DELETE: number = 1000;
const NTH_TO_DELETE: number = 2;
const NTH_TO_UPDATE: number = 2;

const tableContent = ref<TableRowData[]>([]);
const rowCount: ComputedRef<number> = computed(() => {
  return tableContent.value.length;
});

let key: number = 0;

onBeforeMount(generateArray);

function addNRecords(n: number) {
  let nameIndex: number;
  let levelIndex: number;

  const tmpArray: TableRowData[] = [];

  for (let i = 0; i < n; i++) {
    nameIndex = Math.floor(Math.random() * namesTable.length);
    levelIndex = Math.floor(Math.random() * numberTable.length);

    tmpArray.unshift({
      id: key++,
      name: namesTable[nameIndex],
      level: numberTable[levelIndex],
    });
  }

  tableContent.value.unshift(...tmpArray);
}

function deleteNRecords(n: number) {
  tableContent.value.splice(0, n);
}

function deleteEveryNthRecord(n: number) {
  const tmpArray: TableRowData[] = [...tableContent.value];

  for (let i = 0; i < tmpArray.length; i += n) {
    tmpArray.splice(i--, 1);
  }

  tableContent.value = tmpArray;
}

function updateNthRow(n: number) {
  const tmpArray: TableRowData[] = [...tableContent.value];

  for (let i = 0; i < rowCount.value; i += n) {
    tmpArray[i] = {
      ...tableContent.value[i],
      name: "Changed Name " + i,
    };
  }

  tableContent.value = tmpArray;
}

function replaceAllRows() {
  const tmpArray: TableRowData[] = [];

  for (let i = 0; i < rowCount.value; i++) {
    tmpArray.push({
      id: key++,
      name: "Replaced " + i,
      level: 1,
    });
  }

  tableContent.value = tmpArray;
}

function swapRows() {
  const index1 = Math.floor(Math.random() * rowCount.value);
  const index2 = Math.floor(Math.random() * rowCount.value);

  const tmpRow: TableRowData = tableContent.value[index1];
  tableContent.value[index1] = tableContent.value[index2];
  tableContent.value[index2] = tmpRow;
}

function clearRows() {
  const tmpArray: TableRowData[] = [];

  for (let i = 0; i < rowCount.value; i++) {
    tmpArray.push({
      id: tableContent.value[i].id,
      name: "",
      level: 0,
    });
  }

  tableContent.value = tmpArray;
}

function generateArray() {
  const generatedArray: TableRowData[] = [];

  for (let i = 0; i < 5; i++) {
    const nameIndex: number = Math.floor(Math.random() * namesTable.length);
    const levelIndex: number = Math.floor(Math.random() * numberTable.length);

    generatedArray.unshift({
      id: key++,
      name: namesTable[nameIndex],
      level: numberTable[levelIndex],
    });
  }

  tableContent.value.unshift(...generatedArray);
}
</script>

<style scoped>
@import "../styles/shared.css";

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
  grid-template-columns: [id] 20% [name] 40% [level] 40%;
  background-color: var(--hover-element-color);
  width: 100%;
  padding: 0.25em 0em 0.25em 0em;
}

.table-header div {
  padding-left: 0.75em;
  font-size: 1.2em;
  font-weight: bold;
}

:deep(.table-row) {
  background-color: var(--main-color);
  width: 100%;
  display: grid;
  grid-template-columns: [id] 20% [name] 40% [level] 40%;
}
:deep(.table-cell) {
  height: 1em;
  padding: 0.3em 0.3em 0.3em 0.75em;
  border: 1px solid var(--hover-element-color);
  font-weight: bold;
  font-size: 1rem;
}
</style>
