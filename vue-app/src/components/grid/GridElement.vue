<template>
  <div :key="props.id" :class="props.aspectClass + ' element'" :style="styles">
    <span>{{ props.id }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, CSSProperties } from "vue";
import { GridElementModel } from "../../models/GridElementModel";
import { subtractWithSaturation8bit } from "../../util/utils";

const styles = computed<CSSProperties>(() => ({
  backgroundColor: "rgb(" + props.color.join(", ") + ")",
  borderColor:
    "rgb(" +
    subtractWithSaturation8bit(60, props.color[0]).toString() +
    ", " +
    subtractWithSaturation8bit(60, props.color[1]).toString() +
    ", " +
    subtractWithSaturation8bit(60, props.color[2]).toString() +
    ")",
  textAlign: "center",
  alignContent: "center",
  fontSize: "2rem",
  color: "black",
  overflow: "hidden",
}));

const props = defineProps<GridElementModel>();
</script>
