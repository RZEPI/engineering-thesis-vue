<template>
  <div class="table-row">
    <div class="table-cell">
      <v-if:editMode input type="number" v-model="tuple[0]" />
      <v-else span>{{ tuple[0] }}</v-else>
    </div>
    <div class="table-cell">{{ tuple[1] }}</div>
    <div class="table-cell">{{ tuple[2] }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["tuple"]);
const editMode: boolean = false;
</script>
