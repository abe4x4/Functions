/*
Write a JS function that takes two numbers and a string as an input.
The string may be one of the following: '+', '-', '*', '/', '%', '**'.
Print on the console the result of the mathematical operation between both numbers and the operator
you receive as a string.
The input comes as two numbers and a string argument passed to your function.
The output should be printed on the console. 
*/
function main(num1, num2, operator){
    mathOperationsSwitchCase(num1, num2, operator);
}
function mathOperationsSwitchCase(num1, num2, operator){
    let output = 0;

    switch (operator){
        case ('+'): output = num1 + num2; break;
        case ('-'): output = num1 - num2; break;
        case ('*'): output = num1 * num2; break;
        case ('/'): output = num1 / num2; break;
        case ('%'): output = num1 % num2; break;
        case ('**'): output = num1 ** num2; break;
        default:console.log('Error');
    }
    console.log(output);

}
main(5, 6, '**');