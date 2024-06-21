let num1='';
let num2='';
let operator='';
let lastAns='0';
let opFlag= false;


//update the display when a number button is clicked 
document.querySelectorAll('.num').forEach((element) => {
  element.addEventListener('click', () => {
    let displayValue = document.querySelector('.display').textContent;
    let buttonValue = element.textContent;
    displayNumber(displayValue, buttonValue);
    
  });
});

function displayNumber (displayValue, buttonValue) {
  if(displayValue.length <11 ){
    if( num1 !== '' ){ 
      document.querySelector('.display').textContent += buttonValue;
      
      //update the number variables
      addToNumberVariables(buttonValue);
      
    }
    else{
      //display if num 1 doesn't have any value
      document.querySelector('.display').textContent = buttonValue;
      num1 = buttonValue;
    } 
  }
}


function addToNumberVariables(digit){
  if(opFlag == false){
    num1 += digit;
  }
  else{
    num2 += digit;
  }
}

function deleteFromNumberVariables(digit){
  if(opFlag == false){
    num1 = digit;
  }
  else{
    num2 = num2.substring(0,num2.length-1);
  }
}




document.querySelector('.delete').addEventListener('click', () => {
  let displayValue = document.querySelector('.display').textContent;
  deleteDigit(displayValue);
  
  
});


function deleteDigit(displayValue){
  //if only one digit and user deletes --> display 0
  if(displayValue.length === 1){
    document.querySelector('.display').textContent = 0;
    num1='';
  }


  else{
    //checks if deleted digit is an operator, if yes set opFlag to false and operator to nothing
    if(isOperator(displayValue.charAt(displayValue.length-1)) === true ){
      opFlag = false;
      operator='';
    }

    //get new displayvalue 
    displayValue = displayValue.substring(0,displayValue.length-1);

    //display the new displayvalue
    document.querySelector('.display').textContent = displayValue;

    //update the number variables
    deleteFromNumberVariables(displayValue);

 
  }
}



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
  document.querySelector('.display').textContent ='0';
  resetVariables ();
});


//add event listener on operator buttons 
document.querySelectorAll('.operator').forEach((element) => {
  element.addEventListener('click', () => {

    operator = element.textContent;
    displayOperator();
  });
});



function displayOperator(){
  if(opFlag === false){
    //if num1 has no value then set num1 to the last answer
    if(num1===''){
      num1=lastAns;
    }



    //update the display to have the operator
    document.querySelector('.display').textContent+= operator;

    //set flag to true
    opFlag=true;
    
    
  }

  //if a second operator is clicked when a first one hasnt been calculated yet 
  else{

    //calculate
    const results = calculate();
    

    //update global variables
    num1=results;
    num2='';
    lastAns= results;
  
    //display the results
    document.querySelector('.display').textContent = num1+operator;
  }
}


function resetVariables (){
    num1='';
    num2='';
    operator='';
    opFlag=false;
    lastAns='0';
}


//add event listener onto equal button
document.querySelector('.evaluate').addEventListener('click', () => {

  //
  if(num1 !== '' && num2 !=='' && operator !== ''){
    //calculate results
    const results = calculate();
    
    //display results 
    document.querySelector('.display').textContent=results;

    //reset variables
    resetVariables();

    //set last answer to the results
    lastAns= results;
  }
  
});



function calculate (){
  const n1 = Number(num1);
  const n2 = Number(num2);
  const op = operator;

  let results ;

  if(op === '+'){
    
    results =  n1+n2;
  }
  else if (op === '-'){
    results = n1-n2;
  }
  else if (op === 'x'){
    results = n1*n2;
  }
  else if (op === '/'){
    results = n1/n2;
  }

  results = Math.round(results*1000000000)/1000000000;
  return results;
  
}



document.querySelector('.point').addEventListener('click', () => {
  displayPoint();
});


function displayPoint (){

  const displayValue = document.querySelector('.display').textContent;
  let numberValue ;
  if (displayValue.length < 11){

    if(opFlag === true){
      numberValue = num2;
    }
    else{
      numberValue = num1;
    }

    if(numberValue.length === 0){
      if(num1 === ''){
        document.querySelector('.display').textContent = '0.';
      }
      else{
        document.querySelector('.display').textContent += '0.';
      }
      
      addToNumberVariables('0.');
      
    }
    
    else if(numberValue.includes('.') === false){
      document.querySelector('.display').textContent += '.';
      addToNumberVariables('.');
    }

 
  }
}



