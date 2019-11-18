/**
 * 改行をカンマ区切りに変換する
 * @param {string} input 入力された文字列
 * @returns {string} カンマ区切りに変換された文字列
 */
function conversion(input) {
  //半角スペースがある場合とない場合に対応
  var converted = "";
  if (input.match(/\n/g) != null) {
    converted = input.replace(/\n/g, ",");
  }
  if (input.match(/\s\n/g) != null) {
    converted = input.replace(/\s\n/g, ",");
  }

  if (converted.slice(-1) === ",") {
    converted = converted.slice(0, -1);
  }
  return converted;
}
