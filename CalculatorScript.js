/*window.addEventListener('load', (event) =>{
console.log(event);

var operator;
var elements = document.getElementsByClassName("button")
console.log(elements);
function clickNumber(event){
let display = document.getElementsByClassName("screen")
elements.foreach()
console.log(number);
switch(number){
    case '#1' :
        display.append("1")
    break;
    case '#2' :
        display.append("1")
    break;
    case '#3' :
        display.append("1")
    break;
    case '#4' :
        display.append("1")
    break;
    case '#5' :
        display.append("1")
    break;
    case '#6' :
        display.append("1")
    break;
    case '#7' :
        display.append("1")
    break;
    case '#8' :
        display.append("1")
    break;
    case '#9' :
        display.append("1")
    break;
    case '#0' :
        display.append("1")
    break;
    default:
        console.log("No button was clicked.")
    break;    
    
}
};
function operators(event){
    if(document.getElementById("multiply") == clicked || document.getElementById("divide") == clicked || document.getElementById("minus") == clicked || document.getElementById("plus") == clicked){
        operator = document.getAttribute('clicked');
        display.innerHTML = "";
    }
}
screenStorage[0] = display;
document.addEventListener("click",clickNumber);
});


 

function results(){
    let result = 0;
    switch(operator){
        case 'plus' :
            result = screenStorage[0] + screenStorage[1]
        break;
        case 'minus' :
            result = screenStorage[0] + screenStorage[1]
        break;
        case 'multiply' :
            result = screenStorage[0] * screenStorage[1]
        break;
        case 'divide' :
            result = screenStorage[0] / screenStorage[1]
        break;
        default:
            console.log('no operator was selected')
        break;            
    }
}*/
//use this
function addGlobalEventListener(type, selector, callback){
     document.addEventListener(type, e => {
        if (e.target.matches(selector)){
            callback(e)
          }
        })
   }

   addGlobalEventListener("click","div.button", e =>{
    var screenStorage = [];
    let display = document.getElementById("screen")
    console.log(display)
    let btnClicked = (e.target.id);
    switch(btnClicked){
        case '1' :
            display.append("1")
        break;
        case '2' :
            display.append("2")
        break;
        case '3' :
            display.append("3")
        break;
        case '4' :
            display.append("4")
        break;
        case '5' :
            display.append("5")
        break;
        case '6' :
            display.append("6")
        break;
        case '7' :
            display.append("7")
        break;
        case '8' :
            display.append("8")
        break;
        case '9' :
            display.append("9")
        break;
        case '0' :
            display.append("0")
        break;
        case 'plus':
            var operator = btnClicked;
            screenStorage[0] = Number(display);
            display.innerHTML = "";
        break;
        case 'equals' :
            console.log(operator)
            if(operator == 'plus'){
                screenStorage[1] = screenStorage[0] + display;
                display = screenStorage[1];
            }
            else if(operator == 'minus'){
                screenStorage[1] = screenStorage[0] - display;
                display = screenStorage[1];
            }
            else if(operator == 'multiply'){
                screenStorage[1] = screenStorage[0] * display;
                display = screenStorage[1];
            }
            else if(operator == 'divide'){
                screenStorage[1] = screenStorage[0] / display;
                display = screenStorage[1];
            }
        default:
            console.log("No button was clicked.")
        break;  
    }
   })