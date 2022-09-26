/* eslint-disable import/prefer-default-export */
const link = document.querySelectorAll('#navbar a');
const list = document.querySelector('#book-list');
const form = document.querySelector('#formfields');
const contact = document.querySelector('#contact');

export const spaFunction = () => {
  link.forEach((lnk) => {
    lnk.addEventListener('click', () => {
      if (lnk.id.toString() === 'book-list-lnk') {
        list.classList.remove('hide');
        form.classList.add('hide');
        contact.classList.add('hide');
      } else if (lnk.id.toString() === 'formfields-lnk') {
        list.classList.add('hide');
        form.classList.remove('hide');
        contact.classList.add('hide');
      } else if (lnk.id.toString() === 'contact-lnk') {
        list.classList.add('hide');
        form.classList.add('hide');
        contact.classList.remove('hide');
      }
    });
  });
};