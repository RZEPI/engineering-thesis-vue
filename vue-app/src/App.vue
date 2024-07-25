<template>
  <the-header></the-header>
  <base-sidebar></base-sidebar>
  <router-view></router-view>
</template>

<script setup>
import TheHeader from "./components/UI/TheHeader.vue";
import BaseSidebar from "./components/UI/BaseSidebar.vue";
</script>

<style scoped></style>
