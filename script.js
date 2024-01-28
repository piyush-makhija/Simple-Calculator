
let number = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      number = eval(number);
      document.querySelector('input').value = number;
    }
    else if(e.target.innerHTML == 'AC'){
      number = ""
      document.querySelector('input').value = number;
    }
    else if(e.target.innerHTML =='DEL'){
      number =number.substring( 0,number.length-1);
     document.querySelector('input').value = number;

        }
     else{ 
    console.log(e.target)
    number = number + e.target.innerHTML;
    document.querySelector('input').value = number;
      }
  })
})