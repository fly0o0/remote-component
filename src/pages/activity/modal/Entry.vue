<template>
  <div class="entry">
    <Modal :isVisible.sync="isVisible"/>
    <button class="btn" type="button" @click="show">显示弹层</button>
  </div>
</template>

<script>

import Modal from '@common/remote/Index.vue'

export default {
  data() {
    return {
      inst: null,
      isVisible: false
    }
  },
  components: {
    Modal
  },
  mounted() {
    // this.inst = new LuckyBag({
    //   luckyCallbacks: {
    //     cbThanksShow(next) {
    //       next()
    //     }
    //   }
    // })
  },
  methods: {
    show() {
      // this.inst.getLucky()
      console.log('isVisible')
      this.isVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  position: fixed;
}
</style>
