<template>
  <div class="main-container">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat
      magna sit amet nibh ornare, vitae efficitur lorem molestie. Duis sagittis
      mi risus, ut gravida mi placerat aliquet. Maecenas in pellentesque augue,
      elementum bibendum risus.
    </p>
    <div class="gradient"></div>
  </div>
</template>

<style scoped>
div.main-container {
  display: inherit;
  margin: 10em auto;
  width: 60%;
}
p {
  text-align: center;
  font-size: 2.2em;
}
.gradient {
  margin-top: -50px;
  margin-left: -5%;
  height: 100px;
  width: 110%;
  position: relative;
  background: rgba(0, 0, 0, 0);
  background: radial-gradient(
    closest-side at 50% 30%,
    rgba(115, 84, 107, 0) 0%,
    rgba(114, 87, 108, 0) 0%,
    rgba(65, 183, 131, 0.2) 0%,
    rgba(65, 183, 131, 0) 100%
  );
}
</style>
