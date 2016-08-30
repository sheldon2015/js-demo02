function A(name) {
    this.name = name;
}
A.prototype.showClass = function () {
    return "ClassA";
}
var a = new A('a');
console.log(a.name);
console.log(a.showClass());
console.log(a.constructor);
console.log(A.prototype.constructor);
function B(name) {
    this.name = name;
}
B.prototype = new A('a');
B.prototype.showClass = function () {
    return "ClassB"
}
var b = new B('b');
console.log(b.name);
console.log(b.showClass());
console.log(b.__proto__);
console.log(b.__proto__ === B.prototype);
console.log('--------------------------------------------------');
console.log(B.prototype.constructor);
console.log(b.constructor);
console.log('--------------------------------------------------');
function Person(name) {

    this.name = name;
}

Person.prototype = {
    getName: function () {
        return this.name;
    }
}
function Employee(name, employeeID) {
    this.name = name;
    this.employeeID = employeeID;
}
Employee.prototype = new Person('mm');
Employee.prototype.getEmployeeID = function () {
    return this.employeeID;
};
var zhang = new Employee("ZhangSan", "1234");
console.log(Employee.prototype.constructor);
console.log(zhang.constructor);



