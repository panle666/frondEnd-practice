// 实现一个方法，用于比较两个版本号（version1、version2）
// 如果version1 > version2，返回1；
// 如果version1 < version2，返回-1，
// 其他情况返回0
// 版本号规则x.y.z，xyz均为大于等于0的整数，至少有x位

// 示例：
// compareVersion(‘0.1’, ‘1.1.1’); // 返回-1
// compareVersion('13.37', '1.2'); // 返回1
// compareVersion('1.1', '1.1.0'); // 返回0

function compareVersion(version1, version2) {
    let arr1 = version1.split(".");
    let arr2 = version2.split(".");
    let length = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < length; i++) {
        const n1 = Number(arr1[i] || 0);
        const n2 = Number(arr2[i] || 0);
        if (n1 > n2) {
            return 1;
        }
        if (n1 < n2) {
            return -1;
        }
    }
    return 0;
}