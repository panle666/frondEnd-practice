//只识别queryParam，排除 hash 的干扰
function getParamFromURL(url, key) {
    const execStr = new RegExp(`/\?${key}=(.+)\#/`);
    const result = execStr.exec(url);
    if (!result) {
        return '';
    }
    return result[1][0];
}