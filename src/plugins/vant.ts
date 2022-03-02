import { App as VM } from 'vue'
import { Search, Tabbar, TabbarItem } from 'vant'

const plugins = [
  Search,
  Tabbar,
  TabbarItem
]
// const useComponents = []

export const vantPlugins = {
  install:function(vm: VM){
    plugins.forEach(item => {
      vm.component(item.name, item)
    })
    // useComponents.forEach(item => {
    //   vm.use(item)
    // })
  }
}
