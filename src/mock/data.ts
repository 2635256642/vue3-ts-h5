const resource = [
  {
    title: "Nutui",
    desc: "京东风格的轻量级移动端 Vue 组件库",
    url: "https://nutui.jd.com/#/range",
    logo: "nutui.png"
  },
  {
    title: "Vant",
    desc: "轻量、可靠的移动端 Vue 组件库",
    url: "https://vant-contrib.gitee.io/vant/v3/#/zh-CN",
    logo: "vant.png"
  },
  {
    title: "Ant Design",
    desc: "为 Web 应用提供了丰富的基础 UI 组件",
    url: "https://antdv.com/docs/vue/introduce-cn/",
    logo: "antd.svg"
  },
  {
    title: "Vite 中文",
    desc: "下一代前端开发与构建工具",
    url: "https://cn.vitejs.dev/",
    logo: "vite.svg"
  },
  {
    title: "Vue3 文档",
    desc: "渐进式JavaScript框架vue3中文文档",
    url: "https://vue3js.cn/docs/zh/",
    logo: "logo.png"
  },
  {
    title: "ElementPlus",
    desc: "一套基于 Vue 3.0 的桌面端组件库",
    url: "https://element-plus.gitee.io/#/zh-CN/component/installation",
    logo: "element+.svg"
  },
  {
    title: "Iconfont",
    desc: "2400+基础图标，29种图标分类，提供更多的选择",
    url: "https://iconpark.oceanengine.com/home",
    logo: "iconpark.svg"
  },
  {
    title: "Naiveui",
    desc: "一个 Vue 3 组件库，使用 TypeScript",
    url: "https://www.naiveui.com/zh-CN/light",
    logo: "naive.svg"
  },
  {
    title: "Echarts",
    desc: "一个基于 JavaScript 的开源可视化图表库",
    url: "https://echarts.apache.org/zh/index.html",
    logo: "echarts.png"
  },
  {
    title: "XGplayer",
    desc: "带解析器、能节省流量的 Web 视频播放器",
    url: "http://v2.h5player.bytedance.com/",
    logo: "xgplayer.png"
  },
  {
    title: "VueUse",
    desc: "VUE组合实用程序的集合",
    url: "https://vueuse.org/",
    logo: "vueuse.svg"
  },
  {
    title: "Vue3 源码",
    desc: "深入学习了解vue3源码",
    url: "https://vue3js.cn/start/",
    logo: "logo.png"
  }
]

const category = [
  {
    title: '家电 数码 手机',
    children: [
      {
        title: '家电',
        child: [
          {
            id: 1,
            img: '1.png',
            name: '生活电器'
          },
          {
            id: 2,
            img: '2.png',
            name: '厨房电器'
          },
          {
            id: 3,
            img: '3.png',
            name: '扫地机器人'
          }
        ]
      },
      {
        title: '数码',
        child: [
          {
            id: 4,
            img: '4.png',
            name: '游戏主机'
          },
          {
            id: 5,
            img: '5.png',
            name: '数码相机'
          }
        ]
      },
      {
        title: '手机',
        child: [
          {
            id: 6,
            img: '6.png',
            name: '华为手机'
          }
        ]
      }
    ]
  },
  {
    title: '女装 男装 搭配',
    children: []
  },
  {
    title: '家具 家饰 家纺',
    children: []
  },
  {
    title: '运动 户外 乐器',
    children: []
  },
  {
    title: '游戏 动漫 影视',
    children: []
  },
  {
    title: '美妆 清洁 宠物',
    children: []
  },
  {
    title: '工具 装修 建材',
    children: []
  },
  {
    title: '鞋靴 箱包 配件',
    children: []
  },
  {
    title: '玩具 孕产 用品',
    children: []
  }
]

export { resource, category }
