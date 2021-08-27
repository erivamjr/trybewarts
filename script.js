const email = document.getElementById('input-email');
const password = document.getElementById('password');
const btnEnter = document.getElementById('btn-enter');
const btnSubmit = document.getElementById('submit-btn');
const agreeInput = document.getElementById('agreement');

const textArea = document.getElementById('textarea');
const counterDisplay = document.getElementById('counter');

const name = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const house = document.getElementById('house');
const subjects = document.getElementsByClassName('subject');

const form = document.getElementById('evaluation-form');
let selected = '';

function validation() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnEnter.addEventListener('click', validation);

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
textArea.addEventListener('input', () => {
  textArea.addEventListener('keyup', () => {
    const maxLength = 500;
    const counter = maxLength - textArea.value.length;
    counterDisplay.innerHTML = counter;
  });
});

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const familyChecked = document.querySelector('input[name=family]:checked');
  const rate = document.querySelector('input[name=rate]:checked');
  for (let key = 0; key < subjects.length; key += 1) {
    if (subjects[key].checked) {
      selected = `${selected + subjects[key].value} `;
    }
  }
  const arrayInformation = [`Nome: ${name.value} ${lastName.value}`, `Email: ${email.value}`,
    `Casa: ${house.value}`, `Família: ${familyChecked.value}`, `Matérias: ${selected}`,
    `Avaliação: ${rate.value}`, `Observações: ${textArea.value}`];
  form.innerHTML = '';
  for (let key = 0; key < arrayInformation.length; key += 1) {
    const p = document.createElement('p');
    p.innerHTML = arrayInformation[key];
    form.appendChild(p);
  }
});
