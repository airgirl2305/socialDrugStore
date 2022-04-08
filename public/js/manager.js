// добавить лекарство
const drugContainer = document.getElementById('drug-container');

beaverForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(beaverForm));
  const response = await fetch('/', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  console.log(response);
  const result = await response.json();
  console.log(result);
  if (response.ok) {
    drugContainer.insertAdjacentHTML(
      'afterbegin',
      addDrug(result),
    );
  }
});
