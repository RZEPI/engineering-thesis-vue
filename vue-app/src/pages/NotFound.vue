<template>
  <main>
    <h1>Not Found</h1>
    <p>
      Page was not found, go to <router-link to="/">home page</router-link>.
    </p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 4em);
  width: 100%;
  margin-top: 4em;
}
h1 {
  text-align: center;
  width: 100%;
  font-size: 2.6em;
}
p {
  font-size: 1.7em;
}
a {
  text-decoration: none;
  color: #41b783;
}
</style>
