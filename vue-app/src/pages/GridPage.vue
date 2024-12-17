<template>
  <div class="page-wrapper">
    <div class="page-content">
      <div class="windows-container">
        <grid-button-window title="Aspects">
          <grid-config-button
            :key="index"
            v-for="(el, index) in allAspects"
            @Clicked="chooseAspect(el.id)"
            :style="{
              textDecoration: !el.selected ? 'line-through' : 'none',
            }"
          >
            {{ el.aspectText }}
          </grid-config-button>
        </grid-button-window>

        <grid-button-window title="Grid options">
          <grid-config-button @Clicked="handleGenerateElements()">
            Generate
          </grid-config-button>

          <grid-config-button @Clicked="changeGridAutoFlow()">
            {{ cssProps.gridAutoFlow }}
          </grid-config-button>
          <grid-config-slider
            name="Element size"
            :value="itemSize"
            @change="(e) => changeElementSize(e)"
          >
          </grid-config-slider>
          <grid-config-slider
            name="Gap size"
            :value="gapSize"
            @change="(e) => changeGapSize(e)"
          >
          </grid-config-slider>
        </grid-button-window>
      </div>

      <code-listing :cssProps="cssProps"> </code-listing>

      <grid :cssProps="cssProps">
        <grid-element
          v-for="element in elements"
          :id="element.id"
          :aspectClass="element.aspectClass"
          :color="element.color"
        >
        </grid-element>
      </grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import Grid from "../components/grid/Grid.vue";
import GridConfigButton from "../components/UI/GridButton.vue";
import CodeListing from "../components/CodeListing.vue";
import GridConfigSlider from "../components/grid/GridConfigSlider.vue";
import GridButtonWindow from "../components/grid/GridButtonWindow.vue";
import { CSSProperties, ref } from "vue";
import { colors } from "../static/GridElements";
import { AspectState } from "../models/AspectState";
import { GridInitialElementsAspects } from "../static/GridInitialElementsAspects";
import { GridElementModel } from "../models/GridElementModel";
import GridElement from "../components/grid/GridElement.vue";
const numberOfElements = 20;

const itemSize = ref<string>("100");
const gapSize = ref<string>("10");

let colorsArray: Array<Array<number>> = [];

const cssProps = ref<CSSProperties>({
  gridAutoFlow: "dense",
  gridTemplateColumns: itemSize.value,
  gridAutoRows: itemSize.value,
  gap: gapSize.value,
});

const allAspects = ref<AspectState[]>(GridInitialElementsAspects);

const elements = ref<GridElementModel[]>(getGeneratedElements());

function changeElementSize(e: InputEvent) {
  const target = e.target as HTMLInputElement;
  itemSize.value = e != null ? target.value : "0";
  handleSlider();
}

function changeGapSize(e: InputEvent) {
  const target = e.target as HTMLInputElement;
  gapSize.value = e != null ? target.value : "0";
  cssProps.value.gap = gapSize.value;
}

function changeGridAutoFlow() {
  cssProps.value.gridAutoFlow =
    cssProps.value.gridAutoFlow == "dense" ? "row" : "dense";
}

function handleSlider() {
  cssProps.value.gridTemplateColumns = itemSize.value;
  cssProps.value.gridAutoRows = itemSize.value;
}
function handleGenerateElements() {
  elements.value = getGeneratedElements();
}

function chooseAspect(id: number) {
  const aspect = allAspects.value.find((e) => e.id === id);
  if (aspect) {
    aspect.selected = !aspect.selected;
  }
}

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function getRandomAspect() {
  let activeAspects = allAspects.value.filter((aspect) => aspect.selected);

  if (activeAspects.length == 0) {
    return allAspects.value[0].aspectClass;
  }

  const randomIndex = Math.floor(Math.random() * activeAspects.length);
  return activeAspects[randomIndex].aspectClass;
}

function getGeneratedElements(): GridElementModel[] {
  colorsArray = [];
  for (let i = 0; i < numberOfElements; i++) {
    colorsArray.push(getRandomColor());
  }

  return Array.from({ length: numberOfElements }, (_, index) => ({
    id: index,
    aspectClass: getRandomAspect(),
    color: colorsArray[index],
  }));
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  --element-size: 100px;
}

.page-wrapper {
  z-index: -1;
  padding-top: 10px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: inherit;
}

.page-content {
  width: 60%;
  display: block;
  background-color: inherit;
  align-items: center;
}

.page-content > * {
  width: 100%;
}

.page-content > div {
  margin-top: 25px;
}

.grid-main {
  padding: 15px;
  display: grid;
  grid-auto-flow: row;
  align-items: top;
  justify-content: space-evenly;
  border: 5px solid var(--hover-element-color);
  border-radius: 15px;
  max-width: 100%;
  justify-items: stretch;
}

.element {
  box-sizing: border-box;
  border: 4px solid;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  display: block;
}

.windows-container {
  display: flex;
  background-color: inherit;
}

:deep() .v-btn-window {
  padding-top: 1rem;
  background-color: inherit;
  width: fit-content;
  position: relative;
  margin: 10px;
}

:deep() .v-btn-window input[type="range"] {
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  --slider-size: 25px;
}

:deep() .v-btn-window input[type="range"]::-webkit-slider-runnable-track {
  height: var(--slider-size);
  background: #e2e2e2;
  border-radius: 15px;
}

:deep() .v-btn-window input[type="range"]::-moz-range-track {
  height: var(--slider-size);
  background: #ccc;
  border-radius: 15px;
}

:deep() .v-btn-window input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: var(--slider-size);
  width: var(--slider-size);
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid var(--btn-cont-border-color);
  box-shadow: -407px 0 0 400px var(--btn-cont-border-color);
}

:deep() .v-btn-window input[type="range"]::-moz-range-thumb {
  height: var(--slider-size);
  width: var(--slider-size);
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid var(--btn-cont-border-color);
  box-shadow: -407px 0 0 400px var(--btn-cont-border-color);
}

:deep() .v-btn-window span.title {
  font-weight: bold;
  font-size: 1rem;
  padding: 0 0.2rem;
  position: absolute;
  left: 1.5rem;
  top: 0.5rem;
  background-color: var(--main-background-color);
}

:deep() .v-btn-cont {
  --btn-cont-border-color: rgb(0, 128, 255);
  padding: 1em;
  margin: 0em;
  display: flex;
  flex-direction: column;
  width: fit-content;
  background-color: inherit;
  border: 4px solid var(--btn-cont-border-color);
  border-radius: 15px;
}

:deep() .v-btn-cont button {
  font-size: 0.9rem;
  margin-bottom: 1em;
  padding: 0.4rem 1rem;
  border: 2px solid grey;
  background-color: white;
  border-radius: 10px;
}

:deep() .v-btn-cont button:last-child {
  margin-bottom: 0;
}

:deep() button:hover {
  transition: all 0.3s;
  background-color: var(--hover-element-color);
}

:deep() button:active {
  background-color: var(--active-element-color);
}

.aspect_1_to_2 {
  grid-column: span 2;
}

.aspect_2_to_1 {
  grid-row: span 2;
}

.aspect_1_to_3 {
  grid-column: span 3;
}

.aspect_3_to_1 {
  grid-row: span 3;
}

.aspect_1_to_1 {
}
</style>
