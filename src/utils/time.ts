/**
 * 提供通用的时间转换工具
 * 以下为例子，可删除
 */

/** 秒转换为毫秒 */
export function secondToMillisecond(second: number) {
  return second * 1000;
}

/** 毫秒转换为秒, 默认保留2位小数 */
export function millisecondToSecond(millisecond: number, decimal = 2) {
  return (millisecond / 1000).toFixed(decimal);
}
