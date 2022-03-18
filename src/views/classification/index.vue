<template>
  <div class="classification">
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

    <div class="main">
      <van-sidebar v-model="active" @change="onChange">
        <van-sidebar-item :title="item.title"  v-for="(item,index) in sidebarList" :key="index" />
      </van-sidebar>
      <div class="content">
        <div class="content_item" v-for="(item,index) in list" :key="index">
          <div class="title">{{item.title}}</div>
          <div class="list">
            <div class="item"  v-for="(val,index) in item.child" :key="index" @click="handleInfo(val.id)">
              <img :src="getImgUrls(val.img)" alt="">
              <span>{{val.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import { category } from '@/mock/data'
import { classification } from '@/entities/classification'

export default defineComponent({
  setup() {
    const router = useRouter()
    const handleGoBack = (() => {
      router.back()
    })
    const value = ref('');
    const app = getCurrentInstance()
    const Toast = app && app.appContext.config.globalProperties.$toast
    const onSearch = () => Toast(value.value)
    const onClickButton = () => {
      Toast(value.value)
    }

    const active = ref(0);
    const onChange = (index: any) => {
      state.list = category[index].children
    };

    const state: {
      sidebarList: classification[]
      list: classification[]
    } = reactive({
      sidebarList: [],
      list: []
    })

    const getImgUrls = (src: string) => {
      if(src === '') {
        return
      } else {
        return require('@/assets/images/' + src)
      }
    }

    const handleInfo = (id: number) => {
      router.push('/product_list?categoryId=' + id)
    }

    onMounted(() => {
      state.sidebarList = category
      state.list = category[active.value || 0].children
    })

    return {
      ...toRefs(state),
      handleGoBack,
      value,
      Toast,
      onSearch,
      onClickButton,
      active,
      onChange,
      getImgUrls,
      handleInfo
    }
  },
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
