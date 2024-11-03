<template>
    <li class="numeric-input">
        <label :for="className">{{label}}</label>
        <input type="number" :class="className" :id="className" :value="value" @change="handleNumberInputChange" />
    </li>
</template>

<script setup lang="ts">
import { NumericFilterInputProps } from '../../models/table/NumericFilterInputProps';

const {className, value} = defineProps<NumericFilterInputProps>();
const emit = defineEmits(['updateFilter']);
function handleNumberInputChange(e: Event)
{
    emit('updateFilter', e);
}

const label = `${className.charAt(0).toUpperCase()}${className.substring(1)}:`;
</script>

<style scoped>
.numeric-input{
    display: grid;
    grid-template-columns: 1fr 2fr;
}
.numeric-input input{
    width: 60%;
    font-size: 1.5em;
    padding: 0.3em;
    border-radius: 0.4em;
}

label {
    font-size: 1.5em;
}
</style>