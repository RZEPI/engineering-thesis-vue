<template>
  <section>
    <div class="burger-button" :class="{expanded:isExpanded}" @click="toggleExpand">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>
  <nav v-if="isExpanded">
    <sidebar-link v-for="link in links" :key="link.label" :imageSrc="link.imageSrc" :label="link.label" :link="link.link"></sidebar-link>
  </nav>
</template>

<script setup lang="ts">
import SidebarLink from "./SidebarLink.vue";
import {sides} from '../../static/sides';

import { ref, toRef } from "vue";
const isExpanded = ref<boolean>(false);
const links = toRef(sides);

function toggleExpand()
{
  isExpanded.value = !isExpanded.value;
}

</script>

<style scoped>
nav {
  background-color: rgb(65, 183, 131);
  height: 100vh;
  width: 35%;
  position: fixed;
  float: left;
  left: 0;
}
section {
  width: 35%;
  position: fixed;
  z-index: 10;
  top: 0.3em;
  height: 4.5vh;
}
.burger-button {
  margin-left: 3em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 4.5vw;
  height: 80%;
  cursor: pointer;
}
.burger-button span {
  background-color: #34495e;
  width: 2.5em;
  height: 0.4em;
}
.burger-button.expanded{
  margin-left: calc(100% - 4.5vw);
}
</style>
