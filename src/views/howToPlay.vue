<template>
  <navbar />
  <div id="com" class="h-screen w-screen overflow-y-auto py-24 bg-black">
    <div class="relative h-fit">
      <div
        id="title1"
        class="py-5 pr-10 absolute top-0 left-0 bg-[#099B9B] w-fit h-fit rounded-r-3xl"
      >
        <h1 class="text-white text-5xl text-jula">How to Play</h1>
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
