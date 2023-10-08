<script setup></script>

<template>
  <div class="flex flex-col justify-center items-center">
    <img src="/img/benchmark0.png" class="fixed h-[32rem] right-12 top-[15%]" />
    <button
      @click="toggleGreen()"
      class="fixed right-12 top-[16%] cursor-pointer text-white z-20 text-white text-2xl"
    >
      　
    </button>
    <button
      @click="toggleWhite()"
      class="fixed right-12 top-[65%] cursor-pointer text-white z-20 text-white text-2xl"
    >
      　
    </button>
    <button
      @click="toggleBlue()"
      class="fixed right-12 top-[80%] cursor-pointer text-white z-20 text-white text-2xl"
    >
      　
    </button>

    <!-- toggle green -->
    <div class="fixed right-12 top-[16%] cursor-pointer">
      <span v-if="!greenExpanded" class="text-center text-2xl text-white"
        >○</span
      >
      <span v-else class="text-center text-2xl text-white">×</span>
    </div>
    <div
      class="greenToggle-text text-white bg-[#89B871] bg-opacity-50 fixed right-[5rem] top-[15%] rounded-lg overflow-x-scroll"
      :class="{ greenExpanded: greenExpanded }"
    >
      <div v-if="greenCurPage === 1">
        <p class="font-jura px-5 pt-2">{{ data[0].title }}</p>
        <p class="font-jura px-5 py-3">{{ data[0].ans }}</p>
      </div>
      <div v-else-if="greenCurPage === 2">
        <p class="font-jura px-5 pt-2">{{ data[0].contents[0] }}</p>
        <p class="font-jura px-5 py-3">{{ data[0].contents[1] }}</p>
        <p class="font-jura px-5 py-3">{{ data[0].contents[2] }}</p>
      </div>
      <div v-else="greenCurPage === 3" class="px-5">
        <p class="font-jura pt-2 text-lg">{{ data[0].place }}</p>
        <p class="font-jura py-3">{{ data[0].text }}</p>
      </div>
      <div class="flex justify-center mb-2">
        <button
          @click="greenNextPage"
          class="bg-[#099B9B] py-1 text-sm px-4 rounded-lg"
        >
          NEXT
        </button>
      </div>
    </div>
    <!-- toggle white -->
    <div class="fixed right-12 top-[65%] cursor-pointer">
      <span v-if="!whiteExpanded" class="text-2xl text-white">○</span>
      <p v-else class="text-2xl text-white">×</p>
    </div>
    <div
      class="whiteToggle-text text-white bg-[#A9CB9F] bg-opacity-50 fixed right-[5rem] top-[38%] rounded-lg overflow-x-scroll"
      :class="{ whiteExpanded: whiteExpanded }"
    >
      <div class="px-5">
        <p class="font-jura pt-2 text-lg">{{ data[1].place }}</p>
        <p class="font-jura py-3">{{ data[1].text }}</p>
      </div>
      <div class="flex justify-center mb-2">
        <button
          @click="whiteNextPage"
          class="bg-[#099B9B] py-1 text-sm px-4 rounded-lg"
        >
          NEXT
        </button>
      </div>
    </div>
    <!-- toggle blue -->
    <div class="fixed right-12 top-[80%] cursor-pointer">
      <span v-if="!blueExpanded" class="text-2xl text-white">○</span>
      <span v-else class="text-2xl text-white">×</span>
    </div>
    <div
      class="blueToggle-text text-white bg-[#8FAEBD] bg-opacity-50 fixed right-[5rem] top-[64%] rounded-lg overflow-x-scroll"
      :class="{ blueExpanded: blueExpanded }"
    >
      <div v-if="blueCurPage === 1">
        <p class="font-jura px-5 pt-2">{{ data[2].title }}</p>
        <p class="font-jura px-5 py-3">{{ data[2].ans }}</p>
      </div>
      <div v-else-if="blueCurPage === 2">
        <p class="font-jura px-5 pt-2">{{ data[2].contents[0] }}</p>
        <p class="font-jura px-5 py-3">{{ data[2].contents[1] }}</p>
        <p class="font-jura px-5 py-3">{{ data[2].contents[2] }}</p>
      </div>
      <div v-else="blueCurPage === 3" class="px-5">
        <p class="font-jura pt-2 text-lg">{{ data[2].place }}</p>
        <p class="font-jura py-3">{{ data[2].text }}</p>
      </div>
      <div class="flex justify-center mb-2">
        <button
          @click="blueNextPage"
          class="bg-[#099B9B] py-1 text-sm px-4 rounded-lg"
        >
          NEXT
        </button>
      </div>
    </div>

    <!-- title -->
    <div class="fixed right-5 bottom-[5%] flex flex-col title">
      <p class="text-white text-xs font-jura">Chlorophyll_a</p>
      <p class="text-white text-xs font-jura">Concentration</p>
      <p class="text-white text-xs text-center font-jura">(mg/m-3)</p>
    </div>
    <!-- scale -->
    <div class="fixed right-2.5 top-[15%] flex flex-col title">
      <p class="text-white text-xs font-jura">-　20</p>
      <p class="text-white text-xs mt-[190px] font-jura">-　3</p>
      <p class="text-white text-xs mt-[144px] font-jura">-　0.1</p>
      <p class="text-white text-xs mt-[115px] text-center font-jura">-　0.01</p>
    </div>
  </div>
</template>

<script>
import { computed, toRef, ref } from "vue";

export default {
  data() {
    return {
      greenExpanded: false,
      greenCurPage: 1,
      whiteExpanded: false,
      whiteCurPage: 1,
      blueExpanded: false,
      blueCurPage: 1,
      data: [
        {
          // high
          title: "What does a high concentration of chlorophyll indicate?",
          ans: "It indicates the higher amount of phytoplankton in the ocean.",
          contents: [
            "● Higher phytoplankton concentration helps enhance carbon cycle by absorbing carbon dioxide and releasing oxygen.",
            "● Phytoplankton serve as the foundation of the aquatic food web. Decline in phytoplankton will likely have negative effects on the fishing industry (provides at least 20% of animal protein intake for nearly half of the world's population).",
            "● Low phytoplankton concentration may contribute to lower oxygen concentration, causing high humidity that traps heat.",
          ],
          place: "The middle of the North Atlantic",
          text: "Due to limited nutrients, complex ocean circulation patterns, and other factors, the phytoplankton productivity is low in the middle of the North Atlantic.",
        },
        {
          // meduim
          place: "Indian Ocean",
          text: "Besides the existing oligotrophic conditions, the Indian Ocean warming ( up to 1.2°C compared to global surface warming 0.8°C) has led to a 20% reduction in the number of phytoplankton during the past six decades! Not only does this expose the vulnerability of the marine ecosystem, but it aslo damages the economic ",
        },
        {
          // low
          title: "What does a low concentration of chlorophyll indicate?",
          ans: "It indicates the lower amount of phytoplankton in the ocean.",
          contents: [
            "● Since phytoplankton can capture carbon dioxide which is the main cause of global warming, low concentration of it may lead to higher temperature and unusual climate change.",
            "● Phytoplankton serve as the foundation of the aquatic food web. Decline in phytoplankton will likely have negative effects on the fishing industry (provides at least 20% of animal protein intake for nearly half of the world's population).",
            "● Low phytoplankton concentration may contribute to lower oxygen concentration, causing high humidity that traps heat.",
          ],
          place: "The middle of the North Atlantic",
          text: "Due to limited nutrients, complex ocean circulation patterns, and other factors, the phytoplankton productivity is low in the middle of the North Atlantic.",
        },
      ],
    };
  },
  methods: {
    // green
    toggleGreen() {
      this.greenCurPage = 1;
      this.greenExpanded = !this.greenExpanded;
      if (this.whiteExpanded) {
        this.whiteExpanded = false;
      }
      if (this.blueExpanded) {
        this.blueExpanded = false;
      }

      if (!this.greenExpanded && !this.whiteExpanded && !this.blueExpanded) {
        this.$emit("backBench");
      }
    },
    greenNextPage() {
      this.greenCurPage += 1;
      if (this.greenCurPage === 3) {
        this.$emit("toggleBench", 5);
      }
      if (this.greenCurPage > 3) {
        this.greenExpanded = !this.greenExpanded;
        this.$emit("backBench");
      }
    },
    // white
    toggleWhite() {
      if (this.greenExpanded) {
        this.greenExpanded = false;
      }
      if (this.blueExpanded) {
        this.blueExpanded = false;
      }
      this.whiteExpanded = !this.whiteExpanded;
      if (!this.greenExpanded && !this.whiteExpanded && !this.blueExpanded) {
        this.$emit("backBench");
      } else {
        this.$emit("toggleBench", 6);
      }
    },
    whiteNextPage() {
      this.whiteCurPage += 1;
      if (this.whiteCurPage > 1) {
        this.whiteExpanded = !this.whiteExpanded;
        this.$emit("backBench");
      }
    },
    // blue
    toggleBlue() {
      if (this.whiteExpanded) {
        this.whiteExpanded = false;
      }
      if (this.greenExpanded) {
        this.greenExpanded = false;
      }
      this.blueExpanded = !this.blueExpanded;
      if (!this.greenExpanded && !this.whiteExpanded && !this.blueExpanded) {
        this.$emit("backBench");
      }
    },
    blueNextPage() {
      this.blueCurPage += 1;
      if (this.blueCurPage === 3) {
        this.$emit("toggleBench", 7);
      }
      if (this.blueCurPage > 3) {
        this.blueExpanded = !this.blueExpanded;
        this.$emit("backBench");
      }
    },
  },
};
</script>

<style scoped>
.greenToggle-text {
  overflow: hidden;
  overflow-y: auto;
  /* max-width: 0; */
  max-height: 0;
  transition: max-width 0.3s ease-in-out;
}
.whiteToggle-text {
  overflow: hidden;
  overflow-y: auto;
  /* max-width: 0; */
  max-height: 0;
  transition: max-width 0.3s ease-in-out;
}
.blueToggle-text {
  overflow: hidden;
  overflow-y: auto;
  /* max-width: 0; */
  max-height: 0;
  transition: max-width 0.3s ease-in-out;
}

.greenExpanded {
  max-width: 400px;
  max-height: 190px;
}
.whiteExpanded {
  max-width: 400px;
  max-height: 180px;
}
.blueExpanded {
  max-width: 400px;
  max-height: 200px;
}

.font-jura {
  font-family: "Jura";
}
</style>
