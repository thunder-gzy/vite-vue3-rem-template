
<template>
  <div class="home-box">
   hello world
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

</script>

<style scoped lang="less">
.home-box {
  width: 100%;
  height: 100%;
  color: black;
  // background-image: url('@/assets/img/bgc.png');
  // background-size: 100% 100%;
  // background-repeat: no-repeat;
  .left {
    position: absolute;
    top: 48rem;
    left: 28.2rem;
    cursor: pointer;
  }

  .center {
    position: absolute;
    top: 44.5rem;
    left: 55rem;
    width: 50rem;
    text-align: center;
    > div {
      font-weight: bold;

      &:first-child {
        font-size: 4.75rem;
        background: linear-gradient(to top, #a8adb5, #ffffff);
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &:nth-child(2) {
        font-size: 2.5rem;
        background: linear-gradient(to top, #a8adb5, #d3d5da);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'DINPro-Bold';

      }
      &:nth-child(3) {
        font-size: 2.5rem;
        background: linear-gradient(to top, #a8adb5, #d3d5da);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'DINPro-Bold';

      }
    }
  }

  .right {
    position: absolute;
    top: 48rem;
    right: 27.3rem;
    cursor: pointer;
  }
}
</style>
