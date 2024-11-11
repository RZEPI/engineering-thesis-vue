<template>
  <div class="main-container">
    <p>Recursive Component Generation Test</p>

    <div class="input-container">
      <input
        type="number"
        v-model.number="depthInput"
        placeholder="Amount of components"
        min="1"
      />
      <button @click="generateComponents">Generate Components</button>
    </div>

    <RecursiveComponent
      v-if="depth > 0"
      message="This component is generated recursively. Current depth: "
      :maxDepth="depth"
    />
  </div>
<div class="gradient"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import RecursiveComponent from "../components/UI/RecursiveComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    RecursiveComponent,
  },
  setup() {
    const depthInput = ref<number | null>(null);
    const depth = ref<number>(0);

    const generateComponents = () => {
      if (depthInput.value && depthInput.value > 0) {
        depth.value = depthInput.value;
      } else {
        alert("Please enter a number greater than 0.");
      }
    };

    return {
      depthInput,
      depth,
      generateComponents,
    };
  },
});
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5em auto;
  width: 60%;
  position: relative;
}

p {
  text-align: center;
  font-size: 2.2em;
  margin-bottom: 1em;
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  margin-top: 1em;
  z-index: 1;
}

input[type="number"] {
  padding: 0.5em;
  font-size: 1.1em;
  width: 200px;
  border: 2px solid #41b783;
  border-radius: 5px;
  text-align: center;
}

button {
  padding: 0.5em 1em;
  font-size: 1.1em;
  border: none;
  background-color: #41b783;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #349a66;
}

.gradient {
  margin-top: 20px;
  height: 100px;
  width: 100%;
  position: relative;
  z-index: 0;
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
