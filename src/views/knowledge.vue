<template>
  <navbar />
  <div id="com" class="hidden md:block h-screen w-screen overflow-y-auto py-24 bg-black">
    <div class="relative my-10 h-fit mx-[4rem]">
      <div class="flex flex-row">
        <h1 class="hidden md:block text-white text-5xl font-jura">
          Collections
        </h1>
        <div class="flex-grow"></div>
        <h1 class="hidden md:block text-white text-5xl text-right font-jura">1 / 3</h1>
      </div>
      <div class="flex flex-row mt-[1rem]">
        <p class="text-white font-jura">
          3 missing pieces of Uncle Atuu's carbon cycle manual !
        </p>
        <div class="flex-grow"></div>
        <div class="progress-container mt-[0.5rem]">
          <div class="progress-bar" id="progress-bar"></div>
        </div>
      </div>
      <hr class="mt-[1rem] mb-[0.5rem]">
      <button @click="increaseProgress()"
              class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-4 py-2 text-center">
              UPUP
      </button>
      <!-- <div class="gallery flex flex-row gap-10 my-[2rem]"> -->
      <div class="gallery flex flex-row gap-10 my-[2rem]">
        <div class="bg-blue-700 p-[1rem] rounded-lg">
          <img src="/gallery1.png" class="">
        </div>
        <div class="bg-blue-700 p-[1rem] rounded-lg">
          <img src="/gallery1.png" class="">
        </div>
        <div class="bg-blue-700 p-[1rem] rounded-lg">
          <img src="/gallery1.png" class="">
        </div>
      </div>
    </div>
  </div>
</template> 

<script setup>
import navbar from "../components/nav.vue";
import "../style.css";
let progress = 0;

const increaseProgress = () => {
  progress += 10; 
  if (progress > 100) {
    progress = 100; 
  }
  // console.log("click");
  updateProgressBar(progress);
}

const updateProgressBar = (progress) => {
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = progress + '%';
}

</script>

<!-- <template>
  <navbar />
  <div id="com" class="hidden md:block h-screen w-screen overflow-y-auto py-24 bg-black">
    <section class="relative my-10 h-fit w-screen">
      <div id="title1" class="py-5 pl-16 pr-10 absolute top-0 left-0 bg-[#0E2DD1] w-96 h-64 rounded-r-3xl">
        <h1 class="hidden md:block text-white text-5xl font-jura">
          References
        </h1>
      </div>
      <div class="w-full h-24"></div>
      <div class="flex flex-row w-full justify-center z-20">
        <div class="min-w-[4rem] h-full"></div>
        <div id="content1" class="p-20 w-5/6 h-fit bg-white rounded-3xl z-10">
          <p class="text-[#0E2DD1] font-jura">
            Ocean makes up 70% of Earth by area, and...
          </p>
        </div>
        <div class="min-w-[4rem] h-full"></div>
      </div>
    </section>
    <section class="relative relative my-10 h-fit w-screen">
      <div id="title2" class="py-5 pl-16 pr-10 absolute top-0 left-0 bg-[#0E2DD1] w-80 h-64 rounded-r-3xl">
        <h1 class="hidden md:block text-white text-5xl font-jura">
          License
        </h1>
      </div>
      <div class="w-full h-24"></div>
      <div class="flex flex-row w-full justify-center z-20">
        <div class="min-w-[4rem] h-full"></div>
        <div id="content1" class="p-20 w-5/6 h-fit bg-white rounded-3xl z-10">
          <p class="text-[#0E2DD1] font-jura">
            Ocean makes up 70% of Earth by area, and
          </p>
        </div>
        <div class="min-w-[4rem] h-full"></div>
      </div>
    </section>
  </div>
</template> 


<script setup>
import navbar from "../components/nav.vue";
import "../style.css";
</script> -->

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
  width: 0;
  height: 100%;
  background-color: #007bff;
}
</style>
