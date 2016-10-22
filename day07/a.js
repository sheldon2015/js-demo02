define(function (require) {

    var b = require('day07/b');

    return {
        testA() {
            console.log('a  in  a function')
        },
        testFromB() {
            console.log(b.testB())
        }
    }



});