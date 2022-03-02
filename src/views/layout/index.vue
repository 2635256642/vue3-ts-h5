<template>
  <div class="layout">
    <div class="content">
      <router-view>
      </router-view>
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item name="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="/about" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "layout",
  setup() {
    const router = useRouter()
    const state = reactive({
      active: '/home',
      includeRoutes: ['ABOUT']
    })

    watch(
      () => state.active,
      val => {
        router.push(val)
      }
    )

    onMounted(() => {
      state.active = router.currentRoute.value.path
    })

    return {
      ...toRefs(state)
    }
  },
})
</script>

