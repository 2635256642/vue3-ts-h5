<template>
  <div class="home">
    <div class="header_search">
      <van-search
        v-model="value"
        show-action
        label="首页"
        placeholder="请输入搜索关键词 😄..."
        @search="onSearch"
      >
        <template #action>
          <div @click="onClickButton">搜索</div>
        </template>
      </van-search>
    </div>
    <div class="header_menu">
      <div class="menu_item" @click="handleInfo('/message')">
        <div>
          <van-icon name="wechat" size="35" color="#52c41a" />
        </div>
        <span>朋友圈</span>
      </div>
      <div class="menu_item" @click="handleInfo('/message')">
        <div>
          <van-icon name="cart-circle" size="35" color="#fa8c16" />
        </div>
        <span>购物车</span>
      </div>
      <div class="menu_item" @click="handleInfo('/message')">
        <div>
          <van-icon name="map-marked" size="35" color="#40a9ff" />
        </div>
        <span>地图</span>
      </div>
      <div class="menu_item" @click="handleInfo('/message')">
        <div>
          <van-icon name="music" size="35" color="#000000" />
        </div>
        <span>短视频</span>
      </div>
      <div class="menu_item" @click="handleInfo('/message')">
        <div>
          <van-icon name="fire" size="35" color="#ee0a24" />
        </div>
        <span>更多</span>
      </div>
    </div>

    <div class="hot_rank">
      <div class="title">今日热榜</div>
      <van-swipe class="rank_swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(img, index) in banners" :key="index">
          <img :src="img" @click="handleShowImg(banners, { startPosition: index })" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="hot_topic">
      <van-tabs v-model:active="activeTopic" shrink :line-width="20">
        <van-tab title="发现">
          <van-swipe-cell class="swipe-item" v-for="(item, index) in list" :key="index">
            <Column :data="item" />
            <template #right>
              <van-button
                square
                type="danger"
                color="#85a5ff"
                :text="handleItemIsSelect(item) ? '关注' : '取消'"
                @click="toCollectResource(item)"
              ></van-button>
            </template>
          </van-swipe-cell>
        </van-tab>
        <van-tab title="关注">
          <van-empty v-if="collection.length === 0" description="发现列表向左滑动每一项来关注😄" />
          <van-swipe-cell v-else class="swipe-item" v-for="(item, index) in collection" :key="index">
            <Column :data="item" />
            <template #right>
              <van-button
                square
                type="danger"
                color="#85a5ff"
                :text="handleItemIsSelect(item) ? '关注' : '取消'"
                @click="toCollectResource(item)"
              ></van-button>
            </template>
          </van-swipe-cell>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  getCurrentInstance,
  reactive,
  toRefs,
  onMounted,
} from 'vue'
import { useRouter } from 'vue-router'
import { showImg as handleShowImg } from '@/utils/utils'
import { resource as resourceOptipn } from '@/entities/resource'
import { resource } from '@/mock/data'
import Column from '@/components/column.vue'
import { Notify } from 'vant'

export default defineComponent({
  name: 'home',
  components: {
    Column,
  },
  setup() {
    const value = ref('')
    const app = getCurrentInstance()
    const Toast = app && app.appContext.config.globalProperties.$toast
    const onSearch = () => Toast(value.value)
    const onClickButton = () => Toast(value.value)

    const router = useRouter()
    const handleInfo = (path: string) => {
      router.push(path)
    }

    const banners = [
      require('@/assets/images/banner1.jpg'),
      require('@/assets/images/banner2.jpg'),
      require('@/assets/images/banner3.jpg'),
      require('@/assets/images/banner4.jpg'),
    ]

    const activeTopic = ref(0)

    const state: {
      list: resourceOptipn[]
      collection: resourceOptipn[]
    } = reactive({
      list: [],
      collection: [],
    })

    function handleItemIsSelect(resource: resourceOptipn) {
      const index = state.collection.findIndex(
        (item) => item.title === resource.title
      )
      return index === -1
    }

    function toCollectResource(resource: resourceOptipn) {
      Notify({
        color: '#ffffff',
        background: '#85a5ff',
        message: '关注成功！',
      })
      const index = state.collection.findIndex(
        (item) => item.title === resource.title
      )
      if (index === -1) {
        state.collection.push(resource)
      } else {
        state.collection.splice(index, 1)
      }
    }

    onMounted(() => {
      state.list = resource
    })

    return {
      value,
      onSearch,
      onClickButton,
      handleInfo,
      banners,
      handleShowImg,
      activeTopic,
      ...toRefs(state),
      handleItemIsSelect,
      toCollectResource,
    }
  },
})
</script>

<style lang="scss" scoped>
.home {
  .header_search {
    margin-bottom: 10px;
  }
  .header_menu {
    display: flex;
    justify-content: space-between;
    .menu_item {
      width: 20%;
      text-align: center;
    }
  }
  .hot_rank {
    padding: 0 12px;
    margin-top: 16px;
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .rank_swipe {
      margin-top: 12px;
      :deep(.van-swipe-item) {
        font-size: 20px;
        text-align: center;
        border-radius: 4px;
        img {
          width: 100%;
          height: 152px;
        }
      }
    }
  }
  .hot_topic {
    .van-tabs {
      :deep(.van-tabs__line) {
        background: rgb(133, 165, 255);
      }
      :deep(.van-tabs__content) {
        padding: 0 10px;
      }
    }
  }
}
</style>
