window.addEventListener('load', (event) =>{
console.log(event);
var screenStorage = [];
var operator;
var element = document.getElementsByClassName("button")
console.log(element);
function clickNumber(event){
let display = document.getElementsByClassName("screen")
element.foreach()
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
}