//tv.js
Page({
  data: {
    listArray:[
      {date:"2016年11月20日 星期五  今天",
      items:[
        {name:"战神",imageUrl:"http://www.hzeduask.com/edit5.0/uploadfile/201009/20100918133824708.jpg"
        ,scores:"9.0",id:"123123"
        }
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