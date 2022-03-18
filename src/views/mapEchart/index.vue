<template>
  <div class="map_echart">
    <div class="icon_top">
      <i class="iconfont icon-fanhui" @click="handleGoBack"></i>
      <i class="iconfont icon-zhongzhi" @click="backMap"></i>
    </div>
    <div id="map_container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance } from "vue";
// import { map as mapType } from '@/entities/map'
import { mapData } from '@/mock/map'
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const app = getCurrentInstance()
    const echarts = app && app.appContext.config.globalProperties.$echarts
    const axios = app && app.appContext.config.globalProperties.$axios
    const router = useRouter()
    const handleGoBack = (() => {
      router.back()
    })
    // const state: {
    //   provinces: mapType
    //   cityMap: mapType
    //   Mapian: mapType
    // } = reactive({
    //   provinces: {},
    //   cityMap: {},
    //   Mapian: {}
    // })

    const backMap = (() => {
      mapChart()
    })

    const mapChart = (() => {
      let myChart = echarts.init(document.getElementById("map_container"))
      let dataList = [{
          name: "南海诸岛",
          value: 0
        },
        {
          name: "北京",
          value: 5
        },
        {
          name: "天津",
          value: 7
        },
        {
          name: "上海",
          value: 4
        }
      ];

      function initEcharts(map: string) {
        let option = {
          geo: {
            map: map,
            roam: false,
            scaleLimit: {
              min: 1.2,
              max: 3
            },
            zoom: 1.2,
            //图形上的文本标签，可用于说明图形的一些数据信息
            label: {
              normal: {
                show: true,
                fontSize: "10",
                color: "rgb(61,161,173)",
              }
            },
            //地图区域的多边形 图形样式，有 normal 和 emphasis 两个状态
            itemStyle: {
              //normal 是图形在默认状态下的样式；
              normal: {
                areaColor: 'rgba(23,28,51,1)',
                borderColor: 'rgba(46,133,243,1)',
                borderWidth: 1.3,
                shadowBlur: 15,
                // shadowColor: 'rgb(58,115,192)',
                shadowOffsetX: 7,
                shadowOffsetY: 6,
              },
              //emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
              emphasis: {
                areaColor: 'rgba(46,133,243,0.5)',
                borderWidth: 1.6,
                shadowBlur: 25,
              }
            }
          },
          series: [{
            name: "信息量",
            type: "map",
            //这里是'china',及因为js中注册的名字，如果是上海市，则该出需pName 指的是'shanghai'
            mapType: map,
            geoIndex: 0,
            data: dataList
          }]
        };

        myChart.setOption(option);
      }
      initEcharts('china')
      window.onresize = function () {//自适应大小
        myChart.resize();
      };

      // 点击触发
      myChart.on("click", (param: any) => {
        if (param.name in mapData.provinces) {
          // 处理省模块
          let names = param.name;
          for (let key in mapData.provinces) {
            if (names == key) {
              showProvince(mapData.provinces[key as keyof typeof mapData.provinces], key);
              // console.log('省:', mapData,param)
              break;
            }
          }

        } 
        else if (param.name in mapData.cityMap) {
          // 处理市模块
          let names = param.name;
          // console.log(names)
          for (let key in mapData.cityMap) {
            if (names == key) {
              showCitys(mapData.cityMap[key as keyof typeof mapData.cityMap], key);
              break;
            }
          }
        } else if (param.name in mapData.Mapian) {
          // 处理市模块
          let names = param.name
          // console.log(names)
          for (let key in mapData.Mapian) {
            if (names == key) {
              showC(mapData.Mapian[key as keyof typeof mapData.Mapian], key)
              break
            }
          }
        }
      });
      const url = process.env.NODE_ENV === 'development' ? '' : '/vue3-ts-h5.github.io'
      //展示对应的省
      function showProvince(eName: any, param: any) {
        // console.log('展开省:', eName, param)
        axios.get(url + `/map/province/${eName}.json`).then((result: any) => {
          echarts.registerMap(param, result.data);
          initEcharts(param);
        })
      }

      function showCitys(cName: any, param: any) {
        // console.log('展开县:', cName, param)
        // 显示县级地图
        axios.get(url + `/map/city/${cName}.json`).then((result: any) => {
          echarts.registerMap(param, result.data);
          initEcharts(param);
        })
      }
      // showC('对应区/县的地级编号')
      function showC(cName: any, param: any) {
        // console.log('展开区/县:', cName, param)
        // 显示县级地图
        axios.get(url + `/map/county/${cName}.json`).then((result: any) => {
          echarts.registerMap(param, result.data);
          initEcharts(param);
        })
      }
    })


    onMounted(() => {
      mapChart()
    })

    return {
      // state,
      handleGoBack,
      backMap
    }
  },

})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>