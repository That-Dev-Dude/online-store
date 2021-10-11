export const stitchSchema = (...schemas: string[]): string => {
  return schemas.reduce((accumulator, currentValue) => accumulator + '\n' + currentValue, '')
}

export const waitForMs = (msToWait: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve), msToWait
  })

export * from './caching'
export * from './responder'
