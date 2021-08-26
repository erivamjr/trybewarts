const email = document.getElementById('email');
const password = document.getElementById('password');
const btnEnter = document.getElementById('btn-enter');
const btnSubmit = document.getElementById('submit-btn');
const agreeInput = document.getElementById('agreement');

function validation() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnEnter.addEventListener('click', validation);

// Requisito 18

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
