<template>
    <form class="configuration-form">
        <toggle-input input-header="Direction" :choices="['Row', 'Column']" @toggle-func="toggleDirection"></toggle-input>
        <toggle-input input-header="Wrapping" :choices="['Nowrap', 'Wrap']" @toggle-func="toggleWrapping"></toggle-input>
        <the-select select-header="Justify content" select-name="justify-content" :option-list="justifyContentOptionsList" @on-change="selectJustifyContentHandler"></the-select>
        <the-select select-header="Align items" select-name="align-items" :option-list="alignItemsOptionsList" @on-change="selectAlignItemsHandler"></the-select>
    </form>
</template>
<script setup lang="ts">
import {inject} from 'vue';
import ToggleInput from './ToggleInput.vue';
import TheSelect from './TheSelect.vue';
import { FlexClasses } from '../../../models/flexbox-generator/FlexClasses';
import { JustifyContentOptions } from '../../../models/flexbox-generator/JustifyContentOptions';
import { AlignItemsOptions } from '../../../models/flexbox-generator/AlignItemsOptions';

const justifyContentOptionsList = Object.values(JustifyContentOptions).filter((value) => isNaN(Number(value)));
const alignItemsOptionsList = Object.values(AlignItemsOptions).filter((key)=> isNaN(Number(key)));
const flexData = inject<FlexClasses>('flexClasses')!;

function toggleDirection():void
{
    flexData.toggleDirection()
}

function toggleWrapping() : void
{
    flexData.toggleWrapping();
}

function selectHanlder<T>(chosenOption:string, optionsList: T[]):T
{
    const parsedOption = optionsList.find(value => value === chosenOption);
    return parsedOption || optionsList[0];
}

function selectAlignItemsHandler(chosenOption:string)
{
    flexData.alignItems = selectHanlder<AlignItemsOptions>(chosenOption, alignItemsOptionsList);
}
function selectJustifyContentHandler(chosenOption: string)
{
    flexData.justifyContent = selectHanlder<JustifyContentOptions>(chosenOption, justifyContentOptionsList);
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