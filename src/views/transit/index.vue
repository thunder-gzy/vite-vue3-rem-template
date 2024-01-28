
<template>
  <div wfull h100rem class="transitBox">
    this is transit
  </div>
</template>

<script setup>

import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// const router = useRouter()
// console.log('router', router)
onMounted(() => {
  const route = useRoute()
  console.log('params', route.params)
  console.log('query', route.query)
})

</script>

<style scoped lang="less">
.transitBox {
  background-image: url('@/assets/img/transit.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  
}
</style>
