<!--
 * @Descripttion: 
 * @version: 
 * @Author: peng
 * @Date: 2021-05-24 14:59:12
 * @LastEditors: peng
 * @LastEditTime: 2021-06-09 14:37:44
-->
<template>
  <div class="result"></div>
</template>

<script>
export default {
  name: "result",
  data() {
    return {
      bac: "",
    };
  },
  mounted() {
    this.loadElementCss();
    this.bac = chrome.extension.connect({ name: "ConToBg" }); //建立通道，并给通道命名
    this.bindEv();

    document.querySelector("body").oncontextmenu = (e) => {
      var txt = window.getSelection
        ? window.getSelection().toString()
        : document.selection.createRange().text;
      if (txt) e.preventDefault();
      this.trans(txt);
    };
  },
  methods: {
    trans(txt) {
      this.bac.postMessage({ msg: txt }); //利用通道发送一条消息。
    },
    bindEv() {
      this.bac.onMessage.addListener((res) => {
        console.log(res);
        const h = this.$createElement;
        this.$notify({
          title: "翻译结果",
          message: h("i", { style: "color: #409eff" }, res.msg),
        });
      });
    },
    //**引入elementui css */
    loadElementCss() {
      let element_css = document.createElement("link");
      element_css.href =
        "https://unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css";
      element_css.rel = "stylesheet";
      document.head.append(element_css);
    },
  },
};
</script>

<style>
</style>
