const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expressions = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

// Para que todos los campos sean incorrectos antes de completar cualquiera de ellos
const fields = {
    user: false,
    name: false,
    password: false,
    email: false,
    phone: false 
}

const validateForm = (e) => {
    switch(e.target.name) {
        case "user":
            validateField(expressions.user, e.target, 'user');
        break
        case "name":
            validateField(expressions.name, e.target, 'name');
        break
        case "password":
            validateField(expressions.password, e.target, 'password');
            validatePassword2();
        break
        case "password2":
            validatePassword2();
        break
        case "email":
            validateField(expressions.email, e.target, 'email');
        break
        case "phone":
            validateField(expressions.phone, e.target, 'phone');
        break
    }
}

// Traigo el valor del campo en lugar de hacer una validación por cada campo `${field}` y lo reutilizo arriba en el switch
const validateField = (expression, input, field) => {
    if(expression.test(input.value)){
        document.getElementById(`group__${field}`).classList.remove('form__group-incorrect');
        document.getElementById(`group__${field}`).classList.add('form__group-correct');
        document.querySelector(`#group__${field} i`).classList.add('fa-check-circle');
        document.querySelector(`#group__${field} i`).classList.remove('fa-times-circle');
        document.querySelector(`#group__${field} .form__input-error`).classList.remove('form__input-error-active');
        //cambio el campo a verdadero o correcto
        fields[field] = true;
    } else {
        document.getElementById(`group__${field}`).classList.add('form__group-incorrect');
        document.getElementById(`group__${field}`).classList.remove('form__group-correct');
        document.querySelector(`#group__${field} i`).classList.add('fa-times-circle');
        document.querySelector(`#group__${field} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group__${field} .form__input-error`).classList.add('form__input-error-active');
        //campo falso
        fields[field] = false;
    }
}

const validatePassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`group__password2`).classList.add('form__group-incorrect');
        document.getElementById(`group__password2`).classList.remove('form__group-correct');
        document.querySelector(`#group__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#group__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#group__password2 .form__input-error`).classList.add('form__input-error-active');
        fields['password'] = false;
    } else {
        document.getElementById(`group__password2`).classList.remove('form__group-incorrect');
        document.getElementById(`group__password2`).classList.add('form__group-correct');
        document.querySelector(`#group__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#group__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#group__password2 .form__input-error`).classList.remove('form__input-error-active');
        fields['password'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const terms = document.getElementById('terms');
    // Me aseguro que todos los campos estén completos y correctos para hacer el envío
    if (fields.user && fields.name && fields.password && fields.email && fields.phone && terms.checked){
        form.reset();

        document.getElementById('form__message-success').classList.add('form__message-success-active');

        document.getElementById('form__message').classList.remove('form__message-active')
        //Elimino el msj de éxito luego de 5 segundos segundos:
        setTimeout(() => {
            document.getElementById('form__message-success').classList.remove('form__message-success-active');
        }, 5000);
        //Quitar íconos de correcto luego de enviar formulario
        document.querySelectorAll('.form__group-correct').forEach((icon) => {
           icon.classList.remove('form__group-correct');
        });
    } else {
        document.getElementById('form__message').classList.add('form__message-active')
    }
});


/* Opcion larga, solo para el campo user:

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