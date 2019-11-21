<!--  -->
<template>
  <footer>
    <van-tabbar v-model="active">
      <router-link tag="van-tabbar-item" to="/">
        <p>
          <img slot="icon" src="~assets/images/indexblue.png" />
        </p>
        <span>首页</span>
      </router-link>
      <router-link tag="van-tabbar-item" to="/mydoctor">
        <p>
          <img slot="icon" src="~assets/images/mydoctor.png" />
        </p>
        <span>我的医生</span>
      </router-link>
      <router-link tag="van-tabbar-item" to="/diseaseknowledge">
        <p>
          <img slot="icon" src="~assets/images/knowledgegrey.png" />
        </p>
        <span>疾病知识</span>
      </router-link>
      <router-link tag="van-tabbar-item" to="/community">
        <p>
          <img slot="icon" src="~assets/images/partcom.png" />
        </p>
        <span>社区</span>
      </router-link>
      <router-link tag="van-tabbar-item" to="/me">
        <p>
          <img slot="icon" src="~assets/images/megrey.png" />
        </p>
        <span>我</span>
      </router-link>
    </van-tabbar>
  </footer>
</template>

<script>

import Vue from 'vue'
import {Tabbar, TabbarItem} from "vant"

Vue.use(Tabbar).use(TabbarItem)

export default {
  data() {
    return {
        active: 0,
        icon: {
            active: 'assets/images/indexblue.png',
            inactive: 'assets/images/indexblue.png'
        }
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style lang="stylus" scoped>
/* @import url(); 引入css类 */
    footer
        height .5rem
        text-align center
        img
          width 30%
          height 30%
          margin 0 30%
</style>