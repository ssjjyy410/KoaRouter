var router=require('koa-router')();

router.get('/',async (ctx)=>{
    await ctx.render('admin/news/index')
})
router.get('/news1',async (ctx)=>{
    await ctx.render('admin/news/news1')
})
router.get('/news2',async (ctx)=>{
    await ctx.render('admin/news/news2')
})

//导出路由
module.exports=router;