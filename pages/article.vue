<template>
  <div class="min-h-full">
    <main>
      {{ fileList }}
    </main>
  </div>
  <!-- <div>{{ counter }}</div>
    <div v-for="(item, index) in articles" :key="index">{{ item.name }}</div>
    <button @click="clickFn">click me</button>
    <button @click="getData">get data</button> -->
</template>

<script>
import { mapState } from "vuex";

const getData = (store, self) => {
  let params = {};
  return new Promise((resolve) => {
    store.dispatch("getArticles", params).then((res) => {
      resolve(res);
    });
  });
};

export default {
  async asyncData({ route, store, $axios }) {
    let res = await $axios.get(`/api/v1/mat/open/article/openColumn`);
    console.log("res", res.data);
    let data = JSON.stringify(res.data);
    store.commit("SET_FILELIST", data);
    // let res = await $axios.get(`/api/articles`); // 这里只能用$axios
    return {
      res: data,
    };
  },
  name: "IndexPage",
  computed: {
    ...mapState({
      counter: (state) => state.counter,
      fileList: (state) => state.fileList,
    }),
  },
  methods: {
    clickFn() {
      this.$store.commit("INCREMENT");
    },
    async getData(context) {
      let res = await this.$axios.get(`/api/upload`);
      console.log("hhhhhh", res.data);
    },
    onInputSearch() {
      console.log("onInputSearch");
    },
    onClickATag() {
      console.log("click a tag");
    },
  },
};
</script>
