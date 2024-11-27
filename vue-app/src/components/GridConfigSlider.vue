<template>
  <label>{{ _name }}</label>
  <input
    type="range"
    min="1"
    max="300"
    name="{{_name}}"
    :value="_value"
    @input="emit('change', $event)"
  />
</template>

<script setup lang="ts">
defineProps<{
  _value: string | number | undefined;
  _name: string;
}>();

const emit = defineEmits(["change"]);
</script>
