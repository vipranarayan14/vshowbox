import { nextSlide, prevSlide, showSlide } from './navigation';
import { initEventListeners } from './events';

const initGlobals = () => {

  const SBPreviews = document.querySelectorAll('.sb-previews .sb-preview');
  const SBModal = document.querySelector('.sb-modal');
  const SBStage = SBModal.querySelector('.sb-stage');
  const SBCaption = SBModal.querySelector('.sb-caption');
  const SBSlideCount = document.querySelector('.sb-slide-count');

  const slidesLength = SBPreviews.length;
  const slideLastIndex = SBPreviews.length - 1;

  return {
    SBCaption,
    SBModal,
    SBPreviews,
    SBSlideCount,
    SBStage,
    slideIndex: 0,
    slideLastIndex,
    slideTitle: '',
    slideUrl: '',
    slidesLength
  };

};

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
