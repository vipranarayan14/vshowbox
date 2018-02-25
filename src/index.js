import { nextSlide, prevSlide, showSlide } from './navigation';
import { initEventListeners } from './events';
import { initGlobals } from './globals';
import { initPreviews } from './previews';

import './styles/normalize.less';
import './styles/showbox.less';
import './styles/sb-previews.less';

export const vShowBox = config => {

  const vsbPreviewsConatiner = initPreviews(config);

  const globals = initGlobals(vsbPreviewsConatiner);

  globals.config = config;

  initEventListeners(globals);

  return {
    nextSlide: nextSlide(globals),
    prevSlide: prevSlide(globals),
    showSlide: showSlide(globals),
    slideIndex: globals.slideIndex,
    slidesLength: globals.slidesLength
  };

};
