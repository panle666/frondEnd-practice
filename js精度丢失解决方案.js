//相加
function plus(num1, num2) {
    let r1, r2, m;
    try {
        r1 = num1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = num2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (num1 * m + num2 * m) / m
}

//相减
function subtract(num1, num2) {
    let r1, r2, m, n;
    try {
        r1 = num1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = num2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return ((num1 * m - num2 * m) / m).toFixed(n);
}

//相乘
function multiply(num1, num2) {
    let m = 0,
        s1 = num1.toString(),
        s2 = num2.toString();
    try {
        m += s1.split(".")[1].length
    } catch (e) { }
    try {
        m += s2.split(".")[1].length
    } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

//相除
function divide(num1, num2) {
    let t1 = 0,
        t2 = 0,
        r1, r2;
    try {
        t1 = num1.toString().split(".")[1].length
    } catch (e) { }
    try {
        t2 = num2.toString().split(".")[1].length
    } catch (e) { }
    with (Math) {
        r1 = Number(num1.toString().replace(".", ""))
        r2 = Number(num2.toString().replace(".", ""))
        return multiply((r1 / r2), pow(10, t2 - t1));// multiply乘法配合一起使用
    }
}