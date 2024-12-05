<template>
  <li>
    <router-link :to="link">
      <div></div>
      <img v-if="imageSrc" :src="imageSrc" />
      <div v-else></div>
      <span>{{ label }}</span>
    </router-link>
  </li>
</template>

<script setup lang="ts">
import type { SidebarLinkProps } from "../../models/SidebarLink.ts";

defineProps<SidebarLinkProps>();
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--main-background-color);
  font-weight: 600;
  width: 100%;
  font-size: 2em;
  padding: 0.3em 0;
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 1fr;
}
li {
  list-style-type: none;
  width: 100%;
}
a:active,
a.active {
  background-color: var(--active-element-color);
  color: var(--main-text-color);
}
li:hover {
  background-color: var(--hover-element-color);
  box-sizing: border-box;
}
li img{
  align-self: center;
  height: calc(3vh - 0.3em);
}

@media (max-height: 700px) {
  li img {
    height: calc(7vh - 0.3em);
  }
}
</style>
