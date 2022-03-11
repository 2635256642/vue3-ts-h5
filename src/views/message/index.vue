<template>
  <div class="message">
    <div class="img_box">
      <img src="@assets/images/message_bg.gif" alt="">
      <div class="icon_top">
        <i class="iconfont icon-fanhui" @click="handleGoBack"></i>
        <i class="iconfont icon-xiangji"></i>
      </div>
      <div class="head_img">
        <div class="name">zhanzhanwei</div>
        <img src="@assets/images/avatar1.jpg" alt="">
      </div>
    </div>
    <div class="main">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="item_box" v-for="(item,index) in list" :key="index">
          <div>
            <img src="@assets/images/avatar1.jpg" alt="">
          </div>
          <div>
            <div>zhanzhanwei</div>
            <div>xxxxxxxxxxxxxxxxx</div>
            <div>
              <img src="" alt="">
            </div>
            <div>
              <span>最新</span>
              <i></i>
              <div></div>
            </div>
            <div>
              <div>
                <i></i>
                <span></span>
              </div>
              <div>
                <div>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter()
    const handleGoBack = (() => {
      router.back()
    })
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 2; i++) {
      //     list.value.push(list.value.length + 1);
      //   }
      //   // 加载状态结束
      //   loading.value = false;
      //   // 数据全部加载完成
      //   if (list.value.length >= 1) {
          finished.value = true;
      //   }
      // }, 1000);
    };

    return {
      handleGoBack,
      list,
      onLoad,
      loading,
      finished
    }
  },
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
