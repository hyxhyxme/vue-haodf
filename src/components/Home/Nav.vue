<!--  -->
<template>
  <nav>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="~assets/images/0oYBAF2_en2AZeD6AAGTr3cpybI157.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="~assets/images/uoYBAF2kMjOALGoUAAC3AU7wAUU338.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="~assets/images/xYYBAF3BBxOAXx2RAAMEf9TwMxg019.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="~assets/images/yYYBAF3BBxSAUQFiAADjpJG2aFo851.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="~assets/images/yYYBAF3BBxSAXZK1AABs_h2I0XI145.png" alt />
      </van-swipe-item>
    </van-swipe>
  </nav>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);

export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style lang="stylus" scoped>
/* @import url(); 引入css类 */
nav {
  img {
    width: 100%;
    height: 1.17rem;
  }
}
</style>