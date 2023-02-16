// end of VOD notes
// todo/change
// can input multiple decimals on a number or in a row
// can insert a 'x' and '/' at the beginning of an expression

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
            calculator.parseInput(value)
            //pass value to parse method
            //console.log(`thing is ${event}`)
            //console.log(event)//target to value will be button value
        }
    })


    const calculator = {
        displayText: '0',
        prevTotal: null,

        parseInput(value) {
            
            //have any of the 'non-numeric' buttons been clicked?
            switch(value) {
                case '=' : 
                // calculate answer
                this.calcAnswer(this.displayText);
                break;
                case 'AC' : 
                //clear screen and stored values
                this.clearAll();
                break;
                case '.' :
                if(this.displayText === 0) {
                    //pass '0.something' into add text method
                    this.addText('0.');
                } else {
                    //add value to text string
                    this.addText(value);
                }
                break;
                default : 
                //add value to text string
                this.addText(value);
                break;
            }            
        },

        addText(value) {
            if(this.displayText === '0') {
                this.displayText = ''
            } else if (this.prevTotal !== null){
                this.displayText = this.prevTotal
                this.prevTotal = null
            }
            //rewrite this can - use multiple decimals  

            if (isNaN(+(value)) && isNaN(this.displayText)/*check whether the last char in display AND the entered value are not numbers*/){
                if(isNaN(this.displayText.slice(-1)) || isNaN(this.displayText.slice(1))){
                    //if end of string is anything other than a number stop
                    return;
                }

            }  
            this.displayText += value
            //  output display text to screen 
            this.outputText(this.displayText) 
        },

        outputText (text) {
            document.querySelector('.calculator-screen').value = text 
            //fills in form
        },
        calcAnswer(equation){
            // pass display text into this function then evaluate expression
            //console.log(eval(equation)) // bad practice/see mdn eval()

            let result = Function("return " + equation)();
            this.outputText(result)
            


        },

        clearAll(){
            this.displayText  = '0',
            this.prevTotal = null,
            this.outputText(this.displayText)
            console.log('Hello world')
        }

    }