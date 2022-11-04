// осталось только сделать текст серым при нажатии на клавишу операции
// и настроить rowspan rolspan в таблице

var num1;
var num2;
var op;

function addNum(num) {
    if ($('#input').val() == "0") 
        $('#input').val(num);
    else
        $('#input').val($('#input').val() + num);
}

function clearAll() {
    $('#input').val("0");
}

function chageSign() {
    if ($('#input').val() > 0)
        $('#input').val("-" + $('#input').val());
    else if ($('#input').val() < 0)
    $('#input').val(-Number($('#input').val()));
}

function addChar(ch) {
    op = ch;
    num1 = $('#input').val();
    //$('#input').val($('#input').val()).style.color = "gray";
    clearAll();
}

function equal() {
    num2 = $('#input').val();
    switch(op) {
        case "+":
            $('#input').val(Number(num1) + Number(num2));
            break;
        case "-":
            $('#input').val(num1 - num2);
            break;
        
        case "*":
            $('#input').val(num1 * num2);
            break;
            
        case "/":
            if(num2 == 0)
                $('#input').val("arythmetic error");
            else
                $('#input').val(num1 / num2);
            break;
    }
}