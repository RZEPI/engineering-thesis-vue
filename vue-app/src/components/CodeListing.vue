<template>
  <div class="code-listing__container">
    &#123;
    <div
        v-for="(propertyKey, propertyValue) in cssProps"
        :key="propertyKey">
        <span class="property">&emsp;&emsp;{{ propertyValue }}:</span>
        <span class="value">&nbsp;&nbsp;{{ propertyKey }}</span>;
    </div>
    &#125;
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";

defineProps<{ cssProps: CSSProperties }>();
</script>

<style lang="css" scoped></style>
