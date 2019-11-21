<!--  -->
<template>
  <div class="login_content">
    <form
      id="form1"
      name="form1"
      method="post"
      action="//m.haodf.com/touch/user/dologin"
      accept-charset="GBK"
    >
      <ul class="login_inputlist">
        <li>
          <input
            type="tel"
            name=""
            id="userPhone"
            value=""
            placeholder="11位中国大陆手机号码"
          />
        </li>
        <li class="clearfix login_none" id="validCode">
          <input
            class="fl"
            id="checktext"
            style="width: 50%;text-indent:0;"
            type="tel"
            name=""
            value=""
            placeholder="填写校验码"
          />
          <input id="registertoken" type="hidden" name="token" value="" />
          <span class="fr checktextimg"
            ><img
              id="captcha"
              src=""
              onclick="changeRegisterVerifyCode()"
              align="absmiddle"
          /></span>
          <span class="fr refresh"></span>
        </li>
        <li class="clearfix">
          <input
            class="fl"
            type="tel"
            name=""
            id="msgtext"
            value=""
            maxlength="6"
            placeholder="填写短信验证码"
          />
          <input
            type="button"
            class="fr sendmsgtext bgblue "
            id="muserv1_code"
            value="发送验证码"
          />
        </li>
      </ul>
      <p class="haodfrules">
        <!-- ? php if(!$isWeixin) {?-->
        点击登录即同意
        <a
          href="//m.haodf.com/touch/booking/eula?forward=%2F%2Fm.haodf.com%2Fnusercenter%2Findex"
          class="haodfrulestext"
          >好大夫在线服务条款</a
        >
        <!--?php } else {?>
亲爱的用户，为了更好的为您服务，请您登录/注册后使用
< ?php
}?-->
      </p>
      <a href="#" class="nextstep nulltext" id="login_btn">登录</a>
      <div class="clearfix login_way">
        <a
          href="/nusercenter/password/findpwdverifymobile?forward=//m.haodf.com/nusercenter/index"
          class="fl"
          >忘记密码</a
        >
        <a
          href="//m.haodf.com/touch/user/login?forward=%2F%2Fm.haodf.com%2Fnusercenter%2Findex&amp;username="
          class="fr"
          >账号密码登录</a
        >
      </div>
    </form>
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
<style lang="stylus" scoped>
    #form1
        display block
        width 100%
        ul
            width 89%
        #login_btn, .login_way
            width 95%
</style>
