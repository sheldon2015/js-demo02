requirejs.config({
    baseUrl: "/",
    paths: {
        "jquery": 'jquery.min'
    },
    shim: {
        'shim.js': ['jquery']
    }
});

// define(id ?, dependencies ?, factory);
// 它接受三个参数：
// id  (PS:最好不要自定义模块id)
// 这是一个可选参数，相当于模块的名字，加载器可通过id名加载对应的模块。如果没有提供id，加载器会将模块文件名作为默认id。(如demo)
//  依赖jquery（jquery是模块id）
// dependencies
// 可选，接受一个数组参数，传入当前对象依赖的对象id。

// factory
// 回调函数，在依赖模块加载完成后会调用，它的参数是所有依赖模块的引用。回调函数的返回值就是当前对象的导出值。

//带有.js后缀的js文件不遵从baseurl，那个路径
require(['demo.js', 'city.js', 'func.js', 'shim.js'], () => {
    // console.log(jquery)
    // m.say();
    // console.log(city);
    // var s = new Func('aa');
    // console.log('s', s)

})

