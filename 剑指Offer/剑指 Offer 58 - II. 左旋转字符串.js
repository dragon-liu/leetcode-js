/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  // 定义reverse函数用于反转字符串指定区间部分
  // left,right为对应字符数组索引
  const reverse = (str, left, right) => {
    const strArr = str.split("");
    for (; left < right; left++, right--) {
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    }
    return strArr.join("");
  };
  // 反转区间为前n的子串
  s = reverse(s, 0, n - 1);
  // 反转区间为n到末尾的子串
  s = reverse(s, n, s.length - 1);
  // 反转整个字符串
  return reverse(s, 0, s.length - 1);
};
