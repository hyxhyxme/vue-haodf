<template>
  <section class="searchReal js-searchReal">
    <!-- 搜索弹层 -->

    <!-- input -->
    <section class="pt10">
      <div class="searchBar">
        <span class="sb-icon js-sb-icon"></span>
        <div class="sb-inputbox">
          <form action="#" onsubmit="return false;">
            <input
              placeholder="疾病 医生 科室 医院"
              type="text"
              class="sb-input js-sb-input"
              @input="handleChange"
              autofocus="autofocus"
              @keydown.enter="handleSearch"
              v-model="keywords"
            />
          </form>
          <span class="sb-close js-sb-close"></span>
        </div>
      </div>
      <!-- 取消按钮 -->
      <span class="js-s-cancel s-cancel" @click="cancle">取消</span>
      <!-- 取消按钮 -->
    </section>
    <!-- input -->

    <!-- 历史搜索 -->
    <section
      class="js-history"
      v-show="(matchValue === '' && searchValue === '') || keywords === ''" >
      <div class="history-search">
        <p class="clearfix h-s-title">
          <span class="fl">历史搜索</span>
          <span class="fr hisClear js-hisClear" @click="cancleSearch">清空</span>
        </p>
        <div class="history-content js-history-content">
          <ul>
            <li class="h-c-item js-h-c-item" v-for="(item, index) in history" :key="index" @click="searchThis(item)">{{item}}<span style="padding: 5px" @click.stop="deleteThis(item)">X</span></li>
          </ul>
        </div>
      </div>
    </section>
    <!-- 历史搜索 -->

    <!-- 模糊匹配 -->
    <section>
      <div
        class="auto-search js-auto-search"
        v-show="matchValue !== '' && searchValue === '' && keywords !== ''">
        <ul>
          <li
            class="a-s-item js-a-s-item"
            v-for="(item, index) in matchValue"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </section>
    <!-- 模糊匹配 -->

    <!-- 搜索结果 -->
    <div class="searchList" style="background: #f0f0f0">
      <div class="d-searchList js-searchList" v-show="searchValue !== '' && keywords !== ''">
        <div class="searchItem" v-for="item in searchValue" :key="item._type === 'disease' ? item.diId : item.articleIdId">
          <div class="d-disease clearfix" v-if="item._type === 'disease'">
            <div class="dis-info">
              <div class="dis-tit-fix">
                <div class="dis-container">
                  <div class="dis-tit" v-html="item.diName">
                    {{ item.diName }}
                  </div>
                  <span class="dis-fix">_疾病专栏</span>
                </div>
              </div>
              <p class="dis-detail" v-html="item.diIntro">
                {{ item.diIntro }}
              </p>
              <p class="mt8">
                <span class="dis-doc one-third-divide"
                  >好评医生:
                  <span class="ml11" v-html="item.doctorCount">{{
                    item.doctorCount
                  }}</span>
                  位</span
                >
                <span class="dis-hsp one-third-divide">
                  好评医院:
                  <span class="ml11" v-html="item.hospitalCount">{{
                    item.hospitalCount
                  }}</span>
                  家
                </span>
                <span class="dis-hsp-right one-third-divide">
                  文章:
                  <span class="ml11" v-html="item.articleCount">{{
                    item.articleCount
                  }}</span>
                  篇
                </span>
              </p>
            </div>
          </div>

          <div class="d-article clearfix" v-else>
            <div class="art-tit-fix">
              <div class="art-container">
                <span class="art-tit" v-html="item.title">
                  {{item.title}}
                  </span>
                <span class="art-tit-pay" v-if="item.isFree">付费</span>
              </div>
            </div>
            <div class="content">
              <p class="art-doc-hosp-read">
                <span class="art-docname-hosp">{{item.docDrName}}</span>
                <span class="art-hosp">{{item.docHName}}</span>
              </p>
              <div class="art-wrap">
                <span class="art-ear" v-if="item.duration !== '00:00'"><i class="a-e-earphone"></i>{{item.duration}} </span>
                <span class="art-readalready" v-if="item.isFree"><span class="art-times">{{item.readNum}}</span> 人已购买</span>
                <span class="art-readalready" v-else><span class="art-times">{{item.readNum}}</span> 人已读</span>
              </div>
            </div>
            <div class="art-doc-hosp-comment">
              <p>
                <span class="a-d-h-c-good" v-if="item.positiveRate != -1">文章好评率:</span>
                <span class="a-d-h-c-percent" v-if="item.positiveRate != -1">{{item.positiveRate}}</span>
                <span class="a-d-h-c-comment">{{item.voteNum}} 条评价</span>
              </p>
              <div class="arc-doc-hosp-label" v-if="item.labelList && item.labelList.length">
                <div class="arc-doc-hosp-label-style">
                  <p class="a-d-h-l-tag" v-for="value in item.labelList" :key="value.labelId">
                    <span class="a-d-h-l-t-text">{{value.labelDetail}}</span>
                    <span class="a-d-h-l-t-num"> {{value.voteNum}}</span>
                  </p>
                 
                </div>
                <a
                  href="https://m.haodf.com/zhuanjiaguandian/voice_7609363839.htm"
                  class="a-d-h-l-link"
                  >打开 &gt;</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 搜索弹层 -->
  </section>
</template>

<script>
import _ from "lodash";
import BetterScroll from "better-scroll";
import { get, search } from "../../utils/http";
import store from 'store'

export default {
  data() {
    return {
      keywords: "",
      matchValue: "",
      searchValue: "",
      total : '',
      size : 10,
      page : 1,
      searchs : {},
      history : []
    };
  },
  mounted() {
    let bScroll = new BetterScroll(".searchList",{
      pullUpLoad:true,
      click:true,
      probeType: 2
    })
    
    bScroll.on('pullingUp',async ()=>{
      this.page++
      if(this.page < Math.ceil(this.total / this.size)){
        let result = await search({
          key: this.keywords,
          page: this.page,
          size: this.size
        })
        this.searchValue = [...this.searchValue,...result.data.data]
        bScroll.refresh()
        
      }else{
        console.log('meiyou la')
      }
      bScroll.finishPullUp()
    })

   
    this.searchs = store.get('searchList')
    if(this.searchs === undefined){
      this.searchs = {}
    }
    this.history = Object.keys(this.searchs)
    this.history = this.history.reverse()
   
  },
  methods: {
    cancle() {
      this.keywords = "";
      this.searchValue = "";
      this.$emit("can");
    },
    handleChange: _.debounce(async function() {
      let result = await get({ keywords: this.keywords });
      this.matchValue = result.data;
    }, 300),
    async handleSearch() {
      let result = await search({
        key: this.keywords,
        page: this.page,
        size: this.size
      });
      this.total = result.data.pageInfo.total
      this.searchValue = result.data.data

      this.searchs = store.get('searchList')
      if(this.searchs === undefined){
        this.searchs = {}
      }
    
      this.searchs[this.keywords] = this.keywords
      store.set('searchList',this.searchs)
      this.searchs = store.get('searchList')
      this.history = Object.keys(this.searchs)
      this.history = this.history.reverse()
      
    },
    cancleSearch(){
      store.remove('searchList')
      this.searchs = store.get('searchList')
      if(this.searchs === undefined){
        this.searchs = {}
      }
      this.history = Object.keys(this.searchs)
    },
    searchThis(item){
      this.keywords = item
      this.handleSearch()
    },
    deleteThis(item){
      this.searchs = store.get('searchList')
      delete this.searchs[item]
      this.history = Object.keys(this.searchs)
      store.set('searchList',this.searchs)
    }
  }
};
</script>
<style lang="stylus" scoped>

    .searchReal{
      display:block
      display flex
      height 100%
      .searchList{
        overflow hidden
        height 100%
        .js-searchList{
          flex 1
        }
        .content{
          position relative
          min-height 30px
          .art-doc-hosp-read, .art-wrap{
            position absolute
          }
          .art-doc-hosp-read{
            width 50%
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
          }
          .art-wrap{
            right 0
            .art-times{
              color: #ff8c28;;
            }
          }
        }
      }

    }
    .h-c-item{
      display: flex;
      justify-content : space-between
    }
</style>
