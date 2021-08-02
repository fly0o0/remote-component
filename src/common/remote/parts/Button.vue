<!-- 按钮组件 -->
<template>
  <button type="button" class="btn" @click="use">
  </button>
</template>

<script>
export default {
  name: 'Button',
  inject: ['couponUseCallback'],
  methods: {
    use() {
      this.couponUseCallback && this.couponUseCallback()
    }
  }
}
</script>

<style lang="less" scoped>
  .btn {
    background-color: transparent;
    border: none;
  }
</style>