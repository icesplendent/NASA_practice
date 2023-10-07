<template>
  <navbar />
  <div class="h-screen w-screen overflow-y-auto bg-black text-white font-jura">
    <div class="container mx-auto overflow-x-hidden">
      <div class="h-16"></div>
      <div class="relative flex flex-col items-center pt-32">
        <div class="absolute top-6 left-0 px-24">
          <h1 id="Para1" class="pt-24 pb-3 text-[88px]">frOG</h1>
          <p class="text-[27px]">
            Mr.Chu runs a small ocean garden in Meichu Planet,<br />
            and everything is fine <br /><br />
            Until recently...
          </p>
        </div>
        <img class="w-full object-cover object-center" src="/home1.png" />
        <img id="Para2" src="../assets/divLine.svg" class="px-24 pb-8 w-full" />
        <a
          v-on:click="
            scrollToParagraph('Para2');
            buttonSound();
          "
          class="absolute bottom-24"
        >
          <img src="../assets/home_down.svg" class="animate-bounce"
        /></a>
      </div>
      <div class="relative flex flex-col items-center">
        <div class="flex w-full px-24 relative pb-8 overflow-x-hidden">
          <div class="basis-1/2 py-20">
            <p class="text-[27px]">
              his marine organisms are getting sick one after another …
            </p>
          </div>
          <div class="basis-1/2 flex justify-end">
            <img class="scale-90 object-cover object-center" src="/home2.png" />
          </div>
        </div>
        <div class="bg-cover bg-center bg-[url('/home3.png')]">
          <div class="px-24 pt-36 pb-72">
            <p class="text-[27px] text-center mx-52">
              Mr.Chu finds out that the unbalanced concentration of CO2 and O2
              (the former one is too high while the latter one is too low)
              <br />is the main cause behind the problem.
            </p>
          </div>
        </div>
        <a
          v-on:click="
            scrollToParagraph('Para4');
            buttonSound();
          "
          class="absolute bottom-12"
        >
          <img src="../assets/home_down.svg" class="animate-bounce"
        /></a>
      </div>
      <img id="Para4" src="../assets/divLine.svg" class="w-full px-24" />
      <div class="relative px-24 pb-36 flex flex-col items-center">
        <p class="py-36 text-[27px]">
          To save his cute marine organisms,<br />the only way he can do is to
          collect the full manual of carbon cycle<br />which relates to the
          ocean and microscopic marine algae ( phytoplankton )
        </p>
        <div
          class="pt-12 w-full object-cover object-center flex flex-grow relative"
        >
          <img src="/L1.svg" class="w-[90%] relative" />
          <img src="/L2.svg" class="w-[72%] relative bottom-24" />
          <img src="/C.svg" class="w-[85%] relative" />
          <img src="/R2.svg" class="w-[85%] relative bottom-24" />
          <img src="/R1.svg" class="w-[95%] relative" />
        </div>

        <a
          v-on:click="
            scrollToParagraph('Para5');
            buttonSound();
          "
        >
          <img
            src="../assets/home_down.svg"
            class="absolute bottom-12 left-[48%] animate-bounce"
        /></a>
      </div>
      <img id="Para5" src="../assets/divLine.svg" class="w-full px-24" />
      <div class="w-full relative">
        <div class="px-24 flex">
          <p class="basis-1/2 pt-48 pb-0 text-[27px]">
            He has 1/4 of carbon cycle manual now.
          </p>
          <img src="/home5.png" class="scale-[0.75] basis-1/2" />
        </div>
        <div class="h-[300px]"></div>
        <img src="/home6.png" class="absolute bottom-0 w-full" />
        <div class="flex justify-center">
          <a
            v-on:click="
              scrollToParagraph('Para6');
              buttonSound();
            "
            class="absolute bottom-8"
          >
            <img src="../assets/home_down.svg" class="animate-bounce"
          /></a>
        </div>
      </div>
      <img id="Para6" src="../assets/divLine.svg" class="w-full px-24" />
      <div
        class="w-full px-24 flex flex-col items-center relative overflow-hidden"
      >
        <p class="pt-40 pb-24 text-[27px] text-center">
          Follow Mr.Chu on an adventure<br />to search for the 3 missing pieces
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
        <img
          src="/home_man.png"
          class="absolute bottom-[-150px] left-[-100px]"
        />
        <img src="/home_earth.png" class="absolute bottom-0 right-0" />
        <div class="h-[500px]"></div>
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
</style>
