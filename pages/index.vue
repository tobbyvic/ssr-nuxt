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
  return new Promise(resolve => {
    store.dispatch("getArticles", params).then(res => {
      resolve(res);
    });
  });
};

export default {
  async asyncData({ route, store, $axios }) {
    let res = await $axios.get(`/api/articles`); // 这里只能用$axios
    return {
      test: []
    };
  },
  name: "IndexPage",
  computed: {
    ...mapState({
      counter: state => state.counter,
      articles: state => state.articles
    })
  },
  methods: {
    clickFn() {
      this.$store.commit("INCREMENT");
    },
    async getData(context) {
      // 这里的请求是客户端发送的请求，需要用axios库
      // console.log(context)
      let res = await getData(this.$store);
      // console.log("click btn", res);
    }
  }
};
</script>
