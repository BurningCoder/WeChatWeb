//tv.js
Page({
  data: {
    listArray:[
      {date:"2016年11月20日 星期五  今天",
      items:[
        {name:"琅琊榜",imageUrl:"http://img.zcool.cn/community/0122e156a08e9132f875520f2541af.png"
        ,scores:"9.6",id:"123123"
        },
        ]
      },
      {date:"2016年11月18日 星期三  ",
      items:[
        {name:"我的美好时代",imageUrl:"http://imgsrc.baidu.com/forum/w=580/sign=3bddea4796529822053339cbe7c87b3b/263f4890f603738dd489daa2b51bb051f919ec2a.jpg",
        scores:"7.8",id:"123123"},
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