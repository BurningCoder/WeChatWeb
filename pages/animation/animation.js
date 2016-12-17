//tv.js
Page({
  data: {
    listArray:[
      {date:"2016年11月20日 星期五  今天",
      items:[
        {name:"海贼王",imageUrl:"http://img2.imgtn.bdimg.com/it/u=519761557,1251565357&fm=11&gp=0.jpg"
        ,scores:"9.3",id:"123123"
        }
        ]
      },
     
     
      ],
  },
  onLoad: function () {

  },
  didSelected:function(event) {
    console.log(event)
  }
})