<template>
  <li>
    <router-link :to="link">
      <div></div>
      <img v-if="imageSrc" :src="loadedImage" />
      <div v-else></div>
      <span>{{ label }}</span>
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { SidebarLinkProps } from "../../models/SidebarLinkProps.ts";

const props = defineProps<SidebarLinkProps>();
const loadedImage = ref<string | undefined>(undefined);
if (props.imageSrc) {
  import(`../../assets/${props.imageSrc}`)
    .then((imageModule) => {
      loadedImage.value = imageModule.default;
    })
    .catch(() => {});
}
</script>

<style scoped>
a {
  text-decoration: none;
  text-align: center;
  color: var(--main-background-color);
  font-weight: 600;
  width: 100%;
  font-size: 2em;
  padding: 0.3em 0;
  display: grid;
  grid-template-columns: 1fr 1fr 4fr 2fr;
}

li {
  list-style-type: none;
  width: 100%;
  max-height: 5vh;
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

li img {
  align-self: center;
  height: calc(3vh - 0.3em);
}

span {
  min-width: 20vw;
}

@media (max-height: 700px) {
  li {
    max-height: unset;
  }
  li img {
    height: calc(7vh - 0.3em);
  }
}
</style>
