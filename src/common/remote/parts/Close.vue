<!-- 关闭组件 -->
<template>
  <span @click="close" class="close"></span>
</template>

<script>
export default {
  name: "CouponClose",
  inject: ["couponCloseCallback"],
  methods: {
    close() {
      this.couponCloseCallback && this.couponCloseCallback();
    },
  },
};
</script>

<style lang="less" scoped>
.close {
  &.gg {
    background-image: url("//yun.tuisnake.com/h5-mami/dist/close-gg.png") !important;
    background-size: 100% !important;
    width: 92px !important;
    height: 60px !important;
  }
}
</style>