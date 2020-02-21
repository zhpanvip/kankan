export const showToast = (str) => {
    wx.showToast({
        title: str,
        icon: 'none',
    });
}

export const showToastWithIcon = (str, status) => {
    wx.showToast({
        title: str,
        icon: status,
    })
}