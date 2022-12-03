// осталось только сделать текст серым при нажатии на клавишу операции

var num1;
var num2;
var op;

function addNum(num) {
    if ($('#input').val() == "0" || $('#input').val() == "Invalid input") 
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
    num1 = $('#input').val();
    if(isNaN(num1)){
        $('#input').val("Invalid input");
        console.log("Invalid input");
        return;
    }
    op = ch;
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