// const colors = {color: 'green',
// defolt: true,
// number: 5,
// };

// const string = JSON.stringify(colors);

// // const string = '{"color":"green","defolt":true,"number":5}';

// // console.log(JSON.parse(string));

// localStorage.setItem('color', string);

// const col = localStorage.getItem('color');

// console.log(JSON.parse(col));

const formEl = document.querySelector('.js-feetbec-form');
const textareaEl = document.querySelector('.js-feetbec-form textarea');

formEl.addEventListener('submit', e => callbackform(e));
textareaEl.addEventListener('input', e => callbackTextarea(e))

populateTexarea();

function callbackTextarea(e) {
    const value = e.target.value;
    const dataString = localStorage.setItem('textarea', value);
}  

function callbackform(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('textarea');
}

function populateTexarea() {
    const dataStor = localStorage.getItem('textarea');
    if(dataStor) {
        textareaEl.value =  dataStor;
    }
}