// // Варіант 1
// const inputEl = document.querySelector('#validation-input');
// inputEl.addEventListener('input', onInputChange);
// inputEl.addEventListener('focus', onInputFocus);

// function onInputChange(event) {
//     const inputLength = event.target.value.length;
//     const inputDefaultLength = Number(inputEl.getAttribute('data-length'));

//     console.log(inputEl)
//     if (inputLength === inputDefaultLength) {
//         event.target.classList.add('valid');
//         event.target.classList.remove('invalid');
//     } else {
//         event.target.classList.add('invalid')
//         event.target.classList.remove('valid');
//     }
// }


// Варіант 2
const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputChange);
inputEl.addEventListener('focus', onInputFocus);

function onInputChange(event) {
    const inputLength = event.target.value.length;
    const inputDefaultLength = Number(inputEl.getAttribute('data-length'));


    console.log(inputEl)
    if (inputLength === inputDefaultLength) {
        event.target.classList.add('valid');
        console.log(inputLength);
    } else {
        event.target.classList.add('invalid')
        console.log(inputLength);
    }
}


function onInputFocus(event) {
    event.target.classList.remove('valid');
    event.target.classList.remove('invalid');
}
