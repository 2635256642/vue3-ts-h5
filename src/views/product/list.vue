<template>
  <div class="message">
    商品列表 ID 为 {{categoryId}}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()
    const handleGoBack = (() => {
      router.back()
    })
    const categoryId = route.query.categoryId

    onMounted(() => {
    })

    return {
      handleGoBack,
      categoryId
    }
  },
})
</script>

<style lang="scss" scoped>
// @import './index.scss';
</style>
