import val from 'validator';
const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  hideErrorMessage(this);
  checkForEmptyField(username, password, password2);
  checkEmail(email);
  checkPassword(password, password2);
});

function hideErrorMessage(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGE)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
}

function checkForEmptyField(...fields: HTMLInputElement[]): void {
  fields.forEach((item) => {
    if (!item.value) showErrorMessage(item, 'Campo não pode ficar vazio');
  });
}

function checkEmail(item: HTMLInputElement): void {
  if (!val.isEmail(item.value)) showErrorMessage(email, 'email inválido');
}

function checkPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value != password2.value) {
    showErrorMessage(password, 'Senhas devem ser iguais');
    showErrorMessage(password2, 'Senhas devem ser iguais');
  }
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const erroMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  erroMessage.innerHTML = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
  console.log(erroMessage);
}
