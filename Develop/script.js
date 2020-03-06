//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    length, 
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol
    );
});

//Copy password to clipboard
// clipboardEl.addEventListener('click', () =>{
//   const textarea = document.createElement('textarea');
//   const password = resultEl.innerText;

//   if(!password){
//     return;
//   }

//   textarea.value = password;
//   document.body.appendChild(textarea);
//   textarea.select();
//   document.execCommand('copy');
//   textarea.remove();
//   alert('Password copied to clipboard');
// })

//Generate password function
function generatePassword(length, lower, upper, number, symbol){
  // 1. Init pw var
  // 2. Filter out unchecked types
  // 3. Loop over lengtg call generator function for each type
  // 4. Add the final pw to the pw var and return

  let generatePassword = '';

  const typesCount = lower + upper + number + symbol;

  // console.log('typesCount: ', typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter( item => Object.values(item)[0]);

  // console.log('typesArr', typesArr)

  if(typesCount === 0) {
    return '';
  }

  for(let i=0; i < length; i += typesCount){
    typesArr.forEach(type =>{
      const funcName = Object.keys(type)[0];
      // console.log('funcName: ', funcName);

      generatePassword += randomFunc[funcName]();
    });

  }

  const finalPassword = generatePassword.slice(0, length);

  return finalPassword;
}

//Generator Functions - http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,."
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// console.log(getRandomSymbol());

//add password to textbox/display area
function generate(){
  document.getElementById('display').value = finalPassword
}


//function to copy password to clipboard
function copyPassword(){

    document.getElementById('display').select();

    document.execCommand('Copy');

    alert("Password copied to clipboard");
}