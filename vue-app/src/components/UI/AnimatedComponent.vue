<template>
  <div class="component" :class="{ right: isRight }">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  isRight: {
    type: Boolean,
    required: true
  }
});
</script>

<style scoped>
.component {
  margin: 10px 0;
  padding: 20px;
  background-color: #42b983;
  color: white;
  border-radius: 8px;
  text-align: center;
  width: 150px;
  transform: translateX(0);
  transition: transform 0.5s;
}

.component.right {
  transform: translateX(1200px); 
}

.move-enter-from {
  transform: translateX(-1200px);
}

.move-enter-to, .move-leave-from {
  transform: translateX(0);
}

.move-leave-to {
  transform: translateX(1200px);
}

.move-enter-active,
.move-leave-active {
  transition: transform 0.5s;
}
</style>
