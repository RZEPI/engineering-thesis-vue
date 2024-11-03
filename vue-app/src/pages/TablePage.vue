<template>
  <table-filter-modal v-model:filter="filter" ref="dialog" @update-filter="changeFilter" />
  <div class="page-wrapper">
    <div class="page-content">
      <table-actions :action-functions="actionFunctions" :table-content="filteredTableContent"></table-actions>
      <table-content :open-filter-dialog="openFilterDialog" :table-content="filteredTableContent" :table-fields="tableFields" ></table-content>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from "vue";
import { namesTable } from "../static/RandomDataTables";
import { numberTable } from "../static/RandomDataTables";

import { ActionFunctions } from "../models/table/TableActionsProps";
import { TableRowData } from "../models/table/TableRowData";

import TableActions from "../components/table/TableActions.vue";
import TableContent from "../components/table/TableContent.vue";
import TableFilterModal from "../components/table/TableFilterModal.vue";
import { TableFilter, IntFilter, StringFilter } from "../models/table/TableFilter";

const defaultFilter:TableFilter = {
    id: { min: undefined, max: undefined, isOpen: false },
    name: namesTable.map((name) => ({ value: name, isChecked: true })),
    level: { min: undefined, max: undefined, isOpen: false },
};


const tableContent = ref<TableRowData[]>([]);
const filteredTableContent = ref<TableRowData[]>(tableContent.value);
const dialog = ref<InstanceType<typeof TableFilterModal>>();
const filter = ref<TableFilter>(defaultFilter);
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

function openFilterDialog() {
  dialog.value?.openModal();
}
function checkIfValueInRangeClosed(
    value: number,
    filter: IntFilter,
  ): boolean {
    if (filter.min !== undefined && filter.min >= value) return false;
    if (filter.max !== undefined && filter.max <= value) return false;

    return true;
  }

  function checkIfValueInRangeOpen(value: number, filter: IntFilter): boolean {
    if (filter.min !== undefined && filter.min > value) return false;
    if (filter.max !== undefined && filter.max < value) return false;

    return true;
  }

  function checkIfValueIsInFilterRange(
    value: number,
    filter: IntFilter,
  ): boolean {
    if (filter.isOpen) {
      return checkIfValueInRangeOpen(value, filter);
    } else {
      return checkIfValueInRangeClosed(value, filter);
    }
  }

  function checkIfNameIsInFilter(
    givenName: string,
    filter: StringFilter[],
  ): boolean {
    return (
      filter.find((name) => name.value === givenName && name.isChecked) !==
      undefined
    );
  }
  function changeFilter(newFilter: TableFilter) {
    filter.value = newFilter;
  }

  watch(filter.value, (newFilter) => {
    filteredTableContent.value = tableContent.value.filter((row) => {
    if (!checkIfValueIsInFilterRange(row.id, newFilter.id)) return false;

    if (!checkIfValueIsInFilterRange(row.level, newFilter.level))
      return false;

    if (!checkIfNameIsInFilter(row.name, newFilter.name)) return false;

    return true;
  });
  });

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
