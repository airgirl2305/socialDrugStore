//нет

// const editEntryForm = document.querySelector('#editEntryForm');
// const deleteEntryButton = document.querySelector('#deleteEntryButton');
//
// if (editEntryForm) {
//   editEntryForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const response = await fetch(`/entries/${event.target.dataset.entryid}`, { // инструмент общения фронта с бэком - могут быть только в статических папках
//       method: 'PUT', // единственный вариант общения
//       headers: { //axios это универсальный современный метод
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         title: event.target.title.value,
//         body: event.target.body.value
//       })
//     });
//
//     const responseJson = await response.json(); // это обязательный ответ от бэка никаких рендеров ни редиректов только json
//
//     if (!responseJson.isUpdateSuccessful) {
//       const errorDiv = document.createElement('div');
//       errorDiv.classList.add('error');
//       errorDiv.innerText = responseJson.errorMessage;
//       event.target.parentElement.append(errorDiv);
//       return;
//     }
//     window.location = `/entries/${responseJson.entryID}`;
//   });
// }
//
// if (deleteEntryButton) {
//   deleteEntryButton.addEventListener('click', async (event) => {
//     const response = await fetch(`/entries/${event.target.dataset.entryid}`, {
//         method: 'DELETE'
//     });
//     //const response = await axios.delete(`/entries/${event.target.dataset.entryid}`,
//     const responseJson = await response.json();
//
//     if (!responseJson.isDeleteSuccessful) {
//       const errorLi = document.createElement('li');
//       errorLi.classList.add('pipe-separate');
//       errorLi.classList.add('left');
//       errorLi.classList.add('error');
//       errorLi.innerText = responseJson.errorMessage;
//       const editAndDeleteUl = document.querySelector('#editAndDeleteUl');
//       editAndDeleteUl.append(errorLi);
//       return;
//     }
//
//     window.location = '/entries';
//   });


// на  кнопку купить
  drugWrapper.addEventListener('click', async (e) => {
    if (e.target.innerText === 'Купить') {
      const card = e.target.closest('[data-id]');
      const { id } = card.dataset;
      const response = await fetch(`/post/${id}`, {
        method: 'DELETE',
      });
      
    }
