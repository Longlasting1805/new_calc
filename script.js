let calculatorState = false;

function addToScreen(value){
    if(value === '='){
        evaluate()
    }
    else{
  // display value on calculator screen 
        const screen = document.getElementById("screen")
        if (!calculatorState){
            screen.innerText = "";
            calculatorState = true
        }
        let existingScreenInfo = screen.innerText;
        existingScreenInfo += value
        screen.innerText = existingScreenInfo


    }
  
}
function evaluate(){
    const screen = document.getElementById("screen")
    const ans = eval(screen.innerText)
    screen.innerText = ans;
    calculatorState = false;
    

}