<template>
  <form class="configuration-form">
    <toggle-input
      input-header="Direction"
      :choices="['Row', 'Column']"
      @toggle-func="toggleDirection"
    ></toggle-input>
    <toggle-input
      input-header="Wrapping"
      :choices="['Nowrap', 'Wrap']"
      @toggle-func="toggleWrapping"
    ></toggle-input>
    <the-select
      select-header="Justify content"
      :option-list="justifyContentOptionsList"
      @on-change="selectJustifyContentHandler"
    ></the-select>
    <the-select
      select-header="Align items"
      :option-list="alignItemsOptionsList"
      @on-change="selectAlignItemsHandler"
    ></the-select>
    <the-select
      v-if="wrapping"
      select-header="Align content"
      :option-list="alignContentOptionsList"
      @on-change="selectAlignContentHandler"
    ></the-select>
    <button type="button" @click="addContainer">Add container</button>
  </form>
</template>
<script setup lang="ts">
import { useFlexboxStore } from "../../../store/flexbox";
import ToggleInput from "./ToggleInput.vue";
import TheSelect from "./TheSelect.vue";
import { ContentOptions } from "../../../models/flexbox-generator/ContentOptions";
import { AlignItemsOptions } from "../../../models/flexbox-generator/AlignItemsOptions";
import { computed } from "vue";

const justifyContentOptionsList = Object.values(ContentOptions).filter(
  (value) => isNaN(Number(value)),
);
const alignItemsOptionsList = Object.values(AlignItemsOptions).filter((value) =>
  isNaN(Number(value)),
);
const alignContentOptionsList = justifyContentOptionsList;
const store = useFlexboxStore();
const wrapping = computed<boolean>(() => store.getWrapping);

function toggleDirection(): void {
  store.toggleDirection();
}

function toggleWrapping(): void {
  store.toggleWrapping();
}

function selectHandler<T>(
  chosenOption: string,
  actionType: (arg0: T)=>void,
  optionsList: T[],
): void {
  const parsedOption = optionsList.find((value) => value === chosenOption);
  if (parsedOption !== undefined) {
    actionType(parsedOption);
  }
}

function selectAlignItemsHandler(chosenOption: string) {
  selectHandler<AlignItemsOptions>(
    chosenOption,
    store.setAlignItems,
    alignItemsOptionsList,
  );
}
function selectAlignContentHandler(chosenOption: string) {
  selectHandler<ContentOptions>(
    chosenOption,
    store.setAlignContent,
    alignContentOptionsList,
  );
}
function selectJustifyContentHandler(chosenOption: string) {
  selectHandler<ContentOptions>(
    chosenOption,
    store.setJustifyContnent,
    justifyContentOptionsList,
  );
}
function addContainer() {
  store.addElement();
}
</script>
<style scoped>
.configuration-form {
  --label-font-size: 1.3em;
  grid-area: form;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.configuration-form div {
  width: 75%;
}
button {
  width: 80%;
  margin: 3em;
  background-color: var(--main-color);
  font-size: var(--label-font-size);
  border-radius: 1em;
  padding: 0.8em;
}

@media (max-height: 1300px){
  button{
    margin: 1em
  }
}
</style>
