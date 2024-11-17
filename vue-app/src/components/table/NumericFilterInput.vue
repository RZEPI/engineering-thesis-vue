<template>
    <li class="numeric-input">
        <label :for="className">{{label}}</label>
        <input type="number" :class="[className, {errorInput: error.length != 0}]" :id="className" :value="value" @change="handleNumberInputChange" />
        <span class="error" v-if="error">{{error}}</span>
    </li>
</template>

<script setup lang="ts">
import { NumericFilterInputProps } from '../../models/table/NumericFilterInputProps';
import {ref} from 'vue';
const error = ref<string>('');
const {className, value} = defineProps<NumericFilterInputProps>();
const emit = defineEmits(['updateFilter']);
function handleNumberInputChange(e: Event)
{
    try{
        const target = e.target as HTMLInputElement;
        if(target.value.length === 0){
            error.value = '';
            emit('updateFilter', e);
            return;
        }
        const value = parseInt(target.value);
        if(isNaN(value)){
            error.value = 'Invalid input type';
            return;
        }
        error.value = '';
        emit('updateFilter', e);
    }catch(e){
        error.value = 'Invalid input type';
        return;
    }
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
.numeric-input .error{
    grid-column: 1 / span 2;
    text-align: center;
    color: red;
    font-size: 1.2em;
}
.numeric-input .error-input{
    border: 3px solid red;
}

label {
    font-size: 1.5em;
}
</style>