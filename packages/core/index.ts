import { ProxyAgent, fetch } from 'undici'
import pLimit from 'p-limit'
import type { DeepLXOptions } from './types'
import { headers, deeplApi, maxConcurrentRequests } from './constants'
import { TooManyRequestsError } from './error'

const getTimeStamp = (content: string) => {
  const iCount = content.split('').reduce((prev, curr) => {
    return curr === 'i' ? prev + 1 : prev
  }, 0)

  const ts = Date.now()

  if (iCount === 0) {
    return ts
  }

  return ts - (ts % (iCount + 1)) + (iCount + 1)
}

const getRandomNumber = () => {
  return (Math.random() * 99998 + 8300000) * 1000
}

const request = (options: DeepLXOptions) => {
  const {
    content,
    targetLang = 'EN',
    sourceLang = 'ZH',
    needAlternative = false,
    proxy,
  } = options

  const id = getRandomNumber()
  const timestamp = getTimeStamp(content)

  const requestBody = {
    jsonrpc: '2.0',
    method: 'LMT_handle_texts',
    id: id,
    params: {
      texts: [
        {
          text: content,
          requestAlternatives: 3,
        },
      ],
      splitting: 'newlines',
      lang: {
        source_lang_user_selected: sourceLang,
        target_lang: targetLang,
      },
      timestamp: timestamp,
      commonJobParams: {
        wasSpoken: false,
        transcribe_as: '',
      },
    },
  }

  return fetch(deeplApi, {
    headers,
    dispatcher: proxy ? new ProxyAgent(proxy) : undefined,
    body: JSON.stringify(requestBody),
    method: 'POST',
  })
    .then(res => {
      if (res.status === 429) {
        throw new TooManyRequestsError('ip blocked')
      } else {
        return res.json() as any
      }
    })
    .then(r => {
      console.log(r)

      if (needAlternative) {
        return r['result']['texts'][0]['alternatives'].map(
          (a: { text: string }) => a['text']
        ) as string[]
      }
      return r['result']['texts'][0]['text'] as string
    })
}

const limit = pLimit(maxConcurrentRequests)

const requestWithLimit = (options: DeepLXOptions) => {
  return limit(() => request(options))
}

export { requestWithLimit as translate }
export { TooManyRequestsError }
