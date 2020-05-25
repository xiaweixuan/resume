// pages/index/index.js
Page({
  data: {
    width:0,
    height:0,
    name:"夏炜轩",
    spell:"Xia Weixuan",
    job:"前端开发工程师",
    exp:"",
    tel: "15030716898",
    sex: "男",
    age: 21,
    email: "xia_weixuan@163.com",
    address: "河北省沧州市黄骅市",
    skill:[
      { name: "HTML", percent:75},
      { name: "JavaScript", percent: 90 },
      { name: "CSS", percent: 75 },
      { name: "Node", percent: 65 },
    ],
    education:[
      {
        school:"河北师范大学",
        major:"软件工程专业(本科)",
        year:"2017-2021",
        desc:"主修方向为h5与移动互联网开发，熟悉前端开发、混合开发、及微信小程序的开发制作，了解软件开发和管理技术。"
      }
    ],
    work:[
      {
        company:"用友软件",
        job:"程序员",
        year:"2020/05-至今",
        desc:"因学校安排，暂时延缓实习"
      }
    ],
    project:[
      {
        name:"童话WebApp",
        desc: "该项目作为WebApp，一款艺术类益智游戏，通过简单的点击操作去绘制属于自己的像素图画。作为本队组长，采用Scrum敏捷开 发，前后端分离开发，每日召开例会，明确开发方向。前端使用React+React - Route + Redux + Webpack搭建，后端使用Node.js + Express + MySql搭建。以阿里云云服务器作为部署平台。在本项目中，负责整个核心模块画图功能的实现和前端部分页面布局设计。编写功能模块，解决了画布拖动、缩小放大、点击上色、长按拖动上色同时支持的难点。制作了点击动画效果、及图片绘制过程回放的功能。"
      },
      {
        name: "涂鸦像素小程序",
        desc: "该项目作为工具+娱乐类小程序，可使用简单的点击操作去绘制属于自己的像素图画或将图片转化为专属像素图。本项目使用微信开发者工具及微信云开发。相比pc端使用，难点为对canvas的优化，利用减少状态机改变、改变存储绘制方式以及改变绘制模式以减少渲染频率。"
      },
      {
        name:"子衿教育AI开放平台",
        desc:"该项目作为AI开放平台，意在对外提供智能识别答题卡、图片锐化、人脸识别等人工智能接口，及其管理接口的后台系统。使用技术栈为webpack+vue+vuex+vue-router，自行封装axios、配置webpack进行项目打包压缩，使用ignorePlugin、noParse、happyPack、ParellelUglifyPlugin等插件对生产环境项目进行优化。"
      }
    ],
    introduction: `有良好的创新思维和沟通能力，乐观开朗，独立性和适应力较强，有较强团队意识。对web前端行业充满热情，愿努力学习新知识。业余时间，喜爱钻研技术，自主搭建个人博客网站，并时常更新文章。作为新人，我具备出色的学习能力并且乐于学习、敢于创新，不断追求卓越。作为参与者，我具备诚实可信的品格、富有团队合作精神。`
  },
  onShow: function () {
    var width=wx.getSystemInfoSync().windowWidth
    var height=wx.getSystemInfoSync().windowHeight
    this.setData({
      width:width,
      height:height
    })
  },
})