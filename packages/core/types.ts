import type { ProxyAgent } from 'undici'

export interface DeepLXOptions {
  content: string
  /**
   * @default 'EN'   
   */
  targetLang?: string
  sourceLang?: string
  /**
   * @default false
   */
  needAlternative?: boolean
  /**
   * @default undefined
   */
  proxy?: ProxyAgent.Options
}
