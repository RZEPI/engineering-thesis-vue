<template>
  <div>
    <button @click="addRecord">Add</button>
    <button @click="deleteRecord">Delete</button>
    <button @click="deleteEveryNthRecord(2)">Delete Nth</button>
    <button @click="printLog">Log</button>
    <table>
      <thead>
        <th></th>
        <th></th>
        <th></th>
      </thead>
      <tr :key="tuple" v-for="tuple in tuples">
        <!-- Todo: change row to component, where each of them has a state and edit mode can be set on it -->
        <button>Edit</button>
        <td><input type="number" v-model="tuple[0]" /></td>
        <td>{{ tuple[1] }}</td>
        <td>{{ tuple[2] }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { NamesTable } from "../static/RandomDataTables";
import { NumberTable } from "../static/RandomDataTables";

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
  const generatedArray: [number, string, number][] = [];

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

<style scoped></style>
