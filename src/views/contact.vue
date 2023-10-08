<template>
  <navbar />
  <!-- <div class="relative h-screen w-screen"> -->
  <!-- <div class="h-20"></div> -->
  <div
    id="com"
    class="hidden md:block h-screen w-screen overflow-y-auto overflow-x-hidden pt-24 bg-[#434343]"
  >
    <section class="relative my-10 h-fit w-screen">
      <div
        id="title1"
        class="py-5 pl-16 pr-10 absolute top-0 left-0 bg-[#099B9B] w-fit h-fit rounded-r-3xl"
      >
        <h1 class="hidden md:block text-white text-5xl font-jura">
          Why Ocean Matters?
        </h1>
        <h1 class="hidden md:block invisible text-white text-5xl">
          Why Ocean Matter?
        </h1>
        <h1 class="hidden md:block invisible text-white text-5xl">
          Why Ocean Matter?
        </h1>
        <h1 class="md:hidden text-white text-5xl font-jura">Ocean Matters</h1>
        <h1 class="invisible md:hidden text-white text-5xl">Ocean Matters</h1>
        <h1 class="invisible md:hidden text-white text-5xl">Ocean Matters</h1>
      </div>
      <div class="w-full h-24"></div>
      <div class="flex flex-row w-full justify-center z-20">
        <div class="min-w-[4rem] h-full"></div>
        <div id="content1" class="p-20 h-fit bg-white rounded-3xl z-10">
          <p class="text-[#117090] font-jura">
            Ocean makes up 70% of Earth by area , but we have consistently
            overlooked the significance of the ocean for a long time.
          </p>
          <p class="text-[#117090] font-jura pt-2">
            The ocean and phytoplankton are indispensable. Phytoplankton, by
            generating more than half of our oxygen, underpin our breathable
            atmosphere. They're also critical in absorbing substantial carbon
            dioxide, a crucial climate change buffer. The ocean's role in
            temperature regulation, supporting diverse ecosystems, and
            sustaining economies cannot be overstated. Preserving these
            ecosystems is crucial for a sustainable future.
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
        <h1 class="hidden md:block text-white text-5xl font-jura">
          More about frOG
        </h1>
        <h1 class="hidden md:block invisible text-white text-5xl">
          More about frOG
        </h1>
        <h1 class="hidden md:block invisible text-white text-5xl">
          More about frOG
        </h1>
        <h1 class="md:hidden text-white text-5xl font-jura">ProjectName</h1>
        <h1 class="invisible md:hidden text-white text-5xl">ProjectName</h1>
        <h1 class="invisible md:hidden text-white text-5xl">ProjectName</h1>
      </div>
      <div class="w-full h-24"></div>
      <div class="flex flex-row w-full justify-center z-20">
        <div class="min-w-[4rem] h-full"></div>
        <div id="content1" class="p-20 h-fit bg-white rounded-3xl z-10">
          <p class="text-[#117090] font-jura">
            To raise people’s awareness about how important are ocean and
            phytoplankton in our everyday life, our team integrates solid
            knowledge with interactive games.
          </p>
          <p class="text-[#117090] font-jura pt-2">
            We depict the marine ecosystem as a garden and engage players in a
            “treasure hunt game” that progressively imparts knowledge about
            ocean, carbon cycle, and phytoplankton. Additionally, our team
            transforms chlorophyll data from 2002 to 2023 into a visual 3D
            Earth, allowing players to observe the real-time state of the oceans
            and phytoplankton while playing the game. Through this project, we
            aim to bridge the knowledge gap among the general public and
            lawmakers regarding marine resources.
          </p>
        </div>
        <div class="min-w-[4rem] h-full"></div>
      </div>
    </section>
    <section class="relative my-10 h-fit w-screen">
      <div
        id="title3"
        class="py-5 pl-16 pr-10 absolute top-0 left-0 bg-[#099B9B] w-fit h-fit rounded-r-3xl"
      >
        <h1 class="text-white text-5xl font-jura">Our Team</h1>
        <h1 class="invisible text-white text-5xl">Our Team</h1>
        <h1 class="invisible text-white text-5xl">Our Team</h1>
      </div>
      <div class="w-full h-24"></div>
      <div class="flex flex-row w-full justify-center z-20">
        <div class="min-w-[4rem] h-full"></div>
        <section class="h-fit bg-white z-20 rounded-3xl w-[90%]">
          <div class="overflow-y-auto py-4 px-4 mx-auto w-full">
            <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              <div
                v-for="mate in team"
                :key="mate.name"
                class="items-center bg-gray-50 rounded-lg shadow sm:flex"
              >
                <a href="#" class="p-3">
                  <img
                    class="w-[5rem] rounded-lg sm:rounded-none sm:rounded-l-lg"
                    :src="mate.img"
                    :alt="mate.name"
                  />
                </a>
                <div class="p-3">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 ">
                    <a href="#" class="font-jura">{{ mate.name }}</a>
                  </h3>
                  <span class="text-gray-500 ">{{ mate.dept }}</span>
                  <p class="mt-3 mb-3 font-light text-gray-500 font-jura w-full">
                    {{ mate.words }}
                  </p>
                  <ul class="flex space-x-4 sm:mt-0">
                    <li>
                      <a href="#" class="text-gray-500 hover:text-gray-900">
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" class="text-gray-500 hover:text-gray-900">
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="min-w-[4rem] h-full"></div>
      </div>
    </section>
    <section>
      <p class="text-white text-center pt-[3%] pb-[1%] font-jura">
        Copyright © 2023 OGforOG
      </p>
    </section>
  </div>

</template>

<script setup>
import navbar from "../components/nav.vue";

const team = [
  {
    name: "Allen",
    img: "/boy.svg",
    dept: "Electrical Engineering",
    words: "let's go ocean garden",
  },
  {
    name: "cLyee",
    img: "/girl.svg",
    dept: "Computer Science",
    words: "let's go ocean garden",
  },
  {
    name: "yeyuhsin",
    img: "/girl.svg",
    dept: "Economics",
    words: "let's go ocean gardenasfsdfdsafsdafasdfasd",
  },
  {
    name: "Ruanzhe",
    img: "/boy.svg",
    dept: "Electrical Engineering",
    words: "let's go ocean garden",
  },
  {
    name: "Moinca",
    img: "/girl.svg",
    dept: "Economics",
    words: "822-554540384965",
  },
  {
    name: "Tseng Chia-Yu",
    img: "/boy.svg",
    dept: "Computer Science",
    words: "Do not put a new line before an opening curly bracket.",
  },
];
</script>

<style lang="scss" scoped></style>
