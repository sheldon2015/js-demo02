var extendCopy = function (p) {
    var c = {};
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}
function Animal(params) {
}
Animal.prototype.name = 'A';
Animal.prototype.shout = function () {
    console.log('A');
}
function Child() {
}
var c = extendCopy(Animal.prototype);
Child.prototype = c;
Child.prototype.constructor = c;
new Child().shout();
s = {
    name: 'yaowenzhu',
    age: 11,
    shout: function () {
        console.log(111);
    },
    inc: {
        name: 'apple',
        location: 'qqqqqqqqqqqqqqqqqqqqqq'
    },
    family: ['a', 'b', 'c']
}

function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}
var d = deepCopy(s);
console.log(1);