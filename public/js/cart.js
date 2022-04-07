// кнопка заказать


// кнопка удалить
const deleteCartItemButton = document.querySelector('#deleteCartItemButton');

if (deleteCartItemButton) {
  deleteCartItemButton.addEventListener('click', async (event) => {
    const response = await fetch(`/cart/${event.target.dataset.entryid}`, {
      method: 'DELETE'
    });
    if (event.target.tagName === 'BUTTON' && event.target.innerText === 'Delete') {
      event.preventDefault();
    
      const drugDiv = event.target.closest('div');
      const drugId = drugDiv.dataset.id;
    
      const response = await fetch(`/${taskId}`, {
        method: 'DELETE',
      });
    // const responseJson = await response.json();
    // if (!responseJson.isDeleteSuccessful) {
    //   const errorLi = document.createElement('li');
    //   errorLi.classList.add('pipe-separate');
    //   errorLi.classList.add('left');
    //   errorLi.classList.add('error');
    //   errorLi.innerText = responseJson.errorMessage;
    //   const editAndDeleteUl = document.querySelector('#editAndDeleteUl');
    //   editAndDeleteUl.append(errorLi);
    //   return;
    // }
    
    window.location = '/cart';
  })











// выбрать адрес
// указать телефон - можно в базу данных в аккаунт
