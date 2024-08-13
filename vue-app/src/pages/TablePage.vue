<template>
  <div class="page-wrapper">
    <div class="page-content">
      <div class="v-btn-cont">
        <button @click="addRecord">Add</button>
        <button @click="deleteRecord">Delete</button>
        <button @click="deleteEveryNthRecord(2)">Delete Nth</button>
        <button @click="printLog">Log</button>
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
            v-for="tuple in tuples"
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
import { NamesTable } from "../static/RandomDataTables";
import { NumberTable } from "../static/RandomDataTables";
import TableRow from "../components/UI/TableRow.vue";
import { DefineProps } from "vue";

const tuples = ref<[number, string, number][]>([]);

let key: number = 0;

onBeforeMount(generateArray);

function addRecord() {
  const NameIndex: number = Math.floor(Math.random() * NamesTable.length);
  const LevelIndex: number = Math.floor(Math.random() * NumberTable.length);
  tuples.value.unshift([key++, NamesTable[NameIndex], NumberTable[LevelIndex]]);
}

function deleteRecord() {
  tuples.value.splice(0, 1);
}

function deleteEveryNthRecord(n: number) {
  for (let i = 0; i < tuples.value.length; i += n) {
    tuples.value.splice(i--, 1);
  }
}

function generateArray() {
  const generatedArray: [number, string, number][] = []; //Todo: change this to type in ../models/

  for (let i = 0; i < 20; i++) {
    const NameIndex: number = Math.floor(Math.random() * NamesTable.length);
    const LevelIndex: number = Math.floor(Math.random() * NumberTable.length);
    generatedArray.unshift([
      key++,
      NamesTable[NameIndex],
      NumberTable[LevelIndex],
    ]);
  }

  tuples.value.unshift(...generatedArray);
}

function printLog() {
  console.log(tuples.value);
}
</script>

<style>
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
  background-color: rgb(201, 201, 201);
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
</style>
