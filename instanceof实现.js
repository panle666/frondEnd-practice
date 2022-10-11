function myInstanceof(left, right) {
	while (true) {
		if (left === null) {
			return false;
		}
		if (left.__proto__ === right.prototype) {
			return true;
		}
		left = left.__proto__;
	}
}

function A() {

}

const a = new A();

console.log(myInstanceof(a, A));


