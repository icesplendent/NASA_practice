<template>
  <nav class="bg-[#8AB4B1] fixed w-full z-20 top-0 left-0 cursor-default">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="/" class="flex items-center">
        <!-- <img src="/meichu_logo.svg" class="h-8 mr-3" alt="MeichuHackathon" /> -->
        <span
          class="text-white font-jura self-center text-2xl font-semibold whitespace-nowrap"
          >　frOG</span
        >
      </a>
      <div class="flex md:order-2">
        <button
          @click="handleClick"
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        :class="[open ? '' : 'hidden']"
        class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#8AB4B1] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#8AB4B1]"
        >
          <li>
            <RouterLink
              to="/"
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-300 md:hover:bg-transparent md:hover:text-[#099B9B] md:p-0 font-jura"
              aria-current="page"
            >
              Story
            </RouterLink>
          </li>
          <li>
            <RouterLink
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-300 md:hover:bg-transparent md:hover:text-[#099B9B] md:p-0 font-jura"
              to="/instr"
            >
              Instructions
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/game"
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-300 md:hover:bg-transparent md:hover:text-[#099B9B] md:p-0 font-jura"
            >
              Globe
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/collection"
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-300 md:hover:bg-transparent md:hover:text-[#099B9B] md:p-0 font-jura"
            >
              Collection
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contact"
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-300 md:hover:bg-transparent md:hover:text-[#099B9B] md:p-0 font-jura"
              >About
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/ref"
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-300 md:hover:bg-transparent md:hover:text-[#099B9B] md:p-0 font-jura"
              >Ref
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["change_pic"]);

let open = ref(false);
const handleClick = () => {
  open.value = !open.value;
};

const changePic = () => {
  emit("change_pic");
};
</script>

<style scoped>
.font-jura {
  font-family: "Jura";
}
</style>
