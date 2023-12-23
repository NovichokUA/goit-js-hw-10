import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const createPromisBtn = document.querySelector('button');
let inputValue = form.elements.delay;

let i = document.getElementsByName('state');

createPromisBtn.addEventListener('click', onCreatePromise);

function createPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (form.elements.state.value === 'fulfilled') {
        resolve(delay);
      } else if (form.elements.state.value === 'rejected') {
        reject(delay);
      }
    }, delay);
  });
}

function onCreatePromise(event) {
  event.preventDefault();
  let delay = inputValue.value;
  createPromise(delay)
    .then(delay => {
      iziToast.success({
        position: 'topRight',
        title: 'OK',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });

  inputValue.value = '';
  //   i.forEach(inout => {
  //     inout.checked = false;
  //   });
}
