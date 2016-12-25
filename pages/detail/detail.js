//tv.js

Page({
    data: {
        id:0,
        cover:"",
        name:"啥哈哈",
        desc:"剧情简介",
        content:"动作  犯罪  美国  13集  2016年10月27日 首播",
        direct:"导演: 李安",
        roles:"演员: Abu",
        scores:"豆瓣 8.1 IMDB 8.9 烂番茄 78%",
        score:0.0,
        defaultSize: 'default',
        primarySize: 'default',
        warnSize: 'default',
        disabled: false,
        plain: false,
        loading: false,
        coverArray:[
 "http://uploads.yjbys.com/allimg/201611/24-1611191F6222L.png",
"http://korea.people.com.cn/mediafile/201403/30/F201403301346181540326346.jpg",
"http://up.henan.china.cn/2016/1107/1478513572633.jpg",
"http://img3.cache.netease.com/photo/0003/2015-05-28/AQNGN78800B50003.jpg",
"http://uploads.yjbys.com/allimg/201611/24-1611191F6222L.png",
"http://korea.people.com.cn/mediafile/201403/30/F201403301346181540326346.jpg",
"http://korea.people.com.cn/mediafile/201403/30/F201403301346181540326346.jpg",
        ]
    },
    onLoad: function (options) {
        console.log(options);
        var name =  options.name;
        var image = options.image;
        var score = options.score;
        this.setData({
            name:name,
            cover:image,
            score:score,
        })
        wx.setNavigationBarTitle({
            title: name
        })
    },
    contentTap:function(event) {
        var name = this.data.name
        var id = this.data.id
        var image = this.data.cover
        wx.navigateTo({
            url: "../descDetail/descDetail?name="+name+"&id="+id+"&image="+image
        })
   
        
    },
    commentTap:function(event) {
 
        wx.navigateTo({
            url: "../commentList/commentList"
        })
   
        
    },
    clickButton:function(event){
        wx.navigateTo({
            url: "../comment/comment"
        })
    }
  })