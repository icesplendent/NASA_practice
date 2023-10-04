<template>
  <navbar />
  <div class="h-screen w-screen overflow-y-auto bg-black text-white font-jura">
    <div class="container mx-auto bg-slate-200 overflow-x-hidden">
      <div class="h-20"></div>
      <div class="pt-20 flex relative bg-orange-200">
        <div class="basis-1/2">
          <h1 class="text-[100px]">Project Name</h1>
          <p>
            Uncle Atuu runs a small ocean garden in Meichu Planet, and
            everything is fine
            <br /><br />
            Until recently...
          </p>
        </div>
        <div
          class="basis-1/2 h-[610px] w-[560px] overflow-hidden relative left-12 top-0"
        >
          <img class="" src="/home1.jpg" />
        </div>
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
