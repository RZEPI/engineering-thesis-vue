<template>
  <div class="code-listing">
    &#123;
    <br />
    <span
      :style="{
        paddingLeft: '2em',
      }"
    >
      grid-auto-flow: {{ cssProps.gridAutoFlow }};
    </span>
    <br />
    <span
      :style="{
        paddingLeft: '2em',
      }"
    >
      grid-template-columns: {{ cssProps.gridTemplateColumns }};
    </span>
    <br />
    <span
      :style="{
        paddingLeft: '2em',
      }"
    >
      grid-auto-rows: {{ cssProps.gridAutoRows }};
    </span>
    <br />
    <span
      :style="{
        paddingLeft: '2em',
      }"
    >
      gap: {{ cssProps.gap }};</span
    >
    <br />
    &#125;
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";

defineProps<{ cssProps: CSSProperties }>();
</script>

<style lang="css" scoped></style>
