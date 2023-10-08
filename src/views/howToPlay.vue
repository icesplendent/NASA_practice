<template>
  <navbar />
  <div id="com" class="h-screen w-screen overflow-y-auto py-24 bg-black">
    <div class="relative h-fit">
      <div
        id="title1"
        class="py-5 pr-10 bg-[#099B9B] w-fit h-fit rounded-r-3xl"
      >
        <h1 class="text-white text-5xl text-jula">How to Play</h1>
      </div>
      <section>
        <div class='mt-20 flex'>
          <img src='img/how_to_play/play1.jpg' class='ml-[12%] w-[40%] '/>
          <div class='bg-white'>iofasdhfpcuamoiefmasoid;jcaowhfsailudhxmuiuwhflidshaf</div>
        </div>
        <img src='../assets/slash.png' class='bg-cover ml-[52%] w-[16%] h-[16vh] '/>
      </section>
      <section>
        <div class='flex flex-row-reverse'>
          <img src='img/how_to_play/play1.jpg' class='mr-[12%] w-[40%] '/>
          <div class='bg-white'>iofasdhfpcuamoiefmasoid;jcaowhfsailudhxmuiuwhflidshaf</div>
        </div>
        <img src='../assets/slash2.png' class='bg-cover ml-[32%] mr-[52%] w-[16%] h-[16vh] flex flex-row-reverse'/>
      </section>
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
.slanted-line {
  width: 200px; /* 设置斜线的宽度 */
  height: 20px; /* 设置斜线的长度 */
  background-image: linear-gradient(to bottom right, transparent 49%, #333 50%, transparent 51%); /* 创建斜线的背景图像 */
  background-repeat: no-repeat;
}

</style>
