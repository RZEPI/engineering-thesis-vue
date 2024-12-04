<template>
  <table-filter-modal
    v-model:filter="filter"
    ref="dialog"
    @update-filter="changeFilter"
  />
  <div class="page-wrapper">
    <div class="page-content">
      <table-actions
        :action-functions="actionFunctions"
        :table-content="filteredTableContent"
      ></table-actions>
      <table-content
        :open-filter-dialog="openFilterDialog"
        :table-content="filteredTableContent"
        :table-fields="tableFields"
      ></table-content>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, reactive, watch, computed } from "vue";
import {
  namesTable,
  numberTable,
  makeDefaultFilter,
  tableFields,
} from "../static/RandomDataTables";

import { ActionFunctions } from "../models/table/TableActionsProps";
import { TableRowData } from "../models/table/TableRowData";

import TableActions from "../components/table/TableActions.vue";
import TableContent from "../components/table/TableContent.vue";
import TableFilterModal from "../components/table/TableFilterModal.vue";
import {
  TableFilter,
  IntFilter,
  StringFilter,
} from "../models/table/TableFilter";

const tableContent = reactive<TableRowData[]>([]);
const filteredTableContent = reactive<TableRowData[]>([]);
const dialog = ref<InstanceType<typeof TableFilterModal>>();
let filter = reactive<TableFilter>({ ...makeDefaultFilter() });

let key: number = 0;

onBeforeMount(generateArray);

const rowCount = computed<number>(() => tableContent.length);

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

  tableContent.unshift(...tmpArray);
}

function deleteNRecords(n: number) {
  tableContent.splice(0, n);
}

function deleteEveryNthRecord(n: number) {
  const tmpArray: TableRowData[] = [...tableContent];

  for (let i = 0; i < tmpArray.length; i += n) {
    tmpArray.splice(i--, 1);
  }
  tableContent.splice(0, rowCount.value, ...tmpArray);
}

function updateNthRow(n: number) {
  const tmpArray: TableRowData[] = [...tableContent];

  for (let i = 0; i < rowCount.value; i += n) {
    tmpArray[i] = {
      ...tableContent[i],
      name: "Changed Name " + tableContent[i].name,
    };
  }

  tableContent.splice(0, rowCount.value, ...tmpArray);
}

function replaceAllRows() {
  const tmpArray: TableRowData[] = [];

  for (let i = 0; i < rowCount.value; i++) {
    tmpArray.push({
      id: key++,
      name: "Replaced " + tableContent[i].name,
      level: 1,
    });
  }

  tableContent.splice(0, rowCount.value, ...tmpArray);
}

function swapRows() {
  const index1 = Math.floor(Math.random() * rowCount.value);
  const index2 = Math.floor(Math.random() * rowCount.value);

  const tmpRow: TableRowData = tableContent[index1];
  tableContent[index1] = tableContent[index2];
  tableContent[index2] = tmpRow;
}

function clearRows() {
  const tmpArray: TableRowData[] = [];

  for (let i = 0; i < rowCount.value; i++) {
    tmpArray.push({
      id: tableContent[i].id,
      name: "",
      level: 0,
    });
  }

  tableContent.splice(0, rowCount.value, ...tmpArray);
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

  tableContent.unshift(...generatedArray);
  filteredTableContent.unshift(...generatedArray);
}

function openFilterDialog() {
  dialog.value?.openModal();
}
function checkIfValueInRangeClosed(value: number, filter: IntFilter): boolean {
  if (filter.min !== undefined && filter.min > value) return false;
  if (filter.max !== undefined && filter.max < value) return false;

  return true;
}

function checkIfValueInRangeOpen(value: number, filter: IntFilter): boolean {
  if (filter.min !== undefined && filter.min >= value) return false;
  if (filter.max !== undefined && filter.max <= value) return false;

  return true;
}

function inFilterRange(value: number, filter: IntFilter): boolean {
  if (filter.isOpen) {
    return checkIfValueInRangeOpen(value, filter);
  } else {
    return checkIfValueInRangeClosed(value, filter);
  }
}

function inNameFilter(givenName: string, filter: StringFilter[]): boolean {
  return (
    filter.find((name) => (givenName.includes(name.value) && name.isChecked) || givenName === "") !==
    undefined
  );
}
function changeFilter(newFilter: TableFilter) {
  Object.assign(filter, newFilter);
}

watch([filter, tableContent], ([newFilter, newTable]) => {
  const filteredContent = newTable.filter((row) => {
    if (!inFilterRange(row.id, newFilter.id)) return false;

    if (!inFilterRange(row.level, newFilter.level)) return false;

    if (!inNameFilter(row.name, newFilter.name)) return false;

    return true;
  });

  filteredTableContent.splice(
    0,
    filteredTableContent.length,
    ...filteredContent,
  );
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
