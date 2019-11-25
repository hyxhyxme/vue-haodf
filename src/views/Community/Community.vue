<!--  -->
<template>
  <div class="page js-page">
    <section>
      <div id="mescroll" class="mescroll" style="top: 44px;">
        <div class="mescroll-downwarp">
          <div class="downwarp-content">
            <p class="downwarp-progress"></p>
            <p class="downwarp-tip">下拉刷新</p>
          </div>
        </div>
        <section class="unloginmodule" style="padding-top: 30px;">
          <div
            class="unlogin-bg"
            style='background-image: url("//fe1.hdfimg.com/ngreatcourse/ssi/onlineclassroom/prd/image/bigwhitebg.png");'
          >
            您还没有关注任何社区
          </div>
        </section>
        <div></div>
        <div class="recommend-community-list" style="display: none;">
          <p class="recommend-notice-text">
            <img
              src="//fe1.hdfimg.com/ngreatcourse/ssi/onlineclassroom/prd/image/grayline.png"
              class="gray-line"
            />
            <span class="recommend-notice-content"
              >为您推荐您可能感兴趣的社区</span
            >
            <img
              src="//fe1.hdfimg.com/ngreatcourse/ssi/onlineclassroom/prd/image/grayline.png"
              class="gray-line"
            />
          </p>
          <div></div>
        </div>
        <div class="mescroll-upwarp"></div>
      </div>
      <div class="msg">
        <img
          src="/ngreatcourse/ssi/onlineclassroom/prd/image/message.png"
          alt=""
          class="msg-img"
        />
        <!---->
      </div>
    </section>
  </div>
</template>

<script>
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
<style scoped>
.page{
  background: rgb(255, 249, 249);
  height: 100%
}
</style>
