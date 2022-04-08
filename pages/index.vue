<template>
  <div>
    <div>this is index page</div>
    <div v-for="(item, index) in articles" :key="index">{{ item.name }}</div>
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
  clickFn() {
    this.$store.commit("INCREMENT");
  },
  async asyncData({ route, store }) {
    let res = await getData(store)

    // console.log("articles", res)
    return {
      articles: [...res],
    };
  },
};
</script>
