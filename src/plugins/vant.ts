import { App as VM } from 'vue'
import { Search, Tabbar, TabbarItem, Icon, Swipe, SwipeItem, Tab, Tabs, Button, SwipeCell, Empty } from 'vant'

const plugins = [
  Search,
  Tabbar,
  TabbarItem,
  Icon,
  Tab,
  Tabs,
  Button
]
const useComponents = [ Swipe, SwipeItem, SwipeCell, Empty ]

export const vantPlugins = {
  install:function(vm: VM){
    plugins.forEach(item => {
      vm.component(item.name, item)
    })
    useComponents.forEach(item => {
      vm.use(item)
    })
  }
}
