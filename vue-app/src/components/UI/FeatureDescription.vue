<template>
  <div class="container">
    <h1>{{ site.label }}</h1>
    <div class="site-description">
      <button :class="{ inactive: isFirst }" @click="onPreviousClick">
        &lt;
      </button>
      <p>
        {{ site.description }}
      </p>
      <button :class="{ inactive: isLast }" @click="onNextClick">&gt;</button>
    </div>
    <div class="goto-button__container">
      <router-link :to="site.link" v-if="!isFirst"> Go </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FeatureDescriptionProps } from "../../models/FeatureDescriptionProps";

const { site, isFirst, isLast } = defineProps<FeatureDescriptionProps>();
const emit = defineEmits(["next", "previous"]);
function onPreviousClick() {
  emit("previous");
}
function onNextClick() {
  emit("next");
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 30vh;
  border: 1px solid black;
  border-radius: 1em;
  margin: 1em;
  margin-bottom: 3em;
  background-color: var(--main-background-color-lighter);
}
.container h1 {
  margin-bottom: auto;
  text-align: center;
  font-size: 2.6em;
  margin-top: 0.6em;
}

.goto-button__container {
  width: 100%;
  height: 6vh;
  display: flex;
}
.goto-button__container a {
  margin-left: auto;
  margin-right: 4em;
  margin-bottom: auto;
  padding: 0.4em 2em;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
  border-radius: 0.7em;
  background-color: var(--main-color);
  color: var(--main-text-color);
}
.goto-button__container a:hover {
  background-color: var(--hover-element-color);
}

.site-description {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
}
.site-description button {
  width: 30%;
  height: 70%;
  font-size: 2em;
  background-color: var(--main-color);
  color: var(--main-text-color);
  border: none;
  border-radius: 0 0.5em 0.5em 0;
  padding: 0.5em;
  cursor: pointer;
}
.site-description button:hover {
  background-color: var(--hover-element-color);
}
.site-description button:last-child {
  margin-left: auto;
  border-radius: 0.5em 0 0 0.5em;
}
.site-description p {
  text-align: center;
  font-size: 1.6em;
}
.inactive {
  background-color: var(--main-background-color-lighter) !important;
  border: 1px solid black !important;
  border-left: 0px !important;
  color: #e2e2e2 !important;
  cursor: not-allowed !important;
}
.inactive:last-child {
  border-left: 1px solid black !important;
  border-right: 0px !important;
}
@media (max-height: 800px) {
  .container {
    margin-top: 0;
    height: 60vh;
  }

  .goto-button__container a {
    margin-top: -1.4em;
    font-size: 1.6em;
    padding: 0.3em 1.2em;
  }
}
</style>
