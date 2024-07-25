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

const props = defineProps<SidebarLinkProps>();
</script>

<style scoped>
a {
  text-decoration: none;
  color: #34495e;
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
  background-color: rgba(52, 73, 94, 0.5);
  color: white;
}
li:hover {
  background-color: #2f8761;
  box-sizing: border-box;
}
</style>
