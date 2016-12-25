Page({
  data: {
    list:[
      {
        name:"备胎",
        score:9.2,
        date:"28分钟前",
        content:"作为漫威作品来说，这集确实花活繁多。对时间和空间的改造、表现和重塑都优于复仇者系列，融入和很多现代艺术的概念，把《盗梦空间》中的视觉奇观成倍放大。略有新意。",
        favour:218,
        unfavour:19,
        comments:31
      },
      {
        name:"啊布",
        score:8.2,
        date:"28分钟前",
        content:"感觉一般般而已。",
        favour:218,
        unfavour:19,
        comments:31
      },
       {
        name:"周杰伦",
        score:9.0,
        date:"3天前",
        content:"哎呦,不错哦",
        favour:218,
        unfavour:19,
        comments:31
      },

    ]
  },
    onLoad: function (options) {

  },
    clickButton:function(event){
      wx.navigateTo({
          url: "../comment/comment"
    })
    }

})