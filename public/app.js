function getInputValues(){
    var number1 = document.getElementById('number1');
    var number2 = document.getElementById('number2');
    return {
        number1: parseInt(number1.value),
        number2: parseInt(number2.value)
    };
}

var performActionsWithNumbers = function(number1, operator, number2){
    var result;

    if(operator == '+'){
        result = number1 + number2;
    } else if(operator == '-'){
        result = number1 - number2;
    } else if(operator == '%'){
        result = number1 % number2;
    }else if(operator == '*'){
        result = number1 * number2;
    }else{
        result = number1 / number2;
    }
    return result;
};

var calc = function (operator) {
    var inputValues = getInputValues();
    var result = document.getElementById('result');
    result.innerHTML = performActionsWithNumbers(inputValues.number1, operator, inputValues.number2);
};







