document.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
    event.preventDefault();
    this.parentElement.classList.toggle('show');
});
