<template>
  <header :class="{'border-shadow': isExpanded}">
    <div class="burger-button" :class="btnClass" @click="toggleExpand">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>

  <transition name="sidebar" mode="out-in">
    <nav v-if="isExpanded">
      <ul>
        <sidebar-link
          v-for="link in links"
          :key="link.label"
          :image-src="link.imageSrc"
          :label="link.label"
          :link="link.link"
        ></sidebar-link>
      </ul>
    </nav>
  </transition>
  <div v-if="isExpanded" class="backdrop" @click="toggleExpand"></div>
</template>

<script setup lang="ts">
import SidebarLink from "./SidebarLink.vue";
import { sites } from "../../static/sites";

import { ref, toRef, computed } from "vue";
const isExpanded = ref<boolean>(false);
const links = toRef(sites);
const btnClass = computed(() => {
  return isExpanded.value ? "expanded" : "collapsed";
});

function toggleExpand() {
  isExpanded.value = !isExpanded.value;
}
</script>

<style scoped>
.sidebar-enter-from,
.sidebar-leave-to {
  width: 0;
}
.sidebar-enter-to,
.sidebar-leave-from {
  width: 35%;
}

.sidebar-enter-active {
  transition: width 0.3s ease-out;
}

.sidebar-leave-active {
  transition: width 0.3s ease-in;
}

nav {
  background-color: rgb(65, 183, 131);
  height: 100vh;
  width: 35vw;
  position: fixed;
  z-index: 10;
  float: left;
  left: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
header {
  width: 35vw;
  position: fixed;
  z-index: 10;
  top: 0;
  height: 4.5vh;
}
.burger-button {
  transition: transform 0.3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0.3em 0 0 2.7em;
  width: 2.5em;
  height: 80%;
  cursor: pointer;
}
.burger-button span {
  background-color: #34495e;
  width: 2.5em;
  height: 0.4em;
}

.expanded {
  transform: translateX(calc(35vw - 6em));
  transition-delay: 0.04s;
}

.collapsed {
  transform: translateX(0);
}

.backdrop {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
}

.border-shadow{
  transition: box-shadow 0.4s;
  box-shadow: 4px 0 4px 3px rgba(0, 0, 0, 0.5);
}
</style>
