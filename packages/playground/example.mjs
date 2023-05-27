import { translate, TooManyRequestsError } from 'deeplx.js'

const run = () => {
  translate({
    content: '你好, 世界',
    proxy: 'http://127.0.0.1:7890',
  })
    .then(console.log)
    .catch(e => {
      if (e instanceof TooManyRequestsError) {
        console.log('error catched', e.message)
      }
    })
}

run()
