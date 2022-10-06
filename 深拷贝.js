//由于引用类型赋值只会复制栈空间的引用地址，内容一旦修改会影响其它变量，故而要实现深拷贝，将引用关系分离
const obj1 = { name: 'a' };

const obj2 = structuredClone(obj1);

obj2.name = 'b';
console.log(obj1.name);// a
console.log(obj2.name);// b