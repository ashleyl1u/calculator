let num1;
let num2;
let operator;


document.querySelectorAll('.num').forEach((element) => {
  element.addEventListener('click', () => {
    let displayValue = document.querySelector('.display').textContent;
    if(displayValue !== '0'){
      document.querySelector('.display').textContent += element.textContent;
    }
    else{
      document.querySelector('.display').textContent = element.textContent;
    }
  });
});