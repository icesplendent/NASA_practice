<script setup>
</script>

<template>
	<div class="flex flex-col justify-center items-center">
      <img src="/img/benchmark0.png" class="fixed h-[32rem] right-12 top-[15%]">
      <button @click="toggleGreen()" class="fixed right-12 top-[16%] cursor-pointer text-white z-20 text-white text-2xl">　</button>
      <button @click="toggleWhite()" class="fixed right-12 top-[65%] cursor-pointer text-white z-20 text-white text-2xl">　</button>
      <button @click="toggleBlue()" class="fixed right-12 top-[80%] cursor-pointer text-white z-20 text-white text-2xl">　</button>
      
      <!-- toggle green -->
      <div class="fixed right-12 top-[16%] cursor-pointer">
        <span v-if="!greenExpanded" class="text-center text-2xl text-white">○</span>
        <span v-else class="text-center text-2xl text-white">×</span>
      </div>
      <div id="greenToggle-text" class="greenToggle-text text-white bg-[#117090] fixed right-[5rem] top-[15%] rounded-lg overflow-x-scroll" :class="{ greenExpanded: greenExpanded }">
        <p class="font-jura px-5 pt-2">● Since phytoplankton can capture carbon dioxide which is the main cause to global warming, low concentration of it may lead to higer temperature and unusual climate change.</p>
        <p class="font-jura px-5 py-3">● Phytoplankton serve as the foundation of the aquatic food web, the primary producers. Decline in phytoplankton will likely have negative effects on fishing industry (provides  at least 20% of animal protein intake for nearly half of the world's population) </p>
      </div>
      <!-- toggle white -->
      <div class="fixed right-12 top-[65%] cursor-pointer">
        <span v-if="!whiteExpanded" class="text-2xl text-white">○</span>
        <p v-else class="text-2xl text-white">×</p>
      </div>
      <div class="whiteToggle-text text-white bg-[#117090] fixed right-[5rem] top-[43%] rounded-lg" :class="{ whiteExpanded: whiteExpanded }">
          <p class="font-jura px-5 pt-2">Game Hint</p>
          <p class="font-jura px-5 py-3">Five legendary locations, each rumored to hold a quarter of the secret manual... Explore them and join the fun in helping Uncle Atuu recover his lost manual!</p>
      </div>
      <!-- toggle blue -->
      <div class="fixed right-12 top-[80%] cursor-pointer">
        <span v-if="!blueExpanded" class="text-2xl text-white">○</span>
        <span v-else class="text-2xl text-white">×</span>
      </div>
      <div class="blueToggle-text text-white bg-[#117090] fixed right-[5rem] top-[60%] rounded-lg" :class="{ blueExpanded: blueExpanded }">
          <p class="font-jura text-xl px-5 py-3">Game Hint</p>
          <p class="font-jura px-5 pb-4">Five legendary locations, each rumored to hold a quarter of the secret manual... Explore them and join the fun in helping Uncle Atuu recover his lost manual!</p>
      </div>
    
      <!-- title -->
	  <div class="fixed right-5 bottom-[5%] flex flex-col title">
        <p class="text-white text-xs font-jura">Chlorophyll_a</p>
        <p class="text-white text-xs font-jura">Concentration</p>
        <p class="text-white text-xs text-center font-jura"> (mg/m-3)</p>
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
export default {
	data () {
		return {
            greenExpanded: false,
            whiteExpanded: false,
            blueExpanded: false,
		}
	},
	methods: {
		toggleGreen() {
            console.log("click toggleGreen");
            this.greenExpanded = !this.greenExpanded;
        },
		toggleWhite() {
            console.log("click toggleWhite");
            this.whiteExpanded = !this.whiteExpanded;
        },
		toggleBlue() {
            console.log("click toggleBlue");
            this.blueExpanded = !this.blueExpanded;
        },
	}
}
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
  overflow-y: auto;
  overflow: hidden;
  /* max-width: 0; */
  max-height: 0;
  transition: max-width 0.3s ease-in-out;
}

.greenExpanded {
  max-width: 400px;
  max-height: 200px;
}
.whiteExpanded {
  max-width: 400px;
  max-height: 200px;
}
.blueExpanded {
  max-width: 400px;
  max-height: 200px;
}

.font-jura {
  font-family: "Jura";
}
</style>
