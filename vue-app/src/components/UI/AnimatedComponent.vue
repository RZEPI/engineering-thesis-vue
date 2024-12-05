<template>
  <div class="component" :class="{ right: isRight }">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  isRight: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.component {
  margin: 0.7em;
  padding: 1.5em;
  background-color: var(--main-color);
  color: var(--main-text-color);
  border-radius: 1em;
  text-align: center;
  width: 10vw;
  transform: translateX(0);
  transition: transform 0.5s;
}

.component.right {
  transform: translateX(85vw);
}

.move-enter-from {
  transform: translateX(-85vw);
}

.move-enter-to,
.move-leave-from {
  transform: translateX(0);
}

.move-leave-to {
  transform: translateX(85vw);
}

.move-enter-active,
.move-leave-active {
  transition: transform 0.5s;
}
</style>
