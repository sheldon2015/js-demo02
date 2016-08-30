function A(name) {
    this.name = name;
}


/**
 * 静态方法  showAge
 * 静态属性  age
 * 在实例中不能访问
 */


A.showAge = function() {
    alert(A.age);
}
A.age = '1111111111111';
var a1 = new A('xiaoming');
console.log(a1.name);
// console.log(a1.showAge());
console.log(a1.__proto__ === A.prototype); //true;
console.log(A.__proto__ === Function.prototype); //true;

console.log(a1.constructor);
console.log(A.prototype.constructor);