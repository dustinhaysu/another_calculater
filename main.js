// Required abilities of a calculator
//store inputs
// should accept decimal operations
// accept user inputs of number, operator, and another number
//recognize inputs and perform calculations
//return a result

//optional features:
//Should accept longer arithmetic operations. 
//display all input as it is being entered
//store previous total as start of next operation. 
// clear button should clear all entries
//should prevent invalid inputs (operators next to each other, two decimal points, two beginning zeros)

const keys = document.querySelector('.calculator-buttons');
//object destructuring
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')) {
            return;
        } else {
            //pass value to parse method
            console.log(`thing is ${event}`)
        }
    })