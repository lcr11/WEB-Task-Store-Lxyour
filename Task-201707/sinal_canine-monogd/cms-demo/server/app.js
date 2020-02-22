var Koa = require('koa');
var KoaRouter = require('koa-router');

var app = new Koa();
var router = new KoaRouter();

app
    .use(router.routes())
    .use(router.allowedMethods());
router.get('/',(ctx, next) => {
    ctx.body = 'This a index page.'
})

app.listen(8080, () => {
    console.log('-----恭喜你后端启动成功！运行在8080端口')
           })

//var Koa = require('koa');
//var KoaRouter = require('koa-router');
//var staticServer = require ('koa-static');
//var path = require ('path');
//
//var mongoose = require('mongoose');
//mongoose.connect('mongodb:127.0.0.1:27017:cms-demo')
//
//var app= new koa();
//var router = new koaRouter();
//
//app.use(staticServer(path.resolve(_dirname,'../views')));
//
//app
//    .use(router.routes())
//    .use(router.allowedMethods());
//router.get('/',(ctx, next) =>{
//    ctx.body = 'This a index page.'
//})
//router.get('/api/article/save',(ctx,next) =>{
//    
//})
//
//app.listen(8080, () => {
//    console.log('-----恭喜你后端启动成功！运行在8080端口')
//           })
