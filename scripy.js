const bars = document.getElementById('bars');
const itens = document.getElementById('itens');

bars.addEventListener('click', function() {
    itens.classList.toggle('active');
});