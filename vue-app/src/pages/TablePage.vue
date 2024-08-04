<template>
    <div>
        <table>
        <tr v-for="tuple in tuples">
            <td>{{tuple[0]}}</td>
            <td>{{tuple[1]}}</td>
            <td>{{tuple[2]}}</td>
        </tr>
    </table>
    </div>
</template>

<script setup lang="ts">

import {ref} from 'vue';

const tuples = ref<[number,string,number][]>(
[
    [0, "Marcel", 130],
    [1, "Paweł", 200],
    [2, "Ala", 350],
    [3, "Łukasz", 400],
    [0, "Marcel", 130],
    [1, "Paweł", 200],
    [2, "Ala", 350],

])

</script>

<style scoped></style>
