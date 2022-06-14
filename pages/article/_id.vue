<template>
  <section class="opendoc">
    <section class="left">
      <h2>栏目列表</h2>
      <section class="list">
        <el-tree
          ref="treeDom"
          :highlight-current="true"
          class="tree"
          :data="data"
          :props="defaultProps"
          :default-expand-all="true"
          node-key="key"
          :current-node-key="currNodeKey"
          @node-click="handleNodeClick"
        ></el-tree>
      </section>
    </section>
    <section class="center">
      <!-- <div class="header">
        <div class="title">{{ 'This is title.' }}</div>
        <div class="time">更新日期时间 xxxx - xx - xx 22:45</div>
      </div> -->
      <article
        id="js-toc-content"
        class="markdown-body"
        v-html="currentArticle"
      ></article>
    </section>
    <section class="right">
      <h2>文档目录</h2>
      <div id="js-toc" style="padding: 30px"></div>
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";
import api from "@/utils/api";

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
    console.log("routeData", route);
    let tree = await $axios.get(`/api/v1/mat/open/article/openColumn`);

    let id = route.params.id;
    let article = await $axios.get(`${api.openArticleByIdApi}/${id}`);
    // store.commit("SET_FILELIST", data);
    return {
      data: tree.data,
      defaultProps: {
        children: "children",
        label: "title",
      },
      currentArticle: article.data.htmlBody,
      currNodeKey: id,

      currParaId: "", // 文章段落标题
      currNodeTitle: "", // 当前文档大标题
    };
  },
  name: "IndexPage",
  computed: {
    ...mapState({
      counter: (state) => state.counter,
      fileList: (state) => state.fileList,
    }),
  },
  mounted() {
    this.$refs["treeDom"].setCurrentKey(this.currNodeKey);
    this.generateTOC();
  },
  methods: {
    clickFn() {
      this.$store.commit("INCREMENT");
    },
    // 根据html内容生成目录
    generateTOC() {
      const container = document.getElementById("js-toc-content");
      const tocContainer = document.getElementById("js-toc");
      tocContainer.textContent = ""; // 清空所有childNodes

      const list = container.querySelectorAll("h1,h2,h3");
      console.log("list", list);

      let nodeList = [];
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let index = i;

        console.log("item.parentNode", item.parentNode.nodeName);
        if (item.parentNode.nodeName === "BLOCKQUOTE") {
          continue;
        }

        item.setAttribute("id", `${item.nodeName}_${index}`);

        let w = document.createElement("div");
        let d = document.createElement("a");
        nodeList.push({ d, item });
        d.innerText = item.innerText;
        d.onclick = () => {
          this.currParaId = item.id;
          nodeList.forEach((obj) => {
            if (
              this.currParaId !== obj.item.id &&
              obj.d.style.color === "rgb(39, 102, 216)"
            ) {
              obj.d.style.color = "#000000";
            }
          });
          window.scrollTo(0, item.offsetTop - 100);
        };
        d.style.fontWeight = "";
        d.style.color = this.currParaId === item.id ? "#2766D8" : "#000000";
        d.onmouseover = () => {
          d.style.color = "#2766D8";
        };
        d.onmouseleave = () => {
          this.currParaId !== item.id && (d.style.color = "#000000");
        };
        let offsetLeft = 0;
        if (item.nodeName === "H1") {
          offsetLeft = 0;
        } else if (item.nodeName === "H2") {
          offsetLeft = 20;
        } else {
          offsetLeft = 40;
        }
        d.style.marginLeft = `${offsetLeft}px`;
        w.style.marginBottom = "18px";
        w.style.overflow = "hidden";
        w.style.textOverflow = "ellipsis";
        w.style.whiteSpace = "nowrap";

        w.appendChild(d);
        tocContainer.appendChild(w);
      }
    },
    // 点击左侧栏目节点
    async handleNodeClick(obj, node, comp) {
      console.log(obj);
      console.log(this.currNodeKey);
      if (obj.isLeaf !== null) {
        // 非叶子节点
        console.log("not leaf");
        this.$refs["treeDom"].setCurrentKey(this.currNodeKey);
      } else {
        // 叶子文章节点
        this.$refs["treeDom"].setCurrentKey(obj.key);
        this.currNodeKey = obj.key;
        this.currNodeTitle = obj.title;

        // 请求文章内容
        if (obj.key) {
          //   let article = await this.updateArticle(obj.key);
          const ptl = window.location.protocol;
          const h = window.location.host;
          let hostUrl = ptl + "//" + h;
          let newUrl = `${hostUrl}/article/${obj.key}`;
          window.location.href = newUrl;
          //   window.open(
          //     newUrl,
          //     `ID为${item.focusedUser || item.focusUser}的用户个人页面`
          //   );
        }
      }
    },
    // 获取文章展示,生成TOC
    updateArticle(id) {
      return new Promise((resolve, reject) => {
        this.$axios
          .get(`${api.openArticleByIdApi}/${id}`)
          .then((res = {}) => {
            const container = document.getElementById("js-toc-content");
            container.innerHTML = res.data.htmlBody;
            this.generateTOC();
            resolve(res);
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "~/assets/css/github-markdown.css";
.opendoc {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;

  display: flex;
  .left {
    width: 280px;
    background-color: #ffffff;
    font-weight: normal;
    font-size: 16px;
    font-family: AlibabaSans-Light;
    text-align: left;
    color: #000;
    position: fixed;
    height: 100vh;
    z-index: 1;
    overflow-y: auto;
    overflow-x: hidden;

    h2 {
      padding: 22px 30px;
      margin: 0;
      font-family: Source Han Sans CN-Normal;
      font-weight: normal;
      font-size: 18px;
      text-align: left;
      color: #000;

      border-top: 1px solid #ededed;
      border-bottom: 1px solid #ededed;
    }

    .list {
      padding: 22px 30px;

      div {
        height: 24px;
        margin-bottom: 24px;
      }
      ::v-deep .el-tree-node {
        color: #000;
        .el-tree-node__label {
          font-size: 16px;
          font-weight: 300;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .el-tree-node__content {
          padding: 8px 0;
        }
      }
    }
    // ::v-deep .el-tree-node:focus > .el-tree-node__content {
    //   background-color: #ffffff;
    // }

    // ::v-deep .el-tree-node:hover > .el-tree-node__content {
    //   background-color: #ffffff;
    // }
  }
  .center {
    padding: 30px;
    width: calc(100vw - 680px);
    margin-left: 280px;
    margin-right: 320px;
    z-index: 0;
    .header {
      padding: 0 45px;
      .title {
        font-size: 40px;
        font-weight: normal;
        font-family: Source Han Sans CN-Medium;
      }
      .time {
        margin-top: 15px;
        color: #b4b4b4;
        font-size: 12px;
        font-family: Source Han Sans CN-Normal;
      }
    }
  }
  ::v-deep .markdown-body {
    padding: 20px;
    font-family: AlibabaSans-Light;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: normal;
      font-family: Source Han Sans CN-Normal;
    }
    h1,
    h2 {
      font-family: Source Han Sans CN-ExtraLight;
    }
    p {
      line-height: 30px;
      font-weight: 300;
    }
    ol {
      list-style: decimal;
    }
    ul {
      list-style: disc;
      li::marker {
        font-size: 12px;
        color: #4d4d4d;
      }
    }
    // 段落引用
    blockquote {
      // padding: 10px;
      background: #d9ede8;
    }
    // 代码块
    pre {
      background-color: rgba(0, 0, 0, 0.05);
    }
    // 表格
    table {
      display: table;
      width: 100%;
      th {
        color: white;
        font-weight: normal;
        background: #91969f;
      }
      td {
        text-align: center;
        background: #f2f2f2;
      }
    }
  }

  .right {
    width: 320px;
    background-color: #ffffff;
    font-family: AlibabaSans-Light;
    font-weight: 300;
    font-size: 16px;
    text-align: left;
    color: #000;
    position: fixed;
    right: 0;
    height: 100vh;
    z-index: 1;
    overflow: auto;

    h2 {
      padding: 22px 30px;
      margin: 0;
      font-family: Source Han Sans CN-Normal;
      font-weight: normal;
      font-size: 18px;
      text-align: left;
      color: #000;

      border-top: 1px solid #ededed;
      border-bottom: 1px solid #ededed;
    }
  }
}
</style>
