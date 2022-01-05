/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  // 将字符串拆分为字符数组
  s = s.split("");
  // 记录数组原长度
  const oldLen = s.length;
  let spaceCount = 0;
  // 遍历记录空格数量
  for (let i = 0; i < oldLen; i++) {
    if (s[i] === " ") {
      spaceCount++;
    }
  }
  // 数组扩容
  s.length += spaceCount * 2;
  // 双指针从后往前遍历，一个指数组末尾，一个指字符串有效位的末尾，i===j时所有空格均已替换完毕
  for (let i = oldLen - 1, j = s.length - 1; i < j; i--, j--) {
    if (s[i] !== " ") {
      s[j] = s[i];
    } else {
      s[j - 2] = "%";
      s[j - 1] = "2";
      s[j] = "0";
      j -= 2;
    }
  }
  // 将修改过的字符数组合并为字符串返回
  return s.join("");
};
