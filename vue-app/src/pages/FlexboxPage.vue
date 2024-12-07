<template>
  <base-layout title="Flexbox Testing">
    <div class="main-container">
      <flexbox-preview></flexbox-preview>
      <flexbox-form></flexbox-form>
    </div>
    <code-listing :css-props="flexClasses"></code-listing>
  </base-layout>
</template>

<script setup lang="ts">
import { computed, CSSProperties, defineAsyncComponent } from "vue";
import BaseLayout from "../components/UI/BaseLayout.vue";
import FlexboxForm from "../components/flexbox/form/FlexboxForm.vue";
import CodeListing from "../components/CodeListing.vue";
import LoadingFallback from "../components/UI/LoadingFallback.vue";
import { useStore as useFlexboxStore } from "../store/flexbox";

const store = useFlexboxStore();
const flexClasses = computed<CSSProperties>(() => store.getters.getStyleObject);

const FlexboxPreview = defineAsyncComponent({
  loader: () => import("../components/flexbox/FlexboxPreview.vue"),
  loadingComponent: LoadingFallback,
  delay: 0,
});
</script>

<style scoped>
.main-container {
  --flex-element-size: 0.4em;
  display: grid;
  grid-template-areas:
    "preview preview form"
    "preview preview form"
    "preview preview form"
    "listing listing listing";
  margin: 1em;
  width: 60vw;
  height: 50vh;
}

@media (max-height: 1300px) {
  .main-container {
    height: 70vh;
  }
}
</style>
