<template>
  <div class="main-container">
    <p>Recursive Component Generation Test</p>

    <div class="input-container">
      <input
        type="number"
        v-model.number="maxDepthInput"
        placeholder="Amount of components"
        min="0"
      />
      <button @click="setMaxDepth">Generate Components</button>
    </div>

    <RecursiveComponent
      v-if="maxDepth > 0"
      message="This component was created recursively. It's depth is"
      :depth = "1"
      :maxDepth="maxDepth">
    </RecursiveComponent>
  </div>
  <div class="gradient"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RecursiveComponent from "../components/UI/RecursiveComponent.vue";
const maxDepthInput = ref<number | null>(null);
const maxDepth = ref<number>(0);

function setMaxDepth(){
  if(maxDepthInput.value && maxDepthInput.value > 0){
    maxDepth.value = maxDepthInput.value;
  }
}
</script>

<style scoped>
div.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5em auto;
  width: 60%;
}

p {
  text-align: center;
  font-size: 2.2em;
  margin-bottom: 1em;
}

.input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin-top: 1em;
  padding: 0.5em;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

input[type="number"] {
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 220px;
  text-align: center;
}

button {
  padding: 0.5em 1em;
  font-size: 1em;
  border: none;
  border-radius: 4px;
  background-color: #41b783;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #369e6d;
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
