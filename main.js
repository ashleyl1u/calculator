let num1;
let num2;
let operator;


document.querySelectorAll('.num').forEach((element) => {
  element.addEventListener('click', () => {
    let displayValue = document.querySelector('.display').textContent;
    if(displayValue.length <16){
      if(displayValue !== '0'){
        document.querySelector('.display').textContent += element.textContent;
      }
      else{
        document.querySelector('.display').textContent = element.textContent;
      }
    }
    
  });
});



document.querySelector('.delete').addEventListener('click', () => {
  let displayValue = document.querySelector('.display').textContent;
  if(displayValue.length === 1){
    document.querySelector('.display').textContent = 0;
  }
  else{
    displayValue = displayValue.substring(0,displayValue.length-1);
    console.log(displayValue);
    document.querySelector('.display').textContent = displayValue;
  
  }
  
});