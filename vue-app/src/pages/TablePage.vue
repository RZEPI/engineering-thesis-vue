<template>
    <div>
        <button @click="addRecord">Add</button>
        <table>
            <thead>
                <th></th>
                <th></th>
                <th></th>
            </thead>
            <tr :key=tuple[0] v-for="tuple in tuples">
                <td>{{tuple[0]}}</td>
                <td>{{tuple[1]}}</td>
                <td>{{tuple[2]}}</td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import { NamesTable } from '../static/RandomDataTables';
import { NumberTable } from '../static/RandomDataTables';
import {onBeforeMount} from 'vue';

const tuples = ref<[number,string,number][]>([])

let key: number = 0;

onBeforeMount(generateArray);

function addRecord()
{
    const NameIndex: number =  Math.floor(Math.random() * NamesTable.length);
    const LevelIndex: number = Math.floor(Math.random() * NumberTable.length);
    tuples.value.unshift([key++, NamesTable[NameIndex], NumberTable[LevelIndex]]);
}

function generateArray()
{
    const generatedArray: [number, string, number][] = [];

        for(let i = 0; i<5; i++)
        {
            const NameIndex: number =  Math.floor(Math.random() * NamesTable.length);
            const LevelIndex: number = Math.floor(Math.random() * NumberTable.length);
            generatedArray.unshift([key++, NamesTable[NameIndex], NumberTable[LevelIndex]]);
        }

        tuples.value.unshift(...generatedArray);
}
</script>

<style scoped></style>
