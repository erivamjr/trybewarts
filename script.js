const email = document.getElementById('email');
const password = document.getElementById('password');
const btnEnter = document.getElementById('btn-enter');
function validation() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnEnter.addEventListener('click', validation);
// test