import { beta } from './beta.env'
import { release } from './release.env'

// 设置环境
const ENV = 'beta'
let config = {}
if (ENV === 'release') {
  config = release
} else {
  config = beta
}
export { config, ENV }
