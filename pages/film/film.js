//tv.js
Page({
  data: {
    listArray:[
      {date:"2016年11月20日 星期五  今天",
      items:[
        {name:"杀破狼",imageUrl:"http://img3.cache.netease.com/photo/0003/2015-05-28/AQNGN78800B50003.jpg"
        ,scores:"6.8",id:"123123"
        },
         {name:"复仇者联盟2",imageUrl:"http://korea.people.com.cn/mediafile/201403/30/F201403301346181540326346.jpg"
        ,scores:"9.8",id:"123123"
        },
        ]
      },
      {date:"2016年11月18日 星期三  ",
      items:[
        {name:"我不是潘金莲",imageUrl:"http://uploads.yjbys.com/allimg/201611/24-1611191F6222L.png",
        scores:"7.8",id:"123123"},
        {name:"奇异博士",imageUrl:"http://img.52fuqing.com/upload/editor/2016-11-6/2016116205224938vycic.jpg",
        scores:"8.8",id:"123123"}
        ]
      }
     
      ],
  },
  onLoad: function () {

  },
  didSelected:function(event) {
    console.log(event)
  }
})