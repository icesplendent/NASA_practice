import { defineStore } from "pinia";

export const useCollectionStore = defineStore("collection", {
  id: "collection",
  state: () => {
    return { collection: [] };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addCollection(x) {
      this.collection.push(x);
    },
  },
});
