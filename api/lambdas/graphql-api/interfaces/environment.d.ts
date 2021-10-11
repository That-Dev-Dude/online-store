declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STAGE: 'prod' | 'local'
    }
  }
}

export {}
