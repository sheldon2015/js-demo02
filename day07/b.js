define(function (require,exports,module) {
    //循环依赖
    // var a = require('day07/a');
    var s= require('wrapcommon.js')

     console.log('commonwrap', s.a);

    return {
        testB() {
            console.log(require('day07/a').testA())
        }
    }



});