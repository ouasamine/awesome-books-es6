/* eslint-disable import/prefer-default-export */
export function printBookList(bookListObj, container) {
  container.innerHTML = '';
  bookListObj.getBooks().forEach((element) => {
    const listItem = document.createElement('li');
    const listContent = `<p>"${element.title}" by ${element.author}</p>        
        <button class="remove-btn">Remove</button>
        `;
    listItem.innerHTML = listContent;
    container.appendChild(listItem);

    const removeBtn = listItem.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => {
      listItem.remove();
      bookListObj.removeBook(element.index);
    });
  });
}