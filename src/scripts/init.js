import { nextSlide, prevSlide, showSlide } from './navigation';
import { initEventListeners } from './events';
import { initGlobals } from './globals';

export const initvShowBox = () => {

  const globals = initGlobals();

  initEventListeners(globals);

  return {
    nextSlide: nextSlide(globals),
    prevSlide: prevSlide(globals),
    showSlide: showSlide(globals),
    slideIndex: globals.slideIndex,
    slidesLength: globals.slidesLength
  };

};
