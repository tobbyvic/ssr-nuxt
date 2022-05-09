<template>
  <div class="container mx-auto my-5">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <section class="px-4 py-5 sm:px-6">
        <h1
          class="bg-gray-300 rounded-lg py-2 px-6 text-base text-gray-800"
          role="alert"
        >
          yyd的测试数据库文件 根路径: /images/
        </h1>
      </section>

      <div class="flex px-4 pb-2 sm:px-6">
        <div class="mb-3 w-96">
          <label
            for="formFileLg"
            class="form-label inline-block mb-2 text-gray-700"
            >文件上传：</label
          >
          <!-- <input
            class="form-control block w-full px-2 py-1.5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="formFileLg"
            type="file"
            @change="handleFiles"
          /> -->
          <form
            ref="myForm"
            enctype="multipart/form-data"
            method="post"
            name="fileinfo"
          >
            <input
              class="form-control block w-full px-2 py-1.5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="formFileLg"
              type="file"
              required
              @change="onFileChange"
            />
            <input
              class="inline-block px-6 py-2.5 mt-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              type="submit"
              value="Stash the file!"
              @click="onUploadFile"
            />
          </form>
          <!-- <button
            @click="getFileList"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            class="inline-block px-6 py-2.5 mt-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            点击上传
          </button> -->
        </div>
      </div>

      <!-- 搜索部分 -->
      <section class="flex px-4 pb-2 sm:px-6">
        <div class="mb-3 xl:w-96">
          <label
            for="exampleFormControlInput1"
            class="form-label inline-block mb-2 text-gray-700"
            >搜索文件名：</label
          >
          <div>
            <input
              :value="searchValue"
              @input="onInput"
              type="text"
              class="inline-block form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="请输入关键字"
            />
            <button
              @click="getFileList"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-6 py-2.5 mt-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <!-- 文件列表部分 -->

      <ul
        role="list"
        class="border border-gray-200 rounded-md divide-y divide-gray-200"
      >
        <li
          class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
          v-for="(item, index) in fileList"
          :key="index"
        >
          <div class="w-0 flex-1 flex items-center">
            <!-- Heroicon name: solid/paper-clip -->
            <svg
              class="flex-shrink-0 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="ml-2 flex-1 w-0 truncate">{{ item }}</span>
          </div>
          <div class="ml-4 flex-shrink-0">
            <a
              :href="`http://101.43.113.93:8000/images/${item}`"
              class="font-medium text-indigo-600 hover:text-indigo-500"
              >Download</a
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { debounce } from "../utils/index";

export default {
  // 这里不知道为什么asyncData不生效, 查了下只能再page中使用，component不能用asyncData
  //   async asyncData({ route, store, $axios }) {
  //   },
  name: "AboutPage",
  props: {},
  data() {
    return {
      searchValue: "",
      uploadFiles: [],
    };
  },
  computed: {
    ...mapState({
      counter: (state) => state.counter,
      articles: (state) => state.articles,
      fileList: (state) => state.fileList,
    }),
  },
  methods: {
    clickFn() {
      this.$store.commit("INCREMENT");
    },
    async getData(context) {
      // 这里的请求是客户端发送的请求，需要用axios库
      // console.log(context)
      //   let res = await getData(this.$store);
      // console.log("click btn", res);
    },
    onFileChange(e) {
      this.uploadFiles = e.target.files;
      console.log(this.uploadFiles);
    },
    onInput(e) {
      console.log(e.target.value);
      this.searchValue = e.target.value;
      setTimeout(() => {
        this.getFileList();
      }, 600);
    },
    handleFiles(e) {
      const files = e.target.files;
      console.log(files);
    },
    onUploadFile(e) {
      e.preventDefault();
      console.log("onUploadFile", e);
      let formData = new FormData();
      let file = this.uploadFiles[0];
      formData.append("input", file);
      this.$axios
        .headers({
          "Content-Type": "application/form-data",
        })
        .post(`/api/upload`, formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getFileList() {
      let res = await this.$axios.get(`/api/upload?name=${this.searchValue}`);
      this.$store.commit("SET_FILELIST", res.data.files);
    },
  },
};
</script>
