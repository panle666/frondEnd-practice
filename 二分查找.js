//适用已排好序的数组
//每次查找取数组中间值判断大小，大则将end坐标设置为当前中间值-1，小则将start坐标设置为当前中间值+1，按此逻辑递归，查找到相等的target为止
function getIndex(arr, target, start, end) {
    start = start || 0;
    end = end || arr.length - 1;
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > target) {
        end = mid - 1;
        return getIndex(arr, target, start, end);
    }
    else if (arr[mid] < target) {
        start = mid + 1;
        return getIndex(arr, target, start, end);
    }
    else {
        return mid;
    }
}
let arr = [0, 1, 2, 3, 4, 5, 6, 88, 99, 105, 106, 587, 685, 999];
console.log(getIndex(arr, 88));