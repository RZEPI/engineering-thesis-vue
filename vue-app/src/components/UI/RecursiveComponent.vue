<template>
  <div class="recursive-component">
    <p>{{ message }} {{ currentDepth }}</p>
    <RecursiveComponent
      v-if="currentDepth < maxDepth"
      :message="message"
      :maxDepth="maxDepth"
      :currentDepth="currentDepth + 1"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecursiveComponent",
  props: {
    message: {
      type: String,
      required: true,
    },
    maxDepth: {
      type: Number,
      required: true,
    },
    currentDepth: {
      type: Number,
      default: 1,
    },
  },
  components: {
    RecursiveComponent: () => import('./RecursiveComponent.vue'), // Lazy-load
  },
});
</script>

<style scoped>
.recursive-component {
  text-align: center;
  font-size: 1.05em;
}
</style>
