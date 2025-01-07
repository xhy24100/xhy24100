<template>
  <div style="height: 100%">
<!--    <van-button type="primary">主要按钮</van-button>-->
<!--   <div class="baioti">-->
<!--     <router-link to="home">点击</router-link>-->
<!--     <router-link to="home1">暂无</router-link>-->
<!--   </div>-->
    <keep-alive class="content">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script setup>
import {getLongitudeLatitude} from './hooks/index.js'
import {ref} from "vue";
import {water} from "@/ulits/http.js";
import { useCounterStore } from '@/store/index'
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useCounterStore()
const num = ref(0)
water()

</script>

<style scoped lang="less">

.baioti{
  width: 50%;
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 0 auto;
}
.baioti a{
  color: white;
  padding: 10px 15px;
  border-radius: 3px;
  background-color: #747bff;
}
.content{
  height: 100%;
  //width: 80%;
  //margin: 20px auto;
  //border: 1px solid #ccc;
  //height: 400px;
}
</style>
