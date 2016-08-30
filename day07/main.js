
requirejs.config({
    baseUrl: "/",
    paths: {
        jquery: 'jquery.min',
        test: '/day05/test'
    },
    //shim的使用
    shim: {
        'test': ['jquery']
    }


});
require(['demo.js', 'test'], function (demo) {

    demo.say();
    console.log('test', s)

})