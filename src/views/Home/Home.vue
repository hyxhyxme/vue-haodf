<template>
  <div class="home">
    <div class="home-main">
      <section class="input">
        <section class="search-wrapper">
          <div class="s-input js-isshow" @click="handleSearch">
            <span class="s-i-text">疾病、医生 + 科室、医院等</span>
          </div>
        </section>
      </section>
      <Nav></Nav>
      <section class="module-wrapper">
        <div class="module">
          <a href="http://javascript:;" class="m-item">
            <div class="m-i-icon doctor"></div>
            <h2 class="m-i-title">找医生</h2>
            <div class="m-i-text">61 万 + 医生</div>
          </a>
          <a href="http://javascript:;" class="m-item">
            <div class="m-i-icon menzhen"></div>
            <h2 class="m-i-title">去挂号</h2>
            <div class="m-i-text">全国 919 家医院</div>
          </a>
          <a href="http://javascript:;" class="m-item">
            <div class="m-i-icon yaofang"></div>
            <h2 class="m-i-title">去开药</h2>
            <div class="m-i-text">放心药，寄到家</div>
          </a>
        </div>
      </section>
      <div class="module-title">
        <h3 class="label">
          <span class="l-span">
            问诊服务
          </span>
        </h3>
        <p class="l-introduce">三甲医生提供服务</p>
      </div>
      <section class="inquiring-service">
        <a href="http://javascript:;" class="i-s-container">
          <div class="i-s-wrap">
            <p class="i-s-item">今日门诊</p>
            <span class="i-s-introduce">线上值班门诊</span>
          </div>
          <span class="i-s-title">首单免费</span>
        </a>
        <a href="http://javascript:;" class="i-s-container">
          <div class="i-s-wrap">
            <p class="i-s-item">免费义诊</p>
            <span class="i-s-introduce">图文・电话</span>
          </div>
        </a>
        <a href="http://javascript:;" class="i-s-container">
          <div class="i-s-wrap">
            <p class="i-s-item">极速问诊</p>
            <span class="i-s-introduce">10 分钟接诊</span>
          </div>
        </a>
        <a href="http:://http://javascript:;" class="i-s-container">
          <div class="i-s-wrap">
            <p class="i-s-item">图文问诊</p>
            <span class="i-s-introduce">专家接诊</span>
          </div>
        </a>
        <a href="http://javascript:;" class="i-s-container">
          <div class="i-s-wrap">
            <p class="i-s-item">名医电话</p>
            <span class="i-s-introduce">专家接诊</span>
          </div>
        </a>
        <a href="http://javascript:;" class="i-s-container">
          <div class="i-s-wrap">
            <p class="i-s-item">远程门诊</p>
            <span class="i-s-introduce">视频看专家</span>
          </div>
        </a>
      </section>
      <div class="module-title">
        <h3 class="label">
          <span class="l-span">
            特色服务
          </span>
        </h3>
        <p class="l-introduce"></p>
      </div>
      <section class="special-service clearfix">
        <div class="vip-service">
          <a class="v-s-wrap" href="http://javascript:;">
            <p class="v-s-members">会员</p>
            <p class="v-s-one">VIP 通道</p>
            <p class="v-s-two">看病不用找熟人<br />安排门诊、住院</p>
            <span class="jumpbtn">点击购买</span>
          </a>
        </div>
        <div class="vip-service">
          <a class="v-s-wrap" href="http://javascript:;">
            <p class="v-s-one">私人医生</p>
            <p class="v-s-two">三甲医生<br />全程照护</p>
            <span class="jumpbtn">点击购买</span>
          </a>
        </div>
        <div class="feature-service">
          <a href="http://javascript:;" class="f-s-container">
            <div class="f-s-wrap f-s-wrapper f-s-three">
              <img src="http://javascript:;" alt="" class="f-s-img" />
              <p class="f-s-item">体检解读</p>
              <p class="f-s-introduce">三甲医生专业解读</p>
              <p class="f-s-reddot js-reddot"></p>
            </div>
          </a>
          <a href="http://javascript:;" class="f-s-container">
            <div class="f-s-wrap f-s-wrapper f-s-three">
              <p class="f-s-item">好医美</p>
              <p class="f-s-introduce">整形美容</p>
              <p class="f-s-reddot js-reddot"></p>
            </div>
          </a>
        </div>
      </section>
      <section class="doctors-wrapper js-doctors-wrapper">
        <div class="p-wrap">
          <div class="module-title">
            <h3 class="label">
              <span class="l-span">
                <span class="l-s-tipname">优选医生</span>
              </span>
            </h3>
            <p class="l-introduce">好大夫在线推荐</p>
          </div>
          <span class="p-area js-area" @click="handleCity">
            <span class="p-position js-position">{{ city }}</span>
          </span>
        </div>
        <section class="good-doctors">
          <div id="tab">
            <ul class="list js-facultyList">
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'zonghe' ? 'active' : ''"
                :to="`/home/depart/zonghe/${Math.random() * 10}`"
                data-faculty="zonghe"
                >综合</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'erke' ? 'active' : ''"
                :to="`/home/depart/erke/${Math.random() * 10}`"
                data-faculty="erke"
                >儿科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'fuchanke' ? 'active' : ''"
                :to="`/home/depart/fuchanke/${Math.random() * 10}`"
                data-faculty="fuchanke"
                >妇产科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'shengzhiyixueke' ? 'active' : ''"
                :to="`/home/depart/shengzhiyixueke/${Math.random() * 10}`"
                data-faculty="shengzhiyixueke"
                >生殖医学科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'guke' ? 'active' : ''"
                :to="`/home/depart/guke/${Math.random() * 10}`"
                data-faculty="guke"
                >骨科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'pifuke' ? 'active' : ''"
                :to="`/home/depart/pifuke/${Math.random() * 10}`"
                data-faculty="pifuke"
                >皮肤科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'huxineike' ? 'active' : ''"
                :to="`/home/depart/huxineike/${Math.random() * 10}`"
                data-faculty="huxineike"
                >呼吸内科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'xiaohuaneike' ? 'active' : ''"
                :to="`/home/depart/xiaohuaneike/${Math.random() * 10}`"
                data-faculty="xiaohuaneike"
                >消化内科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'neifenmi' ? 'active' : ''"
                :to="`/home/depart/neifenmi/${Math.random() * 10}`"
                data-faculty="neifenmi"
                >内分泌</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'shenjingneike' ? 'active' : ''"
                :to="`/home/depart/shenjingneike/${Math.random() * 10}`"
                data-faculty="shenjingneike"
                >神经内科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'xinneike' ? 'active' : ''"
                :to="`/home/depart/xinneike/${Math.random() * 10}`"
                data-faculty="xinneike"
                >心内科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'puwaike' ? 'active' : ''"
                :to="`/home/depart/puwaike/${Math.random() * 10}`"
                data-faculty="puwaike"
                >普外科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'xiongwaike' ? 'active' : ''"
                :to="`/home/depart/xiongwaike/${Math.random() * 10}`"
                data-faculty="xiongwaike"
                >胸外科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'gandanyiwaike' ? 'active' : ''"
                :to="`/home/depart/gandanyiwaike/${Math.random() * 10}`"
                data-faculty="gandanyiwaike"
                >肝胆胰外科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'miniaowaike' ? 'active' : ''"
                :to="`/home/depart/miniaowaike/${Math.random() * 10}`"
                data-faculty="miniaowaike"
                >泌尿外科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'nanke' ? 'active' : ''"
                :to="`/home/depart/nanke/${Math.random() * 10}`"
                data-faculty="nanke"
                >男科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'xinwaike' ? 'active' : ''"
                :to="`/home/depart/xinwaike/${Math.random() * 10}`"
                data-faculty="xinwaike"
                >心外科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'shenjingwaike' ? 'active' : ''"
                :to="`/home/depart/shenjingwaike/${Math.random() * 10}`"
                data-faculty="shenjingwaike"
                >神经外科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'jingshenxinli' ? 'active' : ''"
                :to="`/home/depart/jingshenxinli/${Math.random() * 10}`"
                data-faculty="jingshenxinli"
                >精神心理</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'yanke' ? 'active' : ''"
                :to="`/home/depart/yanke/${Math.random() * 10}`"
                data-faculty="yanke"
                >眼科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'erbihou' ? 'active' : ''"
                :to="`/home/depart/erbihou/${Math.random() * 10}`"
                data-faculty="erbihou"
                >耳鼻喉</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'kouqiangke' ? 'active' : ''"
                :to="`/home/depart/kouqiangke/${Math.random() * 10}`"
                data-faculty="kouqiangke"
                >口腔科</router-link
              >
              <router-link
                tag="li"
                class="list_nav js-faculty"
                :class="de === 'zhengxingmeirong' ? 'active' : ''"
                :to="`/home/depart/zhengxingmeirong/${Math.random() * 10}`"
                data-faculty="zhengxingmeirong"
                >整形美容</router-link
              >
            </ul>
            <transition
              enter-active-class="animated slideInRight"
              leave-active-class="animated slideInLeft"
            >
              <router-view></router-view>
            </transition>
          </div>
        </section>
        <section class="introduce bgColor">
          <img
            class="i-ndf"
            src="//i2.hdfimg.com/ssi/image/niudefu/ndf_hint.png"
            alt=""
          />
          <div class="i-ndf-dg">
            <p class="i-title">好大夫，都在好大夫</p>
            <p class="i-content">
              收录全国 9878 家正规医院；214923 位医生在线，累计服务 58108029
              位患者
            </p>
          </div>
        </section>
      </section>
      <Select :id="cityShow ? 'displayblock' : 'displaynone'" @city="handleCity" @getcity="getCity"></Select>

      <Search :id="searchShow ? 'searchShow' : 'searchNot'" @can="handleSearch"></Search>
     
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "components/Home/Footer.vue";
import Nav from "components/Home/Nav.vue";
import Select from "components/Home/Select.vue";
import DoctorList from "components/Home/DoctorList.vue";
import Search from 'components/Home/Search.vue'

export default {
  name: "home",
  data() {
    return {
      city: "全国",
      province: "",
      de: "zonghe",
      searchShow : false,
      cityShow : false,
    };
  },
  components: {
    Footer,
    Nav,
    Select,
    DoctorList,
    Search
  },
  mounted() {
  
  },
  beforeRouteUpdate(to, from, next) {
    this.de = to.params.de;
    next();
  },
  methods: {
    getCity(province, city) {
      this.province = province;
      this.city = city;
      this.$store.state.position.province = province;
      this.$store.state.position.city = city;
      this.$store.state.position.positionText = city;
    },
    handleSearch(){
      this.searchShow = !this.searchShow
    },
    handleCity(){
      this.cityShow = !this.cityShow
    },

  }
};
</script>

<style lang="stylus" scoped>
.home{
  background #fff
}
.doctors-wrapper{
  background #fff
}
#searchShow{
  display block
}
#searchNot{
  display none
}

</style>
