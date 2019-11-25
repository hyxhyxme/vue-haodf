<!--  -->
<template>
<div class="index">
    <header>
      <router-link tag="a" to="/" class="logo">
        <div>
          <img style="margin-left: -0.5rem; transform: scale(0.5);" src="~assets/images/logo.png" />
        </div>
      </router-link>
      <router-link tag="a" to="/" class="tohome">首页</router-link>
      <router-link tag="a" to="/me"  class="tome">我的</router-link>
    </header>
    <main>
      <transition 
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideInRight">
          <router-view></router-view>
      </transition>
    </main>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
//生命周期 - 创建完成（访问当前this实例）
    created() {

    },
//生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    }
}
</script>
<style lang="stylus" scoped>
.index {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background : #fff;

  header {
    height: 0.5rem;
    width: 100%;
    background: #176ACC;
    display: flex;
    .logo {
      flex: 1;
      padding: 0;
    }
    a {
      font-size: 16px;
      color: #fff;
      padding: 0 0.1rem;
      line-height: 0.5rem;
    }
  }
  main {
    flex: 1
    overflow scroll
    position relative
    > div{
      position absolute
      top 0
      width 100%
    }
  }

}

</style>