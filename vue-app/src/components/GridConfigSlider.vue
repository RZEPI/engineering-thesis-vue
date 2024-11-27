<template>
  <label>{{ name }}</label>
  <input
    type="range"
    min="1"
    max="300"
    name="{{_name}}"
    :value="value"
    @input="emit('change', $event)"
  />
</template>

<script setup lang="ts">
defineProps<{
  value: string | number | undefined;
  name: string;
}>();

const emit = defineEmits(["change"]);
</script>
