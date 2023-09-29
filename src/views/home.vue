<template>
  <!-- <label></label> -->
  <navbar @change_pic="changePic" />
  <div class="flex flex-row w-screen h-screen">
    <div id="bar" class="w-0 shrink-0"></div>
    <div class="flex flex-col basis-[100%] shrink-0">
      <!-- <div id="scene-container" class="w-full basis-[75%]"></div> -->
      <canva ref="canvaRef" :imgData="img" />
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

<script setup>
import { ref } from "vue";
import label from "/src/components/label.vue";
import navbar from "/src/components/nav.vue";
import canva from "/src/components/canva.vue";

const canvaRef = ref(null);
const img = ref("world1.jpeg");
let index = ref(0);
const imgs = ["world1.jpeg", "world2.jpeg"];

const changePic = () => {
  index.value = (index.value + 1) % imgs.length;
  img.value = imgs[index.value];
  canvaRef.value.changeTexture(img.value);
};
</script>
