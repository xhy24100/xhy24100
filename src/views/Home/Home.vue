<template>
  <div class="home">
    <div class="home-header">
      <a href="./aaa.html">爱心</a>
      <a :href="str">珍藏</a>
      <a href="./bbb.html">新年</a>
    </div>
    <div class="xiong"></div>
    <iframe style="width: 100%;height: 100vh" src="./valentine-master/index.html" frameborder="0"></iframe>
  </div>
</template>
<script setup>
import {ref} from 'vue'
const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const str = ref(today.getDate()%2!==0?'./三维.html':'./围绕.html')
console.log(today.getDate()%2,22)
</script>

<style scoped lang="less">
.home{
  height: 100%;
  .xiong{
    position: absolute;
    bottom: 10%;
    width: 200px;
    height: 100px;
    background-image: url("../../assets/bear.png");
    background-repeat: no-repeat;
    background-position: 0px 0px;
    animation: donghua 0.5s steps(8) infinite,move 4s linear forwards;
  }
  @keyframes donghua {
    0%{
      background-position: 0 0;
    }
    100%{
      background-position: -1600px 0;
    }
  }
  .home-header{
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    padding: 10px;
   display: flex;
    justify-content: space-between;
    a{
      color: #fb50c6;
    }
  }
}

</style>
