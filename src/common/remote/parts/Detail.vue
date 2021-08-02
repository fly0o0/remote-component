<template>
  <img class="coupon-model-detail J_gotoDetail logandgo" :src="lottery.img" @click="goto"/>
</template>

<script>
export default {
  name: 'CouponDetail',
  inject: ['couponUseCallback'],
  props: {
    isPic: {
      type: Boolean,
      required: false
    },
    lottery: {
      type: Object,
      required: true
    }
  },
  methods: {
    goto() {
      const {
        link
      } = this.lottery

      setTimeout(() => {
        window.location.href = link
      }, 200)
    }
  }
}
</script>