document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value;
  alert(`Thank you for your message, ${name}!`);
  this.reset();
});
