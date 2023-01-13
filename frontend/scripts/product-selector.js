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

// Dropdown
const customSelectWrapper = document.querySelector('form .product-variants.select');
const customSelect = customSelectWrapper.querySelector('form .product-variants.select .select');
const customDropdown = customSelectWrapper.querySelector('form .product-variants.select .dropdown');
const customVariants = customDropdown.querySelectorAll('.variant[data-variant]');

customVariants.forEach(variant => {
  variant.addEventListener('click', function(e) {
    let selectedVariant = e.currentTarget;
    let selectedVariantID = selectedVariant.getAttribute('data-variant');

    // Update master
    masterSelect.value = selectedVariantID;

    // Update view
    customSelect.querySelector('.inner').innerHTML = selectedVariant.innerHTML;
    customSelectWrapper.classList.remove('open');
  });
});

customSelect.addEventListener('click', function(e) {
  customSelectWrapper.classList.toggle('open');
});