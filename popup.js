$(function() {
    //Goボタンクリックイベント
    $('#exec').click(function() {
       var input_data = $('#input').val(); 
       conversion(input_data)
    });

    //Enterでボタン動作
    $('#input').keypress(function(event) {
        var keycode_enter = 13
        if(event.which === keycode_enter){
            if($(this).val().match(/\S\g/)){
                return false;
            }else{
                $('#exec').click();  
            }
        }
    });
    $('#input').focus();
});