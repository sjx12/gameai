// vant 组件以及样式
import {
  Button,
  Toast,
  Loading,
  PullRefresh,
  Popup,
  List,
  Field,
  Cell,
  CellGroup,
  Search,
  NavBar,
  CountDown,
  Dialog
} from 'vant'
import 'vant/lib/index.css'

export default app => {
  app.use(Button)
  app.use(Toast)
  app.use(NavBar)
  app.use(Loading)
  app.use(PullRefresh)
  app.use(Popup)
  app.use(List)
  app.use(Field)
  app.use(Cell)
  app.use(CellGroup)
  app.use(Search)
  app.use(CountDown)
  app.use(Dialog)
}
