var Koa=require('koa'),
    router=require('koa-router')(),
    path=require('path'),
    render=require('koa-art-template');

var app=new Koa();

//配置koa-art-template中间件
render(app,{
    root:path.join(__dirname,'views'),//视图的位置
    extname:'.html',//后缀名
    debug:process.env.NODE_ENV!=='production'//是否开启调试模式
})

//引入子模块
var admin=require('./routes/admin');
var api=require('./routes/api');
var index=require('./routes/index');

//配置路由
//  /   配置首页
router.use('/',index.routes());
//  /admin  配置子路由 层级路由
router.use('/admin',admin.routes());//admin.routes()表示启动admin路由
//  /api  配置子路由 层级路由
router.use('/api',api.routes());

//启动路由
app.use(router.routes())
    .use(router.allowedMethods());

//监听端口
app.listen(3000);
