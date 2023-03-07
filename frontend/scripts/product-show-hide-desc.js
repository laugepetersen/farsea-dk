const desc = document.querySelector('.desc');
const shortDesc = document.querySelector('.short-desc');

if (desc && shortDesc) {
  const showMore = document.querySelector('#desc-read-more');
  const showLess = document.querySelector('#desc-read-less');
  
  showMore.addEventListener('click', () => {
    shortDesc.classList.add('hidden');
    desc.classList.remove('hidden');
  });

  showLess.addEventListener('click', () => {
    desc.classList.add('hidden');
    shortDesc.classList.remove('hidden');
  });
}