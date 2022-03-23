<template>
  <div class="list">
    <div class="icon_top">
      <van-icon name="arrow-left" @click="handleGoBack" />
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
        <template #action>
          <div @click="onClickButton">搜索</div>
        </template>
      </van-search>
    </div>
    <van-tabs v-model:active="active" type="card">
      <van-tab :title="item.title" v-for="(item,index) in navigation" :key="index">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="val in list" :key="val">
            <div class="column_box" @click="handleInfo">
              <div class="column_img">
                <img :src="require('@/assets/images/1.png')" alt="">
              </div>
              <div class="column">
                <div class="title">{{ val.title }}</div>
                <div class="type">{{ val.type }}</div>
                <div class="price">{{ val.price }}</div>
              </div>
            </div>
          </van-cell>
        </van-list>
      </van-tab>
      <!-- <van-tab :title="'推荐1'">内容 1</van-tab> -->
    </van-tabs>
    <!-- 商品列表 ID 为 {{categoryId}} -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, getCurrentInstance, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { productList } from '@/mock/data'
import { classification, list } from '@/entities/classification'

export default defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()
    const handleGoBack = (() => {
      router.back()
    })
    const categoryId = route.query.categoryId
    const app = getCurrentInstance()
    const Toast = app && app.appContext.config.globalProperties.$toast
    const onSearch = () => Toast(value.value)
    const value = ref('');
    const onClickButton = () => {
      Toast(value.value)
    }
    const active = ref(0);
    // const list = ref([]);
    const state:{
      navigation: classification[]
      list: list[]
    } = reactive({
      navigation: [],
      list: [],
    })

    const loading = ref(false);
    const finished = ref(false);
    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          // state.list.push(state.list.length + 1);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (state.list.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };

    // 监听
    // watchEffect(() => {
    //   state.list = productList[active.value].children
    //   console.log(active.value, state.list)
    // })

    const handleInfo = () => {
      router.push('/product')
    }

    onMounted(() => {
      state.navigation = productList
      state.list = productList[active.value || 0].children
      console.log('onMounted:',active.value, state.navigation)
    })

    return {
      ...toRefs(state),
      handleGoBack,
      categoryId,
      onClickButton,
      value,
      Toast,
      onSearch,
      active,
      onLoad,
      loading,
      finished,
      handleInfo
    }
  },
})
</script>

<style lang="scss" scoped>
@import './list.scss';
</style>
