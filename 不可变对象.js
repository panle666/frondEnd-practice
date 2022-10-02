function freezeObj(obj) {
    if (typeof obj != 'object') {
        throw Error('Type Error!')
    }
    Object.freeze(obj);
    Object.keys(obj).forEach((value, index) => {
        if (typeof value == 'object') {
            freezeObj(value);
        }
    })
}