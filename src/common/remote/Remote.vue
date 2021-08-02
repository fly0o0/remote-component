<!-- 挂载远程组件 -->

<template>
  <component
    class="remote-test"
    :is="mode"
    v-bind="$attrs"
    v-on="$listeners">
  </component>
</template>

<script>
import scriptLoad from "./scriptLoad"

export default {
  name: "Remote",
  props: {
    // 父组件提供请求地址
    remoteUrl: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      mode: "",
    };
  },
  mounted() {
    this.mountCom(this.remoteUrl)
  },
  methods: {
    async mountCom(remoteUrl) {
      // 模拟node环境
      window.module = {}
      window.exports = {}

      // 下载远程js
      await scriptLoad(remoteUrl)

      // 挂载在mode
      this.mode = window.module.exports

      // 清除
      delete window.module
      delete window.exports
    },
  }
}
</script>