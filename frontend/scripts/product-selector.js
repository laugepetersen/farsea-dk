import { __isOptionsFunction } from "@tailwindcss/typography";

const customOptions = document.querySelectorAll('form .custom-selector .variant input');
const customLabels = document.querySelectorAll('form .custom-selector .variant label');
const masterSelect = document.querySelector('#product-select');

customOptions.forEach(option => {
  option.addEventListener('change', function(e) {
    let option = e.target;
    let optionValue = option.value;
    let label = e.target.parentNode.querySelector('label[for="'+option.id+'"]');

    if(masterSelect.querySelector(`option[value="${optionValue}"]`)) {
      masterSelect.value = optionValue; 
      customLabels.forEach(label => label.classList.remove('checked'));
      label.classList.add('checked');
    }
  });
});