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
  color: white;
  font-weight: 600;
  width: 100%;
  font-size: 2em;
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 1fr;
}
li {
  list-style-type: none;
  width: 100%;

}
a:active,
a.active{
    color: #dadada
}
li:hover {
  background-color: #2f8761;
  box-sizing: border-box;
}
</style>
