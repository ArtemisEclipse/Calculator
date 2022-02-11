//global variables to store calculator related values
var operator;
var screenStorage = [];
var prevOperator;
//event listener for all click functionality
function addGlobalEventListener(type, selector, callback){
     document.addEventListener(type, e => {
        if (e.target.matches(selector)){
            callback(e)
          }
        })
   }
//event listener for all click functionality
   addGlobalEventListener("click","div.button", e =>{
    let numberDisplay = document.getElementById("lowerRightScreen");
    let negativeDisplay = document.getElementById("lowerLeftScreen");
    let upperDisplay = document.getElementById("upperScreen");
    let btnClicked = (e.target.id);
//causes a clicking effect when clicking on a button
    function changeStyle(){
        var button = document.getElementsByClassName("button").namedItem(btnClicked)
        button.setAttribute("class","btnClicked")
        setTimeout(() => {
            button.setAttribute("class","button") 
        }, 100) 
    }
    changeStyle(btnClicked);
    console.log(numberDisplay)
//checks for the button clicked and appends correct number to the screen    
    switch(btnClicked){
        case '1' :
            numberDisplay.append("1")
        break;
        case '2' :
            numberDisplay.append("2")
        break;
        case '3' :
            numberDisplay.append("3")
        break;
        case '4' :
            numberDisplay.append("4")
        break;
        case '5' :
            numberDisplay.append("5")
        break;
        case '6' :
            numberDisplay.append("6")
        break;
        case '7' :
            numberDisplay.append("7")
        break;
        case '8' :
            numberDisplay.append("8")
        break;
        case '9' :
            numberDisplay.append("9")
        break;
        case 'btn0' :
            numberDisplay.append("0")
        break;
//checks for decimal and negative sign
        case 'positive/negative' :
            if(negativeDisplay.innerHTML.includes("-") == true){
                negativeDisplay.innerHTML = '';
            }
            else{
               negativeDisplay.append("-");
            }   
       break;
       case 'decimal' :
           if(numberDisplay.innerHTML.includes(".") == false){
               numberDisplay.append(".");
           }
           else{
               console.log("There is already a decimal");
           }
        break;
//divides by 100 always        
        case 'percent' :
            screenStorage[0] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
            screenStorage[1] = screenStorage[0] / 100;
            numberDisplay.innerHTML = screenStorage[1].toString();
            upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(screenStorage[0].toString());
        break;
//operators for the equals button and stores number on screen for use        
        case 'plus':
            operator = btnClicked;
            upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " + ");
            screenStorage[0] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
            console.log(screenStorage[0]);
            numberDisplay.innerHTML = "";
        break;
        case 'minus':
            operator = btnClicked;
            upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " - ");
            screenStorage[0] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
            numberDisplay.innerHTML = "";
        break;
        case 'multiply':
            operator = btnClicked;
            upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " * ");
            screenStorage[0] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
            numberDisplay.innerHTML = "";
        break;
        case 'divide':
            operator = btnClicked;
            upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " / ");
            screenStorage[0] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
            numberDisplay.innerHTML = "";
        break;
//does bulk of all calculations
//checks for operator through global variable and does correlating calculation        
        case 'equals' :
            if(operator == 'plus'){
                screenStorage[1] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
                screenStorage[2] = screenStorage[0] + screenStorage[1];
                numberDisplay.innerHTML = screenStorage[2].toString();
                screenStorage[0] = screenStorage[2];
                upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " + ", screenStorage[1].toString());
                prevOperator = operator;
                operator = btnClicked;
            }
            else if(operator == 'minus'){
                screenStorage[1] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
                screenStorage[2] = screenStorage[0] - screenStorage[1];
                numberDisplay.innerHTML = screenStorage[2].toString();
                screenStorage[0] = screenStorage[2];
                upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " - ", screenStorage[1].toString());
                prevOperator = operator;
                operator = btnClicked;
            }
            else if(operator == 'multiply'){
                screenStorage[1] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
                screenStorage[2] = screenStorage[0] * screenStorage[1];
                numberDisplay.innerHTML = screenStorage[2].toString();
                screenStorage[0] = screenStorage[2];
                upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " * ", screenStorage[1].toString());
                prevOperator = operator;
                operator = btnClicked;
            }
            else if(operator == 'divide'){
                screenStorage[1] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
                screenStorage[2] = screenStorage[0] / screenStorage[1];
                numberDisplay.innerHTML = screenStorage[2].toString();
                screenStorage[0] = screenStorage[2];
                upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " / ", screenStorage[1].toString());
                prevOperator = operator;
                operator = btnClicked;
            }
//allows consecutive equals clicks to do the same calculation
//has access to correct operator through another global variable that stores the prior operator to the eqauls click            
            else if(operator == 'equals'){
                if(prevOperator == 'plus'){
                    upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " + ", screenStorage[1].toString());
                    screenStorage[2] = screenStorage[0] + screenStorage[1];
                    numberDisplay.innerHTML = screenStorage[2].toString();
                    screenStorage[0] = screenStorage[2];
                }
                else if(prevOperator == 'minus'){
                    upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " - ", screenStorage[1].toString());
                    screenStorage[2] = screenStorage[0] - screenStorage[1];
                    numberDisplay.innerHTML = screenStorage[2].toString();
                    screenStorage[0] = screenStorage[2];
                }
                else if(prevOperator == 'multiply'){
                    upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " * ", screenStorage[1].toString());
                    screenStorage[2] = screenStorage[0] * screenStorage[1];
                    numberDisplay.innerHTML = screenStorage[2].toString();
                    screenStorage[0] = screenStorage[2]; 
                }
                else if(prevOperator == 'divide'){
                    upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " / ", screenStorage[1].toString());
                    screenStorage[2] = screenStorage[0] / screenStorage[1];
                    numberDisplay.innerHTML = screenStorage[2].toString();
                    screenStorage[0] = screenStorage[2];  
                }
                else{

                }
            }
            else{
                screenStorage[0] = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML);
                upperDisplay.innerHTML = screenStorage[0];
                numberDisplay = screenStorage[0];
            }
        break;
//clears the screen if it has a value
//clears all storage if no value on screen        
        case 'clear' :
            if(numberDisplay.innerHTML > ''){
                numberDisplay.innerHTML = ''
            }
            else if(numberDisplay.innerHTML == ''){
                screenStorage[0] = 0;
                screenStorage[1] = 0;
                screenStorage[2] = 0;
                upperDisplay.innerHTML = '';
                negativeDisplay.innerHTML = '';
            }
        break;
        default:
            console.log("No button was clicked.")
        break;  
    }
   })
//event listener for keyboard input
document.addEventListener("keyup", buttonPressed)

function buttonPressed(e){
    keyPress = e.code;
    let numberDisplay = document.getElementById("lowerRightScreen");
    let upperDisplay = document.getElementById("upperScreen");
    let negativeDisplay = document.getElementById("lowerLeftScreen");
    console.log(keyPress);
    console.log(numberDisplay);
    switch(keyPress){
        //Number pad Keys
        case 'Numpad1' :
            numberDisplay.append("1")
        break;
        case 'Numpad2' :
            numberDisplay.append("2")
        break;
        case 'Numpad3' :
            numberDisplay.append("3")
        break;
        case 'Numpad4' :
            numberDisplay.append("4")
        break;
        case 'Numpad5' :
            numberDisplay.append("5")
        break;
        case 'Numpad6' :
            numberDisplay.append("6")
        break;
        case 'Numpad7' :
            numberDisplay.append("7")
        break;
        case 'Numpad8' :
            numberDisplay.append("8")
        break;
        case 'Numpad9' :
            numberDisplay.append("9")
        break;
        case 'Numpad0' :
            numberDisplay.append("0")
        break;
        case 'NumpadDecimal' :
            if(numberDisplay.innerHTML.includes(".") == false){
                numberDisplay.append(".");
            }
            else{
                console.log("There is already a decimal");
            }
        break;
        //The other number keys
        case 'Digit1' :
            numberDisplay.append("1")
        break;
        case 'Digit2' :
            numberDisplay.append("2")
        break;
        case 'Digit3' :
            numberDisplay.append("3")
        break;
        case 'Digit4' :
            numberDisplay.append("4")
        break;
        case 'Digit5' :
            numberDisplay.append("5")
        break;
        case 'Digit6' :
            numberDisplay.append("6")
        break;
        case 'Digit7' :
            numberDisplay.append("7")
        break;
        case 'Digit8' :
            numberDisplay.append("8")
        break;
        case 'Digit9' :
            numberDisplay.append("9")
        break;
        case 'Digit0' :
            numberDisplay.append("0")
        break;  
        case 'Period' :
            if(numberDisplay.innerHTML.includes(".") == false){
                numberDisplay.append(".");
            }
            else{
                console.log("There is already a decimal");
            }
        break;
        case 'NumpadAdd':
            operator = keyPress;
            upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " + ");
            screenStorage[0] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
            numberDisplay.innerHTML = "";
        break;
        case 'NumpadSubtract':
            operator = keyPress;
            console.log(operator);
            upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " - ");
            screenStorage[0] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
            numberDisplay.innerHTML = "";
        break;
        case 'NumpadMultiply':
            operator = keyPress;
            upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " * ");
            screenStorage[0] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
            numberDisplay.innerHTML = "";
        break;
        case 'NumpadDivide':
            operator = keyPress;
            upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " / ");
            screenStorage[0] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
            numberDisplay.innerHTML = "";
        break;
        case 'Equal' :
            if(operator == 'NumpadAdd'){
                screenStorage[1] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
                screenStorage[2] = screenStorage[0] + screenStorage[1];
                numberDisplay.innerHTML = screenStorage[2].toString();
                screenStorage[0] = screenStorage[2];
                upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " + ", screenStorage[1].toString());
                prevOperator = operator;
                operator = keyPress;
            }
            else if(operator == 'NumpadSubtract'){
                screenStorage[1] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
                screenStorage[2] = screenStorage[0] - screenStorage[1];
                numberDisplay.innerHTML = screenStorage[2].toString();
                screenStorage[0] = screenStorage[2];
                upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " - ", screenStorage[1].toString());
                prevOperator = operator;
                operator = keyPress;
            }
            else if(operator == 'NumpadMultiply'){
                screenStorage[1] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
                screenStorage[2] = screenStorage[0] * screenStorage[1];
                numberDisplay.innerHTML = screenStorage[2].toString();
                screenStorage[0] = screenStorage[2];
                upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " * ", screenStorage[1].toString());
                prevOperator = operator;
                operator = keyPress;
            }
            else if(operator == 'NumpadDivide'){
                screenStorage[1] = Number(negativeDisplay.innerHTML.concat(numberDisplay.innerHTML));
                screenStorage[2] = screenStorage[0] / screenStorage[1];
                numberDisplay.innerHTML = screenStorage[2].toString();
                screenStorage[0] = screenStorage[2];
                upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " / ", screenStorage[1].toString());
                prevOperator = operator;
                operator = keyPress;
            }
            else if(operator == 'Equal'){
                if(prevOperator == 'NumpadAdd'){
                    upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " + ", screenStorage[1].toString());
                    screenStorage[2] = screenStorage[0] + screenStorage[1];
                    numberDisplay.innerHTML = screenStorage[2].toString();
                    screenStorage[0] = screenStorage[2];
                }
                else if(prevOperator == 'NumpadSubtract'){
                    upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " - ", screenStorage[1].toString());
                    screenStorage[2] = screenStorage[0] - screenStorage[1];
                    numberDisplay.innerHTML = screenStorage[2].toString();
                    screenStorage[0] = screenStorage[2];
                }
                else if(prevOperator == 'NumpadMultiply'){
                    upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " * ", screenStorage[1].toString());
                    screenStorage[2] = screenStorage[0] * screenStorage[1];
                    numberDisplay.innerHTML = screenStorage[2].toString();
                    screenStorage[0] = screenStorage[2]; 
                }
                else if(prevOperator == 'NumpadDivide'){
                    upperDisplay.innerHTML = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML, " / ", screenStorage[1].toString());
                    screenStorage[2] = screenStorage[0] / screenStorage[1];
                    numberDisplay.innerHTML = screenStorage[2].toString();
                    screenStorage[0] = screenStorage[2];  
                }
            }
            else{
                screenStorage[0] = negativeDisplay.innerHTML.concat(numberDisplay.innerHTML);
                upperDisplay.innerHTML = screenStorage[0];
                numberDisplay = screenStorage[0];
            }
        break;
    }
}