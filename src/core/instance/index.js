import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options) // 一使用 调用 init 方法
}

// 给当前实例添加属性和方法
initMixin(Vue) // 初始化mixin
stateMixin(Vue) // $set $delete $watch
eventsMixin(Vue) // 实现 vue 的发布订阅模式
lifecycleMixin(Vue) // Vue.prototype._update $forceUpdate $destory
renderMixin(Vue) // Vue.prototype._render

export default Vue
