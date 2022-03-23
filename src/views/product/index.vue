<template>
  <div class="product">
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
    <div>
      产品
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter()
    const handleGoBack = (() => {
      router.back()
    })
    const app = getCurrentInstance()
    const Toast = app && app.appContext.config.globalProperties.$toast
    const value = ref('');
    const onSearch = () => Toast(value.value)
    const onClickButton = () => {
      Toast(value.value)
    }

    return {
      handleGoBack,
      onSearch,
      onClickButton
    }
  },
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
