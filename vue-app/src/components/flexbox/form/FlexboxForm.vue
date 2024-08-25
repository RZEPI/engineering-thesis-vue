<template>
    <form class="configuration-form">
        <toggle-input input-header="Direction" :choices="['Row', 'Column']" @toggle-func="flexData.toggleDirection"></toggle-input>
        <toggle-input input-header="Wrapping" :choices="['Nowrap', 'Wrap']" @toggle-func="flexData.toggleWrapping"></toggle-input>
        <the-select select-header="Justify content" select-name="justify-content" :option-list="justifyContentOptionsList" @on-change="selectJustifyContentHandler"></the-select>
        <the-select select-header="Align items" select-name="align-items" :option-list="alignItemsOptionsList" @on-change="selectAlignItemsHandler"></the-select>
    </form>
</template>
<script setup lang="ts">
import {reactive} from 'vue';
import ToggleInput from './ToggleInput.vue';
import TheSelect from './TheSelect.vue';
import { FlexClasses } from '../../../models/flexbox-generator/FlexClasses';
import { JustifyContentOptions } from '../../../models/flexbox-generator/JustifyContentOptions';
import { AlignItemsOptions } from '../../../models/flexbox-generator/AlignItemsOptions';
const justifyContentOptionsList = Object.keys(JustifyContentOptions).filter((key) => isNaN(Number(key)));
const alignItemsOptionsList = Object.keys(AlignItemsOptions).filter((key)=> isNaN(Number(key)));
const flexData = reactive<FlexClasses>(new FlexClasses());

function selectAlignItemsHandler(chosenOption:string)
{
    const parsedOption = chosenOption as keyof typeof AlignItemsOptions;
    flexData.alignItems = AlignItemsOptions[parsedOption]; 
}
function selectJustifyContentHandler(chosenOption: string)
{
    const parsedOption = chosenOption as keyof typeof JustifyContentOptions;
    flexData.justifyContent = JustifyContentOptions[parsedOption];
}
</script>
<style scoped>
.configuration-form
{
    --label-font-size: 1.3em;
    grid-area: form;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.configuration-form div
{   
    width: 75%;
}
</style>