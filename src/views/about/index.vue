<template>
  <div class="about">
    <div class="header">
      <img :src="require('@/assets/images/banner1.jpg')" alt="">
      <span class="title">我的</span>
    </div>
    
    <div
      class="container"
      :draggable="true"
      ref="container"
      @touchstart="handleStart($event)"
      @touchmove="handleMove($event)"
      @touchend="handleEnd($event)"
    >
      <div class="info_box">
        <div class="head_info">
          <img :src="require('@/assets/images/avatar1.jpg')" alt="">
          <div class="intro">
            <span class="name">weizhanzhan</span>
            <span class="nameplate">
              <i class="iconfont icon-jiangpai"></i>
              <span>年度最佳CV工程师</span>
            </span>
            <div class="description">一只小前端✌</div>
          </div>
        </div>
        <div class="heat_info">
          <div>
            <div class="num">30</div>
            <div class="name">粉丝</div>
          </div>
          <div>
            <div class="num">20</div>
            <div class="name">关注</div>
          </div>
          <div>
            <div class="num">1K+</div>
            <div class="name">获赞</div>
          </div>
        </div>
        <div class="btn_info">
          <div>私信</div>
          <div>已关注</div>
        </div>
      </div>

      <div class="main">
        <van-tabs v-model:active="activeTopic" shrink :line-width="20">
          <van-tab title="动态">
            <div class="condition">
              <div class="head_box">
                <div class="head_info">
                  <img :src="require('@/assets/images/avatar1.jpg')" alt="">
                  <div class="intro">
                    <div class="name">weizhanzhan</div>
                    <div class="date">12-11发布了动态</div>
                  </div>
                </div>
                <i class="iconfont icon-gengduo"></i>
              </div>
              <div class="content">
                <div class="text">
                  冬天总是爱犯困😪
                </div>
                <div class="img_box">
                  <img :src="require('@/assets/images/talk1.png')" alt="">
                  <img :src="require('@/assets/images/talk1.png')" alt="">
                </div>
              </div>
              <div class="icon_box">
                <div>
                  <i class="iconfont icon-guanzhu1"></i>
                  <span>79</span>
                </div>
                <div>
                  <i class="iconfont icon-pinglun"></i>
                  <span>12</span>
                </div>
                <div>
                  <i class="iconfont icon-fenxiang"></i>
                  <span>10</span>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="话题">
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  setup() {
    const todos = ref([]);
    const activeTopic = ref(0)
    const container = ref<HTMLElement>();

    const state = reactive({
      startY: 0
    })

    const handleStart = ((e: TouchEvent) => {
      state.startY = e.changedTouches[0].clientY
    })

    const handleMove = ((e: TouchEvent) => {
      const clientY = e.changedTouches[0].clientY
      const containerDom = container.value;
      const initClientY = -100;
      const scrollAble = clientY - state.startY;
      let y = scrollAble + initClientY;
      y = y / 3.75;

      if(containerDom) {
        containerDom.style.transition = "none";
        containerDom.style.transform = "translateY(" + y + "vw)";
        // console.log(containerDom.style.transform)
      }
    })

    const handleEnd = (() => {
      const containerDom = container.value;
      if(containerDom) {
        containerDom.style.transition = "transform .6s";
        containerDom.style.transform = "translateY(" + -(100 / 3.75) + "vw)";
      }
    })

    return {
      todos,
      state,
      activeTopic,
      handleStart,
      handleMove,
      handleEnd,
      container
    }
  },
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
