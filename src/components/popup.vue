<template>
  <div
    v-if="this.showPopup"
    class="w-[80vw] h-[80vh] m-auto top-[10vh] left-[10vw]   z-100 fixed justify-center items-center rounded-3xl"
  >
    <div class='h-[5%]' @click='closePopup()'>
            <img src='../assets/arrow.svg' class='h-full'>
    </div>
    <div class="flex h-full rounded-3xl absolute w-full">
      <div class="w-[70%] h-full px-10 py-5 bg-white rounded-l-3xl">
        <div v-if="my_data.state == 0" class='relative h-[100%] w-full'>
          <h1 class="text-3xl m-5 mt-10">{{data.state_0_title}}</h1>
          <p class='bg-gray-300 h-auto w-[80%] p-5 m-5 rounded-full'>I’m not the one you are looking for.</p>
          <p class="text-xl m-5 mr-[40%]">{{data.state_0_content}}</p>
           <img src='../assets/character.jpg' class='absolute right-0 bottom-0 w-[30%]'/>
        </div>
        
        <div v-if="my_data.state == 1">
          <h1 class="text-3xl">{{my_data.state_1_title}}</h1>
          <p class="my-5">
            {{my_data.state_1_question}}
          </p>
          <div  class="mt-10">
            <ul>
              <li
                v-for="(item, index) in my_data.options"
                :key="index"
                class="w-[90%] h-auto bg-gray-300 rounded-full my-6 flex text-2xl relative"
              >
                <div @click="select_ans(index)" class="flex">
                  <div
                    class="h-auto aspect-[1/1] bg-fuchsia-300 rounded-full p-5"
                  >
                    &ensp;{{ index + 1 }}.
                  </div>
                  {{ item.description }}
                </div>
                <div
                  v-if="!item.is_ans && item.show"
                  class="popup-container rounded-3xl bg-blue-500"
                >
                  <!-- Popup content here -->
                  <h1 class="text-3xl m-3">you're wrong</h1>
                  <button
                    @click="item.show = false"
                    class="text-3xl bg-blue-200 rounded-full p-3"
                  >
                    try again
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="data.state == 2" class='relative h-[100%] w-full'>
          <h1 class="text-3xl">answer correction</h1>
          <p class='bg-gray-300 h-auto w-[70%] p-5 m-5 text-xl' >{{my_data.state_2_answer}}</p>
          <p class='bg-gray-300 h-auto w-[70%] p-5 m-5 text-2xl' >💡 Interesting Facts：</p>
          <p class='bg-gray-300 h-auto w-[70%] p-5 m-5 text-xl' >{{my_data.state_2_fact}}</p>
          <div class='absolute right-0 bottom-0 w-[30%]'>
           <img :src=my_data.state_2_prize_src />
  
           <img src='../assets/character.jpg' />
          </div>
        </div>
      </div>
      <img
        src="../assets/test.jpg"
        class="w-[30%] h-full bg-gray-500 rounded-r-3xl"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    default: () => {},
    showPopup: Boolean,
  },
  data(){
    return{
        my_data:this.data
    }
  },methods: {
    select_ans(index) {
      if (this.my_data.options[index].is_ans) {
        this.my_data.state = 2; // Corrected line
        this.$emit('update_data', this.my_data);
      } else {
        this.my_data.options[index].show = true; // Corrected line
      }
      console.log("Method triggered", this.my_data.options[index].is_ans); // For debugging
      console.log("Method triggered show", this.my_data.options[index].show); // Corrected line
    },closePopup() {
      this.$emit('closePopup');
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
