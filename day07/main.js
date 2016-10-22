
requirejs.config({
    baseUrl: "/",
    paths: {
        //paths中配置的路径最好不要带扩展,他可以为目录结构,不一定是文件

    },
    //shim的使用
    shim: {
        'day07/test': ['jquery.min']
    }


});
require(['day07/demo', 'day07/test', 'day07/a'], function (demo, test, a) {

    demo.say();
    console.log('test', s)

    console.log(a.testFromB())
   


})