# springboot构建的房地产项目



## 技术选型:
    oracle
    mybatis
    第三方短信
    jdbc      
    springboot
    前端:  
    thymeleaf
    VUE
    

## 项目架构
      java层:
      java\com\component :  拦截器
      com.config  :跳转配置
      com.controller.Article: 文章
                       BranchShop :门店信息
                       browsingHistory:浏览历史
                       ershoufang:二手房相关
                       jingjiren:经纪人
                       loginRegister:登陆注册
                       maptohouse: 房源地图
                       marketQuotation 市场报价相关
                       newhouse :新房
                       xiaoqu:小区
                       zufang:租房
      com.model    : 数据库表映射对象
              util :  发送短信封装类
      com.service  服务层
      com.sms : 发送短信相关类
      com.util: 工具类
      
      
      静态前端层: resoureces
      statics: 静态js,css,img ,第三方插件           
      templagtes: 静态页面html(使用了thymleleaf)
         templates.article : 文章  文章列表
         templates
                   base   公共页面 
                   ershoufang : 二手房 相关
                        ershoufangN : 二手房列表
                        secondHouse: 二手房详情
                   helphouse: 用户相关帮助
                        buy:买房
                        chuzu: 租房
                        maifang: 卖房 
                   jingjiren : 经纪人相关
                        agentMessage: 经纪人详细信息
                        branchShop: 门店信息
                        jingjiren: 经纪人列表
                   login-res : 登陆注册 个人页面相关
                      personCenter/attentionCommunity.html  : 关注小区
                      personCenter/attentionHouse.html  :关注房源
                      personCenter/entrust.html  :  委托页面
                      login.html  : 登陆
                      resgist.html      :注册
                      user.html      :用户页面  
                   maptohouse     :地图页面
                      cityXuanZhe.html   :(城市定位)暂未开发     
                      ditu.html       :地图页面
                   templates/newhouse/newhouse.html : 新房列表页面    
                   templates/newhouse/newhouseMessage.html 新房详细信息    
                   templates.wenda : 问答页面
                        该页面几乎都是静态页面 不做说明
                   templates/xiaoqu/communityMessage.html  :小区详细信息
                   templates/xiaoqu/xiaoqu.html : 小区列表
                   templates/xiaoqu/xiaoquXiangXi.html    : 弃用    
                   
                   templates/zufang/tenementMessage.html : 租房详情
                   templates/zufang/zufang.html: 租房列表 
                   
                   templates/error.html  错误页面
                   templates/index.html 主页                