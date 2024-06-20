let num1='';
let num2='';
let operator='';
let lastAns='0';

let opFlag= false;


//update the display when a number button is clicked 
document.querySelectorAll('.num').forEach((element) => {
  element.addEventListener('click', () => {
    let displayValue = document.querySelector('.display').textContent;
    if(displayValue.length <16 ){
      if((displayValue !== '0' && num1 !== '' )|| element.textContent === '.'){
        document.querySelector('.display').textContent += element.textContent;
        
        //update the number variables
        if(opFlag == false){
          num1 += element.textContent;
        }
        else{
          num2 += element.textContent;
        }
        
      }
      else{
        document.querySelector('.display').textContent = element.textContent;
        num1 = element.textContent;
      } 
    }
    
  });
});



document.querySelector('.delete').addEventListener('click', () => {
  let displayValue = document.querySelector('.display').textContent;
  
  //if only one digit and user deletes --> display 0
  if(displayValue.length === 1){
    document.querySelector('.display').textContent = 0;
  }


  else{
    //checks if deleted digit is an operator, if yes set opFlag to false and operator to nothing
    if(isOperator(displayValue.charAt(displayValue.length-1)) === true ){
      opFlag = false;
      operator='';
    }

    //set display to new display value after last value has been deleted 
    displayValue = displayValue.substring(0,displayValue.length-1);
    document.querySelector('.display').textContent = displayValue;
  
    //update the number variables
    if(opFlag == false){
      num1 = displayValue;
    }
    else{
      num2 = num2.substring(0,num2.length-1);
    }

   
  }
  
});



//check if a character is an operator 
function isOperator (c) {
  if(c === '/' || c === 'x' || c === '+' || c === '-'){
    return true;
  }
  else{
    return false;
  }
}


//add event listener for clear button
document.querySelector('.clear').addEventListener('click', () => {
  document.querySelector('.display').textContent =0;

  num1='';
  num2='';
  operator='';
  opFlag= false;
});


//add event listener on operator buttons 
document.querySelectorAll('.operator').forEach((element) => {
  element.addEventListener('click', () => {

    if(opFlag === false){
      if(num1===''){
        num1=lastAns;
      }
      operator = element.textContent;
      document.querySelector('.display').textContent+= operator;
      opFlag=true;
      
    }
    else{
      const results = Math.round(calculate()*100000000000000)/100000000000000;
      lastAns= results;
      document.querySelector('.display').textContent=results;
      num1=results;
      num2='';
      operator = element.textContent;
      document.querySelector('.display').textContent = num1+operator;
    }
    
    
  });
});

//add event listener onto equal button
document.querySelector('.evaluate').addEventListener('click', () => {

  if(num1 !== '' && num2 !=='' && operator !== ''){
    const results = Math.round(calculate()*100000000000000)/100000000000000;
    lastAns= results;
    document.querySelector('.display').textContent=results;
    num1='';
    num2='';
    operator='';
    opFlag=false;
  }
  
});

function calculate (){
  const n1 = Number(num1);
  const n2 = Number(num2);
  const op = operator;

  

  if(op === '+'){
    
    return n1+n2;
  }
  else if (op === '-'){
    return n1-n2;
  }
  else if (op === 'x'){
    return n1*n2;
  }
  else if (op === '/'){
    return n1/n2;
  }
  
}

