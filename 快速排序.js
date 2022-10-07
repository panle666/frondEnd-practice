//选一个中心节点，遍历数组，比中心节点小的放左边，大的放右边，再左右数组递归
const quickSort = function (arr) {
    if (!arr || arr.length <= 1) {
        return arr;
    }
    const centerIndex = Math.floor(arr.length / 2);
    const left = [];
    const right = [];
    const centerValue = arr.splice(centerIndex, 1)[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < centerValue) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([centerValue], quickSort(right));
}