import NodeCache from 'node-cache'

const stdTTL = 300 // 5m
export const Cache = new NodeCache({
  stdTTL,
  useClones: false,
})

const setToInMemoryCache = <Payload>(key: string, payload?: Payload, ttl: number = stdTTL): void => {
  console.log('setting', key)
  Cache.set(key, JSON.stringify(payload), ttl)
}

const getFromInMemoryCache = <ReturnType>(key: string): ReturnType | undefined => {
  console.log('getting', key)
  const stringifiedItems = Cache.get<string>(key)
  return stringifiedItems ? JSON.parse(stringifiedItems) : undefined
}

export const handleCache = <Payload>(
  key: string,
  action: 'write' | 'read',
  payload?: Payload,
  ttl?: number
): Payload | void | undefined => {
  return action === 'write' ? setToInMemoryCache<Payload>(key, payload, ttl) : getFromInMemoryCache<Payload>(key)
}

export const invalidateCache = (key: string): void => {
  Cache.del(key)
}

/** Handles the caching in and out of a function. Works much like useMemo on the UI, without the dependency array */
export const useCaching = async <CallbackReturn>(
  callback: () => Promise<CallbackReturn>,
  key: string,
  ttl?: number
): Promise<CallbackReturn> => {
  const potentiallyCachedResult = handleCache<CallbackReturn>(key, 'read')
  if (potentiallyCachedResult) return new Promise(resolve => resolve(potentiallyCachedResult))
  const freshResult = await callback()
  handleCache(key, 'write', freshResult, ttl)
  return freshResult
}

export const createCacheKey = <VariableType extends Record<string | number, unknown>>(
  keyName: string,
  variables: VariableType
): string => {
  const variablesKeyNames = Object.values(variables).reduce((accumulator, current) => {
    return `${accumulator}_${current}`
  }, '')
  return `${keyName}_${variablesKeyNames}`
}
