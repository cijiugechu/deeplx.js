import type { ProxyAgent } from 'undici'

export interface DeepLXOptions {
  content: string
  targetLang?: string
  sourceLang?: string
  needAlternative?: boolean
  proxy?: ProxyAgent.Options
}
