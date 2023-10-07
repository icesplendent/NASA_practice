import { defineStore } from "pinia";

export const useCollectionStore = defineStore("collection", {
  id: "collection",
  state: () => {
    return { collection: [], point_states:[1, 1, 1, 0, 0] };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addCollection(x) {
      this.collection.push(x);
    },
    correct_state(x) {
      this.point_states[x] = 2
    }
  },
});
