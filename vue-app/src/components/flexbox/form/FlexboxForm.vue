<template>
    <form class="configuration-form">
        <toggle-input input-header="Direction" :choices="['Row', 'Column']" @toggle-func="toggleDirection"></toggle-input>
        <toggle-input input-header="Wrapping" :choices="['Nowrap', 'Wrap']" @toggle-func="toggleWrapping"></toggle-input>
        <the-select select-header="Justify content" select-name="justify-content" :option-list="justifyContentOptionsList" @on-change="selectJustifyContentHandler"></the-select>
        <the-select select-header="Align items" select-name="align-items" :option-list="alignItemsOptionsList" @on-change="selectAlignItemsHandler"></the-select>
        <button type="button" @click="addContainer">Add container</button>
    </form>

</template>
<script setup lang="ts">
import { useStore as useFlexboxStore } from '../../../store/flexbox';
import { ActionTypes } from '../../../store/flexbox/actions';
import ToggleInput from './ToggleInput.vue';
import TheSelect from './TheSelect.vue';
import { JustifyContentOptions } from '../../../models/flexbox-generator/JustifyContentOptions';
import { AlignItemsOptions } from '../../../models/flexbox-generator/AlignItemsOptions';

const justifyContentOptionsList = Object.values(JustifyContentOptions).filter((value) => isNaN(Number(value)));
const alignItemsOptionsList = Object.values(AlignItemsOptions).filter((key)=> isNaN(Number(key)));

const store = useFlexboxStore();

function toggleDirection():void
{
    store.dispatch(ActionTypes.TOGGLE_OPTION, "direction")
}

function toggleWrapping() : void
{
    store.dispatch(ActionTypes.TOGGLE_OPTION, "wrap")
}

function selectHanlder<T>(chosenOption:string, actionType:ActionTypes,  optionsList: T[]) : void
{
    const parsedOption = optionsList.find(value => value === chosenOption);
    store.dispatch(actionType, parsedOption);
}

function selectAlignItemsHandler(chosenOption:string)
{
   selectHanlder<AlignItemsOptions>(chosenOption, ActionTypes.SET_ALIGN_ITEMS, alignItemsOptionsList);
}
function selectJustifyContentHandler(chosenOption: string)
{
    selectHanlder<JustifyContentOptions>(chosenOption, ActionTypes.SET_JUSTIFY_CONTENT, justifyContentOptionsList);
}
function addContainer(){
    store.dispatch(ActionTypes.ADD_ELEMENT);
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
button
{
    width: 80%;
    margin: 3em;
    background-color: var(--main-color);
    font-size: var(--label-font-size);
    border-radius: 1em;
    padding: 0.8em;
}
</style>