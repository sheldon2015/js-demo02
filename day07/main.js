
requirejs.config({
    baseUrl: "/",
    paths: {
        jquery: 'jquery.min',
        'demo': 'day07/demo',
        test: 'day07/test'
    },
    //shim的使用
    shim: {
        'test': ['jquery']
    }


});
require(['demo', 'test'], function (demo) {

    demo.say();
    console.log('test', s)

})