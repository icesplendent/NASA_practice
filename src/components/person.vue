<template>
  <div class="fixed left-[1%] h-full w-[5%] z-10">
    <div class="h-full flex flex-col justify-end pb-12">
      <div class="basis-[30%] flex flex-col space-y-12 items-stretch">
        <div
          class="cursor-pointer"
          v-for="(x, index) in persons"
          :key="index"
          @click="personClicked(index)"
        >
          <img :src="x.pic" alt="person_pic" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["personClicked"]);

const persons = [
  {
    pic: "/person0.svg",
    position: 0,
  },
  {
    pic: "/person1.svg",
    position: 1,
  },
  {
    pic: "/person2.svg",
    position: 2,
  },
];

const personClicked = (index) => {
  emits("personClicked", persons[index].position);
};
</script>

<style lang="scss" scoped></style>
