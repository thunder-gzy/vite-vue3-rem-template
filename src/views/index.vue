
<template>
  <div wfull h100rem class="homeBox">
    <div @click="jumpToMain(homeEnum.main)" class="left">主-图站</div>
    <div class="center">
      <div>运营管控平台控制端</div>
      <div>OPERATION CONTROL PLATFORM CONTROL TERMINAL</div>
    </div>
    <div @click="jumpToMain(homeEnum.secondary)" class="right">备-图站</div>
  </div>
</template>


<script setup>
import { homeEnum } from '@/views/data'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/store/one'
const router = useRouter()
const counterStore = useCounterStore()
const { count, name } = counterStore
// console.log('count', count)
// console.log('name', name)
const jumpToMain = (type) => {
  if (type === homeEnum.main) {
    router.push({
      path: '/transit',
      query: {
        type: homeEnum.main
      },
      params: {
        type: homeEnum.main
      }
    })
  } else {
    router.push({
      path: '/transit',
      query: {
        type: homeEnum.secondary
      },
      params: {
        type: homeEnum.main
      }
    })
  }
}

// return {
//   jumpToMain,
// }
</script>

<style scoped lang="less">
.homeBox {
  background-image: url('@/assets/img/bgc.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .left {
    position: absolute;
    top: 48rem;
    left: 28.2rem;
  }

  .center {
    position: absolute;
    top: 40rem;
    left: 70rem;
  }

  .right {
    position: absolute;
    top: 48rem;
    right: 27.3rem;
  }
}
</style>
