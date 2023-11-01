const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', onFormElemSubmit);

function onFormElemSubmit(event) {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const result = { email, password };

    if (email === '' || password === '') {
        alert('Не всі поля були заповнені')
    }

    console.log(result);
    event.target.reset();
}

