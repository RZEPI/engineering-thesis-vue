<template>
  <div class="main-container">
    <feature-description :site="sites[siteIdx]" :isFirst="isFirst" :isLast="isLast" @next="handleNext" @previous="handlePrevious"/>
    <div class="gradient"></div>
  </div>
</template>

<script setup lang="ts">
import FeatureDescription from "../components/UI/FeatureDescription.vue";
import {sites} from "../static/sites";
import {ref, computed} from "vue";
const siteIdx = ref(0);
const isFirst = computed(() => siteIdx.value === 0);
const isLast = computed(() => siteIdx.value === sites.length - 1);

function handleNext() {
  if (isLast.value) return;
  siteIdx.value++;
}
function handlePrevious() {
  if (isFirst.value) return;
  siteIdx.value--;
}

</script>

<style scoped>
div.main-container {
  display: inherit;
  margin: 10em auto;
  width: 60%;
}
p {
  text-align: center;
  font-size: 2.2em;
}
.gradient {
  margin-top: -50px;
  margin-left: -5%;
  height: 100px;
  width: 110%;
  position: relative;
  background: rgba(0, 0, 0, 0);
  background: radial-gradient(
    closest-side at 50% 30%,
    rgba(115, 84, 107, 0) 0%,
    rgba(114, 87, 108, 0) 0%,
    rgba(65, 183, 131, 0.2) 0%,
    rgba(65, 183, 131, 0) 100%
  );
}
</style>
