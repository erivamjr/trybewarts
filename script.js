const email = document.getElementById('input-email');
const password = document.getElementById('password');
const btnEnter = document.getElementById('btn-enter');
const btnSubmit = document.getElementById('submit-btn');
const agreeInput = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counterDisplay = document.getElementById('counter');
const btnSubmit = document.getElementById('submit-btn');
const name = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const house = document.getElementById('house');
const subjects = document.getElementsByClassName('subject');
const rate = document.getElementsByName('rate');
const family = document.querySelectorAll('#label-family input:checked');
const agree = document.getElementById('agreement');
const form = document.getElementById('evaluation-form');
const familyChecked = document.querySelector('input[type=radio]:checked');

console.log(family);
// console.log(familyChecked, form, email, agree.value, name, house.value, family[0].value, subjects[0].value, rate[0].value);

function validation() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnEnter.addEventListener('click', validation);

<<<<<<< HEAD
textArea.addEventListener('input', () => {
=======
// Requisito-18

btnSubmit.disabled = true;
function validationSubmit() {
  if (agreeInput.checked === true) {
    console.log(agreeInput.checked);
    btnSubmit.disabled = false;
  } else {
    console.log(agreeInput.checked);
    btnSubmit.disabled = true;
  }
}
agreeInput.addEventListener('click', validationSubmit);

textArea.addEventListener('keyup', () => {
>>>>>>> 01ac0ba6761b5fbb7c0e2d43f3002572cf243cb6
  const maxLength = 500;
  const counter = maxLength - textArea.value.length;
  counterDisplay.innerHTML = counter;
});

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  form.innerHTML = '';
  const p = document.createElement('p');
  p.innerHTML = `Nome: ${name.value} ${lastName.value};
  Email: ${email.value} Casa: ${house.value} Família: ${familyChecked};`
  form.appendChild(p);
});
