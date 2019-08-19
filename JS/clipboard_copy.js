/**
 * テキストエリアの文章をクリップボードにコピーする
 */
function exec_copy() {
  var clipboard = new ClipboardJS(".btn");

  clipboard.on("success", function(e) {
    alert("クリップボードにコピーしました!");
  });
}
