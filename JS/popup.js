$(function() {
  var c_flag = true;

  //Goボタンクリックイベント
  $("#exec").click(function() {
    var input_data = $("#input").val();
    const output_data = conversion(input_data);
    const textarea = document.getElementById("input");
    textarea.value = output_data;
  });

  //copyボタンクリックイベント
  $("#copy").click(function() {
    exec_copy();
  });

  //Ctrl+Enterショートカット(変換実行)
  shortcut.add("ctrl+enter", function() {
    $("#exec").click();
  });
  //Ctrl
  shortcut.add("ctrl+c", function() {
    $("#copy").click();
  });

  $("#input").focus();
});
