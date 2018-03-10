import { closeModal, nextSlide, prevSlide, showSlide } from './navigation';

const triggerNavigation = (trigger, globals, elseCallback = () => {}) => {

  const doNothing = () => {};

  const navigation = {

    'keyCode=27': closeModal,
    'keyCode=37': prevSlide,
    'keyCode=39': nextSlide,
    'targetClass=vsb-caption': doNothing,
    'targetClass=vsb-next': nextSlide,
    'targetClass=vsb-prev': prevSlide

  }[trigger];

  if (navigation) {

    navigation(globals)();

  } else {

    elseCallback();

  }

};

export const initEventListeners = globals => {

  globals.vsbPreviews.forEach((element, i) => {

    element.addEventListener('click', () => {

      globals.slideIndex = i;

      showSlide(globals)();

    });

  });

  globals.vsbModal.addEventListener('click', e => {

    const targetClass = e.target.classList;

    triggerNavigation(`targetClass=${targetClass[0]}`, globals, closeModal(globals));

  });

  document.addEventListener('keydown', e => {

    if (globals.vsbModal.classList.contains('open')) {

      triggerNavigation(`keyCode=${e.keyCode}`, globals);

    }

  });

};
