<template>
    <div class="recursive-component">
        <p>{{ props.message }} {{ props.depth }}</p>
        <Recursive
        v-if="props.depth < props.maxDepth"
        :message = "props.message"
        :depth = "props.depth + 1"
        :maxDepth = "props.maxDepth"
        />
    </div>
</template>

<script setup lang="ts">
import type { RecursiveProps } from "../../models/RecursiveProps"
import { defineProps, defineComponent } from "vue";
import Recursive from "./Recursive.vue"
const props = defineProps<RecursiveProps>();
defineComponent({
    components: {
      Recursive,
    },
  });
</script>

<style scoped>
.recursive-component {
  text-align: center;
  font-size: 1.05em;
}
</style>