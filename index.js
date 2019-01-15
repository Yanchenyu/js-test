import Bar1 from './src/class'
import Bar2 from './src/home'
import Bar3 from './src/es6'

//=======================
// 面向类编程

var bar1 = new Bar1('bar1', 13);

bar1.sayName();
bar1.sayAge();

//=======================
// 面向委托编程

var bar2 = Object.create(Bar2);

bar2.inits('bar2', 14);

bar2.sayName();
bar2.sayAge();

//=======================
// 面向es6 class编程

var bar3 = new Bar3('bar3', 15);

bar3.sayName();
bar3.sayAge();
