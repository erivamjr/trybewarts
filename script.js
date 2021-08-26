const email = document.getElementById('email');
const password = document.getElementById('password');
const btnEnter = document.getElementById('btn-enter');
const textArea = document.getElementById('textarea');
const counterDisplay = document.querySelector('#counter');

function validation() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnEnter.addEventListener('click', validation);

textArea.addEventListener('keyup', () => {
  const maxLength = 500;
  const counter = maxLength - textArea.value.length;
  counterDisplay.innerHTML = counter;
});
