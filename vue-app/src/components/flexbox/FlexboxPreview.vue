<template>
  <div class="preview" :style="flexClasses">
    <div
      v-for="element in content"
      :key="element.id"
      @click="removeElement(element.id)"
    >
      <p>{{ element.id }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, computed } from "vue";
import { useStore as useFlexboxStore } from "../../store/flexbox";
import { FlexboxElement } from "../../models/flexbox-generator/FlexboxElement";
import { ActionTypes } from "../../store/flexbox/actions";

const store = useFlexboxStore();
const content = computed<FlexboxElement[]>(() => store.getters.getContentList);
const flexClasses = computed<CSSProperties>(() => store.getters.getStyleObject);

function removeElement(elementId: number) {
  store.dispatch(ActionTypes.REMOVE_ELEMENT, elementId);
}
</script>

<style scoped>
.preview {
  overflow: scroll;
  grid-area: preview;
  display: flex;
  width: 40vw;
  max-height: 40vh;
  border: 1px solid black;
  border-radius: 1em;
  padding: 1em;
  background-color: var(--main-background-color-lighter);
  box-sizing: border-box;
}

.preview::-webkit-scrollbar {
  width: 12px;
  height: 20px;
}

.preview::-webkit-scrollbar-track {
  margin: 1em;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.preview::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  background-color: var(--main-color);
}

.preview::-webkit-scrollbar-corner {
  background-color: transparent;
}

.preview div {
  display: flex;
  min-width: var(--flex-element-size);
  min-height: var(--flex-element-size);
  max-width: var(--flex-element-size);
  max-height: var(--flex-element-size);
  background-color: var(--main-color);
  margin: calc(var(--flex-element-size) / 6);
  justify-content: center;
  align-items: center;
}
.preview div > p {
  font-size: calc(var(--flex-element-size) / 3);
  font-weight: 700;
}
</style>
