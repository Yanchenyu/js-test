// 面向类的编程模式

function Foo(name) {
    this.name = name;
}

Foo.prototype.sayName = function() {
    console.log('name: ' + this.name)
}

function Bar(name, age) {
    Foo.call(this, name);
    this.age = age;
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.sayAge = function() {
    console.log('age: ' + this.age)
}

export default Bar
