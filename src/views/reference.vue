<template>
  <navbar />
  <div
    id="com"
    class="hidden md:block h-screen w-screen overflow-y-auto overflow-x-hidden pt-24 bg-black"
  >
    <section class="relative my-10 h-fit w-screen">
      <div
        id="title1"
        class="py-5 pl-16 pr-10 absolute top-0 left-0 bg-[#099B9B] w-fit h-fit rounded-r-3xl"
      >
        <h1 class="hidden md:block text-white text-5xl font-jura">Reference</h1>
        <h1 class="hidden md:block invisible text-white text-5xl">Reference</h1>
        <h1 class="md:hidden text-white text-5xl font-jura">References</h1>
        <h1 class="invisible md:hidden text-white text-5xl">References</h1>
        <h1 class="invisible md:hidden text-white text-5xl">References</h1>
      </div>
      <div class="w-full h-24"></div>
      <div class="flex flex-row w-full justify-center z-20">
        <div class="min-w-[4rem] h-full"></div>
        <div id="content1" class="p-20 h-fit bg-white rounded-3xl z-10">
          <p class="text-[#117090] font-jura">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            sapiente nisi, veniam necessitatibus maiores deleniti, vitae
            corrupti voluptates tempore quasi fuga reprehenderit est blanditiis
            aliquid quae illo nam, autem minima molestias! Sequi optio explicabo
            non neque enim cupiditate, id voluptate incidunt, quas perferendis
            dicta perspiciatis iste eaque repellendus? Quae iste distinctio
            alias tempora culpa repellat veniam voluptatum error labore animi
            placeat, quo accusantium. Ex, accusamus! Veniam vero repudiandae
            assumenda corporis. Eius sint pariatur suscipit assumenda quae nisi
            aspernatur delectus. Quia commodi ratione corporis deserunt beatae
            illum? Velit sint libero quia voluptate recusandae qui quis
            veritatis possimus. Fugit eligendi quae voluptatem.
          </p>
        </div>
        <div class="min-w-[4rem] h-full"></div>
      </div>
    </section>
    <section class="relative my-10 h-fit w-screen">
      <div
        id="title2"
        class="py-5 pl-16 pr-10 absolute top-0 left-0 bg-[#099B9B] w-fit h-fit rounded-r-3xl"
      >
        <h1 class="hidden md:block text-white text-5xl font-jura">Licenses</h1>
        <h1 class="hidden md:block invisible text-white text-5xl">Licenses</h1>
        <h1 class="hidden md:block invisible text-white text-5xl">Licenses</h1>
        <h1 class="md:hidden text-white text-5xl font-jura">Licenses</h1>
        <h1 class="invisible md:hidden text-white text-5xl">Licenses</h1>
        <h1 class="invisible md:hidden text-white text-5xl">Licenses</h1>
      </div>
      <div class="w-full h-24"></div>
      <div class="flex flex-row w-full justify-center z-20">
        <div class="min-w-[4rem] h-full"></div>
        <div id="content1" class="p-20 h-fit bg-white rounded-3xl z-10">
          <p class="text-[#117090] font-jura">
            To raise people‘s awareness about how important are ocean and
            phytoplankton in our everyday life, our team integrates solid
            knowledge with interactive games. We depict the marine ecosystem as
            a garden and engage players in a “treasure hunt game” that
            progressively imparts knowledge about ocean, carbon cycle, and
            phytoplankton. Additionally, our team transforms chlorophyll data
            from 2000 to 2022 into a visual 3D Earth, allowing players to
            observe the real-time state of the oceans and phytoplankton while
            playing the game. Through this project, we aim to bridge the
            knowledge gap among the general public and lawmakers regarding
            marine resources.
          </p>
        </div>
        <div class="min-w-[4rem] h-full"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import navbar from "../components/nav.vue";
</script>

<style lang="scss" scoped></style>
