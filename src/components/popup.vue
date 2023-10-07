<template>
  <div
    v-if="showPopup"
    class="w-[80vw] h-[80vh] m-auto top-[10vh] left-[10vw] z-20 fixed justify-center items-center rounded-3xl"
  >
    <div
      v-if="!inner_pop || my_data.state != 2"
      class="absolute top-0 right-[-9%] w-[20%] z-20"
    >
      <img :src="my_data.real" alt="" />
    </div>
    <div class="h-[5%] pl-4 py-2 cursor-pointer" @click="closePopup()">
      <img src="../assets/arrow_2.svg" class="h-full" />
    </div>
    <div class="flex h-full rounded-3xl absolute w-full">
      <div class="w-[70%] h-full pl-10 py-10 bg-white rounded-l-3xl">
        <div v-if="my_data.state == 0" class="relative h-[100%] w-full">
          <h1 class="text-3xl font-jura">{{ data.state_0_title }}</h1>
          <div class="mt-10 rounded-full flex justify-center">
            <div class="relative w-[60%] text-center">
              <img class="w-full" src="/dialog.svg" alt="" />
              <p
                class="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-120%] font-jura"
              >
                I'm not the one you are looking for.
              </p>
            </div>
          </div>
          <div class="flex">
            <p class="basis-[70%] shrink-0 text-xl font-jura">
              {{ data.state_0_content }}
            </p>
            <div
              class="basis-[30%] shrink flex flex-col justify-start rounded-l-3xl"
            >
              <img
                :src="my_data.character"
                class="aspect-square rounded-l-3xl bg-white"
              />
            </div>
          </div>
        </div>
        <div v-if="my_data.state == 1">
          <div>
            <h1 class="text-4xl font-jura">{{ my_data.state_1_title }}</h1>
            <p class="my-5 text-xl font-jura">
              {{ my_data.state_1_question }}
            </p>
          </div>
          <div class="">
            <ul>
              <li
                v-for="(item, index) in my_data.options"
                :key="index"
                @click="select_ans(index)"
                @mouseenter="isHover[index] = true"
                @mouseleave="isHover[index] = false"
                :class="[isHover[index] ? isHoverChoice : notHoverChoice]"
                class="flex w-full h-fit my-5 items-stretch bg-gray-300 rounded-full cursor-pointer"
              >
                <div
                  :class="[isHover[index] ? isHoverCircle : notHoverCircle]"
                  class="shrink-0 relative aspect-square rounded-full w-20 text-center"
                >
                  <div class="flex flex-col justify-center h-full">
                    <p class="font-jura">{{ index + 1 }}.</p>
                  </div>
                </div>
                <div class="h-full p-3 flex flex-col justify-center">
                  <p class="font-jura">
                    {{ item.description }}
                  </p>
                </div>
              </li>
            </ul>
            <div
              v-if="inner_pop"
              class="popup-container rounded-3xl bg-blue-500"
            >
              <!-- Popup content here -->
              <div id="popup_content">
                <h1 class="text-3xl font-jura m-3">you're wrong</h1>
                <div class="flex justify-center">
                  <button
                    @click="inner_pop = false"
                    class="text-3xl bg-blue-200 rounded-full px-5 py-3"
                  >
                    <p class="font-jura">try again</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="my_data.state == 2" class="relative h-[100%] w-full">
          <div>
            <h1 class="text-4xl font-jura">Ans correction</h1>
            <p class="text-xl font-jura mt-5">
              {{ my_data.state_2_answer }}
            </p>
          </div>
          <div class="mt-10">
            <h1 class="text-2xl font-jura">💡 Interesting Facts:</h1>
            <p class="text-xl font-jura mt-3">
              {{ my_data.state_2_fact }}
            </p>
          </div>
        </div>
      </div>
      <div
        v-if="inner_pop && my_data.state == 2"
        class="absolute w-[20%] right-10 top-0"
      >
        <img :src="my_data.state_2_prize_src" />
      </div>
      <img
        src="../assets/test.jpg"
        class="w-[30%] h-full bg-gray-500 rounded-r-3xl"
      />
    </div>
  </div>
  <div
    v-if="showPopup && my_data.state_1_question"
    id="pop-up-picture"
    @click="test"
    class="absolute right-0 top-0 h-screen flex z-20"
  >
    <div class="flex flex-col h-full">
      <div class="basis-[50%]"></div>
      <img class="rounded-l-3xl bg-white" :src="my_data.character" />
    </div>
  </div>
</template>

<script setup>
import { computed, toRef, ref } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => [],
  },
  showPopup: {
    type: Boolean,
    default: () => false,
  },
});
const emits = defineEmits(["closePopup", "update_data"]);

// data
const isHover = ref([false, false, false]);
const isHoverCircle = ref("isHoverCircle");
const notHoverCircle = ref("notHoverCircle");
const isHoverChoice = ref("isHoverChoice");
const notHoverChoice = ref("notHoverChoice");

const inner_pop = ref(false);

const my_data = toRef(props, "data");
const showPopup = toRef(props, "showPopup");

const change = () => {
  my_data.value.state = 2;
};

const test = () => {
  // console.log(my_data.value.options[0].is_ans, my_data.value.options[0].show);
  console.log(isHover.value);
};

const select_ans = (index) => {
  if (my_data.value.options[index].is_ans) {
    my_data.value.state = 2;
    inner_pop.value = true;
    isHover.value[index] = false;
    emits("update_data", my_data);
  } else {
    my_data.value.options[index].show = true;
    inner_pop.value = true;
  }
  console.log("Method triggered", my_data.value.options[index].is_ans);
};

const closePopup = () => {
  inner_pop.value = false;
  emits("closePopup");
};
</script>

<style scoped>
.popup-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 37%;
  left: 25%;
  width: 50%;
  height: 30%;
  z-index: 999; /* Ensure the popup is above other content */
}

.isHoverCircle {
  background-color: #3ec6ff;
}

.notHoverCircle {
  background-color: #d5c0ec;
}

.isHoverChoice {
  background-color: gray;
}

.notHoverChoice {
  background-color: #d9d9d9;
}
</style>
