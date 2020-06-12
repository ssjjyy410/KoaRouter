//后台
var router=require('koa-router')();

//引入子模块
var user=require('./admin/user');
var news=require('./admin/news');

router.get('/',async (ctx)=>{
    ctx.body="这是后台管理页面"
})

//配置admin的子路由 层级路由
router.use('/user',user.routes());
router.use('/news',news.routes());


//导出路由
module.exports=router;
