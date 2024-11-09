<template>
  <div class="page-wrapper">
    <div class="page-content">
      <div :style="{ width: '100%', backgroundColor: 'red' }">
        <div class="windows-container">
          <grid-button-window title="Aspects"> button </grid-button-window>
          <grid-button-window title="Grid Options">
            <grid-config-button @GBClicked="console.log(elements)">
              Generate
            </grid-config-button>
            <grid-config-button> </grid-config-button>
            <grid-config-slider> </grid-config-slider>
            <grid-config-slider> </grid-config-slider>
          </grid-button-window>
        </div>

        <div class="code-listing-wrapper">
          <code-listing :cssProps="_cssProps"> </code-listing>
        </div>

        <grid :cssProps="_cssProps">
          <div
            v-for="(_, index) in elements"
            :key="index"
            :class="getRandomAspect() + ' element'"
            :style='{
              backgroundColor: "rgb(" + colorsArray[index].join(", ") + ")",
              borderColor: "rgb(" + subtractWithSaturation8bit(60, colorsArray[index][0]).toString() +
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
            }'
            >
            <span>{{ index }}</span>
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

let colorsArray: Array<Array<number>> = [];
const _cssProps = ref<CSSProperties>({
    gridAutoFlow: "dense",
    gridTemplateColumns: "100",
    gridAutoRows: "100",
    gap: "10",
})
const elements = ref<Array<number>>(getGeneratedElements());
const numberOfElements = 20;

// const selectedAspects = ref<object[]>([
//     { id: 1, aspect: "aspect_1_to_2", selected: true },
//     { id: 2, aspect: "aspect_2_to_1", selected: true },
//     { id: 3, aspect: "aspect_1_to_1", selected: true },
//     { id: 4, aspect: "aspect_3_to_1", selected: true },
//     { id: 5, aspect: "aspect_1_to_3", selected: true }
// ]);

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
function getRandomAspect() {
  // const filteredAspects = selectedAspects.filter((e) => {
  //   return e.selected == true;
  // });

  // if (filteredAspects.length == 0) {
  //   return styles[selectedAspects[0].aspect];
  // }

  // const randomIndex = Math.floor(Math.random() * filteredAspects.length);
  // return styles[filteredAspects[randomIndex].aspect];
  return "aspect_1_to_1";
}

function getGeneratedElements(): Array<number> {
  colorsArray = [];

  for (let i = 0; i < numberOfElements; i++) {
    colorsArray.push(getRandomColor());
  }

  return Array.from({ length: numberOfElements });
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

.v-btn-window {
  padding-top: 1rem;
  background-color: inherit;
  width: fit-content;
  position: relative;
  margin: 10px;
}

.v-btn-window input[type="range"] {
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  --slider-size: 25px;
}

.v-btn-window input[type="range"]::-webkit-slider-runnable-track {
  height: var(--slider-size);
  background: #e2e2e2;
  border-radius: 15px;
}

.v-btn-window input[type="range"]::-moz-range-track {
  height: var(--slider-size);
  background: #ccc;
  border-radius: 15px;
}

.v-btn-window input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: var(--slider-size);
  width: var(--slider-size);
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid var(--btn-cont-border-color);
  box-shadow: -407px 0 0 400px var(--btn-cont-border-color);
}

.v-btn-window input[type="range"]::-moz-range-thumb {
  height: var(--slider-size);
  width: var(--slider-size);
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid var(--btn-cont-border-color);
  box-shadow: -407px 0 0 400px var(--btn-cont-border-color);
}

.v-btn-window span.title {
  font-weight: bold;
  font-size: 1rem;
  padding: 0 0.2rem;
  position: absolute;
  left: 1.5rem;
  top: 0.5rem;
  background-color: var(--main-background-color);
}

.v-btn-cont {
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

.v-btn-cont button {
  font-size: 0.9rem;
  margin-bottom: 1em;
  padding: 0.4rem 1rem;
  border: 2px solid grey;
  background-color: white;
  border-radius: 10px;
}

.v-btn-cont button:last-child {
  margin-bottom: 0;
}

button:hover {
  transition: all 0.3s;
  background-color: var(--hover-element-color);
}

button:active {
  background-color: var(--active-element-color);
}

.code-listing-wrapper {
  width: 100%;
  padding: 2em;
  background-color: rgb(0, 60, 55);
  border: 2px solid black;
  border-radius: 15px;
  box-sizing: border-box;
}

.code-listing {
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