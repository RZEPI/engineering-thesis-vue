<template>
  <base-layout title="Animated Components">
    <div className="animation-control">
      <label for="component-count">Number of Components: </label>
      <input
        type="number"
        id="component-count"
        v-model.number="tempComponentCount"
        @change="updateComponentCount"
      />

      <button @click="toggleMovement">Animate</button>
    </div>
    <transition-group name="move" tag="div" class="component-list">
      <AnimatedComponent
        v-for="index in componentCount"
        :key="index"
        :name="'Component ' + index"
        :isRight="isRight"
      />
    </transition-group>
  </base-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AnimatedComponent from "../components/animation/AnimatedComponent.vue";
import BaseLayout from "../components/UI/BaseLayout.vue";

const componentCount = ref(5);
const tempComponentCount = ref(componentCount.value);
const isRight = ref(false);

const toggleMovement = () => {
  isRight.value = !isRight.value;
};

const updateComponentCount = () => {
  if (tempComponentCount.value < 1) tempComponentCount.value = 1;
  componentCount.value = tempComponentCount.value;
};
</script>

<style scoped>
.component-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
}

.animation-control button {
  margin: 1em;
  color: var(--main-text-color);
  background-color: var(--main-color);
  font-size: 1em;
  border-radius: 1em;
  padding: 0.7em;
}

.animation-control button:hover {
  background-color: var(--hover-element-color);
}

.animation-control label {
  color: var(--main-text-color);
  font-size: 1.3em;
}

.animation-control input {
  color: var(--main-text-color);
  background-color: var(--main-background-color);
  border-radius: 0.5em;
  padding: 0.3em;
  font-size: 1.3em;
  width: 5vw;
}
</style>
