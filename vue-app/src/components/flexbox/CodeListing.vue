<template>
    <div class="code-listing__container">
        <header><span>Code listing</span> <div @click="copyToClipboard"><img src="../../assets/clipboard-outline-svgrepo-com.svg" alt="Clipboard sign"/></div></header>
        <ul class="code-listing">
            <li>{</li>
            <li v-for="propertyKey, propertyValue in flexClasses" :key="propertyKey">
                <span class="property">&emsp;&emsp;{{ propertyValue }}:</span>
                <span class="value">&nbsp;&nbsp;{{ propertyKey }}</span>;
            </li>
            <li>}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { CSSProperties, computed } from 'vue';
import { useStore as useFlexboxStore } from '../../store/flexbox';

const store = useFlexboxStore();
const flexClasses = computed<CSSProperties>(() => store.getters.getStyleObject);

function copyToClipboard()
{
    let dataToClipboard: string;
    dataToClipboard = "{\n";
    for( const [propertyKey, propertyValue] of Object.entries(flexClasses.value) ){
        dataToClipboard += `\t${propertyKey}: ${propertyValue};\n`;
    };
    dataToClipboard += "}";

    navigator.clipboard.writeText(dataToClipboard);
}
</script>

<style scoped>
.code-listing__container
{
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
header > span
{
    --header-size: 1.3em;
    font-size: var(--header-size);
    margin-left: calc(5em - var(--header-size));
}

header div
{
    border-left: 3px solid var(--listing-background-color);
    margin-left: auto;
    width: 3.4em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
header div:hover
{
    background-color: #333333;
}

header div img{
    width: 2em;
}

.code-listing {
    font-weight: 600;
    padding: 0 3em 1em 3em;
    font-size: 1.7em;
    list-style-type: none;
}

.code-listing>li:last-child,
.code-listing>li:first-child {
    color: #c2c20e;
}

.property {
    color: #5eaae0;
}

.value {
    color: #ac7c65;
}

</style>