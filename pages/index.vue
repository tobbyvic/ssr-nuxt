<template>
  <div>
    <div>{{ counter }}</div>
    <div v-for="(item, index) in articles" :key="index">{{ item.name }}</div>
    <button @click="clickFn">click me</button>
    <button @click="getData">get data</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

const getData = (store, self) => {
  let params = {};
  return new Promise((resolve) => {
    store.dispatch("articles", params).then((res) => {
      resolve(res);
    });
  });
};

export default {
  name: "IndexPage",
  computed: {
    ...mapState({
      counter: (state) => state.counter,
    }),
  },
  async asyncData({ route, store }) {
    let res = await getData(store);

    // console.log("articles", res)
    return {
      articles: [...res],
    };
  },
  methods: {
    clickFn() {
      this.$store.commit("INCREMENT");
    },
    async getData() {
      let res = await getData(this.$store);
      console.log(res)
    }
  },
};
</script>
