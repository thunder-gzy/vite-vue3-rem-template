
<template>
  <div class="transit-box">
    <div class="top">
      <img src="" alt="">
    </div>
    <div class="icon-box"></div>
  </div>
</template>

<script setup>

import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// const router = useRouter()
// console.log('router', router)
onMounted(() => {
  const route = useRoute()
  // console.log('params', route.params)
  // console.log('query', route.query)
})

</script>

<style scoped lang="less">
.transit-box {
  width: 100%;
  height: 100rem;
  background-image: url('@/assets/img/transit/01.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .top {
    background-image: url('@/assets/img/transit/02.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 8.875rem;
    height: 8.875rem;
  }
}
</style>
