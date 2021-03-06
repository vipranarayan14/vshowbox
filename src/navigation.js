import { setSlideCount, setSlideURLandTitle } from './slide';

export const closeModal = globals => () => {

  document.documentElement.classList.remove('vsb-modal-open');
  document.body.classList.remove('vsb-modal-open');

  globals.vsbModal.classList.remove('open');

};

export const nextSlide = globals => () => {

  globals.slideIndex += 1;

  if (globals.slideIndex > globals.slideLastIndex) {

    globals.slideIndex = 0;

  }

  showSlide(globals)();

};

export const prevSlide = globals => () => {

  globals.slideIndex -= 1;

  if (globals.slideIndex < 1) {

    globals.slideIndex = globals.slideLastIndex;

  }

  showSlide(globals)();

};

export const showSlide = globals => (slideNo = 0) => {

  if (slideNo) {

    globals.slideIndex = slideNo - 1;

  }

  setSlideURLandTitle(globals);
  setSlideCount(globals);

  openModal(globals);

};

const openModal = globals => {

  document.documentElement.classList.add('vsb-modal-open');
  document.body.classList.add('vsb-modal-open');

  globals.vsbModal.classList.add('open');

};
