import { isObject } from '@/shared/src'
import { mutableHandlers } from './baseHandlers'

const reactiveMap = new WeakMap<object, any>()

function reactive(target: object) {
  return createReactiveObject(target, mutableHandlers, reactiveMap)
}

function createReactiveObject(
  target: object,
  baseHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<object, any>
) {
  const existingProxy = proxyMap.get(target)

  if (existingProxy) {
    return existingProxy
  }

  const proxy = new Proxy(target, baseHandlers)

  proxyMap.set(target, proxy)

  return proxy
}

function toReactive(v: any) {
  if (isObject(v)) {
    return reactive(v)
  }

  return v
}

export { reactive, toReactive }
