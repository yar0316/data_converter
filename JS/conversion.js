/**
 * 改行をカンマ区切りに変換する
 * @param {String} input 入力された文字列
 */
function conversion(input) {
  console.log(input.match(/\s\n/));
  console.log(input.match(/\n/));
  //半角スペースがある場合とない場合に対応
  if (input.match(/\s\n/g) != null) {
    return input.replace(/\s\n/g, ",").slice(0, -1);
  } else if (input.match(/\n/g) != null) {
    return input.replace(/\n/g, ",").slice(0, -1);
  }
}
