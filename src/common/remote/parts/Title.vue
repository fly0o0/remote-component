<template>
  <span class="coupon-modal-title name" @click="press">{{lottery.title}}</span>
</template>

<script>
export default {
  name: 'CouponTitle',
  inject: ['couponUseCallback'],
  props: {
    lottery: {
      type: Object,
      required: true
    },
    clickable: {
      type: Boolean,
      required: false,
      default: () => {
        return false
      }
    }
  },
  methods: {
    press() {
      if (!this.clickable) {
        return
      }
      const {
        link
      } = this.lottery

      this.couponUseCallback && this.couponUseCallback()

      setTimeout(() => {
        // 如果展示马上使用则下载，没有则去详情页
        window.location.href = link
      }, 200)
    }
  }
}
</script>