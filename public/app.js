var firstValue;
var operation;
var secondValue;
var input = document.getElementById('main-input');

var memorizedValue = function(localOperation){
    firstValue = +input.value;
    operation = localOperation;
    input.value = '';
    input.focus();

};

var memorizedValue2 = function(){
    secondValue = +input.value;
};

var getResult = function () {
    memorizedValue2();
    
    if(operation == '+'){
        result = firstValue + secondValue;
    } else if(operation == '-'){
        result = firstValue - secondValue;
    } else if(operation == '%'){
        result = firstValue % secondValue;
    }else if(operation == '*'){
        result = firstValue * secondValue;
    }else if (operation == '/'){
        result = firstValue / secondValue;
    } else {
        result = Math.pow(firstValue,secondValue);
    };

    input.value = result;

};





