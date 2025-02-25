import { Constants } from "../common/Constants";
import { isEmptyString, isNullObject } from "./EmptyUtils";

/**
 * 存储用户信息
 */
export const setUserInfo = (userInfo) => {
  if (isEmptyString(userInfo.avatarUrl)) {
    userInfo.avatarUrl = "../../images/icon/default_avatar.png";
  }
  wx.setStorageSync(Constants.KEY_USER_INFO, userInfo)
};

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  const userInfo = wx.getStorageSync(Constants.KEY_USER_INFO);
  return isNullObject(userInfo) ? {} : userInfo;
};

/**
 * 是否登录
 */
export const isLogin = () => {
  const userInfo = getUserInfo();
  return !isNullObject(userInfo) && !isEmptyString(userInfo.userId)
};