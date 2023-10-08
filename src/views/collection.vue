<template>
  <navbar />
  <div
    id="com"
    class="block h-screen w-screen overflow-y-auto py-24 bg-black relative"
  >
    <div
      v-show="progress == 100 && !isPopupClosed"
      @click="closePopup"
      class="absolute h-full w-full z-10 top-16"
    >
      <div
        ref="popup"
        class="font-jura mt-12 mx-24 px-16 py-10 w-auto h-auto bg-white flex justify-between rounded-3xl"
      >
        <div class="basis-1/2">
          <h1 class="text-[50px]">Congratulations!</h1>
          <p class="text-[24px]">
            You've successfully pieced together the manual of your adventure,
            and now Mr.Chu can go back to Meichu planet and save his marine
            organisms!
            <br />
            <br />
            Through challenges, you've reclaimed what was lost. But remember,
            the journey never truly ends. Keep exploring.
            <br />
            <br />
            Keep solving, and keep embracing the beauty and mysteriousness of
            the ocean.
            <br />
            <br />
            Until next time, my friend!
          </p>
        </div>
        <div class="flex">
          <img
            class="items-center my-auto basis-1/2 scale-90"
            src="/finish.png"
          />
        </div>
      </div>
    </div>
    <div class="relative my-10 h-fit mx-[4rem]">
      <div class="flex flex-row">
        <h1 class="hidden md:block text-white text-5xl font-jura">
          Collections
        </h1>
        <div class="flex-grow"></div>
        <h1 class="hidden md:block text-white text-5xl text-right font-jura">
          {{ curCollections }} / {{ totalCollections }}
        </h1>
      </div>
      <div class="flex flex-row mt-[1rem]">
        <p class="text-white font-jura">
          3 missing pieces of Uncle Atuu's carbon cycle manual !
        </p>
        <div class="flex-grow"></div>
        <div class="progress-container mt-[0.5rem]">
          <div
            class="progress-bar"
            id="progress-bar"
            :style="'width: ' + progress + '%'"
          ></div>
        </div>
      </div>
      <hr class="mt-[1rem] mb-[0.5rem]" />
      <div class="galleries my-[1.5rem] gap-3 grid grid-cols-2 lg:grid-cols-4">
        <div v-for="(image, index) in imgCollections" :key="index" class="">
          <div class="gallery bg-[#099B9B] p-[0.6em] rounded-md">
            <img :src="image" :alt="image.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCollectionStore } from "../stores/collection";
import navbar from "../components/nav.vue";
import "../style.css";

let isPopupClosed = ref(false);

const popupRef = ref(null);

const closePopup = (event) => {
  isPopupClosed.value = !isPopupClosed.value;
};

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
  background-color: #099b9b;
}
</style>
