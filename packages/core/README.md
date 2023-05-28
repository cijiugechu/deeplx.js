# deeplx.js

A Node.js port of [DeepLX](https://github.com/OwO-Network/DeepLX).

## Installation

```shell
npm install deeplx.js
# pnpm 
pnpm add deeplx.js
```

## Usage

```js
import { translate, TooManyRequestsError } from 'deeplx.js'

const run = () => {
  translate({
    content: '你好, 世界',
    proxy: 'http://127.0.0.1:7890',
    souceLang: 'ZH'
  })
    .then(console.log)
    .catch(e => {
      if (e instanceof TooManyRequestsError) {
        console.log('error catched', e.message)
      }
    })
}

run()
```

## Options

```ts
import type { ProxyAgent } from 'undici'

export interface DeepLXOptions {
  content: string
  targetLang?: string
  sourceLang?: string
  needAlternative?: boolean
  proxy?: ProxyAgent.Options
}
```

## Example

see [example.mjs](../playground/example.mjs)

## License

MIT &copy; [nemurubaka](https://github.com/cijiugechu)