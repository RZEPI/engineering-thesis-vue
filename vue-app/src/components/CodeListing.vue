<template>
  <div class="code-listing__container">
    &#123;
    <div v-for="entry in parsedEntries" :key="entry.propertyKey">
      <span class="property">&emsp;&emsp;{{ entry.propertyKey }}:</span>
      <span class="value">&nbsp;&nbsp;{{ entry.propertyValue }}</span
      >;
    </div>
    &#125;
  </div>
</template>

<script setup lang="ts">
import { computed, CSSProperties } from "vue";
import { parseCssEntries } from "../util/utils";
const props = defineProps<{ cssProps: CSSProperties }>();
const parsedEntries = computed<
  { propertyKey: string; propertyValue: string }[]
>(() => parseCssEntries(props.cssProps as CSSProperties));
</script>

<style lang="css" scoped></style>
