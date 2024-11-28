<template>
    <div class="recursive-component">
        <p>{{ props.message }} {{ props.depth }}</p>
        <RecursiveComponent
        v-if="props.depth < props.maxDepth"
        :message = "props.message"
        :depth = "props.depth + 1"
        :maxDepth = "props.maxDepth"
        />
    </div>
</template>

<script setup lang="ts">
import type { RecursiveProps } from "../../models/RecursiveProps"
import { defineProps} from "vue";
import RecursiveComponent from "./RecursiveComponent.vue"
const props = defineProps<RecursiveProps>();
</script>

<style scoped>
.recursive-component {
  text-align: center;
  font-size: 30px;
}
</style>