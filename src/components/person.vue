<template>
  <div class="fixed left-[1%] h-full w-[5%] z-10">
    <div class="h-full flex flex-col justify-end pb-12">
      <div class="basis-[30%] relative">
        <div class="flex flex-col space-y-12 items-stretch">
          <div
            class="cursor-pointer"
            v-for="(x, index) in persons"
            :key="index"
            @click="personClicked(index)"
          >
            <img :src="x.pic" alt="person_pic" />
            <transition name="pop">
              <div
                id="dialog"
                v-if="x.show"
                :class="x.class"
                class="absolute left-[5rem]"
              >
                <p
                  class="p-2 w-[300%] bg-[#A9CB9F] bg-opacity-50 text-lg font-jura rounded-lg"
                >
                  {{ x.say }}
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emits = defineEmits(["personClicked"]);

const persons = ref([
  {
    pic: "/person0.svg",
    position: 0,
    class: "first",
    show: false,
    disappear: false,
    say: "Phytoplankton thrives where I live due to strong upwelling…",
  },
  {
    pic: "/person1.svg",
    position: 1,
    class: "second",
    show: false,
    disappear: false,
    // say: "",
    say: "Where I live is undergoing rise in temperature and decrease in sea ice cover, which leads o longer growing seasons for phytoplankton…",
  },
  {
    pic: "/person2.svg",
    position: 2,
    class: "third",
    show: false,
    disappear: false,
    // say: "",
    say: "Temperature is higher and higher in which I live, and the coral reef are dying…",
  },
]);

const personClicked = (index) => {
  emits("personClicked", persons.value[index].position);

  if (persons.value[index].show == false) {
    persons.value[index].show = true;
    for (let i = 0; i < 3; i++) {
      if (i !== index) {
        persons.value[i].show = false;
      }
    }
  } else {
    persons.value[index].show = false;
  }

  //   persons.value[index].show = !persons.value[index].show;
};
</script>

<style scoped>
.first {
  top: 0rem;
}

.second {
  top: 6.5rem;
}

.third {
  top: 15rem;
}

#dialog {
  /* overflow: hidden; */
  animation: popup 0.5s cubic-bezier(0.5, 0, 0.5, 1);
  /* animation-fill-mode: linear; */
}

.pop-enter-active,
.pop-leave-active {
  transition:
    transform 0.4s cubic-bezier(0.5, 0, 0.5, 1),
    opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateX(-100%);
}

@keyframes popup {
  0% {
    transform: scale(0);
    /* width: 0; */
    opacity: 0;
    transform: translateX(-20%);
  }
  100% {
    transform: scale(1);
    transform: translateX(0);
    width: fit-content;
    opacity: 1;
    overflow: none;
  }
}
</style>
