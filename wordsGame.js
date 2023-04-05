const firstBtn = document.querySelector('#firstBtn');
const removeBtn = document.querySelector('#removeBtn');
const secondBtn = document.querySelector('#secondBtn');
const inputContainer = document.querySelector('#input-container');
const arr = [];

if (firstBtn) {
  firstBtn.addEventListener('click', () => {
const inputAddition = document.createElement('input');
    inputAddition.setAttribute('type', 'text');
    inputAddition.setAttribute('placeholder', 'Type a word');
    inputAddition.style.marginRight = '10px';
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (mediaQuery.matches) {
        //inputAddition.style
    }
    inputContainer.appendChild(inputAddition);
  });
}

if(removeBtn) {
  removeBtn.addEventListener('click', () => {      
    inputContainer.removeChild(inputContainer.lastChild);
    document.querySelector('#pAnswer').innerHTML = 'The last word was removed';
  });
}

if(secondBtn) {
  secondBtn.addEventListener('click', () => {
    const inputElements = document.querySelectorAll('#input-container input');
    arr.length = 0;
    document.querySelector('#pAnswer').innerHTML = 'Successfully added!';
    inputElements.forEach((input) => {
      arr.push(input.value);
    });
  });
}

const firstForm = document.querySelector('#myFstForm');

firstForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = input.value;
});

const thirdBtn = document.querySelector('#thirdBtn');
const replace = document.querySelector('.letters-container');
const input = document.querySelector('#input');
const fourthBtn = document.querySelector('#fourthBtn');
let answer = '';

thirdBtn.addEventListener('click', () => {
const randomIndex = Math.floor(Math.random() * arr.length);
answer = arr[randomIndex];
const words = answer.split('');


  shuffleArray(words);
  const word = words.join(' ');
  replace.textContent = '';
  words.forEach((char, index) => {
    const newP = document.createElement('p')
    newP.textContent = char;
    newP.classList.add(`letter`, `${String.fromCharCode(index + 97)}`);
    replace.appendChild(newP);
  })
});

function shuffleArray(words) {
  for (let i = words.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
}


function compareWords(newP, input) {
  if(newP === input) {
 document.querySelector('#pAnswer2').innerHTML = 'You are right!';
  }
  else {
    document.querySelector('#pAnswer2').innerHTML = 'Not that time... try it again!';
  }
}

if (fourthBtn) {
  fourthBtn.addEventListener('click', () => {
    compareWords(answer, input.value.trim());
  });
}

const secondForm = document.querySelector('#mySndForm');

secondForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = input.value;
});