<template>
	<div class="w-[80vw] h-[80vh] m-auto top-[10vh] left-[10vw] bg-gray-200 z-100 fixed justify-center items-center rounded-3xl">
		<img src='../assets/arrow.svg' class='h-[5%]'>
        <div class="flex h-full rounded-3xl">
            <div class="w-[70%] h-full px-10 py-5 bg-white rounded-l-3xl">
                <div v-if='state==0'>
                  <h1 class="text-3xl"> answer correction </h1>
                </div>
                <div v-if='state==1'>            
                    <h1 class="text-3xl"> here is the popup </h1>
                    <p class='my-5'> 
                    Q：Diatoms are a significant group of phytoplankton in California waters and also largest species of phytoplankton in the world. Which are not true about phtoplankton like diatoms playing indispensable role in world's ecosystems and the overall health of the planet？
                    </p>
                    <div v-if="need_selected" class="mt-10">
                        <ul>
                            <li v-for="(item, index) in options" :key="index" 
                            class="w-[90%] h-auto  bg-gray-300 rounded-full my-6 flex text-2xl relative">
                                <div @click="select_ans(index)" class='flex'>
                                    <div class=' h-auto aspect-[1/1] bg-fuchsia-300 rounded-full p-5' >
                                    &ensp;{{index+1}}.  
                                    </div>
                                    {{item.description}}
                                </div>
                                <div v-if="!item.is_ans&&item.show" class="popup-container rounded-3xl bg-blue-500">
                                    <!-- Popup content here -->
                                    <h1 class='text-3xl m-3'> you're wrong</h1>
                                    <button @click="item.show = false"  class='text-3xl bg-blue-200 rounded-full p-3'> 
                                    try again 
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                
                </div>
                <div v-if='state==2'>
                  <h1 class="text-3xl"> answer correction </h1>
                </div>
            </div>
            <img src="../assets/test.jpg" class="w-[30%] h-full bg-gray-500 rounded-r-3xl"/>

            
		</div>
	</div>
</template>

<script>
export default {
  props: {
    data: Object,
    default: () => {},
  },
  methods: {
    select_ans(index) {
      if (this.data.options[index].is_ans) {
        this.data.state = 2; // Corrected line
      } else {
        this.data.options[index].show = true; // Corrected line
      }
      console.log("Method triggered", this.data.options[index].is_ans); // For debugging
      console.log("Method triggered show", this.data.options[index].show); // Corrected line
    },
  },
};
</script>

<style scoped>
.popup-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  z-index: 999; /* Ensure the popup is above other content */
}
</style>
