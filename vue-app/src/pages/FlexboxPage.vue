<template>
  <base-layout title="Flexbox Generator">
    <div class="main-container">
      <flexbox-preview></flexbox-preview>
      <flexbox-form></flexbox-form>
    </div>
    <code-listing></code-listing>
  </base-layout>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import BaseLayout from "../components/UI/BaseLayout.vue";
import FlexboxForm from "../components/flexbox/form/FlexboxForm.vue";
import CodeListing from "../components/flexbox/CodeListing.vue";
import LoadingFallback from "../components/UI/LoadingFallback.vue";

const FlexboxPreview = defineAsyncComponent({
  loader: () =>
    import("../components/flexbox/FlexboxPreview.vue"),
    loadingComponent: LoadingFallback,
    delay: 0,
}
);
</script>

<style scoped>
.main-container {
  --flex-element-size: 6em;
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
