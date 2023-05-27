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

export { deeplApi, headers, maxConcurrentRequests }
