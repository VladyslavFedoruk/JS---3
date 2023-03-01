//Минимум - 1 
const age = prompt('How old are you ?'); 
    if (age >= 0 && age <= 11) {
        alert('You are a child');
    }
else if (age >= 12 && age < 17) {
       alert('You are a teenager');
    }                                           
else if (age >= 19 && age <= 59) {
        alert('You are a adult');
    }
        else if (age >= 50 && age <= 100) {
        alert('You are a ДЕД-МОПЕД');
    }
         else if (age >= 100 && age <= 150) {
        alert('Ты - песок');
    }
else {
        alert('undefined value');
    }


    // Минимум - 2
const symbol = prompt('Take any number from 0 to 9 for exchanging to the corresponding symbol'); 
switch (symbol) {
    case '1':
        alert('!');
        break;
    case '2':
        alert('@');
        break;
    case '3':
        alert('#')
        break;
    case '4':
        alert('$')
        break;
    case '5':
        alert('%')
        break;
    case '6':
        alert('^')
        break;
    case '7':
        alert('&')
        break;
    case '8':
        alert('*')
        break;
    case '9':
        alert('(')
        break;
    case '0':
        alert(')')
        break;
    default:
        alert('undefinded symbol')
}


//Минимум-3
let a = +prompt("Введіть число #1: ");
let b = +prompt("Введіть число #2: ");
let sum = 0;

for(let i = a; i <= b; i++){
  sum += i;
}
alert(`Сума чисел ${a} + ${b} дорівнює ${sum}`);


//Минимум-42
let num1 = +prompt("Введіть число: ");
let num2 = +prompt("Введіть ще одне число: ");
let nsd = 1;
for(let i = 1; i <= num1 && i <= num2; i++){
  if(num1 % i == 0 && num2 % i == 0){
    nsd = i;
  }
} 
alert(`НСД чисел ${num1} та ${num2} дорівнює ${nsd}`);

//Минимум - 5
let number = +prompt('Введіть число');
for (let i = 1; i <= number, i++;) {
    if (number % i === 0) {
        alert(i);
    }
    break;
}

