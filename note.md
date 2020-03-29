## 1. 先看 package.json
## 2. 看执行脚本 npm run build
## 3. 找到 scripts/build.js
## 4. 当前打包的入口文件 src
## 5. src
  - compiler 编译相关
  - core 核心文件
  - platforms 平台
  - server 服务端渲染相关
  - sfc 解析.vue文件
  - shared 常量定义

## 6. 入口文件：

entry-runtime-with-compiler
  - Vue.prototype.$mount 函数劫持

runtime/index
  - Vue.prototype.\__patch__ 虚拟 DOM 比对
  - Vue.prototype.$mount 真实的 mount

## 7. core/index vue核心

  - initGlobalAPI 初始化全局 API
  - Vue.util
  - defineReactive
  - set
  - del
  - nextTick
  - initUse
  - initExtend
  - initMixin

## 8. instance/index
真正的 Vue 构造函数
- initMixin(Vue) 初始化mixin
  - initLifecycle(vm)
  - initEvents(vm)
  - initRender(vm)
  - callHook(vm, 'beforeCreate')
  - initInjections(vm) // resolve injections before data/props
  - initState(vm)
  - initProvide(vm) // resolve provide after data/props
  - callHook(vm, 'created')
- stateMixin(Vue)
- eventsMixin(Vue)
- lifecycleMixin(Vue)
- renderMixin(Vue)