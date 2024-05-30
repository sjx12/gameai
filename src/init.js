// 引入全局样式
import '@/assets/scss/index.scss'
import * as vConsole from 'vconsole'

// 时间格式化插件
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

// vant组件
import vantIndex from './vant'
import { getTimer } from './utils/timer'

// 手机端控制台
if (process.env.NODE_ENV !== 'production') {
  new vConsole()
}

export default app => {
  vantIndex(app)

  app.config.globalProperties.$dayjs = dayjs //时间格式化插件
  app.config.globalProperties.$getTimer = getTimer // 时间处理
}
