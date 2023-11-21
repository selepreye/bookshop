const form = document.getElementById('form');
const addressSection = document.getElementById('output');
const purchaseBtn = document.querySelectorAll('#btnLink');

const address = document.getElementById('inputAddress');
const email = document.getElementById('inputEmail');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('order confirmed');
  address.value = '';
  email.value = '';
});

purchaseBtn.forEach((item) => {
  item.addEventListener('click', () => {
    addressSection.style.display = 'block';
  });
});
