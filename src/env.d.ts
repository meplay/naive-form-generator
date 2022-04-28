/// <reference types="vite/client" />

/**
 * 环境变量类型声明
 */
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_PUBLIC_ROOT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
