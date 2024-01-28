<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Index from '@/views/index.vue'
</script>

<template>
 
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <Index /> -->
  <router-view></router-view>
</template>

<style lang="less" scoped>
.homeBox {
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // height: 100vh;
  .left {
    // width: 50%;
    // height: 100%;
    // background-color: #f00;
  }
  .right {
    // width: 50%;
    // height: 100%;
    // background-color: #00f;
  }
}
</style>
