//前台
var router=require('koa-router')();

router.get('/',async (ctx)=>{
    await ctx.render('default/index')
})
//前台和后台的路径写法不同，前台这里表示/case
router.get('case',async (ctx)=>{
    await ctx.render('default/case')
})
router.get('about',async (ctx)=>{
    await ctx.render('default/about')
})

//导出路由
module.exports=router;