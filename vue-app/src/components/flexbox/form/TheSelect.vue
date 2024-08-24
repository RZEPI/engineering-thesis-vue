<template>
    <div>
        <label :for="selectName">{{ selectHeader }}</label>
        <select :name="selectName" :id="selectName" @change="handleSelection">
            <option v-for="optionItem in optionList" :value="optionItem">{{ optionItem }}</option>
        </select>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { TheSelectProps } from '../../../models/flexbox-generator/TheSelectProps';

defineProps<TheSelectProps>();
const emit = defineEmits<{
    onChange: [chosenOption:string],
    }>();

function handleSelection(event:Event)
{
    const element = event.target as HTMLInputElement;
    emit('onChange', element.value as string);
}

</script>

<style scoped>

</style>