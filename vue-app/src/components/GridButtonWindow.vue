<template>
  <span>{{ title }}</span>
  <div>Grid button window</div>
  <slot></slot>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
