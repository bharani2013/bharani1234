// Select all product cards
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
  card.style.cursor = 'pointer'; // show pointer cursor

  card.addEventListener('click', () => {
    const url = card.getAttribute('data-url'); // get the target url from attribute
    if (url) {
      window.location.href = url; // redirect to product page
    }
  });
});
