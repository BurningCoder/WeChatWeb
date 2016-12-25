Page({
  data: {
    name:"",
    image:""
  },
    onLoad: function (options) {
        console.log(options);
        var name =  options.name;
        var image = options.image;
        this.setData({
            name:name,
            image:image,
        }

    )
  },
  didSelected:function(event) {
    // console.log(event.currentTarget.dataset.detail)


  },
      clickButton:function(event){
        wx.navigateTo({
            url: "../comment/comment"
        })
    }
})