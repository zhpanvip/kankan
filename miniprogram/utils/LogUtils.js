import { ENV } from '../config/index.js'

export const LogUtils = (str) => {
  if (ENV === 'beta') {
    console.log(str)
  } else if (ENV === 'release') {

  } else {
    console.log(str)
  }
}