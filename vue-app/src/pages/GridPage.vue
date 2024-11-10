<template>
  <div class="page-wrapper">
    <div class="page-content">
      <div :style="{ width: '100%' }">
        <div class="windows-container">
          <grid-button-window title="Aspects">
            <grid-config-button
              :key="index"
              v-for="(el, index) in allAspects"
              @GBClicked="checkAspect(el.id)"
              :style="{
                textDecoration: !el.selected ? 'line-through' : 'none',
              }"
            >
              {{ el.aspect }}
            </grid-config-button>
          </grid-button-window>

          <grid-button-window title="Grid options">
            <grid-config-button
              @GBClicked="
                () => {
                  elements = getGeneratedElements();
                }
              "
            >
              Generate
            </grid-config-button>

            <grid-config-button
              @GBClicked="
                () => {
                  _cssProps.gridAutoFlow =
                    _cssProps.gridAutoFlow == 'dense' ? 'row' : 'dense';
                }
              "
            >
              {{ _cssProps.gridAutoFlow }}
            </grid-config-button>
            <grid-config-slider
              _name="Element size"
              :_value="itemSize"
              @GSchange="
                (e: InputEvent) => {
                  const target = e.target as HTMLInputElement;
                  itemSize = e != null ? target.value : '0';
                  handleSlider();
                }
              "
            >
            </grid-config-slider>
            <grid-config-slider
              _name="Gap size"
              :_value="gapSize"
              @GSchange="
                (e: InputEvent) => {
                  const target = e.target as HTMLInputElement;
                  gapSize = e != null ? target.value : '0';
                  _cssProps.gap = gapSize;
                }
              "
            >
            </grid-config-slider>
          </grid-button-window>
        </div>

        <div class="code-listing-wrapper">
          <code-listing :cssProps="_cssProps"> </code-listing>
        </div>

        <grid :cssProps="_cssProps">
          <div
            v-for="element in elements"
            :key="element.id"
            :class="element.class + ' element'"
            :style="element.style"
          >
            <span>{{ element.id }}</span>
          </div>
        </grid>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Grid from "../components/Grid.vue";
import GridConfigButton from "../components/UI/GridButton.vue";
import CodeListing from "../components/CodeListing.vue";
import GridConfigSlider from "../components/GridConfigSlider.vue";
import GridButtonWindow from "../components/GridButtonWindow.vue";
import { CSSProperties, ref } from "vue";
import { subtractWithSaturation8bit } from "../utils";
import { colors } from "../static/GridElements";

type GeneratedElement = {
  id: number;
  class: string;
  style: CSSProperties;
};

const numberOfElements = 20;

const itemSize = ref<string>("100");
const gapSize = ref<string>("10");

let colorsArray: Array<Array<number>> = [];

const _cssProps = ref<CSSProperties>({
  gridAutoFlow: "dense",
  gridTemplateColumns: itemSize.value,
  gridAutoRows: itemSize.value,
  gap: gapSize.value,
});

const allAspects = ref<ElementAspect[]>([
  { id: 1, aspect: "aspect_1_to_2", selected: true },
  { id: 2, aspect: "aspect_2_to_1", selected: true },
  { id: 3, aspect: "aspect_1_to_1", selected: true },
  { id: 4, aspect: "aspect_3_to_1", selected: true },
  { id: 5, aspect: "aspect_1_to_3", selected: true },
]);

const elements = ref<GeneratedElement[]>(getGeneratedElements());

type ElementAspect = { id: number; aspect: string; selected: boolean };

function handleSlider() {
  _cssProps.value.gridTemplateColumns = itemSize.value;
  _cssProps.value.gridAutoRows = itemSize.value;
}

function checkAspect(id: number) {
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
    return allAspects.value[0].aspect;
  }

  const randomIndex = Math.floor(Math.random() * activeAspects.length);
  return activeAspects[randomIndex].aspect;
}

function getGeneratedElements(): GeneratedElement[] {
  colorsArray = [];
  for (let i = 0; i < numberOfElements; i++) {
    colorsArray.push(getRandomColor());
  }

  return Array.from({ length: numberOfElements }, (_, index) => ({
    id: index,
    class: getRandomAspect() + " element",
    style: {
      backgroundColor: "rgb(" + colorsArray[index].join(", ") + ")",
      borderColor:
        "rgb(" +
        subtractWithSaturation8bit(60, colorsArray[index][0]).toString() +
        ", " +
        subtractWithSaturation8bit(60, colorsArray[index][1]).toString() +
        ", " +
        subtractWithSaturation8bit(60, colorsArray[index][2]).toString() +
        ")",
      textAlign: "center",
      alignContent: "center",
      fontSize: "2rem",
      color: "black",
      overflow: "hidden",
    },
  }));
}
</script>

<style scoped>
* {
  box-sizing: content-box;
}

body {
  --element-size: 100px;
}

.page-content > div > div {
  margin-top: 25px;
}

.page-wrapper {
  position: absolute;
  top: 0px;
  z-index: -1;
  padding-top: 10px;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: inherit;
}

.page-content {
  padding-top: 2em;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: inherit;
  align-items: center;
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

:deep() .code-listing-wrapper {
  width: 100%;
  padding: 2em;
  background-color: rgb(0, 60, 55);
  border: 2px solid black;
  border-radius: 15px;
  box-sizing: border-box;
}

:deep() .code-listing {
  width: 100%;
  font-size: 1.2rem;
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
