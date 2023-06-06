import { Language } from 'whichlang-node'

const deeplApi = 'https://www2.deepl.com/jsonrpc'

const headers = {
  'Content-Type': 'application/json',
  Accept: '*/*',
  'x-app-os-name': 'iOS',
  'x-app-os-version': '16.3.0',
  'Accept-Language': 'en-US,en;q=0.9',
  'Accept-Encoding': 'gzip, deflate, br',
  'x-app-device': 'iPhone13,2',
  'User-Agent': 'DeepL-iOS/2.6.0 iOS 16.3.0 (iPhone13,2)',
  'x-app-build': '353933',
  'x-app-version': '2.6',
  Connection: 'keep-alive',
}

const maxConcurrentRequests = 3

const toISO6391 = (lang: Language) => {
  switch (lang) {
    case Language.Arabic:
      return 'AR'
    case Language.Dutch:
      return 'NL'
    case Language.English:
      return 'EN'
    case Language.French:
      return 'FR'
    case Language.German:
      return 'DE'
    case Language.Italian:
      return 'IT'
    case Language.Japanese:
      return 'JA'
    case Language.Korean:
      return 'KO'
    case Language.Portuguese:
      return 'PT'
    case Language.Russian:
      return 'RU'
    case Language.Spanish:
      return 'ES'
    case Language.Swedish:
      return 'SV'
    case Language.Hindi:
      return 'HI'
    case Language.Turkish:
      return 'TR'
    case Language.Vietnamese:
      return 'VI'
    default:
      return ''
  }
}

export { deeplApi, headers, maxConcurrentRequests, toISO6391 }
