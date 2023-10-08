<template>
  <navbar @change_pic="changePic" />
  <div class="flex flex-row w-screen mouse">
    <div id="bar" class="w-0 shrink-0"></div>
    <div class="flex flex-col basis-[100%] shrink-0">
      <slidepopup />
      <person @personClicked="toggleRotate" />
      <canva ref="canvaRef" :imgData="img" />
      <benchmark
        @toggleBench="toggleRotateBench"
        @backBench="backRotateBench"
      />
      <div class="basis-1/4"></div>
    </div>
  </div>

  <div id="markerLabel" class="hidden">
    <button id="closeButton">X</button>
    <div class="text" id="idNum"></div>
    <div class="text" id="magnitude"></div>
    <div class="text" id="coordinates"></div>
  </div>
  <!-- <img src="/benchmark.png" class="fixed w-1/4 h-auto right-[2%] top-[15%] h-14"> -->
  <sliderbar
    class="fixed right-0 bottom-0"
    @sliderChange="changePicBySlider"
    @changeToSummer="handleSeasonChange"
    @changeToWinter="handleSeasonChange"
  />
</template>

<script setup>
import { ref } from "vue";
import person from "../components/person.vue";
import navbar from "/src/components/nav.vue";
import canva from "/src/components/canva.vue";
import sliderbar from "../components/sliderbar.vue";
import slidepopup from "../components/slidepopup.vue";
import benchmark from "../components/benchmark.vue";

const canvaRef = ref(null);
const img = ref("img/summer/2023.png");
let index = ref(0);
let summer = true; // decide to get summer/winter picture

// TODO: fix image resolution
// summer images
const imgs = [
  "2002.png",
  "2003.png",
  "2004.png",
  "2005.png",
  "2006.png",
  "2007.png",
  "2008.png",
  "2009.png",
  "2010.png",
  "2011.png",
  "2012.png",
  "2013.png",
  "2014.png",
  "2015.png",
  "2016.png",
  "2017.png",
  "2018.png",
  "2019.png",
  "2020.png",
  "2021.png",
  "2022.png",
  "2023.png",
]; // summer

const imgw = ref("2003.png");
const imgsw = [
  "2003.png",
  "2003.png",
  "2004.png",
  "2005.png",
  "2006.png",
  "2007.png",
  "2008.png",
  "2009.png",
  "2010.png",
  "2011.png",
  "2012.png",
  "2013.png",
  "2014.png",
  "2015.png",
  "2016.png",
  "2017.png",
  "2018.png",
  "2019.png",
  "2020.png",
  "2021.png",
  "2022.png",
  "2023.png",
]; // winter

let expaneded = false;
const toggleHint = () => {
  expaneded = !expaneded;
  console.log("click toggleHint");
};

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
    img.value = "/img/summer/" + imgs[index.value];
    // console.log("img.value = ", img.value);
    canvaRef.value.changeTexture(img.value);
  } else {
    imgw.value = "/img/winter/" + imgsw[index.value];
    canvaRef.value.changeTexture(imgw.value);
  }
};

const handleSeasonChange = (newSeason) => {
  summer = newSeason;

  if (summer) {
    img.value = "/img/summer/" + imgs[index.value];
    console.log("img.value = ", img.value);
    canvaRef.value.changeTexture(img.value);
  } else {
    imgw.value = "/img/winter/" + imgsw[index.value];
    console.log("imgw.value = ", imgw.value);
    canvaRef.value.changeTexture(imgw.value);
  }
  console.log("New season:", newSeason);
  console.log("\n");
};

const toggleRotate = (position) => {
  console.log(position);
  canvaRef.value.rotateCamera(position);
};

const toggleRotateBench = (position) => {
  console.log(position);
  canvaRef.value.rotateCameraBench(position);
};

const backRotateBench = () => {
  canvaRef.value.backCameraBench();
  console.log("backRotateBench");
};
</script>

<style scoped>
.mouse {
  cursor: none;
  cursor: url("../assets/boat.svg"), auto;
}
</style>
