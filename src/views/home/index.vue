<template>
  <div class="home">
    <div class="header_box">
      <van-search v-model="value" show-action label="首页" placeholder="请输入搜索关键词 😄..." @search="onSearch">
        <template #action>
          <div @click="onClickButton">搜索</div>
        </template>
      </van-search>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from 'vue'

export default defineComponent({
  setup() {
    const value = ref('');
    const app = getCurrentInstance()
    const Toast = app &&  app.appContext.config.globalProperties.$toast
    const onSearch = () => Toast(value.value);
    const onClickButton = () => Toast(value.value);
    return {
      value,
      onSearch,
      onClickButton
    };
  },
})
</script>

<style lang="scss" scoped>
.home {
  .header_box {
    margin-bottom: 10px;
  }
}
</style>
