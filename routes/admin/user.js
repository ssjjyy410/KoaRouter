var router=require('koa-router')();

router.get('/',async (ctx)=>{
    await ctx.render('admin/user/index')
})
router.get('/add',async (ctx)=>{
    await ctx.render('admin/user/add')
})
router.get('/edit',async (ctx)=>{
    await ctx.render('admin/user/edit')
})
router.get('/delete',async (ctx)=>{
    await ctx.render('admin/user/delete')
})
router.get('/find',async (ctx)=>{
    await ctx.render('admin/user/find')
})

//导出路由
module.exports=router;