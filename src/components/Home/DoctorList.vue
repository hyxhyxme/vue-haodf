<!--  -->
<template>
  <ul class="tab js-doctorList">
    <li v-if="doctorList === ''">
      <img class="loading js-loading" src="//fe1.hdfimg.com/nindex/ssi/index/prd/image/loading.gif">
    </li>

    <li v-else-if="doctorList.length == 0" class="empty-wrapper on" data-faculty="jingshenxinli">
      <img class="empty-img" src="//i2.hdfimg.com/ssi/image/niudefu/niudefu_emptypage.png">
      <p class="empty-tips">暂无优选医生</p>
    </li>
    
    <li v-else class="tab_nav on" data-faculty="zonghe">
      <div class="waterfall-container">
        <waterfall
          :col="col"
          :width="itemWidth"
          :gutterWidth="gutterWidth"
          :data="doctorList"
        >
          <template>
            <div class="cell-item" v-for="(item, index) in doctorList" :key="index">
              <DoctorItem :item="item"></DoctorItem>
            </div>
          </template>
        </waterfall>
      </div>
    </li>
   
  </ul>
</template>

<script>
import Vue from 'vue'
import waterfall from "vue-waterfall2";
Vue.use(waterfall);
import DoctorItem from "../Home/DoctorItem.vue";
import { get, post } from "../../utils/http";

export default {
  data() {
    return {
      facultyId : 'zonghe',
      doctorList: [],
      col:2,
      myWidth : (window.innerWidth ),
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  async created() {
    
    let result = await post({
      facultyId:this.facultyId,
      province : this.$store.state.position.province,
      city : this.$store.state.position.city,
      positionText : this.$store.state.position.positionText,
    });
    this.doctorList = result.data.doctorList;
  },
  //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
       window.onresize = ()=>{
         this.myWidth = window.innerWidth
         location.reload()
       }
    },
    computed:{
        itemWidth(){
            return this.myWidth/2-20
        },
        gutterWidth(){
            return 15
        }
    },
    async beforeRouteUpdate(to,from, next){
      this.doctorList = ''
      this.facultyId = to.params.de
      let result = await post({
        facultyId:this.facultyId,
        province : this.$store.state.position.province,
        city : this.$store.state.position.city,
        positionText : this.$store.state.position.positionText,
      });
      this.doctorList = result.data.doctorList;
      next()
    },
   
    components: {
        DoctorItem,
    },
    methods:{
        
    }
};
</script>
<style lang="stylus">
.vue-waterfall
  overflow-y visible
  height auto !important
  .cell-item
    padding 0 8px 8px 8px
    margin-left 2px
</style>
