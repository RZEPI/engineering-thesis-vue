<template>
        <div>
            <h3>{{inputHeader}}</h3>
            <label>{{ choices[0] }}</label>
            <toggle-switch :input-name="inputName" @toggle-func="handleChange"></toggle-switch>
            <label>{{ choices[1] }}</label>
        </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
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