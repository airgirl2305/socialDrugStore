const drugContainer = document.getElementById('drug-container');

//удалить лекарство
drugContainer.addEventListener('click', async (e) => {
  if (e.target.id === 'delete-button') {
    e.preventDefault();
    const drug = e.target.closest('[data-id]');
    console.log(typeof e.target.closest('section'));
    const drugId = drug.dataset.id;
    console.log(drugId);

    const response = await fetch(`/${drugId}`, { method: 'delete' });
    console.log(response);
    if (response.ok) {
      drug.remove();
    }
  }
});
