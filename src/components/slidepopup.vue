<script setup>
</script>

<template>
	<div class="flex flex-col justify-center items-center">
      <button @click="toggleHint()" class="fixed left-[1%] top-[15%] cursor-pointer text-white z-20">　</button>
      <div class="fixed left-[1%] top-[15%] cursor-pointer">
        <!-- <p class="text-white">Game Hint</p>  -->
        <span v-if="!expanded" class="text-2xl">💡</span>
        <span v-else class="text-2xl text-white">X</span>
      </div>
      <div class="toggle-text text-white bg-[##117090] fixed left-[3%] top-[15%] rounded-lg" :class="{ expanded: expanded }">
          <p class="font-jura text-xl px-5 py-3">Game Hint</p>
          <p class="font-jura px-5 pb-4">Five legendary locations, each rumored to hold a quarter of the secret manual... Explore them and join the fun in helping Uncle Atuu recover his lost manual!</p>
      </div>
	  
	</div>
</template>


<script>
export default {
	data () {
		return {
            expanded: true
		}
	},
	methods: {
		toggleHint() {
            console.log("click toggleHint");
            this.expanded = !this.expanded;
        },
	}
}
</script>


<style scoped>

.toggle-text {
  overflow: hidden;
  /* max-width: 0; */
  max-height: 0;
  transition: max-width 0.3s ease-in-out;
}

.expanded {
  max-width: 350px;
  max-height: 200px;
}

.font-jura {
  font-family: "Jura";
}
</style>
