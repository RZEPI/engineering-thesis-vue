<template>
  <li class="string-input">
    <input
      type="checkbox"
      :id="className"
      :className="className"
      :checked="filterValue.isChecked"
      :value="filterValue.value"
      @change="handleNameCheckboxChange"
    />
    <label :for="className">{{ filterValue.value }}</label>
  </li>
</template>

<script setup lang="ts">
import { StringFilterInputProps } from "../../models/table/StringFilterInputProps";

const { className, filterValue } = defineProps<StringFilterInputProps>();
const emit = defineEmits(["updateFilter"]);

function handleNameCheckboxChange(e: Event) {
  emit("updateFilter", e);
}
</script>

<style scoped>
.string-input {
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
}

.string-input input {
  margin: auto;
}

label {
  font-size: 1.5em;
}

input[type="checkbox"] {
  width: 1.5em;
  height: 1.5em;
}
</style>
