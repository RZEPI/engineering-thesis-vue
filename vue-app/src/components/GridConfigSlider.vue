<template>
  <label>{{ _name }}</label>
  <input
    type="range"
    min="1"
    max="300"
    name="{{_name}}"
    :value="_value"
    @input="emit('GSchange', $event)"
  />
</template>

<script setup lang="ts">
defineProps<{
  _value: string | number | undefined;
  _name: string;
}>();

const emit = defineEmits(["GSchange"]);
</script>
