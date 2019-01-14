const inputSlikaElement = document.getElementById('slika');
const slikaPreviewElement = document.querySelector('.img-preview');

inputSlikaElement.addEventListener('input', () => {
    slikaPreviewElement.src = inputSlikaElement.value;
});