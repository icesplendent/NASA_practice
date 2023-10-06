<template>
  <!-- <label></label> -->
  <navbar @change_pic="changePic" />
  <div class="flex flex-row w-screen">
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
  <sliderbar
    class="fixed right-0 bottom-0"
    @sliderChange="changePicBySlider"
    @seasonChange="handleSeasonChange"
  />
</template>

<script setup>
import { ref } from "vue";
import label from "/src/components/label.vue";
import navbar from "/src/components/nav.vue";
import canva from "/src/components/canva.vue";
import sliderbar from "../components/sliderbar.vue";

const canvaRef = ref(null);
const img = ref("world1.jpeg");
let index = ref(0);
let summer = true; // decide to get summer/winter picture

const imgs = [
  "world1.jpeg",
  "world2.jpeg",
  "world3.png",
  "world4.jpg",
  "world5.png",
  "world6.png",
  "world7.png",
  "world8.jpeg",
  "world9.jpg",
  "world10.jpg",
  "2002.png",
  "2002_1.png",
  "2002_2.png",
  "2002_3.png",
  "monica.jpg",
]; // summer

const imgw = ref("w1.png");
const imgsw = ["w1.png", "w2.png", "w3.png", "w4.jpg", "w5.png", "w6.jpg"];

const changePic = () => {
  index.value = (index.value + 1) % imgs.length;
  img.value = imgs[index.value];
  canvaRef.value.changeTexture(img.value);
};

const changePicBySlider = (newValue) => {
  // console.log(newValue);
  // console.log("summer:", summer);
  index.value = (newValue % 2000) - 2;
  if (summer) {
    img.value = imgs[index.value];
    canvaRef.value.changeTexture(img.value);
  } else {
    imgw.value = imgsw[index.value];
    canvaRef.value.changeTexture(imgw.value);
  }
};

const handleSeasonChange = (newSeason) => {
  summer = newSeason;
  if (summer) {
    img.value = imgs[index.value];
    canvaRef.value.changeTexture(img.value);
  } else {
    imgw.value = imgsw[index.value];
    canvaRef.value.changeTexture(imgw.value);
  }
  // console.log("New season:", newSeason);
};
</script>

<style lang="scss" scoped></style>
