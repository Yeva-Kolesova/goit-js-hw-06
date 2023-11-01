const fontSizeBtnEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

fontSizeBtnEl.addEventListener('input', onInputSizeChange);

function onInputSizeChange(event) {
    const fontSize = fontSizeBtnEl.value + 'px';
    spanEl.style.fontSize = fontSize;
}