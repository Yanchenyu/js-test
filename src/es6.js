// es6的class语法

class Foo {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log('name: ' + this.name);
    }
}

class Bar extends Foo {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    sayAge() {
        console.log('age: ' + this.age);
    }
}

export default Bar
