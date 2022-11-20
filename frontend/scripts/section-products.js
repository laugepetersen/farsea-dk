import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const productSections = document.querySelectorAll('.shopify-section.section-products .products-wrapper');

if(productSections.length) {

  productSections.forEach((section) => {
    const mediaWrappers = section.querySelectorAll('.product-image');

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      onToggle: self => {
        if(self.isActive) {
          mediaWrappers.forEach((wrapper) => {
            wrapper.style.position = 'fixed';
          })
        } else {
          mediaWrappers.forEach((wrapper) => {
            wrapper.style.position = 'relative';
          })
        }
      }
    })

    let blocks = section.querySelectorAll('.product');
    let i = 0;
    blocks.forEach(block => {
      const image = block.querySelector('img');
      const wrapper = block.querySelector('.product-image');
      const priorProduct = blocks[i-1];

      ScrollTrigger.create({
        trigger: block,
        start: 'top bottom',
        end: 'bottom bottom',
        onUpdate: self => {

          if(priorProduct) {
            let priorImage = priorProduct.querySelector('img');
            let scale = 1.05 - (self.progress / 20);
            priorImage.style.transform = 'scale(' + scale + ')';
          }          

          if(block == blocks[0]) return;

          image.style.height = self.progress * 100 + '%';
          let scale = 1 + self.progress / 20;
          image.style.transform = 'scale(' + scale + ')';
          wrapper.style.backgroundColor = 'rgba(0, 0, 0, ' + (self.progress / 10 * 4) + ')';
        }
      })

      i++;
    })

  })

}