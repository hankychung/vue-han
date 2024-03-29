function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object'
}

export { isObject }
