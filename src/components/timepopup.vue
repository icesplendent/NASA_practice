<script setup>
</script>

<template>
	<div class="flex flex-col justify-center items-center">
      <button @click="toggleHint_time()" class="fixed right-[12%] bottom-[4%] cursor-pointer text-white z-20">　</button>
      <div class="fixed right-[12%] bottom-[4%] cursor-pointer">
        <!-- <p class="text-white">Game Hint</p>  -->
        <span v-if="!expanded_time" class="text-2xl">💡</span>
        <span v-else class="text-2xl text-white">X</span>
      </div>
      <div class="toggle-text text-white  fixed right-[8%] bottom-[8%] rounded-lg" :class="{ expanded_time: expanded_time }">
          <p class="font-jura text-xl px-5 py-3">Timeline</p>
          <p class="font-jura px-5 pb-4">The 3D Earth model displays the distribution of marine chlorophyll over time and throughout the seasons. Click the 'Seasons' button and drag the timeline to observe variations in chlorophyll distribution at different points in time.</p>
      </div>
	  
	</div>
</template>


<script>
export default {
	data () {
		return {
            expanded_time: true
		}
	},
	methods: {
		toggleHint_time() {
            console.log("click toggleHint");
            this.expanded_time = !this.expanded_time;
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

.expanded_time {
  max-width: 400px;
  max-height: 150px;
}

.font-jura {
  font-family: "Jura";
}
</style>
