const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expressions = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validateForm = (e) => {
    switch(e.target.name) {
        case "user":
            
        break
        case "name":
            
        break
        case "password":
            
        break
        case "password2":
            
        break
        case "email":
            
        break
        case "phone":
            
        break
    }
}

const validateField = (expression, input, field) => {
    if(expression.user.test(input.value)){
        document.getElementById('group__user').classList.remove('form__group-incorrect');
        document.getElementById('group__user').classList.add('form__group-correct');
        document.querySelector('#group__user i').classList.add('fa-check-circle');
        document.querySelector('#group__user i').classList.remove('fa-times-circle');
        document.querySelector('#group__user .form__input-error').classList.remove('form__input-error-active');
    } else {
        document.getElementById('group__user').classList.add('form__group-incorrect');
        document.getElementById('group__user').classList.remove('form__group-correct');
        document.querySelector('#group__user i').classList.add('fa-times-circle');
        document.querySelector('#group__user i').classList.remove('fa-check-circle');
        document.querySelector('#group__user .form__input-error').classList.add('form__input-error-active');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {
    e.preventDefault()
})


/* Opcion larga, solo para el campo user

if(expressions.user.test(e.target.value)){
        document.getElementById('group__user').classList.remove('form__group-incorrect');
        document.getElementById('group__user').classList.add('form__group-correct');
        document.querySelector('#group__user i').classList.add('fa-check-circle');
        document.querySelector('#group__user i').classList.remove('fa-times-circle');
        document.querySelector('#group__user .form__input-error').classList.remove('form__input-error-active');
    } else {
        document.getElementById('group__user').classList.add('form__group-incorrect');
        document.getElementById('group__user').classList.remove('form__group-correct');
        document.querySelector('#group__user i').classList.add('fa-times-circle');
        document.querySelector('#group__user i').classList.remove('fa-check-circle');
        document.querySelector('#group__user .form__input-error').classList.add('form__input-error-active');
    }


    */