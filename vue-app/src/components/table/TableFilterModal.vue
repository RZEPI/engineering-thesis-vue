<template>
    <base-modal title="Table Filter" ref="dialog">
        <ul class="tabs">
            <li v-for="tab in tabs" :key="tab" @click="() => handleTabClick(tab)" :class="{ active: tab == activeTab }">
                {{ tab.toUpperCase() }}
            </li>
        </ul>
        <div class="filter-choice">
            <ul class="filter-form">
                <string-filter-input v-if="activeTab === 'name'" v-for="nameFilter in filter.name" :key="nameFilter.value"
                    :className="nameFilter.value" :filterValue="nameFilter"
                    @update-filter="handleNameCheckboxChange"></string-filter-input>
                <numeric-filter-tab v-else :currentFilter="currentFilter" :activeTab="activeTab"
                    @update-filter="handleNumericInputChange"
                    @update-filter-interval="handleIsOpenChange" :key="activeTab"></numeric-filter-tab>
            </ul>
        </div>
        <div class="clear-filter__container">
            <button class="clear-filter__button" @click="handleClearFilter">Clear filter</button>
        </div>
    </base-modal>
</template>

<script setup lang="ts">
import { TableFilterModalProps } from '../../models/table/TableFilterModalProps';
import StringFilterInput from './StringFilterInput.vue';
import NumericFilterTab from './NumericFilterTab.vue';
import BaseModal from '../UI/BaseModal.vue';
import { ref, watchEffect } from 'vue';
import { IntFilter } from '../../models/table/TableFilter';
import { makeDefaultFilter } from '../../static/RandomDataTables';

const { filter } = defineProps<TableFilterModalProps>();
const emit = defineEmits(['updateFilter']);
const tabs = Object.keys(filter);
const activeTab = ref<string>(tabs[0]);
const dialog = ref<InstanceType<typeof BaseModal>>();
let currentFilter = ref<IntFilter>(filter.id);
watchEffect(() => {
    if (activeTab.value === 'id') {
        currentFilter.value = filter.id;
    }
    else {
        currentFilter.value = filter.level;
    }
});

function handleClearFilter() {
    dialog.value?.closeModal();
    emit('updateFilter', {...makeDefaultFilter()});
}

function handleTabClick(tab: string) {
    activeTab.value = tab;
}

function handleNameCheckboxChange(e: Event) {
    const name = (e.target as HTMLInputElement).value;
    const changedName = filter.name.find((n) => n.value === name)!;
    changedName.isChecked = !changedName.isChecked;
    emit('updateFilter', filter);
}

function handleNumericInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = parseInt(target.value);
    if (target.id === "min") currentFilter.value.min = value;
    else currentFilter.value.max = value;
    emit('updateFilter', filter);
}

function handleIsOpenChange(e: Event) {
    const target = e.target as HTMLInputElement;
    currentFilter.value.isOpen = target.checked;
    emit('updateFilter', filter);
}

defineExpose({
    openModal: () => dialog.value?.openModal(),
    closeModal: () => dialog.value?.closeModal()
});

</script>
<style scoped>
.tabs {
    display: flex;
    list-style-type: none;
    margin-bottom: 0;
    padding: 0;
}

.tabs li {
    height: 1em;
    width: 3em;
    text-align: center;
    margin-right: 0.9em;
    cursor: pointer;
    padding: 0.5em 1em;
    background-color: var(--main-color);
    filter: brightness(0.9);
    border-radius: 0.6em 0.6em 0 0;
}

.tabs li.active {
    filter: brightness(1);
}

.filter-choice {
    width: calc(var(--modal-width)- 2 * var(--modal-content-padding));
    height: calc(var(--modal-height) * (7/9) - 2 * var(--modal-content-padding) - 1em);
    background-color: var(--main-color);
    margin: 0;
    border-radius: 0 0.6em 0.6em 0.6em;
}

.filter-choice p {
    margin: 0;
}
.clear-filter__container
{
    display: flex;
    justify-content: center;
    align-items: center;
}
.clear-filter__button
{
    font-size: 1.7em;
    width: 7.5em;
    height: 2em;
    background-color: var(--main-color);
    color: var(--main-text-color);
    border: none;
    border-radius: 0.6em;
    margin: 0.4em 0;
    cursor: pointer;
}
.clear-filter__button:hover
{
    filter: brightness(0.9);
}

.filter-form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.filter-form li {
    width: 50%;
    margin: 0.5em 0;
}

</style>