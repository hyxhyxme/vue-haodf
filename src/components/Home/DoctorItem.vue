<!--  -->
<template>
    <a
    class="item"
    href="https://m.haodf.com/touch/doctor/DE4r0BCkuHzduZ0J5bBx2XzuGO4ty.htm"
    style="top: 0px; left: 15px;" >
    <div class="doctor-introduce">
        <!--医生头像-->
        <div class="avatar i-img">
        <div class="avatar-in js-avatar">
            <img
            v-bind:src="item.headImage"
            :alt="item.doctorName"
            class="a-i-img"
            />
        </div>
        </div>
        <!--医生简介-->
        <div class="i-info">
        <p class="i-i-doctorname" style="position: relative;">
            {{item.doctorName}}
        </p>
        <p class="i-i-doctorinfo">
            <span class="i-i-d-level"> {{item.doctorGrade}}</span>
        </p>
        <p class="i-i-doctorinfo">
            {{item.hospitalCommonName}}&nbsp;{{item.facultyName}}
        </p>
        </div>
        <!--疾病条目-->
        <div class="d-i-disease">
            <p v-for="pp in item.diseaseVoteList" :key="pp.diseaseKey" class="d-i-d-item">{{pp.diseaseName}}</p>
        </div>
        <!--服务患者数-->
        <p class="d-i-patients">
        在线服务患者&nbsp;<span class="d-i-p-number">{{item.patientCnt}}</span>
        名
        </p>
    </div>
    </a>
</template>

<script>

export default {
    props:['item'],
    data() {
        return {
            
        };
    },
  //生命周期 - 创建完成（访问当前this实例）
    created() {

        
    },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  }
};
</script>
<style  lang="stylus">
  .item
    position static!important
   
</style>
