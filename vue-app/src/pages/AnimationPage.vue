<template>
  <div>
    <label for="component-count">Number of Components: </label>
    <input
      type="text"
      id="component-count"
      v-model.number="tempComponentCount"
      @change="updateComponentCount"
    />

    <button @click="toggleMovement">Toggle Components</button>

    <transition-group name="move" tag="div" class="component-list">
      <AnimatedComponent
        v-for="index in componentCount"
        :key="index"z
        :name="'Component ' + index"
        :isRight="isRight"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AnimatedComponent from '../components/UI/AnimatedComponent.vue';

const componentCount = ref(8);
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
}
</style>