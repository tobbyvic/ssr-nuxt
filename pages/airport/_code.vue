<template>
  <div class="container mx-auto my-5">
    <h1 class="text-2xl leading-7 font-semibold">
      This is the Airport Detail Page
    </h1>
    <p>This page contains the specific information about an airport.</p>
  </div>
</template>

<script>
import airports from "~/data/airports.js";

export default {
  name: "AirportDetailPage",
  layout: "AirportDetail",
  // asyncData({ route }) {
  //   const airport = airports.filter(
  //     (airport) => airport.abbreviation === route.params.code.toUpperCase()
  //   )[0];
  //   return {
  //     airport,
  //   };
  // },
  async asyncData({ route, store, $axios }) {
    // let res = await $axios.get(`/api/v1/mat/open/article/openColumn`);
    // console.log("得到的res数据")
    // let res = await $axios.get(`/api/articles`); // 这里只能用$axios
    return {};
  },
  head() {
    return {
      title: `${this.airport.name}Airport Information | Aiport App`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Detailed information about the specific airport.",
        },
      ],
    };
  },
};
</script>
