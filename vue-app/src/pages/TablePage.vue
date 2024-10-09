<template>
  <div class="page-wrapper">
    <div class="page-content">
      <table-actions :action-functions="actionFunctions" :table-content="tableContent"></table-actions>
      <table-content :open-filter-dialog="()=>{}" :table-content="tableContent" :table-fields="tableFields" ></table-content>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { namesTable } from "../static/RandomDataTables";
import { numberTable } from "../static/RandomDataTables";

import { ActionFunctions } from "../models/table/TableActionsProps";
import { TableRowData } from "../models/table/TableRowData";

import TableActions from "../components/table/TableActions.vue";
import TableContent from "../components/table/TableContent.vue";


const tableContent = ref<TableRowData[]>([]);
  const tableDummyRow: TableRowData = {
    id: 0,
    name: "Name",
    level: 0,
  };
  const tableFields = Object.keys(tableDummyRow).map((key) =>
    key.toUpperCase(),
  );
let key: number = 0;
const rowCount = tableContent.value.length;

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

  for (let i = 0; i < rowCount; i += n) {
    tmpArray[i] = {
      ...tableContent.value[i],
      name: "Changed Name " + i,
    };
  }

  tableContent.value = tmpArray;
}

function replaceAllRows() {
  const tmpArray: TableRowData[] = [];

  for (let i = 0; i < rowCount; i++) {
    tmpArray.push({
      id: key++,
      name: "Replaced " + i,
      level: 1,
    });
  }

  tableContent.value = tmpArray;
}

function swapRows() {
  const index1 = Math.floor(Math.random() * rowCount);
  const index2 = Math.floor(Math.random() * rowCount);

  const tmpRow: TableRowData = tableContent.value[index1];
  tableContent.value[index1] = tableContent.value[index2];
  tableContent.value[index2] = tmpRow;
}

function clearRows() {
  const tmpArray: TableRowData[] = [];

  for (let i = 0; i < rowCount; i++) {
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


const actionFunctions: ActionFunctions = {
    addNRecords,
    deleteNRecords,
    deleteEveryNthRecord,
    updateNthRow,
    replaceAllRows,
    swapRows,
    clearRows,
  };
</script>

<style scoped>
.page-wrapper {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 80vh;
}
.page-content {
  width: 80%;
  display: grid;
  grid-template-columns: 20% 80%;
}
</style>
