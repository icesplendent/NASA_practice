<template>
  <navbar />
  <div
    id="com"
    class="hidden md:block h-screen w-screen overflow-y-auto py-24 bg-black"
  >
    <div class="relative my-10 h-fit mx-[4rem]">
      <div class="flex flex-row">
        <h1 class="hidden md:block text-white text-5xl font-jura">
          Collections
        </h1>
        <div class="flex-grow"></div>
        <h1 class="hidden md:block text-white text-5xl text-right font-jura">
          {{curCollections}} / {{totalCollections}}
        </h1>
      </div>
      <div class="flex flex-row mt-[1rem]">
        <p class="text-white font-jura">
          3 missing pieces of Uncle Atuu's carbon cycle manual !
        </p>
        <div class="flex-grow"></div>
        <div class="progress-container mt-[0.5rem]">
          <div class="progress-bar" id="progress-bar" :style="'width: ' + progress + '%'"></div>
        </div>
      </div>
      <hr class="mt-[1rem] mb-[0.5rem]" />
      <!-- <button
        @click="increaseProgress()"
        class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-4 py-2 text-center"
      >
        UPUP
      </button> -->
      <div class="galleries my-[1.5rem] gap-3 grid grid-cols-2 lg:grid-cols-4">
        <div v-for="(image, index) in imgCollections" :key="index" class="">
          <div class="gallery bg-blue-700 p-[0.6em] rounded-md">
            <img :src="image" :alt="image.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCollectionStore } from "../stores/collection";
import navbar from "../components/nav.vue";
import "../style.css";

const useCollection = useCollectionStore();

const totalCollections = 4; 
let curCollections = useCollection.collection.length + 1;



// california - 0
// barent - 1
// redsea - 2
console.log('has collected: ', curCollections);
// console.log(useCollection.collection[1]);

let imgCollections = [];
imgCollections.push('/img/collection3.png'); // default: Mr.chu
useCollection.collection.forEach(idx => {
  // console.log('idx = ', idx);
  // console.log('/img/collection' + idx + '.png');
  imgCollections.push('/img/collection' + idx + '.png');
});

// progress bar
let progress = (curCollections / totalCollections) * 100;
console.log('progress = ', progress);
// const progressBar = document.getElementById("progress-bar");
// progressBar.style.width = progress + "%";


// let progress = 0;
// const increaseProgress = () => {
//   progress += (1 / totalCollections) * 100;
//   if (progress > 100) {
  //     progress = 100;
  //   }
  //   // console.log("click");
  //   updateProgressBar(progress);
  // };
  
// const updateProgressBar = (progress) => {
//   const progressBar = document.getElementById("progress-bar");
//   progressBar.style.width = progress + "%";
// };
</script>


<style scoped>


.font-jura {
  font-family: "Jura";
}

.progress-container {
  width: 300px;
  height: 10px;
  background-color: #ccc;
}

.progress-bar {
  /* width: 0; */
  /* width: progress; */
  height: 100%;
  background-color: #007bff;
}
</style>
