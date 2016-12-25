Page({
    data: {
        focus:false,
        tips:"",
    },
    onLoad: function (options) {
        console.log(options)
        var id =  options.id
        
    },
    bindKeyInput: function(e) {

        var value = parseFloat(e.detail.value)
        var pos = e.detail.cursor
        var tips = "请输入正确的分数"
        if(value >= 1){
            tips = "这让我想吐"
        }
        if(value >=2){
            tips = "感觉非常不舒服，浪费"
        }
        if(value >= 3){
            tips = "非常难看"
        }
        if(value >=4){
            tips = "不好看"
        }
          if(value >= 5){
            tips = "真的一般般"
        }
        if(value >=6){
            tips = "一般般,可以考虑"
        }
        if(value >= 7){
            tips = "还不错"
        }
        if(value >=8){
            tips = "好看"
        }
        if(value >= 9){
            tips = "非常好看,值得拥有"
        }
        if(value <=10 && value > 9){
            tips = "太棒了没有言语形容"
        }
        if(value >10){
            tips = ""
        }
        this.setData({
            tips:tips

        })
    },
    clickButton:function(e){
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 1000
        })
    }
  })