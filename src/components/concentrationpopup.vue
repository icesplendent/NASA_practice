<script setup>
</script>

<template>
	<div class="flex flex-col justify-center items-center">
      <button @click="toggleHint_conc()" class="fixed right-[4%] top-[10%] cursor-pointer text-white z-20">　</button>
      <div class="fixed right-[4%] top-[10%] cursor-pointer">
        <!-- <p class="text-white">Game Hint</p>  -->
        <span v-if="!expanded_conc" class="text-2xl">💡</span>
        <span v-else class="text-2xl text-white">X</span>
      </div>
      <div class="toggle-text text-white  fixed right-[8%] top-[10%] rounded-lg" :class="{ expanded_conc: expanded_conc }">
          <p class="font-jura text-xl px-5 py-3">Colorbar</p>
          <p class="font-jura px-5 pb-4">The points on the chlorophyll-a concentration color bar tell you what the concentration of chlorophyll indicates and how it represents the concentration of phytoplankton in the ocean. The green color represents a high concentration of chlorophyll, the white color corresponds to concentrations in the middle range, the blue color indicates lower concentrations, and the black color represents areas with no available data.</p>
      </div>
	  
	</div>
</template>


<script>
export default {
	data () {
		return {
            expanded_conc: true
		}
	},
	methods: {
		toggleHint_conc() {
            console.log("click toggleHint");
            this.expanded_conc = !this.expanded_conc;
        },
	}
}
</script>


<style scoped>

.toggle-text {
  /* max-width: 0; */
  overflow: hidden;
  overflow-y: auto;
  /* max-width: 0; */
  max-height: 0;
  transition: max-width 0.3s ease-in-out;
}

.expanded_conc {
  max-width: 400px;
  max-height: 150px;
}

.font-jura {
  font-family: "Jura";
}
</style>
