import {ItcSlider} from '../vendor/slider/itc-slider.js';

document.addEventListener('DOMContentLoaded', () => {
  ItcSlider.getOrCreateInstance('.itc-slider', {
    loop: false, // без зацикливания
  });
});
