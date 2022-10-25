function A() {
    this.nickName = 'a';
}

function B() {

}

B.prototype = new A();

const b = new B();
console.log(b.nickName);