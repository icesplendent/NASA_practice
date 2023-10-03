<template>
	<div class="w-[80vw] h-[80vh] m-auto top-[10vh] left-[10vw] bg-gray-200 z-100 fixed justify-center items-center rounded-3xl">
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
    data() {
        return {
            state: 1,//0: not spot 1: select  2: answer is right
            need_selected: true,
            options:[
                {description: "It is responsible for a significant portion of the Earth's carbon fixation through photosynthesis", is_ans: false, show: false},
                {description: "It forms the base of marine food chains", is_ans: false, show: false},
                {description: "Algal bloom, dense aquatic population of phytoplankton, only have positive effects on ocean ecosystem", is_ans: true, show:false},        
            ]
        }
    },methods: {
        select_ans(index){
            if(this.options[index].is_ans){
                this.state = 2;
                // 要改腳色狀態
            }else{
                this.options[index].show = true
            }
        }
    }
}

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