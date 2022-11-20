const faqSections = document.querySelectorAll('.section-faq');

if ( faqSections.length ) {
  faqSectionsScript();
}

function faqSectionsScript() {
  // Each Section
  faqSections.forEach((section) => {
    const items = section.querySelectorAll('.item');
    // Each Item
    items.forEach((item) => {
      const title = item.querySelector('.title');
      title.addEventListener('click', () => {
        togglePanel(item, items);
      })
    })
  });
}

function togglePanel(item, items) {
  const panel = item.querySelector('.panel');
  const icon = item.querySelector('.icon svg');
  items.forEach(_item => {
    if(item == _item) return
    closePanel(_item.querySelector('.panel'), _item.querySelector('.icon svg'));
    _item.classList.remove('active');
  });
  if ( panel.style.maxHeight == '0px' || panel.style.maxHeight == '' ) {
    item.classList.add('active');
    openPanel(panel, icon);
  } else {
    item.classList.remove('active');
    closePanel(panel, icon);
  }
}

function closePanel(panel, icon) {
  panel.style.maxHeight = '0px';
  icon.style.rotate = '0deg';
}

function openPanel(panel, icon) {
  panel.style.maxHeight = panel.scrollHeight + 'px';
  icon.style.rotate = '180deg';
}