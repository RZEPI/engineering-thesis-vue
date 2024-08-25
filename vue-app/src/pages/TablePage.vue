<template>
  <div class="page-wrapper">
    <div class="page-content">
      <div class="v-btn-cont">
        <button @click="addNRecords(5)">Add</button>
        <button @click="deleteRecord">Delete</button>
        <button @click="deleteEveryNthRecord(2)">Delete Nth</button>
        <button @click="updateNthRow(2)">Update Nth</button>
        <button @click="replaceAllRows">Replace all</button>
        <button @click="swapRows">Swap rows</button>
        <button @click="clearRows">Clear rows</button>
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
            :key="tuple"
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
import { onBeforeMount, ref } from "vue";
import { namesTable } from "../static/RandomDataTables";
import { numberTable } from "../static/RandomDataTables";
import TableRow from "../components/UI/TableRow.vue";
import { TableRowData } from "../models/PerfTestArrayRow";

const tableContent = ref<TableRowData[]>([]);

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

function deleteRecord() {
  tableContent.value.splice(0, 1);
}

function deleteEveryNthRecord(n: number) {
  for (let i = 0; i < tableContent.value.length; i += n) {
    tableContent.value.splice(i--, 1);
  }
}

function updateNthRow(n: number) {
  for (let i = 0; i < tableContent.value.length; i += n) {
    tableContent.value[i].name = "Changed name " + i;
  }
}

function replaceAllRows() {
  for (let i = 0; i < tableContent.value.length; i++) {
    tableContent.value[i] = { id: i, name: "Replaced " + i, level: 1 };
  }
}

function swapRows() {
  let tmpRow: TableRowData;

  const Index1 = Math.floor(Math.random() * tableContent.value.length);
  const Index2 = Math.floor(Math.random() * tableContent.value.length);

  tmpRow = tableContent.value[Index1];
  tableContent.value[Index1] = tableContent.value[Index2];
  tableContent.value[Index2] = tmpRow;
}

function clearRows() {
  tableContent.value.forEach((element: TableRowData) => {
    element.id = 0;
    element.name = "";
    element.level = 0;
  });
}

function generateArray() {
  const generatedArray: TableRowData[] = [];

  for (let i = 0; i < 20; i++) {
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
.page-wrapper {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
}
.page-content {
  width: 80%;
  display: grid;
  grid-template-columns: 20% 80%;
}
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

.table-container {
  padding: 2em 1em 2em 1em;
}

.table {
  box-sizing: content-box;
  border: 10px solid var(--hover-element-color);
  border-radius: 20px;
  overflow: hidden;
  background-color: pink;
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
