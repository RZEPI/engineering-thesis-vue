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
          <code-listing cssProps=""> </code-listing>
        </div>

        <grid>
          <div
            v-for="(_, index) in elements"
            :key="index"
            :class="getRandomAspect() + ' element'"
          >
            <!-- style={{
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
         -->
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
import { ref } from "vue";
import { subtractWithSaturation8bit } from "../utils";
import { colors } from "../static/GridElements";

let colorsArray: Array<Array<number>> = [];

const elements = ref<Array<number>>(getGeneratedElements());
const numberOfElements = 20;

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[randomIndex];
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
// .map((_, index) => (
//     <div
//       :key={index}
//       className={`${styles["element"]} ${getRandomAspect()}`}
//       style={{
//         backgroundColor: "rgb(" + colorsArray[index].join(", ") + ")",
//         borderColor:
//           "rgb(" +
//           subtractWithSaturation8bit(60, colorsArray[index][0]).toString() +
//           ", " +
//           subtractWithSaturation8bit(60, colorsArray[index][1]).toString() +
//           ", " +
//           subtractWithSaturation8bit(60, colorsArray[index][2]).toString() +
//           ")",
//         textAlign: "center",
//         alignContent: "center",
//         fontSize: "2rem",
//         color: "black",
//         overflow: "hidden",
//       }}
//     >
//       <span>{index}</span>
//     </div>
//   ));
// }
</script>

<style scoped>
@import "../styles/shared.css";
.element {
  box-sizing: border-box;
  border: 4px solid;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  display: block;
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
