import { nextSlide, prevSlide, showSlide } from './navigation';
import { initEventListeners } from './events';
import { initGlobals } from './globals';

import './styles/normalize.less';
import './styles/showbox.less';
import './styles/sb-previews.less';

export const vShowBox = () => {

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
