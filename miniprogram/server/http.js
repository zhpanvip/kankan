import {
  showToast
} from "../utils/ToastUtils";
import {
  Strings
} from "../common/Strings";
import {LogUtils} from "../utils/LogUtils";

export class HttpReconstruction {
  constructor() {

  }

  downLoad(url) {
    return new Promise((resolve, reject) => {
      wx.downloadFile({
        url: url,
        success(res) {
          // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
          if (res.statusCode === 200) {
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail(error) {
          reject(error)
        }
      })
    })
  }

  request(params) {
    // 可传入加载过程中的参数 默认加载中
    const title = params.showLoadingTitle || Strings.loading;
    // 可关闭loading界面。
    const noLoading = params.noLoading;
    if (!noLoading) {
      wx.showLoading({
        title
      })
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: params.url,
        method: params.method || 'GET',
        data: params.data,
        header: params.headers,
        success: (res) => {
          LogUtils(res);
          let {
            statusCode
          } = res;
          if (statusCode >= 200 && statusCode <= 299) {
            // 成功
            resolve(res)
          } else {
            // 其它错误由外面处理
            reject(res);
            wx.hideLoading()
          }
        },
        fail: (err) => {
          LogUtils(err);
          reject(err);
          wx.hideLoading();
          setTimeout(() => {
            showToast(Strings.network_error)
          }, 100); 
        },
        complete: () => {
          if (!noLoading) {
            wx.hideLoading()
          }
        }
      })
    })
  }
}