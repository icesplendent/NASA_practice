<template>
  <navbar />
  <div id="com" class="h-screen w-screen overflow-y-auto py-24 bg-[#272727] font-jura">
    <div class="relative h-fit">
      <div
        id="title1"
        class="py-5 pr-10 bg-[#099B9B] w-fit h-fit rounded-r-3xl my-10"
      >
        <h1 class="text-white text-5xl text-jula pl-16">How to Play</h1>
      </div>
      <section>
        <div class='mt-20 flex'>
          <img src='img/how_to_play/play1.jpg' class='ml-[12%] w-[40%] '/>
          <div class='my-10 mx-12 text-white mr-[12%]'>
            <h1 class='text-7xl my-2'>1.</h1>
            <p class='text-lg'>Take a look at the game hints and characters on the left..</p>            
          </div>
        </div>
        <img src='../assets/slash.png' class='bg-cover ml-[52%] w-[16%] h-[16vh] '/>
      </section>
      <section>
        <div class='flex flex-row-reverse'>
          <img src='img/how_to_play/play1.jpg' class='mr-[12%] w-[40%] '/>
          <div class='my-10 mx-12 text-white ml-[12%]'>
            <h1 class='text-7xl my-2'>2.</h1>
            <p class='text-lg'>Click those emoji on the left. They may take you to the marked locations and tell you how the ocean affects their daily lives</p>            
          </div>
        </div>
        <img src='../assets/slash2.png' class='bg-cover ml-[32%] mr-[52%] w-[16%] h-[16vh] flex flex-row-reverse'/>
      </section>
      <section>
        <div class='flex'>
          <img src='img/how_to_play/play1.jpg' class='ml-[12%] w-[40%] '/>
          <div class='my-10 mx-12 text-white mr-[12%]'>
            <h1 class='text-7xl my-2'>3.</h1>
            <p class='text-lg'>Click on the marked locations on the globe, answer the multiple choice questions about phytoplankton, and try to get the correct answers to win the lost manual</p>            
          </div>
        </div>
        <img src='../assets/slash.png' class='bg-cover ml-[52%] w-[16%] h-[16vh] '/>
      </section>
      <section>
        <div class='flex flex-row-reverse'>
          <img src='img/how_to_play/play1.jpg' class='mr-[12%] w-[40%] '/>
          <div class='my-10 mx-12 text-white ml-[12%]'>
            <h1 class='text-7xl my-2'>4.</h1>
            <p class='text-lg'>View the “Collection Page” to learn about how many pieces of manual you have helped  Mr. Chu collect</p>            
          </div>
        </div>
        <img src='../assets/slash2.png' class='bg-cover ml-[32%] mr-[52%] w-[16%] h-[16vh] flex flex-row-reverse'/>
      </section>
      <section>
        <div class='flex'>
          <img src='img/how_to_play/play1.jpg' class='ml-[12%] w-[40%] '/>
          <div class='my-10 mx-12 text-white mr-[12%]'>
            <h1 class='text-7xl my-2'>5.</h1>
            <p class='text-lg'>Explore 5 legendary locations and enjoy helping Mr. Chu recover his lost manual</p>            
          </div>
        </div>
      </section>
      <div class='w-full m-auto flex justify-center mt-8'>
        <router-link to="/game" class="z-50">
          <button class="bg-[#117090] text-[50px] py-4 px-8 rounded-full">
            Trip to Earth →
          </button>
        </router-link>
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
console.log("has collected: ", curCollections);
// console.log(useCollection.collection[1]);

let imgCollections = [];
imgCollections.push("/img/collection3.png"); // default: Mr.chu
useCollection.collection.forEach((idx) => {
  // console.log('idx = ', idx);
  // console.log('/img/collection' + idx + '.png');
  imgCollections.push("/img/collection" + idx + ".png");
});

// progress bar
let progress = (curCollections / totalCollections) * 100;
console.log("progress = ", progress);
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
