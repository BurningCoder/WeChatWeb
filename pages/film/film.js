//tv.js
Page({
  data: {
    listArray:[
      {date:"2016年11月20日 星期五  今天",
      items:[
        {name:"杀破狼",imageUrl:"http://img3.cache.netease.com/photo/0003/2015-05-28/AQNGN78800B50003.jpg"
        ,scores:"6.8",detailScores:"豆瓣:6.8   IMDB:9.0   烂番茄:7.6",id:"123123"
        },
         {name:"复仇者联盟2",imageUrl:"http://korea.people.com.cn/mediafile/201403/30/F201403301346181540326346.jpg"
        ,scores:"9.8",detailScores:"豆瓣:6.8   IMDB:9.0   烂番茄:7.6",id:"123123"
        },
        ]
      },
      {date:"2016年11月18日 星期三  ",
      items:[
        {name:"我不是潘金莲",imageUrl:"http://uploads.yjbys.com/allimg/201611/24-1611191F6222L.png",
        scores:"7.8",detailScores:"豆瓣:6.8   IMDB:9.0   烂番茄:7.6",id:"123123"},
        {name:"奇异博士",imageUrl:"http://up.henan.china.cn/2016/1107/1478513572633.jpg",
        scores:"8.8",detailScores:"豆瓣:6.8   IMDB:9.0   烂番茄:7.6",id:"123123"}
        ]
      }
     
      ],
  },
  onLoad: function () {

  },
  didSelected:function(event) {
    // console.log(event.currentTarget.dataset.detail)
    var name = event.currentTarget.dataset.detail.name
    var id = event.currentTarget.dataset.detail.id
    var image = event.currentTarget.dataset.detail.imageUrl
    var score =  event.currentTarget.dataset.detail.scores
    wx.navigateTo({
        url: "../detail/detail?name="+name+"&id="+id+"&image="+image+"&score="+score
    })
  }
})