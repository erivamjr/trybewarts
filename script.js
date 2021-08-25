const email = document.getElementById('email');
const password = document.getElementById('password');
const btnEnter = document.getElementById('btn-enter');
const btnSubmit = document.getElementById('submit-btn');
const agreeInput = document.querySelector('#agreement');
function validation() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnEnter.addEventListener('click', validation);

if (agreeInput.checked === true) {
  btnSubmit.addEventListener('click', validationSubmit);
}

function validationSubmit() {
  console.log('Passei aqui');
}

