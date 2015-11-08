function getInputValues(){
    var number1 = document.getElementById('number1');
    var number2 = document.getElementById('number2');
    return {
        number1: parseInt(number1.value),
        number2: parseInt(number2.value)
    };

}

var sum = function(){
    var inputValues = getInputValues();
    var result = document.getElementById('result');
    result.innerHTML = inputValues.number1 + inputValues.number2;
};

var subtract = function(){
    var inputValues = getInputValues();
    var result = document.getElementById('result');
    result.innerHTML = inputValues.number1 - inputValues.number2;
};

var multiply = function(){
    var inputValues = getInputValues();
    var result = document.getElementById('result');
    result.innerHTML = inputValues.number1 * inputValues.number2;
};

var divide = function(){
    var inputValues = getInputValues();
    var result = document.getElementById('result');
    result.innerHTML = inputValues.number1 / inputValues.number2;
};






