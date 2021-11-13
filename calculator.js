counter = 0;
operator = false;
inputNum = false;
dot = true;
numStr= [''];
equation = '';

function onButtonclick(click_val){
    switch(click_val){
        case '=':
            if(inputNum == true){
                equation = document.getElementById('cal_display').textContent;
                result = eval(equation);
                document.getElementById('main_display').innerHTML = result;
            }
        break;
        case 'CE':
            document.getElementById('cal_display').innerHTML = document.getElementById('main_display').textContent;
            document.getElementById('main_display').innerHTML = '';
            counter = 0;
            numStr = [''];
            numStr[counter] = document.getElementById('cal_display').textContent;
            console.log(numStr[counter])
            counter++;
        break;
        case 'C':
           document.getElementById('main_display').innerHTML = '',document.getElementById('cal_display').innerHTML = '';
           counter = 0;
           operator = false;
           inputNum = false;
           dot = true;
           numStr= [''];
           equation = '';
        break;
        case 'Del':
            numStr[counter--] ='';
            document.getElementById('cal_display').innerHTML = '';        
                    for(i = 0; i < counter; i++){
                           document.getElementById('cal_display').innerHTML += numStr[i];
                    }
                  
        break;
        
        case '.':
                if(dot == true){
                    document.getElementById('cal_display').innerHTML += click_val;
                    dot = false;
                }
        break;

        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
                if(operator == true){
                     document.getElementById('cal_display').innerHTML += click_val;
                     numStr[counter] = click_val;
                     operator = false;
                     inputNum = false;
                     dot = true;
                     counter++;
                     console.log(numStr);
                }
                else{
                    numStr[counter-1] = click_val;
                    document.getElementById('cal_display').innerHTML = '';
                    for(i = 0; i < counter; i++){
                       document.getElementById('cal_display').innerHTML += numStr[i];
                    }      
                    
                }

        break;

        default:
            document.getElementById('cal_display').innerHTML += click_val;
            numStr[counter] = click_val;
            counter++;
            inputNum = true;
            operator = true;
        break;
    }
}
