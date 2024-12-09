<template>
  <div class="v-btn-window">
    <span class="title">{{ title }}</span>
    <div class="v-btn-cont">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
