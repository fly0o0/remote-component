import Entry from './Entry.vue'

Vue.config.productionTip = false // 一些提示

new Vue({
  render: h => h(Entry),
}).$mount('#app')
