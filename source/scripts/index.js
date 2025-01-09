/* в этот файл добавляет скрипты*/
document.addEventListener('DOMContentLoaded', () => {
  const scrollbar = `${document.body.clientWidth - window.innerWidth }px`;
  let elSlider1;

  document.querySelector('[data-target="modal-1"]').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.style.overflow = 'hidden';
    document.querySelector('#modal-1').style.marginLeft = scrollbar;
    document.querySelector('#modal-1').classList.add('modal-open');
    if (elSlider1 === undefined) {
      elSlider1 = ItcSlider.getOrCreateInstance('.itc-slider-1', { loop: false });
    } else {
      elSlider1.reset();
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-target="close"]')) {
      e.preventDefault();
      const modal = e.target.closest('.modal');
      document.body.style.overflow = 'visible';
      modal.style.marginLeft = '0px';
      modal.classList.remove('modal-open');
      elSlider1.autoplay.stop();
    }
  });
});
