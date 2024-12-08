<template>
  <li class="header">{{ headerLabel }}</li>
  <numeric-filter-input
    className="min"
    :value="currentFilter.min"
    @updateFilter="handleNumericInputChange"
    :key="`min_${activeTab}`"
  ></numeric-filter-input>
  <numeric-filter-input
    className="max"
    :value="currentFilter.max"
    @updateFilter="handleNumericInputChange"
    :key="`max_${activeTab}`"
  ></numeric-filter-input>
  <li :key="`interval_${activeTab}`">
    <label for="open-interval">Open interval</label>
    <input
      type="checkbox"
      class="open-interval"
      id="open-interval"
      :checked="currentFilter.isOpen"
      @change="handleIsOpenChange"
    />
  </li>
</template>

<script setup lang="ts">
import NumericFilterInput from "./NumericFilterInput.vue";
import { NumericFilterTabProps } from "../../models/table/NumericFilterTabProps";
const { currentFilter, activeTab } = defineProps<NumericFilterTabProps>();

const emit = defineEmits(["updateFilter", "updateFilterInterval"]);

function handleNumericInputChange(e: Event) {
  emit("updateFilter", e);
}
function handleIsOpenChange(e: Event) {
  emit("updateFilterInterval", e);
}
const headerLabel =
  activeTab.charAt(0).toUpperCase() + activeTab.slice(1) + " range";
</script>
<style scoped>
label {
  font-size: 1.5em;
}

input[type="checkbox"] {
  width: 1.5em;
  height: 1.5em;
}
.header {
  font-size: 1.7em;
  margin-top: -1em;
  text-align: center;
}

.open-interval {
  margin-left: 4em;
}
</style>
