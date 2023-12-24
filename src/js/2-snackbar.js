import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const createPromisBtn = document.querySelector('button');
let inputValue = form.elements.delay;

form.addEventListener('submit', onCreatePromise);

function createPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // form.elements.state.value === 'fulfilled'
      //   ? resolve(delay)
      //   : reject(delay);

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
  if (delay && form.elements.state.value) {
    createPromise(delay)
      .then(delay => {
        iziToast.success({
          position: 'topRight',
          title: 'OK',
          message: `✅ Fulfilled promise in ${delay}ms`,
        });
      })
      .catch(error => {
        iziToast.error({
          position: 'topRight',
          title: 'Error',
          message: `❌ Rejected promise in ${error}ms`,
        });
      });

    inputValue.value = '';
  } else {
    return iziToast.warning({
      position: 'topCenter',
      title: 'Warning',
      message: 'All fields must be completed!',
    });
  }
}
