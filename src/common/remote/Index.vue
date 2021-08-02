<template>
  <div class="coupon-modal-container" @click="couponClick">
    <RemoteImport v-show="isVisible" :remoteUrl="remoteUrl" :lottery="lottery" />
  </div>
</template>

<script>
import RemoteImport from "./Remote.vue";
import Vue from "vue";

import Button from "./parts/Button";
import Close from "./parts/Close";
import Detail from "./parts/Detail";
import Title from "./parts/Title";

Vue.component("CpButton", Button);
Vue.component("CpClose", Close);
Vue.component("CpDetail", Detail);
Vue.component("CpTitle", Title);

export default {
  components: {
    RemoteImport,
  },
  props: {
    industryId: {
      type: String,
      required: false,
    },
    lotteryDirty: {
      type: Object,
      required: false,
      default: () => {
        return {};
      },
    },
    bcdOrderId: {
      type: String,
      required: false,
    },
    isVisible: {
      type: Boolean,
      required: false,
      default: () => {
        return false
      }
    }
  },
  provide() {
    return {
      couponCloseCallback: () => {
        console.log("couponCloseCallback trigger");
        this.$emit('update:isVisible', false)
      },
      couponUseCallback: () => {
        console.log("couponUseCallback trigger");
      },
    };
  },
  data() {
    return {
      remoteUrl: "//yun.tuia.cn/tuia/cdn/remote/rollup.js"
    };
  },
  methods: {
    couponClick() {},
  },
  computed: {
    lottery() {
      return {
        img: "https://yun.tuisnake.com/babi/img/114e75c7-s009nm2kwk.gif",
        title: "测试广告",
        link: "https://www.baidu.com",
      };
    }
  }
};
</script>
