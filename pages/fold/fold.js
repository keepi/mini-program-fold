// pages/fold/fold.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
        isOpen: false, 
        isFold: false, // 是否显示'展开' 默认不显示显示
    },
    onLoad() {
        let _that = this;
        setTimeout(function() {
            let query = wx.createSelectorQuery();
            query.select('.content').boundingClientRect();
            query.exec(function(rect) {
                console.log(rect[0].height)
                if (rect[0] === null) {
                    return
                } else if (rect[0].height > 500) {
                    _that.setData({
                        isFold: true
                    })
                }
            })
        }, 100)

    },
    open() {
        this.setData({
            isOpen: this.data.isOpen ? false : true
        })
    }
})