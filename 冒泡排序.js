//每个元素遍历比较，如果比后一位大，移动到后面
//每次比较，找出当前最大的元素放置后面，遍历长度-1
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr;
}