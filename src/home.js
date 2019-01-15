// 面向委托的编程模式

var Foo = {
    init(name) {
        this.name = name
    },
    sayName() {
        console.log('name: ' + this.name);
    }
}

var Bar = Object.create(Foo);

Bar.inits = function(name, age) {
    Foo.init.call(this, name);
    this.age = age;
}

Bar.sayAge = function() {
    console.log('age: ' + this.age);
}

export default Bar
