## 使用 Vue3 搭建 H5 通用模板

### ✅ Ul 库统一采用 Vant

- 全局引入组件需要在`/src/vant/index.js`引入即可

### ✅ 存储方式

- 为了方便接口返回数据统一处理，专门针对用户和 token 数据存储,防止定义变量名不统一，造成操作数据失败问题
- 直接统一存储，读取，删除，用户数据,在组件中直接引入`userStore`文件

```js
import { setUser,getUser, rmUser} from './../utils/userStore'
setUser() 存储用户信息
getUser() 获取用户信息
rmUser()  删除用户信息
```

- 统一存储，读取，删除，Token 数据，在组件中引入`tokenStore`文件

```js
import { setToken,getToken, rmToken} from './../utils/tokenStore'
setToken() 存储token信息
getToken() 获取token信息
rmToken()  删除token信息
```

### ✅ 日期过滤处理

- 方便日期统一处理，统一使用`dayjs`插件格式化,已经全局挂载，
- vue3.2 全局挂载从 protoType 更改为 config.globalProperties

```js
$dayjs.dayjs(scope.row.updateTime).format('YYYY-MM-DD')
$getTimer.getTimer(date)
```
