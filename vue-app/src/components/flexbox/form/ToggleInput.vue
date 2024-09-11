<template>
        <h3>{{inputHeader}}</h3>
        <div>
            <label>{{ choices[0] }}</label>
            <toggle-switch :input-name="inputName" @toggle-func="handleChange"></toggle-switch>
            <label>{{ choices[1] }}</label>
        </div>
</template>

<script setup lang="ts">
import ToggleSwitch from '../../UI/ToggleSwitch.vue';
import { ToggleInputProps } from '../../../models/flexbox-generator/ToggleInputProps';

const props = defineProps<ToggleInputProps>();
const emit = defineEmits(['toggleFunc']);
const inputName = props.inputHeader.toLowerCase().replace(" ", "-");

function handleChange()
{
    emit('toggleFunc');
}
</script>

<style scoped>
h3
{
    width: 100%;
    margin:1em 0 0 0;
    font-size:2em;
    text-align: center;
}

div
{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    font-size: var(--label-font-size);
    justify-items: center;
    margin: 1em;
}
</style>