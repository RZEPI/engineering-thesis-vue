<template>
  <div class="code-listing__container">
    <header>
      <span>Code listing</span>
      <div @click="copyToClipboard">
        <img
          src="../assets/clipboard-outline-svgrepo-com.svg"
          alt="Clipboard sign"
        />
      </div>
    </header>
    <div class="code-listing">
      <span class="gold-bracket">{</span>
      <div v-for="entry in parsedEntries" :key="entry.propertyKey">
        <span class="property">&emsp;&emsp;{{ entry.propertyKey }}:</span>
        <span class="value">&nbsp;&nbsp;{{ entry.propertyValue }}</span
        >;
      </div>
      <span class="gold-bracket">}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, CSSProperties } from "vue";
import { parseCssEntries } from "../util/utils";
const props = defineProps<{ cssProps: CSSProperties }>();
const parsedEntries = computed<
  { propertyKey: string; propertyValue: string }[]
>(() => parseCssEntries(props.cssProps as CSSProperties));

function copyToClipboard() {
  let dataToClipboard: string;
  dataToClipboard = "{\n";
  for (const entry of parsedEntries.value) {
    dataToClipboard += `\t${entry.propertyKey}: ${entry.propertyValue};\n`;
  }
  dataToClipboard += "}";

  navigator.clipboard.writeText(dataToClipboard);
}
</script>

<style lang="css" scoped>
.code-listing__container {
  --listing-background-color: #1f1f1f;
  width: 40vw;
  border-radius: 1em;
  box-sizing: border-box;
  background-color: var(--listing-background-color);
}

header {
  margin: 0;
  overflow: hidden;
  background-color: #262626;
  width: 100%;
  height: 2.5em;
  border-radius: 1em 1em 0 0;
  display: flex;
  align-items: center;
}
header > span {
  --header-size: 1.3em;
  font-size: var(--header-size);
  margin-left: calc(5em - var(--header-size));
}

header div {
  border-left: 3px solid var(--listing-background-color);
  margin-left: auto;
  width: 3.4em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
header div:hover {
  background-color: #333333;
}

header div img {
  width: 2em;
}

.code-listing {
  font-weight: 600;
  padding: 1em 3em 1em 3em;
  font-size: 1.7em;
  list-style-type: none;
}

.gold-bracket {
  color: #c2c20e;
}

.property {
  color: #5eaae0;
}

.value {
  color: #ac7c65;
}
</style>
