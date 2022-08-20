let display = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let displayValue='';

for(item of buttons){

    item.addEventListener('click',(e) => {

        buttonText = e.target.innerText;

        if(buttonText =='X'){
            buttonText = '*';

            displayValue += buttonText;
            display.value = displayValue;
        }
        else if(buttonText == 'C'){
            displayValue = ""; 
            display.value = displayValue;
        }
        else if(buttonText == '='){
            display.value = eval(displayValue);
        }
        else{
            displayValue += buttonText;
            display.value = displayValue;
        }
        
    })
}