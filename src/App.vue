<script setup>
import label from "/src/components/label.vue";
import nav_com from "/src/components/nav_com.vue";
</script>

<template>
  <!-- <label></label> -->
  <nav_com />
  <div class="flex flex-row w-screen h-screen">
    <div id="bar" class="basis-1/4"></div>
    <div class="flex flex-col basis-[75%]">
      <div id="scene-container" class="w-full basis-[75%]"></div>
      <div class="basis-1/4"></div>
    </div>
  </div>

  <div id="markerLabel" class="hidden">
    <button id="closeButton">X</button>
    <div class="text" id="idNum"></div>
    <div class="text" id="magnitude"></div>
    <div class="text" id="coordinates"></div>
  </div>
  <!-- <div id="scene-container" class="w-screen h-screen"></div> -->
</template>

<style scoped></style>
