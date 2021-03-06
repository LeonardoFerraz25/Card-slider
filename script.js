const forward = document.querySelector('.forward');
const backward = document.querySelector('.backward');
const slider = document.querySelector('.scroll');
let scrollAmount = 0;

backward.addEventListener('click', () => {
  slider.scrollTo({
    top: 0 ,
    left: (scrollAmount -= 1000),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0
  }

})

forward.addEventListener('click', () => {
  if(scrollAmount <= slider.scrollWidth - slider.clientWidth) {
    slider.scrollTo({
      top: 0,
      left: (scrollAmount += 1000),
      behavior: "smooth"
    })
  }
})
