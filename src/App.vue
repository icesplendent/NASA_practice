<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div id="info">Click the markers to show the label</div>
  <div id="markerLabel" class="hidden">
    <button id="closeButton">X</button>
    <div class="text" id="idNum"></div>
    <div class="text" id="magnitude"></div>
    <div class="text" id="coordinates"></div>
  </div>
  <div id="scene-container"></div>
</template>

<style scoped></style>
