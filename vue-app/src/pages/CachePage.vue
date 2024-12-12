<template>
  <BaseLayout title="Cache">
    <div class="row-container">
      <div class="left-panel">
        <h2>Pi Calculation</h2>
        <p>
          We are calculating the value of <b>π</b> using the Monte Carlo method
          with <b>{{ iterations }}</b> million iterations:
        </p>
        <ol>
          <li>Generate random points (x, y) within a square from -1 to 1.</li>
          <li>
            Count how many points fall within the unit circle (x² + y² ≤ 1).
          </li>
          <li>
            Calculate Pi using the formula: Pi = 4 * (points inside the circle)
            / (total points).
          </li>
        </ol>
      </div>

      <div class="right-panel">
        <div class="cache-control">
          <h3>Iterations (in millions):</h3>
          <input v-model="inputIterations" type="number" :min="1" />
          <button @click="handleCalculate">Calculate</button>
          <button @click="handleClear">Clear</button>
        </div>
        <div class="cache-control">
          <h3>Result:</h3>
          <p v-if="result !== null">Calculated value of π: {{ result }}</p>
          <p v-else>Click "Calculate" to see the result.</p>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import BaseLayout from "../components/UI/BaseLayout.vue";

const calculate = ref(false);
const result = ref<number | null>(null);
const iterations = ref(100);
const inputIterations = ref(100);

const memoizedResult = computed(() => {
  return calculatePi(iterations.value * 1000000);
});

function calculatePi(iterations: number) {
  let insideCircle = 0;
  for (let i = 0; i < iterations; i++) {
    const x = Math.random() * 2 - 1;
    const y = Math.random() * 2 - 1;

    if (x * x + y * y <= 1) {
      insideCircle++;
    }
  }
  return (insideCircle / iterations) * 4;
}

function handleCalculate() {
  calculate.value = true;
  iterations.value = inputIterations.value;
  result.value = memoizedResult.value;
}

function handleClear() {
  calculate.value = false;
  result.value = null;
}
</script>

<style scoped>
.row-container {
  display: flex;
  flex-direction: row;
}

.left-panel {
  flex: 2;
  padding: 0.7em;
  border-right: 1px solid var(--main-color);
}

.right-panel {
  flex: 1;
  padding: 0.7em;
  margin-left: 3vw;
}

.cache-control input {
  width: 5vw;
  margin-right: 1vw;
  padding: 0.3em;
  font-size: 1em;
  color: var(--main-text-color);
  background-color: var(--main-background-color);
  border-radius: 0.5em;
}

.cache-control button {
  margin-right: 0.5vw;
  padding: 0.7em;
  font-size: 1em;
  border-radius: 1em;
  background-color: var(--main-color);
  color: var(--main-text-color);
}
.cache-control button:hover {
  background-color: var(--hover-element-color);
}

.cache-control h2,
h3 {
  font-size: 1.5em;
  color: var(--main-text-color);
}

.cache-control p {
  font-size: 1.2em;
  color: var(--main-text-color);
}
</style>
