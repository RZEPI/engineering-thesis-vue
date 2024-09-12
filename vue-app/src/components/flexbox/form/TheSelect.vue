<template>
  <div>
    <label :for="selectName">{{ selectHeader }}</label>
    <select :name="selectName" :id="selectName" @change="handleSelection">
      <option v-for="optionItem in optionList" :value="optionItem">
        {{ optionItem }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
import { TheSelectProps } from "../../../models/flexbox-generator/TheSelectProps";

const props = defineProps<TheSelectProps>();
const selectName = props.selectHeader.toLowerCase().replace(" ", "-");
const emit = defineEmits<{
  onChange: [chosenOption: string];
}>();

function handleSelection(event: Event) {
  const element = event.target as HTMLInputElement;
  emit("onChange", element.value as string);
}
</script>

<style scoped>
div {
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
label {
  font-size: var(--label-font-size);
}

select {
  text-align: center;
  font-size: 1.2em;
  padding: 0.3em;
  color: var(--main-text-color);
  background-color: var(--main-background-color-lighter);
  border-color: var(--main-text-color);
  border-radius: 0.6em;
}
</style>
