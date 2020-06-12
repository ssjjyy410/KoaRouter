var router=require('koa-router')();

router.get('/',async (ctx)=>{
    ctx.body="这是api页面"
})
router.get('/focus',async (ctx)=>{
    ctx.body="轮播图"
})
router.get('/newslist',async (ctx)=>{
    ctx.body="新闻列表"
})

//导出路由
module.exports=router;
