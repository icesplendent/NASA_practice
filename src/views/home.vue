<template>
  <navbar />
  <div class="h-screen w-screen overflow-y-auto bg-black text-white font-jura">
    <div class="container mx-auto overflow-x-hidden">
      <div class="h-16"></div>
      <div class="relative flex flex-col items-center">
        <div class="pt-20 flex relative px-24 overflow-x-hidden">
          <div class="basis-1/2">
            <h1 id="Para1" class="pt-24 pb-3 text-[88px]">frOG</h1>
            <p class="text-[27px]">
              Uncle Atuu runs a small ocean garden in Meichu Planet, and
              everything is fine
              <br /><br />
              Until recently...
            </p>
          </div>
          <div class="basis-1/2 overflow-hidden relative left-24 top-0">
            <img
              class="h-[610px] w-full object-cover object-center"
              src="/home1.jpg"
            />
          </div>
        </div>
        <a
          v-on:click="
            scrollToParagraph('Para2');
            buttonSound();
          "
        >
          <img
            src="../assets/home_down.svg"
            class="absolute bottom-0 animate-bounce"
        /></a>
      </div>
      <img id="Para2" src="../assets/divLine.svg" class="py-12 px-24 w-full" />
      <div class="relative flex flex-col items-center">
        <div class="flex relative px-24 pb-8 overflow-x-hidden">
          <div class="basis-1/2 py-20">
            <p class="text-[27px]">
              his marine organisms are getting sick one after another …
            </p>
          </div>
          <div class="basis-1/2 overflow-hidden relative left-24">
            <img
              class="h-[250px] w-full object-cover object-center"
              src="/home2.jpg"
            />
          </div>
        </div>
        <div class="bg-cover bg-center bg-[url('/home3.jpg')]">
          <div class="backdrop-blur-sm px-24 pt-36 pb-72">
            <p class="text-[27px] text-center mx-52">
              Uncle Atuu finds out that the unbalanced concentration of CO2 and
              O2 (the former one is too high while the latter one is too low)
              <br />is the main cause behind the problem.
            </p>
          </div>
        </div>
        <a
          v-on:click="
            scrollToParagraph('Para4');
            buttonSound();
          "
        >
          <img
            src="../assets/home_down.svg"
            class="absolute bottom-12 animate-bounce"
        /></a>
      </div>
      <img id="Para4" src="../assets/divLine.svg" class="w-full px-24" />
      <div class="relative px-24 pb-36 flex flex-col items-center">
        <p class="py-36 text-[27px]">
          To save his cute marine organisms,<br />the only way he can do is to
          collect the full manual of carbon cycle<br />which relates to the
          ocean and microscopic marine algae ( phytoplankton )
        </p>
        <img
          class="h-[300px] w-full object-cover object-center"
          src="/home4.jpg"
        />
        <a
          v-on:click="
            scrollToParagraph('Para5');
            buttonSound();
          "
        >
          <img
            src="../assets/home_down.svg"
            class="absolute bottom-12 animate-bounce"
        /></a>
      </div>
      <img id="Para5" src="../assets/divLine.svg" class="w-full px-24" />
      <div class="px-24 w-full relative">
        <p class="py-36 text-[27px]">He has 1/4 of carbon cycle manual now.</p>
        <div class="flex justify-end relative">
          <img
            class="h-[510px] w-[1020px] object-cover object-center"
            src="/home5.jpg"
          /><img
            class="h-[275px] w-[355px] absolute object-cover top-[90px] right-[90px] object-center"
            src="/home6.jpg"
          />
        </div>
        <div class="flex justify-center">
          <a
            v-on:click="
              scrollToParagraph('Para6');
              buttonSound();
            "
          >
            <img
              src="../assets/home_down.svg"
              class="absolute bottom-12 animate-bounce"
          /></a>
        </div>
      </div>
      <img id="Para6" src="../assets/divLine.svg" class="w-full px-24" />
      <div class="w-full h-[800px] px-24 flex flex-col items-center relative">
        <p class="pt-44 pb-12 text-[27px] text-center">
          Follow Uncle on an adventure<br />to search for the 3 missing pieces
          of his carbon cycle manual! <br /><br />Let’s Go!!!!!!!!!!
        </p>
        <router-link to="/game" class="z-50">
          <button
            v-on:click="buttonSound()"
            class="bg-[#3EC6FF] text-[50px] py-4 px-8 rounded-full"
          >
            Trip to Earth →
          </button>
        </router-link>
        <div class="absolute flex w-full bottom-0 z-10">
          <img src="/home7.jpg" class="triangle_L object-cover object-bottom" />
          <img src="/home8.jpg" class="triangle_R object-cover object-bottom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollToParagraph = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const buttonSound = () => {
  const audio = new Audio("/sound/button.wav");
  audio.volume = 0.05;
  audio.play();
};
import navbar from "../components/nav.vue";
</script>

<style scoped>
.font-jura {
  font-family: "Jura";
}
.triangle_R {
  width: 50%;
  height: 600px;
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
}
.triangle_L {
  width: 50%;
  height: 600px;
  clip-path: polygon(0% 0, 0 100%, 100% 100%);
}
</style>
