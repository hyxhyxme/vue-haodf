<!--  -->
<template>
<div class="mydocpage mescroll" id="mescroll">
    <div class="myorder">
        <div class="myorder-title">我的医生</div>
        <a href="/nusercenter/order/myorder" class="myorder-link">我的订单</a>
    </div>
    <div class="doclist js-doctorlist"></div>
    <div class="no-content js-no-content" style="display: block;">
        <img class="no-content-ndf" src="//fe1.hdfimg.com/nusercenter/ssi/wapusercenter/prd/image/ndf_empty.png" alt="">
        <p class="no-content-txt">当前没有服务医生</p>
        <a class="no-content-applybtn" href="/doctor/">去申请医生</a>
    </div>
<div class="mescroll-upwarp" style="visibility: visible; display: none;"><p class="upwarp-progress"></p><p class="upwarp-tip">加载中..</p></div></div>
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

</style>