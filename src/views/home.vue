<template>
  <navbar />
  <div class="h-screen w-screen overflow-y-auto bg-black text-white font-jura">
    <div class="container mx-auto overflow-x-hidden">
      <div class="h-16"></div>
      <div class="pt-20 flex relative px-24 overflow-x-hidden">
        <div class="basis-1/2">
          <h1 class="pt-24 pb-3 text-[88px]">Project Name</h1>
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
      <img src="../assets/divLine.svg" class="py-12 px-24 w-full" />
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
            Uncle Atuu finds out that the unbalanced concentration of CO2 and O2
            (the former one is too high while the latter one is too low)
            <br />is the main cause behind the problem.
          </p>
        </div>
      </div>
      <img src="../assets/divLine.svg" class="w-full px-24" />
      <div class="px-24 pb-36">
        <p class="py-36 text-[27px]">
          To save his cute marine organisms,<br />the only way he can do is to
          collect the full manual of carbon cycle<br />which relates to the
          ocean and microscopic marine algae ( phytoplankton )
        </p>
        <img
          class="h-[300px] w-full object-cover object-center"
          src="/home4.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import navbar from "../components/nav.vue";
</script>

<style scoped>
.font-jura {
  font-family: "Jura";
}
</style>